import { createContext, useContext, useEffect, useState } from "react";

// Each theme defines three accent colors. We store them as both
// CSS variables (for the DOM) and hex (for the Three.js scene).
export const themes = {
  nebula: {
    name: "Nebula",
    rgb: { accent: "99 102 241", accent2: "6 182 212", accent3: "236 72 153" },
    hex: { accent: "#6366f1", accent2: "#06b6d4", accent3: "#ec4899" },
  },
  sunset: {
    name: "Sunset",
    rgb: { accent: "249 115 22", accent2: "236 72 153", accent3: "250 204 21" },
    hex: { accent: "#f97316", accent2: "#ec4899", accent3: "#facc15" },
  },
  matrix: {
    name: "Matrix",
    rgb: { accent: "16 185 129", accent2: "52 211 153", accent3: "132 204 22" },
    hex: { accent: "#10b981", accent2: "#34d399", accent3: "#84cc16" },
  },
  ocean: {
    name: "Ocean",
    rgb: { accent: "14 165 233", accent2: "34 211 238", accent3: "99 102 241" },
    hex: { accent: "#0ea5e9", accent2: "#22d3ee", accent3: "#6366f1" },
  },
};

const ThemeContext = createContext(null);

export function ThemeProvider({ children }) {
  const [key, setKey] = useState("nebula");
  const theme = themes[key];

  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty("--accent", theme.rgb.accent);
    root.style.setProperty("--accent2", theme.rgb.accent2);
    root.style.setProperty("--accent3", theme.rgb.accent3);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ key, setKey, theme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
}
