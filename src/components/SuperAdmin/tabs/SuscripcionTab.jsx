import { useState, useEffect } from 'react'
import { toast } from 'react-toastify'
import styled from 'styled-components'

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
`

const Card = styled.div`
  background: white;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  margin-bottom: 24px;
`

const CardHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;

  h3 {
    margin: 0;
    color: #1f2937;
    font-size: 18px;
  }

  .badge {
    margin-left: auto;
    padding: 4px 12px;
    border-radius: 20px;
    font-size: 12px;
    font-weight: 600;
    text-transform: uppercase;

    &.active {
      background: #d1fae5;
      color: #065f46;
    }

    &.expired {
      background: #fee2e2;
      color: #991b1b;
    }

    &.pending {
      background: #fef3c7;
      color: #92400e;
    }
  }
`

// === SELECTOR DE PLANES ===
const PlansGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 16px;
  margin-bottom: 24px;
`

const PlanCard = styled.div`
  background: ${props => props.$selected
    ? 'linear-gradient(135deg, var(--primary-color), var(--secondary-color))'
    : 'white'};
  border: 2px solid ${props => props.$selected ? 'transparent' : '#e5e7eb'};
  border-radius: 12px;
  padding: 20px;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.12);
    border-color: ${props => props.$selected ? 'transparent' : 'var(--primary-color)'};
  }

  ${props => props.$selected && `
    box-shadow: 0 8px 25px rgba(var(--primary-rgb), 0.3);
  `}

  .plan-icon {
    font-size: 36px;
    margin-bottom: 8px;
  }

  .plan-name {
    font-size: 16px;
    font-weight: 700;
    color: ${props => props.$selected ? 'white' : '#1f2937'};
    margin-bottom: 4px;
  }

  .plan-price {
    font-size: 22px;
    font-weight: 800;
    color: ${props => props.$selected ? 'rgba(255,255,255,0.95)' : 'var(--primary-color)'};
    margin-bottom: 2px;

    span {
      font-size: 12px;
      font-weight: 500;
      opacity: 0.7;
    }
  }

  .plan-users {
    font-size: 12px;
    color: ${props => props.$selected ? 'rgba(255,255,255,0.8)' : '#9ca3af'};
    margin-bottom: 12px;
  }

  .plan-features {
    list-style: none;
    padding: 0;
    margin: 0;
    text-align: left;

    li {
      font-size: 12px;
      color: ${props => props.$selected ? 'rgba(255,255,255,0.85)' : '#6b7280'};
      padding: 3px 0;
      display: flex;
      align-items: center;
      gap: 6px;

      &::before {
        content: '✓';
        font-weight: 700;
        color: ${props => props.$selected ? 'white' : '#10b981'};
      }
    }
  }
`

// === INFORMACIÓN DE SUSCRIPCIÓN ===
const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const InfoItem = styled.div`
  label {
    display: block;
    font-weight: 600;
    color: #374151;
    font-size: 13px;
    margin-bottom: 4px;
  }

  span {
    color: #6b7280;
    font-size: 15px;
  }

  input, select {
    width: 100%;
    padding: 8px 12px;
    border: 2px solid #e5e7eb;
    border-radius: 6px;
    font-size: 14px;
    transition: border-color 0.3s ease;
    box-sizing: border-box;

    &:focus {
      outline: none;
      border-color: var(--primary-color);
    }
  }
`

const ProgressSection = styled.div`
  margin-top: 16px;
`

const ProgressRow = styled.div`
  margin-bottom: 14px;

  .progress-header {
    display: flex;
    justify-content: space-between;
    font-size: 13px;
    color: #6b7280;
    margin-bottom: 6px;

    strong {
      color: #374151;
    }
  }
`

const ProgressBar = styled.div`
  height: 8px;
  background: #e5e7eb;
  border-radius: 10px;
  overflow: hidden;
  position: relative;

  .fill {
    height: 100%;
    border-radius: 10px;
    background: ${props =>
      props.$percent > 90 ? '#ef4444' :
      props.$percent > 70 ? '#f59e0b' :
      props.$percent > 0 ? 'var(--primary-color)' :
      '#e5e7eb'};
    width: ${props => Math.min(props.$percent, 100)}%;
    transition: width 0.8s cubic-bezier(0.4, 0, 0.2, 1);
  }
`

// === USUARIOS ===
const SearchInput = styled.input`
  width: 100%;
  padding: 10px 16px;
  border: 2px solid #e5e7eb;
  border-radius: 8px;
  font-size: 14px;
  margin-bottom: 16px;
  box-sizing: border-box;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: var(--primary-color);
  }
`

const UserList = styled.div`
  margin-top: 8px;
`

const UserItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  background: ${props => props.$blocked ? '#fef2f2' : '#f8f9fa'};
  border-radius: 8px;
  margin-bottom: 8px;
  transition: all 0.3s ease;
  opacity: ${props => props.$blocked ? 0.7 : 1};

  &:hover {
    background: ${props => props.$blocked ? '#fee2e2' : '#f1f3f4'};
  }

  .user-info {
    display: flex;
    align-items: center;
    gap: 12px;
    flex: 1;
    min-width: 0;

    .avatar {
      width: 36px;
      height: 36px;
      border-radius: 50%;
      background: ${props => props.$blocked ? '#9ca3af' : 'var(--primary-color)'};
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-weight: 700;
      font-size: 14px;
      flex-shrink: 0;
    }

    .details {
      min-width: 0;

      h4 {
        margin: 0 0 2px 0;
        font-size: 14px;
        color: #1f2937;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      p {
        margin: 0;
        font-size: 12px;
        color: #6b7280;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
  }

  .status-tag {
    padding: 2px 8px;
    border-radius: 12px;
    font-size: 11px;
    font-weight: 600;
    margin: 0 12px;
    white-space: nowrap;

    &.blocked {
      background: #fee2e2;
      color: #991b1b;
    }

    &.active {
      background: #d1fae5;
      color: #065f46;
    }
  }

  .actions {
    display: flex;
    gap: 6px;
    flex-shrink: 0;
  }
`

const ActionButton = styled.button`
  padding: 6px 14px;
  border: none;
  border-radius: 6px;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &.block {
    background: #ef4444;
    color: white;

    &:hover {
      background: #dc2626;
    }
  }

  &.unblock {
    background: #10b981;
    color: white;

    &:hover {
      background: #059669;
    }
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`

const EmptyState = styled.div`
  text-align: center;
  padding: 40px 20px;
  color: #9ca3af;

  .icon {
    font-size: 48px;
    margin-bottom: 12px;
  }

  p {
    font-size: 14px;
  }
`

// === CONTROLES ===
const ControlsSection = styled.div`
  background: #f8f9fa;
  border-radius: 12px;
  padding: 24px;
  text-align: center;
`

const ButtonGroup = styled.div`
  display: flex;
  gap: 12px;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 16px;

  @media (max-width: 768px) {
    flex-direction: column;
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
  display: inline-flex;
  align-items: center;
  gap: 8px;

  &.primary {
    background: var(--primary-color);
    color: white;

    &:hover {
      background: var(--secondary-color);
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

  &.warning {
    background: #f59e0b;
    color: white;

    &:hover {
      background: #d97706;
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

  &.outline {
    background: transparent;
    color: var(--primary-color);
    border: 2px solid var(--primary-color);

    &:hover {
      background: rgba(var(--primary-rgb), 0.1);
    }
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none !important;
  }
`

// === HISTORIAL DE PAGOS ===
const HistoryTable = styled.div`
  margin-top: 16px;
`

const HistoryRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr auto;
  gap: 12px;
  padding: 12px 16px;
  border-bottom: 1px solid #f1f3f4;
  align-items: center;
  font-size: 13px;

  &:hover {
    background: #f8f9fa;
  }

  .amount {
    font-weight: 700;
    color: #1f2937;
  }

  .date {
    color: #6b7280;
  }

  .method {
    color: #6b7280;
  }

  .receipt {
    color: var(--primary-color);
    cursor: pointer;
    font-weight: 600;
    font-size: 12px;

    &:hover {
      text-decoration: underline;
    }
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr 1fr;
  }
`

const HistoryHeader = styled(HistoryRow)`
  font-weight: 700;
  color: #374151;
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  border-bottom: 2px solid #e5e7eb;
`

// === PLANES PREDEFINIDOS ===
const AVAILABLE_PLANS = [
  {
    id: 'basic',
    name: 'Básico',
    icon: '🌱',
    price: 0,
    maxUsers: 5,
    features: ['5 usuarios', '1 empresa', 'Gestión de agenda', 'Reportes básicos', 'Soporte email'],
    monthlyPrice: 0
  },
  {
    id: 'professional',
    name: 'Profesional',
    icon: '⭐',
    price: 149900,
    maxUsers: 20,
    features: ['20 usuarios', '1 empresa', 'Agenda + Turnos', 'Reportes avanzados', 'Soporte prioritario'],
    monthlyPrice: 49900
  },
  {
    id: 'premium',
    name: 'Premium',
    icon: '👑',
    price: 399900,
    maxUsers: 50,
    features: ['50 usuarios', '3 empresas', 'Todo incluido', 'API acceso', 'Soporte 24/7'],
    monthlyPrice: 99900
  },
  {
    id: 'enterprise',
    name: 'Empresarial',
    icon: '🏢',
    price: 999900,
    maxUsers: 999,
    features: ['Usuarios ilimitados', 'Empresas ilimitadas', 'Personalización total', 'Backups dedicados', 'Gerente de cuenta'],
    monthlyPrice: 249900
  }
]

// === STORAGE KEY ===
const STORAGE_KEY = 'turnoflow_subscription'

// === COMPONENTE PRINCIPAL ===
const SuscripcionTab = () => {
  const [loading, setLoading] = useState(false)
  const [editing, setEditing] = useState(false)
  const [userSearch, setUserSearch] = useState('')
  const [showHistory, setShowHistory] = useState(false)

  // Estado de suscripción editable
  const [subscription, setSubscription] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved) {
      try { return JSON.parse(saved) } catch { /* ignorar */ }
    }
    return getDefaultSubscription()
  })

  function getDefaultSubscription() {
    const now = new Date()
    const start = new Date(now.getFullYear(), 0, 1)
    const end = new Date(now.getFullYear(), 11, 31)
    return {
      planId: 'premium',
      planName: 'Premium',
      startDate: start.toISOString().split('T')[0],
      endDate: end.toISOString().split('T')[0],
      status: 'active',
      maxUsers: 50,
      usersCount: 25,
      customPrices: {
        monthly: 99900,
        total: 399900
      },
      users: [
        { id: 1, name: 'Ana García', email: 'ana@ejemplo.com', role: 'Administrador', blocked: false },
        { id: 2, name: 'Carlos López', email: 'carlos@ejemplo.com', role: 'Vendedor', blocked: false },
        { id: 3, name: 'María Rodríguez', email: 'maria@ejemplo.com', role: 'Asesor', blocked: true },
        { id: 4, name: 'Juan Pérez', email: 'juan@ejemplo.com', role: 'Cliente', blocked: false },
        { id: 5, name: 'Laura Martínez', email: 'laura@ejemplo.com', role: 'Vendedor', blocked: false },
        { id: 6, name: 'Pedro Gómez', email: 'pedro@ejemplo.com', role: 'Cobrador', blocked: false }
      ],
      payments: [
        { id: 1, date: '2026-01-15', amount: 99900, method: 'Tarjeta débito', status: 'Pagado' },
        { id: 2, date: '2026-02-15', amount: 99900, method: 'Transferencia', status: 'Pagado' },
        { id: 3, date: '2026-03-15', amount: 99900, method: 'Tarjeta crédito', status: 'Pagado' },
        { id: 4, date: '2026-04-15', amount: 99900, method: 'Efectivo', status: 'Pagado' }
      ]
    }
  }

  // Persistir en localStorage
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(subscription))
  }, [subscription])

  // Plan seleccionado
  const selectedPlan = AVAILABLE_PLANS.find(p => p.id === subscription.planId) || AVAILABLE_PLANS[2]

  // Precios efectivos: usan customPrices si están definidos, si no los del plan por defecto
  const effectiveMonthlyPrice = subscription.customPrices?.monthly ?? selectedPlan.monthlyPrice
  const effectiveTotalPrice = subscription.customPrices?.total ?? selectedPlan.price

  // Cálculos
  const today = new Date()
  const end = new Date(subscription.endDate)
  const start = new Date(subscription.startDate)
  const totalDays = Math.max(1, Math.round((end - start) / (1000 * 60 * 60 * 24)))
  const remainingDays = Math.max(0, Math.round((end - today) / (1000 * 60 * 60 * 24)))
  const usersPercent = Math.min(100, Math.round((subscription.usersCount / subscription.maxUsers) * 100))

  // Usuarios filtrados
  const filteredUsers = subscription.users.filter(u =>
    u.name.toLowerCase().includes(userSearch.toLowerCase()) ||
    u.email.toLowerCase().includes(userSearch.toLowerCase()) ||
    u.role.toLowerCase().includes(userSearch.toLowerCase())
  )

  // === HANDLERS ===
  const handleSelectPlan = (planId) => {
    const plan = AVAILABLE_PLANS.find(p => p.id === planId)
    if (!plan) return
    setSubscription(prev => ({
      ...prev,
      planId: plan.id,
      planName: plan.name,
      maxUsers: plan.maxUsers,
      customPrices: {
        monthly: plan.monthlyPrice,
        total: plan.price
      }
    }))
    toast.success(`Plan ${plan.name} seleccionado`)
  }

  const handleSaveConfig = () => {
    setEditing(false)
    localStorage.setItem(STORAGE_KEY, JSON.stringify(subscription))
    toast.success('Configuración de suscripción guardada')
  }

  const handleBlockUser = (userId) => {
    setSubscription(prev => {
      const updated = prev.users.map(u =>
        u.id === userId ? { ...u, blocked: true } : u
      )
      return { ...prev, users: updated }
    })
    const user = subscription.users.find(u => u.id === userId)
    toast.success(`${user?.name} bloqueado`)
  }

  const handleUnblockUser = (userId) => {
    setSubscription(prev => {
      const updated = prev.users.map(u =>
        u.id === userId ? { ...u, blocked: false } : u
      )
      return { ...prev, users: updated }
    })
    const user = subscription.users.find(u => u.id === userId)
    toast.success(`${user?.name} desbloqueado`)
  }

  const handleRenewSubscription = () => {
    setLoading(true)
    setTimeout(() => {
      const newEnd = new Date(today)
      newEnd.setFullYear(newEnd.getFullYear() + 1)
      setSubscription(prev => ({
        ...prev,
        endDate: newEnd.toISOString().split('T')[0],
        status: 'active',
        payments: [...prev.payments, {
          id: Date.now(),
          date: today.toISOString().split('T')[0],
          amount: effectiveMonthlyPrice || effectiveTotalPrice,
          method: 'Tarjeta débito',
          status: 'Pagado'
        }]
      }))
      toast.success(`Suscripción renovada hasta ${newEnd.toLocaleDateString('es-CO')}`)
      setLoading(false)
    }, 1500)
  }

  const handleBlockAllUsers = () => {
    if (!window.confirm('¿Está seguro de que desea bloquear a TODOS los usuarios?')) return
    setSubscription(prev => ({
      ...prev,
      users: prev.users.map(u => ({ ...u, blocked: true }))
    }))
    toast.success('Todos los usuarios han sido bloqueados')
  }

  const handleUnblockAllUsers = () => {
    if (!window.confirm('¿Está seguro de que desea desbloquear a TODOS los usuarios?')) return
    setSubscription(prev => ({
      ...prev,
      users: prev.users.map(u => ({ ...u, blocked: false }))
    }))
    toast.success('Todos los usuarios han sido desbloqueados')
  }

  const handleCancelSubscription = () => {
    if (!window.confirm('¿Está seguro de CANCELAR la suscripción? Perderá acceso al final del período.')) return
    setSubscription(prev => ({ ...prev, status: 'expired' }))
    toast.warning('Suscripción cancelada')
  }

  const formatCurrency = (value) =>
    new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(value)

  const formatDate = (dateStr) =>
    new Date(dateStr + 'T00:00:00').toLocaleDateString('es-CO', {
      year: 'numeric', month: 'long', day: 'numeric'
    })

  const statusInfo = {
    active: { label: 'Activa', className: 'active' },
    expired: { label: 'Expirada', className: 'expired' },
    pending: { label: 'Pendiente', className: 'pending' }
  }[subscription.status] || { label: 'Activa', className: 'active' }

  return (
    <Container>
      {/* === SELECTOR DE PLANES === */}
      <Card>
        <CardHeader>
          <h3>Seleccionar Plan</h3>
        </CardHeader>
        <PlansGrid>
          {AVAILABLE_PLANS.map(plan => (
            <PlanCard
              key={plan.id}
              $selected={subscription.planId === plan.id}
              onClick={() => handleSelectPlan(plan.id)}
            >
              <div className="plan-icon">{plan.icon}</div>
              <div className="plan-name">{plan.name}</div>
              <div className="plan-price">
                {plan.price === 0 ? 'Gratis' : `${formatCurrency(plan.monthlyPrice)}`}
                {plan.price > 0 && <span> /mes</span>}
              </div>
              <div className="plan-users">Hasta {plan.maxUsers === 999 ? '∞' : plan.maxUsers} usuarios</div>
              <ul className="plan-features">
                {plan.features.map((f, i) => (
                  <li key={i}>{f}</li>
                ))}
              </ul>
            </PlanCard>
          ))}
        </PlansGrid>
      </Card>

      {/* === INFORMACIÓN DE SUSCRIPCIÓN === */}
      <Card>
        <CardHeader>
          <h3>Detalle de Suscripción</h3>
          <span className={`badge ${statusInfo.className}`}>{statusInfo.label}</span>
        </CardHeader>

        {editing ? (
          <>
            <InfoGrid>
              <InfoItem>
                <label>Nombre del Plan</label>
                <input
                  type="text"
                  value={subscription.planName}
                  onChange={e => setSubscription(prev => ({ ...prev, planName: e.target.value }))}
                />
              </InfoItem>
              <InfoItem>
                <label>Estado</label>
                <select
                  value={subscription.status}
                  onChange={e => setSubscription(prev => ({ ...prev, status: e.target.value }))}
                >
                  <option value="active">Activa</option>
                  <option value="expired">Expirada</option>
                  <option value="pending">Pendiente</option>
                </select>
              </InfoItem>
              <InfoItem>
                <label>Fecha de Inicio</label>
                <input
                  type="date"
                  value={subscription.startDate}
                  onChange={e => setSubscription(prev => ({ ...prev, startDate: e.target.value }))}
                />
              </InfoItem>
              <InfoItem>
                <label>Fecha de Vencimiento</label>
                <input
                  type="date"
                  value={subscription.endDate}
                  onChange={e => setSubscription(prev => ({ ...prev, endDate: e.target.value }))}
                />
              </InfoItem>
              <InfoItem>
                <label>Usuarios Máximos</label>
                <input
                  type="number"
                  min="1"
                  max="999"
                  value={subscription.maxUsers}
                  onChange={e => setSubscription(prev => ({ ...prev, maxUsers: Number(e.target.value) }))}
                />
              </InfoItem>
              <InfoItem>
                <label>Precio Mensual (COP)</label>
                <input
                  type="number"
                  min="0"
                  step="1000"
                  value={subscription.customPrices?.monthly ?? ''}
                  onChange={e => setSubscription(prev => ({
                    ...prev,
                    customPrices: { ...(prev.customPrices || {}), monthly: Number(e.target.value) }
                  }))}
                  placeholder="Ej: 99900"
                />
              </InfoItem>
              <InfoItem>
                <label>Precio Total Plan (COP)</label>
                <input
                  type="number"
                  min="0"
                  step="10000"
                  value={subscription.customPrices?.total ?? ''}
                  onChange={e => setSubscription(prev => ({
                    ...prev,
                    customPrices: { ...(prev.customPrices || {}), total: Number(e.target.value) }
                  }))}
                  placeholder="Ej: 399900"
                />
              </InfoItem>
              <InfoItem>
                <label>Usuarios Registrados</label>
                <span>{subscription.usersCount}</span>
              </InfoItem>
            </InfoGrid>
            <ButtonGroup>
              <ControlButton className="primary" onClick={handleSaveConfig}>
                💾 Guardar Cambios
              </ControlButton>
              <ControlButton className="outline" onClick={() => setEditing(false)}>
                Cancelar
              </ControlButton>
            </ButtonGroup>
          </>
        ) : (
          <>
            <InfoGrid>
              <InfoItem>
                <label>Plan</label>
                <span>{selectedPlan.icon} {subscription.planName}</span>
              </InfoItem>
              <InfoItem>
                <label>Costo Mensual</label>
                <span style={{ color: 'var(--primary-color)', fontWeight: 700 }}>
                  {effectiveMonthlyPrice === 0 ? 'Gratis' : formatCurrency(effectiveMonthlyPrice) + ' /mes'}
                  {subscription.customPrices && (
                    <span style={{ fontSize: 11, color: '#9ca3af', fontWeight: 400, marginLeft: 8 }}>
                      (personalizado)
                    </span>
                  )}
                </span>
              </InfoItem>
              <InfoItem>
                <label>Fecha de Inicio</label>
                <span>{formatDate(subscription.startDate)}</span>
              </InfoItem>
              <InfoItem>
                <label>Fecha de Vencimiento</label>
                <span>{formatDate(subscription.endDate)}</span>
              </InfoItem>
              <InfoItem>
                <label>Valor Total Plan</label>
                <span style={{ fontWeight: 700 }}>
                  {effectiveTotalPrice === 0 ? 'Gratis' : formatCurrency(effectiveTotalPrice)}
                </span>
              </InfoItem>
              <InfoItem>
                <label>Usuarios</label>
                <span>{subscription.usersCount} de {subscription.maxUsers}</span>
              </InfoItem>
            </InfoGrid>

            <ProgressSection>
              <ProgressRow>
                <div className="progress-header">
                  <span>Días restantes: <strong>{remainingDays}</strong> de {totalDays}</span>
                  <span>{Math.round((remainingDays / totalDays) * 100)}%</span>
                </div>
                <ProgressBar $percent={100 - Math.round((remainingDays / totalDays) * 100)}>
                  <div className="fill" />
                </ProgressBar>
              </ProgressRow>
              <ProgressRow>
                <div className="progress-header">
                  <span>Usuarios: <strong>{subscription.usersCount}</strong> de {subscription.maxUsers}</span>
                  <span>{usersPercent}%</span>
                </div>
                <ProgressBar $percent={usersPercent}>
                  <div className="fill" />
                </ProgressBar>
              </ProgressRow>
            </ProgressSection>

            <ButtonGroup>
              <ControlButton className="outline" onClick={() => setEditing(true)}>
                ✏️ Editar Configuración
              </ControlButton>
            </ButtonGroup>
          </>
        )}
      </Card>

      {/* === GESTIÓN DE USUARIOS === */}
      <Card>
        <CardHeader>
          <h3>Usuarios del Sistema</h3>
          <span style={{ fontSize: 13, color: '#9ca3af' }}>
            {subscription.users.filter(u => !u.blocked).length} activos
          </span>
        </CardHeader>

        <SearchInput
          type="text"
          placeholder="🔍 Buscar usuario por nombre, email o rol..."
          value={userSearch}
          onChange={e => setUserSearch(e.target.value)}
        />

        {filteredUsers.length === 0 ? (
          <EmptyState>
            <div className="icon">👤</div>
            <p>No se encontraron usuarios con ese criterio de búsqueda</p>
          </EmptyState>
        ) : (
          <UserList>
            {filteredUsers.map(user => (
              <UserItem key={user.id} $blocked={user.blocked}>
                <div className="user-info">
                  <div className="avatar">
                    {user.blocked ? '🚫' : user.name.charAt(0)}
                  </div>
                  <div className="details">
                    <h4>{user.name}</h4>
                    <p>{user.email} • {user.role}</p>
                  </div>
                </div>
                {user.blocked && <span className="status-tag blocked">Bloqueado</span>}
                {!user.blocked && <span className="status-tag active">Activo</span>}
                <div className="actions">
                  {user.blocked ? (
                    <ActionButton className="unblock" onClick={() => handleUnblockUser(user.id)}>
                      Desbloquear
                    </ActionButton>
                  ) : (
                    <ActionButton className="block" onClick={() => handleBlockUser(user.id)}>
                      Bloquear
                    </ActionButton>
                  )}
                </div>
              </UserItem>
            ))}
          </UserList>
        )}
      </Card>

      {/* === HISTORIAL DE PAGOS === */}
      <Card>
        <CardHeader>
          <h3>Historial de Pagos</h3>
          <span
            style={{ fontSize: 13, color: 'var(--primary-color)', cursor: 'pointer', fontWeight: 600 }}
            onClick={() => setShowHistory(!showHistory)}
          >
            {showHistory ? '▲ Ocultar' : '▼ Mostrar'}
          </span>
        </CardHeader>

        {showHistory && (
          <>
            <HistoryTable>
              <HistoryHeader>
                <div>Fecha</div>
                <div>Monto</div>
                <div>Método</div>
                <div>Recibo</div>
              </HistoryHeader>
              {subscription.payments.map(p => (
                <HistoryRow key={p.id}>
                  <div className="date">{formatDate(p.date)}</div>
                  <div className="amount">{formatCurrency(p.amount)}</div>
                  <div className="method">{p.method}</div>
                  <div className="receipt" onClick={() => toast.info(`Recibo #${p.id} - Simulado`)}>
                    📄 Ver
                  </div>
                </HistoryRow>
              ))}
            </HistoryTable>
            {subscription.payments.length === 0 && (
              <EmptyState>
                <div className="icon">📭</div>
                <p>No hay pagos registrados</p>
              </EmptyState>
            )}
          </>
        )}
      </Card>

      {/* === ACCIONES === */}
      <ControlsSection>
        <h3 style={{ margin: 0, color: '#374151' }}>Acciones de Suscripción</h3>
        <p style={{ fontSize: 13, color: '#9ca3af', margin: '8px 0 0 0' }}>
          Administra el estado general de la suscripción
        </p>
        <ButtonGroup>
          <ControlButton className="primary" onClick={handleRenewSubscription} disabled={loading}>
            {loading ? '⏳ Renovando...' : '🔄 Renovar Suscripción'}
          </ControlButton>
          <ControlButton className="warning" onClick={() => {
            setSubscription(prev => ({ ...prev, status: 'pending' }))
            toast.info('Suscripción en estado pendiente')
          }}>
            ⏸️ Pausar
          </ControlButton>
          <ControlButton className="success" onClick={handleUnblockAllUsers}>
            🔓 Desbloquear Todos
          </ControlButton>
          <ControlButton className="danger" onClick={handleBlockAllUsers}>
            🔒 Bloquear Todos
          </ControlButton>
          <ControlButton className="danger" onClick={handleCancelSubscription} style={{ opacity: 0.7 }}>
            🛑 Cancelar Suscripción
          </ControlButton>
        </ButtonGroup>
      </ControlsSection>
    </Container>
  )
}

export default SuscripcionTab