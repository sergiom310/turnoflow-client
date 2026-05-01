import { useState, useEffect } from 'react'
import { toast } from 'react-toastify'
import styled from 'styled-components'
import { useBusiness } from '../../../context/BusinessContext'

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

// Paletas de colores por tipo de negocio (para preview rápido)
const BUSINESS_COLORS = {
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
  other:        { primary: '#546E7A', secondary: '#78909C', accent: '#B0BEC5' }
}

/**
 * Aplica colores como preview temporal en las variables CSS
 */
const previewTheme = (type) => {
  const colors = BUSINESS_COLORS[type]
  if (!colors) return
  const root = document.documentElement
  root.style.setProperty('--primary-color', colors.primary)
  root.style.setProperty('--secondary-color', colors.secondary)
  root.style.setProperty('--accent-color', colors.accent)
}

const TipoNegocioTab = () => {
  const [selectedBusiness, setSelectedBusiness] = useState('beauty')
  const [loading, setLoading] = useState(false)

  // Al cargar el componente, aplicar el tema guardado
  useEffect(() => {
    const saved = localStorage.getItem('businessType')
    if (saved) {
      setSelectedBusiness(saved)
      previewTheme(saved)
    }
  }, [])

  const businessTypes = [
    {
      id: 'beauty',
      name: 'Belleza y Cuidado Personal',
      icon: '💇',
      description: 'Salones de belleza, peluquerías, barberías, centros de estética, manicuristas, pedicuristas, spa y masajistas.',
      colors: ['#E91E63', '#F48FB1', '#FFEB3B']
    },
    {
      id: 'health',
      name: 'Salud y Bienestar',
      icon: '🏥',
      description: 'Consultorios médicos, clínicas y centros de salud, psicólogos, psiquiatras, odontólogos, nutricionistas, terapias alternativas.',
      colors: ['#1976D2', '#42A5F5', '#4CAF50']
    },
    {
      id: 'fitness',
      name: 'Actividad Física y Formación',
      icon: '🏋️',
      description: 'Gimnasios, entrenadores personales, clases grupales (yoga, baile, pilates, boxeo), profesores particulares.',
      colors: ['#FF5722', '#FF9800', '#FFC107']
    },
    {
      id: 'professional',
      name: 'Servicios Profesionales',
      icon: '🧾',
      description: 'Abogados, contadores, asesores financieros, consultores, agentes inmobiliarios.',
      colors: ['#9C27B0', '#BA68C8', '#E1BEE7']
    },
    {
      id: 'technical',
      name: 'Servicios Técnicos',
      icon: '🛠️',
      description: 'Talleres de reparación, mecánicos automotrices, centros de diagnóstico vehicular, reparación de equipos.',
      colors: ['#607D8B', '#90A4AE', '#B0BEC5']
    },
    {
      id: 'restaurant',
      name: 'Gastronomía',
      icon: '🧑‍🍳',
      description: 'Restaurantes con alta demanda, cafés con espacios limitados, food trucks con atención por orden.',
      colors: ['#FF6F00', '#FFB74D', '#FFF3E0']
    },
    {
      id: 'public',
      name: 'Sector Público y Trámites',
      icon: '🏢',
      description: 'Notarías, oficinas de tránsito, EPS/IPS, centros de atención ciudadana.',
      colors: ['#2E7D32', '#4CAF50', '#81C784']
    },
    {
      id: 'veterinary',
      name: 'Veterinarias y Spa Animales',
      icon: '🐾',
      description: 'Clínicas veterinarias, peluquería canina, grooming, baños medicados, guarderías, hoteles para mascotas.',
      colors: ['#795548', '#A1887F', '#D7CCC8']
    },
    {
      id: 'education',
      name: 'Educación',
      icon: '🎓',
      description: 'Instituciones educativas, academias, cursos y capacitación.',
      colors: ['#FF9800', '#FFB74D', '#FFF3E0']
    },
    {
      id: 'retail',
      name: 'Comercio Minorista',
      icon: '🛍️',
      description: 'Tiendas, boutiques, comercios minoristas y servicios comerciales.',
      colors: ['#7B1FA2', '#BA68C8', '#E1BEE7']
    },
    {
      id: 'other',
      name: 'Otros Servicios',
      icon: '🔧',
      description: 'Otros tipos de negocio que requieren sistema de turnos.',
      colors: ['#546E7A', '#78909C', '#B0BEC5']
    }
  ]

  const { updateBusinessType, getBusinessComponents } = useBusiness()

  const handleSave = async () => {
    setLoading(true)
    try {
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      updateBusinessType(selectedBusiness)
      
      const business = getBusinessComponents(selectedBusiness)
      toast.success(`${business.icon} ${business.name} configurado exitosamente. El menú se adaptará automáticamente.`)
    } catch (error) {
      toast.error('Error al guardar la configuración')
    } finally {
      setLoading(false)
    }
  }

  const selectedType = businessTypes.find(type => type.id === selectedBusiness)

  return (
    <Container>
      <BusinessTypesGrid>
        {businessTypes.map(type => (
          <BusinessCard
            key={type.id}
            selected={selectedBusiness === type.id}
            onClick={() => {
              setSelectedBusiness(type.id)
              previewTheme(type.id) // Preview en vivo de los colores
            }}
          >
            <BusinessIcon>{type.icon}</BusinessIcon>
            <BusinessTitle>{type.name}</BusinessTitle>
            <BusinessDescription>{type.description}</BusinessDescription>
            <ColorPalette>
              {type.colors.map((color, index) => (
                <ColorSwatch key={index} color={color} />
              ))}
            </ColorPalette>
          </BusinessCard>
        ))}
      </BusinessTypesGrid>

      <SaveSection>
        <CurrentSelection>
          <h4>Selección Actual</h4>
          <p>
            {selectedType ? `${selectedType.icon} ${selectedType.name}` : 'Ninguno seleccionado'}
          </p>
        </CurrentSelection>
        <SaveButton onClick={handleSave} disabled={loading}>
          {loading ? 'Configurando...' : 'Aplicar Configuración'}
        </SaveButton>
        <p style={{fontSize: '12px', color: '#6b7280', marginTop: '12px'}}>
          Al cambiar el tipo de negocio, el menú y componentes disponibles se adaptarán automáticamente.
        </p>
      </SaveSection>
    </Container>
  )
}

export default TipoNegocioTab