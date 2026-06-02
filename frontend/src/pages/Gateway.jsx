import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import "./Gateway.css";

const SERVICES = ["/ FASTAPI BACKEND", "/ PYTHON & REACT", "/ AI RAG SYSTEMS"];

const AsteriskIcon = () => (
  <svg
    className="gateway-asterisk"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    aria-hidden
  >
    <line x1="12" y1="2" x2="12" y2="22" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" />
    <line x1="4.93" y1="19.07" x2="19.07" y2="4.93" />
  </svg>
);

export const Gateway = () => {
  const navigate = useNavigate();
  const [isEntering, setIsEntering] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const html = document.documentElement;
    const prevHtml = html.style.overflow;
    const prevBody = document.body.style.overflow;
    html.classList.add("gateway-locked");
    html.style.overflow = "hidden";
    document.body.style.overflow = "hidden";
    return () => {
      html.classList.remove("gateway-locked");
      html.style.overflow = prevHtml;
      document.body.style.overflow = prevBody;
    };
  }, []);

  const handleEnter = () => {
    if (isEntering) return;
    setIsEntering(true);
    window.scrollTo(0, 0);
    setTimeout(() => {
      navigate("/portfolio", { state: { scrollToTop: true } });
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }, 700);
  };

  const lineVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, delay: i * 0.08 + 0.12, ease: [0.22, 1, 0.36, 1] },
    }),
  };

  const fadeVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.6, delay: 0.05, ease: "easeOut" },
    },
  };

  const headlineLines = [
    { left: "FULL-", right: "STACK", full: "FULL-STACK" },
    { left: "DEV", right: "ELOPER", full: "DEVELOPER" },
    { left: "& AI", right: "RAG", full: "& AI RAG" },
    { left: "SYS", right: "TEMS", full: "SYSTEMS" },
  ];

  return (
    <>
      <AnimatePresence>
        {isEntering && (
          <motion.div
            className="fixed inset-0 z-[100] bg-white origin-left"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
          />
        )}
      </AnimatePresence>

      <div
        className="gateway-screen w-full select-none"
        onClick={handleEnter}
        onKeyDown={(e) => e.key === "Enter" && handleEnter()}
        role="button"
        tabIndex={0}
        aria-label="Click anywhere to enter portfolio"
      >
        <motion.header
          variants={fadeVariants}
          initial="hidden"
          animate={mounted ? "visible" : "hidden"}
          className="gateway-header gateway-inset gateway-ui"
        >
          <span className="gateway-header-brand">CHETNA SONI ©</span>
          <button
            type="button"
            className="gateway-header-cta"
            onClick={(e) => {
              e.stopPropagation();
              handleEnter();
            }}
          >
            EXPLORE PORTFOLIO ↗
          </button>
        </motion.header>

        <div className="gateway-hero-stage">
          <div className="gateway-headline-stack">
            {headlineLines.map((line, idx) => (
              <motion.div
                key={line.full}
                custom={idx}
                variants={lineVariants}
                initial="hidden"
                animate={mounted ? "visible" : "hidden"}
                className="gateway-headline-line gateway-headline-line--split"
                aria-label={line.full}
              >
                <span className="gateway-headline-left">{line.left}</span>
                <span className="gateway-headline-gap" aria-hidden />
                <span className="gateway-headline-right">{line.right}</span>
              </motion.div>
            ))}
          </div>

          <div className="gateway-portrait-wrap" aria-hidden>
            <img
              src="/assets/images/profile-cutout.png"
              alt=""
              className="gateway-portrait"
              onError={(e) => {
                e.currentTarget.src = "/assets/images/profile.png";
              }}
            />
          </div>
        </div>

        <motion.footer
          variants={fadeVariants}
          initial="hidden"
          animate={mounted ? "visible" : "hidden"}
          className="gateway-footer gateway-inset gateway-ui"
        >
          <span className="gateway-footer-location">BASED IN INDORE, IN</span>
          <div className="gateway-services">
            <AsteriskIcon />
            <div className="gateway-services-list">
              {SERVICES.map((line) => (
                <div key={line}>{line}</div>
              ))}
            </div>
          </div>
        </motion.footer>
      </div>
    </>
  );
};

export default Gateway;
