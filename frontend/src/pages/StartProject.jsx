import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, Send, Loader2, CheckCircle2, MessageCircle, Mail } from "lucide-react";
import { openWhatsApp, openGmailCompose } from "../utils/contactChannels";
import { SOCIAL_LINKS } from "../utils/constants";

const inputClass = "portfolio-input w-full rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#7C3AED] focus:ring-1 focus:ring-[#7C3AED]/40";

const labelStyle = {
  fontFamily: "'Inter', sans-serif",
  fontSize: "0.75rem",
  fontWeight: 600,
  color: "rgba(250,250,250,0.65)",
  marginBottom: 6,
  display: "block",
};

const ThankYouNote = () => (
  <div
    className="mt-14 p-8 rounded-xl border border-[#7C3AED]/25"
    style={{ background: "rgba(124, 58, 237, 0.06)" }}
  >
    <p
      style={{
        fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif",
        fontWeight: 700,
        fontSize: "1.15rem",
        color: "#FAFAFA",
        lineHeight: 1.5,
        marginBottom: 12,
      }}
    >
      Thank you for reaching out.
    </p>
    <p
      style={{
        fontFamily: "'Inter', sans-serif",
        fontSize: "0.95rem",
        color: "#A1A1AA",
        lineHeight: 1.8,
      }}
    >
      Every ambitious idea starts with a single conversation. Whether you are building an AI product,
      scaling a full-stack platform, or solving a problem no one has cracked yet — keep building,
      keep learning, and keep shipping. The best systems are built by people who refuse to stop at
      &ldquo;good enough.&rdquo; I look forward to creating something remarkable with you.
    </p>
    <p
      style={{
        fontFamily: "'Fira Code', monospace",
        fontSize: "0.7rem",
        color: "#7C3AED",
        marginTop: 16,
        letterSpacing: "0.08em",
      }}
    >
      — Chetna Soni · Full-Stack & AI Engineer
    </p>
  </div>
);

export const StartProject = () => {
  const navigate = useNavigate();

  const goToFreelance = (e) => {
    e.preventDefault();
    navigate("/portfolio#freelance");
  };

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    projectTitle: "",
    projectDetails: "",
    timeline: "",
    budget: "",
  });
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState("");
  const [sentVia, setSentVia] = useState("");

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const buildWhatsAppMessage = () =>
    [
      "Hi Chetna! 👋",
      "",
      "I have a freelance project inquiry from your portfolio:",
      "",
      `👤 Name: ${form.name}`,
      `📧 Email: ${form.email}`,
      form.phone ? `📱 Phone: ${form.phone}` : "",
      "",
      `📌 Project: ${form.projectTitle}`,
      "",
      form.projectDetails,
      "",
      `⏱ Timeline: ${form.timeline || "Not specified"}`,
      `💰 Budget: ${form.budget || "Not specified"}`,
    ]
      .filter(Boolean)
      .join("\n");

  const buildEmailBody = () =>
    [
      "Hi Chetna,",
      "",
      "Freelance project inquiry from your portfolio:",
      "",
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      form.phone ? `Phone: ${form.phone}` : "",
      "",
      `Project: ${form.projectTitle}`,
      "",
      form.projectDetails,
      "",
      `Timeline: ${form.timeline || "Not specified"}`,
      `Budget: ${form.budget || "Not specified"}`,
    ]
      .filter(Boolean)
      .join("\n");

  const validate = () => {
    if (!form.name || !form.email || !form.projectTitle || !form.projectDetails) {
      setError("Please fill in name, email, project title, and project details.");
      return false;
    }
    setError("");
    return true;
  };

  const resetForm = () => {
    setForm({
      name: "",
      email: "",
      phone: "",
      projectTitle: "",
      projectDetails: "",
      timeline: "",
      budget: "",
    });
  };

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    openWhatsApp(buildWhatsAppMessage());
    setSentVia("whatsapp");
    setDone(true);
    resetForm();
    setLoading(false);
  };

  const handleGmailSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    openGmailCompose({
      subject: `Freelance Project: ${form.projectTitle}`,
      body: buildEmailBody(),
    });
    setSentVia("gmail");
    setDone(true);
    resetForm();
    setLoading(false);
  };

  return (
    <div className="min-h-screen pt-28 pb-20" style={{ background: "#09090B" }}>
      <div className="page-container w-full max-w-4xl">
        <button
          type="button"
          onClick={goToFreelance}
          className="inline-flex items-center gap-2 mb-10 px-5 py-3 rounded-lg border border-white/20 bg-white/[0.06] text-white text-sm font-semibold uppercase tracking-wide hover:border-[#7C3AED] hover:bg-[#7C3AED]/15 transition-all cursor-pointer"
        >
          <ArrowLeft size={18} /> Back to Freelance
        </button>

        <h1
          className="font-display font-extrabold uppercase leading-none mb-3"
          style={{
            fontSize: "clamp(2rem, 5vw, 3rem)",
            color: "#FAFAFA",
          }}
        >
          Tell me about <span className="text-[#7C3AED]">your project</span>
        </h1>
        <p className="text-zinc-400 text-base leading-relaxed mb-8 max-w-2xl">
          Choose how to send your details — <strong className="text-[#10B981]">WhatsApp</strong> opens
          a chat with me instantly, or use <strong className="text-[#06B6D4]">Gmail</strong> to
          compose an email to {SOCIAL_LINKS.email}.
        </p>

        {done ? (
          <div
            className="p-7 rounded-xl border border-emerald-500/30 mb-6"
            style={{ background: "rgba(16, 185, 129, 0.06)" }}
          >
            <CheckCircle2 size={28} color="#10B981" className="mb-3" />
            <p className="text-white font-bold text-lg mb-2">Ready to send!</p>
            <p className="text-zinc-400 text-sm leading-relaxed">
              {sentVia === "whatsapp"
                ? "WhatsApp should have opened in a new tab. Tap Send in the chat to deliver your project details to me."
                : "Gmail compose should have opened in a new tab. Review the message and click Send in Gmail."}
            </p>
          </div>
        ) : (
          <form className="space-y-5" onSubmit={handleWhatsAppSubmit}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label style={labelStyle}>Your name *</label>
                <input className={inputClass} name="name" value={form.name} onChange={handleChange} required />
              </div>
              <div>
                <label style={labelStyle}>Your email *</label>
                <input className={inputClass} type="email" name="email" value={form.email} onChange={handleChange} required />
              </div>
            </div>

            <div>
              <label style={labelStyle}>Phone / WhatsApp</label>
              <input className={inputClass} name="phone" value={form.phone} onChange={handleChange} placeholder="+91 ..." />
            </div>

            <div>
              <label style={labelStyle}>Project title *</label>
              <input
                className={inputClass}
                name="projectTitle"
                value={form.projectTitle}
                onChange={handleChange}
                placeholder="e.g. RAG chatbot for internal docs"
                required
              />
            </div>

            <div>
              <label style={labelStyle}>Project details *</label>
              <textarea
                className={`${inputClass} resize-y min-h-[140px]`}
                name="projectDetails"
                value={form.projectDetails}
                onChange={handleChange}
                placeholder="Goals, features, tech preferences, deadlines..."
                required
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label style={labelStyle}>Timeline</label>
                <input className={inputClass} name="timeline" value={form.timeline} onChange={handleChange} placeholder="e.g. 6 weeks" />
              </div>
              <div>
                <label style={labelStyle}>Budget range</label>
                <input className={inputClass} name="budget" value={form.budget} onChange={handleChange} placeholder="e.g. ₹50k – ₹1L" />
              </div>
            </div>

            {error && <p className="text-pink-400 text-sm font-mono">{error}</p>}

            <div className="flex flex-wrap gap-4 pt-2">
              <button
                type="submit"
                disabled={loading}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-[#10B981] border border-[#10B981] text-white text-sm font-bold uppercase tracking-wide hover:bg-emerald-600 transition-colors disabled:opacity-60"
              >
                {loading ? <Loader2 size={16} className="animate-spin" /> : <MessageCircle size={16} />}
                Send via WhatsApp
              </button>
              <button
                type="button"
                disabled={loading}
                onClick={handleGmailSubmit}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-transparent border border-[#06B6D4]/50 text-[#06B6D4] text-sm font-bold uppercase tracking-wide hover:bg-[#06B6D4]/10 transition-colors disabled:opacity-60"
              >
                <Mail size={16} />
                Send via Gmail
              </button>
            </div>
          </form>
        )}

        <ThankYouNote />
      </div>
    </div>
  );
};

export default StartProject;
