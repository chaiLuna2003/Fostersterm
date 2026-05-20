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
    if (direction === "left")  el.classList.add("from-left");
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
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
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
  const focusedImg   = useFadeIn("right");
  const focusedTitle = useFadeIn("left");
  const focusedList  = useFadeIn("left");

  // Benefits
  const benefitsTitle = useFadeIn();
  const benefitsLeft  = useFadeIn("left");
  const benefitsRight = useFadeIn("right");

  // FAQ
  const faqTitle = useFadeIn();
  const faqItems = useFadeIn();

  // How We Work
  const howImg     = useFadeIn("left");
  const howContent = useFadeIn("right");

  // CTA
  const ctaBlock = useFadeIn();

  // Contact
  const contactLeft  = useFadeIn("left");
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
      <Route path="/*" element={
    <div
      className="min-h-screen bg-white"
      style={{ fontFamily: "'Source Sans 3', sans-serif" }}
    >
      {/* Hero Section */}

      <header className="relative overflow-hidden bg-white pt-20 pb-10 md:pt-24 md:pb-16">
        {/* Background decor */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--brand-green)]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[var(--brand-primary)]/5 rounded-full blur-3xl"></div>

        {/* Navbar */}
        <nav
          className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b transition-all duration-300"
          style={{
            borderBottomColor: scrolled
              ? "rgba(186,198,216,0.3)"
              : "rgba(255,255,255,0.2)",
            boxShadow: scrolled ? "0 4px 24px rgba(5,74,91,0.08)" : "none",
          }}
        >
          <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <ImageWithFallback
                src="/Fostersterm/LogoFS.png"
                alt="Foster Stern Group"
                className="h-24 w-auto object-contain"
              />
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-7">
              {[
                { href: "/nosotros", label: "Nosotros" },
                { href: "/#servicios", label: "Servicios" },
                { href: "/#beneficios", label: "Beneficios" },
                { href: "/#proceso", label: "Proceso" },
                { href: "/#faq", label: "FAQ" },
                { href: "/blog", label: "Blog" },
              ].map(({ href, label }) => (
                href.startsWith("/") && !href.startsWith("/#") ? (
                  <Link
                    key={href}
                    to={href}
                    className="nav-link text-base"
                    style={{ color: "var(--brand-muted)" }}
                  >
                    {label}
                  </Link>
                ) : (
                  <a
                    key={href}
                    href={href}
                    className="nav-link text-base"
                    style={{ color: "var(--brand-muted)" }}
                  >
                    {label}
                  </a>
                )
              ))}

              <a
                href="#contacto"
                className="nav-cta px-5 py-2.5 rounded-xl text-white shadow-md"
                style={{ backgroundColor: "var(--brand-primary)" }}
              >
                Contactar
              </a>
            </div>

            <MobileMenu />
          </div>
        </nav>

        {/* HERO CONTENT */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-12">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            {/* LEFT CONTENT */}
            <div>
              {/* Badge */}
              <div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-6"
                style={{
                  backgroundColor: "var(--brand-light)",
                  borderColor: "var(--brand-secondary)",
                }}
              >
                <Sparkles
                  className="w-4 h-4"
                  style={{ color: "var(--brand-green)" }}
                />

                <span
                  className="text-sm"
                  style={{ color: "var(--brand-primary)" }}
                >
                  Soluciones Médicas Innovadoras
                </span>
              </div>

              {/* Title */}
              <h1
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight mb-6"
                style={{
                  fontFamily: "'Source Sans 3', sans-serif",
                  fontWeight: 700,
                  color: "var(--brand-primary)",
                }}
              >
                Cuidamos la salud de las familias con tecnología médica moderna.
              </h1>

              {/* Description */}
              <p
                className="text-lg md:text-xl leading-relaxed mb-8 max-w-2xl"
                style={{ color: "var(--brand-muted)" }}
              >
                Protocolos clínicos avanzados, atención especializada y
                soluciones integrales de alergia para transformar la experiencia
                de tus pacientes.
              </p>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <button
                  className="px-8 py-4 text-white rounded-2xl transition-all hover:scale-105 shadow-lg flex items-center justify-center gap-2"
                  style={{
                    backgroundColor: "var(--brand-green)",
                    fontFamily: "'Source Sans 3', sans-serif",
                    fontWeight: 700,
                  }}
                >
                  Comenzar Ahora
                  <ArrowRight className="w-5 h-5" />
                </button>

                <button
                  className="px-8 py-4 rounded-2xl border-2 transition-all hover:bg-[var(--brand-light)]"
                  style={{
                    borderColor: "var(--brand-primary)",
                    color: "var(--brand-primary)",
                    fontFamily: "'Source Sans 3', sans-serif",
                    fontWeight: 600,
                  }}
                >
                  Ver Servicios
                </button>
              </div>
            </div>

            {/* RIGHT IMAGE */}
            {/* RIGHT IMAGE */}
{/* RIGHT IMAGE */}
<div className="relative hidden lg:flex justify-center lg:justify-end">
              {/* Glow */}
              <div
                className="absolute w-[420px] h-[420px] rounded-full blur-3xl opacity-20"
                style={{ backgroundColor: "var(--brand-green)" }}
              ></div>

              {/* Circle background */}
              <div
                className="absolute w-[420px] h-[420px] rounded-full"
                style={{
                  background:
                    "linear-gradient(135deg, var(--brand-light), #ffffff)",
                }}
              ></div>

              {/* IMAGE */}
              <img
                src="/Fostersterm/fam-foster.png"
                alt="Familia feliz"
                className="relative z-10 w-full max-w-[560px] object-contain drop-shadow-2xl"
              />

              {/* Floating Card */}
              <div className="absolute top-10 left-0 md:left-8 bg-white rounded-2xl p-4 shadow-xl border border-gray-100 z-20 hidden md:block">
                <div className="flex items-center gap-3">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: "var(--brand-light)" }}
                  >
                    <HeartPulse
                      className="w-6 h-6"
                      style={{ color: "var(--brand-green)" }}
                    />
                  </div>

                  <div>
                    <p
                      className="text-sm"
                      style={{ color: "var(--brand-muted)" }}
                    >
                      Atención médica
                    </p>

                    <h4
                      className="text-lg"
                      style={{
                        color: "var(--brand-primary)",
                        fontFamily: "'Source Sans 3', sans-serif",
                      }}
                    >
                      24/7 Soporte
                    </h4>
                  </div>
                </div>
              </div>

              {/* Floating Card 2 */}
              <div className="absolute bottom-8 right-0 bg-white rounded-2xl p-4 shadow-xl border border-gray-100 z-20 hidden md:block">
                <div className="flex items-center gap-3">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: "var(--brand-light)" }}
                  >
                    <Shield
                      className="w-6 h-6"
                      style={{ color: "var(--brand-green)" }}
                    />
                  </div>

                  <div>
                    <p
                      className="text-sm"
                      style={{ color: "var(--brand-muted)" }}
                    >
                      Pacientes protegidos
                    </p>

                    <h4
                      className="text-lg"
                      style={{
                        color: "var(--brand-primary)",
                        fontFamily: "'Source Sans 3', sans-serif",
                      }}
                    >
                      100% Seguro
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CARDS ABAJO DEL HERO */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            {/* Card 1 */}
            <div ref={heroCard1} className="fade-in delay-1 group bg-white rounded-3xl p-7 border border-gray-100 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-5" style={{ background: "linear-gradient(135deg, var(--brand-green), var(--brand-primary))" }}>
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl mb-3" style={{ color: "var(--brand-primary)", fontFamily: "'Source Sans 3', sans-serif" }}>
                Resultados Rápidos
              </h3>
              <p className="leading-relaxed" style={{ color: "var(--brand-muted)" }}>
                Diagnósticos precisos y atención médica eficiente para brindar tranquilidad inmediata a cada paciente.
              </p>
            </div>

            {/* Card 2 */}
            <div ref={heroCard2} className="fade-in delay-2 group bg-white rounded-3xl p-7 border border-gray-100 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-5" style={{ background: "linear-gradient(135deg, var(--brand-green), var(--brand-primary))" }}>
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl mb-3" style={{ color: "var(--brand-primary)", fontFamily: "'Source Sans 3', sans-serif" }}>
                Atención Familiar
              </h3>
              <p className="leading-relaxed" style={{ color: "var(--brand-muted)" }}>
                Soluciones médicas diseñadas para proteger y mejorar la calidad de vida de toda la familia.
              </p>
            </div>

            {/* Card 3 */}
            <div ref={heroCard3} className="fade-in delay-3 group bg-white rounded-3xl p-7 border border-gray-100 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-5" style={{ background: "linear-gradient(135deg, var(--brand-green), var(--brand-primary))" }}>
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl mb-3" style={{ color: "var(--brand-primary)", fontFamily: "'Source Sans 3', sans-serif" }}>
                Seguridad Médica
              </h3>
              <p className="leading-relaxed" style={{ color: "var(--brand-muted)" }}>
                Protocolos clínicos avanzados y procesos certificados para ofrecer atención médica confiable.
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Focused Allergy Solutions Section */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="flex flex-col md:flex-row-reverse items-center gap-12 md:gap-16">

            {/* Imagen derecha */}
            <div ref={focusedImg} className="fade-in w-full md:w-[420px] flex-shrink-0">
              <img
                src="https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=600&q=80"
                alt="Paciente con alergia"
                className="w-full h-[440px] object-cover rounded-3xl shadow-lg"
              />
            </div>

            {/* Contenido izquierda */}
            <div className="flex-1 flex flex-col gap-6">
              <h2
                ref={focusedTitle}
                className="fade-in text-4xl md:text-5xl leading-tight"
                style={{ fontFamily: "'Source Sans 3', sans-serif", fontWeight: 700, color: "var(--brand-green)" }}
              >
                Soluciones de Alergia Enfocadas
              </h2>

              <p
                className="text-lg font-semibold"
                style={{ color: "var(--brand-primary)", fontFamily: "'Source Sans 3', sans-serif" }}
              >
                La atención de alergias está en alta demanda, pero muchas clínicas enfrentan:
              </p>

              {/* Lista sin caja */}
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
                    <span
                      className="text-base leading-relaxed"
                      style={{ color: "var(--brand-muted)", fontFamily: "'Source Sans 3', sans-serif" }}
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

<section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-8 md:px-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Imagen izquierda */}
            <div ref={howImg} className="fade-in from-left relative rounded-3xl overflow-hidden h-[480px]">
              <img
                src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&q=80"
                alt="Especialista en alergias con paciente"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div
                className="absolute bottom-0 left-0 right-0 h-24"
                style={{
                  background:
                    "linear-gradient(to top, var(--brand-primary)88, transparent)",
                }}
              />
            </div>

            {/* Contenido derecha */}
            <div ref={howContent} className="fade-in from-right flex flex-col gap-8">
              <div>
                <h2
                  className="text-3xl md:text-4xl mb-3"
                  style={{
                    fontFamily: "'Source Sans 3', sans-serif",
                    color: "var(--brand-primary)",
                  }}
                >
                  Cómo Brindamos Soluciones Duraderas
                </h2>
                <p
                  className="text-base"
                  style={{ color: "var(--brand-muted)" }}
                >
                  Encuentra el tratamiento que mejor se adapta a tu clínica y
                  tus pacientes.
                </p>
              </div>

              {/* Grid 2x2 de características */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  {
                    icon: (
                      <Users
                        className="w-6 h-6"
                        style={{ color: "var(--brand-green)" }}
                      />
                    ),
                    title: "Proveedores Locales",
                    desc: "Cada clínica es única. Como socios, desarrollamos planes de servicio personalizados para cada práctica médica.",
                    link: "Encontrar un proveedor",
                  },
                  {
                    icon: (
                      <Network
                        className="w-6 h-6"
                        style={{ color: "var(--brand-green)" }}
                      />
                    ),
                    title: "Red Nacional",
                    desc: "Foster Stern Group es una de las redes de alergias más grandes y confiables del país, con presencia en todo el territorio.",
                    link: "¿Por qué Foster Stern?",
                  },
                  {
                    icon: (
                      <ClipboardList
                        className="w-6 h-6"
                        style={{ color: "var(--brand-green)" }}
                      />
                    ),
                    title: "Soluciones Personalizadas",
                    desc: "Desarrolladas con cientos de especialistas, nuestros procesos ofrecen a los pacientes alivio rápido y de calidad.",
                    link: "Tu camino al alivio",
                  },
                  {
                    icon: (
                      <HeartPulse
                        className="w-6 h-6"
                        style={{ color: "var(--brand-green)" }}
                      />
                    ),
                    title: "Experiencias Sin Fricción",
                    desc: "Desde la agenda hasta el laboratorio en consultorio, hacemos más fácil que nunca brindar la atención que merecen.",
                    link: "Ver recursos",
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
                      className="text-base"
                      style={{
                        fontFamily: "'Source Sans 3', sans-serif",
                        color: "var(--brand-primary)",
                      }}
                    >
                      {item.title}
                    </h3>
                    <p
                      className="text-sm leading-relaxed"
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

      {/* Services Section */}
      <section
        id="servicios"
        className="py-20 bg-gradient-to-b from-white to-gray-50"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div ref={svcTitle} className="fade-in text-center mb-16">
            <h2
              className="text-4xl md:text-5xl mb-4"
              style={{
                fontFamily: "'Source Sans 3', sans-serif",
                color: "var(--brand-primary)",
              }}
            >
              Servicios Integrales
            </h2>
            <p className="text-xl" style={{ color: "var(--brand-muted)" }}>
              Todo lo que necesita para ofrecer servicios de alergia de clase
              mundial
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div
              ref={svcCard1}
              className="fade-in delay-1 group relative overflow-hidden rounded-2xl bg-white p-8 shadow-lg hover:shadow-2xl transition-all border border-gray-100"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--brand-green)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-[var(--brand-green)] to-[var(--brand-primary)] rounded-xl flex items-center justify-center mb-6">
                  <Microscope className="w-8 h-8 text-white" />
                </div>
                <h3
                  className="text-2xl mb-4"
                  style={{
                    fontFamily: "'Source Sans 3', sans-serif",
                    color: "var(--brand-primary)",
                  }}
                >
                  Pruebas de Alergia
                </h3>
                <p
                  className="mb-6 leading-relaxed"
                  style={{ color: "var(--brand-muted)" }}
                >
                  Pruebas cutáneas y de sangre de última generación para
                  identificar alérgenos específicos con precisión diagnóstica
                  superior.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[var(--brand-green)] mt-0.5 flex-shrink-0" />
                    <span style={{ color: "var(--brand-muted)" }}>
                      Pruebas cutáneas estandarizadas
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[var(--brand-green)] mt-0.5 flex-shrink-0" />
                    <span style={{ color: "var(--brand-muted)" }}>
                      Análisis de IgE específica
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[var(--brand-green)] mt-0.5 flex-shrink-0" />
                    <span style={{ color: "var(--brand-muted)" }}>
                      Resultados en 15-20 minutos
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div
              ref={svcCard2}
              className="fade-in delay-2 group relative overflow-hidden rounded-2xl bg-white p-8 shadow-lg hover:shadow-2xl transition-all border border-gray-100"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--brand-green)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-[var(--brand-green)] to-[var(--brand-primary)] rounded-xl flex items-center justify-center mb-6">
                  <Syringe className="w-8 h-8 text-white" />
                </div>
                <h3
                  className="text-2xl mb-4"
                  style={{
                    fontFamily: "'Source Sans 3', sans-serif",
                    color: "var(--brand-primary)",
                  }}
                >
                  Inmunoterapia
                </h3>
                <p
                  className="mb-6 leading-relaxed"
                  style={{ color: "var(--brand-muted)" }}
                >
                  Tratamientos personalizados de inmunoterapia subcutánea y
                  sublingual para desensibilización efectiva a largo plazo.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[var(--brand-green)] mt-0.5 flex-shrink-0" />
                    <span style={{ color: "var(--brand-muted)" }}>
                      Protocolos personalizados
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[var(--brand-green)] mt-0.5 flex-shrink-0" />
                    <span style={{ color: "var(--brand-muted)" }}>
                      Seguimiento continuo
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[var(--brand-green)] mt-0.5 flex-shrink-0" />
                    <span style={{ color: "var(--brand-muted)" }}>
                      Resultados medibles
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div
              ref={svcCard3}
              className="fade-in delay-3 group relative overflow-hidden rounded-2xl bg-white p-8 shadow-lg hover:shadow-2xl transition-all border border-gray-100"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--brand-green)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-[var(--brand-green)] to-[var(--brand-primary)] rounded-xl flex items-center justify-center mb-6">
                  <FlaskConical className="w-8 h-8 text-white" />
                </div>
                <h3
                  className="text-2xl mb-4"
                  style={{
                    fontFamily: "'Source Sans 3', sans-serif",
                    color: "var(--brand-primary)",
                  }}
                >
                  Protocolos Clínicos
                </h3>
                <p
                  className="mb-6 leading-relaxed"
                  style={{ color: "var(--brand-muted)" }}
                >
                  Guías clínicas estandarizadas basadas en evidencia para
                  garantizar la calidad y consistencia en cada consulta.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[var(--brand-green)] mt-0.5 flex-shrink-0" />
                    <span style={{ color: "var(--brand-muted)" }}>
                      Basados en evidencia científica
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[var(--brand-green)] mt-0.5 flex-shrink-0" />
                    <span style={{ color: "var(--brand-muted)" }}>
                      Actualizaciones continuas
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[var(--brand-green)] mt-0.5 flex-shrink-0" />
                    <span style={{ color: "var(--brand-muted)" }}>
                      Capacitación incluida
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section with Glassmorphism */}
      <section className="py-24 bg-[#f8f8f6] overflow-hidden">
  <div className="max-w-7xl mx-auto px-6">
    
    {/* TOP GALLERY */}
    <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-14">
      
      <div className="overflow-hidden rounded-[28px] h-[320px]">
        <img
          src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1200&auto=format&fit=crop"
          alt="Médico profesional"
          className="w-full h-full object-cover hover:scale-105 transition duration-700"
        />
      </div>

      <div className="overflow-hidden rounded-[28px] h-[220px] mt-10">
        <img
          src="https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=1200&auto=format&fit=crop"
          alt="Consulta médica"
          className="w-full h-full object-cover hover:scale-105 transition duration-700"
        />
      </div>

      <div className="overflow-hidden rounded-[28px] h-[320px]">
        <img
          src="https://images.unsplash.com/photo-1580281657527-47f249e8f4df?q=80&w=1200&auto=format&fit=crop"
          alt="Tecnología médica"
          className="w-full h-full object-cover hover:scale-105 transition duration-700"
        />
      </div>

      <div className="overflow-hidden rounded-[28px] h-[220px] mt-10">
        <img
          src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1200&auto=format&fit=crop"
          alt="Paciente"
          className="w-full h-full object-cover hover:scale-105 transition duration-700"
        />
      </div>

      <div className="overflow-hidden rounded-[28px] h-[320px]">
        <img
          src="https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=1200&auto=format&fit=crop"
          alt="Familia saludable"
          className="w-full h-full object-cover hover:scale-105 transition duration-700"
        />
      </div>
    </div>

    {/* CONTENT */}
    <div className="grid md:grid-cols-2 gap-12 items-start">
      
      {/* LEFT */}
      <div ref={benefitsLeft} className="fade-in from-left">
        <span
          className="uppercase tracking-[0.3em] text-sm"
          style={{ color: "var(--brand-green)" }}
        >
          Foster Stern Group
        </span>

        <h2
          className="text-4xl md:text-5xl mt-4 mb-6 leading-tight"
          style={{
            fontFamily: "'Source Sans 3', sans-serif",
            color: "var(--brand-primary)",
          }}
        >
          Innovación médica diseñada para transformar la experiencia clínica.
        </h2>

        <p
          className="text-lg leading-relaxed"
          style={{ color: "var(--brand-muted)" }}
        >
          Integramos tecnología avanzada, protocolos clínicos modernos y
          acompañamiento especializado para ayudar a clínicas y hospitales
          a brindar una atención más eficiente, humana y segura.
        </p>
      </div>

      {/* RIGHT */}
      <div ref={benefitsRight} className="fade-in from-right space-y-8">
        
        <div className="border-b border-gray-200 pb-6">
          <h3
            className="text-2xl mb-3"
            style={{
              fontFamily: "'Source Sans 3', sans-serif",
              color: "var(--brand-primary)",
            }}
          >
            Atención centrada en el paciente
          </h3>

          <p
            className="leading-relaxed"
            style={{ color: "var(--brand-muted)" }}
          >
            Creamos experiencias médicas más cercanas y eficientes mediante
            soluciones diseñadas para mejorar cada etapa del cuidado clínico.
          </p>
        </div>

        <div className="border-b border-gray-200 pb-6">
          <h3
            className="text-2xl mb-3"
            style={{
              fontFamily: "'Source Sans 3', sans-serif",
              color: "var(--brand-primary)",
            }}
          >
            Tecnología médica moderna
          </h3>

          <p
            className="leading-relaxed"
            style={{ color: "var(--brand-muted)" }}
          >
            Utilizamos herramientas y procesos innovadores que permiten
            diagnósticos más rápidos, mayor precisión clínica y mejores
            resultados para los pacientes.
          </p>
        </div>

        <div>
          <h3
            className="text-2xl mb-3"
            style={{
              fontFamily: "'Source Sans 3', sans-serif",
              color: "var(--brand-primary)",
            }}
          >
            Crecimiento sostenible para clínicas
          </h3>

          <p
            className="leading-relaxed"
            style={{ color: "var(--brand-muted)" }}
          >
            Ayudamos a las clínicas a expandir sus servicios médicos con
            modelos escalables, soporte continuo y estrategias enfocadas
            en crecimiento a largo plazo.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

      <CasosCarousel />

      

      <ProcessCarousel />

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div ref={faqTitle} className="fade-in text-center mb-16">
            <h2
              className="text-4xl md:text-5xl mb-4"
              style={{
                fontFamily: "'Source Sans 3', sans-serif",
                color: "var(--brand-primary)",
              }}
            >
              Preguntas Frecuentes
            </h2>
            <p className="text-xl" style={{ color: "var(--brand-muted)" }}>
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

      {/* How We Work Section */}
      

      {/* Botón flotante de WhatsApp */}
      <a
        href="https://wa.me/521XXXXXXXXXX"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-[9999] flex items-center justify-center w-14 h-14 rounded-full shadow-lg hover:scale-110 transition-transform"
        style={{ backgroundColor: "#25D366" }}
        aria-label="Contactar por WhatsApp"
      >
        <svg
          viewBox="0 0 24 24"
          className="w-7 h-7 fill-white"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>

      {/* Contact Form Section */}
      <section
        id="contacto"
        className="py-20 bg-gradient-to-b from-gray-50 to-white"
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left Column - Info */}
            <div>
              <h2
                className="text-4xl md:text-5xl mb-6"
                style={{
                  fontFamily: "'Source Sans 3', sans-serif",
                  color: "var(--brand-primary)",
                }}
              >
                ¿Listo para Comenzar?
              </h2>
              <p
                className="text-xl mb-8 leading-relaxed"
                style={{ color: "var(--brand-muted)" }}
              >
                Complete el formulario y uno de nuestros especialistas se pondrá
                en contacto con usted en menos de 24 horas.
              </p>

              {/* MAPA */}
<div className="mt-10">

  <div
    className="
      overflow-hidden
      rounded-3xl
      border
      border-gray-200
      shadow-xl
      bg-white
    "
  >

    <iframe
      title="Ubicación Foster Stern Group"
      src="https://www.google.com/maps?q=Monterrey,+Nuevo+León&output=embed"
      width="100%"
      height="340"
      loading="lazy"
      className="w-full border-0"
      referrerPolicy="no-referrer-when-downgrade"
    />

  </div>

  {/* DIRECCIÓN */}
  <div className="mt-5">

    <p
      className="text-sm uppercase tracking-[0.2em] mb-2"
      style={{ color: "var(--brand-green)" }}
    >
      Oficina Principal
    </p>

    <h3
      className="text-xl mb-2"
      style={{
        fontFamily: "'Source Sans 3', sans-serif",
        color: "var(--brand-primary)",
      }}
    >
      Foster Stern Group
    </h3>

    <p
      className="leading-relaxed"
      style={{ color: "var(--brand-muted)" }}
    >
      Av. Empresarial 2450, Piso 8 <br />
      
      7480 SW 40th Street Suite 850 Miami, FL 33155

    </p>

  </div>
</div>
            </div>

            {/* Right Column - Form */}
            <div className="bg-white/80 backdrop-blur-md rounded-2xl p-8 border border-gray-200 shadow-lg">
              <form className="space-y-6">
                <div>
                  <label
                    className="block mb-2"
                    style={{
                      fontFamily: "'Source Sans 3', sans-serif",
                      color: "var(--brand-primary)",
                    }}
                  >
                    Nombre Completo *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[var(--brand-green)] focus:ring-2 focus:ring-[var(--brand-green)]/20 outline-none transition-all"
                    placeholder="Dr. Juan Pérez"
                  />
                </div>

                <div>
                  <label
                    className="block mb-2"
                    style={{
                      fontFamily: "'Source Sans 3', sans-serif",
                      color: "var(--brand-primary)",
                    }}
                  >
                    Correo Electrónico *
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[var(--brand-green)] focus:ring-2 focus:ring-[var(--brand-green)]/20 outline-none transition-all"
                    placeholder="correo@clinica.com"
                  />
                </div>

                <div>
                  <label
                    className="block mb-2"
                    style={{
                      fontFamily: "'Source Sans 3', sans-serif",
                      color: "var(--brand-primary)",
                    }}
                  >
                    Teléfono *
                  </label>
                  <input
                    type="tel"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[var(--brand-green)] focus:ring-2 focus:ring-[var(--brand-green)]/20 outline-none transition-all"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>

                <div>
                  <label
                    className="block mb-2"
                    style={{
                      fontFamily: "'Source Sans 3', sans-serif",
                      color: "var(--brand-primary)",
                    }}
                  >
                    Nombre de la Clínica *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[var(--brand-green)] focus:ring-2 focus:ring-[var(--brand-green)]/20 outline-none transition-all"
                    placeholder="Clínica Médica XYZ"
                  />
                </div>

                <div>
                  <label
                    className="block mb-2"
                    style={{
                      fontFamily: "'Source Sans 3', sans-serif",
                      color: "var(--brand-primary)",
                    }}
                  >
                    Mensaje
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[var(--brand-green)] focus:ring-2 focus:ring-[var(--brand-green)]/20 outline-none transition-all resize-none"
                    placeholder="Cuéntenos sobre su clínica y sus necesidades..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-[var(--brand-green)] text-white rounded-lg hover:bg-[var(--brand-primary)] transition-all flex items-center justify-center gap-2 shadow-lg"
                  style={{
                    fontFamily: "'Source Sans 3', sans-serif",
                  }}
                >
                  Enviar Mensaje
                  <ArrowRight className="w-5 h-5" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-8 md:px-12">
          <div
            ref={ctaBlock}
            className="fade-in rounded-3xl overflow-hidden grid md:grid-cols-2 min-h-[480px]"
            style={{ backgroundColor: "var(--brand-primary)" }}
          >
            {/* Texto lado izquierdo */}
            <div className="flex flex-col justify-center px-10 md:px-16 py-14 gap-6">
              <span
                className="text-xs uppercase tracking-widest"
                style={{ color: "var(--brand-green)" }}
              >
                Únete a nuestra red
              </span>
              <h2
                className="text-3xl md:text-4xl leading-tight text-white"
                style={{ fontFamily: "'Source Sans 3', sans-serif" }}
              >
                Transforma tu clínica con soluciones de alergia de primer nivel
              </h2>
              <p
                className="text-base leading-relaxed"
                style={{ color: "var(--brand-secondary)" }}
              >
                Miles de clínicas ya confían en Foster Stern Group para ofrecer
                servicios de alergia de alta calidad. Da el siguiente paso y
                lleva tu práctica médica al siguiente nivel.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 mt-2">
                <a
                  href="#contacto"
                  className="px-7 py-3 rounded-xl text-center text-white transition-all hover:opacity-90"
                  style={{
                    backgroundColor: "var(--brand-green)",
                    fontFamily: "'Source Sans 3', sans-serif",
                  }}
                >
                  Hablar con un especialista
                </a>
                <a
                  href="#servicios"
                  className="px-7 py-3 rounded-xl text-center transition-all hover:bg-white/10 border border-white/30"
                  style={{
                    color: "white",
                    fontFamily: "'Source Sans 3', sans-serif",
                  }}
                >
                  Ver servicios
                </a>
              </div>
            </div>

            {/* Imagen lado derecho */}
            <div className="relative hidden md:block">
              <img
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80"
                alt="Médico especialista en alergias"
                className="absolute inset-0 w-full h-full object-cover"
                style={{ filter: "brightness(0.85)" }}
              />
              {/* Overlay degradado para integrar con el azul */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to right, var(--brand-primary) 0%, transparent 40%)",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t" style={{ borderColor: "var(--brand-secondary)" }}>
        <div className="max-w-7xl mx-auto px-6 py-14">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">

            {/* Col 1 — Logo + descripción + redes */}
            <div className="flex flex-col gap-5">
              <ImageWithFallback
                src="/Fostersterm/LogoFS.png"
                alt="Foster Stern Group"
                className="h-24 w-auto object-contain"
              />
              <p className="text-sm leading-relaxed" style={{ color: "var(--brand-muted)", fontFamily: "'Source Sans 3', sans-serif" }}>
                Tu éxito es nuestro éxito. Transforma tu clínica con servicios
                integrados de alergia: sin inversión inicial, sin riesgo y con el
                respaldo de profesionales expertos. Crecemos juntos.
              </p>
              {/* Redes sociales */}
              <div className="flex items-center gap-3 mt-1">
                {[
                  { label: "Twitter", path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" },
                  { label: "Facebook", path: "M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" },
                  { label: "YouTube", path: "M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 00-1.95 1.96A29 29 0 001 12a29 29 0 00.46 5.58a2.78 2.78 0 001.95 1.95C5.12 20 12 20 12 20s6.88 0 8.59-.47a2.78 2.78 0 001.95-1.95A29 29 0 0023 12a29 29 0 00-.46-5.58zM9.75 15.02V8.98L15.5 12z" },
                  { label: "Instagram", path: "M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z M4 6a2 2 0 100-4 2 2 0 000 4z" },
                ].map(({ label, path }) => (
                  <a
                    key={label}
                    href="#"
                    aria-label={label}
                    className="w-9 h-9 rounded-full flex items-center justify-center transition-all hover:scale-110"
                    style={{ backgroundColor: "var(--brand-green)" }}
                  >
                    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white">
                      <path d={path} />
                    </svg>
                  </a>
                ))}
              </div>
            </div>

            {/* Col 2 — Información */}
            <div>
              <h4 className="text-base font-bold mb-5" style={{ color: "var(--brand-primary)", fontFamily: "'Source Sans 3', sans-serif" }}>
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
                      style={{ color: "var(--brand-muted)", fontFamily: "'Source Sans 3', sans-serif" }}
                    >
                      <svg viewBox="0 0 24 24" className="w-3 h-3 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 3 — Contacto */}
            <div>
              <h4 className="text-base font-bold mb-5" style={{ color: "var(--brand-primary)", fontFamily: "'Source Sans 3', sans-serif" }}>
                Contáctanos
              </h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ backgroundColor: "var(--brand-light)" }}>
                    <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="currentColor" style={{ color: "var(--brand-green)" }}>
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                    </svg>
                  </div>
                  <span className="text-sm leading-relaxed" style={{ color: "var(--brand-muted)", fontFamily: "'Source Sans 3', sans-serif" }}>
                    7480 SW 40th Street<br />Suite 850<br />Miami, FL 33155
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "var(--brand-light)" }}>
                    <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="currentColor" style={{ color: "var(--brand-green)" }}>
                      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                    </svg>
                  </div>
                  <span className="text-sm" style={{ color: "var(--brand-muted)", fontFamily: "'Source Sans 3', sans-serif" }}>+1 (786) 977-3733</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "var(--brand-light)" }}>
                    <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="currentColor" style={{ color: "var(--brand-green)" }}>
                      <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                    </svg>
                  </div>
                  <span className="text-sm" style={{ color: "var(--brand-muted)", fontFamily: "'Source Sans 3', sans-serif" }}>info@fosterstern.com</span>
                </li>
              </ul>
            </div>

            {/* Col 4 — Horario */}
            <div>
              <h4 className="text-base font-bold mb-5" style={{ color: "var(--brand-primary)", fontFamily: "'Source Sans 3', sans-serif" }}>
                Horario de Atención
              </h4>
              <div className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ backgroundColor: "var(--brand-light)" }}>
                  <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="currentColor" style={{ color: "var(--brand-green)" }}>
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm.5 5v5.25l4.5 2.67-.75 1.23L11 13V7h1.5z"/>
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold" style={{ color: "var(--brand-primary)" }}>
                    9:00AM – 5:00PM, Lunes – Viernes
                  </p>
                  <p className="text-sm mt-1" style={{ color: "var(--brand-muted)" }}>
                    Atendemos en horario de oficina
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t pt-6 flex flex-col md:flex-row items-center justify-between gap-3" style={{ borderColor: "var(--brand-secondary)" }}>
            <p className="text-sm" style={{ color: "var(--brand-muted)" }}>
              &copy; 2026 Foster Stern Group. Todos los derechos reservados.
            </p>
            <div className="flex gap-4">
              <a href="#" className="footer-link text-sm" style={{ color: "var(--brand-muted)", fontFamily: "'Source Sans 3', sans-serif" }}>Privacidad</a>
              <a href="#" className="footer-link text-sm" style={{ color: "var(--brand-muted)", fontFamily: "'Source Sans 3', sans-serif" }}>Términos</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
      } />
    </Routes>
  );
}