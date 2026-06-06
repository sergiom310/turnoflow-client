import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { toast } from 'react-toastify'
import styled from 'styled-components'
import api from '../../../utils/api'
import { useAuth } from '../../../context/AuthContext'
import { convertToWebP, formatBytes } from '../../../utils/imageProcessor'

const schema = yup.object({
  name:  yup.string().min(2).required('El nombre es requerido'),
  phone: yup.string().matches(/^[0-9+\-\s()]*$/, 'Formato inválido').nullable(),
  email: yup.string().email('Email inválido').nullable(),
})

// ── Styled ────────────────────────────────────────────────────
const Container = styled.div`max-width: 700px; margin: 0 auto;`

const Section = styled.div`
  background: #f8f9fa;
  border-radius: 12px;
  padding: 24px;
  margin-bottom: 20px;
  h3 { margin: 0 0 18px 0; font-size: 15px; color: #374151; }
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  @media (max-width: 640px) { grid-template-columns: 1fr; }
`

const FormGroup = styled.div`display: flex; flex-direction: column; gap: 5px;`

const Label = styled.label`font-size: 13px; font-weight: 600; color: #374151;`

const Input = styled.input`
  padding: 10px 14px;
  border: 2px solid #e5e7eb;
  border-radius: 8px;
  font-size: 14px;
  background: white;
  &:focus { outline: none; border-color: var(--primary-color); }
  &:disabled { opacity: 0.6; }
`

const ErrorMsg = styled.span`font-size: 12px; color: #ef4444;`

const SaveBtn = styled.button`
  padding: 12px 32px;
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  margin-top: 4px;
  &:hover:not(:disabled) { opacity: 0.9; transform: translateY(-1px); }
  &:disabled { opacity: 0.65; cursor: not-allowed; }
`

// ── Logo ──────────────────────────────────────────────────────
const LogoWrap = styled.div`display: flex; align-items: center; gap: 24px; flex-wrap: wrap;`

const LogoPreview = styled.div`
  width: 100px; height: 100px;
  border-radius: 14px;
  border: 2px dashed #d1d5db;
  background: #f3f4f6;
  display: flex; align-items: center; justify-content: center;
  overflow: hidden; flex-shrink: 0;
  img { width: 100%; height: 100%; object-fit: cover; }
  span { font-size: 36px; }
`

const FileLabel = styled.label`
  display: inline-block;
  padding: 9px 20px;
  background: var(--primary-color);
  color: white;
  border-radius: 8px;
  cursor: pointer;
  font-size: 13px;
  font-weight: 500;
  &:hover { opacity: 0.9; }
`

// ── Component ─────────────────────────────────────────────────
const MiEmpresaTab = () => {
  const { tenant, login } = useAuth()
  const [loading,     setLoading]     = useState(false)
  const [uploading,   setUploading]   = useState(false)
  const [logoPreview, setLogoPreview] = useState(null)
  const [currentData, setCurrentData] = useState(null)

  // Colores del tema
  const [themeColors,  setThemeColors]  = useState(null) // { primary, secondary, accent }
  const [savingColors, setSavingColors] = useState(false)

  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  })

  // Cargar datos actuales del tenant
  useEffect(() => {
    api.get('/settings').then(data => {
      const t = data.tenant
      setCurrentData(t)
      setLogoPreview(t.logo_url ? `${import.meta.env.VITE_API_URL?.replace('/api/v1', '') ?? 'http://localhost:3001'}${t.logo_url}` : null)
      reset({ name: t.name, phone: t.phone ?? '', email: t.email ?? '' })
      // Inicializar colores: theme_colors del tenant, o default del tipo
      const src = t.theme_colors || t.businessType?.default_colors || null
      if (src) setThemeColors({ primary: src.primary || '#4f46e5', secondary: src.secondary || '#818cf8', accent: src.accent || '#c7d2fe' })
    }).catch(err => toast.error('Error al cargar datos: ' + err.message))
  }, [reset])

  const onSubmit = async (data) => {
    setLoading(true)
    try {
      await api.patch('/settings', { name: data.name, phone: data.phone || null, email: data.email || null })
      // Actualizar el tenant en localStorage y contexto
      const updated = { ...tenant, name: data.name, phone: data.phone, email: data.email }
      localStorage.setItem('tenant', JSON.stringify(updated))
      login({ user: JSON.parse(localStorage.getItem('user')), permissions: JSON.parse(localStorage.getItem('permissions')), tenant: updated }, false)
      toast.success('Datos actualizados correctamente')
    } catch (err) {
      toast.error(err.message ?? 'Error al guardar')
    } finally {
      setLoading(false)
    }
  }

  const applyColors = (colors) => {
    const hexToRgb = (hex) => {
      const r = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
      return r ? `${parseInt(r[1],16)},${parseInt(r[2],16)},${parseInt(r[3],16)}` : '0,0,0'
    }
    const root = document.documentElement
    if (colors.primary)   { root.style.setProperty('--primary-color',   colors.primary);   root.style.setProperty('--primary-rgb',   hexToRgb(colors.primary)) }
    if (colors.secondary) { root.style.setProperty('--secondary-color', colors.secondary); root.style.setProperty('--secondary-rgb', hexToRgb(colors.secondary)) }
    if (colors.accent)    { root.style.setProperty('--accent-color',    colors.accent);    root.style.setProperty('--accent-rgb',    hexToRgb(colors.accent)) }
  }

  const handleColorChange = (key, value) => {
    const updated = { ...themeColors, [key]: value }
    setThemeColors(updated)
    applyColors(updated)
  }

  const handleSaveColors = async () => {
    setSavingColors(true)
    try {
      await api.patch('/settings', { theme_colors: themeColors })
      const updated = { ...tenant, theme_colors: themeColors }
      localStorage.setItem('tenant', JSON.stringify(updated))
      login({ user: JSON.parse(localStorage.getItem('user')), permissions: JSON.parse(localStorage.getItem('permissions') || '{}'), tenant: updated }, false)
      toast.success('Colores guardados')
    } catch (err) {
      toast.error(err.message ?? 'Error al guardar colores')
    } finally {
      setSavingColors(false)
    }
  }

  const handleResetColors = async () => {
    const def = currentData?.businessType?.default_colors
    if (!def) return
    const colors = { primary: def.primary, secondary: def.secondary, accent: def.accent }
    setThemeColors(colors)
    applyColors(colors)
    // Persistir el reset: theme_colors = null → usará los default_colors del tipo
    setSavingColors(true)
    try {
      await api.patch('/settings', { theme_colors: null })
      const updated = { ...tenant, theme_colors: null }
      localStorage.setItem('tenant', JSON.stringify(updated))
      login({ user: JSON.parse(localStorage.getItem('user')), permissions: JSON.parse(localStorage.getItem('permissions') || '{}'), tenant: updated }, false)
      toast.success('Colores restaurados al por defecto')
    } catch (err) {
      toast.error(err.message ?? 'Error al restaurar colores')
    } finally {
      setSavingColors(false)
    }
  }

  const handleLogo = async (e) => {
    const file = e.target.files[0]
    if (!file) return
    if (file.size > 3 * 1024 * 1024) { toast.error('Máximo 3MB'); return }

    setUploading(true)
    try {
      const result = await convertToWebP(file, { maxWidth: 512, maxHeight: 512, quality: 0.85, outputName: `logo_${Date.now()}` })
      const fd = new FormData()
      fd.append('logo', result.file)
      const resp = await api.upload('/settings/logo', fd)
      setLogoPreview(result.previewUrl)
      const updated = { ...tenant, logo_url: resp.logo_url }
      localStorage.setItem('tenant', JSON.stringify(updated))
      toast.success(`Logo actualizado · ${formatBytes(result.originalSize)} → ${formatBytes(result.webpSize)}`)
    } catch (err) {
      toast.error('Error al subir logo: ' + (err.message ?? ''))
    } finally {
      setUploading(false)
      e.target.value = ''
    }
  }

  return (
    <Container>
      {/* Logo */}
      <Section>
        <h3>🖼️ Logo del negocio</h3>
        <LogoWrap>
          <LogoPreview>
            {logoPreview
              ? <img src={logoPreview} alt="logo" />
              : <span>🏢</span>
            }
          </LogoPreview>
          <div>
            <input type="file" accept="image/*" id="logo-upload" style={{ display: 'none' }} onChange={handleLogo} disabled={uploading} />
            <FileLabel htmlFor="logo-upload">
              {uploading ? '⏳ Procesando...' : logoPreview ? '🔄 Cambiar logo' : '📁 Subir logo'}
            </FileLabel>
            <p style={{ fontSize: 12, color: '#9ca3af', marginTop: 8, marginBottom: 0 }}>
              Máximo 3MB. Se optimiza automáticamente a WebP 512×512.
            </p>
          </div>
        </LogoWrap>
      </Section>

      {/* Datos del negocio */}
      <Section>
        <h3>🏢 Datos del negocio</h3>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid>
            <FormGroup style={{ gridColumn: '1 / -1' }}>
              <Label>Nombre del negocio *</Label>
              <Input placeholder="Nombre" disabled={loading} {...register('name')} />
              {errors.name && <ErrorMsg>{errors.name.message}</ErrorMsg>}
            </FormGroup>
            <FormGroup>
              <Label>Teléfono</Label>
              <Input placeholder="+57 300 000 0000" disabled={loading} {...register('phone')} />
              {errors.phone && <ErrorMsg>{errors.phone.message}</ErrorMsg>}
            </FormGroup>
            <FormGroup>
              <Label>Email de contacto</Label>
              <Input type="email" placeholder="contacto@negocio.com" disabled={loading} {...register('email')} />
              {errors.email && <ErrorMsg>{errors.email.message}</ErrorMsg>}
            </FormGroup>
          </Grid>

          {/* Campos de solo lectura */}
          {currentData && (
            <>
              <Grid style={{ marginTop: 16 }}>
                <FormGroup>
                  <Label>Subdominio (no editable)</Label>
                  <Input value={currentData.subdomain} disabled readOnly style={{ background: '#f3f4f6', color: '#6b7280' }} />
                </FormGroup>
                <FormGroup>
                  <Label>Tipo de negocio</Label>
                  <Input value={currentData.businessType?.name ?? '—'} disabled readOnly style={{ background: '#f3f4f6', color: '#6b7280' }} />
                </FormGroup>
              </Grid>
            </>
          )}

          <SaveBtn type="submit" disabled={loading} style={{ marginTop: 20 }}>
            {loading ? '⏳ Guardando...' : '💾 Guardar cambios'}
          </SaveBtn>
        </form>
      </Section>

      {/* Colores del tema */}
      {themeColors && (
        <Section>
          <h3>🎨 Colores del tema</h3>
          <p style={{ fontSize: 13, color: '#6b7280', marginBottom: 20, marginTop: -8 }}>
            Personaliza la paleta de tu negocio. Los cambios se aplican en tiempo real para que puedas previsualizarlos.
          </p>
          <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap', marginBottom: 20 }}>
            {[
              { key: 'primary',   label: 'Color principal' },
              { key: 'secondary', label: 'Color secundario' },
              { key: 'accent',    label: 'Acento' },
            ].map(({ key, label }) => (
              <div key={key} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
                <label style={{ fontSize: 12, fontWeight: 600, color: '#374151' }}>{label}</label>
                <input
                  type="color"
                  value={themeColors[key] || '#000000'}
                  onChange={e => handleColorChange(key, e.target.value)}
                  style={{ width: 52, height: 52, border: 'none', borderRadius: 8, cursor: 'pointer', padding: 2 }}
                />
                <span style={{ fontSize: 11, color: '#9ca3af' }}>{themeColors[key]}</span>
              </div>
            ))}
          </div>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            <SaveBtn onClick={handleSaveColors} disabled={savingColors} style={{ flex: 1, minWidth: 140 }}>
              {savingColors ? '⏳ Guardando...' : '💾 Guardar colores'}
            </SaveBtn>
            {currentData?.businessType?.default_colors && (
              <SaveBtn onClick={handleResetColors} style={{ flex: 1, minWidth: 140, background: '#6b7280' }}>
                ↩ Restaurar por defecto
              </SaveBtn>
            )}
          </div>
        </Section>
      )}
    </Container>
  )
}

export default MiEmpresaTab
