import {
  BriefcaseBusiness,
  ClipboardCheck,
  FileText,
  Gavel,
  HeartHandshake,
  Landmark,
  MessageCircle,
  Scale,
  ShieldCheck,
  Users
} from "lucide-react";

export const lawyerPhoto = "/images/lawyer-profile-photo.png";
export const JudicialComplexCenter = "/images/complejo_judicial.jpg";

export const contactInfo = {
  phone: "+505 0000 0000",
  phoneHref: "tel:+50500000000",
  email: "correo@pendiente.com",
  emailHref: "mailto:correo@pendiente.com",
  whatsapp: "https://wa.me/50500000000",
  location: "Managua, Nicaragua",
  schedule: "Horario por confirmar"
};

export const navItems = [
  { label: "Inicio", href: "#inicio" },
  { label: "Sobre mi", href: "#sobre-mi" },
  { label: "Areas legales", href: "#areas" },
  { label: "Estrategia", href: "#casos" },
  { label: "Perfil", href: "#equipo" },
  { label: "Preguntas frecuentes", href: "#faq" },
  { label: "Contacto", href: "#contacto" }
];

export const trustCards = [
  {
    icon: HeartHandshake,
    title: "Atencion personalizada",
    text: "Cada caso recibe analisis individual, seguimiento profesional y comunicacion directa."
  },
  {
    icon: Scale,
    title: "Estrategia juridica",
    text: "Soluciones legales adaptadas a los hechos, riesgos y objetivos particulares del cliente."
  },
  {
    icon: ShieldCheck,
    title: "Compromiso profesional",
    text: "Representacion responsable orientada a proteger derechos e intereses con criterio tecnico."
  }
];

export const practiceAreas = [
  {
    icon: Gavel,
    title: "Derecho Penal",
    text: "Representacion y defensa juridica en procesos penales."
  },
  {
    icon: Landmark,
    title: "Derecho Civil",
    text: "Asesoria y representacion en conflictos civiles y patrimoniales."
  },
  {
    icon: BriefcaseBusiness,
    title: "Derecho Mercantil",
    text: "Apoyo legal para empresas, contratos y operaciones comerciales."
  },
  {
    icon: Users,
    title: "Derecho Laboral",
    text: "Asesoria en relaciones laborales y resolucion de conflictos."
  },
  {
    icon: Scale,
    title: "Recursos de Apelacion",
    text: "Preparacion y presentacion de recursos juridicos, incluyendo medios de impugnacion."
  },
  {
    icon: ClipboardCheck,
    title: "Consultoria Legal",
    text: "Analisis juridico preventivo para personas, empresas y organizaciones."
  }
];

export const cases = [
  {
    title: "Procesos juridicos complejos",
    category: "Analisis y estrategia",
    image: lawyerPhoto,
    text: "Revision tecnica de antecedentes, riesgos y rutas legales antes de tomar decisiones."
  },
  {
    title: "Recursos e impugnaciones",
    category: "Apelacion y casacion",
    image: lawyerPhoto,
    text: "Preparacion de argumentos juridicos para la defensa de derechos en instancias superiores."
  },
  {
    title: "Representacion de personas y empresas",
    category: "Acompanamiento legal",
    image: lawyerPhoto,
    text: "Asesoria clara y seguimiento profesional para asuntos legales de distinta naturaleza."
  }
];

export const attorneys = [
  {
    name: "Dr. Juan Gabriel Diaz Rocha",
    specialty: "Abogado nicaraguense | Master en Derecho Internacional",
    image: lawyerPhoto
  }
];

export const faqs = [
  {
    question: "Como puedo solicitar una consulta?",
    answer:
      "Puede comunicarse mediante WhatsApp o completar el formulario de contacto para coordinar una evaluacion inicial."
  },
  {
    question: "Atienden casos en todo Nicaragua?",
    answer:
      "Si, sujeto a la naturaleza del caso, disponibilidad y requerimientos especificos de representacion."
  },
  {
    question: "Que documentos debo presentar?",
    answer:
      "Dependera del tipo de asunto legal. Durante la consulta inicial se indicaran los requisitos y documentos necesarios."
  },
  {
    question: "La primera consulta tiene costo?",
    answer:
      "Este punto debe confirmarse directamente con el despacho antes de agendar la consulta."
  }
];

export const testimonials = [
  {
    quote: "Ano de graduacion, universidades, especializaciones, diplomados y maestrias.",
    name: "Credenciales",
    role: "Pendiente de validacion"
  },
  {
    quote: "Lista exacta de areas legales, servicios principales y servicios que no ofrece.",
    name: "Servicios",
    role: "Pendiente de confirmacion"
  },
  {
    quote: "Testimonios reales, reconocimientos, entrevistas, conferencias y asociaciones profesionales.",
    name: "Autoridad publica",
    role: "Pendiente de recopilar"
  }
];

export const metrics = [
  { value: "15+", label: "Anos de experiencia", note: "Por confirmar" },
  { value: "500+", label: "Casos atendidos", note: "Por confirmar" },
  { value: "90%", label: "Satisfaccion de clientes", note: "Por confirmar" },
  { value: "24/7", label: "Atencion y seguimiento", note: "Por confirmar" }
];

export const blogPosts = [
  {
    icon: FileText,
    title: "Que preparar antes de una consulta legal",
    text: "Documentos, fechas, comunicaciones y antecedentes que ayudan a evaluar mejor un caso.",
    tag: "Consulta legal"
  },
  {
    icon: Scale,
    title: "Medios de impugnacion: apelacion y casacion",
    text: "Una introduccion general sobre recursos juridicos y la importancia de la estrategia procesal.",
    tag: "Recursos"
  },
  {
    icon: MessageCircle,
    title: "Comunicacion clara durante el proceso",
    text: "Por que el seguimiento profesional ayuda a tomar decisiones informadas y oportunas.",
    tag: "Acompanamiento"
  }
];
