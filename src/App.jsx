import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { AuthProvider } from './context/AuthContext'
import { BusinessProvider } from './context/BusinessContext'
import { ClienteProvider } from './context/ClienteContext'
import Login from './components/Login/Login'
import Layout from './components/Layout/Layout'
import Dashboard from './components/Dashboard/Dashboard'
import SuperAdmin from './components/SuperAdmin/SuperAdmin'
import Configuration from './components/Configuration/Configuration'
import Users from './components/Users/Users'
import Clients from './components/Clients/Clients'
import Agenda from './components/Agenda/Agenda'
import Servicios from './components/Servicios/Servicios'
import Turnos from './components/Turnos/Turnos'
import Promociones from './components/Promociones/Promociones'
import Arqueo from './components/Arqueo/Arqueo'
import Inventario from './components/Inventario/Inventario'
import Reportes from './components/Reportes/Reportes'
import Cobrar from './components/Cobrar/Cobrar'
import ClienteLogin from './components/Cliente/ClienteLogin/ClienteLogin'
import ClienteLayout from './components/Cliente/ClienteLayout/ClienteLayout'
import ClienteDashboard from './components/Cliente/ClienteDashboard/ClienteDashboard'
import ClienteAgenda from './components/Cliente/ClienteAgenda/ClienteAgenda'
import ClienteServicios from './components/Cliente/ClienteServicios/ClienteServicios'
import ClienteProductos from './components/Cliente/ClienteProductos/ClienteProductos'
import ClienteMisCitas from './components/Cliente/ClienteMisCitas/ClienteMisCitas'
import './App.css'

function App() {
  return (
    <Router>
      <AuthProvider>
        <BusinessProvider>
          <ClienteProvider>
            <div className="App">
              <Routes>
                {/* Login Principal */}
                <Route index element={<Login />} />
                <Route path="login" element={<Login />} />

                {/* Login Cliente */}
                <Route path="cliente">
                  <Route index element={<ClienteLogin />} />
                  <Route element={<ClienteLayout />}>
                    <Route path="dashboard" element={<ClienteDashboard />} />
                    <Route path="agendar" element={<ClienteAgenda />} />
                    <Route path="servicios" element={<ClienteServicios />} />
                    <Route path="productos" element={<ClienteProductos />} />
                    <Route path="mis-citas" element={<ClienteMisCitas />} />
                  </Route>
                </Route>

                {/* Rutas del Sistema (Admin) */}
                <Route path="/" element={<Layout />}>
                  <Route index element={<Dashboard />} />
                  <Route path="dashboard" element={<Dashboard />} />
                  <Route path="super-admin" element={<SuperAdmin />} />
                  <Route path="configuration" element={<Configuration />} />
                  <Route path="users" element={<Users />} />
                  <Route path="usuarios" element={<Users />} />
                  <Route path="clients" element={<Clients />} />
                  <Route path="clientes" element={<Clients />} />
                  <Route path="agenda" element={<Agenda />} />
                  <Route path="servicios" element={<Servicios />} />
                  <Route path="turnos" element={<Turnos />} />
                  <Route path="promociones" element={<Promociones />} />
                  <Route path="arqueo" element={<Arqueo />} />
                  <Route path="inventario" element={<Inventario />} />
                  <Route path="cobrar" element={<Cobrar />} />
                  <Route path="reportes" element={<Reportes />} />
                </Route>
              </Routes>
              <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
              />
            </div>
          </ClienteProvider>
        </BusinessProvider>
      </AuthProvider>
    </Router>
  )
}

export default App