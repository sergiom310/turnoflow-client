import { useState } from 'react'
import styled, { keyframes } from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { useCliente } from '../../../context/ClienteContext'
import { useBusiness } from '../../../context/BusinessContext'

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`

const Container = styled.div`
  animation: ${fadeIn} 0.5s ease;
`

const StepsIndicator = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-bottom: 32px;

  @media (max-width: 480px) {
    gap: 4px;
  }
`

const Step = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 20px;
  background: ${props => props.$active ? 'linear-gradient(135deg, var(--primary-color), var(--secondary-color))' : '#f3f4f6'};
  color: ${props => props.$active ? 'white' : '#9ca3af'};
  border-radius: 30px;
  font-size: 14px;
  font-weight: 600;
  transition: all 0.3s ease;

  @media (max-width: 480px) {
    padding: 10px 14px;
    font-size: 12px;
    
    span:first-child {
      display: none;
    }
  }

  ${props => props.$completed && `
    background: #10b981;
    color: white;
  `}
`

const SelectionSection = styled.div`
  background: white;
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  margin-bottom: 24px;

  h3 {
    margin: 0 0 20px 0;
    font-size: 18px;
    color: #1f2937;
    display: flex;
    align-items: center;
    gap: 12px;
  }
`

const ServiciosGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 16px;
`

const ServicioCard = styled.div`
  padding: 20px;
  background: ${props => props.$selected ? 'linear-gradient(135deg, rgba(var(--primary-rgb), 0.12), rgba(var(--secondary-rgb), 0.06))' : '#f9fafb'};
  border: 2px solid ${props => props.$selected ? 'var(--primary-color)' : '#e5e7eb'};
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    border-color: var(--primary-color);
    transform: translateY(-2px);
  }

  h4 {
    margin: 0 0 8px 0;
    font-size: 16px;
    color: #1f2937;
  }

  p {
    margin: 0 0 12px 0;
    font-size: 14px;
    color: #6b7280;
  }

  .footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .duration {
    font-size: 13px;
    color: #9ca3af;
  }

  .price {
    font-size: 16px;
    font-weight: 700;
    color: var(--primary-color);
  }
`

const DateTimeSection = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const FormGroup = styled.div`
  label {
    display: block;
    font-size: 14px;
    font-weight: 600;
    color: #374151;
    margin-bottom: 8px;
  }

  input, select {
    width: 100%;
    padding: 14px 16px;
    border: 2px solid #e5e7eb;
    border-radius: 12px;
    font-size: 15px;
    transition: all 0.3s ease;

    &:focus {
      outline: none;
      border-color: var(--primary-color);
      box-shadow: 0 0 0 4px rgba(var(--primary-rgb), 0.1);
    }
  }

  .error {
    color: #ef4444;
    font-size: 12px;
    margin-top: 4px;
  }
`

const TimeSlots = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(80px, 1fr));
  gap: 10px;
`

const TimeSlot = styled.button`
  padding: 12px;
  background: ${props => props.$selected ? 'linear-gradient(135deg, var(--primary-color), var(--secondary-color))' : '#f3f4f6'};
  color: ${props => props.$selected ? 'white' : '#374151'};
  border: none;
  border-radius: 10px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: ${props => props.$selected ? 'linear-gradient(135deg, var(--primary-color), var(--secondary-color))' : '#e5e7eb'};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`

const NotesSection = styled.div`
  margin-top: 20px;

  textarea {
    width: 100%;
    padding: 14px 16px;
    border: 2px solid #e5e7eb;
    border-radius: 12px;
    font-size: 15px;
    min-height: 100px;
    resize: vertical;
    font-family: inherit;

    &:focus {
      outline: none;
      border-color: var(--primary-color);
      box-shadow: 0 0 0 4px rgba(var(--primary-rgb), 0.1);
    }
  }
`

const SummaryCard = styled.div`
  background: white;
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);

  h3 {
    margin: 0 0 20px 0;
    font-size: 18px;
    color: #1f2937;
  }

  .summary-item {
    display: flex;
    justify-content: space-between;
    padding: 12px 0;
    border-bottom: 1px solid #f3f4f6;

    &:last-child {
      border-bottom: none;
    }

    .label {
      color: #6b7280;
    }

    .value {
      font-weight: 600;
      color: #1f2937;
    }
  }
`

const ActionButtons = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 24px;

  button {
    flex: 1;
    padding: 16px;
    border: none;
    border-radius: 12px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;

    &.back {
      background: #f3f4f6;
      color: #374151;

      &:hover {
        background: #e5e7eb;
      }
    }

    &.confirm {
      background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
      color: white;

      &:hover {
        transform: translateY(-2px);
        box-shadow: 0 8px 20px rgba(var(--primary-rgb), 0.3);
      }

      &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
        transform: none;
      }
    }
  }
`

const SuccessContainer = styled.div`
  text-align: center;
  padding: 60px 20px;

  .icon {
    font-size: 80px;
    margin-bottom: 24px;
  }

  h2 {
    color: #1f2937;
    margin: 0 0 12px 0;
  }

  p {
    color: #6b7280;
    margin: 0 0 32px 0;
    font-size: 16px;
  }

  button {
    padding: 16px 32px;
    background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
    color: white;
    border: none;
    border-radius: 12px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;

    &:hover {
      transform: translateY(-2px);
    }
  }
`

const ClienteAgenda = () => {
  const navigate = useNavigate()
  const { agregarCita, agregarAlCarrito } = useCliente()
  const { businessType, getBusinessComponents } = useBusiness()
  const business = getBusinessComponents(businessType)

  const [step, setStep] = useState(1)
  const [servicio, setServicio] = useState(null)
  const [fecha, setFecha] = useState('')
  const [hora, setHora] = useState('')
  const [notas, setNotas] = useState('')
  const [mostrarCarrito, setMostrarCarrito] = useState(false)

  const serviciosMock = [
    { id: 1, nombre: 'Corte de cabello', descripcion: 'Corte y peinado profesional', precio: 25000, duracion: 30 },
    { id: 2, nombre: 'Manicure', descripcion: 'Cuidados de uñas y esmalte', precio: 20000, duracion: 45 },
    { id: 3, nombre: 'Pedicure', descripcion: 'Cuidado de pies y uñas', precio: 25000, duracion: 45 },
    { id: 4, nombre: 'Tratamiento facial', descripcion: 'Limpieza e hidratación', precio: 45000, duracion: 60 },
    { id: 5, nombre: 'Coloración', descripcion: 'Tinte completo de cabello', precio: 60000, duracion: 90 },
    { id: 6, nombre: 'Masaje relajante', descripcion: 'Masaje corporal completo', precio: 50000, duracion: 60 }
  ]

  const generateTimeSlots = () => {
    const slots = []
    for (let h = 8; h <= 18; h++) {
      slots.push(`${h.toString().padStart(2, '0')}:00`)
      slots.push(`${h.toString().padStart(2, '0')}:30`)
    }
    return slots
  }

  const getMinDate = () => {
    const tomorrow = new Date()
    tomorrow.setDate(tomorrow.getDate() + 1)
    return tomorrow.toISOString().split('T')[0]
  }

  const handleConfirm = async () => {
    if (!servicio || !fecha || !hora) {
      toast.error('Por favor completa todos los campos')
      return
    }

    agregarCita({
      servicio: servicio.nombre,
      fecha,
      hora,
      notas,
      precio: servicio.precio
    })

    setStep(3)
    toast.success('¡Cita agendada exitosamente!')
  }

  if (step === 3) {
    return (
      <Container>
        <SuccessContainer>
          <div className="icon">✅</div>
          <h2>¡Cita Agendada!</h2>
          <p>Tu cita ha sido confirmada para el {fecha} a las {hora}.<br/>Te enviaremos un recordatorio.</p>
          <button onClick={() => navigate('/cliente/dashboard')}>
            Volver al Inicio
          </button>
        </SuccessContainer>
      </Container>
    )
  }

  return (
    <Container>
      <StepsIndicator>
        <Step $active={step === 1} $completed={step > 1}>1. Servicio</Step>
        <Step $active={step === 2} $completed={step > 2}>2. Fecha y Hora</Step>
        <Step $active={step === 3}>3. Confirmar</Step>
      </StepsIndicator>

      {step === 1 && (
        <SelectionSection>
          <h3>✂️ Selecciona un Servicio</h3>
          <ServiciosGrid>
            {serviciosMock.map(serv => (
              <ServicioCard
                key={serv.id}
                $selected={servicio?.id === serv.id}
                onClick={() => setServicio(serv)}
              >
                <h4>{serv.nombre}</h4>
                <p>{serv.descripcion}</p>
                <div className="footer">
                  <span className="duration">⏱️ {serv.duracion} min</span>
                  <span className="price">${serv.precio.toLocaleString('es-CO')}</span>
                </div>
              </ServicioCard>
            ))}
          </ServiciosGrid>

          <ActionButtons>
            <button className="back" onClick={() => navigate('/cliente/dashboard')}>Cancelar</button>
            <button
              className="confirm"
              disabled={!servicio}
              onClick={() => setStep(2)}
            >
              Continuar
            </button>
          </ActionButtons>
        </SelectionSection>
      )}

      {step === 2 && (
        <>
          <SelectionSection>
            <h3>📅 Selecciona Fecha y Hora</h3>
            <DateTimeSection>
              <FormGroup>
                <label>Fecha</label>
                <input
                  type="date"
                  value={fecha}
                  onChange={(e) => setFecha(e.target.value)}
                  min={getMinDate()}
                />
              </FormGroup>

              <FormGroup>
                <label>Hora</label>
                <select value={hora} onChange={(e) => setHora(e.target.value)}>
                  <option value="">Selecciona una hora</option>
                  {generateTimeSlots().map(slot => (
                    <option key={slot} value={slot}>{slot}</option>
                  ))}
                </select>
              </FormGroup>
            </DateTimeSection>

            <NotesSection>
              <label>Notas adicionales (opcional)</label>
              <textarea
                placeholder="¿Alguna observación orequesta especial?"
                value={notas}
                onChange={(e) => setNotas(e.target.value)}
              />
            </NotesSection>
          </SelectionSection>

          <SummaryCard>
            <h3>📋 Resumen de tu Cita</h3>
            <div className="summary-item">
              <span className="label">Servicio</span>
              <span className="value">{servicio?.nombre}</span>
            </div>
            <div className="summary-item">
              <span className="label">Duración</span>
              <span className="value">{servicio?.duracion} minutos</span>
            </div>
            <div className="summary-item">
              <span className="label">Fecha</span>
              <span className="value">{fecha || 'No seleccionada'}</span>
            </div>
            <div className="summary-item">
              <span className="label">Hora</span>
              <span className="value">{hora || 'No seleccionada'}</span>
            </div>
            <div className="summary-item">
              <span className="label">Total a pagar</span>
              <span className="value" style={{ color: 'var(--primary-color)', fontSize: '18px' }}>
                ${servicio?.precio.toLocaleString('es-CO')}
              </span>
            </div>
          </SummaryCard>

          <ActionButtons>
            <button className="back" onClick={() => setStep(1)}>Atrás</button>
            <button
              className="confirm"
              disabled={!fecha || !hora}
              onClick={handleConfirm}
            >
              Confirmar Cita
            </button>
          </ActionButtons>
        </>
      )}
    </Container>
  )
}

export default ClienteAgenda