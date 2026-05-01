import { useState, useEffect } from 'react'
import styled from 'styled-components'
import { toast } from 'react-toastify'

const DashboardContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  padding: 20px;
`

const Header = styled.div`
  text-align: center;
  margin-bottom: 32px;

  h1 {
    color: #1f2937;
    font-size: 32px;
    font-weight: 700;
    margin: 0 0 8px 0;
  }

  p {
    color: #6b7280;
    font-size: 16px;
    margin: 0;
  }
`

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
  margin-bottom: 32px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const StatCard = styled.div`
  background: white;
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  }

  .stat-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 16px;

    .stat-icon {
      width: 48px;
      height: 48px;
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 24px;
      background: ${props => props.iconBg || '#667eea'};
      color: white;
    }

    .stat-change {
      font-size: 12px;
      font-weight: 600;
      padding: 4px 8px;
      border-radius: 20px;
      background: ${props => props.changeColor || '#d1fae5'};
      color: ${props => props.changeTextColor || '#065f46'};
    }
  }

  .stat-value {
    font-size: 32px;
    font-weight: 700;
    color: #1f2937;
    margin-bottom: 4px;
  }

  .stat-label {
    color: #6b7280;
    font-size: 14px;
    font-weight: 500;
  }
`

const ChartsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  margin-bottom: 32px;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`

const ChartCard = styled.div`
  background: white;
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);

  h3 {
    margin: 0 0 20px 0;
    color: #1f2937;
    font-size: 18px;
    font-weight: 600;
  }
`

const ChartPlaceholder = styled.div`
  height: 200px;
  background: #f8f9fa;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #6b7280;
  font-size: 14px;
`

const RecentActivity = styled.div`
  background: white;
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  margin-bottom: 32px;

  h3 {
    margin: 0 0 20px 0;
    color: #1f2937;
    font-size: 18px;
    font-weight: 600;
  }
`

const ActivityList = styled.div`
  space-y: 16px;
`

const ActivityItem = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 16px;
  background: #f8f9fa;
  border-radius: 8px;
  transition: all 0.3s ease;

  &:hover {
    background: #e9ecef;
  }

  .activity-icon {
    width: 40px;
    height: 40px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    background: ${props => props.iconBg || '#667eea'};
    color: white;
  }

  .activity-content {
    flex: 1;

    h4 {
      margin: 0 0 4px 0;
      font-size: 14px;
      color: #1f2937;
      font-weight: 600;
    }

    p {
      margin: 0;
      font-size: 12px;
      color: #6b7280;
    }
  }

  .activity-time {
    font-size: 12px;
    color: #9ca3af;
  }
`

const QuickActions = styled.div`
  background: white;
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);

  h3 {
    margin: 0 0 20px 0;
    color: #1f2937;
    font-size: 18px;
    font-weight: 600;
  }
`

const ActionsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 16px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const ActionButton = styled.button`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px;
  background: #f8f9fa;
  border: 2px solid #e5e7eb;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  text-align: left;

  &:hover {
    background: #667eea;
    border-color: #667eea;
    color: white;
    transform: translateY(-2px);
  }

  .action-icon {
    font-size: 20px;
  }

  .action-content {
    h4 {
      margin: 0 0 4px 0;
      font-size: 14px;
      font-weight: 600;
    }

    p {
      margin: 0;
      font-size: 12px;
      opacity: 0.8;
    }
  }
`

const Dashboard = () => {
  const [stats, setStats] = useState({
    totalSales: 0,
    totalClients: 0,
    appointmentsToday: 0,
    pendingPayments: 0
  })

  const [recentActivities, setRecentActivities] = useState([
    {
      id: 1,
      type: 'appointment',
      title: 'Nueva cita agendada',
      description: 'María García - Corte de cabello',
      time: 'Hace 5 min',
      icon: '📅',
      iconBg: '#10b981'
    },
    {
      id: 2,
      type: 'payment',
      title: 'Pago recibido',
      description: '$50.000 - Carlos Rodríguez',
      time: 'Hace 15 min',
      icon: '💰',
      iconBg: '#f59e0b'
    },
    {
      id: 3,
      type: 'client',
      title: 'Nuevo cliente registrado',
      description: 'Ana López se unió al sistema',
      time: 'Hace 30 min',
      icon: '👤',
      iconBg: '#667eea'
    },
    {
      id: 4,
      type: 'service',
      title: 'Servicio completado',
      description: 'Tratamiento facial - Laura Martínez',
      time: 'Hace 1 hora',
      icon: '✨',
      iconBg: '#8b5cf6'
    }
  ])

  useEffect(() => {
    // Simular carga de datos
    const loadDashboardData = async () => {
      try {
        // Simular llamada a API
        await new Promise(resolve => setTimeout(resolve, 1000))

        setStats({
          totalSales: 2450000,
          totalClients: 156,
          appointmentsToday: 12,
          pendingPayments: 340000
        })
      } catch (error) {
        toast.error('Error al cargar datos del dashboard')
      }
    }

    loadDashboardData()
  }, [])

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0
    }).format(amount)
  }

  const quickActions = [
    {
      id: 'new-client',
      title: 'Nuevo Cliente',
      description: 'Registrar cliente',
      icon: '👤',
      action: () => toast.info('Funcionalidad próximamente')
    },
    {
      id: 'new-appointment',
      title: 'Nueva Cita',
      description: 'Agendar turno',
      icon: '📅',
      action: () => toast.info('Funcionalidad próximamente')
    },
    {
      id: 'add-service',
      title: 'Agregar Servicio',
      description: 'Nuevo servicio',
      icon: '✨',
      action: () => toast.info('Funcionalidad próximamente')
    },
    {
      id: 'view-reports',
      title: 'Ver Reportes',
      description: 'Análisis de datos',
      icon: '📊',
      action: () => toast.info('Funcionalidad próximamente')
    }
  ]

  return (
    <DashboardContainer>
      <div style={{maxWidth: '1400px', margin: '0 auto'}}>
        <Header>
          <h1>INFORMACIÓN DETALLADA</h1>
        </Header>

        <StatsGrid>
          <StatCard iconBg="#10b981" changeColor="#d1fae5" changeTextColor="#065f46">
            <div className="stat-header">
              <div className="stat-icon">💰</div>
              <div className="stat-change">+12%</div>
            </div>
            <div className="stat-value">{formatCurrency(stats.totalSales)}</div>
            <div className="stat-label">Ventas Totales</div>
          </StatCard>

          <StatCard iconBg="#667eea" changeColor="#dbeafe" changeTextColor="#1e40af">
            <div className="stat-header">
              <div className="stat-icon">👥</div>
              <div className="stat-change">+8%</div>
            </div>
            <div className="stat-value">{stats.totalClients}</div>
            <div className="stat-label">Total Clientes</div>
          </StatCard>

          <StatCard iconBg="#f59e0b" changeColor="#fef3c7" changeTextColor="#92400e">
            <div className="stat-header">
              <div className="stat-icon">📅</div>
              <div className="stat-change">-3%</div>
            </div>
            <div className="stat-value">{stats.appointmentsToday}</div>
            <div className="stat-label">Citas Hoy</div>
          </StatCard>

          <StatCard iconBg="#ef4444" changeColor="#fee2e2" changeTextColor="#991b1b">
            <div className="stat-header">
              <div className="stat-icon">⏳</div>
              <div className="stat-change">+5%</div>
            </div>
            <div className="stat-value">{formatCurrency(stats.pendingPayments)}</div>
            <div className="stat-label">Pagos Pendientes</div>
          </StatCard>
        </StatsGrid>

        <ChartsGrid>
          <ChartCard>
            <h3>Ventas Mensuales</h3>
            <ChartPlaceholder>
              📊 Gráfico de ventas próximamente
            </ChartPlaceholder>
          </ChartCard>

          <ChartCard>
            <h3>Citas por Día</h3>
            <ChartPlaceholder>
              📅 Gráfico de citas próximamente
            </ChartPlaceholder>
          </ChartCard>
        </ChartsGrid>

        <RecentActivity>
          <h3>Actividad Reciente</h3>
          <ActivityList>
            {recentActivities.map(activity => (
              <ActivityItem key={activity.id} iconBg={activity.iconBg}>
                <div className="activity-icon">{activity.icon}</div>
                <div className="activity-content">
                  <h4>{activity.title}</h4>
                  <p>{activity.description}</p>
                </div>
                <div className="activity-time">{activity.time}</div>
              </ActivityItem>
            ))}
          </ActivityList>
        </RecentActivity>

        <QuickActions>
          <h3>Acciones Rápidas</h3>
          <ActionsGrid>
            {quickActions.map(action => (
              <ActionButton key={action.id} onClick={action.action}>
                <div className="action-icon">{action.icon}</div>
                <div className="action-content">
                  <h4>{action.title}</h4>
                  <p>{action.description}</p>
                </div>
              </ActionButton>
            ))}
          </ActionsGrid>
        </QuickActions>
      </div>
    </DashboardContainer>
  )
}

export default Dashboard