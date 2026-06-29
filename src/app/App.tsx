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
import { Routes, Route, Link, useLocation } from "react-router-dom"; // <-- Añadido useLocation
import { ImageWithFallback } from "./components/figma/ImageWithFallback";
import AnimatedWord from "./components/AnimatedWord";
import { FAQItem } from "./components/FAQItem";
import { MobileMenu } from "./components/MobileMenu";
import { Navbar } from "./components/Navbar";
import { CasosCarousel } from "./components/CasosCarousel";
import { ProcessCarousel } from "./components/ProcessCarousel";
import { AlianzaImplementacion } from "./components/AlianzaImplementacion";
import { ServiciosSection } from "./components/Serviciossection";
import { ContactForm } from "./components/Contactform";
import Footer  from "./components/footer";
import Blog from "./pages/blog";
import Nosotros from "./pages/Nosotros";
import English from "./pages/English";
import AboutUs from "./pages/Aboutus";
import BlogEn from "./pages/Blogen";
import { useEffect, useState, useRef } from "react";


// Hook para fade-in optimizado usando estilos directos e inmune a navegación de React Router
function useFade(direction: "up" | "left" | "right" = "up", delay = 0) {
  const ref = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    
    // Configuración de estados iniciales ocultos
    el.style.opacity = "0";
    el.style.transform =
      direction === "left"
        ? "translateX(-36px)"
        : direction === "right"
          ? "translateX(36px)"
          : "translateY(36px)";
          
    el.style.transition = `opacity 0.65s ease ${delay}s, transform 0.65s ease ${delay}s`;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = "1";
          el.style.transform = "translate(0,0)";
          observer.disconnect();
        }
      },
      { threshold: 0.05 },
    );
    
    // Le damos un pequeño respiro de 50ms para asegurar que React Router haya posicionado el scroll
    const timeoutId = setTimeout(() => {
      observer.observe(el);
    }, 50);
    
    return () => {
      clearTimeout(timeoutId);
      observer.disconnect();
    };
  }, [direction, delay]);
  
  return ref;
}

export default function App() {
  const location = useLocation(); // <-- Rastreamos la ubicación actual de la ruta

  // Forzar que el scroll suba al inicio automáticamente al cambiar de página
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Declaración de elementos usando el nuevo hook useFade
  // Hero cards
  const heroCard1 = useFade();
  const heroCard2 = useFade();
  const heroCard3 = useFade();

  // Focused Allergy
  const focusedImg = useFade("right");
  const focusedTitle = useFade("left");
  const focusedList = useFade("left");

  // Benefits — clínicas
  const benefitsTitle = useFade();
  const benefitsLeft = useFade("left");
  const benefitsTitleLeft = useFade("left");
  const benefitsRight = useFade("right");

  // Benefits — pacientes
  const benefitsPatientsTitle = useFade();
  const benefitsPatientsGrid = useFade();

  // FAQ
  const faqTitle = useFade();
  const faqItems = useFade();

  // How We Work
  const howImg = useFade("left");
  const howContent = useFade("right");

  // CTA
  const ctaBlock = useFade();

  // Contact
  const contactLeft = useFade("left");
  const contactRight = useFade("right");

  

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
            key={location.pathname} // <-- CLAVE: Esto obliga a React a reiniciar este div y revivir las animaciones
            className="min-h-screen bg-white overflow-x-hidden w-full"
            style={{ fontFamily: "'Nunito Sans', sans-serif" }}
          >
            {/* ── HERO SECTION ── */}
            <header className="relative overflow-hidden overflow-x-hidden min-h-screen flex flex-col">
              {/* Background Hero */}

              <div className="absolute inset-0 z-0">
                <img
                  src="/fam-foster-bg.png"
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
                    className="w-full lg:w-[420px] flex-shrink-0 relative group overflow-hidden rounded-3xl shadow-lg"
                  >
                    <img
                      src="/chartUp.webp"
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
  className="text-4xl md:text-5xl leading-tight"
  style={{
    fontFamily: "'Nunito Sans', sans-serif",
    fontWeight: 700,
    color: "var(--brand-green)",
  }}
>
  Su Clínica Merece una Oportunidad de{" "}
  <AnimatedWord
  words={[
    "Crecimiento",
    "Expansión",
    "Escalabilidad",
    "Evolución",
  ]}
/>
</h2>

                    <p
                      className="text-lg md:text-xl lg:text-2xl font-semibold"
                      style={{
                        color: "var(--brand-primary)",
                        fontFamily: "'Nunito Sans', sans-serif",
                      }}
                    >
                      Muchas prácticas médicas pierden ingresos por no ofrecer
                      servicios de alergia dentro de su clínica:
                    </p>

                    <ul ref={focusedList} className="space-y-6">
                      {[
                        "Cada referido externo es un ingreso que su clínica podría haber capturado.",
                        "La demanda de pruebas e inmunoterapia crece cada año mas.",
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
                    className="relative rounded-3xl overflow-hidden h-[280px] sm:h-[360px] md:h-[460px] lg:h-[800px] group"
                  >
                    <img
  src="/image3.png"
  alt="Prueba de alergias"
  className="
    absolute
    inset-0

    w-[115%]
    h-[115%]

    md:w-full
    md:h-full

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
                    className="flex flex-col gap-8"
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
                            <HeartPulse
                              className="w-6 h-6"
                              style={{ color: "var(--brand-green)" }}
                            />
                          ),
                          title: "Reportes periódicos de rendimiento",
                          desc: "Entregamos reportes mensuales sobre los resultados del crecimiento de su práctica con los servicios de alergia.",
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
                            {(item as any).link}
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
                  <div ref={benefitsTitleLeft} className="max-w-3xl">
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
                        Beneficios para clinics
                      </span>
                    </div>

                    <h2
                      className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mt-4"
                      style={{
                        fontFamily: "'Nunito Sans', sans-serif",
                        color: "#0f4c5c", 
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
                      src="/BenefitsClient.png"
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
                      desc: "No se requiere capital para implementar el programa de pruebas de alergias.",
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
                      desc: "Evite referidos externos y mantenga sus pacientes dentro de su propia clínica.",
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
                        Un modelo comprobado por muchos médicos que están impulsando el crecimiento de su clínica mientras mejora la atención de sus pacientes.
                      </p>
                    </div>

                    {/* RIGHT IMAGE */}
                    <div className="relative h-[260px] md:h-[340px] lg:h-full min-h-[320px]">
                      <img
                        src="/image.png"
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
                  {/* LEFT IMAGE */}
                  <div className="relative w-full h-[320px] md:h-[450px] lg:h-[580px] overflow-hidden rounded-3xl shadow-xl order-1 lg:order-1">
                    <img
                      src="/5.1.png"
                      alt="Doctor atendiendo paciente"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* RIGHT TEXT */}
                  <div
                    ref={benefitsTitle}
                    className="max-w-3xl order-2 lg:order-2"
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
                      Atención especializada en pruebas de alergia e inmunoterapia
                    </h2>

                    <p
                      className="text-lg font-bold md:text-xl mt-6 max-w-2xl leading-relaxed"
                      style={{ color: "#000000" }}
                    >
                      Nuestro programa permite que los pacientes reciban su prueba y tratamientos de alergia donde reciben su atención médica habitual.
                    </p>
                  </div>
                </div>

                {/* GRID */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                  {[
                    {
                      number: "01",
                      title: "Pruebas de alergia rápidas y seguras",
                      desc: "Identificamos de forma rápida, práctica y precisa los factores específicos que desencadenan las reacciones. Un proceso completamente seguro para que los pacientes actúen con total certeza.",
                      featured: true, 
                    },
                    {
                      number: "02",
                      title: "Mejor calidad de vida",
                      desc: "La inmunoterapia fortalece la respuesta del sistema inmunológico frente a la mayoría de los alérgenos.",
                    },
                    {
                      number: "03",
                      title: "Tratamiento de la causa real",
                      desc: "Trata la causa específica de la enfermedad alérgica a diferencia de solo ocultar los síntomas.",
                    },
                    {
                      number: "04",
                      title: "Más servicios en una sola clínica",
                      desc: "Los pacientes reciben atención integral y más servicios médicos en el mismo lugar.",
                    },
                    {
                      number: "05",
                      title: "Cobertura por aseguradoras",
                      desc: "La mayoría de las compañías de seguros cubren los servicios de alergia.",
                    },
                    
                    {
                      number: "06",
                      title: "Servicios de alergia",
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
                    <div ref={faqTitle} className="mb-8">
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
                      className="relative rounded-3xl overflow-hidden shadow-xl"
                      style={{ height: "380px" }}
                    >
                      <ImageWithFallback
                        src="/1.3.png"
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
                          "Foster Stern ayuda a su práctica médica a integrar servicios de prueba de alergias e inmunoterapia de manera eficiente, incluyendo pruebas cutáneas de alergia por punción (skin prick test), tratamientos, documentación y apoyo administrativo.",
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
              className="relative py-24 overflow-hidden"
              style={{
                backgroundImage: "url('/maxresdefault.png')",
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
                    Implementamos programas de pruebas de alergia e inmunoterapia sin inversión y ayudamos a que su práctica ofrezca más servicios en su clínica.
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
                      Unase a Foster Stern Allergy Division y transforme su clínica con mínima inversión  en un centro de servicios de alergia. Incrementando sus ingresos mediante el programa completo que incluye: personal, protocolos, facturación y documentación — para que usted solo se enfoque en crecer. 
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
            <Footer />
          </div>
        }
      />
    </Routes>
  );
}