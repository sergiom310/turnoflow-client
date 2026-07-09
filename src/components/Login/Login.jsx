import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { toast } from 'react-toastify'
import styled from 'styled-components'
import api from '../../utils/api'
import { useAuth } from '../../context/AuthContext'

// ── Detecta si el visitante llega desde un subdominio de tenant ──────────
// Dev:  cliente1.turnoflow.local:5173 → isTenant = true
// Dev:  localhost:5173               → isTenant = false (superadmin)
// Prod: cliente1.turnoflow.co        → isTenant = true
// Prod: app.turnoflow.co             → isTenant = false (superadmin)
// Dominio raíz de la plataforma. Se define por entorno:
//   Probeta:    VITE_PLATFORM_DOMAIN=turnoflow.probeta.dev
//   Producción: VITE_PLATFORM_DOMAIN=turnoflow.com
const PLATFORM_DOMAIN = import.meta.env.VITE_PLATFORM_DOMAIN || 'turnoflow.co'

const detectSubdomain = () => {
  const hostname = window.location.hostname
  if (hostname === 'localhost') return null
  // El dominio raíz de la plataforma nunca es un tenant
  if (hostname === PLATFORM_DOMAIN) return null
  // Un subdominio directo del dominio raíz sí es un tenant
  // ej: cliente1.turnoflow.probeta.dev → 'cliente1'
  if (hostname.endsWith(`.${PLATFORM_DOMAIN}`)) {
    const sub = hostname.slice(0, -(PLATFORM_DOMAIN.length + 1))
    if (sub && !sub.includes('.')) return sub
  }
  return null
}

const subdomain = detectSubdomain()
const isTenant  = subdomain !== null

// Aplica paleta de colores a las CSS vars globales.
// Acepta tanto objeto como string JSON (el backend guarda JSON serializado).
const applyThemeColors = (colors) => {
  if (!colors) return
  const parsed = typeof colors === 'string' ? JSON.parse(colors) : colors
  if (!parsed) return
  const hexToRgb = h => { const r = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(h); return r ? `${parseInt(r[1],16)},${parseInt(r[2],16)},${parseInt(r[3],16)}` : '0,0,0' }
  const root = document.documentElement
  if (parsed.primary)   { root.style.setProperty('--primary-color',   parsed.primary);   root.style.setProperty('--primary-rgb',   hexToRgb(parsed.primary)) }
  if (parsed.secondary) { root.style.setProperty('--secondary-color', parsed.secondary); root.style.setProperty('--secondary-rgb', hexToRgb(parsed.secondary)) }
  if (parsed.accent)    { root.style.setProperty('--accent-color',    parsed.accent);    root.style.setProperty('--accent-rgb',    hexToRgb(parsed.accent)) }
}

// ── Esquema de validación ────────────────────────────────────────────────
const schema = yup.object({
  username: yup.string().required('El usuario o email es requerido'),
  password: yup.string().min(6, 'La contraseña debe tener al menos 6 caracteres').required('La contraseña es requerida')
})

const LoginContainer = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: linear-gradient(45deg, transparent 30%, rgba(255, 255, 255, 0.15) 50%, transparent 70%);
    animation: shimmer 3s infinite;
  }

  @keyframes shimmer {
    0% { transform: translateX(-100%) translateY(-100%) rotate(45deg); }
    100% { transform: translateX(100%) translateY(100%) rotate(45deg); }
  }
`

const LoginCard = styled.div`
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 40px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
  position: relative;
  z-index: 1;
  animation: fadeInUp 0.8s ease-out;

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (max-width: 480px) {
    margin: 20px;
    padding: 30px 20px;
  }
`

const Logo = styled.div`
  text-align: center;
  margin-bottom: 30px;

  h1 {
    font-size: 32px;
    font-weight: 700;
    background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: 8px;
  }

  p {
    color: #666;
    font-size: 14px;
  }
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`

const FormGroup = styled.div`
  position: relative;
`

const Input = styled.input`
  width: 100%;
  padding: 16px 20px;
  border: 2px solid #e1e5e9;
  border-radius: 12px;
  font-size: 16px;
  transition: all 0.3s ease;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(5px);

  &:focus {
    outline: none;
    border-color: var(--primary-color);
    box-shadow: 0 0 0 3px rgba(var(--primary-rgb), 0.1);
    transform: translateY(-2px);
  }

  &::placeholder {
    color: #999;
  }
`

const Button = styled.button`
  width: 100%;
  padding: 16px;
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  color: white;
  border: none;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 25px rgba(var(--primary-rgb), 0.3);
  }

  &:active {
    transform: translateY(0);
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
    transform: none;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: left 0.5s;
  }

  &:hover::before {
    left: 100%;
  }
`

const Links = styled.div`
  text-align: center;
  margin-top: 20px;

  a {
    color: var(--primary-color);
    text-decoration: none;
    font-size: 14px;
    transition: color 0.3s ease;

    &:hover {
      color: var(--secondary-color);
      text-decoration: underline;
    }
  }
`

const PWABanner = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.8);
  color: white;
  padding: 16px;
  text-align: center;
  transform: translateY(100%);
  transition: transform 0.3s ease;
  z-index: 1000;

  &.visible {
    transform: translateY(0);
  }

  button {
    background: #4CAF50;
    color: white;
    border: none;
    padding: 8px 16px;
    border-radius: 6px;
    margin-left: 12px;
    cursor: pointer;
  }
`

const Login = () => {
  const [loading,       setLoading]       = useState(false)
  const [showPWABanner, setShowPWABanner] = useState(false)
  const [tenantBrand,   setTenantBrand]   = useState(null) // { name, logo_url, theme_colors, default_colors }
  const navigate  = useNavigate()
  const { login } = useAuth()

  // Cargar tema del tenant si estamos en un subdominio.
  // Usamos fetch directo (sin cookie logic) porque /theme es público.
  useEffect(() => {
    if (!isTenant) return
    const base = import.meta.env.VITE_API_URL ?? '/api/v1'
    fetch(`${base}/theme`, {
      credentials: 'omit',
      headers: { 'X-Tenant-Subdomain': subdomain },
    })
      .then(r => r.ok ? r.json() : null)
      .then(json => {
        if (!json) return
        const brand = json?.data ?? json
        setTenantBrand(brand)
        applyThemeColors(brand.theme_colors || brand.default_colors)
      })
      .catch(() => {})
  }, [])

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  })

  const onSubmit = async ({ username, password }) => {
    setLoading(true)
    try {
      if (isTenant) {
        // ── Login de tenant ────────────────────────────────────────────
        const session = await api.post('/auth/login', { username, password })
        // Cookie httpOnly seteada por servidor. Guardamos solo datos de UI:
        localStorage.setItem('user',        JSON.stringify(session.user))
        localStorage.setItem('permissions', JSON.stringify(session.permissions))
        localStorage.setItem('tenant',      JSON.stringify(session.tenant))
        // Aplicar colores del tenant ANTES de navegar para que el dashboard
        // arranque con la paleta correcta (BusinessContext no re-ejecuta su useEffect)
        applyThemeColors(session.tenant?.theme_colors || session.tenant?.default_colors)
        login(session, false)
        toast.success(`¡Bienvenido, ${session.user.first_name ?? username}!`)
        navigate('/dashboard')
      } else {
        // ── Login de superadmin ────────────────────────────────────────
        const session = await api.admin.post('/superadmin/auth/login', { username, password })
        api.admin.setSaTokens({ accessToken: session.accessToken, refreshToken: session.refreshToken })
        localStorage.setItem('user', JSON.stringify(session.user))
        login(session, true)
        toast.success(`¡Bienvenido, ${session.user.first_name ?? username}!`)
        navigate('/dashboard')
      }
    } catch (error) {
      if (error.code === 'INVALID_CREDENTIALS') {
        toast.error('Usuario o contraseña incorrectos')
      } else if (error.code === 'TENANT_NOT_FOUND') {
        toast.error('Negocio no encontrado o inactivo')
      } else {
        toast.error(error.message ?? 'Error al iniciar sesión')
      }
    } finally {
      setLoading(false)
    }
  }

  // Detectar si es PWA y mostrar banner de instalación
  useState(() => {
    if ('serviceWorker' in navigator && window.matchMedia('(display-mode: standalone)').matches === false) {
      setTimeout(() => setShowPWABanner(true), 3000)
    }
  })

  const handleInstallPWA = () => {
    setShowPWABanner(false)
    toast.info('Instalación iniciada')
  }

  return (
    <>
      <LoginContainer>
        <LoginCard>
          <Logo>
            {isTenant && tenantBrand?.logo_url
              ? <img src={tenantBrand.logo_url} alt="logo" style={{ height: 64, objectFit: 'contain', marginBottom: 8 }} />
              : <h1>{isTenant && tenantBrand?.name ? tenantBrand.name : 'TurnoFlow'}</h1>
            }
            <p>{isTenant ? 'Bienvenido, inicia sesión' : 'Sistema de Apartado de Turnos'}</p>
          </Logo>

          <Form onSubmit={handleSubmit(onSubmit)}>
            <FormGroup>
              <Input
                type="text"
                placeholder="Usuario o email"
                autoComplete="username"
                {...register('username')}
                disabled={loading}
              />
              {errors.username && <span style={{color: 'red', fontSize: '12px'}}>{errors.username.message}</span>}
            </FormGroup>

            <FormGroup>
              <Input
                type="password"
                placeholder="Contraseña"
                {...register('password')}
                disabled={loading}
              />
              {errors.password && <span style={{color: 'red', fontSize: '12px'}}>{errors.password.message}</span>}
            </FormGroup>

            <Button type="submit" disabled={loading}>
              {loading ? 'Iniciando sesión...' : 'Iniciar Sesión'}
            </Button>
          </Form>

          <Links>
            <a href="#forgot">¿Olvidaste tu contraseña?</a>
          </Links>
        </LoginCard>
      </LoginContainer>

      <PWABanner className={showPWABanner ? 'visible' : ''}>
        <span>Instala TurnoFlow en tu dispositivo para una mejor experiencia</span>
        <button onClick={handleInstallPWA}>Instalar</button>
      </PWABanner>
    </>
  )
}

export default Login