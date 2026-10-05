import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

// Custom magnetic cursor: a small dot + a trailing ring that grows
// and inverts over interactive elements. Tracks both pointer movement
// AND scroll so it never lags behind when the page scrolls.
export default function Cursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  // Snappier spring so the ring keeps up tightly with the dot.
  const ringX = useSpring(x, { stiffness: 500, damping: 32, mass: 0.4 });
  const ringY = useSpring(y, { stiffness: 500, damping: 32, mass: 0.4 });

  const [hovering, setHovering] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastPos = useRef({ x: -100, y: -100 });

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) {
      setHidden(true);
      return;
    }

    const setFromPoint = (cx, cy) => {
      x.set(cx);
      y.set(cy);
      const el = document.elementFromPoint(cx, cy);
      const interactive = el?.closest(
        'a, button, [data-cursor="hover"], input, textarea'
      );
      setHovering(!!interactive);
    };

    const move = (e) => {
      lastPos.current = { x: e.clientX, y: e.clientY };
      setFromPoint(e.clientX, e.clientY);
    };
    // On scroll the pointer stays still on screen but new content slides
    // under it — re-evaluate using the last known position immediately.
    const onScroll = () => {
      const { x: cx, y: cy } = lastPos.current;
      x.set(cx);
      y.set(cy);
      const el = document.elementFromPoint(cx, cy);
      const interactive = el?.closest(
        'a, button, [data-cursor="hover"], input, textarea'
      );
      setHovering(!!interactive);
    };

    const leave = () => setHidden(true);
    const enter = () => setHidden(false);

    window.addEventListener("mousemove", move, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });
    document.addEventListener("mouseleave", leave);
    document.addEventListener("mouseenter", enter);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("mouseleave", leave);
      document.removeEventListener("mouseenter", enter);
    };
  }, [x, y]);

  if (hidden) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] hidden md:block">
      <motion.div
        style={{ x, y }}
        className="absolute -ml-1 -mt-1 w-2 h-2 rounded-full bg-accent2"
      />
      <motion.div
        style={{ x: ringX, y: ringY }}
        animate={{
          width: hovering ? 56 : 30,
          height: hovering ? 56 : 30,
          borderColor: hovering ? "rgb(var(--accent2))" : "rgba(255,255,255,0.4)",
          backgroundColor: hovering ? "rgba(6,182,212,0.12)" : "rgba(0,0,0,0)",
        }}
        transition={{ type: "spring", stiffness: 400, damping: 28 }}
        className="absolute rounded-full border -ml-[15px] -mt-[15px]"
      />
    </div>
  );
}
