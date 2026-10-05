import { motion } from "framer-motion";

// Infinite horizontal scrolling strip of keywords.
export default function Marquee({ items, direction = 1 }) {
  const loop = [...items, ...items];
  return (
    <div className="relative overflow-hidden py-6 border-y border-white/10 bg-white/[0.02]">
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-base to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-base to-transparent z-10" />
      <motion.div
        className="flex gap-12 whitespace-nowrap"
        animate={{ x: direction > 0 ? ["0%", "-50%"] : ["-50%", "0%"] }}
        transition={{ repeat: Infinity, ease: "linear", duration: 28 }}
      >
        {loop.map((item, i) => (
          <span
            key={i}
            className="text-3xl md:text-4xl font-extrabold text-transparent uppercase tracking-tight"
            style={{ WebkitTextStroke: "1px rgba(255,255,255,0.25)" }}
          >
            {item}
            <span className="text-accent2 mx-6">✦</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}
