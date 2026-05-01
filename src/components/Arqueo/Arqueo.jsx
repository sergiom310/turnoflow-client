import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { toast } from 'react-toastify'
import styled from 'styled-components'

const ArqueoContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  padding: 20px;
`

const ArqueoCard = styled.div`
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

const SummarySection = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  margin-bottom: 32px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const SummaryCard = styled.div`
  background: ${props => props.bgColor || 'white'};
  color: ${props => props.textColor || '#374151'};
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  text-align: center;

  .summary-icon {
    font-size: 32px;
    margin-bottom: 12px;
    opacity: 0.8;
  }

  .summary-value {
    font-size: 28px;
    font-weight: 900;
    margin-bottom: 4px;
  }

  .summary-label {
    font-size: 14px;
    opacity: 0.8;
    font-weight: 600;
  }
`

const ControlsSection = styled.div`
  display: grid;
  grid-template-columns: 1fr auto auto;
  gap: 20px;
  margin-bottom: 32px;
  align-items: end;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 16px;
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

const ControlButton = styled.button`
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

  &.success {
    background: #10b981;
    color: white;

    &:hover {
      background: #059669;
      transform: translateY(-1px);
    }
  }

  &.danger {
    background: #ef4444;
    color: white;

    &:hover {
      background: #dc2626;
      transform: translateY(-1px);
    }
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
    transform: none;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`

const TransactionsSection = styled.div`
  background: white;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  margin-bottom: 32px;
`

const TransactionsList = styled.div`
  max-height: 400px;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 3px;
  }

  &::-webkit-scrollbar-thumb {
    background: #c1c1c1;
    border-radius: 3px;

    &:hover {
      background: #a8a8a8;
    }
  }
`

const TransactionItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  background: ${props => props.type === 'income' ? '#f0fdf4' : '#fef2f2'};
  border-radius: 8px;
  margin-bottom: 12px;
  border-left: 4px solid ${props => props.type === 'income' ? '#10b981' : '#ef4444'};

  .transaction-info {
    display: flex;
    align-items: center;
    gap: 16px;

    .transaction-icon {
      width: 40px;
      height: 40px;
      border-radius: 8px;
      background: ${props => props.type === 'income' ? '#10b981' : '#ef4444'};
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 18px;
      color: white;
    }

    .transaction-details {
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

  .transaction-amount {
    text-align: right;

    .amount {
      font-size: 18px;
      font-weight: 700;
      color: ${props => props.type === 'income' ? '#059669' : '#dc2626'};
    }

    .method {
      font-size: 12px;
      color: #9ca3af;
      margin-top: 2px;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;

    .transaction-amount {
      align-self: flex-end;
    }
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

const Arqueo = () => {
  const [transactions, setTransactions] = useState([
    {
      id: 1,
      type: 'income',
      amount: 35000,
      description: 'Corte de cabello - María García',
      method: 'Efectivo',
      timestamp: '2024-01-15 09:30:00',
      user: 'Ana López'
    },
    {
      id: 2,
      type: 'income',
      amount: 80000,
      description: 'Tratamiento facial - Carlos Rodríguez',
      method: 'Tarjeta',
      timestamp: '2024-01-15 10:15:00',
      user: 'Ana López'
    },
    {
      id: 3,
      type: 'expense',
      amount: 15000,
      description: 'Compra de productos para tratamientos',
      method: 'Efectivo',
      timestamp: '2024-01-15 11:00:00',
      user: 'Ana López'
    },
    {
      id: 4,
      type: 'income',
      amount: 60000,
      description: 'Manicure + Pedicure - Laura Martínez',
      method: 'Transferencia',
      timestamp: '2024-01-15 14:30:00',
      user: 'Ana López'
    },
    {
      id: 5,
      type: 'income',
      amount: 25000,
      description: 'Tinte de cejas - Sofía Ramírez',
      method: 'Efectivo',
      timestamp: '2024-01-15 15:45:00',
      user: 'Ana López'
    },
    {
      id: 6,
      type: 'expense',
      amount: 8000,
      description: 'Pago de servicios públicos',
      method: 'Transferencia',
      timestamp: '2024-01-15 16:00:00',
      user: 'Ana López'
    }
  ])

  const [filteredTransactions, setFilteredTransactions] = useState(transactions)
  const [selectedDate, setSelectedDate] = useState('2024-01-15')
  const [selectedType, setSelectedType] = useState('')
  const [showNewTransactionModal, setShowNewTransactionModal] = useState(false)
  const [showCloseModal, setShowCloseModal] = useState(false)
  const [loading, setLoading] = useState(false)

  const schema = yup.object({
    type: yup.string().required('El tipo es requerido'),
    amount: yup.number().positive('El monto debe ser mayor a 0').required('El monto es requerido'),
    description: yup.string().required('La descripción es requerida'),
    method: yup.string().required('El método de pago es requerido')
  })

  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  })

  useEffect(() => {
    filterTransactions()
  }, [selectedDate, selectedType, transactions])

  const filterTransactions = () => {
    let filtered = [...transactions]

    if (selectedDate) {
      filtered = filtered.filter(transaction =>
        transaction.timestamp.startsWith(selectedDate)
      )
    }

    if (selectedType) {
      filtered = filtered.filter(transaction => transaction.type === selectedType)
    }

    setFilteredTransactions(filtered)
  }

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0
    }).format(amount)
  }

  const calculateTotals = () => {
    const totals = filteredTransactions.reduce((acc, transaction) => {
      if (transaction.type === 'income') {
        acc.income += transaction.amount
      } else {
        acc.expense += transaction.amount
      }
      return acc
    }, { income: 0, expense: 0 })

    totals.balance = totals.income - totals.expense
    return totals
  }

  const totals = calculateTotals()

  const onSubmitTransaction = async (data) => {
    try {
      const newTransaction = {
        id: transactions.length + 1,
        ...data,
        timestamp: new Date().toISOString().replace('T', ' ').substring(0, 19),
        user: 'Ana López' // En una implementación real, vendría del contexto de usuario
      }

      setTransactions(prev => [...prev, newTransaction])
      setShowNewTransactionModal(false)
      reset()
      toast.success('Movimiento registrado exitosamente')
    } catch (error) {
      toast.error('Error al registrar el movimiento')
    }
  }

  const handleCloseArqueo = async () => {
    setLoading(true)
    try {
      // Simular cierre de arqueo
      await new Promise(resolve => setTimeout(resolve, 2000))
      toast.success('Arqueo cerrado exitosamente')
      setShowCloseModal(false)
    } catch (error) {
      toast.error('Error al cerrar el arqueo')
    } finally {
      setLoading(false)
    }
  }

  const getMethodIcon = (method) => {
    const icons = {
      'Efectivo': '💵',
      'Tarjeta': '💳',
      'Transferencia': '🏦'
    }
    return icons[method] || '💰'
  }

  const paymentMethods = [
    'Efectivo',
    'Tarjeta',
    'Transferencia'
  ]

  return (
    <ArqueoContainer>
      <ArqueoCard>
        <Header>
          <h1>Control de Arqueo</h1>
          <p>Movimientos financieros y cierre de caja del día</p>
        </Header>

        <Content>
          <SummarySection>
            <SummaryCard bgColor="#d1fae5" textColor="#065f46">
              <div className="summary-icon">💰</div>
              <div className="summary-value">{formatCurrency(totals.income)}</div>
              <div className="summary-label">Ingresos</div>
            </SummaryCard>

            <SummaryCard bgColor="#fee2e2" textColor="#991b1b">
              <div className="summary-icon">💸</div>
              <div className="summary-value">{formatCurrency(totals.expense)}</div>
              <div className="summary-label">Egresos</div>
            </SummaryCard>

            <SummaryCard bgColor="#dbeafe" textColor="#1e40af">
              <div className="summary-icon">⚖️</div>
              <div className="summary-value">{formatCurrency(totals.balance)}</div>
              <div className="summary-label">Saldo</div>
            </SummaryCard>

            <SummaryCard bgColor="#f3e8ff" textColor="#6b21a8">
              <div className="summary-icon">📊</div>
              <div className="summary-value">{filteredTransactions.length}</div>
              <div className="summary-label">Movimientos</div>
            </SummaryCard>
          </SummarySection>

          <ControlsSection>
            <FilterGroup>
              <Label>Fecha</Label>
              <DateInput
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
              />
            </FilterGroup>

            <FilterGroup>
              <Label>Tipo</Label>
              <Select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
              >
                <option value="">Todos</option>
                <option value="income">Ingresos</option>
                <option value="expense">Egresos</option>
              </Select>
            </FilterGroup>

            <div style={{display: 'flex', gap: '12px'}}>
              <ControlButton
                className="primary"
                onClick={() => setShowNewTransactionModal(true)}
              >
                Nuevo Movimiento
              </ControlButton>
              <ControlButton
                className="success"
                onClick={() => setShowCloseModal(true)}
              >
                Cerrar Arqueo
              </ControlButton>
            </div>
          </ControlsSection>

          <TransactionsSection>
            <h3 style={{margin: '0 0 20px 0', color: '#1f2937'}}>Movimientos del Día</h3>

            <TransactionsList>
              {filteredTransactions.map(transaction => (
                <TransactionItem key={transaction.id} type={transaction.type}>
                  <div className="transaction-info">
                    <div className="transaction-icon">
                      {transaction.type === 'income' ? '📈' : '📉'}
                    </div>
                    <div className="transaction-details">
                      <h4>{transaction.description}</h4>
                      <p>
                        {new Date(transaction.timestamp).toLocaleString('es-CO')} •
                        {transaction.user}
                      </p>
                    </div>
                  </div>

                  <div className="transaction-amount">
                    <div className="amount">
                      {transaction.type === 'income' ? '+' : '-'}
                      {formatCurrency(transaction.amount)}
                    </div>
                    <div className="method">
                      {getMethodIcon(transaction.method)} {transaction.method}
                    </div>
                  </div>
                </TransactionItem>
              ))}
            </TransactionsList>

            {filteredTransactions.length === 0 && (
              <div style={{textAlign: 'center', padding: '40px', color: '#6b7280'}}>
                <div style={{fontSize: '48px', marginBottom: '16px'}}>💼</div>
                <p>No hay movimientos para la fecha seleccionada</p>
              </div>
            )}
          </TransactionsSection>
        </Content>
      </ArqueoCard>

      {showNewTransactionModal && (
        <Modal>
          <ModalContent>
            <ModalHeader>
              <h2>Nuevo Movimiento</h2>
              <button className="close" onClick={() => setShowNewTransactionModal(false)}>
                ×
              </button>
            </ModalHeader>

            <form onSubmit={handleSubmit(onSubmitTransaction)}>
              <FormGrid>
                <FormGroup>
                  <Label>Tipo de Movimiento</Label>
                  <Select {...register('type')}>
                    <option value="">Seleccionar tipo</option>
                    <option value="income">Ingreso</option>
                    <option value="expense">Egreso</option>
                  </Select>
                  {errors.type && <span style={{color: 'red', fontSize: '12px'}}>{errors.type.message}</span>}
                </FormGroup>

                <FormGroup>
                  <Label>Monto (COP)</Label>
                  <Input
                    type="number"
                    placeholder="35000"
                    {...register('amount')}
                  />
                  {errors.amount && <span style={{color: 'red', fontSize: '12px'}}>{errors.amount.message}</span>}
                </FormGroup>

                <FormGroup>
                  <Label>Método de Pago</Label>
                  <Select {...register('method')}>
                    <option value="">Seleccionar método</option>
                    {paymentMethods.map(method => (
                      <option key={method} value={method}>{method}</option>
                    ))}
                  </Select>
                  {errors.method && <span style={{color: 'red', fontSize: '12px'}}>{errors.method.message}</span>}
                </FormGroup>

                <FormGroup style={{gridColumn: '1 / -1'}}>
                  <Label>Descripción</Label>
                  <TextArea
                    placeholder="Describe el movimiento financiero..."
                    {...register('description')}
                  />
                  {errors.description && <span style={{color: 'red', fontSize: '12px'}}>{errors.description.message}</span>}
                </FormGroup>
              </FormGrid>

              <ModalActions>
                <Button
                  type="button"
                  className="secondary"
                  onClick={() => setShowNewTransactionModal(false)}
                >
                  Cancelar
                </Button>
                <Button type="submit" className="primary">
                  Registrar Movimiento
                </Button>
              </ModalActions>
            </form>
          </ModalContent>
        </Modal>
      )}

      {showCloseModal && (
        <Modal>
          <ModalContent>
            <ModalHeader>
              <h2>Cerrar Arqueo del Día</h2>
              <button className="close" onClick={() => setShowCloseModal(false)}>
                ×
              </button>
            </ModalHeader>

            <div style={{marginBottom: '24px'}}>
              <h3 style={{margin: '0 0 16px 0', color: '#1f2937'}}>Resumen del Día</h3>
              <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px'}}>
                <div style={{padding: '16px', background: '#f8f9fa', borderRadius: '8px'}}>
                  <div style={{fontSize: '18px', fontWeight: '700', color: '#059669'}}>
                    {formatCurrency(totals.income)}
                  </div>
                  <div style={{fontSize: '14px', color: '#6b7280'}}>Total Ingresos</div>
                </div>
                <div style={{padding: '16px', background: '#f8f9fa', borderRadius: '8px'}}>
                  <div style={{fontSize: '18px', fontWeight: '700', color: '#dc2626'}}>
                    {formatCurrency(totals.expense)}
                  </div>
                  <div style={{fontSize: '14px', color: '#6b7280'}}>Total Egresos</div>
                </div>
                <div style={{padding: '16px', background: '#f8f9fa', borderRadius: '8px', gridColumn: '1 / -1'}}>
                  <div style={{fontSize: '24px', fontWeight: '900', color: '#1e40af'}}>
                    {formatCurrency(totals.balance)}
                  </div>
                  <div style={{fontSize: '14px', color: '#6b7280'}}>Saldo Final</div>
                </div>
              </div>
            </div>

            <p style={{color: '#6b7280', marginBottom: '24px'}}>
              Al cerrar el arqueo, se generará un reporte final del día y se preparará para el siguiente período.
            </p>

            <ModalActions>
              <Button
                type="button"
                className="secondary"
                onClick={() => setShowCloseModal(false)}
              >
                Cancelar
              </Button>
              <Button
                type="button"
                className="success"
                onClick={handleCloseArqueo}
                disabled={loading}
              >
                {loading ? 'Cerrando...' : 'Confirmar Cierre'}
              </Button>
            </ModalActions>
          </ModalContent>
        </Modal>
      )}
    </ArqueoContainer>
  )
}

export default Arqueo