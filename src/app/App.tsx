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
  ShieldCheck,
} from "lucide-react";
import { Routes, Route, Link } from "react-router-dom";
import { ImageWithFallback } from "./components/figma/ImageWithFallback";
import { FAQItem } from "./components/FAQItem";
import { MobileMenu } from "./components/MobileMenu";
import { Navbar } from "./components/Navbar";
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

  return (
    <Routes>
      <Route path="/blog" element={<Blog />} />
      <Route path="/nosotros" element={<Nosotros />} />
      <Route path="/english" element={<English />} />
      <Route
        path="/*"
        element={
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
                    background:
                      "linear-gradient(135deg, rgba(5, 74, 91, 0.85) 0%, rgba(5, 74, 91, 0.4) 45%, rgba(255, 255, 255, 0) 80%)",
                  }}
                />
              </div>

              {/* ── NAVBAR ── */}
              <Navbar />

              {/* Hero Content */}
              <div
                className="relative z-10 flex-1 flex items-center max-w-7xl mx-auto w-full px-4 md:px-10 pb-6 overflow-x-hidden"
                style={{ paddingTop: "130px" }}
              >
                <div className="w-full">
                  {/* Text content — centered on mobile/tablet, left on desktop */}
                  <div className="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
                    <div className="flex flex-col gap-5 md:gap-6 max-w-2xl mx-auto lg:mx-0 text-center lg:text-left">
                      <div
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full self-center lg:self-start border"
                        style={{
                          backgroundColor: "rgba(255,255,255,0.12)",
                          borderColor: "rgba(255,255,255,0.3)",
                        }}
                      >
                        <Sparkles className="w-4 h-4 text-white" />
                        <span className="text-sm text-white">
                          Soluciones Médicas Innovadoras
                        </span>
                      </div>

                      <h1
                        className="hero-title-shimmer text-4xl md:text-5xl lg:text-4xl leading-tight"
                        style={{
                          fontFamily: "'Nunito Sans', sans-serif",
                          fontWeight: 800,
                        }}
                      >
                        Transformando clínicas. Mejorando vidas. Revolucionando
                        la atención de servicios de alergias e inmunoterapia.
                      </h1>

                      <p
                        className="text-base md:text-lg lg:text-xl leading-relaxed max-w-xl mx-auto lg:mx-0"
                        style={{ color: "rgba(255,255,255,0.88)" }}
                      >
                        Ofrecemos soluciones integrales de alergología para tu
                        clínica, encargándonos de todo para que puedas brindar
                        atención integral directamente en tus instalaciones.
                      </p>

                      <div className="flex flex-col sm:flex-row gap-4 mt-2 justify-center lg:justify-start">
                        <a
                          href="#contacto"
                          className="nav-cta px-8 py-4 rounded-2xl text-white text-center font-bold shadow-lg"
                          style={{ backgroundColor: "var(--brand-green)" }}
                        >
                          Solicite una consulta
                        </a>
                        <a
                          href="#servicios"
                          className="px-8 py-4 rounded-2xl text-white text-center font-semibold border-2 hover:bg-white/10 transition-all flex items-center justify-center gap-2"
                          style={{ borderColor: "rgba(255,255,255,0.5)" }}
                        >
                          <span className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center text-white text-sm">
                            ▶
                          </span>
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
                            <Users
                              className="w-4 h-4"
                              style={{ color: "var(--brand-primary)" }}
                            />
                          </div>
                          <span
                            className="text-xs font-bold leading-tight"
                            style={{ color: "var(--brand-primary)" }}
                          >
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
                          <div
                            className="w-7 h-7 rounded-full flex items-center justify-center text-white text-[10px] font-bold -ml-1 border-2 border-white/60"
                            style={{ backgroundColor: "var(--brand-primary)" }}
                          >
                            +
                          </div>
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
                          <span
                            className="text-xs font-bold"
                            style={{ color: "var(--brand-primary)" }}
                          >
                            Testimonio reciente
                          </span>
                          <div
                            className="w-6 h-6 rounded-full flex items-center justify-center text-white text-xs shadow-sm flex-shrink-0"
                            style={{ backgroundColor: "var(--brand-green)" }}
                          >
                            ★
                          </div>
                        </div>
                        <p
                          className="text-[11px] leading-relaxed mb-2 font-medium"
                          style={{ color: "var(--brand-primary)" }}
                        >
                          "Transformamos nuestra clínica completamente. El
                          soporte de Foster Stern es excepcional."
                        </p>
                        <div className="flex items-center gap-2 pt-1 border-t border-white/20">
                          <div
                            className="w-6 h-6 rounded-full flex items-center justify-center text-white text-[10px] font-bold flex-shrink-0"
                            style={{ backgroundColor: "var(--brand-primary)" }}
                          >
                            DM
                          </div>
                          <div>
                            <p
                              className="text-[10px] font-bold"
                              style={{ color: "var(--brand-primary)" }}
                            >
                              Dr. Mendoza
                            </p>
                            <p
                              className="text-[9px] opacity-70"
                              style={{ color: "var(--brand-primary)" }}
                            >
                              Director Médico
                            </p>
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
                            <Users
                              className="w-5 h-5"
                              style={{ color: "var(--brand-primary)" }}
                            />
                          </div>
                          <span
                            className="text-sm font-bold"
                            style={{ color: "var(--brand-primary)" }}
                          >
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
                          <div
                            className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold -ml-1 border-2 border-white/60 shadow-sm"
                            style={{ backgroundColor: "var(--brand-primary)" }}
                          >
                            +
                          </div>
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
                          <span
                            className="text-sm font-bold"
                            style={{ color: "var(--brand-primary)" }}
                          >
                            Testimonio reciente
                          </span>
                          <div
                            className="w-7 h-7 rounded-full flex items-center justify-center text-white text-xs shadow-sm"
                            style={{ backgroundColor: "var(--brand-green)" }}
                          >
                            ★
                          </div>
                        </div>
                        <p
                          className="text-xs leading-relaxed mb-3 font-medium"
                          style={{ color: "var(--brand-primary)" }}
                        >
                          "Transformamos nuestra clínica completamente. El
                          soporte de Foster Stern es excepcional."
                        </p>
                        <div className="flex items-center gap-2 pt-1 border-t border-white/20">
                          <div
                            className="w-7 h-7 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-sm"
                            style={{ backgroundColor: "var(--brand-primary)" }}
                          >
                            DM
                          </div>
                          <div>
                            <p
                              className="text-xs font-bold"
                              style={{ color: "var(--brand-primary)" }}
                            >
                              Dr. Mendoza
                            </p>
                            <p
                              className="text-[10px] opacity-80"
                              style={{ color: "var(--brand-primary)" }}
                            >
                              Director Médico
                            </p>
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
                      {
                        icon: (
                          <Shield
                            className="w-6 h-6"
                            style={{ color: "var(--brand-green)" }}
                          />
                        ),
                        title: "Nueva Fuente de Ingresos",
                        desc: "Genere ingresos adicionales con servicios de alergia dentro de su práctica.",
                      },
                      {
                        icon: (
                          <Users
                            className="w-6 h-6"
                            style={{ color: "var(--brand-green)" }}
                          />
                        ),
                        title: "Personal Asignado a su Clínica",
                        desc: "Ponemos personal entrenado en alergias directamente en su consultorio.",
                      },
                      {
                        icon: (
                          <HeartPulse
                            className="w-6 h-6"
                            style={{ color: "var(--brand-green)" }}
                          />
                        ),
                        title: "Soporte Operativo Completo",
                        desc: "Facturación, documentación y protocolos clínicos incluidos.",
                      },
                    ].map((item, i) => (
                      <div
                        key={i}
                        className={`flex items-start gap-4 ${i < 2 ? "md:border-r border-gray-200 md:pr-6" : ""} ${i > 0 ? "pt-4 md:pt-0 border-t md:border-t-0 border-gray-100" : ""}`}
                      >
                        <div
                          className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                          style={{ backgroundColor: "var(--brand-light)" }}
                        >
                          {item.icon}
                        </div>
                        <div>
                          <p
                            className="font-bold text-sm mb-1"
                            style={{ color: "var(--brand-primary)" }}
                          >
                            {item.title}
                          </p>
                          <p
                            className="text-xs leading-relaxed"
                            style={{ color: "var(--brand-muted)" }}
                          >
                            {item.desc}
                          </p>
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
                  <div
                    ref={focusedImg}
                    className="fade-in w-full md:w-[320px] lg:w-[420px] flex-shrink-0 relative group overflow-hidden rounded-3xl shadow-lg"
                  >
                    <img
                      src="/Fostersterm/chartUp.webp"
                      alt="Médico revisando paciente con alergia"
                      className="w-full h-[280px] md:h-[380px] lg:h-[440px] object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500 pointer-events-none rounded-3xl" />
                  </div>

                  <div className="flex-1 flex flex-col gap-5 md:gap-6">
                    <h2
                      ref={focusedTitle}
                      className="fade-in text-4xl md:text-5xl leading-tight"
                      style={{
                        fontFamily: "'Nunito Sans', sans-serif",
                        fontWeight: 700,
                        color: "var(--brand-green)",
                      }}
                    >
                      Su Clínica Merece una Oportunidad de Crecimiento Real
                    </h2>

                    <p
                      className="text-xl font-semibold"
                      style={{
                        color: "var(--brand-primary)",
                        fontFamily: "'Nunito Sans', sans-serif",
                      }}
                    >
                      Muchas prácticas médicas pierden ingresos por no ofrecer
                      servicios de alergia in-house:
                    </p>

                    <ul ref={focusedList} className="fade-in space-y-4">
                      {[
                        "Cada derivación externa es un ingreso que su clínica podría haber capturado.",
                        "La demanda de pruebas e inmunoterapia crece año tras año.",
                        "Implementar estos servicios parece complejo: personal, equipos, protocolos.",
                        "Su práctica deja de crecer mientras el mercado avanza sin usted.",
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-4">
                          <div
                            className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                            style={{
                              backgroundColor: "var(--brand-light)",
                              border: "1.5px solid var(--brand-green)",
                            }}
                          >
                            <span
                              className="w-2 h-2 rounded-full"
                              style={{ backgroundColor: "var(--brand-green)" }}
                            />
                          </div>
                          <span
                            className="text-base leading-relaxed"
                            style={{
                              color: "var(--brand-muted)",
                              fontFamily: "'Nunito Sans', sans-serif",
                            }}
                          >
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
                  <div
                    ref={howImg}
                    className="fade-in from-left relative rounded-3xl overflow-hidden h-[320px] md:h-[300px] lg:h-[680px] group"
                  >
                    <img
                      src="/Fostersterm/image3.png"
                      alt="Grafica con estadisticas altas."
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500 pointer-events-none" />
                    <div
                      className="absolute bottom-0 left-0 right-0 h-24"
                      style={{
                        background:
                          "linear-gradient(to top, rgba(5,74,91,0.88), transparent)",
                      }}
                    />
                  </div>

                  <div
                    ref={howContent}
                    className="fade-in from-right flex flex-col gap-8"
                  >
                    <div>
                      <h2
                        className="text-4xl md:text-5xl mb-3"
                        style={{
                          fontFamily: "'Nunito Sans', sans-serif",
                          color: "var(--brand-primary)",
                        }}
                      >
                        ¿Cómo Funciona la Alianza?
                      </h2>
                      <p
                        className="text-lg font-semibold"
                        style={{ color: "var(--brand-green)" }}
                      >
                        Su éxito en alergología es nuestro compromiso.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {[
                        {
                          icon: (
                            <Users
                              className="w-6 h-6"
                              style={{ color: "var(--brand-green)" }}
                            />
                          ),
                          title: "Personal especializado en su clínica",
                          desc: "Asignamos especialistas directamente en sus instalaciones, coordinados con su agenda.",
                        },
                        {
                          icon: (
                            <ClipboardList
                              className="w-6 h-6"
                              style={{ color: "var(--brand-green)" }}
                            />
                          ),
                          title: "Facturación y documentación incluidas",
                          desc: "Gestionamos la documentación clínica y la facturación sin carga adicional para su equipo.",
                        },
                        {
                          icon: (
                            <HeartPulse
                              className="w-6 h-6"
                              style={{ color: "var(--brand-green)" }}
                            />
                          ),
                          title: "Reportes periódicos de rendimiento",
                          desc: "Informes de desempeño del programa. Monitoreamos el éxito juntos, como socios estratégicos.",
                        },
                      ].map((item) => (
                        <div key={item.title} className="flex flex-col gap-2">
                          <div
                            className="w-12 h-12 rounded-full flex items-center justify-center mb-1"
                            style={{ backgroundColor: "var(--brand-light)" }}
                          >
                            {item.icon}
                          </div>
                          <h3
                            className="text-lg font-bold"
                            style={{
                              fontFamily: "'Nunito Sans', sans-serif",
                              color: "var(--brand-primary)",
                            }}
                          >
                            {item.title}
                          </h3>
                          <p
                            className="text-base leading-relaxed"
                            style={{ color: "var(--brand-muted)" }}
                          >
                            {item.desc}
                          </p>
                          <a
                            href="#contacto"
                            className="text-sm font-semibold underline underline-offset-2 mt-1 hover:opacity-70 transition-opacity"
                            style={{ color: "var(--brand-green)" }}
                          >
                            {item.link}
                          </a>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section
              id="servicios"
              className="py-16 md:py-20 bg-gradient-to-b from-white to-gray-50"
            >
              <div className="max-w-7xl mx-auto px-6">
                <div
                  ref={svcTitle}
                  className="fade-in text-center mb-12 md:mb-16"
                >
                  <h2
                    className="text-3xl md:text-4xl lg:text-5xl mb-4"
                    style={{
                      fontFamily: "'Nunito Sans', sans-serif",
                      color: "var(--brand-primary)",
                    }}
                  >
                    Un Socio Estratégico, No Un Proveedor Más
                  </h2>
                  <p
                    className="text-xl md:text-2xl"
                    style={{ color: "var(--brand-muted)" }}
                  >
                    Transformamos la atención al paciente en una oportunidad de
                    crecimiento para su práctica
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                  {[
                    {
                      ref: svcCard1,
                      icon: <Microscope className="w-8 h-8 text-white" />,
                      title: "Implementación del Programa de Alergia",
                      desc: "Diseñamos e implementamos pruebas e inmunoterapia en su clínica, con protocolos alineados a las mejores prácticas.",
                      p1: "Pruebas e inmunoterapia in-house",
                      p2: "Protocolos estandarizados",
                      p3: "Implementación rápida y sin fricción",
                    },
                    {
                      ref: svcCard2,
                      icon: <FlaskConical className="w-8 h-8 text-white" />,
                      title: "Personal Especializado en su Clínica",
                      desc: "Asignamos personal clínico en alergias directamente en sus instalaciones, coordinado con su agenda. Usted no gestiona, usted crece.",
                      p1: "Especialistas en alergias en su consultorio",
                      p2: "Sin contratar ni capacitar staff",
                      p3: "Presencia puntual y profesional",
                    },
                    {
                      ref: svcCard3,
                      icon: <Syringe className="w-8 h-8 text-white" />,
                      title: "Facturación y Soporte Operativo Total",
                      desc: "Gestionamos la facturación y documentación de los servicios de alergia. Su equipo se enfoca en la atención; nosotros en la operación.",
                      p1: "Gestión completa de facturación",
                      p2: "Documentación y cumplimiento normativo",
                      p3: "Reportes periódicos de rendimiento",
                    },
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
                        <h3
                          className="text-2xl mb-4"
                          style={{
                            fontFamily: "'Nunito Sans', sans-serif",
                            color: "#ffffff",
                          }}
                        >
                          {card.title}
                        </h3>
                        <p className="mb-6 leading-relaxed text-lg text-white/85">
                          {card.desc}
                        </p>
                        <ul className="space-y-3">
                          {[card.p1, card.p2, card.p3].map((txt, i) => (
                            <li key={i} className="flex items-start gap-3">
                              <CheckCircle2 className="w-5 h-5 text-[var(--brand-green)] mt-0.5 flex-shrink-0" />
                              <span className="font-semibold text-white/90">
                                {txt}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
            {/* Beneficios*/}
            <section id="beneficios" className="py-20 lg:py-28 bg-white">
              <div className="max-w-7xl mx-auto px-6">
                {/* HEADER */}
                <div
                  ref={benefitsTitle}
                  className="fade-in max-w-3xl mb-14 lg:mb-20"
                >
                  <span
                    className="text-sm font-semibold tracking-[0.2em] uppercase"
                    style={{ color: "var(--brand-green)" }}
                  >
                    Beneficios para clínicas
                  </span>

                  <h2
                    className="text-4xl md:text-5xl lg:text-6xl leading-tight mt-4"
                    style={{
                      fontFamily: "'Nunito Sans', sans-serif",
                      color: "var(--brand-primary)",
                    }}
                  >
                    Un programa de alergias diseñado para hacer crecer su
                    práctica médica.
                  </h2>

                  <p
                    className="text-lg md:text-xl mt-6 max-w-2xl leading-relaxed"
                    style={{ color: "var(--brand-muted)" }}
                  >
                    Implementamos un sistema integral de servicios de alergia
                    directamente en su clínica, sin complejidad operativa ni
                    costos iniciales.
                  </p>
                </div>

                {/* GRID */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                  {[
                    {
                      number: "01",
                      title: "Sin inversión inicial",
                      desc: "No se requiere capital para implementar el programa de sensibilidad a alergias en su consultorio.",
                    },
                    {
                      number: "02",
                      title: "Sin carga adicional para su equipo",
                      desc: "Nuestro personal especializado gestiona verificaciones de seguros, pruebas de alergia e inmunoterapia.",
                    },
                    {
                      number: "03",
                      title: "Ingresos adicionales mensuales",
                      desc: "Integre nuevos servicios médicos y genere ingresos recurrentes para su práctica.",
                    },
                    {
                      number: "04",
                      title: "Mayor retención de pacientes",
                      desc: "Evite derivaciones externas y mantenga más pacientes dentro de su propia clínica.",
                    },
                    {
                      number: "05",
                      title: "Cobertura respaldada por aseguradoras",
                      desc: "Las compañías de seguros ya cubren este tipo de servicios, facilitando la implementación y rentabilidad.",
                    },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="group border-b border-neutral-200 pb-8"
                    >
                      <div className="flex items-start gap-5">
                        {/* NUMBER */}
                        <div
                          className="text-sm font-bold mt-1"
                          style={{ color: "var(--brand-green)" }}
                        >
                          {item.number}
                        </div>

                        {/* CONTENT */}
                        <div>
                          <h3
                            className="text-2xl font-bold mb-3 transition-all duration-300 group-hover:translate-x-1"
                            style={{ color: "var(--brand-primary)" }}
                          >
                            {item.title}
                          </h3>

                          <p
                            className="text-base leading-relaxed max-w-lg"
                            style={{ color: "var(--brand-muted)" }}
                          >
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
            ```
            {/* ── SECCIÓN: CASOS DE ÉXITO (CAROUSEL) ── */}
            <section id="casos">
              <CasosCarousel />
            </section>
            <section
              id="beneficios-pacientes"
              className="py-20 lg:py-28 bg-white"
            >
              <div className="max-w-7xl mx-auto px-6">
                {/* HEADER */}
                <div
                  ref={benefitsTitle}
                  className="fade-in max-w-3xl ml-auto text-right mb-14 lg:mb-20"
                >
                  <span
                    className="text-sm font-semibold tracking-widest uppercase"
                    style={{ color: "var(--brand-green)" }}
                  >
                    Beneficios para los pacientes
                  </span>

                  <h2
                    className="text-4xl md:text-5xl lg:text-6xl leading-tight mt-4"
                    style={{
                      fontFamily: "'Nunito Sans', sans-serif",
                      color: "var(--brand-primary)",
                    }}
                  >
                    Atención especializada en alergias, más accesible y
                    efectiva.
                  </h2>

                  <p
                    className="text-lg md:text-xl mt-6 max-w-2xl ml-auto leading-relaxed"
                    style={{ color: "var(--brand-muted)" }}
                  >
                    Nuestro programa permite que los pacientes reciban pruebas y
                    tratamientos de alergia directamente en la misma clínica
                    donde ya reciben atención médica.
                  </p>
                </div>

                {/* GRID */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                  {[
                    {
                      number: "01",
                      title: "Pruebas rápidas y seguras",
                      desc: "La prueba de alergias es segura, rápida y práctica para los pacientes.",
                    },
                    {
                      number: "02",
                      title: "Mejor calidad de vida",
                      desc: "La inmunoterapia fortalece la respuesta del sistema inmunológico frente a la mayoría de los alérgenos.",
                    },
                    {
                      number: "03",
                      title: "Tratamiento de la causa real",
                      desc: "Se trata la causa específica de la enfermedad alérgica en lugar de solo ocultar los síntomas.",
                    },
                    {
                      number: "04",
                      title: "Más servicios en una sola clínica",
                      desc: "Los pacientes reciben atención integral y más servicios médicos en el mismo lugar.",
                    },
                    {
                      number: "05",
                      title: "Cobertura por aseguradoras",
                      desc: "La mayoría de las compañías de seguros cubren tratamientos de inmunoterapia.",
                    },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="group border-b border-neutral-200 pb-8"
                    >
                      <div className="flex items-start gap-5">
                        {/* NUMBER */}
                        <div
                          className="text-sm font-bold mt-1"
                          style={{ color: "var(--brand-green)" }}
                        >
                          {item.number}
                        </div>

                        {/* CONTENT */}
                        <div>
                          <h3
                            className="text-2xl font-bold mb-3 transition-all duration-300 group-hover:translate-x-1"
                            style={{ color: "var(--brand-primary)" }}
                          >
                            {item.title}
                          </h3>

                          <p
                            className="text-base leading-relaxed max-w-lg"
                            style={{ color: "var(--brand-muted)" }}
                          >
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
            ``` ```
            {/* ── SECCIÓN: NUESTRO PROCESO (CAROUSEL) ── */}
            <section id="proceso">
              <ProcessCarousel />
            </section>
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
                    question="¿Cómo funciona el modelo de alianza?"
                    answer="Foster Stern ayuda a su práctica médica a integrar servicios de alergia de manera eficiente, incluyendo pruebas cutáneas de alergia por punción (skin prick test), tratamientos, documentación y apoyo administrativo. Nuestro modelo está diseñado para mejorar la atención al paciente y generar nuevas oportunidades de ingresos, sin añadir una carga operativa significativa para su clínica."
                  />

                  <FAQItem
                    question="¿Quién realiza las pruebas de alergia?"
                    answer="Las pruebas de alergia son realizadas por personal clínico debidamente entrenado, siguiendo los protocolos establecidos y bajo la supervisión correspondiente de la práctica médica. Foster Stern apoya con capacitación, estructura operativa y guías para asegurar un proceso organizado y consistente.
"
                  />

                  <FAQItem
                    question="¿Qué tipo de clínicas pueden participar?"
                    answer="Pueden participar clínicas médicas que deseen expandir sus servicios mediante la integración de pruebas y tratamientos de alergia. Esto puede incluir prácticas de medicina primaria tales como medicina interna, pediatría, medicina familiar o general y otras especialidades que atiendan pacientes con síntomas alérgicos o respiratorios como pulmonólogos."
                  />

                  <FAQItem
                    question="¿Existe algún costo inicial para la práctica médica?"
                    answer="Foster Stern ofrece un modelo flexible que puede variar según las necesidades de la práctica y el alcance de la implementación. "
                  />

                  <FAQItem
                    question="¿Cuánto tiempo toma la implementación?"
                    answer="El tiempo de implementación depende de la estructura actual de la clínica. Foster Stern trabaja para que la integración sea eficiente, organizada y adaptada al flujo operacional de cada práctica."
                  />

                  <FAQItem
                    question="¿Qué servicios de alergia se ofrecen?"
                    answer="Los servicios pueden incluir pruebas de alergia, evaluación de sensibilidades ambientales, coordinación de inmunoterapia subcutánea y apoyo en el manejo operativo del programa de alergia. Los servicios específicos pueden variar según la práctica, el proveedor médico y las necesidades de los pacientes."
                  />

                  <FAQItem
                    question="¿Cómo beneficia este programa financieramente a la clínica?"
                    answer="El programa permite a la clínica ofrecer un servicio adicional dentro de su práctica, mejorar la retención de pacientes y crear una nueva fuente de ingresos. Al integrar servicios de alergia, la práctica puede ampliar su alcance clínico mientras genera oportunidades financieras sostenibles mediante servicios médicamente necesarios y debidamente documentados."
                  />
                </div>
              </div>
            </section>
            {/* ── SECCIÓN: CALL TO ACTION (CTA) ── */}
            <section
              ref={ctaBlock}
              className="fade-in py-16 bg-gradient-to-r from-[#054A5B] to-[#008154] text-white text-center"
            >
              <div className="max-w-4xl mx-auto px-6">
                <h2 className="text-4xl md:text-5xl font-bold mb-4">
                  Lleve servicios especializados de alergia directamente a su clínica.
                </h2>
                <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
                  Implementamos laboratorios completos de alergias, proporcionamos personal especializado y ayudamos a que su práctica ofrezca más servicios médicos en un solo lugar.
                </p>
                <a
                  href="#contacto"
                  className="inline-block bg-white text-[#054A5B] font-bold px-8 py-4 rounded-xl shadow-lg hover:bg-gray-100 transition-colors"
                >
                  Agendar una Consulta con nuestro Equipo
                </a>
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
                      ¿Listo para Agregar Servicios de Alergia a su Práctica?
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
                        Socio estratégico líder en alergología para prácticas
                        médicas en el sur de Florida
                      </span>
                    </div>

                    <p
                      className="text-lg mb-8 leading-relaxed"
                      style={{ color: "var(--brand-muted)" }}
                    >
                      Asóciese con Foster Stern Allergy Division y transforme su
                      clínica en un centro de referencia en alergología.
                      Implementamos el programa completo — personal, protocolos,
                      facturación y documentación — para que usted solo se
                      enfoque en crecer.
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
