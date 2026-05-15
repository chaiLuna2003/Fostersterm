import { useState, useEffect, useRef, useCallback } from "react";

const casos = [
  {
    id: 1,
    clinica: "Clínica del Valle",
    ciudad: "Monterrey, MX",
    imagen: "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=800&q=80",
    resultado: "+65% ingresos",
    descripcion: "Tras integrar nuestro programa de alergias, la clínica duplicó su cartera de pacientes en menos de 8 meses y posicionó el servicio como su área de mayor crecimiento.",
    especialista: "Dr. Carlos Mendoza",
    cargo: "Director Médico",
    iniciales: "CM",
  },
  {
    id: 2,
    clinica: "Centro Médico Integral",
    ciudad: "Guadalajara, MX",
    imagen: "https://images.unsplash.com/photo-1666214280557-f1b5022eb634?w=800&q=80",
    resultado: "3x pacientes nuevos",
    descripcion: "Con el soporte de Foster Stern, lanzamos el departamento de alergología en tiempo récord. Hoy es el servicio más solicitado de nuestra clínica.",
    especialista: "Dra. Laura Pérez",
    cargo: "Subdirectora Clínica",
    iniciales: "LP",
  },
  {
    id: 3,
    clinica: "Salud Familiar Querétaro",
    ciudad: "Querétaro, MX",
    imagen: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80",
    resultado: "90% satisfacción",
    descripcion: "Nuestros pacientes destacan la calidad y rapidez del diagnóstico. Foster Stern nos dio las herramientas y capacitación para ofrecer atención de primer nivel.",
    especialista: "Dr. Andrés Torres",
    cargo: "Médico General",
    iniciales: "AT",
  },
  {
    id: 4,
    clinica: "Clínica BioSalud",
    ciudad: "CDMX, MX",
    imagen: "https://images.unsplash.com/photo-1504813184591-01572f98c85f?w=800&q=80",
    resultado: "+120 pacientes/mes",
    descripcion: "Gracias al modelo de Foster Stern integramos pruebas de alergia en consultorio. En 6 meses superamos las 120 consultas mensuales de alergología.",
    especialista: "Dra. Patricia Ruiz",
    cargo: "Fundadora",
    iniciales: "PR",
  },
];

const FADE_DURATION = 350;
const AUTO_INTERVAL = 5000;

export function CasosCarousel() {
  const [current, setCurrent] = useState(0);
  const [visible, setVisible] = useState(true);
  const touchStartX = useRef<number | null>(null);
  const isAnimating = useRef(false);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  const navigate = useCallback((nextIndex: number) => {
    if (isAnimating.current) return;
    isAnimating.current = true;
    setVisible(false);
    setTimeout(() => {
      setCurrent(nextIndex);
      setVisible(true);
      setTimeout(() => { isAnimating.current = false; }, FADE_DURATION);
    }, FADE_DURATION);
  }, []);

  const startTimer = useCallback(() => {
    if (timer.current) clearInterval(timer.current);
    timer.current = setInterval(() => {
      setCurrent((c) => {
        const next = (c + 1) % casos.length;
        if (!isAnimating.current) {
          isAnimating.current = true;
          setVisible(false);
          setTimeout(() => {
            setCurrent(next);
            setVisible(true);
            setTimeout(() => { isAnimating.current = false; }, FADE_DURATION);
          }, FADE_DURATION);
        }
        return c;
      });
    }, AUTO_INTERVAL);
  }, []);

  useEffect(() => {
    startTimer();
    return () => { if (timer.current) clearInterval(timer.current); };
  }, [startTimer]);

  const prev = () => {
    startTimer();
    navigate((current - 1 + casos.length) % casos.length);
  };

  const next = () => {
    startTimer();
    navigate((current + 1) % casos.length);
  };

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) diff > 0 ? next() : prev();
    touchStartX.current = null;
  };

  const caso = casos[current];

  return (
    <section className="py-20 overflow-hidden" style={{ backgroundColor: "#F0F6FB" }}>
      <div className="max-w-7xl mx-auto px-[10px]">

        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-xs uppercase tracking-widest" style={{ color: "#238CCC" }}>
            Resultados reales
          </span>
          <h2
            className="text-3xl md:text-4xl mt-2"
            style={{ fontFamily: "'AvantGarde-Demi', sans-serif", color: "#0D3B7F" }}
          >
            Casos de Éxito
          </h2>
          <p className="mt-3 text-base max-w-xl mx-auto" style={{ color: "#898989" }}>
            Clínicas que transformaron su práctica médica con Foster Stern Group.
          </p>
        </div>

        {/* Slide */}
        <div
          className="relative rounded-3xl overflow-hidden"
          style={{ minHeight: "clamp(380px, 50vw, 460px)", userSelect: "none" }}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          {/* Imagen de fondo */}
          <div
            className="absolute inset-0"
            style={{ opacity: visible ? 1 : 0, transition: `opacity ${FADE_DURATION}ms ease` }}
          >
            <img
              src={caso.imagen}
              alt={caso.clinica}
              className="w-full h-full object-cover"
            />
            <div
              className="absolute inset-0"
              style={{ background: "linear-gradient(to right, rgba(13,59,127,0.95) 0%, rgba(13,59,127,0.7) 55%, rgba(13,59,127,0.2) 100%)" }}
            />
          </div>

          {/* Contenido */}
          <div
            className="relative z-10 flex flex-col justify-center px-6 md:px-16 py-10 md:py-14 max-w-2xl"
            style={{ opacity: visible ? 1 : 0, transition: `opacity ${FADE_DURATION}ms ease` }}
          >
            <span
              className="inline-block self-start px-4 py-1 rounded-full text-white text-sm mb-4"
              style={{ backgroundColor: "#238CCC", fontFamily: "'AvantGarde-Demi', sans-serif" }}
            >
              {caso.resultado}
            </span>

            <h3
              className="text-xl md:text-3xl text-white mb-1"
              style={{ fontFamily: "'AvantGarde-Demi', sans-serif" }}
            >
              {caso.clinica}
            </h3>
            <p className="text-sm mb-3" style={{ color: "#B0C4DE" }}>
              {caso.ciudad}
            </p>
            <p className="text-sm md:text-base leading-relaxed text-white/90 mb-6 max-w-lg">
              {caso.descripcion}
            </p>

            <div className="flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
                style={{ backgroundColor: "#238CCC" }}
              >
                {caso.iniciales}
              </div>
              <div>
                <p className="text-white text-sm" style={{ fontFamily: "'AvantGarde-Demi', sans-serif" }}>
                  {caso.especialista}
                </p>
                <p className="text-xs" style={{ color: "#B0C4DE" }}>{caso.cargo}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Flechas */}
        <div className="flex items-center justify-end gap-3 mt-6 pr-2">
          <button
            onClick={prev}
            aria-label="Anterior"
            className="w-11 h-11 rounded-full border flex items-center justify-center transition-all hover:border-[#238CCC] hover:text-[#238CCC]"
            style={{ borderColor: "#B0C4DE", color: "#0D3B7F" }}
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={next}
            aria-label="Siguiente"
            className="w-11 h-11 rounded-full border flex items-center justify-center transition-all hover:border-[#238CCC] hover:text-[#238CCC]"
            style={{ borderColor: "#B0C4DE", color: "#0D3B7F" }}
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