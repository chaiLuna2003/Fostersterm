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
import { ImageWithFallback } from "./components/figma/ImageWithFallback";
import { FAQItem } from "./components/FAQItem";
import { MobileMenu } from "./components/MobileMenu";

export default function App() {
  return (
    <div
      className="min-h-screen bg-white"
      style={{ fontFamily: "'AvantGarde-Book', sans-serif" }}
    >
      {/* Hero Section */}
      <header className="relative overflow-hidden min-h-screen bg-white pt-24 md:pt-32">
        {/* Background Image */}
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1760074032551-fef8992ca72d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
            alt="Medical professionals in laboratory"
            className="w-full h-full object-cover"
          />
          {/* White Overlay */}
          <div className="absolute inset-0 bg-white/95"></div>
          {/* Glass effect overlay */}
          <div className="absolute inset-0 backdrop-blur-sm"></div>
        </div>

        {/* Glassmorphism Navbar */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur-lg border-b border-white/20 shadow-sm">
          <div className="max-w-7xl mx-auto px-[10px] py-3 flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <ImageWithFallback
                src="/src/imports/ChatGPT_Image_13_may_2026__17_55_44.png"
                alt="Foster Stern Group"
                className="w-auto h-10 md:h-12"
              />
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-6">
              <a href="#nosotros" className="text-base hover:text-[#238CCC] transition-colors" style={{ color: "#898989" }}>
                Nosotros
              </a>
              <a href="#servicios" className="text-base hover:text-[#238CCC] transition-colors" style={{ color: "#898989" }}>
                Servicios
              </a>
              <a href="#beneficios" className="text-base hover:text-[#238CCC] transition-colors" style={{ color: "#898989" }}>
                Beneficios
              </a>
              <a href="#proceso" className="text-base hover:text-[#238CCC] transition-colors" style={{ color: "#898989" }}>
                Proceso
              </a>
              <a href="#casos" className="text-base hover:text-[#238CCC] transition-colors" style={{ color: "#898989" }}>
                Casos de Éxito
              </a>
              <a href="#blog" className="text-base hover:text-[#238CCC] transition-colors" style={{ color: "#898989" }}>
                Blog
              </a>
              <a href="#faq" className="text-base hover:text-[#238CCC] transition-colors" style={{ color: "#898989" }}>
                FAQ
              </a>
              <a
                href="#contacto"
                className="text-base px-5 py-2 bg-[#238CCC] text-white rounded-lg hover:bg-[#0D3B7F] transition-all shadow-md"
                style={{ fontFamily: "'AvantGarde-Demi', sans-serif" }}
              >
                Contactar
              </a>
            </div>

            {/* Mobile Menu Button */}
            <MobileMenu />
          </div>
        </nav>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 md:py-32 flex items-center min-h-screen">
          <div className="max-w-3xl">
            <div className="inline-block px-4 py-2 bg-[#238CCC]/10 backdrop-blur-md rounded-full border border-[#238CCC]/20 mb-6">
              <span
                className="text-sm"
                style={{ color: "#238CCC" }}
              >
                Soluciones Médicas Innovadoras
              </span>
            </div>
            <h1
              className="text-5xl md:text-7xl mb-6 leading-tight"
              style={{
                fontFamily: "'AvantGarde-Demi', sans-serif",
                color: "#0D3B7F",
              }}
            >
              Servicios de Alergia Llave en Mano
            </h1>
            <p
              className="text-xl md:text-2xl mb-10 leading-relaxed max-w-2xl"
              style={{ color: "#898989" }}
            >
              Protocolos clínicos estandarizados y pruebas de
              alergia e inmunoterapia realizadas directamente en
              su consultorio médico.
            </p>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
              <div className="bg-white/80 backdrop-blur-md rounded-xl p-4 border border-gray-200 shadow-sm">
                <div className="flex items-center gap-2 mb-1">
                  <FlaskConical
                    className="w-5 h-5"
                    style={{ color: "#238CCC" }}
                  />
                </div>
                <div
                  className="text-2xl mb-1"
                  style={{
                    fontFamily: "'AvantGarde-Demi', sans-serif",
                    color: "#0D3B7F",
                  }}
                >
                  15min
                </div>
                <div
                  className="text-sm"
                  style={{ color: "#898989" }}
                >
                  Resultados
                </div>
              </div>
              <div className="bg-white/80 backdrop-blur-md rounded-xl p-4 border border-gray-200 shadow-sm">
                <div className="flex items-center gap-2 mb-1">
                  <Shield
                    className="w-5 h-5"
                    style={{ color: "#238CCC" }}
                  />
                </div>
                <div
                  className="text-2xl mb-1"
                  style={{
                    fontFamily: "'AvantGarde-Demi', sans-serif",
                    color: "#0D3B7F",
                  }}
                >
                  100%
                </div>
                <div
                  className="text-sm"
                  style={{ color: "#898989" }}
                >
                  Seguro
                </div>
              </div>
              <div className="bg-white/80 backdrop-blur-md rounded-xl p-4 border border-gray-200 shadow-sm">
                <div className="flex items-center gap-2 mb-1">
                  <Users
                    className="w-5 h-5"
                    style={{ color: "#238CCC" }}
                  />
                </div>
                <div
                  className="text-2xl mb-1"
                  style={{
                    fontFamily: "'AvantGarde-Demi', sans-serif",
                    color: "#0D3B7F",
                  }}
                >
                  24/7
                </div>
                <div
                  className="text-sm"
                  style={{ color: "#898989" }}
                >
                  Soporte
                </div>
              </div>
              <div className="bg-white/80 backdrop-blur-md rounded-xl p-4 border border-gray-200 shadow-sm">
                <div className="flex items-center gap-2 mb-1">
                  <Syringe
                    className="w-5 h-5"
                    style={{ color: "#238CCC" }}
                  />
                </div>
                <div
                  className="text-2xl mb-1"
                  style={{
                    fontFamily: "'AvantGarde-Demi', sans-serif",
                    color: "#0D3B7F",
                  }}
                >
                  500+
                </div>
                <div
                  className="text-sm"
                  style={{ color: "#898989" }}
                >
                  Clínicas
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                className="px-8 py-4 bg-[#238CCC] text-white rounded-lg hover:bg-[#0D3B7F] transition-all flex items-center justify-center gap-2 shadow-lg"
                style={{
                  fontFamily: "'AvantGarde-Demi', sans-serif",
                }}
              >
                Comenzar Ahora
                <ArrowRight className="w-5 h-5" />
              </button>
              <button
                className="px-8 py-4 bg-white text-[#0D3B7F] rounded-lg hover:bg-gray-50 transition-all border-2 border-[#238CCC]"
                style={{
                  fontFamily: "'AvantGarde-Demi', sans-serif",
                }}
              >
                Ver Demo
              </button>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
            <div
              className="w-6 h-10 border-2 rounded-full flex items-start justify-center p-2"
              style={{ borderColor: "#238CCC" }}
            >
              <div
                className="w-1.5 h-1.5 rounded-full"
                style={{ backgroundColor: "#238CCC" }}
              ></div>
            </div>
          </div>
        </div>
      </header>

      {/* Services Section */}
      <section
        id="servicios"
        className="py-20 bg-gradient-to-b from-white to-gray-50"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2
              className="text-4xl md:text-5xl mb-4"
              style={{
                fontFamily: "'AvantGarde-Demi', sans-serif",
                color: "#0D3B7F",
              }}
            >
              Servicios Integrales
            </h2>
            <p className="text-xl" style={{ color: "#898989" }}>
              Todo lo que necesita para ofrecer servicios de
              alergia de clase mundial
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-lg hover:shadow-2xl transition-all border border-gray-100">
              <div className="absolute inset-0 bg-gradient-to-br from-[#238CCC]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-[#238CCC] to-[#0D3B7F] rounded-xl flex items-center justify-center mb-6">
                  <Microscope className="w-8 h-8 text-white" />
                </div>
                <h3
                  className="text-2xl mb-4"
                  style={{
                    fontFamily: "'AvantGarde-Demi', sans-serif",
                    color: "#0D3B7F",
                  }}
                >
                  Pruebas de Alergia
                </h3>
                <p
                  className="mb-6 leading-relaxed"
                  style={{ color: "#898989" }}
                >
                  Pruebas cutáneas y de sangre de última
                  generación para identificar alérgenos
                  específicos con precisión diagnóstica
                  superior.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#238CCC] mt-0.5 flex-shrink-0" />
                    <span style={{ color: "#898989" }}>
                      Pruebas cutáneas estandarizadas
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#238CCC] mt-0.5 flex-shrink-0" />
                    <span style={{ color: "#898989" }}>
                      Análisis de IgE específica
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#238CCC] mt-0.5 flex-shrink-0" />
                    <span style={{ color: "#898989" }}>
                      Resultados en 15-20 minutos
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-lg hover:shadow-2xl transition-all border border-gray-100">
              <div className="absolute inset-0 bg-gradient-to-br from-[#238CCC]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-[#238CCC] to-[#0D3B7F] rounded-xl flex items-center justify-center mb-6">
                  <Syringe className="w-8 h-8 text-white" />
                </div>
                <h3
                  className="text-2xl mb-4"
                  style={{
                    fontFamily: "'AvantGarde-Demi', sans-serif",
                    color: "#0D3B7F",
                  }}
                >
                  Inmunoterapia
                </h3>
                <p
                  className="mb-6 leading-relaxed"
                  style={{ color: "#898989" }}
                >
                  Tratamientos personalizados de inmunoterapia
                  subcutánea y sublingual para desensibilización
                  efectiva a largo plazo.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#238CCC] mt-0.5 flex-shrink-0" />
                    <span style={{ color: "#898989" }}>
                      Protocolos personalizados
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#238CCC] mt-0.5 flex-shrink-0" />
                    <span style={{ color: "#898989" }}>
                      Seguimiento continuo
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#238CCC] mt-0.5 flex-shrink-0" />
                    <span style={{ color: "#898989" }}>
                      Resultados medibles
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-lg hover:shadow-2xl transition-all border border-gray-100">
              <div className="absolute inset-0 bg-gradient-to-br from-[#238CCC]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-[#238CCC] to-[#0D3B7F] rounded-xl flex items-center justify-center mb-6">
                  <FlaskConical className="w-8 h-8 text-white" />
                </div>
                <h3
                  className="text-2xl mb-4"
                  style={{
                    fontFamily: "'AvantGarde-Demi', sans-serif",
                    color: "#0D3B7F",
                  }}
                >
                  Protocolos Clínicos
                </h3>
                <p
                  className="mb-6 leading-relaxed"
                  style={{ color: "#898989" }}
                >
                  Guías clínicas estandarizadas basadas en
                  evidencia para garantizar la calidad y
                  consistencia en cada consulta.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#238CCC] mt-0.5 flex-shrink-0" />
                    <span style={{ color: "#898989" }}>
                      Basados en evidencia científica
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#238CCC] mt-0.5 flex-shrink-0" />
                    <span style={{ color: "#898989" }}>
                      Actualizaciones continuas
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#238CCC] mt-0.5 flex-shrink-0" />
                    <span style={{ color: "#898989" }}>
                      Capacitación incluida
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section with Glassmorphism */}
      <section id="beneficios" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2
              className="text-4xl md:text-5xl mb-4"
              style={{
                fontFamily: "'AvantGarde-Demi', sans-serif",
                color: "#0D3B7F",
              }}
            >
              ¿Por Qué Elegirnos?
            </h2>
            <p className="text-xl" style={{ color: "#898989" }}>
              Beneficios que transformarán su práctica médica
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white backdrop-blur-md rounded-2xl p-6 border border-gray-200 hover:border-[#238CCC] transition-all shadow-sm hover:shadow-md">
              <div className="w-12 h-12 bg-[#238CCC]/10 rounded-lg flex items-center justify-center mb-4 border border-[#238CCC]/20">
                <Clock
                  className="w-6 h-6"
                  style={{ color: "#238CCC" }}
                />
              </div>
              <h3
                className="text-xl mb-3"
                style={{
                  fontFamily: "'AvantGarde-Demi', sans-serif",
                  color: "#0D3B7F",
                }}
              >
                Implementación Rápida
              </h3>
              <p
                className="leading-relaxed"
                style={{ color: "#898989" }}
              >
                Configure su servicio de alergia en menos de 2
                semanas con nuestro sistema integral.
              </p>
            </div>

            <div className="bg-white backdrop-blur-md rounded-2xl p-6 border border-gray-200 hover:border-[#238CCC] transition-all shadow-sm hover:shadow-md">
              <div className="w-12 h-12 bg-[#238CCC]/10 rounded-lg flex items-center justify-center mb-4 border border-[#238CCC]/20">
                <Shield
                  className="w-6 h-6"
                  style={{ color: "#238CCC" }}
                />
              </div>
              <h3
                className="text-xl mb-3"
                style={{
                  fontFamily: "'AvantGarde-Demi', sans-serif",
                  color: "#0D3B7F",
                }}
              >
                Máxima Seguridad
              </h3>
              <p
                className="leading-relaxed"
                style={{ color: "#898989" }}
              >
                Protocolos certificados y equipos de última
                generación para garantizar la seguridad del
                paciente.
              </p>
            </div>

            <div className="bg-white backdrop-blur-md rounded-2xl p-6 border border-gray-200 hover:border-[#238CCC] transition-all shadow-sm hover:shadow-md">
              <div className="w-12 h-12 bg-[#238CCC]/10 rounded-lg flex items-center justify-center mb-4 border border-[#238CCC]/20">
                <Users
                  className="w-6 h-6"
                  style={{ color: "#238CCC" }}
                />
              </div>
              <h3
                className="text-xl mb-3"
                style={{
                  fontFamily: "'AvantGarde-Demi', sans-serif",
                  color: "#0D3B7F",
                }}
              >
                Soporte Continuo
              </h3>
              <p
                className="leading-relaxed"
                style={{ color: "#898989" }}
              >
                Equipo de especialistas disponible 24/7 para
                resolver dudas y apoyar su equipo médico.
              </p>
            </div>

            <div className="bg-white backdrop-blur-md rounded-2xl p-6 border border-gray-200 hover:border-[#238CCC] transition-all shadow-sm hover:shadow-md">
              <div className="w-12 h-12 bg-[#238CCC]/10 rounded-lg flex items-center justify-center mb-4 border border-[#238CCC]/20">
                <CheckCircle2
                  className="w-6 h-6"
                  style={{ color: "#238CCC" }}
                />
              </div>
              <h3
                className="text-xl mb-3"
                style={{
                  fontFamily: "'AvantGarde-Demi', sans-serif",
                  color: "#0D3B7F",
                }}
              >
                ROI Garantizado
              </h3>
              <p
                className="leading-relaxed"
                style={{ color: "#898989" }}
              >
                Aumente los ingresos de su clínica con servicios
                de alto valor y demanda creciente.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="proceso" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2
              className="text-4xl md:text-5xl mb-4"
              style={{
                fontFamily: "'AvantGarde-Demi', sans-serif",
                color: "#0D3B7F",
              }}
            >
              Proceso Simple
            </h2>
            <p className="text-xl" style={{ color: "#898989" }}>
              Comience a ofrecer servicios de alergia en 3 pasos
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="relative">
              <div
                className="absolute top-8 left-1/2 w-full h-0.5 bg-gradient-to-r from-[#238CCC] to-[#0D3B7F] hidden md:block"
                style={{ transform: "translateX(50%)" }}
              ></div>
              <div className="relative bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-100">
                <div
                  className="w-16 h-16 bg-gradient-to-br from-[#238CCC] to-[#0D3B7F] rounded-full flex items-center justify-center mb-6 text-white text-2xl"
                  style={{
                    fontFamily: "'AvantGarde-Demi', sans-serif",
                  }}
                >
                  1
                </div>
                <h3
                  className="text-2xl mb-4"
                  style={{
                    fontFamily: "'AvantGarde-Demi', sans-serif",
                    color: "#0D3B7F",
                  }}
                >
                  Consulta Inicial
                </h3>
                <p
                  className="leading-relaxed"
                  style={{ color: "#898989" }}
                >
                  Evaluamos las necesidades de su clínica y
                  diseñamos un plan personalizado de
                  implementación.
                </p>
              </div>
            </div>

            <div className="relative">
              <div
                className="absolute top-8 left-1/2 w-full h-0.5 bg-gradient-to-r from-[#238CCC] to-[#0D3B7F] hidden md:block"
                style={{ transform: "translateX(50%)" }}
              ></div>
              <div className="relative bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-100">
                <div
                  className="w-16 h-16 bg-gradient-to-br from-[#238CCC] to-[#0D3B7F] rounded-full flex items-center justify-center mb-6 text-white text-2xl"
                  style={{
                    fontFamily: "'AvantGarde-Demi', sans-serif",
                  }}
                >
                  2
                </div>
                <h3
                  className="text-2xl mb-4"
                  style={{
                    fontFamily: "'AvantGarde-Demi', sans-serif",
                    color: "#0D3B7F",
                  }}
                >
                  Implementación
                </h3>
                <p
                  className="leading-relaxed"
                  style={{ color: "#898989" }}
                >
                  Instalamos equipos, capacitamos a su personal
                  y configuramos todos los protocolos clínicos
                  necesarios.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="relative bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-100">
                <div
                  className="w-16 h-16 bg-gradient-to-br from-[#238CCC] to-[#0D3B7F] rounded-full flex items-center justify-center mb-6 text-white text-2xl"
                  style={{
                    fontFamily: "'AvantGarde-Demi', sans-serif",
                  }}
                >
                  3
                </div>
                <h3
                  className="text-2xl mb-4"
                  style={{
                    fontFamily: "'AvantGarde-Demi', sans-serif",
                    color: "#0D3B7F",
                  }}
                >
                  Lanzamiento
                </h3>
                <p
                  className="leading-relaxed"
                  style={{ color: "#898989" }}
                >
                  Comience a atender pacientes con soporte
                  continuo de nuestro equipo de especialistas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2
              className="text-4xl md:text-5xl mb-4"
              style={{
                fontFamily: "'AvantGarde-Demi', sans-serif",
                color: "#0D3B7F",
              }}
            >
              Preguntas Frecuentes
            </h2>
            <p className="text-xl" style={{ color: "#898989" }}>
              Resolvemos las dudas más comunes sobre nuestros servicios
            </p>
          </div>

          <div className="space-y-4">
            <FAQItem
              question="¿Qué incluye el servicio llave en mano?"
              answer="Nuestro servicio incluye todo lo necesario para comenzar: equipos de diagnóstico, protocolos clínicos estandarizados, capacitación completa del personal, materiales para pruebas de alergia e inmunoterapia, soporte técnico continuo y sistema de gestión de pacientes."
            />

            <FAQItem
              question="¿Cuánto tiempo toma la implementación?"
              answer="El proceso de implementación completo toma entre 10-14 días. Esto incluye la instalación de equipos, capacitación del personal médico y administrativo, configuración de protocolos y una fase de acompañamiento inicial."
            />

            <FAQItem
              question="¿Se requiere personal médico especializado?"
              answer="No es necesario contar con un alergólogo en el equipo. Nosotros capacitamos a médicos generales y personal de enfermería para realizar las pruebas de alergia siguiendo nuestros protocolos estandarizados. Además, ofrecemos soporte médico especializado disponible 24/7."
            />

            <FAQItem
              question="¿Qué tipo de soporte ofrecen después de la implementación?"
              answer="Ofrecemos soporte técnico y médico 24/7, actualizaciones de protocolos clínicos, reposición de materiales, capacitación continua, asesoría en casos complejos y reportes de gestión mensuales para optimizar el servicio."
            />

            <FAQItem
              question="¿Cuál es el retorno de inversión esperado?"
              answer="Nuestras clínicas asociadas reportan un ROI positivo en los primeros 6-8 meses. El servicio de alergia genera ingresos recurrentes a través de consultas, pruebas diagnósticas y tratamientos de inmunoterapia de largo plazo."
            />
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-8 md:px-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">

            {/* Imagen izquierda */}
            <div className="relative rounded-3xl overflow-hidden h-[480px]">
              <img
                src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&q=80"
                alt="Especialista en alergias con paciente"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div
                className="absolute bottom-0 left-0 right-0 h-24"
                style={{ background: "linear-gradient(to top, #0D3B7F88, transparent)" }}
              />
            </div>

            {/* Contenido derecha */}
            <div className="flex flex-col gap-8">
              <div>
                <h2
                  className="text-3xl md:text-4xl mb-3"
                  style={{ fontFamily: "'AvantGarde-Demi', sans-serif", color: "#0D3B7F" }}
                >
                  Cómo Brindamos Soluciones Duraderas
                </h2>
                <p className="text-base" style={{ color: "#898989" }}>
                  Encuentra el tratamiento que mejor se adapta a tu clínica y tus pacientes.
                </p>
              </div>

              {/* Grid 2x2 de características */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  {
                    icon: <Users className="w-6 h-6" style={{ color: "#238CCC" }} />,
                    title: "Proveedores Locales",
                    desc: "Cada clínica es única. Como socios, desarrollamos planes de servicio personalizados para cada práctica médica.",
                    link: "Encontrar un proveedor",
                  },
                  {
                    icon: <Network className="w-6 h-6" style={{ color: "#238CCC" }} />,
                    title: "Red Nacional",
                    desc: "Foster Stern Group es una de las redes de alergias más grandes y confiables del país, con presencia en todo el territorio.",
                    link: "¿Por qué Foster Stern?",
                  },
                  {
                    icon: <ClipboardList className="w-6 h-6" style={{ color: "#238CCC" }} />,
                    title: "Soluciones Personalizadas",
                    desc: "Desarrolladas con cientos de especialistas, nuestros procesos ofrecen a los pacientes alivio rápido y de calidad.",
                    link: "Tu camino al alivio",
                  },
                  {
                    icon: <HeartPulse className="w-6 h-6" style={{ color: "#238CCC" }} />,
                    title: "Experiencias Sin Fricción",
                    desc: "Desde la agenda hasta el laboratorio en consultorio, hacemos más fácil que nunca brindar la atención que merecen.",
                    link: "Ver recursos",
                  },
                ].map((item) => (
                  <div key={item.title} className="flex flex-col gap-2">
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center mb-1"
                      style={{ backgroundColor: "#E8F4FB" }}
                    >
                      {item.icon}
                    </div>
                    <h3
                      className="text-base"
                      style={{ fontFamily: "'AvantGarde-Demi', sans-serif", color: "#0D3B7F" }}
                    >
                      {item.title}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: "#898989" }}>
                      {item.desc}
                    </p>
                    <a
                      href="#contacto"
                      className="text-sm font-semibold underline underline-offset-2 mt-1 hover:opacity-70 transition-opacity"
                      style={{ color: "#238CCC" }}
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

      {/* Botón flotante de WhatsApp */}
      <a
        href="https://wa.me/521XXXXXXXXXX"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-[9999] flex items-center justify-center w-14 h-14 rounded-full shadow-lg hover:scale-110 transition-transform"
        style={{ backgroundColor: "#25D366" }}
        aria-label="Contactar por WhatsApp"
      >
        <svg viewBox="0 0 24 24" className="w-7 h-7 fill-white" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>

      {/* Contact Form Section */}
      <section id="contacto" className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left Column - Info */}
            <div>
              <h2
                className="text-4xl md:text-5xl mb-6"
                style={{
                  fontFamily: "'AvantGarde-Demi', sans-serif",
                  color: "#0D3B7F",
                }}
              >
                ¿Listo para Comenzar?
              </h2>
              <p
                className="text-xl mb-8 leading-relaxed"
                style={{ color: "#898989" }}
              >
                Complete el formulario y uno de nuestros especialistas se pondrá en contacto con usted en menos de 24 horas.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#238CCC]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6" style={{ color: "#238CCC" }} />
                  </div>
                  <div>
                    <h3
                      className="text-lg mb-2"
                      style={{
                        fontFamily: "'AvantGarde-Demi', sans-serif",
                        color: "#0D3B7F",
                      }}
                    >
                      Asesoría Personalizada
                    </h3>
                    <p style={{ color: "#898989" }}>
                      Analizamos las necesidades específicas de su clínica
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#238CCC]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-6 h-6" style={{ color: "#238CCC" }} />
                  </div>
                  <div>
                    <h3
                      className="text-lg mb-2"
                      style={{
                        fontFamily: "'AvantGarde-Demi', sans-serif",
                        color: "#0D3B7F",
                      }}
                    >
                      Sin Compromiso
                    </h3>
                    <p style={{ color: "#898989" }}>
                      Cotización gratuita y sin obligación de contratación
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#238CCC]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6" style={{ color: "#238CCC" }} />
                  </div>
                  <div>
                    <h3
                      className="text-lg mb-2"
                      style={{
                        fontFamily: "'AvantGarde-Demi', sans-serif",
                        color: "#0D3B7F",
                      }}
                    >
                      Respuesta Rápida
                    </h3>
                    <p style={{ color: "#898989" }}>
                      Nos contactamos en menos de 24 horas hábiles
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Form */}
            <div className="bg-white/80 backdrop-blur-md rounded-2xl p-8 border border-gray-200 shadow-lg">
              <form className="space-y-6">
                <div>
                  <label
                    className="block mb-2"
                    style={{
                      fontFamily: "'AvantGarde-Demi', sans-serif",
                      color: "#0D3B7F",
                    }}
                  >
                    Nombre Completo *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#238CCC] focus:ring-2 focus:ring-[#238CCC]/20 outline-none transition-all"
                    placeholder="Dr. Juan Pérez"
                  />
                </div>

                <div>
                  <label
                    className="block mb-2"
                    style={{
                      fontFamily: "'AvantGarde-Demi', sans-serif",
                      color: "#0D3B7F",
                    }}
                  >
                    Correo Electrónico *
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#238CCC] focus:ring-2 focus:ring-[#238CCC]/20 outline-none transition-all"
                    placeholder="correo@clinica.com"
                  />
                </div>

                <div>
                  <label
                    className="block mb-2"
                    style={{
                      fontFamily: "'AvantGarde-Demi', sans-serif",
                      color: "#0D3B7F",
                    }}
                  >
                    Teléfono *
                  </label>
                  <input
                    type="tel"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#238CCC] focus:ring-2 focus:ring-[#238CCC]/20 outline-none transition-all"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>

                <div>
                  <label
                    className="block mb-2"
                    style={{
                      fontFamily: "'AvantGarde-Demi', sans-serif",
                      color: "#0D3B7F",
                    }}
                  >
                    Nombre de la Clínica *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#238CCC] focus:ring-2 focus:ring-[#238CCC]/20 outline-none transition-all"
                    placeholder="Clínica Médica XYZ"
                  />
                </div>

                <div>
                  <label
                    className="block mb-2"
                    style={{
                      fontFamily: "'AvantGarde-Demi', sans-serif",
                      color: "#0D3B7F",
                    }}
                  >
                    Mensaje
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#238CCC] focus:ring-2 focus:ring-[#238CCC]/20 outline-none transition-all resize-none"
                    placeholder="Cuéntenos sobre su clínica y sus necesidades..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-[#238CCC] text-white rounded-lg hover:bg-[#0D3B7F] transition-all flex items-center justify-center gap-2 shadow-lg"
                  style={{
                    fontFamily: "'AvantGarde-Demi', sans-serif",
                  }}
                >
                  Enviar Mensaje
                  <ArrowRight className="w-5 h-5" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-8 md:px-12">
          <div className="rounded-3xl overflow-hidden grid md:grid-cols-2 min-h-[480px]" style={{ backgroundColor: "#0D3B7F" }}>
            
            {/* Texto lado izquierdo */}
            <div className="flex flex-col justify-center px-10 md:px-16 py-14 gap-6">
              <span
                className="text-xs uppercase tracking-widest"
                style={{ color: "#238CCC" }}
              >
                Únete a nuestra red
              </span>
              <h2
                className="text-3xl md:text-4xl leading-tight text-white"
                style={{ fontFamily: "'AvantGarde-Demi', sans-serif" }}
              >
                Transforma tu clínica con soluciones de alergia de primer nivel
              </h2>
              <p className="text-base leading-relaxed" style={{ color: "#B0C4DE" }}>
                Miles de clínicas ya confían en Foster Stern Group para ofrecer 
                servicios de alergia de alta calidad. Da el siguiente paso y 
                lleva tu práctica médica al siguiente nivel.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 mt-2">
                <a
                  href="#contacto"
                  className="px-7 py-3 rounded-xl text-center text-white transition-all hover:opacity-90"
                  style={{ backgroundColor: "#238CCC", fontFamily: "'AvantGarde-Demi', sans-serif" }}
                >
                  Hablar con un especialista
                </a>
                <a
                  href="#servicios"
                  className="px-7 py-3 rounded-xl text-center transition-all hover:bg-white/10 border border-white/30"
                  style={{ color: "#fff", fontFamily: "'AvantGarde-Demi', sans-serif" }}
                >
                  Ver servicios
                </a>
              </div>
            </div>

            {/* Imagen lado derecho */}
            <div className="relative hidden md:block">
              <img
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80"
                alt="Médico especialista en alergias"
                className="absolute inset-0 w-full h-full object-cover"
                style={{ filter: "brightness(0.85)" }}
              />
              {/* Overlay degradado para integrar con el azul */}
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(to right, #0D3B7F 0%, transparent 40%)" }}
              />
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="mb-4">
                <ImageWithFallback
                  src="/src/imports/ChatGPT_Image_13_may_2026__17_55_44.png"
                  alt="Foster Stern Group"
                  className="h-10 w-auto"
                />
              </div>
              <p
                className="leading-relaxed"
                style={{ color: "#898989" }}
              >
                Soluciones innovadoras para servicios de alergia
                en clínicas médicas.
              </p>
            </div>

            <div>
              <h4
                className="mb-4"
                style={{
                  fontFamily: "'AvantGarde-Demi', sans-serif",
                  color: "#0D3B7F",
                }}
              >
                Servicios
              </h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="hover:text-[#238CCC] transition-colors"
                    style={{ color: "#898989" }}
                  >
                    Pruebas de Alergia
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-[#238CCC] transition-colors"
                    style={{ color: "#898989" }}
                  >
                    Inmunoterapia
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-[#238CCC] transition-colors"
                    style={{ color: "#898989" }}
                  >
                    Protocolos Clínicos
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-[#238CCC] transition-colors"
                    style={{ color: "#898989" }}
                  >
                    Capacitación
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4
                className="mb-4"
                style={{
                  fontFamily: "'AvantGarde-Demi', sans-serif",
                  color: "#0D3B7F",
                }}
              >
                Empresa
              </h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="hover:text-[#238CCC] transition-colors"
                    style={{ color: "#898989" }}
                  >
                    Sobre Nosotros
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-[#238CCC] transition-colors"
                    style={{ color: "#898989" }}
                  >
                    Casos de Éxito
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-[#238CCC] transition-colors"
                    style={{ color: "#898989" }}
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-[#238CCC] transition-colors"
                    style={{ color: "#898989" }}
                  >
                    Contacto
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4
                className="mb-4"
                style={{
                  fontFamily: "'AvantGarde-Demi', sans-serif",
                  color: "#0D3B7F",
                }}
              >
                Contacto
              </h4>
              <ul
                className="space-y-2"
                style={{ color: "#898989" }}
              >
                <li>info@allergypro.com</li>
                <li>+1 (555) 123-4567</li>
                <li>Lun - Vie: 9:00 - 18:00</li>
              </ul>
            </div>
          </div>

          <div
            className="border-t border-gray-200 pt-8 text-center"
            style={{ color: "#898989" }}
          >
            <p>
              &copy; 2026 Foster Stern Group. Todos los derechos
              reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}