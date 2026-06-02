import { useRef } from "react";
import { motion, useInView, useScroll, useSpring } from "framer-motion";
import { experienceData } from "../../data/experienceData";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const cardVariants = {
  hidden: { opacity: 0, y: 56, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const ExperienceEntry = ({ exp }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-12% 0px -8% 0px", amount: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={cardVariants}
      className="relative group"
    >
      <div className="absolute -left-[41px] top-1.5 w-8 h-8 rounded-full border-2 border-cyber-bg bg-cyber-bg flex items-center justify-center z-10 group-hover:border-cyber-pink transition-colors duration-300">
        <div className="w-full h-full rounded-full border border-cyber-cyan/60 flex items-center justify-center shadow-neon-cyan group-hover:border-cyber-pink group-hover:shadow-neon-pink transition-all duration-300">
          <Briefcase className="w-4 h-4 text-cyber-cyan group-hover:text-cyber-pink transition-colors" />
        </div>
      </div>

      <div className="hidden md:block absolute -left-[200px] top-2 w-[140px] text-right font-mono text-sm text-cyber-text/60 font-semibold uppercase group-hover:text-cyber-cyan transition-colors">
        {exp.period}
      </div>

      <div className="p-6 md:p-8 rounded-xl border border-cyber-card-border bg-cyber-card/75 backdrop-blur-sm hover:border-cyber-cyan/40 transition-all duration-300 shadow-xl relative text-left">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 border-b border-cyber-border/40 pb-4 mb-5">
          <div>
            <h3 className="text-xl font-bold text-cyber-text-h group-hover:text-cyber-cyan transition-colors">
              {exp.role}
            </h3>
            <div className="text-base font-semibold text-cyber-purple font-mono mt-1">
              {exp.company}
            </div>
          </div>

          <div className="flex flex-col items-start sm:items-end gap-1.5 font-mono text-xs text-cyber-text/60">
            <span className="flex items-center gap-1 md:hidden">
              <Calendar className="w-3.5 h-3.5 text-cyber-purple" />
              {exp.period}
            </span>
            <span className="flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-cyber-cyan" />
              {exp.location}
            </span>
          </div>
        </div>

        <p className="text-cyber-text/80 text-sm sm:text-base font-light mb-5 leading-relaxed">
          {exp.description}
        </p>

        <ul className="space-y-2.5 mb-6 text-sm sm:text-base text-cyber-text/85">
          {exp.points.map((point, pIdx) => (
            <li key={pIdx} className="flex gap-2 items-start leading-relaxed">
              <span className="text-cyber-cyan font-bold font-mono mt-0.5 shrink-0">&gt;</span>
              <span>{point}</span>
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2 pt-4 border-t border-cyber-border/40">
          {exp.tech.map((techItem, tIdx) => (
            <span
              key={tIdx}
              className="px-3 py-1.5 rounded-md bg-cyber-accent-bg border border-cyber-border/50 font-mono text-xs text-cyber-text/90 hover:text-cyber-text-h hover:border-cyber-cyan/50 transition-all"
            >
              {techItem}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export const Experience = () => {
  const timelineRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 0.9", "end 0.1"],
  });
  const lineProgress = useSpring(scrollYProgress, {
    stiffness: 60,
    damping: 20,
    restDelta: 0.001,
  });

  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-cyber-darker/35">
      <div className="absolute inset-0 moving-grid pointer-events-none opacity-[0.03]" />

      <div className="page-container w-full relative z-10">
        <div className="flex flex-col mb-16 text-left">
          <h2 className="section-title text-cyber-text-h uppercase">
            PROFESSIONAL{" "}
            <span className="bg-gradient-to-r from-cyber-cyan to-cyber-purple bg-clip-text text-transparent">
              JOURNEY
            </span>
          </h2>
          <div className="h-0.5 w-20 bg-gradient-to-r from-cyber-cyan to-cyber-purple mt-3" />
        </div>

        <div
          ref={timelineRef}
          className="relative ml-4 md:ml-32 pl-8 space-y-12"
        >
          {/* Static track */}
          <div
            className="absolute left-0 top-0 bottom-0 w-[2px] bg-white/10 rounded-full"
            aria-hidden
          />
          {/* Scroll-filled progress (timer effect) */}
          <motion.div
            className="absolute left-0 top-0 w-[2px] rounded-full origin-top bg-gradient-to-b from-cyber-cyan via-cyber-purple to-cyber-pink shadow-[0_0_12px_rgba(6,182,212,0.5)]"
            style={{
              height: "100%",
              scaleY: lineProgress,
            }}
            aria-hidden
          />

          {experienceData.map((exp, idx) => (
            <ExperienceEntry key={idx} exp={exp} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
