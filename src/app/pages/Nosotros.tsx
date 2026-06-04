import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { MobileMenu } from "../components/MobileMenu";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";

// ── Fade-in hook ──────────────────────────────────────────────────
function useFade(direction: "up" | "left" | "right" = "up", delay = 0) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
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
      { threshold: 0.1 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return ref;
}

// ── Navbar ────────────────────────────────────────────────────────
function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out"
      style={{
        backgroundColor: scrolled ? "rgba(255,255,255,0.7)" : "transparent",
        backdropFilter: scrolled ? "blur(20px) saturate(180%)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(20px) saturate(180%)" : "none",
        boxShadow: scrolled ? "0 4px 30px rgba(0,0,0,0.03)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.4)" : "1px solid transparent",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-3 md:py-4 flex items-center justify-between">
        <Link to="/">
          <ImageWithFallback
            src="/Fostersterm/LOGOFALLERGY.png"
            alt="Foster Stern Group"
            className={`h-16 md:h-18 lg:h-24 w-auto object-contain transition-all duration-300 ${
              scrolled ? "brightness-0 opacity-90" : ""
            }`}
          />
        </Link>

        {/* Desktop links — lg+ only */}
        <div className="hidden lg:flex items-center gap-5 xl:gap-7">
          {[
            { label: "Nosotros", to: "/nosotros" },
            { label: "Servicios", href: "/#Servicios" },
            { label: "Beneficios", href: "/#Beneficios" },
            { label: "Proceso", href: "/#Proceso" },
            { label: "FAQ", href: "/#FAQ" },
            { label: "Blog", to: "/blog" },
          ].map((item) =>
            "to" in item ? (
              <Link
                key={item.label}
                to={item.to!}
                className="nav-link text-sm xl:text-base font-semibold transition-colors duration-300"
                style={{ color: scrolled ? "#054A5B" : "rgba(255,255,255,0.92)" }}
              >
                {item.label}
              </Link>
            ) : (
              <a
                key={item.label}
                href={item.href}
                className="nav-link text-sm xl:text-base font-semibold transition-colors duration-300"
                style={{ color: scrolled ? "#054A5B" : "rgba(255,255,255,0.92)" }}
              >
                {item.label}
              </a>
            )
          )}
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
            style={{
              color: scrolled ? "#054A5B" : "white",
              borderColor: scrolled ? "#054A5B" : "rgba(255,255,255,0.7)",
            }}
          >
            🇺🇸 English
          </Link>
        </div>

        <MobileMenu scrolled={scrolled} />
      </div>
    </nav>
  );
}

// ── Footer ────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer
      className="bg-white border-t"
      style={{ borderColor: "var(--brand-secondary)" }}
    >
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
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
                fontFamily: "'Source Sans 3', sans-serif",
              }}
            >
              Tu éxito es nuestro éxito. Transforma tu clínica con servicios
              integrados de alergia sin inversión inicial.
            </p>
            <div className="flex items-center gap-3">
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
                  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white">
                    <path d={path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4
              className="text-base font-bold mb-5"
              style={{ color: "var(--brand-primary)" }}
            >
              Información
            </h4>
            <ul className="space-y-3">
              {[
                ["Sobre Nosotros", "/#nosotros"],
                ["Servicios", "/#servicios"],
                ["FAQ", "/#faq"],
                ["Contacto", "/#contacto"],
              ].map(([label, href]) => (
                <li key={label}>
                  <a
                    href={href}
                    className="footer-link text-sm flex items-center gap-2"
                    style={{ color: "var(--brand-muted)" }}
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
          <div>
            <h4
              className="text-base font-bold mb-5"
              style={{ color: "var(--brand-primary)" }}
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
                  style={{ color: "var(--brand-muted)" }}
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
                  style={{ color: "var(--brand-muted)" }}
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
                  style={{ color: "var(--brand-muted)" }}
                >
                  info@fosterstern.com
                </span>
              </li>
            </ul>
          </div>
          <div>
            <h4
              className="text-base font-bold mb-5"
              style={{ color: "var(--brand-primary)" }}
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
        <div
          className="border-t pt-6 flex flex-col md:flex-row items-center justify-between gap-3"
          style={{ borderColor: "var(--brand-secondary)" }}
        >
          <p className="text-sm" style={{ color: "var(--brand-muted)" }}>
            &copy; 2026 Foster Stern Group. Todos los derechos reservados.
          </p>
          <div className="flex gap-4">
            <a
              href="#"
              className="footer-link text-sm"
              style={{ color: "var(--brand-muted)" }}
            >
              Privacidad
            </a>
            <a
              href="#"
              className="footer-link text-sm"
              style={{ color: "var(--brand-muted)" }}
            >
              Términos
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

// ── Página Nosotros ───────────────────────────────────────────────
export default function Nosotros() {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  // Refs por sección
  const heroTitle = useFade("up", 0.1);
  const heroSub = useFade("up", 0.25);
  const heroStats = useFade("up", 0.4);
  const misionImg = useFade("left");
  const misionTxt = useFade("right");
  const visionImg = useFade("right");
  const visionTxt = useFade("left");
  const valTitle = useFade("up");
  const val1 = useFade("up", 0);
  const val2 = useFade("up", 0.15);
  const val3 = useFade("up", 0.3);
  const val4 = useFade("up", 0.45);
  const teamTitle = useFade("up");
  const team1 = useFade("up", 0);
  const numTitle = useFade("up");
  const num1 = useFade("up", 0);
  const num2 = useFade("up", 0.15);
  const num3 = useFade("up", 0.3);
  const num4 = useFade("up", 0.45);
  const ctaBlock = useFade("up");
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  const testimonials = [
    {
      name: "Dr. Michael Rivera",
      role: "Clínica Family Care",
      text: "Foster Stern transformó completamente nuestra operación clínica. Hoy ofrecemos servicios de alergia sin complicaciones.",
      image:
        "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=300&q=80",
    },
    {
      name: "Dr. Sarah Collins",
      role: "Medical Center Florida",
      text: "La implementación fue increíblemente rápida y el soporte del equipo ha sido impecable desde el primer día.",
      image:
        "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&q=80",
    },
    {
      name: "Dr. Emily Watson",
      role: "Watson Health Group",
      text: "Nuestros pacientes ahora reciben atención especializada sin tener que salir de nuestra clínica.",
      image:
        "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=300&q=80",
    },
    {
      name: "Dr. Daniel Brooks",
      role: "Brooks Medical",
      text: "La experiencia ha sido extremadamente profesional. El crecimiento para nuestra clínica fue inmediato.",
      image:
        "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=300&q=80",
    },
    {
      name: "Dr. Olivia Carter",
      role: "Prime Allergy Center",
      text: "El modelo llave en mano nos permitió expandir servicios sin realizar inversión inicial.",
      image:
        "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=300&q=80",
    },
  ];

  return (
    <div
      className="min-h-screen bg-white"
      style={{ fontFamily: "'Source Sans 3', sans-serif" }}
    >
      <Navbar />

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden min-h-screen flex flex-col">

        {/* Background — misma imagen que el home */}
        <div className="absolute inset-0 z-0">
          <img
            src="/Fostersterm/heroSectionFooterImg.png"
            alt=""
            className="w-full h-full object-cover object-center"
            loading="eager"
          />
          {/* Overlay sutil solo en la parte inferior para los stats */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to top, rgba(5,74,91,0.55) 0%, transparent 50%)",
            }}
          />
        </div>

        {/* Imagen de referencia — dándole la composición: texto izq, imagen-collage der */}
        {/* Columna derecha: la imagen subida por el usuario como decoración */}
        <div className="absolute right-0 top-0 h-full w-1/2 z-[1] hidden lg:block">
          <img
            src="/Fostersterm/Gemini_Generated_Image_xxeyopxxeyopxxey.png"
            alt=""
            className="w-full h-full object-cover object-left"
            style={{ opacity: 0.35 }}
          />
          {/* Fade hacia la izquierda para mezclar con el overlay */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to right, rgba(5,74,91,0.95) 0%, rgba(5,74,91,0.3) 40%, transparent 100%)",
            }}
          />
        </div>

        {/* Content */}
        <div
          className="relative z-10 flex-1 flex flex-col justify-center max-w-7xl mx-auto w-full px-6 md:px-10"
          style={{ paddingTop: "130px", paddingBottom: "48px" }}
        >
          {/* Badge */}
          <div className="mb-6">
            <span
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest border"
              style={{
                backgroundColor: "rgba(5,74,91,0.08)",
                borderColor: "rgba(5,74,91,0.25)",
                color: "#054A5B",
              }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full"
                style={{ backgroundColor: "var(--brand-green)" }}
              />
              Sobre Nosotros
            </span>
          </div>

          {/* Title */}
          <div ref={heroTitle} className="max-w-2xl">
            <h1
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-[1.08] mb-6"
              style={{ fontWeight: 800, fontFamily: "'Nunito Sans', sans-serif" }}
            >
              <span className="hero-title-shimmer">Transformando</span>
              <br />
              <span style={{ color: "#054A5B" }}>la atención de </span>
              <span style={{ color: "#008154" }}>alergia</span>
              <br />
              <span style={{ color: "#054A5B" }}>en América.</span>
            </h1>
          </div>

          {/* Description */}
          <div ref={heroSub} className="max-w-xl mb-10">
            <p
              className="text-base md:text-lg leading-relaxed font-semibold"
              style={{ color: "#054A5B" }}
            >
              Somos Foster Stern Group, una empresa dedicada a integrar
              servicios de alergia de clase mundial directamente en clínicas
              médicas — sin inversión inicial y con soporte especializado continuo.
            </p>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16 md:mb-20">
            <a
              href="/#contacto"
              className="nav-cta px-8 py-4 rounded-2xl text-white text-center font-bold shadow-lg"
              style={{ backgroundColor: "var(--brand-green)" }}
            >
              Conocer Servicios
            </a>
            <a
              href="/#contacto"
              className="px-8 py-4 rounded-2xl text-center font-bold border-2 hover:bg-[#054A5B]/10 transition-all"
              style={{ borderColor: "#054A5B", color: "#054A5B" }}
            >
              Contactar Equipo
            </a>
          </div>

          {/* Stats bar — al fondo del hero, inspirado en la imagen */}
          <div ref={heroStats}>
            <div
              className="inline-grid grid-cols-2 md:grid-cols-4 gap-px rounded-2xl overflow-hidden border"
              style={{
                borderColor: "rgba(5,74,91,0.2)",
                backgroundColor: "rgba(5,74,91,0.08)",
              }}
            >
              {[
                { value: "500+", label: "Clínicas asociadas" },
                { value: "98%", label: "Satisfacción clínica" },
                { value: "$0", label: "Inversión inicial" },
                { value: "10+", label: "Años de experiencia" },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center justify-center px-6 py-5"
                  style={{
                    backgroundColor: "rgba(255,255,255,0.55)",
                    backdropFilter: "blur(12px)",
                  }}
                >
                  <span
                    className="text-2xl md:text-3xl font-black mb-1"
                    style={{ color: "var(--brand-green)" }}
                  >
                    {stat.value}
                  </span>
                  <span
                    className="text-xs text-center font-medium leading-tight"
                    style={{ color: "#054A5B" }}
                  >
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="relative z-10 flex justify-center pb-8">
          <div
            className="flex flex-col items-center gap-1 opacity-60"
            style={{ color: "#054A5B" }}
          >
            <span className="text-[10px] uppercase tracking-widest">Scroll</span>
            <svg className="w-4 h-4 animate-bounce" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </section>

      
      {/* ── MISIÓN & VISIÓN ───────────────────────────────────── */}
<section className="py-28 bg-white overflow-hidden">
  <div className="max-w-7xl mx-auto px-6 md:px-10 flex flex-col gap-32">

    {/* ── MISIÓN ───────────────── */}
    <div className="grid lg:grid-cols-2 gap-14 items-center">

      {/* IMAGE */}
      <div className="relative group">
        <div className="overflow-hidden rounded-[32px] shadow-2xl">
          <img
            src="/Fostersterm/Medicos-Contentos-1408x768-1-e1778107355311.jpg"
            alt="Misión Foster Stern"
            className="w-full h-[320px] md:h-[450px] object-cover transition-all duration-700 group-hover:scale-105"
          />
        </div>

        {/* DECOR */}
        <div
          className="absolute -bottom-6 -right-6 w-40 h-40 rounded-full opacity-10 blur-3xl"
          style={{ backgroundColor: "var(--brand-green)" }}
        />
      </div>

      {/* CONTENT */}
      <div className="relative">
        <span
          className="text-xs uppercase tracking-[0.3em]"
          style={{
            color: "var(--brand-green)",
            fontWeight: 700,
          }}
        >
          Nuestra Misión
        </span>

        <h2
          className="text-5xl md:text-6xl mt-5 leading-none"
          style={{
            color: "var(--brand-primary)",
            fontWeight: 700,
          }}
        >
          Transformar la atención médica moderna.
        </h2>

        <p
          className="mt-8 text-lg leading-relaxed max-w-xl"
          style={{
            color: "var(--brand-muted)",
          }}
        >
          En Foster Stern Group impulsamos clínicas médicas mediante
          soluciones integrales de alergia, tecnología clínica y soporte
          especializado, permitiendo ofrecer atención de clase mundial
          sin inversión inicial y con un enfoque centrado en el paciente.
        </p>
      </div>
    </div>

    {/* ── VISIÓN ───────────────── */}
    <div className="grid lg:grid-cols-2 gap-14 items-center">

      {/* CONTENT */}
      <div className="order-2 lg:order-1 relative">
        <span
          className="text-xs uppercase tracking-[0.3em]"
          style={{
            color: "var(--brand-green)",
            fontWeight: 700,
          }}
        >
          Nuestra Visión
        </span>

        <h2
          className="text-5xl md:text-6xl mt-5 leading-none"
          style={{
            color: "var(--brand-primary)",
            fontWeight: 700,
          }}
        >
          Liderar el futuro de la alergología.
        </h2>

        <p
          className="mt-8 text-lg leading-relaxed max-w-xl"
          style={{
            color: "var(--brand-muted)",
          }}
        >
          Aspiramos a convertirnos en la red médica de alergia más
          confiable e innovadora de América, conectando clínicas,
          especialistas y pacientes mediante un ecosistema moderno,
          accesible y altamente eficiente.
        </p>
      </div>

      {/* IMAGE */}
      <div className="order-1 lg:order-2 relative group">
        <div className="overflow-hidden rounded-[32px] shadow-2xl">
          <img
            src="/Fostersterm/EstreChandoManos21339x784.jpg"
            alt="Visión Foster Stern"
            className="w-full h-[320px] md:h-[450px] object-cover transition-all duration-700 group-hover:scale-105"
          />
        </div>

        {/* DECOR */}
        <div
          className="absolute -top-6 -left-6 w-40 h-40 rounded-full opacity-10 blur-3xl"
          style={{ backgroundColor: "var(--brand-primary)" }}
        />
      </div>
    </div>
  </div>
</section>

      {/* ── VALORES ──────────────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div ref={valTitle} className="text-center mb-16">
            <span
              className="text-xs uppercase tracking-widest"
              style={{ color: "var(--brand-green)" }}
            >
              Lo que nos define
            </span>
            <h2
              className="text-3xl md:text-4xl mt-3"
              style={{ fontWeight: 700, color: "var(--brand-primary)" }}
            >
              Nuestros Valores
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                ref: val1,
                icon: (
                  <svg
                    viewBox="0 0 24 24"
                    className="w-7 h-7"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.8}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                ),
                titulo: "Alianza",
                desc: "Somos socios de nuestras clínicas. Su éxito es nuestro éxito y trabajamos juntos para lograrlo.",
              },
              {
                ref: val2,
                icon: (
                  <svg
                    viewBox="0 0 24 24"
                    className="w-7 h-7"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.8}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                ),
                titulo: "Excelencia Clínica",
                desc: "Todos nuestros protocolos están basados en evidencia científica y actualizados constantemente.",
              },
              {
                ref: val3,
                icon: (
                  <svg
                    viewBox="0 0 24 24"
                    className="w-7 h-7"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.8}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                ),
                titulo: "Innovación",
                desc: "Buscamos continuamente nuevas formas de mejorar la atención al paciente y la eficiencia clínica.",
              },
              {
                ref: val4,
                icon: (
                  <svg
                    viewBox="0 0 24 24"
                    className="w-7 h-7"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.8}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                ),
                titulo: "Compromiso",
                desc: "Nos comprometemos con cada clínica y cada paciente como si fueran los únicos que atendemos.",
              },
            ].map(({ ref, icon, titulo, desc }) => (
              <div
                key={titulo}
                ref={ref}
                className="p-8 rounded-3xl border hover:shadow-lg transition-all duration-300 group"
                style={{
                  borderColor: "var(--brand-secondary)",
                  backgroundColor: "white",
                }}
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5"
                  style={{
                    backgroundColor: "var(--brand-light)",
                    color: "var(--brand-green)",
                  }}
                >
                  {icon}
                </div>
                <h3
                  className="text-xl mb-3"
                  style={{ fontWeight: 700, color: "var(--brand-primary)" }}
                >
                  {titulo}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "var(--brand-muted)" }}
                >
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── EQUIPO ───────────────────────────────────────────────── */}
      <section
        className="py-24 overflow-hidden"
        style={{ backgroundColor: "var(--brand-bg)" }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div ref={teamTitle} className="text-center mb-16">
            <span
              className="text-xs uppercase tracking-widest"
              style={{ color: "var(--brand-green)" }}
            >
              Liderazgo
            </span>
            <h2
              className="text-3xl md:text-4xl mt-3"
              style={{ fontWeight: 700, color: "var(--brand-primary)" }}
            >
              Nuestro CEO
            </h2>
          </div>

          <div ref={team1} className="max-w-4xl mx-auto">
            <div
              className="bg-white rounded-3xl overflow-hidden border shadow-sm grid md:grid-cols-2"
              style={{ borderColor: "var(--brand-secondary)" }}
            >
              {/* Foto */}
              <div className="h-80 md:h-full overflow-hidden">
                <img
                  src="/Fostersterm/Carlitos-Solo.png"
                  alt="Dr. Carrasquillo — CEO Foster Stern Group"
                  className="w-full h-full object-cover object-top"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600&q=80";
                  }}
                />
              </div>

              {/* Info */}
              <div className="p-10 flex flex-col justify-center gap-5">
                <div>
                  <span
                    className="text-xs uppercase tracking-widest"
                    style={{ color: "var(--brand-green)" }}
                  >
                    CEO & Fundador
                  </span>
                  <h3
                    className="text-3xl mt-2 mb-1"
                    style={{ fontWeight: 700, color: "var(--brand-primary)" }}
                  >
                    Dr. Carrasquillo
                  </h3>
                  <span
                    className="text-sm font-semibold"
                    style={{ color: "var(--brand-green)" }}
                  >
                    Foster Stern Group
                  </span>
                </div>

                <p
                  className="text-base leading-relaxed"
                  style={{ color: "var(--brand-muted)" }}
                >
                  Con una trayectoria distinguida en el campo de la alergología
                  y la medicina clínica, el Dr. Carrasquillo fundó Foster Stern
                  Group con la visión de democratizar el acceso a servicios de
                  alergia de clase mundial en clínicas médicas de toda América.
                </p>
                <p
                  className="text-base leading-relaxed"
                  style={{ color: "var(--brand-muted)" }}
                >
                  Su liderazgo ha impulsado la expansión de la red a más de 500
                  clínicas aliadas, consolidando a Foster Stern Group como
                  referente en innovación clínica y atención especializada en
                  alergia.
                </p>

                {/* Redes o contacto */}
                <div className="flex items-center gap-3 mt-2">
                  <a
                    href="/#contacto"
                    className="px-6 py-2.5 rounded-xl text-white text-sm transition-all hover:opacity-90"
                    style={{
                      backgroundColor: "var(--brand-green)",
                      fontWeight: 600,
                    }}
                  >
                    Contactar
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIOS ESTILO HOSTINGER ───────────────────────────── */}
      <section
        className="py-24 overflow-hidden"
        style={{ backgroundColor: "#f5f7fb" }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          {/* HEADER */}
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-14">
            <div className="max-w-2xl">
              <span
                className="text-xs uppercase tracking-[0.25em]"
                style={{ color: "var(--brand-green)" }}
              >
                Testimonios
              </span>

              <h2
                className="text-3xl md:text-5xl leading-tight mt-4"
                style={{
                  color: "var(--brand-primary)",
                  fontWeight: 700,
                }}
              >
                Clínicas que ya transformaron su atención médica.
              </h2>
            </div>

            {/* CONTROLES */}
            <div className="flex items-center gap-3">
              <button
                onClick={() =>
                  setTestimonialIndex((prev) =>
                    prev === 0 ? testimonials.length - 1 : prev - 1,
                  )
                }
                className="w-14 h-14 rounded-2xl bg-white border transition-all duration-300 hover:scale-105 shadow-sm"
                style={{
                  borderColor: "rgba(0,0,0,0.08)",
                }}
              >
                <ChevronLeft
                  className="w-5 h-5 mx-auto"
                  style={{ color: "var(--brand-primary)" }}
                />
              </button>

              <button
                onClick={() =>
                  setTestimonialIndex((prev) =>
                    prev === testimonials.length - 1 ? 0 : prev + 1,
                  )
                }
                className="w-14 h-14 rounded-2xl transition-all duration-300 hover:scale-105 shadow-lg"
                style={{
                  backgroundColor: "var(--brand-green)",
                }}
              >
                <ChevronRight className="w-5 h-5 mx-auto text-white" />
              </button>
            </div>
          </div>

          {/* CAROUSEL */}
          <div className="overflow-hidden">
            <div
              className="flex gap-6 transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${
                  testimonialIndex * (window.innerWidth < 768 ? 100 : 34)
                }%)`,
              }}
            >
              {testimonials.map((item, index) => (
                <div
                  key={index}
                  className="
              min-w-full
              md:min-w-[48%]
              lg:min-w-[32%]
              bg-white
              rounded-[32px]
              p-8
              flex
              flex-col
              justify-between
              border
              shadow-sm
              hover:shadow-xl
              transition-all
              duration-300
            "
                  style={{
                    borderColor: "rgba(0,0,0,0.06)",
                    minHeight: "420px",
                  }}
                >
                  {/* ICON */}
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-8"
                    style={{
                      background:
                        "linear-gradient(135deg, var(--brand-green), var(--brand-primary))",
                    }}
                  >
                    <Quote className="w-7 h-7 text-white" />
                  </div>

                  {/* TEXTO */}
                  <p
                    className="text-xl leading-relaxed mb-10"
                    style={{
                      color: "var(--brand-primary)",
                      fontWeight: 400,
                    }}
                  >
                    “{item.text}”
                  </p>

                  {/* USER */}
                  <div className="flex items-center gap-4 mt-auto">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />

                    <div>
                      <h4
                        className="text-2xl leading-none mb-2"
                        style={{
                          color: "var(--brand-primary)",
                          fontWeight: 700,
                        }}
                      >
                        {item.name}
                      </h4>

                      <span
                        className="text-lg"
                        style={{
                          color: "var(--brand-muted)",
                        }}
                      >
                        {item.role}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* DOTS */}
          <div className="flex justify-center gap-3 mt-10">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setTestimonialIndex(index)}
                className="transition-all duration-300 rounded-full"
                style={{
                  width: testimonialIndex === index ? "34px" : "10px",
                  height: "10px",
                  backgroundColor:
                    testimonialIndex === index
                      ? "var(--brand-green)"
                      : "#cfd4dc",
                }}
              />
            ))}
          </div>
        </div>
      </section>

{/* ── GALERÍA ESTILO EDITORIAL ───────────────────────────── */}
{/* ── GALERÍA ───────────────────────────────────────────── */}
{/* ── GALERÍA ───────────────────────────────────────────── */}
<section className="relative py-24 bg-white overflow-hidden">
  <div className="max-w-7xl mx-auto px-6 md:px-10">

    {/* HEADER */}
    <div className="text-center mb-16 relative z-10">

      <span
        className="block text-xs uppercase tracking-[0.3em] mb-4"
        style={{
          color: "var(--brand-green)",
          fontWeight: 700,
        }}
      >
        NUESTRA GALERÍA
      </span>

      <h2
        className="text-4xl md:text-5xl leading-tight"
        style={{
          color: "var(--brand-primary)",
          fontWeight: 700,
        }}
      >
        Espacios médicos modernos y atención de primer nivel.
      </h2>

      <p
        className="max-w-2xl mx-auto mt-6 text-lg leading-relaxed"
        style={{
          color: "var(--brand-muted)",
        }}
      >
        Foster Stern Group impulsa clínicas con tecnología,
        innovación médica y experiencias centradas en el paciente.
      </p>
    </div>

    {/* MASONRY GRID */}
    <div className="columns-1 sm:columns-2 lg:columns-4 gap-5 space-y-5">

      {[
        {
          src: "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=1200",
          height: "h-[320px]",
        },
        {
          src: "https://images.unsplash.com/photo-1580281657527-47f249e8f4df?q=80&w=1200",
          height: "h-[220px]",
        },
        {
          src: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1200",
          height: "h-[400px]",
        },
        {
          src: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1200",
          height: "h-[260px]",
        },
        {
          
          src: "/Fostersterm/Carlitos-Solo.png",
          height: "h-[350px]",
        },
        {
          src: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?q=80&w=1200",
          height: "h-[250px]",
        },
        {
          src: "/Fostersterm/image.jpg",
          height: "h-[430px]",
        },
        {
          src: "/Fostersterm/maxresdefault.jpg",
          height: "h-[300px]",
        },
      ].map((img, index) => (
        <div
          key={index}
          className="relative overflow-hidden rounded-[28px] mb-5 break-inside-avoid group cursor-pointer"
        >
          {/* IMAGE */}
          <div className={`${img.height} overflow-hidden`}>
            <img
              src={img.src}
              alt={`Galería Foster Stern ${index + 1}`}
              className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
            />
          </div>

          {/* OVERLAY */}
          <div
            className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-all duration-500"
            style={{
              background:
                "linear-gradient(to top, rgba(0,0,0,0.55), rgba(0,0,0,0.05), transparent)",
            }}
          />

          {/* CONTENT */}
          <div className="absolute bottom-0 left-0 right-0 p-6 z-10 translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">

            <span className="text-white/80 text-xs uppercase tracking-[0.2em]">
              Foster Stern
            </span>

            <h3 className="text-white text-xl font-semibold mt-2">
              Atención médica moderna
            </h3>

          </div>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* ── CONTACTO + MAPA ──────────────────────────────────────── */}
      <section className="py-20 bg-white" id="contacto-nosotros">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <div ref={ctaBlock} className="text-center mb-14">
            <span
              className="text-xs uppercase tracking-widest"
              style={{ color: "var(--brand-green)" }}
            >
              Hablemos
            </span>
            <h2
              className="text-3xl md:text-4xl mt-3"
              style={{ fontWeight: 700, color: "var(--brand-primary)" }}
            >
              ¿Listo para unirte a nuestra red?
            </h2>
            <p
              className="mt-4 max-w-xl mx-auto text-base"
              style={{ color: "var(--brand-muted)" }}
            >
              Únete a las más de 500 clínicas que ya transformaron su práctica
              médica con Foster Stern Group.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Mapa + dirección */}
            <div>
              <div
                className="overflow-hidden rounded-3xl border shadow-md"
                style={{ borderColor: "var(--brand-secondary)" }}
              >
                <iframe
                  title="Ubicación Foster Stern Group"
                  src="https://www.google.com/maps?q=7480+SW+40th+Street+Miami+FL&output=embed"
                  width="100%"
                  height="320"
                  loading="lazy"
                  className="w-full border-0"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <div className="mt-6 flex flex-col gap-4">
                <div className="flex items-start gap-3">
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0"
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
                      className="text-sm leading-relaxed"
                      style={{ color: "var(--brand-muted)" }}
                    >
                      7480 SW 40th Street, Suite 850
                      <br />
                      Miami, FL 33155
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: "var(--brand-light)" }}
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className="w-4 h-4"
                      fill="currentColor"
                      style={{ color: "var(--brand-green)" }}
                    >
                      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                    </svg>
                  </div>
                  <p
                    className="text-sm"
                    style={{ color: "var(--brand-muted)" }}
                  >
                    +1 (786) 977-3733
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: "var(--brand-light)" }}
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className="w-4 h-4"
                      fill="currentColor"
                      style={{ color: "var(--brand-green)" }}
                    >
                      <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                    </svg>
                  </div>
                  <p
                    className="text-sm"
                    style={{ color: "var(--brand-muted)" }}
                  >
                    info@fosterstern.com
                  </p>
                </div>
              </div>
            </div>

            {/* Formulario */}
            <div
              className="rounded-3xl p-8 border shadow-md"
              style={{
                backgroundColor: "white",
                borderColor: "var(--brand-secondary)",
              }}
            >
              <form className="space-y-5">
                <div>
                  <label
                    className="block mb-1.5 text-sm font-semibold"
                    style={{ color: "var(--brand-primary)" }}
                  >
                    Nombre Completo *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 rounded-xl border outline-none transition-all text-sm"
                    style={{ borderColor: "var(--brand-secondary)" }}
                    placeholder="Dr. Juan Pérez"
                    onFocus={(e) =>
                      (e.target.style.borderColor = "var(--brand-green)")
                    }
                    onBlur={(e) =>
                      (e.target.style.borderColor = "var(--brand-secondary)")
                    }
                  />
                </div>
                <div>
                  <label
                    className="block mb-1.5 text-sm font-semibold"
                    style={{ color: "var(--brand-primary)" }}
                  >
                    Correo Electrónico *
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 rounded-xl border outline-none transition-all text-sm"
                    style={{ borderColor: "var(--brand-secondary)" }}
                    placeholder="correo@clinica.com"
                    onFocus={(e) =>
                      (e.target.style.borderColor = "var(--brand-green)")
                    }
                    onBlur={(e) =>
                      (e.target.style.borderColor = "var(--brand-secondary)")
                    }
                  />
                </div>
                <div>
                  <label
                    className="block mb-1.5 text-sm font-semibold"
                    style={{ color: "var(--brand-primary)" }}
                  >
                    Teléfono *
                  </label>
                  <input
                    type="tel"
                    required
                    className="w-full px-4 py-3 rounded-xl border outline-none transition-all text-sm"
                    style={{ borderColor: "var(--brand-secondary)" }}
                    placeholder="+1 (555) 123-4567"
                    onFocus={(e) =>
                      (e.target.style.borderColor = "var(--brand-green)")
                    }
                    onBlur={(e) =>
                      (e.target.style.borderColor = "var(--brand-secondary)")
                    }
                  />
                </div>
                <div>
                  <label
                    className="block mb-1.5 text-sm font-semibold"
                    style={{ color: "var(--brand-primary)" }}
                  >
                    Nombre de la Clínica *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 rounded-xl border outline-none transition-all text-sm"
                    style={{ borderColor: "var(--brand-secondary)" }}
                    placeholder="Clínica Médica XYZ"
                    onFocus={(e) =>
                      (e.target.style.borderColor = "var(--brand-green)")
                    }
                    onBlur={(e) =>
                      (e.target.style.borderColor = "var(--brand-secondary)")
                    }
                  />
                </div>
                <div>
                  <label
                    className="block mb-1.5 text-sm font-semibold"
                    style={{ color: "var(--brand-primary)" }}
                  >
                    Mensaje
                  </label>
                  <textarea
                    rows={3}
                    className="w-full px-4 py-3 rounded-xl border outline-none transition-all resize-none text-sm"
                    style={{ borderColor: "var(--brand-secondary)" }}
                    placeholder="Cuéntenos sobre su clínica..."
                    onFocus={(e) =>
                      (e.target.style.borderColor = "var(--brand-green)")
                    }
                    onBlur={(e) =>
                      (e.target.style.borderColor = "var(--brand-secondary)")
                    }
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl text-white font-semibold transition-all hover:opacity-90"
                  style={{ backgroundColor: "var(--brand-green)" }}
                >
                  Enviar Mensaje
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}