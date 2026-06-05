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
            style={{ background: "linear-gradient(135deg, rgba(5,74,91,0.85) 0%, rgba(5,74,91,0.4) 45%, rgba(255,255,255,0) 80%)" }}
          />
        </div>

        {/* ── NAVBAR ── */}
        <Navbar lang="en" />

        {/* Hero Content */}
        <div className="relative z-10 flex-1 flex items-center max-w-7xl mx-auto w-full px-4 md:px-10 pb-6 overflow-x-hidden" style={{ paddingTop: "130px" }}>
          <div className="w-full">
            <div className="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
              <div className="flex flex-col gap-5 md:gap-6 max-w-2xl mx-auto lg:mx-0 text-center lg:text-left">
                <div
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full self-center lg:self-start border"
                  style={{ backgroundColor: "rgba(255,255,255,0.12)", borderColor: "rgba(255,255,255,0.3)" }}
                >
                  <Sparkles className="w-4 h-4 text-white" />
                  <span className="text-sm text-white">Innovative Medical Solutions</span>
                </div>

                <h1
                  className="hero-title-shimmer text-4xl md:text-5xl lg:text-4xl leading-tight"
                  style={{ fontFamily: "'Nunito Sans', sans-serif", fontWeight: 800 }}
                >
                  Transforming Clinics. Improving Lives. Revolutionizing Allergy & Immunotherapy Services.
                </h1>

                <p className="text-base md:text-lg lg:text-xl leading-relaxed max-w-xl mx-auto lg:mx-0" style={{ color: "rgba(255,255,255,0.88)" }}>
                  We provide comprehensive allergy solutions for your clinic, handling everything so you can deliver complete care directly within your facilities.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mt-2 justify-center lg:justify-start">
                  <a
                    href="#contact"
                    className="nav-cta px-8 py-4 rounded-2xl text-white text-center font-bold shadow-lg"
                    style={{ backgroundColor: "var(--brand-green)" }}
                  >
                    Request a Consultation
                  </a>
                  <a
                    href="#services"
                    className="px-8 py-4 rounded-2xl text-white text-center font-semibold border-2 hover:bg-white/10 transition-all flex items-center justify-center gap-2"
                    style={{ borderColor: "rgba(255,255,255,0.5)" }}
                  >
                    <span className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center text-white text-sm">▶</span>
                    View Services
                  </a>
                </div>
              </div>

              {/* Desktop cards */}
              <div className="hidden lg:flex flex-col gap-5 items-end">
                <div
                  ref={heroCard1}
                  className="fade-in rounded-2xl p-5 shadow-[0_8px_32px_0_rgba(0,0,0,0.08)] w-72 border transition-all duration-300 hover:scale-[1.02]"
                  style={{ backgroundColor: "rgba(255,255,255,0.4)", backdropFilter: "blur(16px) saturate(150%)", WebkitBackdropFilter: "blur(16px) saturate(150%)", borderColor: "rgba(255,255,255,0.4)" }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-white/60 shadow-sm">
                      <Users className="w-5 h-5" style={{ color: "var(--brand-primary)" }} />
                    </div>
                    <span className="text-sm font-bold" style={{ color: "var(--brand-primary)" }}>Meet our team</span>
                  </div>
                  <div className="flex items-center gap-1">
                    {["CM", "LP", "AT", "PR"].map((ini) => (
                      <div key={ini} className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold -ml-1 first:ml-0 border-2 border-white/60 shadow-sm" style={{ backgroundColor: "var(--brand-green)" }}>{ini}</div>
                    ))}
                    <div className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold -ml-1 border-2 border-white/60 shadow-sm" style={{ backgroundColor: "var(--brand-primary)" }}>+</div>
                  </div>
                </div>

                <div
                  ref={heroCard2}
                  className="fade-in rounded-2xl p-5 shadow-[0_8px_32px_0_rgba(0,0,0,0.08)] w-72 border transition-all duration-300 hover:scale-[1.02]"
                  style={{ backgroundColor: "rgba(255,255,255,0.4)", backdropFilter: "blur(16px) saturate(150%)", WebkitBackdropFilter: "blur(16px) saturate(150%)", borderColor: "rgba(255,255,255,0.4)" }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-bold" style={{ color: "var(--brand-primary)" }}>Recent Testimonial</span>
                    <div className="w-7 h-7 rounded-full flex items-center justify-center text-white text-xs shadow-sm" style={{ backgroundColor: "var(--brand-green)" }}>★</div>
                  </div>
                  <p className="text-xs leading-relaxed mb-3 font-medium" style={{ color: "var(--brand-primary)" }}>
                    "We completely transformed our clinic. Foster Stern's support has been exceptional."
                  </p>
                  <div className="flex items-center gap-2 pt-1 border-t border-white/20">
                    <div className="w-7 h-7 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-sm" style={{ backgroundColor: "var(--brand-primary)" }}>DM</div>
                    <div>
                      <p className="text-xs font-bold" style={{ color: "var(--brand-primary)" }}>Dr. Mendoza</p>
                      <p className="text-[10px] opacity-80" style={{ color: "var(--brand-primary)" }}>Medical Director</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Floating Info Bar */}
        <div className="relative z-10 w-full">
          <div className="max-w-7xl mx-auto px-4 md:px-6 pb-8">
            <div className="bg-white/95 backdrop-blur-md rounded-2xl px-4 md:px-8 py-6 grid grid-cols-1 md:grid-cols-3 gap-6 shadow-xl">
              {[
                { icon: <Shield className="w-6 h-6" style={{ color: "var(--brand-green)" }} />, title: "New Revenue Stream", desc: "Generate additional revenue with allergy services within your practice." },
                { icon: <Users className="w-6 h-6" style={{ color: "var(--brand-green)" }} />, title: "Staff Assigned to Your Clinic", desc: "We place allergy-trained personnel directly in your office." },
                { icon: <HeartPulse className="w-6 h-6" style={{ color: "var(--brand-green)" }} />, title: "Full Operational Support", desc: "Billing, documentation, and clinical protocols included." },
              ].map((item, i) => (
                <div key={i} className={`flex items-start gap-4 ${i < 2 ? "md:border-r border-gray-200 md:pr-6" : ""} ${i > 0 ? "pt-4 md:pt-0 border-t md:border-t-0 border-gray-100" : ""}`}>
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "var(--brand-light)" }}>
                    {item.icon}
                  </div>
                  <div>
                    <p className="font-bold text-sm mb-1" style={{ color: "var(--brand-primary)" }}>{item.title}</p>
                    <p className="text-xs leading-relaxed" style={{ color: "var(--brand-muted)" }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* ── OPPORTUNITY SECTION ── */}
      <section className="py-16 md:py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="flex flex-col md:flex-row-reverse items-center gap-10 md:gap-12">
            <div ref={focusedImg} className="fade-in w-full md:w-[320px] lg:w-[420px] flex-shrink-0 relative group overflow-hidden rounded-3xl shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=600&q=80"
                alt="Doctor reviewing allergy patient"
                className="w-full h-[280px] md:h-[380px] lg:h-[440px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500 pointer-events-none rounded-3xl" />
            </div>

            <div className="flex-1 flex flex-col gap-5 md:gap-6">
              <h2
                ref={focusedTitle}
                className="fade-in text-4xl md:text-5xl leading-tight"
                style={{ fontFamily: "'Nunito Sans', sans-serif", fontWeight: 700, color: "var(--brand-green)" }}
              >
                Your Clinic Deserves a Real Growth Opportunity
              </h2>

              <p className="text-lg font-semibold" style={{ color: "var(--brand-primary)", fontFamily: "'Nunito Sans', sans-serif" }}>
                Many medical practices lose significant revenue every day by not offering in-house allergy services:
              </p>

              <ul ref={focusedList} className="fade-in space-y-4">
                {[
                  "Every referral to an outside specialist is revenue your clinic could have captured.",
                  "Demand for allergy testing and immunotherapy grows year after year — and your patients are already looking for it.",
                  "Implementing these services in-house seems complex: staff, equipment, protocols, billing.",
                  "Result: your practice stops growing while the allergy market advances without you.",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ backgroundColor: "var(--brand-light)", border: "1.5px solid var(--brand-green)" }}>
                      <span className="w-2 h-2 rounded-full" style={{ backgroundColor: "var(--brand-green)" }} />
                    </div>
                    <span className="text-base leading-relaxed" style={{ color: "var(--brand-muted)", fontFamily: "'Nunito Sans', sans-serif" }}>{item}</span>
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
          <div className="grid md:grid-cols-2 gap-10 md:gap-12 items-center">
            <div ref={howImg} className="fade-in from-left relative rounded-3xl overflow-hidden h-[320px] md:h-[400px] lg:h-[480px] group">
              <img
                src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&q=80"
                alt="Allergy specialist with patient"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500 pointer-events-none" />
              <div className="absolute bottom-0 left-0 right-0 h-24" style={{ background: "linear-gradient(to top, rgba(5,74,91,0.88), transparent)" }} />
            </div>

            <div ref={howContent} className="fade-in from-right flex flex-col gap-8">
              <div>
                <h2 className="text-3xl md:text-4xl mb-3" style={{ fontFamily: "'Nunito Sans', sans-serif", color: "var(--brand-primary)" }}>
                  How Does the Partnership Work?
                </h2>
                <p className="text-base font-semibold" style={{ color: "var(--brand-green)" }}>
                  Your success in allergy services is our commitment.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { icon: <Network className="w-6 h-6" style={{ color: "var(--brand-green)" }} />, title: "Seamless integration", desc: "We adapt to your clinic's operational flow. No restructuring, no disruptions — just growth.", link: "Learn the process" },
                  { icon: <Users className="w-6 h-6" style={{ color: "var(--brand-green)" }} />, title: "Trained staff at your clinic", desc: "We assign allergy-trained personnel directly to your facilities, coordinated with your schedule and team.", link: "Our team" },
                  { icon: <ClipboardList className="w-6 h-6" style={{ color: "var(--brand-green)" }} />, title: "Billing and documentation included", desc: "We manage clinical documentation and the billing process for allergy services — no added burden for your practice.", link: "View protocols" },
                  { icon: <HeartPulse className="w-6 h-6" style={{ color: "var(--brand-green)" }} />, title: "Periodic reports and insights", desc: "Receive program performance reports. We monitor the partnership's success together, as true strategic partners.", link: "View support" },
                ].map((item) => (
                  <div key={item.title} className="flex flex-col gap-2">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center mb-1" style={{ backgroundColor: "var(--brand-light)" }}>
                      {item.icon}
                    </div>
                    <h3 className="text-base" style={{ fontFamily: "'Nunito Sans', sans-serif", color: "var(--brand-primary)" }}>{item.title}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: "var(--brand-muted)" }}>{item.desc}</p>
                    <a href="#contact" className="text-sm font-semibold underline underline-offset-2 mt-1 hover:opacity-70 transition-opacity" style={{ color: "var(--brand-green)" }}>{item.link}</a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section id="services" className="py-16 md:py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div ref={svcTitle} className="fade-in text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl mb-4" style={{ fontFamily: "'Nunito Sans', sans-serif", color: "var(--brand-primary)" }}>
              A Strategic Partner, Not Just Another Vendor
            </h2>
            <p className="text-lg md:text-xl" style={{ color: "var(--brand-muted)" }}>
              We turn patient care into a clinical and financial growth opportunity for your practice
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              { ref: svcCard1, icon: <Microscope className="w-8 h-8 text-white" />, title: "Allergy Program Implementation", desc: "We design and implement the allergy testing and immunotherapy program within your clinic, with protocols aligned to industry best practices.", p1: "In-house allergy testing & immunotherapy", p2: "Standardized protocols and rigorous documentation", p3: "Fast, frictionless implementation" },
              { ref: svcCard2, icon: <FlaskConical className="w-8 h-8 text-white" />, title: "Trained Staff Assigned to Your Clinic", desc: "We assign allergy-specialized clinical staff directly to your facilities, coordinated with your schedule. You don't manage — you grow.", p1: "Allergy specialists at your office", p2: "No need to hire or train new staff", p3: "Reliable, professional scheduling guaranteed" },
              { ref: svcCard3, icon: <Syringe className="w-8 h-8 text-white" />, title: "Full Billing & Operational Support", desc: "We handle billing and clinical documentation for allergy services. Your team focuses on care; we handle the operations.", p1: "Complete billing process management", p2: "Clinical documentation and regulatory compliance", p3: "Periodic program performance reports" },
            ].map((card, idx) => (
              <div
                key={idx}
                ref={card.ref}
                className={`fade-in delay-1 group relative overflow-hidden rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:scale-[1.02] transition-all duration-600 hover:-translate-y-2 ${idx === 2 ? "md:col-span-2 lg:col-span-1 md:max-w-md md:mx-auto md:w-full lg:max-w-none" : ""}`}
                style={{ backgroundColor: "#054A5B" }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--brand-green)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center mb-6">{card.icon}</div>
                  <h3 className="text-2xl mb-4" style={{ fontFamily: "'Nunito Sans', sans-serif", color: "#ffffff" }}>{card.title}</h3>
                  <p className="mb-6 leading-relaxed text-white/85">{card.desc}</p>
                  <ul className="space-y-3">
                    {[card.p1, card.p2, card.p3].map((txt, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-[var(--brand-green)] mt-0.5 flex-shrink-0" />
                        <span className="font-semibold text-white/90">{txt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BENEFITS ── */}
      <section id="benefits" className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div ref={benefitsTitle} className="fade-in text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl mb-4" style={{ fontFamily: "'Nunito Sans', sans-serif", color: "var(--brand-primary)" }}>
              Why Do Clinics Choose to Partner With Us?
            </h2>
            <p className="text-lg md:text-xl" style={{ color: "var(--brand-muted)" }}>
              Your success in allergy services is our commitment
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-12">
            <div ref={benefitsLeft} className="fade-in from-left space-y-6">
              {[
                { icon: <Shield className="w-6 h-6 text-[var(--brand-green)]" />, title: "New Revenue Opportunity", desc: "Generate a sustainable new revenue stream within your clinic. By integrating allergy services, your practice retains patients and captures income previously lost to outside referrals." },
                { icon: <Users className="w-6 h-6 text-[var(--brand-green)]" />, title: "Specialized Staff, No Hiring Costs", desc: "Foster Stern assigns allergy-trained personnel directly to your clinic. You expand your clinical capacity without any recruitment, training, or new staff management processes." },
              ].map((b, i) => (
                <div key={i} className="p-6 bg-gray-50 rounded-2xl flex gap-4">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm flex-shrink-0">{b.icon}</div>
                  <div>
                    <h4 className="text-lg font-bold mb-2" style={{ color: "var(--brand-primary)" }}>{b.title}</h4>
                    <p style={{ color: "var(--brand-muted)" }}>{b.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div ref={benefitsRight} className="fade-in from-right space-y-6">
              {[
                { icon: <Clock className="w-6 h-6 text-[var(--brand-green)]" />, title: "Patient Retention and Greater Loyalty", desc: "Offer a complete service within your practice. Your patients won't need to visit another provider, which increases satisfaction, retention, and your clinic's reputation." },
                { icon: <ArrowRight className="w-6 h-6 text-[var(--brand-green)]" />, title: "Billing and Documentation Managed by Us", desc: "We manage the complete billing and clinical documentation process for allergy services. Transparent pricing structure, scalable to your practice volume, with no additional administrative burden on your team." },
              ].map((b, i) => (
                <div key={i} className="p-6 bg-gray-50 rounded-2xl flex gap-4">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm flex-shrink-0">{b.icon}</div>
                  <div>
                    <h4 className="text-lg font-bold mb-2" style={{ color: "var(--brand-primary)" }}>{b.title}</h4>
                    <p style={{ color: "var(--brand-muted)" }}>{b.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section id="process" className="py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <h2 className="text-3xl md:text-4xl mb-12" style={{ fontFamily: "'Source Sans 3', sans-serif", fontWeight: 700, color: "var(--brand-primary)" }}>
            How We Implement the Partnership at Your Clinic
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { img: "https://images.unsplash.com/photo-1551076805-e1869033e561?w=600&q=80", text: "We assess your practice and design a custom allergy program tailored to your clinic." },
              { img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80", text: "We assign allergy-trained personnel who operate directly within your office." },
              { img: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600&q=80", text: "We implement clinical protocols, documentation, and billing workflow from day one." },
              { img: "https://images.unsplash.com/photo-1666214280557-f1b5022eb634?w=600&q=80", text: "We launch the allergy service with ongoing operational and clinical support." },
              { img: "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=600&q=80", text: "We monitor program performance with monthly reports and results optimization." },
            ].map((step, i) => (
              <div key={i} className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm group">
                <div className="relative overflow-hidden" style={{ paddingBottom: "75%" }}>
                  <img src={step.img} alt={step.text} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 loading-lazy" loading="lazy" />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors duration-500 pointer-events-none" />
                  <div className="absolute top-3 left-3 w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold" style={{ backgroundColor: "var(--brand-green)" }}>{i + 1}</div>
                </div>
                <div className="p-5">
                  <p className="text-sm leading-relaxed font-medium" style={{ color: "var(--brand-primary)" }}>{step.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section id="faq" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-4" style={{ fontFamily: "'Nunito Sans', sans-serif", color: "var(--brand-primary)" }}>Frequently Asked Questions</h2>
            <p className="text-xl" style={{ color: "var(--brand-muted)" }}>Answers to the most common questions about our services</p>
          </div>
          <div className="space-y-4">
            {[
              { q: "How does the partnership model work?", a: "Foster Stern helps your medical practice integrate allergy services efficiently, including skin prick testing, treatments, documentation, and administrative support. Our model is designed to improve patient care and generate new revenue opportunities, without adding significant operational burden to your clinic." },
              { q: "Who performs the allergy testing?", a: "Allergy testing is performed by properly trained clinical staff, following established protocols and under the corresponding supervision of the medical practice. Foster Stern provides training, operational structure, and guidelines to ensure an organized and consistent process." },
              { q: "What types of clinics can participate?", a: "Medical clinics that want to expand their services by integrating allergy testing and treatment can participate. This may include primary care practices such as internal medicine, pediatrics, family or general medicine, and other specialties that treat patients with allergic or respiratory symptoms such as pulmonologists." },
              { q: "Is there any initial cost for the medical practice?", a: "Foster Stern offers a flexible model that may vary depending on the needs of the practice and the scope of implementation." },
              { q: "How long does implementation take?", a: "Implementation time depends on the clinic's current structure. Foster Stern works to make the integration efficient, organized, and adapted to each practice's operational flow." },
              { q: "What allergy services are offered?", a: "Services may include allergy testing, environmental sensitivity evaluation, subcutaneous immunotherapy coordination, and operational support for the allergy program. Specific services may vary depending on the practice, the medical provider, and patient needs." },
              { q: "How does this program financially benefit the clinic?", a: "The program allows the clinic to offer an additional service within its practice, improve patient retention, and create a new revenue stream. By integrating allergy services, the practice can expand its clinical reach while generating sustainable financial opportunities through medically necessary and properly documented services." },
            ].map(({ q, a }, i) => (
              <EnFAQItem key={i} question={q} answer={a} />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section ref={ctaBlock} className="fade-in py-16 bg-gradient-to-r from-[#054A5B] to-[#008154] text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Turn Your Clinic Into an Allergy Reference Center</h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">Foster Stern is the strategic partner your medical practice needs to integrate allergy services, generate new revenue, and improve patient care — with no operational complexity or upfront investment.</p>
          <a href="#contact" className="inline-block bg-white text-[#054A5B] font-bold px-8 py-4 rounded-xl shadow-lg hover:bg-gray-100 transition-colors">Schedule a Consultation with Our Team</a>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left */}
            <div ref={contactLeft} className="fade-in from-left">
              <h2 className="text-4xl md:text-5xl mb-4" style={{ fontFamily: "'Nunito Sans', sans-serif", color: "var(--brand-primary)" }}>
                Ready to Add Allergy Services to Your Practice?
              </h2>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6" style={{ backgroundColor: "var(--brand-light)" }}>
                <span className="w-2 h-2 rounded-full" style={{ backgroundColor: "var(--brand-green)" }} />
                <span className="text-sm font-bold uppercase tracking-wide" style={{ color: "var(--brand-green)" }}>
                  Leading strategic partner in allergology for medical practices in South Florida
                </span>
              </div>
              <p className="text-lg mb-8 leading-relaxed" style={{ color: "var(--brand-muted)" }}>
                Partner with Foster Stern Allergy Division and transform your clinic into an allergy reference center. We implement the full program — staff, protocols, billing, and documentation — so you can focus entirely on growing.
              </p>
              <div className="overflow-hidden rounded-3xl border shadow-xl bg-white" style={{ borderColor: "var(--brand-secondary)" }}>
                <iframe
                  title="Foster Stern Group Location"
                  src="https://www.google.com/maps?q=7480+SW+40th+Street+Suite+850+Miami+FL+33155&output=embed"
                  width="100%"
                  height="300"
                  loading="lazy"
                  className="w-full border-0"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <div className="mt-5 flex items-start gap-3">
                <div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ backgroundColor: "var(--brand-light)" }}>
                  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor" style={{ color: "var(--brand-green)" }}>
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold" style={{ color: "var(--brand-primary)" }}>Main Office</p>
                  <p className="text-sm leading-relaxed mt-1" style={{ color: "var(--brand-muted)" }}>7480 SW 40th Street Suite 850<br />Miami, FL 33155</p>
                </div>
              </div>
            </div>

            {/* Right — Form */}
            <div className="bg-white/80 backdrop-blur-md rounded-2xl p-8 border border-gray-200 shadow-lg">
              <form className="space-y-5">
                {[
                  { label: "Clinic Name", placeholder: "Enter your clinic name", type: "text" },
                  { label: "Full Contact Name", placeholder: "Enter your full name", type: "text" },
                  { label: "Title", placeholder: "Enter your title here", type: "text" },
                  { label: "Direct Phone", placeholder: "Enter your direct phone number", type: "tel" },
                  { label: "Email Address", placeholder: "Enter your email address", type: "email" },
                  { label: "Address", placeholder: "Enter your address here", type: "text" },
                  { label: "Specialty", placeholder: "Enter your specialty here", type: "text" },
                ].map(({ label, placeholder, type }) => (
                  <div key={label}>
                    <label className="block mb-1.5 text-sm font-semibold" style={{ color: "var(--brand-primary)" }}>{label}</label>
                    <input type={type} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[var(--brand-green)] focus:ring-2 focus:ring-[var(--brand-green)]/20 outline-none transition-all text-sm bg-gray-50" placeholder={placeholder} />
                  </div>
                ))}
                <div className="flex items-start gap-3 pt-1">
                  <input type="checkbox" id="consent-en" className="mt-1 w-4 h-4 flex-shrink-0 rounded border-gray-300 accent-[var(--brand-green)]" />
                  <label htmlFor="consent-en" className="text-sm leading-relaxed cursor-pointer" style={{ color: "var(--brand-muted)" }}>
                    I agree to be contacted about services and opportunities.
                  </label>
                </div>
                <button type="submit" className="w-full px-8 py-4 text-white rounded-lg hover:opacity-90 transition-all flex items-center justify-center gap-2 shadow-lg" style={{ backgroundColor: "var(--brand-green)" }}>
                  Send Message
                  <ArrowRight className="w-5 h-5" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

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

// Inline FAQ component for English page
function EnFAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border rounded-2xl overflow-hidden transition-all duration-200" style={{ borderColor: open ? "var(--brand-green)" : "#e5e7eb" }}>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-5 text-left"
        type="button"
      >
        <span className="text-base font-semibold pr-4" style={{ color: "var(--brand-primary)" }}>{question}</span>
        <span className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-200" style={{ backgroundColor: open ? "var(--brand-green)" : "var(--brand-light)" }}>
          <svg className="w-4 h-4 transition-transform duration-200" style={{ color: open ? "white" : "var(--brand-green)", transform: open ? "rotate(45deg)" : "none" }} fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
          </svg>
        </span>
      </button>
      {open && (
        <div className="px-6 pb-5">
          <p className="text-sm leading-relaxed" style={{ color: "var(--brand-muted)" }}>{answer}</p>
        </div>
      )}
    </div>
  );
}