import { motion } from "framer-motion";
import { FiAward, FiBookOpen } from "react-icons/fi";
import SectionHeading from "./SectionHeading";
import { stagger, fadeUp, scaleIn } from "./motionPresets";
import { education, softSkills } from "../data";

export default function Education() {
  return (
    <section id="education" className="section-pad">
      <SectionHeading eyebrow="Foundations" title="Education & Skills" />

      <div className="grid md:grid-cols-2 gap-10">
        {/* Education + certs */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="space-y-5"
        >
          {education.map((e) => (
            <motion.div
              key={e.title}
              variants={fadeUp}
              whileHover={{ x: 6 }}
              className="glass rounded-2xl p-6 flex gap-4"
            >
              <div className="w-11 h-11 shrink-0 rounded-xl bg-gradient-to-br from-accent/30 to-accent2/30 flex items-center justify-center text-xl text-accent2">
                {e.type === "education" ? <FiBookOpen /> : <FiAward />}
              </div>
              <div>
                <h3 className="font-bold leading-snug">{e.title}</h3>
                <p className="text-sm text-accent mt-1">{e.place}</p>
                <p className="text-sm font-mono text-muted mt-1">{e.period}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Soft skills */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-2 gap-5"
        >
          {softSkills.map((s) => (
            <motion.div
              key={s.title}
              variants={scaleIn}
              whileHover={{ y: -6 }}
              className="glass rounded-2xl p-6"
            >
              <h3 className="font-bold gradient-text">{s.title}</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
