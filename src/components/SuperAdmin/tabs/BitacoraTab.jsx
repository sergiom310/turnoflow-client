import { useState } from 'react'
import { toast } from 'react-toastify'
import styled from 'styled-components'

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`

const FiltersSection = styled.div`
  background: white;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  margin-bottom: 24px;
`

const FiltersGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 16px;
  align-items: end;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const FilterGroup = styled.div`
  label {
    display: block;
    font-weight: 600;
    color: #374151;
    font-size: 14px;
    margin-bottom: 6px;
  }
`

const Select = styled.select`
  width: 100%;
  padding: 10px 12px;
  border: 2px solid #e5e7eb;
  border-radius: 6px;
  font-size: 14px;
  background: white;
  cursor: pointer;

  &:focus {
    outline: none;
    border-color: #667eea;
  }
`

const DateInput = styled.input`
  width: 100%;
  padding: 10px 12px;
  border: 2px solid #e5e7eb;
  border-radius: 6px;
  font-size: 14px;

  &:focus {
    outline: none;
    border-color: #667eea;
  }
`

const FilterButton = styled.button`
  padding: 10px 20px;
  background: #667eea;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #5a67d8;
    transform: translateY(-1px);
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
    transform: none;
  }
`

const LogTable = styled.div`
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`

const TableHeader = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 2fr 1fr;
  gap: 16px;
  padding: 16px 24px;
  background: #f8f9fa;
  border-bottom: 1px solid #e9ecef;
  font-weight: 600;
  color: #374151;
  font-size: 14px;

  @media (max-width: 768px) {
    display: none;
  }
`

const LogItem = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 2fr 1fr;
  gap: 16px;
  padding: 16px 24px;
  border-bottom: 1px solid #f1f3f4;
  align-items: center;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #f8f9fa;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 8px;
    padding: 12px 16px;

    .mobile-label {
      font-weight: 600;
      color: #6b7280;
      font-size: 12px;
      margin-bottom: 2px;
    }

    .mobile-value {
      font-size: 14px;
      color: #374151;
      margin-bottom: 8px;
    }
  }
`

const LogType = styled.span`
  display: inline-block;
  padding: 4px 8px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;

  ${props => {
    switch (props.type) {
      case 'login':
        return 'background: #d1fae5; color: #065f46;'
      case 'create':
        return 'background: #dbeafe; color: #1e40af;'
      case 'update':
        return 'background: #fef3c7; color: #92400e;'
      case 'delete':
        return 'background: #fee2e2; color: #991b1b;'
      default:
        return 'background: #f3f4f6; color: #374151;'
    }
  }}
`

const ExportSection = styled.div`
  background: #f8f9fa;
  border-radius: 12px;
  padding: 24px;
  margin-top: 24px;
  text-align: center;
`

const ExportButtons = styled.div`
  display: flex;
  gap: 12px;
  justify-content: center;
  margin-top: 16px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

const ExportButton = styled.button`
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &.excel {
    background: #217346;
    color: white;

    &:hover {
      background: #1e6b3a;
      transform: translateY(-1px);
    }
  }

  &.pdf {
    background: #dc2626;
    color: white;

    &:hover {
      background: #b91c1c;
      transform: translateY(-1px);
    }
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
    transform: none;
  }
`

const BitacoraTab = () => {
  const [loading, setLoading] = useState(false)
  const [filters, setFilters] = useState({
    user: '',
    action: '',
    entity: '',
    dateFrom: '',
    dateTo: ''
  })

  // Generar timestamps dinámicos relativos a la fecha actual
  const now = new Date()
  const genTS = (hoursBack, minutesBack = 0) => {
    const d = new Date(now)
    d.setHours(d.getHours() - hoursBack, d.getMinutes() - minutesBack, d.getSeconds())
    return d.toISOString().replace('T', ' ').substring(0, 19)
  }

  // Datos simulados de bitácora
  const logEntries = [
    {
      id: 1,
      timestamp: genTS(0, 30),
      user: 'admin@empresa.com',
      action: 'login',
      entity: 'Usuario',
      details: 'Inicio de sesión exitoso'
    },
    {
      id: 2,
      timestamp: genTS(1, 15),
      user: 'vendedor@empresa.com',
      action: 'create',
      entity: 'Cliente',
      details: 'Cliente "María López" creado'
    },
    {
      id: 3,
      timestamp: genTS(2, 0),
      user: 'asesor@empresa.com',
      action: 'update',
      entity: 'Cita',
      details: 'Cita #123 actualizada - estado: completada'
    },
    {
      id: 4,
      timestamp: genTS(3, 30),
      user: 'admin@empresa.com',
      action: 'delete',
      entity: 'Usuario',
      details: 'Usuario "temporal" eliminado'
    },
    {
      id: 5,
      timestamp: genTS(5, 0),
      user: 'cobrador@empresa.com',
      action: 'create',
      entity: 'Pago',
      details: 'Pago de $50.000 registrado'
    }
  ]

  const handleFilter = async () => {
    setLoading(true)
    try {
      await new Promise(resolve => setTimeout(resolve, 1000))
      toast.success('Filtros aplicados')
    } catch (error) {
      toast.error('Error al aplicar filtros')
    } finally {
      setLoading(false)
    }
  }

  const handleExportExcel = async () => {
    setLoading(true)
    try {
      await new Promise(resolve => setTimeout(resolve, 2000))
      toast.success('Exportación a Excel completada')
    } catch (error) {
      toast.error('Error al exportar')
    } finally {
      setLoading(false)
    }
  }

  const handleExportPDF = async () => {
    setLoading(true)
    try {
      await new Promise(resolve => setTimeout(resolve, 2500))
      toast.success('Exportación a PDF completada')
    } catch (error) {
      toast.error('Error al exportar')
    } finally {
      setLoading(false)
    }
  }

  return (
    <Container>
      <FiltersSection>
        <h3 style={{margin: '0 0 20px 0', color: '#1f2937'}}>Filtros de Bitácora</h3>
        
        <FiltersGrid>
          <FilterGroup>
            <label>Usuario</label>
            <Select
              value={filters.user}
              onChange={(e) => setFilters({...filters, user: e.target.value})}
            >
              <option value="">Todos los usuarios</option>
              <option value="admin">Administrador</option>
              <option value="vendedor">Vendedor</option>
              <option value="asesor">Asesor</option>
              <option value="cobrador">Cobrador</option>
            </Select>
          </FilterGroup>

          <FilterGroup>
            <label>Acción</label>
            <Select
              value={filters.action}
              onChange={(e) => setFilters({...filters, action: e.target.value})}
            >
              <option value="">Todas las acciones</option>
              <option value="login">Inicio de sesión</option>
              <option value="create">Crear</option>
              <option value="update">Actualizar</option>
              <option value="delete">Eliminar</option>
            </Select>
          </FilterGroup>

          <FilterGroup>
            <label>Entidad</label>
            <Select
              value={filters.entity}
              onChange={(e) => setFilters({...filters, entity: e.target.value})}
            >
              <option value="">Todas las entidades</option>
              <option value="Usuario">Usuario</option>
              <option value="Cliente">Cliente</option>
              <option value="Cita">Cita</option>
              <option value="Pago">Pago</option>
            </Select>
          </FilterGroup>

          <FilterGroup>
            <label>Desde</label>
            <DateInput
              type="date"
              value={filters.dateFrom}
              onChange={(e) => setFilters({...filters, dateFrom: e.target.value})}
            />
          </FilterGroup>

          <FilterGroup>
            <label>Hasta</label>
            <DateInput
              type="date"
              value={filters.dateTo}
              onChange={(e) => setFilters({...filters, dateTo: e.target.value})}
            />
          </FilterGroup>

          <FilterButton onClick={handleFilter} disabled={loading}>
            {loading ? 'Aplicando...' : 'Aplicar Filtros'}
          </FilterButton>
        </FiltersGrid>
      </FiltersSection>

      <LogTable>
        <TableHeader>
          <div>Fecha/Hora</div>
          <div>Usuario</div>
          <div>Acción</div>
          <div>Detalles</div>
          <div>Tipo</div>
        </TableHeader>

        {logEntries.map(entry => (
          <LogItem key={entry.id}>
            <div>
              <div className="mobile-label">Fecha/Hora:</div>
              <div className="mobile-value">
                {new Date(entry.timestamp).toLocaleString('es-CO')}
              </div>
            </div>
            <div>
              <div className="mobile-label">Usuario:</div>
              <div className="mobile-value">{entry.user}</div>
            </div>
            <div>
              <div className="mobile-label">Acción:</div>
              <div className="mobile-value">
                <LogType type={entry.action}>
                  {entry.action === 'login' ? 'Login' :
                   entry.action === 'create' ? 'Crear' :
                   entry.action === 'update' ? 'Actualizar' :
                   entry.action === 'delete' ? 'Eliminar' : entry.action}
                </LogType>
              </div>
            </div>
            <div>
              <div className="mobile-label">Detalles:</div>
              <div className="mobile-value">{entry.details}</div>
            </div>
            <div>
              <div className="mobile-label">Entidad:</div>
              <div className="mobile-value">{entry.entity}</div>
            </div>
          </LogItem>
        ))}
      </LogTable>

      <ExportSection>
        <h3 style={{margin: '0 0 8px 0', color: '#1f2937'}}>Exportar Bitácora</h3>
        <p style={{margin: '0 0 16px 0', color: '#6b7280'}}>
          Exporta los registros filtrados en formato Excel o PDF
        </p>
        
        <ExportButtons>
          <ExportButton 
            className="excel" 
            onClick={handleExportExcel}
            disabled={loading}
          >
            📊 Exportar Excel
          </ExportButton>
          <ExportButton 
            className="pdf" 
            onClick={handleExportPDF}
            disabled={loading}
          >
            📄 Exportar PDF
          </ExportButton>
        </ExportButtons>
      </ExportSection>
    </Container>
  )
}

export default BitacoraTab