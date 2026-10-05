import { motion } from "framer-motion";

// Splits text into words and reveals each from behind a mask.
export default function AnimatedText({ text, className = "", delay = 0 }) {
  const words = text.split(" ");

  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.08, delayChildren: delay },
    },
  };
  const word = {
    hidden: { y: "110%" },
    show: {
      y: "0%",
      transition: { duration: 0.7, ease: [0.33, 1, 0.68, 1] },
    },
  };

  return (
    <motion.span
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.6 }}
      className={`inline-flex flex-wrap ${className}`}
    >
      {words.map((w, i) => (
        <span key={i} className="overflow-hidden inline-flex mr-[0.25em]">
          <motion.span variants={word} className="inline-block">
            {w}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
}
