import { Link } from "react-router-dom";
import { ArrowRight, MessageCircle } from "lucide-react";
import { SOCIAL_LINKS } from "../../utils/constants";

const services = [
  "RAG & AI Chatbot Systems",
  "Full-Stack Web Applications",
  "REST API Architecture",
  "Real-time Dashboards",
];

const engagements = [
  { type: "PROJECT-BASED", desc: "Fixed scope, fixed price" },
  { type: "CONTRACT", desc: "Ongoing monthly retainer" },
  { type: "CONSULTATION", desc: "1-on-1 sessions & code review" },
];

export const Freelance = () => (
  <section
    id="freelance"
    style={{
      background: "#09090B",
      borderTop: "1px solid rgba(255,255,255,0.05)",
    }}
    className="py-28 relative overflow-hidden"
  >
    {/* Background accent */}
    <div
      className="absolute pointer-events-none"
      style={{
        width: "50vw",
        height: "50vh",
        bottom: "0%",
        right: "-10%",
        background: "radial-gradient(ellipse at center, rgba(124,58,237,0.05) 0%, transparent 70%)",
      }}
    />

    <div className="page-container w-full relative z-10">

      {/* Availability badge */}
      <div
        className="inline-flex items-center gap-2 mb-10"
        style={{
          fontFamily: "'Fira Code', monospace",
          fontSize: "0.65rem",
          fontWeight: 700,
          letterSpacing: "0.12em",
          color: "rgba(16,185,129,0.9)",
          textTransform: "uppercase",
          padding: "6px 14px",
          border: "1px solid rgba(16,185,129,0.2)",
          borderRadius: "100px",
          background: "rgba(16,185,129,0.05)",
        }}
      >
        <span
          style={{
            width: 6,
            height: 6,
            borderRadius: "50%",
            background: "#10B981",
            display: "inline-block",
            animation: "freelancePulse 2s ease-in-out infinite",
          }}
        />
        AVAILABLE FOR FREELANCE WORK
      </div>

      {/* Heading */}
      <div className="mb-16">
        <h2
          style={{
            fontFamily: "'Syne', sans-serif",
            fontWeight: 900,
            fontSize: "clamp(2.5rem, 6vw, 6rem)",
            letterSpacing: "-0.025em",
            lineHeight: 0.9,
            color: "#FAFAFA",
            textTransform: "uppercase",
          }}
        >
          LET'S BUILD<br />
          <span style={{ color: "#7C3AED" }}>SOMETHING.</span>
        </h2>
      </div>

      {/* Two-column layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

        {/* LEFT — what I build */}
        <div>
          <h3
            style={{
              fontFamily: "'Syne', sans-serif",
              fontWeight: 700,
              fontSize: "0.85rem",
              letterSpacing: "0.08em",
              color: "#FAFAFA",
              textTransform: "uppercase",
              marginBottom: 24,
            }}
          >
            What I build
          </h3>
          <div className="space-y-3">
            {services.map((s, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 14,
                  padding: "16px 20px",
                  border: "1px solid rgba(255,255,255,0.06)",
                  borderLeft: "2px solid #7C3AED",
                  borderRadius: "8px",
                  background: "rgba(255,255,255,0.02)",
                }}
              >
                <span
                  style={{
                    fontFamily: "'Fira Code', monospace",
                    fontSize: "0.6rem",
                    color: "rgba(124,58,237,0.5)",
                    fontWeight: 700,
                    minWidth: 20,
                  }}
                >
                  0{i + 1}
                </span>
                <span
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontWeight: 500,
                    fontSize: "0.9rem",
                    color: "#A1A1AA",
                    letterSpacing: "0.02em",
                  }}
                >
                  {s}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT — how we work */}
        <div>
          <h3
            style={{
              fontFamily: "'Syne', sans-serif",
              fontWeight: 700,
              fontSize: "0.85rem",
              letterSpacing: "0.08em",
              color: "#FAFAFA",
              textTransform: "uppercase",
              marginBottom: 24,
            }}
          >
            How we work
          </h3>
          <div className="space-y-4">
            {engagements.map(({ type, desc }, i) => (
              <div
                key={i}
                style={{
                  padding: "20px 24px",
                  border: "1px solid rgba(255,255,255,0.06)",
                  borderRadius: "10px",
                  background: "rgba(255,255,255,0.02)",
                }}
              >
                <div
                  style={{
                    fontFamily: "'Fira Code', monospace",
                    fontWeight: 700,
                    fontSize: "0.65rem",
                    letterSpacing: "0.1em",
                    color: "#FAFAFA",
                    textTransform: "uppercase",
                    marginBottom: 4,
                  }}
                >
                  {type}
                </div>
                <div
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontWeight: 300,
                    fontSize: "0.82rem",
                    color: "#52525B",
                  }}
                >
                  {desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA bar */}
      <div
        className="flex flex-wrap items-center gap-4 mt-14 pt-10"
        style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
      >
        <Link
          to="/portfolio/start-project"
          style={{
            fontFamily: "'Fira Code', monospace",
            fontWeight: 700,
            fontSize: "0.7rem",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "#FAFAFA",
            background: "#7C3AED",
            border: "1px solid #7C3AED",
            padding: "13px 28px",
            borderRadius: "8px",
            display: "flex",
            alignItems: "center",
            gap: 8,
            textDecoration: "none",
            transition: "background 0.2s, transform 0.15s",
          }}
          onMouseEnter={(e) => { e.currentTarget.style.background = "#6D28D9"; e.currentTarget.style.transform = "translateY(-1px)"; }}
          onMouseLeave={(e) => { e.currentTarget.style.background = "#7C3AED"; e.currentTarget.style.transform = "translateY(0)"; }}
        >
          START A PROJECT <ArrowRight size={14} />
        </Link>

        <a
          href={`https://wa.me/918602425826?text=${encodeURIComponent("Hi Chetna! I'd like to discuss a freelance project from your portfolio.")}`}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontFamily: "'Fira Code', monospace",
            fontWeight: 700,
            fontSize: "0.7rem",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "#A1A1AA",
            background: "transparent",
            border: "1px solid rgba(255,255,255,0.1)",
            padding: "13px 28px",
            borderRadius: "8px",
            display: "flex",
            alignItems: "center",
            gap: 8,
            textDecoration: "none",
            transition: "border-color 0.2s, color 0.2s",
          }}
          onMouseEnter={(e) => { e.currentTarget.style.color = "#FAFAFA"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.25)"; }}
          onMouseLeave={(e) => { e.currentTarget.style.color = "#A1A1AA"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)"; }}
        >
          <MessageCircle size={14} /> MESSAGE ON WHATSAPP ↗
        </a>
      </div>
    </div>

    <style>{`
      @keyframes freelancePulse {
        0%, 100% { opacity: 1; transform: scale(1); }
        50% { opacity: 0.5; transform: scale(0.8); }
      }
    `}</style>
  </section>
);

export default Freelance;
