import { useState } from 'react'
import styled from 'styled-components'
import { toast } from 'react-toastify'
import EmpresaTab from './tabs/EmpresaTab'
import TipoNegocioTab from './tabs/TipoNegocioTab'
import SuscripcionTab from './tabs/SuscripcionTab'
import BaseDatosTab from './tabs/BaseDatosTab'
import BitacoraTab from './tabs/BitacoraTab'

const SuperAdminContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  padding: 20px;
`

const SuperAdminCard = styled.div`
  background: white;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  max-width: 1200px;
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

const SuperAdmin = () => {
  const [activeTab, setActiveTab] = useState('empresa')

  const tabs = [
    { id: 'empresa', label: 'Empresa', component: EmpresaTab },
    { id: 'tipo-negocio', label: 'Tipo de Negocio', component: TipoNegocioTab },
    { id: 'suscripcion', label: 'Suscripción', component: SuscripcionTab },
    { id: 'base-datos', label: 'Base de Datos', component: BaseDatosTab },
    { id: 'bitacora', label: 'Bitácora', component: BitacoraTab }
  ]

  const ActiveComponent = tabs.find(tab => tab.id === activeTab)?.component

  return (
    <SuperAdminContainer>
      <SuperAdminCard>
        <Header>
          <h1>Panel de Super Admin</h1>
          <p>Configuración avanzada del sistema TurnoFlow</p>
        </Header>

        <TabsContainer>
          {tabs.map(tab => (
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
          {ActiveComponent && <ActiveComponent />}
        </Content>
      </SuperAdminCard>
    </SuperAdminContainer>
  )
}

export default SuperAdmin