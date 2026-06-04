import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { MobileMenu } from "./MobileMenu";

interface NavbarProps {
  /** Si es true, el navbar arranca con fondo sólido desde el inicio (para páginas sin hero oscuro) */
  forceScrolled?: boolean;
  /** Idioma del navbar: 'es' (por defecto) o 'en' */
  lang?: "es" | "en";
}

// Color de marca al hacer scroll
const SCROLLED_BG = "rgba(7, 102, 119, 0.96)";
const SCROLLED_BORDER = "rgba(255, 255, 255, 0.15)";
const SCROLLED_TEXT = "rgba(255, 255, 255, 0.92)";
const SCROLLED_SHADOW = "0 4px 30px rgba(7, 102, 119, 0.25)";

export function Navbar({ forceScrolled = false, lang = "es" }: NavbarProps) {
  const [scrolled, setScrolled] = useState(forceScrolled);
  const location = useLocation();

  useEffect(() => {
    if (forceScrolled) {
      setScrolled(true);
      return;
    }
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [forceScrolled]);

  // Páginas con hero oscuro: arranca transparente
  const isHeroPage = location.pathname === "/" || location.pathname === "/english";
  const isTransparent = isHeroPage && !scrolled;

  // Transparente = blanco con opacidad. Scrolled = color de marca
  const textColor = isTransparent ? "rgba(255,255,255,0.92)" : SCROLLED_TEXT;
  const borderColor = isTransparent ? "rgba(255,255,255,0.7)" : "rgba(255,255,255,0.5)";

  const isEn = lang === "en";

  const mainSections = isEn
    ? [
        { label: "Services",  href: "/#servicios"  },
        { label: "Benefits",  href: "/#beneficios" },
        { label: "Process",   href: "/#proceso"    },
        { label: "FAQ",       href: "/#faq"         },
        { label: "Contact",   href: "/#contacto"   },
      ]
    : [
        { label: "Servicios",  href: "/#servicios"  },
        { label: "Beneficios", href: "/#beneficios" },
        { label: "Proceso",    href: "/#proceso"    },
        { label: "FAQ",        href: "/#faq"         },
        { label: "Contacto",   href: "/#contacto"   },
      ];

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out"
      style={{
        backgroundColor: isTransparent ? "transparent" : SCROLLED_BG,
        backdropFilter: scrolled ? "blur(20px) saturate(180%)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(20px) saturate(180%)" : "none",
        boxShadow: scrolled ? SCROLLED_SHADOW : "none",
        borderBottom: scrolled
          ? `1px solid ${SCROLLED_BORDER}`
          : "1px solid transparent",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-3 md:py-4 flex items-center justify-between transition-all duration-300">

        {/* Logo */}
        <Link to={isEn ? "/english" : "/"} className="flex items-center">
          <ImageWithFallback
            src="/Fostersterm/LOGOFALLERGY.png"
            alt="Foster Stern Group"
            className="h-16 md:h-18 lg:h-24 w-auto object-contain transition-all duration-300"
          />
        </Link>

        {/* Desktop nav — solo en lg+ */}
        <div className="hidden lg:flex items-center gap-5 xl:gap-7">

          {!isEn && (
            <Link
              to="/nosotros"
              className="nav-link text-sm xl:text-base font-semibold transition-colors duration-300"
              style={{ color: textColor }}
            >
              Nosotros
            </Link>
          )}

          {mainSections.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="nav-link text-sm xl:text-base font-semibold transition-colors duration-300"
              style={{ color: textColor }}
            >
              {label}
            </a>
          ))}

          <Link
            to="/blog"
            className="nav-link text-sm xl:text-base font-semibold transition-colors duration-300"
            style={{ color: textColor }}
          >
            Blog
          </Link>

          {isEn ? (
            <Link
              to="/"
              className="px-4 py-2 rounded-xl font-bold border-2 transition-all duration-300 hover:scale-105 text-sm xl:text-base"
              style={{ color: textColor, borderColor }}
            >
              🇲🇽 Español
            </Link>
          ) : (
            <Link
              to="/english"
              className="px-4 py-2 rounded-xl font-bold border-2 transition-all duration-300 hover:scale-105 text-sm xl:text-base"
              style={{ color: textColor, borderColor }}
            >
              🇺🇸 English
            </Link>
          )}
        </div>

        {/* Hamburguesa — tablet/móvil */}
        <MobileMenu scrolled={scrolled} />
      </div>
    </nav>
  );
}