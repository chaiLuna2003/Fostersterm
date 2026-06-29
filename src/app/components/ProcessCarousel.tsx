
import { useState, useRef, useEffect } from "react";

interface Props {
  lang?: "es" | "en";
}

export function ProcessCarousel({
  lang = "es",
}: Props) {
  const content = {
    es: {
      title: "El proceso de integración de la alianza en su clínica",

      prev: "Anterior",
      next: "Siguiente",

      slides: [
        {
          id: 1,
          imagen: "/ClinicalSpaceFSA.png",
          texto:
            "Evaluamos su práctica y diseñamos el programa de alergia a medida para su clínica.",
        },
        {
          id: 2,
          imagen: "/2.png",
          texto:
            "Asignamos personal entrenado en alergias que opera directamente en su consultorio.",
        },
        {
          id: 3,
          imagen: "/1.png",
          texto:
            "Implementamos protocolos clínicos, documentación y flujo de facturación desde el día uno.",
        },
        {
          id: 4,
          imagen: "/4.png",
          texto:
            "Lanzamos el servicio de alergia con soporte operativo y clínico continuo.",
        },
        {
          id: 5,
          imagen: "/5.png",
          texto:
            "Monitoreamos el rendimiento del programa con reportes mensuales y optimización de resultados.",
        },
      ],
    },

    en: {
      title: "The Partnership Integration Process Within Your Clinic",

      prev: "Previous",
      next: "Next",

      slides: [
        {
          id: 1,
          imagen: "/ClinicalSpaceFSA.png",
          texto:
            "We evaluate your practice and design a customized allergy program for your clinic.",
        },
        {
          id: 2,
          imagen: "/2.png",
          texto:
            "We assign allergy-trained personnel who operate directly within your office.",
        },
        {
          id: 3,
          imagen: "/1.png",
          texto:
            "We implement clinical protocols, documentation, and billing workflows from day one.",
        },
        {
          id: 4,
          imagen: "/4.png",
          texto:
            "We launch the allergy service with continuous clinical and operational support.",
        },
        {
          id: 5,
          imagen: "/5.png",
          texto:
            "We monitor program performance through monthly reporting and continuous optimization.",
        },
      ],
    },
  };

  const t = content[lang];

  const [current, setCurrent] = useState(0);
  const touchStartX = useRef<number | null>(null);

  // Responsive cards
  const [visible, setVisible] = useState(3);

  useEffect(() => {
    const update = () =>
      setVisible(window.innerWidth < 640 ? 1 : window.innerWidth < 1024 ? 2 : 3);

    update();

    window.addEventListener("resize", update);

    return () => window.removeEventListener("resize", update);
  }, []);

  const max = t.slides.length - visible;

  const prev = () => setCurrent((c) => Math.max(c - 1, 0));
  const next = () => setCurrent((c) => Math.min(c + 1, max));

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;

    const diff =
      touchStartX.current - e.changedTouches[0].clientX;

    if (Math.abs(diff) > 40) {
      diff > 0 ? next() : prev();
    }

    touchStartX.current = null;
  };

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        {/* HEADER */}
        <h2
          className="text-3xl md:text-4xl mb-12"
          style={{
            fontFamily: "'Source Sans 3', sans-serif",
            fontWeight: 700,
            color: "var(--brand-primary)",
          }}
        >
          {t.title}
        </h2>

        {/* TRACK */}
        <div
          className="overflow-hidden"
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          <div
            className="flex gap-5 transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(calc(-${current} * (100% / ${visible}) - ${current} * 20px / ${visible}))`,
            }}
          >
            {t.slides.map((slide, i) => (
              <div
                key={slide.id}
                className="flex-shrink-0 rounded-2xl overflow-hidden border border-gray-100 shadow-sm"
                style={{
                  width: `calc(${100 / visible}% - ${(visible - 1) * 20 / visible}px)`,
                }}
              >
                {/* IMAGE */}
                <div
                  className="relative"
                  style={{ paddingBottom: "75%" }}
                >
                  <img
                    src={slide.imagen}
                    alt={slide.texto}
                    className="absolute inset-0 w-full h-full object-cover"
                    loading="lazy"
                  />

                  {/* NUMBER */}
                  <div
                    className="absolute top-3 left-3 w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold"
                    style={{
                      backgroundColor: "var(--brand-green)",
                    }}
                  >
                    {i + 1}
                  </div>
                </div>

                {/* TEXT */}
                <div className="p-5">
                  <p
                    className="text-xl leading-snug"
                    style={{
                      color: "var(--brand-primary)",
                      fontFamily: "'Source Sans 3', sans-serif",
                      fontWeight: 600,
                    }}
                  >
                    {slide.texto}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* BUTTONS */}
        <div className="flex items-center justify-end gap-3 mt-6">
          <button
            onClick={prev}
            disabled={current === 0}
            aria-label={t.prev}
            className="w-11 h-11 rounded-full border flex items-center justify-center transition-all hover:border-[var(--brand-green)] hover:text-[var(--brand-green)] disabled:opacity-30 disabled:cursor-not-allowed"
            style={{
              borderColor: "var(--brand-secondary)",
              color: "var(--brand-primary)",
            }}
          >
            <svg
              viewBox="0 0 24 24"
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={next}
            disabled={current === max}
            aria-label={t.next}
            className="w-11 h-11 rounded-full border flex items-center justify-center transition-all hover:border-[var(--brand-green)] hover:text-[var(--brand-green)] disabled:opacity-30 disabled:cursor-not-allowed"
            style={{
              borderColor: "var(--brand-secondary)",
              color: "var(--brand-primary)",
            }}
          >
            <svg
              viewBox="0 0 24 24"
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}

