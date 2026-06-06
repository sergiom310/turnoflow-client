import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import styled from 'styled-components'
import { useBusiness } from '../../context/BusinessContext'
import { useAuth } from '../../context/AuthContext'

const SidebarContainer = styled.div`
  position: fixed;
  top: 0;
  left: ${props => props.collapsed ? '-280px' : '0'};
  width: 280px;
  height: 100vh;
  background: linear-gradient(180deg, var(--primary-color) 0%, var(--secondary-color) 50%, var(--primary-color) 100%);
  box-shadow: 4px 0 20px rgba(0, 0, 0, 0.15);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 1000;
  overflow-y: auto;
  overflow-x: hidden;

  @media (max-width: 768px) {
    transform: ${props => props.collapsed ? 'translateX(-100%)' : 'translateX(0)'};
    transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }
`

const SidebarHeader = styled.div`
  padding: 24px 20px 16px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  text-align: center;
`

const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  margin-bottom: 8px;

  .logo-icon {
    width: 40px;
    height: 40px;
    background: linear-gradient(135deg, #fbbf24, #f59e0b);
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    font-weight: bold;
    color: #1e3a8a;
    box-shadow: 0 4px 12px rgba(251, 191, 36, 0.3);
  }

  .logo-text {
    font-size: 18px;
    font-weight: 700;
    color: white;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  }
`

const UserInfo = styled.div`
  .user-name {
    font-size: 14px;
    font-weight: 600;
    color: white;
    margin-bottom: 2px;
  }

  .user-role {
    font-size: 12px;
    color: rgba(255, 255, 255, 0.8);
    background: rgba(255, 255, 255, 0.1);
    padding: 2px 8px;
    border-radius: 10px;
    display: inline-block;
  }
`

const BusinessTypeBadge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: rgba(255, 255, 255, 0.15);
  padding: 4px 10px;
  border-radius: 12px;
  margin-top: 8px;
  font-size: 11px;
  color: rgba(255, 255, 255, 0.9);
`

const SidebarContent = styled.div`
  padding: 16px 0;
  flex: 1;
  display: flex;
  flex-direction: column;
`

const SidebarFooter = styled.div`
  margin-top: auto;
  padding: 16px 0;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`

const LogoutButton = styled.button`
  display: flex;
  align-items: center;
  padding: 12px 20px;
  background: rgba(255, 255, 255, 0.1);
  border: none;
  border-radius: 8px;
  color: rgba(255, 255, 255, 0.9);
  cursor: pointer;
  transition: all 0.3s ease;
  width: calc(100% - 40px);
  margin: 0 20px;
  font-size: 14px;
  font-weight: 500;

  &:hover {
    background: rgba(239, 68, 68, 0.2);
    color: #fee2e2;
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(239, 68, 68, 0.3);
  }

  .logout-icon {
    margin-right: 10px;
    font-size: 16px;
  }

  .logout-text {
    flex: 1;
    text-align: left;
  }
`

const MenuSection = styled.div`
  margin-bottom: 8px;
`

const SectionTitle = styled.div`
  padding: 8px 20px;
  font-size: 11px;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.6);
  text-transform: uppercase;
  letter-spacing: 0.5px;
`

const MenuItem = styled.div`
  position: relative;

  .menu-item {
    display: flex;
    align-items: center;
    padding: 12px 20px;
    color: ${props => props.active ? '#fbbf24' : 'rgba(255, 255, 255, 0.8)'};
    text-decoration: none;
    cursor: pointer;
    transition: all 0.3s ease;
    position: relative;
    font-weight: ${props => props.active ? '600' : '500'};

    &:hover {
      background: rgba(255, 255, 255, 0.1);
      color: white;
      padding-left: 24px;
    }

    &::before {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      bottom: 0;
      width: ${props => props.active ? '4px' : '0'};
      background: linear-gradient(135deg, #fbbf24, #f59e0b);
      transition: width 0.3s ease;
      border-radius: 0 4px 4px 0;
    }

    &:hover::before {
      width: 4px;
    }
  }

  .menu-icon {
    width: 20px;
    margin-right: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
  }

  .menu-text {
    flex: 1;
    font-size: 14px;
  }

  .expand-icon {
    font-size: 12px;
    transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    transform: ${props => props.expanded ? 'rotate(180deg)' : 'rotate(0deg)'};
  }
`

const Submenu = styled.div`
  overflow: hidden;
  max-height: ${props => props.expanded ? '500px' : '0'};
  transition: max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  background: rgba(255, 255, 255, 0.05);
`

const SubmenuItem = styled.div`
  .submenu-link {
    display: flex;
    align-items: center;
    padding: 10px 20px 10px 52px;
    color: ${props => props.active ? '#fbbf24' : 'rgba(255, 255, 255, 0.7)'};
    text-decoration: none;
    cursor: pointer;
    transition: all 0.3s ease;
    font-size: 13px;
    font-weight: ${props => props.active ? '600' : '400'};
    border-left: 2px solid transparent;
    position: relative;

    &:hover {
      background: rgba(255, 255, 255, 0.08);
      color: white;
      padding-left: 56px;
      border-left-color: rgba(251, 191, 36, 0.5);
    }

    &::before {
      content: '';
      position: absolute;
      left: 40px;
      top: 50%;
      transform: translateY(-50%);
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background: ${props => props.active ? '#fbbf24' : 'rgba(255, 255, 255, 0.5)'};
    }
  }
`

const ToggleButton = styled.button`
  position: fixed;
  top: 16px;
  left: ${props => props.collapsed ? '16px' : '284px'};
  width: 40px;
  height: 40px;
  background: #1e3a8a;
  border: 2px solid #3b82f6;
  border-radius: 50%;
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 1001;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);

  &:hover {
    background: #3b82f6;
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    display: ${props => props.collapsed ? 'flex' : 'none'};
  }
`

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
  display: ${props => props.show ? 'block' : 'none'};

  @media (min-width: 769px) {
    display: none;
  }
`

const LogoutModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  border-radius: 16px;
  padding: 32px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  z-index: 1001;
  max-width: 400px;
  width: 90%;
  text-align: center;
  animation: modalFadeIn 0.3s ease-out;

  @keyframes modalFadeIn {
    from {
      opacity: 0;
      transform: translate(-50%, -60%);
    }
    to {
      opacity: 1;
      transform: translate(-50%, -50%);
    }
  }

  .modal-icon {
    font-size: 48px;
    margin-bottom: 16px;
  }

  .modal-title {
    font-size: 20px;
    font-weight: 600;
    color: #1f2937;
    margin-bottom: 8px;
  }

  .modal-message {
    color: #6b7280;
    margin-bottom: 24px;
    line-height: 1.5;
  }

  .modal-actions {
    display: flex;
    gap: 12px;
    justify-content: center;

    @media (max-width: 480px) {
      flex-direction: column;
    }
  }

  .modal-button {
    padding: 12px 24px;
    border: none;
    border-radius: 8px;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;

    &.cancel {
      background: #6c757d;
      color: white;

      &:hover {
        background: #5a6268;
        transform: translateY(-1px);
      }
    }

    &.confirm {
      background: #dc3545;
      color: white;

      &:hover {
        background: #c82333;
        transform: translateY(-1px);
        box-shadow: 0 8px 20px rgba(220, 53, 69, 0.3);
      }
    }
  }
`

const Sidebar = ({ collapsed, onToggle }) => {
  const location = useLocation()
  const navigate = useNavigate()
  const { businessType, getBusinessComponents, componentList } = useBusiness()
  const [expandedMenus, setExpandedMenus] = useState({
    gestion: false,
    operaciones: false,
    reportes: false,
    configuracion: false
  })
  const [showLogoutModal, setShowLogoutModal] = useState(false)

  const business = getBusinessComponents(businessType)
  const { user, tenant, isSuperAdmin, logout } = useAuth()

  const organizeMenuBySections = (components) => {
    const sections = {
      principal: [],
      gestion: [],
      operaciones: [],
      marketing: [],
      reportes: [],
      configuracion: []
    }

    components.forEach(comp => {
      const id = comp.id.toLowerCase()
      
      if (id === 'dashboard') {
        sections.principal.push(comp)
      } else if (['usuarios', 'clientes', 'clients', 'servicios'].includes(id)) {
        sections.gestion.push(comp)
      } else if (['agenda', 'turnos', 'inventario', 'arqueo', 'cobrar'].includes(id)) {
        sections.operaciones.push(comp)
      } else if (['promociones', 'membresias'].includes(id)) {
        sections.marketing.push(comp)
      } else if (['reportes'].includes(id)) {
        sections.reportes.push(comp)
      } else if (['configuracion'].includes(id)) {
        sections.configuracion.push(comp)
      }
    })

    return sections
  }

  const menuSections = organizeMenuBySections(componentList)

  const buildMenuItems = () => {
    const items = []

    if (menuSections.principal.length > 0) {
      items.push({
        section: 'Principal',
        items: menuSections.principal.map(comp => ({
          id: comp.id,
          label: comp.label,
          icon: comp.icon,
          path: `/${comp.id}`,
          active: location.pathname === `/${comp.id}`
        }))
      })
    }

    if (menuSections.gestion.length > 0) {
      items.push({
        section: 'Gestión',
        items: [{
          id: 'gestion',
          label: 'Gestión',
          icon: '👥',
          submenu: true,
          expanded: expandedMenus.gestion,
          items: menuSections.gestion.map(comp => ({
            id: comp.id,
            label: comp.label,
            path: `/${comp.id}`,
            active: location.pathname === `/${comp.id}`
          }))
        }]
      })
    }

    if (menuSections.operaciones.length > 0) {
      items.push({
        section: 'Operaciones',
        items: [{
          id: 'operaciones',
          label: 'Operaciones',
          icon: '⚙️',
          submenu: true,
          expanded: expandedMenus.operaciones,
          items: menuSections.operaciones.map(comp => ({
            id: comp.id,
            label: comp.label,
            path: `/${comp.id}`,
            active: location.pathname === `/${comp.id}`
          }))
        }]
      })
    }

    if (menuSections.marketing.length > 0) {
      items.push({
        section: 'Marketing',
        items: menuSections.marketing.map(comp => ({
          id: comp.id,
          label: comp.label,
          icon: comp.icon,
          path: `/${comp.id}`,
          active: location.pathname === `/${comp.id}`
        }))
      })
    }

    if (menuSections.reportes.length > 0) {
      items.push({
        section: 'Reportes',
        items: [{
          id: 'reportes',
          label: 'Reportes',
          icon: '📋',
          path: '/reportes',
          active: location.pathname === '/reportes'
        }]
      })
    }

    const configItems = []
    configItems.push({
      id: 'configuration',
      label: 'Configuración',
      path: '/configuration',
      active: location.pathname === '/configuration'
    })
    
    if (isSuperAdmin) {
      configItems.push({
        id: 'super-admin',
        label: 'Super Admin',
        path: '/super-admin',
        active: location.pathname === '/super-admin'
      })
    }

    items.push({
      section: 'Configuración',
      items: [{
        id: 'configuracion',
        label: 'Sistema',
        icon: '⚙️',
        submenu: true,
        expanded: expandedMenus.configuracion,
        items: configItems
      }]
    })

    return items
  }

  const menuItems = buildMenuItems()

  const toggleSubmenu = (menuId) => {
    setExpandedMenus(prev => ({
      ...prev,
      [menuId]: !prev[menuId]
    }))
  }

  const handleNavigation = (path) => {
    navigate(path)
    if (window.innerWidth <= 768) {
      onToggle()
    }
  }

  const handleLogout = () => {
    setShowLogoutModal(true)
  }

  const confirmLogout = async () => {
    setShowLogoutModal(false)
    await logout()
    toast.success('Sesión cerrada exitosamente')
  }

  const cancelLogout = () => {
    setShowLogoutModal(false)
  }

  const renderMenuItem = (item, level = 0) => {
    if (item.submenu) {
      return (
        <MenuItem key={item.id} expanded={item.expanded}>
          <div
            className="menu-item"
            onClick={() => toggleSubmenu(item.id)}
          >
            <div className="menu-icon">{item.icon}</div>
            <span className="menu-text">{item.label}</span>
            <div className="expand-icon">▼</div>
          </div>
          <Submenu expanded={item.expanded}>
            {item.items.map(subItem => (
              <SubmenuItem key={subItem.id} active={subItem.active}>
                <div
                  className="submenu-link"
                  onClick={() => handleNavigation(subItem.path)}
                >
                  {subItem.label}
                </div>
              </SubmenuItem>
            ))}
          </Submenu>
        </MenuItem>
      )
    }

    return (
      <MenuItem key={item.id} active={item.active}>
        <div
          className="menu-item"
          onClick={() => handleNavigation(item.path)}
        >
          <div className="menu-icon">{item.icon}</div>
          <span className="menu-text">{item.label}</span>
        </div>
      </MenuItem>
    )
  }

  return (
    <>
      <SidebarContainer collapsed={collapsed}>
        <SidebarHeader>
          <Logo>
            <div className="logo-icon">TF</div>
            <div className="logo-text">TurnoFlow</div>
          </Logo>
          <UserInfo>
            <div className="user-name">
              {user ? `${user.first_name ?? ''} ${user.last_name ?? ''}`.trim() || user.username : 'Usuario'}
            </div>
            <div className="user-role">
              {isSuperAdmin ? 'Super Admin' : (user?.role ?? 'Administrador')}
            </div>
          </UserInfo>
          {tenant && (
            <BusinessTypeBadge>
              <span>{business.icon}</span>
              <span>{tenant.name}</span>
            </BusinessTypeBadge>
          )}
        </SidebarHeader>

        <SidebarContent>
          {menuItems.map(section => (
            <MenuSection key={section.section}>
              <SectionTitle>{section.section}</SectionTitle>
              {section.items.map(item => renderMenuItem(item))}
            </MenuSection>
          ))}

          <SidebarFooter>
            <LogoutButton onClick={handleLogout}>
              <div className="logout-icon">🚪</div>
              <div className="logout-text">Cerrar Sesión</div>
            </LogoutButton>
          </SidebarFooter>
        </SidebarContent>
      </SidebarContainer>

      <ToggleButton collapsed={collapsed} onClick={onToggle}>
        {collapsed ? '☰' : '✕'}
      </ToggleButton>

      <Overlay show={!collapsed && window.innerWidth <= 768} onClick={onToggle} />

      {showLogoutModal && (
        <LogoutModal>
          <div className="modal-icon">🚪</div>
          <h2 className="modal-title">¿Deseas Salir?</h2>
          <p className="modal-message">
            Estás a punto de cerrar tu sesión en TurnoFlow.
            ¿Estás seguro de que quieres continuar?
          </p>
          <div className="modal-actions">
            <button className="modal-button cancel" onClick={cancelLogout}>
              Cancelar
            </button>
            <button className="modal-button confirm" onClick={confirmLogout}>
              Sí, Cerrar Sesión
            </button>
          </div>
        </LogoutModal>
      )}
    </>
  )
}

export default Sidebar