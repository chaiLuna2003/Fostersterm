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
import Blog from "./pages/blog";
import Nosotros from "./pages/Nosotros";
import English from "./pages/English";
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
      <Route path="/english" element={<English />} />
      <Route
        path="/*"
        element = {
          <div
            className="min-h-screen bg-white overflow-x-hidden"
            style={{ fontFamily: "'Nunito Sans', sans-serif" }}
          >
            {/* ── HERO SECTION ── */}
            
    <header className="relative overflow-hidden overflow-x-hidden min-h-screen flex flex-col">
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
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-3 md:py-4 flex items-center justify-between transition-all duration-300">
          <div className="flex items-center gap-3">
            <ImageWithFallback
              src="/Fostersterm/LOGOFALLERGY.png"
              alt="Foster Stern Group"
              className={`h-16 md:h-18 lg:h-24 w-auto object-contain transition-all duration-300 ${
                scrolled ? "brightness-0 opacity-90" : ""
              }`}
            />
          </div>

          {/* Desktop nav links — only shown on lg+ */}
          <div className="hidden lg:flex items-center gap-5 xl:gap-7">
            <Link 
              to="/nosotros" 
              className="nav-link text-sm xl:text-base font-semibold transition-colors duration-300" 
              style={{ color: scrolled ? "#054A5B" : "rgba(255,255,255,0.92)" }}
            >
              Nosotros
            </Link>
            {["Servicios", "Beneficios", "Proceso", "FAQ"].map((section) => (
              <a 
                key={section}
                href={`/#${section}`} 
                className="nav-link text-sm xl:text-base font-semibold transition-colors duration-300" 
                style={{ color: scrolled ? "#054A5B" : "rgba(255,255,255,0.92)" }}
              >
                {section}
              </a>
            ))}
            <Link 
              to="/blog" 
              className="nav-link text-sm xl:text-base font-semibold transition-colors duration-300" 
              style={{ color: scrolled ? "#054A5B" : "rgba(255,255,255,0.92)" }}
            >
              Blog
            </Link>
            <a 
              href="/#contacto" 
              className="nav-cta px-4 py-2 rounded-xl text-white shadow-md font-bold transition-all duration-300 hover:scale-105 text-sm xl:text-base" 
              style={{ backgroundColor: "var(--brand-green)" }}
            >
              Contactar
            </a>
            <Link
              to="/english"
              className="px-4 py-2 rounded-xl font-bold border-2 transition-all duration-300 hover:scale-105 text-sm xl:text-base"
              style={{ color: scrolled ? "#054A5B" : "white", borderColor: scrolled ? "#054A5B" : "rgba(255,255,255,0.7)" }}
            >
              🇺🇸 English
            </Link>
          </div>

          {/* Tablet + Mobile hamburger — shown below lg */}
          <MobileMenu scrolled={scrolled} />
        </div>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 flex-1 flex items-center max-w-7xl mx-auto w-full px-4 md:px-10 pb-6 overflow-x-hidden" style={{ paddingTop: "130px" }}>
        <div className="w-full">
          {/* Text content — centered on mobile/tablet, left on desktop */}
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
            <div className="flex flex-col gap-5 md:gap-6 max-w-2xl mx-auto lg:mx-0 text-center lg:text-left">
              <div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full self-center lg:self-start border"
                style={{ backgroundColor: "rgba(255,255,255,0.12)", borderColor: "rgba(255,255,255,0.3)" }}
              >
                <Sparkles className="w-4 h-4 text-white" />
                <span className="text-sm text-white">Soluciones Médicas Innovadoras</span>
              </div>

              <h1
                className="hero-title-shimmer text-4xl md:text-5xl lg:text-7xl leading-tight"
                style={{ fontFamily: "'Nunito Sans', sans-serif", fontWeight: 800 }}
              >
                Mejorando vidas, una prueba a la vez.
              </h1>

              <p className="text-base md:text-lg lg:text-xl leading-relaxed max-w-xl mx-auto lg:mx-0" style={{ color: "rgba(255,255,255,0.88)" }}>
                Ofrecemos soluciones integrales de alergología para tu clínica, encargándonos de todo para que puedas brindar atención integral directamente en tus instalaciones.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mt-2 justify-center lg:justify-start">
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

            {/* Tablet: horizontal mini-cards row | Desktop: vertical cards column */}
            <div className="hidden md:flex lg:hidden flex-row gap-4 mt-10 justify-center">
              {/* Card 1 mini — equipo */}
              <div
                className="rounded-2xl p-4 flex-1 max-w-[220px] border shadow-lg"
                style={{
                  backgroundColor: "rgba(255,255,255,0.35)",
                  backdropFilter: "blur(16px) saturate(150%)",
                  WebkitBackdropFilter: "blur(16px) saturate(150%)",
                  borderColor: "rgba(255,255,255,0.4)",
                }}
              >
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-white/60 shadow-sm flex-shrink-0">
                    <Users className="w-4 h-4" style={{ color: "var(--brand-primary)" }} />
                  </div>
                  <span className="text-xs font-bold leading-tight" style={{ color: "var(--brand-primary)" }}>
                    Nuestro equipo
                  </span>
                </div>
                <div className="flex items-center gap-0.5">
                  {["CM", "LP", "AT", "PR"].map((ini) => (
                    <div
                      key={ini}
                      className="w-7 h-7 rounded-full flex items-center justify-center text-white text-[10px] font-bold -ml-1 first:ml-0 border-2 border-white/60"
                      style={{ backgroundColor: "var(--brand-green)" }}
                    >
                      {ini}
                    </div>
                  ))}
                  <div className="w-7 h-7 rounded-full flex items-center justify-center text-white text-[10px] font-bold -ml-1 border-2 border-white/60" style={{ backgroundColor: "var(--brand-primary)" }}>+</div>
                </div>
              </div>

              {/* Card 2 mini — testimonio */}
              <div
                className="rounded-2xl p-4 flex-1 max-w-[260px] border shadow-lg"
                style={{
                  backgroundColor: "rgba(255,255,255,0.35)",
                  backdropFilter: "blur(16px) saturate(150%)",
                  WebkitBackdropFilter: "blur(16px) saturate(150%)",
                  borderColor: "rgba(255,255,255,0.4)",
                }}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold" style={{ color: "var(--brand-primary)" }}>Testimonio reciente</span>
                  <div className="w-6 h-6 rounded-full flex items-center justify-center text-white text-xs shadow-sm flex-shrink-0" style={{ backgroundColor: "var(--brand-green)" }}>★</div>
                </div>
                <p className="text-[11px] leading-relaxed mb-2 font-medium" style={{ color: "var(--brand-primary)" }}>
                  "Transformamos nuestra clínica completamente. El soporte de Foster Stern es excepcional."
                </p>
                <div className="flex items-center gap-2 pt-1 border-t border-white/20">
                  <div className="w-6 h-6 rounded-full flex items-center justify-center text-white text-[10px] font-bold flex-shrink-0" style={{ backgroundColor: "var(--brand-primary)" }}>DM</div>
                  <div>
                    <p className="text-[10px] font-bold" style={{ color: "var(--brand-primary)" }}>Dr. Mendoza</p>
                    <p className="text-[9px] opacity-70" style={{ color: "var(--brand-primary)" }}>Director Médico</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Desktop only: vertical cards */}
            <div className="hidden lg:flex flex-col gap-5 items-end">
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
                  <span className="text-sm font-bold" style={{ color: "var(--brand-primary)" }}>Testimonio reciente</span>
                  <div className="w-7 h-7 rounded-full flex items-center justify-center text-white text-xs shadow-sm" style={{ backgroundColor: "var(--brand-green)" }}>★</div>
                </div>
                <p className="text-xs leading-relaxed mb-3 font-medium" style={{ color: "var(--brand-primary)" }}>
                  "Transformamos nuestra clínica completamente. El soporte de Foster Stern es excepcional."
                </p>
                <div className="flex items-center gap-2 pt-1 border-t border-white/20">
                  <div className="w-7 h-7 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-sm" style={{ backgroundColor: "var(--brand-primary)" }}>DM</div>
                  <div>
                    <p className="text-xs font-bold" style={{ color: "var(--brand-primary)" }}>Dr. Mendoza</p>
                    <p className="text-[10px] opacity-80" style={{ color: "var(--brand-primary)" }}>Director Médico</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Floating Info Bar */}
      <div className="relative z-10 w-full">
        <div className="max-w-7xl mx-auto px-4 md:px-6 pb-8">
          <div className="bg-white/95 backdrop-blur-md rounded-2xl px-4 md:px-8 py-6 grid grid-cols-1 md:grid-cols-3 gap-6 shadow-xl">
            {[
              { icon: <Shield className="w-6 h-6" style={{ color: "var(--brand-green)" }} />, title: "Sin Inversión Inicial", desc: "Integramos el servicio sin riesgo financiero para tu clínica." },
              { icon: <Users className="w-6 h-6" style={{ color: "var(--brand-green)" }} />, title: "Soporte Especializado", desc: "Personal capacitado y protocolos clínicos incluidos." },
              { icon: <HeartPulse className="w-6 h-6" style={{ color: "var(--brand-green)" }} />, title: "Atención Completa", desc: "Desde el diagnóstico hasta el tratamiento en tu consultorio." },
            ].map((item, i) => (
              <div key={i} className={`flex items-start gap-4 ${i < 2 ? "md:border-r border-gray-200 md:pr-6" : ""} ${i > 0 ? "pt-4 md:pt-0 border-t md:border-t-0 border-gray-100" : ""}`}>
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
            <section className="py-16 md:py-20 bg-white overflow-hidden">
              <div className="max-w-7xl mx-auto px-6 md:px-10">
                <div className="flex flex-col md:flex-row-reverse items-center gap-10 md:gap-12">
                  <div ref={focusedImg} className="fade-in w-full md:w-[320px] lg:w-[420px] flex-shrink-0">
                    <img
                      src="https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=600&q=80"
                      alt="Médico revisando paciente con alergia"
                      className="w-full h-[280px] md:h-[380px] lg:h-[440px] object-cover rounded-3xl shadow-lg"
                    />
                  </div>

                  <div className="flex-1 flex flex-col gap-5 md:gap-6">
                    <h2
                      ref={focusedTitle}
                      className="fade-in text-4xl md:text-5xl leading-tight"
                      style={{ fontFamily: "'Nunito Sans', sans-serif", fontWeight: 700, color: "var(--brand-green)" }}
                    >
                      Soluciones Especializadas en Alergias
                    </h2>

                    <p className="text-lg font-semibold" style={{ color: "var(--brand-primary)", fontFamily: "'Nunito Sans', sans-serif" }}>
                      La atención en alergias está en alta demanda, pero muchas prácticas enfrentan:
                    </p>

                    <ul ref={focusedList} className="fade-in space-y-4">
                      {[
                        "Personal limitado capacitado en pruebas de alergia e inmunoterapia, barreras de espacio, equipo y cumplimiento normativo.",
                        "Pérdida de ingresos por derivaciones enviadas fuera de la práctica.",
                        "Mayor carga administrativa y operativa.",
                        "Resultado: los pacientes esperan más tiempo, las clínicas pierden ingresos y la continuidad del cuidado se ve afectada.",
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

            <section className="py-16 md:py-20 bg-white">
              <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
                <div className="grid md:grid-cols-2 gap-10 md:gap-12 items-center">
                  <div ref={howImg} className="fade-in from-left relative rounded-3xl overflow-hidden h-[320px] md:h-[400px] lg:h-[480px]">
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
                        ¿Cómo Funciona?
                      </h2>
                      <p className="text-base font-semibold" style={{ color: "var(--brand-green)" }}>
                        Mínima interrupción, máximo valor clínico.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {[
                        {
                          icon: <Network className="w-6 h-6" style={{ color: "var(--brand-green)" }} />,
                          title: "Integración con su flujo de trabajo",
                          desc: "Nos integramos con el flujo de trabajo de su clínica, sin interrumpir sus operaciones habituales.",
                          link: "Conocer el proceso",
                        },
                        {
                          icon: <Users className="w-6 h-6" style={{ color: "var(--brand-green)" }} />,
                          title: "Equipo capacitado en sitio",
                          desc: "Nuestro equipo capacitado realiza las pruebas de alergia directamente en su clínica, sin que usted tenga que gestionar personal adicional.",
                          link: "Nuestro equipo",
                        },
                        {
                          icon: <ClipboardList className="w-6 h-6" style={{ color: "var(--brand-green)" }} />,
                          title: "Protocolos establecidos",
                          desc: "Los tratamientos se administran bajo protocolos clínicos estandarizados, con énfasis en la seguridad del paciente y la documentación.",
                          link: "Ver protocolos",
                        },
                        {
                          icon: <HeartPulse className="w-6 h-6" style={{ color: "var(--brand-green)" }} />,
                          title: "Apoyo continuo e informes",
                          desc: "Se brinda apoyo continuo e informes periódicos a su práctica. Operamos como una extensión de su práctica, no como una interrupción.",
                          link: "Ver soporte",
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

            <section id="servicios" className="py-16 md:py-20 bg-gradient-to-b from-white to-gray-50">
              <div className="max-w-7xl mx-auto px-6">
                <div ref={svcTitle} className="fade-in text-center mb-12 md:mb-16">
                  <h2 className="text-3xl md:text-4xl lg:text-5xl mb-4" style={{ fontFamily: "'Nunito Sans', sans-serif", color: "var(--brand-primary)" }}>
                    Credibilidad Clínica y Operacional
                  </h2>
                  <p className="text-lg md:text-xl" style={{ color: "var(--brand-muted)" }}>
                    Operamos como una extensión de su práctica, no como una interrupción
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                  {[
                    { ref: svcCard1, icon: <Microscope className="w-8 h-8 text-white" />, title: "Protocolos Estandarizados", desc: "Protocolos clínicos estandarizados alineados con las mejores prácticas clínicas para garantizar resultados consistentes y seguros en cada paciente.", p1: "Alineados con las mejores prácticas clínicas", p2: "Fuerte énfasis en seguridad del paciente", p3: "Documentación clínica rigurosa" },
                    { ref: svcCard2, icon: <FlaskConical className="w-8 h-8 text-white" />, title: "Equipo Clínico Especializado", desc: "Equipo clínico con experiencia y enfoque exclusivo en alergias. Programación confiable y presencia profesional en el lugar, coordinada con su agenda.", p1: "Experiencia y enfoque en alergias", p2: "Presencia profesional en su consultorio", p3: "Programación confiable y puntual" },
                    { ref: svcCard3, icon: <Syringe className="w-8 h-8 text-white" />, title: "Expansión Sin Complejidad", desc: "Expandimos sus servicios sin aumentar los costos operativos. No es necesario contratar ni capacitar personal especializado en alergias.", p1: "Sin contratación de personal especializado", p2: "Sin inversión de capital en equipos", p3: "Sin aumento de costos operativos" }
                  ].map((card, idx) => (
                    <div
                      key={idx}
                      ref={card.ref}
                      className={`fade-in delay-1 group relative overflow-hidden rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:scale-[1.02] transition-all duration-600 hover:-translate-y-2 ${idx === 2 ? "md:col-span-2 lg:col-span-1 md:max-w-md md:mx-auto md:w-full lg:max-w-none" : ""}`}
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

            <section id="beneficios" className="py-16 md:py-20 bg-white">
              <div className="max-w-7xl mx-auto px-6">
                <div ref={benefitsTitle} className="fade-in text-center mb-12 md:mb-16">
                  <h2 className="text-3xl md:text-4xl lg:text-5xl mb-4" style={{ fontFamily: "'Nunito Sans', sans-serif", color: "var(--brand-primary)" }}>
                    ¿Por Qué Las Clínicas Se Asocian Con Nosotros?
                  </h2>
                  <p className="text-lg md:text-xl" style={{ color: "var(--brand-muted)" }}>
                    Expandimos sus servicios sin aumentar los costos operativos
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-12">
                  <div ref={benefitsLeft} className="fade-in from-left space-y-6">
                    {[
                      { icon: <Shield className="w-6 h-6 text-[var(--brand-green)]" />, title: "Sin inversión de capital", desc: "No se requiere inversión de capital en equipos y suministros. Mejore su práctica sin riesgo financiero: sin costo inicial, sin costo de equipos, sin gastos adicionales." },
                      { icon: <Users className="w-6 h-6 text-[var(--brand-green)]" />, title: "Sin contratar personal especializado", desc: "No es necesario contratar ni capacitar personal especializado en alergias. Recibe apoyo de profesionales plenamente capacitados que se integran perfectamente en su flujo de trabajo." }
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
                      { icon: <Clock className="w-6 h-6 text-[var(--brand-green)]" />, title: "Mayor retención y satisfacción", desc: "Incremente la retención y satisfacción de los pacientes. Expanda los servicios y aumente los ingresos al mantener las pruebas y tratamientos de alergia dentro de su práctica, evitando derivaciones externas." },
                      { icon: <ArrowRight className="w-6 h-6 text-[var(--brand-green)]" />, title: "Facturación completa a su cargo", desc: "Podemos encargarnos completamente de la facturación por los servicios de alergia. Estructura de precios transparente y fácil para clínicas, escalable según el volumen de pacientes." }
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
                    question="¿Es necesario contratar o capacitar personal especializado en alergias?"
                    answer="No. No es necesario contratar ni capacitar personal especializado en alergias. Nuestro equipo plenamente capacitado se integra perfectamente en el flujo de trabajo de su clínica, realizando las pruebas y administrando los tratamientos de manera profesional y sin interrumpir sus operaciones."
                  />

                  <FAQItem
                    question="¿Se requiere inversión de capital en equipos o suministros?"
                    answer="No se requiere ninguna inversión inicial. Proveemos todos los equipos y suministros necesarios sin costo para su práctica. Puede mejorar y expandir sus servicios de alergia sin riesgo financiero."
                  />

                  <FAQItem
                    question="¿Cómo se maneja la facturación por los servicios de alergia?"
                    answer="Podemos encargarnos completamente de la facturación por los servicios de alergia. Contamos con una estructura de precios transparente y fácil para clínicas, escalable según el volumen de pacientes. Los precios detallados están disponibles bajo solicitud o durante una conversación con nuestro equipo."
                  />

                  <FAQItem
                    question="¿Qué resultados financieros puedo esperar?"
                    answer="Con solo 1 paciente diario, las pruebas de alergia generan aproximadamente $4,113 al mes ($49,360 al año) con código CPT de $205.67 por paciente. La inmunoterapia con el mismo volumen genera $19,124 al mes ($229,488 al año) a $956.20 por paciente. En ambos casos, la inversión inicial es $0.00."
                  />

                  <FAQItem
                    question="¿Para qué tipo de clínicas es este modelo?"
                    answer="Si su clínica busca expandir los servicios de alergia, mejorar el acceso a la atención para sus pacientes e incrementar los ingresos sin añadir complejidad operativa, este modelo es para usted. Estamos comprometidos con su éxito, porque solo tenemos éxito cuando usted lo tiene."
                  />
                </div>
              </div>
            </section>

            {/* ── SECCIÓN: CALL TO ACTION (CTA) ── */}
            <section ref={ctaBlock} className="fade-in py-16 bg-gradient-to-r from-[#054A5B] to-[#008154] text-white text-center">
              <div className="max-w-4xl mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Trabajemos Juntos</h2>
                <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">Si su clínica busca expandir los servicios de alergia, mejorar el acceso a la atención para sus pacientes e incrementar los ingresos sin añadir complejidad — nos encantaría asociarnos con usted.</p>
                <a href="#contacto" className="inline-block bg-white text-[#054A5B] font-bold px-8 py-4 rounded-xl shadow-lg hover:bg-gray-100 transition-colors">Agendar una Consulta con nuestro Equipo</a>
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
                        Somos el socio clínico de alergología líder en el sur de Florida
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