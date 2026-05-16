import React from "react";

const blogs = [
  {
    id: 1,
    title: "Nuevos Tratamientos para la Rinitis Alérgica",
    date: "15 Mayo 2026",
    image:
      "https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=1200&auto=format&fit=crop",
    excerpt:
      "Conoce las nuevas alternativas médicas para mejorar la calidad de vida de pacientes con alergias respiratorias.",
  },
  {
    id: 2,
    title: "¿Cómo Detectar Alergias Alimentarias?",
    date: "10 Mayo 2026",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1200&auto=format&fit=crop",
    excerpt:
      "Aprende a identificar los síntomas más comunes y cuándo acudir con un especialista.",
  },
  {
    id: 3,
    title: "Importancia de la Inmunoterapia",
    date: "05 Mayo 2026",
    image:
      "https://images.unsplash.com/photo-1538108149393-fbbd81895907?q=80&w=1200&auto=format&fit=crop",
    excerpt:
      "La inmunoterapia puede ayudar a reducir reacciones alérgicas de manera progresiva.",
  },
  {
    id: 4,
    title: "Alergias Estacionales y Cómo Prevenirlas",
    date: "28 Abril 2026",
    image:
      "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=1200&auto=format&fit=crop",
    excerpt:
      "Consejos útiles para disminuir los síntomas durante temporadas críticas.",
  },
  {
    id: 5,
    title: "Cuidados Respiratorios en Niños",
    date: "20 Abril 2026",
    image:
      "https://images.unsplash.com/photo-1582750433449-648ed127bb54?q=80&w=1200&auto=format&fit=crop",
    excerpt:
      "Cómo proteger la salud respiratoria infantil frente a alergias y contaminantes.",
  },
  {
    id: 6,
    title: "¿Qué es el Asma Alérgica?",
    date: "12 Abril 2026",
    image:
      "https://images.unsplash.com/photo-1603398938378-e54eab446dde?q=80&w=1200&auto=format&fit=crop",
    excerpt:
      "Descubre las causas más frecuentes y tratamientos recomendados.",
  },
  {
    id: 7,
    title: "Factores que Aumentan las Alergias",
    date: "04 Abril 2026",
    image:
      "https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?q=80&w=1200&auto=format&fit=crop",
    excerpt:
      "Conoce los elementos ambientales que afectan tu salud diariamente.",
  },
  {
    id: 8,
    title: "Beneficios de un Diagnóstico Temprano",
    date: "29 Marzo 2026",
    image:
      "https://images.unsplash.com/photo-1516549655669-df83a0774514?q=80&w=1200&auto=format&fit=crop",
    excerpt:
      "Detectar alergias a tiempo puede mejorar significativamente el tratamiento.",
  },
  {
    id: 9,
    title: "La Relación Entre Estrés y Alergias",
    date: "20 Marzo 2026",
    image:
      "https://images.unsplash.com/photo-1512678080530-7760d81faba6?q=80&w=1200&auto=format&fit=crop",
    excerpt:
      "El estrés puede influir en síntomas alérgicos más intensos.",
  },
  {
    id: 10,
    title: "Pruebas Clínicas Más Utilizadas",
    date: "11 Marzo 2026",
    image:
      "https://images.unsplash.com/photo-1580281657527-47b6351c0dcc?q=80&w=1200&auto=format&fit=crop",
    excerpt:
      "Exploramos las pruebas médicas más comunes para detectar alergias.",
  },
  {
    id: 11,
    title: "Alergias en Temporada de Frío",
    date: "02 Marzo 2026",
    image:
      "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?q=80&w=1200&auto=format&fit=crop",
    excerpt:
      "Consejos para evitar complicaciones durante climas fríos.",
  },
  {
    id: 12,
    title: "Cómo Mejorar la Calidad del Aire en Casa",
    date: "24 Febrero 2026",
    image:
      "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=1200&auto=format&fit=crop",
    excerpt:
      "Pequeños cambios en casa pueden ayudar mucho a personas alérgicas.",
  },
];

export default function Blog() {
  return (
    <div className="min-h-screen bg-[#F7FAFC] py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}
        <div className="text-center mb-16">
          <span className="bg-[var(--brand-green)]/10 text-[var(--brand-green)] px-4 py-2 rounded-full text-sm font-medium">
            Blog Médico
          </span>

          <h1 className="text-5xl font-bold text-[var(--brand-primary)] mt-6">
            Últimos Artículos y Noticias
          </h1>

          <p className="text-[#898989] mt-5 max-w-2xl mx-auto text-lg">
            Información médica, recomendaciones y novedades sobre alergias,
            inmunoterapia y bienestar respiratorio.
          </p>
        </div>

        {/* GRID BLOGS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 group"
            >
              {/* IMAGE */}
              <div className="overflow-hidden h-60">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* CONTENT */}
              <div className="p-7">
                <span className="text-sm text-[var(--brand-green)] font-medium">
                  {blog.date}
                </span>

                <h2 className="text-2xl font-bold text-[var(--brand-primary)] mt-3 leading-snug">
                  {blog.title}
                </h2>

                <p className="text-[#898989] mt-4 leading-relaxed">
                  {blog.excerpt}
                </p>

                <button className="mt-6 text-[var(--brand-green)] font-semibold hover:text-[var(--brand-primary)] transition-colors">
                  Leer más →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}