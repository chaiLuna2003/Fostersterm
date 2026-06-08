import { ArrowRight } from "lucide-react";

/**
 * ContactForm — componente reutilizable de contacto.
 * Se usa en Home (#contacto) y en la página Nosotros.
 */
export function ContactForm() {
  return (
    <div className="bg-white/80 backdrop-blur-md rounded-2xl p-8 border border-gray-200 shadow-lg">
      <form className="space-y-5">
        <div>
          <label className="block mb-1.5 text-sm font-semibold" style={{ color: "var(--brand-primary)" }}>
            Nombre de la Clínica
          </label>
          <input
            type="text"
            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[var(--brand-green)] focus:ring-2 focus:ring-[var(--brand-green)]/20 outline-none transition-all text-sm bg-gray-50"
            placeholder="Escriba el nombre de su clínica"
          />
        </div>

        <div>
          <label className="block mb-1.5 text-sm font-semibold" style={{ color: "var(--brand-primary)" }}>
            Nombre Completo del Contacto
          </label>
          <input
            type="text"
            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[var(--brand-green)] focus:ring-2 focus:ring-[var(--brand-green)]/20 outline-none transition-all text-sm bg-gray-50"
            placeholder="Escriba su nombre completo"
          />
        </div>

        <div>
          <label className="block mb-1.5 text-sm font-semibold" style={{ color: "var(--brand-primary)" }}>
            Teléfono Directo
          </label>
          <input
            type="tel"
            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[var(--brand-green)] focus:ring-2 focus:ring-[var(--brand-green)]/20 outline-none transition-all text-sm bg-gray-50"
            placeholder="Escriba su teléfono directo"
          />
        </div>

        <div>
          <label className="block mb-1.5 text-sm font-semibold" style={{ color: "var(--brand-primary)" }}>
            Correo Electrónico
          </label>
          <input
            type="email"
            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[var(--brand-green)] focus:ring-2 focus:ring-[var(--brand-green)]/20 outline-none transition-all text-sm bg-gray-50"
            placeholder="Escriba su correo electrónico"
          />
        </div>

        <div>
          <label className="block mb-1.5 text-sm font-semibold" style={{ color: "var(--brand-primary)" }}>
            Dirección
          </label>
          <input
            type="text"
            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[var(--brand-green)] focus:ring-2 focus:ring-[var(--brand-green)]/20 outline-none transition-all text-sm bg-gray-50"
            placeholder="Escriba su dirección aquí"
          />
        </div>

        <div>
          <label className="block mb-1.5 text-sm font-semibold" style={{ color: "var(--brand-primary)" }}>
            Especialidad
          </label>
          <input
            type="text"
            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[var(--brand-green)] focus:ring-2 focus:ring-[var(--brand-green)]/20 outline-none transition-all text-sm bg-gray-50"
            placeholder="Escriba su especialidad aquí"
          />
        </div>

        <div className="flex items-start gap-3 pt-1">
          <input
            type="checkbox"
            id="contact-form-consent"
            className="mt-1 w-4 h-4 flex-shrink-0 rounded border-gray-300 accent-[var(--brand-green)]"
          />
          <label
            htmlFor="contact-form-consent"
            className="text-sm leading-relaxed cursor-pointer"
            style={{ color: "var(--brand-muted)" }}
          >
            Acepto ser contactado sobre servicios y oportunidades.
          </label>
        </div>

        <button
          type="submit"
          className="w-full px-8 py-4 text-white rounded-lg hover:opacity-90 transition-all flex items-center justify-center gap-2 shadow-lg"
          style={{ backgroundColor: "var(--brand-green)" }}
        >
          Enviar Mensaje
          <ArrowRight className="w-5 h-5" />
        </button>
      </form>
    </div>
  );
}