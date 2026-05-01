import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import styled, { keyframes } from 'styled-components'
import { useBusiness } from '../../../context/BusinessContext'

const float = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
`

const pulse = keyframes`
  0%, 100% { opacity: 0.4; }
  50% { opacity: 0.8; }
`

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%);
  padding: 20px;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 50%);
    animation: ${pulse} 8s ease-in-out infinite;
  }
`

const FloatingShape = styled.div`
  position: absolute;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: ${props => props.shape === 'circle' ? '50%' : '0'};
  top: ${props => props.top}%;
  left: ${props => props.left}%;
  animation: ${float} ${props => props.duration}s ease-in-out infinite;
  animation-delay: ${props => props.delay}s;

  @media (max-width: 768px) {
    display: none;
  }
`

const LoginCard = styled.div`
  background: white;
  border-radius: 24px;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.25);
  overflow: hidden;
  width: 100%;
  max-width: 900px;
  display: flex;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    flex-direction: column;
    max-width: 400px;
  }
`

const LeftPanel = styled.div`
  flex: 1;
  background: linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%);
  padding: 48px 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: white;
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 32px 24px;
    text-align: center;
    align-items: center;
  }

  .business-icon {
    font-size: 64px;
    margin-bottom: 24px;
    animation: ${float} 3s ease-in-out infinite;
  }

  h2 {
    font-size: 32px;
    font-weight: 700;
    margin: 0 0 16px 0;
  }

  p {
    font-size: 16px;
    opacity: 0.9;
    line-height: 1.6;
    margin: 0;
  }

  .features {
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    gap: 12px;

    @media (max-width: 768px) {
      display: none;
    }

    .feature {
      display: flex;
      align-items: center;
      gap: 12px;
      font-size: 14px;
      opacity: 0.9;

      span:first-child {
        font-size: 20px;
      }
    }
  }
`

const RightPanel = styled.div`
  flex: 1;
  padding: 48px 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: white;

  @media (max-width: 768px) {
    padding: 32px 24px;
  }
`

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 32px;

  .logo-icon {
    width: 48px;
    height: 48px;
    background: linear-gradient(135deg, #667eea, #764ba2);
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    font-weight: bold;
    color: white;
  }

  .logo-text {
    font-size: 24px;
    font-weight: 700;
    color: #1f2937;
  }
`

const TabsContainer = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 32px;
  background: #f3f4f6;
  padding: 4px;
  border-radius: 12px;
`

const Tab = styled.button`
  flex: 1;
  padding: 12px 16px;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  background: ${props => props.active ? 'white' : 'transparent'};
  color: ${props => props.active ? '#667eea' : '#6b7280'};
  box-shadow: ${props => props.active ? '0 2px 8px rgba(102, 126, 234, 0.2)' : 'none'};

  &:hover {
    color: #667eea;
  }
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  label {
    font-size: 14px;
    font-weight: 600;
    color: #374151;
  }

  input {
    padding: 14px 16px;
    border: 2px solid #e5e7eb;
    border-radius: 12px;
    font-size: 15px;
    transition: all 0.3s ease;

    &:focus {
      outline: none;
      border-color: #667eea;
      box-shadow: 0 0 0 4px rgba(102, 126, 234, 0.1);
    }

    &::placeholder {
      color: #9ca3af;
    }
  }

  .error {
    font-size: 12px;
    color: #ef4444;
  }
`

const PasswordInput = styled.div`
  position: relative;

  input {
    width: 100%;
    padding-right: 48px;
  }

  .toggle-password {
    position: absolute;
    right: 16px;
    top: 50%;
    transform: translateY(-50%);
    background: none;
    border: none;
    cursor: pointer;
    font-size: 18px;
    color: #6b7280;

    &:hover {
      color: #667eea;
    }
  }
`

const SubmitButton = styled.button`
  padding: 16px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 8px;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(102, 126, 234, 0.3);
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
    transform: none;
  }
`

const Divider = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin: 24px 0;

  &::before, &::after {
    content: '';
    flex: 1;
    height: 1px;
    background: #e5e7eb;
  }

  span {
    font-size: 14px;
    color: #9ca3af;
  }
`

const SocialButtons = styled.div`
  display: flex;
  gap: 12px;

  button {
    flex: 1;
    padding: 12px;
    border: 2px solid #e5e7eb;
    border-radius: 12px;
    background: white;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;

    &:hover {
      border-color: #667eea;
      background: #f9fafb;
    }
  }
`

const ForgotPassword = styled.button`
  background: none;
  border: none;
  color: #667eea;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  text-align: center;
  margin-top: 8px;

  &:hover {
    text-decoration: underline;
  }
`

const RegisterLink = styled.p`
  text-align: center;
  margin-top: 24px;
  font-size: 14px;
  color: #6b7280;

  a {
    color: #667eea;
    font-weight: 600;
    cursor: pointer;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`

const BackToLogin = styled.button`
  background: none;
  border: none;
  color: #667eea;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 24px;

  &:hover {
    text-decoration: underline;
  }
`

const SuccessMessage = styled.div`
  text-align: center;
  padding: 40px 20px;

  .icon {
    font-size: 64px;
    margin-bottom: 24px;
  }

  h3 {
    font-size: 24px;
    color: #1f2937;
    margin: 0 0 12px 0;
  }

  p {
    color: #6b7280;
    margin: 0 0 24px 0;
  }

  button {
    padding: 14px 32px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    border: none;
    border-radius: 12px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 20px rgba(102, 126, 234, 0.3);
    }
  }
`

const ClienteLogin = () => {
  const navigate = useNavigate()
  const { businessType, getBusinessComponents } = useBusiness()
  const business = getBusinessComponents(businessType)
  
  const [view, setView] = useState('login')
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    nombre: '',
    apellido: '',
    telefono: '',
    identificacion: ''
  })
  const [errors, setErrors] = useState({})

  const validateLogin = () => {
    const newErrors = {}
    if (!formData.email) newErrors.email = 'El email es requerido'
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email inválido'
    if (!formData.password) newErrors.password = 'La contraseña es requerida'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const validateRegister = () => {
    const newErrors = {}
    if (!formData.nombre) newErrors.nombre = 'El nombre es requerido'
    if (!formData.apellido) newErrors.apellido = 'El apellido es requerido'
    if (!formData.identificacion) newErrors.identificacion = 'La identificación es requerida'
    if (!formData.telefono) newErrors.telefono = 'El teléfono es requerido'
    if (!formData.email) newErrors.email = 'El email es requerido'
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email inválido'
    if (!formData.password) newErrors.password = 'La contraseña es requerida'
    else if (formData.password.length < 6) newErrors.password = 'Mínimo 6 caracteres'
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Las contraseñas no coinciden'
    }
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const validateForgot = () => {
    const newErrors = {}
    if (!formData.email) newErrors.email = 'El email es requerido'
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email inválido'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {
      await new Promise(resolve => setTimeout(resolve, 1500))

      if (view === 'login') {
        if (validateLogin()) {
          localStorage.setItem('cliente', JSON.stringify({
            nombre: formData.email.split('@')[0],
            email: formData.email
          }))
          toast.success('¡Bienvenido!')
          navigate('/cliente/dashboard')
        }
      } else if (view === 'register') {
        if (validateRegister()) {
          setView('success')
          toast.success('¡Registro exitoso!')
        }
      } else if (view === 'forgot') {
        if (validateForgot()) {
          toast.success('Se ha enviado un enlace de recuperación a tu email')
          setView('login')
        }
      }
    } catch (error) {
      toast.error('Ha ocurrido un error')
    } finally {
      setLoading(false)
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  if (view === 'success') {
    return (
      <Container>
        <LoginCard>
          <LeftPanel>
            <div className="business-icon">{business.icon}</div>
            <h2>{business.name}</h2>
            <p>Tu salud y bienestar es nuestra prioridad</p>
          </LeftPanel>
          <RightPanel>
            <SuccessMessage>
              <div className="icon">✅</div>
              <h3>¡Registro Exitoso!</h3>
              <p>Tu cuenta ha sido creada. Ahora puedes agendar tus citas y disfrutar de nuestros servicios.</p>
              <button onClick={() => navigate('/cliente/dashboard')}>
                Ir a mi Dashboard
              </button>
            </SuccessMessage>
          </RightPanel>
        </LoginCard>
      </Container>
    )
  }

  return (
    <Container>
      <FloatingShape size={100} shape="circle" top={10} left={10} duration={6} delay={0} />
      <FloatingShape size={80} shape="square" top={60} left={85} duration={8} delay={1} />
      <FloatingShape size={60} shape="circle" top={80} left={20} duration={7} delay={2} />
      <FloatingShape size={120} shape="square" top={20} left={70} duration={5} delay={0.5} />

      <LoginCard>
        <LeftPanel>
          <div className="business-icon">{business.icon}</div>
          <h2>{business.name}</h2>
          <p>Tu salud y bienestar es nuestra prioridad. Agenda tu cita ahora y experimenta un servicio de calidad.</p>
          
          <div className="features">
            <div className="feature">
              <span>📅</span>
              <span>Agenda tu cita en línea 24/7</span>
            </div>
            <div className="feature">
              <span>⭐</span>
              <span>Acceso a promociones exclusivas</span>
            </div>
            <div className="feature">
              <span>📱</span>
              <span>Notificaciones y recordatorios</span>
            </div>
            <div className="feature">
              <span>🛒</span>
              <span>Compra productos desde casa</span>
            </div>
          </div>
        </LeftPanel>

        <RightPanel>
          <Logo>
            <div className="logo-icon">TF</div>
            <div className="logo-text">TurnoFlow</div>
          </Logo>

          <TabsContainer>
            <Tab active={view === 'login'} onClick={() => setView('login')}>
              Iniciar Sesión
            </Tab>
            <Tab active={view === 'register'} onClick={() => setView('register')}>
              Registrarse
            </Tab>
          </TabsContainer>

          <Form onSubmit={handleSubmit}>
            {view === 'register' && (
              <>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                  <FormGroup>
                    <label>Nombre</label>
                    <input
                      type="text"
                      name="nombre"
                      placeholder="Tu nombre"
                      value={formData.nombre}
                      onChange={handleChange}
                    />
                    {errors.nombre && <span className="error">{errors.nombre}</span>}
                  </FormGroup>
                  <FormGroup>
                    <label>Apellido</label>
                    <input
                      type="text"
                      name="apellido"
                      placeholder="Tu apellido"
                      value={formData.apellido}
                      onChange={handleChange}
                    />
                    {errors.apellido && <span className="error">{errors.apellido}</span>}
                  </FormGroup>
                </div>
                <FormGroup>
                  <label>Identificación</label>
                  <input
                    type="text"
                    name="identificacion"
                    placeholder="Número de identificación"
                    value={formData.identificacion}
                    onChange={handleChange}
                  />
                  {errors.identificacion && <span className="error">{errors.identificacion}</span>}
                </FormGroup>
                <FormGroup>
                  <label>Teléfono</label>
                  <input
                    type="tel"
                    name="telefono"
                    placeholder="Número de teléfono"
                    value={formData.telefono}
                    onChange={handleChange}
                  />
                  {errors.telefono && <span className="error">{errors.telefono}</span>}
                </FormGroup>
              </>
            )}

            <FormGroup>
              <label>Email</label>
              <input
                type="email"
                name="email"
                placeholder="tu@email.com"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <span className="error">{errors.email}</span>}
            </FormGroup>

            {view !== 'forgot' && (
              <FormGroup>
                <label>Contraseña</label>
                <PasswordInput>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    placeholder="••••••••"
                    value={formData.password}
                    onChange={handleChange}
                  />
                  <button
                    type="button"
                    className="toggle-password"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? '🙈' : '👁️'}
                  </button>
                </PasswordInput>
                {errors.password && <span className="error">{errors.password}</span>}
              </FormGroup>
            )}

            {view === 'register' && (
              <FormGroup>
                <label>Confirmar Contraseña</label>
                <PasswordInput>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    name="confirmPassword"
                    placeholder="••••••••"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                  />
                </PasswordInput>
                {errors.confirmPassword && <span className="error">{errors.confirmPassword}</span>}
              </FormGroup>
            )}

            {view === 'login' && (
              <ForgotPassword type="button" onClick={() => setView('forgot')}>
                ¿Olvidaste tu contraseña?
              </ForgotPassword>
            )}

            {view === 'forgot' && (
              <BackToLogin type="button" onClick={() => setView('login')}>
                ← Volver a iniciar sesión
              </BackToLogin>
            )}

            <SubmitButton type="submit" disabled={loading}>
              {loading ? 'Cargando...' : 
                view === 'login' ? 'Iniciar Sesión' : 
                view === 'register' ? 'Crear Cuenta' : 
                'Recuperar Contraseña'
              }
            </SubmitButton>
          </Form>

          {view === 'login' && (
            <>
              <Divider>
                <span>o</span>
              </Divider>
              <SocialButtons>
                <button type="button">
                  <span>G</span> Google
                </button>
                <button type="button">
                  <span>f</span> Facebook
                </button>
              </SocialButtons>
            </>
          )}

          {view === 'forgot' ? (
            <RegisterLink>
              ¿No tienes cuenta? <a onClick={() => setView('register')}>Regístrate</a>
            </RegisterLink>
          ) : view === 'login' ? (
            <RegisterLink>
              ¿No tienes cuenta? <a onClick={() => setView('register')}>Regístrate gratis</a>
            </RegisterLink>
          ) : (
            <RegisterLink>
              ¿Ya tienes cuenta? <a onClick={() => setView('login')}>Inicia sesión</a>
            </RegisterLink>
          )}
        </RightPanel>
      </LoginCard>
    </Container>
  )
}

export default ClienteLogin