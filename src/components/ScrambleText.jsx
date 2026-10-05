import { useEffect, useRef, useState } from "react";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ!<>-_\\/[]{}=+*^?#";

// Decodes into the target text with a glitchy scramble when it
// first scrolls into view.
export default function ScrambleText({ text, className = "", as: Tag = "span" }) {
  const ref = useRef(null);
  const [display, setDisplay] = useState(text);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !done) {
          setDone(true);
          run();
          observer.disconnect();
        }
      },
      { threshold: 0.6 }
    );
    observer.observe(el);

    let frame;
    const run = () => {
      let iteration = 0;
      const total = text.length;
      const tick = () => {
        setDisplay(
          text
            .split("")
            .map((ch, i) => {
              if (ch === " ") return " ";
              if (i < iteration) return text[i];
              return CHARS[Math.floor(Math.random() * CHARS.length)];
            })
            .join("")
        );
        iteration += 0.5;
        if (iteration <= total) {
          frame = requestAnimationFrame(tick);
        } else {
          setDisplay(text);
        }
      };
      frame = requestAnimationFrame(tick);
    };

    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [text, done]);

  return (
    <Tag ref={ref} className={className}>
      {display}
    </Tag>
  );
}
