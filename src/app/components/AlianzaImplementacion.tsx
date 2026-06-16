const features = [
  {
    title: "Enfoque personalizado",
    desc: "Adaptado a las necesidades de su clínica y pacientes.",
    svg: (
      <svg viewBox="0 0 40 36" fill="none" width="52" height="48">
        <circle cx="13" cy="10" r="6" stroke="#054A5B" strokeWidth="1.8"/>
        <circle cx="27" cy="10" r="6" stroke="#054A5B" strokeWidth="1.8"/>
        <path d="M2 34c0-6.627 4.925-12 11-12h3" stroke="#054A5B" strokeWidth="1.8" strokeLinecap="round"/>
        <path d="M38 34c0-6.627-4.925-12-11-12h-3" stroke="#054A5B" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: "Resultados medibles",
    desc: "Mejoramos la eficiencia y la experiencia del paciente.",
    svg: (
      <svg viewBox="0 0 40 36" fill="none" width="52" height="48">
        <path d="M5 26l7-9 7 5 8-12 7-6" stroke="#054A5B" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        <rect x="4" y="28" width="5" height="6" rx="1" stroke="#054A5B" strokeWidth="1.5"/>
        <rect x="15" y="22" width="5" height="12" rx="1" stroke="#054A5B" strokeWidth="1.5"/>
        <rect x="26" y="16" width="5" height="18" rx="1" stroke="#054A5B" strokeWidth="1.5"/>
      </svg>
    ),
  },
  {
    title: "Acompañamiento continuo",
    desc: "Soporte experto en cada etapa del proceso.",
    svg: (
      <svg viewBox="0 0 40 36" fill="none" width="52" height="48">
        <circle cx="14" cy="18" r="9" stroke="#054A5B" strokeWidth="1.8"/>
        <path d="M14 12v6l4 4" stroke="#054A5B" strokeWidth="1.8" strokeLinecap="round"/>
        <path d="M27 10l6-4M27 10l-2 6M27 10l6 3" stroke="#054A5B" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: "Calidad y confianza",
    desc: "Protocolos basados en evidencia y mejores prácticas.",
    svg: (
      <svg viewBox="0 0 40 36" fill="none" width="52" height="48">
        <path d="M20 3L8 8v10c0 8 5.5 14 12 16 6.5-2 12-8 12-16V8L20 3z" stroke="#054A5B" strokeWidth="1.8" strokeLinejoin="round"/>
        <path d="M14 18l4 4 8-8" stroke="#054A5B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
];

export function AlianzaImplementacion() {
  return (
    <section style={{ background: "#f4f7f9", padding: "56px 0" }}>
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 20px" }}>

        {/* ENCABEZADO */}
        <div style={{ display: "flex", alignItems: "flex-start", gap: 12, marginBottom: 8 }}>
          <div style={{
            width: 46, height: 46, borderRadius: "50%", background: "#008154",
            display: "flex", alignItems: "center", justifyContent: "center",
            flexShrink: 0, marginTop: 4,
          }}>
            <svg viewBox="0 0 24 24" fill="none" width="22" height="22">
              <path d="M5 13l3-3h3l3 2h3l4-4" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M5 13l3 3 2-1 3 2 4-2 3 1 3-3" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <h2 style={{
            fontFamily: "'Source Sans 3','Nunito Sans',sans-serif",
            fontWeight: 800,
            fontSize: "clamp(24px, 5vw, 34px)",
            color: "#054A5B",
            lineHeight: 1.2,
            margin: 0,
          }}>
            Cómo Implementamos la{" "}
            <span style={{ color: "#008154" }}>Alianza</span>{" "}
            en su Clínica
          </h2>
        </div>
        <p style={{
          fontFamily: "'Source Sans 3',sans-serif",
          fontSize: 13.5,
          color: "#5a7a84",
          lineHeight: 1.55,
          margin: "0 0 18px 0",
        }}>
          Un proceso colaborativo, estratégico y enfocado en resultados
          para el bienestar de sus pacientes y el crecimiento de su clínica.
        </p>

        {/* TARJETA ÚNICA */}
        <div style={{
          borderRadius: 18,
          overflow: "hidden",
          boxShadow: "0 4px 24px rgba(5,74,91,0.13)",
          background: "#e8eef2",
        }}>

          {/* FOTO */}
          <div style={{ position: "relative", width: "100%", paddingBottom: "56%" }}>
            <img
              src="/Fostersterm/1.5.png"
              alt="Clínica"
              style={{
                position: "absolute", inset: 0,
                width: "100%", height: "100%",
                objectFit: "cover", display: "block",
              }}
            />
            
            
          </div>

          {/* FRANJA DESCRIPCIÓN */}
          <div style={{
            display: "flex", alignItems: "center", gap: 14,
            background: "#dde5ea",
            padding: "16px 18px",
          }}>
            <div style={{
              width: 50, height: 50, borderRadius: 12,
              background: "#008154",
              display: "flex", alignItems: "center", justifyContent: "center",
              flexShrink: 0,
            }}>
              <svg viewBox="0 0 28 28" fill="none" width="24" height="24">
                <rect x="4" y="2" width="20" height="24" rx="3" stroke="white" strokeWidth="1.8"/>
                <path d="M9 4V3a3 3 0 0 1 6 0v1" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
                <path d="M8 14l4 4 8-8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M8 20h5" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
              </svg>
            </div>
            <p style={{
              fontFamily: "'Source Sans 3',sans-serif",
              fontWeight: 700,
              fontSize: "clamp(14px, 2.8vw, 17px)",
              color: "#054A5B",
              lineHeight: 1.4,
              margin: 0,
            }}>
              Evaluamos su práctica y diseñamos el programa de alergia{" "}
              <span style={{ color: "#008154" }}>a medida para su clínica.</span>
            </p>
          </div>

          {/* 4 ÍCONOS */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            background: "#fff",
            padding: "16px 10px 18px",
          }}>
            {features.map(({ title, desc, svg }) => (
              <div key={title} style={{
                display: "flex", flexDirection: "column",
                alignItems: "center", textAlign: "center",
                padding: "12px 10px",
gap: 10,
              }}>
                {svg}
                <p style={{
                  fontFamily: "'Source Sans 3',sans-serif",
                  fontWeight: 800,
fontSize: "clamp(14px, 1.4vw, 18px)",
color: "#054A5B",
margin: 0,
lineHeight: 1.35,
letterSpacing: "-0.01em",
                }}>
                  {title}
                </p>
                <p style={{
                  fontFamily: "'Source Sans 3',sans-serif",
                  fontSize: "clamp(12px, 1.1vw, 15px)",
color: "#5a7a84",
margin: 0,
lineHeight: 1.55,
maxWidth: 180,
                }}>
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}