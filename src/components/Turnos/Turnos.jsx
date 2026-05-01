import { useState, useEffect } from 'react'
import { toast } from 'react-toastify'
import styled from 'styled-components'

const TurnosContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  padding: 20px;
`

const TurnosCard = styled.div`
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
  grid-template-columns: 1fr auto auto;
  gap: 16px;
  margin-bottom: 32px;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 12px;
  }
`

const CurrentTurnDisplay = styled.div`
  background: linear-gradient(135deg, #10b981, #059669);
  color: white;
  padding: 24px;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 8px 25px rgba(16, 185, 129, 0.3);

  .label {
    font-size: 14px;
    opacity: 0.9;
    margin-bottom: 8px;
    text-transform: uppercase;
    font-weight: 600;
  }

  .number {
    font-size: 64px;
    font-weight: 900;
    margin: 0;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);

    @media (max-width: 768px) {
      font-size: 48px;
    }
  }

  .client-info {
    margin-top: 12px;
    font-size: 16px;
    opacity: 0.95;
  }
`

const ControlButtons = styled.div`
  display: flex;
  gap: 12px;

  @media (max-width: 768px) {
    justify-content: center;
  }
`

const ControlButton = styled.button`
  padding: 14px 24px;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;

  &.call {
    background: #ffc107;
    color: #212529;

    &:hover {
      background: #e0a800;
      transform: translateY(-2px);
      box-shadow: 0 8px 20px rgba(255, 193, 7, 0.4);
    }
  }

  &.complete {
    background: #10b981;
    color: white;

    &:hover {
      background: #059669;
      transform: translateY(-2px);
      box-shadow: 0 8px 20px rgba(16, 185, 129, 0.4);
    }
  }

  &.skip {
    background: #6c757d;
    color: white;

    &:hover {
      background: #5a6268;
      transform: translateY(-2px);
    }
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
    transform: none;
  }
`

const TurnosGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  margin-bottom: 32px;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`

const TurnosSection = styled.div`
  background: white;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);

  h3 {
    margin: 0 0 20px 0;
    color: #1f2937;
    font-size: 18px;
    display: flex;
    align-items: center;
    gap: 12px;

    &::before {
      content: '${props => props.icon}';
      font-size: 20px;
    }
  }
`

const TurnosList = styled.div`
  max-height: 400px;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 3px;
  }

  &::-webkit-scrollbar-thumb {
    background: #c1c1c1;
    border-radius: 3px;

    &:hover {
      background: #a8a8a8;
    }
  }
`

const TurnoItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  background: ${props => {
    switch (props.status) {
      case 'waiting': return '#f8f9fa'
      case 'called': return '#fff3cd'
      case 'in_progress': return '#d1ecf1'
      case 'completed': return '#d4edda'
      case 'missed': return '#f8d7da'
      default: return '#f8f9fa'
    }
  }};
  border-radius: 8px;
  margin-bottom: 12px;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }

  .turno-info {
    display: flex;
    align-items: center;
    gap: 16px;

    .turno-number {
      font-size: 24px;
      font-weight: 900;
      color: ${props => {
        switch (props.status) {
          case 'waiting': return '#6b7280'
          case 'called': return '#856404'
          case 'in_progress': return '#0c5460'
          case 'completed': return '#155724'
          case 'missed': return '#721c24'
          default: return '#6b7280'
        }
      }};
      min-width: 60px;
      text-align: center;
    }

    .client-details {
      h4 {
        margin: 0 0 4px 0;
        font-size: 16px;
        color: #1f2937;
        font-weight: 600;
      }

      p {
        margin: 0;
        font-size: 14px;
        color: #6b7280;
      }

      .service {
        color: #374151;
        font-weight: 500;
      }
    }
  }

  .turno-actions {
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

  &.call {
    background: #ffc107;
    color: #212529;

    &:hover {
      background: #e0a800;
    }
  }

  &.start {
    background: #17a2b8;
    color: white;

    &:hover {
      background: #138496;
    }
  }

  &.complete {
    background: #10b981;
    color: white;

    &:hover {
      background: #059669;
    }
  }

  &.miss {
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

const StatsSection = styled.div`
  background: white;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  margin-top: 24px;
`

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 20px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`

const StatItem = styled.div`
  text-align: center;

  .stat-value {
    font-size: 32px;
    font-weight: 900;
    color: ${props => props.color || '#667eea'};
    margin-bottom: 4px;
  }

  .stat-label {
    font-size: 12px;
    color: #6b7280;
    text-transform: uppercase;
    font-weight: 600;
  }
`

const Turnos = () => {
  const [turnos, setTurnos] = useState([
    {
      id: 1,
      numero: 'A001',
      cliente: 'María García',
      servicio: 'Corte de Cabello',
      estado: 'waiting',
      horaLlegada: '2024-01-15 09:30:00',
      horaLlamado: null,
      horaInicio: null,
      horaFin: null
    },
    {
      id: 2,
      numero: 'A002',
      cliente: 'Carlos Rodríguez',
      servicio: 'Tratamiento Facial',
      estado: 'waiting',
      horaLlegada: '2024-01-15 09:45:00',
      horaLlamado: null,
      horaInicio: null,
      horaFin: null
    },
    {
      id: 3,
      numero: 'A003',
      cliente: 'Ana López',
      servicio: 'Manicure',
      estado: 'called',
      horaLlegada: '2024-01-15 10:00:00',
      horaLlamado: '2024-01-15 10:15:00',
      horaInicio: null,
      horaFin: null
    },
    {
      id: 4,
      numero: 'A004',
      cliente: 'Juan Pérez',
      servicio: 'Pedicure',
      estado: 'in_progress',
      horaLlegada: '2024-01-15 10:30:00',
      horaLlamado: '2024-01-15 10:32:00',
      horaInicio: '2024-01-15 10:35:00',
      horaFin: null
    },
    {
      id: 5,
      numero: 'A005',
      cliente: 'Laura Martínez',
      servicio: 'Tinte de Cabello',
      estado: 'completed',
      horaLlegada: '2024-01-15 09:00:00',
      horaLlamado: '2024-01-15 09:05:00',
      horaInicio: '2024-01-15 09:10:00',
      horaFin: '2024-01-15 11:30:00'
    }
  ])

  const [currentTurno, setCurrentTurno] = useState(null)
  const [audioEnabled, setAudioEnabled] = useState(true)

  useEffect(() => {
    // Encontrar el turno actual (llamado pero no completado)
    const current = turnos.find(turno => turno.estado === 'called' || turno.estado === 'in_progress')
    setCurrentTurno(current || null)
  }, [turnos])

  const playAudio = (message) => {
    if (audioEnabled) {
      // Simular reproducción de audio
      console.log('Reproduciendo audio:', message)
      // En una implementación real, usar Web Speech API o archivos de audio
    }
  }

  const handleCallTurno = async (turnoId) => {
    try {
      const now = new Date().toISOString()
      setTurnos(prev => prev.map(turno =>
        turno.id === turnoId
          ? { ...turno, estado: 'called', horaLlamado: now }
          : turno
      ))

      const turno = turnos.find(t => t.id === turnoId)
      playAudio(`Turno ${turno.numero}. ${turno.cliente}`)
      toast.success(`Turno ${turno.numero} llamado`)
    } catch (error) {
      toast.error('Error al llamar el turno')
    }
  }

  const handleStartTurno = async (turnoId) => {
    try {
      const now = new Date().toISOString()
      setTurnos(prev => prev.map(turno =>
        turno.id === turnoId
          ? { ...turno, estado: 'in_progress', horaInicio: now }
          : turno
      ))
      toast.success('Turno iniciado')
    } catch (error) {
      toast.error('Error al iniciar el turno')
    }
  }

  const handleCompleteTurno = async (turnoId) => {
    try {
      const now = new Date().toISOString()
      setTurnos(prev => prev.map(turno =>
        turno.id === turnoId
          ? { ...turno, estado: 'completed', horaFin: now }
          : turno
      ))
      toast.success('Turno completado')
    } catch (error) {
      toast.error('Error al completar el turno')
    }
  }

  const handleMissTurno = async (turnoId) => {
    try {
      setTurnos(prev => prev.map(turno =>
        turno.id === turnoId
          ? { ...turno, estado: 'missed' }
          : turno
      ))
      toast.warning('Turno marcado como perdido')
    } catch (error) {
      toast.error('Error al marcar el turno como perdido')
    }
  }

  const getStatusText = (status) => {
    switch (status) {
      case 'waiting': return 'Esperando'
      case 'called': return 'Llamado'
      case 'in_progress': return 'En Progreso'
      case 'completed': return 'Completado'
      case 'missed': return 'Perdido'
      default: return 'Desconocido'
    }
  }

  const waitingTurnos = turnos.filter(t => t.estado === 'waiting')
  const activeTurnos = turnos.filter(t => ['called', 'in_progress'].includes(t.estado))
  const completedTurnos = turnos.filter(t => t.estado === 'completed')

  const stats = {
    total: turnos.length,
    waiting: waitingTurnos.length,
    active: activeTurnos.length,
    completed: completedTurnos.length
  }

  return (
    <TurnosContainer>
      <TurnosCard>
        <Header>
          <h1>Sistema de Turnos</h1>
          <p>Gestión de turnos en tiempo real</p>
        </Header>

        <Content>
          <ControlsSection>
            <CurrentTurnDisplay>
              <div className="label">Turno Actual</div>
              <div className="number">
                {currentTurno ? currentTurno.numero : '--'}
              </div>
              {currentTurno && (
                <div className="client-info">
                  {currentTurno.cliente} - {currentTurno.servicio}
                </div>
              )}
            </CurrentTurnDisplay>

            <ControlButtons>
              <ControlButton
                className="call"
                onClick={() => {
                  const nextTurno = waitingTurnos[0]
                  if (nextTurno) handleCallTurno(nextTurno.id)
                  else toast.info('No hay turnos en espera')
                }}
                disabled={waitingTurnos.length === 0}
              >
                Llamar Siguiente
              </ControlButton>

              {currentTurno && currentTurno.estado === 'called' && (
                <ControlButton
                  className="complete"
                  onClick={() => handleStartTurno(currentTurno.id)}
                >
                  Iniciar Atención
                </ControlButton>
              )}

              {currentTurno && currentTurno.estado === 'in_progress' && (
                <ControlButton
                  className="complete"
                  onClick={() => handleCompleteTurno(currentTurno.id)}
                >
                  Finalizar
                </ControlButton>
              )}
            </ControlButtons>

            <div style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
              <label style={{fontSize: '14px', color: '#374151'}}>
                Audio:
                <input
                  type="checkbox"
                  checked={audioEnabled}
                  onChange={(e) => setAudioEnabled(e.target.checked)}
                  style={{marginLeft: '8px'}}
                />
              </label>
            </div>
          </ControlsSection>

          <TurnosGrid>
            <TurnosSection icon="⏳">
              <h3>Turnos en Espera ({waitingTurnos.length})</h3>
              <TurnosList>
                {waitingTurnos.map(turno => (
                  <TurnoItem key={turno.id} status={turno.estado}>
                    <div className="turno-info">
                      <div className="turno-number">{turno.numero}</div>
                      <div className="client-details">
                        <h4>{turno.cliente}</h4>
                        <p className="service">{turno.servicio}</p>
                        <p>{new Date(turno.horaLlegada).toLocaleTimeString('es-CO')}</p>
                      </div>
                    </div>
                    <div className="turno-actions">
                      <ActionButton
                        className="call"
                        onClick={() => handleCallTurno(turno.id)}
                      >
                        Llamar
                      </ActionButton>
                    </div>
                  </TurnoItem>
                ))}
                {waitingTurnos.length === 0 && (
                  <div style={{textAlign: 'center', padding: '40px', color: '#6b7280'}}>
                    <div style={{fontSize: '48px', marginBottom: '16px'}}>🎉</div>
                    <p>No hay turnos en espera</p>
                  </div>
                )}
              </TurnosList>
            </TurnosSection>

            <TurnosSection icon="⚡">
              <h3>Turnos Activos ({activeTurnos.length})</h3>
              <TurnosList>
                {activeTurnos.map(turno => (
                  <TurnoItem key={turno.id} status={turno.estado}>
                    <div className="turno-info">
                      <div className="turno-number">{turno.numero}</div>
                      <div className="client-details">
                        <h4>{turno.cliente}</h4>
                        <p className="service">{turno.servicio}</p>
                        <p>{getStatusText(turno.estado)}</p>
                      </div>
                    </div>
                    <div className="turno-actions">
                      {turno.estado === 'called' && (
                        <>
                          <ActionButton
                            className="start"
                            onClick={() => handleStartTurno(turno.id)}
                          >
                            Iniciar
                          </ActionButton>
                          <ActionButton
                            className="miss"
                            onClick={() => handleMissTurno(turno.id)}
                          >
                            Perdió
                          </ActionButton>
                        </>
                      )}
                      {turno.estado === 'in_progress' && (
                        <ActionButton
                          className="complete"
                          onClick={() => handleCompleteTurno(turno.id)}
                        >
                          Completar
                        </ActionButton>
                      )}
                    </div>
                  </TurnoItem>
                ))}
                {activeTurnos.length === 0 && (
                  <div style={{textAlign: 'center', padding: '40px', color: '#6b7280'}}>
                    <div style={{fontSize: '48px', marginBottom: '16px'}}>💤</div>
                    <p>No hay turnos activos</p>
                  </div>
                )}
              </TurnosList>
            </TurnosSection>
          </TurnosGrid>

          <StatsSection>
            <h3>Estadísticas del Día</h3>
            <StatsGrid>
              <StatItem color="#6b7280">
                <div className="stat-value">{stats.total}</div>
                <div className="stat-label">Total</div>
              </StatItem>
              <StatItem color="#f59e0b">
                <div className="stat-value">{stats.waiting}</div>
                <div className="stat-label">Esperando</div>
              </StatItem>
              <StatItem color="#17a2b8">
                <div className="stat-value">{stats.active}</div>
                <div className="stat-label">Activos</div>
              </StatItem>
              <StatItem color="#10b981">
                <div className="stat-value">{stats.completed}</div>
                <div className="stat-label">Completados</div>
              </StatItem>
            </StatsGrid>
          </StatsSection>
        </Content>
      </TurnosCard>
    </TurnosContainer>
  )
}

export default Turnos