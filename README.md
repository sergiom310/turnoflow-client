# TurnoFlow — Frontend (React)

Sistema de gestión de turnos y citas adaptable a múltiples tipos de negocio.
Configuración regional Colombia (es-CO, COP, DD/MM/YYYY).

---

## Tecnologías

| Tecnología | Uso |
|---|---|
| React 18 + Vite | Framework y bundler |
| React Router v6 | Navegación SPA |
| Styled Components | Estilos dinámicos |
| React Hook Form + Yup | Formularios y validación |
| Axios | Llamadas HTTP al backend |
| React Toastify | Notificaciones |
| Context API | Estado global |

---

## Inicio rápido

```bash
pnpm install
pnpm dev         # http://localhost:5173
pnpm build       # build producción
pnpm preview     # previsualizar build
```

### Variables de entorno

Crear archivo `.env` en la raíz de `/client`:

```env
VITE_API_URL=http://localhost:3001/api/v1
```

---

## Estructura de carpetas

```
client/
├── public/
│   └── manifest.json          # PWA manifest
├── src/
│   ├── App.jsx                 # Rutas principales
│   ├── components/
│   │   ├── Login/              # Login del sistema (admin/empleados)
│   │   ├── Layout/             # Layout con sidebar
│   │   ├── Sidebar/            # Menú lateral dinámico
│   │   ├── Dashboard/          # Panel principal con métricas
│   │   ├── SuperAdmin/         # Gestión global (solo superadmin)
│   │   │   └── tabs/           # EmpresaTab, TipoNegocioTab, SuscripcionTab, BaseDatosTab, BitacoraTab
│   │   ├── Configuration/      # Configuración del negocio y roles
│   │   │   └── tabs/           # BusinessConfigTab, RolesTab
│   │   ├── Users/              # Gestión de usuarios
│   │   │   └── tabs/           # GeneralInfoTab, AccessTab, PhotosDocsTab
│   │   ├── Clients/            # Gestión de clientes
│   │   ├── Agenda/             # Agenda de citas
│   │   ├── Servicios/          # Catálogo de servicios
│   │   ├── Turnos/             # Sistema de turnos en tiempo real
│   │   ├── Cobrar/             # Punto de cobro
│   │   ├── Arqueo/             # Control financiero / cierre de caja
│   │   ├── Inventario/         # Gestión de productos/insumos
│   │   ├── Promociones/        # Promociones, rifas, eventos
│   │   ├── Reportes/           # Generación de reportes (Excel/PDF)
│   │   └── Cliente/            # Portal del cliente (rutas /cliente/*)
│   │       ├── ClienteLogin/
│   │       ├── ClienteLayout/
│   │       ├── ClienteDashboard/
│   │       ├── ClienteAgenda/
│   │       ├── ClienteServicios/
│   │       ├── ClienteProductos/
│   │       └── ClienteMisCitas/
│   ├── context/
│   │   ├── BusinessContext.jsx # Tipo de negocio, colores dinámicos
│   │   └── ClienteContext.jsx  # Estado del portal cliente
│   └── utils/
│       └── imageProcessor.js   # Procesamiento de imágenes en frontend
```

---

## Rutas disponibles

### Sistema (admin / empleados)
| Ruta | Componente | Descripción |
|---|---|---|
| `/` | Login | Login principal |
| `/dashboard` | Dashboard | Panel de métricas |
| `/super-admin` | SuperAdmin | Solo rol superadmin |
| `/configuration` | Configuration | Config negocio y roles |
| `/users` | Users | Gestión de usuarios |
| `/clients` | Clients | Gestión de clientes |
| `/agenda` | Agenda | Calendario de citas |
| `/servicios` | Servicios | Catálogo de servicios |
| `/turnos` | Turnos | Display de turnos |
| `/cobrar` | Cobrar | Punto de cobro |
| `/arqueo` | Arqueo | Cierre de caja |
| `/inventario` | Inventario | Inventario |
| `/promociones` | Promociones | Promociones |
| `/reportes` | Reportes | Reportes |

### Portal cliente
| Ruta | Componente |
|---|---|
| `/cliente` | ClienteLogin |
| `/cliente/dashboard` | ClienteDashboard |
| `/cliente/agendar` | ClienteAgenda |
| `/cliente/servicios` | ClienteServicios |
| `/cliente/productos` | ClienteProductos |
| `/cliente/mis-citas` | ClienteMisCitas |

---

## Estado actual de los componentes

> **Todos los componentes existen como vistas (UI), pero trabajan con datos mockeados.**
> La integración real con el backend es la siguiente tarea a implementar.

### Pendiente por implementar en frontend
- [ ] `AuthContext` — contexto de autenticación con JWT real
- [ ] `usePermissions` hook — control de acceso basado en rol
- [ ] `ProtectedRoute` — rutas protegidas por rol
- [ ] `src/services/api.js` — instancia Axios configurada con `VITE_API_URL`
- [ ] `src/services/authService.js` — login, logout, refresh token
- [ ] `src/services/userService.js` — CRUD usuarios
- [ ] `src/services/clientService.js` — CRUD clientes
- [ ] `src/services/appointmentService.js` — CRUD agenda
- [ ] `src/services/serviceService.js` — CRUD servicios
- [ ] `src/services/turnService.js` — gestión de turnos
- [ ] `src/services/financialService.js` — arqueo y cobro
- [ ] `src/services/inventoryService.js` — inventario
- [ ] `src/services/promotionService.js` — promociones
- [ ] `src/services/reportService.js` — reportes
- [ ] Reemplazar datos mock en cada componente por llamadas reales
- [ ] `AgendaMedica` — componente incompleto, requiere diseño

---

## Sistema de temas (colores por tipo de negocio)

Los colores se aplican dinámicamente mediante CSS custom properties en `BusinessContext.jsx`:

```
--primary-color
--secondary-color
--accent-color
--primary-rgb
--secondary-rgb
--accent-rgb
```

Tipos de negocio soportados: `beauty`, `health`, `fitness`, `professional`, `technical`, `restaurant`, `public`, `veterinary`, `education`, `retail`, `other`.

---

## RBAC — Roles del sistema

| Rol | Descripción |
|---|---|
| superadmin | Acceso total incluyendo Super Admin |
| administrador | Administración del negocio |
| auditor | Solo lectura en reportes y bitácora |
| vendedor | Ventas y clientes |
| cobrador | Operaciones financieras |
| asesor | Agenda y atención al cliente |
| empleado | Funciones básicas |
| cliente | Portal cliente (/cliente/*) |

Los permisos se almacenan como JSON en la tabla `roles` del backend.

---

## Archivos subidos

El servidor sirve los uploads desde `/uploads/`. En desarrollo apunta a `http://localhost:3001/uploads/`.

Categorías: `logo/`, `usuarios/`, `clientes/`, `documentos/`.
Formato de imagen: WEBP (conversión automática en backend con Sharp).
