import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader({ onDone }) {
  const [count, setCount] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    let current = 0;
    const tick = () => {
      // ease-out counting
      const step = Math.max(1, Math.round((100 - current) / 10));
      current = Math.min(100, current + step);
      setCount(current);
      if (current < 100) {
        setTimeout(tick, 60);
      } else {
        setTimeout(() => setDone(true), 450);
      }
    };
    const t = setTimeout(tick, 300);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence onExitComplete={onDone}>
      {!done && (
        <motion.div
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[10000] flex items-center justify-center bg-base"
        >
          {/* curtain panels sliding away */}
          <motion.div
            exit={{ y: "-100%" }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="absolute inset-0 bg-base"
          />
          <div className="relative text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-mono text-sm tracking-[0.3em] text-muted uppercase mb-6"
            >
              Loading Portfolio
            </motion.div>
            <div className="flex items-end justify-center gap-2">
              <span className="text-7xl md:text-9xl font-extrabold gradient-text tabular-nums">
                {count}
              </span>
              <span className="text-3xl md:text-5xl font-bold text-muted mb-2">%</span>
            </div>
            <div className="mt-8 h-0.5 w-64 mx-auto bg-white/10 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-accent via-accent2 to-accent3"
                style={{ width: `${count}%` }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
