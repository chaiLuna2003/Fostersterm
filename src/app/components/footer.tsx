
import { ImageWithFallback } from "./figma/ImageWithFallback";

type FooterProps = {
  language?: "es" | "en";
};

const translations = {
  es: {
    description:
      "Su éxito es nuestro éxito. Transforme su clínica con nuestros servicios integrales de alergias —sin inversión inicial y con el respaldo de nuestro equipo de expertos— para generar ingresos adicionales en su consulta mientras crecemos juntos.",

    info: "Información",
    about: "Sobre Nosotros",
    services: "Servicios",
    faq: "FAQ",
    contact: "Contacto",

    contactUs: "Contáctanos",

    businessHours: "Horario de Atención",
    hours: "9:00AM – 5:00PM, Lunes – Viernes",
    officeHours: "Atendemos en horario de oficina",

    rights: "Todos los derechos reservados.",
    privacy: "Privacidad",
    terms: "Términos",
  },

  en: {
    description:
      "Your success is our success. Transform your clinic with our comprehensive allergy services —with no initial investment and the support of our expert team— to generate additional revenue for your practice while we grow together.",

    info: "Information",
    about: "About Us",
    services: "Services",
    faq: "FAQ",
    contact: "Contact",

    contactUs: "Contact Us",

    businessHours: "Business Hours",
    hours: "9:00AM – 5:00PM, Monday – Friday",
    officeHours: "We are available during office hours",

    rights: "All rights reserved.",
    privacy: "Privacy",
    terms: "Terms",
  },
};

export default function Footer({
  language = "es",
}: FooterProps) {
  const t = translations[language];

  const infoLinks = [
    {
      label: t.about,
      href: language === "es" ? "/nosotros" : "/en/about",
    },
    {
      label: t.services,
      href: "#servicios",
    },
    {
      label: t.faq,
      href: "#faq",
    },
    {
      label: t.contact,
      href: "#contacto",
    },
  ];

  const socials = [
    {
      label: "X",
      href: "https://x.com/fostersternllc",
      path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z",
    },
    {
      label: "Facebook",
      href: "https://www.facebook.com/profile.php?id=61591228717914",
      path: "M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z",
    },
    {
      label: "YouTube",
      href: "https://www.youtube.com/@FosterSternLLC",
      path: "M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 00-1.95 1.96A29 29 0 001 12a29 29 0 00.46 5.58a2.78 2.78 0 001.95 1.95C5.12 20 12 20 12 20s6.88 0 8.59-.47a2.78 2.78 0 001.95-1.95A29 29 0 0023 12a29 29 0 00-.46-5.58zM9.75 15.02V8.98L15.5 12z",
    },
    {
      label: "Instagram",
      href: "https://www.instagram.com/fostersternllc",
      path: "M7.75 2C4.57 2 2 4.57 2 7.75v8.5C2 19.43 4.57 22 7.75 22h8.5C19.43 22 22 19.43 22 16.25v-8.5C22 4.57 19.43 2 16.25 2h-8.5zm0 2h8.5C18.33 4 20 5.67 20 7.75v8.5C20 18.33 18.33 20 16.25 20h-8.5C5.67 20 4 18.33 4 16.25v-8.5C4 5.67 5.67 4 7.75 4zm8.75 1a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5zM12 7a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6z",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/foster-stern-llc-29b25340a",
      path: "M4.98 3.5C4.98 4.88 3.86 6 2.48 6S0 4.88 0 3.5 1.12 1 2.48 1s2.5 1.12 2.5 2.5zM.5 8h4V24h-4V8zm7.5 0h3.8v2.16h.05c.53-1 1.82-2.16 3.75-2.16 4.01 0 4.75 2.64 4.75 6.07V24h-4v-7.1c0-1.7-.03-3.88-2.36-3.88-2.36 0-2.72 1.84-2.72 3.75V24h-4V8z",
    },
  ];

  return (
    <>
      <footer
        className="bg-white border-t"
        style={{ borderColor: "var(--brand-secondary)" }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-10 py-16 lg:py-20">
          {/* GRID */}
          <div
            className="
              grid
              grid-cols-1
              sm:grid-cols-2
              xl:grid-cols-4
              gap-10
              md:gap-12
              lg:gap-14
              mb-14
            "
          >
            {/* COL 1 */}
            <div className="flex flex-col gap-6">
              <ImageWithFallback
                src="/LogoFS.png"
                alt="Foster Stern Group"
                className="
                  h-24
                  sm:h-28
                  md:h-32
                  lg:h-36
                  w-auto
                  object-contain
                "
              />

              <p
                className="
                  text-base
                  md:text-lg
                  lg:text-lg
                  leading-relaxed
                "
                style={{
                  color: "var(--brand-muted)",
                  fontFamily: "'Nunito Sans', sans-serif",
                }}
              >
                {t.description}
              </p>

              {/* SOCIALS */}
              <div className="flex items-center gap-4 mt-2">
                {socials.map(({ label, href, path }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="
                      w-8 h-8
                      md:w-10 md:h-10
                      lg:w-10 lg:h-10
                      rounded-full
                      flex
                      items-center
                      justify-center
                      transition-all
                      hover:scale-110
                    "
                    style={{ backgroundColor: "var(--brand-green)" }}
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className="
                        w-5 h-5
                        md:w-6 md:h-6
                        lg:w-7 lg:h-7
                        fill-white
                      "
                    >
                      <path d={path} />
                    </svg>
                  </a>
                ))}
              </div>
            </div>

            {/* COL 2 */}
            <div>
              <h4
                className="
                  text-xl
                  md:text-xl
                  lg:text-xl
                  font-bold
                  mb-6
                "
                style={{
                  color: "var(--brand-primary)",
                  fontFamily: "'Nunito Sans', sans-serif",
                }}
              >
                {t.info}
              </h4>

              <ul className="space-y-4">
                {infoLinks.map(({ label, href }) => (
                  <li key={label}>
                    <a
                      href={href}
                      className="
                        footer-link
                        text-base
                        md:text-lg
                        lg:text-lg
                        flex
                        items-center
                        gap-3
                      "
                      style={{
                        color: "var(--brand-muted)",
                        fontFamily: "'Nunito Sans', sans-serif",
                      }}
                    >
                      <svg
                        viewBox="0 0 24 24"
                        className="
                          w-4 h-4
                          md:w-5 md:h-5
                          flex-shrink-0
                        "
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={3}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 5l7 7-7 7"
                        />
                      </svg>

                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* COL 3 */}
            <div>
              <h4
                className="
                  text-xl
                  md:text-xl
                  lg:text-xl
                  font-bold
                  mb-6
                "
                style={{
                  color: "var(--brand-primary)",
                  fontFamily: "'Nunito Sans', sans-serif",
                }}
              >
                {t.contactUs}
              </h4>

              <ul className="space-y-5">
                <li className="flex items-start gap-4">
                  <div
                    className="
                      w-10 h-10
                      rounded-full
                      flex
                      items-center
                      justify-center
                      flex-shrink-0
                      mt-1
                    "
                    style={{ backgroundColor: "var(--brand-light)" }}
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className="w-5 h-5"
                      fill="currentColor"
                      style={{ color: "var(--brand-green)" }}
                    >
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                    </svg>
                  </div>

                  <span
                    className="text-base md:text-lg lg:text-xl leading-relaxed"
                    style={{
                      color: "var(--brand-muted)",
                      fontFamily: "'Nunito Sans', sans-serif",
                    }}
                  >
                    7480 SW 40th Street
                    <br />
                    Suite 850
                    <br />
                    Miami, FL 33155
                  </span>
                </li>

                <li className="flex items-center gap-4">
                  <div
                    className="
                      w-10 h-10
                      rounded-full
                      flex
                      items-center
                      justify-center
                      flex-shrink-0
                    "
                    style={{ backgroundColor: "var(--brand-light)" }}
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className="w-5 h-5"
                      fill="currentColor"
                      style={{ color: "var(--brand-green)" }}
                    >
                      <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6z" />
                    </svg>
                  </div>

                  <span
                    className="text-base md:text-lg lg:text-xl"
                    style={{
                      color: "var(--brand-muted)",
                      fontFamily: "'Nunito Sans', sans-serif",
                    }}
                  >
                    info@fosterstern.com
                  </span>
                </li>
              </ul>
            </div>

            {/* COL 4 */}
            <div>
              <h4
                className="
                  text-xl
                  md:text-xl
                  lg:text-xl
                  font-bold
                  mb-6
                "
                style={{
                  color: "var(--brand-primary)",
                  fontFamily: "'Nunito Sans', sans-serif",
                }}
              >
                {t.businessHours}
              </h4>

              <div className="flex items-start gap-4">
                <div
                  className="
                    w-10 h-10
                    rounded-full
                    flex
                    items-center
                    justify-center
                    flex-shrink-0
                    mt-1
                  "
                  style={{ backgroundColor: "var(--brand-light)" }}
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="w-5 h-5"
                    fill="currentColor"
                    style={{ color: "var(--brand-green)" }}
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
                  </svg>
                </div>

                <div>
                  <p
                    className="
                      text-base
                      md:text-lg
                      lg:text-xl
                      font-semibold
                    "
                    style={{ color: "var(--brand-primary)" }}
                  >
                    {t.hours}
                  </p>

                  <p
                    className="
                      text-base
                      md:text-lg
                      lg:text-xl
                      mt-2
                    "
                    style={{ color: "var(--brand-muted)" }}
                  >
                    {t.officeHours}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* BOTTOM */}
          <div
            className="
              border-t
              pt-8
              mt-6
              flex
              flex-col
              md:flex-row
              items-center
              justify-between
              gap-5
            "
            style={{ borderColor: "var(--brand-secondary)" }}
          >
            <p
              className="text-base md:text-lg"
              style={{ color: "var(--brand-muted)" }}
            >
              &copy; 2026 Foster Stern Group. {t.rights}
            </p>

            <div className="flex gap-6">
              <a
                href="#"
                className="footer-link text-base md:text-lg lg:text-xl"
                style={{
                  color: "var(--brand-muted)",
                  fontFamily: "'Nunito Sans', sans-serif",
                }}
              >
                {t.privacy}
              </a>

              <a
                href="#"
                className="footer-link text-base md:text-lg lg:text-xl"
                style={{
                  color: "var(--brand-muted)",
                  fontFamily: "'Nunito Sans', sans-serif",
                }}
              >
                {t.terms}
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

