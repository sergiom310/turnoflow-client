import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  getSubtypes,
  getSubtypeConfig,
  getBusinessLabels,
  getClientExtraFields,
  getAppointmentExtraFields,
  getDefaultServices,
} from '../config/businessConfig';

const BusinessContext = createContext();

export const useBusiness = () => {
  const context = useContext(BusinessContext);
  if (!context) {
    throw new Error('useBusiness must be used within a BusinessProvider');
  }
  return context;
};

// Paletas de colores por tipo de negocio
const BUSINESS_COLORS = {
  beauty:     { primary: '#E91E63', secondary: '#F48FB1', accent: '#FFEB3B' },
  health:     { primary: '#1976D2', secondary: '#42A5F5', accent: '#4CAF50' },
  fitness:    { primary: '#FF5722', secondary: '#FF9800', accent: '#FFC107' },
  professional: { primary: '#9C27B0', secondary: '#BA68C8', accent: '#E1BEE7' },
  technical:  { primary: '#607D8B', secondary: '#90A4AE', accent: '#B0BEC5' },
  restaurant: { primary: '#FF6F00', secondary: '#FFB74D', accent: '#FFF3E0' },
  public:     { primary: '#2E7D32', secondary: '#4CAF50', accent: '#81C784' },
  veterinary: { primary: '#795548', secondary: '#A1887F', accent: '#D7CCC8' },
  education:  { primary: '#FF9800', secondary: '#FFB74D', accent: '#FFF3E0' },
  retail:     { primary: '#7B1FA2', secondary: '#BA68C8', accent: '#E1BEE7' },
  other:      { primary: '#546E7A', secondary: '#78909C', accent: '#B0BEC5' }
};

/**
 * Aplica los colores del tipo de negocio como variables CSS globales
 */
const applyBusinessTheme = (type) => {
  const colors = BUSINESS_COLORS[type] || BUSINESS_COLORS.beauty;
  const root = document.documentElement;

  root.style.setProperty('--primary-color', colors.primary);
  root.style.setProperty('--secondary-color', colors.secondary);
  root.style.setProperty('--accent-color', colors.accent);

  // Colores derivados para gradientes y sombras
  root.style.setProperty('--primary-rgb', hexToRgb(colors.primary));
  root.style.setProperty('--secondary-rgb', hexToRgb(colors.secondary));
  root.style.setProperty('--accent-rgb', hexToRgb(colors.accent));

  // Guardar selección
  localStorage.setItem('businessTheme', JSON.stringify(colors));
};

/**
 * Convierte color hex a rgb (ej: #1976D2 → 25,118,210)
 */
const hexToRgb = (hex) => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? `${parseInt(result[1], 16)},${parseInt(result[2], 16)},${parseInt(result[3], 16)}`
    : '0,0,0';
};

export const BusinessProvider = ({ children }) => {
  const [businessType, setBusinessType] = useState('beauty');
  const [businessSubtype, setBusinessSubtype] = useState(null);
  const [businessConfig, setBusinessConfig] = useState(null);
  const [businessColors, setBusinessColors] = useState(BUSINESS_COLORS.beauty);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const savedType = localStorage.getItem('businessType');
    const savedSubtype = localStorage.getItem('businessSubtype');
    const type = savedType || 'beauty';
    const subtype = savedSubtype || getSubtypes(type)[0]?.id || null;
    setBusinessType(type);
    setBusinessSubtype(subtype);
    applyBusinessTheme(type);
    setLoading(false);
  }, []);

  const updateBusinessType = (type, subtype) => {
    const resolvedSubtype = subtype || getSubtypes(type)[0]?.id || null;
    setBusinessType(type);
    setBusinessSubtype(resolvedSubtype);
    setBusinessColors(BUSINESS_COLORS[type] || BUSINESS_COLORS.beauty);
    localStorage.setItem('businessType', type);
    localStorage.setItem('businessSubtype', resolvedSubtype || '');

    const config = getBusinessComponents(type);
    setBusinessConfig(config);

    applyBusinessTheme(type);
  };

  const updateBusinessSubtype = (subtype) => {
    setBusinessSubtype(subtype);
    localStorage.setItem('businessSubtype', subtype || '');
  };

  const getBusinessComponents = (type) => {
    const components = {
      health: {
        name: 'Salud y Bienestar',
        icon: '🏥',
        components: [
          { id: 'dashboard', label: 'Dashboard', icon: '📊' },
          { id: 'usuarios', label: 'Usuarios', icon: '👤' },
          { id: 'clientes', label: 'Pacientes', icon: '🤒' },
          { id: 'agenda', label: 'Agenda Médica', icon: '📅' },
          { id: 'historiaClinica', label: 'Historia Clínica', icon: '📋' },
          { id: 'servicios', label: 'Servicios', icon: '⚕️' },
          { id: 'cobrar', label: 'Cobros', icon: '💳' },
          { id: 'inventario', label: 'Inventario', icon: '📦' },
          { id: 'arqueo', label: 'Arqueo', icon: '💰' },
          { id: 'reportes', label: 'Reportes', icon: '📈' },
          { id: 'configuracion', label: 'Configuración', icon: '⚙️' },
          { id: 'bitacora', label: 'Bitácora', icon: '📝' }
        ],
        tabs: [
          { id: 'general', label: 'General' },
          { id: 'especialidades', label: 'Especialidades' },
          { id: 'horarios', label: 'Horarios' },
          { id: 'medica', label: 'Médica' }
        ]
      },
      beauty: {
        name: 'Belleza y Cuidado Personal',
        icon: '💇',
        components: [
          { id: 'dashboard', label: 'Dashboard', icon: '📊' },
          { id: 'usuarios', label: 'Usuarios', icon: '👤' },
          { id: 'clientes', label: 'Clientes', icon: '👥' },
          { id: 'agenda', label: 'Agenda', icon: '📅' },
          { id: 'servicios', label: 'Servicios', icon: '✂️' },
          { id: 'turnos', label: 'Turnos', icon: '🎫' },
          { id: 'cobrar', label: 'Cobrar', icon: '💳' },
          { id: 'inventario', label: 'Inventario', icon: '📦' },
          { id: 'arqueo', label: 'Arqueo', icon: '💰' },
          { id: 'promociones', label: 'Promociones', icon: '🎉' },
          { id: 'reportes', label: 'Reportes', icon: '📈' },
          { id: 'configuracion', label: 'Configuración', icon: '⚙️' },
          { id: 'bitacora', label: 'Bitácora', icon: '📝' }
        ],
        tabs: [
          { id: 'general', label: 'General' },
          { id: 'servicios', label: 'Servicios' },
          { id: 'horarios', label: 'Horarios' },
          { id: 'precios', label: 'Precios' }
        ]
      },
      fitness: {
        name: 'Actividad Física y Formación',
        icon: '🏋️',
        components: [
          { id: 'dashboard', label: 'Dashboard', icon: '📊' },
          { id: 'usuarios', label: 'Usuarios', icon: '👤' },
          { id: 'clientes', label: 'Clientes', icon: '👥' },
          { id: 'agenda', label: 'Clases', icon: '📅' },
          { id: 'membresias', label: 'Membresías', icon: '🎫' },
          { id: 'instructores', label: 'Instructores', icon: '👨‍🏫' },
          { id: 'cobrar', label: 'Cobros', icon: '💳' },
          { id: 'inventario', label: 'Inventario', icon: '📦' },
          { id: 'arqueo', label: 'Arqueo', icon: '💰' },
          { id: 'asistencia', label: 'Asistencia', icon: '✓' },
          { id: 'reportes', label: 'Reportes', icon: '📈' },
          { id: 'configuracion', label: 'Configuración', icon: '⚙️' },
          { id: 'bitacora', label: 'Bitácora', icon: '📝' }
        ],
        tabs: [
          { id: 'general', label: 'General' },
          { id: 'clases', label: 'Clases' },
          { id: 'horarios', label: 'Horarios' },
          { id: 'membresias', label: 'Membresías' }
        ]
      },
      professional: {
        name: 'Servicios Profesionales',
        icon: '🧾',
        components: [
          { id: 'dashboard', label: 'Dashboard', icon: '📊' },
          { id: 'usuarios', label: 'Usuarios', icon: '👤' },
          { id: 'clientes', label: 'Clientes', icon: '👥' },
          { id: 'agenda', label: 'Agenda', icon: '📅' },
          { id: 'expedientes', label: 'Expedientes', icon: '📁' },
          { id: 'documentos', label: 'Documentos', icon: '📄' },
          { id: 'cobrar', label: 'Facturación', icon: '💰' },
          { id: 'reportes', label: 'Reportes', icon: '📈' },
          { id: 'configuracion', label: 'Configuración', icon: '⚙️' },
          { id: 'bitacora', label: 'Bitácora', icon: '📝' }
        ],
        tabs: [
          { id: 'general', label: 'General' },
          { id: 'servicios', label: 'Servicios' },
          { id: 'horarios', label: 'Horarios' },
          { id: 'facturacion', label: 'Facturación' }
        ]
      },
      technical: {
        name: 'Servicios Técnicos',
        icon: '🛠️',
        components: [
          { id: 'dashboard', label: 'Dashboard', icon: '📊' },
          { id: 'usuarios', label: 'Usuarios', icon: '👤' },
          { id: 'clientes', label: 'Clientes', icon: '👥' },
          { id: 'agenda', label: 'Agenda', icon: '📅' },
          { id: 'vehiculos', label: 'Equipos/Vehículos', icon: '🚗' },
          { id: 'ordenes', label: 'Órdenes de Trabajo', icon: '📋' },
          { id: 'inventario', label: 'Repuestos', icon: '🔧' },
          { id: 'cobrar', label: 'Cobros', icon: '💳' },
          { id: 'arqueo', label: 'Arqueo', icon: '💰' },
          { id: 'reportes', label: 'Reportes', icon: '📈' },
          { id: 'configuracion', label: 'Configuración', icon: '⚙️' },
          { id: 'bitacora', label: 'Bitácora', icon: '📝' }
        ],
        tabs: [
          { id: 'general', label: 'General' },
          { id: 'servicios', label: 'Servicios' },
          { id: 'horarios', label: 'Horarios' },
          { id: 'tecnica', label: 'Técnica' }
        ]
      },
      restaurant: {
        name: 'Gastronomía',
        icon: '🧑‍🍳',
        components: [
          { id: 'dashboard', label: 'Dashboard', icon: '📊' },
          { id: 'usuarios', label: 'Usuarios', icon: '👤' },
          { id: 'mesas', label: 'Mesas', icon: '🪑' },
          { id: 'reservas', label: 'Reservas', icon: '📅' },
          { id: 'menu', label: 'Menú', icon: '🍽️' },
          { id: 'pedidos', label: 'Pedidos', icon: '📝' },
          { id: 'cocina', label: 'Cocina', icon: '👨‍🍳' },
          { id: 'inventario', label: 'Inventario', icon: '📦' },
          { id: 'arqueo', label: 'Caja', icon: '💰' },
          { id: 'reportes', label: 'Reportes', icon: '📈' },
          { id: 'configuracion', label: 'Configuración', icon: '⚙️' },
          { id: 'bitacora', label: 'Bitácora', icon: '📝' }
        ],
        tabs: [
          { id: 'general', label: 'General' },
          { id: 'reservas', label: 'Reservas' },
          { id: 'horarios', label: 'Horarios' },
          { id: 'menu', label: 'Menú' }
        ]
      },
      public: {
        name: 'Sector Público y Trámites',
        icon: '🏢',
        components: [
          { id: 'dashboard', label: 'Dashboard', icon: '📊' },
          { id: 'usuarios', label: 'Usuarios', icon: '👤' },
          { id: 'ciudadanos', label: 'Ciudadanos', icon: '👥' },
          { id: 'turnos', label: 'Turnos', icon: '🎫' },
          { id: 'tramites', label: 'Trámites', icon: '📋' },
          { id: 'documentos', label: 'Documentos', icon: '📄' },
          { id: 'atencion', label: 'Atención', icon: '👥' },
          { id: 'reportes', label: 'Reportes', icon: '📈' },
          { id: 'configuracion', label: 'Configuración', icon: '⚙️' },
          { id: 'bitacora', label: 'Bitácora', icon: '📝' }
        ],
        tabs: [
          { id: 'general', label: 'General' },
          { id: 'servicios', label: 'Servicios' },
          { id: 'horarios', label: 'Horarios' },
          { id: 'publica', label: 'Pública' }
        ]
      },
      veterinary: {
        name: 'Veterinarias y Spa de Animales',
        icon: '🐾',
        components: [
          { id: 'dashboard', label: 'Dashboard', icon: '📊' },
          { id: 'usuarios', label: 'Usuarios', icon: '👤' },
          { id: 'clientes', label: 'Dueños', icon: '👥' },
          { id: 'mascotas', label: 'Mascotas', icon: '🐾' },
          { id: 'agenda', label: 'Agenda', icon: '📅' },
          { id: 'historiaClinica', label: 'Historia Clínica', icon: '📋' },
          { id: 'servicios', label: 'Servicios', icon: '⚕️' },
          { id: 'grooming', label: 'Grooming', icon: '✂️' },
          { id: 'guarderia', label: 'Guardería/Hospedaje', icon: '🏠' },
          { id: 'cobrar', label: 'Cobros', icon: '💳' },
          { id: 'inventario', label: 'Inventario', icon: '📦' },
          { id: 'arqueo', label: 'Arqueo', icon: '💰' },
          { id: 'promociones', label: 'Promociones', icon: '🎉' },
          { id: 'reportes', label: 'Reportes', icon: '📈' },
          { id: 'configuracion', label: 'Configuración', icon: '⚙️' },
          { id: 'bitacora', label: 'Bitácora', icon: '📝' }
        ],
        tabs: [
          { id: 'general', label: 'General' },
          { id: 'servicios', label: 'Servicios' },
          { id: 'horarios', label: 'Horarios' },
          { id: 'veterinaria', label: 'Veterinaria' }
        ]
      },
      education: {
        name: 'Educación',
        icon: '🎓',
        components: [
          { id: 'dashboard', label: 'Dashboard', icon: '📊' },
          { id: 'usuarios', label: 'Usuarios', icon: '👤' },
          { id: 'estudiantes', label: 'Estudiantes', icon: '🎓' },
          { id: 'cursos', label: 'Cursos', icon: '📚' },
          { id: 'agenda', label: 'Horario', icon: '📅' },
          { id: 'matriculas', label: 'Matrículas', icon: '📝' },
          { id: 'asistencia', label: 'Asistencia', icon: '✓' },
          { id: 'calificaciones', label: 'Calificaciones', icon: '📊' },
          { id: 'cobrar', label: 'Pagos', icon: '💰' },
          { id: 'reportes', label: 'Reportes', icon: '📈' },
          { id: 'configuracion', label: 'Configuración', icon: '⚙️' },
          { id: 'bitacora', label: 'Bitácora', icon: '📝' }
        ],
        tabs: [
          { id: 'general', label: 'General' },
          { id: 'cursos', label: 'Cursos' },
          { id: 'horarios', label: 'Horarios' },
          { id: 'matriculas', label: 'Matrículas' }
        ]
      },
      retail: {
        name: 'Comercio Minorista',
        icon: '🛍️',
        components: [
          { id: 'dashboard', label: 'Dashboard', icon: '📊' },
          { id: 'usuarios', label: 'Usuarios', icon: '👤' },
          { id: 'clientes', label: 'Clientes', icon: '👥' },
          { id: 'productos', label: 'Productos', icon: '📦' },
          { id: 'ventas', label: 'Punto de Venta', icon: '💳' },
          { id: 'inventario', label: 'Inventario', icon: '📋' },
          { id: 'arqueo', label: 'Caja', icon: '💰' },
          { id: 'promociones', label: 'Promociones', icon: '🎉' },
          { id: 'reportes', label: 'Reportes', icon: '📈' },
          { id: 'configuracion', label: 'Configuración', icon: '⚙️' },
          { id: 'bitacora', label: 'Bitácora', icon: '📝' }
        ],
        tabs: [
          { id: 'general', label: 'General' },
          { id: 'atencion', label: 'Atención' },
          { id: 'horarios', label: 'Horarios' },
          { id: 'ventas', label: 'Ventas' }
        ]
      },
      other: {
        name: 'Otros Servicios',
        icon: '🔧',
        components: [
          { id: 'dashboard', label: 'Dashboard', icon: '📊' },
          { id: 'usuarios', label: 'Usuarios', icon: '👤' },
          { id: 'clientes', label: 'Clientes', icon: '👥' },
          { id: 'agenda', label: 'Agenda', icon: '📅' },
          { id: 'servicios', label: 'Servicios', icon: '⚙️' },
          { id: 'cobrar', label: 'Cobrar', icon: '💳' },
          { id: 'inventario', label: 'Inventario', icon: '📦' },
          { id: 'arqueo', label: 'Arqueo', icon: '💰' },
          { id: 'reportes', label: 'Reportes', icon: '📈' },
          { id: 'configuracion', label: 'Configuración', icon: '⚙️' },
          { id: 'bitacora', label: 'Bitácora', icon: '📝' }
        ],
        tabs: [
          { id: 'general', label: 'General' },
          { id: 'servicios', label: 'Servicios' },
          { id: 'horarios', label: 'Horarios' }
        ]
      }
    };

    return components[type] || components.other;
  };

  const value = {
    businessType,
    businessSubtype,
    businessConfig,
    businessColors,
    updateBusinessType,
    updateBusinessSubtype,
    getBusinessComponents,
    // Helpers de configuración por subtipo
    subtypes: getSubtypes(businessType),
    subtypeConfig: getSubtypeConfig(businessType, businessSubtype),
    labels: getBusinessLabels(businessType, businessSubtype),
    clientExtraFields: getClientExtraFields(businessType, businessSubtype),
    appointmentExtraFields: getAppointmentExtraFields(businessType, businessSubtype),
    defaultServices: getDefaultServices(businessType, businessSubtype),
    loading,
    componentList: getBusinessComponents(businessType).components,
    tabs: getBusinessComponents(businessType).tabs,
  };

  return (
    <BusinessContext.Provider value={value}>
      {children}
    </BusinessContext.Provider>
  );
};

export default BusinessContext;