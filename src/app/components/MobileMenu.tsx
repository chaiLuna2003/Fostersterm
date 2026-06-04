import { X, Menu } from "lucide-react";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { Link } from "react-router-dom";


const menuItems = [
  { name: "Nosotros", href: "/nosotros" },
  { name: "Servicios", href: "#servicios" },
  { name: "Beneficios", href: "#beneficios" },
  { name: "Casos de Éxito", href: "#casos" },
  { name: "Proceso", href: "#proceso" },
  { name: "Blog", href: "/blog" },
  { name: "FAQ", href: "#faq" },
  { name: "Contactar", href: "#contacto" },
  { name: "🇺🇸 English", href: "/english" },
];

interface MobileMenuProps {
  scrolled?: boolean;
}

export function MobileMenu({ scrolled = false }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  // Bloquear scroll del body cuando el menú está abierto
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const close = () => setIsOpen(false);

  const menu = isOpen ? (
    <div className="md:hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/40 z-[9998]"
        onClick={close}
        aria-hidden="true"
      />

      {/* Panel deslizante desde la derecha */}
      <div
        className="fixed top-0 right-0 bottom-0 w-72 bg-white shadow-2xl z-[9999] flex flex-col"
        style={{ animation: "slideIn 0.25s ease-out" }}
      >
        {/* Header del menú */}
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
        <nav className="flex flex-col px-4 py-6 gap-1 flex-1">
          {menuItems.map((item) => {
            const isContact = item.name === "Contactar";
            const isRoute = item.href.startsWith("/") && !item.href.startsWith("/#");
            const className = isContact
              ? "mt-4 px-5 py-3 rounded-xl text-center text-white transition-colors"
              : "px-5 py-3 rounded-xl transition-colors hover:bg-gray-50";
            const style = isContact
              ? { backgroundColor: "var(--brand-green)", fontFamily: "'Source Sans 3', sans-serif" }
              : { color: "var(--brand-primary)", fontFamily: "'Source Sans 3', sans-serif" };

            return isRoute ? (
              <Link
                key={item.name}
                to={item.href}
                onClick={close}
                className={className}
                style={style}
              >
                {item.name}
              </Link>
            ) : (
              <a
                key={item.name}
                href={item.href}
                onClick={close}
                className={className}
                style={style}
              >
                {item.name}
              </a>
            );
          })}
        </nav>
      </div>

      <style>{`
        @keyframes slideIn {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
      `}</style>
    </div>
  ) : null;

  return (
    <>
      {/* Botón hamburguesa */}
      <button
        onClick={() => setIsOpen(true)}
        className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
        aria-label="Abrir menú"
        type="button"
      >
        <Menu className="w-6 h-6" style={{ color: "white" }} />
      </button>

      {/* Portal: renderiza fuera del header para evitar overflow-hidden */}
      {createPortal(menu, document.body)}
    </>
  );
}