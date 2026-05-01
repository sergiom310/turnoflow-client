import { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useBusiness } from '../../context/BusinessContext'
import RolesTab from './tabs/RolesTab'
import BusinessConfigTab from './tabs/BusinessConfigTab'

const ConfigContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  padding: 20px;
`

const ConfigCard = styled.div`
  background: white;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  max-width: 1400px;
  margin: 0 auto;
`

const Header = styled.div`
  background: linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%);
  color: white;
  padding: 24px;
  text-align: center;

  h1 {
    margin: 0;
    font-size: 28px;
    font-weight: 700;
  }

  p {
    margin: 8px 0 0 0;
    opacity: 0.9;
    font-size: 16px;
  }
`

const BusinessBadge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: rgba(255, 255, 255, 0.2);
  padding: 6px 16px;
  border-radius: 20px;
  margin-top: 12px;
  font-size: 14px;
`

const TabsContainer = styled.div`
  display: flex;
  background: #f8f9fa;
  border-bottom: 1px solid #e9ecef;
  overflow-x: auto;

  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
`

const Tab = styled.button`
  flex: 1;
  padding: 16px 24px;
  background: none;
  border: none;
  border-bottom: 3px solid ${props => props.active ? 'var(--primary-color)' : 'transparent'};
  color: ${props => props.active ? 'var(--primary-color)' : '#6c757d'};
  font-weight: 600;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.3s ease;
  white-space: nowrap;
  position: relative;

  &:hover {
    background: rgba(var(--primary-rgb), 0.1);
    color: var(--primary-color);
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 0;
    height: 3px;
    background: var(--primary-color);
    transition: all 0.3s ease;
    transform: translateX(-50%);
  }

  &:hover::after {
    width: 100%;
  }

  @media (max-width: 768px) {
    flex: none;
    min-width: 120px;
    padding: 12px 16px;
    font-size: 12px;
  }
`

const Content = styled.div`
  padding: 32px;
  min-height: 600px;

  @media (max-width: 768px) {
    padding: 16px;
  }
`

const Configuration = () => {
  const { businessType, businessConfig, getBusinessComponents } = useBusiness()
  const [activeTab, setActiveTab] = useState('roles')
  
  const business = getBusinessComponents(businessType)

  const getBusinessTabs = (type) => {
    const businessTabs = {
      beauty: [
        { id: 'services', label: 'Servicios de Belleza', component: BusinessConfigTab },
        { id: 'schedule', label: 'Horarios', component: BusinessConfigTab },
        { id: 'pricing', label: 'Precios', component: BusinessConfigTab }
      ],
      health: [
        { id: 'specialties', label: 'Especialidades', component: BusinessConfigTab },
        { id: 'schedule', label: 'Horarios', component: BusinessConfigTab },
        { id: 'medical', label: 'Configuración Médica', component: BusinessConfigTab }
      ],
      fitness: [
        { id: 'classes', label: 'Clases y Servicios', component: BusinessConfigTab },
        { id: 'schedule', label: 'Horarios', component: BusinessConfigTab },
        { id: 'memberships', label: 'Membresías', component: BusinessConfigTab }
      ],
      professional: [
        { id: 'services', label: 'Servicios Profesionales', component: BusinessConfigTab },
        { id: 'schedule', label: 'Horarios', component: BusinessConfigTab },
        { id: 'billing', label: 'Facturación', component: BusinessConfigTab }
      ],
      technical: [
        { id: 'services', label: 'Servicios Técnicos', component: BusinessConfigTab },
        { id: 'schedule', label: 'Horarios', component: BusinessConfigTab },
        { id: 'technical', label: 'Configuración Técnica', component: BusinessConfigTab }
      ],
      restaurant: [
        { id: 'reservations', label: 'Reservas', component: BusinessConfigTab },
        { id: 'schedule', label: 'Horarios', component: BusinessConfigTab },
        { id: 'menu', label: 'Menú', component: BusinessConfigTab }
      ],
      public: [
        { id: 'services', label: 'Servicios Públicos', component: BusinessConfigTab },
        { id: 'schedule', label: 'Horarios', component: BusinessConfigTab },
        { id: 'public', label: 'Configuración Pública', component: BusinessConfigTab }
      ],
      veterinary: [
        { id: 'services', label: 'Servicios Veterinarios', component: BusinessConfigTab },
        { id: 'schedule', label: 'Horarios', component: BusinessConfigTab },
        { id: 'veterinary', label: 'Configuración Veterinaria', component: BusinessConfigTab }
      ],
      education: [
        { id: 'courses', label: 'Cursos', component: BusinessConfigTab },
        { id: 'schedule', label: 'Horarios', component: BusinessConfigTab },
        { id: 'enrollment', label: 'Inscripciones', component: BusinessConfigTab }
      ],
      retail: [
        { id: 'services', label: 'Atención', component: BusinessConfigTab },
        { id: 'schedule', label: 'Horarios', component: BusinessConfigTab },
        { id: 'sales', label: 'Ventas', component: BusinessConfigTab }
      ],
      other: [
        { id: 'general', label: 'Configuración General', component: BusinessConfigTab },
        { id: 'schedule', label: 'Horarios', component: BusinessConfigTab },
        { id: 'services', label: 'Servicios', component: BusinessConfigTab }
      ]
    }

    return businessTabs[type] || []
  }

  useEffect(() => {
    setActiveTab('roles')
  }, [businessType])

  const baseTabs = [
    { id: 'roles', label: 'Roles y Permisos', component: RolesTab }
  ]

  const businessTabs = getBusinessTabs(businessType)
  const allTabs = [...baseTabs, ...businessTabs]

  const ActiveComponent = allTabs.find(tab => tab.id === activeTab)?.component

  return (
    <ConfigContainer>
      <ConfigCard>
        <Header>
          <h1>Configuración del Sistema</h1>
          <p>Administra roles, permisos y configuraciones específicas del negocio</p>
          <BusinessBadge>
            <span>{business.icon}</span>
            <span>{business.name}</span>
          </BusinessBadge>
        </Header>

        <TabsContainer>
          {allTabs.map(tab => (
            <Tab
              key={tab.id}
              active={activeTab === tab.id}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </Tab>
          ))}
        </TabsContainer>

        <Content>
          {ActiveComponent && <ActiveComponent businessType={businessType} tabId={activeTab} />}
        </Content>
      </ConfigCard>
    </ConfigContainer>
  )
}

export default Configuration