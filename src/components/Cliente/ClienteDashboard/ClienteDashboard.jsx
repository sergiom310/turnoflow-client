import { useNavigate } from 'react-router-dom'
import styled, { keyframes } from 'styled-components'
import { useCliente } from '../../../context/ClienteContext'
import { useBusiness } from '../../../context/BusinessContext'

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`

const Container = styled.div`
  animation: ${fadeIn} 0.5s ease;
`

const WelcomeSection = styled.div`
  background: linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%);
  border-radius: 20px;
  padding: 32px;
  color: white;
  margin-bottom: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;

  .welcome-text {
    h2 {
      margin: 0 0 8px 0;
      font-size: 28px;
    }

    p {
      margin: 0;
      opacity: 0.9;
    }
  }

  .actions {
    display: flex;
    gap: 12px;
    flex-wrap: wrap;
  }

  @media (max-width: 768px) {
    padding: 24px;
    text-align: center;

    .actions {
      justify-content: center;
    }
  }
`

const ActionButton = styled.button`
  padding: 14px 24px;
  background: ${props => props.$primary ? 'white' : 'rgba(255,255,255,0.2)'};
  color: ${props => props.$primary ? 'var(--primary-color)' : 'white'};
  border: none;
  border-radius: 12px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  }
`

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 20px;
  margin-bottom: 32px;
`

const StatCard = styled.div`
  background: white;
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  display: flex;
  align-items: center;
  gap: 16px;
  transition: all 0.3s ease;
  animation: ${fadeIn} 0.5s ease;
  animation-delay: ${props => props.$delay || '0s'};
  animation-fill-mode: both;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
  }

  .icon {
    width: 56px;
    height: 56px;
    border-radius: 14px;
    background: ${props => props.$color || '#667eea'};
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
  }

  .info {
    flex: 1;

    h3 {
      margin: 0;
      font-size: 14px;
      color: #6b7280;
      font-weight: 500;
    }

    p {
      margin: 4px 0 0 0;
      font-size: 24px;
      font-weight: 700;
      color: #1f2937;
    }
  }
`

const Section = styled.div`
  background: white;
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  margin-bottom: 24px;
`

const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;

  h3 {
    margin: 0;
    font-size: 18px;
    color: #1f2937;
  }

  button {
    background: none;
    border: none;
    color: var(--primary-color);
    font-weight: 600;
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }
`

const CitasList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`

const CitaCard = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 16px;
  background: #f9fafb;
  border-radius: 12px;
  transition: all 0.3s ease;

  &:hover {
    background: #f3f4f6;
  }

  .date-box {
    background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
    color: white;
    border-radius: 10px;
    padding: 12px 16px;
    text-align: center;
    min-width: 70px;

    .day {
      font-size: 24px;
      font-weight: 700;
      line-height: 1;
    }

    .month {
      font-size: 12px;
      text-transform: uppercase;
      opacity: 0.9;
    }
  }

  .info {
    flex: 1;

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

  .status {
    padding: 6px 12px;
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

const EmptyState = styled.div`
  text-align: center;
  padding: 40px;
  color: #9ca3af;

  .icon {
    font-size: 48px;
    margin-bottom: 16px;
  }

  p {
    margin: 0;
    font-size: 16px;
  }

  button {
    margin-top: 16px;
    padding: 12px 24px;
    background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
    color: white;
    border: none;
    border-radius: 10px;
    font-weight: 600;
    cursor: pointer;

    &:hover {
      transform: translateY(-2px);
    }
  }
`

const PromocionesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 16px;
`

const PromocionCard = styled.div`
  background: linear-gradient(135deg, ${props => props.$color || '#667eea'}20, ${props => props.$color || '#764ba2'}10);
  border: 2px solid ${props => props.$color || '#667eea'}30;
  border-radius: 12px;
  padding: 20px;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
  }

  .tag {
    display: inline-block;
    padding: 4px 10px;
    background: ${props => props.$color || '#667eea'};
    color: white;
    font-size: 11px;
    font-weight: 600;
    border-radius: 20px;
    margin-bottom: 12px;
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

  .price {
    font-size: 20px;
    font-weight: 700;
    color: ${props => props.$color || '#667eea'};

    span {
      font-size: 14px;
      font-weight: 400;
      text-decoration: line-through;
      color: #9ca3af;
    }
  }
`

const ClienteDashboard = () => {
  const navigate = useNavigate()
  const { cliente, citas } = useCliente()
  const { getBusinessComponents } = useBusiness()
  const business = getBusinessComponents('beauty')

  const citasProximas = citas.filter(c => c.estado !== 'cancelada').slice(0, 3)

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return {
      day: date.getDate(),
      month: date.toLocaleDateString('es-CO', { month: 'short' })
    }
  }

  const promociones = [
    { id: 1, titulo: 'Descuento en Servicios', descripcion: '20% en tu primera cita', precio: 0, color: '#10b981', tag: 'Nueva' },
    { id: 2, titulo: 'Paquete Facial', descripcion: 'Limpieza facial + Hidratación', precio: 80000, original: 120000, color: '#f59e0b', tag: 'Oferta' },
    { id: 3, titulo: 'Membresía Mensual', descripcion: 'Acceso ilimitado a servicios', precio: 150000, original: 200000, color: '#8b5cf6', tag: 'Premium' }
  ]

  return (
    <Container>
      <WelcomeSection>
        <div className="welcome-text">
          <h2>¡Hola, {cliente?.nombre || 'Bienvenido'}! 👋</h2>
          <p>¿Qué te gustaría hacer hoy? Explora nuestros servicios o agenda tu próxima cita.</p>
        </div>
        <div className="actions">
          <ActionButton $primary onClick={() => navigate('/cliente/agendar')}>
            📅 Agendar Cita
          </ActionButton>
          <ActionButton onClick={() => navigate('/cliente/servicios')}>
            ✂️ Ver Servicios
          </ActionButton>
        </div>
      </WelcomeSection>

      <StatsGrid>
        <StatCard $delay="0.1s" $color="linear-gradient(135deg, #667eea, #764ba2)">
          <div className="icon">📅</div>
          <div className="info">
            <h3>Citas Agendadas</h3>
            <p>{citas.length}</p>
          </div>
        </StatCard>
        <StatCard $delay="0.2s" $color="linear-gradient(135deg, #10b981, #059669)">
          <div className="icon">✅</div>
          <div className="info">
            <h3>Citas Completadas</h3>
            <p>{citas.filter(c => c.estado === 'completada').length}</p>
          </div>
        </StatCard>
        <StatCard $delay="0.3s" $color="linear-gradient(135deg, #f59e0b, #d97706)">
          <div className="icon">⭐</div>
          <div className="info">
            <h3>Visitas Totales</h3>
            <p>{citas.length}</p>
          </div>
        </StatCard>
        <StatCard $delay="0.4s" $color="linear-gradient(135deg, #ec4899, #db2777)">
          <div className="icon">🎁</div>
          <div className="info">
            <h3>Puntos Fidelidad</h3>
            <p>{citas.length * 100}</p>
          </div>
        </StatCard>
      </StatsGrid>

      <Section>
        <SectionHeader>
          <h3>📅 Próximas Citas</h3>
          <button onClick={() => navigate('/cliente/mis-citas')}>Ver todas</button>
        </SectionHeader>
        
        {citasProximas.length > 0 ? (
          <CitasList>
            {citasProximas.map(cita => {
              const { day, month } = formatDate(cita.fecha)
              return (
                <CitaCard key={cita.id} $status={cita.estado}>
                  <div className="date-box">
                    <div className="day">{day}</div>
                    <div className="month">{month}</div>
                  </div>
                  <div className="info">
                    <h4>{cita.servicio}</h4>
                    <p>{cita.hora} - {cita.profesional || 'Profesional asignado'}</p>
                  </div>
                  <span className="status">{cita.estado}</span>
                </CitaCard>
              )
            })}
          </CitasList>
        ) : (
          <EmptyState>
            <div className="icon">📅</div>
            <p>No tienes citas agendadas</p>
            <button onClick={() => navigate('/cliente/agendar')}>Agenda tu primera cita</button>
          </EmptyState>
        )}
      </Section>

      <Section>
        <SectionHeader>
          <h3>🎉 Promociones para Ti</h3>
        </SectionHeader>
        
        <PromocionesGrid>
          {promociones.map(promo => (
            <PromocionCard key={promo.id} $color={promo.color}>
              <span className="tag">{promo.tag}</span>
              <h4>{promo.titulo}</h4>
              <p>{promo.descripcion}</p>
              <div className="price">
                ${promo.precio === 0 ? 'Gratis' : promo.precio.toLocaleString('es-CO')}
                {promo.original && <span> ${promo.original.toLocaleString('es-CO')}</span>}
              </div>
            </PromocionCard>
          ))}
        </PromocionesGrid>
      </Section>
    </Container>
  )
}

export default ClienteDashboard