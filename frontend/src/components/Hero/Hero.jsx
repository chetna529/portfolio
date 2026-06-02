import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./Hero.css";
import { useTypingEffect } from "../../hooks/useTypingEffect";
import { downloadResume } from "../../utils/downloadResume";
import { ArrowRight, FileText } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

const clipReveal = {
  hidden: { opacity: 0, y: 40, clipPath: "inset(100% 0 0 0)" },
  visible: {
    opacity: 1,
    y: 0,
    clipPath: "inset(0% 0 0 0)",
    transition: { duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] },
  },
};

export const Hero = () => {
  const [mounted, setMounted] = useState(false);
  const typedTitle = useTypingEffect(
    ["Full-Stack Developer", "FastAPI + React Engineer", "Python & MERN Developer", "RAG & AI Systems Builder", "API Architect"],
    90,
    45,
    1800
  );

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section
      id="home"
      className="hero-section hero-section--mono relative min-h-screen flex flex-col justify-center overflow-hidden"
      style={{ background: "#09090B" }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)
          `,
          backgroundSize: "72px 72px",
        }}
      />

      <div className="hero-stage page-container w-full">
        <motion.p
          className="hero-bridge-title"
          initial={{ opacity: 0, x: 24 }}
          animate={mounted ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          aria-hidden
        >
          Full-Stack AI Engineer
        </motion.p>

        <div className="hero-content">
          <motion.div
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate={mounted ? "visible" : "hidden"}
            className="inline-flex items-center gap-2 mb-8"
            style={{
              fontFamily: "'Fira Code', monospace",
              fontSize: "0.65rem",
              fontWeight: 700,
              letterSpacing: "0.12em",
              color: "rgba(250,250,250,0.55)",
              textTransform: "uppercase",
            }}
          >
            <span
              style={{
                width: 7,
                height: 7,
                borderRadius: "50%",
                background: "#d4d4d8",
                display: "inline-block",
                animation: "heroPulse 2s ease-in-out infinite",
              }}
            />
            AVAILABLE FOR WORK // OPEN TO PROJECTS
          </motion.div>

          <motion.p
            className="hero-eyebrow"
            variants={fadeUp}
            custom={1}
            initial="hidden"
            animate={mounted ? "visible" : "hidden"}
          >
            FROM FULL-STACK / TO AI SYSTEMS
          </motion.p>

          <motion.h2
            className="hero-display-title"
            variants={clipReveal}
            initial="hidden"
            animate={mounted ? "visible" : "hidden"}
          >
            Full-Stack <span>AI Engineer</span>
          </motion.h2>

          <motion.h1
            className="hero-name"
            variants={fadeUp}
            custom={2}
            initial="hidden"
            animate={mounted ? "visible" : "hidden"}
          >
            CHETNA SONI
          </motion.h1>

          <motion.div
            className="flex items-center mb-8"
            variants={fadeUp}
            custom={3}
            initial="hidden"
            animate={mounted ? "visible" : "hidden"}
            style={{
              fontFamily: "'Fira Code', monospace",
              fontSize: "clamp(0.9rem, 1.9vw, 1.35rem)",
              fontWeight: 400,
              color: "rgba(250,250,250,0.65)",
              letterSpacing: "0.02em",
            }}
          >
            <span style={{ opacity: 0.45 }}>&gt; </span>
            <span style={{ marginLeft: 8, paddingRight: 4 }} className="hero-blink">
              {typedTitle}
            </span>
          </motion.div>

          <motion.div
            variants={fadeUp}
            custom={4}
            initial="hidden"
            animate={mounted ? "visible" : "hidden"}
            style={{
              borderTop: "1px solid rgba(255,255,255,0.08)",
              marginBottom: "clamp(20px,3vw,32px)",
            }}
          />

          <motion.p
            variants={fadeUp}
            custom={5}
            initial="hidden"
            animate={mounted ? "visible" : "hidden"}
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "clamp(0.95rem, 1.5vw, 1.12rem)",
              fontWeight: 300,
              color: "#71717A",
              lineHeight: 1.75,
              maxWidth: 560,
              marginBottom: "clamp(24px, 3vw, 40px)",
            }}
          >
            Specialized in deploying multi-tenant{" "}
            <strong style={{ color: "#E4E4E7", fontWeight: 600 }}>
              RAG (Retrieval-Augmented Generation)
            </strong>{" "}
            frameworks, building real-time WebSocket dashboards, and constructing full-stack interfaces
            in <strong style={{ color: "#E4E4E7", fontWeight: 600 }}>React.js & FastAPI</strong>.
          </motion.p>

          <motion.div
            className="flex flex-wrap items-center gap-4"
            variants={fadeUp}
            custom={6}
            initial="hidden"
            animate={mounted ? "visible" : "hidden"}
          >
            <a
              href="#contact"
              style={{
                fontFamily: "'Fira Code', monospace",
                fontWeight: 700,
                fontSize: "0.7rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#09090B",
                background: "#FAFAFA",
                border: "1px solid #FAFAFA",
                padding: "12px 24px",
                borderRadius: "8px",
                display: "flex",
                alignItems: "center",
                gap: 8,
                textDecoration: "none",
              }}
            >
              HIRE ME <ArrowRight size={14} />
            </a>

            <a
              href="#projects"
              style={{
                fontFamily: "'Fira Code', monospace",
                fontWeight: 700,
                fontSize: "0.7rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#FAFAFA",
                background: "transparent",
                border: "1px solid rgba(255,255,255,0.2)",
                padding: "12px 24px",
                borderRadius: "8px",
                textDecoration: "none",
              }}
            >
              VIEW PROJECTS
            </a>

            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                downloadResume();
              }}
              style={{
                fontFamily: "'Fira Code', monospace",
                fontWeight: 700,
                fontSize: "0.7rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#FAFAFA",
                background: "transparent",
                border: "1px solid rgba(255,255,255,0.2)",
                padding: "12px 24px",
                borderRadius: "8px",
                display: "flex",
                alignItems: "center",
                gap: 8,
                cursor: "pointer",
              }}
            >
              <FileText size={14} /> RESUME
            </button>
          </motion.div>

          <motion.div
            className="mt-14 pt-6 flex flex-wrap items-center gap-6"
            variants={fadeUp}
            custom={7}
            initial="hidden"
            animate={mounted ? "visible" : "hidden"}
            style={{
              borderTop: "1px solid rgba(255,255,255,0.06)",
              fontFamily: "'Fira Code', monospace",
              fontSize: "0.6rem",
              fontWeight: 400,
              letterSpacing: "0.1em",
              color: "rgba(255,255,255,0.25)",
              textTransform: "uppercase",
            }}
          >
            <span>LAT: 22.7196° N</span>
            <span style={{ color: "rgba(255,255,255,0.08)" }}>·</span>
            <span>LON: 75.8577° E</span>
            <span style={{ color: "rgba(255,255,255,0.08)" }}>·</span>
            <span>SYS_ONLINE</span>
          </motion.div>
        </div>

        <motion.div
          className="hero-face-wrap"
          aria-hidden
          initial={{ opacity: 0, x: 40 }}
          animate={mounted ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="hero-face-crop">
            <img
              src="/assets/images/portrait-face.png"
              alt=""
              className="hero-face-img"
              draggable={false}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
