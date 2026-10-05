import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiDroplet } from "react-icons/fi";
import { themes, useTheme } from "../theme";

export default function ThemeSwitcher() {
  const { key, setKey, theme } = useTheme();
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-[70] flex flex-col items-end gap-3">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            className="glass rounded-2xl p-3 flex flex-col gap-2"
          >
            {Object.entries(themes).map(([k, t]) => (
              <button
                key={k}
                data-cursor="hover"
                onClick={() => setKey(k)}
                className={`flex items-center gap-3 px-3 py-2 rounded-xl transition-colors ${
                  key === k ? "bg-white/10" : "hover:bg-white/5"
                }`}
              >
                <span className="flex -space-x-1">
                  {Object.values(t.hex).map((c, i) => (
                    <span
                      key={i}
                      className="w-4 h-4 rounded-full border border-white/20"
                      style={{ backgroundColor: c }}
                    />
                  ))}
                </span>
                <span className="text-sm font-medium">{t.name}</span>
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        data-cursor="hover"
        whileHover={{ scale: 1.1, rotate: 15 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setOpen((o) => !o)}
        className="w-14 h-14 rounded-full flex items-center justify-center text-2xl text-white shadow-lg"
        style={{
          background: `linear-gradient(135deg, ${theme.hex.accent}, ${theme.hex.accent2})`,
        }}
        aria-label="Change theme"
      >
        <FiDroplet />
      </motion.button>
    </div>
  );
}
