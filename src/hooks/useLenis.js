import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

// Buttery inertial smooth scrolling across the whole page.
export default function useLenis() {
  useEffect(() => {
    const lenis = new Lenis({
      // High lerp + strong wheel multiplier = snappy, near-native speed
      // while keeping just a hint of smoothing.
      lerp: 0.2,
      smoothWheel: true,
      wheelMultiplier: 1.6,
      touchMultiplier: 2,
    });

    let frame;
    const raf = (time) => {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    };
    frame = requestAnimationFrame(raf);

    // Make in-page anchor links use Lenis
    const onClick = (e) => {
      const target = e.target.closest('a[href^="#"]');
      if (!target) return;
      const id = target.getAttribute("href");
      if (id && id.length > 1) {
        e.preventDefault();
        lenis.scrollTo(id, { offset: -40, duration: 0.8 });
      }
    };
    document.addEventListener("click", onClick);

    return () => {
      cancelAnimationFrame(frame);
      document.removeEventListener("click", onClick);
      lenis.destroy();
    };
  }, []);
}
