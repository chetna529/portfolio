import { Shield, BrainCircuit, Activity } from "lucide-react";

const stats = [
  { value: "10+", label: "Technologies", color: "#06B6D4" },
  { value: "7+", label: "Projects", color: "#EC4899" },
  { value: "2", label: "Internships", color: "#7C3AED" },
  { value: "100%", label: "Dockerized Apps", color: "#10B981" },
];

const pillars = [
  {
    icon: BrainCircuit,
    color: "#06B6D4",
    title: "AI RAG INTEGRATOR",
    body: "Custom vector indices & LangChain workflows for context-precise AI pipelines.",
  },
  {
    icon: Shield,
    color: "#7C3AED",
    title: "DOCKER SYSTEM SHIELD",
    body: "Isolated microservice architectures running reliably in containerized environments.",
  },
  {
    icon: Activity,
    color: "#EC4899",
    title: "REAL-TIME VISUALS",
    body: "WebSocket streaming & live telemetry dashboards with millisecond refresh cycles.",
  },
];

export const About = () => (
  <section
    id="about"
    style={{ background: "#09090B", borderTop: "1px solid rgba(255,255,255,0.05)" }}
    className="py-28 relative overflow-hidden"
  >
    <div className="page-container w-full relative z-10">

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start mb-16">
        <div>
          <p className="text-accent-label mb-6">ORIGIN_REPORT // MISSION_THRESHOLD</p>
          <h2
            className="font-serif text-white"
            style={{
              fontSize: "clamp(2rem, 4vw, 3.25rem)",
              fontWeight: 600,
              letterSpacing: "-0.02em",
              lineHeight: 1.2,
            }}
          >
            Building scalable systems & intelligent AI from Indore, India.
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

        <div className="lg:col-span-7 space-y-6">

          {[
            <>I am <strong style={{ color: "#FAFAFA", fontWeight: 600 }}>Chetna Soni</strong>, a B.Tech Computer Science student from Chanderi, Ashoknagar district. I'm a Full Stack Developer and AI Engineer at the intersection of high-performance backend pipelines, secure APIs, and interactive frontend experiences, with a dream to turn my aspirations into reality.</>,
            <>From engineering <strong style={{ color: "#FAFAFA", fontWeight: 600 }}>RAG chatbots</strong> that deliver context-precise document analysis, to structuring real-time telemetry dashboards and WebSocket interfaces — I build applications that are clean, actionable, and scalable.</>,
            <>Professional milestones include Dockerized deployments, robust database schemas across PostgreSQL and MongoDB, and scaling APIs with <strong style={{ color: "#FAFAFA", fontWeight: 600 }}>FastAPI</strong> and Node.js.</>,
          ].map((text, i) => (
            <p
              key={i}
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "0.98rem",
                fontWeight: 400,
                color: "#a1a1aa",
                lineHeight: 1.85,
              }}
            >
              {text}
            </p>
          ))}

          {/* 3 pillar cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
            {pillars.map(({ icon: Icon, color, title, body }, i) => (
              <div
                key={i}
                style={{
                  padding: "20px",
                  border: "1px solid rgba(255,255,255,0.07)",
                  borderLeft: `2px solid ${color}`,
                  borderRadius: "8px",
                  background: "rgba(255,255,255,0.02)",
                }}
              >
                <Icon size={16} color={color} style={{ marginBottom: 10 }} />
                <h4
                  style={{
                    fontFamily: "'Fira Code', monospace",
                    fontWeight: 700,
                    fontSize: "0.65rem",
                    letterSpacing: "0.1em",
                    color: "#FAFAFA",
                    textTransform: "uppercase",
                    marginBottom: 6,
                  }}
                >
                  {title}
                </h4>
                <p
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.78rem",
                    fontWeight: 300,
                    color: "#52525B",
                    lineHeight: 1.6,
                  }}
                >
                  {body}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT — metrics card */}
        <div className="lg:col-span-5">
          <div
            style={{
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "12px",
              background: "rgba(255,255,255,0.02)",
              padding: "32px",
            }}
          >
            {/* Card header */}
            <div
              className="flex justify-between items-center pb-5 mb-6"
              style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}
            >
              <span
                style={{
                  fontFamily: "'Fira Code', monospace",
                  fontSize: "0.6rem",
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                  color: "#06B6D4",
                  textTransform: "uppercase",
                }}
              >
                SYSTEM DIAGNOSTICS
              </span>
              <span
                style={{
                  fontFamily: "'Fira Code', monospace",
                  fontSize: "0.6rem",
                  fontWeight: 400,
                  letterSpacing: "0.1em",
                  color: "#10B981",
                  textTransform: "uppercase",
                }}
              >
                100% OPERATIONAL
              </span>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              {stats.map(({ value, label, color }) => (
                <div key={label}>
                  <div
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontWeight: 700,
                      fontSize: "2.4rem",
                      color,
                      lineHeight: 1,
                    }}
                  >
                    {value}
                  </div>
                  <div
                    style={{
                      fontFamily: "'Fira Code', monospace",
                      fontSize: "0.6rem",
                      fontWeight: 400,
                      letterSpacing: "0.1em",
                      color: "#52525B",
                      textTransform: "uppercase",
                      marginTop: 4,
                    }}
                  >
                    {label}
                  </div>
                </div>
              ))}
            </div>

            {/* Terminal log */}
            <div
              style={{
                borderTop: "1px solid rgba(255,255,255,0.06)",
                paddingTop: 16,
              }}
            >
              {[
                "> sys_diagnose --profile=\"Chetna Soni\"",
                "// CURRENT: AI SOLUTIONS & FULL-STACK SCALING",
                "// COMPILING PORTFOLIO PACKAGES ... RESOLVED",
              ].map((line, i) => (
                <div
                  key={i}
                  style={{
                    fontFamily: "'Fira Code', monospace",
                    fontSize: "0.65rem",
                    fontWeight: 400,
                    color: i === 0 ? "#FAFAFA" : i === 1 ? "#7C3AED" : "#06B6D4",
                    lineHeight: 2,
                    opacity: i === 0 ? 1 : 0.7,
                  }}
                >
                  {line}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
);

export default About;
