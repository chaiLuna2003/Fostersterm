import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Navbar } from "../components/Navbar";

function useFade(direction: "up" | "left" | "right" = "up", delay = 0) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.opacity = "0";
    el.style.transform =
      direction === "left"
        ? "translateX(-36px)"
        : direction === "right"
          ? "translateX(36px)"
          : "translateY(36px)";
    el.style.transition = `opacity 0.65s ease ${delay}s, transform 0.65s ease ${delay}s`;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = "1";
          el.style.transform = "translate(0,0)";
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return ref;
}

function Footer() {
  return (
    <footer className="bg-white border-t" style={{ borderColor: "var(--brand-secondary)" }}>
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
          <div className="flex flex-col gap-5">
            <ImageWithFallback src="/Fostersterm/LogoFS.png" alt="Foster Stern Group" className="h-24 w-auto object-contain" />
            <p className="text-sm leading-relaxed" style={{ color: "var(--brand-muted)", fontFamily: "'Nunito Sans', sans-serif" }}>
              Your success is our success. Transform your clinic with integrated allergy services — no upfront investment, no risk.
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
            <h4 className="text-base font-bold mb-5" style={{ color: "var(--brand-primary)" }}>Navigation</h4>
            <ul className="space-y-3">
              {[
                ["Home", "/english"],
                ["About Us", "/english/about"],
                ["Blog", "/english/blog"],
                ["Contact", "/english#contacto"],
              ].map(([label, href]) => (
                <li key={label}>
                  <Link to={href} className="text-sm flex items-center gap-2 hover:opacity-70 transition-opacity" style={{ color: "var(--brand-muted)" }}>
                    <svg viewBox="0 0 24 24" className="w-3 h-3 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-base font-bold mb-5" style={{ color: "var(--brand-primary)" }}>Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ backgroundColor: "var(--brand-light)" }}>
                  <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="currentColor" style={{ color: "var(--brand-green)" }}>
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                </div>
                <span className="text-sm leading-relaxed" style={{ color: "var(--brand-muted)" }}>
                  7480 SW 40th Street<br />Suite 850<br />Miami, FL 33155
                </span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "var(--brand-light)" }}>
                  <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="currentColor" style={{ color: "var(--brand-green)" }}>
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                  </svg>
                </div>
                <span className="text-sm" style={{ color: "var(--brand-muted)" }}>+1 (786) 977-3733</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "var(--brand-light)" }}>
                  <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="currentColor" style={{ color: "var(--brand-green)" }}>
                    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                  </svg>
                </div>
                <span className="text-sm" style={{ color: "var(--brand-muted)" }}>info@fosterstern.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-base font-bold mb-5" style={{ color: "var(--brand-primary)" }}>Business Hours</h4>
            <div className="flex items-start gap-3">
              <div className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ backgroundColor: "var(--brand-light)" }}>
                <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="currentColor" style={{ color: "var(--brand-green)" }}>
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm.5 5v5.25l4.5 2.67-.75 1.23L11 13V7h1.5z" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-semibold" style={{ color: "var(--brand-primary)" }}>Mon – Fri</p>
                <p className="text-sm" style={{ color: "var(--brand-muted)" }}>8:00 AM – 6:00 PM</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t pt-8 flex flex-col md:flex-row items-center justify-between gap-4" style={{ borderColor: "var(--brand-secondary)" }}>
          <p className="text-xs" style={{ color: "var(--brand-muted)" }}>
            © {new Date().getFullYear()} Foster Stern Group. All rights reserved.
          </p>
          <Link to="/" className="text-xs font-semibold hover:opacity-70 transition-opacity" style={{ color: "var(--brand-green)" }}>
            🇲🇽 Ver en Español
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default function AboutUs() {
  const heroRef   = useFade("up",  0);
  const missionL  = useFade("left",  0.1);
  const missionR  = useFade("right", 0.1);
  const valTitle  = useFade("up",  0);
  const val1      = useFade("up",  0.05);
  const val2      = useFade("up",  0.1);
  const val3      = useFade("up",  0.15);
  const val4      = useFade("up",  0.2);
  const teamTitle = useFade("up",  0);
  const teamCard1 = useFade("up",  0.05);
  const teamCard2 = useFade("up",  0.1);
  const teamCard3 = useFade("up",  0.15);
  const ctaRef    = useFade("up",  0);

  return (
    <div className="min-h-screen bg-white overflow-x-hidden" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>

      {/* ── HERO ── */}
      <header className="relative overflow-hidden" style={{ minHeight: "60vh", display: "flex", flexDirection: "column" }}>
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src="/Fostersterm/HeroImgNosotros.webp"
            alt="About Foster Stern"
            className="w-full h-full object-cover object-center"
          />
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(135deg, rgba(5,74,91,0.88) 0%, rgba(5,74,91,0.5) 50%, rgba(0,129,84,0.3) 100%)" }}
          />
        </div>

        <Navbar lang="en" />

        <div className="relative z-10 flex-1 flex items-center">
          <div className="max-w-7xl mx-auto px-6 py-24 md:py-32">
            <div ref={heroRef} className="max-w-2xl">
              <span
                className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6"
                style={{ backgroundColor: "rgba(0,129,84,0.25)", color: "#6EE7B7", border: "1px solid rgba(110,231,183,0.4)" }}
              >
                About Us
              </span>
              <h1
                className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 text-white"
                style={{ fontFamily: "'Nunito Sans', sans-serif" }}
              >
                Who We Are &<br />
                <span style={{ color: "#6EE7B7" }}>What Drives Us</span>
              </h1>
              <p className="text-lg md:text-xl leading-relaxed" style={{ color: "rgba(255,255,255,0.85)" }}>
                Foster Stern Group is a healthcare management company dedicated to transforming how allergy care is delivered across the United States.
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* ── MISSION & VISION ── */}
      <section className="py-20 md:py-28" style={{ backgroundColor: "#f8fafb" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div ref={missionL}>
              <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4" style={{ backgroundColor: "var(--brand-light)", color: "var(--brand-green)" }}>
                Our Mission
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold mb-6" style={{ color: "var(--brand-primary)" }}>
                Empowering Clinics.<br />Improving Lives.
              </h2>
              <p className="text-base leading-relaxed mb-5" style={{ color: "var(--brand-muted)" }}>
                We partner with medical clinics to integrate comprehensive allergy services — at zero upfront cost. Our model allows healthcare providers to focus on what matters most: patient care.
              </p>
              <p className="text-base leading-relaxed" style={{ color: "var(--brand-muted)" }}>
                By handling billing, clinical coordination, and operational support, we create a seamless extension of each clinic's team, driving better patient outcomes and sustainable revenue growth.
              </p>
            </div>

            <div ref={missionR} className="relative rounded-3xl overflow-hidden shadow-2xl" style={{ minHeight: "380px" }}>
              <ImageWithFallback
                src="/Fostersterm/ImagenNosotros.png"
                alt="Foster Stern Team"
                className="w-full h-full object-cover"
                style={{ minHeight: "380px" }}
              />
              <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(5,74,91,0.4) 0%, transparent 60%)" }} />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="flex gap-4">
                  {[
                    { number: "200+", label: "Partner Clinics" },
                    { number: "50k+", label: "Patients Served" },
                    { number: "15+", label: "Years Experience" },
                  ].map(({ number, label }) => (
                    <div key={label} className="flex-1 rounded-2xl px-3 py-3 text-center" style={{ backgroundColor: "rgba(255,255,255,0.15)", backdropFilter: "blur(8px)" }}>
                      <p className="text-xl font-extrabold text-white">{number}</p>
                      <p className="text-xs text-white/80 font-medium">{label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── VALUES ── */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div ref={valTitle} className="text-center mb-14">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4" style={{ backgroundColor: "var(--brand-light)", color: "var(--brand-green)" }}>
              Our Values
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold" style={{ color: "var(--brand-primary)" }}>
              The Principles That Guide Us
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { ref: val1, icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z", title: "Integrity", desc: "We operate with full transparency in every partnership and patient interaction." },
              { ref: val2, icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0", title: "Partnership", desc: "Your clinic's success is our success. We grow together." },
              { ref: val3, icon: "M13 10V3L4 14h7v7l9-11h-7z", title: "Innovation", desc: "We constantly seek smarter, more efficient ways to deliver allergy care." },
              { ref: val4, icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z", title: "Patient-First", desc: "Every decision we make starts with the well-being of the patient." },
            ].map(({ ref, icon, title, desc }) => (
              <div
                key={title}
                ref={ref}
                className="rounded-2xl p-7 text-center transition-all hover:-translate-y-1 hover:shadow-lg"
                style={{ border: "1px solid var(--brand-secondary)", backgroundColor: "#f8fafb" }}
              >
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-5" style={{ backgroundColor: "var(--brand-light)" }}>
                  <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.8} style={{ color: "var(--brand-green)" }}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={icon} />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-2" style={{ color: "var(--brand-primary)" }}>{title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--brand-muted)" }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TEAM ── */}
      <section className="py-20 md:py-28" style={{ backgroundColor: "#f8fafb" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div ref={teamTitle} className="text-center mb-14">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4" style={{ backgroundColor: "var(--brand-light)", color: "var(--brand-green)" }}>
              Our Team
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold" style={{ color: "var(--brand-primary)" }}>
              The People Behind Foster Stern
            </h2>
            <p className="mt-4 text-base max-w-xl mx-auto" style={{ color: "var(--brand-muted)" }}>
              A multidisciplinary team of healthcare and business professionals united by one goal: better allergy care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { ref: teamCard1, img: "/Fostersterm/Carlitos-Solo.png", name: "Carlos Foster", role: "Founder & CEO", bio: "With over 15 years in healthcare management, Carlos founded Foster Stern to bridge the gap between clinical excellence and business efficiency." },
              { ref: teamCard2, img: "/Fostersterm/image.jpg", name: "Medical Team", role: "Clinical Specialists", bio: "Our certified allergists and clinical coordinators ensure every partner clinic delivers the highest standard of patient care." },
              { ref: teamCard3, img: "/Fostersterm/EstreChandoManos21339x784.jpg", name: "Operations Team", role: "Billing & Support", bio: "Our billing and administrative experts handle the complexity so your team can stay focused on patients." },
            ].map(({ ref, img, name, role, bio }) => (
              <div
                key={name}
                ref={ref}
                className="rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all bg-white"
                style={{ border: "1px solid var(--brand-secondary)" }}
              >
                <div className="h-52 overflow-hidden">
                  <ImageWithFallback src={img} alt={name} className="w-full h-full object-cover object-top" />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold mb-0.5" style={{ color: "var(--brand-primary)" }}>{name}</h3>
                  <p className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: "var(--brand-green)" }}>{role}</p>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--brand-muted)" }}>{bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20" style={{ background: "linear-gradient(135deg, var(--brand-primary) 0%, #006643 100%)" }}>
        <div ref={ctaRef} className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6">
            Ready to Transform Your Clinic?
          </h2>
          <p className="text-lg mb-8" style={{ color: "rgba(255,255,255,0.85)" }}>
            Join over 200 clinics already growing with Foster Stern Group — no upfront investment required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/english"
              className="inline-block px-8 py-3.5 rounded-xl font-bold text-base transition-all hover:scale-105 hover:shadow-lg"
              style={{ backgroundColor: "var(--brand-green)", color: "white" }}
            >
              Get Started Today
            </Link>
            <Link
              to="/english/blog"
              className="inline-block px-8 py-3.5 rounded-xl font-bold text-base transition-all hover:scale-105"
              style={{ border: "2px solid rgba(255,255,255,0.6)", color: "white" }}
            >
              Read Our Blog
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}