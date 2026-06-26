import { createContext, useContext, useState, type ReactNode } from "react";

export type Language = "en" | "es";

type TranslationKey = keyof typeof translations.en;

interface TranslationContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: TranslationKey) => string;
}

const TranslationContext = createContext<TranslationContextType | undefined>(undefined);

export function TranslationProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");

  const t = (key: TranslationKey): string => {
    const langDict = translations[language] || translations["en"];
    return langDict[key as keyof typeof langDict] || translations["en"][key] || key;
  };

  return (
    <TranslationContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </TranslationContext.Provider>
  );
}

export function useTranslation() {
  const context = useContext(TranslationContext);
  if (!context) {
    return {
      language: "en" as Language,
      setLanguage: () => {},
      t: (key: TranslationKey) => translations["en"][key] || key
    };
  }
  return context;
}

export const translations = {
  en: {
    // TopBar & Header
    "topbar.email": "rightlanehandymanservice@yahoo.com",
    "topbar.location": "Clearwater, FL",
    "topbar.emergency": "Emergency Services: 24/7 Emergency Assistance Available.",
    "nav.home": "Home",
    "nav.about": "About Us",
    "nav.services": "Services",
    "nav.work": "Our Work",
    "nav.reviews": "Reviews",
    "nav.contact": "Contact Us",
    "nav.talk": "Let's Talk",

    // Hero Section
    "hero.title": "25 Years of Trusted Handyman Service",
    "hero.description": "Licensed, insured, and bonded. We handle residential, commercial, and industrial jobs across Pinellas County. From demolition to pressure washing, junk removal to post-construction cleaning – no job is too big or small.",
    "hero.btn.consultation": "Get Your Free Consultation",
    "hero.btn.book": "Book A Service",

    // Welcome Section
    "welcome.badge": "RIGHT LANE HANDYMAN SERVICES, LLC",
    "welcome.title": "25 Years of Handyman Expertise – For Every Home, Business, and Job Site.",
    "welcome.desc": "For over 25 years, Ronnie and his team have been the go-to handyman and hauling experts across Pinellas County. Based right here in Clearwater, FL, we are fully licensed, insured, and bonded — handling everything from post-construction cleaning and demolition to pressure washing and heavy junk removal. Whether you’re a homeowner, a property manager, or an industrial contractor, we treat your job with the same level of care, respect, and professionalism. No mess is too big. No job is too small. Let us get your property back in the right lane.",
    "welcome.btn.call": "Call Now To Get Started!",
    "welcome.btn.consultation": "Get Your Free Consultation",
    "welcome.contact.title": "Contact Us:",

    // Services Section
    "services.badge": "OUR SERVICES",
    "services.title": "Services We’re Offering",
    "services.description": "Our highly qualified employee-owners deliver expertise and exceptional service across a diverse portfolio of project types.",
    "services.cleaning": "Post Construction Cleaning",
    "services.pressurewash": "Pressure Washing",
    "services.demolition": "Demolition",
    "services.junkremoval": "Junk Removal & Hauling",
    "services.maintenance": "Property maintenance",
    "services.debrisremoval": "Waste, Building Materials & Debris Removal",
    "services.landscaping": "Landscaping",
    "services.cleaning.desc": "Spotless and detailed cleaning services to make your newly built or renovated property move-in ready.",
    "services.pressurewash.desc": "High-powered deep cleaning for driveways, decks, siding, and exterior surfaces to restore pristine curb appeal.",
    "services.demolition.desc": "Safe, efficient structural dismantling and site preparation for residential and commercial projects.",
    "services.junkremoval.desc": "Full-service hauling and disposal of unwanted furniture, appliances, and general household items.",
    "services.maintenance.desc": "General handyman repairs, preventative upkeep, and custom improvements for home and business owners.",
    "services.debrisremoval.desc": "Fast cleanup and removal of construction waste, metal, concrete, drywall, and leftover building materials.",
    "services.landscaping.desc": "Complete garden setup, cleanups, sod installation, mulching, and custom landscape maintenance.",
    "services.btn.more": "View More of Our Work",

    // Get Started Section
    "getstarted.title": "Get Started on Your\nConstruction and Landscaping Design Journey Today.",
    "getstarted.description": "For over 25 years, Right Lane Handyman Services has been the trusted name in Clearwater, FL for transforming properties, restoring their beauty, and renovating them into something extraordinary. Whether you're recovering from unexpected damage or ready to update and upgrade your space, our expert team brings 25 years of precision, care, and craftsmanship to every project.",
    "getstarted.btn.consultation": "Get Your Free Consultation",
    "getstarted.btn.gallery": "View Our Gallery",

    // Why Choose Section
    "whychoose.badge": "Why Choose Us",
    "whychoose.title": "Why Clearwater Trusts Right Lane Handyman Services, LLC",
    "whychoose.f1.title": "25+ Years of Experience",
    "whychoose.f1.desc": "Every job is handled with skill and speed.",
    "whychoose.f2.title": "Licensed, Insured & Bonded",
    "whychoose.f2.desc": "Complete peace of mind for your property.",
    "whychoose.f3.title": "Residential, Commercial & Industrial",
    "whychoose.f3.desc": "We do it all.",
    "whychoose.f4.title": "24/7 Emergency Service",
    "whychoose.f4.desc": "Nights, weekends, and Sundays (emergency only).",
    "whychoose.f5.title": "Upfront Pricing",
    "whychoose.f5.desc": "No surprises, no hidden fees.",
    "whychoose.f6.title": "Guaranteed Work",
    "whychoose.f6.desc": "100% satisfaction.",
    "whychoose.f7.title": "We Haul What Others Won't",
    "whychoose.f7.desc": "Heavy debris, mixed materials, and full-site cleanouts.",
    "whychoose.f8.title": "Locally Owned – Clearwater, FL",
    "whychoose.f8.desc": "We know these communities.",
    "whychoose.btn.book": "Book a Service",

    // Free Consultation Section
    "freeconsult.title": "Start with a Free Consultation for Your Remodel or Outdoor Project",
    "freeconsult.desc": "Take the first step toward your dream space. Get a detailed, free quote from Right Lane Handyman Services, LLC. From home repair to kitchen remodeling, we provide the clarity and expert planning you need to move forward with confidence.",
    "freeconsult.card1.title": "Experienced Team",
    "freeconsult.card1.desc": "Our skilled professionals bring decades of hands-on experience in construction and landscape design, ensuring expert craftsmanship for every remodeling and hardscaping project.",
    "freeconsult.card2.title": "Safe and Effective Solutions",
    "freeconsult.card2.desc": "We use proven methods, quality materials, and a meticulous approach that is both safe for your property and highly effective in delivering lasting, beautiful results.",
    "freeconsult.card3.title": "Customer Satisfaction",
    "freeconsult.card3.desc": "We focus on clear communication and personalized project management, ensuring your vision is met and your satisfaction is guaranteed from consultation to completion.",
    "freeconsult.card4.title": "Comprehensive Service",
    "freeconsult.card4.desc": "From initial design and free consultation to final construction and follow-up, we offer a complete range of licensed and insured services for all your residential and commercial needs.",

    // Gallery Section
    "gallery.badge": "RECENT WORK",
    "gallery.title": "Our Recent Work",

    // Quote Section
    "quote.area.badge": "Service Areas",
    "quote.area.title": "Proudly Serving Clearwater and Surrounding Areas",
    "quote.form.title": "Request a Quote",
    "quote.form.desc": "We proudly serve Clearwater, Largo, St. Petersburg, Dunedin, Pinellas Park, Tarpon Springs, and the surrounding Pinellas County, FL area.",
    "quote.form.first": "First Name",
    "quote.form.last": "Last Name",
    "quote.form.phone": "Phone Number",
    "quote.form.email": "Email Address",
    "quote.form.state": "State of Residence",
    "quote.form.service": "Select Service",
    "quote.form.select": "Select...",
    "quote.form.message.label": "Message",
    "quote.form.message.placeholder": "Write Your Message",
    "quote.form.send": "Send Now",

    // Reviews Section
    "reviews.badge": "REVIEWS",
    "reviews.title": "Trusted Reviews From Homeowners & Businesses",
    "reviews.basedon": "Based on 100+ Google Reviews",
    "reviews.readall": "Read All Reviews",
    "reviews.1.text": "Right Lane Handyman Services did an absolutely incredible job on our outdoor kitchen. The craftsmanship is top-notch and they finished on time and on budget. Couldn't be happier!",
    "reviews.1.name": "Cristina — Home Owner Site",
    "reviews.1.date": "June 2025 · Verified",
    "reviews.2.text": "Right Lane and their team transformed our backyard with a beautiful pool and patio. Professional, responsive, and detail-oriented from start to finish. Highly recommend.",
    "reviews.2.name": "Martin & Sumera C., Clearwater",
    "reviews.2.date": "April 2025 · Verified",
    "reviews.3.text": "We hired Right Lane for a complete house remodel and the results exceeded our expectations. They communicate well and stand behind their work. Truly the best in Clearwater.",
    "reviews.3.name": "The Carter Family · Largo",
    "reviews.3.date": "March 2025 · Verified",

    // Stats Section
    "stats.title": "Emergency Cleanup & Hauling – Call for Availability.",
    "stats.desc": "Post-construction pileup? Storm debris? Unexpected property cleanout? We respond fast with trucks and crew. Call Mr. Ronnie Lane 24/7",
    "stats.btn": "Get a Quote",
    "stats.btn.estimate": "Get a Free Estimate",
    "stats.btn.call": "Call Us Now",
    "stats.btn.consultation": "Get a Free Consultation",
    "stats.label.jobs": "Completed Jobs",
    "stats.label.clients": "Loyal Clients",
    "stats.label.projects": "Completed Projects",
    "stats.label.complete_project": "Complete Project",
    "stats.label.happy_clients": "Happy Clients",
    "stats.label.expert_member": "Expert Member",
    "stats.label.years_experience": "Years Of Experience",

    // FAQ Section
    "faq.badge": "FAQ'S",
    "faq.title": "Frequently Asked Questions",
    "faq.desc": "Quick answers about what we haul, clean, and demolish. For your specific job? Call Ronnie Lane directly at (727) 642-0201.",
    "faq.btn.action": "See Our Work in Action",
    "faq.btn.consultation": "Get a Free Consultation",
    "faq.q1": "Do You Serve Both Homes And Businesses?",
    "faq.a1": "Yes – residential, commercial, and industrial clients across all listed cities.",
    "faq.q2": "Are You Licensed And Insured?",
    "faq.a2": "Absolutely. Right Lane Handyman Services, LLC is a fully licensed, insured, and bonded contractor in the state of Florida. We will provide proof of licensing and insurance upon request before any project begins.",
    "faq.q3": "What Do You Haul Away?",
    "faq.a3": "We haul a wide variety of materials, including construction debris, yard waste, old furniture, appliances, metal, concrete, and general household or commercial junk.",
    "faq.q4": "Do I Need To Be Home For A Quote?",
    "faq.a4": "No, you do not need to be home for exterior projects (like pressure washing, debris hauling, or landscaping) as long as we have clear access to the property. For interior repairs or remodeling, we will schedule a time when you are present.",
    "faq.q5": "What's Your Service Area?",
    "faq.a5": "We proudly serve Clearwater, Largo, St. Petersburg, Dunedin, Pinellas Park, Tarpon Springs, and all of Pinellas County, FL.",

    // Prompt CTA Section
    "cta.prompt.badge": "Clearwater's Trusted Handyman",
    "cta.prompt.title": "Need Professional Home Repairs, Remodeling, or Hauling?",
    "cta.prompt.desc": "Don't let home repairs or project cleanups pile up. From drywall patching and custom carpentry to property maintenance and heavy debris hauling, our licensed, insured, and bonded crew is here to help get your property back in the right lane.",
    "cta.prompt.f1": "25+ Years of Expertise",
    "cta.prompt.f2": "Prompt & Reliable Service",
    "cta.prompt.f3": "Fully Licensed, Insured & Bonded",
    "cta.prompt.f4": "100% Satisfaction Guarantee",
    "cta.prompt.btn.sub": "Call for a Free Estimate",
    "cta.prompt.badge.loc": "Active & serving Clearwater, Largo, St. Petersburg & surrounding areas",

    // CTA Section
    "cta.badge": "CONTACT US",
    "cta.title": "Ready to Cross That Project Off Your List?",
    "cta.desc": "Whether it’s a garage full of junk, a property that needs pressure washing, or post-construction cleanup – we’re here to help. Contact Ronnie Lane today for a free, no-obligation estimate. No hassle. Just honest, reliable service from a name you can trust.",
    "cta.form.name": "Full Name",
    "cta.form.phone": "Phone Number",
    "cta.form.email": "Email Address",
    "cta.form.address": "Address",
    "cta.form.services": "Select Service",
    "cta.form.message": "Message",
    "cta.form.btn": "Send Now",

    // Footer Section
    "footer.desc": "Right Lane Handyman Services, LLC, your trusted partner for premier handyman and remodeling services in Clearwater, FL. For over 25 years, our skilled team has been dedicated to turning our clients' visions into stunning, lasting reality. We combine unparalleled craftsmanship with creative design to enhance both the beauty and value of your property.",
    "footer.title.col1": "Right Lane Handyman Services, LLC",
    "footer.title.services": "Services",
    "footer.title.links": "Quick Links",
    "footer.title.contact": "Contact Us",
    "footer.service.1": "House Remodeling",
    "footer.service.2": "New Construction Service",
    "footer.service.3": "Fireplace",
    "footer.service.4": "Fencing",
    "footer.service.5": "Hardscape",
    "footer.service.6": "Covered Patios",
    "footer.service.7": "View More...",
    "footer.link.1": "Home",
    "footer.link.2": "About Us",
    "footer.link.3": "Services",
    "footer.link.4": "Our Work",
    "footer.link.5": "Reviews",
    "footer.link.6": "Get a Free Consultation",
    "footer.link.7": "Contact Us",
    "footer.contact.consultant": "Licensed | Insured | Bonded",
    "footer.contact.robert": "Phone: (727) 642-0201",
    "footer.contact.arturo": "25 Years Of Experience",
    "footer.contact.email": "Email: rightlanehandymanservice@yahoo.com",
    "footer.contact.address": "Address: Clearwater, FL 33756",
    "footer.copyright": "Copyright © 2026 Right Lane Handyman Services, LLC. All rights reserved.",
  },
  es: {
    // TopBar & Header
    "topbar.email": "rightlanehandymanservice@yahoo.com",
    "topbar.location": "Clearwater, FL",
    "topbar.emergency": "Servicios de Emergencia: Asistencia 24/7 disponible.",
    "nav.home": "Inicio",
    "nav.about": "Nosotros",
    "nav.services": "Servicios",
    "nav.work": "Galería",
    "nav.reviews": "Opiniones",
    "nav.contact": "Contacto",
    "nav.talk": "Hablemos",

    // Hero Section
    "hero.title": "25 Años de Servicio de Handyman de Confianza",
    "hero.description": "Licenciado, asegurado y con fianza. Manejamos trabajos residenciales, comerciales e industriales en todo Pinellas County. Desde demolición hasta lavado a presión, remoción de escombros y limpieza post-construcción — ningún trabajo es demasiado grande o pequeño.",
    "hero.btn.consultation": "Obtenga su Consulta Gratuita",
    "hero.btn.book": "Reservar Servicio",

    // Welcome Section
    "welcome.badge": "RIGHT LANE HANDYMAN SERVICES, LLC",
    "welcome.title": "25 Años de Experiencia en Reparaciones — Para cada hogar, negocio y sitio de trabajo.",
    "welcome.desc": "Por más de 25 años, Ronnie y su equipo han sido los expertos de handyman y mudanzas en todo el condado de Pinellas. Con base aquí mismo en Clearwater, FL, estamos totalmente licenciados, asegurados y con fianza — manejando desde limpieza post-construcción y demolición hasta lavado a presión y remoción de escombros. Tratamos su trabajo con el mismo cuidado, respeto y profesionalismo. No hay desorden demasiado grande. No hay trabajo demasiado pequeño. Permítanos volver a poner su propiedad en el carril correcto.",
    "welcome.btn.call": "¡Llame ahora para comenzar!",
    "welcome.btn.consultation": "Obtenga su Consulta Gratuita",
    "welcome.contact.title": "Contacto:",

    // Services Section
    "services.badge": "NUESTROS SERVICIOS",
    "services.title": "Servicios que Ofrecemos",
    "services.description": "Nuestros propietarios-empleados altamente calificados ofrecen experiencia y servicio excepcional en una amplia variedad de proyectos.",
    "services.cleaning": "Limpieza Post Construcción",
    "services.pressurewash": "Lavado a Presión",
    "services.demolition": "Demolición",
    "services.junkremoval": "Remoción de Basura y Mudanzas",
    "services.maintenance": "Mantenimiento de Propiedades",
    "services.debrisremoval": "Remoción de Escombros y Desechos",
    "services.landscaping": "Jardinería y Paisajismo",
    "services.cleaning.desc": "Servicios de limpieza minuciosos y detallados para que su propiedad recién construida o renovada esté lista para mudarse.",
    "services.pressurewash.desc": "Limpieza profunda de alta presión para entradas de vehículos, terrazas, fachadas y superficies exteriores para restaurar el atractivo visual.",
    "services.demolition.desc": "Desmantelamiento estructural y preparación del sitio seguros y eficientes para proyectos residenciales y comerciales.",
    "services.junkremoval.desc": "Servicio completo de transporte y eliminación de muebles no deseados, electrodomésticos y artículos del hogar en general.",
    "services.maintenance.desc": "Reparaciones de handyman generales, mantenimiento preventivo y mejoras personalizadas para propietarios de hogares y negocios.",
    "services.debrisremoval.desc": "Limpieza rápida y eliminación de residuos de construcción, metales, concreto, paneles de yeso y materiales sobrantes.",
    "services.landscaping.desc": "Configuración completa de jardines, limpiezas, instalación de césped, mantillo y mantenimiento de paisajismo personalizado.",
    "services.btn.more": "Ver Más de Nuestro Trabajo",

    // Get Started Section
    "getstarted.title": "Comience su Viaje de Remodelación y Paisajismo Hoy.",
    "getstarted.description": "Por más de 25 años, Right Lane Handyman Services ha sido el nombre de confianza en Clearwater, FL para transformar propiedades, restaurar su belleza y renovarlas en algo extraordinario. Ya sea que se esté recuperando de daños inesperados o listo para actualizar y mejorar su espacio, nuestro equipo de expertos aporta 25 años de precisión, cuidado y artesanía a cada proyecto.",
    "getstarted.btn.consultation": "Obtenga su Consulta Gratuita",
    "getstarted.btn.gallery": "Ver Nuestra Galería",

    // Why Choose Section
    "whychoose.badge": "Por Qué Elegirnos",
    "whychoose.title": "Por Qué Clearwater Confía en Right Lane Handyman Services, LLC",
    "whychoose.f1.title": "25+ Años de Experiencia",
    "whychoose.f1.desc": "Cada trabajo se maneja con destreza y rapidez.",
    "whychoose.f2.title": "Licenciado, Asegurado y con Fianza",
    "whychoose.f2.desc": "Tranquilidad absoluta para su propiedad.",
    "whychoose.f3.title": "Residencial, Comercial e Industrial",
    "whychoose.f3.desc": "Hacemos todo tipo de proyectos.",
    "whychoose.f4.title": "Servicio de Emergencia 24/7",
    "whychoose.f4.desc": "Noches, fines de semana y domingos (solo emergencias).",
    "whychoose.f5.title": "Precios Transparentes",
    "whychoose.f5.desc": "Sin sorpresas ni tarifas ocultas.",
    "whychoose.f6.title": "Trabajo Garantizado",
    "whychoose.f6.desc": "100% de satisfacción del cliente.",
    "whychoose.f7.title": "Nos Llevamos lo que Otros No Quieren",
    "whychoose.f7.desc": "Escombros pesados, materiales mixtos y limpieza de obras.",
    "whychoose.f8.title": "Negocio Local — Clearwater, FL",
    "whychoose.f8.desc": "Conocemos profundamente nuestras comunidades.",
    "whychoose.btn.book": "Reservar Servicio",

    // Free Consultation Section
    "freeconsult.title": "Comience con una Consulta Gratuita para su Proyecto",
    "freeconsult.desc": "Dé el primer paso hacia su espacio ideal. Obtenga una cotización detallada de Right Lane Handyman Services, LLC. Brindamos la claridad y planificación experta que necesita.",
    "freeconsult.card1.title": "Equipo Experimentado",
    "freeconsult.card1.desc": "Nuestros profesionales calificados aportan décadas de experiencia en construcción y diseño, garantizando un trabajo impecable.",
    "freeconsult.card2.title": "Soluciones Seguras y Efectivas",
    "freeconsult.card2.desc": "Utilizamos métodos probados, materiales de calidad y un enfoque meticuloso que protege su propiedad.",
    "freeconsult.card3.title": "Satisfacción del Cliente",
    "freeconsult.card3.desc": "Nos enfocamos en una comunicación clara y gestión personalizada para cumplir con su visión exacta.",
    "freeconsult.card4.title": "Servicio Integral",
    "freeconsult.card4.desc": "Desde el diseño inicial y la consulta gratuita hasta la construcción final y el seguimiento posventa.",

    // Gallery Section
    "gallery.badge": "TRABAJO RECIENTE",
    "gallery.title": "Nuestro Trabajo Reciente",

    // Quote Section
    "quote.area.badge": "Áreas de Servicio",
    "quote.area.title": "Sirviendo Orgullosamente a Clearwater y Áreas Cercanas",
    "quote.form.title": "Solicitar una Cotización",
    "quote.form.desc": "Servimos orgullosamente a Clearwater, Largo, St. Petersburg, Dunedin, Pinellas Park, Tarpon Springs y el área circundante del condado de Pinellas, FL.",
    "quote.form.first": "Nombre",
    "quote.form.last": "Apellido",
    "quote.form.phone": "Número de Teléfono",
    "quote.form.email": "Correo Electrónico",
    "quote.form.state": "Estado de Residencia",
    "quote.form.service": "Seleccionar Servicio",
    "quote.form.select": "Seleccionar...",
    "quote.form.message.label": "Mensaje",
    "quote.form.message.placeholder": "Escriba su mensaje aquí",
    "quote.form.send": "Enviar Ahora",

    // Reviews Section
    "reviews.badge": "RESEÑAS",
    "reviews.title": "Reseñas de Confianza de Propietarios y Negocios",
    "reviews.basedon": "Basado en más de 100 reseñas de Google",
    "reviews.readall": "Leer Todas las Reseñas",
    "reviews.1.text": "Right Lane Handyman Services hizo un trabajo absolutamente increíble en nuestra cocina al aire libre. La artesanía es de primera calidad y terminaron a tiempo y dentro del presupuesto. ¡Súper felices!",
    "reviews.1.name": "Cristina — Clearwater",
    "reviews.1.date": "Junio 2025 · Verificado",
    "reviews.2.text": "Right Lane y su equipo transformaron nuestro patio trasero con una hermosa piscina y terraza. Profesionales, receptivos y detallistas de principio a fin. Altamente recomendados.",
    "reviews.2.name": "Martin & Sumera C., Clearwater",
    "reviews.2.date": "Abril 2025 · Verificado",
    "reviews.3.text": "Contratamos a Right Lane para una remodelación completa de la casa y los resultados superaron nuestras expectativas. Se comunican bien y respaldan su trabajo. Verdaderamente los mejores.",
    "reviews.3.name": "La Familia Carter · Largo",
    "reviews.3.date": "Marzo 2025 · Verificado",

    // Stats Section
    "stats.title": "Limpieza y Mudanzas de Emergencia — Llame para Disponibilidad.",
    "stats.desc": "¿Acumulación de residuos de obra? ¿Escombros de tormenta? ¿Limpieza inesperada? Respondemos rápido con camiones y personal. Llame a Ronnie Lane 24/7.",
    "stats.btn": "Obtener Cotización",
    "stats.btn.estimate": "Obtener Estimación Gratis",
    "stats.btn.call": "Llámenos Ahora",
    "stats.btn.consultation": "Obtener Consulta Gratuita",
    "stats.label.jobs": "Trabajos Completados",
    "stats.label.clients": "Clientes Leales",
    "stats.label.projects": "Proyectos Completados",
    "stats.label.complete_project": "Proyecto Completado",
    "stats.label.happy_clients": "Clientes Felices",
    "stats.label.expert_member": "Miembros Expertos",
    "stats.label.years_experience": "Años de Experiencia",

    // FAQ Section
    "faq.badge": "PREGUNTAS",
    "faq.title": "Preguntas Frecuentes",
    "faq.desc": "Respuestas rápidas sobre lo que transportamos, limpiamos y demolimos. ¿Para su trabajo específico? Llame a Ronnie Lane directamente al (727) 642-0201.",
    "faq.btn.action": "Ver Nuestro Trabajo",
    "faq.btn.consultation": "Obtener Consulta Gratuita",
    "faq.q1": "¿Atienden Tanto a Hogares Como a Negocios?",
    "faq.a1": "Sí, atendemos a clientes residenciales, comerciales e industriales en todas las ciudades enumeradas.",
    "faq.q2": "¿Están Licenciados y Asegurados?",
    "faq.a2": "Absolutamente. Right Lane Handyman Services, LLC es un contratista totalmente licenciado, asegurado y con fianza en el estado de Florida. Le proporcionaremos comprobantes antes de iniciar.",
    "faq.q3": "¿Qué Tipo de Desechos Transportan?",
    "faq.a3": "Transportamos una amplia variedad de materiales, incluyendo escombros de construcción, desechos de jardín, muebles viejos, electrodomésticos, concreto y basura general.",
    "faq.q4": "¿Necesito Estar en Casa Para una Cotización?",
    "faq.a4": "No, no necesita estar en casa para proyectos exteriores siempre que tengamos acceso libre a la propiedad. Para reparaciones interiores o remodelaciones, programaremos una cita con usted presente.",
    "faq.q5": "¿Cuál es su Área de Servicio?",
    "faq.a5": "Servimos con orgullo a Clearwater, Largo, St. Petersburg, Dunedin, Pinellas Park, Tarpon Springs y todo Pinellas County, FL.",

    // Prompt CTA Section
    "cta.prompt.badge": "Handyman de Confianza de Clearwater",
    "cta.prompt.title": "¿Necesita Reparaciones de Hogar, Remodelaciones o Mudanzas?",
    "cta.prompt.desc": "No deje que se acumulen las reparaciones. Desde parches de paneles de yeso y carpintería hasta mantenimiento y transporte de escombros pesados, nuestro personal licenciado y asegurado está aquí para ayudarle.",
    "cta.prompt.f1": "25+ Años de Experiencia",
    "cta.prompt.f2": "Servicio Rápido y Confiable",
    "cta.prompt.f3": "Totalmente Licenciado, Asegurado y con Fianza",
    "cta.prompt.f4": "Garantía de Satisfacción del 100%",
    "cta.prompt.btn.sub": "Llame Para Estimación Gratis",
    "cta.prompt.badge.loc": "Activo y sirviendo a Clearwater, Largo, St. Petersburg y áreas circundantes",

    // CTA Section
    "cta.badge": "CONTÁCTENOS",
    "cta.title": "¿Listo para Tacharlo de su Lista de Pendientes?",
    "cta.desc": "Ya sea un garaje lleno de basura, una propiedad que necesita lavado a presión o limpieza post-construcción, estamos aquí para ayudarle. Póngase en contacto con Ronnie Lane hoy mismo para obtener una estimación gratuita y sin compromiso.",
    "cta.form.name": "Nombre Completo",
    "cta.form.phone": "Número de Teléfono",
    "cta.form.email": "Correo Electrónico",
    "cta.form.address": "Dirección",
    "cta.form.services": "Seleccionar Servicio",
    "cta.form.message": "Mensaje",
    "cta.form.btn": "Enviar Ahora",

    // Footer Section
    "footer.desc": "Right Lane Handyman Services, LLC, su socio de confianza para servicios de primera calidad de handyman y remodelación en Clearwater, FL. Durante más de 25 años, nuestro equipo se ha dedicado a hacer realidad las visiones de nuestros clientes.",
    "footer.title.col1": "Right Lane Handyman Services, LLC",
    "footer.title.services": "Servicios",
    "footer.title.links": "Enlaces Rápidos",
    "footer.title.contact": "Contáctenos",
    "footer.service.1": "Remodelación de Casa",
    "footer.service.2": "Servicio de Nueva Construcción",
    "footer.service.3": "Chimeneas",
    "footer.service.4": "Cercas",
    "footer.service.5": "Concreto y Piedra",
    "footer.service.6": "Patios Cubiertos",
    "footer.service.7": "Ver Más...",
    "footer.link.1": "Inicio",
    "footer.link.2": "Nosotros",
    "footer.link.3": "Servicios",
    "footer.link.4": "Nuestro Trabajo",
    "footer.link.5": "Reseñas",
    "footer.link.6": "Obtener Consulta Gratuita",
    "footer.link.7": "Contáctenos",
    "footer.contact.consultant": "Licenciado | Asegurado | Con Fianza",
    "footer.contact.robert": "Teléfono: (727) 642-0201",
    "footer.contact.arturo": "25 Años de Experiencia",
    "footer.contact.email": "Correo: rightlanehandymanservice@yahoo.com",
    "footer.contact.address": "Dirección: Clearwater, FL 33756",
    "footer.copyright": "Copyright © 2026 Right Lane Handyman Services, LLC. Todos los derechos reservados.",
  }
};
