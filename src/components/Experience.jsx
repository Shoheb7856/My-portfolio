import { motion } from "framer-motion";
import { FiBriefcase } from "react-icons/fi";
import SectionHeading from "./SectionHeading";
import { experience } from "../data";

export default function Experience() {
  return (
    <section id="experience" className="section-pad">
      <SectionHeading eyebrow="My Journey" title="Experience" />

      <div className="relative">
        {/* vertical line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-accent via-accent2 to-transparent md:-translate-x-1/2" />

        <div className="space-y-12">
          {experience.map((job, i) => (
            <motion.div
              key={job.company}
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className={`relative pl-14 md:pl-0 md:w-1/2 ${
                i % 2 === 0 ? "md:pr-12 md:ml-0" : "md:pl-12 md:ml-auto"
              }`}
            >
              {/* dot */}
              <span
                className={`absolute top-6 left-4 md:left-auto w-4 h-4 rounded-full border-4 border-base bg-accent2 -translate-x-1/2 ${
                  i % 2 === 0 ? "md:-right-2 md:left-auto md:translate-x-1/2" : "md:-left-2 md:translate-x-[-50%]"
                }`}
              >
                {job.current && (
                  <span className="absolute inset-0 rounded-full bg-accent2 animate-ping" />
                )}
              </span>

              <div className="glass rounded-3xl p-7 hover:border-accent2/40 transition-colors">
                <div className="flex items-center gap-3 mb-1">
                  <FiBriefcase className="text-accent2" />
                  <h3 className="text-xl font-bold">{job.role}</h3>
                </div>
                <div className="flex flex-wrap items-center gap-2 text-sm mb-4">
                  <span className="text-accent font-semibold">{job.company}</span>
                  <span className="text-muted">•</span>
                  <span className="font-mono text-muted">{job.period}</span>
                  {job.current && (
                    <span className="ml-1 px-2 py-0.5 rounded-full text-xs bg-green-400/15 text-green-400">
                      Current
                    </span>
                  )}
                </div>
                <ul className="space-y-2.5">
                  {job.points.map((p, idx) => (
                    <li key={idx} className="flex gap-3 text-sm text-gray-300 leading-relaxed">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-accent2 shrink-0" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
