import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { toast } from 'react-toastify'
import styled from 'styled-components'

const PromocionesContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  padding: 20px;
`

const PromocionesCard = styled.div`
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

const ControlsSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 32px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 16px;
    align-items: stretch;
  }
`

const SearchBar = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  flex: 1;
  max-width: 400px;

  input {
    flex: 1;
    padding: 12px 16px;
    border: 2px solid #e5e7eb;
    border-radius: 8px;
    font-size: 16px;

    &:focus {
      outline: none;
      border-color: #667eea;
    }
  }

  .search-icon {
    color: #6b7280;
    font-size: 20px;
  }

  @media (max-width: 768px) {
    max-width: none;
  }
`

const NewPromotionButton = styled.button`
  padding: 14px 32px;
  background: linear-gradient(135deg, #10b981, #059669);
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: linear-gradient(135deg, #059669, #047857);
    transform: translateY(-2px);
    box-shadow: 0 10px 25px rgba(16, 185, 129, 0.3);
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`

const PromotionsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 24px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const PromotionCard = styled.div`
  background: white;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  border: 2px solid ${props => {
    if (!props.active) return '#fee2e2'
    if (new Date(props.endDate) < new Date()) return '#fef3c7'
    return '#10b981'
  }};

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  }

  .promotion-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 16px;

    .promotion-icon {
      width: 50px;
      height: 50px;
      border-radius: 12px;
      background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 24px;
      color: white;
    }

    .promotion-status {
      padding: 4px 12px;
      border-radius: 20px;
      font-size: 12px;
      font-weight: 600;
      text-transform: uppercase;

      ${props => {
        if (!props.active) return 'background: #fee2e2; color: #991b1b;'
        if (new Date(props.endDate) < new Date()) return 'background: #fef3c7; color: #92400e;'
        return 'background: #d1fae5; color: #065f46;'
      }}
    }
  }

  .promotion-title {
    font-size: 20px;
    font-weight: 600;
    color: #1f2937;
    margin-bottom: 8px;
  }

  .promotion-description {
    color: #6b7280;
    font-size: 14px;
    line-height: 1.5;
    margin-bottom: 16px;
  }

  .promotion-details {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 12px;
    margin-bottom: 16px;
    font-size: 12px;

    .detail-item {
      display: flex;
      flex-direction: column;

      .label {
        color: #9ca3af;
        font-weight: 600;
        text-transform: uppercase;
        margin-bottom: 2px;
      }

      .value {
        color: #374151;
        font-weight: 500;
      }
    }
  }

  .promotion-actions {
    display: flex;
    gap: 8px;
  }
`

const ActionButton = styled.button`
  flex: 1;
  padding: 8px 12px;
  border: none;
  border-radius: 6px;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &.edit {
    background: #ffc107;
    color: #212529;

    &:hover {
      background: #e0a800;
    }
  }

  &.toggle {
    background: ${props => props.active ? '#dc3545' : '#10b981'};
    color: white;

    &:hover {
      background: ${props => props.active ? '#c82333' : '#059669'};
    }
  }

  &.participants {
    background: #17a2b8;
    color: white;

    &:hover {
      background: #138496;
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
  max-width: 700px;
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

const FormGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-bottom: 24px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
`

const Label = styled.label`
  font-weight: 600;
  color: #374151;
  margin-bottom: 8px;
  font-size: 14px;
`

const Input = styled.input`
  padding: 12px 16px;
  border: 2px solid #e5e7eb;
  border-radius: 8px;
  font-size: 16px;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #667eea;
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
  }
`

const TextArea = styled.textarea`
  padding: 12px 16px;
  border: 2px solid #e5e7eb;
  border-radius: 8px;
  font-size: 16px;
  min-height: 80px;
  resize: vertical;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #667eea;
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
  }
`

const Select = styled.select`
  padding: 12px 16px;
  border: 2px solid #e5e7eb;
  border-radius: 8px;
  font-size: 16px;
  background: white;
  cursor: pointer;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #667eea;
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
  }
`

const FullWidthGroup = styled(FormGroup)`
  grid-column: 1 / -1;
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
    background: var(--primary-color);
    color: white;

    &:hover {
      background: var(--secondary-color);
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

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
    transform: none;
  }
`

const Promociones = () => {
  const [promotions, setPromotions] = useState([
    {
      id: 1,
      title: 'Descuento 20% en Cortes',
      description: 'Aprovecha nuestro descuento especial en todos los cortes de cabello para damas.',
      type: 'discount',
      discountPercentage: 20,
      startDate: '2024-01-15',
      endDate: '2024-01-31',
      active: true,
      participants: 45,
      maxParticipants: 100
    },
    {
      id: 2,
      title: 'Rifa de Productos Premium',
      description: 'Participa en nuestra rifa mensual y gana productos de cuidado capilar premium.',
      type: 'raffle',
      startDate: '2024-01-01',
      endDate: '2024-01-31',
      active: true,
      participants: 120,
      maxParticipants: null
    },
    {
      id: 3,
      title: 'Día del Cliente',
      description: 'Evento especial con tratamientos gratuitos y regalos para nuestros clientes fieles.',
      type: 'event',
      startDate: '2024-01-20',
      endDate: '2024-01-20',
      active: true,
      participants: 25,
      maxParticipants: 50
    },
    {
      id: 4,
      title: 'Campaña Redes Sociales',
      description: 'Comparte nuestras publicaciones y gana sesiones gratuitas de tratamientos.',
      type: 'campaign',
      startDate: '2024-01-10',
      endDate: '2024-02-10',
      active: false,
      participants: 89,
      maxParticipants: 200
    },
    {
      id: 5,
      title: 'Regalo de Cumpleaños',
      description: 'Tratamiento facial gratuito para clientes que cumplen años este mes.',
      type: 'gift',
      startDate: '2024-01-01',
      endDate: '2024-01-31',
      active: true,
      participants: 12,
      maxParticipants: null
    }
  ])

  const [filteredPromotions, setFilteredPromotions] = useState(promotions)
  const [searchTerm, setSearchTerm] = useState('')
  const [showNewPromotionModal, setShowNewPromotionModal] = useState(false)
  const [editingPromotion, setEditingPromotion] = useState(null)

  const promotionTypes = [
    { value: 'discount', label: 'Descuento' },
    { value: 'raffle', label: 'Rifa' },
    { value: 'event', label: 'Evento' },
    { value: 'campaign', label: 'Campaña Publicitaria' },
    { value: 'gift', label: 'Regalo' }
  ]

  const schema = yup.object({
    title: yup.string().required('El título es requerido'),
    description: yup.string().required('La descripción es requerida'),
    type: yup.string().required('El tipo es requerido'),
    discountPercentage: yup.number().when('type', {
      is: 'discount',
      then: yup.number().min(1).max(100).required('El porcentaje de descuento es requerido')
    }),
    startDate: yup.string().required('La fecha de inicio es requerida'),
    endDate: yup.string().required('La fecha de fin es requerida'),
    maxParticipants: yup.number().nullable().positive('Debe ser un número positivo')
  })

  const { register, handleSubmit, reset, setValue, watch, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  })

  const watchedType = watch('type')

  const handleSearch = (term) => {
    setSearchTerm(term)
    const filtered = promotions.filter(promotion =>
      promotion.title.toLowerCase().includes(term.toLowerCase()) ||
      promotion.description.toLowerCase().includes(term.toLowerCase()) ||
      promotion.type.toLowerCase().includes(term.toLowerCase())
    )
    setFilteredPromotions(filtered)
  }

  const handleNewPromotion = () => {
    setEditingPromotion(null)
    reset()
    setShowNewPromotionModal(true)
  }

  const handleEditPromotion = (promotion) => {
    setEditingPromotion(promotion)
    setValue('title', promotion.title)
    setValue('description', promotion.description)
    setValue('type', promotion.type)
    setValue('discountPercentage', promotion.discountPercentage || '')
    setValue('startDate', promotion.startDate)
    setValue('endDate', promotion.endDate)
    setValue('maxParticipants', promotion.maxParticipants || '')
    setShowNewPromotionModal(true)
  }

  const handleTogglePromotion = async (promotionId) => {
    try {
      setPromotions(prev => prev.map(promotion =>
        promotion.id === promotionId
          ? { ...promotion, active: !promotion.active }
          : promotion
      ))
      toast.success('Estado de la promoción actualizado')
    } catch (error) {
      toast.error('Error al actualizar la promoción')
    }
  }

  const onSubmitPromotion = async (data) => {
    try {
      if (editingPromotion) {
        setPromotions(prev => prev.map(promotion =>
          promotion.id === editingPromotion.id
            ? { ...promotion, ...data, participants: promotion.participants }
            : promotion
        ))
        toast.success('Promoción actualizada exitosamente')
      } else {
        const newPromotion = {
          id: promotions.length + 1,
          ...data,
          active: true,
          participants: 0
        }
        setPromotions(prev => [...prev, newPromotion])
        toast.success('Promoción creada exitosamente')
      }

      setShowNewPromotionModal(false)
      reset()
      setEditingPromotion(null)
    } catch (error) {
      toast.error('Error al guardar la promoción')
    }
  }

  const getPromotionIcon = (type) => {
    const icons = {
      'discount': '💰',
      'raffle': '🎰',
      'event': '🎉',
      'campaign': '📢',
      'gift': '🎁'
    }
    return icons[type] || '🎊'
  }

  const getTypeLabel = (type) => {
    const labels = {
      'discount': 'Descuento',
      'raffle': 'Rifa',
      'event': 'Evento',
      'campaign': 'Campaña',
      'gift': 'Regalo'
    }
    return labels[type] || type
  }

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('es-CO', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    })
  }

  return (
    <PromocionesContainer>
      <PromocionesCard>
        <Header>
          <h1>Gestión de Promociones</h1>
          <p>Crea y administra promociones, rifas y campañas para tus clientes</p>
        </Header>

        <Content>
          <ControlsSection>
            <SearchBar>
              <div className="search-icon">🔍</div>
              <input
                type="text"
                placeholder="Buscar promociones..."
                value={searchTerm}
                onChange={(e) => handleSearch(e.target.value)}
              />
            </SearchBar>
            <NewPromotionButton onClick={handleNewPromotion}>
              Nueva Promoción
            </NewPromotionButton>
          </ControlsSection>

          <PromotionsGrid>
            {filteredPromotions.map(promotion => (
              <PromotionCard
                key={promotion.id}
                active={promotion.active}
                endDate={promotion.endDate}
              >
                <div className="promotion-header">
                  <div className="promotion-icon">
                    {getPromotionIcon(promotion.type)}
                  </div>
                  <div className="promotion-status">
                    {!promotion.active ? 'Inactiva' :
                     new Date(promotion.endDate) < new Date() ? 'Vencida' : 'Activa'}
                  </div>
                </div>

                <div className="promotion-title">{promotion.title}</div>
                <div className="promotion-description">{promotion.description}</div>

                <div className="promotion-details">
                  <div className="detail-item">
                    <div className="label">Tipo</div>
                    <div className="value">{getTypeLabel(promotion.type)}</div>
                  </div>
                  <div className="detail-item">
                    <div className="label">Participantes</div>
                    <div className="value">
                      {promotion.participants}
                      {promotion.maxParticipants && `/${promotion.maxParticipants}`}
                    </div>
                  </div>
                  <div className="detail-item">
                    <div className="label">Inicio</div>
                    <div className="value">{formatDate(promotion.startDate)}</div>
                  </div>
                  <div className="detail-item">
                    <div className="label">Fin</div>
                    <div className="value">{formatDate(promotion.endDate)}</div>
                  </div>
                  {promotion.discountPercentage && (
                    <div className="detail-item">
                      <div className="label">Descuento</div>
                      <div className="value">{promotion.discountPercentage}%</div>
                    </div>
                  )}
                </div>

                <div className="promotion-actions">
                  <ActionButton
                    className="edit"
                    onClick={() => handleEditPromotion(promotion)}
                  >
                    Editar
                  </ActionButton>
                  <ActionButton
                    className="participants"
                    onClick={() => toast.info('Funcionalidad próximamente')}
                  >
                    Ver Participantes
                  </ActionButton>
                  <ActionButton
                    className="toggle"
                    active={promotion.active}
                    onClick={() => handleTogglePromotion(promotion.id)}
                  >
                    {promotion.active ? 'Desactivar' : 'Activar'}
                  </ActionButton>
                </div>
              </PromotionCard>
            ))}
          </PromotionsGrid>

          {filteredPromotions.length === 0 && (
            <div style={{textAlign: 'center', padding: '40px', color: '#6b7280'}}>
              <div style={{fontSize: '48px', marginBottom: '16px'}}>🎊</div>
              <p>No se encontraron promociones</p>
            </div>
          )}
        </Content>
      </PromocionesCard>

      {showNewPromotionModal && (
        <Modal>
          <ModalContent>
            <ModalHeader>
              <h2>{editingPromotion ? 'Editar Promoción' : 'Nueva Promoción'}</h2>
              <button className="close" onClick={() => setShowNewPromotionModal(false)}>
                ×
              </button>
            </ModalHeader>

            <form onSubmit={handleSubmit(onSubmitPromotion)}>
              <FormGrid>
                <FormGroup>
                  <Label>Título de la Promoción</Label>
                  <Input
                    type="text"
                    placeholder="Ej: Descuento 20% en Cortes"
                    {...register('title')}
                  />
                  {errors.title && <span style={{color: 'red', fontSize: '12px'}}>{errors.title.message}</span>}
                </FormGroup>

                <FormGroup>
                  <Label>Tipo de Promoción</Label>
                  <Select {...register('type')}>
                    <option value="">Seleccionar tipo</option>
                    {promotionTypes.map(type => (
                      <option key={type.value} value={type.value}>
                        {type.label}
                      </option>
                    ))}
                  </Select>
                  {errors.type && <span style={{color: 'red', fontSize: '12px'}}>{errors.type.message}</span>}
                </FormGroup>

                {watchedType === 'discount' && (
                  <FormGroup>
                    <Label>Porcentaje de Descuento</Label>
                    <Input
                      type="number"
                      placeholder="20"
                      min="1"
                      max="100"
                      {...register('discountPercentage')}
                    />
                    {errors.discountPercentage && <span style={{color: 'red', fontSize: '12px'}}>{errors.discountPercentage.message}</span>}
                  </FormGroup>
                )}

                <FormGroup>
                  <Label>Fecha de Inicio</Label>
                  <Input
                    type="date"
                    {...register('startDate')}
                  />
                  {errors.startDate && <span style={{color: 'red', fontSize: '12px'}}>{errors.startDate.message}</span>}
                </FormGroup>

                <FormGroup>
                  <Label>Fecha de Fin</Label>
                  <Input
                    type="date"
                    {...register('endDate')}
                  />
                  {errors.endDate && <span style={{color: 'red', fontSize: '12px'}}>{errors.endDate.message}</span>}
                </FormGroup>

                <FormGroup>
                  <Label>Máximo de Participantes (opcional)</Label>
                  <Input
                    type="number"
                    placeholder="Sin límite"
                    min="1"
                    {...register('maxParticipants')}
                  />
                  {errors.maxParticipants && <span style={{color: 'red', fontSize: '12px'}}>{errors.maxParticipants.message}</span>}
                </FormGroup>

                <FullWidthGroup>
                  <Label>Descripción</Label>
                  <TextArea
                    placeholder="Describe la promoción y sus condiciones..."
                    {...register('description')}
                  />
                  {errors.description && <span style={{color: 'red', fontSize: '12px'}}>{errors.description.message}</span>}
                </FullWidthGroup>
              </FormGrid>

              <ModalActions>
                <Button
                  type="button"
                  className="secondary"
                  onClick={() => setShowNewPromotionModal(false)}
                >
                  Cancelar
                </Button>
                <Button type="submit" className="primary">
                  {editingPromotion ? 'Actualizar Promoción' : 'Crear Promoción'}
                </Button>
              </ModalActions>
            </form>
          </ModalContent>
        </Modal>
      )}
    </PromocionesContainer>
  )
}

export default Promociones