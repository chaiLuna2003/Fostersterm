import { ArrowRight } from "lucide-react";

/**
 * ContactForm — componente reutilizable de contacto.
 * Se usa en Home (#contacto) y en la página Nosotros.
 */
export function ContactForm() {
  return (
    <div className="bg-white/80 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-gray-200 shadow-lg">
      <form className="space-y-5">

        {/* Nombre Clínica */}
        <div>
          <label
            className="block mb-2 text-lg font-semibold"
            style={{ color: "var(--brand-primary)" }}
          >
            Nombre de la Clínica
          </label>

          <input
            type="text"
            placeholder="Escriba el nombre de su clínica"
            className="w-full px-4 py-4 rounded-lg border border-gray-200 
            focus:border-[var(--brand-green)] 
            focus:ring-2 focus:ring-[var(--brand-green)]/20 
            outline-none transition-all 
            text-black text-lg 
            bg-gray-50"
          />
        </div>

        {/* Nombre Completo */}
        <div>
          <label
            className="block mb-2 text-lg font-semibold"
            style={{ color: "var(--brand-primary)" }}
          >
            Nombre Completo del Contacto
          </label>

          <input
            type="text"
            placeholder="Escriba su nombre completo"
            className="w-full px-4 py-4 rounded-lg border border-gray-200 
            focus:border-[var(--brand-green)] 
            focus:ring-2 focus:ring-[var(--brand-green)]/20 
            outline-none transition-all 
            text-black text-lg 
            bg-gray-50"
          />
        </div>

        {/* Teléfono */}
        <div>
          <label
            className="block mb-2 text-lg font-semibold"
            style={{ color: "var(--brand-primary)" }}
          >
            Teléfono Directo
          </label>

          <input
            type="tel"
            placeholder="Escriba su teléfono directo"
            className="w-full px-4 py-4 rounded-lg border border-gray-200 
            focus:border-[var(--brand-green)] 
            focus:ring-2 focus:ring-[var(--brand-green)]/20 
            outline-none transition-all 
            text-black text-lg 
            bg-gray-50"
          />
        </div>

        {/* Correo */}
        <div>
          <label
            className="block mb-2 text-lg font-semibold"
            style={{ color: "var(--brand-primary)" }}
          >
            Correo Electrónico
          </label>

          <input
            type="email"
            placeholder="Escriba su correo electrónico"
            className="w-full px-4 py-4 rounded-lg border border-gray-200 
            focus:border-[var(--brand-green)] 
            focus:ring-2 focus:ring-[var(--brand-green)]/20 
            outline-none transition-all 
            text-black text-lg 
            bg-gray-50"
          />
        </div>

        {/* Dirección */}
        <div>
          <label
            className="block mb-2 text-lg font-semibold"
            style={{ color: "var(--brand-primary)" }}
          >
            Dirección
          </label>

          <input
            type="text"
            placeholder="Escriba su dirección aquí"
            className="w-full px-4 py-4 rounded-lg border border-gray-200 
            focus:border-[var(--brand-green)] 
            focus:ring-2 focus:ring-[var(--brand-green)]/20 
            outline-none transition-all 
            text-black text-lg 
            bg-gray-50"
          />
        </div>

        {/* Especialidad */}
        <div>
          <label
            className="block mb-2 text-lg font-semibold"
            style={{ color: "var(--brand-primary)" }}
          >
            Especialidad
          </label>

          <input
            type="text"
            placeholder="Escriba su especialidad aquí"
            className="w-full px-4 py-4 rounded-lg border border-gray-200 
            focus:border-[var(--brand-green)] 
            focus:ring-2 focus:ring-[var(--brand-green)]/20 
            outline-none transition-all 
            text-black text-lg 
            bg-gray-50"
          />
        </div>

        {/* Checkbox */}
        <div className="flex items-start gap-3 pt-2">
          <input
            type="checkbox"
            id="contact-form-consent"
            className="mt-1 w-5 h-5 flex-shrink-0 rounded border-gray-300 accent-[var(--brand-green)]"
          />

          <label
            htmlFor="contact-form-consent"
            className="text-lg leading-relaxed cursor-pointer"
            style={{ color: "var(--brand-muted)" }}
          >
            Acepto ser contactado sobre servicios y oportunidades.
          </label>
        </div>

        {/* Botón */}
        <button
          type="submit"
          className="w-full px-8 py-4 text-white rounded-lg 
          hover:opacity-90 transition-all flex items-center 
          justify-center gap-2 shadow-lg 
          text-lg font-semibold"
          style={{ backgroundColor: "var(--brand-green)" }}
        >
          Enviar Mensaje
          <ArrowRight className="w-5 h-5" />
        </button>
      </form>
    </div>
  );
}