import { useState } from 'react'
import styled, { keyframes } from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { useCliente } from '../../../context/ClienteContext'

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`

const Container = styled.div`
  animation: ${fadeIn} 0.5s ease;
`

const Header = styled.div`
  margin-bottom: 24px;

  h2 {
    margin: 0 0 8px 0;
    font-size: 24px;
    color: #1f2937;
  }

  p {
    margin: 0;
    color: #6b7280;
  }
`

const FilterTabs = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 24px;
  overflow-x: auto;
`

const FilterTab = styled.button`
  padding: 10px 20px;
  background: ${props => props.$active ? 'linear-gradient(135deg, #667eea, #764ba2)' : '#f3f4f6'};
  color: ${props => props.$active ? 'white' : '#6b7280'};
  border: none;
  border-radius: 25px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  white-space: nowrap;
  transition: all 0.3s ease;

  &:hover {
    background: ${props => props.$active ? 'linear-gradient(135deg, #667eea, #764ba2)' : '#e5e7eb'};
  }
`

const CitasGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

const CitaCard = styled.div`
  background: white;
  border-radius: 16px;
  padding: 20px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  display: flex;
  gap: 16px;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
  }

  @media (max-width: 480px) {
    flex-direction: column;
  }

  .date-box {
    background: linear-gradient(135deg, ${props => props.$color || '#667eea'}, ${props => props.$color || '#764ba2'});
    color: white;
    border-radius: 12px;
    padding: 16px;
    text-align: center;
    min-width: 80px;

    .day {
      font-size: 28px;
      font-weight: 700;
      line-height: 1;
    }

    .month {
      font-size: 12px;
      text-transform: uppercase;
      opacity: 0.9;
      margin-top: 4px;
    }

    .year {
      font-size: 11px;
      opacity: 0.8;
      margin-top: 2px;
    }
  }

  .content {
    flex: 1;

    .header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      margin-bottom: 8px;

      h3 {
        margin: 0;
        font-size: 18px;
        color: #1f2937;
      }
    }

    .details {
      display: flex;
      gap: 16px;
      flex-wrap: wrap;
      margin-bottom: 12px;

      span {
        font-size: 14px;
        color: #6b7280;
        display: flex;
        align-items: center;
        gap: 6px;
      }
    }

    .actions {
      display: flex;
      gap: 12px;
      flex-wrap: wrap;
    }
  }

  .status {
    padding: 6px 14px;
    border-radius: 20px;
    font-size: 12px;
    font-weight: 600;
    background: ${props => {
      switch(props.$status) {
        case 'pendiente': return '#fef3c7';
        case 'confirmada': return '#d1fae5';
        case 'completada': return '#dbeafe';
        case 'cancelada': return '#fee2e2';
        default: return '#e5e7eb';
      }
    }};
    color: ${props => {
      switch(props.$status) {
        case 'pendiente': return '#92400e';
        case 'confirmada': return '#065f46';
        case 'completada': return '#1e40af';
        case 'cancelada': return '#991b1b';
        default: return '#374151';
      }
    }};
  }
`

const ActionButton = styled.button`
  padding: 10px 16px;
  background: ${props => props.$primary ? 'linear-gradient(135deg, #667eea, #764ba2)' : '#f3f4f6'};
  color: ${props => props.$primary ? 'white' : '#374151'};
  border: none;
  border-radius: 10px;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }

  &.cancel {
    background: #fee2e2;
    color: #991b1b;

    &:hover {
      background: #fecaca;
    }
  }
`

const EmptyState = styled.div`
  text-align: center;
  padding: 60px 20px;
  color: #9ca3af;

  .icon {
    font-size: 64px;
    margin-bottom: 16px;
  }

  h3 {
    margin: 0 0 8px 0;
    color: #374151;
  }

  p {
    margin: 0 0 24px 0;
  }

  button {
    padding: 14px 28px;
    background: linear-gradient(135deg, #667eea, #764ba2);
    color: white;
    border: none;
    border-radius: 12px;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;

    &:hover {
      transform: translateY(-2px);
    }
  }
`

const ClienteMisCitas = () => {
  const navigate = useNavigate()
  const { citas, cancelarCita } = useCliente()
  const [filtro, setFiltro] = useState('todas')

  const getStatusLabel = (status) => {
    switch(status) {
      case 'pendiente': return 'Pendiente'
      case 'confirmada': return 'Confirmada'
      case 'completada': return 'Completada'
      case 'cancelada': return 'Cancelada'
      default: return status
    }
  }

  const getStatusColor = (status) => {
    switch(status) {
      case 'pendiente': return '#f59e0b'
      case 'confirmada': return '#10b981'
      case 'completada': return '#3b82f6'
      case 'cancelada': return '#ef4444'
      default: return '#667eea'
    }
  }

  const citasFiltradas = citas.filter(cita => {
    if (filtro === 'todas') return true
    return cita.estado === filtro
  })

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return {
      day: date.getDate(),
      month: date.toLocaleDateString('es-CO', { month: 'short' }),
      year: date.getFullYear()
    }
  }

  const handleCancelar = (citaId) => {
    if (window.confirm('¿Estás seguro de que deseas cancelar esta cita?')) {
      cancelarCita(citaId)
      toast.success('Cita cancelada exitosamente')
    }
  }

  return (
    <Container>
      <Header>
        <h2>📋 Mis Citas</h2>
        <p>Gestiona todas tus citas agendadas</p>
      </Header>

      <FilterTabs>
        <FilterTab $active={filtro === 'todas'} onClick={() => setFiltro('todas')}>
          Todas
        </FilterTab>
        <FilterTab $active={filtro === 'pendiente'} onClick={() => setFiltro('pendiente')}>
          Pendientes
        </FilterTab>
        <FilterTab $active={filtro === 'confirmada'} onClick={() => setFiltro('confirmada')}>
          Confirmadas
        </FilterTab>
        <FilterTab $active={filtro === 'completada'} onClick={() => setFiltro('completada')}>
          Completadas
        </FilterTab>
        <FilterTab $active={filtro === 'cancelada'} onClick={() => setFiltro('cancelada')}>
          Canceladas
        </FilterTab>
      </FilterTabs>

      {citasFiltradas.length > 0 ? (
        <CitasGrid>
          {citasFiltradas.map(cita => {
            const { day, month, year } = formatDate(cita.fecha)
            const statusColor = getStatusColor(cita.estado)
            
            return (
              <CitaCard key={cita.id} $status={cita.estado} $color={statusColor}>
                <div className="date-box">
                  <div className="day">{day}</div>
                  <div className="month">{month}</div>
                  <div className="year">{year}</div>
                </div>
                <div className="content">
                  <div className="header">
                    <h3>{cita.servicio}</h3>
                    <span className="status">{getStatusLabel(cita.estado)}</span>
                  </div>
                  <div className="details">
                    <span>🕐 {cita.hora}</span>
                    {cita.precio && <span>💰 ${cita.precio.toLocaleString('es-CO')}</span>}
                    {cita.profesional && <span>👤 {cita.profesional}</span>}
                  </div>
                  {cita.notas && (
                    <div className="details">
                      <span>📝 {cita.notas}</span>
                    </div>
                  )}
                  {cita.estado !== 'cancelada' && cita.estado !== 'completada' && (
                    <div className="actions">
                      <ActionButton $primary onClick={() => navigate('/cliente/agendar')}>
                        Reprogramar
                      </ActionButton>
                      <ActionButton className="cancel" onClick={() => handleCancelar(cita.id)}>
                        Cancelar Cita
                      </ActionButton>
                    </div>
                  )}
                </div>
              </CitaCard>
            )
          })}
        </CitasGrid>
      ) : (
        <EmptyState>
          <div className="icon">📅</div>
          <h3>No tienes citas</h3>
          <p>Agenda tu primera cita con nosotros</p>
          <button onClick={() => navigate('/cliente/agendar')}>
            Agendar Cita
          </button>
        </EmptyState>
      )}
    </Container>
  )
}

export default ClienteMisCitas