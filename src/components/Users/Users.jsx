import { useState } from 'react'
import styled from 'styled-components'
import GeneralInfoTab from './tabs/GeneralInfoTab'
import AccessTab from './tabs/AccessTab'
import PhotosDocsTab from './tabs/PhotosDocsTab'

const UsersContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  padding: 20px;
`

const UsersCard = styled.div`
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
  border-bottom: 3px solid ${props => props.active ? '#667eea' : 'transparent'};
  color: ${props => props.active ? '#667eea' : '#6c757d'};
  font-weight: 600;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.3s ease;
  white-space: nowrap;
  position: relative;

  &:hover {
    background: rgba(102, 126, 234, 0.1);
    color: #667eea;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 0;
    height: 3px;
    background: #667eea;
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

const Users = () => {
  const [activeTab, setActiveTab] = useState('general')

  const tabs = [
    { id: 'general', label: 'Información General', component: GeneralInfoTab },
    { id: 'access', label: 'Usuario de Acceso', component: AccessTab },
    { id: 'photos', label: 'Fotos y Documentos', component: PhotosDocsTab }
  ]

  const ActiveComponent = tabs.find(tab => tab.id === activeTab)?.component

  return (
    <UsersContainer>
      <UsersCard>
        <Header>
          <h1>Gestión de Usuarios</h1>
          <p>Crea y administra los usuarios del sistema TurnoFlow</p>
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
      </UsersCard>
    </UsersContainer>
  )
}

export default Users