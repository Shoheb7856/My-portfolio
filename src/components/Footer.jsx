import { profile } from "../data";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted">
        <span>
          © {new Date().getFullYear()} <span className="gradient-text font-semibold">{profile.name}</span>. Built with React, Tailwind &amp; Framer Motion.
        </span>
        <span className="font-mono">Designed &amp; developed with ❤</span>
      </div>
    </footer>
  );
}
