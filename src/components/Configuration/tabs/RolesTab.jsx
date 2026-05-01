import { useState, useEffect } from 'react'
import { toast } from 'react-toastify'
import styled from 'styled-components'
import { useBusiness } from '../../../context/BusinessContext'

const Container = styled.div`
  max-width: 100%;
  overflow-x: auto;
`

const BusinessInfo = styled.div`
  background: linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%);
  color: white;
  padding: 20px;
  border-radius: 12px;
  margin-bottom: 24px;
  display: flex;
  align-items: center;
  gap: 16px;

  .business-icon {
    font-size: 40px;
  }

  .business-info {
    flex: 1;
    
    h3 {
      margin: 0 0 4px 0;
      font-size: 20px;
    }
    
    p {
      margin: 0;
      opacity: 0.9;
      font-size: 14px;
    }
  }
`

const PermissionsTable = styled.div`
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  margin-bottom: 24px;
`

const TableHeader = styled.div`
  display: grid;
  grid-template-columns: 250px repeat(7, 1fr);
  gap: 16px;
  padding: 20px;
  background: #f8f9fa;
  border-bottom: 2px solid #e9ecef;
  font-weight: 600;
  color: #374151;
  font-size: 14px;

  @media (max-width: 1200px) {
    grid-template-columns: 200px repeat(7, 1fr);
    gap: 8px;
    padding: 16px 12px;
    font-size: 12px;
  }

  @media (max-width: 768px) {
    display: none;
  }
`

const TableRow = styled.div`
  display: grid;
  grid-template-columns: 250px repeat(7, 1fr);
  gap: 16px;
  padding: 20px;
  border-bottom: 1px solid #f1f3f4;
  align-items: center;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #f8f9fa;
  }

  @media (max-width: 1200px) {
    grid-template-columns: 200px repeat(7, 1fr);
    gap: 8px;
    padding: 16px 12px;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 12px;
    padding: 16px;

    .component-name {
      font-weight: 600;
      color: #374151;
      margin-bottom: 8px;
    }

    .mobile-roles {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 8px;
    }
  }
`

const ComponentCell = styled.div`
  font-weight: 600;
  color: #374151;

  .component-name {
    font-size: 14px;
    margin-bottom: 4px;
  }

  .component-desc {
    font-size: 12px;
    color: #6b7280;
    line-height: 1.3;
  }

  @media (max-width: 768px) {
    margin-bottom: 12px;
  }
`

const RoleCell = styled.div`
  text-align: center;

  .role-name {
    font-size: 12px;
    font-weight: 600;
    color: #6b7280;
    margin-bottom: 8px;
    text-transform: uppercase;
  }

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .role-name {
      margin-bottom: 0;
      flex: 1;
    }
  }
`

const Checkbox = styled.input`
  width: 20px;
  height: 20px;
  cursor: pointer;
  accent-color: var(--primary-color);

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`

const RoleHeader = styled.div`
  text-align: center;
  font-weight: 600;
  color: #374151;
  font-size: 12px;
  text-transform: uppercase;

  @media (max-width: 768px) {
    display: none;
  }
`

const ActionsSection = styled.div`
  background: #f8f9fa;
  border-radius: 12px;
  padding: 24px;
  text-align: center;
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

const STORAGE_KEY_PREFIX = 'turnoflow_permissions_'

// Matriz de permisos por defecto según tipo de negocio
// Basada en el diseño RBAC del sistema
const DEFAULT_ROLE_MATRIX = {
  admin:     { access: true,  read: true,  write: true,  delete: true  },
  auditor:   { access: true,  read: true,  write: false, delete: false },
  vendedor:  { access: true,  read: true,  write: true,  delete: false },
  cobrador:  { access: true,  read: true,  write: true,  delete: false },
  asesor:    { access: true,  read: true,  write: true,  delete: false },
  empleado:  { access: true,  read: true,  write: false, delete: false },
  cliente:   { access: true,  read: true,  write: false, delete: false }
}

// Excepciones de acceso por componente según el diseño RBAC
const COMPONENT_RESTRICTIONS = {
  configuracion: { admin: true, vendedor: false, cobrador: false, asesor: false, empleado: false, cliente: false },
  usuarios:      { admin: true, vendedor: false, cobrador: false, asesor: false, empleado: false, cliente: false },
  inventario:    { admin: true, auditor: true, vendedor: true, cobrador: false, asesor: false, empleado: false, cliente: false },
  arqueo:        { cobrador: true, vendedor: false, asesor: false },
  cobrar:        { cobrador: true, vendedor: false, asesor: false, empleado: false },
  bitacora:      { vendedor: false, cobrador: false, asesor: false, empleado: false, cliente: false },
  superadmin:    { admin: false }
}

/**
 * Genera permisos por defecto para una lista de componentes
 */
const buildDefaultPermissions = (componentList) => {
  const permissions = {}
  componentList.forEach(comp => {
    const roleDefaults = {}
    for (const [roleId, defaults] of Object.entries(DEFAULT_ROLE_MATRIX)) {
      // Verificar si hay restricción específica para este componente
      const restriction = COMPONENT_RESTRICTIONS[comp.id]
      if (restriction && restriction[roleId] !== undefined) {
        roleDefaults[roleId] = restriction[roleId]
      } else {
        roleDefaults[roleId] = defaults.access
      }
    }
    permissions[comp.id] = roleDefaults
  })
  return permissions
}

// Descripciones por defecto de componentes
const DEFAULT_DESCRIPTIONS = {
  dashboard: 'Vista general del negocio',
  usuarios: 'Gestión de usuarios del sistema',
  clientes: 'Registro y gestión de clientes',
  agenda: 'Programación y control de citas',
  servicios: 'Catálogo de servicios ofrecidos',
  turnos: 'Control y asignación de turnos',
  inventario: 'Control de productos y existencias',
  arqueo: 'Control de movimientos financieros',
  cobrar: 'Registro de pagos y cobros',
  reportes: 'Generación de reportes del negocio',
  configuracion: 'Configuraciones del sistema',
  bitacora: 'Registro de actividades',
  promociones: 'Gestión de promociones y campañas',
  superadmin: 'Panel de administración global',
  // Salud
  historiaClinica: 'Historia clínica de pacientes',
  // Fitness
  membresias: 'Planes y membresías',
  instructores: 'Gestión de instructores',
  asistencia: 'Registro de asistencia',
  // Profesional
  expedientes: 'Expedientes profesionales',
  documentos: 'Gestión documental',
  // Técnico
  vehiculos: 'Gestión de equipos/vehículos',
  ordenes: 'Órdenes de trabajo',
  // Gastronomía
  mesas: 'Gestión de mesas',
  reservas: 'Reservas de mesas',
  menu: 'Gestión del menú',
  pedidos: 'Gestión de pedidos',
  cocina: 'Visualización en cocina',
  // Público
  ciudadanos: 'Registro de ciudadanos',
  tramites: 'Trámites disponibles',
  atencion: 'Atención al ciudadano',
  // Veterinaria
  mascotas: 'Gestión de mascotas',
  grooming: 'Servicios de grooming',
  guarderia: 'Guardería y hospedaje',
  // Educación
  estudiantes: 'Gestión de estudiantes',
  cursos: 'Cursos disponibles',
  matriculas: 'Proceso de matrícula',
  calificaciones: 'Sistema de notas',
  // Retail
  productos: 'Catálogo de productos',
  ventas: 'Punto de venta',
  // Otros
  configuracion_adicional: 'Configuraciones adicionales'
}

const RolesTab = () => {
  const { businessType, componentList, getBusinessComponents } = useBusiness()
  const business = getBusinessComponents(businessType)

  const [permissions, setPermissions] = useState({})
  const [loading, setLoading] = useState(false)

  const roles = [
    { id: 'admin', name: 'Administrador', color: 'var(--primary-color)' },
    { id: 'auditor', name: 'Auditor', color: '#10b981' },
    { id: 'vendedor', name: 'Vendedor', color: '#f59e0b' },
    { id: 'cobrador', name: 'Cobrador', color: '#ef4444' },
    { id: 'asesor', name: 'Asesor', color: '#8b5cf6' },
    { id: 'empleado', name: 'Empleado', color: '#6b7280' },
    { id: 'cliente', name: 'Cliente', color: '#06b6d4' }
  ]

  const getComponentDescription = (componentId) => {
    return DEFAULT_DESCRIPTIONS[componentId] || 'Configuración específica del negocio'
  }

  // Inicializar permisos según el tipo de negocio
  useEffect(() => {
    const savedKey = STORAGE_KEY_PREFIX + businessType
    const savedPermissions = localStorage.getItem(savedKey)
    if (savedPermissions) {
      try {
        setPermissions(JSON.parse(savedPermissions))
        return
      } catch { /* ignorar */ }
    }
    // Generar permisos por defecto según los componentes de este negocio
    setPermissions(buildDefaultPermissions(componentList))
  }, [businessType, componentList])

  const handlePermissionChange = (componentId, roleId, checked) => {
    setPermissions(prev => ({
      ...prev,
      [componentId]: {
        ...prev[componentId],
        [roleId]: checked
      }
    }))
  }

  const handleSavePermissions = async () => {
    setLoading(true)
    try {
      await new Promise(resolve => setTimeout(resolve, 1500))
      localStorage.setItem(STORAGE_KEY_PREFIX + businessType, JSON.stringify(permissions))
      toast.success(`Permisos actualizados para ${business.name}`)
    } catch (error) {
      toast.error('Error al guardar los permisos')
    } finally {
      setLoading(false)
    }
  }

  return (
    <Container>
      <BusinessInfo>
        <div className="business-icon">{business.icon}</div>
        <div className="business-info">
          <h3>Tipo de Negocio: {business.name}</h3>
          <p>Los componentes y permisos se adaptan automáticamente según el tipo de negocio seleccionado.</p>
        </div>
      </BusinessInfo>

      <PermissionsTable>
        <TableHeader>
          <div>Componente</div>
          {roles.map(role => (
            <RoleHeader key={role.id} style={{ color: role.color }}>
              {role.name}
            </RoleHeader>
          ))}
        </TableHeader>

        {componentList.map(component => (
          <TableRow key={component.id}>
            <ComponentCell>
              <div className="component-name">
                {component.icon} {component.label}
              </div>
              <div className="component-desc">{getComponentDescription(component.id)}</div>
            </ComponentCell>

            {roles.map(role => (
              <RoleCell key={role.id}>
                <div className="mobile-roles">
                  <span className="role-name" style={{ color: role.color }}>
                    {role.name}
                  </span>
                  <Checkbox
                    type="checkbox"
                    checked={permissions[component.id]?.[role.id] || false}
                    onChange={(e) => handlePermissionChange(component.id, role.id, e.target.checked)}
                    disabled={role.id === 'admin' && component.id === 'superadmin'}
                  />
                </div>
              </RoleCell>
            ))}
          </TableRow>
        ))}
      </PermissionsTable>

      <ActionsSection>
        <h3 style={{ margin: '0 0 16px 0', color: '#374151' }}>
          Guardar Cambios
        </h3>
        <p style={{ margin: '0 0 20px 0', color: '#6b7280' }}>
          Los cambios en los permisos se aplicarán únicamente para el tipo de negocio: <strong>{business.name}</strong>
        </p>
        <SaveButton onClick={handleSavePermissions} disabled={loading}>
          {loading ? 'Guardando...' : 'Guardar Permisos'}
        </SaveButton>
      </ActionsSection>
    </Container>
  )
}

export default RolesTab