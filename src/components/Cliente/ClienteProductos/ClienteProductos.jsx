import { useState } from 'react'
import styled, { keyframes } from 'styled-components'
import { useNavigate } from 'react-router-dom'
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
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
  flex-wrap: wrap;
  gap: 16px;

  .title {
    h2 {
      margin: 0 0 8px 0;
      font-size: 24px;
      color: #1f2937;
    }

    p {
      margin: 0;
      color: #6b7280;
    }
  }
`

const CarritoFlotante = styled.button`
  position: fixed;
  bottom: 24px;
  right: 24px;
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
  border: none;
  border-radius: 50px;
  padding: 16px 24px;
  display: flex;
  align-items: center;
  gap: 12px;
  box-shadow: 0 8px 30px rgba(102, 126, 234, 0.4);
  cursor: pointer;
  z-index: 100;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 40px rgba(102, 126, 234, 0.5);
  }

  .icon {
    font-size: 24px;
  }

  .info {
    text-align: left;

    .count {
      font-size: 14px;
      font-weight: 600;
    }

    .total {
      font-size: 12px;
      opacity: 0.9;
    }
  }

  .badge {
    background: #ef4444;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    font-weight: bold;
  }

  @media (max-width: 480px) {
    bottom: 16px;
    right: 16px;
    padding: 14px 20px;

    .info {
      display: none;
    }
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
  background: ${props => props.$active ? 'linear-gradient(135deg, #667eea, #764ba2)' : '#f3f4f6'};
  color: ${props => props.$active ? 'white' : '#6b7280'};
  border: none;
  border-radius: 25px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  white-space: nowrap;
  transition: all 0.3s ease;

  &:hover {
    background: ${props => props.$active ? 'linear-gradient(135deg, #667eea, #764ba2)' : '#e5e7eb'};
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
      border-color: #667eea;
    }
  }
`

const ProductosGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 20px;
`

const ProductoCard = styled.div`
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
    height: 180px;
    background: linear-gradient(135deg, ${props => props.$color || '#667eea'}30, ${props => props.$color || '#764ba2'}10);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 80px;
    position: relative;
  }

  .discount {
    position: absolute;
    top: 12px;
    right: 12px;
    background: #ef4444;
    color: white;
    padding: 4px 10px;
    border-radius: 20px;
    font-size: 12px;
    font-weight: 600;
  }

  .content {
    padding: 20px;
  }

  .category {
    font-size: 11px;
    color: #9ca3af;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  h3 {
    margin: 4px 0 8px 0;
    font-size: 16px;
    color: #1f2937;
  }

  .description {
    font-size: 13px;
    color: #6b7280;
    margin-bottom: 12px;
    line-height: 1.4;
  }

  .footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .price-container {
    .original {
      font-size: 13px;
      color: #9ca3af;
      text-decoration: line-through;
    }

    .price {
      font-size: 20px;
      font-weight: 700;
      color: #667eea;
    }
  }

  .add-button {
    width: 44px;
    height: 44px;
    background: linear-gradient(135deg, #667eea, #764ba2);
    color: white;
    border: none;
    border-radius: 12px;
    font-size: 20px;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      transform: scale(1.1);
    }

    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  }
`

const ModalCarrito = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  z-index: 1000;
  padding: 20px;
`

const CarritoPanel = styled.div`
  background: white;
  width: 100%;
  max-width: 450px;
  height: 85vh;
  border-radius: 24px 24px 0 0;
  display: flex;
  flex-direction: column;
  animation: slideUp 0.3s ease;

  @keyframes slideUp {
    from {
      transform: translateY(100%);
    }
    to {
      transform: translateY(0);
    }
  }

  @media (min-width: 768px) {
    border-radius: 24px;
    height: auto;
    max-height: 90vh;
  }
`

const CarritoHeader = styled.div`
  padding: 20px 24px;
  border-bottom: 1px solid #e5e7eb;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h3 {
    margin: 0;
    font-size: 20px;
    color: #1f2937;
  }

  .close {
    background: none;
    border: none;
    font-size: 24px;
    cursor: pointer;
    color: #6b7280;

    &:hover {
      color: #1f2937;
    }
  }
`

const CarritoItems = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 16px 24px;
`

const CarritoItem = styled.div`
  display: flex;
  gap: 16px;
  padding: 16px 0;
  border-bottom: 1px solid #f3f4f6;

  .image {
    width: 70px;
    height: 70px;
    background: #f3f4f6;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 32px;
  }

  .info {
    flex: 1;

    h4 {
      margin: 0 0 4px 0;
      font-size: 14px;
      color: #1f2937;
    }

    .price {
      font-size: 14px;
      font-weight: 600;
      color: #667eea;
    }
  }

  .quantity {
    display: flex;
    align-items: center;
    gap: 8px;

    button {
      width: 28px;
      height: 28px;
      background: #f3f4f6;
      border: none;
      border-radius: 8px;
      font-size: 14px;
      cursor: pointer;

      &:hover {
        background: #e5e7eb;
      }
    }

    span {
      min-width: 24px;
      text-align: center;
      font-weight: 600;
    }
  }

  .remove {
    background: none;
    border: none;
    color: #ef4444;
    cursor: pointer;
    font-size: 18px;

    &:hover {
      color: #dc2626;
    }
  }
`

const CarritoVacio = styled.div`
  text-align: center;
  padding: 60px 20px;
  color: #9ca3af;

  .icon {
    font-size: 64px;
    margin-bottom: 16px;
  }

  h4 {
    margin: 0 0 8px 0;
    color: #374151;
  }

  p {
    margin: 0;
  }
`

const CarritoFooter = styled.div`
  padding: 20px 24px;
  border-top: 1px solid #e5e7eb;

  .subtotal {
    display: flex;
    justify-content: space-between;
    margin-bottom: 16px;

    span:first-child {
      color: #6b7280;
    }

    span:last-child {
      font-size: 20px;
      font-weight: 700;
      color: #1f2937;
    }
  }

  button {
    width: 100%;
    padding: 16px;
    background: linear-gradient(135deg, #667eea, #764ba2);
    color: white;
    border: none;
    border-radius: 12px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 20px rgba(102, 126, 234, 0.3);
    }

    &:disabled {
      opacity: 0.5;
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

const ClienteProductos = () => {
  const navigate = useNavigate()
  const { 
    agregarAlCarrito, 
    removeFromCarrito, 
    updateCantidad, 
    clearCarrito, 
    carrito, 
    cantidadCarrito, 
    valorCarrito 
  } = useCliente()
  const { businessType, getBusinessComponents } = useBusiness()
  const business = getBusinessComponents(businessType)

  const [categoria, setCategoria] = useState('todos')
  const [busqueda, setBusqueda] = useState('')
  const [showCarrito, setShowCarrito] = useState(false)

  const productosMock = [
    { id: 1, nombre: 'Shampoo profesional', descripcion: 'Shampoo para cabello teñido', precio: 35000, categoria: 'cabello', color: '#f59e0b', icon: '🧴', descuento: 10 },
    { id: 2, nombre: 'Mascarilla hydratant', descripcion: 'Mascarilla intensiva para cabello seco', precio: 42000, categoria: 'cabello', color: '#f59e0b', icon: '💆' },
    { id: 3, nombre: 'Esmalte uñas', descripcion: 'Esmalte de larga duración varios colores', precio: 18000, categoria: 'uñas', color: '#ec4899', icon: '💅', descuento: 0 },
    { id: 4, nombre: 'Crema facial', descripcion: 'Crema hidratante con vitamina E', precio: 55000, categoria: 'facial', color: '#10b981', icon: '✨', descuento: 15 },
    { id: 5, nombre: 'Bálsamo labial', descripcion: 'Bálsamo nutritivo para labios', precio: 12000, categoria: 'facial', color: '#10b981', icon: '👄', descuento: 0 },
    { id: 6, nombre: 'Aceite corporal', descripcion: 'Aceite hidratante corporal', precio: 48000, categoria: 'cuerpo', color: '#8b5cf6', icon: '🧴', descuento: 20 },
    { id: 7, nombre: 'Kit manicure', descripcion: 'Kit completo de herramientas', precio: 65000, categoria: 'uñas', color: '#ec4899', icon: '🧰', descuento: 0 },
    { id: 8, nombre: 'Spray fijador', descripcion: 'Fijador de peinado profesional', precio: 22000, categoria: 'cabello', color: '#f59e0b', icon: '🌀', descuento: 5 }
  ]

  const categorias = [
    { id: 'todos', label: 'Todos' },
    { id: 'cabello', label: 'Cabello' },
    { id: 'uñas', label: 'Uñas' },
    { id: 'facial', label: 'Facial' },
    { id: 'cuerpo', label: 'Cuerpo' }
  ]

  const productosFiltrados = productosMock.filter(prod => {
    const matchesCategoria = categoria === 'todos' || prod.categoria === categoria
    const matchesBusqueda = prod.nombre.toLowerCase().includes(busqueda.toLowerCase()) || 
                            prod.descripcion.toLowerCase().includes(busqueda.toLowerCase())
    return matchesCategoria && matchesBusqueda
  })

  const handleEnviarPedido = () => {
    clearCarrito()
    setShowCarrito(false)
    toast.success('¡Pedido enviado exitosamente! Te contactaremos pronto.')
  }

  return (
    <Container>
      <Header>
        <div className="title">
          <h2>🛒 Productos</h2>
          <p>Compra los productos que {business.name} tiene para ti</p>
        </div>
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
          placeholder="Buscar producto..."
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
        />
      </SearchBar>

      {productosFiltrados.length > 0 ? (
        <ProductosGrid>
          {productosFiltrados.map(producto => (
            <ProductoCard key={producto.id} $color={producto.color}>
              <div className="image">
                {producto.icon}
                {producto.descuento > 0 && (
                  <span className="discount">-{producto.descuento}%</span>
                )}
              </div>
              <div className="content">
                <span className="category">{producto.categoria}</span>
                <h3>{producto.nombre}</h3>
                <p className="description">{producto.descripcion}</p>
                <div className="footer">
                  <div className="price-container">
                    {producto.descuento > 0 && (
                      <div className="original">
                        ${(producto.precio * 100 / (100 - producto.descuento)).toLocaleString('es-CO')}
                      </div>
                    )}
                    <div className="price">${producto.precio.toLocaleString('es-CO')}</div>
                  </div>
                  <button 
                    className="add-button"
                    onClick={() => agregarAlCarrito(producto)}
                  >
                    +
                  </button>
                </div>
              </div>
            </ProductoCard>
          ))}
        </ProductosGrid>
      ) : (
        <EmptyState>
          <div className="icon">🔍</div>
          <h3>No se encontraron productos</h3>
          <p>Intenta con otros términos de búsqueda</p>
        </EmptyState>
      )}

      {cantidadCarrito > 0 && (
        <CarritoFlotante onClick={() => setShowCarrito(true)}>
          <div className="icon">🛒</div>
          <div className="info">
            <div className="count">{cantidadCarrito} producto{cantidadCarrito !== 1 ? 's' : ''}</div>
            <div className="total">${valorCarrito.toLocaleString('es-CO')}</div>
          </div>
          <div className="badge">{cantidadCarrito}</div>
        </CarritoFlotante>
      )}

      {showCarrito && (
        <ModalCarrito onClick={() => setShowCarrito(false)}>
          <CarritoPanel onClick={(e) => e.stopPropagation()}>
            <CarritoHeader>
              <h3>🛒 Tu Carrito</h3>
              <button className="close" onClick={() => setShowCarrito(false)}>×</button>
            </CarritoHeader>

            <CarritoItems>
              {carrito.length > 0 ? (
                carrito.map(item => (
                  <CarritoItem key={item.id}>
                    <div className="image">{item.icon}</div>
                    <div className="info">
                      <h4>{item.nombre}</h4>
                      <div className="price">${(item.precio * item.cantidad).toLocaleString('es-CO')}</div>
                    </div>
                    <div className="quantity">
                      <button onClick={() => updateCantidad(item.id, item.cantidad - 1)}>-</button>
                      <span>{item.cantidad}</span>
                      <button onClick={() => updateCantidad(item.id, item.cantidad + 1)}>+</button>
                    </div>
                    <button className="remove" onClick={() => removeFromCarrito(item.id)}>🗑️</button>
                  </CarritoItem>
                ))
              ) : (
                <CarritoVacio>
                  <div className="icon">🛒</div>
                  <h4>Tu carrito está vacío</h4>
                  <p>Agrega productos para continuar</p>
                </CarritoVacio>
              )}
            </CarritoItems>

            {carrito.length > 0 && (
              <CarritoFooter>
                <div className="subtotal">
                  <span>Subtotal:</span>
                  <span>${valorCarrito.toLocaleString('es-CO')}</span>
                </div>
                <button onClick={handleEnviarPedido}>
                  Enviar Pedido al Negocio
                </button>
              </CarritoFooter>
            )}
          </CarritoPanel>
        </ModalCarrito>
      )}
    </Container>
  )
}

export default ClienteProductos