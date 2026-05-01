import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { toast } from 'react-toastify'
import styled from 'styled-components'
import { useBusiness } from '../../context/BusinessContext'
import DynamicField from '../common/DynamicField'

const AgendaContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  padding: 20px;
`

const AgendaCard = styled.div`
  background: white;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  max-width: 1400px;
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

const ControlsSection = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 24px;
  margin-bottom: 32px;
  align-items: start;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const FiltersGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 16px;
  align-items: end;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const FilterGroup = styled.div`
  label {
    display: block;
    font-weight: 600;
    color: #374151;
    font-size: 14px;
    margin-bottom: 6px;
  }
`

const Select = styled.select`
  width: 100%;
  padding: 10px 12px;
  border: 2px solid #e5e7eb;
  border-radius: 6px;
  font-size: 14px;
  background: white;
  cursor: pointer;

  &:focus {
    outline: none;
    border-color: #667eea;
  }
`

const DateInput = styled.input`
  width: 100%;
  padding: 10px 12px;
  border: 2px solid #e5e7eb;
  border-radius: 6px;
  font-size: 14px;

  &:focus {
    outline: none;
    border-color: #667eea;
  }
`

const FilterButton = styled.button`
  padding: 10px 20px;
  background: #667eea;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #5a67d8;
    transform: translateY(-1px);
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
    transform: none;
  }
`

const NewAppointmentButton = styled.button`
  padding: 14px 32px;
  background: linear-gradient(135deg, #10b981, #059669);
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: linear-gradient(135deg, #059669, #047857);
    transform: translateY(-2px);
    box-shadow: 0 10px 25px rgba(16, 185, 129, 0.3);
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`

const AppointmentsList = styled.div`
  background: white;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`

const ListHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;

  h3 {
    margin: 0;
    color: #1f2937;
    font-size: 20px;
  }

  .count {
    background: #667eea;
    color: white;
    padding: 4px 12px;
    border-radius: 20px;
    font-size: 12px;
    font-weight: 600;
  }
`

const AppointmentItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  background: #f8f9fa;
  border-radius: 12px;
  margin-bottom: 16px;
  transition: all 0.3s ease;

  &:hover {
    background: #e9ecef;
    transform: translateY(-1px);
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
  }
`

const AppointmentInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  flex: 1;

  @media (max-width: 768px) {
    width: 100%;
  }

  .appointment-icon {
    width: 50px;
    height: 50px;
    border-radius: 12px;
    background: ${props => {
      switch (props.status) {
        case 'confirmed': return '#10b981'
        case 'pending': return '#f59e0b'
        case 'completed': return '#6b7280'
        case 'cancelled': return '#ef4444'
        default: return '#667eea'
      }
    }};
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    color: white;
  }

  .appointment-details {
    h4 {
      margin: 0 0 4px 0;
      color: #1f2937;
      font-size: 16px;
      font-weight: 600;
    }

    p {
      margin: 0;
      color: #6b7280;
      font-size: 14px;
    }

    .client-name {
      color: #374151;
      font-weight: 500;
    }
  }
`

const AppointmentMeta = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 8px;

  @media (max-width: 768px) {
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
  }

  .time {
    font-size: 16px;
    font-weight: 600;
    color: #1f2937;
  }

  .status {
    padding: 4px 12px;
    border-radius: 20px;
    font-size: 12px;
    font-weight: 600;
    text-transform: uppercase;

    ${props => {
      switch (props.status) {
        case 'confirmed':
          return 'background: #d1fae5; color: #065f46;'
        case 'pending':
          return 'background: #fef3c7; color: #92400e;'
        case 'completed':
          return 'background: #e5e7eb; color: #374151;'
        case 'cancelled':
          return 'background: #fee2e2; color: #991b1b;'
        default:
          return 'background: #e0e7ff; color: #3730a3;'
      }
    }}
  }

  .actions {
    display: flex;
    gap: 8px;
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

  &.cancel {
    background: #dc3545;
    color: white;

    &:hover {
      background: #c82333;
    }
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 20px;
`

const ModalContent = styled.div`
  background: white;
  border-radius: 16px;
  padding: 32px;
  max-width: 600px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;

  @media (max-width: 768px) {
    padding: 20px;
  }
`

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;

  h2 {
    margin: 0;
    color: #1f2937;
    font-size: 24px;
  }

  .close {
    background: none;
    border: none;
    font-size: 24px;
    cursor: pointer;
    color: #6b7280;

    &:hover {
      color: #374151;
    }
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

  &:focus {
    outline: none;
    border-color: #667eea;
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
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

  &:focus {
    outline: none;
    border-color: #667eea;
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
  }
`

const ModalActions = styled.div`
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

const Agenda = () => {
  const { labels, appointmentExtraFields, defaultServices } = useBusiness()

  // Servicios del catálogo del subtipo actual (con fallback)
  const serviceOptions = defaultServices.length > 0
    ? defaultServices.map((s) => s.name)
    : ['Consulta general', 'Otro servicio']

  const [appointments, setAppointments] = useState([
    {
      id: 1,
      clientName: 'María García',
      service: 'Corte de cabello',
      date: '2024-01-15',
      time: '10:00',
      status: 'confirmed',
      notes: 'Cliente habitual'
    },
    {
      id: 2,
      clientName: 'Carlos Rodríguez',
      service: 'Tratamiento facial',
      date: '2024-01-15',
      time: '14:30',
      status: 'pending',
      notes: 'Primera visita'
    },
    {
      id: 3,
      clientName: 'Ana López',
      service: 'Manicure',
      date: '2024-01-15',
      time: '16:00',
      status: 'completed',
      notes: 'Servicio completado'
    },
    {
      id: 4,
      clientName: 'Juan Pérez',
      service: 'Pedicure',
      date: '2024-01-16',
      time: '09:00',
      status: 'cancelled',
      notes: 'Cancelado por cliente'
    }
  ])

  const [filteredAppointments, setFilteredAppointments] = useState(appointments)
  const [showNewAppointmentModal, setShowNewAppointmentModal] = useState(false)
  const [filters, setFilters] = useState({
    status: '',
    date: '',
    service: ''
  })

  const schema = yup.object({
    clientName: yup.string().required('El nombre del cliente es requerido'),
    service: yup.string().required('El servicio es requerido'),
    date: yup.string().required('La fecha es requerida'),
    time: yup.string().required('La hora es requerida'),
    notes: yup.string()
  })

  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  })

  useEffect(() => {
    filterAppointments()
  }, [filters, appointments])

  const filterAppointments = () => {
    let filtered = [...appointments]

    if (filters.status) {
      filtered = filtered.filter(apt => apt.status === filters.status)
    }

    if (filters.date) {
      filtered = filtered.filter(apt => apt.date === filters.date)
    }

    if (filters.service) {
      filtered = filtered.filter(apt => apt.service.toLowerCase().includes(filters.service.toLowerCase()))
    }

    setFilteredAppointments(filtered)
  }

  const handleFilterChange = (field, value) => {
    setFilters(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const onSubmitAppointment = async (data) => {
    try {
      const newAppointment = {
        id: appointments.length + 1,
        clientName: data.clientName,
        service: data.service,
        date: data.date,
        time: data.time,
        status: 'pending',
        notes: data.notes || ''
      }

      setAppointments(prev => [...prev, newAppointment])
      setShowNewAppointmentModal(false)
      reset()
      toast.success('Cita agendada exitosamente')
    } catch (error) {
      toast.error('Error al agendar la cita')
    }
  }

  const handleStatusChange = async (appointmentId, newStatus) => {
    try {
      setAppointments(prev =>
        prev.map(apt =>
          apt.id === appointmentId ? { ...apt, status: newStatus } : apt
        )
      )
      toast.success('Estado de la cita actualizado')
    } catch (error) {
      toast.error('Error al actualizar el estado')
    }
  }

  const getStatusIcon = (status) => {
    switch (status) {
      case 'confirmed': return '✅'
      case 'pending': return '⏳'
      case 'completed': return '✓'
      case 'cancelled': return '❌'
      default: return '📅'
    }
  }

  return (
    <AgendaContainer>
      <AgendaCard>
        <Header>
          <h1>Agenda de {labels.appointments ?? `${labels.appointment}s`}</h1>
          <p>Control y gestión del agendamiento de {labels.appointment.toLowerCase()}s</p>
        </Header>

        <Content>
          <ControlsSection>
            <FiltersGrid>
              <FilterGroup>
                <Label>Estado</Label>
                <Select
                  value={filters.status}
                  onChange={(e) => handleFilterChange('status', e.target.value)}
                >
                  <option value="">Todos los estados</option>
                  <option value="pending">Pendiente</option>
                  <option value="confirmed">Confirmada</option>
                  <option value="completed">Completada</option>
                  <option value="cancelled">Cancelada</option>
                </Select>
              </FilterGroup>

              <FilterGroup>
                <Label>Fecha</Label>
                <DateInput
                  type="date"
                  value={filters.date}
                  onChange={(e) => handleFilterChange('date', e.target.value)}
                />
              </FilterGroup>

              <FilterGroup>
                <Label>Servicio</Label>
                <Select
                  value={filters.service}
                  onChange={(e) => handleFilterChange('service', e.target.value)}
                >
                  <option value="">Todos los servicios</option>
                  {serviceOptions.map(service => (
                    <option key={service} value={service}>{service}</option>
                  ))}
                </Select>
              </FilterGroup>

              <FilterButton onClick={filterAppointments}>
                Aplicar Filtros
              </FilterButton>
            </FiltersGrid>

            <NewAppointmentButton onClick={() => setShowNewAppointmentModal(true)}>
              Nueva {labels.appointment}
            </NewAppointmentButton>
          </ControlsSection>

          <AppointmentsList>
            <ListHeader>
              <h3>{labels.appointment}s Agendadas</h3>
              <div className="count">{filteredAppointments.length} {labels.appointment.toLowerCase()}s</div>
            </ListHeader>

            {filteredAppointments.length === 0 ? (
              <div style={{textAlign: 'center', padding: '40px', color: '#6b7280'}}>
                <div style={{fontSize: '48px', marginBottom: '16px'}}>📅</div>
                <p>No hay {labels.appointment.toLowerCase()}s que coincidan con los filtros</p>
              </div>
            ) : (
              filteredAppointments.map(appointment => (
                <AppointmentItem key={appointment.id}>
                  <AppointmentInfo status={appointment.status}>
                    <div className="appointment-icon">
                      {getStatusIcon(appointment.status)}
                    </div>
                    <div className="appointment-details">
                      <h4>{appointment.service}</h4>
                      <p><span className="client-name">{appointment.clientName}</span></p>
                      {appointment.notes && <p>{appointment.notes}</p>}
                    </div>
                  </AppointmentInfo>

                  <AppointmentMeta status={appointment.status}>
                    <div className="time">
                      {appointment.time} - {new Date(appointment.date).toLocaleDateString('es-CO')}
                    </div>
                    <div className="status">{appointment.status}</div>
                    <div className="actions">
                      {appointment.status === 'pending' && (
                        <ActionButton
                          className="edit"
                          onClick={() => handleStatusChange(appointment.id, 'confirmed')}
                        >
                          Confirmar
                        </ActionButton>
                      )}
                      {appointment.status !== 'completed' && appointment.status !== 'cancelled' && (
                        <ActionButton
                          className="cancel"
                          onClick={() => handleStatusChange(appointment.id, 'cancelled')}
                        >
                          Cancelar
                        </ActionButton>
                      )}
                    </div>
                  </AppointmentMeta>
                </AppointmentItem>
              ))
            )}
          </AppointmentsList>
        </Content>
      </AgendaCard>

      {showNewAppointmentModal && (
        <Modal>
          <ModalContent>
            <ModalHeader>
              <h2>Nueva {labels.appointment}</h2>
              <button className="close" onClick={() => setShowNewAppointmentModal(false)}>
                ×
              </button>
            </ModalHeader>

            <form onSubmit={handleSubmit(onSubmitAppointment)}>
              <FormGrid>
                <FormGroup>
                  <Label>Nombre del {labels.client}</Label>
                  <Input
                    type="text"
                    placeholder={`Ej: María García`}
                    {...register('clientName')}
                  />
                  {errors.clientName && <span style={{color: 'red', fontSize: '12px'}}>{errors.clientName.message}</span>}
                </FormGroup>

                <FormGroup>
                  <Label>{labels.service}</Label>
                  <Select {...register('service')}>
                    <option value="">Seleccionar {labels.service.toLowerCase()}</option>
                    {serviceOptions.map(service => (
                      <option key={service} value={service}>{service}</option>
                    ))}
                  </Select>
                  {errors.service && <span style={{color: 'red', fontSize: '12px'}}>{errors.service.message}</span>}
                </FormGroup>

                <FormGroup>
                  <Label>Fecha</Label>
                  <Input
                    type="date"
                    {...register('date')}
                  />
                  {errors.date && <span style={{color: 'red', fontSize: '12px'}}>{errors.date.message}</span>}
                </FormGroup>

                <FormGroup>
                  <Label>Hora</Label>
                  <Input
                    type="time"
                    {...register('time')}
                  />
                  {errors.time && <span style={{color: 'red', fontSize: '12px'}}>{errors.time.message}</span>}
                </FormGroup>

                <FormGroup style={{gridColumn: '1 / -1'}}>
                  <Label>Notas (opcional)</Label>
                  <TextArea
                    placeholder="Información adicional sobre la cita..."
                    {...register('notes')}
                  />
                </FormGroup>

                {/* Campos extra según el subtipo de negocio */}
                {appointmentExtraFields.map((field) => (
                  <DynamicField
                    key={field.id}
                    field={field}
                    register={register}
                    errors={errors}
                  />
                ))}
              </FormGrid>

              <ModalActions>
                <Button
                  type="button"
                  className="secondary"
                  onClick={() => setShowNewAppointmentModal(false)}
                >
                  Cancelar
                </Button>
                <Button type="submit" className="primary">
                  Agendar {labels.appointment}
                </Button>
              </ModalActions>
            </form>
          </ModalContent>
        </Modal>
      )}
    </AgendaContainer>
  )
}

export default Agenda