import { useState, useEffect } from 'react'
import { toast } from 'react-toastify'
import styled from 'styled-components'

const STORAGE_KEY = 'turnoflow_cobrar'
const ITEMS_PER_PAGE = 5

// ── ICONOS POR CATEGORÍA ──
const CATEGORY_ICONS = {
  'Peluquería': '✂️',
  'Cortes': '✂️',
  'Coloración': '🎨',
  'Estética': '🧴',
  'Tratamientos': '🧴',
  'Maquillaje': '💄',
  'Uñas': '💅',
  'Cejas y Pestañas': '👁️',
  'Cuidado Capilar': '🧴',
  'Cuidado Corporal': '🧴',
  'Cuidado Facial': '🧴',
  'Peinado': '💇',
  'Paquetes': '🎁',
  'Productos': '🛍️',
  'Otros': '📌'
}

/**
 * Carga servicios desde turnoflow_servicios (o usa defaults)
 */
const loadServices = () => {
  try {
    const saved = localStorage.getItem('turnoflow_servicios')
    if (saved) {
      const parsed = JSON.parse(saved)
      // Filtrar solo los que tienen precio y están activos
      return parsed
        .filter(s => (s.price || s.unitPrice) && s.active !== false)
        .map(s => ({
          id: `sv_${s.id}`,
          name: s.name,
          category: s.category || 'General',
          price: s.price || s.unitPrice || 0,
          popular: s.price > 50000,
          from: 'servicios'
        }))
    }
  } catch { /* ignorar */ }
  return getDefaultServices()
}

const getDefaultServices = () => [
  { id: 'sv_1', name: 'Corte de Cabello Dama', category: 'Cortes', price: 45000, popular: true, from: 'servicios' },
  { id: 'sv_2', name: 'Corte de Cabello Caballero', category: 'Cortes', price: 25000, popular: true, from: 'servicios' },
  { id: 'sv_3', name: 'Corte Infantil', category: 'Cortes', price: 18000, from: 'servicios' },
  { id: 'sv_4', name: 'Corte con Degradado', category: 'Cortes', price: 35000, from: 'servicios' },
  { id: 'sv_5', name: 'Arreglo de Barba', category: 'Cortes', price: 12000, from: 'servicios' },
  { id: 'sv_6', name: 'Tinte Completo', category: 'Coloración', price: 85000, popular: true, from: 'servicios' },
  { id: 'sv_7', name: 'Mechas/Reflejos', category: 'Coloración', price: 120000, popular: true, from: 'servicios' },
  { id: 'sv_8', name: 'Baño de Color', category: 'Coloración', price: 55000, from: 'servicios' },
  { id: 'sv_9', name: 'Decoloración', category: 'Coloración', price: 90000, from: 'servicios' },
  { id: 'sv_10', name: 'Retoque de Raíz', category: 'Coloración', price: 60000, from: 'servicios' },
  { id: 'sv_11', name: 'Keratina', category: 'Tratamientos', price: 150000, popular: true, from: 'servicios' },
  { id: 'sv_12', name: 'Hidratación Profunda', category: 'Tratamientos', price: 65000, from: 'servicios' },
  { id: 'sv_13', name: 'Botox Capilar', category: 'Tratamientos', price: 120000, from: 'servicios' },
  { id: 'sv_14', name: 'Maquillaje Social', category: 'Maquillaje', price: 80000, popular: true, from: 'servicios' },
  { id: 'sv_15', name: 'Maquillaje Novia', category: 'Maquillaje', price: 250000, from: 'servicios' },
  { id: 'sv_16', name: 'Arreglo de Uñas', category: 'Uñas', price: 35000, popular: true, from: 'servicios' },
  { id: 'sv_17', name: 'Uñas Acrílicas', category: 'Uñas', price: 80000, from: 'servicios' },
  { id: 'sv_18', name: 'Pedicure', category: 'Uñas', price: 40000, from: 'servicios' },
  { id: 'sv_19', name: 'Diseño de Cejas', category: 'Cejas y Pestañas', price: 15000, popular: true, from: 'servicios' },
  { id: 'sv_20', name: 'Pack Corte + Tinte', category: 'Paquetes', price: 110000, popular: true, from: 'servicios' }
]

/**
 * Carga productos desde turnoflow_inventario
 */
const loadProducts = () => {
  try {
    const saved = localStorage.getItem('turnoflow_inventario')
    if (saved) {
      return JSON.parse(saved)
        .filter(p => p.stock > 0 && p.unitPrice > 0)
        .map(p => ({
          id: `inv_${p.id}`,
          name: p.name,
          category: p.category || 'Productos',
          price: p.unitPrice || 0,
          popular: false,
          stock: p.stock,
          from: 'inventario'
        }))
    }
  } catch { /* ignorar */ }
  return []
}

/**
 * Carga clientes desde turnoflow_clientes
 */
const loadClients = () => {
  try {
    const saved = localStorage.getItem('turnoflow_clientes')
    if (saved) return JSON.parse(saved)
  } catch { /* ignorar */ }
  return []
}

// === STYLED COMPONENTS ===
const CobrarContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #f0f4f8 0%, #d9e2ec 100%);
  padding: 20px;
`

const CobrarCard = styled.div`
  background: white;
  border-radius: 20px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  max-width: 1600px;
  margin: 0 auto;
`

const Header = styled.div`
  background: linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%);
  color: white;
  padding: 20px 28px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 12px;

  .header-left {
    display: flex;
    align-items: center;
    gap: 16px;

    .header-icon {
      width: 48px;
      height: 48px;
      background: rgba(255,255,255,0.2);
      border-radius: 14px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 24px;
    }

    h1 {
      margin: 0;
      font-size: 24px;
      font-weight: 700;
    }

    p {
      margin: 2px 0 0 0;
      opacity: 0.85;
      font-size: 14px;
    }
  }

  .header-right {
    display: flex;
    align-items: center;
    gap: 16px;

    .date-display {
      background: rgba(255,255,255,0.15);
      padding: 8px 16px;
      border-radius: 10px;
      font-size: 14px;
      font-weight: 500;
    }
  }
`

const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 400px;
  gap: 0;

  @media (max-width: 1100px) {
    grid-template-columns: 1fr;
  }
`

// ── PANEL IZQUIERDO: SERVICIOS ──
const LeftPanel = styled.div`
  padding: 24px;
  border-right: 1px solid #f0f0f0;
  min-height: 600px;

  @media (max-width: 1100px) {
    border-right: none;
    border-bottom: 1px solid #f0f0f0;
  }
`

const SearchBar = styled.div`
  position: relative;
  margin-bottom: 20px;

  input {
    width: 100%;
    padding: 14px 16px 14px 48px;
    border: 2px solid #e5e7eb;
    border-radius: 14px;
    font-size: 16px;
    background: #f8fafc;
    transition: all 0.3s ease;
    box-sizing: border-box;

    &:focus {
      outline: none;
      border-color: var(--primary-color);
      background: white;
      box-shadow: 0 0 0 4px rgba(var(--primary-rgb), 0.08);
    }
  }

  .search-icon {
    position: absolute;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);
    font-size: 18px;
    color: #9ca3af;
  }
`

const CategoryTabs = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 20px;
  overflow-x: auto;
  padding-bottom: 4px;

  &::-webkit-scrollbar { height: 4px; }
  &::-webkit-scrollbar-thumb { background: #d1d5db; border-radius: 4px; }
`

const CategoryTab = styled.button`
  padding: 10px 18px;
  border: 2px solid ${props => props.$active ? 'var(--primary-color)' : '#e5e7eb'};
  border-radius: 12px;
  background: ${props => props.$active ? 'rgba(var(--primary-rgb), 0.08)' : 'white'};
  color: ${props => props.$active ? 'var(--primary-color)' : '#6b7280'};
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  white-space: nowrap;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  gap: 6px;

  &:hover {
    border-color: var(--primary-color);
    color: var(--primary-color);
  }
`

const ItemsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  gap: 12px;

  @media (max-width: 600px) {
    grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
  }
`

const ItemCard = styled.button`
  background: ${props => props.$inCart ? 'rgba(var(--primary-rgb), 0.06)' : 'white'};
  border: 2px solid ${props => props.$inCart ? 'var(--primary-color)' : '#f0f0f0'};
  border-radius: 14px;
  padding: 16px 12px;
  text-align: center;
  cursor: pointer;
  transition: all 0.25s ease;
  position: relative;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
    border-color: var(--primary-color);
  }

  .item-icon {
    font-size: 28px;
    margin-bottom: 8px;
  }

  .item-name {
    font-size: 13px;
    font-weight: 600;
    color: #1f2937;
    margin-bottom: 4px;
    line-height: 1.3;
  }

  .item-price {
    font-size: 16px;
    font-weight: 800;
    color: var(--primary-color);
  }

  .popular-badge {
    position: absolute;
    top: -6px;
    right: -6px;
    background: linear-gradient(135deg, #f59e0b, #ef4444);
    color: white;
    font-size: 10px;
    font-weight: 700;
    padding: 2px 8px;
    border-radius: 20px;
    box-shadow: 0 2px 8px rgba(239, 68, 68, 0.3);
  }

  .in-cart-badge {
    position: absolute;
    top: -6px;
    left: -6px;
    background: var(--primary-color);
    color: white;
    width: 22px;
    height: 22px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 11px;
    font-weight: 700;
    box-shadow: 0 2px 8px rgba(var(--primary-rgb), 0.3);
  }
`

// ── PANEL DERECHO: CARRITO ──
const RightPanel = styled.div`
  padding: 24px;
  display: flex;
  flex-direction: column;
  background: #fafbfc;
  min-height: 600px;
`

const CartHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;

  h3 {
    margin: 0;
    font-size: 18px;
    color: #1f2937;
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .clear-btn {
    background: none;
    border: none;
    color: #ef4444;
    font-size: 13px;
    font-weight: 600;
    cursor: pointer;
    padding: 6px 12px;
    border-radius: 8px;
    transition: all 0.2s;

    &:hover {
      background: #fef2f2;
    }
  }
`

const CartItems = styled.div`
  flex: 1;
  overflow-y: auto;
  max-height: 400px;
  display: flex;
  flex-direction: column;
  gap: 8px;

  &::-webkit-scrollbar { width: 4px; }
  &::-webkit-scrollbar-thumb { background: #d1d5db; border-radius: 4px; }
`

const CartItem = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 14px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
  transition: all 0.2s;

  &:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  }

  .item-icon {
    font-size: 24px;
    width: 40px;
    text-align: center;
  }

  .item-details {
    flex: 1;
    min-width: 0;

    .item-name {
      font-size: 14px;
      font-weight: 600;
      color: #1f2937;
      margin-bottom: 2px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .item-price {
      font-size: 13px;
      color: var(--primary-color);
      font-weight: 700;
    }
  }

  .qty-controls {
    display: flex;
    align-items: center;
    gap: 6px;

    button {
      width: 28px;
      height: 28px;
      border-radius: 8px;
      border: 1px solid #e5e7eb;
      background: white;
      cursor: pointer;
      font-size: 14px;
      font-weight: 700;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.2s;
      color: #374151;

      &:hover {
        background: var(--primary-color);
        color: white;
        border-color: var(--primary-color);
      }
    }

    span {
      font-size: 14px;
      font-weight: 700;
      color: #374151;
      min-width: 24px;
      text-align: center;
    }
  }

  .item-subtotal {
    font-size: 15px;
    font-weight: 800;
    color: #1f2937;
    min-width: 70px;
    text-align: right;
  }

  .remove-btn {
    background: none;
    border: none;
    color: #d1d5db;
    cursor: pointer;
    font-size: 16px;
    padding: 4px;
    transition: color 0.2s;

    &:hover {
      color: #ef4444;
    }
  }
`

const EmptyCart = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #9ca3af;
  padding: 40px;

  .empty-icon { font-size: 64px; margin-bottom: 16px; opacity: 0.5; }
  h4 { margin: 0 0 8px 0; color: #6b7280; font-size: 16px; }
  p { margin: 0; font-size: 13px; text-align: center; }
`

// ── RESUMEN DE COBRO ──
const CartSummary = styled.div`
  margin-top: 16px;
  padding: 20px;
  background: white;
  border-radius: 14px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.05);
`

const SummaryRow = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  color: #6b7280;
  margin-bottom: 8px;

  &.total {
    font-size: 20px;
    font-weight: 800;
    color: #1f2937;
    border-top: 2px solid #f0f0f0;
    padding-top: 12px;
    margin-top: 8px;
    margin-bottom: 0;
  }

  &.discount {
    color: #10b981;
  }
`

const DiscountSection = styled.div`
  display: flex;
  gap: 8px;
  margin: 12px 0;

  input {
    flex: 1;
    padding: 8px 12px;
    border: 2px solid #e5e7eb;
    border-radius: 8px;
    font-size: 14px;

    &:focus {
      outline: none;
      border-color: var(--primary-color);
    }
  }

  button {
    padding: 8px 16px;
    background: #f0f0f0;
    border: none;
    border-radius: 8px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s;

    &:hover {
      background: var(--primary-color);
      color: white;
    }
  }
`

const PaymentSection = styled.div`
  margin-top: 16px;
`

const PaymentMethods = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
  gap: 8px;
  margin-bottom: 14px;
`

const PaymentMethod = styled.button`
  padding: 10px 6px;
  border: 2px solid ${props => props.$active ? 'var(--primary-color)' : '#e5e7eb'};
  border-radius: 10px;
  background: ${props => props.$active ? 'rgba(var(--primary-rgb), 0.06)' : 'white'};
  color: ${props => props.$active ? 'var(--primary-color)' : '#6b7280'};
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  text-align: center;
  line-height: 1.3;

  .pay-icon { font-size: 20px; display: block; margin-bottom: 2px; }

  &:hover {
    border-color: var(--primary-color);
    color: var(--primary-color);
  }
`

const PayButton = styled.button`
  width: 100%;
  padding: 16px;
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  color: white;
  border: none;
  border-radius: 14px;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(var(--primary-rgb), 0.3);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none;
  }

  .pay-amount {
    background: rgba(255,255,255,0.2);
    padding: 2px 12px;
    border-radius: 20px;
  }
`

const QuickAmounts = styled.div`
  display: flex;
  gap: 6px;
  margin-bottom: 12px;

  button {
    flex: 1;
    padding: 8px;
    border: 1px solid #e5e7eb;
    border-radius: 8px;
    background: white;
    font-size: 13px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s;
    color: #6b7280;

    &:hover {
      border-color: var(--primary-color);
      color: var(--primary-color);
    }
  }
`

// ── MODAL DE RECIBO ──
const ModalOverlay = styled.div`
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(0,0,0,0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  animation: fadeIn 0.2s ease;

  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
`

const SearchModal = styled.div`
  background: white;
  border-radius: 20px;
  padding: 28px;
  max-width: 480px;
  width: 90%;
  box-shadow: 0 25px 50px rgba(0,0,0,0.15);
  animation: slideUp 0.3s ease;

  @keyframes slideUp {
    from { transform: translateY(30px); opacity: 0; }
    to { transform: translateY(0); opacity: 1; }
  }

  .modal-title {
    font-size: 18px;
    font-weight: 700;
    color: #1f2937;
    margin-bottom: 16px;
  }

  .search-input {
    width: 100%;
    padding: 12px 16px;
    border: 2px solid #e5e7eb;
    border-radius: 10px;
    font-size: 15px;
    margin-bottom: 16px;
    box-sizing: border-box;

    &:focus {
      outline: none;
      border-color: var(--primary-color);
    }
  }

  .client-option {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 12px 14px;
    border-radius: 10px;
    cursor: pointer;
    transition: all 0.2s;
    border: 1px solid transparent;

    &:hover {
      background: rgba(var(--primary-rgb), 0.06);
      border-color: var(--primary-color);
    }

    .avatar {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background: var(--primary-color);
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-weight: 700;
      font-size: 16px;
      flex-shrink: 0;
    }

    .info {
      flex: 1;
      .name { font-size: 15px; font-weight: 600; color: #1f2937; }
      .detail { font-size: 13px; color: #6b7280; }
    }
  }

  .no-results {
    text-align: center;
    padding: 30px;
    color: #9ca3af;
    font-size: 14px;
  }
`

const ReceiptModal = styled.div`
  background: white;
  border-radius: 20px;
  padding: 32px;
  max-width: 420px;
  width: 90%;
  box-shadow: 0 25px 50px rgba(0,0,0,0.15);
  animation: slideUp 0.3s ease;

  @keyframes slideUp {
    from { transform: translateY(30px); opacity: 0; }
    to { transform: translateY(0); opacity: 1; }
  }

  .receipt-header {
    text-align: center;
    margin-bottom: 20px;

    .success-icon {
      font-size: 56px;
      margin-bottom: 12px;
    }

    h2 { margin: 0; color: #1f2937; font-size: 22px; }
    p { margin: 4px 0 0; color: #6b7280; font-size: 14px; }
  }

  .receipt-items {
    margin-bottom: 16px;

    .receipt-item {
      display: flex;
      justify-content: space-between;
      padding: 6px 0;
      font-size: 14px;
      color: #374151;

      .receipt-item-name { flex: 1; }
      .receipt-item-qty { color: #9ca3af; margin: 0 12px; }
      .receipt-item-price { font-weight: 600; }
    }
  }

  .receipt-total {
    display: flex;
    justify-content: space-between;
    padding: 12px 0;
    border-top: 2px solid #f0f0f0;
    font-size: 18px;
    font-weight: 800;
    color: #1f2937;
    margin-bottom: 8px;
  }

  .receipt-meta {
    font-size: 12px;
    color: #9ca3af;
    text-align: center;
    margin-bottom: 20px;
  }

  .receipt-actions {
    display: flex;
    gap: 12px;

    button {
      flex: 1;
      padding: 14px;
      border-radius: 12px;
      font-size: 14px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.2s;
      border: none;
    }

    .btn-primary {
      background: var(--primary-color);
      color: white;
      &:hover { background: var(--secondary-color); }
    }

    .btn-secondary {
      background: #f3f4f6;
      color: #374151;
      &:hover { background: #e5e7eb; }
    }
  }
`

// ── HELPERS ──
const formatCurrency = (value) =>
  new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', minimumFractionDigits: 0 }).format(value)

const formatDate = (date) =>
  date.toLocaleDateString('es-CO', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })

const formatTime = (date) =>
  date.toLocaleTimeString('es-CO', { hour: '2-digit', minute: '2-digit' })

// ── COMPONENTE PRINCIPAL ──
const Cobrar = () => {
  const [search, setSearch] = useState('')
  const [activeCategory, setActiveCategory] = useState('Todas')
  const [cart, setCart] = useState([])
  const [paymentMethod, setPaymentMethod] = useState('efectivo')
  const [discount, setDiscount] = useState(0)
  const [discountInput, setDiscountInput] = useState('')
  const [showReceipt, setShowReceipt] = useState(false)
  const [lastPayment, setLastPayment] = useState(null)
  const [cashReceived, setCashReceived] = useState('')
  const [selectedClient, setSelectedClient] = useState(null)
  const [showClientSearch, setShowClientSearch] = useState(false)
  const [clientSearch, setClientSearch] = useState('')
  const [cartPage, setCartPage] = useState(1)

  // Items combinados: servicios + inventario
  const [items, setItems] = useState([])
  const [dataReady, setDataReady] = useState(false)

  useEffect(() => {
    // Limpiar datos viejos del carrito que pudieron quedar con IDs numéricos
    try {
      const oldCart = localStorage.getItem(STORAGE_KEY)
      if (oldCart) {
        const parsed = JSON.parse(oldCart)
        // Si algún item tiene id numérico, limpiar carrito
        if (parsed.some(i => typeof i.id === 'number')) {
          localStorage.removeItem(STORAGE_KEY)
        }
      }
    } catch { /* ignorar */ }

    const services = loadServices()
    const products = loadProducts()
    const allItems = [...services, ...products]
    setItems(allItems)
    setDataReady(true)
  }, [])

  // Cargar carrito guardado
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY)
      if (saved) setCart(JSON.parse(saved))
    } catch { /* ignorar */ }
  }, [])

  // Guardar carrito
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(cart))
  }, [cart])

  // Categorías únicas
  const categories = ['Todas', ...new Set(items.map(i => i.category))]
  const categoryItems = activeCategory === 'Todas'
    ? items
    : items.filter(i => i.category === activeCategory)

  const searchFiltered = categoryItems.filter(item => {
    const matchSearch = item.name.toLowerCase().includes(search.toLowerCase()) ||
                        item.category.toLowerCase().includes(search.toLowerCase())
    return matchSearch
  })

  // Items en carrito con cantidades
  const cartItems = cart.map(cartItem => {
    const original = items.find(i => i.id === cartItem.id)
    return original ? { ...original, qty: cartItem.qty } : { id: cartItem.id, name: 'Desconocido', price: 0, qty: cartItem.qty }
  })

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.qty, 0)
  const discountAmount = discount > 0 ? Math.round(subtotal * (discount / 100)) : 0
  const total = subtotal - discountAmount

  // Paginaci��n del carrito
  const cartTotalPages = Math.max(1, Math.ceil(cartItems.length / ITEMS_PER_PAGE))
  const safeCartPage = Math.min(cartPage, cartTotalPages)
  const paginatedCartItems = cartItems.slice((safeCartPage - 1) * ITEMS_PER_PAGE, safeCartPage * ITEMS_PER_PAGE)

  useEffect(() => { setCartPage(1) }, [cart.length])

  const addToCart = (item) => {
    setCart(prev => {
      const existing = prev.find(i => i.id === item.id)
      if (existing) {
        return prev.map(i => i.id === item.id ? { ...i, qty: i.qty + 1 } : i)
      }
      return [...prev, { id: item.id, qty: 1 }]
    })
  }

  const updateQty = (itemId, delta) => {
    setCart(prev =>
      prev.map(i => {
        if (i.id !== itemId) return i
        const newQty = Math.max(0, i.qty + delta)
        return { ...i, qty: newQty }
      }).filter(i => i.qty > 0)
    )
  }

  const removeItem = (itemId) => {
    setCart(prev => prev.filter(i => i.id !== itemId))
  }

  const clearCart = () => {
    if (cart.length === 0) return
    if (!window.confirm('¿Limpiar todo el carrito?')) return
    setCart([])
    setDiscount(0)
    setDiscountInput('')
    setCashReceived('')
    setSelectedClient(null)
    setCartPage(1)
    toast.info('Carrito limpiado')
  }

  const applyDiscount = () => {
    const val = parseFloat(discountInput)
    if (isNaN(val) || val < 0) { toast.error('Descuento inválido'); return }
    if (val > 100) { toast.error('El descuento no puede superar el 100%'); return }
    setDiscount(val)
    toast.success(`Descuento del ${val}% aplicado`)
  }

  const quickDiscount = (percent) => {
    setDiscount(percent)
    setDiscountInput(String(percent))
  }

  const handlePay = () => {
    if (cart.length === 0) { toast.error('Agrega productos al carrito'); return }

    const payment = {
      id: Date.now(),
      date: new Date(),
      client: selectedClient?.name || 'Cliente mostrador',
      items: cartItems.filter(i => i.price > 0),
      subtotal,
      discount,
      discountAmount,
      total,
      method: paymentMethod,
      cashReceived: paymentMethod === 'efectivo' ? parseFloat(cashReceived) || total : total,
      change: paymentMethod === 'efectivo' ? (parseFloat(cashReceived) || total) - total : 0
    }

    setLastPayment(payment)
    setShowReceipt(true)
  }

  const finishSale = () => {
    setCart([])
    setDiscount(0)
    setDiscountInput('')
    setCashReceived('')
    setShowReceipt(false)
    toast.success('Venta completada ✅')
  }

  const getCategoryIcon = (cat) => CATEGORY_ICONS[cat] || '📌'
  const getItemIcon = (item) => getCategoryIcon(item.category)

  if (!dataReady) {
    return (
      <CobrarContainer>
        <CobrarCard style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 60 }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: 48, marginBottom: 16 }}>⏳</div>
            <div style={{ color: '#6b7280', fontSize: 16 }}>Cargando...</div>
          </div>
        </CobrarCard>
      </CobrarContainer>
    )
  }

  return (
    <CobrarContainer>
      <CobrarCard>
        <Header>
          <div className="header-left">
            <div className="header-icon">💳</div>
            <div>
              <h1>Cobrar</h1>
              <p>Punto de venta — Selecciona los servicios y productos</p>
            </div>
          </div>
          <div className="header-right">
            <div className="date-display">📅 {formatDate(new Date())}</div>
          </div>
        </Header>

        <Content>
          {/* ── PANEL IZQUIERDO ── */}
          <LeftPanel>
            <SearchBar>
              <span className="search-icon">🔍</span>
              <input
                type="text"
                placeholder="Buscar servicio o producto..."
                value={search}
                onChange={e => { setSearch(e.target.value); setActiveCategory('Todas') }}
              />
            </SearchBar>

            <CategoryTabs>
              {categories.map(cat => (
                <CategoryTab
                  key={cat}
                  $active={activeCategory === cat}
                  onClick={() => setActiveCategory(cat)}
                >
                  {getCategoryIcon(cat)} {cat}
                </CategoryTab>
              ))}
            </CategoryTabs>

            <ItemsGrid>
              {searchFiltered.map(item => {
                const inCart = cart.find(i => i.id === item.id)
                return (
                  <ItemCard
                    key={item.id}
                    $inCart={!!inCart}
                    onClick={() => addToCart(item)}
                  >
                    <div className="item-icon">{getItemIcon(item)}</div>
                    <div className="item-name">{item.name}</div>
                    <div className="item-price">{formatCurrency(item.price)}</div>
                    {item.popular && <div className="popular-badge">🔥 Popular</div>}
                    {item.from === 'inventario' && <div className="popular-badge" style={{background: 'linear-gradient(135deg, #10b981, #059669)', right: 'auto', left: -6}}>📦</div>}
                    {inCart && <div className="in-cart-badge">{inCart.qty}</div>}
                  </ItemCard>
                )
              })}
              {searchFiltered.length === 0 && (
                <div style={{ gridColumn: '1/-1', textAlign: 'center', padding: 40, color: '#9ca3af' }}>
                  🧐 No se encontraron servicios
                </div>
              )}
            </ItemsGrid>

            <div style={{ textAlign: 'center', marginTop: 8, fontSize: 12, color: '#9ca3af' }}>
              {searchFiltered.length} items encontrados
            </div>
          </LeftPanel>

          {/* ── PANEL DERECHO: CARRITO ── */}
          <RightPanel>
            <CartHeader>
              <h3>🛒 Carrito {cart.length > 0 && <span style={{fontSize: 13, color: '#9ca3af', fontWeight: 400}}>({cart.reduce((s,i) => s + i.qty, 0)} items)</span>}</h3>
              {cart.length > 0 && <button className="clear-btn" onClick={clearCart}>✕ Limpiar</button>}
            </CartHeader>

            {cart.length === 0 ? (
              <EmptyCart>
                <div className="empty-icon">🛍️</div>
                <h4>Carrito vacío</h4>
                <p>Selecciona servicios o productos del panel izquierdo para comenzar</p>
              </EmptyCart>
            ) : (
              <>
                <CartItems>
                  {paginatedCartItems.map(item => (
                    <CartItem key={item.id}>
                      <div className="item-icon">{getItemIcon(item)}</div>
                      <div className="item-details">
                        <div className="item-name">{item.name}</div>
                        <div className="item-price">{formatCurrency(item.price)}</div>
                      </div>
                      <div className="qty-controls">
                        <button onClick={() => updateQty(item.id, -1)}>−</button>
                        <span>{item.qty}</span>
                        <button onClick={() => updateQty(item.id, 1)}>+</button>
                      </div>
                      <div className="item-subtotal">{formatCurrency(item.price * item.qty)}</div>
                      <button className="remove-btn" onClick={() => removeItem(item.id)}>✕</button>
                    </CartItem>
                  ))}
                </CartItems>

                {/* ── PAGINACIÓN DEL CARRITO ── */}
                {cartTotalPages > 1 && (
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 6,
                    padding: '8px 0',
                    marginBottom: 4
                  }}>
                    <button
                      onClick={() => setCartPage(p => Math.max(1, p - 1))}
                      disabled={safeCartPage <= 1}
                      style={{
                        padding: '6px 12px', border: '1px solid #e5e7eb', borderRadius: 6,
                        background: safeCartPage <= 1 ? '#f9fafb' : 'white',
                        color: safeCartPage <= 1 ? '#d1d5db' : '#374151',
                        cursor: safeCartPage <= 1 ? 'not-allowed' : 'pointer',
                        fontWeight: 600, fontSize: 12
                      }}
                    >◀</button>
                    {Array.from({ length: cartTotalPages }, (_, i) => i + 1).map(p => (
                      <button
                        key={p}
                        onClick={() => setCartPage(p)}
                        style={{
                          width: 28, height: 28, borderRadius: 6,
                          border: p === safeCartPage ? '2px solid var(--primary-color)' : '1px solid #e5e7eb',
                          background: p === safeCartPage ? 'rgba(var(--primary-rgb), 0.08)' : 'white',
                          color: p === safeCartPage ? 'var(--primary-color)' : '#6b7280',
                          fontWeight: p === safeCartPage ? 700 : 500,
                          cursor: 'pointer', fontSize: 12
                        }}
                      >{p}</button>
                    ))}
                    <button
                      onClick={() => setCartPage(p => Math.min(cartTotalPages, p + 1))}
                      disabled={safeCartPage >= cartTotalPages}
                      style={{
                        padding: '6px 12px', border: '1px solid #e5e7eb', borderRadius: 6,
                        background: safeCartPage >= cartTotalPages ? '#f9fafb' : 'white',
                        color: safeCartPage >= cartTotalPages ? '#d1d5db' : '#374151',
                        cursor: safeCartPage >= cartTotalPages ? 'not-allowed' : 'pointer',
                        fontWeight: 600, fontSize: 12
                      }}
                    >▶</button>
                  </div>
                )}
                {cartItems.length > ITEMS_PER_PAGE && (
                  <div style={{ textAlign: 'center', fontSize: 11, color: '#9ca3af', marginBottom: 8 }}>
                    {cartItems.length} items · Página {safeCartPage} de {cartTotalPages}
                  </div>
                )}

                <CartSummary>
                  <SummaryRow>
                    <span>Subtotal</span>
                    <span>{formatCurrency(subtotal)}</span>
                  </SummaryRow>

                  <DiscountSection>
                    <input
                      type="number"
                      placeholder="% descuento"
                      value={discountInput}
                      onChange={e => setDiscountInput(e.target.value)}
                      min="0"
                      max="100"
                    />
                    <button onClick={applyDiscount}>Aplicar</button>
                  </DiscountSection>

                  <QuickAmounts>
                    {[5, 10, 15, 20].map(pct => (
                      <button key={pct} onClick={() => quickDiscount(pct)}>{pct}%</button>
                    ))}
                    {discount > 0 && <button onClick={() => { setDiscount(0); setDiscountInput('') }} style={{color: '#ef4444'}}>✕</button>}
                  </QuickAmounts>

                  {discount > 0 && (
                    <SummaryRow className="discount">
                      <span>Descuento ({discount}%)</span>
                      <span>-{formatCurrency(discountAmount)}</span>
                    </SummaryRow>
                  )}

                  <SummaryRow className="total">
                    <span>Total a pagar</span>
                    <span>{formatCurrency(total)}</span>
                  </SummaryRow>
                </CartSummary>

                <PaymentSection>
                  <PaymentMethods>
                    {[
                      { id: 'efectivo', label: 'Efectivo', icon: '💵' },
                      { id: 'tarjeta', label: 'Tarjeta', icon: '💳' },
                      { id: 'transferencia', label: 'Transferencia', icon: '🏦' },
                      { id: 'nequi', label: 'Nequi', icon: '📱' },
                      { id: 'daviplata', label: 'Daviplata', icon: '📲' },
                    ].map(m => (
                      <PaymentMethod
                        key={m.id}
                        $active={paymentMethod === m.id}
                        onClick={() => setPaymentMethod(m.id)}
                      >
                        <span className="pay-icon">{m.icon}</span>
                        {m.label}
                      </PaymentMethod>
                    ))}
                  </PaymentMethods>

                  {paymentMethod === 'efectivo' && (
                    <QuickAmounts>
                      {[50000, 100000, 200000, 500000].map(amt => (
                        <button key={amt} onClick={() => setCashReceived(String(amt))}>
                          {formatCurrency(amt)}
                        </button>
                      ))}
                      <input
                        type="number"
                        placeholder="otro valor"
                        value={cashReceived}
                        onChange={e => setCashReceived(e.target.value)}
                        style={{ flex: 1, padding: '8px', border: '1px solid #e5e7eb', borderRadius: 8, fontSize: 13 }}
                      />
                    </QuickAmounts>
                  )}

                  <PayButton onClick={handlePay} disabled={cart.length === 0}>
                    💳 Cobrar <span className="pay-amount">{formatCurrency(total)}</span>
                  </PayButton>

                  {paymentMethod === 'efectivo' && cashReceived && parseFloat(cashReceived) >= total && (
                    <div style={{ textAlign: 'center', marginTop: 8, fontSize: 13, color: '#10b981', fontWeight: 600 }}>
                      Cambio: {formatCurrency(parseFloat(cashReceived) - total)}
                    </div>
                  )}
                </PaymentSection>
              </>
            )}
          </RightPanel>
        </Content>
      </CobrarCard>

      {/* ── MODAL DE BÚSQUEDA DE CLIENTE ── */}
      {showClientSearch && (
        <ModalOverlay onClick={() => setShowClientSearch(false)}>
          <SearchModal onClick={e => e.stopPropagation()}>
            <div className="modal-title">👤 Seleccionar Cliente</div>
            <input
              className="search-input"
              type="text"
              placeholder="Buscar por nombre, teléfono o email..."
              value={clientSearch}
              onChange={e => setClientSearch(e.target.value)}
              autoFocus
            />
            {(() => {
              const clients = loadClients()
              const filtered = clientSearch
                ? clients.filter(c =>
                    (c.name || '').toLowerCase().includes(clientSearch.toLowerCase()) ||
                    (c.phone || '').includes(clientSearch) ||
                    (c.email || '').toLowerCase().includes(clientSearch.toLowerCase())
                  )
                : clients
              if (filtered.length === 0) {
                return <div className="no-results">😕 No se encontraron clientes</div>
              }
              return filtered.map(c => (
                <div
                  key={c.id}
                  className="client-option"
                  onClick={() => {
                    setSelectedClient(c)
                    setShowClientSearch(false)
                    setClientSearch('')
                  }}
                >
                  <div className="avatar">{c.name?.charAt(0) || '?'}</div>
                  <div className="info">
                    <div className="name">{c.name}</div>
                    <div className="detail">{c.phone || c.email || 'Sin contacto'}</div>
                  </div>
                  <span style={{color: 'var(--primary-color)', fontSize: 20}}>➕</span>
                </div>
              ))
            })()}
          </SearchModal>
        </ModalOverlay>
      )}

      {/* ── MODAL DE RECIBO ── */}
      {showReceipt && lastPayment && (
        <ModalOverlay onClick={() => setShowReceipt(false)}>
          <ReceiptModal onClick={e => e.stopPropagation()}>
            <div className="receipt-header">
              <div className="success-icon">✅</div>
              <h2>¡Pago exitoso!</h2>
              <p>Recibo #{lastPayment.id.toString().slice(-6)}</p>
            </div>

            <div className="receipt-client" style={{background: '#f0fdf4', borderRadius: 10, padding: '10px 14px', marginBottom: 16, display: 'flex', alignItems: 'center', gap: 10}}>
              <span style={{fontSize: 20}}>👤</span>
              <span style={{fontSize: 14, fontWeight: 600, color: '#065f46'}}>{lastPayment.client}</span>
            </div>

            <div className="receipt-items">
              {lastPayment.items.map(item => (
                <div key={item.id} className="receipt-item">
                  <span className="receipt-item-name">{item.name}</span>
                  <span className="receipt-item-qty">×{item.qty}</span>
                  <span className="receipt-item-price">{formatCurrency(item.price * item.qty)}</span>
                </div>
              ))}
            </div>

            {lastPayment.discount > 0 && (
              <div className="receipt-item" style={{ justifyContent: 'space-between', fontSize: 13, color: '#10b981' }}>
                <span>Descuento ({lastPayment.discount}%)</span>
                <span>-{formatCurrency(lastPayment.discountAmount)}</span>
              </div>
            )}

            <div className="receipt-total">
              <span>Total</span>
              <span>{formatCurrency(lastPayment.total)}</span>
            </div>

            <div className="receipt-meta">
              <div>{formatDate(lastPayment.date)} — {formatTime(lastPayment.date)}</div>
              <div>Método: {
                { efectivo: '💵 Efectivo', tarjeta: '💳 Tarjeta', transferencia: '🏦 Transferencia', nequi: '📱 Nequi', daviplata: '📲 Daviplata' }[lastPayment.method]
              }</div>
              {lastPayment.method === 'efectivo' && lastPayment.change > 0 && (
                <div style={{ color: '#10b981', marginTop: 4 }}>Cambio: {formatCurrency(lastPayment.change)}</div>
              )}
            </div>

            <div className="receipt-actions">
              <button className="btn-primary" onClick={finishSale}>Nueva Venta</button>
              <button className="btn-secondary" onClick={() => {
                toast.info('📄 Recibo descargado (simulado)')
              }}>📄 Imprimir</button>
            </div>
          </ReceiptModal>
        </ModalOverlay>
      )}
    </CobrarContainer>
  )
}

export default Cobrar
