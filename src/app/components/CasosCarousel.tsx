import React, { useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";

const casos = [
  {
    id: 1,
    clinica: "South Florida Family Care",
    ciudad: "Miami, FL",
    imagen:
      "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=1200&q=80",
    resultado: "+$180K ingresos/año",
    descripcion:
      "Integramos el programa de alergia sin contratar personal adicional. En seis meses pasamos de referir el 100% de nuestros pacientes alérgicos a tratarlos íntegramente en nuestra práctica.",
    especialista: "Dr. Robert M. Castillo",
    cargo: "Médico de Atención Primaria",
    iniciales: "RC",
  },
  {
    id: 2,
    clinica: "Pediatric Wellness Group",
    ciudad: "Doral, FL",
    imagen:
      "https://images.unsplash.com/photo-1666214280557-f1b5022eb634?w=1200&q=80",
    resultado: "2x retención de pacientes",
    descripcion:
      "Como pediatras, veíamos a diario niños con rinitis y eccema sin solución efectiva. Con Foster Stern ahora ofrecemos diagnóstico y tratamiento en consultorio. La satisfacción de nuestros pacientes se disparó.",
    especialista: "Dra. Sandra López",
    cargo: "Pediatra — Directora Médica",
    iniciales: "SL",
  },
  {
    id: 3,
    clinica: "Coral Gables Internal Medicine",
    ciudad: "Coral Gables, FL",
    imagen:
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1200&q=80",
    resultado: "Operativo en 12 días",
    descripcion:
      "El proceso de implementación fue sorprendentemente ágil. En menos de dos semanas mi equipo ya realizaba pruebas cutáneas con confianza. El soporte clínico de Foster Stern ha sido impecable.",
    especialista: "Dr. James O'Brien",
    cargo: "Internista",
    iniciales: "JO",
  },
  {
    id: 4,
    clinica: "Brickell Medical Associates",
    ciudad: "Miami, FL",
    imagen:
      "https://images.unsplash.com/photo-1504813184591-01572f98c85f?w=1200&q=80",
    resultado: "+95 pacientes nuevos/mes",
    descripcion:
      "Añadir el servicio de inmunoterapia transformó nuestra práctica. Los pacientes que antes abandonaban el tratamiento ahora lo completan en nuestra clínica, y el flujo de referidos internos creció de forma orgánica.",
    especialista: "Dra. Ana Fernández",
    cargo: "Médica Familiar — Fundadora",
    iniciales: "AF",
  },
  {
    id: 5,
    clinica: "North Broward Primary Care",
    ciudad: "Fort Lauderdale, FL",
    imagen:
      "https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=1200&q=80",
    resultado: "ROI positivo en 5 meses",
    descripcion:
      "No tenía experiencia en alergología. Foster Stern me capacitó, me dio los protocolos y el respaldo de un alergólogo cuando lo necesito. Hoy es el servicio más rentable y mejor valorado de mi práctica.",
    especialista: "Dr. Michael Grant",
    cargo: "Médico General",
    iniciales: "MG",
  },
];

export function CasosCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
    skipSnaps: false,
    dragFree: false,
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  // Autoplay
  useEffect(() => {
    if (!emblaApi) return;

    const autoplay = setInterval(() => {
      emblaApi.scrollNext();
    }, 5000);

    return () => clearInterval(autoplay);
  }, [emblaApi]);

  return (
    <section
      className="py-16 md:py-24 overflow-hidden"
      style={{ backgroundColor: "var(--brand-bg)" }}
    >
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-12 px-4">

          <span
            className="text-xs uppercase tracking-[0.25em]"
            style={{ color: "var(--brand-green)" }}
          >
            Médicos que ya lo hicieron
          </span>

          <h2
            className="mt-3 text-3xl md:text-5xl"
            style={{
              fontFamily: "'Source Sans 3', sans-serif",
              color: "var(--brand-primary)",
            }}
          >
            Lo que dicen nuestros socios clínicos
          </h2>

          <p
            className="mt-4 text-sm md:text-base max-w-2xl mx-auto"
            style={{ color: "var(--brand-muted)" }}
          >
            Médicos de atención primaria, pediatras y especialistas que ya ofrecen servicios de alergología en su consultorio con Foster Stern Group.
          </p>
        </div>

        {/* CAROUSEL */}
        <div
          className="overflow-hidden lg:overflow-visible"
          ref={emblaRef}
        >
          <div className="flex gap-5 px-4 md:px-8 lg:px-12">

            {casos.map((caso) => (
              <div
                key={caso.id}
                className="
                  shrink-0
                  w-[88%]
                  sm:w-[72%]
                  md:w-[62%]
                  lg:w-[58%]
                  xl:w-[50%]
                  2xl:w-[46%]
                "
              >
                <div
                  className="
                    relative
                    overflow-hidden
                    rounded-[28px]
                    group
                    transition-all
                    duration-500
                    hover:-translate-y-1
                  "
                >

                  {/* IMAGE */}
                  <div className="relative h-[420px] sm:h-[500px] lg:h-[560px]">

                    <img
                      src={caso.imagen}
                      alt={caso.clinica}
                      className="
                        w-full
                        h-full
                        object-cover
                        transition-transform
                        duration-700
                        group-hover:scale-105
                      "
                    />

                    {/* OVERLAY */}
                    <div
                      className="absolute inset-0"
                      style={{
                        background: `
                          linear-gradient(
                            to top,
                            rgba(8,27,54,0.92) 0%,
                            rgba(8,27,54,0.55) 45%,
                            rgba(8,27,54,0.15) 100%
                          )
                        `,
                      }}
                    />

                    {/* CONTENT */}
                    <div
                      className="
                        absolute
                        inset-0
                        flex
                        flex-col
                        justify-end
                        p-6
                        sm:p-8
                        lg:p-10
                      "
                    >

                      {/* RESULT */}
                      <span
                        className="
                          inline-flex
                          self-start
                          items-center
                          px-4
                          py-1.5
                          rounded-full
                          text-white
                          text-xs
                          sm:text-sm
                          font-medium
                          mb-4
                        "
                        style={{
                          backgroundColor: "var(--brand-green)",
                        }}
                      >
                        {caso.resultado}
                      </span>

                      {/* TITLE */}
                      <h3
                        className="
                          text-xl
                          sm:text-2xl
                          lg:text-3xl
                          leading-tight
                          text-white
                          max-w-[90%]
                        "
                        style={{
                          fontFamily: "'Source Sans 3', sans-serif",
                        }}
                      >
                        {caso.clinica}
                      </h3>

                      {/* CITY */}
                      <p
                        className="mt-2 text-sm"
                        style={{
                          color: "var(--brand-secondary)",
                        }}
                      >
                        {caso.ciudad}
                      </p>

                      {/* DESCRIPTION */}
                      <p
                        className="
                          mt-5
                          text-sm
                          sm:text-base
                          leading-relaxed
                          text-white/90
                          max-w-[95%]
                        "
                      >
                        {caso.descripcion}
                      </p>

                      {/* DOCTOR */}
                      <div className="flex items-center gap-4 mt-8">

                        <div
                          className="
                            w-12
                            h-12
                            rounded-full
                            flex
                            items-center
                            justify-center
                            text-white
                            font-bold
                            text-sm
                            shrink-0
                          "
                          style={{
                            backgroundColor: "var(--brand-green)",
                          }}
                        >
                          {caso.iniciales}
                        </div>

                        <div className="min-w-0">

                          <p
                            className="
                              text-white
                              text-sm
                              sm:text-base
                              truncate
                            "
                          >
                            {caso.especialista}
                          </p>

                          <p
                            className="
                              text-xs
                              sm:text-sm
                              truncate
                            "
                            style={{
                              color: "var(--brand-secondary)",
                            }}
                          >
                            {caso.cargo}
                          </p>

                        </div>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}

          </div>
        </div>

        {/* CONTROLS */}
        <div
          className="
            flex
            justify-center
            md:justify-end
            gap-3
            mt-10
            px-4
            md:px-10
          "
        >

          <button
            onClick={scrollPrev}
            aria-label="Anterior"
            className="
              w-12
              h-12
              rounded-full
              border
              flex
              items-center
              justify-center
              transition-all
              duration-300
              hover:scale-105
              active:scale-95
            "
            style={{
              borderColor: "rgba(13,59,127,0.15)",
              color: "var(--brand-primary)",
              backgroundColor: "rgba(255,255,255,0.7)",
              backdropFilter: "blur(10px)",
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
            onClick={scrollNext}
            aria-label="Siguiente"
            className="
              w-12
              h-12
              rounded-full
              border
              flex
              items-center
              justify-center
              transition-all
              duration-300
              hover:scale-105
              active:scale-95
            "
            style={{
              borderColor: "rgba(13,59,127,0.15)",
              color: "var(--brand-primary)",
              backgroundColor: "rgba(255,255,255,0.7)",
              backdropFilter: "blur(10px)",
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