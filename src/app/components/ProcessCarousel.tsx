import { useState, useRef, useEffect } from "react";

const slides = [
  {
    id: 1,
    imagen: "https://images.unsplash.com/photo-1551076805-e1869033e561?w=600&q=80",
    texto: "Consulta inicial y evaluación de necesidades clínicas.",
  },
  {
    id: 2,
    imagen: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80",
    texto: "Instalación de equipos y configuración de protocolos.",
  },
  {
    id: 3,
    imagen: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600&q=80",
    texto: "Capacitación completa del personal médico y administrativo.",
  },
  {
    id: 4,
    imagen: "https://images.unsplash.com/photo-1666214280557-f1b5022eb634?w=600&q=80",
    texto: "Lanzamiento del servicio con soporte especializado continuo.",
  },
  {
    id: 5,
    imagen: "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=600&q=80",
    texto: "Seguimiento mensual y optimización de resultados clínicos.",
  },
];

export function ProcessCarousel() {
  const [current, setCurrent] = useState(0);
  const touchStartX = useRef<number | null>(null);

  // Cuántas cards mostrar según pantalla
  const [visible, setVisible] = useState(3);

  useEffect(() => {
    const update = () => setVisible(window.innerWidth < 640 ? 1 : window.innerWidth < 1024 ? 2 : 3);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const max = slides.length - visible;

  const prev = () => setCurrent((c) => Math.max(c - 1, 0));
  const next = () => setCurrent((c) => Math.min(c + 1, max));

  const onTouchStart = (e: React.TouchEvent) => { touchStartX.current = e.touches[0].clientX; };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) diff > 0 ? next() : prev();
    touchStartX.current = null;
  };

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        {/* Header */}
        <h2
          className="text-3xl md:text-4xl mb-12"
          style={{ fontFamily: "'Source Sans 3', sans-serif", fontWeight: 700, color: "var(--brand-primary)" }}
        >
          Cómo Funciona Nuestro Proceso
        </h2>

        {/* Track */}
        <div
          className="overflow-hidden"
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          <div
            className="flex gap-5 transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(calc(-${current} * (100% / ${visible}) - ${current} * 20px / ${visible}))` }}
          >
            {slides.map((slide, i) => (
              <div
                key={slide.id}
                className="flex-shrink-0 rounded-2xl overflow-hidden border border-gray-100 shadow-sm"
                style={{ width: `calc(${100 / visible}% - ${(visible - 1) * 20 / visible}px)` }}
              >
                {/* Imagen */}
                <div className="relative" style={{ paddingBottom: "75%" }}>
                  <img
                    src={slide.imagen}
                    alt={slide.texto}
                    className="absolute inset-0 w-full h-full object-cover"
                    loading="lazy"
                  />
                  {/* Número */}
                  <div
                    className="absolute top-3 left-3 w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold"
                    style={{ backgroundColor: "var(--brand-green)" }}
                  >
                    {i + 1}
                  </div>
                </div>

                {/* Texto */}
                <div className="p-5">
                  <p
                    className="text-base leading-snug"
                    style={{ color: "var(--brand-primary)", fontFamily: "'Source Sans 3', sans-serif", fontWeight: 600 }}
                  >
                    {slide.texto}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Flechas — mismo estilo que CasosCarousel */}
        <div className="flex items-center justify-end gap-3 mt-6">
          <button
            onClick={prev}
            disabled={current === 0}
            aria-label="Anterior"
            className="w-11 h-11 rounded-full border flex items-center justify-center transition-all hover:border-[var(--brand-green)] hover:text-[var(--brand-green)] disabled:opacity-30 disabled:cursor-not-allowed"
            style={{ borderColor: "var(--brand-secondary)", color: "var(--brand-primary)" }}
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={next}
            disabled={current === max}
            aria-label="Siguiente"
            className="w-11 h-11 rounded-full border flex items-center justify-center transition-all hover:border-[var(--brand-green)] hover:text-[var(--brand-green)] disabled:opacity-30 disabled:cursor-not-allowed"
            style={{ borderColor: "var(--brand-secondary)", color: "var(--brand-primary)" }}
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

      </div>
    </section>
  );
}