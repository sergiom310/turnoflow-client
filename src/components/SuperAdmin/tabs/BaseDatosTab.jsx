import { useState } from 'react'
import { toast } from 'react-toastify'
import styled from 'styled-components'

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`

const Section = styled.div`
  background: white;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  margin-bottom: 24px;
`

const SectionHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;

  h3 {
    margin: 0;
    color: #1f2937;
    font-size: 18px;
  }

  .icon {
    margin-right: 12px;
    font-size: 24px;
  }
`

const BackupList = styled.div`
  margin-top: 20px;
`

const BackupItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  background: #f8f9fa;
  border-radius: 8px;
  margin-bottom: 12px;

  .backup-info {
    display: flex;
    align-items: center;
    gap: 16px;

    .backup-icon {
      font-size: 32px;
    }

    .details {
      h4 {
        margin: 0 0 4px 0;
        font-size: 16px;
        color: #1f2937;
      }

      p {
        margin: 0;
        font-size: 14px;
        color: #6b7280;
      }
    }
  }

  .actions {
    display: flex;
    gap: 8px;
  }
`

const ActionButton = styled.button`
  padding: 8px 16px;
  border: none;
  border-radius: 6px;
  font-size: 14px;
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

  &.restore {
    background: #ffc107;
    color: #212529;

    &:hover {
      background: #e0a800;
    }
  }

  &.delete {
    background: #dc3545;
    color: white;

    &:hover {
      background: #c82333;
    }
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`

const SettingsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin-top: 20px;
`

const SettingItem = styled.div`
  background: #f8f9fa;
  border-radius: 8px;
  padding: 20px;

  h4 {
    margin: 0 0 12px 0;
    color: #374151;
    font-size: 16px;
  }
`

const ToggleSwitch = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;

  .switch {
    position: relative;
    display: inline-block;
    width: 50px;
    height: 24px;
    margin-right: 12px;
  }

  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    transition: 0.4s;
    border-radius: 24px;
  }

  .slider:before {
    position: absolute;
    content: '';
    height: 18px;
    width: 18px;
    left: 3px;
    bottom: 3px;
    background-color: white;
    transition: 0.4s;
    border-radius: 50%;
  }

  input:checked + .slider {
    background-color: #667eea;
  }

  input:checked + .slider:before {
    transform: translateX(26px);
  }

  .label-text {
    font-size: 14px;
    color: #374151;
  }
`

const Select = styled.select`
  width: 100%;
  padding: 10px 12px;
  border: 2px solid #e5e7eb;
  border-radius: 6px;
  font-size: 14px;
  background: white;

  &:focus {
    outline: none;
    border-color: #667eea;
  }
`

const ButtonGroup = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

const ControlButton = styled.button`
  flex: 1;
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

  &.danger {
    background: #dc3545;
    color: white;

    &:hover {
      background: #c82333;
      transform: translateY(-1px);
    }
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
    transform: none;
  }
`

const BaseDatosTab = () => {
  const [loading, setLoading] = useState(false)
  const [autoBackup, setAutoBackup] = useState(true)
  const [backupFrequency, setBackupFrequency] = useState('daily')
  const [maxBackups, setMaxBackups] = useState(7)

  // Fechas dinámicas relativas a la fecha actual
  const now = new Date()
  const today = now.toISOString().split('T')[0]
  const yesterday = new Date(now)
  yesterday.setDate(yesterday.getDate() - 1)
  const twoDaysAgo = new Date(now)
  twoDaysAgo.setDate(twoDaysAgo.getDate() - 2)

  const formatDateISO = (date) => date.toISOString().split('T')[0]

  // Datos simulados de backups
  const backups = [
    {
      id: 1,
      name: `backup_${formatDateISO(now)}_auto`,
      date: `${formatDateISO(now)} 02:00:00`,
      size: '45.2 MB',
      type: 'automatic'
    },
    {
      id: 2,
      name: `backup_${formatDateISO(yesterday)}_auto`,
      date: `${formatDateISO(yesterday)} 02:00:00`,
      size: '44.8 MB',
      type: 'automatic'
    },
    {
      id: 3,
      name: `backup_manual_${formatDateISO(twoDaysAgo)}`,
      date: `${formatDateISO(twoDaysAgo)} 15:30:00`,
      size: '46.1 MB',
      type: 'manual'
    }
  ]

  const handleManualBackup = async () => {
    setLoading(true)
    try {
      await new Promise(resolve => setTimeout(resolve, 3000))
      toast.success('Copia de seguridad creada exitosamente')
    } catch (error) {
      toast.error('Error al crear la copia de seguridad')
    } finally {
      setLoading(false)
    }
  }

  const handleCleanLogs = async () => {
    if (!window.confirm('¿Está seguro de que desea limpiar la bitácora? Esta acción no se puede deshacer.')) return

    setLoading(true)
    try {
      await new Promise(resolve => setTimeout(resolve, 2000))
      toast.success('Bitácora limpiada exitosamente')
    } catch (error) {
      toast.error('Error al limpiar la bitácora')
    } finally {
      setLoading(false)
    }
  }

  const handleDownloadBackup = async (backupId) => {
    setLoading(true)
    try {
      await new Promise(resolve => setTimeout(resolve, 1500))
      toast.success('Descarga iniciada')
    } catch (error) {
      toast.error('Error al descargar la copia')
    } finally {
      setLoading(false)
    }
  }

  const handleRestoreBackup = async (backupId) => {
    if (!window.confirm('¿Está seguro de que desea restaurar esta copia? Los datos actuales se perderán.')) return

    setLoading(true)
    try {
      await new Promise(resolve => setTimeout(resolve, 4000))
      toast.success('Copia restaurada exitosamente')
    } catch (error) {
      toast.error('Error al restaurar la copia')
    } finally {
      setLoading(false)
    }
  }

  const handleDeleteBackup = async (backupId) => {
    if (!window.confirm('¿Está seguro de que desea eliminar esta copia de seguridad?')) return

    setLoading(true)
    try {
      await new Promise(resolve => setTimeout(resolve, 1000))
      toast.success('Copia eliminada exitosamente')
    } catch (error) {
      toast.error('Error al eliminar la copia')
    } finally {
      setLoading(false)
    }
  }

  return (
    <Container>
      <Section>
        <SectionHeader>
          <span className="icon">💾</span>
          <h3>Copias de Seguridad</h3>
        </SectionHeader>

        <SettingsGrid>
          <SettingItem>
            <h4>Copia Automática</h4>
            <ToggleSwitch>
              <div className="switch">
                <input
                  type="checkbox"
                  checked={autoBackup}
                  onChange={(e) => setAutoBackup(e.target.checked)}
                />
                <span className="slider"></span>
              </div>
              <span className="label-text">
                {autoBackup ? 'Activada' : 'Desactivada'}
              </span>
            </ToggleSwitch>
          </SettingItem>

          <SettingItem>
            <h4>Frecuencia</h4>
            <Select
              value={backupFrequency}
              onChange={(e) => setBackupFrequency(e.target.value)}
              disabled={!autoBackup}
            >
              <option value="hourly">Cada hora</option>
              <option value="daily">Diaria</option>
              <option value="weekly">Semanal</option>
              <option value="monthly">Mensual</option>
            </Select>
          </SettingItem>

          <SettingItem>
            <h4>Copias Máximas</h4>
            <Select
              value={maxBackups}
              onChange={(e) => setMaxBackups(Number(e.target.value))}
              disabled={!autoBackup}
            >
              <option value="3">3 copias</option>
              <option value="7">7 copias</option>
              <option value="14">14 copias</option>
              <option value="30">30 copias</option>
            </Select>
          </SettingItem>
        </SettingsGrid>

        <ButtonGroup>
          <ControlButton
            className="primary"
            onClick={handleManualBackup}
            disabled={loading}
          >
            Crear Copia Manual
          </ControlButton>
        </ButtonGroup>
      </Section>

      <Section>
        <SectionHeader>
          <span className="icon">📋</span>
          <h3>Copias Disponibles</h3>
        </SectionHeader>

        <BackupList>
          {backups.map(backup => (
            <BackupItem key={backup.id}>
              <div className="backup-info">
                <div className="backup-icon">📦</div>
                <div className="details">
                  <h4>{backup.name}</h4>
                  <p>
                    {new Date(backup.date).toLocaleString('es-CO')} • 
                    {backup.size} • 
                    {backup.type === 'automatic' ? 'Automática' : 'Manual'}
                  </p>
                </div>
              </div>
              <div className="actions">
                <ActionButton
                  className="download"
                  onClick={() => handleDownloadBackup(backup.id)}
                  disabled={loading}
                >
                  Descargar
                </ActionButton>
                <ActionButton
                  className="restore"
                  onClick={() => handleRestoreBackup(backup.id)}
                  disabled={loading}
                >
                  Restaurar
                </ActionButton>
                <ActionButton
                  className="delete"
                  onClick={() => handleDeleteBackup(backup.id)}
                  disabled={loading}
                >
                  Eliminar
                </ActionButton>
              </div>
            </BackupItem>
          ))}
        </BackupList>
      </Section>

      <Section>
        <SectionHeader>
          <span className="icon">🧹</span>
          <h3>Mantenimiento</h3>
        </SectionHeader>

        <p style={{color: '#6b7280', marginBottom: '20px'}}>
          Operaciones de mantenimiento avanzadas para la base de datos.
        </p>

        <ButtonGroup>
          <ControlButton
            className="danger"
            onClick={handleCleanLogs}
            disabled={loading}
          >
            Limpiar Bitácora Antigua
          </ControlButton>
          <ControlButton
            className="secondary"
            onClick={() => toast.info('Función próximamente disponible')}
            disabled={loading}
          >
            Optimizar Tablas
          </ControlButton>
        </ButtonGroup>
      </Section>
    </Container>
  )
}

export default BaseDatosTab