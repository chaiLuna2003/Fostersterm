import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { MobileMenu } from "./MobileMenu";

interface NavbarProps {
  forceScrolled?: boolean;
  lang?: "es" | "en";
}

const NAV_STYLES = `
  @keyframes logoFadeIn {
    0%   { opacity: 0; transform: translateY(-8px) scale(0.95); }
    100% { opacity: 1; transform: translateY(0) scale(1); }
  }
  @keyframes navItemZoomIn {
    0%   { opacity: 0; transform: scale(0.7); }
    60%  { transform: scale(1.06); }
    100% { opacity: 1; transform: scale(1); }
  }
  .logo-link {
    display: inline-flex;
  }
  .logo-link img,
  .logo-link .logo-fadein {
    transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1) !important;
  }
  .logo-link:hover img,
  .logo-link:hover .logo-fadein {
    transform: scale(0.85) !important;
  }
  .logo-fadein {
    animation: logoFadeIn 0.7s cubic-bezier(0.22, 1, 0.36, 1) both;
  }
  .nav-item-zoom {
    display: inline-block;
    animation: navItemZoomIn 0.45s cubic-bezier(0.34, 1.56, 0.64, 1) both;
    transition: transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1);
  }
  .nav-item-zoom:hover {
    transform: scale(1.18);
  }
`;

export function Navbar({ forceScrolled = false, lang = "es" }: NavbarProps) {
  const [scrolled, setScrolled] = useState(forceScrolled);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (forceScrolled) { setScrolled(true); return; }
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [forceScrolled]);

  const isHeroPage = location.pathname === "/" || location.pathname === "/english";
  const isTransparent = isHeroPage && !scrolled;

  const textColor   = isTransparent ? "rgba(255,255,255,0.92)" : "#054A5B";
  const borderColor = isTransparent ? "rgba(255,255,255,0.7)"  : "#054A5B";

  const isEn = lang === "en";

  // Navega a home y luego hace scroll a la sección
  const goToSection = (sectionId: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    const homePath = isEn ? "/english" : "/";
    const isHome = location.pathname === homePath || location.pathname === "/Fostersterm/";
    if (isHome) {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate(homePath);
      setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
      }, 350);
    }
  };

  const mainSections = isEn
    ? [
        { label: "Home",       id: "",  to: "/english"       },
        { label: "About Us",   id: "",  to: "/english/about" },
        { label: "Services",   id: "servicios"               },
        { label: "Benefits",   id: "beneficios"              },
        { label: "Process",    id: "proceso"                 },
        { label: "FAQ",        id: "faq"                     },
      ]
    : [
        { label: "Nosotros",   id: "",           to: "/nosotros" },
        { label: "Servicios",  id: "servicios"  },
        { label: "Beneficios", id: "beneficios" },
        { label: "Proceso",    id: "proceso"    },
        { label: "FAQ",        id: "faq"        },
      ];

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out"
      style={{
        backgroundColor: scrolled ? "rgba(255, 255, 255, 0.5)" : "transparent",
        backdropFilter:       scrolled ? "blur(20px) saturate(180%)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(20px) saturate(180%)" : "none",
        boxShadow:    scrolled ? "0 4px 30px rgba(0, 0, 0, 0.05)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255, 255, 255, 0.4)" : "1px solid transparent",
      }}
    >
      <style>{NAV_STYLES}</style>

      <div className="max-w-7xl mx-auto px-4 md:px-6 py-3 md:py-4 flex items-center justify-between transition-all duration-300">

        {/* Logo con fade-in al montar + zoom-out hover + color al hacer scroll */}
        
<Link
  to={isEn ? "/english" : "/"}
  className="logo-link flex items-center"
>
  <ImageWithFallback
    src="/Fostersterm/LogoFS.png"
    alt="Foster Stern Group"
    className="
      logo-fadein
      h-[72px]
      md:h-[88px]
      lg:h-[115px]
      w-auto
      object-contain
    "
    style={
      scrolled
        ? {
            filter:
              "brightness(0) saturate(100%) invert(37%) sepia(96%) saturate(600%) hue-rotate(12 2deg) brightness(92%)",
          }
        : undefined
    }
  />
</Link>



        {/* Desktop nav — lg+ */}
        <div className="hidden lg:flex items-center gap-5 xl:gap-7">

          {mainSections.map(({ label, id, to }, i) => {
            const delay = `${i * 0.07 + 0.15}s`;
            const baseClass =
  "nav-item-zoom nav-link text-base lg:text-lg xl:text-xl font-bold";

            // Link a ruta propia (Nosotros, Blog…)
            if (to) {
              return (
                <Link
                  key={label}
                  to={to}
                  className={baseClass}
                  style={{ color: textColor, animationDelay: delay }}
                >
                  {label}
                </Link>
              );
            }

            // Anchor a sección viva
            return (
              <a
                key={label}
                href={`/#${id}`}
                onClick={goToSection(id)}
                className={baseClass}
                style={{ color: textColor, animationDelay: delay }}
              >
                {label}
              </a>
            );
          })}

          {/* Blog */}
          <Link
            to={isEn ? "/english/blog" : "/blog"}
            className="nav-item-zoom nav-link text-base lg:text-lg xl:text-xl font-bold"
            style={{ color: textColor, animationDelay: `${mainSections.length * 0.07 + 0.15}s` }}
          >
            Blog
          </Link>

          {/* CTA Contactar */}
          <a
            href={isEn ? "/english#contacto" : "/#contacto"}
            onClick={goToSection("contacto")}
            className="nav-item-zoom nav-cta px-4 py-2 rounded-xl text-white shadow-md font-bold text-base lg:text-lg xl:text-lg"
            style={{
              backgroundColor: "var(--brand-green)",
              
            }}
          >
            {isEn ? "Contact " : "Contactar"}
          </a>

          {/* Selector de idioma */}
          {isEn ? (
            <Link
              to="/"
              className="nav-item-zoom px-4 py-2 rounded-xl font-bold border-2 text-base lg:text-lg xl:text-lg"
              style={{
                color: textColor,
                borderColor,
                
              }}
            >
              Español
            </Link>
          ) : (
            <Link
              to="/english"
              className="nav-item-zoom px-4 py-2 rounded-xl font-bold border-2 text-base lg:text-lg xl:text-lg"
              style={{
                color: textColor,
                borderColor,
                
              }}
            >
            English
            </Link>
          )}
        </div>

        {/* Hamburguesa — móvil y tablet */}
        <MobileMenu scrolled={scrolled} lang={lang} />
      </div>
    </nav>
  );
}