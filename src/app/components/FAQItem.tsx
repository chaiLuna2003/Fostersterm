import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight } from "lucide-react";

interface FAQItemProps {
  question: string;
  answer: string;
}

export function FAQItem({ question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:border-[var(--brand-green)] transition-all hover:shadow-md"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full cursor-pointer flex items-center justify-between p-6 text-left"
        style={{
          fontFamily: "'Source Sans 3', sans-serif",
          color: "var(--brand-primary)",
        }}
      >
        <span className="text-lg pr-4">{question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 90 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <ArrowRight className="w-5 h-5 flex-shrink-0" style={{ color: "var(--brand-green)" }} />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <motion.div
              initial={{ y: -10 }}
              animate={{ y: 0 }}
              exit={{ y: -10 }}
              transition={{ duration: 0.3 }}
              className="px-6 pb-6"
            >
              <p className="leading-relaxed" style={{ color: "#898989" }}>
                {answer}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}