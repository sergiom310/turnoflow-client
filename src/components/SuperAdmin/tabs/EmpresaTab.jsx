import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { toast } from 'react-toastify'
import styled from 'styled-components'
import api from '../../../utils/api'

// ── Esquema de validación ────────────────────────────────────
const schema = yup.object({
  // Datos del tenant
  name:             yup.string().min(2).required('El nombre del negocio es requerido'),
  subdomain:        yup.string()
    .matches(/^[a-z0-9-]+$/, 'Solo minúsculas, números y guiones')
    .min(3, 'Mínimo 3 caracteres')
    .max(50, 'Máximo 50 caracteres')
    .required('El subdominio es requerido'),
  email:            yup.string().email('Email inválido').nullable(),
  phone:            yup.string().matches(/^[0-9+\-\s()]*$/, 'Formato inválido').nullable(),
  business_type_id: yup.number().nullable(),
  business_subtype: yup.string().nullable(),
  plan:             yup.string().oneOf(['free', 'basic', 'professional', 'enterprise']).default('free'),
  // Admin inicial del tenant
  admin_username:   yup.string().min(3, 'Mínimo 3 caracteres').required('El usuario admin es requerido'),
  admin_password:   yup.string().min(8, 'Mínimo 8 caracteres').required('La contraseña es requerida'),
  admin_confirm:    yup.string()
    .oneOf([yup.ref('admin_password')], 'Las contraseñas no coinciden')
    .required('Confirma la contraseña'),
  admin_first_name: yup.string().required('El nombre es requerido'),
  admin_last_name:  yup.string().required('El apellido es requerido'),
  admin_email:      yup.string().email('Email inválido').nullable(),
})

// ── Styled components ────────────────────────────────────────
const Container = styled.div`max-width: 860px; margin: 0 auto;`

const Card = styled.div`
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
  margin-bottom: 24px;
  overflow: hidden;
`

const CardHeader = styled.div`
  padding: 16px 24px;
  background: #f8f9fa;
  border-bottom: 1px solid #e9ecef;
  display: flex;
  align-items: center;
  gap: 10px;
  h3 { margin: 0; font-size: 15px; font-weight: 600; color: #374151; }
  .badge {
    font-size: 11px; background: #e0f2fe; color: #0369a1;
    padding: 2px 8px; border-radius: 10px; font-weight: 600;
  }
`

const CardBody = styled.div`padding: 24px;`

const Grid = styled.div`
  display: grid;
  grid-template-columns: ${p => p.$cols || '1fr 1fr'};
  gap: 16px;
  @media (max-width: 640px) { grid-template-columns: 1fr; }
`

const Full = styled.div`grid-column: 1 / -1;`

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`

const Label = styled.label`
  font-size: 13px;
  font-weight: 600;
  color: #374151;
  span.req { color: #ef4444; margin-left: 2px; }
`

const Input = styled.input`
  padding: 10px 14px;
  border: 2px solid #e5e7eb;
  border-radius: 8px;
  font-size: 14px;
  background: #fafafa;
  transition: border-color 0.2s;
  &:focus { outline: none; border-color: var(--primary-color); background: white; }
  &::placeholder { color: #bbb; }
  &:disabled { opacity: 0.6; cursor: not-allowed; }
`

const Select = styled.select`
  padding: 10px 14px;
  border: 2px solid #e5e7eb;
  border-radius: 8px;
  font-size: 14px;
  background: #fafafa;
  cursor: pointer;
  &:focus { outline: none; border-color: var(--primary-color); }
  &:disabled { opacity: 0.6; }
`

const ErrorMsg = styled.span`
  font-size: 12px;
  color: #ef4444;
`

const SubdomainPreview = styled.div`
  font-size: 12px;
  color: #6b7280;
  margin-top: 4px;
  span { color: var(--primary-color); font-weight: 600; }
`

const SubmitBtn = styled.button`
  width: 100%;
  padding: 14px;
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  color: white;
  border: none;
  border-radius: 10px;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
  margin-top: 8px;
  &:hover:not(:disabled) { transform: translateY(-2px); box-shadow: 0 8px 20px rgba(var(--primary-rgb),.3); }
  &:disabled { opacity: 0.65; cursor: not-allowed; }
`

const Divider = styled.div`
  border-top: 1px dashed #e5e7eb;
  margin: 20px 0;
`



// ── Componente principal ─────────────────────────────────────
const EmpresaTab = () => {
  const [businessTypes, setBusinessTypes] = useState([])
  const [loading,       setLoading]       = useState(false)
  const [showPassword,  setShowPassword]  = useState(false)

  const { register, handleSubmit, watch, reset, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
    defaultValues: { plan: 'free' },
  })

  const subdomainVal = watch('subdomain') || ''

  // Cargar tipos de negocio al montar
  useEffect(() => {
    api.admin.get('/business-types')
      .then(types => setBusinessTypes(Array.isArray(types) ? types : []))
      .catch(err => toast.error('Error al cargar tipos: ' + (err.message ?? '')))
  }, [])

  // Crear nuevo tenant
  const onSubmit = async (data) => {
    setLoading(true)
    try {
      const payload = {
        name:             data.name,
        subdomain:        data.subdomain,
        email:            data.email   || null,
        phone:            data.phone   || null,
        business_type_id: data.business_type_id ? Number(data.business_type_id) : null,
        business_subtype: data.business_subtype || null,
        plan:             data.plan,
        admin_user: {
          username:   data.admin_username,
          password:   data.admin_password,
          first_name: data.admin_first_name,
          last_name:  data.admin_last_name,
          email:      data.admin_email || null,
        },
      }

      const created = await api.admin.post('/superadmin/tenants', payload)
      toast.success(`✅ Tenant "${created.name}" creado. BD: ${created.db_name}`)
      reset({ plan: 'free' })
    } catch (err) {
      if (err.code === 'SUBDOMAIN_TAKEN') {
        toast.error('El subdominio ya está en uso')
      } else {
        toast.error(err.message ?? 'Error al crear el tenant')
      }
    } finally {
      setLoading(false)
    }
  }


  return (
    <Container>

      {/* ── Formulario: Registrar nuevo tenant ── */}
      <Card>
        <CardHeader>
          <span>🏢</span>
          <h3>Registrar nuevo cliente (tenant)</h3>
        </CardHeader>
        <CardBody>
          <form onSubmit={handleSubmit(onSubmit)}>

            {/* Datos del negocio */}
            <p style={{ fontSize: 13, color: '#6b7280', marginTop: 0 }}>
              Al guardar se crea la base de datos, migraciones y usuario administrador automáticamente.
            </p>

            <Grid>
              <Full>
                <FormGroup>
                  <Label>Nombre del negocio <span className="req">*</span></Label>
                  <Input placeholder="Ej: Barbería El Estilo" disabled={loading} {...register('name')} />
                  {errors.name && <ErrorMsg>{errors.name.message}</ErrorMsg>}
                </FormGroup>
              </Full>

              <FormGroup>
                <Label>Subdominio <span className="req">*</span></Label>
                <Input
                  placeholder="barberia-juan"
                  disabled={loading}
                  {...register('subdomain')}
                  onChange={e => {
                    e.target.value = e.target.value.toLowerCase().replace(/[^a-z0-9-]/g, '')
                    register('subdomain').onChange(e)
                  }}
                />
                {errors.subdomain
                  ? <ErrorMsg>{errors.subdomain.message}</ErrorMsg>
                  : <SubdomainPreview>
                      URL: <span>{subdomainVal || 'subdominio'}.turnoflow.co</span>
                    </SubdomainPreview>
                }
              </FormGroup>

              <FormGroup>
                <Label>Plan</Label>
                <Select disabled={loading} {...register('plan')}>
                  <option value="free">Free</option>
                  <option value="basic">Basic</option>
                  <option value="professional">Professional</option>
                  <option value="enterprise">Enterprise</option>
                </Select>
              </FormGroup>

              <FormGroup>
                <Label>Tipo de negocio</Label>
                <Select disabled={loading || businessTypes.length === 0} {...register('business_type_id')}>
                  <option value="">— Seleccionar —</option>
                  {businessTypes.map(t => (
                    <option key={t.id} value={t.id}>{t.icon} {t.name}</option>
                  ))}
                </Select>
              </FormGroup>

              <FormGroup>
                <Label>Subtipo / especialidad</Label>
                <Input placeholder="Ej: barbería clásica" disabled={loading} {...register('business_subtype')} />
              </FormGroup>

              <FormGroup>
                <Label>Email del negocio</Label>
                <Input type="email" placeholder="contacto@negocio.com" disabled={loading} {...register('email')} />
                {errors.email && <ErrorMsg>{errors.email.message}</ErrorMsg>}
              </FormGroup>

              <FormGroup>
                <Label>Teléfono</Label>
                <Input placeholder="+57 300 123 4567" disabled={loading} {...register('phone')} />
                {errors.phone && <ErrorMsg>{errors.phone.message}</ErrorMsg>}
              </FormGroup>
            </Grid>

            <Divider />

            {/* Admin inicial */}
            <p style={{ fontSize: 13, fontWeight: 600, color: '#374151', marginBottom: 14 }}>
              👤 Usuario administrador inicial del negocio
            </p>

            <Grid>
              <FormGroup>
                <Label>Nombre <span className="req">*</span></Label>
                <Input placeholder="Juan" disabled={loading} {...register('admin_first_name')} />
                {errors.admin_first_name && <ErrorMsg>{errors.admin_first_name.message}</ErrorMsg>}
              </FormGroup>

              <FormGroup>
                <Label>Apellido <span className="req">*</span></Label>
                <Input placeholder="García" disabled={loading} {...register('admin_last_name')} />
                {errors.admin_last_name && <ErrorMsg>{errors.admin_last_name.message}</ErrorMsg>}
              </FormGroup>

              <FormGroup>
                <Label>Usuario (login) <span className="req">*</span></Label>
                <Input placeholder="juan.garcia" disabled={loading} {...register('admin_username')} />
                {errors.admin_username && <ErrorMsg>{errors.admin_username.message}</ErrorMsg>}
              </FormGroup>

              <FormGroup>
                <Label>Email del admin</Label>
                <Input type="email" placeholder="juan@negocio.com" disabled={loading} {...register('admin_email')} />
                {errors.admin_email && <ErrorMsg>{errors.admin_email.message}</ErrorMsg>}
              </FormGroup>

              <FormGroup>
                <Label>Contraseña <span className="req">*</span></Label>
                <Input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Mínimo 8 caracteres"
                  disabled={loading}
                  {...register('admin_password')}
                />
                {errors.admin_password && <ErrorMsg>{errors.admin_password.message}</ErrorMsg>}
              </FormGroup>

              <FormGroup>
                <Label>
                  Confirmar contraseña <span className="req">*</span>
                  <button
                    type="button"
                    onClick={() => setShowPassword(p => !p)}
                    style={{ marginLeft: 'auto', background: 'none', border: 'none', cursor: 'pointer', fontSize: 12, color: '#6b7280' }}
                  >
                    {showPassword ? '🙈 ocultar' : '👁 mostrar'}
                  </button>
                </Label>
                <Input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Repite la contraseña"
                  disabled={loading}
                  {...register('admin_confirm')}
                />
                {errors.admin_confirm && <ErrorMsg>{errors.admin_confirm.message}</ErrorMsg>}
              </FormGroup>
            </Grid>

            <SubmitBtn type="submit" disabled={loading}>
              {loading ? '⏳ Creando tenant...' : '🚀 Crear tenant y provisionar BD'}
            </SubmitBtn>
          </form>
        </CardBody>
      </Card>

    </Container>
  )
}

export default EmpresaTab
