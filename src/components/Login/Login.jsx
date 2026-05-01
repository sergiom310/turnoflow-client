import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { toast } from 'react-toastify'
import styled from 'styled-components'

// Esquema de validación
const schema = yup.object({
  username: yup.string().required('El usuario es requerido'),
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
  const [loading, setLoading] = useState(false)
  const [showPWABanner, setShowPWABanner] = useState(false)
  const navigate = useNavigate()

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  })

  const onSubmit = async (data) => {
    setLoading(true)
    try {
      // Aquí irá la lógica de autenticación con el backend
      // Por ahora, simular login exitoso
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      // Simular respuesta exitosa
      localStorage.setItem('token', 'fake-jwt-token')
      localStorage.setItem('user', JSON.stringify({ username: data.username, role: 'admin' }))
      
      toast.success('¡Bienvenido a TurnoFlow!')
      navigate('/dashboard')
    } catch (error) {
      toast.error('Error al iniciar sesión. Verifica tus credenciales.')
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
    // Lógica para instalar PWA
    setShowPWABanner(false)
    toast.info('Instalación iniciada')
  }

  return (
    <>
      <LoginContainer>
        <LoginCard>
          <Logo>
            <h1>TurnoFlow</h1>
            <p>Sistema de Apartado de Turnos</p>
          </Logo>

          <Form onSubmit={handleSubmit(onSubmit)}>
            <FormGroup>
              <Input
                type="text"
                placeholder="Usuario"
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