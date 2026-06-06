import { useState, useEffect } from 'react'
import { toast } from 'react-toastify'
import styled from 'styled-components'
import api from '../../../utils/api'

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`

const BusinessTypesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
  margin-bottom: 32px;
`

const BusinessCard = styled.div`
  background: white;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  border: 3px solid ${props => props.selected ? 'var(--primary-color)' : 'transparent'};
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  }

  ${props => props.selected && `
    &::after {
      content: '✓';
      position: absolute;
      top: 12px;
      right: 12px;
      background: var(--primary-color);
      color: white;
      border-radius: 50%;
      width: 24px;
      height: 24px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: bold;
    }
  `}
`

const BusinessIcon = styled.div`
  font-size: 48px;
  margin-bottom: 16px;
  text-align: center;
`

const BusinessTitle = styled.h3`
  margin: 0 0 12px 0;
  color: #1f2937;
  font-size: 20px;
  text-align: center;
`

const BusinessDescription = styled.p`
  margin: 0;
  color: #6b7280;
  font-size: 14px;
  line-height: 1.5;
  text-align: center;
`

const ColorPalette = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-top: 16px;
`

const ColorSwatch = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: ${props => props.color};
  border: 2px solid white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`

const SaveSection = styled.div`
  background: #f8f9fa;
  border-radius: 12px;
  padding: 24px;
  text-align: center;
`

const CurrentSelection = styled.div`
  margin-bottom: 20px;

  h4 {
    margin: 0 0 8px 0;
    color: #374151;
  }

  p {
    margin: 0;
    color: #6b7280;
  }
`

const SaveButton = styled.button`
  padding: 14px 32px;
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 25px rgba(var(--primary-rgb), 0.3);
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
    transform: none;
  }
`

// Paletas fallback locales (se usan para preview antes de cargar la API)
const FALLBACK_COLORS = {
  beauty:       { primary: '#E91E63', secondary: '#F48FB1', accent: '#FFEB3B' },
  health:       { primary: '#1976D2', secondary: '#42A5F5', accent: '#4CAF50' },
  fitness:      { primary: '#FF5722', secondary: '#FF9800', accent: '#FFC107' },
  professional: { primary: '#9C27B0', secondary: '#BA68C8', accent: '#E1BEE7' },
  technical:    { primary: '#607D8B', secondary: '#90A4AE', accent: '#B0BEC5' },
  restaurant:   { primary: '#FF6F00', secondary: '#FFB74D', accent: '#FFF3E0' },
  public:       { primary: '#2E7D32', secondary: '#4CAF50', accent: '#81C784' },
  veterinary:   { primary: '#795548', secondary: '#A1887F', accent: '#D7CCC8' },
  education:    { primary: '#FF9800', secondary: '#FFB74D', accent: '#FFF3E0' },
  retail:       { primary: '#7B1FA2', secondary: '#BA68C8', accent: '#E1BEE7' },
  other:        { primary: '#546E7A', secondary: '#78909C', accent: '#B0BEC5' },
}

const applyPreview = (colors) => {
  if (!colors) return
  const root = document.documentElement
  root.style.setProperty('--primary-color',   colors.primary   || colors[0])
  root.style.setProperty('--secondary-color', colors.secondary || colors[1])
  root.style.setProperty('--accent-color',    colors.accent    || colors[2])
}

const TipoNegocioTab = () => {
  const [businessTypes,    setBusinessTypes]    = useState([])
  const [selectedId,       setSelectedId]       = useState(null)
  const [editingColors,    setEditingColors]    = useState(null) // { primary, secondary, accent }
  const [loading,          setLoading]          = useState(true)
  const [saving,           setSaving]           = useState(false)

  // Guardar los colores actuales al entrar y restaurarlos al salir
  useEffect(() => {
    const root = document.documentElement
    const original = {
      primary:   root.style.getPropertyValue('--primary-color').trim()   || null,
      secondary: root.style.getPropertyValue('--secondary-color').trim() || null,
      accent:    root.style.getPropertyValue('--accent-color').trim()    || null,
    }
    return () => {
      // Restaurar al desmontar solo si el usuario no guardó
      if (original.primary)   root.style.setProperty('--primary-color',   original.primary)
      if (original.secondary) root.style.setProperty('--secondary-color', original.secondary)
      if (original.accent)    root.style.setProperty('--accent-color',    original.accent)
    }
  }, [])

  useEffect(() => {
    api.get('/business-types')
      .then(types => {
        const list = Array.isArray(types) ? types : []
        setBusinessTypes(list)
        if (list.length > 0) {
          setSelectedId(list[0].id)
          const c = list[0].default_colors || FALLBACK_COLORS[list[0].slug] || {}
          setEditingColors({ primary: c.primary || '#000000', secondary: c.secondary || '#000000', accent: c.accent || '#ffffff' })
          // NO llamar applyPreview aquí para no dañar los colores actuales
        }
      })
      .catch(() => toast.error('Error al cargar tipos de negocio'))
      .finally(() => setLoading(false))
  }, [])

  const handleSelect = (bt) => {
    setSelectedId(bt.id)
    const c = bt.default_colors || FALLBACK_COLORS[bt.slug] || {}
    const colors = { primary: c.primary || '#000000', secondary: c.secondary || '#000000', accent: c.accent || '#ffffff' }
    setEditingColors(colors)
    applyPreview(colors)
  }

  const handleColorChange = (key, value) => {
    const updated = { ...editingColors, [key]: value }
    setEditingColors(updated)
    applyPreview(updated)
  }

  const handleSave = async () => {
    if (!selectedId) return
    setSaving(true)
    try {
      const r = await api.admin.patch('/superadmin/business-types/' + selectedId, {
        default_colors: editingColors,
      })
      // Actualizar la lista local
      setBusinessTypes(prev => prev.map(bt => bt.id === selectedId
        ? { ...bt, default_colors: r.default_colors }
        : bt
      ))
      toast.success('Colores del tipo de negocio guardados')
    } catch (err) {
      toast.error(err?.message || 'Error al guardar configuración')
    } finally {
      setSaving(false)
    }
  }

  const selectedType = businessTypes.find(bt => bt.id === selectedId)

  if (loading) return <Container><p style={{ textAlign: 'center', padding: 40, color: '#6b7280' }}>Cargando...</p></Container>

  return (
    <Container>
      <BusinessTypesGrid>
        {businessTypes.map(bt => {
          const colors = bt.default_colors || FALLBACK_COLORS[bt.slug] || {}
          return (
            <BusinessCard
              key={bt.id}
              selected={selectedId === bt.id}
              onClick={() => handleSelect(bt)}
            >
              <BusinessIcon>{bt.icon || '🏢'}</BusinessIcon>
              <BusinessTitle>{bt.name}</BusinessTitle>
              <BusinessDescription>{bt.description}</BusinessDescription>
              <ColorPalette>
                {[colors.primary, colors.secondary, colors.accent].filter(Boolean).map((color, i) => (
                  <ColorSwatch key={i} color={color} />
                ))}
              </ColorPalette>
            </BusinessCard>
          )
        })}
      </BusinessTypesGrid>

      <SaveSection>
        <CurrentSelection>
          <h4>Tipo seleccionado</h4>
          <p>{selectedType ? `${selectedType.icon || ''} ${selectedType.name}` : 'Ninguno seleccionado'}</p>
        </CurrentSelection>

        {editingColors && (
          <div style={{ display: 'flex', gap: 24, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 20 }}>
            {[
              { key: 'primary',   label: 'Color principal' },
              { key: 'secondary', label: 'Color secundario' },
              { key: 'accent',    label: 'Acento' },
            ].map(({ key, label }) => (
              <div key={key} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
                <label style={{ fontSize: 12, fontWeight: 600, color: '#374151' }}>{label}</label>
                <input
                  type="color"
                  value={editingColors[key] || '#000000'}
                  onChange={e => handleColorChange(key, e.target.value)}
                  style={{ width: 48, height: 48, border: 'none', borderRadius: 8, cursor: 'pointer', padding: 2 }}
                />
                <span style={{ fontSize: 11, color: '#9ca3af' }}>{editingColors[key]}</span>
              </div>
            ))}
          </div>
        )}

        <SaveButton onClick={handleSave} disabled={saving || !selectedId}>
          {saving ? 'Guardando...' : 'Guardar paleta de colores'}
        </SaveButton>
        <p style={{ fontSize: 12, color: '#6b7280', marginTop: 12 }}>
          Los colores guardados aquí son la paleta por defecto para todos los negocios de este tipo.
          Cada negocio puede personalizar su propia paleta desde su panel de configuración.
        </p>
      </SaveSection>
    </Container>
  )
}

export default TipoNegocioTab