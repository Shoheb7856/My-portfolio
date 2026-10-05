import { Suspense, lazy } from "react";
import { motion } from "framer-motion";
import { FiArrowDownRight, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { profile } from "../data";
import AnimatedText from "./AnimatedText";
import Magnetic from "./Magnetic";

const HeroScene = lazy(() => import("./HeroScene"));

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-6 pt-24 overflow-hidden"
    >
      {/* 3D interactive background */}
      <div className="absolute inset-0 opacity-90">
        <Suspense fallback={null}>
          <HeroScene />
        </Suspense>
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-base/30 via-base/10 to-base pointer-events-none" />

      <div className="relative max-w-4xl mx-auto text-center">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="inline-block glass px-4 py-2 rounded-full text-sm font-mono text-accent2 mb-8"
        >
          <span className="inline-block w-2 h-2 rounded-full bg-green-400 mr-2 animate-pulse" />
          Available for opportunities
        </motion.span>

        <h1 className="text-5xl sm:text-6xl md:text-8xl font-extrabold leading-[0.95] tracking-tight">
          <AnimatedText text="Hi, I'm" className="justify-center" />
          <span className="block mt-2">
            <AnimatedText
              text={profile.name}
              className="justify-center gradient-text"
              delay={0.3}
            />
          </span>
        </h1>

        <motion.div
          variants={item}
          initial="hidden"
          animate="show"
          transition={{ delay: 1 }}
          className="mt-6 text-xl md:text-2xl font-semibold text-gray-300"
        >
          {profile.title}
          <span className="block text-base md:text-lg text-muted font-normal mt-2 font-mono">
            {"<"} {profile.subtitle} {"/>"}
          </span>
        </motion.div>

        <motion.div
          variants={item}
          initial="hidden"
          animate="show"
          transition={{ delay: 1.15 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <Magnetic strength={0.5}>
            <a
              href="#projects"
              data-cursor="hover"
              className="group relative inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-white bg-gradient-to-r from-accent to-accent2 overflow-hidden"
            >
              <span className="relative z-10">View My Work</span>
              <FiArrowDownRight className="relative z-10 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform" />
              <span className="absolute inset-0 bg-gradient-to-r from-accent2 to-accent3 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          </Magnetic>
          <Magnetic strength={0.5}>
            <a
              href="#contact"
              data-cursor="hover"
              className="inline-block px-7 py-3.5 rounded-full font-semibold glass hover:bg-white/10 transition-colors"
            >
              Get in Touch
            </a>
          </Magnetic>
        </motion.div>

        <motion.div
          variants={item}
          initial="hidden"
          animate="show"
          transition={{ delay: 1.3 }}
          className="mt-12 flex items-center justify-center gap-5"
        >
          {[
            { icon: FiGithub, href: profile.github },
            { icon: FiLinkedin, href: profile.linkedin },
            { icon: FiMail, href: `mailto:${profile.email}` },
          ].map(({ icon: Icon, href }, i) => (
            <Magnetic key={i} strength={0.6}>
              <a
                href={href}
                target="_blank"
                rel="noreferrer"
                data-cursor="hover"
                className="w-12 h-12 flex items-center justify-center rounded-full glass text-xl text-muted hover:text-accent2 transition-colors"
              >
                <Icon />
              </a>
            </Magnetic>
          ))}
        </motion.div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted"
      >
        <span className="text-xs font-mono tracking-widest">SCROLL</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.6 }}
          className="w-5 h-8 rounded-full border-2 border-muted/40 flex items-start justify-center p-1"
        >
          <span className="w-1 h-2 rounded-full bg-accent2" />
        </motion.div>
      </motion.a>
    </section>
  );
}
