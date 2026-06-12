import { useEffect, useRef } from "react";
import { Microscope, FlaskConical, Syringe, CheckCircle2 } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

// ── Fade-in hook (mismo patrón que App.tsx) ──────────────────────────────────
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
    observer.observe(el);
    return () => observer.disconnect();
  }, [direction]);
  return ref;
}

// ── Datos de las tarjetas ─────────────────────────────────────────────────────
const CARDS = [
  {
    delay: "delay-2",
    icon: Microscope,
    title: "Implementación del Programa de Alergia",
    desc: "Diseñamos e implementamos pruebas e inmunoterapia en su clínica, con protocolos alineados a las mejores prácticas.",
    points: [
      "Pruebas e inmunoterapia in-house",
      "Protocolos estandarizados",
      "Implementación rápida y sin fricción",
    ],
  },
  {
    delay: "delay-3",
    icon: FlaskConical,
    title: "Personal Especializado en su Clínica",
    desc: "Asignamos personal clínico en alergias directamente en sus instalaciones, coordinado con su agenda. Usted no gestiona, usted crece.",
    points: [
      "Personal entrenado en servicios de alergia",
      "Sin contratar ni capacitar staff",
      "Presencia puntual y profesional",
    ],
  },
  {
    delay: "delay-4",
    icon: Syringe,
    title: "Facturación y Soporte Operativo Total",
    desc: "Gestionamos la facturación y documentación de los servicios de alergia. Su equipo se enfoca en la atención; nosotros en la operación.",
    points: [
      "Gestión completa de facturación",
      "Documentación y cumplimiento normativo",
      "Reportes periódicos de rendimiento",
    ],
  },
];

// ── Componente principal ──────────────────────────────────────────────────────
export function ServiciosSection() {
  const titleRef = useFadeIn();
  const imgRef   = useFadeIn("right");
  const card1Ref = useFadeIn();
  const card2Ref = useFadeIn();
  const card3Ref = useFadeIn();

  const cardRefs = [card1Ref, card2Ref, card3Ref];

  return (
    <section
      id="servicios"
      className="py-20 md:py-28 overflow-hidden relative"
      style={{
        background:
          "linear-gradient(160deg, #e8f4f7 0%, #ffffff 45%, #eaf5f0 100%)",
      }}
    >
      {/* Decorative blobs */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 -left-32 w-96 h-96 rounded-full opacity-30 blur-3xl"
        style={{ background: "radial-gradient(circle, #054A5B 0%, transparent 70%)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-24 -right-24 w-80 h-80 rounded-full opacity-20 blur-3xl"
        style={{ background: "radial-gradient(circle, var(--brand-green) 0%, transparent 70%)" }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* ── Header ── */}
        <div ref={titleRef} className="fade-in text-center mb-14 md:mb-20">
          <span
            className="inline-block text-xs font-bold tracking-[0.25em] uppercase mb-4 px-4 py-1.5 rounded-full"
            style={{
              color: "var(--brand-green)",
              backgroundColor: "rgba(0,160,110,0.09)",
            }}
          >
            Nuestros Servicios
          </span>

          <h2
            className="text-3xl md:text-4xl lg:text-5xl mb-5 leading-tight"
            style={{
              fontFamily: "'Nunito Sans', sans-serif",
              color: "var(--brand-primary)",
            }}
          >
            Un Socio Estratégico,{" "}
            <span style={{ color: "var(--brand-green)" }}>
              No Un Proveedor Más
            </span>
          </h2>

          <p
            className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
            style={{ color: "var(--brand-muted)" }}
          >
            Transformamos la atención al paciente en una oportunidad de
            crecimiento para su práctica
          </p>
        </div>

        {/* ── Layout: imagen + tarjetas ── */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-14 items-stretch">

          {/* Imagen */}
          <div ref={imgRef} className="fade-in from-right lg:w-5/12 flex-shrink-0">
            <div
              className="relative w-full h-72 md:h-96 lg:h-full min-h-[500px] rounded-3xl overflow-hidden shadow-2xl"
              style={{ backgroundColor: "#054A5B" }}
            >
              <ImageWithFallback
                src="/Fostersterm/1.1.jpeg"
                alt="Espacio clínico Foster Stern Allergy"
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* Gradiente oscuro en la parte inferior */}
              

              {/* Caption glassmorphism */}
              <div
                className="absolute bottom-6 left-6 right-6 rounded-2xl p-5"
                style={{
                  background: "rgba(255,255,255,0.08)",
                  backdropFilter: "blur(14px)",
                  WebkitBackdropFilter: "blur(14px)",
                  border: "1px solid rgba(255,255,255,0.15)",
                }}
              >
                <p
                  className="text-xs font-bold tracking-[0.2em] uppercase mb-1"
                  style={{ color: "#00000" }}
                >
                  Foster Stern Allergy
                </p>
                <p
                  className="text-white text-base font-semibold leading-snug"
                  style={{ fontFamily: "'Nunito Sans', sans-serif" }}
                >
                  Atención especializada en alergia dentro de su clínica
                </p>
              </div>
            </div>
          </div>

          {/* Tarjetas con Glassmorphism Optimizado */}
          <div className="lg:w-7/12 flex flex-col gap-5">
            {CARDS.map((card, idx) => {
              const Icon = card.icon;
              return (
                <div
                  key={idx}
                  ref={cardRefs[idx]}
                  className={`fade-in ${card.delay} group relative overflow-hidden rounded-2xl transition-all duration-500 hover:-translate-y-1`}
                  style={{
                    /* ── Glassmorphism Premium para fondos claros ── */
                    background: "rgba(255, 255, 255, 0.45)",
                    backdropFilter: "blur(20px)",
                    WebkitBackdropFilter: "blur(20px)",
                    border: "1px solid rgba(255, 255, 255, 0.6)",
                    boxShadow:
                      "0 10px 32px -4px rgba(5, 74, 91, 0.08), inset 0 1px 2px rgba(255, 255, 255, 0.5)",
                  }}
                >
                  {/* Shimmer efecto reflejo en hover */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                    style={{
                      background:
                        "linear-gradient(115deg, transparent 30%, rgba(255,255,255,0.4) 50%, transparent 70%)",
                    }}
                  />

                  {/* Barra de acento izquierda */}
                  <div
                    className="absolute left-0 top-4 bottom-4 w-[3.5px] rounded-full"
                    style={{ backgroundColor: "var(--brand-green)" }}
                  />

                  <div className="relative z-10 flex gap-5 p-6 md:p-7">
                    {/* Contenedor del Icono */}
                    

                    {/* Contenido */}
                    <div className="flex-1 min-w-0">
                      <h3
                        className="text-lg md:text-xl font-bold mb-2"
                        style={{ 
                          fontFamily: "'Nunito Sans', sans-serif",
                          color: "var(--brand-primary)" 
                        }}
                      >
                        {card.title}
                      </h3>

                      <p 
                        className="text-sm leading-relaxed mb-4 font-medium"
                        style={{ color: "var(--brand-muted)" }}
                      >
                        {card.desc}
                      </p>

                      {/* Chips de puntos */}
                      <ul className="flex flex-wrap gap-2">
  {card.points.map((txt, i) => (
    <li
      key={i}
      className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full"
      style={{
        background: "rgba(5, 74, 91, 0.04)",
        border: "1px solid rgba(5, 74, 91, 0.07)",
        color: "var(--brand-primary)",
      }}
    >
      <CheckCircle2
        className="w-3.5 h-3.5 flex-shrink-0"
        style={{ color: "var(--brand-green)" }}
      />
      {txt}
    </li>
  ))}
</ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}