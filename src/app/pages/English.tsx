import { Link } from "react-router-dom";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export default function English() {
  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>
      {/* Nav */}
      <nav
        className="fixed top-0 left-0 right-0 z-50"
        style={{
          backgroundColor: "rgba(255,255,255,0.85)",
          backdropFilter: "blur(20px) saturate(180%)",
          WebkitBackdropFilter: "blur(20px) saturate(180%)",
          boxShadow: "0 4px 30px rgba(0,0,0,0.03)",
          borderBottom: "1px solid rgba(255,255,255,0.4)",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/">
            <ImageWithFallback
              src="/Fostersterm/LOGOFALLERGY.png"
              alt="Foster Stern Group"
              className="h-20 md:h-24 w-auto object-contain brightness-0 opacity-90"
            />
          </Link>
          <div className="hidden md:flex items-center gap-7">
            <Link to="/nosotros" className="text-base font-semibold" style={{ color: "#054A5B" }}>
              About Us
            </Link>
            <a href="/#Servicios" className="text-base font-semibold" style={{ color: "#054A5B" }}>
              Services
            </a>
            <a href="/#Beneficios" className="text-base font-semibold" style={{ color: "#054A5B" }}>
              Benefits
            </a>
            <a href="/#FAQ" className="text-base font-semibold" style={{ color: "#054A5B" }}>
              FAQ
            </a>
            <Link to="/blog" className="text-base font-semibold" style={{ color: "#054A5B" }}>
              Blog
            </Link>
            <a
              href="/#contacto"
              className="px-5 py-2.5 rounded-xl text-white shadow-md font-bold transition-all duration-300 hover:scale-105"
              style={{ backgroundColor: "var(--brand-green)" }}
            >
              Contact
            </a>
            <Link
              to="/"
              className="px-5 py-2.5 rounded-xl font-bold border-2 transition-all duration-300 hover:scale-105"
              style={{ color: "#054A5B", borderColor: "#054A5B" }}
            >
              🇲🇽 Español
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section
        className="relative flex items-center justify-center min-h-screen"
        style={{
          background: "linear-gradient(135deg, #054A5B 0%, #0a7a96 50%, #0ea5c9 100%)",
          paddingTop: "100px",
        }}
      >
        {/* Background image overlay */}
        <div className="absolute inset-0 overflow-hidden">
          <ImageWithFallback
            src="/Fostersterm/fam-foster-bg.png"
            alt=""
            className="w-full h-full object-cover opacity-10"
          />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 border"
            style={{ backgroundColor: "rgba(255,255,255,0.12)", borderColor: "rgba(255,255,255,0.3)" }}
          >
            <span className="text-sm">🌎 English Version</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
            Allergy Solutions <br />
            <span style={{ color: "#7dd3fc" }}>That Cross Borders</span>
          </h1>
          <p className="text-lg md:text-xl mb-10 max-w-3xl mx-auto" style={{ color: "rgba(255,255,255,0.85)" }}>
            Foster Stern Group brings world-class allergy and immunology diagnostic services to your practice.
            We partner with clinics across North America to deliver cutting-edge solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/#contacto"
              className="px-8 py-4 rounded-2xl text-white font-bold text-lg shadow-lg transition-all duration-300 hover:scale-105"
              style={{ backgroundColor: "var(--brand-green)" }}
            >
              Get in Touch
            </a>
            <Link
              to="/"
              className="px-8 py-4 rounded-2xl font-bold text-lg border-2 transition-all duration-300 hover:scale-105"
              style={{ borderColor: "rgba(255,255,255,0.6)", color: "white" }}
            >
              View in Spanish
            </Link>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black mb-4" style={{ color: "#054A5B" }}>
            Our Services
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Comprehensive allergy diagnostics and immunology services designed for modern medical practices.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: "🔬",
              title: "Allergy Testing",
              desc: "Advanced diagnostic panels for environmental, food, and occupational allergens with precise, actionable results.",
            },
            {
              icon: "💉",
              title: "Immunotherapy Solutions",
              desc: "Customized immunotherapy programs backed by the latest clinical research to improve patient outcomes.",
            },
            {
              icon: "📊",
              title: "Practice Analytics",
              desc: "Detailed reporting and insights to help your practice grow and deliver better care to allergy patients.",
            },
          ].map((s) => (
            <div
              key={s.title}
              className="rounded-2xl p-8 border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              style={{ borderColor: "#e2f0f5" }}
            >
              <div className="text-4xl mb-4">{s.icon}</div>
              <h3 className="text-xl font-bold mb-3" style={{ color: "#054A5B" }}>
                {s.title}
              </h3>
              <p className="text-gray-500 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-20 text-center"
        style={{ background: "linear-gradient(135deg, #054A5B 0%, #0a7a96 100%)" }}
      >
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
            Ready to Partner With Us?
          </h2>
          <p className="text-lg mb-8" style={{ color: "rgba(255,255,255,0.8)" }}>
            Join the growing network of clinics that trust Foster Stern Group for allergy solutions.
          </p>
          <a
            href="/#contacto"
            className="inline-block px-10 py-4 rounded-2xl text-white font-bold text-lg shadow-lg transition-all duration-300 hover:scale-105"
            style={{ backgroundColor: "var(--brand-green)" }}
          >
            Contact Us Today
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-gray-400 text-sm border-t border-gray-100">
        <p>© {new Date().getFullYear()} Foster Stern Group. All rights reserved.</p>
      </footer>
    </div>
  );
}