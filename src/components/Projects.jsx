import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FiExternalLink, FiFolder, FiArrowRight } from "react-icons/fi";
import { projects } from "../data";
import TiltCard from "./TiltCard";
import ScrambleText from "./ScrambleText";

export default function Projects() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: targetRef });

  // Scroll vertically through the tall section -> cards translate horizontally.
  const x = useTransform(scrollYProgress, [0, 1], ["2%", "-72%"]);
  const progress = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="projects" ref={targetRef} className="relative h-[320vh]">
      {/* Sticky viewport that stays pinned while we scroll through */}
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
        <div className="max-w-6xl mx-auto w-full px-6 mb-10">
          <span className="font-mono text-sm text-accent2 tracking-widest uppercase">
            Things I've Built
          </span>
          <div className="flex items-end justify-between gap-6 flex-wrap">
            <ScrambleText
              as="h2"
              text="Featured Projects"
              className="mt-3 text-4xl md:text-6xl font-extrabold tracking-tight"
            />
            <span className="hidden md:flex items-center gap-2 text-muted font-mono text-sm">
              Scroll <FiArrowRight className="animate-pulse" />
            </span>
          </div>
          {/* progress rail */}
          <div className="mt-6 h-1 w-full bg-white/10 rounded-full overflow-hidden">
            <motion.div
              style={{ width: progress }}
              className="h-full bg-gradient-to-r from-accent via-accent2 to-accent3"
            />
          </div>
        </div>

        <motion.div style={{ x }} className="flex gap-7 px-6 will-change-transform">
          {projects.map((p, i) => (
            <div
              key={p.name}
              data-cursor="hover"
              className="group relative shrink-0 w-[85vw] md:w-[48vw] lg:w-[40vw]"
              style={{ perspective: 1200 }}
            >
              <TiltCard
                intensity={8}
                className="relative glass rounded-3xl p-8 overflow-hidden h-full"
              >
                <div className="relative">
                  <div className="flex items-start justify-between mb-5">
                    <div className="flex items-center gap-3">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent/30 to-accent2/30 flex items-center justify-center text-2xl text-accent2">
                        <FiFolder />
                      </div>
                      <span className="font-mono text-5xl font-extrabold text-white/5">
                        0{i + 1}
                      </span>
                    </div>
                    {p.link && (
                      <a
                        href={p.link}
                        target="_blank"
                        rel="noreferrer"
                        data-cursor="hover"
                        className="text-xl text-muted hover:text-accent2 transition-colors"
                      >
                        <FiExternalLink />
                      </a>
                    )}
                  </div>

                  <h3 className="text-2xl md:text-3xl font-bold mb-1">{p.name}</h3>
                  {p.link && (
                    <a
                      href={p.link}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm font-mono text-accent2 hover:underline"
                    >
                      {p.link.replace("https://", "")}
                    </a>
                  )}

                  <ul className="mt-5 space-y-2.5">
                    {p.points.map((pt, idx) => (
                      <li
                        key={idx}
                        className="flex gap-3 text-sm text-gray-300 leading-relaxed"
                      >
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-accent3 shrink-0" />
                        {pt}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {p.stack.map((s) => (
                      <span
                        key={s}
                        className="px-3 py-1 rounded-lg text-xs font-mono bg-white/5 border border-white/10 text-muted group-hover:text-accent2 transition-colors"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </TiltCard>
            </div>
          ))}

          {/* end card */}
          <div className="shrink-0 w-[70vw] md:w-[30vw] flex items-center justify-center">
            <div className="text-center">
              <div className="text-5xl md:text-7xl font-extrabold gradient-text">
                Let's talk
              </div>
              <a
                href="#contact"
                data-cursor="hover"
                className="mt-6 inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold glass hover:bg-white/10 transition-colors"
              >
                Start a project <FiArrowRight />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
