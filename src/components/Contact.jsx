import { useState } from "react";
import { motion } from "framer-motion";
import { FiMail, FiPhone, FiGithub, FiLinkedin, FiCheck, FiCopy } from "react-icons/fi";
import SectionHeading from "./SectionHeading";
import { fadeUp, stagger } from "./motionPresets";
import { profile } from "../data";
import Magnetic from "./Magnetic";

const links = [
  {
    icon: FiMail,
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    external: false,
  },
  {
    icon: FiPhone,
    label: "Phone",
    value: profile.phone,
    href: `tel:${profile.phone}`,
    external: false,
  },
  {
    icon: FiGithub,
    label: "GitHub",
    value: "View profile",
    href: profile.github,
    external: true,
  },
  {
    icon: FiLinkedin,
    label: "LinkedIn",
    value: "Connect",
    href: profile.linkedin,
    external: true,
  },
];

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
    } catch {
      // Fallback for browsers blocking clipboard API
      const ta = document.createElement("textarea");
      ta.value = profile.email;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  // Try to open the user's mail client, but never leave the click
  // feeling "dead" — always copy the address and confirm.
  const handleEmail = () => {
    copyEmail();
    window.location.href = `mailto:${profile.email}`;
  };

  return (
    <section id="contact" className="section-pad">
      <SectionHeading eyebrow="Say Hello" title="Let's Work Together" />

      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
        className="text-center max-w-2xl mx-auto"
      >
        <p className="text-lg text-muted leading-relaxed">
          I'm open to full stack engineering roles and interesting backend
          challenges. Drop a message and let's build something reliable together.
        </p>
      </motion.div>

      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
      >
        {links.map((l) => (
          <motion.a
            key={l.label}
            href={l.href}
            {...(l.external ? { target: "_blank", rel: "noreferrer" } : {})}
            data-cursor="hover"
            variants={fadeUp}
            whileHover={{ y: -8 }}
            className="group glass rounded-2xl p-6 text-center flex flex-col items-center gap-3"
          >
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-accent/30 to-accent2/30 flex items-center justify-center text-2xl text-accent2 group-hover:scale-110 transition-transform">
              <l.icon />
            </div>
            <div>
              <div className="text-sm text-muted">{l.label}</div>
              <div className="font-semibold break-all text-sm mt-1 group-hover:text-accent2 transition-colors">
                {l.value}
              </div>
            </div>
          </motion.a>
        ))}
      </motion.div>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="mt-14 flex flex-col items-center gap-4"
      >
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Magnetic strength={0.5}>
            <button
              type="button"
              onClick={handleEmail}
              data-cursor="hover"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-white bg-gradient-to-r from-accent to-accent2 hover:from-accent2 hover:to-accent3 transition-all"
            >
              <FiMail /> Send me an email
            </button>
          </Magnetic>

          <Magnetic strength={0.5}>
            <button
              type="button"
              onClick={copyEmail}
              data-cursor="hover"
              className="inline-flex items-center gap-2 px-6 py-4 rounded-full font-semibold glass hover:bg-white/10 transition-all"
            >
              {copied ? <FiCheck className="text-green-400" /> : <FiCopy />}
              {copied ? "Copied!" : "Copy email"}
            </button>
          </Magnetic>
        </div>

        <motion.p
          animate={{ opacity: copied ? 1 : 0 }}
          className="text-sm text-green-400 font-mono h-5"
        >
          {copied ? `${profile.email} copied to clipboard` : ""}
        </motion.p>
      </motion.div>
    </section>
  );
}
