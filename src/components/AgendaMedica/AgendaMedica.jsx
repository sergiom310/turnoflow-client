import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { toast } from 'react-toastify'
import styled from 'styled-components'

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
  grid-template-columns: 1fr auto auto auto;
  gap: 16px;
  margin-bottom: 32px;
  align-items: end;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 12px;
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

const ControlButton = styled.button`
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

  &.success {
    background: #10b981;
    color: white;

    &:hover {
      background: #059669;
      transform: translateY(-1px);
    }
  }

  &.danger {
    background: #ef4444;
    color: white;

    &:hover {
      background: #dc2626;
      transform: translateY(-1px);
    }
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
    transform: none;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`

const AppointmentsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
`

const AppointmentCard = styled.div`
  background: white;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  border-left: 4px solid ${props => {
    switch (props.status) {
      case 'confirmed': return '#10b981'
      case 'pending': return '#f59e0b'
      case 'completed': return '#6b7280'
      case 'cancelled': return '#ef4444'
      default: return '#667eea'
    }
  }};

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  }
`

const AppointmentHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;
  margin-bottom: 16px;

  .appointment-info {
    flex: 1;

    h3 {
      margin: 0 0 4px 0;
      color: #1f2937;
      font-size: 18px;
      font-weight: 600;
    }

    .patient-name {
      color: #374151;
      font-weight: 500;
      margin-bottom: 4px;
    }

    .service-type {
      color: #6b7280;
      font-size: 14px;
    }
  }

  .status-badge {
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
`

const AppointmentDetails = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 16px;
  margin-bottom: 16px;

  .detail-item {
    display: flex;
    flex-direction: column;

    .label {
      font-size: 12px;
      color: #9ca3af;
      font-weight: 600;
      text-transform: uppercase;
      margin-bottom: 4px;
    }

    .value {
      font-size: 14px;
      color: #374151;
      font-weight: 500;
    }
  }
`

const AppointmentActions = styled.div`
  display: flex;
  gap: 8px;
  justify-content: flex-end;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

const ActionButton = styled.button`
  padding: 8px 16px;
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

  &.complete {
    background: #10b981;
    color: white;

    &:hover {
      background: #059669;
    }
  }

  &.cancel {
    background: #dc3545;
    color: white;

    &:hover {
      background: #c82333;
    }
  }

  &.medical-record {
    background: #17a2b8;
    color: white;

    &:hover {
      background: #138496;
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
  max-width: 700px;
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

const Select = styled.select`
  padding: 12px 16px;
  border: 2px solid #e5e7eb;
  border-radius: 8px;
  font-size: 16px;
  background: white;
  cursor: pointer;
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

const AgendaMedica = () => {
  const [appointments, setAppointments] = useState([
    {
      id: 1,
      patientName: 'María García López',
      service: 'Consulta General',
      specialty: 'Medicina General',
      date: '2024-01-15',
      time: '09:00',
      status: 'confirmed',
      duration: 30,
      notes: 'Paciente con síntomas gripales',
      insurance: 'Sura',
      appointmentType: 'Presencial'
    },
    {
      id: 2,
      patientName: 'Carlos Rodríguez',
      service: 'Control Odontológico',
      specialty: 'Odontología',
      date: '2024-01-15',
      time: '10:30',
      status: 'pending',
      duration: 45,
      notes: 'Limpieza dental rutinaria',
      insurance: 'Nueva EPS',
      appointmentType: 'Presencial'
    },
    {
      id: 3,
      patientName: 'Ana López Martínez',
      service: 'Terapia Psicológica',
      specialty: 'Psicología',
      date: '2024-01-15',
      time: '14:00',
      status: 'confirmed',
      duration: 60,
      notes: 'Sesión de seguimiento mensual',
      insurance: 'Sanitas',
      appointmentType: 'Virtual'
    },
    {
      id: 4,
      patientName: 'Juan Pérez Gómez',
      service: 'Consulta Dermatológica',
      specialty: 'Dermatología',
      date: '2024-01-16',
      time: '11:00',
      status: 'completed',
      duration: 30,
      notes: 'Revisión de lunar sospechoso',
      insurance: 'Coomeva',
      appointmentType: 'Presencial'
    }
  ])

  const [filteredAppointments, setFilteredAppointments] = useState(appointments)
  const [selectedDate, setSelectedDate] = useState('2024-01-15')
  const [selectedSpecialty, setSelectedSpecialty] = useState('')
  const [selectedStatus, setSelectedStatus] = useState('')
  const [showNewAppointmentModal, setShowNewAppointmentModal] = useState(false)
  const [editingAppointment, setEditingAppointment] = useState(null)
  const [loading, setLoading] = useState(false)

  const specialties = [
    'Medicina General',
    'Odontología',
    'Dermatología',
    'Oftalmología',
    'Ginecología',
    'Psicología',
    'Psiquiatría',
    'Nutrición',
    'Fisioterapia',
    'Terapias Alternativas'
  ]

  const schema = yup.object({
    patientName: yup.string().required('El nombre del paciente es requerido'),
    service: yup.string().required('El servicio es requerido'),
    specialty: yup.string().required('La especialidad es requerida'),
    date: yup.string().required('La fecha es requerida'),
    time: yup.string().required('La hora es requerida'),
    duration: yup.number().positive('La duración debe ser mayor a 0').required('La duración es requerida'),
    appointmentType: yup.string().required('El tipo de cita es requerido'),
    insurance: yup.string(),
    notes: yup.string()
  })

  const { register, handleSubmit, reset, setValue, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  })

  useEffect(() => {
    filterAppointments()
  }, [selectedDate, selectedSpecialty, selectedStatus, appointments])

  const filterAppointments = () => {
    let filtered = [...appointments]

    if (selectedDate) {
      filtered = filtered.filter(apt => apt.date === selectedDate)
    }

    if (selectedSpecialty) {
      filtered = filtered.filter(apt => apt.specialty === selectedSpecialty)
    }

    if (selectedStatus) {
      filtered = filtered.filter(apt => apt.status === selectedStatus)
    }

    setFilteredAppointments(filtered)
  }

  const handleNewAppointment = () => {
    setEditingAppointment(null)
    reset()
    setShowNewAppointmentModal(true)
  }

  const handleEditAppointment = (appointment) => {
    setEditingAppointment(appointment)
    setValue('patientName', appointment.patientName)
    setValue('service', appointment.service)
    setValue('specialty', appointment.specialty)
    setValue('date', appointment.date)
    setValue('time', appointment.time)
    setValue('duration', appointment.duration)
    setValue('appointmentType', appointment.appointmentType)
    setValue('insurance', appointment.insurance || '')
    setValue('notes', appointment.notes || '')
    setShowNewAppointmentModal(true)
  }

  const handleStatusChange = async (appointmentId, newStatus) => {
    try {
      setAppointments(prev => prev.map(apt =>
        apt.id === appointmentId
          ? { ...apt, status: newStatus }
          : apt
      ))
      toast.success(`Cita ${newStatus === 'completed' ? 'completada' : newStatus === 'cancelled' ? 'cancelada' : 'actualizada'}`)
    } catch (error) {
      toast.error('Error al actualizar el estado')
    }
  }

  const onSubmitAppointment = async (data) => {
    try {
      if (editingAppointment) {
        setAppointments(prev => prev.map(apt =>
          apt.id === editingAppointment.id
            ? { ...apt, ...data }
            : apt
        ))
        toast.success('Cita médica actualizada exitosamente')
      } else {
        const newAppointment = {
          id: appointments.length + 1,
          ...data,
          status: 'pending'
        }
        setAppointments(prev => [...prev, newAppointment])
        toast.success('Cita médica agendada exitosamente')
      }

      setShowNewAppointmentModal(false)
      reset()
      setEditingAppointment(null)
    } catch (error) {
      toast.error('Error al guardar la cita médica')
    }
  }

  const getStatusText = (status) => {
    switch (status) {
      case 'confirmed': return 'Confirmada'
      case 'pending': return 'Pendiente'
      case 'completed': return 'Completada'
      case 'cancelled': return 'Cancelada'
      default: return 'Desconocido'
    }
  }

  const formatDuration = (minutes) => {
    return `${minutes} min`
  }

  return (
    <AgendaContainer>
      <AgendaCard>
        <Header>
          <h1>Agenda Médica</h1>
          <p>Gestión de citas médicas y pacientes</p>
        </Header>

        <Content>
          <ControlsSection>
            <FilterGroup>
              <Label>Fecha</Label>
              <DateInput
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
              />
            </FilterGroup>

            <FilterGroup>
              <Label>Especialidad</Label>
              <Select
                value={selectedSpecialty}
                onChange={(e) => setSelectedSpecialty(e.target.value)}
              >
                <option value="">Todas las especialidades</option>
                {specialties.map(specialty => (
                  <option key={specialty} value={specialty}>{specialty}</option>
                ))}
              </Select>
            </FilterGroup>

            <FilterGroup>
              <Label>Estado</Label>
              <Select
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
              >
                <option value="">Todos los estados</option>
                <option value="pending">Pendiente</option>
                <option value="confirmed">Confirmada</option>
                <option value="completed">Completada</option>
                <option value="cancelled">Cancelada</option>
              </Select>
            </FilterGroup>

            <ControlButton className="primary" onClick={handleNewAppointment}>
              Nueva Cita Médica
            </ControlButton>
          </ControlsSection>

          <AppointmentsGrid>
            {filteredAppointments.map(appointment => (
              <AppointmentCard key={appointment.id} status={appointment.status}>
                <AppointmentHeader status={appointment.status}>
                  <div className="appointment-info">
                    <h3>{appointment.service}</h3>
                    <div className="patient-name">Paciente: {appointment.patientName}</div>
                    <div className="service-type">
                      {appointment.specialty} • {appointment.appointmentType}
                    </div>
                  </div>
                  <div className="status-badge">{getStatusText(appointment.status)}</div>
                </AppointmentHeader>

                <AppointmentDetails>
                  <div className="detail-item">
                    <div className="label">Fecha y Hora</div>
                    <div className="value">
                      {new Date(appointment.date).toLocaleDateString('es-CO')} {appointment.time}
                    </div>
                  </div>
                  <div className="detail-item">
                    <div className="label">Duración</div>
                    <div className="value">{formatDuration(appointment.duration)}</div>
                  </div>
                  <div className="detail-item">
                    <div className="label">EPS/IPS</div>
                    <div className="value">{appointment.insurance || 'Particular'}</div>
                  </div>
                  <div className="detail-item">
                    <div className="label">Notas</div>
                    <div className="value">{appointment.notes || 'Sin notas'}</div>
                  </div>
                </AppointmentDetails>

                <AppointmentActions>
                  <ActionButton className="medical-record">
                    Historia Clínica
                  </ActionButton>
                  <ActionButton
                    className="edit"
                    onClick={() => handleEditAppointment(appointment)}
                  >
                    Editar
                  </ActionButton>
                  {appointment.status === 'pending' && (
                    <ActionButton
                      className="complete"
                      onClick={() => handleStatusChange(appointment.id, 'confirmed')}
                    >
                      Confirmar
                    </ActionButton>
                  )}
                  {appointment.status === 'confirmed' && (
                    <ActionButton
                      className="complete"
                      onClick={() => handleStatusChange(appointment.id, 'completed')}
                    >
                      Completar
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
                </AppointmentActions>
              </AppointmentCard>
            ))}
          </AppointmentsGrid>

          {filteredAppointments.length === 0 && (
            <div style={{textAlign: 'center', padding: '40px', color: '#6b7280'}}>
              <div style={{fontSize: '48px', marginBottom: '16px'}}>🏥</div>
              <p>No hay citas médicas que coincidan con los filtros</p>
            </div>
          )}
        </Content>
      </AgendaCard>

      {showNewAppointmentModal && (
        <Modal>
          <ModalContent>
            <ModalHeader>
              <h2>{editingAppointment ? 'Editar Cita Médica' : 'Nueva Cita Médica'}</h2>
              <button className="close" onClick={() => setShowNewAppointmentModal(false)}>
                ×
              </button>
            </ModalHeader>

            <form onSubmit={handleSubmit(onSubmitAppointment)}>
              <FormGrid>
                <FormGroup>
                  <Label>Nombre del Paciente</Label>
                  <Input
                    type="text"
                    placeholder="Ej: María García López"
                    {...register('patientName')}
                  />
                  {errors.patientName && <span style={{color: 'red', fontSize: '12px'}}>{errors.patientName.message}</span>}
                </FormGroup>

                <FormGroup>
                  <Label>Servicio Médico</Label>
                  <Input
                    type="text"
                    placeholder="Ej: Consulta General"
                    {...register('service')}
                  />
                  {errors.service && <span style={{color: 'red', fontSize: '12px'}}>{errors.service.message}</span>}
                </FormGroup>

                <FormGroup>
                  <Label>Especialidad</Label>
                  <Select {...register('specialty')}>
                    <option value="">Seleccionar especialidad</option>
                    {specialties.map(specialty => (
                      <option key={specialty} value={specialty}>{specialty}</option>
                    ))}
                  </Select>
                  {errors.specialty && <span style={{color: 'red', fontSize: '12px'}}>{errors.specialty.message}</span>}
                </FormGroup>

                <FormGroup>
                  <Label>Tipo de Cita</Label>
                  <Select {...register('appointmentType')}>
                    <option value="">Seleccionar tipo</option>
                    <option value="Presencial">Presencial</option>
                    <option value="Telemedicina">Telemedicina</option>
                    <option value="Domiciliaria">Domiciliaria</option>
                  </Select>
                  {errors.appointmentType && <span style={{color: 'red', fontSize: '12px'}}>{errors.appointmentType.message}</span>}
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

                <FormGroup>
                  <Label>Duración (minutos)</Label>
                  <Input
                    type="number"
                    placeholder="30"
                    min="15"
                    max="180"
                    {...register('duration')}
                  />
                  {errors.duration && <span style={{color: 'red', fontSize: '12px'}}>{errors.duration.message}</span>}
                </FormGroup>

                <FormGroup>
                  <Label>EPS/IPS</Label>
                  <Input
                    type="text"
                    placeholder="Ej: Nueva EPS"
                    {...register('insurance')}
                  />
                </FormGroup>

                <FormGroup style={{gridColumn: '1 / -1'}}>
                  <Label>Notas Médicas</Label>
                  <TextArea
                    placeholder="Información adicional sobre la cita médica..."
                    {...register('notes')}
                  />
                </FormGroup>
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
                  {editingAppointment ? 'Actualizar Cita' : 'Agendar Cita'}
                </Button>
              </ModalActions>
            </form>
          </ModalContent>
        </Modal>
      )}
    </AgendaContainer>
  )
}

export default AgendaMedica