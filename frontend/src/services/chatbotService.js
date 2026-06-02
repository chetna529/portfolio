import { API_BASE_URL } from "../utils/constants";
import { SOCIAL_LINKS } from "../utils/constants";

const EMAIL = SOCIAL_LINKS.email;

const getLocalBotResponse = (message) => {
  const msg = message.toLowerCase();

  if (anyIn(msg, ["hi", "hello", "hey", "greetings"])) {
    return `👋 **Greetings!** I'm **A.E.G.I.S**, Chetna's portfolio assistant.\n\nAsk about her **experience**, **skills**, **projects**, or **how to hire her**.`;
  }

  if (anyIn(msg, ["skill", "technolog", "tech", "lang", "know", "code", "grafana", "influx"])) {
    return `⚡ **Tech Arsenal:**\n\n• **Frontend:** React.js, Tailwind, Three.js, Framer Motion\n• **Backend:** FastAPI, Node.js, REST APIs, Python\n• **AI:** RAG, LangChain, OpenAI, Vector DBs\n• **Data & Ops:** PostgreSQL, MongoDB, InfluxDB, Grafana, Docker\n• **Real-time:** WebSockets, ROS 2 telemetry dashboards`;
  }

  if (anyIn(msg, ["experience", "work", "job", "intern", "47", "bidyut", "trueig", "coe", "excellence"])) {
    return `💼 **Experience:**\n\n1. **TRUEiGTECH** — Software Developer Trainee (May 2026 – Present)\n2. **Bidyut Innovation** — Full-Stack Developer (Mar – May 2026)\n   ROS 2, Grafana, InfluxDB, real-time telemetry\n3. **Center of Excellence** — Member (Jun 2025 – Mar 2026)\n4. **47Billion** — Full-Stack Developer (Jun – Sep 2025)\n   RAG chatbots, FastAPI, React`;
  }

  if (anyIn(msg, ["project", "build", "portfolio", "codebase"])) {
    return `🚀 **Featured work (7+ projects):**\n\n• Multi-tenant **RAG chatbot** platforms\n• **Inventory** & operations dashboards\n• **Real-time telemetry** with WebSockets\n• Full-stack **FastAPI + React** systems\n\nSee the Projects section on this site for details.`;
  }

  if (anyIn(msg, ["freelance", "hire", "project inquiry", "start a project"])) {
    return `📋 **Freelance / Hire:**\n\nUse **Start a Project** in the Freelance section to send project details — they go straight to **${EMAIL}**.\n\nOr email: **${EMAIL}**`;
  }

  if (anyIn(msg, ["contact", "email", "phone", "linkedin", "resume", "github", "whatsapp"])) {
    return `📞 **Contact Chetna:**\n\n• **Email:** ${EMAIL}\n• **Phone / WhatsApp:** +91 8602425826\n• **GitHub:** github.com/chetna529\n• **LinkedIn:** linkedin.com/in/chetna-soni-1a2814339/`;
  }

  return `🧬 I can help with **skills**, **experience**, **projects**, **freelance**, or **contact** info.\n\nTry: "Tell me about Bidyut Innovation" or "How do I hire you?"`;
};

const anyIn = (str, keywords) => keywords.some((k) => str.includes(k));

export const sendMessageToBot = async (message) => {
  try {
    const response = await fetch(`${API_BASE_URL}/chatbot`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message }),
    });

    if (response.ok) {
      const data = await response.json();
      if (data?.response?.trim()) return data.response;
    }
  } catch (error) {
    console.warn("Chatbot API unavailable, using local assistant:", error);
  }

  await new Promise((resolve) => setTimeout(resolve, 400));
  return getLocalBotResponse(message);
};

export default sendMessageToBot;
