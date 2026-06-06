import { useState, useEffect } from 'react'
import styled from 'styled-components'
import { toast } from 'react-toastify'
import api from '../../../utils/api'
import { useAuth } from '../../../context/AuthContext'

// ── Styled ────────────────────────────────────────────────────
const Container = styled.div`max-width: 700px; margin: 0 auto;`

const PlanCard = styled.div`
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  border-radius: 16px;
  padding: 28px 32px;
  color: white;
  margin-bottom: 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 16px;
`

const PlanName = styled.div`
  h2 { margin: 0; font-size: 28px; font-weight: 700; text-transform: capitalize; }
  p  { margin: 4px 0 0; opacity: 0.85; font-size: 14px; }
`

const PlanPrice = styled.div`
  text-align: right;
  .price { font-size: 32px; font-weight: 700; }
  .period { font-size: 13px; opacity: 0.85; }
`

const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  margin-bottom: 24px;
  @media (max-width: 560px) { grid-template-columns: 1fr; }
`

const InfoCard = styled.div`
  background: #f8f9fa;
  border-radius: 12px;
  padding: 18px 20px;
  .label { font-size: 12px; color: #6b7280; font-weight: 600; text-transform: uppercase; letter-spacing: .4px; margin-bottom: 6px; }
  .value { font-size: 16px; font-weight: 600; color: #111827; }
  .sub   { font-size: 12px; color: #9ca3af; margin-top: 3px; }
`

const FeaturesCard = styled.div`
  background: #f8f9fa;
  border-radius: 12px;
  padding: 20px 24px;
  margin-bottom: 20px;
  h3 { margin: 0 0 14px; font-size: 14px; color: #374151; }
`

const Feature = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 6px 0;
  font-size: 14px;
  color: #374151;
  border-bottom: 1px solid #e9ecef;
  &:last-child { border-bottom: none; }
  .check { color: #22c55e; font-weight: 700; }
`

const PaymentsTable = styled.div`
  background: #f8f9fa;
  border-radius: 12px;
  overflow: hidden;
  h3 { margin: 0; padding: 16px 20px; font-size: 14px; color: #374151; background: #f1f3f4; border-bottom: 1px solid #e9ecef; }
`

const PaymentRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 20px;
  border-bottom: 1px solid #e9ecef;
  flex-wrap: wrap;
  gap: 8px;
  &:last-child { border-bottom: none; }
  .date  { font-size: 13px; color: #374151; }
  .ref   { font-size: 12px; color: #9ca3af; }
  .amount { font-weight: 600; color: #111827; font-size: 14px; }
`

const Badge = styled.span`
  font-size: 11px; font-weight: 600; padding: 3px 10px; border-radius: 10px;
  background: ${p => p.$bg || '#e5e7eb'};
  color: ${p => p.$color || '#374151'};
`

const statusStyle = {
  completed: { bg: '#dcfce7', color: '#15803d' },
  pending:   { bg: '#fef9c3', color: '#854d0e' },
  failed:    { bg: '#fee2e2', color: '#b91c1c' },
  refunded:  { bg: '#e0e7ff', color: '#3730a3' },
}

const planLimits = {
  free:         { users: 2,   appts: 50   },
  basic:        { users: 5,   appts: 200  },
  professional: { users: 15,  appts: 1000 },
  enterprise:   { users: '∞', appts: '∞'  },
}

const SuscripcionTab = () => {
  const { tenant }  = useAuth()
  const [data,     setData]     = useState(null)
  const [loading,  setLoading]  = useState(true)

  useEffect(() => {
    api.get('/settings').then(d => setData(d)).catch(e => toast.error('Error: ' + e.message)).finally(() => setLoading(false))
  }, [])

  if (loading) return <p style={{ color: '#9ca3af', padding: 8 }}>Cargando suscripción...</p>
  if (!data)   return <p style={{ color: '#ef4444', padding: 8 }}>No se pudo cargar la información.</p>

  const { plan, payments } = data
  const tenantData   = data.tenant
  const currentPlan  = tenantData?.plan ?? tenant?.plan ?? 'free'
  const limits       = planLimits[currentPlan] ?? planLimits.free

  // Último pago completado (status = 'completed' según el modelo)
  const lastPaid = payments?.find(p => p.status === 'completed')

  const fmt = (dateStr) => dateStr ? new Date(dateStr).toLocaleDateString('es-CO', { day: '2-digit', month: 'long', year: 'numeric' }) : '—'

  // Features: puede ser array de strings o null
  const featuresList = Array.isArray(plan?.features) ? plan.features : []

  return (
    <Container>
      {/* Plan actual */}
      <PlanCard>
        <PlanName>
          <h2>{currentPlan}</h2>
          <p>{plan?.display_name ?? currentPlan}</p>
        </PlanName>
        <PlanPrice>
          <div className="price">
            {plan?.price_cop ? `$${Number(plan.price_cop).toLocaleString('es-CO')}` : 'Gratis'}
          </div>
          {plan?.price_cop > 0 && <div className="period">COP / mes</div>}
        </PlanPrice>
      </PlanCard>

      {/* Métricas del plan */}
      <InfoGrid>
        <InfoCard>
          <div className="label">Estado</div>
          <div className="value">
            <Badge $bg={tenantData?.is_active ? '#dcfce7' : '#fee2e2'} $color={tenantData?.is_active ? '#15803d' : '#b91c1c'}>
              {tenantData?.is_active ? '● Activo' : '● Inactivo'}
            </Badge>
          </div>
        </InfoCard>
        <InfoCard>
          <div className="label">Usuarios incluidos</div>
          <div className="value">{plan?.max_users ?? limits.users}</div>
          <div className="sub">usuarios activos permitidos</div>
        </InfoCard>
        <InfoCard>
          <div className="label">Citas por mes</div>
          <div className="value">{plan?.max_appointments_month ?? limits.appts}</div>
          <div className="sub">límite mensual de citas</div>
        </InfoCard>
        <InfoCard>
          <div className="label">Cliente desde</div>
          <div className="value">{fmt(tenantData?.createdAt)}</div>
        </InfoCard>
        {lastPaid && (
          <>
            <InfoCard>
              <div className="label">Período actual desde</div>
              <div className="value">{fmt(lastPaid.period_start)}</div>
            </InfoCard>
            <InfoCard>
              <div className="label">Período actual hasta</div>
              <div className="value">{fmt(lastPaid.period_end)}</div>
            </InfoCard>
          </>
        )}
      </InfoGrid>

      {/* Features del plan */}
      {featuresList.length > 0 && (
        <FeaturesCard>
          <h3>✨ Funcionalidades incluidas</h3>
          {featuresList.map((feature, i) => (
            <Feature key={i}>
              <span className="check">✓</span>
              <span>{feature}</span>
            </Feature>
          ))}
        </FeaturesCard>
      )}

      {/* Historial de pagos */}
      <PaymentsTable>
        <h3>📄 Historial de pagos</h3>
        {!payments || payments.length === 0 ? (
          <p style={{ padding: '16px 20px', color: '#9ca3af', margin: 0, fontSize: 14 }}>
            Sin pagos registrados (plan gratuito o pendiente de activación).
          </p>
        ) : (
          payments.map(p => {
            const st = statusStyle[p.status] ?? statusStyle.pending
            return (
              <PaymentRow key={p.id}>
                <div>
                  <div className="date">{fmt(p.createdAt)}</div>
                  <div className="ref">{p.reference ?? p.payment_method ?? '—'}</div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <span className="amount">${Number(p.amount_cop ?? 0).toLocaleString('es-CO')} COP</span>
                  <Badge $bg={st.bg} $color={st.color}>{p.status}</Badge>
                </div>
              </PaymentRow>
            )
          })
        )}
      </PaymentsTable>

      <p style={{ fontSize: 12, color: '#9ca3af', textAlign: 'center', marginTop: 16 }}>
        Para cambiar de plan o reportar un pago, contacta a soporte: soporte@turnoflow.co
      </p>
    </Container>
  )
}

export default SuscripcionTab
