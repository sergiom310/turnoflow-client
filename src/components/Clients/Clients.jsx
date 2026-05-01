import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { toast } from 'react-toastify'
import styled from 'styled-components'
import { useBusiness } from '../../context/BusinessContext'
import DynamicField from '../common/DynamicField'

const ClientsContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  padding: 20px;
`

const ClientsCard = styled.div`
  background: white;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  max-width: 1000px;
  margin: 0 auto;
`

const Header = styled.div`
  background: linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%);
  color: white;
  padding: 24px;
  text-align: center;

  h1 {
    margin: 0;
    font-size: 28px;
    font-weight: 700;
  }

  p {
    margin: 8px 0 0 0;
    opacity: 0.9;
    font-size: 16px;
  }
`

const Content = styled.div`
  padding: 32px;

  @media (max-width: 768px) {
    padding: 16px;
  }
`

const FormContainer = styled.div`
  background: white;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  margin-bottom: 24px;
`

const SectionTitle = styled.h3`
  margin: 0 0 24px 0;
  color: #1f2937;
  font-size: 20px;
  display: flex;
  align-items: center;
  gap: 12px;

  &::before {
    content: '👥';
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

const ClientsList = styled.div`
  background: white;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`

const ListTitle = styled.h3`
  margin: 0 0 20px 0;
  color: #1f2937;
  font-size: 20px;
  display: flex;
  align-items: center;
  gap: 12px;

  &::before {
    content: '📋';
    font-size: 24px;
  }
`

const ClientItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  background: #f8f9fa;
  border-radius: 8px;
  margin-bottom: 12px;
  transition: all 0.3s ease;

  &:hover {
    background: #e9ecef;
    transform: translateY(-1px);
  }

  .client-info {
    display: flex;
    align-items: center;
    gap: 16px;

    .avatar {
      width: 48px;
      height: 48px;
      border-radius: 50%;
      background: #667eea;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-weight: 600;
      font-size: 18px;
    }

    .details {
      h4 {
        margin: 0 0 4px 0;
        font-size: 16px;
        color: #1f2937;
      }

      p {
        margin: 0;
        font-size: 14px;
        color: #6b7280;
      }
    }
  }

  .actions {
    display: flex;
    gap: 8px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;

    .actions {
      width: 100%;
      justify-content: flex-end;
    }
  }
`

const ActionButton = styled.button`
  padding: 6px 12px;
  border: none;
  border-radius: 6px;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &.edit {
    background: #ffc107;
    color: #212529;

    &:hover {
      background: #e0a800;
    }
  }

  &.delete {
    background: #dc3545;
    color: white;

    &:hover {
      background: #c82333;
    }
  }
`

const CLIENTS_STORAGE_KEY = 'turnoflow_clientes'

const DEFAULT_CLIENTS = [
  { id: 1, firstName: 'María', lastName: 'García López', identification: '1234567890', phone: '+57 300 123 4567', email: 'maria.garcia@email.com', address: 'Calle 123 #45-67, Bogotá' },
  { id: 2, firstName: 'Carlos', lastName: 'Rodríguez', identification: '0987654321', phone: '+57 301 987 6543', email: 'carlos.rodriguez@email.com', address: 'Carrera 45 #12-34, Medellín' },
  { id: 3, firstName: 'Ana', lastName: 'Martínez', identification: '1122334455', phone: '+57 310 555 6677', email: 'ana.martinez@email.com', address: 'Av. Siempre Viva 742, Cali' },
  { id: 4, firstName: 'Pedro', lastName: 'Gómez', identification: '5544332211', phone: '+57 320 888 9900', email: 'pedro.gomez@email.com', address: 'Cra 8 #23-45, Barranquilla' }
]

const loadClients = () => {
  try {
    const saved = localStorage.getItem(CLIENTS_STORAGE_KEY)
    return saved ? JSON.parse(saved) : DEFAULT_CLIENTS
  } catch { return DEFAULT_CLIENTS }
}

const Clients = () => {
  const { labels, clientExtraFields } = useBusiness()
  const [loading, setLoading] = useState(false)
  const [clients, setClients] = useState(loadClients)

  // Persistir clientes
  useEffect(() => {
    localStorage.setItem(CLIENTS_STORAGE_KEY, JSON.stringify(clients))
  }, [clients])

  const schema = yup.object({
    firstName: yup.string().required('Los nombres son requeridos'),
    lastName: yup.string().required('Los apellidos son requeridos'),
    identification: yup.string().matches(/^[0-9]+$/, 'Solo números').required('La identificación es requerida'),
    phone: yup.string().matches(/^[0-9+\-\s()]+$/, 'Formato de teléfono inválido').required('El teléfono es requerido'),
    email: yup.string().email('Email inválido').required('El email es requerido'),
    address: yup.string().required('La dirección es requerida')
  })

  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  })

  const onSubmit = async (data) => {
    setLoading(true)
    try {
      // Simular creación de cliente
      await new Promise(resolve => setTimeout(resolve, 1000))

      const newClient = {
        id: clients.length + 1,
        ...data
      }

      setClients(prev => [...prev, newClient])
      reset()
      toast.success('Cliente registrado exitosamente')
    } catch (error) {
      toast.error('Error al registrar el cliente')
    } finally {
      setLoading(false)
    }
  }

  const handleEdit = (client) => {
    // Aquí iría la lógica de edición
    toast.info('Funcionalidad de edición próximamente')
  }

  const handleDelete = async (clientId) => {
    if (!window.confirm('¿Está seguro de que desea eliminar este cliente?')) return

    setLoading(true)
    try {
      await new Promise(resolve => setTimeout(resolve, 500))
      setClients(prev => prev.filter(client => client.id !== clientId))
      toast.success('Cliente eliminado exitosamente')
    } catch (error) {
      toast.error('Error al eliminar el cliente')
    } finally {
      setLoading(false)
    }
  }

  return (
    <ClientsContainer>
      <ClientsCard>
        <Header>
          <h1>Gestión de {labels.clients}</h1>
          <p>Registra y administra los {labels.clients.toLowerCase()} de tu negocio</p>
        </Header>

        <Content>
          <FormContainer>
            <SectionTitle>Registrar Nuevo {labels.client}</SectionTitle>

            <form onSubmit={handleSubmit(onSubmit)}>
              <FormGrid>
                <FormGroup>
                  <Label>Nombres</Label>
                  <Input
                    type="text"
                    placeholder="Ej: María José"
                    {...register('firstName')}
                  />
                  {errors.firstName && <span style={{color: 'red', fontSize: '12px'}}>{errors.firstName.message}</span>}
                </FormGroup>

                <FormGroup>
                  <Label>Apellidos</Label>
                  <Input
                    type="text"
                    placeholder="Ej: García López"
                    {...register('lastName')}
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
                    placeholder="Ej: cliente@email.com"
                    {...register('email')}
                  />
                  {errors.email && <span style={{color: 'red', fontSize: '12px'}}>{errors.email.message}</span>}
                </FormGroup>

                <FullWidthGroup>
                  <Label>Dirección</Label>
                  <TextArea
                    placeholder="Dirección completa del cliente"
                    {...register('address')}
                  />
                  {errors.address && <span style={{color: 'red', fontSize: '12px'}}>{errors.address.message}</span>}
                </FullWidthGroup>

                {/* Campos extra según el subtipo de negocio */}
                {clientExtraFields.map((field) => (
                  <DynamicField
                    key={field.id}
                    field={field}
                    register={register}
                    errors={errors}
                  />
                ))}
              </FormGrid>

              <ActionButtons>
                <Button type="button" className="secondary" onClick={() => reset()}>
                  Limpiar
                </Button>
                <Button type="submit" className="primary" disabled={loading}>
                  {loading ? 'Registrando...' : 'Registrar Cliente'}
                </Button>
              </ActionButtons>
            </form>
          </FormContainer>

          <ClientsList>
            <ListTitle>{labels.clients} Registrados</ListTitle>

            {clients.map(client => (
              <ClientItem key={client.id}>
                <div className="client-info">
                  <div className="avatar">
                    {client.firstName.charAt(0)}{client.lastName.charAt(0)}
                  </div>
                  <div className="details">
                    <h4>{client.firstName} {client.lastName}</h4>
                    <p>{client.email} • {client.phone}</p>
                  </div>
                </div>
                <div className="actions">
                  <ActionButton
                    className="edit"
                    onClick={() => handleEdit(client)}
                    disabled={loading}
                  >
                    Editar
                  </ActionButton>
                  <ActionButton
                    className="delete"
                    onClick={() => handleDelete(client.id)}
                    disabled={loading}
                  >
                    Eliminar
                  </ActionButton>
                </div>
              </ClientItem>
            ))}

            {clients.length === 0 && (
              <div style={{textAlign: 'center', padding: '40px', color: '#6b7280'}}>
                <div style={{fontSize: '48px', marginBottom: '16px'}}>👥</div>
                <p>No hay {labels.clients.toLowerCase()} registrados aún</p>
              </div>
            )}
          </ClientsList>
        </Content>
      </ClientsCard>
    </ClientsContainer>
  )
}

export default Clients