import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { toast } from 'react-toastify'
import styled from 'styled-components'

const InventarioContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  padding: 20px;
`

const InventarioCard = styled.div`
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

const StatsSection = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  margin-bottom: 32px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const StatCard = styled.div`
  background: ${props => props.bgColor || 'white'};
  color: ${props => props.textColor || '#374151'};
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  text-align: center;

  .stat-icon {
    font-size: 32px;
    margin-bottom: 12px;
    opacity: 0.8;
  }

  .stat-value {
    font-size: 28px;
    font-weight: 900;
    margin-bottom: 4px;
  }

  .stat-label {
    font-size: 14px;
    opacity: 0.8;
    font-weight: 600;
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

const FilterSelect = styled.select`
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

const NewProductButton = styled.button`
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

const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 24px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const ProductCard = styled.div`
  background: white;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  border: 2px solid ${props => {
    if (props.stock <= props.minStock) return '#fee2e2'
    if (props.stock <= props.minStock * 1.5) return '#fef3c7'
    return '#10b981'
  }};

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  }

  .product-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 16px;

    .product-icon {
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

    .product-status {
      padding: 4px 12px;
      border-radius: 20px;
      font-size: 12px;
      font-weight: 600;
      text-transform: uppercase;

      ${props => {
        if (props.stock <= props.minStock) return 'background: #fee2e2; color: #991b1b;'
        if (props.stock <= props.minStock * 1.5) return 'background: #fef3c7; color: #92400e;'
        return 'background: #d1fae5; color: #065f46;'
      }}
    }
  }

  .product-name {
    font-size: 18px;
    font-weight: 600;
    color: #1f2937;
    margin-bottom: 8px;
  }

  .product-description {
    color: #6b7280;
    font-size: 14px;
    line-height: 1.5;
    margin-bottom: 16px;
  }

  .product-details {
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

  .product-price {
    font-size: 20px;
    font-weight: 700;
    color: #10b981;
    margin-bottom: 16px;
  }

  .product-actions {
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

  &.stock {
    background: #17a2b8;
    color: white;

    &:hover {
      background: #138496;
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

const FullWidthGroup = styled(FormGroup)`
  grid-column: 1 / -1';
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

const INVENTARIO_STORAGE_KEY = 'turnoflow_inventario'

const DEFAULT_PRODUCTS = [
  { id: 1, name: 'Champú Profesional', description: 'Champú anticaída con extractos naturales', category: 'Cuidado Capilar', stock: 25, minStock: 10, unitPrice: 15000 },
  { id: 2, name: 'Acondicionador Hidratante', description: 'Acondicionador profundo que hidrata', category: 'Cuidado Capilar', stock: 8, minStock: 10, unitPrice: 18000 },
  { id: 3, name: 'Crema para Manos', description: 'Crema hidratante con vitamina E', category: 'Cuidado Corporal', stock: 45, minStock: 15, unitPrice: 12000 },
  { id: 4, name: 'Máscara Facial', description: 'Máscara purificante con arcilla verde', category: 'Cuidado Facial', stock: 3, minStock: 8, unitPrice: 25000 },
  { id: 5, name: 'Aceite para Cutículas', description: 'Aceite nutritivo para cutículas', category: 'Uñas', stock: 12, minStock: 5, unitPrice: 8000 },
  { id: 6, name: 'Gel Fijador', description: 'Gel para peinado con fijación fuerte', category: 'Peinado', stock: 18, minStock: 12, unitPrice: 10000 }
]

const loadInventory = () => {
  try {
    const saved = localStorage.getItem(INVENTARIO_STORAGE_KEY)
    return saved ? JSON.parse(saved) : DEFAULT_PRODUCTS
  } catch { return DEFAULT_PRODUCTS }
}

const Inventario = () => {
  const [products, setProducts] = useState(loadInventory)

  const [filteredProducts, setFilteredProducts] = useState(products)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('')
  const [showNewProductModal, setShowNewProductModal] = useState(false)
  const [editingProduct, setEditingProduct] = useState(null)
  const [loading, setLoading] = useState(false)

  const schema = yup.object({
    name: yup.string().required('El nombre del producto es requerido'),
    description: yup.string().required('La descripción es requerida'),
    category: yup.string().required('La categoría es requerida'),
    stock: yup.number().min(0, 'El stock no puede ser negativo').required('El stock es requerido'),
    minStock: yup.number().min(0, 'El stock mínimo no puede ser negativo').required('El stock mínimo es requerido'),
    unitPrice: yup.number().positive('El precio debe ser mayor a 0').required('El precio unitario es requerido')
  })

  const { register, handleSubmit, reset, setValue, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  })

  useEffect(() => {
    filterProducts()
  }, [searchTerm, selectedCategory, products])

  // Persistir inventario
  useEffect(() => {
    localStorage.setItem(INVENTARIO_STORAGE_KEY, JSON.stringify(products))
  }, [products])

  const filterProducts = () => {
    let filtered = [...products]

    if (searchTerm) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }

    if (selectedCategory) {
      filtered = filtered.filter(product => product.category === selectedCategory)
    }

    setFilteredProducts(filtered)
  }

  const handleSearch = (term) => {
    setSearchTerm(term)
  }

  const handleCategoryFilter = (category) => {
    setSelectedCategory(category)
  }

  const handleNewProduct = () => {
    setEditingProduct(null)
    reset()
    setShowNewProductModal(true)
  }

  const handleEditProduct = (product) => {
    setEditingProduct(product)
    setValue('name', product.name)
    setValue('description', product.description)
    setValue('category', product.category)
    setValue('stock', product.stock)
    setValue('minStock', product.minStock)
    setValue('unitPrice', product.unitPrice)
    setShowNewProductModal(true)
  }

  const handleDeleteProduct = async (productId) => {
    if (!window.confirm('¿Está seguro de que desea eliminar este producto?')) return

    setLoading(true)
    try {
      await new Promise(resolve => setTimeout(resolve, 500))
      setProducts(prev => prev.filter(product => product.id !== productId))
      toast.success('Producto eliminado exitosamente')
    } catch (error) {
      toast.error('Error al eliminar el producto')
    } finally {
      setLoading(false)
    }
  }

  const onSubmitProduct = async (data) => {
    try {
      const productData = {
        ...data,
        lastUpdated: new Date().toISOString().split('T')[0]
      }

      if (editingProduct) {
        setProducts(prev => prev.map(product =>
          product.id === editingProduct.id
            ? { ...product, ...productData }
            : product
        ))
        toast.success('Producto actualizado exitosamente')
      } else {
        const newProduct = {
          id: products.length + 1,
          ...productData
        }
        setProducts(prev => [...prev, newProduct])
        toast.success('Producto creado exitosamente')
      }

      setShowNewProductModal(false)
      reset()
      setEditingProduct(null)
    } catch (error) {
      toast.error('Error al guardar el producto')
    }
  }

  const categories = [
    'Cuidado Capilar',
    'Cuidado Facial',
    'Cuidado Corporal',
    'Uñas',
    'Peinado',
    'Maquillaje',
    'Bienestar',
    'Otros'
  ]

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0
    }).format(amount)
  }

  const getProductIcon = (category) => {
    const icons = {
      'Cuidado Capilar': '💇',
      'Cuidado Facial': '🧴',
      'Cuidado Corporal': '🧴',
      'Uñas': '💅',
      'Peinado': '💇',
      'Maquillaje': '💄',
      'Bienestar': '🧘',
      'Otros': '📦'
    }
    return icons[category] || '📦'
  }

  const getLowStockCount = () => {
    return products.filter(product => product.stock <= product.minStock).length
  }

  const getTotalValue = () => {
    return products.reduce((total, product) => total + (product.stock * product.unitPrice), 0)
  }

  const stats = {
    totalProducts: products.length,
    lowStockProducts: getLowStockCount(),
    totalValue: getTotalValue(),
    categoriesCount: new Set(products.map(p => p.category)).size
  }

  return (
    <InventarioContainer>
      <InventarioCard>
        <Header>
          <h1>Gestión de Inventario</h1>
          <p>Control y administración de productos y existencias</p>
        </Header>

        <Content>
          <StatsSection>
            <StatCard bgColor="#d1fae5" textColor="#065f46">
              <div className="stat-icon">📦</div>
              <div className="stat-value">{stats.totalProducts}</div>
              <div className="stat-label">Total Productos</div>
            </StatCard>

            <StatCard bgColor="#fee2e2" textColor="#991b1b">
              <div className="stat-icon">⚠️</div>
              <div className="stat-value">{stats.lowStockProducts}</div>
              <div className="stat-label">Stock Bajo</div>
            </StatCard>

            <StatCard bgColor="#dbeafe" textColor="#1e40af">
              <div className="stat-icon">💰</div>
              <div className="stat-value">{formatCurrency(stats.totalValue)}</div>
              <div className="stat-label">Valor Total</div>
            </StatCard>

            <StatCard bgColor="#f3e8ff" textColor="#6b21a8">
              <div className="stat-icon">🏷️</div>
              <div className="stat-value">{stats.categoriesCount}</div>
              <div className="stat-label">Categorías</div>
            </StatCard>
          </StatsSection>

          <ControlsSection>
            <div style={{display: 'flex', gap: '16px', alignItems: 'center'}}>
              <SearchBar>
                <div className="search-icon">🔍</div>
                <input
                  type="text"
                  placeholder="Buscar productos..."
                  value={searchTerm}
                  onChange={(e) => handleSearch(e.target.value)}
                />
              </SearchBar>

              <FilterSelect
                value={selectedCategory}
                onChange={(e) => handleCategoryFilter(e.target.value)}
              >
                <option value="">Todas las categorías</option>
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </FilterSelect>
            </div>

            <NewProductButton onClick={handleNewProduct}>
              Nuevo Producto
            </NewProductButton>
          </ControlsSection>

          <ProductsGrid>
            {filteredProducts.map(product => (
              <ProductCard
                key={product.id}
                stock={product.stock}
                minStock={product.minStock}
              >
                <div className="product-header">
                  <div className="product-icon">
                    {getProductIcon(product.category)}
                  </div>
                  <div className="product-status">
                    {product.stock <= product.minStock ? 'Stock Bajo' :
                     product.stock <= product.minStock * 1.5 ? 'Stock Medio' : 'Stock Bueno'}
                  </div>
                </div>

                <div className="product-name">{product.name}</div>
                <div className="product-description">{product.description}</div>

                <div className="product-details">
                  <div className="detail-item">
                    <div className="label">Categoría</div>
                    <div className="value">{product.category}</div>
                  </div>
                  <div className="detail-item">
                    <div className="label">Stock Actual</div>
                    <div className="value">{product.stock} unidades</div>
                  </div>
                  <div className="detail-item">
                    <div className="label">Stock Mínimo</div>
                    <div className="value">{product.minStock} unidades</div>
                  </div>
                  <div className="detail-item">
                    <div className="label">Última Actualización</div>
                    <div className="value">{new Date(product.lastUpdated).toLocaleDateString('es-CO')}</div>
                  </div>
                </div>

                <div className="product-price">{formatCurrency(product.unitPrice)}</div>

                <div className="product-actions">
                  <ActionButton className="edit" onClick={() => handleEditProduct(product)}>
                    Editar
                  </ActionButton>
                  <ActionButton className="stock">
                    Gestionar Stock
                  </ActionButton>
                  <ActionButton
                    className="delete"
                    onClick={() => handleDeleteProduct(product.id)}
                    disabled={loading}
                  >
                    Eliminar
                  </ActionButton>
                </div>
              </ProductCard>
            ))}
          </ProductsGrid>

          {filteredProducts.length === 0 && (
            <div style={{textAlign: 'center', padding: '40px', color: '#6b7280'}}>
              <div style={{fontSize: '48px', marginBottom: '16px'}}>📦</div>
              <p>No se encontraron productos</p>
            </div>
          )}
        </Content>
      </InventarioCard>

      {showNewProductModal && (
        <Modal>
          <ModalContent>
            <ModalHeader>
              <h2>{editingProduct ? 'Editar Producto' : 'Nuevo Producto'}</h2>
              <button className="close" onClick={() => setShowNewProductModal(false)}>
                ×
              </button>
            </ModalHeader>

            <form onSubmit={handleSubmit(onSubmitProduct)}>
              <FormGrid>
                <FormGroup>
                  <Label>Nombre del Producto</Label>
                  <Input
                    type="text"
                    placeholder="Ej: Champú Profesional"
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
                  <Label>Stock Actual</Label>
                  <Input
                    type="number"
                    placeholder="25"
                    min="0"
                    {...register('stock')}
                  />
                  {errors.stock && <span style={{color: 'red', fontSize: '12px'}}>{errors.stock.message}</span>}
                </FormGroup>

                <FormGroup>
                  <Label>Stock Mínimo</Label>
                  <Input
                    type="number"
                    placeholder="10"
                    min="0"
                    {...register('minStock')}
                  />
                  {errors.minStock && <span style={{color: 'red', fontSize: '12px'}}>{errors.minStock.message}</span>}
                </FormGroup>

                <FormGroup>
                  <Label>Precio Unitario (COP)</Label>
                  <Input
                    type="number"
                    placeholder="15000"
                    min="0"
                    {...register('unitPrice')}
                  />
                  {errors.unitPrice && <span style={{color: 'red', fontSize: '12px'}}>{errors.unitPrice.message}</span>}
                </FormGroup>

                <FullWidthGroup>
                  <Label>Descripción</Label>
                  <TextArea
                    placeholder="Describe el producto y sus características..."
                    {...register('description')}
                  />
                  {errors.description && <span style={{color: 'red', fontSize: '12px'}}>{errors.description.message}</span>}
                </FullWidthGroup>
              </FormGrid>

              <ModalActions>
                <Button
                  type="button"
                  className="secondary"
                  onClick={() => setShowNewProductModal(false)}
                >
                  Cancelar
                </Button>
                <Button type="submit" className="primary">
                  {editingProduct ? 'Actualizar Producto' : 'Crear Producto'}
                </Button>
              </ModalActions>
            </form>
          </ModalContent>
        </Modal>
      )}
    </InventarioContainer>
  )
}

export default Inventario