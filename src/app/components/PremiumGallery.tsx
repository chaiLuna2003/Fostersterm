import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useState } from "react";

const galleryItems = [
  {
    title: "Clínica de Alergia Norte",
    description: "Atención especializada y moderna",
    image:
      "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Centro Médico Integral",
    description: "Tecnología médica avanzada",
    image:
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Unidad Especializada",
    description: "Innovación clínica moderna",
    image:
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Atención Premium",
    description: "Experiencia centrada en pacientes",
    image:
      "https://images.unsplash.com/photo-1538108149393-fbbd81895907?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function PremiumGallery() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    dragFree: true,
  });

  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    emblaApi.on("select", onSelect);
    onSelect();

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  return (
    <section className="py-20 md:py-28 bg-[#f5f7f4] overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 md:px-10">

        {/* HEADER */}
        <div className="flex flex-col lg:flex-row lg:justify-between gap-10 mb-12 md:mb-16">

          <div className="max-w-2xl">
            <span
              className="text-xs md:text-sm uppercase tracking-[0.25em] font-bold"
              style={{ color: "var(--brand-green)" }}
            >
              Galería
            </span>

            <h2 className="text-3xl md:text-4xl mt-3" style={{ fontWeight: 700, color: "var(--brand-primary)" }}>
              Galería de nuestras instalaciones
            </h2>
          </div>

          <p
            className="max-w-md text-sm md:text-base leading-relaxed"
            style={{ color: "var(--brand-muted)" }}
          >
            Espacios modernos y equipados con tecnología de vanguardia
            para ofrecer una experiencia médica excepcional.
          </p>
        </div>

        {/* CAROUSEL */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex touch-pan-y -ml-4 md:-ml-6">

            {galleryItems.map((item, index) => (
              <div
                key={index}
className="
  pl-4
  md:pl-6
  flex-[0_0_84%]
  sm:flex-[0_0_70%]
  md:flex-[0_0_48%]
  lg:flex-[0_0_32%]
  min-w-0
"
              >
                <div
                  className="
                    group
                    relative
                    overflow-hidden
                    rounded-[28px]
                    h-[420px]
                    md:h-[520px]
                    transition-all
                    duration-500
                  "
                >

                  {/* IMAGE */}
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    decoding="async"
                    className="
                      w-full
                      h-full
                      object-cover
                      transition-transform
                      duration-700
                      group-hover:scale-[1.05]
                    "
                  />

                  {/* OVERLAY */}
                  <div
                    className="
                      absolute
                      inset-0
                      bg-gradient-to-t
                      from-black/75
                      via-black/10
                      to-transparent
                    "
                  />

                  {/* CONTENT */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">

                    <div
                      className="
                        backdrop-blur-md
                        rounded-2xl
                        p-4
                        md:p-5
                        border
                        transition-all
                        duration-500
                        group-hover:-translate-y-1
                        group-hover:bg-white/20
                      "
                      style={{
                        background: "rgba(255,255,255,0.12)",
                        borderColor: "rgba(255,255,255,0.18)",
                      }}
                    >
                      <h3 className="text-white text-xl md:text-2xl font-bold">
                        {item.title}
                      </h3>

                      <p className="text-white/80 text-sm mt-2 leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                  </div>

                  {/* SHINE EFFECT */}
                  <div
                    className="
                      absolute
                      inset-0
                      opacity-0
                      group-hover:opacity-100
                      transition-opacity
                      duration-700
                      pointer-events-none
                    "
                    style={{
                      background:
                        "linear-gradient(120deg, transparent 20%, rgba(255,255,255,0.10) 50%, transparent 80%)",
                    }}
                  />

                </div>
              </div>
            ))}

          </div>
        </div>

        {/* FOOTER CONTROLS */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mt-10 md:mt-14">

          {/* INDICATORS */}
          <div className="flex items-center gap-2">

            {galleryItems.map((_, index) => (
              <div
                key={index}
                className={`
                  transition-all duration-500 rounded-full
                  ${
                    selectedIndex === index
                      ? "w-10 h-2 bg-[var(--brand-primary)]"
                      : "w-2 h-2 bg-gray-300"
                  }
                `}
              />
            ))}

          </div>

          {/* BUTTONS */}
          <div className="flex items-center gap-3">

            <button
              onClick={scrollPrev}
              className="
                group
                relative
                w-14
                h-14
                rounded-full
                bg-white
                border
                shadow-sm
                flex
                items-center
                justify-center
                transition-all
                duration-300
                hover:scale-110
                hover:-translate-y-1
                active:scale-95
              "
              style={{
                borderColor: "rgba(0,0,0,0.06)",
              }}
            >
              <ChevronLeft
                className="
                  w-5
                  h-5
                  transition-transform
                  duration-300
                  group-hover:-translate-x-1
                "
                style={{ color: "var(--brand-primary)" }}
              />
            </button>

            <button
              onClick={scrollNext}
              className="
                group
                relative
                w-14
                h-14
                rounded-full
                bg-[var(--brand-primary)]
                text-white
                shadow-lg
                flex
                items-center
                justify-center
                transition-all
                duration-300
                hover:scale-110
                hover:-translate-y-1
                active:scale-95
              "
            >
              <ChevronRight
                className="
                  w-5
                  h-5
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              />
            </button>

          </div>
        </div>
      </div>
    </section>
  );
}