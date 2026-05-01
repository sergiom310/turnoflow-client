import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { toast } from 'react-toastify'
import styled from 'styled-components'

const schema = yup.object({
  username: yup.string().min(3, 'Mínimo 3 caracteres').required('El usuario es requerido'),
  password: yup.string().min(6, 'Mínimo 6 caracteres').required('La contraseña es requerida'),
  confirmPassword: yup.string().oneOf([yup.ref('password')], 'Las contraseñas no coinciden').required('Confirme la contraseña'),
  role: yup.string().required('El rol es requerido')
})

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
`

const FormContainer = styled.div`
  background: white;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`

const SectionTitle = styled.h3`
  margin: 0 0 24px 0;
  color: #1f2937;
  font-size: 20px;
  display: flex;
  align-items: center;
  gap: 12px;

  &::before {
    content: '🔐';
    font-size: 24px;
  }
`

const FormGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  margin-bottom: 24px;
`

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
`

const Label = styled.label`
  font-weight: 600;
  color: #374151;
  margin-bottom: 8px;
  font-size: 14px;
`

const Input = styled.input`
  padding: 12px 16px;
  border: 2px solid #e5e7eb;
  border-radius: 8px;
  font-size: 16px;
  transition: all 0.3s ease;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(5px);

  &:focus {
    outline: none;
    border-color: #667eea;
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
    transform: translateY(-1px);
  }

  &::placeholder {
    color: #9ca3af;
  }

  &[type="password"] {
    font-family: 'Courier New', monospace;
  }
`

const Select = styled.select`
  padding: 12px 16px;
  border: 2px solid #e5e7eb;
  border-radius: 8px;
  font-size: 16px;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(5px);
  cursor: pointer;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #667eea;
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
    transform: translateY(-1px);
  }
`

const PasswordStrength = styled.div`
  margin-top: 8px;
  display: flex;
  align-items: center;
  gap: 8px;
`

const StrengthBar = styled.div`
  flex: 1;
  height: 4px;
  background: #e5e7eb;
  border-radius: 2px;
  overflow: hidden;

  .fill {
    height: 100%;
    background: ${props => {
      switch (props.strength) {
        case 'weak': return '#ef4444'
        case 'medium': return '#f59e0b'
        case 'strong': return '#10b981'
        default: return '#e5e7eb'
      }
    }};
    width: ${props => {
      switch (props.strength) {
        case 'weak': return '33%'
        case 'medium': return '66%'
        case 'strong': return '100%'
        default: return '0%'
      }
    }};
    transition: all 0.3s ease;
  }
`

const StrengthText = styled.span`
  font-size: 12px;
  color: ${props => {
    switch (props.strength) {
      case 'weak': return '#ef4444'
      case 'medium': return '#f59e0b'
      case 'strong': return '#10b981'
      default: return '#6b7280'
    }
  }};
  font-weight: 600;
`

const SecurityTips = styled.div`
  background: #f8f9fa;
  border-radius: 8px;
  padding: 16px;
  margin-top: 16px;
  border-left: 4px solid #667eea;

  h4 {
    margin: 0 0 8px 0;
    color: #374151;
    font-size: 14px;
  }

  ul {
    margin: 0;
    padding-left: 16px;
    color: #6b7280;
    font-size: 12px;
    line-height: 1.4;
  }
`

const ActionButtons = styled.div`
  display: flex;
  gap: 12px;
  justify-content: flex-end;
  margin-top: 24px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

const Button = styled.button`
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &.primary {
    background: #667eea;
    color: white;

    &:hover {
      background: #5a67d8;
      transform: translateY(-1px);
      box-shadow: 0 5px 15px rgba(102, 126, 234, 0.3);
    }
  }

  &.secondary {
    background: #6c757d;
    color: white;

    &:hover {
      background: #5a6268;
      transform: translateY(-1px);
    }
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
    transform: none;
  }
`

const AccessTab = () => {
  const [loading, setLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)

  const { register, handleSubmit, watch, formState: { errors }, setValue } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      username: '',
      password: '',
      confirmPassword: '',
      role: ''
    }
  })

  const password = watch('password')

  // Función para evaluar la fortaleza de la contraseña
  const getPasswordStrength = (password) => {
    if (!password) return { strength: 'none', text: '' }

    let score = 0
    if (password.length >= 6) score++
    if (password.length >= 8) score++
    if (/[a-z]/.test(password)) score++
    if (/[A-Z]/.test(password)) score++
    if (/[0-9]/.test(password)) score++
    if (/[^A-Za-z0-9]/.test(password)) score++

    if (score <= 2) return { strength: 'weak', text: 'Débil' }
    if (score <= 4) return { strength: 'medium', text: 'Media' }
    return { strength: 'strong', text: 'Fuerte' }
  }

  const passwordStrength = getPasswordStrength(password)

  const onSubmit = async (data) => {
    setLoading(true)
    try {
      // Remover confirmPassword antes de enviar
      const { confirmPassword, ...userData } = data
      console.log('Datos de acceso:', userData)
      await new Promise(resolve => setTimeout(resolve, 1000))
      toast.success('Credenciales de acceso guardadas exitosamente')
    } catch (error) {
      toast.error('Error al guardar las credenciales')
    } finally {
      setLoading(false)
    }
  }

  const handleReset = () => {
    // Reset form
    setValue('username', '')
    setValue('password', '')
    setValue('confirmPassword', '')
    setValue('role', '')
  }

  const roles = [
    { value: 'admin', label: 'Administrador' },
    { value: 'auditor', label: 'Auditor' },
    { value: 'vendedor', label: 'Vendedor' },
    { value: 'cobrador', label: 'Cobrador' },
    { value: 'asesor', label: 'Asesor' },
    { value: 'empleado', label: 'Empleado' },
    { value: 'cliente', label: 'Cliente' }
  ]

  return (
    <Container>
      <FormContainer>
        <SectionTitle>Usuario de Acceso</SectionTitle>

        <form onSubmit={handleSubmit(onSubmit)}>
          <FormGrid>
            <FormGroup>
              <Label>Nombre de Usuario</Label>
              <Input
                type="text"
                placeholder="Ej: usuario123"
                {...register('username')}
                autoComplete="username"
              />
              {errors.username && <span style={{color: 'red', fontSize: '12px'}}>{errors.username.message}</span>}
            </FormGroup>

            <FormGroup>
              <Label>Rol del Usuario</Label>
              <Select {...register('role')}>
                <option value="">Seleccionar rol</option>
                {roles.map(role => (
                  <option key={role.value} value={role.value}>
                    {role.label}
                  </option>
                ))}
              </Select>
              {errors.role && <span style={{color: 'red', fontSize: '12px'}}>{errors.role.message}</span>}
            </FormGroup>

            <FormGroup>
              <Label>Contraseña</Label>
              <div style={{position: 'relative'}}>
                <Input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Mínimo 6 caracteres"
                  {...register('password')}
                  autoComplete="new-password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  style={{
                    position: 'absolute',
                    right: '12px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    color: '#6b7280',
                    fontSize: '14px'
                  }}
                >
                  {showPassword ? '🙈' : '👁️'}
                </button>
              </div>
              {password && (
                <PasswordStrength>
                  <StrengthBar strength={passwordStrength.strength}>
                    <div className="fill"></div>
                  </StrengthBar>
                  <StrengthText strength={passwordStrength.strength}>
                    {passwordStrength.text}
                  </StrengthText>
                </PasswordStrength>
              )}
              {errors.password && <span style={{color: 'red', fontSize: '12px'}}>{errors.password.message}</span>}
            </FormGroup>

            <FormGroup>
              <Label>Confirmar Contraseña</Label>
              <Input
                type="password"
                placeholder="Repita la contraseña"
                {...register('confirmPassword')}
                autoComplete="new-password"
              />
              {errors.confirmPassword && <span style={{color: 'red', fontSize: '12px'}}>{errors.confirmPassword.message}</span>}
            </FormGroup>
          </FormGrid>

          <SecurityTips>
            <h4>Recomendaciones de Seguridad</h4>
            <ul>
              <li>Use al menos 8 caracteres</li>
              <li>Incluya mayúsculas, minúsculas y números</li>
              <li>Use caracteres especiales para mayor seguridad</li>
              <li>No reutilice contraseñas de otros servicios</li>
              <li>Cambie la contraseña periódicamente</li>
            </ul>
          </SecurityTips>

          <ActionButtons>
            <Button type="button" className="secondary" onClick={handleReset}>
              Limpiar
            </Button>
            <Button type="submit" className="primary" disabled={loading}>
              {loading ? 'Guardando...' : 'Guardar Credenciales'}
            </Button>
          </ActionButtons>
        </form>
      </FormContainer>
    </Container>
  )
}

export default AccessTab