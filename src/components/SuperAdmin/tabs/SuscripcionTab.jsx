import { useState, useEffect, useCallback } from 'react'
import { toast } from 'react-toastify'
import styled from 'styled-components'
import api from '../../../utils/api'

// ─── Styled ───────────────────────────────────────────────────────────────────

const Container = styled.div`max-width: 1100px; margin: 0 auto;`

const Card = styled.div`
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
  margin-bottom: 28px;
  overflow: hidden;
`
const CardHeader = styled.div`
  padding: 14px 24px;
  background: #f8f9fa;
  border-bottom: 1px solid #e9ecef;
  display: flex;
  align-items: center;
  gap: 10px;
  h3 { margin: 0; font-size: 15px; font-weight: 600; color: #374151; }
  .count { font-size: 11px; background: #e0f2fe; color: #0369a1; padding: 2px 8px; border-radius: 10px; font-weight: 600; }
`
const CardBody = styled.div`padding: 24px;`

// ─── Plans ────────────────────────────────────────────────────
const PlansGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 16px;
`
const PlanCard = styled.div`
  border: 2px solid #e5e7eb; border-radius: 12px; padding: 20px 16px; text-align: center;
  .icon { font-size: 32px; margin-bottom: 8px; }
  .name { font-size: 15px; font-weight: 700; color: #1f2937; margin-bottom: 4px; }
  .price { font-size: 20px; font-weight: 800; color: var(--primary-color); span { font-size: 11px; font-weight: 400; color: #9ca3af; } }
  .limits { font-size: 12px; color: #6b7280; margin-top: 6px; }
  .active-badge { display: inline-block; margin-top: 10px; font-size: 10px; font-weight: 700; padding: 2px 8px; border-radius: 10px; background: #d1fae5; color: #065f46; }
`

// ─── Table ────────────────────────────────────────────────────
const TableWrap = styled.div`overflow-x: auto;`
const Table = styled.table`
  width: 100%; border-collapse: collapse; font-size: 13px;
  th { background: #f8f9fa; text-align: left; padding: 10px 14px; font-weight: 600; color: #374151; border-bottom: 2px solid #e9ecef; white-space: nowrap; }
  td { padding: 12px 14px; border-bottom: 1px solid #f1f3f4; vertical-align: middle; }
  tr:hover td { background: #fafafa; }
`
const PlanBadge = styled.span`
  padding: 2px 10px; border-radius: 20px; font-size: 11px; font-weight: 700;
  background: ${p => ({free:'#f3f4f6',basic:'#dbeafe',professional:'#ede9fe',enterprise:'#fef3c7'}[p.$plan] || '#f3f4f6')};
  color: ${p => ({free:'#6b7280',basic:'#1d4ed8',professional:'#6d28d9',enterprise:'#92400e'}[p.$plan] || '#6b7280')};
  text-transform: capitalize;
`
const StatusBadge = styled.span`
  padding: 2px 10px; border-radius: 20px; font-size: 11px; font-weight: 700;
  background: ${p => p.$active ? '#d1fae5' : '#fee2e2'};
  color: ${p => p.$active ? '#065f46' : '#991b1b'};
`
const Btn = styled.button`
  padding: ${p => p.$sm ? '5px 10px' : '8px 16px'};
  border: ${p => p.$outline ? '2px solid' : 'none'};
  border-color: ${p => p.$danger ? '#ef4444' : p.$outline ? 'var(--primary-color)' : 'transparent'};
  border-radius: 6px; font-size: ${p => p.$sm ? '11px' : '13px'}; font-weight: 600; cursor: pointer;
  background: ${p => p.$danger ? '#ef4444' : p.$success ? '#10b981' : p.$outline ? 'transparent' : 'var(--primary-color)'};
  color: ${p => p.$outline ? 'var(--primary-color)' : 'white'};
  transition: all 0.2s; white-space: nowrap;
  &:hover { opacity: 0.85; }
  &:disabled { opacity: 0.5; cursor: not-allowed; }
`
const SearchBar = styled.input`
  padding: 8px 14px; border: 2px solid #e5e7eb; border-radius: 8px; font-size: 13px; width: 260px; box-sizing: border-box;
  &:focus { outline: none; border-color: var(--primary-color); }
`
const PayBadge = styled.span`
  padding: 2px 8px; border-radius: 12px; font-size: 11px; font-weight: 600;
  background: ${p => ({completed:'#d1fae5',pending:'#fef3c7',failed:'#fee2e2',refunded:'#e0e7ff'}[p.$status] || '#f3f4f6')};
  color: ${p => ({completed:'#065f46',pending:'#92400e',failed:'#991b1b',refunded:'#3730a3'}[p.$status] || '#6b7280')};
`

// ─── Modal ─────────────────────────────────────────────────────
const Overlay = styled.div`
  position: fixed; inset: 0; background: rgba(0,0,0,0.45);
  display: flex; align-items: center; justify-content: center;
  z-index: 9999; padding: 16px;
`
const Modal = styled.div`
  background: white; border-radius: 16px; width: 100%; max-width: 600px;
  max-height: 90vh; overflow-y: auto; box-shadow: 0 20px 60px rgba(0,0,0,0.2);
`
const ModalHeader = styled.div`
  padding: 20px 24px 16px; border-bottom: 1px solid #e9ecef;
  display: flex; align-items: center; justify-content: space-between;
  h3 { margin: 0; font-size: 16px; display: flex; align-items: center; gap: 8px; }
  button { background: none; border: none; font-size: 22px; cursor: pointer; color: #6b7280; }
`
const ModalBody = styled.div`padding: 24px;`
const ModalSection = styled.div`
  margin-bottom: 24px;
  h4 { margin: 0 0 12px; font-size: 12px; font-weight: 700; color: #6b7280; text-transform: uppercase; letter-spacing: 0.5px; }
`
const FormRow = styled.div`
  display: grid; grid-template-columns: ${p => p.$cols || '1fr 1fr'}; gap: 12px; margin-bottom: 12px;
  @media (max-width: 500px) { grid-template-columns: 1fr; }
`
const FormGroup = styled.div`
  display: flex; flex-direction: column; gap: 4px;
  label { font-size: 12px; font-weight: 600; color: #374151; }
  input, select { padding: 8px 10px; border: 2px solid #e5e7eb; border-radius: 6px; font-size: 13px; &:focus { outline: none; border-color: var(--primary-color); } }
`
const DangerZone = styled.div`
  border: 2px solid #fee2e2; border-radius: 8px; padding: 16px;
  p { margin: 0 0 12px; font-size: 13px; color: #991b1b; }
`

// ─── Helpers ───────────────────────────────────────────────────
const formatCOP  = v => new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', minimumFractionDigits: 0 }).format(v || 0)
const formatDate = d => d ? new Date(d).toLocaleDateString('es-CO', { year: 'numeric', month: 'short', day: 'numeric' }) : '—'
const planIcons  = { free: '🌱', basic: '⚡', professional: '⭐', enterprise: '🏢' }

// ─── Componente ────────────────────────────────────────────────
const SuscripcionTab = () => {
  const [plans,    setPlans]    = useState([])
  const [tenants,  setTenants]  = useState([])
  const [payments, setPayments] = useState([])
  const [loading,  setLoading]  = useState(true)
  const [search,   setSearch]   = useState('')

  // Modal
  const [selected,        setSelected]        = useState(null)
  const [tenantPayments,  setTenantPayments]  = useState([])
  const [loadingPay,      setLoadingPay]      = useState(false)

  // Formulario de pago
  const emptyPay = { plan: '', amount_cop: '', payment_method: '', status: 'completed', reference: '', period_start: '', period_end: '' }
  const [payForm,   setPayForm]   = useState(emptyPay)
  const [savingPay, setSavingPay] = useState(false)

  // Modal plan CRUD
  const emptyPlan = { icon: '', name: '', display_name: '', description: '', price_cop: '0', max_users: '5', max_appointments_month: '100', features: '', is_active: true }
  const [planModal,  setPlanModal]  = useState(null)
  const [planForm,   setPlanForm]   = useState(emptyPlan)
  const [savingPlan, setSavingPlan] = useState(false)

  // Modal métodos de pago CRUD
  const emptyPm = { icon: '', name: '', display_name: '', description: '', is_active: true }
  const [paymentMethods, setPaymentMethods] = useState([])
  const [pmModal,  setPmModal]  = useState(null)
  const [pmForm,   setPmForm]   = useState(emptyPm)
  const [savingPm, setSavingPm] = useState(false)

  // ── Carga inicial ────────────────────────────────────────────
  const load = useCallback(async () => {
    setLoading(true)
    try {
      const [rPlans, rTenants, rPayments, rPm] = await Promise.all([
        api.admin.get('/superadmin/plans'),
        api.admin.get('/superadmin/tenants'),
        api.admin.get('/superadmin/tenants/payments/all'),
        api.admin.get('/superadmin/payment-methods'),
      ])
      setPlans(Array.isArray(rPlans)    ? rPlans    : [])
      setTenants(Array.isArray(rTenants)  ? rTenants  : [])
      setPayments(Array.isArray(rPayments) ? rPayments : [])
      setPaymentMethods(Array.isArray(rPm) ? rPm : [])
    } catch (err) {
      toast.error('Error al cargar datos: ' + (err?.message || 'desconocido'))
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => { load() }, [load])

  // ── Modal ────────────────────────────────────────────────────
  const openModal = async (tenant) => {
    setSelected(tenant)
    setPayForm({ ...emptyPay, plan: tenant.plan })
    setLoadingPay(true)
    try {
      const r = await api.admin.get(`/superadmin/tenants/${tenant.id}/payments`)
      setTenantPayments(Array.isArray(r) ? r : [])
    } catch { setTenantPayments([]) }
    finally { setLoadingPay(false) }
  }
  const closeModal = () => { setSelected(null); setTenantPayments([]) }

  // ── Toggle activo ────────────────────────────────────────────
  const handleToggle = async () => {
    try {
      const r = await api.admin.patch(`/superadmin/tenants/${selected.id}/toggle`)
      setTenants(prev => prev.map(t => t.id === selected.id ? { ...t, is_active: r.is_active } : t))
      setSelected(prev => ({ ...prev, is_active: r.is_active }))
      toast.success(updated.is_active ? 'Tenant activado' : 'Tenant desactivado')
    } catch { toast.error('Error al cambiar estado') }
  }

  // ── Registrar pago ───────────────────────────────────────────
  const handleRegisterPay = async (e) => {
    e.preventDefault()
    if (!payForm.plan || !payForm.amount_cop) return toast.warning('Plan y monto son requeridos')
    setSavingPay(true)
    try {
      const r = await api.admin.post(`/superadmin/tenants/${selected.id}/payments`, {
        ...payForm, amount_cop: Number(payForm.amount_cop),
      })
      setTenantPayments(prev => [r, ...prev])
      if (payForm.status === 'completed') {
        setTenants(prev => prev.map(t => t.id === selected.id ? { ...t, plan: payForm.plan } : t))
        setSelected(prev => ({ ...prev, plan: payForm.plan }))
      }
      setPayments(prev => [{ ...r, tenant: { id: selected.id, name: selected.name, subdomain: selected.subdomain } }, ...prev])
      setPayForm({ ...emptyPay, plan: payForm.plan })
      toast.success('Pago registrado')
    } catch { toast.error('Error al registrar pago') }
    finally { setSavingPay(false) }
  }

  // ── Eliminar tenant ──────────────────────────────────────────
  const handleDelete = async () => {
    if (!window.confirm(
      `¿Eliminar el tenant "${selected.name}"?\\n\\nEsta acción es irreversible. El registro se borrará, pero la base de datos del tenant quedará en el servidor como respaldo.`
    )) return
    try {
      await api.admin.delete(`/superadmin/tenants/${selected.id}`)
      setTenants(prev => prev.filter(t => t.id !== selected.id))
      setPayments(prev => prev.filter(p => p.tenant?.id !== selected.id))
      toast.success('Tenant eliminado')
      closeModal()
    } catch { toast.error('Error al eliminar el tenant') }
  }

  // CRUD Planes
  const openPlanModal = (mode, data) => {
    const d = data || {}
    const f = mode === 'edit'
      ? {
          icon: d.icon || '',
          name: d.name || '',
          display_name: d.display_name || '',
          description: d.description || '',
          price_cop: String(d.price_cop || '0'),
          max_users: String(d.max_users || '5'),
          max_appointments_month: String(d.max_appointments_month || '100'),
          features: Array.isArray(d.features) ? d.features.join('\n') : (d.features || ''),
          is_active: d.is_active !== false,
        }
      : { icon: '', name: '', display_name: '', description: '', price_cop: '0', max_users: '5', max_appointments_month: '100', features: '', is_active: true }
    setPlanForm(f)
    setPlanModal({ mode, data: d })
  }

  const handleSavePlan = async (e) => {
    e.preventDefault()
    const { name, display_name, price_cop } = planForm
    if (!name || !display_name || price_cop === '') return toast.warning('Nombre, nombre visible y precio son requeridos')
    setSavingPlan(true)
    try {
      const payload = {
        icon: planForm.icon || null,
        name: planForm.name,
        display_name: planForm.display_name,
        description: planForm.description || null,
        price_cop: Number(planForm.price_cop),
        max_users: Number(planForm.max_users),
        max_appointments_month: Number(planForm.max_appointments_month),
        features: planForm.features ? planForm.features.split('\n').map(f => f.trim()).filter(Boolean) : [],
        is_active: planForm.is_active,
      }
      if (planModal.mode === 'create') {
        const r = await api.admin.post('/superadmin/plans', payload)
        setPlans(prev => [...prev, r].sort((a, b) => Number(a.price_cop) - Number(b.price_cop)))
        toast.success('Plan creado')
      } else {
        const r = await api.admin.put('/superadmin/plans/' + planModal.data.id, payload)
        setPlans(prev => prev.map(p => p.id === planModal.data.id ? r : p))
        toast.success('Plan actualizado')
      }
      setPlanModal(null)
    } catch (err) {
      toast.error((err && err.message) ? err.message : 'Error al guardar el plan')
    } finally {
      setSavingPlan(false)
    }
  }

  const handleDeletePlan = async (plan) => {
    if (!window.confirm('Eliminar el plan "' + plan.display_name + '"? Esta accion no se puede deshacer.')) return
    try {
      await api.admin.delete('/superadmin/plans/' + plan.id)
      setPlans(prev => prev.filter(p => p.id !== plan.id))
      toast.success('Plan eliminado')
    } catch { toast.error('Error al eliminar el plan') }
  }

  // CRUD Métodos de pago
  const openPmModal = (mode, data) => {
    const d = data || {}
    setPmForm(mode === 'edit'
      ? { icon: d.icon || '', name: d.name || '', display_name: d.display_name || '', description: d.description || '', is_active: d.is_active !== false }
      : { ...emptyPm })
    setPmModal({ mode, data: d })
  }

  const handleSavePm = async (e) => {
    e.preventDefault()
    if (!pmForm.name || !pmForm.display_name) return toast.warning('Nombre y nombre visible son requeridos')
    setSavingPm(true)
    try {
      const payload = {
        name: pmForm.name,
        display_name: pmForm.display_name,
        icon: pmForm.icon || null,
        description: pmForm.description || null,
        is_active: pmForm.is_active,
      }
      if (pmModal.mode === 'create') {
        const r = await api.admin.post('/superadmin/payment-methods', payload)
        setPaymentMethods(prev => [...prev, r].sort((a, b) => a.display_name.localeCompare(b.display_name)))
        toast.success('Método de pago creado')
      } else {
        const r = await api.admin.put('/superadmin/payment-methods/' + pmModal.data.id, payload)
        setPaymentMethods(prev => prev.map(m => m.id === pmModal.data.id ? r : m))
        toast.success('Método actualizado')
      }
      setPmModal(null)
    } catch (err) {
      toast.error(err?.message || 'Error al guardar el método de pago')
    } finally {
      setSavingPm(false)
    }
  }

  const handleDeletePm = async (pm) => {
    if (!window.confirm('Eliminar el método "' + pm.display_name + '"? Esta acción no se puede deshacer.')) return
    try {
      await api.admin.delete('/superadmin/payment-methods/' + pm.id)
      setPaymentMethods(prev => prev.filter(m => m.id !== pm.id))
      toast.success('Método eliminado')
    } catch { toast.error('Error al eliminar el método de pago') }
  }

  const filteredTenants = tenants.filter(t =>
    t.name?.toLowerCase().includes(search.toLowerCase()) ||
    t.subdomain?.toLowerCase().includes(search.toLowerCase()) ||
    t.email?.toLowerCase().includes(search.toLowerCase())
  )

  if (loading) return <Container><p style={{ textAlign: 'center', padding: 40, color: '#6b7280' }}>Cargando...</p></Container>

  return (
    <Container>

      {/* ── PLANES ── */}
      <Card>
        <CardHeader>
          <h3>Planes disponibles</h3>
          <span className="count">{plans.length}</span>
          <div style={{ marginLeft: 'auto' }}>
            <Btn onClick={() => openPlanModal('create')} style={{ fontSize: 13 }}>+ Incluir plan</Btn>
          </div>
        </CardHeader>
        <CardBody>
          {plans.length === 0
            ? <p style={{ color: '#9ca3af', textAlign: 'center', margin: 0 }}>No hay planes configurados en la BD.</p>
            : (
              <PlansGrid>
                {plans.map(p => (
                  <PlanCard key={p.id}>
                    <div className="icon">{p.icon || planIcons[p.name] || '📦'}</div>
                    <div className="name">{p.display_name}</div>
                    {p.description && (
                      <div style={{ fontSize: 11, color: '#9ca3af', margin: '2px 0 6px' }}>{p.description}</div>
                    )}
                    <div className="price">
                      {Number(p.price_cop) > 0 ? formatCOP(p.price_cop) : 'Gratis'}
                      {Number(p.price_cop) > 0 && <span> /mes</span>}
                    </div>
                    <div className="limits">{p.max_users} usuarios · {p.max_appointments_month} citas/mes</div>
                    {Array.isArray(p.features) && p.features.length > 0 && (
                      <ul style={{ listStyle: 'none', padding: 0, margin: '10px 0 8px', textAlign: 'left', fontSize: 11, color: '#6b7280' }}>
                        {p.features.map((f, i) => <li key={i} style={{ padding: '2px 0' }}>✓ {f}</li>)}
                      </ul>
                    )}
                    {p.is_active && <span className="active-badge">Activo</span>}
                    <div style={{ display: 'flex', gap: 6, justifyContent: 'center', marginTop: 12 }}>
                      <Btn $outline $sm onClick={() => openPlanModal('edit', p)}>Editar</Btn>
                      <Btn $danger $sm onClick={() => handleDeletePlan(p)}>Eliminar</Btn>
                    </div>
                  </PlanCard>
                ))}
              </PlansGrid>
            )}
        </CardBody>
      </Card>

      {/* ── MÉTODOS DE PAGO ── */}
      <Card>
        <CardHeader>
          <h3>Métodos de pago</h3>
          <span className="count">{paymentMethods.length}</span>
          <div style={{ marginLeft: 'auto' }}>
            <Btn onClick={() => openPmModal('create')} style={{ fontSize: 13 }}>+ Agregar método</Btn>
          </div>
        </CardHeader>
        <CardBody style={{ padding: 0 }}>
          {paymentMethods.length === 0
            ? <p style={{ color: '#9ca3af', textAlign: 'center', margin: 0, padding: 24 }}>No hay métodos de pago configurados.</p>
            : (
              <TableWrap>
                <Table>
                  <thead>
                    <tr>
                      <th>Ícono</th>
                      <th>Nombre slug</th>
                      <th>Nombre visible</th>
                      <th>Descripción</th>
                      <th>Estado</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {paymentMethods.map(m => (
                      <tr key={m.id}>
                        <td style={{ fontSize: 20, textAlign: 'center' }}>{m.icon || '—'}</td>
                        <td><code style={{ fontSize: 12, background: '#f3f4f6', padding: '2px 6px', borderRadius: 4 }}>{m.name}</code></td>
                        <td style={{ fontWeight: 600, color: '#1f2937' }}>{m.display_name}</td>
                        <td style={{ color: '#6b7280', fontSize: 12 }}>{m.description || '—'}</td>
                        <td><StatusBadge $active={m.is_active}>{m.is_active ? 'Activo' : 'Inactivo'}</StatusBadge></td>
                        <td>
                          <div style={{ display: 'flex', gap: 6 }}>
                            <Btn $outline $sm onClick={() => openPmModal('edit', m)}>Editar</Btn>
                            <Btn $danger $sm onClick={() => handleDeletePm(m)}>Eliminar</Btn>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </TableWrap>
            )}
        </CardBody>
      </Card>

      {/* ── TENANTS ── */}
      <Card>
        <CardHeader>
          <h3>Tenants registrados</h3>
          <span className="count">{tenants.length}</span>
          <div style={{ marginLeft: 'auto' }}>
            <SearchBar placeholder="Buscar nombre, subdominio..." value={search} onChange={e => setSearch(e.target.value)} />
          </div>
        </CardHeader>
        <CardBody style={{ padding: 0 }}>
          <TableWrap>
            <Table>
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Subdominio</th>
                  <th>Plan</th>
                  <th>Estado</th>
                  <th>Tipo negocio</th>
                  <th>Registro</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {filteredTenants.length === 0 ? (
                  <tr><td colSpan={7} style={{ textAlign: 'center', padding: 32, color: '#9ca3af' }}>Sin resultados</td></tr>
                ) : filteredTenants.map(t => (
                  <tr key={t.id}>
                    <td>
                      <strong style={{ color: '#1f2937' }}>{t.name}</strong>
                      {t.email && <div style={{ fontSize: 11, color: '#9ca3af' }}>{t.email}</div>}
                    </td>
                    <td><code style={{ fontSize: 12, background: '#f3f4f6', padding: '2px 6px', borderRadius: 4 }}>{t.subdomain}</code></td>
                    <td><PlanBadge $plan={t.plan}>{t.plan}</PlanBadge></td>
                    <td><StatusBadge $active={t.is_active}>{t.is_active ? 'Activo' : 'Inactivo'}</StatusBadge></td>
                    <td style={{ color: '#6b7280', fontSize: 12 }}>{t.businessType?.name || '—'}</td>
                    <td style={{ color: '#6b7280', fontSize: 12 }}>{formatDate(t.createdAt)}</td>
                    <td><Btn $outline $sm onClick={() => openModal(t)}>Gestionar</Btn></td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </TableWrap>
        </CardBody>
      </Card>

      {/* ── HISTORIAL GLOBAL DE PAGOS ── */}
      <Card>
        <CardHeader>
          <h3>Historial de pagos</h3>
          <span className="count">{payments.length}</span>
        </CardHeader>
        <CardBody style={{ padding: 0 }}>
          <TableWrap>
            <Table>
              <thead>
                <tr>
                  <th>Tenant</th>
                  <th>Plan</th>
                  <th>Monto</th>
                  <th>Método</th>
                  <th>Estado</th>
                  <th>Referencia</th>
                  <th>Fecha</th>
                </tr>
              </thead>
              <tbody>
                {payments.length === 0 ? (
                  <tr><td colSpan={7} style={{ textAlign: 'center', padding: 32, color: '#9ca3af' }}>Sin pagos registrados</td></tr>
                ) : payments.map(p => (
                  <tr key={p.id}>
                    <td>
                      <strong style={{ fontSize: 13 }}>{p.tenant?.name || '—'}</strong>
                      <div style={{ fontSize: 11, color: '#9ca3af' }}>{p.tenant?.subdomain}</div>
                    </td>
                    <td><PlanBadge $plan={p.plan}>{p.plan}</PlanBadge></td>
                    <td style={{ fontWeight: 700 }}>{formatCOP(p.amount_cop)}</td>
                    <td style={{ color: '#6b7280', fontSize: 12 }}>{p.payment_method || '—'}</td>
                    <td><PayBadge $status={p.status}>{p.status}</PayBadge></td>
                    <td style={{ color: '#6b7280', fontSize: 12 }}>{p.reference || '—'}</td>
                    <td style={{ color: '#6b7280', fontSize: 12 }}>{formatDate(p.createdAt)}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </TableWrap>
        </CardBody>
      </Card>

      {/* ── MODAL CRUD MÉTODO DE PAGO ── */}
      {pmModal && (
        <Overlay onClick={e => { if (e.target === e.currentTarget) setPmModal(null) }}>
          <Modal>
            <ModalHeader>
              <h3>{pmModal.mode === 'create' ? 'Agregar método de pago' : 'Editar método de pago'}</h3>
              <button onClick={() => setPmModal(null)}>×</button>
            </ModalHeader>
            <ModalBody>
              <form onSubmit={handleSavePm}>
                <FormRow>
                  <FormGroup>
                    <label>Ícono (emoji)</label>
                    <input
                      type="text" placeholder="💳" maxLength={4}
                      value={pmForm.icon}
                      onChange={e => setPmForm(p => ({ ...p, icon: e.target.value }))}
                    />
                  </FormGroup>
                  <FormGroup>
                    <label>Nombre slug * <span style={{ fontSize: 10, color: '#9ca3af' }}>(único, ej: transferencia)</span></label>
                    <input
                      type="text" placeholder="transferencia"
                      value={pmForm.name}
                      onChange={e => setPmForm(p => ({ ...p, name: e.target.value.toLowerCase().replace(/\s+/g, '_') }))}
                    />
                  </FormGroup>
                </FormRow>
                <FormRow $cols="1fr">
                  <FormGroup>
                    <label>Nombre visible *</label>
                    <input
                      type="text" placeholder="Transferencia bancaria"
                      value={pmForm.display_name}
                      onChange={e => setPmForm(p => ({ ...p, display_name: e.target.value }))}
                    />
                  </FormGroup>
                </FormRow>
                <FormRow $cols="1fr">
                  <FormGroup>
                    <label>Descripción</label>
                    <input
                      type="text" placeholder="Transferencia PSE o entre cuentas"
                      value={pmForm.description}
                      onChange={e => setPmForm(p => ({ ...p, description: e.target.value }))}
                    />
                  </FormGroup>
                </FormRow>
                <FormRow $cols="1fr">
                  <FormGroup>
                    <label style={{ display: 'flex', alignItems: 'center', gap: 8, cursor: 'pointer' }}>
                      <input
                        type="checkbox" checked={pmForm.is_active}
                        onChange={e => setPmForm(p => ({ ...p, is_active: e.target.checked }))}
                      />
                      Método activo
                    </label>
                  </FormGroup>
                </FormRow>
                <Btn type="submit" disabled={savingPm} style={{ width: '100%', marginTop: 8 }}>
                  {savingPm ? 'Guardando...' : pmModal.mode === 'create' ? 'Crear método' : 'Guardar cambios'}
                </Btn>
              </form>
            </ModalBody>
          </Modal>
        </Overlay>
      )}

      {/* ── MODAL CRUD PLAN ── */}
      {planModal && (
        <Overlay onClick={e => { if (e.target === e.currentTarget) setPlanModal(null) }}>
          <Modal>
            <ModalHeader>
              <h3>{planModal.mode === 'create' ? 'Incluir nuevo plan' : 'Editar plan'}</h3>
              <button onClick={() => setPlanModal(null)}>×</button>
            </ModalHeader>
            <ModalBody>
              <form onSubmit={handleSavePlan}>
                <FormRow>
                  <FormGroup>
                    <label>Ícono (emoji)</label>
                    <input
                      type="text" placeholder="🌱" maxLength={4}
                      value={planForm.icon}
                      onChange={e => setPlanForm(p => ({ ...p, icon: e.target.value }))}
                    />
                  </FormGroup>
                  <FormGroup>
                    <label>Nombre slug * <span style={{ fontSize: 10, color: '#9ca3af' }}>(único, ej: basic)</span></label>
                    <input
                      type="text" placeholder="basic"
                      value={planForm.name}
                      onChange={e => setPlanForm(p => ({ ...p, name: e.target.value.toLowerCase().replace(/\s+/g, '_') }))}
                    />
                  </FormGroup>
                </FormRow>
                <FormRow $cols="1fr">
                  <FormGroup>
                    <label>Nombre visible *</label>
                    <input
                      type="text" placeholder="Básico"
                      value={planForm.display_name}
                      onChange={e => setPlanForm(p => ({ ...p, display_name: e.target.value }))}
                    />
                  </FormGroup>
                </FormRow>
                <FormRow $cols="1fr">
                  <FormGroup>
                    <label>Descripción corta</label>
                    <input
                      type="text" placeholder="Para pequeños negocios"
                      value={planForm.description}
                      onChange={e => setPlanForm(p => ({ ...p, description: e.target.value }))}
                    />
                  </FormGroup>
                </FormRow>
                <FormRow>
                  <FormGroup>
                    <label>Precio COP * <span style={{ fontSize: 10, color: '#9ca3af' }}>(0 = gratis)</span></label>
                    <input
                      type="number" min="0" placeholder="0"
                      value={planForm.price_cop}
                      onChange={e => setPlanForm(p => ({ ...p, price_cop: e.target.value }))}
                    />
                  </FormGroup>
                  <FormGroup>
                    <label>Máx. usuarios *</label>
                    <input
                      type="number" min="1" placeholder="5"
                      value={planForm.max_users}
                      onChange={e => setPlanForm(p => ({ ...p, max_users: e.target.value }))}
                    />
                  </FormGroup>
                </FormRow>
                <FormRow $cols="1fr">
                  <FormGroup>
                    <label>Máx. citas por mes *</label>
                    <input
                      type="number" min="1" placeholder="50"
                      value={planForm.max_appointments_month}
                      onChange={e => setPlanForm(p => ({ ...p, max_appointments_month: e.target.value }))}
                    />
                  </FormGroup>
                </FormRow>
                <FormRow $cols="1fr">
                  <FormGroup>
                    <label>Características <span style={{ fontSize: 10, color: '#9ca3af' }}>(una por línea)</span></label>
                    <textarea
                      rows={5}
                      placeholder={'5 usuarios\nGestión de agenda\nReportes básicos'}
                      style={{ padding: '8px 10px', border: '2px solid #e5e7eb', borderRadius: 6, fontSize: 13, resize: 'vertical', fontFamily: 'inherit' }}
                      value={planForm.features}
                      onChange={e => setPlanForm(p => ({ ...p, features: e.target.value }))}
                    />
                  </FormGroup>
                </FormRow>
                <FormRow $cols="1fr">
                  <FormGroup>
                    <label style={{ display: 'flex', alignItems: 'center', gap: 8, cursor: 'pointer' }}>
                      <input
                        type="checkbox" checked={planForm.is_active}
                        onChange={e => setPlanForm(p => ({ ...p, is_active: e.target.checked }))}
                      />
                      Plan activo (visible para tenants)
                    </label>
                  </FormGroup>
                </FormRow>
                <Btn type="submit" disabled={savingPlan} style={{ width: '100%', marginTop: 8 }}>
                  {savingPlan ? 'Guardando...' : planModal.mode === 'create' ? 'Crear plan' : 'Guardar cambios'}
                </Btn>
              </form>
            </ModalBody>
          </Modal>
        </Overlay>
      )}

      {/* ── MODAL GESTIÓN TENANT ── */}
      {selected && (
        <Overlay onClick={e => e.target === e.currentTarget && closeModal()}>
          <Modal>
            <ModalHeader>
              <h3>
                {selected.name}
                <StatusBadge $active={selected.is_active} style={{ fontSize: 11 }}>
                  {selected.is_active ? 'Activo' : 'Inactivo'}
                </StatusBadge>
              </h3>
              <button onClick={closeModal}>×</button>
            </ModalHeader>
            <ModalBody>

              {/* Estado */}
              <ModalSection>
                <h4>Estado de acceso</h4>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <p style={{ margin: 0, fontSize: 13, color: '#6b7280', flex: 1 }}>
                    {selected.is_active
                      ? 'El tenant está activo y puede acceder al sistema.'
                      : 'El tenant está desactivado y no puede iniciar sesión.'}
                  </p>
                  <Btn $danger={selected.is_active} $success={!selected.is_active} $sm onClick={handleToggle}>
                    {selected.is_active ? 'Desactivar' : 'Activar'}
                  </Btn>
                </div>
              </ModalSection>

              {/* Registrar pago */}
              <ModalSection>
                <h4>Registrar pago</h4>
                <form onSubmit={handleRegisterPay}>
                  <FormRow>
                    <FormGroup>
                      <label>Plan *</label>
                      <select value={payForm.plan} onChange={e => setPayForm(p => ({ ...p, plan: e.target.value }))}>
                        <option value="">Seleccionar plan</option>
                        <option value="free">Free</option>
                        <option value="basic">Basic</option>
                        <option value="professional">Professional</option>
                        <option value="enterprise">Enterprise</option>
                      </select>
                    </FormGroup>
                    <FormGroup>
                      <label>Monto COP *</label>
                      <input type="number" min="0" placeholder="0" value={payForm.amount_cop}
                        onChange={e => setPayForm(p => ({ ...p, amount_cop: e.target.value }))} />
                    </FormGroup>
                  </FormRow>
                  <FormRow>
                    <FormGroup>
                      <label>Método de pago</label>
                      <select value={payForm.payment_method} onChange={e => setPayForm(p => ({ ...p, payment_method: e.target.value }))}>
                        <option value="">— Seleccionar —</option>
                        {paymentMethods.filter(m => m.is_active).map(m => (
                          <option key={m.id} value={m.name}>{m.icon ? m.icon + ' ' : ''}{m.display_name}</option>
                        ))}
                      </select>
                    </FormGroup>
                    <FormGroup>
                      <label>Estado</label>
                      <select value={payForm.status} onChange={e => setPayForm(p => ({ ...p, status: e.target.value }))}>
                        <option value="completed">Completado</option>
                        <option value="pending">Pendiente</option>
                        <option value="failed">Fallido</option>
                        <option value="refunded">Reembolsado</option>
                      </select>
                    </FormGroup>
                  </FormRow>
                  <FormRow>
                    <FormGroup>
                      <label>Inicio período</label>
                      <input type="date" value={payForm.period_start} onChange={e => setPayForm(p => ({ ...p, period_start: e.target.value }))} />
                    </FormGroup>
                    <FormGroup>
                      <label>Fin período</label>
                      <input type="date" value={payForm.period_end} onChange={e => setPayForm(p => ({ ...p, period_end: e.target.value }))} />
                    </FormGroup>
                  </FormRow>
                  <FormRow $cols="1fr">
                    <FormGroup>
                      <label>Referencia / comprobante</label>
                      <input type="text" placeholder="Número de referencia..." value={payForm.reference}
                        onChange={e => setPayForm(p => ({ ...p, reference: e.target.value }))} />
                    </FormGroup>
                  </FormRow>
                  <Btn type="submit" disabled={savingPay} style={{ width: '100%', marginTop: 4 }}>
                    {savingPay ? 'Guardando...' : 'Registrar pago'}
                  </Btn>
                </form>
              </ModalSection>

              {/* Historial de pagos del tenant */}
              <ModalSection>
                <h4>Pagos registrados ({tenantPayments.length})</h4>
                {loadingPay
                  ? <p style={{ color: '#9ca3af', fontSize: 13 }}>Cargando...</p>
                  : tenantPayments.length === 0
                    ? <p style={{ color: '#9ca3af', fontSize: 13 }}>Sin pagos para este tenant.</p>
                    : (
                      <TableWrap>
                        <Table>
                          <thead>
                            <tr><th>Fecha</th><th>Plan</th><th>Monto</th><th>Estado</th><th>Método</th></tr>
                          </thead>
                          <tbody>
                            {tenantPayments.map(p => (
                              <tr key={p.id}>
                                <td>{formatDate(p.createdAt)}</td>
                                <td><PlanBadge $plan={p.plan}>{p.plan}</PlanBadge></td>
                                <td style={{ fontWeight: 700 }}>{formatCOP(p.amount_cop)}</td>
                                <td><PayBadge $status={p.status}>{p.status}</PayBadge></td>
                                <td style={{ color: '#6b7280' }}>{p.payment_method || '—'}</td>
                              </tr>
                            ))}
                          </tbody>
                        </Table>
                      </TableWrap>
                    )}
              </ModalSection>

              {/* Zona de peligro */}
              <ModalSection>
                <h4>Zona de peligro</h4>
                <DangerZone>
                  <p>Eliminar este tenant borrará su registro del sistema. La base de datos del tenant <strong>no se elimina</strong> del servidor (queda como respaldo).</p>
                  <Btn $danger onClick={handleDelete}>Eliminar tenant</Btn>
                </DangerZone>
              </ModalSection>

            </ModalBody>
          </Modal>
        </Overlay>
      )}
    </Container>
  )
}

export default SuscripcionTab
// ── FIN: todo el código anterior fue reemplazado por esta versión conectada a la API ──
