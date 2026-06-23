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
  DollarSign,
} from "lucide-react";
import { Routes, Route, Link } from "react-router-dom";
import { ImageWithFallback } from "./components/figma/ImageWithFallback";
import { FAQItem } from "./components/FAQItem";
import { MobileMenu } from "./components/MobileMenu";
import { Navbar } from "./components/Navbar";
import { CasosCarousel } from "./components/CasosCarousel";
import { ProcessCarousel } from "./components/ProcessCarousel";
import { AlianzaImplementacion } from "./components/AlianzaImplementacion";
import { ServiciosSection } from "./components/Serviciossection";
import { ContactForm } from "./components/Contactform";
import Blog from "./pages/blog";
import Nosotros from "./pages/Nosotros";
import English from "./pages/English";
import AboutUs from "./pages/Aboutus";
import BlogEn from "./pages/Blogen";
import { useEffect, useState, useRef } from "react";

// Hook para fade-in al hacer scroll - MEJORADO para manejar navegación
function useFadeIn(direction: "up" | "left" | "right" = "up") {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Reset inicial - asegurar que el elemento esté visible de inmediato en algunos casos
    if (direction === "left") el.classList.add("from-left");
    if (direction === "right") el.classList.add("from-right");

    // Crear observer para animación al scroll
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("visible");
          observer.unobserve(el);
        }
      },
      { threshold: 0.12 },
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
    };
  }, [direction]);
  return ref;
}

export default function App() {
  // Hero cards
  const heroCard1 = useFadeIn();
  const heroCard2 = useFadeIn();
  const heroCard3 = useFadeIn();

  // Focused Allergy
  const focusedImg = useFadeIn("right");
  const focusedTitle = useFadeIn("left");
  const focusedList = useFadeIn("left");

  // Benefits — clínicas
  const benefitsTitle = useFadeIn();
  const benefitsLeft = useFadeIn("left");
  const benefitsTitleLeft = useFadeIn("left");
  const benefitsRight = useFadeIn("right");

  // Benefits — pacientes (needs its own ref — same ref causes observer.disconnect() to fire once)
  const benefitsPatientsTitle = useFadeIn();
  const benefitsPatientsGrid = useFadeIn();

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
      <Route path="/english/about" element={<AboutUs />} />
      <Route path="/english/blog" element={<BlogEn />} />
      <Route
        path="/*"
        element={
          <div
            className="min-h-screen bg-white overflow-x-hidden w-full"
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
                  className="
    absolute inset-0
    bg-[linear-gradient(to_bottom,rgba(5,74,91,0.97)_0%,rgba(5,74,91,0.82)_35%,rgba(5,74,91,0.35)_55%,transparent_100%)]
    
    lg:bg-[linear-gradient(315deg,rgba(5,74,91,0.85)_0%,rgba(5,74,91,0.4)_45%,transparent_80%)]
  "
                />
              </div>

              {/* ── NAVBAR ── */}
              <Navbar />

              {/* Hero Content */}
              <div
                className="relative z-10 flex-1 flex items-center max-w-7xl mx-auto w-full px-4 md:px-10 pb-6 overflow-x-hidden"
                style={{ paddingTop: "clamp(100px, 15vw, 140px)" }}
              >
                <div className="w-full">
                  {/* Text content — centered on mobile/tablet, RIGHT on desktop */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-12 lg:items-center">
                    <div className="lg:col-start-2 flex flex-col gap-5 md:gap-6 max-w-2xl text-center lg:text-right">
                      <h1
                        className="hero-title-shimmer text-3xl md:text-4xl lg:text-4xl leading-tight"
                        style={{
                          fontFamily: "'Nunito Sans', sans-serif",
                          fontWeight: 800,
                          WebkitTextStroke: "0.35px rgba(0,0,0,0.18)",
                        }}
                      >
                        Transforme su clínica con nuestros servicios de alergia,
                        sin inversión inicial y con el respaldo de nuestro
                        equipo experto.
                      </h1>

                      <div className="flex flex-col sm:flex-row gap-4 mt-2 justify-center lg:justify-end">
                        <a
                          href="#contacto"
                          className="
    nav-cta
    px-8 py-4
    rounded-2xl
    text-white
    text-center
    font-bold
    text-xl
    md:text-xl
    lg:text-xl
    shadow-lg
  "
                          style={{ backgroundColor: "var(--brand-green)" }}
                        >
                          Agendar una reunión
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </header>
            {/* ── SECCIÓN: FOCUSED ALLERGY SOLUTIONS ── */}
            <section className="py-16 md:py-20 bg-white overflow-hidden">
              <div className="max-w-7xl mx-auto px-6 md:px-10">
                <div className="flex flex-col lg:flex-row-reverse items-start lg:items-center gap-10 lg:gap-12">
                  <div
                    ref={focusedImg}
                    className="fade-in w-full lg:w-[420px] flex-shrink-0 relative group overflow-hidden rounded-3xl shadow-lg"
                  >
                    <img
                      src="/Fostersterm/chartUp.webp"
                      alt="Médico revisando paciente con alergia"
                      className="
    w-full
    h-[280px]
    md:h-[420px]
    lg:h-[620px]
    xl:h-[500px]
    object-cover
    object-[60%_center]
    transition-transform
    duration-700
    group-hover:scale-[1.02]
  "
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
                      Su Clínica Merece una Oportunidad de Crecimiento
                    </h2>

                    <p
                      className="text-lg md:text-xl lg:text-2xl font-semibold"
                      style={{
                        color: "var(--brand-primary)",
                        fontFamily: "'Nunito Sans', sans-serif",
                      }}
                    >
                      Muchas prácticas médicas pierden ingresos por no ofrecer
                      servicios de alergia in-house:
                    </p>

                    <ul ref={focusedList} className="fade-in space-y-6">
                      {[
                        "Cada derivación externa es un ingreso que su clínica podría haber capturado.",
                        "La demanda de pruebas e inmunoterapia crece año tras año.",
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
                            className="text-xl font-bold leading-relaxed"
                            style={{
                              color: "054A5B ",
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
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
                  <div
                    ref={howImg}
                    className="fade-in from-left relative rounded-3xl overflow-hidden h-[280px] sm:h-[360px] md:h-[460px] lg:h-[800px] group"
                  >
                    <img
                      src="/Fostersterm/image3.png"
                      alt="Prueba de alergias"
                      className="
    absolute
    inset-0
    w-full
    h-full
    object-cover
    object-[60%_center]
    transition-transform
    duration-700
    will-change-transform
    group-hover:scale-[1.02]
  "
                    />

                    {/* Overlay hover suave */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500 pointer-events-none" />

                    {/* Card glass */}
                    <div className="absolute bottom-5 left-5 right-5">
                      <div
                        className="
        rounded-2xl
        px-5
        py-4
        md:px-6
        md:py-5
        backdrop-blur-xl
        border
        border-white/20
        bg-white/10
        shadow-2xl
      "
                      >
                        <h3
                          className="
          text-white
          font-semibold
          text-lg
          md:text-2xl
          leading-tight
          max-w-xl
        "
                        >
                          PRUEBA DE ALERGIA
                        </h3>
                      </div>
                    </div>
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
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
                      {[
                        {
                          icon: (
                            <Users
                              className="w-6 h-6"
                              style={{ color: "var(--brand-green)" }}
                            />
                          ),
                          title: "Personal entrenado y asignado a su clínica",
                          desc: "Asignamos personal capacitado en brindar los servicios que ofrecemos, integrado a su clínica.",
                        },
                        {
                          icon: (
                            <ClipboardList
                              className="w-6 h-6"
                              style={{ color: "var(--brand-green)" }}
                            />
                          ),
                          title: "Facturación y documentación incluidas",
                          desc: "Nos encargamos de la documentación clínica y la facturación, reduciendo la carga operativa de su equipo.",
                        },
                        {
                          icon: (
                            <HeartPulse
                              className="w-6 h-6"
                              style={{ color: "var(--brand-green)" }}
                            />
                          ),
                          title: "Reportes periódicos de rendimiento",
                          desc: "Entregamos reportes mensuales sobre los resultados del crecimiento de su práctica con prueba de alergia.",
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
                            className="text-xl font-bold"
                            style={{
                              fontFamily: "'Nunito Sans', sans-serif",
                              color: "var(--brand-primary)",
                            }}
                          >
                            {item.title}
                          </h3>
                          <p
                            className="text-lg font-bold leading-relaxed"
                            style={{ color: "054A5B" }}
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

            <ServiciosSection />
            {/* Beneficios*/}
            <section id="beneficios" className="py-20 lg:py-28 bg-white">
              <div className="max-w-7xl mx-auto px-6">
                {/* TOP CONTENT */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center mb-16 lg:mb-24">
                  {/* LEFT TEXT */}
                  <div ref={benefitsTitleLeft} className="fade-in max-w-3xl">
                    {/* LABEL + ICON */}
                    <div className="flex items-center gap-4 mb-6">
                      <div
                        className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0"
                        style={{
                          background: "rgba(16, 185, 129, 0.12)",
                          color: "var(--brand-green)",
                        }}
                      >
                        <DollarSign className="w-7 h-7" strokeWidth={2.5} />
                      </div>

                      <span
                        className="text-base md:text-lg lg:text-xl font-bold tracking-[0.2em] uppercase"
                        style={{ color: "var(--brand-green)" }}
                      >
                        Beneficios para clínicas
                      </span>
                    </div>

                    <h2
                      className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mt-4"
                      style={{
                        fontFamily: "'Nunito Sans', sans-serif",
                        color: "#0f4c5c", // Un azul oscuro/verdoso similar al de la imagen
                      }}
                    >
                      Transformando <br />
                      clínicas. <br />
                      Mejorando vidas. <br />
                      <span style={{ color: "#0f8152" }}>
                        Revolucionando la <br />
                        atención.
                      </span>
                    </h2>

                    <p
                      className="text-lg font-bold md:text-xl mt-6 max-w-2xl leading-relaxed"
                      style={{ color: "#000000" }}
                    >
                      Implementamos un sistema integral de servicios de alergia
                      directamente en su clínica, sin complejidad operativa ni
                      costos iniciales.
                    </p>
                  </div>

                  {/* RIGHT IMAGE */}
                  <div className="relative w-full h-[320px] md:h-[450px] lg:h-[580px] overflow-hidden rounded-3xl shadow-xl">
                    <img
                      src="/Fostersterm/BenefitsClient.png"
                      alt="Doctor atendiendo paciente"
                      className="w-full h-full object-cover"
                    />
                  </div>
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
                            className="text-2xl md:text-3xl font-bold mb-3 transition-all duration-300 group-hover:translate-x-1"
                            style={{ color: "var(--brand-primary)" }}
                          >
                            {item.title}
                          </h3>

                          <p
                            className="text-lg font-bold md:text-lg leading-relaxed max-w-lg"
                            style={{ color: "#000000" }}
                          >
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* BOTTOM CTA CARD */}
                <div className="mt-20">
                  <div className="relative overflow-hidden rounded-[2rem] bg-[#0B5D6E] grid grid-cols-1 lg:grid-cols-2 items-center">
                    {/* LEFT CONTENT */}
                    <div className="p-10 md:p-14 lg:p-16">
                      <h3
                        className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight"
                        style={{
                          fontFamily: "'Nunito Sans', sans-serif",
                          color: "#fff",
                        }}
                      >
                        Más servicios.
                        <br />
                        Mejores resultados.
                      </h3>

                      <p
                        className="mt-6 text-base font-bold md:text-lg leading-relaxed max-w-md"
                        style={{
                          color: "rgba(255,255,255,0.82)",
                        }}
                      >
                        Un modelo probado que impulsa el crecimiento de su
                        clínica mientras mejora la atención de sus pacientes.
                      </p>
                    </div>

                    {/* RIGHT IMAGE */}
                    <div className="relative h-[260px] md:h-[340px] lg:h-full min-h-[320px]">
                      <img
                        src="/Fostersterm/image.png"
                        alt="Hospital moderno"
                        className="absolute inset-0 w-full h-full object-cover"
                      />

                      {/* OPTIONAL OVERLAY */}
                      <div className="absolute inset-0 bg-gradient-to-l from-transparent to-black/10"></div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* ── SECCIÓN: CASOS DE ÉXITO (CAROUSEL) ── */}

            <section
              id="beneficios-pacientes"
              className="py-20 lg:py-28 bg-white"
            >
              <div className="max-w-7xl mx-auto px-6">
                {/* TOP CONTENT */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center mb-16 lg:mb-24">
                  {/* LEFT TEXT */}
                  {/* LEFT IMAGE */}
                  <div className="relative w-full h-[320px] md:h-[450px] lg:h-[580px] overflow-hidden rounded-3xl shadow-xl order-1 lg:order-1">
                    <img
                      src="/Fostersterm/5.1.png"
                      alt="Doctor atendiendo paciente"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* RIGHT TEXT */}
                  <div
                    ref={benefitsTitle}
                    className="fade-in max-w-3xl order-2 lg:order-2"
                  >
                    {/* LABEL + ICON */}
                    <div className="flex items-center gap-4 mb-6">
                      <span
                        className="text-base md:text-lg lg:text-xl font-bold tracking-[0.2em] uppercase"
                        style={{ color: "var(--brand-green)" }}
                      >
                        Beneficios para los pacientes
                      </span>
                    </div>

                    <h2
                      className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mt-4"
                      style={{
                        fontFamily: "'Nunito Sans', sans-serif",
                        color: "#0f4c5c",
                      }}
                    >
                      Atención especializada en alergias mas accesible y
                      efectiva.
                    </h2>

                    <p
                      className="text-lg font-bold md:text-xl mt-6 max-w-2xl leading-relaxed"
                      style={{ color: "#000000" }}
                    >
                      Nuestro programa permite que los pacientes reciban pruebas
                      y tratamientos de alergia directamente en la misma clínica
                      donde ya reciben su atención médica habitual.
                    </p>
                  </div>
                </div>

                {/* GRID */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                  {[
                    {
                      number: "01",
                      title: "Pruebas rápidas y seguras",
                      desc: "La prueba de alergias es segura, rápida y práctica para los pacientes.",
                      featured: true, // Marcamos este elemento para romper la simetría de forma intencional
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
                    {
                      number: "06",
                      title: "Pruebas de alergia",
                      desc: "Identificamos de forma rápida y precisa los factores específicos que desencadenan las reacciones para actuar con certeza.",
                    },
                    {
                      number: "07",
                      title: "Tratamiento de inmunoterapia",
                      desc: "Fortalecemos el sistema inmunológico de manera progresiva, logrando que el cuerpo tolere los alérgenos a largo plazo.",
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
                            className="text-2xl md:text-3xl font-bold mb-3 transition-all duration-300 group-hover:translate-x-1"
                            style={{ color: "var(--brand-primary)" }}
                          >
                            {item.title}
                          </h3>

                          <p
                            className="text-lg font-bold md:text-lg leading-relaxed max-w-lg"
                            style={{ color: "#000000" }}
                          >
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* BOTTOM CTA CARD */}
              </div>
            </section>

            {/* ── SECCIÓN: CÓMO IMPLEMENTAMOS LA ALIANZA ── */}
            <section id="alianza-implementacion">
              <AlianzaImplementacion />
            </section>

            {/* ── SECCIÓN: NUESTRO PROCESO (CAROUSEL) ── */}
            <section id="proceso">
              <ProcessCarousel />
            </section>
            {/* ── SECCIÓN: FAQ ── */}
            <section
              id="faq"
              className="py-20 lg:py-28 overflow-hidden relative"
              style={{
                background:
                  "linear-gradient(160deg, #f0f7f9 0%, #ffffff 50%, #eaf5f0 100%)",
              }}
            >
              {/* Blobs decorativos */}
              <div
                aria-hidden
                className="pointer-events-none absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full opacity-25 blur-3xl"
                style={{
                  background:
                    "radial-gradient(circle, #054A5B 0%, transparent 70%)",
                }}
              />
              <div
                aria-hidden
                className="pointer-events-none absolute -bottom-28 -left-28 w-80 h-80 rounded-full opacity-15 blur-3xl"
                style={{
                  background:
                    "radial-gradient(circle, var(--brand-green) 0%, transparent 70%)",
                }}
              />

              <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row gap-14 lg:gap-20 items-start">
                  {/* ── Columna imagen sticky ── */}
                  <div className="lg:w-5/12 flex-shrink-0 lg:sticky lg:top-10">
                    {/* Header encima de la imagen */}
                    <div ref={faqTitle} className="fade-in mb-8">
                      <span
                        className="inline-block text-base md:text-lg lg:text-xl font-bold tracking-[0.25em] uppercase px-4 py-1.5 rounded-full mb-4"
                        style={{
                          color: "var(--brand-green)",
                          backgroundColor: "rgba(0,129,84,0.09)",
                          border: "1px solid rgba(0,129,84,0.18)",
                        }}
                      >
                        Preguntas Frecuentes
                      </span>

                      <h2
                        className="text-3xl md:text-4xl lg:text-5xl leading-tight mb-3"
                        style={{
                          fontFamily: "'Nunito Sans', sans-serif",
                          color: "var(--brand-primary)",
                        }}
                      >
                        Resolvemos sus{" "}
                        <span style={{ color: "var(--brand-green)" }}>
                          dudas
                        </span>
                      </h2>

                      <p
                        className="text-2xl leading-relaxed"
                        style={{ color: "var(--brand-muted)" }}
                      >
                        Todo lo que necesita saber sobre nuestro modelo de
                        alianza y servicios de alergia.
                      </p>
                    </div>

                    {/* Imagen */}
                    <div
                      ref={faqItems}
                      className="fade-in from-left relative rounded-3xl overflow-hidden shadow-xl"
                      style={{ height: "380px" }}
                    >
                      <ImageWithFallback
                        src="/Fostersterm/1.3.png"
                        alt="Foster Stern Allergy — equipo médico"
                        className="absolute inset-0 w-full h-full object-cover"
                      />

                      {/* Overlay */}
                      <div
                        className="absolute inset-0"
                        style={{
                          background:
                            "linear-gradient(to top, rgba(5,74,91,0.82) 0%, rgba(5,74,91,0.08) 60%, transparent 100%)",
                        }}
                      />
                    </div>
                  </div>

                  {/* ── Columna acordeón ── */}
                  <div className="flex-1 min-w-0 flex flex-col gap-3">
                    {[
                      {
                        question: "¿Cómo funciona el modelo de alianza?",
                        answer:
                          "Foster Stern ayuda a su práctica médica a integrar servicios de alergia de manera eficiente, incluyendo pruebas cutáneas de alergia por punción (skin prick test), tratamientos, documentación y apoyo administrativo. Nuestro modelo está diseñado para mejorar la atención al paciente y generar nuevas oportunidades de ingresos, sin añadir una carga operativa significativa para su clínica.",
                      },
                      {
                        question: "¿Quién realiza las pruebas de alergia?",
                        answer:
                          "Las pruebas de alergia son realizadas por personal clínico debidamente entrenado, siguiendo los protocolos establecidos y bajo la supervisión correspondiente de la práctica médica. Foster Stern apoya con capacitación, estructura operativa y guías para asegurar un proceso organizado y consistente.",
                      },
                      {
                        question: "¿Qué tipo de clínicas pueden participar?",
                        answer:
                          "Pueden participar clínicas médicas que deseen expandir sus servicios mediante la integración de pruebas y tratamientos de alergia. Esto puede incluir prácticas de medicina primaria tales como medicina interna, pediatría, medicina familiar o general y otras especialidades que atiendan pacientes con síntomas alérgicos o respiratorios como pulmonólogos.",
                      },
                      {
                        question:
                          "¿Existe algún costo inicial para la práctica médica?",
                        answer:
                          "Foster Stern ofrece un modelo flexible que puede variar según las necesidades de la práctica y el alcance de la implementación.",
                      },
                      {
                        question: "¿Cuánto tiempo toma la implementación?",
                        answer:
                          "El tiempo de implementación depende de la estructura actual de la clínica. Foster Stern trabaja para que la integración sea eficiente, organizada y adaptada al flujo operacional de cada práctica.",
                      },
                      {
                        question: "¿Qué servicios de alergia se ofrecen?",
                        answer:
                          "Los servicios pueden incluir pruebas de alergia, evaluación de sensibilidades ambientales, coordinación de inmunoterapia subcutánea y apoyo en el manejo operativo del programa de alergia. Los servicios específicos pueden variar según la práctica, el proveedor médico y las necesidades de los pacientes.",
                      },
                      {
                        question:
                          "¿Cómo beneficia este programa financieramente a la clínica?",
                        answer:
                          "El programa permite a la clínica ofrecer un servicio adicional dentro de su práctica, mejorar la retención de pacientes y crear una nueva fuente de ingresos. Al integrar servicios de alergia, la práctica puede ampliar su alcance clínico mientras genera oportunidades financieras sostenibles mediante servicios médicamente necesarios y debidamente documentados.",
                      },
                    ].map((item, i) => (
                      <FAQItem
                        key={i}
                        index={i}
                        question={item.question}
                        answer={item.answer}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </section>
            {/* ── SECCIÓN: CALL TO ACTION (CTA) ── */}
            <section
              ref={ctaBlock}
              className="fade-in relative py-24 overflow-hidden"
              style={{
                backgroundImage: "url('/Fostersterm/maxresdefault.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/50" />

              <div className="relative max-w-7xl mx-auto px-6 flex justify-end">
                <div className="max-w-2xl text-white text-right">
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                    Lleve servicios especializados de alergia directamente a su
                    clínica.
                  </h2>

                  <p className="text-lg md:text-2xl opacity-90 mb-8 leading-relaxed">
                    Implementamos programas de servicios de alergia,
                    proporcionamos personal especializado y ayudamos a que su
                    práctica ofrezca más servicios médicos en un solo lugar.
                  </p>

                  <a
                    href="#contacto"
                    className="
    inline-block
    bg-white
    text-[#054A5B]
    font-bold

    text-lg
    md:text-lg
    lg:text-2xl

    px-8
    py-4
    rounded-xl
    shadow-xl
    hover:bg-gray-100
    transition-all
    duration-300
    hover:scale-105
  "
                  >
                    Agendar una Reunión
                  </a>
                </div>
              </div>
            </section>
            {/* ── SECCIÓN: CONTACTO ── */}
            <section
              id="contacto"
              className="py-20 bg-gradient-to-b from-gray-50 to-white"
            >
              <div className="max-w-6xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
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
                        Socio estratégico líder.
                      </span>
                    </div>

                    <p
                      className="text-2xl mb-8 leading-relaxed"
                      style={{ color: "var(--brand-muted)" }}
                    >
                      Asóciese con Foster Stern Allergy Division y transforme su
                      clínica en un centro de referencia en servicios de
                      alergia. Implementamos el programa completo — personal,
                      protocolos, facturación y documentación — para que usted
                      solo se enfoque en crecer.
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
                        height="350"
                        loading="lazy"
                        className="w-full border-0"
                        referrerPolicy="no-referrer-when-downgrade"
                      />
                    </div>

                    {/* DIRECCIÓN */}
                  </div>

                  {/* Right Column - Form */}
                  <ContactForm />
                </div>
              </div>
            </section>

            <footer
              className="bg-white border-t"
              style={{ borderColor: "var(--brand-secondary)" }}
            >
              <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-10 py-16 lg:py-20">
                {/* GRID */}
                <div
                  className="
        grid
        grid-cols-1
        sm:grid-cols-2
        xl:grid-cols-4
        gap-10
        md:gap-12
        lg:gap-14
        mb-14
      "
                >
                  {/* COL 1 */}
                  <div className="flex flex-col gap-6">
                    <ImageWithFallback
                      src="/Fostersterm/LogoFS.png"
                      alt="Foster Stern Group"
                      className="
            h-24
            sm:h-28
            md:h-32
            lg:h-36
            w-auto
            object-contain
          "
                    />

                    <p
                      className="
            text-base
            md:text-lg
            lg:text-lg
            leading-relaxed
          "
                      style={{
                        color: "var(--brand-muted)",
                        fontFamily: "'Nunito Sans', sans-serif",
                      }}
                    >
                      Su éxito es nuestro éxito. Transforme su clínica con
                      nuestros servicios integrados de alergia, sin inversión
                      inicial y con el respaldo de nuestro equipo experto,
                      generando ingresos adicionales dentro de su práctica
                      mientras crecemos juntos.
                    </p>

                    {/* SOCIALS */}
                    <div className="flex items-center gap-4 mt-2">
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
                          className="
                w-8 h-8
                md:w-10 md:h-10
                lg:w-10 lg:h-10
                rounded-full
                flex
                items-center
                justify-center
                transition-all
                hover:scale-110
              "
                          style={{ backgroundColor: "var(--brand-green)" }}
                        >
                          <svg
                            viewBox="0 0 24 24"
                            className="
                  w-5 h-5
                  md:w-6 md:h-6
                  lg:w-7 lg:h-7
                  fill-white
                "
                          >
                            <path d={path} />
                          </svg>
                        </a>
                      ))}
                    </div>
                  </div>

                  {/* COL 2 */}
                  <div>
                    <h4
                      className="
            text-xl
            md:text-xl
            lg:text-xl
            font-bold
            mb-6
          "
                      style={{
                        color: "var(--brand-primary)",
                        fontFamily: "'Nunito Sans', sans-serif",
                      }}
                    >
                      Información
                    </h4>

                    <ul className="space-y-4">
                      {[
                        { label: "Sobre Nosotros", href: "/nosotros" },
                        { label: "Servicios", href: "#servicios" },
                        { label: "FAQ", href: "#faq" },
                        { label: "Contacto", href: "#contacto" },
                      ].map(({ label, href }) => (
                        <li key={label}>
                          <a
                            href={href}
                            className="
                  footer-link
                  text-base
                  md:text-lg
                  lg:text-lg
                  flex
                  items-center
                  gap-3
                "
                            style={{
                              color: "var(--brand-muted)",
                              fontFamily: "'Nunito Sans', sans-serif",
                            }}
                          >
                            <svg
                              viewBox="0 0 24 24"
                              className="
                    w-4 h-4
                    md:w-5 md:h-5
                    flex-shrink-0
                  "
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

                  {/* COL 3 */}
                  <div>
                    <h4
                      className="
            text-xl
            md:text-xl
            lg:text-xl
            font-bold
            mb-6
          "
                      style={{
                        color: "var(--brand-primary)",
                        fontFamily: "'Nunito Sans', sans-serif",
                      }}
                    >
                      Contáctanos
                    </h4>

                    <ul className="space-y-5">
                      {/* ADDRESS */}
                      <li className="flex items-start gap-4">
                        <div
                          className="
                w-10 h-10
                md:w-10 md:h-10
                lg:w-10 lg:h-10
                rounded-full
                flex
                items-center
                justify-center
                flex-shrink-0
                mt-1
              "
                          style={{ backgroundColor: "var(--brand-light)" }}
                        >
                          <svg
                            viewBox="0 0 24 24"
                            className="
                  w-5 h-5
                  md:w-6 md:h-6
                "
                            fill="currentColor"
                            style={{ color: "var(--brand-green)" }}
                          >
                            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                          </svg>
                        </div>

                        <span
                          className="
                text-base
                md:text-lg
                lg:text-xl
                leading-relaxed
              "
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

                      {/* PHONE */}
                      <li className="flex items-center gap-4">
                        <div
                          className="
                w-10 h-10
                md:w-10 md:h-10
                lg:w-10 lg:h-10
                rounded-full
                flex
                items-center
                justify-center
                flex-shrink-0
              "
                          style={{ backgroundColor: "var(--brand-light)" }}
                        >
                          <svg
                            viewBox="0 0 24 24"
                            className="
                  w-5 h-5
                  md:w-6 md:h-6
                "
                            fill="currentColor"
                            style={{ color: "var(--brand-green)" }}
                          >
                            <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                          </svg>
                        </div>

                        <span
                          className="
                text-base
                md:text-lg
                lg:text-xl
              "
                          style={{
                            color: "var(--brand-muted)",
                            fontFamily: "'Nunito Sans', sans-serif",
                          }}
                        >
                          +1 (786) 977-3733
                        </span>
                      </li>

                      {/* EMAIL */}
                      <li className="flex items-center gap-4">
                        <div
                          className="
                w-10 h-10
                md:w-10 md:h-10
                lg:w-10 lg:h-10
                rounded-full
                flex
                items-center
                justify-center
                flex-shrink-0
              "
                          style={{ backgroundColor: "var(--brand-light)" }}
                        >
                          <svg
                            viewBox="0 0 24 24"
                            className="
                  w-5 h-5
                  md:w-6 md:h-6
                "
                            fill="currentColor"
                            style={{ color: "var(--brand-green)" }}
                          >
                            <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                          </svg>
                        </div>

                        <span
                          className="
                text-base
                md:text-lg
                lg:text-xl
              "
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

                  {/* COL 4 */}
                  <div>
                    <h4
                      className="
            text-xl
            md:text-xl
            lg:text-xl
            font-bold
            mb-6
          "
                      style={{
                        color: "var(--brand-primary)",
                        fontFamily: "'Nunito Sans', sans-serif",
                      }}
                    >
                      Horario de Atención
                    </h4>

                    <div className="flex items-start gap-4">
                      <div
                        className="
              w-10 h-10
              md:w-11 md:h-11
              lg:w-12 lg:h-12
              rounded-full
              flex
              items-center
              justify-center
              flex-shrink-0
              mt-1
            "
                        style={{ backgroundColor: "var(--brand-light)" }}
                      >
                        <svg
                          viewBox="0 0 24 24"
                          className="
                w-5 h-5
                md:w-6 md:h-6
              "
                          fill="currentColor"
                          style={{ color: "var(--brand-green)" }}
                        >
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm.5 5v5.25l4.5 2.67-.75 1.23L11 13V7h1.5z" />
                        </svg>
                      </div>

                      <div>
                        <p
                          className="
                text-base
                md:text-lg
                lg:text-xl
                font-semibold
              "
                          style={{ color: "var(--brand-primary)" }}
                        >
                          9:00AM – 5:00PM, Lunes – Viernes
                        </p>

                        <p
                          className="
                text-base
                md:text-lg
                lg:text-xl
                mt-2
              "
                          style={{ color: "var(--brand-muted)" }}
                        >
                          Atendemos en horario de oficina
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* BOTTOM BAR */}
                <div
                  className="
        border-t
        pt-8
        mt-6
        flex
        flex-col
        md:flex-row
        items-center
        justify-between
        gap-5
      "
                  style={{ borderColor: "var(--brand-secondary)" }}
                >
                  <p
                    className="
          text-base
          md:text-lg
        "
                    style={{ color: "var(--brand-muted)" }}
                  >
                    &copy; 2026 Foster Stern Group. Todos los derechos
                    reservados.
                  </p>

                  <div className="flex gap-6">
                    <a
                      href="#"
                      className="
            footer-link
            text-base
            md:text-lg
            lg:text-xl
          "
                      style={{
                        color: "var(--brand-muted)",
                        fontFamily: "'Nunito Sans', sans-serif",
                      }}
                    >
                      Privacidad
                    </a>

                    <a
                      href="#"
                      className="
            footer-link
            text-base
            md:text-lg
            lg:text-xl
          "
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

              {/* WHATSAPP BUTTON */}
              <a
                href="https://wa.me/17869773733"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="
      whatsapp-pulse
      fixed
      bottom-6
      right-6
      md:bottom-8
      md:right-8
      z-50
      w-16
      h-16
      md:w-20
      md:h-20
      lg:w-20
      lg:h-20
      rounded-full
      flex
      items-center
      justify-center
      shadow-2xl
      hover:scale-110
      transition-all
      duration-300
    "
                style={{ backgroundColor: "#008154" }}
              >
                <svg
                  viewBox="0 0 32 32"
                  className="
        w-8 h-8
        md:w-10 md:h-10
        lg:w-12 lg:h-12
        fill-white
      "
                >
                  <path d="M16.04 3C8.84 3 3 8.74 3 15.82c0 2.53.74 4.98 2.13 7.08L3 29l6.3-2.05a13.2 13.2 0 006.74 1.84H16c7.2 0 13.04-5.74 13.04-12.82C29.04 8.74 23.2 3 16.04 3zm0 23.5c-2.03 0-4.01-.54-5.74-1.56l-.41-.24-3.74 1.22 1.22-3.64-.27-.43a10.3 10.3 0 01-1.58-5.48c0-5.7 4.72-10.34 10.52-10.34 5.8 0 10.52 4.64 10.52 10.34 0 5.7-4.72 10.34-10.52 10.34zm5.77-7.77c-.31-.15-1.84-.9-2.12-1-.28-.1-.49-.15-.69.15-.2.3-.79 1-.96 1.2-.18.2-.36.22-.67.07-.31-.15-1.3-.47-2.48-1.5-.92-.8-1.54-1.8-1.72-2.1-.18-.3-.02-.46.13-.61.13-.13.31-.35.46-.52.15-.18.2-.3.31-.5.1-.2.05-.37-.03-.52-.08-.15-.69-1.65-.95-2.26-.25-.6-.5-.52-.69-.53h-.59c-.2 0-.52.08-.79.37-.28.3-1.03 1-1.03 2.45s1.05 2.85 1.2 3.05c.15.2 2.05 3.24 5.08 4.42.72.3 1.29.47 1.73.6.73.23 1.39.2 1.91.12.58-.09 1.84-.75 2.1-1.48.26-.73.26-1.35.18-1.48-.08-.13-.28-.2-.59-.35z" />
                </svg>
              </a>
            </footer>
          </div>
        }
      />
    </Routes>
  );
}
