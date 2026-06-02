import { useState, useRef, useEffect } from "react";
import { downloadResume } from "../../utils/downloadResume";
import { Terminal as TermIcon } from "lucide-react";

export const Terminal = () => {
  const [history, setHistory] = useState([
    { text: "⚡ Chetna Soni Cybernetic Shell v1.0.0", type: "system" },
    { text: "Enter 'help' to examine available query commands.", type: "system" },
  ]);
  const [input, setInput] = useState("");
  const logPanelRef = useRef(null);

  useEffect(() => {
    const panel = logPanelRef.current;
    if (panel) panel.scrollTop = panel.scrollHeight;
  }, [history]);

  const handleCommandSubmit = (e) => {
    e.preventDefault();
    const cmd = input.trim().toLowerCase();
    if (!cmd) return;

    const newHistory = [...history, { text: `> ${input}`, type: "command" }];
    let responseText = "";
    let responseType = "output";

    switch (cmd) {
      case "help":
        responseText = 
          "Available terminal channels:\n" +
          "  whoami       - Disclose developer identity details\n" +
          "  skills       - Index structural technical stack\n" +
          "  experience   - Disclose professional timeline milestones\n" +
          "  contact      - Output secure communication keys\n" +
          "  cat resume   - Retrieve credentials and initialize CV download\n" +
          "  clear        - Wipe screen memory storage buffer";
        break;
      case "whoami":
        responseText = "Name: Chetna Soni\nRole: Full-Stack Developer & AI/RAG Engineer\nDescription: Specializing in high-performance FastAPI backends, interactive React dashboards, RAG application architectures, and robust system integration.";
        break;
      case "skills":
        responseText = "FastAPI (Python) | React.js | LangChain | OpenAI | Vector Database | Docker | Git | PostgreSQL | Tailwind CSS";
        break;
      case "experience":
        responseText = "1. Bidyut Innovation Pvt. Ltd. (Full-Stack Developer - Live Telemetry & Control Dashboards)\n2. 47Billion (AI Chatbot & RAG Pipeline Orchestrator, FastAPI Backend)";
        break;
      case "contact":
        responseText = "Email: chetnaa974@gmail.com\nGitHub: github.com/chetna529\nLinkedIn: linkedin.com/in/chetna-soni-1a2814339/\nWhatsApp: +91 8602425826";
        break;
      case "cat resume":
        responseText = "⚡ ACCESS GRANTED: Pulling PDF transmission buffer. CV download initiated successfully!";
        responseType = "success";
        downloadResume();
        break;
      case "clear":
        setHistory([]);
        setInput("");
        return;
      default:
        responseText = `Unknown command query: '${cmd}'. Enter 'help' to view valid channels.`;
        responseType = "error";
    }

    setHistory([...newHistory, { text: responseText, type: responseType }]);
    setInput("");
  };

  return (
    <div className="page-container w-full mb-16 font-mono text-xs text-left select-none">
      <div className="border border-cyber-card-border rounded-xl overflow-hidden shadow-xl bg-cyber-card/75 backdrop-blur-md">
        
        {/* Terminal Header */}
        <div className="flex justify-between items-center bg-cyber-accent-bg px-4 py-2 border-b border-cyber-border/40 text-[10px] text-cyber-text/60 font-bold uppercase">
          <div className="flex items-center gap-2">
            <TermIcon className="w-3.5 h-3.5 text-cyber-cyan animate-pulse" />
            <span>INTERACTIVE SHELL [AEGIS_V1.0]</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/20 border border-red-500/40" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/20 border border-yellow-500/40" />
            <span className="w-2.5 h-2.5 rounded-full bg-green-500/20 border border-green-500/40" />
          </div>
        </div>

        {/* Scroll Log Panel */}
        <div ref={logPanelRef} className="p-4 h-[240px] overflow-y-auto space-y-2 scrollbar-thin">
          {history.map((line, idx) => (
            <pre
              key={idx}
              className={`whitespace-pre-wrap leading-relaxed ${
                line.type === "command" ? "text-cyber-text-h font-bold" :
                line.type === "error" ? "text-red-400" :
                line.type === "success" ? "text-cyber-green" :
                line.type === "system" ? "text-cyber-purple" : "text-cyber-text/80"
              }`}
            >
              {line.text}
            </pre>
          ))}
        </div>

        {/* Console Input Bar */}
        <form onSubmit={handleCommandSubmit} className="flex gap-2 p-3 bg-cyber-bg border-t border-cyber-border/40">
          <span className="text-cyber-cyan font-bold">&gt;</span>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type 'help' or 'cat resume'..."
            className="flex-1 bg-transparent text-cyber-text-h border-none outline-none caret-cyber-cyan"
          />
        </form>
      </div>
    </div>
  );
};
export default Terminal;
