import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { toast } from 'react-toastify'
import styled from 'styled-components'

const schema = yup.object({
  firstName: yup.string().required('Los nombres son requeridos'),
  lastName: yup.string().required('Los apellidos son requeridos'),
  identification: yup.string().matches(/^[0-9]+$/, 'Solo números').required('La identificación es requerida'),
  address: yup.string().required('La dirección es requerida'),
  phone: yup.string().matches(/^[0-9+\-\s()]+$/, 'Formato de teléfono inválido').required('El teléfono es requerido'),
  email: yup.string().email('Email inválido').required('El email es requerido')
})

const Container = styled.div`
  max-width: 800px;
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
    content: '👤';
    font-size: 24px;
  }
`

const FormGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-bottom: 24px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
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

  &[type="number"] {
    -moz-appearance: textfield;
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }
`

const TextArea = styled.textarea`
  padding: 12px 16px;
  border: 2px solid #e5e7eb;
  border-radius: 8px;
  font-size: 16px;
  min-height: 80px;
  resize: vertical;
  transition: all 0.3s ease;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(5px);

  &:focus {
    outline: none;
    border-color: #667eea;
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
    transform: translateY(-1px);
  }
`

const FullWidthGroup = styled(FormGroup)`
  grid-column: 1 / -1;
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

const GeneralInfoTab = () => {
  const [loading, setLoading] = useState(false)

  const { register, handleSubmit, setValue, watch, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      firstName: '',
      lastName: '',
      identification: '',
      address: '',
      phone: '',
      email: ''
    }
  })

  // Función para capitalizar nombres
  const capitalizeWords = (value) => {
    return value.replace(/\b\w/g, l => l.toUpperCase())
  }

  const handleNameChange = (field, value) => {
    const capitalized = capitalizeWords(value)
    setValue(field, capitalized)
  }

  const onSubmit = async (data) => {
    setLoading(true)
    try {
      console.log('Datos de usuario:', data)
      await new Promise(resolve => setTimeout(resolve, 1000))
      toast.success('Información general guardada exitosamente')
    } catch (error) {
      toast.error('Error al guardar la información')
    } finally {
      setLoading(false)
    }
  }

  const handleReset = () => {
    // Reset form
    setValue('firstName', '')
    setValue('lastName', '')
    setValue('identification', '')
    setValue('address', '')
    setValue('phone', '')
    setValue('email', '')
  }

  return (
    <Container>
      <FormContainer>
        <SectionTitle>Información General del Usuario</SectionTitle>

        <form onSubmit={handleSubmit(onSubmit)}>
          <FormGrid>
            <FormGroup>
              <Label>Nombres</Label>
              <Input
                type="text"
                placeholder="Ej: Juan Carlos"
                {...register('firstName')}
                onChange={(e) => handleNameChange('firstName', e.target.value)}
              />
              {errors.firstName && <span style={{color: 'red', fontSize: '12px'}}>{errors.firstName.message}</span>}
            </FormGroup>

            <FormGroup>
              <Label>Apellidos</Label>
              <Input
                type="text"
                placeholder="Ej: Pérez López"
                {...register('lastName')}
                onChange={(e) => handleNameChange('lastName', e.target.value)}
              />
              {errors.lastName && <span style={{color: 'red', fontSize: '12px'}}>{errors.lastName.message}</span>}
            </FormGroup>

            <FormGroup>
              <Label>Identificación</Label>
              <Input
                type="text"
                placeholder="Ej: 1234567890"
                {...register('identification')}
                maxLength="20"
              />
              {errors.identification && <span style={{color: 'red', fontSize: '12px'}}>{errors.identification.message}</span>}
            </FormGroup>

            <FormGroup>
              <Label>Teléfono</Label>
              <Input
                type="text"
                placeholder="Ej: +57 300 123 4567"
                {...register('phone')}
              />
              {errors.phone && <span style={{color: 'red', fontSize: '12px'}}>{errors.phone.message}</span>}
            </FormGroup>

            <FormGroup>
              <Label>Email</Label>
              <Input
                type="email"
                placeholder="Ej: usuario@empresa.com"
                {...register('email')}
              />
              {errors.email && <span style={{color: 'red', fontSize: '12px'}}>{errors.email.message}</span>}
            </FormGroup>

            <FullWidthGroup>
              <Label>Dirección</Label>
              <TextArea
                placeholder="Dirección completa del usuario"
                {...register('address')}
              />
              {errors.address && <span style={{color: 'red', fontSize: '12px'}}>{errors.address.message}</span>}
            </FullWidthGroup>
          </FormGrid>

          <ActionButtons>
            <Button type="button" className="secondary" onClick={handleReset}>
              Limpiar
            </Button>
            <Button type="submit" className="primary" disabled={loading}>
              {loading ? 'Guardando...' : 'Guardar Información'}
            </Button>
          </ActionButtons>
        </form>
      </FormContainer>
    </Container>
  )
}

export default GeneralInfoTab