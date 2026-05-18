import { useState, useEffect, useRef } from "react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { MobileMenu } from "../components/MobileMenu";

// ── Fade-in hook ──────────────────────────────────────────────────
function useFade(direction: "up" | "left" | "right" = "up", delay = 0) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.opacity = "0";
    el.style.transform =
      direction === "left" ? "translateX(-36px)"
      : direction === "right" ? "translateX(36px)"
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

// ── Navbar ────────────────────────────────────────────────────────
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b transition-all duration-300"
      style={{ borderBottomColor: scrolled ? "rgba(186,198,216,0.3)" : "transparent", boxShadow: scrolled ? "0 4px 24px rgba(5,74,91,0.08)" : "none" }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="/"><ImageWithFallback src="/src/imports/LogoFS.png" alt="Foster Stern Group" className="h-24 w-auto object-contain" /></a>
        <div className="hidden md:flex items-center gap-7">
          {[
            { href: "/nosotros", label: "Nosotros" },
            { href: "/#servicios", label: "Servicios" },
            { href: "/#beneficios", label: "Beneficios" },
            { href: "/#proceso", label: "Proceso" },
            { href: "/#faq", label: "FAQ" },
            { href: "/blog", label: "Blog" },
          ].map(({ href, label }) => (
            <a key={href} href={href} className="nav-link text-base" style={{ color: "var(--brand-muted)" }}>{label}</a>
          ))}
          <a href="/#contacto" className="nav-cta px-5 py-2.5 rounded-xl text-white shadow-md" style={{ backgroundColor: "var(--brand-primary)" }}>Contactar</a>
        </div>
        <MobileMenu />
      </div>
    </nav>
  );
}

// ── Footer ────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="bg-white border-t" style={{ borderColor: "var(--brand-secondary)" }}>
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
          <div className="flex flex-col gap-5">
            <ImageWithFallback src="/src/imports/LogoFS.png" alt="Foster Stern Group" className="h-24 w-auto object-contain" />
            <p className="text-sm leading-relaxed" style={{ color: "var(--brand-muted)", fontFamily: "'Source Sans 3', sans-serif" }}>
              Tu éxito es nuestro éxito. Transforma tu clínica con servicios integrados de alergia sin inversión inicial.
            </p>
            <div className="flex items-center gap-3">
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
            <h4 className="text-base font-bold mb-5" style={{ color: "var(--brand-primary)" }}>Información</h4>
            <ul className="space-y-3">
              {[["Sobre Nosotros","/#nosotros"],["Servicios","/#servicios"],["FAQ","/#faq"],["Contacto","/#contacto"]].map(([label,href]) => (
                <li key={label}><a href={href} className="footer-link text-sm flex items-center gap-2" style={{ color: "var(--brand-muted)" }}>
                  <svg viewBox="0 0 24 24" className="w-3 h-3 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/></svg>{label}
                </a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-base font-bold mb-5" style={{ color: "var(--brand-primary)" }}>Contáctanos</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ backgroundColor: "var(--brand-light)" }}>
                  <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="currentColor" style={{ color: "var(--brand-green)" }}><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
                </div>
                <span className="text-sm leading-relaxed" style={{ color: "var(--brand-muted)" }}>7480 SW 40th Street<br/>Suite 850<br/>Miami, FL 33155</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "var(--brand-light)" }}>
                  <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="currentColor" style={{ color: "var(--brand-green)" }}><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
                </div>
                <span className="text-sm" style={{ color: "var(--brand-muted)" }}>+1 (786) 977-3733</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "var(--brand-light)" }}>
                  <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="currentColor" style={{ color: "var(--brand-green)" }}><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
                </div>
                <span className="text-sm" style={{ color: "var(--brand-muted)" }}>info@fosterstern.com</span>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-base font-bold mb-5" style={{ color: "var(--brand-primary)" }}>Horario de Atención</h4>
            <div className="flex items-start gap-3">
              <div className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ backgroundColor: "var(--brand-light)" }}>
                <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="currentColor" style={{ color: "var(--brand-green)" }}><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm.5 5v5.25l4.5 2.67-.75 1.23L11 13V7h1.5z"/></svg>
              </div>
              <div>
                <p className="text-sm font-semibold" style={{ color: "var(--brand-primary)" }}>9:00AM – 5:00PM, Lunes – Viernes</p>
                <p className="text-sm mt-1" style={{ color: "var(--brand-muted)" }}>Atendemos en horario de oficina</p>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t pt-6 flex flex-col md:flex-row items-center justify-between gap-3" style={{ borderColor: "var(--brand-secondary)" }}>
          <p className="text-sm" style={{ color: "var(--brand-muted)" }}>&copy; 2026 Foster Stern Group. Todos los derechos reservados.</p>
          <div className="flex gap-4">
            <a href="#" className="footer-link text-sm" style={{ color: "var(--brand-muted)" }}>Privacidad</a>
            <a href="#" className="footer-link text-sm" style={{ color: "var(--brand-muted)" }}>Términos</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

// ── Página Nosotros ───────────────────────────────────────────────
export default function Nosotros() {
  useEffect(() => { window.scrollTo({ top: 0 }); }, []);

  // Refs por sección
  const heroTitle  = useFade("up", 0.1);
  const heroSub    = useFade("up", 0.25);
  const heroStats  = useFade("up", 0.4);
  const misionImg  = useFade("left");
  const misionTxt  = useFade("right");
  const visionImg  = useFade("right");
  const visionTxt  = useFade("left");
  const valTitle   = useFade("up");
  const val1       = useFade("up", 0);
  const val2       = useFade("up", 0.15);
  const val3       = useFade("up", 0.3);
  const val4       = useFade("up", 0.45);
  const teamTitle  = useFade("up");
  const team1      = useFade("up", 0);
  const numTitle   = useFade("up");
  const num1       = useFade("up", 0);
  const num2       = useFade("up", 0.15);
  const num3       = useFade("up", 0.3);
  const num4       = useFade("up", 0.45);
  const ctaBlock   = useFade("up");

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>
      <Navbar />

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden pt-40 pb-24 bg-white">
        {/* Fondo decorativo sutil */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-5" style={{ backgroundColor: "var(--brand-green)", filter: "blur(100px)", transform: "translate(30%, -30%)" }} />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full opacity-5" style={{ backgroundColor: "var(--brand-primary)", filter: "blur(80px)", transform: "translate(-30%, 30%)" }} />

        <div className="relative max-w-7xl mx-auto px-6 md:px-10">
          <div className="max-w-3xl">
            <div ref={heroTitle}>
              <span className="inline-block text-xs uppercase tracking-widest px-4 py-1.5 rounded-full mb-6" style={{ backgroundColor: "var(--brand-light)", color: "var(--brand-green)" }}>
                Sobre nosotros
              </span>
              <h1 className="text-4xl md:text-6xl lg:text-7xl leading-tight mb-6" style={{ fontWeight: 700, color: "var(--brand-primary)" }}>
                Transformando la atención de{" "}
                <span style={{ color: "var(--brand-green)" }}>alergia</span>{" "}
                en América.
              </h1>
            </div>
            <div ref={heroSub}>
              <p className="text-lg md:text-xl leading-relaxed mb-10" style={{ color: "var(--brand-muted)" }}>
                Somos Foster Stern Group, una empresa dedicada a integrar servicios de alergia de clase mundial directamente en clínicas médicas, sin inversión inicial y con soporte especializado continuo.
              </p>
            </div>
            <div ref={heroStats} className="grid grid-cols-2 md:grid-cols-4 gap-5">
              {[
                { valor: "500+", label: "Clínicas aliadas" },
                { valor: "15", label: "Años de experiencia" },
                { valor: "98%", label: "Satisfacción" },
                { valor: "24/7", label: "Soporte médico" },
              ].map(({ valor, label }) => (
                <div key={label} className="rounded-2xl p-5 border" style={{ backgroundColor: "var(--brand-light)", borderColor: "var(--brand-secondary)" }}>
                  <p className="text-3xl font-bold mb-1" style={{ color: "var(--brand-primary)" }}>{valor}</p>
                  <p className="text-sm" style={{ color: "var(--brand-muted)" }}>{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── MISIÓN ───────────────────────────────────────────────── */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div ref={misionImg} className="rounded-3xl overflow-hidden h-[440px]">
              <img src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80" alt="Nuestra misión" className="w-full h-full object-cover" />
            </div>
            <div ref={misionTxt} className="flex flex-col gap-6">
              <span className="text-xs uppercase tracking-widest" style={{ color: "var(--brand-green)" }}>Nuestra Misión</span>
              <h2 className="text-3xl md:text-4xl leading-tight" style={{ fontWeight: 700, color: "var(--brand-primary)" }}>
                Hacer accesible la atención de alergia en cada consultorio.
              </h2>
              <p className="text-base leading-relaxed" style={{ color: "var(--brand-muted)" }}>
                Creemos que cada clínica médica debería poder ofrecer servicios de alergia de alta calidad a sus pacientes. Por eso desarrollamos un modelo llave en mano que elimina las barreras tradicionales: sin inversión en equipos, sin necesidad de especialistas de planta, sin riesgo financiero.
              </p>
              <p className="text-base leading-relaxed" style={{ color: "var(--brand-muted)" }}>
                Trabajamos como socios estratégicos de las clínicas, aportando protocolos clínicos, equipos, capacitación y soporte continuo para que puedan enfocarse en lo más importante: el bienestar de sus pacientes.
              </p>
              <a href="/#contacto" className="self-start px-7 py-3 rounded-xl text-white transition-all hover:opacity-90" style={{ backgroundColor: "var(--brand-green)", fontWeight: 600 }}>
                Trabaja con nosotros
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── VISIÓN ───────────────────────────────────────────────── */}
      <section className="py-24 overflow-hidden" style={{ backgroundColor: "var(--brand-bg)" }}>
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div ref={visionTxt} className="flex flex-col gap-6 order-2 md:order-1">
              <span className="text-xs uppercase tracking-widest" style={{ color: "var(--brand-green)" }}>Nuestra Visión</span>
              <h2 className="text-3xl md:text-4xl leading-tight" style={{ fontWeight: 700, color: "var(--brand-primary)" }}>
                Ser la red de alergia más confiable del continente americano.
              </h2>
              <p className="text-base leading-relaxed" style={{ color: "var(--brand-muted)" }}>
                Visualizamos un futuro donde ningún paciente tenga que esperar semanas para ser atendido por un alergólogo o viajar lejos para acceder a tratamiento. Nuestro objetivo es que cada clínica médica pueda ser un punto de acceso a servicios de alergia de primer nivel.
              </p>
              <p className="text-base leading-relaxed" style={{ color: "var(--brand-muted)" }}>
                Para 2030, proyectamos estar presentes en más de 2,000 clínicas en toda América Latina y Estados Unidos, con un estándar de calidad clínica reconocido internacionalmente.
              </p>
            </div>
            <div ref={visionImg} className="rounded-3xl overflow-hidden h-[440px] order-1 md:order-2">
              <img src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&q=80" alt="Nuestra visión" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* ── VALORES ──────────────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div ref={valTitle} className="text-center mb-16">
            <span className="text-xs uppercase tracking-widest" style={{ color: "var(--brand-green)" }}>Lo que nos define</span>
            <h2 className="text-3xl md:text-4xl mt-3" style={{ fontWeight: 700, color: "var(--brand-primary)" }}>Nuestros Valores</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { ref: val1, icon: <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"/></svg>, titulo: "Alianza", desc: "Somos socios de nuestras clínicas. Su éxito es nuestro éxito y trabajamos juntos para lograrlo." },
              { ref: val2, icon: <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>, titulo: "Excelencia Clínica", desc: "Todos nuestros protocolos están basados en evidencia científica y actualizados constantemente." },
              { ref: val3, icon: <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>, titulo: "Innovación", desc: "Buscamos continuamente nuevas formas de mejorar la atención al paciente y la eficiencia clínica." },
              { ref: val4, icon: <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/></svg>, titulo: "Compromiso", desc: "Nos comprometemos con cada clínica y cada paciente como si fueran los únicos que atendemos." },
            ].map(({ ref, icon, titulo, desc }) => (
              <div key={titulo} ref={ref} className="p-8 rounded-3xl border hover:shadow-lg transition-all duration-300 group" style={{ borderColor: "var(--brand-secondary)", backgroundColor: "white" }}>
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5" style={{ backgroundColor: "var(--brand-light)", color: "var(--brand-green)" }}>
                  {icon}
                </div>
                <h3 className="text-xl mb-3" style={{ fontWeight: 700, color: "var(--brand-primary)" }}>{titulo}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--brand-muted)" }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── EQUIPO ───────────────────────────────────────────────── */}
      <section className="py-24 overflow-hidden" style={{ backgroundColor: "var(--brand-bg)" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div ref={teamTitle} className="text-center mb-16">
            <span className="text-xs uppercase tracking-widest" style={{ color: "var(--brand-green)" }}>Liderazgo</span>
            <h2 className="text-3xl md:text-4xl mt-3" style={{ fontWeight: 700, color: "var(--brand-primary)" }}>Nuestro CEO</h2>
          </div>

          <div ref={team1} className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl overflow-hidden border shadow-sm grid md:grid-cols-2" style={{ borderColor: "var(--brand-secondary)" }}>
              {/* Foto */}
              <div className="h-80 md:h-full overflow-hidden">
                <img
                  src="/src/imports/ceo-carrasquillo.png"
                  alt="Dr. Carrasquillo — CEO Foster Stern Group"
                  className="w-full h-full object-cover object-top"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600&q=80";
                  }}
                />
              </div>

              {/* Info */}
              <div className="p-10 flex flex-col justify-center gap-5">
                <div>
                  <span className="text-xs uppercase tracking-widest" style={{ color: "var(--brand-green)" }}>CEO & Fundador</span>
                  <h3 className="text-3xl mt-2 mb-1" style={{ fontWeight: 700, color: "var(--brand-primary)" }}>
                    Dr. Carrasquillo
                  </h3>
                  <span className="text-sm font-semibold" style={{ color: "var(--brand-green)" }}>Foster Stern Group</span>
                </div>

                <p className="text-base leading-relaxed" style={{ color: "var(--brand-muted)" }}>
                  Con una trayectoria distinguida en el campo de la alergología y la medicina clínica, el Dr. Carrasquillo fundó Foster Stern Group con la visión de democratizar el acceso a servicios de alergia de clase mundial en clínicas médicas de toda América.
                </p>
                <p className="text-base leading-relaxed" style={{ color: "var(--brand-muted)" }}>
                  Su liderazgo ha impulsado la expansión de la red a más de 500 clínicas aliadas, consolidando a Foster Stern Group como referente en innovación clínica y atención especializada en alergia.
                </p>

                {/* Redes o contacto */}
                <div className="flex items-center gap-3 mt-2">
                  <a href="/#contacto" className="px-6 py-2.5 rounded-xl text-white text-sm transition-all hover:opacity-90" style={{ backgroundColor: "var(--brand-green)", fontWeight: 600 }}>
                    Contactar
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── NÚMEROS ──────────────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div ref={numTitle} className="text-center mb-16">
            <span className="text-xs uppercase tracking-widest" style={{ color: "var(--brand-green)" }}>Resultados que hablan</span>
            <h2 className="text-3xl md:text-4xl mt-3" style={{ fontWeight: 700, color: "var(--brand-primary)" }}>Foster Stern en Números</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { ref: num1, numero: "500+", label: "Clínicas en la red" },
              { ref: num2, numero: "150K+", label: "Pacientes atendidos" },
              { ref: num3, numero: "15", label: "Años de experiencia" },
              { ref: num4, numero: "12", label: "Países con presencia" },
            ].map(({ ref, numero, label }) => (
              <div key={label} ref={ref} className="text-center p-8 rounded-3xl border" style={{ borderColor: "var(--brand-secondary)", backgroundColor: "var(--brand-bg)" }}>
                <p className="text-4xl font-bold mb-2" style={{ color: "var(--brand-primary)" }}>{numero}</p>
                <p className="text-sm" style={{ color: "var(--brand-muted)" }}>{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACTO + MAPA ──────────────────────────────────────── */}
      <section className="py-20 bg-white" id="contacto-nosotros">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <div ref={ctaBlock} className="text-center mb-14">
            <span className="text-xs uppercase tracking-widest" style={{ color: "var(--brand-green)" }}>Hablemos</span>
            <h2 className="text-3xl md:text-4xl mt-3" style={{ fontWeight: 700, color: "var(--brand-primary)" }}>
              ¿Listo para unirte a nuestra red?
            </h2>
            <p className="mt-4 max-w-xl mx-auto text-base" style={{ color: "var(--brand-muted)" }}>
              Únete a las más de 500 clínicas que ya transformaron su práctica médica con Foster Stern Group.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">

            {/* Mapa + dirección */}
            <div>
              <div className="overflow-hidden rounded-3xl border shadow-md" style={{ borderColor: "var(--brand-secondary)" }}>
                <iframe
                  title="Ubicación Foster Stern Group"
                  src="https://www.google.com/maps?q=7480+SW+40th+Street+Miami+FL&output=embed"
                  width="100%"
                  height="320"
                  loading="lazy"
                  className="w-full border-0"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <div className="mt-6 flex flex-col gap-4">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "var(--brand-light)" }}>
                    <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor" style={{ color: "var(--brand-green)" }}><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold" style={{ color: "var(--brand-primary)" }}>Oficina Principal</p>
                    <p className="text-sm leading-relaxed" style={{ color: "var(--brand-muted)" }}>7480 SW 40th Street, Suite 850<br />Miami, FL 33155</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "var(--brand-light)" }}>
                    <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor" style={{ color: "var(--brand-green)" }}><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
                  </div>
                  <p className="text-sm" style={{ color: "var(--brand-muted)" }}>+1 (786) 977-3733</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "var(--brand-light)" }}>
                    <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor" style={{ color: "var(--brand-green)" }}><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
                  </div>
                  <p className="text-sm" style={{ color: "var(--brand-muted)" }}>info@fosterstern.com</p>
                </div>
              </div>
            </div>

            {/* Formulario */}
            <div className="rounded-3xl p-8 border shadow-md" style={{ backgroundColor: "white", borderColor: "var(--brand-secondary)" }}>
              <form className="space-y-5">
                <div>
                  <label className="block mb-1.5 text-sm font-semibold" style={{ color: "var(--brand-primary)" }}>Nombre Completo *</label>
                  <input type="text" required className="w-full px-4 py-3 rounded-xl border outline-none transition-all text-sm" style={{ borderColor: "var(--brand-secondary)" }} placeholder="Dr. Juan Pérez"
                    onFocus={e => e.target.style.borderColor = "var(--brand-green)"}
                    onBlur={e => e.target.style.borderColor = "var(--brand-secondary)"}
                  />
                </div>
                <div>
                  <label className="block mb-1.5 text-sm font-semibold" style={{ color: "var(--brand-primary)" }}>Correo Electrónico *</label>
                  <input type="email" required className="w-full px-4 py-3 rounded-xl border outline-none transition-all text-sm" style={{ borderColor: "var(--brand-secondary)" }} placeholder="correo@clinica.com"
                    onFocus={e => e.target.style.borderColor = "var(--brand-green)"}
                    onBlur={e => e.target.style.borderColor = "var(--brand-secondary)"}
                  />
                </div>
                <div>
                  <label className="block mb-1.5 text-sm font-semibold" style={{ color: "var(--brand-primary)" }}>Teléfono *</label>
                  <input type="tel" required className="w-full px-4 py-3 rounded-xl border outline-none transition-all text-sm" style={{ borderColor: "var(--brand-secondary)" }} placeholder="+1 (555) 123-4567"
                    onFocus={e => e.target.style.borderColor = "var(--brand-green)"}
                    onBlur={e => e.target.style.borderColor = "var(--brand-secondary)"}
                  />
                </div>
                <div>
                  <label className="block mb-1.5 text-sm font-semibold" style={{ color: "var(--brand-primary)" }}>Nombre de la Clínica *</label>
                  <input type="text" required className="w-full px-4 py-3 rounded-xl border outline-none transition-all text-sm" style={{ borderColor: "var(--brand-secondary)" }} placeholder="Clínica Médica XYZ"
                    onFocus={e => e.target.style.borderColor = "var(--brand-green)"}
                    onBlur={e => e.target.style.borderColor = "var(--brand-secondary)"}
                  />
                </div>
                <div>
                  <label className="block mb-1.5 text-sm font-semibold" style={{ color: "var(--brand-primary)" }}>Mensaje</label>
                  <textarea rows={3} className="w-full px-4 py-3 rounded-xl border outline-none transition-all resize-none text-sm" style={{ borderColor: "var(--brand-secondary)" }} placeholder="Cuéntenos sobre su clínica..."
                    onFocus={e => e.target.style.borderColor = "var(--brand-green)"}
                    onBlur={e => e.target.style.borderColor = "var(--brand-secondary)"}
                  />
                </div>
                <button type="submit" className="w-full py-3.5 rounded-xl text-white font-semibold transition-all hover:opacity-90" style={{ backgroundColor: "var(--brand-green)" }}>
                  Enviar Mensaje
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}