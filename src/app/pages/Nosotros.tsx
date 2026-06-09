import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { MobileMenu } from "../components/MobileMenu";
import { Navbar } from "../components/Navbar";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { ContactForm } from "../components/ContactForm";
import PremiumGallery from "../components/PremiumGallery";

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
                fontFamily: "'Nunito Sans', sans-serif",
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
      style={{ fontFamily: "'Nunito Sans', sans-serif" }}
    >
      <Navbar />

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden flex flex-col" style={{ minHeight: "100vh" }}>

        {/* Background image from Unsplash — modern medical clinic */}
        <div className="absolute inset-0 z-0">
          <img
            src="/Fostersterm/HeroImgNosotros.webp"
            alt=""
            className="w-full h-full object-cover object-center"
            loading="eager"
          />
          {/* Overlay: white fade on the left so text is readable, subtle tint overall */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(105deg, rgba(255,255,255,0.97) 0%, rgba(255,255,255,0.40) 0%, rgba(255,255,255,0.55) 5%, rgba(255,255,255,0.10) 0%)",
            }}
          />
        </div>

        {/* Dandelion seeds — decorative, bottom-left */}
        <div className="absolute left-0 bottom-20 z-0 pointer-events-none select-none opacity-10">
          <svg viewBox="0 0 200 200" width="200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="100" cy="100" r="7" fill="#008154"/>
            {Array.from({ length: 20 }).map((_, i) => {
              const angle = (i / 20) * 2 * Math.PI;
              const x2 = 100 + Math.cos(angle) * 80;
              const y2 = 100 + Math.sin(angle) * 80;
              return (
                <g key={i}>
                  <line x1="100" y1="100" x2={x2} y2={y2} stroke="#008154" strokeWidth="1.2"/>
                  <ellipse cx={x2} cy={y2} rx="5" ry="3" fill="#008154"
                    transform={`rotate(${(i / 20) * 360},${x2},${y2})`}/>
                </g>
              );
            })}
          </svg>
        </div>

        {/* Main content */}
        <div
          className="relative z-10 flex-1 flex flex-col max-w-7xl mx-auto w-full px-6 md:px-10"
          style={{ paddingTop: "110px" }}
        >
          {/* Logo Allergy Division */}
          

          {/* Two-column — left: text, right: transparent (shows BG photo) */}
          <div className="grid lg:grid-cols-2 gap-0 items-stretch flex-1">

            {/* LEFT — text */}
            <div className="flex flex-col justify-center gap-6 py-6 pr-0 lg:pr-16">

              {/* Headline — exact copy from reference image */}
              <h1
                className="text-4xl md:text-4xl leading-[1.18]"
                style={{ fontFamily: "'Nunito Sans', sans-serif", fontWeight: 800 }}
              >
                <span style={{ color: "#0D2647" }}>Transformando clínicas.</span>
                <br />
                <span style={{ color: "var(--brand-green)" }}>Mejorando vidas.</span>
                <br />
                <span style={{ color: "#4D3088" }}>Revolucionando la</span>
                <br />
                <span style={{ color: "#4D3088" }}>atencion de alergias.</span>
              </h1>

              {/* Accent line */}
              <div className="w-10 h-1 rounded-full" style={{ backgroundColor: "var(--brand-green)" }} />

              {/* Subtitle */}
              <div ref={heroSub}>
                <p
                  className="text-base leading-relaxed max-w-sm"
                  style={{ color: "var(--brand-muted)" }}
                >
                  Soluciones integrales, innovación y experiencia<br />
                  para el futuro de la medicina de alergias.
                </p>
              </div>

              {/* B2B card — exactly as in the reference */}
              <div 
  ref={heroStats} 
  className="flex items-start gap-4 mt-4 max-w-sm p-5 rounded-[24px] border backdrop-blur-md shadow-sm"
  style={{ 
    backgroundColor: "rgba(255, 255, 255, 0.45)", 
    borderColor: "rgba(255, 255, 255, 0.4)" 
  }}
>
  <div
    className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-sm"
    style={{ backgroundColor: "var(--brand-green)" }}
  >
    <svg viewBox="0 0 24 24" className="w-7 h-7 fill-white">
      <path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z"/>
    </svg>
  </div>
  <div>
    <p className="text-sm font-bold" style={{ color: "var(--brand-green)" }}>
      Soluciones B2B
    </p>
    <p className="text-sm font-semibold mb-1" style={{ color: "var(--brand-primary)" }}>
      para instituciones de salud
    </p>
    <p className="text-xs leading-relaxed" style={{ color: "var(--brand-primary)", opacity: 0.85 }}>
      Trabajamos junto a clínicas, hospitales y profesionales<br />
      de la salud para construir soluciones personalizadas<br />
      que mejoran resultados y eficiencia.
    </p>
  </div>
</div>
            </div>

            {/* RIGHT — intentionally empty; background photo shows through */}
            <div className="hidden lg:block" />
          </div>

          {/* ── Bottom dark stats bar — 4 columns ── */}
          <div
  className="relative z-10 -mx-6 md:-mx-10 mb-10 grid grid-cols-2 md:grid-cols-4 rounded-2xl md:rounded-[32px] overflow-hidden"
  style={{ backgroundColor: "var(--brand-primary)" }}
>
            {[
              {
                icon: (
                  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white">
                    <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
                  </svg>
                ),
                title: "Alianzas estratégicas",
                desc: "Colaboramos con instituciones líderes para generar soluciones de alto impacto.",
              },
              {
                icon: (
                  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white">
                    <path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7zm2.85 11.1l-.85.6V16h-4v-2.3l-.85-.6A4.997 4.997 0 017 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.63-.8 3.16-2.15 4.1z"/>
                  </svg>
                ),
                title: "Innovación continua",
                desc: "Desarrollamos e integramos tecnologías de vanguardia para transformar la atención de alergias.",
              },
              {
                icon: (
                  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white">
                    <path d="M3.5 18.49l6-6.01 4 4L22 6.92l-1.41-1.41-7.09 7.97-4-4L2 16.99z"/>
                  </svg>
                ),
                title: "Resultados que importan",
                desc: "Impulsamos la eficiencia operativa y mejores resultados clínicos para instituciones y pacientes.",
              },
              {
                icon: (
                  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white">
                    <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/>
                  </svg>
                ),
                title: "Confianza y respaldo",
                desc: "Más de 35 años de experiencia comprometidos con la excelencia y el crecimiento de nuestros aliados.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-3 p-5 border-r last:border-r-0"
                style={{ borderColor: "rgba(255,255,255,0.1)" }}
              >
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{ backgroundColor: "rgba(255,255,255,0.13)" }}
                >
                  {item.icon}
                </div>
                <div>
                  <p className="text-sm font-bold text-white leading-tight mb-1">{item.title}</p>
                  <p className="text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.62)" }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
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
            src="/Fostersterm/happy child in field.jpg"
            alt="Misión Foster Stern"
            className="w-full h-[320px] md:h-[400px] object-cover transition-all duration-700 group-hover:scale-105"
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
            src="/Fostersterm/hands shaking.jpg"
            alt="Visión Foster Stern"
            className="w-full h-[500px] lg:h-[650px] object-cover transition-all duration-700 group-hover:scale-105"
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
      {/* ── CEO SECTION PREMIUM ───────────────────────── */}
<section
  className="relative py-24 md:py-32 overflow-hidden"
  style={{ backgroundColor: "var(--brand-bg)" }}
>

  {/* BACKGROUND GLOW */}
  <div
    className="
      absolute
      top-[-200px]
      right-[-120px]
      w-[500px]
      h-[500px]
      rounded-full
      blur-3xl
      opacity-20
      pointer-events-none
    "
    style={{
      background:
        "linear-gradient(135deg, var(--brand-green), var(--brand-primary))",
    }}
  />

  <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">

    {/* TITLE */}
    <div className="text-center mb-16">

      <span
        className="
          text-xs
          uppercase
          tracking-[0.35em]
          font-semibold
        "
        style={{ color: "var(--brand-green)" }}
      >
        Liderazgo Ejecutivo
      </span>

      <h2
        className="
          text-3xl
          md:text-5xl
          mt-5
          leading-tight
        "
        style={{
          fontWeight: 700,
          color: "var(--brand-primary)",
        }}
      >
        El liderazgo detrás de la innovación clínica.
      </h2>

    </div>

    {/* MAIN CARD */}
    <div
      className="
        group
        relative
        rounded-[36px]
        overflow-hidden
        border
        bg-white/80
        backdrop-blur-xl
        shadow-[0_20px_80px_rgba(0,0,0,0.08)]
      "
      style={{
        borderColor: "rgba(0,0,0,0.06)",
      }}
    >

      {/* GRID */}
      <div className="grid lg:grid-cols-[1fr_1.1fr]">

        {/* IMAGE SIDE */}
        <div
          className="
            relative
            min-h-[500px]
            md:min-h-[650px]
            overflow-hidden
          "
        >

          {/* IMAGE */}
          <img
            src="/Fostersterm/Carlitos-Solo.png"
            alt="Dr. Carrasquillo — CEO Foster Stern Group"
            loading="lazy"
            decoding="async"
            onError={(e) => {
              (e.target as HTMLImageElement).src =
                "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=1200&q=80";
            }}
            className="
              absolute
              inset-0
              w-full
              h-full
              object-cover
              object-top
              transition-transform
              duration-1000
              group-hover:scale-[1.04]
            "
            style={{
              backfaceVisibility: "hidden",
            }}
          />

          {/* DARK OVERLAY */}
          <div
            className="
              absolute
              inset-0
              bg-gradient-to-t
              from-black/60
              via-black/10
              to-transparent
            "
          />

          {/* FLOATING BADGE */}
          <div
            className="
              absolute
              bottom-6
              left-6
              right-6
              backdrop-blur-md
              rounded-3xl
              border
              p-5
              transition-all
              duration-500
              group-hover:-translate-y-1
            "
            style={{
              background: "rgba(255,255,255,0.12)",
              borderColor: "rgba(255,255,255,0.18)",
            }}
          >

            <p className="text-white/70 text-xs uppercase tracking-[0.25em]">
              CEO & Founder
            </p>

            <h3 className="text-white text-2xl md:text-3xl font-bold mt-2">
              Dr. Carrasquillo
            </h3>

            <p className="text-white/80 text-sm mt-2">
              Foster Stern Allergy Division
            </p>

          </div>
        </div>

        {/* CONTENT SIDE */}
        <div
          className="
            p-8
            md:p-12
            lg:p-16
            flex
            flex-col
            justify-center
          "
        >

          {/* TOP */}
          <div className="mb-8">

            <div
              className="
                inline-flex
                items-center
                gap-2
                px-4
                py-2
                rounded-full
                text-sm
                font-medium
                mb-6
              "
              style={{
                backgroundColor: "rgba(0,128,96,0.08)",
                color: "var(--brand-green)",
              }}
            >
              Visionario Clínico
            </div>

            <h3
              className="
                text-3xl
                md:text-5xl
                leading-tight
                mb-6
              "
              style={{
                fontWeight: 700,
                color: "var(--brand-primary)",
              }}
            >
              Construyendo el futuro de la atención en alergología.
            </h3>

            <p
              className="
                text-base
                md:text-lg
                leading-relaxed
                mb-6
              "
              style={{ color: "var(--brand-muted)" }}
            >
              Con una trayectoria distinguida en alergología y medicina clínica,
              el Dr. Carrasquillo fundó Foster Stern Group con una misión clara:
              transformar el acceso a servicios especializados de alergia en
              clínicas médicas de toda América.
            </p>

            <p
              className="
                text-base
                md:text-lg
                leading-relaxed
              "
              style={{ color: "var(--brand-muted)" }}
            >
              Bajo su liderazgo, la compañía ha expandido su presencia a cientos
              de clínicas afiliadas, consolidándose como referente en innovación
              médica, excelencia operativa y atención especializada centrada en
              el paciente.
            </p>

          </div>

          {/* STATS */}
          <div
            className="
              grid
              grid-cols-2
              md:grid-cols-3
              gap-4
              mb-10
            "
          >

            {[
              {
                value: "500+",
                label: "Clínicas Aliadas",
              },
              {
                value: "15+",
                label: "Años de Experiencia",
              },
              {
                value: "98%",
                label: "Satisfacción Clínica",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="
                  rounded-2xl
                  border
                  p-5
                  bg-white
                  transition-all
                  duration-500
                  hover:-translate-y-1
                  hover:shadow-lg
                "
                style={{
                  borderColor: "rgba(0,0,0,0.06)",
                }}
              >

                <h4
                  className="text-2xl md:text-3xl font-bold"
                  style={{ color: "var(--brand-primary)" }}
                >
                  {item.value}
                </h4>

                <p
                  className="text-sm mt-2"
                  style={{ color: "var(--brand-muted)" }}
                >
                  {item.label}
                </p>

              </div>
            ))}

          </div>

          {/* BUTTONS */}
          <div className="flex flex-wrap items-center gap-4">

            <a
              href="/#contacto"
              className="
                group/button
                inline-flex
                items-center
                gap-3
                px-7
                py-4
                rounded-2xl
                text-white
                text-sm
                md:text-base
                font-semibold
                shadow-lg
                transition-all
                duration-300
                hover:scale-[1.03]
                hover:-translate-y-1
                active:scale-95
              "
              style={{
                background:
                  "linear-gradient(135deg, var(--brand-green), var(--brand-primary))",
              }}
            >
              Contactar

              <span
                className="
                  transition-transform
                  duration-300
                  group-hover/button:translate-x-1
                "
              >
                →
              </span>
            </a>

            <button
              className="
                px-7
                py-4
                rounded-2xl
                border
                text-sm
                md:text-base
                font-semibold
                transition-all
                duration-300
                hover:bg-black/5
                hover:-translate-y-1
              "
              style={{
                borderColor: "rgba(0,0,0,0.08)",
                color: "var(--brand-primary)",
              }}
            >
              Ver trayectoria
            </button>

          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* ── TESTIMONIOS ESTILO HOSTINGER ───────────────────────────── */}
      {/* ── TESTIMONIALS SECTION ───────────────────────── */}
<section
  className="py-16 md:py-24 overflow-hidden"
  style={{ backgroundColor: "#f5f7fb" }}
>
  <div className="max-w-7xl mx-auto px-6 md:px-10">

    {/* HEADER */}
    <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-10 md:mb-14">

      <div className="max-w-2xl">
        <span
          className="text-xs uppercase tracking-[0.25em]"
          style={{ color: "var(--brand-green)" }}
        >
          Testimonios
        </span>

        <h2
          className="text-2xl md:text-5xl leading-tight mt-4"
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
              prev === 0 ? testimonials.length - 1 : prev - 1
            )
          }
          className="
            group
            w-12
            h-12
            md:w-14
            md:h-14
            rounded-2xl
            bg-white
            border
            transition-all
            duration-300
            hover:scale-110
            hover:-translate-y-1
            active:scale-95
            shadow-sm
          "
          style={{
            borderColor: "rgba(0,0,0,0.08)",
          }}
        >
          <ChevronLeft
            className="
              w-5
              h-5
              mx-auto
              transition-transform
              duration-300
              group-hover:-translate-x-1
            "
            style={{ color: "var(--brand-primary)" }}
          />
        </button>

        <button
          onClick={() =>
            setTestimonialIndex((prev) =>
              prev === testimonials.length - 1 ? 0 : prev + 1
            )
          }
          className="
            group
            w-12
            h-12
            md:w-14
            md:h-14
            rounded-2xl
            transition-all
            duration-300
            hover:scale-110
            hover:-translate-y-1
            active:scale-95
            shadow-lg
          "
          style={{
            backgroundColor: "var(--brand-green)",
          }}
        >
          <ChevronRight
            className="
              w-5
              h-5
              mx-auto
              text-white
              transition-transform
              duration-300
              group-hover:translate-x-1
            "
          />
        </button>

      </div>
    </div>

    {/* HELPER */}
    {/*
      MOBILE = 1 card
      TABLET = 2 cards
      DESKTOP = 3 cards
    */}

    {/* CAROUSEL */}
    <div className="overflow-hidden">

      <div
        className="flex transition-transform duration-700 ease-out"
        style={{
          transform: `
            translateX(
              -${
                testimonialIndex *
                (typeof window !== "undefined"
                  ? window.innerWidth >= 1024
                    ? 33.333
                    : window.innerWidth >= 768
                    ? 50
                    : 100
                  : 100)
              }%
            )
          `,
        }}
      >

        {testimonials.map((item, index) => (

          <div
            key={index}
            className="
              w-full
              md:w-1/2
              lg:w-1/3
              flex-shrink-0
              px-2
            "
          >

            <div
              className="
                bg-white
                rounded-[24px]
                md:rounded-[32px]
                p-6
                md:p-8
                flex
                flex-col
                border
                shadow-sm
                h-full
                min-h-[320px]
                transition-all
                duration-500
                hover:-translate-y-2
                hover:shadow-xl
              "
              style={{
                borderColor: "rgba(0,0,0,0.06)",
              }}
            >

              {/* ICON */}
              <div
                className="
                  w-12
                  h-12
                  rounded-2xl
                  flex
                  items-center
                  justify-center
                  mb-5
                  shadow-md
                "
                style={{
                  background:
                    "linear-gradient(135deg, var(--brand-green), var(--brand-primary))",
                }}
              >
                <Quote className="w-6 h-6 text-white" />
              </div>

              {/* TEXTO */}
              <p
                className="
                  text-base
                  md:text-lg
                  leading-relaxed
                  flex-1
                  mb-6
                "
                style={{
                  color: "var(--brand-primary)",
                  fontWeight: 400,
                }}
              >
                "{item.text}"
              </p>

              {/* USER */}
              <div
                className="
                  flex
                  items-center
                  gap-3
                  mt-auto
                  pt-4
                  border-t
                "
                style={{
                  borderColor: "rgba(0,0,0,0.06)",
                }}
              >

                <img
                  src={item.image}
                  alt={item.name}
                  loading="lazy"
                  decoding="async"
                  className="
                    w-11
                    h-11
                    rounded-full
                    object-cover
                    flex-shrink-0
                  "
                />

                <div>
                  <p
                    className="text-base font-bold leading-tight"
                    style={{ color: "var(--brand-primary)" }}
                  >
                    {item.name}
                  </p>

                  <p
                    className="text-sm mt-0.5"
                    style={{ color: "var(--brand-muted)" }}
                  >
                    {item.role}
                  </p>
                </div>

              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* DOTS */}
    <div className="flex justify-center gap-2 mt-8">

      {testimonials.map((_, index) => (
        <button
          key={index}
          onClick={() => setTestimonialIndex(index)}
          aria-label={`Testimonio ${index + 1}`}
          className="
            rounded-full
            transition-all
            duration-300
            hover:scale-110
          "
          style={{
            width: testimonialIndex === index ? "28px" : "9px",
            height: "9px",
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

  
 
{/* ── MODERN CORPORATE GALLERY ───────────────────────── */}
<PremiumGallery />
      {/* ── CONTACTO ─────────────────────────────────────────────────── */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white" id="contacto-nosotros">
        <div className="max-w-6xl mx-auto px-6 md:px-10">

          <div className="text-center mb-14">
            <span className="text-xs uppercase tracking-widest font-bold" style={{ color: "var(--brand-green)" }}>
              Hablemos
            </span>
            <h2 className="text-3xl md:text-4xl mt-3" style={{ fontWeight: 700, color: "var(--brand-primary)" }}>
              ¿Listo para unirte a nuestra red?
            </h2>
            <p className="mt-4 max-w-xl mx-auto text-base" style={{ color: "var(--brand-muted)" }}>
              Únete a las más de 500 clínicas que ya transformaron su práctica médica con Foster Stern Group.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">

            {/* Mapa + info de contacto */}
            <div>
              <div className="overflow-hidden rounded-3xl border shadow-xl" style={{ borderColor: "var(--brand-secondary)" }}>
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
              <div className="mt-6 flex flex-col gap-4">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ backgroundColor: "var(--brand-light)" }}>
                    <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor" style={{ color: "var(--brand-green)" }}>
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold" style={{ color: "var(--brand-primary)" }}>Oficina Principal</p>
                    <p className="text-sm leading-relaxed" style={{ color: "var(--brand-muted)" }}>
                      7480 SW 40th Street, Suite 850<br />Miami, FL 33155
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "var(--brand-light)" }}>
                    <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor" style={{ color: "var(--brand-green)" }}>
                      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                    </svg>
                  </div>
                  <p className="text-sm" style={{ color: "var(--brand-muted)" }}>+1 (786) 977-3733</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "var(--brand-light)" }}>
                    <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor" style={{ color: "var(--brand-green)" }}>
                      <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                    </svg>
                  </div>
                  <p className="text-sm" style={{ color: "var(--brand-muted)" }}>info@fosterstern.com</p>
                </div>
              </div>
            </div>

            {/* Formulario compartido */}
            <ContactForm />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}