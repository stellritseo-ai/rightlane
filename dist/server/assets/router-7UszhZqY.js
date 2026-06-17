import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { createRootRouteWithContext, useRouter, Link, Outlet, HeadContent, Scripts, createFileRoute, lazyRouteComponent, createRouter } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
import { useState, useEffect, createContext, useContext } from "react";
const TranslationContext = createContext(void 0);
function TranslationProvider({ children }) {
  const [language, setLanguageState] = useState("en");
  useEffect(() => {
    const savedLanguage = localStorage.getItem("jrm-language");
    if (savedLanguage === "en" || savedLanguage === "es") {
      setLanguageState(savedLanguage);
    }
  }, []);
  const setLanguage = (lang) => {
    setLanguageState(lang);
    localStorage.setItem("jrm-language", lang);
  };
  const t = (key) => {
    return translations[language][key] || translations["en"][key] || key;
  };
  return /* @__PURE__ */ jsx(TranslationContext.Provider, { value: { language, setLanguage, t }, children });
}
function useTranslation() {
  const context = useContext(TranslationContext);
  if (!context) {
    throw new Error("useTranslation must be used within a TranslationProvider");
  }
  return context;
}
const translations = {
  en: {
    // TopBar & Header
    "topbar.email": "robertsa210@icloud.com",
    "topbar.location": "San Antonio, TX",
    "topbar.emergency": "Emergency Services: 24/7 Emergency Assistance Available.",
    "nav.home": "Home",
    "nav.about": "About Us",
    "nav.services": "Services",
    "nav.work": "Our Work",
    "nav.reviews": "Reviews",
    "nav.contact": "Contact Us",
    "nav.talk": "Let's Talk",
    // Hero Section
    "hero.title": "Outdoor Visions Come To Life Building America's Dreams",
    "hero.description": "San Antonio Outdoor Living is a Concrete Contractor in San Antonio, TX. We offer Landscaping,\nOutdoor Kitchen Design, Hardscaping and more!",
    "hero.btn.consultation": "Get Your Free Consultation",
    "hero.btn.book": "Book A Service",
    // Welcome Section
    "welcome.badge": "JRM CONSTRUCTION LANDSCAPING DESIGN",
    "welcome.title": "Transform Your Space with 35 Years of San Antonio Expertise",
    "welcome.credentials": "Licensed, Insured & Bonded | Serving San Antonio & 80 Miles Around | Free Consultations",
    "welcome.desc": "Welcome to JRM Construction Landscaping Design, your trusted partner for premier remodeling and outdoor living in San Antonio. For over three and a half decades, principal & design consultant Robert Thompson and our skilled team have been dedicated to turning our clients' visions into stunning, lasting reality. We combine unparalleled craftsmanship with creative design to enhance both the beauty and value of your property.",
    "welcome.btn.call": "Call Now To Get Started!",
    "welcome.btn.consultation": "Get Your Free Consultation",
    "welcome.contact.title": "Contact Us:",
    // Services Section
    "services.badge": "OUR SERVICES",
    "services.title": "Our Core Services",
    "services.description": "We deliver a complete range of construction and landscape design services, from concept to completion, to bring your vision to life.",
    "services.remodeling": "HOUSE REMODELING",
    "services.construction": "NEW CONSTRUCTION",
    "services.fireplace": "FIREPLACE",
    "services.fencing": "FENCING",
    "services.coveredpatios": "COVERED PATIOS",
    "services.turf": "ARTIFICIAL TURF",
    "services.softscapes": "SOFTSCAPES",
    "services.kitchens": "OUTDOOR KITCHENS",
    "services.palmtrees": "PALM TREES",
    "services.hardscapes": "HARDSCAPES",
    "services.remodeling.desc": "Complete home renovations, kitchen updates, and structural transformations.",
    "services.construction.desc": "Custom structural builds, additions, and quality new constructions.",
    "services.fireplace.desc": "Elegant, heat-safe custom fireplaces and stone surrounds.",
    "services.fencing.desc": "Secure, durable wood and iron fencing to beautify your boundaries.",
    "services.coveredpatios.desc": "Stunning outdoor patio covers, pavilions, and pergolas.",
    "services.turf.desc": "Flawless, low-maintenance artificial turf and putting greens.",
    "services.softscapes.desc": "Custom gardens, sod installation, and premium plant selection.",
    "services.kitchens.desc": "Gourmet outdoor kitchens, built-in grills, and bar counters.",
    "services.palmtrees.desc": "Premium palm tree selection, planting, and tropical layouts.",
    "services.hardscapes.desc": "Paver patios, stone retaining walls, walkways, and concrete work.",
    "services.btn.more": "View More of Our Work",
    // Get Started Section
    "getstarted.title": "Get Started on Your Construction and Landscaping Design Journey Today.",
    "getstarted.description": "For over three decades, JRM Construction has been the trusted name in San Antonio for transforming properties, restoring their beauty, and renovating them into something extraordinary. Whether you're recovering from unexpected damage or ready to update and upgrade your space, principal & design consultant Robert Thompson and our expert team bring 35 years of precision, care, and craftsmanship to every project.",
    "getstarted.btn.consultation": "Get Your Free Consultation",
    "getstarted.btn.gallery": "View Our Gallery",
    // Why Choose Section
    "whychoose.badge": "WHY CHOOSE JRM CONSTRUCTION LANDSCAPING DESIGN",
    "whychoose.title": "Why San Antonio Homeowners & Businesses Trust JRM Construction",
    "whychoose.desc1": "For 35 years, Robert Thompson and the team at JRM Construction have built a reputation for unmatched reliability and quality.",
    "whychoose.desc2": "We are the trusted partner for both residential and commercial projects because we combine extensive experience with a steadfast commitment to integrity.",
    "whychoose.f1.title": "35 Years of Master Craftsmanship",
    "whychoose.f1.desc": "Deep-rooted expertise in both residential and commercial projects.",
    "whychoose.f2.title": "Full-Service Design & Build",
    "whychoose.f2.desc": "From concept to completion, we handle every detail seamlessly.",
    "whychoose.f3.title": "Licensed, Insured & Bonded",
    "whychoose.f3.desc": "Your peace of mind is our top priority.",
    "whychoose.f4.title": "Comprehensive Services",
    "whychoose.f4.desc": "We specialize in everything from house remodeling and new construction to exquisite outdoor living spaces.",
    "whychoose.f5.title": "Commitment to Quality",
    "whychoose.f5.desc": "We use only the finest materials and proven techniques.",
    "whychoose.f6.title": "Free Consultation",
    "whychoose.f6.desc": "We start every project by listening to your goals.",
    "whychoose.btn.consultation": "GET A FREE CONSULTATION",
    "whychoose.btn.call": "CALL US",
    // Free Consultation Section
    "freeconsult.title": "Start with a Free Consultation for Your Remodel or Outdoor Project",
    "freeconsult.desc": "Take the first step toward your dream space. Get a detailed, free quote from JRM Construction. From house remodeling to custom hardscapes, we provide the clarity and expert planning you need to move forward with confidence.",
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
    "quote.area.title": "Proudly Serving 80 miles of San Antonio",
    "quote.form.title": "Request a Quote",
    "quote.form.desc": "We proudly serve San Antonio and the surrounding region, including: New Braunfels, San Marcos, Boerne, Fredericksburg, Kerrville, Seguin, Canyon Lake, and more within an 80-mile radius.",
    "quote.form.first": "First Name",
    "quote.form.last": "Last Name",
    "quote.form.phone": "Phone Number",
    "quote.form.email": "Email Address",
    "quote.form.state": "State of Residence",
    "quote.form.service": "Select Service",
    "quote.form.select": "Select...",
    "quote.form.message.label": "Message",
    "quote.form.message.placeholder": "Write Your Message",
    "quote.form.send": "Send",
    // Reviews Section
    "reviews.badge": "REVIEWS",
    "reviews.title": "Trusted Reviews From Homeowners & Businesses",
    "reviews.basedon": "Based on 5,000 Google Reviews",
    "reviews.readall": "Read All Reviews",
    "reviews.1.text": "JRM Construction did an absolutely incredible job on our outdoor kitchen. The craftsmanship is top-notch and they finished on time and on budget. Couldn't be happier!",
    "reviews.1.name": "Cristina — Home Owner Site",
    "reviews.1.date": "June 2025 · Verified",
    "reviews.2.text": "Robert and his team transformed our backyard with a beautiful pool and patio. Professional, responsive, and detail-oriented from start to finish. Highly recommend.",
    "reviews.2.name": "Martin & Sumera C., San Antonio",
    "reviews.2.date": "April 2025 · Verified",
    "reviews.3.text": "We hired JRM for a complete house remodel and the results exceeded our expectations. They communicate well and stand behind their work. Truly the best in San Antonio.",
    "reviews.3.name": "The Carter Family · Boerne",
    "reviews.3.date": "March 2025 · Verified",
    // Stats Section
    "stats.title": "35 Years of Building Trust in San Antonio",
    "stats.desc": "Every project we've completed represents a story of integrity, quality, and dedicated craftsmanship. These are not just numbers—they are the foundation of the lasting reputation principal & design consultant Robert Thompson has built. They reflect our unwavering commitment to serving San Antonio's homeowners and businesses with licensed, insured, and reliable service since day one.",
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
    "faq.title": "Got Questions? JRM Construction Has Answers.",
    "faq.desc": "Find quick information on our most common services below. For direct, expert advice on your specific project in San Antonio, call principal & design consultant Robert Thompson at (210) 429-5526.",
    "faq.btn.action": "See Our Work in Action",
    "faq.btn.consultation": "Get a Free Consultation",
    "faq.q1": "What areas do you service?",
    "faq.a1": "We proudly serve San Antonio and the surrounding region within an 80-mile radius. This includes communities like New Braunfels, Boerne, San Marcos, Seguin, Canyon Lake, and Fredericksburg. If you're unsure if your location is within our service area, please call us directly at (210) 429-5526 for confirmation.",
    "faq.q2": "Are you licensed and insured?",
    "faq.a2": "Absolutely. JRM Construction is a fully licensed, insured, and bonded contractor in the state of Texas. This is a non-negotiable part of our business and your protection. We will provide proof of insurance upon request before any project begins, ensuring complete peace of mind for our residential and commercial clients.",
    "faq.q3": "What is your process for starting a new project?",
    "faq.a3": "It starts with a free, no-obligation consultation. Principal & Design Consultant Robert Thompson will meet with you to discuss your vision, assess your space, and listen to your goals. Following that, we provide a detailed, transparent estimate and timeline. Once approved, we handle all permits, materials, and construction with clear communication every step of the way.",
    "faq.q4": "Do you offer emergency services?",
    "faq.a4": "Yes, we do. While our standard office hours are Monday through Saturday from 8 AM to 5 PM, we understand that emergencies happen. We provide 24/7 emergency services for urgent issues that require immediate attention to protect your property. Call our main line at (210) 429-5526 at any time.",
    "faq.q5": "What makes your 35 years of experience different?",
    "faq.a5": "Our 35 years in business, all under the leadership of principal & design consultant Robert Thompson, means we have seen and successfully handled almost every scenario. This deep, local experience translates into efficient project management, expert problem-solving, foresight to avoid common pitfalls, and a vast network of trusted suppliers. You're not just hiring a contractor; you're hiring decades of accumulated craftsmanship and reliability dedicated to your project's success.",
    // CTA Section
    "cta.badge": "CONTACT US",
    "cta.title": "Ready to Build Something Remarkable?",
    "cta.desc": "Contact JRM Construction for a free, no-obligation estimate. We're here to discuss your project and provide the expert guidance you need.",
    "cta.form.name": "Full Name",
    "cta.form.phone": "Phone Number",
    "cta.form.email": "Email Address",
    "cta.form.address": "Address",
    "cta.form.services": "Select Service",
    "cta.form.message": "Message",
    "cta.form.btn": "Send Now",
    // Footer Section
    "footer.desc": "JRM Construction Landscaping Design has proudly served San Antonio for 35 years, delivering quality outdoor living, construction and remodeling for homeowners and businesses across South Central Texas.",
    "footer.services.title": "Services",
    "footer.links.title": "Quick Links",
    "footer.contact.title": "Contact Us",
    "footer.contact.address": "San Antonio, Texas",
    "footer.contact.street": "123 Main Street",
    "footer.copyright": "Copyright © 2025 JRM Construction Landscaping Design. All rights reserved.",
    "footer.seo.1": "LANDSCAPING DESIGN SAN ANTONIO",
    "footer.seo.2": "CONSTRUCTION SERVICES SAN ANTONIO",
    "footer.seo.3": "LANDSCAPING CONTRACTOR BOERNE",
    "footer.seo.4": "CONSTRUCTION CONTRACTOR NEW BRAUNFELS",
    "footer.seo.5": "HARDSCAPING CONTRACTOR SAN ANTONIO",
    "footer.seo.6": "FENCING CONTRACTOR SAN ANTONIO"
  },
  es: {
    // TopBar & Header
    "topbar.email": "robertsa210@icloud.com",
    "topbar.location": "San Antonio, TX",
    "topbar.emergency": "Servicios de Emergencia: Asistencia de Emergencia 24/7 Disponible.",
    "nav.home": "Inicio",
    "nav.about": "Nosotros",
    "nav.services": "Servicios",
    "nav.work": "Nuestro Trabajo",
    "nav.reviews": "Reseñas",
    "nav.contact": "Contacto",
    "nav.talk": "Hablemos",
    // Hero Section
    "hero.title": "Visiones al Aire Libre Cobran Vida Construyendo los Sueños de América",
    "hero.description": "San Antonio Outdoor Living es un contratista de concreto en San Antonio, TX. ¡Ofrecemos paisajismo,\ndiseño de cocinas al aire libre, adoquines y más!",
    "hero.btn.consultation": "Obtenga Su Consulta Gratis",
    "hero.btn.book": "Reservar un Servicio",
    // Welcome Section
    "welcome.badge": "DISEÑO DE CONSTRUCCIÓN Y PAISAJISMO JRM",
    "welcome.title": "Transforme Su Espacio con 35 Años de Experiencia en San Antonio",
    "welcome.credentials": "Licenciado, Asegurado y Vinculado | Sirviendo a San Antonio y 80 Millas Alrededor | Consultas Gratis",
    "welcome.desc": "Bienvenido a JRM Construction Landscaping Design, su socio de confianza para remodelación y vida al aire libre de primer nivel en San Antonio. Durante más de tres décadas y media, el consultor principal y de diseño Robert Thompson y nuestro capacitado equipo se han dedicado a convertir las visiones de nuestros clientes en una realidad impresionante y duradera. Combinamos una artesanía inigualable con un diseño creativo para mejorar tanto la belleza como el valor de su propiedad.",
    "welcome.btn.call": "¡Llame Ahora Para Comenzar!",
    "welcome.btn.consultation": "Obtenga Su Consulta Gratis",
    "welcome.contact.title": "Contacte con Nosotros:",
    // Services Section
    "services.badge": "NUESTROS SERVICIOS",
    "services.title": "Nuestros Servicios Principales",
    "services.description": "Brindamos soluciones profesionales de paisajismo y construcción residencial y comercial adaptadas a su propiedad.",
    "services.remodeling": "REMODELACIÓN DE CASAS",
    "services.construction": "NUEVA CONSTRUCCIÓN",
    "services.fireplace": "CHIMENEAS",
    "services.fencing": "CERCAS",
    "services.coveredpatios": "PATIOS TECHADOS",
    "services.turf": "CÉSPED ARTIFICIAL",
    "services.softscapes": "JARDINERÍA",
    "services.kitchens": "COCINAS AL AIRE LIBRE",
    "services.palmtrees": "PALMERAS",
    "services.hardscapes": "ADOQUINES Y CONCRETO",
    "services.remodeling.desc": "Renovaciones completas del hogar, actualizaciones de cocina y transformaciones estructurales.",
    "services.construction.desc": "Construcciones estructurales a medida, ampliaciones y construcciones nuevas de calidad.",
    "services.fireplace.desc": "Chimeneas personalizadas elegantes y seguras contra el calor y marcos de piedra.",
    "services.fencing.desc": "Cercas de madera y hierro seguras y duraderas para embellecer sus límites.",
    "services.coveredpatios.desc": "Impresionantes cubiertas para patios, pabellones y pérgolas.",
    "services.turf.desc": "Césped artificial impecable y de bajo mantenimiento y greens de práctica.",
    "services.softscapes.desc": "Jardines personalizados, instalación de césped y selección de plantas premium.",
    "services.kitchens.desc": "Cocinas gourmet al aire libre, parrillas empotradas y barras de bar.",
    "services.palmtrees.desc": "Selección de palmeras premium, plantación y diseños tropicales.",
    "services.hardscapes.desc": "Patios de adoquines, muros de contención de piedra, senderos y trabajos de concreto.",
    "services.btn.more": "Ver Más de Nuestro Trabajo",
    // Get Started Section
    "getstarted.title": "Comience hoy su viaje de diseño de construcción y paisajismo.",
    "getstarted.description": "Durante más de tres décadas, JRM Construction ha sido el nombre de confianza en San Antonio para transformar propiedades, restaurar su belleza y renovarlas en algo extraordinario. Ya sea que se esté recuperando de un daño inesperado o listo para actualizar y mejorar su espacio, el consultor principal y de diseño Robert Thompson y nuestro equipo de expertos aportan 35 años de precisión, cuidado y artesanía a cada proyecto.",
    "getstarted.btn.consultation": "Obtenga su consulta gratuita",
    "getstarted.btn.gallery": "Ver nuestra galería",
    // Why Choose Section
    "whychoose.badge": "POR QUÉ ELEGIR JRM CONSTRUCTION LANDSCAPING DESIGN",
    "whychoose.title": "Por qué los propietarios y empresas de San Antonio confían en JRM Construction",
    "whychoose.desc1": "Durante 35 años, Robert Thompson y el equipo de JRM Construction han construido una reputación de confiabilidad y calidad inigualables.",
    "whychoose.desc2": "Somos el socio de confianza tanto para proyectos residenciales como comerciales porque combinamos una amplia experiencia con un firme compromiso con la integridad.",
    "whychoose.f1.title": "35 años de maestría artesanal",
    "whychoose.f1.desc": "Experiencia profundamente arraigada en proyectos tanto residenciales como comerciales.",
    "whychoose.f2.title": "Diseño y construcción de servicio completo",
    "whychoose.f2.desc": "Desde el concepto hasta la finalización, manejamos cada detalle a la perfección.",
    "whychoose.f3.title": "Autorizado, asegurado y vinculado",
    "whychoose.f3.desc": "Su tranquilidad es nuestra máxima prioridad.",
    "whychoose.f4.title": "Servicios integrales",
    "whychoose.f4.desc": "Nos especializamos en todo, desde remodelación de viviendas y construcciones nuevas hasta exquisitos espacios de vida al aire libre.",
    "whychoose.f5.title": "Compromiso con la calidad",
    "whychoose.f5.desc": "Utilizamos sólo los mejores materiales y técnicas probadas.",
    "whychoose.f6.title": "Consulta gratuita",
    "whychoose.f6.desc": "Comenzamos cada proyecto escuchando sus objetivos.",
    "whychoose.btn.consultation": "OBTENER UNA CONSULTA GRATUITA",
    "whychoose.btn.call": "LLÁMENOS",
    // Free Consultation Section
    "freeconsult.title": "Comience con una consulta gratuita para su proyecto de remodelación o exteriores",
    "freeconsult.desc": "Dé el primer paso hacia el espacio de sus sueños. Obtenga una cotización detallada y gratuita de JRM Construction. Desde remodelación de casas hasta hardscapes personalizados, le brindamos la claridad y la planificación experta que necesita para avanzar con confianza.",
    "freeconsult.card1.title": "Equipo experimentado",
    "freeconsult.card1.desc": "Nuestros profesionales capacitados aportan décadas de experiencia práctica en construcción y diseño de paisajes, lo que garantiza una artesanía experta para cada proyecto de remodelación y hardscaping.",
    "freeconsult.card2.title": "Soluciones seguras y efectivas",
    "freeconsult.card2.desc": "Utilizamos métodos probados, materiales de calidad y un enfoque meticuloso que es seguro para su propiedad y altamente efectivo para ofrecer resultados hermosos y duraderos.",
    "freeconsult.card3.title": "Satisfacción del cliente",
    "freeconsult.card3.desc": "Nos enfocamos en una comunicación clara y una gestión de proyectos personalizada, asegurando que se cumpla su visión y que su satisfacción esté garantizada desde la consulta hasta la finalización.",
    "freeconsult.card4.title": "Servicio integral",
    "freeconsult.card4.desc": "Desde el diseño inicial y la consulta gratuita hasta la construcción final y el seguimiento, ofrecemos una gama completa de servicios autorizados y asegurados para todas sus necesidades residenciales y comerciales.",
    // Gallery Section
    "gallery.badge": "TRABAJO RECIENTE",
    "gallery.title": "Nuestro Trabajo Reciente",
    // Quote Section
    "quote.area.badge": "Áreas de Servicio",
    "quote.area.title": "Orgullosamente Sirviendo 80 millas de San Antonio",
    "quote.form.title": "Solicitar una Cotización",
    "quote.form.desc": "Servimos con orgullo a San Antonio y la región circundante, incluyendo: New Braunfels, San Marcos, Boerne, Fredericksburg, Kerrville, Seguin, Canyon Lake y más dentro de un radio de 80 millas.",
    "quote.form.first": "Primer Nombre",
    "quote.form.last": "Apellido",
    "quote.form.phone": "Número de Teléfono",
    "quote.form.email": "Correo Electrónico",
    "quote.form.state": "Estado de Residencia",
    "quote.form.service": "Seleccionar Servicio",
    "quote.form.select": "Seleccionar...",
    "quote.form.message.label": "Mensaje",
    "quote.form.message.placeholder": "Escriba su mensaje",
    "quote.form.send": "Enviar",
    // Reviews Section
    "reviews.badge": "RESEÑAS",
    "reviews.title": "Reseñas de Confianza de Propietarios y Empresas",
    "reviews.basedon": "Basado en 5,000 Reseñas de Google",
    "reviews.readall": "Leer Todas las Reseñas",
    "reviews.1.text": "JRM Construction hizo un trabajo absolutamente increíble en nuestra cocina al aire libre. La artesanía es de primera y terminaron a tiempo y dentro del presupuesto. ¡No podría estar más feliz!",
    "reviews.1.name": "Cristina — Propietaria de Casa",
    "reviews.1.date": "Junio 2025 · Verificado",
    "reviews.2.text": "Robert y su equipo transformaron nuestro patio trasero con una hermosa piscina y patio. Profesionales, receptivos y orientados a los detalles de principio a fin. Altamente recomendado.",
    "reviews.2.name": "Martin y Sumera C., San Antonio",
    "reviews.2.date": "Abril 2025 · Verificado",
    "reviews.3.text": "Contratamos a JRM para una remodelación completa de la casa y los resultados superaron nuestras expectativas. Se comunican bien y respaldan su trabajo. Verdaderamente los mejores en San Antonio.",
    "reviews.3.name": "La Familia Carter · Boerne",
    "reviews.3.date": "Marzo 2025 · Verificado",
    // Stats Section
    "stats.title": "35 Años Construyendo Confianza en San Antonio",
    "stats.desc": "Cada proyecto que hemos completado representa una historia de integridad, calidad y artesanía dedicada. Estos no son solo números; son la base de la sólida reputación que el director y consultor de diseño Robert Thompson ha construido. Reflejan nuestro compromiso inquebrantable de servir a los propietarios y empresas de San Antonio con un servicio con licencia, asegurado y confiable desde el primer día.",
    "stats.btn": "Obtenga una Cotización",
    "stats.btn.estimate": "Obtener Presupuesto Gratis",
    "stats.btn.call": "Llámenos Ahora",
    "stats.btn.consultation": "Obtenga una Consulta Gratis",
    "stats.label.jobs": "Trabajos Completados",
    "stats.label.clients": "Clientes Leales",
    "stats.label.projects": "Proyectos Completados",
    "stats.label.complete_project": "Proyecto Completado",
    "stats.label.happy_clients": "Clientes Felices",
    "stats.label.expert_member": "Miembros Expertos",
    "stats.label.years_experience": "Años de Experiencia",
    // FAQ Section
    "faq.badge": "PREGUNTAS FRECUENTES",
    "faq.title": "¿Tiene Preguntas? JRM Construction Tiene Respuestas.",
    "faq.desc": "Encuentre información rápida sobre nuestros servicios más comunes a continuación. Para recibir asesoramiento directo y experto sobre su proyecto específico en San Antonio, llame al consultor principal y de diseño Robert Thompson al (210) 429-5526.",
    "faq.btn.action": "Ver Nuestro Trabajo en Acción",
    "faq.btn.consultation": "Obtenga una Consulta Gratis",
    "faq.q1": "¿Qué áreas cubren?",
    "faq.a1": "Orgullosamente servimos a San Antonio y la región circundante dentro de un radio de 80 millas. Esto incluye comunidades como New Braunfels, Boerne, San Marcos, Seguin, Canyon Lake y Fredericksburg. Si no está seguro de si su ubicación está dentro de nuestra área de servicio, llámenos directamente al (210) 429-5526 para confirmarlo.",
    "faq.q2": "¿Están autorizados y asegurados?",
    "faq.a2": "Absolutamente. JRM Construction es un contratista totalmente autorizado, asegurado y vinculado en el estado de Texas. Esta es una parte no negociable de nuestro negocio y su protección. Proporcionaremos comprobante de seguro a solicitud antes de que comience cualquier proyecto, garantizando total tranquilidad para nuestros clientes residenciales y comerciales.",
    "faq.q3": "¿Cuál es el proceso para iniciar un nuevo proyecto?",
    "faq.a3": "Comienza con una consulta gratuita y sin compromiso. El director y consultor de diseño Robert Thompson se reunirá con usted para discutir su visión, evaluar su espacio y escuchar sus objetivos. A continuación, proporcionamos un presupuesto y cronograma detallados y transparentes. Una vez aprobado, nos encargamos de todos los permisos, materiales y construcción con una comunicación clara en cada paso del camino.",
    "faq.q4": "¿Ofrecen servicios de emergencia?",
    "faq.a4": "Sí, lo hacemos. Si bien nuestro horario de atención estándar es de lunes a sábado de 8 a.m. a 5 p.m., entendemos que las emergencias ocurren. Brindamos servicios de emergencia las 24 horas, los 7 días de la semana para problemas urgentes que requieren atención inmediata para proteger su propiedad. Llame a nuestra línea principal al (210) 429-5526 en cualquier momento.",
    "faq.q5": "¿Qué hace diferente a sus 35 años de experiencia?",
    "faq.a5": "Nuestros 35 años en el negocio, todos bajo el liderazgo del director y consultor de diseño Robert Thompson, significan que hemos visto y manejado con éxito casi todos los escenarios. Esta profunda experiencia local se traduce en una gestión de proyectos eficiente, resolución experta de problemas, previsión para evitar errores comunes y una amplia red de proveedores de confianza. No solo está contratando a un contratista; está contratando décadas de experiencia acumulada y confiabilidad dedicadas al éxito de su proyecto.",
    // CTA Section
    "cta.badge": "CONTÁCTENOS",
    "cta.title": "¿Listo para Construir Algo Extraordinario?",
    "cta.desc": "Póngase en contacto con JRM Construction para obtener un presupuesto gratuito y sin compromiso. Estamos aquí para discutir su proyecto y brindarle la orientación experta que necesita.",
    "cta.form.name": "Nombre Completo",
    "cta.form.phone": "Número de Teléfono",
    "cta.form.email": "Dirección de Correo Electrónico",
    "cta.form.address": "Dirección",
    "cta.form.services": "Seleccionar Servicio",
    "cta.form.message": "Mensaje",
    "cta.form.btn": "Enviar Ahora",
    // Footer Section
    "footer.desc": "JRM Construction Landscaping Design ha servido con orgullo a San Antonio durante 35 years, brindando remodelación, construcción y vida al aire libre de calidad para propietarios y empresas en el centro y sur de Texas.",
    "footer.services.title": "Servicios",
    "footer.links.title": "Enlaces Rápidos",
    "footer.contact.title": "Contacte con Nosotros",
    "footer.contact.address": "San Antonio, Texas",
    "footer.contact.street": "123 Main Street",
    "footer.copyright": "Derechos de autor © 2025 JRM Construction Landscaping Design. Todos los derechos reservados.",
    "footer.seo.1": "DISEÑO DE JARDINES SAN ANTONIO",
    "footer.seo.2": "SERVICIOS DE CONSTRUCCIÓN SAN ANTONIO",
    "footer.seo.3": "CONTRATISTA DE PAISAJISMO BOERNE",
    "footer.seo.4": "CONTRATISTA DE CONSTRUCCIÓN NEW BRAUNFELS",
    "footer.seo.5": "CONTRATISTA DE ADOQUINES Y CONCRETO SAN ANTONIO",
    "footer.seo.6": "CONTRATISTA DE CERCAS SAN ANTONIO"
  }
};
const appCss = "/assets/styles-Bd5hS2kx.css";
const favIcon = "/assets/fav-DsJv7IR9.png";
function reportLovableError(error, context = {}) {
  if (typeof window === "undefined") return;
  window.__lovableEvents?.captureException?.(
    error,
    {
      source: "react_error_boundary",
      route: window.location.pathname,
      ...context
    },
    {
      mechanism: "react_error_boundary",
      handled: false,
      severity: "error"
    }
  );
}
function NotFoundComponent() {
  return /* @__PURE__ */ jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-7xl font-bold text-foreground", children: "404" }),
    /* @__PURE__ */ jsx("h2", { className: "mt-4 text-xl font-semibold text-foreground", children: "Page not found" }),
    /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "The page you're looking for doesn't exist or has been moved." }),
    /* @__PURE__ */ jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsx(
      Link,
      {
        to: "/",
        className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
        children: "Go home"
      }
    ) })
  ] }) });
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router2 = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return /* @__PURE__ */ jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-xl font-semibold tracking-tight text-foreground", children: "This page didn't load" }),
    /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Something went wrong on our end. You can try refreshing or head back home." }),
    /* @__PURE__ */ jsxs("div", { className: "mt-6 flex flex-wrap justify-center gap-2", children: [
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => {
            router2.invalidate();
            reset();
          },
          className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
          children: "Try again"
        }
      ),
      /* @__PURE__ */ jsx(
        "a",
        {
          href: "/",
          className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
          children: "Go home"
        }
      )
    ] })
  ] }) });
}
const Route$1 = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Lovable App" },
      { name: "description", content: "Lovable Generated Project" },
      { name: "author", content: "Lovable" },
      { property: "og:title", content: "Lovable App" },
      { property: "og:description", content: "Lovable Generated Project" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:site", content: "@Lovable" }
    ],
    links: [
      {
        rel: "icon",
        type: "image/png",
        href: favIcon
      },
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com"
      },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous"
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap"
      },
      {
        rel: "stylesheet",
        href: appCss
      }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsx("head", { children: /* @__PURE__ */ jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$1.useRouteContext();
  return /* @__PURE__ */ jsx(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsx(TranslationProvider, { children: /* @__PURE__ */ jsx(Outlet, {}) }) });
}
const $$splitComponentImporter = () => import("./index-CGpQSxly.js");
const Route = createFileRoute("/")({
  head: () => ({
    meta: [{
      title: "JRM Construction Landscape Design — San Antonio, TX"
    }, {
      name: "description",
      content: "JRM Construction Landscape Design offers premier landscaping and construction services in San Antonio, TX with 24/7 emergency assistance."
    }, {
      property: "og:title",
      content: "JRM Construction Landscape Design"
    }, {
      property: "og:description",
      content: "Premier landscaping and construction services in San Antonio, TX."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const IndexRoute = Route.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$1
});
const rootRouteChildren = {
  IndexRoute
};
const routeTree = Route$1._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router2 = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router2;
};
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  favIcon as f,
  router as r,
  useTranslation as u
};
