import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { toast } from 'react-toastify'
import styled from 'styled-components'

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`

const ConfigSection = styled.div`
  background: white;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  margin-bottom: 24px;
`

const SectionTitle = styled.h3`
  margin: 0 0 20px 0;
  color: #1f2937;
  font-size: 20px;
  display: flex;
  align-items: center;
  gap: 12px;

  &::before {
    content: '${props => props.icon || '⚙️'}';
    font-size: 24px;
  }
`

const FormGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin-bottom: 24px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const FullWidthGroup = styled.div`
  grid-column: 1 / -1;
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
    border-color: var(--primary-color);
    box-shadow: 0 0 0 3px rgba(var(--primary-rgb), 0.1);
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
    border-color: var(--primary-color);
    box-shadow: 0 0 0 3px rgba(var(--primary-rgb), 0.1);
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
    border-color: var(--primary-color);
    box-shadow: 0 0 0 3px rgba(var(--primary-rgb), 0.1);
  }
`

const CheckboxGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin-top: 8px;
`

const CheckboxItem = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  font-weight: normal;

  input {
    margin: 0;
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
    background: var(--primary-color);
    color: white;

    &:hover {
      background: var(--secondary-color);
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

const BusinessConfigTab = ({ businessType, tabId }) => {
  const [loading, setLoading] = useState(false)

  const STORAGE_KEY = `turnoflow_config_${businessType}_${tabId}`

  // Configuraciones específicas por tipo de negocio y pestaña
  const getBusinessConfig = (type, tab) => {
    const configs = {
      // 🏥 Salud y bienestar
      health: {
        specialties: {
          title: 'Especialidades Médicas',
          icon: '🏥',
          fields: [
            { name: 'availableSpecialties', label: 'Especialidades disponibles', type: 'multicheckbox', options: ['Medicina General', 'Odontología', 'Dermatología', 'Oftalmología', 'Ginecología', 'Psicología', 'Psiquiatría', 'Nutrición', 'Fisioterapia', 'Terapias Alternativas'], defaultValue: ['Medicina General'] },
            { name: 'emergencyService', label: 'Servicio de emergencias 24/7', type: 'checkbox', defaultValue: true },
            { name: 'telemedicine', label: 'Telemedicina habilitada', type: 'checkbox', defaultValue: false },
            { name: 'maxPatientsPerDay', label: 'Pacientes máximo por día', type: 'number', defaultValue: 20 },
            { name: 'appointmentTypes', label: 'Tipos de cita disponibles', type: 'multicheckbox', options: ['Presencial', 'Telemedicina', 'Domiciliaria'], defaultValue: ['Presencial'] },
            { name: 'patientRecords', label: 'Historia clínica digital obligatoria', type: 'checkbox', defaultValue: true },
            { name: 'consentForms', label: 'Consentimientos informados', type: 'checkbox', defaultValue: true },
            { name: 'followUpReminders', label: 'Recordatorios de seguimiento', type: 'checkbox', defaultValue: true }
          ]
        },
        schedule: {
          title: 'Horarios Médicos',
          icon: '🕐',
          fields: [
            { name: 'workDays', label: 'Días laborables', type: 'multicheckbox', options: ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'], defaultValue: ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes'] },
            { name: 'openingTime', label: 'Hora de apertura', type: 'time', defaultValue: '07:00' },
            { name: 'closingTime', label: 'Hora de cierre', type: 'time', defaultValue: '17:00' },
            { name: 'appointmentDuration', label: 'Duración consulta (min)', type: 'select', options: [15, 20, 30, 45, 60], defaultValue: 30 },
            { name: 'emergencySlots', label: 'Cupos de emergencia diarios', type: 'number', defaultValue: 3 },
            { name: 'breakTime', label: 'Tiempo entre consultas (min)', type: 'select', options: [0, 5, 10, 15, 30], defaultValue: 10 }
          ]
        },
        medical: {
          title: 'Configuración Médica',
          icon: '⚕️',
          fields: [
            { name: 'insuranceIntegration', label: 'Integración con seguros médicos', type: 'checkbox', defaultValue: false },
            { name: 'onlinePrescriptions', label: 'Recetas en línea', type: 'checkbox', defaultValue: false },
            { name: 'labResults', label: 'Resultados de laboratorio', type: 'checkbox', defaultValue: true },
            { name: 'appointmentReminders', label: 'Recordatorios automáticos', type: 'multicheckbox', options: ['WhatsApp', 'SMS', 'Email'], defaultValue: ['WhatsApp', 'Email'] }
          ]
        }
      },

      // 💇 Belleza y cuidado personal
      beauty: {
        services: {
          title: 'Servicios de Belleza',
          icon: '💄',
          fields: [
            { name: 'enableOnlineBooking', label: 'Reservas en línea', type: 'checkbox', defaultValue: true },
            { name: 'maxAdvanceBooking', label: 'Días máximo anticipo', type: 'select', options: [7, 14, 30, 60], defaultValue: 30 },
            { name: 'cancellationPolicy', label: 'Política de cancelación (horas)', type: 'select', options: [2, 4, 8, 24], defaultValue: 4 },
            { name: 'loyaltyProgram', label: 'Programa de fidelización', type: 'checkbox', defaultValue: true },
            { name: 'packageDeals', label: 'Paquetes promocionales', type: 'checkbox', defaultValue: true },
            { name: 'materialControl', label: 'Control de materiales/insumos', type: 'checkbox', defaultValue: false },
            { name: 'advancePayment', label: 'Pagos anticipados requeridos', type: 'checkbox', defaultValue: false }
          ]
        },
        schedule: {
          title: 'Horarios de Atención',
          icon: '🕐',
          fields: [
            { name: 'workDays', label: 'Días laborables', type: 'multicheckbox', options: ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'], defaultValue: ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'] },
            { name: 'openingTime', label: 'Hora de apertura', type: 'time', defaultValue: '08:00' },
            { name: 'closingTime', label: 'Hora de cierre', type: 'time', defaultValue: '18:00' },
            { name: 'appointmentDuration', label: 'Duración servicios (min)', type: 'select', options: [30, 45, 60, 90, 120], defaultValue: 60 },
            { name: 'breakTime', label: 'Tiempo entre citas (min)', type: 'select', options: [0, 15, 30, 45], defaultValue: 15 }
          ]
        },
        pricing: {
          title: 'Configuración de Precios',
          icon: '💰',
          fields: [
            { name: 'currency', label: 'Moneda', type: 'select', options: ['COP', 'USD'], defaultValue: 'COP' },
            { name: 'taxRate', label: 'Impuesto (%)', type: 'number', defaultValue: 19 },
            { name: 'serviceFee', label: 'Tarifa por servicio (%)', type: 'number', defaultValue: 5 },
            { name: 'discountEnabled', label: 'Descuentos habilitados', type: 'checkbox', defaultValue: true },
            { name: 'comboDiscounts', label: 'Descuentos en combos', type: 'checkbox', defaultValue: true }
          ]
        }
      },

      // 🏋️ Actividad física y formación
      fitness: {
        classes: {
          title: 'Configuración de Clases',
          icon: '🏋️',
          fields: [
            { name: 'classTypes', label: 'Tipos de clase disponibles', type: 'multicheckbox', options: ['Yoga', 'Pilates', 'Spinning', 'Crossfit', 'Baile', 'Boxeo', 'Funcional', 'Personalizado'], defaultValue: ['Yoga', 'Pilates'] },
            { name: 'maxCapacity', label: 'Capacidad máxima por clase', type: 'number', defaultValue: 15 },
            { name: 'advanceBooking', label: 'Días anticipo para reserva', type: 'select', options: [1, 3, 7, 14], defaultValue: 7 },
            { name: 'cancellationHours', label: 'Horas para cancelar', type: 'select', options: [2, 4, 8, 24], defaultValue: 4 },
            { name: 'waitingList', label: 'Lista de espera habilitada', type: 'checkbox', defaultValue: true },
            { name: 'qrCheckin', label: 'Check-in por QR', type: 'checkbox', defaultValue: true }
          ]
        },
        schedule: {
          title: 'Horarios de Clases',
          icon: '🕐',
          fields: [
            { name: 'workDays', label: 'Días de operación', type: 'multicheckbox', options: ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'], defaultValue: ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'] },
            { name: 'openingTime', label: 'Hora de apertura', type: 'time', defaultValue: '05:00' },
            { name: 'closingTime', label: 'Hora de cierre', type: 'time', defaultValue: '22:00' },
            { name: 'classDuration', label: 'Duración clases (min)', type: 'select', options: [30, 45, 60, 90], defaultValue: 60 },
            { name: 'peakHours', label: 'Horas pico (ej: 7:00-9:00, 17:00-19:00)', type: 'textarea', placeholder: 'Describa las horas pico del día' }
          ]
        },
        memberships: {
          title: 'Planes y Membresías',
          icon: '🎫',
          fields: [
            { name: 'membershipTypes', label: 'Tipos de membresía', type: 'multicheckbox', options: ['Mensual', 'Trimestral', 'Semestral', 'Anual', 'Día por día', 'Clases individuales'], defaultValue: ['Mensual', 'Trimestral', 'Anual'] },
            { name: 'autoRenewal', label: 'Renovación automática', type: 'checkbox', defaultValue: false },
            { name: 'referralProgram', label: 'Programa de referidos', type: 'checkbox', defaultValue: true },
            { name: 'guestPasses', label: 'Pases para invitados', type: 'checkbox', defaultValue: true },
            { name: 'freezingMembership', label: 'Congelamiento de membresía', type: 'checkbox', defaultValue: true },
            { name: 'cancellationPenalty', label: 'Penalidad por cancelación', type: 'number', defaultValue: 0 }
          ]
        }
      },

      // 🧾 Servicios profesionales
      professional: {
        services: {
          title: 'Servicios Profesionales',
          icon: '🧾',
          fields: [
            { name: 'serviceTypes', label: 'Tipos de servicio', type: 'multicheckbox', options: ['Consulta inicial', 'Seguimiento', 'Revisión', 'Asesoría', 'Tramite', 'Audiencia'], defaultValue: ['Consulta inicial', 'Seguimiento'] },
            { name: 'appointmentTypes', label: 'Modalidad de atención', type: 'multicheckbox', options: ['Presencial', 'Virtual', 'Domiciliaria'], defaultValue: ['Presencial', 'Virtual'] },
            { name: 'advanceBooking', label: 'Días anticipo mínimo', type: 'select', options: [1, 2, 3, 7, 14], defaultValue: 2 },
            { name: 'followUpRequired', label: 'Seguimiento obligatorio', type: 'checkbox', defaultValue: true },
            { name: 'fileUploads', label: 'Carga de archivos permitida', type: 'checkbox', defaultValue: true },
            { name: 'billingMethod', label: 'Método de facturación', type: 'select', options: ['Por hora', 'Por sesión', 'Proyecto'], defaultValue: 'Por hora' }
          ]
        },
        schedule: {
          title: 'Horarios Profesionales',
          icon: '🕐',
          fields: [
            { name: 'workDays', label: 'Días laborables', type: 'multicheckbox', options: ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'], defaultValue: ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes'] },
            { name: 'openingTime', label: 'Hora de inicio', type: 'time', defaultValue: '08:00' },
            { name: 'closingTime', label: 'Hora de fin', type: 'time', defaultValue: '17:00' },
            { name: 'appointmentDuration', label: 'Duración cita (min)', type: 'select', options: [30, 45, 60, 90, 120], defaultValue: 60 },
            { name: 'breakTime', label: 'Tiempo entre citas (min)', type: 'select', options: [0, 15, 30, 45], defaultValue: 15 },
            { name: 'calendarIntegration', label: 'Integración con Google Calendar', type: 'checkbox', defaultValue: false }
          ]
        },
        billing: {
          title: 'Configuración de Facturación',
          icon: '💰',
          fields: [
            { name: 'currency', label: 'Moneda', type: 'select', options: ['COP', 'USD'], defaultValue: 'COP' },
            { name: 'taxRate', label: 'IVA (%)', type: 'number', defaultValue: 19 },
            { name: 'paymentMethods', label: 'Métodos de pago aceptados', type: 'multicheckbox', options: ['Efectivo', 'Transferencia', 'Tarjeta', 'Cheque'], defaultValue: ['Efectivo', 'Transferencia', 'Tarjeta'] },
            { name: 'invoiceRequired', label: 'Factura obligatoria', type: 'checkbox', defaultValue: true },
            { name: 'installments', label: 'Permitir cuotas', type: 'checkbox', defaultValue: false }
          ]
        }
      },

      // 🛠️ Servicios técnicos
      technical: {
        services: {
          title: 'Servicios Técnicos',
          icon: '🛠️',
          fields: [
            { name: 'serviceTypes', label: 'Tipos de servicio', type: 'multicheckbox', options: ['Reparación', 'Mantenimiento', 'Diagnóstico', 'Instalación', 'Actualización'], defaultValue: ['Reparación', 'Mantenimiento'] },
            { name: 'warrantyService', label: 'Servicio con garantía', type: 'checkbox', defaultValue: true },
            { name: 'pickupDelivery', label: 'Recogida/entrega a domicilio', type: 'checkbox', defaultValue: false },
            { name: 'emergencyService', label: 'Servicio de emergencias', type: 'checkbox', defaultValue: false },
            { name: 'partsInventory', label: 'Control de repuestos', type: 'checkbox', defaultValue: true },
            { name: 'workOrderRequired', label: 'Orden de trabajo obligatoria', type: 'checkbox', defaultValue: true }
          ]
        },
        schedule: {
          title: 'Horarios Técnicos',
          icon: '🕐',
          fields: [
            { name: 'workDays', label: 'Días laborables', type: 'multicheckbox', options: ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'], defaultValue: ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes'] },
            { name: 'openingTime', label: 'Hora de apertura', type: 'time', defaultValue: '08:00' },
            { name: 'closingTime', label: 'Hora de cierre', type: 'time', defaultValue: '17:00' },
            { name: 'appointmentDuration', label: 'Tiempo estimado por servicio', type: 'select', options: [30, 60, 90, 120, 180], defaultValue: 60 },
            { name: 'maxDailyAppointments', label: 'Citas máximas por día', type: 'number', defaultValue: 8 },
            { name: 'progressNotifications', label: 'Notificaciones de progreso', type: 'checkbox', defaultValue: true }
          ]
        },
        technical: {
          title: 'Configuración Técnica',
          icon: '⚙️',
          fields: [
            { name: 'diagnosticFee', label: 'Cobro por diagnóstico', type: 'checkbox', defaultValue: true },
            { name: 'photoDocumentation', label: 'Documentación fotográfica', type: 'checkbox', defaultValue: true },
            { name: 'customerNotification', label: 'Notificación al cliente', type: 'checkbox', defaultValue: true },
            { name: 'qualityControl', label: 'Control de calidad', type: 'checkbox', defaultValue: true },
            { name: 'advancePayment', label: 'Pagos anticipados', type: 'checkbox', defaultValue: false }
          ]
        }
      },

      // 🧑‍🍳 Gastronomía
      restaurant: {
        reservations: {
          title: 'Sistema de Reservas',
          icon: '📅',
          fields: [
            { name: 'maxGuests', label: 'Máximo comensales por reserva', type: 'number', defaultValue: 8 },
            { name: 'advanceBooking', label: 'Días anticipo máximo', type: 'select', options: [7, 14, 30, 60], defaultValue: 30 },
            { name: 'minAdvanceHours', label: 'Horas anticipo mínimo', type: 'select', options: [1, 2, 4, 6, 12], defaultValue: 2 },
            { name: 'cancellationHours', label: 'Horas para cancelar', type: 'select', options: [1, 2, 4, 8, 24], defaultValue: 2 },
            { name: 'specialRequests', label: 'Solicitudes especiales permitidas', type: 'checkbox', defaultValue: true },
            { name: 'depositRequired', label: 'Depósitos requeridos', type: 'checkbox', defaultValue: false },
            { name: 'waitingList', label: 'Lista de espera', type: 'checkbox', defaultValue: true }
          ]
        },
        schedule: {
          title: 'Horarios de Operación',
          icon: '🕐',
          fields: [
            { name: 'workDays', label: 'Días de operación', type: 'multicheckbox', options: ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'], defaultValue: ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'] },
            { name: 'openingTime', label: 'Hora de apertura', type: 'time', defaultValue: '12:00' },
            { name: 'closingTime', label: 'Hora de cierre', type: 'time', defaultValue: '23:00' },
            { name: 'lastOrderTime', label: 'Último pedido', type: 'time', defaultValue: '22:30' },
            { name: 'peakHours', label: 'Horas pico', type: 'textarea', placeholder: 'Ej: 13:00-15:00, 19:00-21:00' },
            { name: 'reservationDuration', label: 'Duración estimada reserva (horas)', type: 'select', options: [1, 1.5, 2, 2.5, 3], defaultValue: 2 }
          ]
        },
        menu: {
          title: 'Configuración del Menú',
          icon: '🍽️',
          fields: [
            { name: 'cuisineType', label: 'Tipo de cocina', type: 'select', options: ['Colombiana', 'Italiana', 'Mexicana', 'Asiática', 'Internacional', 'Mixta'], defaultValue: 'Colombiana' },
            { name: 'dietaryOptions', label: 'Opciones dietéticas', type: 'multicheckbox', options: ['Vegetariano', 'Vegano', 'Sin gluten', 'Kosher', 'Halal'], defaultValue: ['Vegetariano'] },
            { name: 'onlineOrdering', label: 'Pedidos en línea', type: 'checkbox', defaultValue: true },
            { name: 'deliveryService', label: 'Servicio a domicilio', type: 'checkbox', defaultValue: true },
            { name: 'takeoutService', label: 'Servicio para llevar', type: 'checkbox', defaultValue: true }
          ]
        }
      },

      // 🏢 Sector público y trámites
      public: {
        services: {
          title: 'Servicios Públicos',
          icon: '🏢',
          fields: [
            { name: 'serviceTypes', label: 'Tipos de trámite', type: 'multicheckbox', options: ['Registro', 'Consulta', 'Certificación', 'Licencia', 'Permiso', 'Renovación'], defaultValue: ['Registro', 'Consulta'] },
            { name: 'priorityService', label: 'Servicio prioritario', type: 'checkbox', defaultValue: true },
            { name: 'onlineAppointments', label: 'Citas en línea', type: 'checkbox', defaultValue: true },
            { name: 'documentVerification', label: 'Verificación de documentos', type: 'checkbox', defaultValue: true },
            { name: 'queueManagement', label: 'Gestión de filas', type: 'checkbox', defaultValue: true },
            { name: 'appointmentRequired', label: 'Cita obligatoria', type: 'checkbox', defaultValue: true },
            { name: 'walkInService', label: 'Atención sin cita', type: 'checkbox', defaultValue: true }
          ]
        },
        schedule: {
          title: 'Horarios de Atención',
          icon: '🕐',
          fields: [
            { name: 'workDays', label: 'Días laborables', type: 'multicheckbox', options: ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'], defaultValue: ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes'] },
            { name: 'openingTime', label: 'Hora de atención', type: 'time', defaultValue: '08:00' },
            { name: 'closingTime', label: 'Hora de cierre', type: 'time', defaultValue: '16:00' },
            { name: 'appointmentDuration', label: 'Tiempo por trámite (min)', type: 'select', options: [10, 15, 20, 30, 45], defaultValue: 15 },
            { name: 'maxDailyAppointments', label: 'Citas máximas por día', type: 'number', defaultValue: 50 },
            { name: 'priorityQueue', label: 'Cola prioritaria (adulto mayor, discapacidad)', type: 'checkbox', defaultValue: true }
          ]
        },
        public: {
          title: 'Configuración Pública',
          icon: '📋',
          fields: [
            { name: 'digitalDocuments', label: 'Documentos digitales', type: 'checkbox', defaultValue: true },
            { name: 'paymentIntegration', label: 'Pagos en línea', type: 'checkbox', defaultValue: false },
            { name: 'notificationSystem', label: 'Sistema de notificaciones', type: 'checkbox', defaultValue: true },
            { name: 'surveyEnabled', label: 'Encuesta de satisfacción', type: 'checkbox', defaultValue: true },
            { name: 'statisticsTracking', label: 'Seguimiento de estadísticas', type: 'checkbox', defaultValue: true }
          ]
        }
      },

      // 🐾 Veterinarias y Spa de Animales
      veterinary: {
        services: {
          title: 'Servicios Veterinarios',
          icon: '🐾',
          fields: [
            { name: 'serviceTypes', label: 'Tipos de servicio', type: 'multicheckbox', options: ['Consulta general', 'Vacunación', 'Cirugía', 'Peluquería', 'Grooming', 'Guardería', 'Hospedaje', 'Emergencias'], defaultValue: ['Consulta general', 'Vacunación'] },
            { name: 'petTypes', label: 'Tipos de mascota', type: 'multicheckbox', options: ['Perros', 'Gatos', 'Aves', 'Roedores', 'Reptiles', 'Otros'], defaultValue: ['Perros', 'Gatos'] },
            { name: 'emergencyService', label: 'Servicio de emergencias 24/7', type: 'checkbox', defaultValue: false },
            { name: 'homeService', label: 'Servicio a domicilio', type: 'checkbox', defaultValue: false },
            { name: 'loyaltyProgram', label: 'Programa de fidelización', type: 'checkbox', defaultValue: true }
          ]
        },
        schedule: {
          title: 'Horarios Veterinarios',
          icon: '🕐',
          fields: [
            { name: 'workDays', label: 'Días de atención', type: 'multicheckbox', options: ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'], defaultValue: ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'] },
            { name: 'openingTime', label: 'Hora de apertura', type: 'time', defaultValue: '08:00' },
            { name: 'closingTime', label: 'Hora de cierre', type: 'time', defaultValue: '18:00' },
            { name: 'appointmentDuration', label: 'Duración consulta (min)', type: 'select', options: [15, 20, 30, 45, 60], defaultValue: 30 },
            { name: 'groomingDuration', label: 'Duración grooming (min)', type: 'select', options: [30, 45, 60, 90], defaultValue: 60 },
            { name: 'boardingCheckIn', label: 'Check-in guardería (hora)', type: 'time', defaultValue: '08:00' },
            { name: 'boardingCheckOut', label: 'Check-out guardería (hora)', type: 'time', defaultValue: '18:00' }
          ]
        },
        veterinary: {
          title: 'Configuración Veterinaria',
          icon: '⚕️',
          fields: [
            { name: 'patientRecords', label: 'Historia clínica digital', type: 'checkbox', defaultValue: true },
            { name: 'vaccinationReminders', label: 'Recordatorios de vacunación', type: 'checkbox', defaultValue: true },
            { name: 'petPhotos', label: 'Fotos de mascotas', type: 'checkbox', defaultValue: true },
            { name: 'ownerCommunication', label: 'Comunicación con dueños', type: 'checkbox', defaultValue: true },
            { name: 'prescriptionManagement', label: 'Gestión de medicamentos', type: 'checkbox', defaultValue: true },
            { name: 'boardingRules', label: 'Reglas de hospedaje', type: 'textarea', placeholder: 'Reglas específicas para guardería y hospedaje' }
          ]
        }
      },

      // 🎓 Educación
      education: {
        courses: {
          title: 'Configuración de Cursos',
          icon: '🎓',
          fields: [
            { name: 'courseTypes', label: 'Tipos de curso', type: 'multicheckbox', options: ['Presencial', 'Virtual', 'Semipresencial', 'Intensivo', 'Diplomado', 'Taller'], defaultValue: ['Presencial', 'Virtual'] },
            { name: 'maxStudentsPerGroup', label: 'Estudiantes máximo por grupo', type: 'number', defaultValue: 20 },
            { name: 'advanceBooking', label: 'Días anticipo para inscripciones', type: 'select', options: [7, 14, 30, 60], defaultValue: 14 },
            { name: 'enrollmentDeadline', label: 'Días antes de iniciar curso', type: 'select', options: [1, 3, 5, 7], defaultValue: 3 },
            { name: 'waitingList', label: 'Lista de espera', type: 'checkbox', defaultValue: true },
            { name: 'certification', label: 'Certificación incluida', type: 'checkbox', defaultValue: true },
            { name: 'placementTest', label: 'Prueba de nivelación', type: 'checkbox', defaultValue: false }
          ]
        },
        schedule: {
          title: 'Horarios Académicos',
          icon: '🕐',
          fields: [
            { name: 'workDays', label: 'Días de clase', type: 'multicheckbox', options: ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'], defaultValue: ['Lunes', 'Miércoles', 'Viernes'] },
            { name: 'morningStart', label: 'Inicio jornada mañana', type: 'time', defaultValue: '07:00' },
            { name: 'morningEnd', label: 'Fin jornada mañana', type: 'time', defaultValue: '12:00' },
            { name: 'afternoonStart', label: 'Inicio jornada tarde', type: 'time', defaultValue: '14:00' },
            { name: 'afternoonEnd', label: 'Fin jornada tarde', type: 'time', defaultValue: '18:00' },
            { name: 'classDuration', label: 'Duración clase (min)', type: 'select', options: [45, 60, 90, 120], defaultValue: 60 },
            { name: 'breakTime', label: 'Tiempo de descanso (min)', type: 'select', options: [5, 10, 15, 30], defaultValue: 15 }
          ]
        },
        enrollment: {
          title: 'Configuración de Matrículas',
          icon: '📝',
          fields: [
            { name: 'registrationFee', label: 'Costo de matrícula', type: 'number', defaultValue: 0 },
            { name: 'paymentPlans', label: 'Planes de pago', type: 'multicheckbox', options: ['Contado', 'Mensual', 'Bimestral', 'Trimestral'], defaultValue: ['Contado', 'Mensual'] },
            { name: 'onlinePayment', label: 'Pagos en línea', type: 'checkbox', defaultValue: true },
            { name: 'refundPolicy', label: 'Política de reembolso', type: 'select', options: ['Sin reembolso', 'Parcial', 'Total'], defaultValue: 'Parcial' },
            { name: 'siblingDiscount', label: 'Descuento por hermanos', type: 'checkbox', defaultValue: true },
            { name: 'earlyBirdDiscount', label: 'Descuento por pago anticipado', type: 'checkbox', defaultValue: true }
          ]
        }
      },

      // 🛍️ Comercio Minorista
      retail: {
        services: {
          title: 'Configuración de Atención',
          icon: '🛍️',
          fields: [
            { name: 'queueSystem', label: 'Sistema de turnos', type: 'checkbox', defaultValue: true },
            { name: 'appointmentService', label: 'Citas programadas', type: 'checkbox', defaultValue: false },
            { name: 'loyaltyCard', label: 'Tarjeta de fidelización', type: 'checkbox', defaultValue: true },
            { name: 'giftCards', label: 'Tarjetas de regalo', type: 'checkbox', defaultValue: true },
            { name: 'personalShopping', label: 'Compras personalizadas', type: 'checkbox', defaultValue: false },
            { name: 'homeDelivery', label: 'Entrega a domicilio', type: 'checkbox', defaultValue: true },
            { name: 'clickAndCollect', label: 'Recoger en tienda', type: 'checkbox', defaultValue: true }
          ]
        },
        schedule: {
          title: 'Horarios de Atención',
          icon: '🕐',
          fields: [
            { name: 'workDays', label: 'Días laborables', type: 'multicheckbox', options: ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'], defaultValue: ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'] },
            { name: 'openingTime', label: 'Hora de apertura', type: 'time', defaultValue: '09:00' },
            { name: 'closingTime', label: 'Hora de cierre', type: 'time', defaultValue: '19:00' },
            { name: 'holidaySchedule', label: 'Horario festivo', type: 'textarea', placeholder: 'Horarios especiales en días festivos' },
            { name: 'expressCheckout', label: 'Caja express (clientes ≤5)', type: 'checkbox', defaultValue: true }
          ]
        },
        sales: {
          title: 'Configuración de Ventas',
          icon: '💰',
          fields: [
            { name: 'currency', label: 'Moneda', type: 'select', options: ['COP', 'USD'], defaultValue: 'COP' },
            { name: 'taxRate', label: 'Impuesto (%)', type: 'number', defaultValue: 19 },
            { name: 'paymentMethods', label: 'Métodos de pago', type: 'multicheckbox', options: ['Efectivo', 'Débito', 'Crédito', 'Transferencia', 'PSE', 'Nequi', 'Daviplata'], defaultValue: ['Efectivo', 'Débito', 'Crédito'] },
            { name: 'installments', label: 'Cuotas sin interés', type: 'checkbox', defaultValue: false },
            { name: 'discountPolicy', label: 'Política de descuentos', type: 'select', options: ['Solo empleados', 'Solo temporadas', 'Siempre'], defaultValue: 'Solo temporadas' },
            { name: 'returnsPolicy', label: 'Política de devoluciones (días)', type: 'select', options: [7, 15, 30, 60], defaultValue: 30 }
          ]
        }
      }
    }

    return configs[type]?.[tab] || { title: 'Configuración', icon: '⚙️', fields: [] }
  }

  const config = getBusinessConfig(businessType, tabId)

  // Crear esquema de validación dinámico
  const validationSchema = yup.object(
    config.fields.reduce((acc, field) => {
      if (field.type === 'checkbox') {
        acc[field.name] = yup.boolean()
      } else if (field.type === 'number') {
        acc[field.name] = yup.number().positive()
      } else {
        acc[field.name] = yup.string()
      }
      return acc
    }, {})
  )

  const { register, handleSubmit, watch, setValue, reset, formState: { errors } } = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: getSavedConfig() || config.fields.reduce((acc, field) => {
      acc[field.name] = field.defaultValue
      return acc
    }, {})
  })

  // Cargar configuración guardada
  function getSavedConfig() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY)
      return saved ? JSON.parse(saved) : null
    } catch {
      return null
    }
  }

  // Resetear formulario si cambia la pestaña o tipo de negocio
  useEffect(() => {
    const saved = getSavedConfig()
    if (saved) {
      reset(saved)
    } else {
      reset(config.fields.reduce((acc, field) => {
        acc[field.name] = field.defaultValue
        return acc
      }, {}))
    }
  }, [businessType, tabId, reset])

  const onSubmit = async (data) => {
    setLoading(true)
    try {
      await new Promise(resolve => setTimeout(resolve, 800))
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
      toast.success('Configuración guardada exitosamente')
    } catch (error) {
      toast.error('Error al guardar la configuración')
    } finally {
      setLoading(false)
    }
  }

  const renderField = (field) => {
    const watchedValue = watch(field.name)

    switch (field.type) {
      case 'checkbox':
        return (
          <FormGroup key={field.name}>
            <CheckboxItem>
              <Input
                type="checkbox"
                {...register(field.name)}
              />
              <Label style={{ margin: 0 }}>{field.label}</Label>
            </CheckboxItem>
          </FormGroup>
        )

      case 'select':
        return (
          <FormGroup key={field.name}>
            <Label>{field.label}</Label>
            <Select {...register(field.name)}>
              <option value="">Seleccionar opción</option>
              {field.options.map(option => (
                <option key={option} value={option}>{option}</option>
              ))}
            </Select>
          </FormGroup>
        )

      case 'multicheckbox':
        return (
          <FormGroup key={field.name}>
            <Label>{field.label}</Label>
            <CheckboxGroup>
              {field.options.map(option => (
                <CheckboxItem key={option}>
                  <Input
                    type="checkbox"
                    value={option}
                    checked={watchedValue?.includes(option) || false}
                    onChange={(e) => {
                      const currentValues = watchedValue || []
                      if (e.target.checked) {
                        setValue(field.name, [...currentValues, option])
                      } else {
                        setValue(field.name, currentValues.filter(v => v !== option))
                      }
                    }}
                  />
                  <span>{option}</span>
                </CheckboxItem>
              ))}
            </CheckboxGroup>
          </FormGroup>
        )

      case 'textarea':
        return (
          <FormGroup key={field.name}>
            <Label>{field.label}</Label>
            <TextArea
              {...register(field.name)}
              placeholder={field.placeholder}
            />
          </FormGroup>
        )

      default:
        return (
          <FormGroup key={field.name}>
            <Label>{field.label}</Label>
            <Input
              type={field.type}
              {...register(field.name)}
              placeholder={field.placeholder}
            />
          </FormGroup>
        )
    }
  }

  return (
    <Container>
      <ConfigSection>
        <SectionTitle icon={config.icon}>{config.title}</SectionTitle>

        <form onSubmit={handleSubmit(onSubmit)}>
          <FormGrid>
            {config.fields.map(renderField)}
          </FormGrid>

          <ModalActions>
            <Button type="submit" className="primary" disabled={loading}>
              {loading ? 'Guardando...' : 'Guardar Configuración'}
            </Button>
          </ModalActions>
        </form>
      </ConfigSection>
    </Container>
  )
}

export default BusinessConfigTab