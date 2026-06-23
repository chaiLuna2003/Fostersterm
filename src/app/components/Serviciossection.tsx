
import { useEffect, useRef } from "react";
import {
  Microscope,
  FlaskConical,
  Syringe,
  CheckCircle2,
} from "lucide-react";

import { ImageWithFallback } from "./figma/ImageWithFallback";

// ── Fade-in hook ──────────────────────────────────────────────────────────────
function useFadeIn(
  direction: "up" | "left" | "right" = "up",
) {
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

// ── Props ─────────────────────────────────────────────────────────────────────
interface Props {
  lang?: "es" | "en";
}

// ── Component ─────────────────────────────────────────────────────────────────
export function ServiciosSection({
  lang = "es",
}: Props) {
  const content = {
    es: {
      badge: "Nuestros Servicios",

      title: (
        <>
          Un Socio Estratégico,{" "} 
          <span style={{ color: "var(--brand-green)" }}>
            No Un Proveedor Más
          </span> 
        </>
      ),

      subtitle:
        "Transformamos la atención al paciente en una oportunidad de crecimiento para su práctica",

      imageTitle: "Foster Stern Allergy",

      imageDesc:
        "Atención especializada en alergia dentro de su clínica",

      cards: [
        {
          delay: "delay-2",
          icon: Microscope,
          title: "Implementación del Programa de Alergia",
          desc:
            "Diseñamos e implementamos pruebas e inmunoterapia en su clínica, con protocolos alineados a las mejores prácticas.",

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
          desc:
            "Asignamos personal clínico en alergias directamente en sus instalaciones, coordinado con su agenda. Usted no gestiona, usted crece.",

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
          desc:
            "Gestionamos la facturación y documentación de los servicios de alergia. Su equipo se enfoca en la atención; nosotros en la operación.",

          points: [
            "Gestión completa de facturación",
            "Documentación y cumplimiento normativo",
            "Reportes periódicos de rendimiento",
          ],
        },
      ],
    },

    en: {
      badge: "Our Services",

      title: (
        <>
          A Strategic Partner,{" "}
          <span style={{ color: "var(--brand-green)" }}>
            Not Just Another Provider
          </span>
        </>
      ),

      subtitle:
        "We transform patient care into a growth opportunity for your practice",

      imageTitle: "Foster Stern Allergy",

      imageDesc:
        "Specialized allergy care directly within your clinic",

      cards: [
        {
          delay: "delay-2",
          icon: Microscope,
          title: "Allergy Program Implementation",
          desc:
            "We design and implement allergy testing and immunotherapy services within your clinic using industry-leading protocols.",

          points: [
            "In-house testing and immunotherapy",
            "Standardized clinical protocols",
            "Fast and seamless implementation",
          ],
        },

        {
          delay: "delay-3",
          icon: FlaskConical,
          title: "Specialized Clinical Personnel",
          desc:
            "We assign allergy-trained clinical personnel directly within your facilities, coordinated with your schedule.",

          points: [
            "Allergy-trained personnel",
            "No hiring or staff training required",
            "Professional and reliable presence",
          ],
        },

        {
          delay: "delay-4",
          icon: Syringe,
          title: "Complete Billing & Operational Support",
          desc:
            "We manage billing and documentation for allergy services so your team can focus on patient care.",

          points: [
            "Complete billing management",
            "Documentation and compliance",
            "Performance reporting",
          ],
        },
      ],
    },
  };

  const t = content[lang];

  const titleRef = useFadeIn();
  const imgRef = useFadeIn("right");

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
        style={{
          background:
            "radial-gradient(circle, #054A5B 0%, transparent 70%)",
        }}
      />

      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-24 -right-24 w-80 h-80 rounded-full opacity-20 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, var(--brand-green) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* HEADER */}
        <div
          ref={titleRef}
          className="fade-in text-center mb-14 md:mb-20"
        >
          <span
            className="inline-block text-sm md:text-base lg:text-xl font-bold tracking-[0.25em] uppercase mb-4 px-4 py-1.5 rounded-full"
            style={{
              color: "var(--brand-green)",
              backgroundColor: "rgba(0,160,110,0.09)",
            }}
          >
            {t.badge}
          </span>

          <h2
            className="text-3xl md:text-4xl lg:text-5xl mb-5 leading-tight"
            style={{
              fontFamily: "'Nunito Sans', sans-serif",
              color: "var(--brand-primary)",
            }}
          >
            {t.title}
          </h2>

         <p
    className="text-xl md:text-2xl lg:text-3xl font-bold max-w-3xl mx-auto leading-relaxed"
  style={{ color: "#054A5B" }}
>
  {t.subtitle}
</p>
        </div>

        {/* LAYOUT */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-14 items-stretch">

          {/* IMAGE */}
          <div
            ref={imgRef}
            className="fade-in from-right lg:w-5/12 flex-shrink-0"
          >
            <div
              className="relative w-full h-72 md:h-96 lg:h-full min-h-[500px] rounded-3xl overflow-hidden shadow-2xl"
              style={{ backgroundColor: "#054A5B" }}
            >
              <ImageWithFallback
                src="/Fostersterm/1.1.png"
                alt="Foster Stern Allergy Clinical Space"
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* Glassmorphism caption */}
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
                  className="text-lg font-bold tracking-[0.2em] uppercase mb-1"
                  style={{ color: "#00000" }}
                >
                  {t.imageTitle}
                </p>

                <p
                  className="text-white text-xl font-semibold leading-snug"
                  style={{
                    fontFamily: "'Nunito Sans', sans-serif",
                  }}
                >
                  {t.imageDesc}
                </p>
              </div>
            </div>
          </div>

          {/* CARDS */}
          <div className="lg:w-7/12 flex flex-col gap-7 md:gap-5">
            {t.cards.map((card, idx) => {
              const Icon = card.icon;

              return (
                <div
                  key={idx}
                  ref={cardRefs[idx]}
                  className={`fade-in ${card.delay} group relative overflow-hidden rounded-2xl transition-all duration-500 hover:-translate-y-1`}
                  style={{
                    background: "rgba(255, 255, 255, 0.45)",
                    backdropFilter: "blur(20px)",
                    WebkitBackdropFilter: "blur(20px)",
                    border:
                      "1px solid rgba(255, 255, 255, 0.6)",

                    boxShadow:
                      "0 10px 32px -4px rgba(5, 74, 91, 0.08), inset 0 1px 2px rgba(255, 255, 255, 0.5)",
                  }}
                >
                  {/* Shimmer */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                    style={{
                      background:
                        "linear-gradient(115deg, transparent 30%, rgba(255,255,255,0.4) 50%, transparent 70%)",
                    }}
                  />

                  {/* Accent bar */}
                  <div
                    className="absolute left-0 top-4 bottom-4 w-[3.5px] rounded-full"
                    style={{
                      backgroundColor: "var(--brand-green)",
                    }}
                  />

                  <div className="relative z-10 flex gap-6 p-[34px] md:p-9">

                    <div className="flex-1 min-w-0">

                      <h3
                        className="text-2xl md:text-2xl font-bold mb-4 leading-tight"
                        style={{
                          fontFamily:
                            "'Nunito Sans', sans-serif",

                          color: "var(--brand-primary)",
                        }}
                      >
                        {card.title}
                      </h3>

    <p
  className="
    text-[20px]
    md:text-[22px]
    lg:text-xl
    leading-[1.8]
    mb-6
    font-bold
  "
  style={{
    color: "var(--brand-primary)",
  }}
>
  {card.desc}
</p>

                      {/* Chips */}
                      <ul className="flex flex-wrap gap-2">
                        {card.points.map((txt, i) => (
                          <li
                            key={i}
                            className="flex items-center gap-2 text-lg font-semibold px-4 py-2 rounded-full"
                            style={{
                              background:
                                "rgba(5, 74, 91, 0.04)",

                              border:
                                "1px solid rgba(5, 74, 91, 0.07)",

                              color: "var(--brand-primary)",
                            }}
                          >
                            <CheckCircle2
                              className="w-3.5 h-3.5 flex-shrink-0"
                              style={{
                                color: "var(--brand-green)",
                              }}
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