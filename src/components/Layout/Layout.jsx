import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../Sidebar/Sidebar'
import styled from 'styled-components'

const LayoutContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  display: flex;
`

const MainContent = styled.main`
  flex: 1;
  margin-left: ${props => props.sidebarCollapsed ? '0' : '280px'};
  transition: margin-left 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  padding: 0;

  @media (max-width: 768px) {
    margin-left: 0;
  }
`

const Layout = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)

  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed)
  }

  return (
    <LayoutContainer>
      <Sidebar collapsed={sidebarCollapsed} onToggle={toggleSidebar} />
      <MainContent sidebarCollapsed={sidebarCollapsed}>
        <Outlet />
      </MainContent>
    </LayoutContainer>
  )
}

export default Layout