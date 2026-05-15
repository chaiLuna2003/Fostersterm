import {
  Microscope,
  FlaskConical,
  Syringe,
  CheckCircle2,
  Users,
  Clock,
  Shield,
  ArrowRight,
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
          <div className="max-w-7xl mx-auto px-4 md:px-6 py-4 md:py-6 flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <ImageWithFallback
                src="/src/imports/ChatGPT_Image_13_may_2026__17_55_44.png"
                alt="Foster Stern Group"
                className="w-auto h-16 md:h-24 lg:h-[100px]"
              />
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <a
                href="#servicios"
                className="hover:text-[#238CCC] transition-colors"
                style={{ color: "#898989" }}
              >
                Servicios
              </a>
              <a
                href="#beneficios"
                className="hover:text-[#238CCC] transition-colors"
                style={{ color: "#898989" }}
              >
                Beneficios
              </a>
              <a
                href="#proceso"
                className="hover:text-[#238CCC] transition-colors"
                style={{ color: "#898989" }}
              >
                Proceso
              </a>
              <a
                href="#faq"
                className="hover:text-[#238CCC] transition-colors"
                style={{ color: "#898989" }}
              >
                FAQ
              </a>
              <a
                href="#contacto"
                className="px-6 py-2.5 bg-[#238CCC] text-white rounded-lg hover:bg-[#0D3B7F] transition-all shadow-md"
                style={{
                  fontFamily: "'AvantGarde-Demi', sans-serif",
                }}
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