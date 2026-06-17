import { useState } from "react";
import { motion } from "motion/react";
import { Plus } from "lucide-react";

interface FAQItemProps {
  question: string;
  answer: string;
  index?: number;
}

export function FAQItem({
  question,
  answer,
  index = 0,
}: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: 0.35,
        delay: index * 0.07,
        ease: "easeOut",
      }}
    >
      <motion.div
        animate={{
          boxShadow: isOpen
            ? "0 8px 32px rgba(5,74,91,0.10)"
            : "0 2px 8px rgba(5,74,91,0.04)",
        }}
        transition={{ duration: 0.3 }}
        className="rounded-2xl overflow-hidden"
        style={{
          background: isOpen
            ? "#ffffff"
            : "rgba(255,255,255,0.70)",
          border: isOpen
            ? "1px solid rgba(0,129,84,0.30)"
            : "1px solid rgba(5,74,91,0.10)",
          backdropFilter: "blur(6px)",
        }}
      >
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full cursor-pointer flex items-center justify-between gap-4 text-left"
          style={{ padding: "20px 24px" }}
        >
          <span
            className="text-2xl md:text-xl font-semibold leading-[1.45]"
            style={{
              fontFamily: "'Nunito Sans', sans-serif",
              color: "var(--brand-primary)",
            }}
          >
            {question}
          </span>

          <motion.div
            animate={{ rotate: isOpen ? 45 : 0 }}
            transition={{
              duration: 0.3,
              ease: "easeInOut",
            }}
            className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center"
            style={{
              background: isOpen
                ? "var(--brand-green)"
                : "rgba(5,74,91,0.07)",
            }}
          >
            <Plus
              className="w-4 h-4"
              style={{
                color: isOpen
                  ? "#ffffff"
                  : "var(--brand-primary)",
              }}
            />
          </motion.div>
        </button>

        {isOpen && (
          <div
            style={{
              padding: "0 24px 22px",
              borderTop:
                "1px solid rgba(5,74,91,0.07)",
              paddingTop: "16px",
            }}
          >
            <p
              className="text-xl leading-[1.9]"
              style={{
                color: "var(--brand-muted)",
              }}
            >
              {answer}
            </p>
          </div>
        )}
      </motion.div>
    </motion.div>
  );
}