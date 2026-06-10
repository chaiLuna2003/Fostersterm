import { X, Menu } from "lucide-react";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { Link } from "react-router-dom";

const menuItemsEs = [
  { name: "Nosotros",      href: "/nosotros"   },
  { name: "Servicios",     href: "/#servicios"  },
  { name: "Beneficios",    href: "/#beneficios" },
  { name: "Casos de Éxito",href: "/#casos"      },
  { name: "Proceso",       href: "/#proceso"    },
  { name: "FAQ",           href: "/#faq"        },
  { name: "Blog",          href: "/blog"        },
  { name: "Contactar",     href: "/#contacto"   },
  { name: "🇺🇸 English",  href: "/english"     },
];

const menuItemsEn = [
  { name: "Home",          href: "/english"       },
  { name: "About Us",      href: "/english/about" },
  { name: "Services",      href: "/english#servicios"  },
  { name: "Benefits",      href: "/english#beneficios" },
  { name: "Process",       href: "/english#proceso"    },
  { name: "FAQ",           href: "/english#faq"        },
  { name: "Blog",          href: "/english/blog"       },
  { name: "Contact Us",    href: "/english#contacto"   },
  { name: "🇲🇽 Español",  href: "/"                   },
];

interface MobileMenuProps {
  scrolled?: boolean;
  lang?: "es" | "en";
}

export function MobileMenu({ scrolled = false, lang = "es" }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const menuItems = lang === "en" ? menuItemsEn : menuItemsEs;

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  // Cerrar también si la pantalla se agranda a desktop
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 1024) setIsOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const close = () => setIsOpen(false);

  const menu = isOpen ? (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/40 z-[9998]"
        onClick={close}
        aria-hidden="true"
      />

      {/* Panel deslizante desde la derecha */}
      <div
        className="fixed top-0 right-0 bottom-0 w-80 bg-white shadow-2xl z-[9999] flex flex-col"
        style={{ animation: "slideIn 0.25s ease-out" }}
      >
        {/* Header del panel */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
          <img
            src="/Fostersterm/LogoFS.png"
            alt="Foster Stern Group"
            className="h-14 w-auto object-contain"
          />
          <button
            onClick={close}
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Cerrar menú"
            type="button"
          >
            <X className="w-5 h-5" style={{ color: "var(--brand-primary)" }} />
          </button>
        </div>

        {/* Links de navegación */}
        <nav className="flex flex-col px-4 py-6 gap-1 flex-1 overflow-y-auto">
          {menuItems.map((item) => {
            const isContact = item.name === "Contactar";
            const isRoute = item.href.startsWith("/") && !item.href.startsWith("/#");
            const className = isContact
              ? "mt-4 px-5 py-3 rounded-xl text-center text-white font-semibold transition-colors"
              : "px-5 py-3 rounded-xl transition-colors hover:bg-gray-50 font-medium";
            const style = isContact
              ? { backgroundColor: "var(--brand-green)", fontFamily: "'Source Sans 3', sans-serif" }
              : { color: "var(--brand-primary)", fontFamily: "'Source Sans 3', sans-serif" };

            return isRoute ? (
              <Link key={item.name} to={item.href} onClick={close} className={className} style={style}>
                {item.name}
              </Link>
            ) : (
              <a key={item.name} href={item.href} onClick={close} className={className} style={style}>
                {item.name}
              </a>
            );
          })}
        </nav>
      </div>

      <style>{`
        @keyframes slideIn {
          from { transform: translateX(100%); }
          to   { transform: translateX(0); }
        }
      `}</style>
    </>
  ) : null;

  return (
    <>
      {/* Botón hamburguesa — visible en móvil Y tablet (debajo de lg = 1024px) */}
      <button
  onClick={() => setIsOpen(true)}
  className="
    lg:hidden
    flex items-center justify-center
    w-12 h-12
    rounded-full
    bg-[#008154]
    shadow-lg
    transition-all duration-300
    hover:scale-105
    hover:shadow-xl
    active:scale-95
  "
  aria-label="Abrir menú"
  type="button"
>
  <Menu className="w-6 h-6 text-white" />
</button>

      {createPortal(menu, document.body)}
    </>
  );
}