/**
 * api.js — Cliente HTTP basado en fetch nativo
 *
 * ESTRATEGIA DE AUTENTICACIÓN:
 *
 *   api.*                 → llamadas de TENANT
 *     - Usa `credentials: 'include'` para que el navegador envíe
 *       automáticamente la cookie httpOnly `tf_access_token`
 *     - No toca localStorage para tokens
 *     - El refresco llama a POST /auth/refresh (renueva la cookie en servidor)
 *
 *   api.admin.*           → llamadas de SUPERADMIN
 *     - Usa `Authorization: Bearer` con token de localStorage ('sa_token')
 *     - El refresco envía sa_refresh_token en el body
 *
 * Uso:
 *   // Tenant
 *   const session = await api.post('/auth/login', { username, password })
 *   const data    = await api.get('/clients')
 *   await api.post('/auth/logout')
 *
 *   // Superadmin
 *   const session = await api.admin.post('/superadmin/auth/login', creds)
 *   const tenants = await api.admin.get('/superadmin/tenants')
 */

const BASE_URL = import.meta.env.VITE_API_URL ?? 'http://localhost:3001/api/v1'

const RESERVED_PLATFORM_HOSTS = new Set([
  'turnoflow.bitwia.com',
  'app.turnoflow.co',
  'turnoflow.co',
])

const detectTenantSubdomain = () => {
  if (typeof window === 'undefined') return null
  const hostname = window.location.hostname
  const parts = hostname.split('.')

  if (RESERVED_PLATFORM_HOSTS.has(hostname)) return null
  if (parts.length < 2 || hostname === 'localhost') return null
  if (parts.length >= 3) return parts[0]
  return null
}

const buildTenantHeaders = (headers = {}) => {
  const tenantSubdomain = detectTenantSubdomain()
  if (!tenantSubdomain) return headers

  return {
    ...headers,
    'X-Tenant-Subdomain': tenantSubdomain,
  }
}

// ═══════════════════════════════════════════════════════════════
// TENANT API — cookies httpOnly
// ═══════════════════════════════════════════════════════════════

/** Intenta renovar la cookie de acceso desde la cookie de refresh. */
const tryRefreshTenant = async () => {
  try {
    const res = await fetch(`${BASE_URL}/auth/refresh`, {
      method:      'POST',
      headers:     buildTenantHeaders(),
      credentials: 'include',   // envía la refresh cookie y recibe la nueva access cookie
    })
    return res.ok
  } catch {
    return false
  }
}

/** Función central para llamadas de tenant (con cookies). */
const tenantRequest = async (endpoint, options = {}, retry = false) => {
  const url = `${BASE_URL}${endpoint}`
  const res = await fetch(url, {
    ...options,
    headers: buildTenantHeaders(options.headers),
    credentials: 'include',
  })

  // 401 → intentar renovar cookie y reintentar UNA vez
  if (res.status === 401 && !retry) {
    const refreshed = await tryRefreshTenant()
    if (refreshed) return tenantRequest(endpoint, options, true)
    // Sin sesión válida → limpiar datos de localStorage y redirigir
    localStorage.removeItem('permissions')
    localStorage.removeItem('tenant')
    localStorage.removeItem('user')
    window.location.href = '/login'
    return
  }

  return parseResponse(res)
}

const api = {
  get:   (endpoint)        => tenantRequest(endpoint, { method: 'GET',   headers: { 'Content-Type': 'application/json' } }),
  post:  (endpoint, body)  => tenantRequest(endpoint, { method: 'POST',  headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) }),
  put:   (endpoint, body)  => tenantRequest(endpoint, { method: 'PUT',   headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) }),
  patch: (endpoint, body)  => tenantRequest(endpoint, { method: 'PATCH', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) }),
  delete:(endpoint)        => tenantRequest(endpoint, { method: 'DELETE', headers: { 'Content-Type': 'application/json' } }),
  upload:(endpoint, fd)    => tenantRequest(endpoint, { method: 'POST',  body: fd, credentials: 'include' }),
}

// ═══════════════════════════════════════════════════════════════
// SUPERADMIN API — Bearer token en localStorage
// ═══════════════════════════════════════════════════════════════

const getSaToken     = () => localStorage.getItem('sa_token')
const getSaRefresh   = () => localStorage.getItem('sa_refresh_token')
const setSaTokens    = ({ accessToken, refreshToken }) => {
  if (accessToken)  localStorage.setItem('sa_token', accessToken)
  if (refreshToken) localStorage.setItem('sa_refresh_token', refreshToken)
}
const clearSaAuth    = () => {
  localStorage.removeItem('sa_token')
  localStorage.removeItem('sa_refresh_token')
}

const buildAdminHeaders = () => {
  const headers = { 'Content-Type': 'application/json' }
  const token = getSaToken()
  if (token) headers['Authorization'] = `Bearer ${token}`
  return headers
}

const tryRefreshAdmin = async () => {
  const refreshToken = getSaRefresh()
  if (!refreshToken) return false
  try {
    const res = await fetch(`${BASE_URL}/superadmin/auth/refresh`, {
      method:  'POST',
      headers: { 'Content-Type': 'application/json' },
      body:    JSON.stringify({ refreshToken }),
    })
    if (!res.ok) return false
    const json = await res.json()
    setSaTokens(json.data)
    return true
  } catch {
    return false
  }
}

const adminRequest = async (endpoint, options = {}, retry = false) => {
  const url = `${BASE_URL}${endpoint}`
  const res = await fetch(url, options)

  if (res.status === 401 && !retry) {
    const refreshed = await tryRefreshAdmin()
    if (refreshed) {
      options.headers = { ...options.headers, Authorization: `Bearer ${getSaToken()}` }
      return adminRequest(endpoint, options, true)
    }
    clearSaAuth()
    window.location.href = '/login'
    return
  }

  return parseResponse(res)
}

api.admin = {
  get:      (endpoint)       => adminRequest(endpoint, { method: 'GET',    headers: buildAdminHeaders() }),
  post:     (endpoint, body) => adminRequest(endpoint, { method: 'POST',   headers: buildAdminHeaders(), body: JSON.stringify(body) }),
  put:      (endpoint, body) => adminRequest(endpoint, { method: 'PUT',    headers: buildAdminHeaders(), body: JSON.stringify(body) }),
  patch:    (endpoint, body) => adminRequest(endpoint, { method: 'PATCH',  headers: buildAdminHeaders(), body: JSON.stringify(body) }),
  delete:   (endpoint)       => adminRequest(endpoint, { method: 'DELETE', headers: buildAdminHeaders() }),

  // Helpers de sesión para superadmin
  getSaToken,
  setSaTokens,
  clearSaAuth,
}

// ═══════════════════════════════════════════════════════════════
// UTILIDADES COMPARTIDAS
// ═══════════════════════════════════════════════════════════════

/** Parsea la respuesta y lanza un error con el mensaje del backend si falla. */
function parseResponse(res) {
  return res.text().then((text) => {
    let json
    try { json = text ? JSON.parse(text) : null } catch { /* no-json */ }

    if (!res.ok) {
      const err = new Error(json?.message ?? `HTTP ${res.status}`)
      err.status  = res.status
      err.code    = json?.error
      err.details = json?.data
      throw err
    }

    return json?.data ?? json
  })
}

export default api

