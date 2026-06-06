/**
 * AuthContext — estado global de sesión para TurnoFlow
 *
 * Expone:
 *   user          — datos básicos del usuario autenticado (id, nombre, rol)
 *   permissions   — mapa de permisos { componente: { acción: bool } }
 *   tenant        — config del negocio (id, nombre, plan, subdominio)
 *   isSuperAdmin  — true si la sesión es de tipo landlord
 *   isLoading     — true mientras se restaura la sesión al cargar la app
 *   login(data)   — guarda la sesión recibida del API (ya fue llamado el API)
 *   logout()      — llama al API de logout, limpia localStorage y redirige
 *   hasPermission(component, action) — helper para RBAC en componentes
 */

import { createContext, useContext, useState, useEffect, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import api from '../utils/api'

const AuthContext = createContext(null)

// ── Helpers localStorage ─────────────────────────────────────

const readJSON = (key) => {
  try { return JSON.parse(localStorage.getItem(key)) } catch { return null }
}

const clearSessionStorage = () => {
  localStorage.removeItem('user')
  localStorage.removeItem('permissions')
  localStorage.removeItem('tenant')
}

// ── Provider ─────────────────────────────────────────────────

export const AuthProvider = ({ children }) => {
  const [user,        setUser]        = useState(() => readJSON('user'))
  const [permissions, setPermissions] = useState(() => readJSON('permissions') ?? {})
  const [tenant,      setTenant]      = useState(() => readJSON('tenant'))
  const [isLoading,   setIsLoading]   = useState(true)

  const isSuperAdmin = user?.type === 'landlord' || Boolean(api.admin.getSaToken() && !tenant)

  // ── Restaurar sesión al cargar la app ───────────────────────
  useEffect(() => {
    const restore = async () => {
      // Si ya tenemos user en localStorage asumimos sesión válida;
      // llamamos /me igualmente para verificar que el token/cookie sigue activo.
      try {
        if (tenant) {
          // Tenant: cookie httpOnly → la envía el navegador automáticamente
          const session = await api.get('/auth/me')
          setUser(session.user)
          setPermissions(session.permissions ?? {})
          setTenant(session.tenant)
          localStorage.setItem('user',        JSON.stringify(session.user))
          localStorage.setItem('permissions', JSON.stringify(session.permissions ?? {}))
          localStorage.setItem('tenant',      JSON.stringify(session.tenant))
        } else if (api.admin.getSaToken()) {
          // Superadmin: Bearer header
          const session = await api.admin.get('/superadmin/auth/me')
          setUser(session.user)
          localStorage.setItem('user', JSON.stringify(session.user))
        } else {
          // Sin ninguna sesión guardada → limpiar por si hubiera basura
          clearSessionStorage()
          setUser(null)
          setPermissions({})
          setTenant(null)
        }
      } catch {
        // Token/cookie inválida o expirada → limpiar todo
        clearSessionStorage()
        api.admin.clearSaAuth()
        setUser(null)
        setPermissions({})
        setTenant(null)
      } finally {
        setIsLoading(false)
      }
    }
    restore()
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  // ── login — se llama DESPUÉS del api.post('/auth/login') exitoso ─────
  const login = useCallback((session, isAdmin = false) => {
    setUser(session.user)
    if (!isAdmin) {
      setPermissions(session.permissions ?? {})
      setTenant(session.tenant ?? null)
    } else {
      setPermissions({})
      setTenant(null)
    }
  }, [])

  // ── logout ──────────────────────────────────────────────────
  const logout = useCallback(async () => {
    try {
      if (tenant) {
        await api.post('/auth/logout')          // limpia cookies en el servidor
      } else {
        // superadmin no tiene endpoint de logout que borre cookies,
        // pero podemos invalidar el token en servidor si se implementa
      }
    } catch {
      // Continuar aunque falle el endpoint de logout
    } finally {
      clearSessionStorage()
      api.admin.clearSaAuth()
      setUser(null)
      setPermissions({})
      setTenant(null)
    }
    // Redirigir al login correcto
    window.location.href = '/login'
  }, [tenant])

  // ── hasPermission — para rutas y componentes ────────────────
  const hasPermission = useCallback((component, action = 'view') => {
    if (isSuperAdmin) return true           // superadmin puede todo
    return Boolean(permissions?.[component]?.[action])
  }, [permissions, isSuperAdmin])

  const value = {
    user,
    permissions,
    tenant,
    isSuperAdmin,
    isLoading,
    login,
    logout,
    hasPermission,
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

// ── Hook ─────────────────────────────────────────────────────

export const useAuth = () => {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth debe usarse dentro de <AuthProvider>')
  return ctx
}

export default AuthContext
