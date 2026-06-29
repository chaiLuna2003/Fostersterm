import {
  Microscope,
  FlaskConical,
  Syringe,
  CheckCircle2,
  Users,
  Clock,
  Shield,
  ArrowRight,
  ClipboardList,
  Network,
  HeartPulse,
  DollarSign,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";

import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Navbar } from "../components/Navbar";
import { FAQItem } from "../components/FAQItem";
import { AlianzaImplementacion } from "../components/AlianzaImplementacion";
import { ProcessCarousel } from "../components/ProcessCarousel";
import { ServiciosSection } from "../components/ServiciosSection";
import { useEffect, useState, useRef } from "react";
import { ContactForm } from "../components/Contactform";
import Footer from "../components/footer";
import AnimatedWord from "../components/AnimatedWord";

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

export default function English() {
  const heroCard1 = useFadeIn();
  const heroCard2 = useFadeIn();
  const svcTitle = useFadeIn();
  const svcCard1 = useFadeIn();
  const faqTitle = useFadeIn();
const faqItems = useFadeIn("left");
  const svcCard2 = useFadeIn();
  const svcCard3 = useFadeIn();
  const focusedImg = useFadeIn("right");
  const focusedTitle = useFadeIn("left");
  const focusedList = useFadeIn("left");
  const benefitsPatientsTitle = useFadeIn();
  const benefitsPatientsGrid = useFadeIn();
  const benefitsTitle = useFadeIn();
  const benefitsTitleLeft = useFadeIn();
  const benefitsLeft = useFadeIn("left");
  const benefitsRight = useFadeIn("right");
  const howImg = useFadeIn("left");
  const howContent = useFadeIn("right");
  const ctaBlock = useFadeIn();
  const contactLeft = useFadeIn("left");

  return (
    <div className="min-h-screen bg-white overflow-x-hidden" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>

      {/* ── HERO ── */}
      <header className="relative overflow-hidden min-h-screen flex flex-col">
        <div className="absolute inset-0 z-0">
          <img
            src="/fam-foster-bg.png"
            alt="Foster Stern Family"
            className="w-full h-full object-cover object-center"
          />
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(315deg, rgba(5,74,91,0.85) 0%, rgba(5,74,91,0.4) 45%, rgba(255,255,255,0) 80%)" }}
          />
        </div>

        {/* ── NAVBAR ── */}
        <Navbar lang="en" />

        {/* Hero Content */}
        <div
                className="relative z-10 flex-1 flex items-center max-w-7xl mx-auto w-full px-4 md:px-10 pb-6 overflow-x-hidden"
                style={{ paddingTop: "clamp(100px, 15vw, 140px)" }}
              >
                <div className="w-full">
                  {/* Text content — centered on mobile/tablet, RIGHT on desktop */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-12 lg:items-center">
                    <div className="lg:col-start-2 flex flex-col gap-5 md:gap-6 max-w-2xl text-center lg:text-right">
                      

                      <h1
                        className="hero-title-shimmer text-3xl md:text-4xl lg:text-4xl leading-tight"
                        
                        style={{
                          fontFamily: "'Nunito Sans', sans-serif",
                          fontWeight: 800,
                          WebkitTextStroke: "0.35px rgba(0,0,0,0.18)",
                        }}
                      >
                        Transform your clinic with our allergy services, with no upfront investment and backed by our expert team.

                      </h1>

                      

                      <div className="flex flex-col sm:flex-row gap-4 mt-2 justify-center lg:justify-end">
                        <a
                          href="#contacto"
                          className="nav-cta px-8 py-4 rounded-2xl text-white text-center font-bold shadow-lg"
                          style={{ backgroundColor: "var(--brand-green)" }}
                        >
                          Schedule a meeting.
                        </a>
                        
                      </div>
                    </div>                    
                  </div>
                </div>
              </div>

        {/* Bottom Floating Info Bar */}
        
      </header>

      {/* ── OPPORTUNITY SECTION ── */}
      <section className="py-16 md:py-20 bg-white overflow-hidden">
              <div className="max-w-7xl mx-auto px-6 md:px-10">
                <div className="flex flex-col lg:flex-row-reverse items-start lg:items-center gap-10 lg:gap-12">
                  <div
                    ref={focusedImg}
                    className="fade-in w-full lg:w-[420px] flex-shrink-0 relative group overflow-hidden rounded-3xl shadow-lg"
                  >
                    <img
                      src="/chartUp.webp"
                      alt="Médico revisando paciente con alergia"
                      className="
    w-full
    h-[280px]
    md:h-[420px]
    lg:h-[620px]
    xl:h-[500px]
    object-cover
    object-[60%_center]
    transition-transform
    duration-700
    group-hover:scale-[1.02]
  "
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500 pointer-events-none rounded-3xl" />
                  </div>

                  <div className="flex-1 flex flex-col gap-5 md:gap-6">
                    <h2
                      ref={focusedTitle}
                      className="fade-in text-4xl md:text-5xl leading-tight"
                      style={{
                        fontFamily: "'Nunito Sans', sans-serif",
                        fontWeight: 700,
                        color: "var(--brand-green)",
                      }}
                    >
                      Your Clinic Deserves a Growth Opportunity
                      {" "}
                        <AnimatedWord
  words={[
     "Growth",
  "Expansion",
  "Scalability",
  "Evolution",
  ]}
/>
                    </h2>

                    <p
                      className="text-lg md:text-xl lg:text-2xl font-semibold"
                      style={{
                        color: "var(--brand-primary)",
                        fontFamily: "'Nunito Sans', sans-serif",
                      }}
                    >
                      Many medical practices lose revenue by not offering in-house allergy services:
                    </p>

                    <ul ref={focusedList} className="fade-in space-y-6">
                      {[
                        "Every external referral is revenue your clinic could have captured.",
                        "The demand for allergy testing and immunotherapy grows year after year.",
                        "Your practice stops growing while the market moves forward without you.",
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-4">
                          <div
                            className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                            style={{
                              backgroundColor: "var(--brand-light)",
                              border: "1.5px solid var(--brand-green)",
                            }}
                          >
                            <span
                              className="w-2 h-2 rounded-full"
                              style={{ backgroundColor: "var(--brand-green)" }}
                            />
                          </div>
                          <span
                            className="text-xl font-bold leading-relaxed"
                            style={{
                              color: "054A5B ",
                              fontFamily: "'Nunito Sans', sans-serif",
                            }}
                          >
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </section>

      {/* ── HOW IT WORKS ── */}
      <section className="py-16 md:py-20 bg-white">
              <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
                  <div
                    ref={howImg}
                    className="fade-in from-left relative rounded-3xl overflow-hidden h-[280px] sm:h-[360px] md:h-[460px] lg:h-[800px] group"
                  >
                    <img
                      src="/image3.png"
                      alt="Prueba de alergias"
                      className="
    absolute
    inset-0
    w-full
    h-full
    object-cover
    object-[60%_center]
    transition-transform
    duration-700
    will-change-transform
    group-hover:scale-[1.02]
  "
                    />

                    {/* Overlay hover suave */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500 pointer-events-none" />

                    {/* Card glass */}
                    <div className="absolute bottom-5 left-5 right-5">
                      <div
                        className="
        rounded-2xl
        px-5
        py-4
        md:px-6
        md:py-5
        backdrop-blur-xl
        border
        border-white/20
        bg-white/10
        shadow-2xl
      "
                      >
                        <h3
                          className="
          text-white
          font-semibold
          text-lg
          md:text-2xl
          leading-tight
          max-w-xl
        "
                        >
                          Allergy Test
                        </h3>
                      </div>
                    </div>
                  </div>

                  <div
                    ref={howContent}
                    className="fade-in from-right flex flex-col gap-8"
                  >
                    <div>
                      <h2
                        className="text-4xl md:text-5xl mb-3"
                        style={{
                          fontFamily: "'Nunito Sans', sans-serif",
                          color: "var(--brand-primary)",
                        }}
                      >
                        How Does the Alliance Work?
                      </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
                      {[
                        {
                          icon: (
                            <Users
                              className="w-6 h-6"
                              style={{ color: "var(--brand-green)" }}
                            />
                          ),
                          title: "Trained Staff Assigned to Your Clinic",
                          desc: "We assign trained personnel integrated into your clinic to deliver the services we offer.",
                        },
                    
                    
                        {
                          icon: (
                            <HeartPulse
                              className="w-6 h-6"
                              style={{ color: "var(--brand-green)" }}
                            />
                          ),
                          title: "Periodic Performance Reports",
                          desc: "We deliver monthly reports on your practice's growth results with allergy testing.",
                        },
                      ].map((item) => (
                        <div key={item.title} className="flex flex-col gap-2">
                          <div
                            className="w-12 h-12 rounded-full flex items-center justify-center mb-1"
                            style={{ backgroundColor: "var(--brand-light)" }}
                          >
                            {item.icon}
                          </div>
                          <h3
                            className="text-xl font-bold"
                            style={{
                              fontFamily: "'Nunito Sans', sans-serif",
                              color: "var(--brand-primary)",
                            }}
                          >
                            {item.title}
                          </h3>
                          <p
                            className="text-lg font-bold leading-relaxed"
                            style={{ color: "054A5B" }}
                          >
                            {item.desc}
                          </p>
                          <a
                            href="#contacto"
                            className="text-sm font-semibold underline underline-offset-2 mt-1 hover:opacity-70 transition-opacity"
                            style={{ color: "var(--brand-green)" }}
                          >
                            {item.link}
                          </a>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>


<ServiciosSection lang="en" />



      {/* ── SERVICES ── */}


<section id="beneficios" className="py-20 lg:py-28 bg-white">
              <div className="max-w-7xl mx-auto px-6">
                {/* TOP CONTENT */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center mb-16 lg:mb-24">
                  {/* LEFT TEXT */}
                  <div ref={benefitsTitleLeft} className="fade-in max-w-3xl">
                    {/* LABEL + ICON */}
                    <div className="flex items-center gap-4 mb-6">
                      <div
                        className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0"
                        style={{
                          background: "rgba(16, 185, 129, 0.12)",
                          color: "var(--brand-green)",
                        }}
                      >
                        <DollarSign className="w-7 h-7" strokeWidth={2.5} />
                      </div>

                      <span
                        className="text-base md:text-lg lg:text-xl font-bold tracking-[0.2em] uppercase"
                        style={{ color: "var(--brand-green)" }}
                      >
                        Clinic Benefits
                      </span>
                    </div>

                    <h2
                      className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mt-4"
                      style={{
                        fontFamily: "'Nunito Sans', sans-serif",
                        color: "#0f4c5c", // Un azul oscuro/verdoso similar al de la imagen
                      }}
                    >
                      Transforming <br />
                      clinics. <br />
                      Improving lives. <br />
                      <span style={{ color: "#0f8152" }}>
                        Revolutionizing<br />
                        care.
                      </span>
                    </h2>

                    <p
                      className="text-lg font-bold md:text-xl mt-6 max-w-2xl leading-relaxed"
                      style={{ color: "#000000" }}
                    >
                      We implement a comprehensive allergy services system directly in your clinic, with no operational complexity or upfront costs.
                    </p>
                  </div>

                  {/* RIGHT IMAGE */}
                  <div className="relative w-full h-[320px] md:h-[450px] lg:h-[580px] overflow-hidden rounded-3xl shadow-xl">
                    <img
                      src="/BenefitsClient.png"
                      alt="Doctor atendiendo paciente"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* GRID */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                  {[
                    {
                      number: "01",
                      title: "No Upfront Investment",
                      desc: "No capital is required to implement the allergy sensitivity program in your practice.",
                    },
                    {
                      number: "02",
                      title: "No Additional Burden on Your Team",
                      desc: "Our specialized staff manages insurance verifications, allergy testing, and immunotherapy.",
                    },
                    {
                      number: "03",
                      title: "Additional Monthly Revenue",
                      desc: "Integrate new medical services and generate recurring revenue for your practice.",
                    },
                    {
                      number: "04",
                      title: "Higher Patient Retention",
                      desc: "Avoid external referrals and keep more patients within your own clinic.",
                    },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="group border-b border-neutral-200 pb-8"
                    >
                      <div className="flex items-start gap-5">
                        {/* NUMBER */}
                        <div
                          className="text-sm font-bold mt-1"
                          style={{ color: "var(--brand-green)" }}
                        >
                          {item.number}
                        </div>

                        {/* CONTENT */}
                        <div>
                          <h3
                            className="text-2xl md:text-3xl font-bold mb-3 transition-all duration-300 group-hover:translate-x-1"
                            style={{ color: "var(--brand-primary)" }}
                          >
                            {item.title}
                          </h3>

                          <p
                            className="text-lg font-bold md:text-lg leading-relaxed max-w-lg"
                            style={{ color: "#000000" }}
                          >
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* BOTTOM CTA CARD */}
                <div className="mt-20">
                  <div className="relative overflow-hidden rounded-[2rem] bg-[#0B5D6E] grid grid-cols-1 lg:grid-cols-2 items-center">
                    {/* LEFT CONTENT */}
                    <div className="p-10 md:p-14 lg:p-16">
                      <h3
                        className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight"
                        style={{
                          fontFamily: "'Nunito Sans', sans-serif",
                          color: "#fff",
                        }}
                      >
                        More Services.
                        <br />
                        Better results.
                      </h3>

                      <p
                        className="mt-6 text-base font-bold md:text-lg leading-relaxed max-w-md"
                        style={{
                          color: "rgba(255,255,255,0.82)",
                        }}
                      >
                        A proven model that drives your clinic's growth while improving patient care.
                      </p>
                    </div>

                    {/* RIGHT IMAGE */}
                    <div className="relative h-[260px] md:h-[340px] lg:h-full min-h-[320px]">
                      <img
                        src="/image.png"
                        alt="Hospital moderno"
                        className="absolute inset-0 w-full h-full object-cover"
                      />

                      {/* OPTIONAL OVERLAY */}
                      <div className="absolute inset-0 bg-gradient-to-l from-transparent to-black/10"></div>
                    </div>
                  </div>
                </div>
              </div>
            </section>




      <section
              id="beneficios-pacientes"
              className="py-20 lg:py-28 bg-white"
            >
              <div className="max-w-7xl mx-auto px-6">
                {/* TOP CONTENT */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center mb-16 lg:mb-24">
                  {/* LEFT TEXT */}
                  {/* LEFT IMAGE */}
                  <div className="relative w-full h-[320px] md:h-[450px] lg:h-[580px] overflow-hidden rounded-3xl shadow-xl order-1 lg:order-1">
                    <img
                      src="/5.1.png"
                      alt="Doctor atendiendo paciente"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* RIGHT TEXT */}
                  <div
                    ref={benefitsTitle}
                    className="fade-in max-w-3xl order-2 lg:order-2"
                  >
                    {/* LABEL + ICON */}
                    <div className="flex items-center gap-4 mb-6">
                      <span
                        className="text-base md:text-lg lg:text-xl font-bold tracking-[0.2em] uppercase"
                        style={{ color: "var(--brand-green)" }}
                      >
                        Patient Benefits
                      </span>
                    </div>

                    <h2
                      className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mt-4"
                      style={{
                        fontFamily: "'Nunito Sans', sans-serif",
                        color: "#0f4c5c",
                      }}
                    >
                      More accessible and effective specialized allergy care.
                    </h2>

                    <p
                      className="text-lg font-bold md:text-xl mt-6 max-w-2xl leading-relaxed"
                      style={{ color: "#000000" }}
                    >
                      Our program allows patients to receive allergy testing and treatment directly at the same clinic where they already receive their routine medical care.
                    </p>
                  </div>
                </div>

                {/* GRID */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                  {[
                    {
                      number: "01",
                      title: "Fast and Safe Allergy Testing",
                      desc: "We quickly, accurately, and efficiently identify the specific triggers behind allergic reactions. A completely safe process that gives patients the confidence to take action with certainty.",
                      featured: true, // Marcamos este elemento para romper la simetría de forma intencional
                    },
                    {
                      number: "02",
                      title: "Better Quality of Life",
                      desc: "Immunotherapy strengthens the immune system's response against most allergens.",
                    },
                    {
                      number: "03",
                      title: "Treating the Real Cause",
                      desc: "It treats the specific cause of the allergic disease instead of just masking the symptoms.",
                    },
                    {
                      number: "04",
                      title: "More Services in a Single Clinic",
                      desc: "Patients receive comprehensive care and more medical services in the same location.",
                    },
                    {
                      number: "05",
                      title: "Insurance Coverage",
                      desc: "La mayoría de las compañías de seguros cubren tratamientos de inmunoterapia.",
                    },
                    
                    {
                      number: "06",
                      title: "Immunotherapy Treatment",
                      desc: "We progressively strengthen the immune system, enabling the body to tolerate allergens in the long term.",
                    },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="group border-b border-neutral-200 pb-8"
                    >
                      <div className="flex items-start gap-5">
                        {/* NUMBER */}
                        <div
                          className="text-sm font-bold mt-1"
                          style={{ color: "var(--brand-green)" }}
                        >
                          {item.number}
                        </div>

                        {/* CONTENT */}
                        <div>
                          <h3
                            className="text-2xl md:text-3xl font-bold mb-3 transition-all duration-300 group-hover:translate-x-1"
                            style={{ color: "var(--brand-primary)" }}
                          >
                            {item.title}
                          </h3>

                          <p
                            className="text-lg font-bold md:text-lg leading-relaxed max-w-lg"
                            style={{ color: "#000000" }}
                          >
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* BOTTOM CTA CARD */}
              </div>
            </section>

      {/* ── BENEFITS ── */}


<section id="alianza-implementacion">
  <AlianzaImplementacion lang="en" />
</section>

      

      {/* ── PROCESS ── */}



<section id="process">
  <ProcessCarousel lang="en" />
</section>



      {/* ── FAQ ── */}
      <section
  id="faq"
  className="py-20 lg:py-28 overflow-hidden relative"
  style={{
    background:
      "linear-gradient(160deg, #f0f7f9 0%, #ffffff 50%, #eaf5f0 100%)",
  }}
>
  {/* Decorative blobs */}
  <div
    aria-hidden
    className="pointer-events-none absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full opacity-25 blur-3xl"
    style={{
      background:
        "radial-gradient(circle, #054A5B 0%, transparent 70%)",
    }}
  />
  <div
    aria-hidden
    className="pointer-events-none absolute -bottom-28 -left-28 w-80 h-80 rounded-full opacity-15 blur-3xl"
    style={{
      background:
        "radial-gradient(circle, var(--brand-green) 0%, transparent 70%)",
    }}
  />

  <div className="max-w-7xl mx-auto px-6 relative z-10">
    <div className="flex flex-col lg:flex-row gap-14 lg:gap-20 items-start">
      {/* ── Sticky image column ── */}
      <div className="lg:w-5/12 flex-shrink-0 lg:sticky lg:top-10">
        {/* Header above image */}
        <div ref={faqTitle} className="fade-in mb-8">
          <span
            className="inline-block text-base md:text-lg lg:text-xl font-bold tracking-[0.25em] uppercase px-4 py-1.5 rounded-full mb-4"
            style={{
              color: "var(--brand-green)",
              backgroundColor: "rgba(0,129,84,0.09)",
              border: "1px solid rgba(0,129,84,0.18)",
            }}
          >
            Frequently Asked Questions
          </span>

          <h2
            className="text-3xl md:text-4xl lg:text-5xl leading-tight mb-3"
            style={{
              fontFamily: "'Nunito Sans', sans-serif",
              color: "var(--brand-primary)",
            }}
          >
            We Answer Your{" "}
            <span style={{ color: "var(--brand-green)" }}>
              Questions
            </span>
          </h2>

          <p
            className="text-xl leading-relaxed"
            style={{ color: "var(--brand-muted)" }}
          >
            Everything you need to know about our partnership model and allergy services.
          </p>
        </div>

        {/* Image */}
        <div
          ref={faqItems}
          className="fade-in from-left relative rounded-3xl overflow-hidden shadow-xl"
          style={{ height: "380px" }}
        >
          <ImageWithFallback
            src="/1.3.png"
            alt="Foster Stern Allergy — medical team"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Overlay */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to top, rgba(5,74,91,0.82) 0%, rgba(5,74,91,0.08) 60%, transparent 100%)",
            }}
          />
        </div>
      </div>

      {/* ── Accordion column ── */}
      <div className="flex-1 min-w-0 flex flex-col gap-3">
        {[
          {
            question: "How does the partnership model work?",
            answer:
              "Foster Stern helps your medical practice integrate allergy services efficiently, including skin prick allergy testing, treatments, documentation, and administrative support. Our model is designed to improve patient care and create new revenue opportunities without adding significant operational burden to your clinic.",
          },
          {
            question: "Who performs the allergy testing?",
            answer:
              "Allergy testing is performed by properly trained clinical staff, following established protocols and under the appropriate supervision of the medical practice. Foster Stern provides training, operational structure, and guidance to ensure an organized and consistent process.",
          },
          {
            question: "What types of clinics can participate?",
            answer:
              "Medical clinics interested in expanding their services through allergy testing and treatment integration may participate. This can include primary care practices such as internal medicine, pediatrics, family medicine, general practice, and other specialties that treat patients with allergic or respiratory symptoms, such as pulmonologists.",
          },
          {
            question:
              "Is there any upfront cost for the medical practice?",
            answer:
              "Foster Stern offers a flexible model that may vary depending on the needs of the practice and the scope of implementation.",
          },
          {
            question: "How long does implementation take?",
            answer:
              "Implementation time depends on the clinic’s current structure. Foster Stern works to ensure the integration is efficient, organized, and adapted to the operational workflow of each practice.",
          },
          {
            question: "What allergy services are offered?",
            answer:
              "Services may include allergy testing, environmental sensitivity evaluations, coordination of subcutaneous immunotherapy, and operational support for managing the allergy program. Specific services may vary depending on the practice, medical provider, and patient needs.",
          },
          {
            question:
              "How does this program financially benefit the clinic?",
            answer:
              "The program allows the clinic to offer an additional service within its practice, improve patient retention, and create a new revenue stream. By integrating allergy services, the practice can expand its clinical reach while generating sustainable financial opportunities through medically necessary and properly documented services.",
          },
        ].map((item, i) => (
  <FAQItem
  key={i}
  question={item.question}
  answer={item.answer}
  index={i}
/>
        ))}
      </div>
    </div>
  </div>
</section>

      {/* ── CTA ── */}
      <section
  ref={ctaBlock}
  className="fade-in relative py-24 overflow-hidden"
  style={{
    backgroundImage: "url('/maxresdefault.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
  {/* Overlay */}
  <div className="absolute inset-0 bg-black/50" />

  <div className="relative max-w-7xl mx-auto px-6 flex justify-end">
    <div className="max-w-2xl text-white text-right">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
        Bring specialized allergy services directly to your clinic.
      </h2>

      <p className="text-lg md:text-xl opacity-90 mb-8 leading-relaxed">
        We implement allergy care programs, provide specialized staff, and help
        your practice offer more medical services in one place.
      </p>

      <a
        href="#contacto"
        className="inline-block bg-white text-[#054A5B] font-bold px-8 py-4 rounded-xl shadow-xl hover:bg-gray-100 transition-all duration-300 hover:scale-105"
      >
        Schedule a Meeting
      </a>
    </div>
  </div>
</section>

      {/* ── CONTACT ── */}
      
      <section
              id="contact"
              className="py-20 bg-gradient-to-b from-gray-50 to-white"
            >
              <div className="max-w-6xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
                  {/* Left Column - Info */}
                  <div>
                    <h2
                      className="text-4xl md:text-5xl mb-4"
                      style={{
                        fontFamily: "'Nunito Sans', sans-serif",
                        color: "var(--brand-primary)",
                      }}
                    >
                      Ready to Add Allergy Services to Your Practice?
                    </h2>

                    {/* Company badge */}
                    <div
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
                      style={{ backgroundColor: "var(--brand-light)" }}
                    >
                      <span
                        className="w-2 h-2 rounded-full"
                        style={{ backgroundColor: "var(--brand-green)" }}
                      />
                      <span
                        className="text-sm font-bold uppercase tracking-wide"
                        style={{ color: "var(--brand-green)" }}
                      >
                        Leading strategic partner.
                      </span>
                    </div>

                    <p
                      className="text-2xl mb-8 leading-relaxed"
                      style={{ color: "var(--brand-muted)" }}
                    >
                      Partner with Foster Stern Allergy Division and transform your
                      clinic into a referral center for allergy services. We implement 
                      the complete program — staff, protocols, billing, and documentation — so 
                      you can focus solely on growing.
                    </p>

                    {/* MAP */}
                    <div
                      className="overflow-hidden rounded-3xl border shadow-xl bg-white"
                      style={{ borderColor: "var(--brand-secondary)" }}
                    >
                      <iframe
                        title="Foster Stern Group Location"
                        src="https://www.google.com/maps?q=7480+SW+40th+Street+Suite+850+Miami+FL+33155&output=embed"
                        width="100%"
                        height="350"
                        loading="lazy"
                        className="w-full border-0"
                        referrerPolicy="no-referrer-when-downgrade"
                      />
                    </div>

                    {/* ADDRESS */}
                  </div>

                  {/* Right Column - Form */}
                  <ContactForm lang="en" />
                </div>
              </div>
            </section>

      {/* ── FOOTER ── */}
      <Footer language="en"/>
    </div>
  );
}