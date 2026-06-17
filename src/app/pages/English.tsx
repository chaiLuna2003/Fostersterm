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
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";

import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Navbar } from "../components/Navbar";
import { useEffect, useState, useRef } from "react";

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
  const svcCard2 = useFadeIn();
  const svcCard3 = useFadeIn();
  const focusedImg = useFadeIn("right");
  const focusedTitle = useFadeIn("left");
  const focusedList = useFadeIn("left");
  const benefitsTitle = useFadeIn();
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
            src="/Fostersterm/fam-foster-bg.png"
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
                        Your success is our success. Transform your clinic with our integrated allergy services — with no upfront investment and backed by our expert team — generating additional revenue within your practice while we grow together.

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
                      src="/Fostersterm/chartUp.webp"
                      alt="Médico revisando paciente con alergia"
                      className="w-full h-[280px] md:h-[380px] lg:h-[540px] object-cover transition-transform duration-700 group-hover:scale-105"
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
                      Your Clinic Deserves a Real Opportunity for Growth
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
                        "Every external referral is revenue your clinic could have retained.",
                        "The demand for allergy testing and immunotherapy continues to grow year after year.",
                        "Implementing these services can seem complex: staffing, equipment, and protocols.",
                        "Your practice risks falling behind while the market continues to move forward.",
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
                            className="text-xl leading-relaxed"
                            style={{
                              color: "var(--brand-muted)",
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
                    className="fade-in from-left relative rounded-3xl overflow-hidden h-[280px] sm:h-[360px] md:h-[460px] lg:h-[650px] group"
                  >
                    <img
                      src="/Fostersterm/image3.png"
                      alt="Grafica con estadisticas altas."
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500 pointer-events-none" />
                    <div
                      className="absolute bottom-0 left-0 right-0 h-24"
                      style={{
                        background:
                          "linear-gradient(to top, rgba(5,74,91,0.88), transparent)",
                      }}
                    />
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
                        How Does the Partnership Work?
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
                          desc: "We provide trained personnel specialized in the services we offer, fully integrated into your clinic’s operations.",
                        },
                        {
                          icon: (
                            <ClipboardList
                              className="w-6 h-6"
                              style={{ color: "var(--brand-green)" }}
                            />
                          ),
                          title: "Billing and Documentation Included",
                          desc: "We handle clinical documentation and billing, reducing the operational burden on your team.",
                        },
                        {
                          icon: (
                            <HeartPulse
                              className="w-6 h-6"
                              style={{ color: "var(--brand-green)" }}
                            />
                          ),
                          title: "Performance Reports and Ongoing Support",
                          desc: "We deliver clear performance reports and provide continuous follow-up as your long-term strategic partner.",
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
                            className="text-lg leading-relaxed"
                            style={{ color: "var(--brand-muted)" }}
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

      {/* ── SERVICES ── */}
      

      <section id="benefits" className="py-20 lg:py-28 bg-white">
  <div className="max-w-7xl mx-auto px-6">
    {/* HEADER */}
    <div
      ref={benefitsTitle}
      className="fade-in max-w-3xl mb-14 lg:mb-20"
    >
      <span
        className="text-base md:text-lg lg:text-xl font-bold tracking-[0.2em] uppercase"
        style={{ color: "var(--brand-green)" }}
      >
        Benefits for Clinics
      </span>

      <h2
  className="text-4xl md:text-5xl lg:text-6xl leading-tight mt-4"
  style={{
    fontFamily: "'Nunito Sans', sans-serif",
    color: "var(--brand-primary)",
  }}
>
  Transforming clinics. Improving lives. Revolutionizing allergy and immunotherapy care services.
</h2>

<p
  className="text-lg md:text-xl mt-6 max-w-2xl leading-relaxed"
  style={{ color: "var(--brand-muted)" }}
>
  We implement a comprehensive allergy care system directly within your clinic, without operational complexity or upfront costs.
</p>
    </div>

    {/* GRID */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
      {[
        {
          number: "01",
          title: "No Upfront Investment",
          desc: "No capital investment is required to implement the allergy sensitivity program in your practice.",
        },
        {
          number: "02",
          title: "No Additional Workload for Your Team",
          desc: "Our specialized staff handles insurance verification, allergy testing, and immunotherapy services.",
        },
        {
          number: "03",
          title: "Additional Monthly Revenue",
          desc: "Expand your medical services and generate recurring revenue for your practice.",
        },
        {
          number: "04",
          title: "Higher Patient Retention",
          desc: "Avoid external referrals and keep more patients within your own clinic.",
        },
        {
          number: "05",
          title: "Insurance-Backed Coverage",
          desc: "Insurance providers already cover these types of services, making implementation and profitability easier.",
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
                className="text-base md:text-lg leading-relaxed max-w-lg"
                style={{ color: "var(--brand-muted)" }}
              >
                {item.desc}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* ── BENEFITS ── */}
      

      {/* ── PROCESS ── */}
      

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
            src="/Fostersterm/1.3.png"
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
    backgroundImage: "url('/Fostersterm/maxresdefault.jpg')",
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
      

      {/* ── FOOTER ── */}
      <footer className="bg-white border-t" style={{ borderColor: "var(--brand-secondary)" }}>
        <div className="max-w-7xl mx-auto px-6 py-14">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
            <div className="flex flex-col gap-5">
              <ImageWithFallback src="/Fostersterm/LogoFS.png" alt="Foster Stern Group" className="h-24 w-auto object-contain" />
              <p className="text-sm leading-relaxed" style={{ color: "var(--brand-muted)", fontFamily: "'Nunito Sans', sans-serif" }}>
                Your success is our success. Transform your clinic with integrated allergy services: no upfront investment, no risk, and backed by expert professionals. We grow together.
              </p>
              <div className="flex items-center gap-3 mt-1">
                {[
                  { label: "Twitter", path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" },
                  { label: "Facebook", path: "M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" },
                  { label: "YouTube", path: "M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 00-1.95 1.96A29 29 0 001 12a29 29 0 00.46 5.58a2.78 2.78 0 001.95 1.95C5.12 20 12 20 12 20s6.88 0 8.59-.47a2.78 2.78 0 001.95-1.95A29 29 0 0023 12a29 29 0 00-.46-5.58zM9.75 15.02V8.98L15.5 12z" },
                  { label: "Instagram", path: "M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z M4 6a2 2 0 100-4 2 2 0 000 4z" },
                ].map(({ label, path }) => (
                  <a key={label} href="#" aria-label={label} className="w-9 h-9 rounded-full flex items-center justify-center transition-all hover:scale-110" style={{ backgroundColor: "var(--brand-green)" }}>
                    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white"><path d={path} /></svg>
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-base font-bold mb-5" style={{ color: "var(--brand-primary)", fontFamily: "'Nunito Sans', sans-serif" }}>Information</h4>
              <ul className="space-y-3">
                {[
                  { label: "About Us", href: "/nosotros" },
                  { label: "Services", href: "#services" },
                  { label: "FAQ", href: "#faq" },
                  { label: "Contact", href: "#contact" },
                ].map(({ label, href }) => (
                  <li key={label}>
                    <a href={href} className="footer-link text-sm flex items-center gap-2" style={{ color: "var(--brand-muted)", fontFamily: "'Nunito Sans', sans-serif" }}>
                      <svg viewBox="0 0 24 24" className="w-3 h-3 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-base font-bold mb-5" style={{ color: "var(--brand-primary)", fontFamily: "'Nunito Sans', sans-serif" }}>Contact Us</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ backgroundColor: "var(--brand-light)" }}>
                    <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="currentColor" style={{ color: "var(--brand-green)" }}><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" /></svg>
                  </div>
                  <span className="text-sm leading-relaxed" style={{ color: "var(--brand-muted)", fontFamily: "'Nunito Sans', sans-serif" }}>7480 SW 40th Street<br />Suite 850<br />Miami, FL 33155</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "var(--brand-light)" }}>
                    <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="currentColor" style={{ color: "var(--brand-green)" }}><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" /></svg>
                  </div>
                  <span className="text-sm" style={{ color: "var(--brand-muted)", fontFamily: "'Nunito Sans', sans-serif" }}>+1 (786) 977-3733</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "var(--brand-light)" }}>
                    <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="currentColor" style={{ color: "var(--brand-green)" }}><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" /></svg>
                  </div>
                  <span className="text-sm" style={{ color: "var(--brand-muted)", fontFamily: "'Nunito Sans', sans-serif" }}>info@fosterstern.com</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-base font-bold mb-5" style={{ color: "var(--brand-primary)", fontFamily: "'Nunito Sans', sans-serif" }}>Business Hours</h4>
              <div className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ backgroundColor: "var(--brand-light)" }}>
                  <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="currentColor" style={{ color: "var(--brand-green)" }}><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm.5 5v5.25l4.5 2.67-.75 1.23L11 13V7h1.5z" /></svg>
                </div>
                <div>
                  <p className="text-sm font-semibold" style={{ color: "var(--brand-primary)" }}>9:00AM – 5:00PM, Monday – Friday</p>
                  <p className="text-sm mt-1" style={{ color: "var(--brand-muted)" }}>We attend during office hours</p>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t pt-6 flex flex-col md:flex-row items-center justify-between gap-3" style={{ borderColor: "var(--brand-secondary)" }}>
            <p className="text-sm" style={{ color: "var(--brand-muted)" }}>&copy; 2026 Foster Stern Group. All rights reserved.</p>
            <div className="flex gap-4">
              <a href="#" className="footer-link text-sm" style={{ color: "var(--brand-muted)", fontFamily: "'Nunito Sans', sans-serif" }}>Privacy</a>
              <a href="#" className="footer-link text-sm" style={{ color: "var(--brand-muted)", fontFamily: "'Nunito Sans', sans-serif" }}>Terms</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}