import { motion, useScroll, useTransform } from "framer-motion";

// Animated gradient blobs + grid that drift subtly on scroll.
export default function Background() {
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 160]);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-60" />
      <motion.div
        style={{ y: y1 }}
        className="absolute -top-32 -left-24 w-[32rem] h-[32rem] rounded-full bg-accent/30 blur-[120px] animate-blob"
      />
      <motion.div
        style={{ y: y2 }}
        className="absolute top-1/3 -right-24 w-[30rem] h-[30rem] rounded-full bg-accent2/25 blur-[120px] animate-blob"
      />
      <motion.div
        style={{ y: y1 }}
        className="absolute bottom-0 left-1/3 w-[28rem] h-[28rem] rounded-full bg-accent3/20 blur-[120px] animate-blob"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-base/40 via-transparent to-base" />
    </div>
  );
}
