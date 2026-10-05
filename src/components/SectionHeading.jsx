import { motion } from "framer-motion";
import { fadeUp } from "./motionPresets";
import ScrambleText from "./ScrambleText";

export default function SectionHeading({ eyebrow, title }) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.6 }}
      className="mb-14 text-center"
    >
      <span className="font-mono text-sm text-accent2 tracking-widest uppercase">
        {eyebrow}
      </span>
      <ScrambleText
        as="h2"
        text={title}
        className="mt-3 text-4xl md:text-5xl font-extrabold tracking-tight block"
      />
      <div className="mx-auto mt-5 h-1 w-24 rounded-full bg-gradient-to-r from-accent via-accent2 to-accent3" />
    </motion.div>
  );
}
