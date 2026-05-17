import React, { useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";

const casos = [
  {
    id: 1,
    clinica: "Clínica del Valle",
    ciudad: "Monterrey, MX",
    imagen:
      "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=1200&q=80",
    resultado: "+65% ingresos",
    descripcion:
      "Tras integrar nuestro programa de alergias, la clínica duplicó su cartera de pacientes en menos de 8 meses.",
    especialista: "Dr. Carlos Mendoza",
    cargo: "Director Médico",
    iniciales: "CM",
  },
  {
    id: 2,
    clinica: "Centro Médico Integral",
    ciudad: "Guadalajara, MX",
    imagen:
      "https://images.unsplash.com/photo-1666214280557-f1b5022eb634?w=1200&q=80",
    resultado: "3x pacientes nuevos",
    descripcion:
      "Con el soporte de Foster Stern, lanzamos el departamento de alergología en tiempo récord.",
    especialista: "Dra. Laura Pérez",
    cargo: "Subdirectora Clínica",
    iniciales: "LP",
  },
  {
    id: 3,
    clinica: "Salud Familiar Querétaro",
    ciudad: "Querétaro, MX",
    imagen:
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1200&q=80",
    resultado: "90% satisfacción",
    descripcion:
      "Nuestros pacientes destacan la calidad y rapidez del diagnóstico y atención.",
    especialista: "Dr. Andrés Torres",
    cargo: "Médico General",
    iniciales: "AT",
  },
  {
    id: 4,
    clinica: "Clínica BioSalud",
    ciudad: "CDMX, MX",
    imagen:
      "https://images.unsplash.com/photo-1504813184591-01572f98c85f?w=1200&q=80",
    resultado: "+120 pacientes/mes",
    descripcion:
      "Integramos pruebas de alergia en consultorio y escalamos rápidamente el servicio.",
    especialista: "Dra. Patricia Ruiz",
    cargo: "Fundadora",
    iniciales: "PR",
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
            Resultados reales
          </span>

          <h2
            className="mt-3 text-3xl md:text-5xl"
            style={{
              fontFamily: "'Source Sans 3', sans-serif",
              color: "var(--brand-primary)",
            }}
          >
            Casos de Éxito
          </h2>

          <p
            className="mt-4 text-sm md:text-base max-w-2xl mx-auto"
            style={{ color: "var(--brand-muted)" }}
          >
            Clínicas que transformaron su práctica médica con Foster Stern Group.
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