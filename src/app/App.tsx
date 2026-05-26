import {
  Microscope,
  FlaskConical,
  Syringe,
  CheckCircle2,
  Users,
  Clock,
  Shield,
  ArrowRight,
  ClipboardList,
  Network,
  HeartPulse,
  Sparkles,
} from "lucide-react";
import { Routes, Route, Link } from "react-router-dom";
import { ImageWithFallback } from "./components/figma/ImageWithFallback";
import { FAQItem } from "./components/FAQItem";
import { MobileMenu } from "./components/MobileMenu";
import { CasosCarousel } from "./components/CasosCarousel";
import { ProcessCarousel } from "./components/ProcessCarousel";
import Blog from "./pages/Blog";
import Nosotros from "./pages/Nosotros";
import { useEffect, useState, useRef } from "react";

// Hook para fade-in al hacer scroll
function useFadeIn(direction: "up" | "left" | "right" = "up") {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (direction === "left") el.classList.add("from-left");
    if (direction === "right") el.classList.add("from-right");
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("visible");
          observer.disconnect();
        }
      },
      { threshold: 0.12 },
    );
    const cursor = observer;
    cursor.observe(el);
    return () => cursor.disconnect();
  }, [direction]);
  return ref;
}

export default function App() {
  const [scrolled, setScrolled] = useState(false);

  // Hero cards
  const heroCard1 = useFadeIn();
  const heroCard2 = useFadeIn();
  const heroCard3 = useFadeIn();

  // Servicios
  const svcTitle = useFadeIn();
  const svcCard1 = useFadeIn();
  const svcCard2 = useFadeIn();
  const svcCard3 = useFadeIn();

  // Focused Allergy
  const focusedImg = useFadeIn("right");
  const focusedTitle = useFadeIn("left");
  const focusedList = useFadeIn("left");

  // Benefits
  const benefitsTitle = useFadeIn();
  const benefitsLeft = useFadeIn("left");
  const benefitsRight = useFadeIn("right");

  // FAQ
  const faqTitle = useFadeIn();
  const faqItems = useFadeIn();

  // How We Work
  const howImg = useFadeIn("left");
  const howContent = useFadeIn("right");

  // CTA
  const ctaBlock = useFadeIn();

  // Contact
  const contactLeft = useFadeIn("left");
  const contactRight = useFadeIn("right");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Routes>
      <Route path="/blog" element={<Blog />} />
      <Route path="/nosotros" element={<Nosotros />} />
      <Route
        path="/*"
        element = {
          <div
            className="min-h-screen bg-white"
            style={{ fontFamily: "'Nunito Sans', sans-serif" }}
          >
            {/* ── HERO SECTION ── */}
            
    <header className="relative overflow-hidden min-h-screen flex flex-col">
      {/* Background Hero */}
      <div className="absolute inset-0 z-0">
        <img
          src="/Fostersterm/fam-foster-bg.png"
          alt="Familia Foster Stern"
          className="w-full h-full object-cover object-center"
        />
    <div
    className="absolute inset-0"
    style={{
      background: "linear-gradient(135deg, rgba(5, 74, 91, 0.85) 0%, rgba(5, 74, 91, 0.4) 45%, rgba(255, 255, 255, 0) 80%)"
    }}
  />
      </div>

      {/* ── NAVBAR CON ESTILO GLASSMORPHISM (TIPO IPHONE) ── */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out"
        style={{
          // Al hacer scroll cambia a blanco ultra-translúcido tipo iOS, si no se mantiene invisible
          backgroundColor: scrolled ? "rgba(255, 255, 255, 0.7)" : "transparent",
          // El desenfoque característico de Apple
          backdropFilter: scrolled ? "blur(20px) saturate(180%)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(20px) saturate(180%)" : "none", // Soporte para Safari/iOS
          // Sombra suave y borde fino brillante que simula el grosor del cristal
          boxShadow: scrolled ? "0 4px 30px rgba(0, 0, 0, 0.03)" : "none",
          borderBottom: scrolled ? "1px solid rgba(255, 255, 255, 0.4)" : "1px solid transparent",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between transition-all duration-300">
          <div className="flex items-center gap-3">
            <ImageWithFallback
              src="/Fostersterm/LOGOFALLERGY.png"
              alt="Foster Stern Group"
              // Invertimos el color del logo a oscuro cuando el fondo del cristal es claro (scroll)
              className={`h-16 md:h-20 w-auto object-contain transition-all duration-300 ${
                scrolled ? "brightness-0 opacity-90" : ""
              }`}
            />
          </div>

          {/* Enlaces de navegación con cambio dinámico de color según el fondo */}
          <div className="hidden md:flex items-center gap-7">
            <Link 
              to="/nosotros" 
              className="nav-link text-base font-semibold transition-colors duration-300" 
              style={{ color: scrolled ? "#054A5B" : "rgba(255,255,255,0.92)" }}
            >
              Nosotros
            </Link>
            {["Servicios", "Beneficios", "Proceso", "FAQ"].map((section) => (
              <a 
                key={section}
                href={`/#${section}`} 
                className="nav-link text-base font-semibold transition-colors duration-300" 
              style={{ color: scrolled ? "#054A5B" : "rgba(255,255,255,0.92)" }}
              >
                {section}
              </a>
            ))}
            <Link 
              to="/blog" 
              className="nav-link text-base font-semibold transition-colors duration-300" 
              style={{ color: scrolled ? "#054A5B" : "rgba(255,255,255,0.92)" }}
            >
              Blog
            </Link>
            <a 
              href="/#contacto" 
              className="nav-cta px-5 py-2.5 rounded-xl text-white shadow-md font-bold transition-all duration-300 hover:scale-105" 
              style={{ backgroundColor: "var(--brand-green)" }}
            >
              Contactar
            </a>
          </div>

          <MobileMenu scrolled={scrolled} />
        </div>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 flex-1 flex items-center max-w-7xl mx-auto w-full px-4 md:px-6 pb-6" style={{ paddingTop: "140px" }}>
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
          <div className="flex flex-col gap-6">
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full self-start border"
              style={{ backgroundColor: "rgba(255,255,255,0.12)", borderColor: "rgba(255,255,255,0.3)" }}
            >
              <Sparkles className="w-4 h-4 text-white" />
              <span className="text-sm text-white">Soluciones Médicas Innovadoras</span>
            </div>

            <h1
              className="text-4xl md:text-6xl lg:text-7xl leading-tight text-white"
              style={{ fontFamily: "'Nunito Sans', sans-serif", fontWeight: 800 }}
            >
              Mejorando vidas, una prueba a la vez.
            </h1>

            <p className="text-lg md:text-xl leading-relaxed max-w-xl" style={{ color: "rgba(255,255,255,0.88)" }}>
              Ofrecemos soluciones integrales de alergología para tu clínica, encargándonos de todo para que puedas brindar atención integral directamente en tus instalaciones.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-2">
              <a
                href="#contacto"
                className="nav-cta px-8 py-4 rounded-2xl text-white text-center font-bold shadow-lg"
                style={{ backgroundColor: "var(--brand-green)" }}
              >
                Comenzar Ahora
              </a>
              <a
                href="#servicios"
                className="px-8 py-4 rounded-2xl text-white text-center font-semibold border-2 hover:bg-white/10 transition-all flex items-center justify-center gap-2"
                style={{ borderColor: "rgba(255,255,255,0.5)" }}
              >
                <span className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center text-white text-sm">▶</span>
                Ver Servicios
              </a>
            </div>
          </div>

          {/* Right Floating Cards */}
          {/* Right Floating Cards */}
<div className="hidden lg:flex flex-col gap-5 items-end">
  
  {/* Card 1: Conoce a nuestro equipo */}
  <div 
    ref={heroCard1} 
    className="fade-in rounded-2xl p-5 shadow-[0_8px_32px_0_rgba(0,0,0,0.08)] w-72 border transition-all duration-300 hover:scale-[1.02]"
    style={{
      backgroundColor: "rgba(255, 255, 255, 0.4)",
      backdropFilter: "blur(16px) saturate(150%)",
      WebkitBackdropFilter: "blur(16px) saturate(150%)",
      borderColor: "rgba(255, 255, 255, 0.4)",
    }}
  >
    <div className="flex items-center gap-3 mb-3">
      <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-white/60 shadow-sm">
        <Users className="w-5 h-5" style={{ color: "var(--brand-primary)" }} />
      </div>
      <span className="text-sm font-bold" style={{ color: "var(--brand-primary)" }}>
        Conoce a nuestro equipo
      </span>
    </div>
    <div className="flex items-center gap-1">
      {["CM", "LP", "AT", "PR"].map((ini) => (
        <div 
          key={ini} 
          className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold -ml-1 first:ml-0 border-2 border-white/60 shadow-sm" 
          style={{ backgroundColor: "var(--brand-green)" }}
        >
          {ini}
        </div>
      ))}
      <div className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold -ml-1 border-2 border-white/60 shadow-sm" style={{ backgroundColor: "var(--brand-primary)" }}>+</div>
    </div>
  </div>

  {/* Card 2: Testimonio Reciente (Añadido justo abajo) */}
  <div 
    ref={heroCard2} 
    className="fade-in rounded-2xl p-5 shadow-[0_8px_32px_0_rgba(0,0,0,0.08)] w-72 border transition-all duration-300 hover:scale-[1.02]"
    style={{
      backgroundColor: "rgba(255, 255, 255, 0.4)",
      backdropFilter: "blur(16px) saturate(150%)",
      WebkitBackdropFilter: "blur(16px) saturate(150%)",
      borderColor: "rgba(255, 255, 255, 0.4)",
    }}
  >
    <div className="flex items-center justify-between mb-2">
      <span className="text-sm font-bold" style={{ color: "var(--brand-primary)" }}>
        Testimonio reciente
      </span>
      <div className="w-7 h-7 rounded-full flex items-center justify-center text-white text-xs shadow-sm" style={{ backgroundColor: "var(--brand-green)" }}>
        ★
      </div>
    </div>
    <p className="text-xs leading-relaxed mb-3 font-medium" style={{ color: "var(--brand-primary)" }}>
      "Transformamos nuestra clínica completamente. El soporte de Foster Stern es excepcional."
    </p>
    <div className="flex items-center gap-2 pt-1 border-t border-white/20">
      <div className="w-7 h-7 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-sm" style={{ backgroundColor: "var(--brand-primary)" }}>
        DM
      </div>
      <div>
        <p className="text-xs font-bold" style={{ color: "var(--brand-primary)" }}>Dr. Mendoza</p>
        <p className="text-[10px] opacity-80" style={{ color: "var(--brand-primary)" }}>Director Médico</p>
      </div>
    </div>
  </div>

</div>
        </div>
      </div>

      {/* Bottom Floating Info Bar */}
      <div className="relative z-10 w-full">
        <div className="max-w-7xl mx-auto px-6 pb-8">
          <div className="bg-white/95 backdrop-blur-md rounded-2xl px-8 py-6 grid grid-cols-1 md:grid-cols-3 gap-6 shadow-xl">
            {[
              { icon: <Shield className="w-6 h-6" style={{ color: "var(--brand-green)" }} />, title: "Sin Inversión Inicial", desc: "Integramos el servicio sin riesgo financiero para tu clínica." },
              { icon: <Users className="w-6 h-6" style={{ color: "var(--brand-green)" }} />, title: "Soporte Especializado", desc: "Personal capacitado y protocolos clínicos incluidos." },
              { icon: <HeartPulse className="w-6 h-6" style={{ color: "var(--brand-green)" }} />, title: "Atención Completa", desc: "Desde el diagnóstico hasta el tratamiento en tu consultorio." },
            ].map((item, i) => (
              <div key={i} className={`flex items-start gap-4 ${i < 2 ? "md:border-r border-gray-200 md:pr-6" : ""}`}>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "var(--brand-light)" }}>
                  {item.icon}
                </div>
                <div>
                  <p className="font-bold text-sm mb-1" style={{ color: "var(--brand-primary)" }}>{item.title}</p>
                  <p className="text-xs leading-relaxed" style={{ color: "var(--brand-muted)" }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </header>

            {/* ── SECCIÓN: FOCUSED ALLERGY SOLUTIONS ── */}
            <section className="py-20 bg-white overflow-hidden">
              <div className="max-w-7xl mx-auto px-6 md:px-10">
                <div className="flex flex-col md:flex-row-reverse items-center gap-12 md:gap-16">
                  <div ref={focusedImg} className="fade-in w-full md:w-[420px] flex-shrink-0">
                    <img
                      src="https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=600&q=80"
                      alt="Paciente con alergia"
                      className="w-full h-[440px] object-cover rounded-3xl shadow-lg"
                    />
                  </div>

                  <div className="flex-1 flex flex-col gap-6">
                    <h2
                      ref={focusedTitle}
                      className="fade-in text-4xl md:text-5xl leading-tight"
                      style={{ fontFamily: "'Nunito Sans', sans-serif", fontWeight: 700, color: "var(--brand-green)" }}
                    >
                      Soluciones de Alergia Enfocadas
                    </h2>

                    <p className="text-lg font-semibold" style={{ color: "var(--brand-primary)", fontFamily: "'Nunito Sans', sans-serif" }}>
                      La atención de alergias está en alta demanda, pero muchas clínicas enfrentan:
                    </p>

                    <ul ref={focusedList} className="fade-in space-y-4">
                      {[
                        "Personal limitado capacitado en pruebas de alergia, inmunoterapia, espacio, equipos y barreras de cumplimiento.",
                        "Ingresos perdidos por referencias enviadas fuera de la clínica.",
                        "Mayor carga administrativa y operativa.",
                        "Los pacientes esperan más, las clínicas pierden ingresos y la continuidad del cuidado se ve afectada.",
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-4">
                          <div
                            className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                            style={{ backgroundColor: "var(--brand-light)", border: "1.5px solid var(--brand-green)" }}
                          >
                            <span className="w-2 h-2 rounded-full" style={{ backgroundColor: "var(--brand-green)" }} />
                          </div>
                          <span className="text-base leading-relaxed" style={{ color: "var(--brand-muted)", fontFamily: "'Nunito Sans', sans-serif" }}>
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* ── SECCIÓN: CÓMO BRINDAMOS SOLUCIONES DURADERAS ── */}
            <section className="py-20 bg-white">
              <div className="max-w-7xl mx-auto px-8 md:px-12">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div ref={howImg} className="fade-in from-left relative rounded-3xl overflow-hidden h-[480px]">
                    <img
                      src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&q=80"
                      alt="Especialista en alergias con paciente"
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div
                      className="absolute bottom-0 left-0 right-0 h-24"
                      style={{ background: "linear-gradient(to top, rgba(5,74,91,0.88), transparent)" }}
                    />
                  </div>

                  <div ref={howContent} className="fade-in from-right flex flex-col gap-8">
                    <div>
                      <h2 className="text-3xl md:text-4xl mb-3" style={{ fontFamily: "'Nunito Sans', sans-serif", color: "var(--brand-primary)" }}>
                        Cómo Brindamos Soluciones Duraderas
                      </h2>
                      <p className="text-base" style={{ color: "var(--brand-muted)" }}>
                        Encuentra el tratamiento que mejor se adapta a tu clínica y tus pacientes.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {[
                        {
                          icon: <Users className="w-6 h-6" style={{ color: "var(--brand-green)" }} />,
                          title: "Proveedores Locales",
                          desc: "Cada clínica es única. Como socios, desarrollamos planes de servicio personalizados para cada práctica médica.",
                          link: "Encontrar un proveedor",
                        },
                        {
                          icon: <Network className="w-6 h-6" style={{ color: "var(--brand-green)" }} />,
                          title: "Red Nacional",
                          desc: "Foster Stern Group es una de las redes de alergias más grandes y confiables del país, con presencia en todo el territorio.",
                          link: "¿Por qué Foster Stern?",
                        },
                        {
                          icon: <ClipboardList className="w-6 h-6" style={{ color: "var(--brand-green)" }} />,
                          title: "Soluciones Personalizadas",
                          desc: "Desarrolladas con cientos de especialistas, nuestros procesos ofrecen a los pacientes alivio rápido y de calidad.",
                          link: "Tu camino al alivio",
                        },
                        {
                          icon: <HeartPulse className="w-6 h-6" style={{ color: "var(--brand-green)" }} />,
                          title: "Experiencias Sin Fricción",
                          desc: "Desde la agenda hasta el laboratorio en consultorio, hacemos más fácil que nunca brindar la atención que merecen.",
                          link: "Ver recursos",
                        },
                      ].map((item) => (
                        <div key={item.title} className="flex flex-col gap-2">
                          <div className="w-12 h-12 rounded-full flex items-center justify-center mb-1" style={{ backgroundColor: "var(--brand-light)" }}>
                            {item.icon}
                          </div>
                          <h3 className="text-base" style={{ fontFamily: "'Nunito Sans', sans-serif", color: "var(--brand-primary)" }}>
                            {item.title}
                          </h3>
                          <p className="text-sm leading-relaxed" style={{ color: "var(--brand-muted)" }}>
                            {item.desc}
                          </p>
                          <a href="#contacto" className="text-sm font-semibold underline underline-offset-2 mt-1 hover:opacity-70 transition-opacity" style={{ color: "var(--brand-green)" }}>
                            {item.link}
                          </a>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* ── SECCIÓN: SERVICIOS ── */}
            <section id="servicios" className="py-20 bg-gradient-to-b from-white to-gray-50">
              <div className="max-w-7xl mx-auto px-6">
                <div ref={svcTitle} className="fade-in text-center mb-16">
                  <h2 className="text-4xl md:text-5xl mb-4" style={{ fontFamily: "'Nunito Sans', sans-serif", color: "var(--brand-primary)" }}>
                    Servicios Integrales
                  </h2>
                  <p className="text-xl" style={{ color: "var(--brand-muted)" }}>
                    Todo lo que necesita para ofrecer servicios de alergia de clase mundial
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                  {[
                    { ref: svcCard1, icon: <Microscope className="w-8 h-8 text-white" />, title: "Pruebas de Alergia", desc: "Pruebas cutáneas y de sangre de última generación para identificar alérgenos específicos con precisión diagnóstica superior.", p1: "Pruebas cutáneas estandarizadas", p2: "Análisis de IgE específica", p3: "Resultados en 15-20 minutos" },
                    { ref: svcCard2, icon: <FlaskConical className="w-8 h-8 text-white" />, title: "Inmunoterapia Personalizada", desc: "Desarrollo de vacunas personalizadas (subcutáneas o sublinguales) diseñadas para tratar la causa raíz de la alergia.", p1: "Sueros de alérgenos customizados", p2: "Opciones sublinguales eficaces", p3: "Desensibilización a largo plazo" },
                    { ref: svcCard3, icon: <Syringe className="w-8 h-8 text-white" />, title: "Tratamientos Avanzados", desc: "Protocolos terapéuticos modernos para condiciones complejas como asma alérgica, eccema y alergias alimentarias.", p1: "Monitoreo de función respiratoria", p2: "Manejo de biológicos modernos", p3: "Planes de acción de emergencia" }
                  ].map((card, idx) => (
                    <div
                      key={idx}
                      ref={card.ref}
                      className="fade-in delay-1 group relative overflow-hidden rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:scale-[1.02] transition-all duration-600 hover:-translate-y-2"
                      style={{ backgroundColor: "#054A5B" }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-[var(--brand-green)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                      <div className="relative z-10">
                        <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center mb-6">
                          {card.icon}
                        </div>
                        <h3 className="text-2xl mb-4" style={{ fontFamily: "'Nunito Sans', sans-serif", color: "#ffffff" }}>
                          {card.title}
                        </h3>
                        <p className="mb-6 leading-relaxed text-white/85">
                          {card.desc}
                        </p>
                        <ul className="space-y-3">
                          {[card.p1, card.p2, card.p3].map((txt, i) => (
                            <li key={i} className="flex items-start gap-3">
                              <CheckCircle2 className="w-5 h-5 text-[var(--brand-green)] mt-0.5 flex-shrink-0" />
                              <span className="font-semibold text-white/90">{txt}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* ── SECCIÓN: BENEFICIOS ── */}
            <section id="beneficios" className="py-20 bg-white">
              <div className="max-w-7xl mx-auto px-6">
                <div ref={benefitsTitle} className="fade-in text-center mb-16">
                  <h2 className="text-4xl md:text-5xl mb-4" style={{ fontFamily: "'Nunito Sans', sans-serif", color: "var(--brand-primary)" }}>
                    Beneficios para su Clínica
                  </h2>
                  <p className="text-xl" style={{ color: "var(--brand-muted)" }}>
                    Por qué los principales centros médicos eligen nuestro modelo llave en mano
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12">
                  <div ref={benefitsLeft} className="fade-in from-left space-y-6">
                    {[
                      { icon: <Shield className="w-6 h-6 text-[var(--brand-green)]" />, title: "Cero Inversión de Capital", desc: "Proporcionamos todo el equipamiento necesario, kits de pruebas y extractos antigénicos sin costo inicial." },
                      { icon: <Users className="w-6 h-6 text-[var(--brand-green)]" />, title: "Personal Altamente Calificado", desc: "Asignamos especialistas de enfermería entrenados específicamente en protocolos de alergología." }
                    ].map((b, i) => (
                      <div key={i} className="p-6 bg-gray-50 rounded-2xl flex gap-4">
                        <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm flex-shrink-0">{b.icon}</div>
                        <div>
                          <h4 className="text-lg font-bold mb-2" style={{ color: "var(--brand-primary)" }}>{b.title}</h4>
                          <p style={{ color: "var(--brand-muted)" }}>{b.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div ref={benefitsRight} className="fade-in from-right space-y-6">
                    {[
                      { icon: <Clock className="w-6 h-6 text-[var(--brand-green)]" />, title: "Implementación en 30 Días", desc: "Nuestro equipo se encarga de la configuración operativa, legal y técnica para iniciar operaciones rápidamente." },
                      { icon: <ArrowRight className="w-6 h-6 text-[var(--brand-green)]" />, title: "Nuevas Fuentes de Ingreso", desc: "Retenga a los pacientes que actualmente refiere fuera y optimice la rentabilidad de su espacio disponible." }
                    ].map((b, i) => (
                      <div key={i} className="p-6 bg-gray-50 rounded-2xl flex gap-4">
                        <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm flex-shrink-0">{b.icon}</div>
                        <div>
                          <h4 className="text-lg font-bold mb-2" style={{ color: "var(--brand-primary)" }}>{b.title}</h4>
                          <p style={{ color: "var(--brand-muted)" }}>{b.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* ── SECCIÓN: CASOS DE ÉXITO (CAROUSEL) ── */}
            
                <CasosCarousel />
              

            {/* ── SECCIÓN: NUESTRO PROCESO (CAROUSEL) ── */}
            
              
                <ProcessCarousel />
              

            {/* ── SECCIÓN: FAQ ── */}
             <section id="faq" className="py-20 bg-white">
              <div className="max-w-4xl mx-auto px-6">
                <div ref={faqTitle} className="fade-in text-center mb-16">
                  <h2
                    className="text-4xl md:text-5xl mb-4"
                    style={{
                      fontFamily: "'Nunito Sans', sans-serif",
                      color: "var(--brand-primary)",
                    }}
                  >
                    Preguntas Frecuentes
                  </h2>
                  <p
                    className="text-xl"
                    style={{ color: "var(--brand-muted)" }}
                  >
                    Resolvemos las dudas más comunes sobre nuestros servicios
                  </p>
                </div>

                <div ref={faqItems} className="fade-in space-y-4">
                  <FAQItem
                    question="¿Qué incluye el servicio llave en mano?"
                    answer="Nuestro servicio incluye todo lo necesario para comenzar: equipos de diagnóstico, protocolos clínicos estandarizados, capacitación completa del personal, materiales para pruebas de alergia e inmunoterapia, soporte técnico continuo y sistema de gestión de pacientes."
                  />

                  <FAQItem
                    question="¿Cuánto tiempo toma la implementación?"
                    answer="El proceso de implementación completo toma entre 10-14 días. Esto incluye la instalación de equipos, capacitación del personal médico y administrativo, configuración de protocolos y una fase de acompañamiento inicial."
                  />

                  <FAQItem
                    question="¿Se requiere personal médico especializado?"
                    answer="No es necesario contar con un alergólogo en el equipo. Nosotros capacitamos a médicos generales y personal de enfermería para realizar las pruebas de alergia siguiendo nuestros protocolos estandarizados. Además, ofrecemos soporte médico especializado disponible 24/7."
                  />

                  <FAQItem
                    question="¿Qué tipo de soporte ofrecen después de la implementación?"
                    answer="Ofrecemos soporte técnico y médico 24/7, actualizaciones de protocolos clínicos, reposición de materiales, capacitación continua, asesoría en casos complejos y reportes de gestión mensuales para optimizar el servicio."
                  />

                  <FAQItem
                    question="¿Cuál es el retorno de inversión esperado?"
                    answer="Nuestras clínicas asociadas reportan un ROI positivo en los primeros 6-8 meses. El servicio de alergia genera ingresos recurrentes a través de consultas, pruebas diagnósticas y tratamientos de inmunoterapia de largo plazo."
                  />
                </div>
              </div>
            </section>

            {/* ── SECCIÓN: CALL TO ACTION (CTA) ── */}
            <section ref={ctaBlock} className="fade-in py-16 bg-gradient-to-r from-[#054A5B] to-[#008154] text-white text-center">
              <div className="max-w-4xl mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">¿Listo para transformar los servicios de su clínica?</h2>
                <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">Únase a los centros de salud que ya están expandiendo su portafolio médico con soporte experto y sin riesgos operativos.</p>
                <a href="#contacto" className="inline-block bg-white text-[#054A5B] font-bold px-8 py-4 rounded-xl shadow-lg hover:bg-gray-100 transition-colors">Agendar una Consulta Técnica</a>
              </div>
            </section>

            {/* ── SECCIÓN: CONTACTO ── */}
             <section
              id="contacto"
              className="py-20 bg-gradient-to-b from-gray-50 to-white"
            >
              <div className="max-w-6xl mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-12 items-start">
                  {/* Left Column - Info */}
                  <div>
                    <h2
                      className="text-4xl md:text-5xl mb-4"
                      style={{
                        fontFamily: "'Nunito Sans', sans-serif",
                        color: "var(--brand-primary)",
                      }}
                    >
                      ¿Listo para Comenzar?
                    </h2>

                    {/* Badge empresa */}
                    <div
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
                      style={{ backgroundColor: "var(--brand-light)" }}
                    >
                      <span
                        className="w-2 h-2 rounded-full"
                        style={{ backgroundColor: "var(--brand-green)" }}
                      />
                      <span
                        className="text-sm font-bold uppercase tracking-wide"
                        style={{ color: "var(--brand-green)" }}
                      >
                        Somos la empresa más grande de alergias en USA — Miami
                      </span>
                    </div>

                    <p
                      className="text-lg mb-8 leading-relaxed"
                      style={{ color: "var(--brand-muted)" }}
                    >
                      Complete el formulario y uno de nuestros especialistas se
                      pondrá en contacto con usted en menos de 24 horas.
                    </p>

                    {/* MAPA */}
                    <div
                      className="overflow-hidden rounded-3xl border shadow-xl bg-white"
                      style={{ borderColor: "var(--brand-secondary)" }}
                    >
                      <iframe
                        title="Ubicación Foster Stern Group"
                        src="https://www.google.com/maps?q=7480+SW+40th+Street+Suite+850+Miami+FL+33155&output=embed"
                        width="100%"
                        height="300"
                        loading="lazy"
                        className="w-full border-0"
                        referrerPolicy="no-referrer-when-downgrade"
                      />
                    </div>

                    {/* DIRECCIÓN */}
                    <div className="mt-5 flex items-start gap-3">
                      <div
                        className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                        style={{ backgroundColor: "var(--brand-light)" }}
                      >
                        <svg
                          viewBox="0 0 24 24"
                          className="w-4 h-4"
                          fill="currentColor"
                          style={{ color: "var(--brand-green)" }}
                        >
                          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                        </svg>
                      </div>
                      <div>
                        <p
                          className="text-sm font-semibold"
                          style={{ color: "var(--brand-primary)" }}
                        >
                          Oficina Principal
                        </p>
                        <p
                          className="text-sm leading-relaxed mt-1"
                          style={{ color: "var(--brand-muted)" }}
                        >
                          7480 SW 40th Street Suite 850
                          <br />
                          Miami, FL 33155
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Right Column - Form */}
                  <div className="bg-white/80 backdrop-blur-md rounded-2xl p-8 border border-gray-200 shadow-lg">
                    <form className="space-y-5">
                      <div>
                        <label
                          className="block mb-1.5 text-sm font-semibold"
                          style={{ color: "var(--brand-primary)" }}
                        >
                          Nombre de la Clínica
                        </label>
                        <input
                          type="text"
                          className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[var(--brand-green)] focus:ring-2 focus:ring-[var(--brand-green)]/20 outline-none transition-all text-sm bg-gray-50"
                          placeholder="Escriba el nombre de su clínica"
                        />
                      </div>

                      <div>
                        <label
                          className="block mb-1.5 text-sm font-semibold"
                          style={{ color: "var(--brand-primary)" }}
                        >
                          Nombre Completo del Contacto
                        </label>
                        <input
                          type="text"
                          className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[var(--brand-green)] focus:ring-2 focus:ring-[var(--brand-green)]/20 outline-none transition-all text-sm bg-gray-50"
                          placeholder="Escriba su nombre completo"
                        />
                      </div>

                      <div>
                        <label
                          className="block mb-1.5 text-sm font-semibold"
                          style={{ color: "var(--brand-primary)" }}
                        >
                          Título
                        </label>
                        <input
                          type="text"
                          className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[var(--brand-green)] focus:ring-2 focus:ring-[var(--brand-green)]/20 outline-none transition-all text-sm bg-gray-50"
                          placeholder="Escriba su título aquí"
                        />
                      </div>

                      <div>
                        <label
                          className="block mb-1.5 text-sm font-semibold"
                          style={{ color: "var(--brand-primary)" }}
                        >
                          Teléfono Directo
                        </label>
                        <input
                          type="tel"
                          className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[var(--brand-green)] focus:ring-2 focus:ring-[var(--brand-green)]/20 outline-none transition-all text-sm bg-gray-50"
                          placeholder="Escriba su teléfono directo"
                        />
                      </div>

                      <div>
                        <label
                          className="block mb-1.5 text-sm font-semibold"
                          style={{ color: "var(--brand-primary)" }}
                        >
                          Correo Electrónico
                        </label>
                        <input
                          type="email"
                          className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[var(--brand-green)] focus:ring-2 focus:ring-[var(--brand-green)]/20 outline-none transition-all text-sm bg-gray-50"
                          placeholder="Escriba su correo electrónico"
                        />
                      </div>

                      <div>
                        <label
                          className="block mb-1.5 text-sm font-semibold"
                          style={{ color: "var(--brand-primary)" }}
                        >
                          Dirección
                        </label>
                        <input
                          type="text"
                          className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[var(--brand-green)] focus:ring-2 focus:ring-[var(--brand-green)]/20 outline-none transition-all text-sm bg-gray-50"
                          placeholder="Escriba su dirección aquí"
                        />
                      </div>

                      <div>
                        <label
                          className="block mb-1.5 text-sm font-semibold"
                          style={{ color: "var(--brand-primary)" }}
                        >
                          Especialidad
                        </label>
                        <input
                          type="text"
                          className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[var(--brand-green)] focus:ring-2 focus:ring-[var(--brand-green)]/20 outline-none transition-all text-sm bg-gray-50"
                          placeholder="Escriba su especialidad aquí"
                        />
                      </div>

                      {/* Checkbox */}
                      <div className="flex items-start gap-3 pt-1">
                        <input
                          type="checkbox"
                          id="consent"
                          className="mt-1 w-4 h-4 flex-shrink-0 rounded border-gray-300 accent-[var(--brand-green)]"
                        />
                        <label
                          htmlFor="consent"
                          className="text-sm leading-relaxed cursor-pointer"
                          style={{ color: "var(--brand-muted)" }}
                        >
                          Acepto ser contactado sobre servicios y oportunidades.
                        </label>
                      </div>

                      <button
                        type="submit"
                        className="w-full px-8 py-4 text-white rounded-lg hover:opacity-90 transition-all flex items-center justify-center gap-2 shadow-lg"
                        style={{ backgroundColor: "var(--brand-green)" }}
                      >
                        Enviar Mensaje
                        <ArrowRight className="w-5 h-5" />
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </section>
            
            <footer
              className="bg-white border-t"
              style={{ borderColor: "var(--brand-secondary)" }}
            >
              <div className="max-w-7xl mx-auto px-6 py-14">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
                  {/* Col 1 — Logo + descripción + redes */}
                  <div className="flex flex-col gap-5">
                    <ImageWithFallback
                      src="/Fostersterm/LogoFS.png"
                      alt="Foster Stern Group"
                      className="h-24 w-auto object-contain"
                    />
                    <p
                      className="text-sm leading-relaxed"
                      style={{
                        color: "var(--brand-muted)",
                        fontFamily: "'Nunito Sans', sans-serif",
                      }}
                    >
                      Tu éxito es nuestro éxito. Transforma tu clínica con
                      servicios integrados de alergia: sin inversión inicial,
                      sin riesgo y con el respaldo de profesionales expertos.
                      Crecemos juntos.
                    </p>
                    {/* Redes sociales */}
                    <div className="flex items-center gap-3 mt-1">
                      {[
                        {
                          label: "Twitter",
                          path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z",
                        },
                        {
                          label: "Facebook",
                          path: "M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z",
                        },
                        {
                          label: "YouTube",
                          path: "M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 00-1.95 1.96A29 29 0 001 12a29 29 0 00.46 5.58a2.78 2.78 0 001.95 1.95C5.12 20 12 20 12 20s6.88 0 8.59-.47a2.78 2.78 0 001.95-1.95A29 29 0 0023 12a29 29 0 00-.46-5.58zM9.75 15.02V8.98L15.5 12z",
                        },
                        {
                          label: "Instagram",
                          path: "M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z M4 6a2 2 0 100-4 2 2 0 000 4z",
                        },
                      ].map(({ label, path }) => (
                        <a
                          key={label}
                          href="#"
                          aria-label={label}
                          className="w-9 h-9 rounded-full flex items-center justify-center transition-all hover:scale-110"
                          style={{ backgroundColor: "var(--brand-green)" }}
                        >
                          <svg
                            viewBox="0 0 24 24"
                            className="w-4 h-4 fill-white"
                          >
                            <path d={path} />
                          </svg>
                        </a>
                      ))}
                    </div>
                  </div>

                  {/* Col 2 — Información */}
                  <div>
                    <h4
                      className="text-base font-bold mb-5"
                      style={{
                        color: "var(--brand-primary)",
                        fontFamily: "'Nunito Sans', sans-serif",
                      }}
                    >
                      Información
                    </h4>
                    <ul className="space-y-3">
                      {[
                        { label: "Sobre Nosotros", href: "/nosotros" },
                        { label: "Servicios", href: "#servicios" },
                        { label: "FAQ", href: "#faq" },
                        { label: "Contacto", href: "#contacto" },
                      ].map(({ label, href }) => (
                        <li key={label}>
                          <a
                            href={href}
                            className="footer-link text-sm flex items-center gap-2"
                            style={{
                              color: "var(--brand-muted)",
                              fontFamily: "'Nunito Sans', sans-serif",
                            }}
                          >
                            <svg
                              viewBox="0 0 24 24"
                              className="w-3 h-3 flex-shrink-0"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={3}
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M9 5l7 7-7 7"
                              />
                            </svg>
                            {label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Col 3 — Contacto */}
                  <div>
                    <h4
                      className="text-base font-bold mb-5"
                      style={{
                        color: "var(--brand-primary)",
                        fontFamily: "'Nunito Sans', sans-serif",
                      }}
                    >
                      Contáctanos
                    </h4>
                    <ul className="space-y-4">
                      <li className="flex items-start gap-3">
                        <div
                          className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                          style={{ backgroundColor: "var(--brand-light)" }}
                        >
                          <svg
                            viewBox="0 0 24 24"
                            className="w-3.5 h-3.5"
                            fill="currentColor"
                            style={{ color: "var(--brand-green)" }}
                          >
                            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                          </svg>
                        </div>
                        <span
                          className="text-sm leading-relaxed"
                          style={{
                            color: "var(--brand-muted)",
                            fontFamily: "'Nunito Sans', sans-serif",
                          }}
                        >
                          7480 SW 40th Street
                          <br />
                          Suite 850
                          <br />
                          Miami, FL 33155
                        </span>
                      </li>
                      <li className="flex items-center gap-3">
                        <div
                          className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0"
                          style={{ backgroundColor: "var(--brand-light)" }}
                        >
                          <svg
                            viewBox="0 0 24 24"
                            className="w-3.5 h-3.5"
                            fill="currentColor"
                            style={{ color: "var(--brand-green)" }}
                          >
                            <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                          </svg>
                        </div>
                        <span
                          className="text-sm"
                          style={{
                            color: "var(--brand-muted)",
                            fontFamily: "'Nunito Sans', sans-serif",
                          }}
                        >
                          +1 (786) 977-3733
                        </span>
                      </li>
                      <li className="flex items-center gap-3">
                        <div
                          className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0"
                          style={{ backgroundColor: "var(--brand-light)" }}
                        >
                          <svg
                            viewBox="0 0 24 24"
                            className="w-3.5 h-3.5"
                            fill="currentColor"
                            style={{ color: "var(--brand-green)" }}
                          >
                            <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                          </svg>
                        </div>
                        <span
                          className="text-sm"
                          style={{
                            color: "var(--brand-muted)",
                            fontFamily: "'Nunito Sans', sans-serif",
                          }}
                        >
                          info@fosterstern.com
                        </span>
                      </li>
                    </ul>
                  </div>

                  {/* Col 4 — Horario */}
                  <div>
                    <h4
                      className="text-base font-bold mb-5"
                      style={{
                        color: "var(--brand-primary)",
                        fontFamily: "'Nunito Sans', sans-serif",
                      }}
                    >
                      Horario de Atención
                    </h4>
                    <div className="flex items-start gap-3">
                      <div
                        className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                        style={{ backgroundColor: "var(--brand-light)" }}
                      >
                        <svg
                          viewBox="0 0 24 24"
                          className="w-3.5 h-3.5"
                          fill="currentColor"
                          style={{ color: "var(--brand-green)" }}
                        >
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm.5 5v5.25l4.5 2.67-.75 1.23L11 13V7h1.5z" />
                        </svg>
                      </div>
                      <div>
                        <p
                          className="text-sm font-semibold"
                          style={{ color: "var(--brand-primary)" }}
                        >
                          9:00AM – 5:00PM, Lunes – Viernes
                        </p>
                        <p
                          className="text-sm mt-1"
                          style={{ color: "var(--brand-muted)" }}
                        >
                          Atendemos en horario de oficina
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom bar */}
                <div
                  className="border-t pt-6 flex flex-col md:flex-row items-center justify-between gap-3"
                  style={{ borderColor: "var(--brand-secondary)" }}
                >
                  <p
                    className="text-sm"
                    style={{ color: "var(--brand-muted)" }}
                  >
                    &copy; 2026 Foster Stern Group. Todos los derechos
                    reservados.
                  </p>
                  <div className="flex gap-4">
                    <a
                      href="#"
                      className="footer-link text-sm"
                      style={{
                        color: "var(--brand-muted)",
                        fontFamily: "'Nunito Sans', sans-serif",
                      }}
                    >
                      Privacidad
                    </a>
                    <a
                      href="#"
                      className="footer-link text-sm"
                      style={{
                        color: "var(--brand-muted)",
                        fontFamily: "'Nunito Sans', sans-serif",
                      }}
                    >
                      Términos
                    </a>
                  </div>
                </div>
              </div>
            </footer>
          </div>
        }
      />
    </Routes>
  );
}