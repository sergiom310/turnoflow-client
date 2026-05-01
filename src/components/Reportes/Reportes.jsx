import { useState } from 'react'
import { toast } from 'react-toastify'
import styled from 'styled-components'

const ReportesContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  padding: 20px;
`

const ReportesCard = styled.div`
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

const Content = styled.div`
  padding: 32px;

  @media (max-width: 768px) {
    padding: 16px;
  }
`

const ReportsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
  margin-bottom: 32px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const ReportCard = styled.div`
  background: white;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  cursor: pointer;
  border: 2px solid transparent;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
    border-color: #667eea;
  }

  .report-icon {
    width: 60px;
    height: 60px;
    border-radius: 12px;
    background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 28px;
    color: white;
    margin-bottom: 16px;
  }

  .report-title {
    font-size: 18px;
    font-weight: 600;
    color: #1f2937;
    margin-bottom: 8px;
  }

  .report-description {
    color: #6b7280;
    font-size: 14px;
    line-height: 1.5;
    margin-bottom: 16px;
  }

  .report-stats {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 12px;
    color: #9ca3af;

    .stat-item {
      display: flex;
      align-items: center;
      gap: 4px;
    }
  }
`

const FiltersSection = styled.div`
  background: white;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  margin-bottom: 32px;
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
  background: var(--primary-color);
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: var(--secondary-color);
    transform: translateY(-1px);
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
    transform: none;
  }
`

const GeneratedReportsSection = styled.div`
  background: white;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`

const ReportsList = styled.div`
  space-y: 16px;
`

const ReportItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  background: #f8f9fa;
  border-radius: 8px;
  margin-bottom: 12px;
  transition: all 0.3s ease;

  &:hover {
    background: #e9ecef;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }

  .report-info {
    display: flex;
    align-items: center;
    gap: 16px;

    .report-type-icon {
      width: 40px;
      height: 40px;
      border-radius: 8px;
      background: ${props => {
        switch (props.type) {
          case 'ventas': return '#10b981'
          case 'clientes': return 'var(--primary-color)'
          case 'servicios': return '#f59e0b'
          case 'inventario': return '#8b5cf6'
          case 'financiero': return '#ef4444'
          default: return '#6b7280'
        }
      }};
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 18px;
      color: white;
    }

    .report-details {
      h4 {
        margin: 0 0 4px 0;
        font-size: 16px;
        color: #1f2937;
        font-weight: 600;
      }

      p {
        margin: 0;
        font-size: 14px;
        color: #6b7280;
      }
    }
  }

  .report-actions {
    display: flex;
    gap: 8px;
  }
`

const ActionButton = styled.button`
  padding: 6px 12px;
  border: none;
  border-radius: 6px;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &.download {
    background: #28a745;
    color: white;

    &:hover {
      background: #218838;
    }
  }

  &.view {
    background: #17a2b8;
    color: white;

    &:hover {
      background: #138496;
    }
  }

  &.email {
    background: #ffc107;
    color: #212529;

    &:hover {
      background: #e0a800;
    }
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 20px;
`

const ModalContent = styled.div`
  background: white;
  border-radius: 16px;
  padding: 32px;
  max-width: 600px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;

  @media (max-width: 768px) {
    padding: 20px;
  }
`

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;

  h2 {
    margin: 0;
    color: #1f2937;
    font-size: 24px;
  }

  .close {
    background: none;
    border: none;
    font-size: 24px;
    cursor: pointer;
    color: #6b7280;

    &:hover {
      color: #374151;
    }
  }
`

const ReportPreview = styled.div`
  background: #f8f9fa;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 24px;

  h3 {
    margin: 0 0 16px 0;
    color: #1f2937;
    font-size: 18px;
  }

  .preview-content {
    font-family: monospace;
    background: white;
    padding: 16px;
    border-radius: 6px;
    border: 1px solid #e5e7eb;
    max-height: 200px;
    overflow-y: auto;
    font-size: 12px;
    line-height: 1.4;
  }
`

const ModalActions = styled.div`
  display: flex;
  gap: 12px;
  justify-content: flex-end;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

const Button = styled.button`
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &.primary {
    background: #667eea;
    color: white;

    &:hover {
      background: #5a67d8;
      transform: translateY(-1px);
    }
  }

  &.secondary {
    background: #6c757d;
    color: white;

    &:hover {
      background: #5a6268;
      transform: translateY(-1px);
    }
  }

  &.success {
    background: #10b981;
    color: white;

    &:hover {
      background: #059669;
      transform: translateY(-1px);
    }
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
    transform: none;
  }
`

const Reportes = () => {
  const [selectedReport, setSelectedReport] = useState(null)
  const [filters, setFilters] = useState({
    dateFrom: '',
    dateTo: '',
    reportType: ''
  })
  const [generatedReports, setGeneratedReports] = useState([
    {
      id: 1,
      type: 'ventas',
      title: 'Reporte de Ventas - Enero 2024',
      dateRange: '01/01/2024 - 31/01/2024',
      generatedAt: '2024-01-15 14:30:00',
      format: 'PDF',
      size: '2.4 MB'
    },
    {
      id: 2,
      type: 'clientes',
      title: 'Lista de Clientes Activos',
      dateRange: 'Todo el período',
      generatedAt: '2024-01-14 16:45:00',
      format: 'Excel',
      size: '1.8 MB'
    },
    {
      id: 3,
      type: 'servicios',
      title: 'Servicios Más Solicitados',
      dateRange: '01/01/2024 - 31/01/2024',
      generatedAt: '2024-01-13 11:20:00',
      format: 'PDF',
      size: '956 KB'
    },
    {
      id: 4,
      type: 'financiero',
      title: 'Balance Financiero Mensual',
      dateRange: 'Enero 2024',
      generatedAt: '2024-01-12 09:15:00',
      format: 'Excel',
      size: '3.2 MB'
    }
  ])
  const [loading, setLoading] = useState(false)
  const [showPreviewModal, setShowPreviewModal] = useState(false)

  const reports = [
    {
      id: 'ventas',
      title: 'Reporte de Ventas',
      description: 'Análisis completo de ingresos, servicios vendidos y tendencias de ventas.',
      icon: '📊',
      stats: { generated: 24, downloads: 156 }
    },
    {
      id: 'clientes',
      title: 'Reporte de Clientes',
      description: 'Lista de clientes, frecuencia de visitas y patrones de consumo.',
      icon: '👥',
      stats: { generated: 18, downloads: 89 }
    },
    {
      id: 'servicios',
      title: 'Reporte de Servicios',
      description: 'Estadísticas de servicios prestados, tiempos y satisfacción del cliente.',
      icon: '✨',
      stats: { generated: 31, downloads: 203 }
    },
    {
      id: 'inventario',
      title: 'Reporte de Inventario',
      description: 'Estado actual de productos, movimientos y niveles de stock.',
      icon: '📦',
      stats: { generated: 12, downloads: 67 }
    },
    {
      id: 'financiero',
      title: 'Reporte Financiero',
      description: 'Balance general, ingresos, egresos y análisis financiero detallado.',
      icon: '💰',
      stats: { generated: 8, downloads: 45 }
    },
    {
      id: 'turnos',
      title: 'Reporte de Turnos',
      description: 'Estadísticas de turnos atendidos, tiempos de espera y eficiencia.',
      icon: '⏰',
      stats: { generated: 15, downloads: 98 }
    }
  ]

  const handleGenerateReport = async (reportType) => {
    setLoading(true)
    try {
      // Simular generación de reporte
      await new Promise(resolve => setTimeout(resolve, 2000))

      const newReport = {
        id: generatedReports.length + 1,
        type: reportType,
        title: `${reports.find(r => r.id === reportType)?.title} - ${new Date().toLocaleDateString('es-CO')}`,
        dateRange: filters.dateFrom && filters.dateTo ?
          `${filters.dateFrom} - ${filters.dateTo}` : 'Todo el período',
        generatedAt: new Date().toISOString().replace('T', ' ').substring(0, 19),
        format: Math.random() > 0.5 ? 'PDF' : 'Excel',
        size: `${(Math.random() * 3 + 0.5).toFixed(1)} MB`
      }

      setGeneratedReports(prev => [newReport, ...prev])
      toast.success('Reporte generado exitosamente')
    } catch (error) {
      toast.error('Error al generar el reporte')
    } finally {
      setLoading(false)
    }
  }

  const handleDownloadReport = async (reportId, format) => {
    setLoading(true)
    try {
      await new Promise(resolve => setTimeout(resolve, 1500))
      toast.success(`Descarga de ${format} iniciada`)
    } catch (error) {
      toast.error('Error al descargar el reporte')
    } finally {
      setLoading(false)
    }
  }

  const handleViewReport = (report) => {
    setSelectedReport(report)
    setShowPreviewModal(true)
  }

  const handleEmailReport = async (reportId) => {
    setLoading(true)
    try {
      await new Promise(resolve => setTimeout(resolve, 1000))
      toast.success('Reporte enviado por email')
    } catch (error) {
      toast.error('Error al enviar el reporte')
    } finally {
      setLoading(false)
    }
  }

  const getReportIcon = (type) => {
    const icons = {
      'ventas': '📊',
      'clientes': '👥',
      'servicios': '✨',
      'inventario': '📦',
      'financiero': '💰',
      'turnos': '⏰'
    }
    return icons[type] || '📄'
  }

  const generatePreviewContent = (report) => {
    // Simular contenido de preview del reporte
    const sampleData = {
      ventas: `REPORTE DE VENTAS
Fecha: ${report.generatedAt}
Período: ${report.dateRange}

INGRESOS TOTALES: $2,450,000 COP
NÚMERO DE VENTAS: 145
VENTA PROMEDIO: $16,897 COP

SERVICIOS MÁS VENDIDOS:
1. Corte de Cabello Mujer - 45 ventas
2. Tratamiento Facial - 38 ventas
3. Manicure + Pedicure - 32 ventas

MÉTODOS DE PAGO:
• Efectivo: 40%
• Tarjeta: 35%
• Transferencia: 25%`,
      clientes: `LISTA DE CLIENTES ACTIVOS
Total de Clientes: 156

CLIENTES FRECUENTES (5+ visitas):
1. María García - 12 visitas
2. Carlos Rodríguez - 8 visitas
3. Ana López - 7 visitas

NUEVOS CLIENTES ESTE MES: 23
CLIENTES INACTIVOS: 8`,
      servicios: `ESTADÍSTICAS DE SERVICIOS
Total Servicios Prestados: 234

TIEMPOS PROMEDIO:
• Corte de Cabello: 45 min
• Tratamiento Facial: 75 min
• Manicure: 60 min

SATISFACCIÓN DEL CLIENTE: 4.8/5.0`,
      inventario: `ESTADO DEL INVENTARIO
Total Productos: 45

PRODUCTOS CON STOCK BAJO:
• Champú Profesional - 8 unidades
• Máscara Facial - 3 unidades

VALOR TOTAL DEL INVENTARIO: $1,250,000 COP`,
      financiero: `BALANCE FINANCIERO

INGRESOS: $3,450,000 COP
EGRESOS: $1,890,000 COP
UTILIDAD: $1,560,000 COP

MARGEN DE UTILIDAD: 45.2%`
    }

    return sampleData[report.type] || 'Contenido del reporte no disponible'
  }

  return (
    <ReportesContainer>
      <ReportesCard>
        <Header>
          <h1>Generación de Reportes</h1>
          <p>Analiza el rendimiento de tu negocio con reportes detallados</p>
        </Header>

        <Content>
          <ReportsGrid>
            {reports.map(report => (
              <ReportCard
                key={report.id}
                onClick={() => handleGenerateReport(report.id)}
                disabled={loading}
              >
                <div className="report-icon">
                  {report.icon}
                </div>
                <div className="report-title">{report.title}</div>
                <div className="report-description">{report.description}</div>
                <div className="report-stats">
                  <div className="stat-item">
                    📄 {report.stats.generated}
                  </div>
                  <div className="stat-item">
                    📥 {report.stats.downloads}
                  </div>
                </div>
              </ReportCard>
            ))}
          </ReportsGrid>

          <FiltersSection>
            <h3 style={{margin: '0 0 20px 0', color: '#1f2937'}}>Filtros de Reportes</h3>
            <FiltersGrid>
              <FilterGroup>
                <label>Tipo de Reporte</label>
                <Select
                  value={filters.reportType}
                  onChange={(e) => setFilters({...filters, reportType: e.target.value})}
                >
                  <option value="">Todos los tipos</option>
                  {reports.map(report => (
                    <option key={report.id} value={report.id}>{report.title}</option>
                  ))}
                </Select>
              </FilterGroup>

              <FilterGroup>
                <label>Fecha Desde</label>
                <DateInput
                  type="date"
                  value={filters.dateFrom}
                  onChange={(e) => setFilters({...filters, dateFrom: e.target.value})}
                />
              </FilterGroup>

              <FilterGroup>
                <label>Fecha Hasta</label>
                <DateInput
                  type="date"
                  value={filters.dateTo}
                  onChange={(e) => setFilters({...filters, dateTo: e.target.value})}
                />
              </FilterGroup>

              <FilterButton onClick={() => toast.info('Filtros aplicados')}>
                Aplicar Filtros
              </FilterButton>
            </FiltersGrid>
          </FiltersSection>

          <GeneratedReportsSection>
            <h3 style={{margin: '0 0 20px 0', color: '#1f2937'}}>Reportes Generados</h3>

            <ReportsList>
              {generatedReports.map(report => (
                <ReportItem key={report.id} type={report.type}>
                  <div className="report-info">
                    <div className="report-type-icon">
                      {getReportIcon(report.type)}
                    </div>
                    <div className="report-details">
                      <h4>{report.title}</h4>
                      <p>
                        {report.dateRange} • {report.format} • {report.size} •
                        {new Date(report.generatedAt).toLocaleString('es-CO')}
                      </p>
                    </div>
                  </div>

                  <div className="report-actions">
                    <ActionButton
                      className="view"
                      onClick={() => handleViewReport(report)}
                    >
                      Ver
                    </ActionButton>
                    <ActionButton
                      className="download"
                      onClick={() => handleDownloadReport(report.id, report.format)}
                      disabled={loading}
                    >
                      📥 {report.format}
                    </ActionButton>
                    <ActionButton
                      className="email"
                      onClick={() => handleEmailReport(report.id)}
                      disabled={loading}
                    >
                      📧 Email
                    </ActionButton>
                  </div>
                </ReportItem>
              ))}
            </ReportsList>

            {generatedReports.length === 0 && (
              <div style={{textAlign: 'center', padding: '40px', color: '#6b7280'}}>
                <div style={{fontSize: '48px', marginBottom: '16px'}}>📊</div>
                <p>No hay reportes generados aún</p>
                <p style={{fontSize: '14px'}}>Haz clic en cualquier tipo de reporte para generar uno</p>
              </div>
            )}
          </GeneratedReportsSection>
        </Content>
      </ReportesCard>

      {showPreviewModal && selectedReport && (
        <Modal>
          <ModalContent>
            <ModalHeader>
              <h2>Vista Previa - {selectedReport.title}</h2>
              <button className="close" onClick={() => setShowPreviewModal(false)}>
                ×
              </button>
            </ModalHeader>

            <ReportPreview>
              <h3>Contenido del Reporte</h3>
              <div className="preview-content">
                {generatePreviewContent(selectedReport)}
              </div>
            </ReportPreview>

            <ModalActions>
              <Button
                type="button"
                className="secondary"
                onClick={() => setShowPreviewModal(false)}
              >
                Cerrar
              </Button>
              <Button
                type="button"
                className="success"
                onClick={() => {
                  handleDownloadReport(selectedReport.id, selectedReport.format)
                  setShowPreviewModal(false)
                }}
              >
                📥 Descargar {selectedReport.format}
              </Button>
            </ModalActions>
          </ModalContent>
        </Modal>
      )}
    </ReportesContainer>
  )
}

export default Reportes