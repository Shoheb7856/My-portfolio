import { motion } from "framer-motion";
import {
  FaJava,
  FaReact,
  FaNetworkWired,
  FaDatabase,
  FaDocker,
  FaCode,
} from "react-icons/fa";
import SectionHeading from "./SectionHeading";
import { stagger, fadeUp } from "./motionPresets";
import { skills } from "../data";
import TiltCard from "./TiltCard";

const icons = { FaJava, FaReact, FaNetworkWired, FaDatabase, FaDocker, FaCode };

export default function Skills() {
  return (
    <section id="skills" className="section-pad">
      <SectionHeading eyebrow="What I Use" title="Technical Skills" />

      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {skills.map((group) => {
          const Icon = icons[group.icon];
          return (
            <motion.div
              key={group.category}
              variants={fadeUp}
              data-cursor="hover"
              className="group"
              style={{ perspective: 1000 }}
            >
              <TiltCard
                intensity={9}
                className="relative glass rounded-3xl p-7 overflow-hidden h-full"
              >
                <div className="absolute -top-10 -right-10 w-28 h-28 rounded-full bg-accent/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent/30 to-accent2/30 flex items-center justify-center text-2xl text-accent2">
                    <Icon />
                  </div>
                  <h3 className="text-lg font-bold">{group.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1.5 rounded-lg text-sm bg-white/5 border border-white/10 text-gray-300 hover:border-accent2/50 hover:text-accent2 transition-colors"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </TiltCard>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
