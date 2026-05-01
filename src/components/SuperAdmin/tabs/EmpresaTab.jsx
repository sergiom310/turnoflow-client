import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { toast } from 'react-toastify'
import styled from 'styled-components'
import { convertToWebP, formatBytes } from '../../../utils/imageProcessor'

const STORAGE_KEY = 'turnoflow_empresa'

// === ESQUEMA DE VALIDACIÓN ===
const schema = yup.object({
  name: yup.string().required('El nombre de la empresa es requerido'),
  nit: yup.string().required('El NIT es requerido'),
  tax_regime: yup.string(),
  phone: yup.string().matches(/^[0-9+\-\s()]+$/, 'Formato de teléfono inválido'),
  email: yup.string().email('Email inválido'),
  address: yup.string(),
  city: yup.string(),
  legal_representative: yup.string(),
  legal_id: yup.string(),
  legal_phone: yup.string().matches(/^[0-9+\-\s()]+$/, 'Formato de teléfono inválido'),
  whatsapp: yup.string(),
  instagram: yup.string(),
  facebook: yup.string(),
  website: yup.string().url('URL inválida'),
  opening_time: yup.string(),
  closing_time: yup.string(),
  description: yup.string().max(300, 'Máximo 300 caracteres')
})

// === STYLED COMPONENTS ===
const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
`

// ── PREVIEW CARD ──
const PreviewCard = styled.div`
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  border-radius: 16px;
  padding: 32px;
  color: white;
  margin-bottom: 24px;
  display: flex;
  align-items: center;
  gap: 24px;
  flex-wrap: wrap;
  box-shadow: 0 8px 25px rgba(var(--primary-rgb), 0.25);

  @media (max-width: 600px) {
    flex-direction: column;
    text-align: center;
    padding: 24px;
  }
`

const PreviewLogo = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 40px;
  overflow: hidden;
  flex-shrink: 0;
  border: 3px solid rgba(255, 255, 255, 0.3);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

const PreviewInfo = styled.div`
  flex: 1;

  h2 {
    margin: 0 0 4px 0;
    font-size: 24px;
    font-weight: 700;
  }

  .preview-meta {
    display: flex;
    gap: 16px;
    flex-wrap: wrap;
    margin-top: 8px;
    font-size: 13px;
    opacity: 0.9;

    span {
      display: flex;
      align-items: center;
      gap: 4px;
    }
  }
`

const PreviewBadge = styled.span`
  display: inline-block;
  padding: 3px 10px;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.2);
  font-size: 12px;
  font-weight: 600;
  margin-top: 8px;
`

// ── SECCIÓN PLEGABLE ──
const Section = styled.div`
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
  overflow: hidden;
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.12);
  }
`

const SectionHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 18px 24px;
  background: #f8f9fa;
  cursor: pointer;
  user-select: none;
  transition: background 0.2s ease;

  &:hover {
    background: #f1f3f4;
  }

  .section-title {
    display: flex;
    align-items: center;
    gap: 10px;

    .icon {
      font-size: 20px;
    }

    h3 {
      margin: 0;
      font-size: 15px;
      font-weight: 600;
      color: #374151;
    }

    .count {
      font-size: 11px;
      color: #9ca3af;
      background: #e5e7eb;
      padding: 1px 8px;
      border-radius: 10px;
    }
  }

  .toggle {
    font-size: 14px;
    color: #9ca3af;
    transition: transform 0.3s ease;
    transform: ${props => props.$open ? 'rotate(180deg)' : 'rotate(0deg)'};
  }
`

const SectionBody = styled.div`
  padding: ${props => props.$open ? '20px 24px 24px' : '0 24px'};
  max-height: ${props => props.$open ? '2000px' : '0'};
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  opacity: ${props => props.$open ? 1 : 0};
`

const FormGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 18px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const FullWidth = styled.div`
  grid-column: 1 / -1;
`

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
`

const Label = styled.label`
  font-weight: 600;
  color: #374151;
  margin-bottom: 6px;
  font-size: 13px;
  display: flex;
  align-items: center;
  gap: 6px;
`

const Input = styled.input`
  padding: 11px 14px;
  border: 2px solid #e5e7eb;
  border-radius: 8px;
  font-size: 14px;
  transition: all 0.3s ease;
  background: #fafafa;

  &:focus {
    outline: none;
    border-color: var(--primary-color);
    box-shadow: 0 0 0 3px rgba(var(--primary-rgb), 0.08);
    background: white;
  }

  &::placeholder {
    color: #bbb;
  }
`

const TextArea = styled.textarea`
  padding: 11px 14px;
  border: 2px solid #e5e7eb;
  border-radius: 8px;
  font-size: 14px;
  min-height: 80px;
  resize: vertical;
  transition: all 0.3s ease;
  background: #fafafa;
  font-family: inherit;

  &:focus {
    outline: none;
    border-color: var(--primary-color);
    box-shadow: 0 0 0 3px rgba(var(--primary-rgb), 0.08);
    background: white;
  }
`

const Select = styled.select`
  padding: 11px 14px;
  border: 2px solid #e5e7eb;
  border-radius: 8px;
  font-size: 14px;
  background: #fafafa;
  transition: border-color 0.3s ease;
  cursor: pointer;

  &:focus {
    outline: none;
    border-color: var(--primary-color);
  }
`

const CheckboxGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`

const DayButton = styled.button`
  padding: 8px 14px;
  border: 2px solid ${props => props.$active ? 'var(--primary-color)' : '#e5e7eb'};
  border-radius: 8px;
  background: ${props => props.$active ? 'rgba(var(--primary-rgb), 0.08)' : 'white'};
  color: ${props => props.$active ? 'var(--primary-color)' : '#6b7280'};
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    border-color: var(--primary-color);
    color: var(--primary-color);
  }
`

const TimeRow = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  input {
    padding: 10px 12px;
    border: 2px solid #e5e7eb;
    border-radius: 8px;
    font-size: 14px;
    transition: border-color 0.3s ease;

    &:focus {
      outline: none;
      border-color: var(--primary-color);
    }
  }

  span {
    color: #9ca3af;
    font-weight: 600;
  }
`

const CharCount = styled.span`
  font-size: 11px;
  color: ${props => props.$over ? '#ef4444' : '#9ca3af'};
  text-align: right;
  margin-top: 4px;
`

// ── LOGO ──
const LogoSection = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  flex-wrap: wrap;

  @media (max-width: 500px) {
    flex-direction: column;
    text-align: center;
  }
`

const LogoPreview = styled.div`
  width: 110px;
  height: 110px;
  border-radius: 14px;
  background: #f3f4f6;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px dashed #d1d5db;
  overflow: hidden;
  flex-shrink: 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

const FileInput = styled.input`
  display: none;
`

const LogoControls = styled.div`
  flex: 1;
  min-width: 180px;
`

const FileButton = styled.label`
  display: inline-block;
  padding: 10px 20px;
  background: var(--primary-color);
  color: white;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 500;
  font-size: 14px;
  transition: all 0.3s ease;

  &:hover {
    background: var(--secondary-color);
    transform: translateY(-1px);
  }
`

const LogoInfo = styled.div`
  font-size: 12px;
  color: #059669;
  background: #ecfdf5;
  padding: 6px 12px;
  border-radius: 6px;
  margin-top: 8px;
  display: inline-block;
`

// ── BOTÓN GUARDAR ──
const SaveButton = styled.button`
  width: 100%;
  padding: 16px;
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  color: white;
  border: none;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-top: 8px;
  margin-bottom: 32px;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 25px rgba(var(--primary-rgb), 0.3);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
`

const ResetButton = styled.button`
  background: none;
  border: none;
  color: #9ca3af;
  font-size: 12px;
  cursor: pointer;
  text-decoration: underline;
  margin-top: 8px;

  &:hover {
    color: #ef4444;
  }
`

// ── DÍAS DE LA SEMANA ──
const DAYS = [
  { key: 'mon', label: 'Lun' },
  { key: 'tue', label: 'Mar' },
  { key: 'wed', label: 'Mié' },
  { key: 'thu', label: 'Jue' },
  { key: 'fri', label: 'Vie' },
  { key: 'sat', label: 'Sáb' },
  { key: 'sun', label: 'Dom' }
]

// ── COMPONENTE PRINCIPAL ──
const EmpresaTab = () => {
  const [logo, setLogo] = useState(null)
  const [logoPreview, setLogoPreview] = useState(null)
  const [logoInfo, setLogoInfo] = useState(null)
  const [processing, setProcessing] = useState(false)
  const [loading, setLoading] = useState(false)

  // Secciones plegables
  const [sections, setSections] = useState({
    general: true,
    contact: false,
    legal: false,
    social: false,
    hours: false,
    logo: false
  })

  const toggleSection = (key) => {
    setSections(prev => ({ ...prev, [key]: !prev[key] }))
  }

  // Días laborales
  const [workingDays, setWorkingDays] = useState(['mon', 'tue', 'wed', 'thu', 'fri'])
  const toggleDay = (day) => {
    setWorkingDays(prev =>
      prev.includes(day) ? prev.filter(d => d !== day) : [...prev, day]
    )
  }

  // Cargar datos guardados
  const getDefaultValues = () => {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved) {
      try {
        const parsed = JSON.parse(saved)
        if (parsed.workingDays) setWorkingDays(parsed.workingDays)
        if (parsed.logoPreview) setLogoPreview(parsed.logoPreview)
        return parsed.formData
      } catch { /* ignorar */ }
    }
    return {
      name: '', nit: '', tax_regime: 'simplificado',
      phone: '', email: '', address: '', city: '',
      legal_representative: '', legal_id: '', legal_phone: '',
      whatsapp: '', instagram: '', facebook: '', website: '',
      opening_time: '08:00', closing_time: '18:00',
      description: ''
    }
  }

  const { register, handleSubmit, formState: { errors }, reset, watch } = useForm({
    resolver: yupResolver(schema),
    defaultValues: getDefaultValues()
  })

  const descValue = watch('description', '')
  const descLength = descValue?.length || 0

  // Reset a valores vacíos
  const handleReset = () => {
    if (!window.confirm('¿Está seguro de limpiar todos los datos?')) return
    reset()
    setLogo(null)
    setLogoPreview(null)
    setLogoInfo(null)
    setWorkingDays(['mon', 'tue', 'wed', 'thu', 'fri'])
    localStorage.removeItem(STORAGE_KEY)
    toast.info('Datos restablecidos')
  }

  // Logo
  const handleLogoChange = async (event) => {
    const file = event.target.files[0]
    if (!file) return
    if (file.size > 3 * 1024 * 1024) { toast.error('El logo debe ser menor a 3MB'); return }
    if (!file.type.startsWith('image/')) { toast.error('Solo se permiten archivos de imagen'); return }

    setProcessing(true)
    try {
      const result = await convertToWebP(file, {
        maxWidth: 512, maxHeight: 512, quality: 0.8,
        outputName: `logo_${Date.now()}`
      })
      setLogo(result.file)
      setLogoPreview(result.previewUrl)
      setLogoInfo(result)
      if (result.savedPercent > 0) {
        toast.success(`Logo optimizado: ${formatBytes(result.originalSize)} → ${formatBytes(result.webpSize)} (${result.savedPercent}% menos)`, { autoClose: 4000 })
      }
    } catch (error) {
      toast.error('Error al procesar la imagen')
    } finally {
      setProcessing(false)
      event.target.value = ''
    }
  }

  // Guardar
  const onSubmit = async (data) => {
    setLoading(true)
    try {
      await new Promise(resolve => setTimeout(resolve, 1200))

      const payload = { formData: data, workingDays, logo: logo?.name || null, logoPreview }
      localStorage.setItem(STORAGE_KEY, JSON.stringify(payload))

      toast.success('✅ Información de empresa guardada exitosamente')
    } catch (error) {
      toast.error('Error al guardar')
    } finally {
      setLoading(false)
    }
  }

  // Datos para preview (en vivo)
  const nameVal = watch('name') || 'Mi Empresa'
  const phoneVal = watch('phone')
  const emailVal = watch('email')
  const cityVal = watch('city')
  const nitVal = watch('nit')

  return (
    <Container>
      {/* ── PREVIEW CARD ── */}
      <PreviewCard>
        <PreviewLogo>
          {logoPreview ? <img src={logoPreview} alt="logo" /> : '🏢'}
        </PreviewLogo>
        <PreviewInfo>
          <h2>{nameVal || 'Mi Empresa'}</h2>
          <div className="preview-meta">
            {nitVal && <span>📋 NIT {nitVal}</span>}
            {cityVal && <span>📍 {cityVal}</span>}
            {phoneVal && <span>📞 {phoneVal}</span>}
            {emailVal && <span>✉️ {emailVal}</span>}
          </div>
          <PreviewBadge>
            {workingDays.length} días hábiles · {watch('opening_time') || '08:00'} - {watch('closing_time') || '18:00'}
          </PreviewBadge>
        </PreviewInfo>
      </PreviewCard>

      <form onSubmit={handleSubmit(onSubmit)}>
        {/* ── INFORMACIÓN GENERAL ── */}
        <Section>
          <SectionHeader $open={sections.general} onClick={() => toggleSection('general')}>
            <div className="section-title">
              <span className="icon">🏢</span>
              <h3>Información General</h3>
            </div>
            <span className="toggle">▼</span>
          </SectionHeader>
          <SectionBody $open={sections.general}>
            <FormGrid>
              <FullWidth>
                <FormGroup>
                  <Label>📛 Nombre de la Empresa *</Label>
                  <Input type="text" placeholder="Ej: Mi Empresa S.A.S." {...register('name')} />
                  {errors.name && <span style={{color: '#ef4444', fontSize: 12, marginTop: 4}}>{errors.name.message}</span>}
                </FormGroup>
              </FullWidth>
              <FormGroup>
                <Label>📋 NIT *</Label>
                <Input type="text" placeholder="123456789-0" {...register('nit')} />
                {errors.nit && <span style={{color: '#ef4444', fontSize: 12, marginTop: 4}}>{errors.nit.message}</span>}
              </FormGroup>
              <FormGroup>
                <Label>📄 Régimen Tributario</Label>
                <Select {...register('tax_regime')}>
                  <option value="simplificado">Simplificado</option>
                  <option value="comun">Común</option>
                  <option value="gran_contribuyente">Gran Contribuyente</option>
                  <option value="no_responsable">No Responsable de IVA</option>
                </Select>
              </FormGroup>
              <FormGroup>
                <Label>📝 Descripción</Label>
                <TextArea placeholder="Breve descripción del negocio..." maxLength={300} {...register('description')} />
                <CharCount $over={descLength > 300}>{descLength}/300</CharCount>
              </FormGroup>
            </FormGrid>
          </SectionBody>
        </Section>

        {/* ── CONTACTO ── */}
        <Section>
          <SectionHeader $open={sections.contact} onClick={() => toggleSection('contact')}>
            <div className="section-title">
              <span className="icon">📞</span>
              <h3>Contacto</h3>
            </div>
            <span className="toggle">▼</span>
          </SectionHeader>
          <SectionBody $open={sections.contact}>
            <FormGrid>
              <FormGroup>
                <Label>📞 Teléfono</Label>
                <Input type="text" placeholder="+57 300 123 4567" {...register('phone')} />
                {errors.phone && <span style={{color: '#ef4444', fontSize: 12, marginTop: 4}}>{errors.phone.message}</span>}
              </FormGroup>
              <FormGroup>
                <Label>✉️ Email</Label>
                <Input type="email" placeholder="contacto@empresa.com" {...register('email')} />
                {errors.email && <span style={{color: '#ef4444', fontSize: 12, marginTop: 4}}>{errors.email.message}</span>}
              </FormGroup>
              <FormGroup>
                <Label>📍 Dirección</Label>
                <Input type="text" placeholder="Calle 123 #45-67" {...register('address')} />
              </FormGroup>
              <FormGroup>
                <Label>🏙️ Ciudad</Label>
                <Input type="text" placeholder="Bogotá, Colombia" {...register('city')} />
              </FormGroup>
            </FormGrid>
          </SectionBody>
        </Section>

        {/* ── REPRESENTANTE LEGAL ── */}
        <Section>
          <SectionHeader $open={sections.legal} onClick={() => toggleSection('legal')}>
            <div className="section-title">
              <span className="icon">👤</span>
              <h3>Representante Legal</h3>
            </div>
            <span className="toggle">▼</span>
          </SectionHeader>
          <SectionBody $open={sections.legal}>
            <FormGrid>
              <FormGroup>
                <Label>🧑 Nombre Completo</Label>
                <Input type="text" placeholder="Nombre del representante" {...register('legal_representative')} />
              </FormGroup>
              <FormGroup>
                <Label>🆔 Documento de Identidad</Label>
                <Input type="text" placeholder="CC 123456789" {...register('legal_id')} />
              </FormGroup>
              <FormGroup>
                <Label>📞 Teléfono</Label>
                <Input type="text" placeholder="+57 301 987 6543" {...register('legal_phone')} />
                {errors.legal_phone && <span style={{color: '#ef4444', fontSize: 12, marginTop: 4}}>{errors.legal_phone.message}</span>}
              </FormGroup>
            </FormGrid>
          </SectionBody>
        </Section>

        {/* ── REDES SOCIALES ── */}
        <Section>
          <SectionHeader $open={sections.social} onClick={() => toggleSection('social')}>
            <div className="section-title">
              <span className="icon">🌐</span>
              <h3>Redes Sociales</h3>
              <span className="count">Opcional</span>
            </div>
            <span className="toggle">▼</span>
          </SectionHeader>
          <SectionBody $open={sections.social}>
            <FormGrid>
              <FormGroup>
                <Label>💬 WhatsApp</Label>
                <Input type="text" placeholder="+57 300 123 4567" {...register('whatsapp')} />
              </FormGroup>
              <FormGroup>
                <Label>📸 Instagram</Label>
                <Input type="text" placeholder="@miempresa" {...register('instagram')} />
              </FormGroup>
              <FormGroup>
                <Label>👍 Facebook</Label>
                <Input type="text" placeholder="facebook.com/miempresa" {...register('facebook')} />
              </FormGroup>
              <FormGroup>
                <Label>🌍 Sitio Web</Label>
                <Input type="url" placeholder="https://miempresa.com" {...register('website')} />
                {errors.website && <span style={{color: '#ef4444', fontSize: 12, marginTop: 4}}>{errors.website.message}</span>}
              </FormGroup>
            </FormGrid>
          </SectionBody>
        </Section>

        {/* ── HORARIOS ── */}
        <Section>
          <SectionHeader $open={sections.hours} onClick={() => toggleSection('hours')}>
            <div className="section-title">
              <span className="icon">🕐</span>
              <h3>Horarios de Atención</h3>
            </div>
            <span className="toggle">▼</span>
          </SectionHeader>
          <SectionBody $open={sections.hours}>
            <FormGrid>
              <FullWidth>
                <FormGroup>
                  <Label>📅 Días Laborales</Label>
                  <CheckboxGroup>
                    {DAYS.map(d => (
                      <DayButton
                        key={d.key}
                        type="button"
                        $active={workingDays.includes(d.key)}
                        onClick={() => toggleDay(d.key)}
                      >
                        {d.label}
                      </DayButton>
                    ))}
                  </CheckboxGroup>
                </FormGroup>
              </FullWidth>
              <FormGroup>
                <Label>🟢 Hora de Apertura</Label>
                <TimeRow>
                  <input type="time" {...register('opening_time')} />
                </TimeRow>
              </FormGroup>
              <FormGroup>
                <Label>🔴 Hora de Cierre</Label>
                <TimeRow>
                  <input type="time" {...register('closing_time')} />
                </TimeRow>
              </FormGroup>
            </FormGrid>
          </SectionBody>
        </Section>

        {/* ── LOGO ── */}
        <Section>
          <SectionHeader $open={sections.logo} onClick={() => toggleSection('logo')}>
            <div className="section-title">
              <span className="icon">🖼️</span>
              <h3>Logo de la Empresa</h3>
              {logoPreview && <span className="count">Cargado</span>}
            </div>
            <span className="toggle">▼</span>
          </SectionHeader>
          <SectionBody $open={sections.logo}>
            <LogoSection>
              <LogoPreview>
                {processing ? (
                  <div style={{color: 'var(--primary-color)', textAlign: 'center', fontSize: 13}}>
                    <div style={{fontSize: 28}}>⏳</div>
                    Optimizando...
                  </div>
                ) : logoPreview ? (
                  <img src={logoPreview} alt="Logo" />
                ) : (
                  <div style={{color: '#bbb', fontSize: 14}}>Sin logo</div>
                )}
              </LogoPreview>
              <LogoControls>
                <FileInput type="file" accept="image/*" onChange={handleLogoChange} id="logo-input" disabled={processing} />
                <FileButton htmlFor="logo-input" style={{opacity: processing ? 0.6 : 1}}>
                  {processing ? 'Procesando...' : logoPreview ? '🔄 Cambiar Logo' : '📁 Subir Logo'}
                </FileButton>
                {logoInfo && (
                  <LogoInfo>
                    ✓ {formatBytes(logoInfo.originalSize)} → {formatBytes(logoInfo.webpSize)} ({logoInfo.savedPercent}% menos)
                    {logoInfo.webpWidth && <> · {logoInfo.webpWidth}×{logoInfo.webpHeight}px</>}
                  </LogoInfo>
                )}
                <p style={{fontSize: 12, color: '#9ca3af', marginTop: 8}}>
                  Máximo 3MB. Se convierte automáticamente a WebP.
                </p>
              </LogoControls>
            </LogoSection>
          </SectionBody>
        </Section>

        {/* ── BOTÓN GUARDAR ── */}
        <SaveButton type="submit" disabled={loading}>
          {loading ? '⏳ Guardando...' : '💾 Guardar Configuración'}
        </SaveButton>
      </form>

      <div style={{textAlign: 'center', marginBottom: 24}}>
        <ResetButton type="button" onClick={handleReset}>Restablecer datos</ResetButton>
      </div>
    </Container>
  )
}

export default EmpresaTab