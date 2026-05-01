import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { toast } from 'react-toastify'
import styled from 'styled-components'

const ServiciosContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  padding: 20px;
`

const ServiciosCard = styled.div`
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

  @media (max-width: 768px) {
    max-width: none;
  }

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
`

const NewServiceButton = styled.button`
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

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 24px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const ServiceCard = styled.div`
  background: white;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  border: 2px solid ${props => props.active ? '#10b981' : 'transparent'};

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  }

  .service-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 16px;

    .service-icon {
      width: 50px;
      height: 50px;
      border-radius: 12px;
      background: linear-gradient(135deg, #667eea, #764ba2);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 24px;
      color: white;
    }

    .service-status {
      padding: 4px 12px;
      border-radius: 20px;
      font-size: 12px;
      font-weight: 600;
      text-transform: uppercase;

      ${props => props.active ?
        'background: #d1fae5; color: #065f46;' :
        'background: #fee2e2; color: #991b1b;'
      }
    }
  }

  .service-name {
    font-size: 20px;
    font-weight: 600;
    color: #1f2937;
    margin-bottom: 8px;
  }

  .service-description {
    color: #6b7280;
    font-size: 14px;
    line-height: 1.5;
    margin-bottom: 16px;
  }

  .service-price {
    font-size: 24px;
    font-weight: 700;
    color: #10b981;
    margin-bottom: 16px;
  }

  .service-meta {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 12px;
    color: #9ca3af;

    .duration {
      display: flex;
      align-items: center;
      gap: 4px;
    }
  }

  .service-actions {
    display: flex;
    gap: 8px;
    margin-top: 16px;
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

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
    transform: none;
  }
`

const SERVICIOS_STORAGE_KEY = 'turnoflow_servicios'

const DEFAULT_SERVICES = [
  { id: 1, name: 'Corte de Cabello Mujer', description: 'Corte moderno con lavado y secado incluido', price: 35000, duration: 60, category: 'Peluquería', active: true },
  { id: 2, name: 'Tratamiento Facial', description: 'Limpieza profunda con productos premium', price: 80000, duration: 90, category: 'Estética', active: true },
  { id: 3, name: 'Manicure + Pedicure', description: 'Servicio completo de uñas con esmaltado permanente', price: 60000, duration: 120, category: 'Uñas', active: true },
  { id: 4, name: 'Tinte de Cabello', description: 'Coloración profesional con productos de calidad', price: 120000, duration: 180, category: 'Peluquería', active: false },
  { id: 5, name: 'Corte de Cabello Hombre', description: 'Corte moderno para caballero', price: 25000, duration: 45, category: 'Peluquería', active: true },
  { id: 6, name: 'Gel Fijador', description: 'Gel para peinado con fijación fuerte', category: 'Peinado', stock: 18, minStock: 12, unitPrice: 10000 },
  { id: 7, name: 'Consulta Médica General', description: 'Consulta médica completa', category: 'Medicina General', stock: 0, minStock: 0, unitPrice: 50000 },
  { id: 8, name: 'Limpieza Dental', description: 'Limpieza dental profesional', category: 'Odontología', stock: 0, minStock: 0, unitPrice: 80000 },
  { id: 9, name: 'Clase de Yoga', description: 'Sesión de yoga de 60 minutos', category: 'Yoga', stock: 15, minStock: 5, unitPrice: 25000 },
  { id: 10, name: 'Asesoría Legal', description: 'Consulta legal especializada', category: 'Abogados', stock: 0, minStock: 0, unitPrice: 120000 },
  { id: 11, name: 'Reparación de Celular', description: 'Reparación de celulares', category: 'Reparación', stock: 0, minStock: 0, unitPrice: 0 },
  { id: 12, name: 'Consulta Veterinaria', description: 'Consulta veterinaria general', category: 'Consultas Veterinarias', stock: 0, minStock: 0, unitPrice: 60000 }
]

const loadServices = () => {
  try {
    const saved = localStorage.getItem(SERVICIOS_STORAGE_KEY)
    return saved ? JSON.parse(saved) : DEFAULT_SERVICES
  } catch { return DEFAULT_SERVICES }
}

const Servicios = () => {
  const [services, setServices] = useState(loadServices)
  const [filteredServices, setFilteredServices] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [showNewServiceModal, setShowNewServiceModal] = useState(false)
  const [editingService, setEditingService] = useState(null)

  // Persistir cambios
  useEffect(() => {
    localStorage.setItem(SERVICIOS_STORAGE_KEY, JSON.stringify(services))
  }, [services])

  const schema = yup.object({
    name: yup.string().required('El nombre del servicio es requerido'),
    description: yup.string().required('La descripción es requerida'),
    price: yup.number().positive('El precio debe ser mayor a 0').required('El precio es requerido'),
    duration: yup.number().positive('La duración debe ser mayor a 0').required('La duración es requerida'),
    category: yup.string().required('La categoría es requerida')
  })

  const { register, handleSubmit, reset, setValue, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  })

  const categories = [
    'Cuidado Capilar',
    'Cuidado Facial',
    'Cuidado Corporal',
    'Uñas',
    'Peinado',
    'Maquillaje',
    'Bienestar',
    'Medicina General',
    'Odontología',
    'Dermatología',
    'Psicología',
    'Fisioterapia',
    'Yoga',
    'Pilates',
    'Spinning',
    'Abogados',
    'Contadores',
    'Consultores',
    'Reparación',
    'Mantenimiento',
    'Diagnóstico',
    'Reservas',
    'Consultas Veterinarias',
    'Grooming',
    'Trámites',
    'Educación',
    'Otros'
  ]

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0
    }).format(amount)
  }

  const handleSearch = (term) => {
    setSearchTerm(term)
    const filtered = services.filter(service =>
      service.name.toLowerCase().includes(term.toLowerCase()) ||
      service.category.toLowerCase().includes(term.toLowerCase()) ||
      service.description.toLowerCase().includes(term.toLowerCase())
    )
    setFilteredServices(filtered)
  }

  const handleNewService = () => {
    setEditingService(null)
    reset()
    setShowNewServiceModal(true)
  }

  const handleEditService = (service) => {
    setEditingService(service)
    setValue('name', service.name)
    setValue('description', service.description)
    setValue('price', service.price)
    setValue('duration', service.duration)
    setValue('category', service.category)
    setShowNewServiceModal(true)
  }

  const handleToggleService = async (serviceId) => {
    try {
      setServices(prev => prev.map(service =>
        service.id === serviceId
          ? { ...service, active: !service.active }
          : service
      ))
      toast.success('Estado del servicio actualizado')
    } catch (error) {
      toast.error('Error al actualizar el servicio')
    }
  }

  const onSubmitService = async (data) => {
    try {
      if (editingService) {
        setServices(prev => prev.map(service =>
          service.id === editingService.id
            ? { ...service, ...data }
            : service
        ))
        toast.success('Servicio actualizado exitosamente')
      } else {
        const newService = {
          id: services.length + 1,
          ...data,
          active: true
        }
        setServices(prev => [...prev, newService])
        toast.success('Servicio creado exitosamente')
      }

      setShowNewServiceModal(false)
      reset()
      setEditingService(null)
    } catch (error) {
      toast.error('Error al guardar el servicio')
    }
  }

  const getCategoryIcon = (category) => {
    const icons = {
      'Peluquería': '✂️',
      'Estética': '💄',
      'Uñas': '💅',
      'Bienestar': '🧘',
      'Depilación': '🪒',
      'Maquillaje': '🎭',
      'Masajes': '💆',
      'Otros': '🔧'
    }
    return icons[category] || '🔧'
  }

  return (
    <ServiciosContainer>
      <ServiciosCard>
        <Header>
          <h1>Gestión de Servicios</h1>
          <p>Administra los servicios que ofreces a tus clientes</p>
        </Header>

        <Content>
          <ControlsSection>
            <SearchBar>
              <div className="search-icon">🔍</div>
              <input
                type="text"
                placeholder="Buscar servicios..."
                value={searchTerm}
                onChange={(e) => handleSearch(e.target.value)}
              />
            </SearchBar>
            <NewServiceButton onClick={handleNewService}>
              Nuevo Servicio
            </NewServiceButton>
          </ControlsSection>

          <ServicesGrid>
            {filteredServices.map(service => (
              <ServiceCard key={service.id} active={service.active}>
                <div className="service-header">
                  <div className="service-icon">
                    {getCategoryIcon(service.category)}
                  </div>
                  <div className="service-status" active={service.active}>
                    {service.active ? 'Activo' : 'Inactivo'}
                  </div>
                </div>

                <div className="service-name">{service.name}</div>
                <div className="service-description">{service.description}</div>
                <div className="service-price">{formatCurrency(service.price)}</div>

                <div className="service-meta">
                  <div className="category">{service.category}</div>
                  <div className="duration">⏱️ {service.duration} min</div>
                </div>

                <div className="service-actions">
                  <ActionButton
                    className="edit"
                    onClick={() => handleEditService(service)}
                  >
                    Editar
                  </ActionButton>
                  <ActionButton
                    className="toggle"
                    active={service.active}
                    onClick={() => handleToggleService(service.id)}
                  >
                    {service.active ? 'Desactivar' : 'Activar'}
                  </ActionButton>
                </div>
              </ServiceCard>
            ))}
          </ServicesGrid>

          {filteredServices.length === 0 && (
            <div style={{textAlign: 'center', padding: '40px', color: '#6b7280'}}>
              <div style={{fontSize: '48px', marginBottom: '16px'}}>🔧</div>
              <p>No se encontraron servicios</p>
            </div>
          )}
        </Content>
      </ServiciosCard>

      {showNewServiceModal && (
        <Modal>
          <ModalContent>
            <ModalHeader>
              <h2>{editingService ? 'Editar Servicio' : 'Nuevo Servicio'}</h2>
              <button className="close" onClick={() => setShowNewServiceModal(false)}>
                ×
              </button>
            </ModalHeader>

            <form onSubmit={handleSubmit(onSubmitService)}>
              <FormGrid>
                <FormGroup>
                  <Label>Nombre del Servicio</Label>
                  <Input
                    type="text"
                    placeholder="Ej: Corte de Cabello Mujer"
                    {...register('name')}
                  />
                  {errors.name && <span style={{color: 'red', fontSize: '12px'}}>{errors.name.message}</span>}
                </FormGroup>

                <FormGroup>
                  <Label>Categoría</Label>
                  <Select {...register('category')}>
                    <option value="">Seleccionar categoría</option>
                    {categories.map(category => (
                      <option key={category} value={category}>{category}</option>
                    ))}
                  </Select>
                  {errors.category && <span style={{color: 'red', fontSize: '12px'}}>{errors.category.message}</span>}
                </FormGroup>

                <FormGroup>
                  <Label>Precio (COP)</Label>
                  <Input
                    type="number"
                    placeholder="35000"
                    {...register('price')}
                  />
                  {errors.price && <span style={{color: 'red', fontSize: '12px'}}>{errors.price.message}</span>}
                </FormGroup>

                <FormGroup>
                  <Label>Duración (minutos)</Label>
                  <Input
                    type="number"
                    placeholder="60"
                    {...register('duration')}
                  />
                  {errors.duration && <span style={{color: 'red', fontSize: '12px'}}>{errors.duration.message}</span>}
                </FormGroup>

                <FormGroup style={{gridColumn: '1 / -1'}}>
                  <Label>Descripción</Label>
                  <TextArea
                    placeholder="Describe el servicio que ofreces..."
                    {...register('description')}
                  />
                  {errors.description && <span style={{color: 'red', fontSize: '12px'}}>{errors.description.message}</span>}
                </FormGroup>
              </FormGrid>

              <ModalActions>
                <Button
                  type="button"
                  className="secondary"
                  onClick={() => setShowNewServiceModal(false)}
                >
                  Cancelar
                </Button>
                <Button type="submit" className="primary">
                  {editingService ? 'Actualizar Servicio' : 'Crear Servicio'}
                </Button>
              </ModalActions>
            </form>
          </ModalContent>
        </Modal>
      )}
    </ServiciosContainer>
  )
}

export default Servicios