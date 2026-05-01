import { useState } from 'react'
import { Outlet, useNavigate, useLocation } from 'react-router-dom'
import styled from 'styled-components'
import { useCliente } from '../../../context/ClienteContext'
import { useBusiness } from '../../../context/BusinessContext'
import { toast } from 'react-toastify'

const LayoutContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
`

const Header = styled.header`
  background: linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%);
  padding: 16px 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  position: sticky;
  top: 0;
  z-index: 100;
`

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  color: white;

  .logo-icon {
    width: 40px;
    height: 40px;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    font-weight: bold;
  }

  .logo-text {
    font-size: 18px;
    font-weight: 700;
  }

  .business-name {
    font-size: 14px;
    opacity: 0.9;
    padding-left: 12px;
    border-left: 1px solid rgba(255, 255, 255, 0.3);
  }

  @media (max-width: 768px) {
    .business-name {
      display: none;
    }
  }
`

const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`

const CartButton = styled.button`
  position: relative;
  background: rgba(255, 255, 255, 0.2);
  border: none;
  border-radius: 12px;
  padding: 10px 16px;
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  font-weight: 500;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.3);
    transform: translateY(-2px);
  }

  .badge {
    position: absolute;
    top: -8px;
    right: -8px;
    background: #ef4444;
    color: white;
    font-size: 11px;
    font-weight: bold;
    min-width: 20px;
    height: 20px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media (max-width: 480px) {
    padding: 10px;
    
    span:not(.badge) {
      display: none;
    }
  }
`

const UserMenu = styled.div`
  position: relative;
`

const UserButton = styled.button`
  background: rgba(255, 255, 255, 0.2);
  border: none;
  border-radius: 12px;
  padding: 8px 16px;
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.3);
  }

  .avatar {
    width: 32px;
    height: 32px;
    background: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
  }

  @media (max-width: 480px) {
    padding: 8px;
    
    span {
      display: none;
    }
  }
`

const Dropdown = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  margin-top: 8px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
  min-width: 200px;
  overflow: hidden;
  display: ${props => props.show ? 'block' : 'none'};
  animation: slideDown 0.2s ease;

  @keyframes slideDown {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`

const DropdownItem = styled.button`
  width: 100%;
  padding: 14px 20px;
  background: none;
  border: none;
  text-align: left;
  font-size: 14px;
  color: #374151;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 12px;
  transition: all 0.2s ease;

  &:hover {
    background: #f3f4f6;
    color: #667eea;
  }

  &.logout {
    color: #ef4444;
    border-top: 1px solid #e5e7eb;
    
    &:hover {
      background: #fef2f2;
    }
  }
`

const Nav = styled.nav`
  background: white;
  padding: 0 24px;
  display: flex;
  gap: 8px;
  overflow-x: auto;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);

  @media (max-width: 768px) {
    padding: 0 16px;
  }
`

const NavItem = styled.button`
  padding: 16px 20px;
  background: none;
  border: none;
  border-bottom: 3px solid ${props => props.active ? '#667eea' : 'transparent'};
  color: ${props => props.active ? '#667eea' : '#6b7280'};
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  white-space: nowrap;
  transition: all 0.3s ease;

  &:hover {
    color: #667eea;
    background: #f9fafb;
  }
`

const MainContent = styled.main`
  padding: 24px;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 16px;
  }
`

const ClienteLayout = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const { cliente, logout, cantidadCarrito, valorCarrito } = useCliente()
  const { getBusinessComponents } = useBusiness()
  const [showDropdown, setShowDropdown] = useState(false)

  const business = getBusinessComponents('beauty')

  const navItems = [
    { path: '/cliente/dashboard', label: 'Inicio', icon: '🏠' },
    { path: '/cliente/agendar', label: 'Agendar Cita', icon: '📅' },
    { path: '/cliente/servicios', label: 'Servicios', icon: '✂️' },
    { path: '/cliente/productos', label: 'Productos', icon: '🛒' },
    { path: '/cliente/mis-citas', label: 'Mis Citas', icon: '📋' }
  ]

  const handleLogout = () => {
    logout()
    toast.success('Sesión cerrada')
    navigate('/cliente')
  }

  const getInitials = (nombre) => {
    if (!nombre) return 'U'
    return nombre.charAt(0).toUpperCase()
  }

  return (
    <LayoutContainer>
      <Header>
        <Logo>
          <div className="logo-icon">TF</div>
          <span className="logo-text">TurnoFlow</span>
          <span className="business-name">{business.name}</span>
        </Logo>

        <HeaderRight>
          <CartButton onClick={() => navigate('/cliente/productos')}>
            🛒 <span>Carrito</span>
            {cantidadCarrito > 0 && (
              <span className="badge">{cantidadCarrito}</span>
            )}
          </CartButton>

          <UserMenu>
            <UserButton onClick={() => setShowDropdown(!showDropdown)}>
              <div className="avatar">{getInitials(cliente?.nombre)}</div>
              <span>{cliente?.nombre || 'Cliente'}</span>
            </UserButton>
            <Dropdown show={showDropdown}>
              <DropdownItem onClick={() => { setShowDropdown(false); navigate('/cliente/dashboard'); }}>
                👤 Mi Perfil
              </DropdownItem>
              <DropdownItem onClick={() => { setShowDropdown(false); navigate('/cliente/mis-citas'); }}>
                📋 Mis Citas
              </DropdownItem>
              <DropdownItem onClick={() => { setShowDropdown(false); navigate('/cliente/productos'); }}>
                🛒 Mi Carrito (${valorCarrito.toLocaleString('es-CO')})
              </DropdownItem>
              <DropdownItem className="logout" onClick={handleLogout}>
                🚪 Cerrar Sesión
              </DropdownItem>
            </Dropdown>
          </UserMenu>
        </HeaderRight>
      </Header>

      <Nav>
        {navItems.map(item => (
          <NavItem
            key={item.path}
            active={location.pathname === item.path}
            onClick={() => navigate(item.path)}
          >
            {item.icon} {item.label}
          </NavItem>
        ))}
      </Nav>

      <MainContent>
        <Outlet />
      </MainContent>
    </LayoutContainer>
  )
}

export default ClienteLayout