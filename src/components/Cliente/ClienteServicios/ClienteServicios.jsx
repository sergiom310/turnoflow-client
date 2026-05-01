import { useState } from 'react'
import styled, { keyframes } from 'styled-components'
import { toast } from 'react-toastify'
import { useCliente } from '../../../context/ClienteContext'
import { useBusiness } from '../../../context/BusinessContext'

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`

const Container = styled.div`
  animation: ${fadeIn} 0.5s ease;
`

const Header = styled.div`
  margin-bottom: 24px;

  h2 {
    margin: 0 0 8px 0;
    font-size: 24px;
    color: #1f2937;
  }

  p {
    margin: 0;
    color: #6b7280;
  }
`

const FilterTabs = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 24px;
  overflow-x: auto;
  padding-bottom: 8px;
`

const FilterTab = styled.button`
  padding: 10px 20px;
  background: ${props => props.$active ? 'linear-gradient(135deg, var(--primary-color), var(--secondary-color))' : '#f3f4f6'};
  color: ${props => props.$active ? 'white' : '#6b7280'};
  border: none;
  border-radius: 25px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  white-space: nowrap;
  transition: all 0.3s ease;

  &:hover {
    background: ${props => props.$active ? 'linear-gradient(135deg, var(--primary-color), var(--secondary-color))' : '#e5e7eb'};
  }
`

const SearchBar = styled.div`
  display: flex;
  gap: 12px;
  margin-bottom: 24px;

  input {
    flex: 1;
    padding: 14px 20px;
    border: 2px solid #e5e7eb;
    border-radius: 12px;
    font-size: 15px;

    &:focus {
      outline: none;
      border-color: var(--primary-color);
    }
  }

  @media (max-width: 480px) {
    flex-direction: column;
  }
`

const ServiciosGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 20px;
`

const ServicioCard = styled.div`
  background: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
  }

  .image {
    height: 160px;
    background: linear-gradient(135deg, ${props => props.$color ? props.$color + '40' : 'rgba(var(--primary-rgb), 0.25)'}, ${props => props.$color ? props.$color + '20' : 'rgba(var(--secondary-rgb), 0.12)'});
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 64px;
  }

  .content {
    padding: 20px;
  }

  .category {
    display: inline-block;
    padding: 4px 10px;
    background: ${props => props.$color ? props.$color + '20' : 'rgba(var(--primary-rgb), 0.12)'};
    color: ${props => props.$color || 'var(--primary-color)'};
    font-size: 11px;
    font-weight: 600;
    border-radius: 20px;
    margin-bottom: 12px;
  }

  h3 {
    margin: 0 0 8px 0;
    font-size: 18px;
    color: #1f2937;
  }

  p {
    margin: 0 0 16px 0;
    font-size: 14px;
    color: #6b7280;
    line-height: 1.5;
  }

  .footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .info {
    .duration {
      font-size: 13px;
      color: #9ca3af;
    }

    .price {
      font-size: 20px;
      font-weight: 700;
      color: var(--primary-color);
    }
  }

  button {
    padding: 12px 24px;
    background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
    color: white;
    border: none;
    border-radius: 10px;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
    }

    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }
  }
`

const EmptyState = styled.div`
  text-align: center;
  padding: 60px 20px;
  color: #9ca3af;

  .icon {
    font-size: 64px;
    margin-bottom: 16px;
  }

  h3 {
    margin: 0 0 8px 0;
    color: #374151;
  }

  p {
    margin: 0;
  }
`

const ClienteServicios = () => {
  const { agregarCita } = useCliente()
  const { businessType, getBusinessComponents } = useBusiness()
  const business = getBusinessComponents(businessType)

  const [categoria, setCategoria] = useState('todos')
  const [busqueda, setBusqueda] = useState('')

  const serviciosMock = [
    { id: 1, nombre: 'Corte de cabello', descripcion: 'Corte y peinado profesional con productos de calidad', precio: 25000, duracion: 30, categoria: 'cabello', color: '#f59e0b', icon: '💇' },
    { id: 2, nombre: 'Manicure profesional', descripcion: 'Cuidados completos de uñas con esmalte de larga duración', precio: 20000, duracion: 45, categoria: 'uñas', color: '#ec4899', icon: '💅' },
    { id: 3, nombre: 'Pedicure spa', descripcion: 'Tratamiento relajante para pies y uñas', precio: 25000, duracion: 45, categoria: 'uñas', color: '#8b5cf6', icon: '🦶' },
    { id: 4, nombre: 'Tratamiento facial', descripcion: 'Limpieza profunda e hidratación para tu rostro', precio: 45000, duracion: 60, categoria: 'facial', color: '#10b981', icon: '✨' },
    { id: 5, nombre: 'Coloración completa', descripcion: 'Tinte profesional con productos orgánicos', precio: 60000, duracion: 90, categoria: 'cabello', color: '#ef4444', icon: '🎨' },
    { id: 6, nombre: 'Masaje relajante', descripcion: 'Masaje corporal completo para eliminar estrés', precio: 50000, duracion: 60, categoria: 'masaje', color: '#06b6d4', icon: '💆' },
    { id: 7, nombre: 'Mascarilla capilar', descripcion: 'Tratamiento nutritivo para tu cabello', precio: 30000, duracion: 40, categoria: 'cabello', color: '#f59e0b', icon: '🧴' },
    { id: 8, nombre: 'Depilación', descripcion: 'Depilación con cera tibia natural', precio: 35000, duracion: 45, categoria: 'cuerpo', color: '#ec4899', icon: '🪒' }
  ]

  const categorias = [
    { id: 'todos', label: 'Todos' },
    { id: 'cabello', label: 'Cabello' },
    { id: 'uñas', label: 'Uñas' },
    { id: 'facial', label: 'Facial' },
    { id: 'masaje', label: 'Masajes' },
    { id: 'cuerpo', label: 'Cuerpo' }
  ]

  const serviciosFiltrados = serviciosMock.filter(serv => {
    const matchesCategoria = categoria === 'todos' || serv.categoria === categoria
    const matchesBusqueda = serv.nombre.toLowerCase().includes(busqueda.toLowerCase()) || 
                            serv.descripcion.toLowerCase().includes(busqueda.toLowerCase())
    return matchesCategoria && matchesBusqueda
  })

  const handleReservar = (servicio) => {
    agregarCita({
      servicio: servicio.nombre,
      precio: servicio.precio,
      fecha: new Date().toISOString().split('T')[0],
      hora: 'Por confirmar'
    })
    toast.success(`¡${servicio.nombre} agregado! Ve a "Agendar" para completar tu cita.`)
  }

  return (
    <Container>
      <Header>
        <h2>✂️ Nuestros Servicios</h2>
        <p>Explora todos los servicios que {business.name} tiene para ti</p>
      </Header>

      <FilterTabs>
        {categorias.map(cat => (
          <FilterTab
            key={cat.id}
            $active={categoria === cat.id}
            onClick={() => setCategoria(cat.id)}
          >
            {cat.label}
          </FilterTab>
        ))}
      </FilterTabs>

      <SearchBar>
        <input
          type="text"
          placeholder="Buscar servicio..."
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
        />
      </SearchBar>

      {serviciosFiltrados.length > 0 ? (
        <ServiciosGrid>
          {serviciosFiltrados.map(servicio => (
            <ServicioCard key={servicio.id} $color={servicio.color}>
              <div className="image">{servicio.icon}</div>
              <div className="content">
                <span className="category">{servicio.categoria}</span>
                <h3>{servicio.nombre}</h3>
                <p>{servicio.descripcion}</p>
                <div className="footer">
                  <div className="info">
                    <div className="duration">⏱️ {servicio.duracion} min</div>
                    <div className="price">${servicio.precio.toLocaleString('es-CO')}</div>
                  </div>
                  <button onClick={() => handleReservar(servicio)}>
                    Reservar
                  </button>
                </div>
              </div>
            </ServicioCard>
          ))}
        </ServiciosGrid>
      ) : (
        <EmptyState>
          <div className="icon">🔍</div>
          <h3>No se encontraron servicios</h3>
          <p>Intenta con otros términos de búsqueda</p>
        </EmptyState>
      )}
    </Container>
  )
}

export default ClienteServicios