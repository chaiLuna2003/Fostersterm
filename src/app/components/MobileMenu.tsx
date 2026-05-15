import { motion, AnimatePresence } from "motion/react";
import { X, Menu } from "lucide-react";
import { useState, useEffect } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const menuItems = [
    { name: "Servicios", href: "#servicios" },
    { name: "Beneficios", href: "#beneficios" },
    { name: "Proceso", href: "#proceso" },
    { name: "FAQ", href: "#faq" },
    { name: "Contactar", href: "#contacto" },
  ];

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  const handleBackdropClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Hamburger Button - Only visible on mobile */}
      <button
        onClick={() => setIsOpen(true)}
        className="md:hidden p-2 rounded-lg hover:bg-white/50 transition-colors"
        aria-label="Abrir menú"
        type="button"
      >
        <Menu className="w-6 h-6" style={{ color: "#0D3B7F" }} />
      </button>

      {/* Backdrop Overlay */}
      <AnimatePresence mode="wait">
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[60] md:hidden"
            onClick={handleBackdropClick}
            aria-hidden="true"
          />
        )}
      </AnimatePresence>

      {/* Sliding Menu Panel */}
      <AnimatePresence mode="wait">
        {isOpen && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{
              type: "spring",
              damping: 30,
              stiffness: 300,
              mass: 0.8
            }}
            className="fixed left-0 top-0 bottom-0 w-[85%] max-w-sm bg-white/95 backdrop-blur-xl border-r border-gray-200/50 shadow-2xl z-[70] md:hidden"
          >
            {/* Menu Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200/50">
              <ImageWithFallback
                src="/src/imports/ChatGPT_Image_13_may_2026__17_55_44.png"
                alt="Foster Stern Group"
                className="w-auto"
                style={{ height: '60px' }}
              />
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-lg hover:bg-gray-100/80 transition-colors"
                aria-label="Cerrar menú"
                type="button"
              >
                <X className="w-6 h-6" style={{ color: "#0D3B7F" }} />
              </motion.button>
            </div>

            {/* Navigation Menu */}
            <nav className="flex flex-col p-6 space-y-1 overflow-y-auto max-h-[calc(100vh-180px)]">
              {menuItems.map((item, index) => {
                const isContactButton = item.name === "Contactar";

                return (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    onClick={handleLinkClick}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: index * 0.08,
                      duration: 0.3,
                      ease: "easeOut"
                    }}
                    whileHover={{
                      x: 5,
                      transition: { duration: 0.2 }
                    }}
                    whileTap={{ scale: 0.98 }}
                    className={`
                      px-5 py-4 rounded-xl transition-all
                      ${isContactButton
                        ? "bg-gradient-to-r from-[#238CCC] to-[#0D3B7F] text-white shadow-lg mt-4 hover:shadow-xl"
                        : "hover:bg-gray-100/60 active:bg-gray-200/60"
                      }
                    `}
                    style={{
                      fontFamily: "'AvantGarde-Demi', sans-serif",
                      color: isContactButton ? "#ffffff" : "#0D3B7F",
                      fontSize: "1.05rem"
                    }}
                  >
                    {item.name}
                  </motion.a>
                );
              })}
            </nav>

            {/* Footer Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.4 }}
              className="absolute bottom-0 left-0 right-0 p-6 border-t border-gray-200/50 bg-gradient-to-t from-white/80 to-transparent"
            >
              <p
                className="text-sm leading-relaxed"
                style={{ color: "#898989" }}
              >
                Soluciones innovadoras para servicios de alergia en clínicas médicas.
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
