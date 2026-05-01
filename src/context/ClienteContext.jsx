import React, { createContext, useContext, useState, useEffect } from 'react'

const ClienteContext = createContext()

export const useCliente = () => {
  const context = useContext(ClienteContext)
  if (!context) {
    throw new Error('useCliente must be used within a ClienteProvider')
  }
  return context
}

export const ClienteProvider = ({ children }) => {
  const [cliente, setCliente] = useState(null)
  const [loading, setLoading] = useState(true)
  const [carrito, setCarrito] = useState([])
  const [citas, setCitas] = useState([])

  useEffect(() => {
    const savedCliente = localStorage.getItem('cliente')
    if (savedCliente) {
      setCliente(JSON.parse(savedCliente))
    }
    
    const savedCarrito = localStorage.getItem('carrito_cliente')
    if (savedCarrito) {
      setCarrito(JSON.parse(savedCarrito))
    }
    
    const savedCitas = localStorage.getItem('citas_cliente')
    if (savedCitas) {
      setCitas(JSON.parse(savedCitas))
    }
    
    setLoading(false)
  }, [])

  const login = (clienteData) => {
    setCliente(clienteData)
    localStorage.setItem('cliente', JSON.stringify(clienteData))
  }

  const logout = () => {
    setCliente(null)
    setCarrito([])
    setCitas([])
    localStorage.removeItem('cliente')
    localStorage.removeItem('carrito_cliente')
    localStorage.removeItem('citas_cliente')
  }

  const agregarAlCarrito = (producto) => {
    setCarrito(prev => {
      const existing = prev.find(item => item.id === producto.id)
      if (existing) {
        return prev.map(item =>
          item.id === producto.id
            ? { ...item, cantidad: item.cantidad + 1 }
            : item
        )
      }
      return [...prev, { ...producto, cantidad: 1 }]
    })
  }

  const removeFromCarrito = (productoId) => {
    setCarrito(prev => prev.filter(item => item.id !== productoId))
  }

  const updateCantidad = (productoId, cantidad) => {
    if (cantidad <= 0) {
      removeFromCarrito(productoId)
      return
    }
    setCarrito(prev =>
      prev.map(item =>
        item.id === productoId ? { ...item, cantidad } : item
      )
    )
  }

  const clearCarrito = () => {
    setCarrito([])
    localStorage.removeItem('carrito_cliente')
  }

  const agregarCita = (cita) => {
    const nuevaCita = {
      ...cita,
      id: Date.now(),
      estado: 'pendiente',
      fechaCreacion: new Date().toISOString()
    }
    setCitas(prev => {
      const updated = [...prev, nuevaCita]
      localStorage.setItem('citas_cliente', JSON.stringify(updated))
      return updated
    })
  }

  const cancelarCita = (citaId) => {
    setCitas(prev => {
      const updated = prev.map(cita =>
        cita.id === citaId ? { ...cita, estado: 'cancelada' } : cita
      )
      localStorage.setItem('citas_cliente', JSON.stringify(updated))
      return updated
    })
  }

  useEffect(() => {
    if (carrito.length > 0) {
      localStorage.setItem('carrito_cliente', JSON.stringify(carrito))
    }
  }, [carrito])

  const valorCarrito = carrito.reduce((acc, item) => acc + (item.precio * item.cantidad), 0)
  const cantidadCarrito = carrito.reduce((acc, item) => acc + item.cantidad, 0)

  const value = {
    cliente,
    loading,
    login,
    logout,
    carrito,
    agregarAlCarrito,
    removeFromCarrito,
    updateCantidad,
    clearCarrito,
    valorCarrito,
    cantidadCarrito,
    citas,
    agregarCita,
    cancelarCita
  }

  return (
    <ClienteContext.Provider value={value}>
      {children}
    </ClienteContext.Provider>
  )
}

export default ClienteContext