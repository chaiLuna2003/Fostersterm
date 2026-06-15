import React, { useState, useEffect, useRef } from "react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { MobileMenu } from "../components/MobileMenu";
import PremiumGallery from "../components/PremiumGallery";
import { Navbar } from "../components/Navbar";

import {
  ChevronLeft,
  ChevronRight,
  Quote,
  ShieldPlus,
  Activity,
  Headset,
  HeartHandshake,
  Globe,
  Stethoscope,
  Lightbulb,
  Heart,
  UserRound,
  ShieldCheck,
  Handshake,
} from "lucide-react";
import { ContactForm } from "../components/Contactform";

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
  }, [direction, delay]);
  return ref;
}

// ── Cols visibles por breakpoint ─────────────────────────────────
function useVisibleCols() {
  const [cols, setCols] = React.useState(1);
  React.useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      setCols(w >= 1024 ? 3 : w >= 640 ? 2 : 1);
    };
    update();
    window.addEventListener("resize", update, { passive: true });
    return () => window.removeEventListener("resize", update);
  }, []);
  return cols;
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
              Su éxito es nuestro éxito. Transforme su clínica con nuestros servicios integrados de alergia, sin inversión inicial y con el respaldo de nuestro equipo experto, generando ingresos adicionales dentro de su práctica mientras crecemos juntos.
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
            © 2026 Foster Stern. Todos los derechos reservados.
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
  const heroSub = useFade("up", 0.25);
  const heroStats = useFade("up", 0.4);
  const misionImg = useFade("left");
  const misionTxt = useFade("right");
  const visionTxt = useFade("left");
  const valTitle = useFade("up");
  const val1 = useFade("up", 0);
  const val2 = useFade("up", 0.15);
  const val3 = useFade("up", 0.3);
  const val4 = useFade("up", 0.45);
  const val5 = useFade("up", 0.6);
  const teamTitle = useFade("up");
  const team1 = useFade("up", 0);
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const visibleCols = useVisibleCols();

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
      <section
        className="relative overflow-hidden flex flex-col"
        style={{ minHeight: "100dvh" }}
      >
        <div className="absolute inset-0 z-0">
          <img
            src="/Fostersterm/HeroImgNosotros.webp"
            alt=""
            className="w-full h-full object-cover object-center"
            loading="eager"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(105deg, rgba(255,255,255,0.97) 0%, rgba(255,255,255,0.40) 0%, rgba(255,255,255,0.55) 5%, rgba(255,255,255,0.10) 0%)",
            }}
          />
        </div>

        {/* Dandelion seeds */}
        <div className="absolute left-0 bottom-20 z-0 pointer-events-none select-none opacity-10">
          <svg
            viewBox="0 0 200 200"
            width="200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="100" cy="100" r="7" fill="#008154" />
            {Array.from({ length: 20 }).map((_, i) => {
              const angle = (i / 20) * 2 * Math.PI;
              const x2 = 100 + Math.cos(angle) * 80;
              const y2 = 100 + Math.sin(angle) * 80;
              return (
                <g key={i}>
                  <line
                    x1="100"
                    y1="100"
                    x2={x2}
                    y2={y2}
                    stroke="#008154"
                    strokeWidth="1.2"
                  />
                  <ellipse
                    cx={x2}
                    cy={y2}
                    rx="5"
                    ry="3"
                    fill="#008154"
                    transform={`rotate(${(i / 20) * 360},${x2},${y2})`}
                  />
                </g>
              );
            })}
          </svg>
        </div>

        <div
          className="relative z-10 flex-1 flex flex-col max-w-7xl mx-auto w-full px-6 md:px-10"
          style={{ paddingTop: "110px" }}
        >
          <div className="grid lg:grid-cols-2 gap-0 items-stretch flex-1">
            <div className="flex flex-col justify-center gap-6 py-6 pr-0 lg:pr-16">
              <h1
                className="text-4xl md:text-5xl leading-[1.18]"
                style={{
                  fontFamily: "'Nunito Sans', sans-serif",
                  fontWeight: 800,
                }}
              >
                <span style={{ color: "#0D2647" }}>
                  Transformando clínicas.
                </span>
                <br />
                <span style={{ color: "var(--brand-green)" }}>
                  Mejorando vidas.
                </span>
                <br />
                <span style={{ color: "#4D3088" }}>Revolucionando la</span>
                <br />
                <span style={{ color: "#4D3088" }}>atención de alergias.</span>
              </h1>

             

              

              
            </div>
            <div className="hidden lg:block" />
          </div>

      <div className="relative z-10 -mx-4 md:-mx-10 mb-10 overflow-x-auto scrollbar-hide">
  <div className="flex lg:grid lg:grid-cols-4 gap-4 px-4 md:px-0 lg:gap-0">
    {[
      {
        icon: (
          <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white">
            <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3z" />
          </svg>
        ),
        title: "Alianzas estratégicas",
        desc: "Colaboramos con instituciones líderes para generar soluciones de alto impacto.",
      },
      {
        icon: (
          <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white">
            <path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1z" />
          </svg>
        ),
        title: "Innovación continua",
        desc: "Tecnología moderna aplicada a la atención médica.",
      },
      {
        icon: (
          <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white">
            <path d="M3.5 18.49l6-6.01 4 4L22 6.92" />
          </svg>
        ),
        title: "Resultados reales",
        desc: "Mejor eficiencia clínica y experiencia del paciente.",
      },
      {
        icon: (
          <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white">
            <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12" />
          </svg>
        ),
        title: "Confianza y respaldo",
        desc: "Más de 35 años comprometidos con la excelencia.",
      },
    ].map((item, i) => (
      <div
        key={i}
        className="min-w-[280px] lg:min-w-0 flex items-start gap-4 p-5 rounded-[24px] border backdrop-blur-md shadow-sm lg:rounded-none lg:border-r lg:last:border-r-0"
        style={{
          backgroundColor: "rgba(255,255,255,0.07)", // Ligero ajuste para homogeneidad
          borderColor: "rgba(255,255,255,0.12)",
        }}
      >
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm"
          style={{
            backgroundColor: "var(--brand-green)",
          }}
        >
          {item.icon}
        </div>
        <div className="flex flex-col justify-start pt-0.5">
          {/* TÍTULO: Tamaño contenido pero con tracking y peso para que resalte */}
          <h3 
            className="text-sm font-semibold tracking-wide" 
            style={{ color: "white" }}
          >
            {item.title}
          </h3>
          
          {/* DESCRIPCIÓN: Tamaño intermedio exacto (13px) y opacidad alta para legibilidad premium */}
          <p
            className="text-[13px] font-normal leading-relaxed mt-1.5 tracking-normal"
            style={{
              color: "rgba(255,255,255,0.88)",
            }}
          >
            {item.desc}
          </p>
        </div>
      </div>
    ))}
  </div>
</div>
        </div>
      </section>

      {/* ── MISIÓN ───────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-white overflow-hidden w-full">
        <div className="flex flex-col gap-24 md:gap-32">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-0 lg:items-center w-full">
            {/* COLUMNA IZQUIERDA: TEXTO */}
            <div
              ref={misionTxt}
              className="order-2 lg:order-1 px-6 md:px-10 lg:pl-[calc((100vw-1280px)/2+40px)] lg:pr-16 flex flex-col justify-center w-full"
            >
              <div className="max-w-xl w-full">
                <span
                  className="text-xs uppercase tracking-[0.3em] block"
                  style={{
                    color: "var(--brand-green)",
                    fontWeight: 700,
                  }}
                >
                  Nuestra Misión
                </span>

                <h2
                  className="text-4xl md:text-5xl lg:text-6xl mt-5 leading-tight"
                  style={{
                    color: "var(--brand-primary)",
                    fontWeight: 700,
                  }}
                >
                  Transformar la atención médica moderna.
                </h2>

                <p
                  className="mt-6 md:mt-8 text-base md:text-lg leading-relaxed"
                  style={{
                    color: "var(--brand-muted)",
                  }}
                >
                  En Foster Stern impulsamos clínicas médicas mediante
                  soluciones integrales de alergia, tecnología clínica y soporte
                  especializado, permitiendo ofrecer atención de clase mundial
                  sin inversión inicial y con un enfoque centrado en el
                  paciente.
                </p>

                {/* FEATURES */}
                
              </div>
            </div>

            {/* COLUMNA DERECHA: IMAGEN */}
            <div
              ref={misionImg}
              className="relative group order-1 lg:order-2 w-full flex justify-end"
            >
              <div className="overflow-hidden w-full h-[280px] sm:h-[400px] lg:h-[600px] rounded-none shadow-2xl">
                <img
                  src="/Fostersterm/MISIONIMG.png"
                  alt="Misión Foster Stern"
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── VISIÓN (CORREGIDA E INTEGRADA CORRECTAMENTE) ───────────────── */}
      <section className="relative min-h-screen w-full bg-white overflow-hidden flex flex-col justify-between">
        
        {/* ── IMAGEN DE FONDO DECORATIVO ── */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img 
            src="/Fostersterm/VISIONIMG.png" 
            alt="Background Decor" 
            className="w-full h-full object-cover object-left-top lg:object-fill"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-white via-white/90 to-transparent lg:hidden" />
        </div>

        {/* ── CONTENIDO PRINCIPAL ── */}
        <div className="relative z-10 max-w-7xl mx-auto w-full px-6 md:px-12 lg:px-16 pt-20 pb-16 lg:pt-28 lg:pb-24 grid lg:grid-cols-12 gap-12 items-center flex-grow">
          
          {/* COLUMNA IZQUIERDA: Logo centrado */}
          <div className="order-1 lg:col-span-7 flex flex-col items-center lg:items-start justify-center relative w-full min-h-[250px] lg:min-h-[400px]">
            <div className="lg:ml-16 transform lg:-translate-y-6">
              <img 
                src="/Fostersterm/LogoFS.png" 
                alt="Foster Stern Allergy Division" 
                className="w-72 md:w-96 h-auto object-contain"
              />
            </div>
          </div>

          {/* COLUMNA DERECHA: Textos principales */}
          <div ref={visionTxt} className="order-2 lg:col-span-5 flex flex-col justify-center">
            <div className="flex flex-col items-start mb-6">
              <span className="text-xs uppercase tracking-[0.3em] font-bold text-[var(--brand-green)]">
                Nuestra Visión
              </span>
              <div className="w-12 h-[2px] bg-[var(--brand-green)] mt-2" />
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-[30px] font-bold leading-[1.1] text-[var(--brand-primary)] tracking-tight">
              Liderar el futuro de los servicios de alergia, conectando con clínicas a través de un ecosistema moderno, accesible y altamente eficiente, enfocado en mejorar la atención, ampliar el acceso y transformar la experiencia del paciente.
            </h2>

            
          </div>

        </div>

        {/* ── FRANJA INFERIOR OSCURA (4 Pilares Informativos) ── */}
        <div className="relative z-10 w-full bg-[#076677] border-t border-white/10 py-6 md:py-8 px-6 md:px-12">
          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-6 gap-x-8 items-center divide-y sm:divide-y-0 lg:divide-x divide-white/10">
            
            {/* Pilar 1 */}
            <div className="flex items-center gap-4 pt-4 sm:pt-0 lg:pl-0">
              <div className="text-white flex-shrink-0">
                <Globe className="w-7 h-7" />
              </div>
              <div className="flex flex-col">
                <h4 className="text-white text-xs font-bold uppercase tracking-wide">Red conectada</h4>
                <p className="text-white/60 text-xs mt-0.5 leading-snug">Transformamos el acceso a los servicios de alergia con innovacion, eficiencia y atención centrada.</p>
              </div>
            </div>

            {/* Pilar 2 */}
            <div className="flex items-center gap-4 pt-4 sm:pt-0 lg:pl-8">
              <div className="text-white flex-shrink-0">
                <Stethoscope className="w-7 h-7" />
              </div>
              <div className="flex flex-col">
                <h4 className="text-white text-xs font-bold uppercase tracking-wide">Excelencia médica</h4>
                <p className="text-white/60 text-xs mt-0.5 leading-snug">Impulsamos el conocimiento y la especialización de cada clinica</p>
              </div>
            </div>

            {/* Pilar 3 */}
            <div className="flex items-center gap-4 pt-4 sm:pt-4 lg:pt-0 lg:pl-8">
              <div className="text-white flex-shrink-0">
                <Lightbulb className="w-7 h-7" />
              </div>
              <div className="flex flex-col">
                <h4 className="text-white text-xs font-bold uppercase tracking-wide">Innovación constante</h4>
                <p className="text-white/60 text-xs mt-0.5 leading-snug">Tecnología y ciencia al servicios de alergia</p>
              </div>
            </div>

            {/* Pilar 4 */}
            <div className="flex items-center gap-4 pt-4 sm:pt-4 lg:pt-0 lg:pl-8">
              <div className="text-white flex-shrink-0">
                <Heart className="w-7 h-7" />
              </div>
              <div className="flex flex-col">
                <h4 className="text-white text-xs font-bold uppercase tracking-wide">Centrados en el paciente</h4>
                <p className="text-white/60 text-xs mt-0.5 leading-snug">Mejoramos vidas con acceso y atención de calidad.</p>
              </div>
            </div>

          </div>
        </div>

      </section>

      {/* ── VALORES ──────────────────────────────────────────────── */}
      <section
        className="relative py-28 overflow-hidden"
        id="valores"
        style={{ backgroundColor: "#fafbfc" }}
      >
        {/* DECOR — hojas, esquina superior izquierda */}
        <div
          className="absolute -top-24 -left-24 w-[420px] h-[420px] rounded-full pointer-events-none select-none"
          style={{ backgroundColor: "rgba(0,149,84,0.05)" }}
        />
        <svg
          className="absolute top-10 left-6 w-40 h-40 pointer-events-none select-none opacity-40"
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 190 C 40 140, 60 100, 100 60 C 130 30, 160 20, 190 10"
            stroke="var(--brand-green)"
            strokeWidth="2"
            opacity="0.5"
          />
          {[
            [40, 150],
            [65, 120],
            [90, 95],
            [115, 70],
            [145, 45],
          ].map(([x, y], i) => (
            <ellipse
              key={i}
              cx={x}
              cy={y}
              rx="14"
              ry="7"
              fill="var(--brand-green)"
              opacity="0.18"
              transform={`rotate(-45 ${x} ${y})`}
            />
          ))}
        </svg>

        {/* DECOR — grid de puntos, esquina superior derecha */}
        <div className="absolute top-16 right-10 grid grid-cols-6 gap-3 pointer-events-none select-none opacity-60">
          {Array.from({ length: 24 }).map((_, i) => (
            <span
              key={i}
              className="w-1.5 h-1.5 rounded-full"
              style={{ backgroundColor: "var(--brand-green)" }}
            />
          ))}
        </div>

        <div className="relative max-w-7xl mx-auto px-6 md:px-10">
          {/* Header centrado */}
          <div ref={valTitle} className="text-center max-w-3xl mx-auto mb-16">
            <span
              className="text-xs uppercase tracking-[0.35em] font-bold"
              style={{ color: "var(--brand-green)" }}
            >
              Nuestros Valores
            </span>
            <div
              className="w-10 h-1 rounded-full mx-auto mt-3 mb-6"
              style={{ backgroundColor: "var(--brand-green)" }}
            />
            <h2
              className="text-3xl md:text-5xl leading-tight"
              style={{ fontWeight: 800, color: "var(--brand-primary)" }}
            >
              Lo que nos guía,
              <br />
              lo que{" "}
              <span style={{ color: "var(--brand-green)" }}>
                te impulsará.
              </span>
            </h2>
            <p
              className="mt-6 text-base leading-relaxed"
              style={{ color: "var(--brand-muted)" }}
            >
              Nuestros valores son la base de todo lo que hacemos. Guían
              nuestras decisiones y la forma en que trabajamos contigo.
            </p>
          </div>

          {/* Tarjetas de valores */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              {
                ref: val1,
                icon: <Heart className="w-7 h-7" />,
                titulo: "Pasión",
                desc: "Nos mueve lo que hacemos y ponemos energía y dedicación en cada detalle para generar impacto.",
              },
              {
                ref: val2,
                icon: <UserRound className="w-7 h-7" />,
                titulo: "Compromiso",
                desc: "Nos comprometemos a dar siempre lo mejor de nosotros.",
              },
              {
                ref: val3,
                icon: <Lightbulb className="w-7 h-7" />,
                titulo: "Innovación",
                desc: "Buscamos soluciones creativas que generen impacto y valor.",
              },
              {
                ref: val4,
                icon: <ShieldCheck className="w-7 h-7" />,
                titulo: "Transparencia",
                desc: "Actuamos con honestidad y claridad en cada paso del camino.",
              },
              {
                ref: val5,
                icon: <Handshake className="w-7 h-7" />,
                titulo: "Colaboración",
                desc: "Creemos en el poder del trabajo en equipo para lograr más juntos.",
              },
            ].map(({ ref, icon, titulo, desc }) => (
              <div
                key={titulo}
                ref={ref}
                className="group bg-white rounded-3xl border p-8 flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                style={{ borderColor: "rgba(0,0,0,0.06)" }}
              >
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-6 transition-colors duration-300"
                  style={{
                    backgroundColor: "var(--brand-light)",
                    color: "var(--brand-green)",
                  }}
                >
                  {icon}
                </div>
                <h3
                  className="text-xl"
                  style={{ fontWeight: 700, color: "var(--brand-primary)" }}
                >
                  {titulo}
                </h3>
                <div
                  className="w-8 h-[3px] rounded-full mt-3 mb-4"
                  style={{ backgroundColor: "var(--brand-green)" }}
                />
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
      

      {/* ── CONTACTO ─────────────────────────────────────────────────── */}
      <section
        className="py-20 bg-gradient-to-b from-gray-50 to-white"
        id="contacto-nosotros"
      >
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <div className="text-center mb-14">
            <span
              className="text-xs uppercase tracking-widest font-bold"
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
            <div>
              <div
                className="overflow-hidden rounded-3xl border shadow-xl"
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
              <div className="mt-6 flex flex-col gap-4">
                <div className="flex items-start gap-3">
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

            <ContactForm />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}