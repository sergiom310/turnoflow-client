/**
 * businessConfig.js
 *
 * Configuración centralizada del sistema multi-negocio.
 *
 * ARQUITECTURA DE DOS NIVELES:
 * ┌─────────────────────────────────────────────────────────┐
 * │  TIPO (type)         → controla qué MÓDULOS hay en sidebar
 * │  SUBTIPO (subtype)   → controla CAMPOS, LABELS y CATÁLOGO
 * │                        de servicios por defecto
 * └─────────────────────────────────────────────────────────┘
 *
 * Los componentes React son ÚNICOS (Servicios, Clients, Agenda, etc.)
 * Solo leen la config de aquí para decidir qué mostrar.
 * NO se crean componentes separados por subtipo.
 */

// ─────────────────────────────────────────────
// 1. TIPOS DE NEGOCIO (categorías principales)
// ─────────────────────────────────────────────
export const BUSINESS_TYPES = [
  {
    id: 'beauty',
    name: 'Belleza y Cuidado Personal',
    icon: '💇',
    description:
      'Salones de belleza, peluquerías, barberías, centros de estética, manicuristas, pedicuristas, spa y masajistas.',
    colors: ['#E91E63', '#F48FB1', '#FFEB3B'],
  },
  {
    id: 'health',
    name: 'Salud y Bienestar',
    icon: '🏥',
    description:
      'Consultorios médicos, clínicas y centros de salud, psicólogos, psiquiatras, odontólogos, nutricionistas, terapias alternativas.',
    colors: ['#1976D2', '#42A5F5', '#4CAF50'],
  },
  {
    id: 'fitness',
    name: 'Actividad Física y Formación',
    icon: '🏋️',
    description:
      'Gimnasios, entrenadores personales, clases grupales (yoga, baile, pilates, boxeo), profesores particulares.',
    colors: ['#FF5722', '#FF9800', '#FFC107'],
  },
  {
    id: 'professional',
    name: 'Servicios Profesionales',
    icon: '🧾',
    description:
      'Abogados, contadores, asesores financieros, consultores, agentes inmobiliarios.',
    colors: ['#9C27B0', '#BA68C8', '#E1BEE7'],
  },
  {
    id: 'technical',
    name: 'Servicios Técnicos',
    icon: '🛠️',
    description:
      'Talleres de reparación, mecánicos automotrices, centros de diagnóstico vehicular, reparación de equipos.',
    colors: ['#607D8B', '#90A4AE', '#B0BEC5'],
  },
  {
    id: 'restaurant',
    name: 'Gastronomía',
    icon: '🧑‍🍳',
    description:
      'Restaurantes con alta demanda, cafés con espacios limitados, food trucks con atención por orden.',
    colors: ['#FF6F00', '#FFB74D', '#FFF3E0'],
  },
  {
    id: 'public',
    name: 'Sector Público y Trámites',
    icon: '🏢',
    description: 'Notarías, oficinas de tránsito, EPS/IPS, centros de atención ciudadana.',
    colors: ['#2E7D32', '#4CAF50', '#81C784'],
  },
  {
    id: 'veterinary',
    name: 'Veterinarias y Spa Animales',
    icon: '🐾',
    description:
      'Clínicas veterinarias, peluquería canina, grooming, baños medicados, guarderías, hoteles para mascotas.',
    colors: ['#795548', '#A1887F', '#D7CCC8'],
  },
  {
    id: 'education',
    name: 'Educación',
    icon: '🎓',
    description: 'Instituciones educativas, academias, cursos y capacitación.',
    colors: ['#FF9800', '#FFB74D', '#FFF3E0'],
  },
  {
    id: 'retail',
    name: 'Comercio Minorista',
    icon: '🛍️',
    description: 'Tiendas, boutiques, comercios minoristas y servicios comerciales.',
    colors: ['#7B1FA2', '#BA68C8', '#E1BEE7'],
  },
  {
    id: 'other',
    name: 'Otros Servicios',
    icon: '🔧',
    description: 'Otros tipos de negocio que requieren sistema de turnos.',
    colors: ['#546E7A', '#78909C', '#B0BEC5'],
  },
]

// ─────────────────────────────────────────────
// 2. SUBTIPOS por tipo de negocio
//    Cada subtipo define:
//    - labels: etiquetas adaptadas (ej: "Paciente" en vez de "Cliente")
//    - clientExtraFields: campos adicionales en el formulario de cliente
//    - appointmentExtraFields: campos adicionales en la cita
//    - defaultServices: catálogo de servicios precargado al crear el negocio
//    - serviceFields: campos del formulario de servicio que aplican
//    - showInventory: si el inventario es relevante para este subtipo
//    - showTurnos: si usa pantalla de turnos en tiempo real
// ─────────────────────────────────────────────
export const BUSINESS_SUBTYPES = {
  // ── BELLEZA Y CUIDADO PERSONAL ──────────────
  beauty: [
    {
      id: 'barberia',
      name: 'Barbería',
      icon: '✂️',
      labels: {
        client: 'Cliente',
        clients: 'Clientes',
        appointment: 'Turno',
        service: 'Servicio',
      },
      clientExtraFields: [
        // Las barberías no necesitan campos extra por defecto
      ],
      appointmentExtraFields: [
        // Sin campos adicionales en la cita
      ],
      defaultServices: [
        { name: 'Corte de cabello', duration_minutes: 30, price: 15000, category: 'Corte' },
        { name: 'Corte + Barba', duration_minutes: 45, price: 25000, category: 'Combo' },
        { name: 'Arreglo de barba', duration_minutes: 20, price: 12000, category: 'Barba' },
        { name: 'Corte + Cejas', duration_minutes: 35, price: 18000, category: 'Combo' },
        { name: 'Afeitado clásico', duration_minutes: 30, price: 15000, category: 'Barba' },
        { name: 'Corte niño', duration_minutes: 25, price: 12000, category: 'Corte' },
        { name: 'Tinte cabello', duration_minutes: 60, price: 35000, category: 'Color' },
        { name: 'Hidratación', duration_minutes: 30, price: 20000, category: 'Tratamiento' },
      ],
      serviceFields: { showCategory: true, showDuration: true, showPrice: true, showGender: false },
      showInventory: true,
      showTurnos: true,
    },
    {
      id: 'salon_belleza',
      name: 'Salón de Belleza',
      icon: '💅',
      labels: {
        client: 'Cliente',
        clients: 'Clientas',
        appointment: 'Cita',
        service: 'Servicio',
      },
      clientExtraFields: [],
      appointmentExtraFields: [],
      defaultServices: [
        { name: 'Corte de cabello dama', duration_minutes: 45, price: 25000, category: 'Corte' },
        { name: 'Lavado y peinado', duration_minutes: 40, price: 20000, category: 'Peinado' },
        { name: 'Tinte completo', duration_minutes: 90, price: 80000, category: 'Color' },
        { name: 'Mechas', duration_minutes: 120, price: 100000, category: 'Color' },
        { name: 'Alisado', duration_minutes: 120, price: 120000, category: 'Tratamiento' },
        { name: 'Keratina', duration_minutes: 150, price: 150000, category: 'Tratamiento' },
        { name: 'Maquillaje social', duration_minutes: 60, price: 60000, category: 'Maquillaje' },
        { name: 'Manicure', duration_minutes: 40, price: 18000, category: 'Uñas' },
        { name: 'Pedicure', duration_minutes: 50, price: 22000, category: 'Uñas' },
      ],
      serviceFields: { showCategory: true, showDuration: true, showPrice: true, showGender: false },
      showInventory: true,
      showTurnos: true,
    },
    {
      id: 'spa_unas',
      name: 'Spa de Uñas / Nail Art',
      icon: '💅',
      labels: {
        client: 'Cliente',
        clients: 'Clientes',
        appointment: 'Cita',
        service: 'Servicio',
      },
      clientExtraFields: [],
      appointmentExtraFields: [
        {
          id: 'nail_design',
          label: 'Diseño de uñas solicitado',
          type: 'text',
          placeholder: 'Ej: French, degradado, cristales...',
          required: false,
        },
      ],
      defaultServices: [
        { name: 'Manicure clásico', duration_minutes: 40, price: 18000, category: 'Manicure' },
        { name: 'Pedicure clásico', duration_minutes: 50, price: 22000, category: 'Pedicure' },
        { name: 'Semipermanente manos', duration_minutes: 60, price: 35000, category: 'Semipermanente' },
        { name: 'Semipermanente pies', duration_minutes: 70, price: 38000, category: 'Semipermanente' },
        { name: 'Acrilicas', duration_minutes: 90, price: 70000, category: 'Extensiones' },
        { name: 'Gel manos', duration_minutes: 80, price: 65000, category: 'Extensiones' },
        { name: 'Nail art por uña', duration_minutes: 10, price: 5000, category: 'Arte' },
        { name: 'Retiro acrílicas', duration_minutes: 30, price: 20000, category: 'Retiro' },
      ],
      serviceFields: { showCategory: true, showDuration: true, showPrice: true, showGender: false },
      showInventory: true,
      showTurnos: true,
    },
    {
      id: 'spa',
      name: 'Spa y Masajes',
      icon: '🛁',
      labels: {
        client: 'Cliente',
        clients: 'Clientes',
        appointment: 'Reserva',
        service: 'Tratamiento',
      },
      clientExtraFields: [
        {
          id: 'health_conditions',
          label: 'Condiciones de salud',
          type: 'textarea',
          placeholder: 'Ej: embarazo, alergias, lesiones...',
          required: false,
        },
      ],
      appointmentExtraFields: [],
      defaultServices: [
        { name: 'Masaje relajante 60 min', duration_minutes: 60, price: 80000, category: 'Masajes' },
        { name: 'Masaje deportivo', duration_minutes: 60, price: 90000, category: 'Masajes' },
        { name: 'Facial limpieza profunda', duration_minutes: 60, price: 70000, category: 'Facial' },
        { name: 'Hidratación corporal', duration_minutes: 90, price: 100000, category: 'Corporal' },
        { name: 'Chocolate therapy', duration_minutes: 90, price: 120000, category: 'Corporal' },
        { name: 'Drenaje linfático', duration_minutes: 60, price: 85000, category: 'Masajes' },
      ],
      serviceFields: { showCategory: true, showDuration: true, showPrice: true, showGender: false },
      showInventory: true,
      showTurnos: false,
    },
    {
      id: 'estetica',
      name: 'Centro de Estética',
      icon: '✨',
      labels: {
        client: 'Cliente',
        clients: 'Clientes',
        appointment: 'Cita',
        service: 'Tratamiento',
      },
      clientExtraFields: [],
      appointmentExtraFields: [],
      defaultServices: [
        { name: 'Limpieza facial', duration_minutes: 60, price: 60000, category: 'Facial' },
        { name: 'Depilación piernas completas', duration_minutes: 45, price: 40000, category: 'Depilación' },
        { name: 'Depilación axilas', duration_minutes: 20, price: 20000, category: 'Depilación' },
        { name: 'Depilación brasileña', duration_minutes: 30, price: 35000, category: 'Depilación' },
        { name: 'Pestañas pelo a pelo', duration_minutes: 90, price: 80000, category: 'Pestañas' },
        { name: 'Microblading cejas', duration_minutes: 120, price: 200000, category: 'Micropigmentación' },
      ],
      serviceFields: { showCategory: true, showDuration: true, showPrice: true, showGender: false },
      showInventory: true,
      showTurnos: false,
    },
  ],

  // ── SALUD Y BIENESTAR ────────────────────────
  health: [
    {
      id: 'consultorio_medico',
      name: 'Consultorio Médico',
      icon: '🩺',
      labels: {
        client: 'Paciente',
        clients: 'Pacientes',
        appointment: 'Consulta',
        service: 'Especialidad',
      },
      clientExtraFields: [
        { id: 'birth_date', label: 'Fecha de nacimiento', type: 'date', required: true },
        { id: 'blood_type', label: 'Grupo sanguíneo', type: 'select', options: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'], required: false },
        { id: 'allergies', label: 'Alergias conocidas', type: 'textarea', required: false },
        { id: 'eps', label: 'EPS / Aseguradora', type: 'text', required: false },
        { id: 'emergency_contact', label: 'Contacto de emergencia', type: 'text', required: false },
      ],
      appointmentExtraFields: [
        { id: 'consultation_reason', label: 'Motivo de consulta', type: 'textarea', required: true },
      ],
      defaultServices: [
        { name: 'Consulta general', duration_minutes: 20, price: 50000, category: 'Consulta' },
        { name: 'Consulta urgencias', duration_minutes: 30, price: 70000, category: 'Consulta' },
        { name: 'Control', duration_minutes: 15, price: 30000, category: 'Control' },
        { name: 'Toma de muestras', duration_minutes: 10, price: 15000, category: 'Procedimiento' },
      ],
      serviceFields: { showCategory: true, showDuration: true, showPrice: true, showGender: false },
      showInventory: true,
      showTurnos: true,
      showMedicalHistory: true,
    },
    {
      id: 'odontologia',
      name: 'Odontología',
      icon: '🦷',
      labels: {
        client: 'Paciente',
        clients: 'Pacientes',
        appointment: 'Cita',
        service: 'Procedimiento',
      },
      clientExtraFields: [
        { id: 'birth_date', label: 'Fecha de nacimiento', type: 'date', required: true },
        { id: 'allergies', label: 'Alergias a medicamentos', type: 'textarea', required: false },
        { id: 'eps', label: 'EPS / Aseguradora', type: 'text', required: false },
      ],
      appointmentExtraFields: [
        { id: 'tooth_number', label: 'Diente(s) a tratar', type: 'text', placeholder: 'Ej: 11, 12, 21', required: false },
        { id: 'consultation_reason', label: 'Motivo', type: 'textarea', required: true },
      ],
      defaultServices: [
        { name: 'Consulta y diagnóstico', duration_minutes: 30, price: 40000, category: 'Consulta' },
        { name: 'Limpieza dental', duration_minutes: 45, price: 60000, category: 'Preventivo' },
        { name: 'Calza / Restauración', duration_minutes: 40, price: 70000, category: 'Restauración' },
        { name: 'Extracción simple', duration_minutes: 30, price: 50000, category: 'Cirugía' },
        { name: 'Blanqueamiento', duration_minutes: 60, price: 200000, category: 'Estético' },
        { name: 'Ortodoncia (control)', duration_minutes: 20, price: 40000, category: 'Ortodoncia' },
      ],
      serviceFields: { showCategory: true, showDuration: true, showPrice: true, showGender: false },
      showInventory: true,
      showTurnos: true,
      showMedicalHistory: true,
    },
    {
      id: 'psicologia',
      name: 'Psicología / Psiquiatría',
      icon: '🧠',
      labels: {
        client: 'Paciente',
        clients: 'Pacientes',
        appointment: 'Sesión',
        service: 'Tipo de sesión',
      },
      clientExtraFields: [
        { id: 'birth_date', label: 'Fecha de nacimiento', type: 'date', required: true },
        { id: 'referral', label: 'Remitido por', type: 'text', required: false },
        { id: 'eps', label: 'EPS / Aseguradora', type: 'text', required: false },
      ],
      appointmentExtraFields: [
        { id: 'session_number', label: '# de sesión', type: 'number', required: false },
      ],
      defaultServices: [
        { name: 'Primera consulta', duration_minutes: 60, price: 80000, category: 'Consulta' },
        { name: 'Sesión terapéutica', duration_minutes: 50, price: 70000, category: 'Terapia' },
        { name: 'Sesión pareja', duration_minutes: 60, price: 100000, category: 'Terapia' },
        { name: 'Sesión familiar', duration_minutes: 60, price: 110000, category: 'Terapia' },
      ],
      serviceFields: { showCategory: true, showDuration: true, showPrice: true, showGender: false },
      showInventory: false,
      showTurnos: false,
      showMedicalHistory: true,
    },
    {
      id: 'nutricion',
      name: 'Nutrición y Dietética',
      icon: '🥗',
      labels: {
        client: 'Paciente',
        clients: 'Pacientes',
        appointment: 'Consulta',
        service: 'Servicio',
      },
      clientExtraFields: [
        { id: 'birth_date', label: 'Fecha de nacimiento', type: 'date', required: true },
        { id: 'weight', label: 'Peso actual (kg)', type: 'number', required: false },
        { id: 'height', label: 'Talla (cm)', type: 'number', required: false },
        { id: 'goal', label: 'Objetivo', type: 'select', options: ['Bajar de peso', 'Subir de peso', 'Mantenimiento', 'Rendimiento deportivo', 'Embarazo'], required: false },
      ],
      appointmentExtraFields: [],
      defaultServices: [
        { name: 'Valoración nutricional', duration_minutes: 60, price: 70000, category: 'Valoración' },
        { name: 'Control nutricional', duration_minutes: 30, price: 40000, category: 'Control' },
        { name: 'Plan alimentario personalizado', duration_minutes: 45, price: 60000, category: 'Plan' },
      ],
      serviceFields: { showCategory: true, showDuration: true, showPrice: true, showGender: false },
      showInventory: false,
      showTurnos: false,
      showMedicalHistory: true,
    },
  ],

  // ── FITNESS ──────────────────────────────────
  fitness: [
    {
      id: 'gimnasio',
      name: 'Gimnasio',
      icon: '🏋️',
      labels: {
        client: 'Miembro',
        clients: 'Miembros',
        appointment: 'Clase / Sesión',
        service: 'Membresía / Clase',
      },
      clientExtraFields: [
        { id: 'birth_date', label: 'Fecha de nacimiento', type: 'date', required: false },
        { id: 'membership_type', label: 'Tipo de membresía', type: 'select', options: ['Mensual', 'Trimestral', 'Semestral', 'Anual'], required: false },
        { id: 'membership_start', label: 'Inicio membresía', type: 'date', required: false },
      ],
      appointmentExtraFields: [],
      defaultServices: [
        { name: 'Membresía mensual', duration_minutes: 0, price: 80000, category: 'Membresía' },
        { name: 'Membresía trimestral', duration_minutes: 0, price: 220000, category: 'Membresía' },
        { name: 'Clase de yoga', duration_minutes: 60, price: 20000, category: 'Clase grupal' },
        { name: 'Clase de spinning', duration_minutes: 45, price: 15000, category: 'Clase grupal' },
        { name: 'Entrenamiento personal (sesión)', duration_minutes: 60, price: 60000, category: 'Personal' },
      ],
      serviceFields: { showCategory: true, showDuration: true, showPrice: true, showGender: false },
      showInventory: true,
      showTurnos: false,
    },
    {
      id: 'entrenador_personal',
      name: 'Entrenador Personal',
      icon: '🏃',
      labels: {
        client: 'Alumno',
        clients: 'Alumnos',
        appointment: 'Sesión',
        service: 'Plan / Servicio',
      },
      clientExtraFields: [
        { id: 'birth_date', label: 'Fecha de nacimiento', type: 'date', required: false },
        { id: 'fitness_goal', label: 'Objetivo de entrenamiento', type: 'select', options: ['Pérdida de peso', 'Ganancia muscular', 'Resistencia', 'Rehabilitación', 'Rendimiento'], required: false },
        { id: 'health_conditions', label: 'Lesiones o condiciones', type: 'textarea', required: false },
      ],
      appointmentExtraFields: [],
      defaultServices: [
        { name: 'Sesión individual 1h', duration_minutes: 60, price: 60000, category: 'Sesión' },
        { name: 'Pack 10 sesiones', duration_minutes: 0, price: 500000, category: 'Pack' },
        { name: 'Plan mensual (12 sesiones)', duration_minutes: 0, price: 550000, category: 'Plan' },
        { name: 'Valoración inicial', duration_minutes: 60, price: 50000, category: 'Valoración' },
      ],
      serviceFields: { showCategory: true, showDuration: true, showPrice: true, showGender: false },
      showInventory: false,
      showTurnos: false,
    },
  ],

  // ── SERVICIOS PROFESIONALES ──────────────────
  professional: [
    {
      id: 'abogado',
      name: 'Bufete / Abogado',
      icon: '⚖️',
      labels: {
        client: 'Cliente',
        clients: 'Clientes',
        appointment: 'Cita',
        service: 'Servicio jurídico',
      },
      clientExtraFields: [
        { id: 'identification_type', label: 'Tipo de identificación', type: 'select', options: ['CC', 'CE', 'NIT', 'Pasaporte'], required: false },
        { id: 'legal_representative', label: 'Representante legal (si aplica)', type: 'text', required: false },
      ],
      appointmentExtraFields: [
        { id: 'case_type', label: 'Tipo de caso', type: 'select', options: ['Civil', 'Penal', 'Laboral', 'Familia', 'Comercial', 'Administrativo', 'Otro'], required: false },
        { id: 'case_description', label: 'Descripción del caso', type: 'textarea', required: false },
      ],
      defaultServices: [
        { name: 'Consulta jurídica', duration_minutes: 30, price: 80000, category: 'Consulta' },
        { name: 'Elaboración de contrato', duration_minutes: 0, price: 200000, category: 'Documentos' },
        { name: 'Poder notarial', duration_minutes: 30, price: 150000, category: 'Documentos' },
        { name: 'Asesoría laboral', duration_minutes: 60, price: 120000, category: 'Asesoría' },
      ],
      serviceFields: { showCategory: true, showDuration: true, showPrice: true, showGender: false },
      showInventory: false,
      showTurnos: false,
    },
    {
      id: 'contador',
      name: 'Contador / Asesor Financiero',
      icon: '📊',
      labels: {
        client: 'Cliente',
        clients: 'Clientes',
        appointment: 'Cita',
        service: 'Servicio contable',
      },
      clientExtraFields: [
        { id: 'nit', label: 'NIT / CC', type: 'text', required: false },
        { id: 'company_name', label: 'Nombre de empresa (si aplica)', type: 'text', required: false },
        { id: 'regime', label: 'Régimen tributario', type: 'select', options: ['Simplificado', 'Común', 'No aplica'], required: false },
      ],
      appointmentExtraFields: [
        { id: 'service_type', label: 'Tipo de servicio', type: 'select', options: ['Declaración de renta', 'Contabilidad mensual', 'Nómina', 'Asesoría', 'Otro'], required: false },
      ],
      defaultServices: [
        { name: 'Declaración de renta personas natural', duration_minutes: 0, price: 120000, category: 'Tributario' },
        { name: 'Declaración de renta empresas', duration_minutes: 0, price: 250000, category: 'Tributario' },
        { name: 'Contabilidad mensual', duration_minutes: 0, price: 350000, category: 'Contabilidad' },
        { name: 'Consulta contable', duration_minutes: 30, price: 60000, category: 'Consulta' },
      ],
      serviceFields: { showCategory: true, showDuration: true, showPrice: true, showGender: false },
      showInventory: false,
      showTurnos: false,
    },
  ],

  // ── TÉCNICOS ─────────────────────────────────
  technical: [
    {
      id: 'taller_automotriz',
      name: 'Taller Automotriz / Mecánico',
      icon: '🚗',
      labels: {
        client: 'Cliente',
        clients: 'Clientes',
        appointment: 'Orden de trabajo',
        service: 'Servicio mecánico',
      },
      clientExtraFields: [],
      appointmentExtraFields: [
        { id: 'vehicle_plate', label: 'Placa del vehículo', type: 'text', placeholder: 'Ej: ABC123', required: true },
        { id: 'vehicle_brand', label: 'Marca y modelo', type: 'text', placeholder: 'Ej: Toyota Corolla 2020', required: false },
        { id: 'vehicle_mileage', label: 'Kilometraje actual', type: 'number', required: false },
        { id: 'reported_issue', label: 'Falla reportada', type: 'textarea', required: true },
      ],
      defaultServices: [
        { name: 'Cambio de aceite', duration_minutes: 30, price: 45000, category: 'Mantenimiento' },
        { name: 'Revisión general', duration_minutes: 60, price: 50000, category: 'Diagnóstico' },
        { name: 'Cambio de frenos', duration_minutes: 90, price: 120000, category: 'Frenos' },
        { name: 'Diagnóstico computarizado', duration_minutes: 30, price: 35000, category: 'Diagnóstico' },
        { name: 'Lavado completo', duration_minutes: 45, price: 30000, category: 'Lavado' },
      ],
      serviceFields: { showCategory: true, showDuration: true, showPrice: true, showGender: false },
      showInventory: true,
      showTurnos: true,
    },
    {
      id: 'reparacion_equipos',
      name: 'Reparación de Equipos / Electrónica',
      icon: '💻',
      labels: {
        client: 'Cliente',
        clients: 'Clientes',
        appointment: 'Orden de servicio',
        service: 'Servicio técnico',
      },
      clientExtraFields: [],
      appointmentExtraFields: [
        { id: 'device_type', label: 'Tipo de equipo', type: 'select', options: ['Computador', 'Celular', 'Tablet', 'Impresora', 'TV', 'Electrodoméstico', 'Otro'], required: true },
        { id: 'device_brand', label: 'Marca y modelo', type: 'text', required: false },
        { id: 'reported_issue', label: 'Falla reportada', type: 'textarea', required: true },
        { id: 'device_serial', label: 'Serial / IMEI', type: 'text', required: false },
      ],
      defaultServices: [
        { name: 'Diagnóstico', duration_minutes: 30, price: 20000, category: 'Diagnóstico' },
        { name: 'Formateo e instalación Windows', duration_minutes: 60, price: 60000, category: 'Software' },
        { name: 'Cambio de pantalla celular', duration_minutes: 60, price: 80000, category: 'Hardware' },
        { name: 'Mantenimiento preventivo PC', duration_minutes: 60, price: 50000, category: 'Mantenimiento' },
      ],
      serviceFields: { showCategory: true, showDuration: true, showPrice: true, showGender: false },
      showInventory: true,
      showTurnos: true,
    },
  ],

  // ── GASTRONOMÍA ──────────────────────────────
  restaurant: [
    {
      id: 'restaurante',
      name: 'Restaurante',
      icon: '🍽️',
      labels: {
        client: 'Comensal',
        clients: 'Comensales',
        appointment: 'Reserva',
        service: 'Menú / Servicio',
      },
      clientExtraFields: [],
      appointmentExtraFields: [
        { id: 'party_size', label: 'Número de personas', type: 'number', required: true },
        { id: 'special_request', label: 'Solicitud especial', type: 'textarea', placeholder: 'Alergias, celebración, mesa preferida...', required: false },
      ],
      defaultServices: [
        { name: 'Reserva mesa 2 personas', duration_minutes: 90, price: 0, category: 'Reserva' },
        { name: 'Reserva mesa 4 personas', duration_minutes: 90, price: 0, category: 'Reserva' },
        { name: 'Evento privado', duration_minutes: 180, price: 0, category: 'Evento' },
      ],
      serviceFields: { showCategory: true, showDuration: true, showPrice: false, showGender: false },
      showInventory: true,
      showTurnos: true,
    },
  ],

  // ── SECTOR PÚBLICO ───────────────────────────
  public: [
    {
      id: 'eps_ips',
      name: 'EPS / IPS',
      icon: '🏥',
      labels: {
        client: 'Afiliado',
        clients: 'Afiliados',
        appointment: 'Turno',
        service: 'Trámite / Servicio',
      },
      clientExtraFields: [
        { id: 'birth_date', label: 'Fecha de nacimiento', type: 'date', required: true },
        { id: 'affiliation_number', label: 'Número de afiliado', type: 'text', required: false },
        { id: 'eps_name', label: 'EPS', type: 'text', required: false },
      ],
      appointmentExtraFields: [
        { id: 'tramite_type', label: 'Tipo de trámite', type: 'select', options: ['Radicación', 'Autorización', 'Cita médica', 'Reclamación', 'Certificado', 'Otro'], required: true },
      ],
      defaultServices: [
        { name: 'Radicación de documentos', duration_minutes: 15, price: 0, category: 'Trámite' },
        { name: 'Autorización de servicios', duration_minutes: 20, price: 0, category: 'Trámite' },
        { name: 'Caja - Pagos', duration_minutes: 10, price: 0, category: 'Caja' },
        { name: 'Información / PQR', duration_minutes: 15, price: 0, category: 'Información' },
      ],
      serviceFields: { showCategory: true, showDuration: true, showPrice: false, showGender: false },
      showInventory: false,
      showTurnos: true,
    },
    {
      id: 'notaria_tramites',
      name: 'Notaría / Trámites',
      icon: '🏛️',
      labels: {
        client: 'Ciudadano',
        clients: 'Ciudadanos',
        appointment: 'Turno',
        service: 'Trámite',
      },
      clientExtraFields: [
        { id: 'identification_type', label: 'Tipo de documento', type: 'select', options: ['CC', 'CE', 'Pasaporte', 'TI'], required: true },
      ],
      appointmentExtraFields: [
        { id: 'tramite_type', label: 'Trámite a realizar', type: 'select', options: ['Escritura', 'Poder', 'Autenticación', 'Declaración', 'Matrimonio', 'Otro'], required: true },
      ],
      defaultServices: [
        { name: 'Autenticación de documentos', duration_minutes: 15, price: 10000, category: 'Autenticación' },
        { name: 'Escritura pública', duration_minutes: 30, price: 0, category: 'Escritura' },
        { name: 'Declaración extrajudicial', duration_minutes: 20, price: 30000, category: 'Declaración' },
      ],
      serviceFields: { showCategory: true, showDuration: true, showPrice: true, showGender: false },
      showInventory: false,
      showTurnos: true,
    },
  ],

  // ── VETERINARIA ──────────────────────────────
  veterinary: [
    {
      id: 'clinica_veterinaria',
      name: 'Clínica Veterinaria',
      icon: '🩺',
      labels: {
        client: 'Propietario',
        clients: 'Propietarios',
        appointment: 'Cita',
        service: 'Servicio veterinario',
      },
      clientExtraFields: [],
      appointmentExtraFields: [
        { id: 'pet_name', label: 'Nombre de la mascota', type: 'text', required: true },
        { id: 'pet_species', label: 'Especie', type: 'select', options: ['Perro', 'Gato', 'Ave', 'Reptil', 'Roedor', 'Otro'], required: true },
        { id: 'pet_breed', label: 'Raza', type: 'text', required: false },
        { id: 'pet_age', label: 'Edad de la mascota', type: 'text', placeholder: 'Ej: 2 años', required: false },
        { id: 'consultation_reason', label: 'Motivo de consulta', type: 'textarea', required: true },
      ],
      defaultServices: [
        { name: 'Consulta general', duration_minutes: 20, price: 40000, category: 'Consulta' },
        { name: 'Vacunación', duration_minutes: 15, price: 25000, category: 'Preventivo' },
        { name: 'Desparasitación', duration_minutes: 10, price: 20000, category: 'Preventivo' },
        { name: 'Cirugía esterilización', duration_minutes: 90, price: 250000, category: 'Cirugía' },
        { name: 'Baño y peluquería', duration_minutes: 60, price: 40000, category: 'Estética' },
      ],
      serviceFields: { showCategory: true, showDuration: true, showPrice: true, showGender: false },
      showInventory: true,
      showTurnos: true,
      showMedicalHistory: true,
    },
    {
      id: 'grooming',
      name: 'Grooming / Peluquería Canina',
      icon: '🐶',
      labels: {
        client: 'Dueño',
        clients: 'Dueños',
        appointment: 'Cita de baño',
        service: 'Servicio de grooming',
      },
      clientExtraFields: [],
      appointmentExtraFields: [
        { id: 'pet_name', label: 'Nombre de la mascota', type: 'text', required: true },
        { id: 'pet_species', label: 'Especie', type: 'select', options: ['Perro', 'Gato', 'Otro'], required: true },
        { id: 'pet_breed', label: 'Raza', type: 'text', required: false },
        { id: 'pet_size', label: 'Tamaño', type: 'select', options: ['Mini', 'Pequeño', 'Mediano', 'Grande', 'Extra grande'], required: true },
        { id: 'special_notes', label: 'Observaciones especiales', type: 'textarea', required: false },
      ],
      defaultServices: [
        { name: 'Baño y secado mini', duration_minutes: 60, price: 25000, category: 'Baño' },
        { name: 'Baño y secado pequeño', duration_minutes: 75, price: 30000, category: 'Baño' },
        { name: 'Baño y secado mediano', duration_minutes: 90, price: 40000, category: 'Baño' },
        { name: 'Baño y secado grande', duration_minutes: 120, price: 55000, category: 'Baño' },
        { name: 'Corte + baño mini', duration_minutes: 90, price: 45000, category: 'Estética' },
        { name: 'Spa completo', duration_minutes: 120, price: 70000, category: 'Spa' },
      ],
      serviceFields: { showCategory: true, showDuration: true, showPrice: true, showGender: false },
      showInventory: true,
      showTurnos: false,
    },
  ],

  // ── EDUCACIÓN ────────────────────────────────
  education: [
    {
      id: 'academia',
      name: 'Academia / Cursos',
      icon: '📚',
      labels: {
        client: 'Estudiante',
        clients: 'Estudiantes',
        appointment: 'Clase / Sesión',
        service: 'Curso / Módulo',
      },
      clientExtraFields: [
        { id: 'birth_date', label: 'Fecha de nacimiento', type: 'date', required: false },
        { id: 'education_level', label: 'Nivel de educación', type: 'select', options: ['Primaria', 'Secundaria', 'Técnico', 'Universitario', 'Profesional'], required: false },
      ],
      appointmentExtraFields: [],
      defaultServices: [
        { name: 'Inscripción curso mensual', duration_minutes: 0, price: 150000, category: 'Inscripción' },
        { name: 'Clase individual', duration_minutes: 60, price: 40000, category: 'Clase' },
        { name: 'Taller intensivo', duration_minutes: 480, price: 120000, category: 'Taller' },
      ],
      serviceFields: { showCategory: true, showDuration: true, showPrice: true, showGender: false },
      showInventory: false,
      showTurnos: false,
    },
    {
      id: 'profesor_particular',
      name: 'Profesor Particular',
      icon: '👨‍🏫',
      labels: {
        client: 'Alumno',
        clients: 'Alumnos',
        appointment: 'Clase',
        service: 'Materia / Área',
      },
      clientExtraFields: [
        { id: 'birth_date', label: 'Fecha de nacimiento', type: 'date', required: false },
        { id: 'school_grade', label: 'Grado / Semestre', type: 'text', required: false },
        { id: 'school_name', label: 'Institución', type: 'text', required: false },
      ],
      appointmentExtraFields: [
        { id: 'subject', label: 'Materia', type: 'text', required: true },
        { id: 'topic', label: 'Tema a trabajar', type: 'text', required: false },
      ],
      defaultServices: [
        { name: 'Clase individual 1h', duration_minutes: 60, price: 30000, category: 'Clase' },
        { name: 'Clase individual 2h', duration_minutes: 120, price: 55000, category: 'Clase' },
        { name: 'Pack 10 clases', duration_minutes: 0, price: 250000, category: 'Pack' },
      ],
      serviceFields: { showCategory: true, showDuration: true, showPrice: true, showGender: false },
      showInventory: false,
      showTurnos: false,
    },
  ],

  // ── COMERCIO MINORISTA ───────────────────────
  retail: [
    {
      id: 'tienda_ropa',
      name: 'Tienda de Ropa / Boutique',
      icon: '👗',
      labels: {
        client: 'Cliente',
        clients: 'Clientes',
        appointment: 'Turno de atención',
        service: 'Asesoría / Servicio',
      },
      clientExtraFields: [],
      appointmentExtraFields: [],
      defaultServices: [
        { name: 'Asesoría de imagen', duration_minutes: 60, price: 50000, category: 'Asesoría' },
        { name: 'Atención prioritaria', duration_minutes: 30, price: 0, category: 'Atención' },
      ],
      serviceFields: { showCategory: true, showDuration: true, showPrice: true, showGender: false },
      showInventory: true,
      showTurnos: true,
    },
  ],

  // ── OTROS ────────────────────────────────────
  other: [
    {
      id: 'general',
      name: 'Servicio General',
      icon: '🔧',
      labels: {
        client: 'Cliente',
        clients: 'Clientes',
        appointment: 'Cita',
        service: 'Servicio',
      },
      clientExtraFields: [],
      appointmentExtraFields: [],
      defaultServices: [],
      serviceFields: { showCategory: true, showDuration: true, showPrice: true, showGender: false },
      showInventory: true,
      showTurnos: true,
    },
  ],
}

// ─────────────────────────────────────────────
// 3. HELPERS
// ─────────────────────────────────────────────

/**
 * Devuelve los subtipos disponibles para un tipo de negocio.
 * @param {string} type - ID del tipo de negocio
 * @returns {Array}
 */
export const getSubtypes = (type) => BUSINESS_SUBTYPES[type] || BUSINESS_SUBTYPES.other

/**
 * Devuelve la configuración de un subtipo específico.
 * Fallback al primer subtipo del tipo si no se encuentra.
 * @param {string} type
 * @param {string} subtypeId
 * @returns {Object}
 */
export const getSubtypeConfig = (type, subtypeId) => {
  const subtypes = getSubtypes(type)
  return subtypes.find((s) => s.id === subtypeId) || subtypes[0]
}

/**
 * Devuelve las etiquetas adaptadas para el tipo+subtipo actual.
 * Uso: const { client, clients, appointment } = useBusinessLabels()
 * @param {string} type
 * @param {string} subtypeId
 * @returns {Object}
 */
export const getBusinessLabels = (type, subtypeId) => {
  const config = getSubtypeConfig(type, subtypeId)
  return (
    config?.labels || {
      client: 'Cliente',
      clients: 'Clientes',
      appointment: 'Cita',
      service: 'Servicio',
    }
  )
}

/**
 * Devuelve los campos adicionales del formulario de cliente para el subtipo.
 * @param {string} type
 * @param {string} subtypeId
 * @returns {Array}
 */
export const getClientExtraFields = (type, subtypeId) => {
  const config = getSubtypeConfig(type, subtypeId)
  return config?.clientExtraFields || []
}

/**
 * Devuelve los campos adicionales del formulario de cita para el subtipo.
 * @param {string} type
 * @param {string} subtypeId
 * @returns {Array}
 */
export const getAppointmentExtraFields = (type, subtypeId) => {
  const config = getSubtypeConfig(type, subtypeId)
  return config?.appointmentExtraFields || []
}

/**
 * Devuelve el catálogo de servicios por defecto para el subtipo.
 * Se usa al crear un nuevo negocio para pre-poblar sus servicios.
 * @param {string} type
 * @param {string} subtypeId
 * @returns {Array}
 */
export const getDefaultServices = (type, subtypeId) => {
  const config = getSubtypeConfig(type, subtypeId)
  return config?.defaultServices || []
}
