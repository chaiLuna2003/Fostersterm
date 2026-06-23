import { ArrowRight } from "lucide-react";

/**
 * ContactForm — Reusable contact form component.
 * Supports multilingual content via the "lang" prop (defaults to "es").
 */
export function ContactForm({ lang = "es" }) {
  // Multilingual dictionary
  const content = {
    es: {
      clinicName: "Nombre de la Clínica",
      clinicPlaceholder: "Escriba el nombre de su clínica",
      fullName: "Nombre Completo del Contacto",
      fullNamePlaceholder: "Escriba su nombre completo",
      phone: "Teléfono Directo",
      phonePlaceholder: "Escriba su teléfono directo",
      email: "Correo Electrónico",
      emailPlaceholder: "Escriba su correo electrónico",
      address: "Dirección",
      addressPlaceholder: "Escriba su dirección aquí",
      specialty: "Especialidad",
      specialtyPlaceholder: "Escriba su especialidad aquí",
      consent: "Acepto ser contactado sobre servicios y oportunidades.",
      submitBtn: "Enviar Mensaje",
    },
    en: {
      clinicName: "Clinic Name",
      clinicPlaceholder: "Enter your clinic's name",
      fullName: "Contact Full Name",
      fullNamePlaceholder: "Enter your full name",
      phone: "Direct Phone Number",
      phonePlaceholder: "Enter your direct phone number",
      email: "Email Address",
      emailPlaceholder: "Enter your email address",
      address: "Address",
      addressPlaceholder: "Enter your address here",
      specialty: "Specialty",
      specialtyPlaceholder: "Enter your specialty here",
      consent: "I agree to be contacted regarding services and opportunities.",
      submitBtn: "Send Message",
    }
  };

  // Select the appropriate text dictionary based on the prop
  const t = content[lang] || content.es;

  return (
    <div className="bg-white/80 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-gray-200 shadow-lg">
      <form className="space-y-5">

        {/* Clinic Name */}
        <div>
          <label
            className="block mb-2 text-lg font-semibold"
            style={{ color: "var(--brand-primary)" }}
          >
            {t.clinicName}
          </label>

          <input
            type="text"
            placeholder={t.clinicPlaceholder}
            className="w-full px-4 py-4 rounded-lg border border-gray-200 
            focus:border-[var(--brand-green)] 
            focus:ring-2 focus:ring-[var(--brand-green)]/20 
            outline-none transition-all 
            text-black text-lg 
            bg-gray-50"
          />
        </div>

        {/* Full Name */}
        <div>
          <label
            className="block mb-2 text-lg font-semibold"
            style={{ color: "var(--brand-primary)" }}
          >
            {t.fullName}
          </label>

          <input
            type="text"
            placeholder={t.fullNamePlaceholder}
            className="w-full px-4 py-4 rounded-lg border border-gray-200 
            focus:border-[var(--brand-green)] 
            focus:ring-2 focus:ring-[var(--brand-green)]/20 
            outline-none transition-all 
            text-black text-lg 
            bg-gray-50"
          />
        </div>

        {/* Phone */}
        <div>
          <label
            className="block mb-2 text-lg font-semibold"
            style={{ color: "var(--brand-primary)" }}
          >
            {t.phone}
          </label>

          <input
            type="text"
            placeholder={t.phonePlaceholder}
            className="w-full px-4 py-4 rounded-lg border border-gray-200 
            focus:border-[var(--brand-green)] 
            focus:ring-2 focus:ring-[var(--brand-green)]/20 
            outline-none transition-all 
            text-black text-lg 
            bg-gray-50"
          />
        </div>

        {/* Email */}
        <div>
          <label
            className="block mb-2 text-lg font-semibold"
            style={{ color: "var(--brand-primary)" }}
          >
            {t.email}
          </label>

          <input
            type="email"
            placeholder={t.emailPlaceholder}
            className="w-full px-4 py-4 rounded-lg border border-gray-200 
            focus:border-[var(--brand-green)] 
            focus:ring-2 focus:ring-[var(--brand-green)]/20 
            outline-none transition-all 
            text-black text-lg 
            bg-gray-50"
          />
        </div>

        {/* Address */}
        <div>
          <label
            className="block mb-2 text-lg font-semibold"
            style={{ color: "var(--brand-primary)" }}
          >
            {t.address}
          </label>

          <input
            type="text"
            placeholder={t.addressPlaceholder}
            className="w-full px-4 py-4 rounded-lg border border-gray-200 
            focus:border-[var(--brand-green)] 
            focus:ring-2 focus:ring-[var(--brand-green)]/20 
            outline-none transition-all 
            text-black text-lg 
            bg-gray-50"
          />
        </div>

        {/* Specialty */}
        <div>
          <label
            className="block mb-2 text-lg font-semibold"
            style={{ color: "var(--brand-primary)" }}
          >
            {t.specialty}
          </label>

          <input
            type="text"
            placeholder={t.specialtyPlaceholder}
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
            {t.consent}
          </label>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full px-8 py-4 text-white rounded-lg 
          hover:opacity-90 transition-all flex items-center 
          justify-center gap-2 shadow-lg 
          text-lg font-semibold"
          style={{ backgroundColor: "var(--brand-green)" }}
        >
          {t.submitBtn}
          <ArrowRight className="w-5 h-5" />
        </button>
      </form>
    </div>
  );
}