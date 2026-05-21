import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { MobileMenu } from "../components/MobileMenu";

// ── Fade-in hook ─────────────────────────────────────────────────
function useFade(direction: "up" | "left" | "right" = "up", delay = 0) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.opacity = "0";
    el.style.transform =
      direction === "left" ? "translateX(-30px)"
      : direction === "right" ? "translateX(30px)"
      : "translateY(30px)";
    el.style.transition = `opacity 0.6s ease ${delay}s, transform 0.6s ease ${delay}s`;
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

  const base = "/Fostersterm";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b transition-all duration-300"
      style={{
        borderBottomColor: scrolled
          ? "rgba(186,198,216,0.3)"
          : "transparent",
        boxShadow: scrolled
          ? "0 4px 24px rgba(5,74,91,0.08)"
          : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* LOGO */}
        <Link to="/" className="flex items-center gap-3">
          <ImageWithFallback
            src={`${base}/LogoFS.png`}
            alt="Foster Stern Group"
            className="h-24 w-auto object-contain"
          />
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-7">
          {[
            { href: `${base}/nosotros`, label: "Nosotros" },
            { href: `${base}/#servicios`, label: "Servicios" },
            { href: `${base}/#beneficios`, label: "Beneficios" },
            { href: `${base}/#proceso`, label: "Proceso" },
            { href: `${base}/#faq`, label: "FAQ" },
            { href: `${base}/blog`, label: "Blog" },
          ].map(({ href, label }) =>
            href.includes("#") ? (
              <a
                key={href}
                href={href}
                className="nav-link text-base"
                style={{ color: "var(--brand-muted)" }}
              >
                {label}
              </a>
            ) : (
              <Link
                key={href}
                to={href.replace(base, "")}
                className="nav-link text-base"
                style={{ color: "var(--brand-muted)" }}
              >
                {label}
              </Link>
            ),
          )}

          {/* CTA */}
          <a
            href={`${base}/#contacto`}
            className="nav-cta px-5 py-2.5 rounded-xl text-white shadow-md"
            style={{ backgroundColor: "var(--brand-primary)" }}
          >
            Contactar
          </a>
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
            <ImageWithFallback src="/Fostersterm/LogoFS.png" alt="Foster Stern Group" className="h-24 w-auto object-contain" />
            <p className="text-sm leading-relaxed" style={{ color: "var(--brand-muted)", fontFamily: "'Source Sans 3', sans-serif" }}>
              Tu éxito es nuestro éxito. Transforma tu clínica con servicios integrados de alergia: sin inversión inicial, sin riesgo y con el respaldo de profesionales expertos.
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
            <h4 className="text-base font-bold mb-5" style={{ color: "var(--brand-primary)", fontFamily: "'Source Sans 3', sans-serif" }}>Información</h4>
            <ul className="space-y-3">
              {[
                { label: "Sobre Nosotros", href: "/#nosotros" },
                { label: "Servicios", href: "/#servicios" },
                { label: "FAQ", href: "/#faq" },
                { label: "Contacto", href: "/#contacto" },
              ].map(({ label, href }) => (
                <li key={label}>
                  <a href={href} className="footer-link text-sm flex items-center gap-2" style={{ color: "var(--brand-muted)", fontFamily: "'Source Sans 3', sans-serif" }}>
                    <svg viewBox="0 0 24 24" className="w-3 h-3 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-base font-bold mb-5" style={{ color: "var(--brand-primary)", fontFamily: "'Source Sans 3', sans-serif" }}>Contáctanos</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ backgroundColor: "var(--brand-light)" }}>
                  <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="currentColor" style={{ color: "var(--brand-green)" }}><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
                </div>
                <span className="text-sm leading-relaxed" style={{ color: "var(--brand-muted)", fontFamily: "'Source Sans 3', sans-serif" }}>7480 SW 40th Street<br />Suite 850<br />Miami, FL 33155</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "var(--brand-light)" }}>
                  <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="currentColor" style={{ color: "var(--brand-green)" }}><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
                </div>
                <span className="text-sm" style={{ color: "var(--brand-muted)", fontFamily: "'Source Sans 3', sans-serif" }}>+1 (786) 977-3733</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "var(--brand-light)" }}>
                  <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="currentColor" style={{ color: "var(--brand-green)" }}><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
                </div>
                <span className="text-sm" style={{ color: "var(--brand-muted)", fontFamily: "'Source Sans 3', sans-serif" }}>info@fosterstern.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-base font-bold mb-5" style={{ color: "var(--brand-primary)", fontFamily: "'Source Sans 3', sans-serif" }}>Horario de Atención</h4>
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
            <a href="#" className="footer-link text-sm" style={{ color: "var(--brand-muted)", fontFamily: "'Source Sans 3', sans-serif" }}>Privacidad</a>
            <a href="#" className="footer-link text-sm" style={{ color: "var(--brand-muted)", fontFamily: "'Source Sans 3', sans-serif" }}>Términos</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

// ── Datos ─────────────────────────────────────────────────────────
const blogs = [
  { id: 1, title: "Nuevos Tratamientos para la Rinitis Alérgica", date: "15 Mayo 2026", category: "Tratamientos", image: "https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=1200&auto=format&fit=crop", excerpt: "Conoce las nuevas alternativas médicas para mejorar la calidad de vida de pacientes con alergias respiratorias.",
    content: [
      { type: "intro", text: "La rinitis alérgica afecta a millones de personas en todo el mundo, impactando su calidad de vida y productividad diaria." },
      { type: "heading", text: "¿Qué es la Rinitis Alérgica?" },
      { type: "paragraph", text: "La rinitis alérgica es una inflamación de la mucosa nasal causada por una reacción inmunológica a alérgenos como el polen, los ácaros del polvo o la caspa de animales. Se caracteriza por estornudos frecuentes, secreción nasal, congestión y picazón." },
      { type: "heading", text: "Tratamientos Modernos Disponibles" },
      { type: "paragraph", text: "Los tratamientos actuales han evolucionado significativamente. Desde los antihistamínicos de nueva generación que no provocan somnolencia, hasta la inmunoterapia subcutánea y sublingual que ataca la causa raíz de la alergia." },
      { type: "highlight", text: "La inmunoterapia puede reducir los síntomas hasta en un 85% en pacientes correctamente seleccionados, ofreciendo alivio a largo plazo." },
      { type: "heading", text: "Inmunoterapia: El Tratamiento del Futuro" },
      { type: "paragraph", text: "A diferencia de los medicamentos convencionales, la inmunoterapia modifica la respuesta del sistema inmune al alérgeno. El paciente recibe dosis progresivas hasta desarrollar tolerancia, logrando una mejoría sostenida incluso después de finalizar el tratamiento." },
    ],
  },
  { id: 2, title: "¿Cómo Detectar Alergias Alimentarias?", date: "10 Mayo 2026", category: "Diagnóstico", image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1200&auto=format&fit=crop", excerpt: "Aprende a identificar los síntomas más comunes y cuándo acudir con un especialista.",
    content: [
      { type: "intro", text: "Las alergias alimentarias pueden manifestarse de formas muy variadas, desde molestias digestivas leves hasta reacciones anafilácticas graves." },
      { type: "heading", text: "Síntomas Principales" },
      { type: "paragraph", text: "Los síntomas pueden aparecer minutos u horas después de consumir el alimento. Los más frecuentes incluyen urticaria, hinchazón, dolor abdominal y en casos graves, dificultad para respirar." },
      { type: "highlight", text: "Un diagnóstico temprano y preciso puede evitar reacciones graves y mejorar significativamente la calidad de vida del paciente." },
    ],
  },
  { id: 3, title: "Importancia de la Inmunoterapia", date: "05 Mayo 2026", category: "Inmunoterapia", image: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?q=80&w=1200&auto=format&fit=crop", excerpt: "La inmunoterapia puede ayudar a reducir reacciones alérgicas de manera progresiva.", content: [{ type: "intro", text: "La inmunoterapia representa la única forma de tratamiento capaz de modificar el curso natural de las enfermedades alérgicas." }, { type: "highlight", text: "Los estudios clínicos demuestran que la inmunoterapia puede prevenir el desarrollo de nuevas sensibilizaciones." }] },
  { id: 4, title: "Alergias Estacionales y Cómo Prevenirlas", date: "28 Abril 2026", category: "Prevención", image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=1200&auto=format&fit=crop", excerpt: "Consejos útiles para disminuir los síntomas durante temporadas críticas.", content: [{ type: "intro", text: "Las alergias estacionales afectan a millones de personas cada año durante épocas específicas del año." }] },
  { id: 5, title: "Cuidados Respiratorios en Niños", date: "20 Abril 2026", category: "Pediatría", image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?q=80&w=1200&auto=format&fit=crop", excerpt: "Cómo proteger la salud respiratoria infantil frente a alergias y contaminantes.", content: [{ type: "intro", text: "La salud respiratoria en la infancia es fundamental para el desarrollo saludable del niño." }] },
  { id: 6, title: "¿Qué es el Asma Alérgica?", date: "12 Abril 2026", category: "Asma", image: "https://images.unsplash.com/photo-1603398938378-e54eab446dde?q=80&w=1200&auto=format&fit=crop", excerpt: "Descubre las causas más frecuentes y tratamientos recomendados.", content: [{ type: "intro", text: "El asma alérgica es la forma más común de asma y está directamente relacionada con la exposición a alérgenos." }] },
  { id: 7, title: "Factores que Aumentan las Alergias", date: "04 Abril 2026", category: "Prevención", image: "https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?q=80&w=1200&auto=format&fit=crop", excerpt: "Conoce los elementos ambientales que afectan tu salud diariamente.", content: [{ type: "intro", text: "El entorno en que vivimos tiene un impacto directo en la frecuencia e intensidad de las reacciones alérgicas." }] },
  { id: 8, title: "Beneficios de un Diagnóstico Temprano", date: "29 Marzo 2026", category: "Diagnóstico", image: "https://images.unsplash.com/photo-1516549655669-df83a0774514?q=80&w=1200&auto=format&fit=crop", excerpt: "Detectar alergias a tiempo puede mejorar significativamente el tratamiento.", content: [{ type: "intro", text: "El diagnóstico precoz permite iniciar tratamiento antes de que los síntomas se cronifiquen." }] },
  { id: 9, title: "La Relación Entre Estrés y Alergias", date: "20 Marzo 2026", category: "Bienestar", image: "https://images.unsplash.com/photo-1512678080530-7760d81faba6?q=80&w=1200&auto=format&fit=crop", excerpt: "El estrés puede influir en síntomas alérgicos más intensos.", content: [{ type: "intro", text: "Existe una relación bidireccional entre el estrés y las alergias que merece atención especial." }] },
  { id: 10, title: "Pruebas Clínicas Más Utilizadas", date: "11 Marzo 2026", category: "Diagnóstico", image: "https://images.unsplash.com/photo-1580281657527-47b6351c0dcc?q=80&w=1200&auto=format&fit=crop", excerpt: "Exploramos las pruebas médicas más comunes para detectar alergias.", content: [{ type: "intro", text: "Conocer las herramientas diagnósticas disponibles permite elegir la más adecuada para cada paciente." }] },
  { id: 11, title: "Alergias en Temporada de Frío", date: "02 Marzo 2026", category: "Estacional", image: "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?q=80&w=1200&auto=format&fit=crop", excerpt: "Consejos para evitar complicaciones durante climas fríos.", content: [{ type: "intro", text: "El invierno trae condiciones que pueden agravar las alergias existentes." }] },
  { id: 12, title: "Cómo Mejorar la Calidad del Aire en Casa", date: "24 Febrero 2026", category: "Hogar", image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=1200&auto=format&fit=crop", excerpt: "Pequeños cambios en casa pueden ayudar mucho a personas alérgicas.", content: [{ type: "intro", text: "El hogar puede ser un aliado o un enemigo para quienes padecen alergias." }] },
];

// ── Vista artículo ────────────────────────────────────────────────
function ArticleView({ blog, onBack }: { blog: typeof blogs[0]; onBack: () => void }) {
  const titleRef  = useFade("up", 0);
  const metaRef   = useFade("up", 0.1);
  const imgRef    = useFade("up", 0.2);
  const bodyRef   = useFade("up", 0.3);
  const relRef    = useFade("up", 0.1);
  const related   = blogs.filter((b) => b.id !== blog.id).slice(0, 3);

  useEffect(() => { window.scrollTo({ top: 0, behavior: "smooth" }); }, []);

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>
      <Navbar />
      <div className="pt-36 pb-20">
        <div className="max-w-5xl mx-auto px-6">

          {/* Título */}
          <div ref={titleRef} className="mb-6">
            <span className="inline-block text-xs px-3 py-1 rounded-full mb-4" style={{ backgroundColor: "var(--brand-light)", color: "var(--brand-green)" }}>
              {blog.category}
            </span>
            <h1 className="text-3xl md:text-5xl leading-tight" style={{ fontWeight: 700, color: "var(--brand-primary)" }}>
              {blog.title}
            </h1>
          </div>

          {/* Meta */}
          <div ref={metaRef} className="flex items-center gap-4 mb-10 pb-6 border-b" style={{ borderColor: "var(--brand-secondary)" }}>
            <div className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold" style={{ backgroundColor: "var(--brand-green)" }}>FS</div>
            <div>
              <p className="text-sm font-semibold" style={{ color: "var(--brand-primary)" }}>Foster Stern Group</p>
              <p className="text-xs" style={{ color: "var(--brand-muted)" }}>{blog.date} · 5 min de lectura</p>
            </div>
            <button onClick={onBack} className="ml-auto text-sm flex items-center gap-1 hover:underline" style={{ color: "var(--brand-green)" }}>
              ← Volver al Blog
            </button>
          </div>

          {/* Imagen */}
          <div ref={imgRef} className="rounded-3xl overflow-hidden mb-12" style={{ height: "420px" }}>
            <img src={blog.image} alt={blog.title} className="w-full h-full object-cover" />
          </div>

          {/* Cuerpo */}
          <div ref={bodyRef} className="max-w-3xl mx-auto">
            {blog.content.map((block, i) => {
              if (block.type === "intro") return <p key={i} className="text-xl leading-relaxed mb-8 font-medium" style={{ color: "var(--brand-primary)" }}>{block.text}</p>;
              if (block.type === "heading") return <h2 key={i} className="text-2xl mb-4 mt-10" style={{ fontWeight: 700, color: "var(--brand-primary)" }}>{block.text}</h2>;
              if (block.type === "paragraph") return <p key={i} className="text-base leading-relaxed mb-6" style={{ color: "var(--brand-muted)" }}>{block.text}</p>;
              if (block.type === "highlight") return (
                <blockquote key={i} className="border-l-4 pl-6 py-3 my-8 rounded-r-xl" style={{ borderColor: "var(--brand-green)", backgroundColor: "var(--brand-light)" }}>
                  <p className="text-base leading-relaxed italic" style={{ color: "var(--brand-primary)" }}>{block.text}</p>
                </blockquote>
              );
              return null;
            })}

            {/* CTA */}
            <div className="mt-14 p-8 rounded-3xl text-center" style={{ backgroundColor: "var(--brand-primary)" }}>
              <h3 className="text-2xl text-white mb-3" style={{ fontWeight: 700 }}>¿Te interesa ofrecer servicios de alergia en tu clínica?</h3>
              <p className="text-sm mb-6" style={{ color: "var(--brand-secondary)" }}>Habla con uno de nuestros especialistas y descubre cómo transformar tu práctica médica.</p>
              <a href="/#contacto" className="inline-block px-8 py-3 rounded-xl text-white transition-all hover:opacity-90" style={{ backgroundColor: "var(--brand-green)", fontWeight: 600 }}>Contactar ahora</a>
            </div>
          </div>

          {/* Relacionados */}
          <div className="mt-20" ref={relRef}>
            <h3 className="text-2xl mb-8" style={{ fontWeight: 700, color: "var(--brand-primary)" }}>Artículos relacionados</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {related.map((r) => (
                <button key={r.id} onClick={() => { onBack(); setTimeout(() => setSelectedBlogGlobal(r), 50); }}
                  className="text-left group bg-white rounded-2xl overflow-hidden border transition-all hover:shadow-lg"
                  style={{ borderColor: "var(--brand-secondary)" }}
                >
                  <div className="h-40 overflow-hidden">
                    <img src={r.image} alt={r.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-5">
                    <span className="text-xs" style={{ color: "var(--brand-green)" }}>{r.date}</span>
                    <p className="text-sm font-semibold mt-1 leading-snug" style={{ color: "var(--brand-primary)" }}>{r.title}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

// Variable para navegación entre artículos relacionados
let setSelectedBlogGlobal: (b: typeof blogs[0] | null) => void = () => {};

// ── Blog principal ────────────────────────────────────────────────
export default function Blog() {
  const [selectedBlog, setSelectedBlog] = useState<typeof blogs[0] | null>(null);
  setSelectedBlogGlobal = setSelectedBlog;

  const headerRef = useFade("up", 0);
  const gridRef   = useFade("up", 0.1);

  if (selectedBlog) return <ArticleView blog={selectedBlog} onBack={() => setSelectedBlog(null)} />;

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#F7FAFC", fontFamily: "'Source Sans 3', sans-serif" }}>
      <Navbar />

      <div className="pt-36 pb-20">
        <div className="max-w-7xl mx-auto px-6">

          {/* Header */}
          <div ref={headerRef} className="mb-14">
            <span className="inline-block px-4 py-1.5 rounded-full text-sm mb-4" style={{ backgroundColor: "var(--brand-light)", color: "var(--brand-green)" }}>Blog Médico</span>
            <h1 className="text-4xl md:text-5xl mb-4" style={{ fontWeight: 700, color: "var(--brand-primary)" }}>Últimos Artículos y Noticias</h1>
            <p className="text-lg max-w-2xl" style={{ color: "var(--brand-muted)" }}>Información médica, recomendaciones y novedades sobre alergias, inmunoterapia y bienestar respiratorio.</p>
          </div>

          <div ref={gridRef}>
            {/* Artículo destacado */}
            <button
              onClick={() => setSelectedBlog(blogs[0])}
              className="w-full text-left group mb-10 rounded-3xl overflow-hidden grid md:grid-cols-2 bg-white shadow-sm border hover:shadow-xl transition-all duration-300"
              style={{ borderColor: "var(--brand-secondary)" }}
            >
              <div className="h-64 md:h-full overflow-hidden">
                <img src={blogs[0].image} alt={blogs[0].title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <span className="text-xs px-3 py-1 rounded-full self-start mb-4" style={{ backgroundColor: "var(--brand-light)", color: "var(--brand-green)" }}>{blogs[0].category}</span>
                <h2 className="text-2xl md:text-3xl mb-4 leading-snug" style={{ fontWeight: 700, color: "var(--brand-primary)" }}>{blogs[0].title}</h2>
                <p className="text-base mb-6 leading-relaxed" style={{ color: "var(--brand-muted)" }}>{blogs[0].excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm" style={{ color: "var(--brand-muted)" }}>{blogs[0].date}</span>
                  <span className="text-sm font-semibold" style={{ color: "var(--brand-green)" }}>Leer artículo →</span>
                </div>
              </div>
            </button>

            {/* Grid resto */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogs.slice(1).map((blog) => (
                <button key={blog.id} onClick={() => setSelectedBlog(blog)}
                  className="text-left group bg-white rounded-2xl overflow-hidden shadow-sm border hover:shadow-xl transition-all duration-300"
                  style={{ borderColor: "var(--brand-secondary)" }}
                >
                  <div className="h-52 overflow-hidden">
                    <img src={blog.image} alt={blog.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs px-2.5 py-1 rounded-full" style={{ backgroundColor: "var(--brand-light)", color: "var(--brand-green)" }}>{blog.category}</span>
                      <span className="text-xs" style={{ color: "var(--brand-muted)" }}>{blog.date}</span>
                    </div>
                    <h2 className="text-lg mb-3 leading-snug" style={{ fontWeight: 700, color: "var(--brand-primary)" }}>{blog.title}</h2>
                    <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--brand-muted)" }}>{blog.excerpt}</p>
                    <span className="text-sm font-semibold" style={{ color: "var(--brand-green)" }}>Leer más →</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}