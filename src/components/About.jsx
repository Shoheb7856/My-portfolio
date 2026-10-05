import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { fadeUp, stagger, scaleIn } from "./motionPresets";
import { profile, stats } from "../data";

export default function About() {
  return (
    <section id="about" className="section-pad">
      <SectionHeading eyebrow="Who I Am" title="About Me" />

      <div className="grid md:grid-cols-5 gap-10 items-center">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          className="md:col-span-3 glass rounded-3xl p-8 md:p-10"
        >
          <p className="text-lg leading-relaxed text-gray-300">
            {profile.objective}
          </p>
          <p className="mt-6 text-muted leading-relaxed">
            I'm looking to bring strong Java, Spring Boot, React, Angular, and
            Microservices expertise to a full stack engineering team that values
            clean architecture and reliable delivery.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {["Spring Boot", "Microservices", "React", "CI/CD", "OAuth 2.0"].map(
              (t) => (
                <span
                  key={t}
                  className="px-4 py-1.5 rounded-full text-sm font-mono bg-white/5 border border-white/10 text-accent2"
                >
                  {t}
                </span>
              )
            )}
          </div>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="md:col-span-2 grid grid-cols-2 gap-5"
        >
          {stats.map((s) => (
            <motion.div
              key={s.label}
              variants={scaleIn}
              whileHover={{ y: -6 }}
              className="glass rounded-2xl p-6 text-center"
            >
              <div className="text-4xl font-extrabold gradient-text">{s.value}</div>
              <div className="mt-2 text-sm text-muted">{s.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
