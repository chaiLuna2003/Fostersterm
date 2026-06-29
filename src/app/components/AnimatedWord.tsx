import { useEffect, useState } from "react";

interface AnimatedWordProps {
  words: string[];
  interval?: number;
  className?: string;
}

export default function AnimatedWord({
  words,
  interval = 2200,
  className = "",
}: AnimatedWordProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, interval);

    return () => clearInterval(timer);
  }, [words, interval]);

  return (
    <span className="relative inline-flex h-[1.2em] overflow-hidden align-bottom">
      <span
        key={words[index]}
        className={`animate-slideWord inline-block ${className}`}
      >
        {words[index]}
      </span>
    </span>
  );
}