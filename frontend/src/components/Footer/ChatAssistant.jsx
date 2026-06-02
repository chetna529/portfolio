import { useState, useRef, useEffect } from "react";
import { sendMessageToBot } from "../../services/chatbotService";
import { MessageSquare, X, Send, Bot, Loader2, Sparkles } from "lucide-react";

export const ChatAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "👋 **Greetings!** I am Chetna's cybernetic assistant, **A.E.G.I.S**.\n\nAsk me about her experience in **RAG chatbots**, **FastAPI architectures**, **React WebSockets telemetry**, or **how to hire her**!",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesContainerRef = useRef(null);

  const suggestionChips = [
    "List technical skills",
    "Experience at Bidyut Innovation",
    "Work at 47Billion",
    "Tell me about your projects",
    "How to hire you?",
  ];

  // Scroll chat panel only (never the main page)
  useEffect(() => {
    if (!isOpen) return;
    const el = messagesContainerRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [messages, loading, isOpen]);

  const handleSend = async (textToSend) => {
    const prompt = (textToSend || input).trim();
    if (!prompt || loading) return;

    setMessages((prev) => [...prev, { sender: "user", text: prompt }]);
    if (!textToSend) setInput("");
    setLoading(true);

    try {
      const reply = await sendMessageToBot(prompt);
      setMessages((prev) => [...prev, { sender: "bot", text: reply || "I couldn't process that — try asking about skills or experience." }]);
    } catch {
      setMessages((prev) => [...prev, { sender: "bot", text: "Connection glitch. Please try again or email chetnaa974@gmail.com" }]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") handleSend();
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100] font-mono text-xs">
      
      {/* Floating Action Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="p-4 rounded-full bg-gradient-to-r from-cyber-purple via-cyber-pink to-cyber-cyan border border-cyber-cyan/50 text-white shadow-neon-cyan hover:scale-105 transition-all duration-300 animate-bounce [animation-duration:4s] relative group interactive"
          aria-label="Ask AEGIS Assistant"
        >
          <MessageSquare className="w-6 h-6" />
          <span className="absolute -top-1 -right-1 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyber-pink opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-cyber-pink"></span>
          </span>
        </button>
      )}

      {/* Dynamic Chat Drawer Panel */}
      {isOpen && (
        <div className="w-[330px] sm:w-[380px] h-[480px] rounded-xl border border-cyber-card-border bg-cyber-card/90 backdrop-blur-lg shadow-2xl flex flex-col justify-between overflow-hidden relative scanlines">
          {/* Scanning laser line overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyber-cyan/5 to-transparent w-full h-1/3 laser-scanner pointer-events-none" />

          {/* Drawer Header */}
          <div className="p-4 border-b border-cyber-border/40 bg-cyber-accent-bg flex justify-between items-center text-cyber-cyan font-bold tracking-widest text-[10px]">
            <div className="flex items-center gap-2">
              <Bot className="w-5 h-5 text-cyber-cyan animate-pulse" />
              <span>A.E.G.I.S AI ASSISTANT</span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-lg hover:bg-cyber-accent-bg text-cyber-text/60 hover:text-cyber-text-h transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Messages Thread Body */}
          <div ref={messagesContainerRef} className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"} text-left`}
              >
                <div
                  className={`max-w-[85%] p-3.5 rounded-lg border text-[11px] leading-relaxed font-sans ${
                    msg.sender === "user"
                      ? "bg-cyber-purple/15 border-cyber-purple/35 text-cyber-text-h"
                      : "bg-cyber-accent-bg border-cyber-border text-cyber-text/80"
                  }`}
                >
                  {/* Simplistic custom Markdown-like bullet and bold formatting */}
                  <div className="whitespace-pre-wrap">
                    {msg.text
                      .split("\n")
                      .map((line, lineIdx) => {
                        let formattedLine = line;
                        
                        // Bold tags format
                        if (formattedLine.includes("**")) {
                          const parts = formattedLine.split("**");
                          return (
                            <p key={lineIdx} className="mb-1">
                              {parts.map((p, pIdx) => pIdx % 2 === 1 ? <strong key={pIdx} className="text-cyber-cyan font-bold font-mono">{p}</strong> : p)}
                            </p>
                          );
                        }
                        
                        // Bullet point format
                        if (formattedLine.trim().startsWith("•")) {
                          return (
                            <div key={lineIdx} className="flex gap-1.5 items-start pl-2 mb-1">
                              <span className="text-cyber-cyan font-bold font-mono">•</span>
                              <span>{formattedLine.replace("•", "").trim()}</span>
                            </div>
                          );
                        }
                        
                        return <p key={lineIdx} className="mb-1">{formattedLine}</p>;
                      })}
                  </div>
                </div>
              </div>
            ))}

            {/* Waiting for reply spinner loader */}
            {loading && (
              <div className="flex justify-start items-center gap-2 text-cyber-purple animate-pulse pl-2">
                <Loader2 className="w-4 h-4 animate-spin" />
                <span className="text-[10px] tracking-widest font-mono">AEGIS IS COMPUTING...</span>
              </div>
            )}
          </div>

          {/* Suggestion Chips and Prompt input footer */}
          <div className="p-3 border-t border-cyber-border/40 bg-cyber-accent-bg space-y-2.5">
            {/* Suggestions marquee container */}
            <div className="flex gap-1.5 overflow-x-auto pb-1 scrollbar-none scrollbar-hide text-left select-none">
              {suggestionChips.map((chip, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSend(chip)}
                  className="px-2.5 py-1 rounded bg-cyber-card border border-cyber-border/60 hover:border-cyber-cyan/50 text-[9px] text-cyber-text/60 hover:text-cyber-text-h whitespace-nowrap transition-all duration-200"
                >
                  {chip}
                </button>
              ))}
            </div>

            {/* Prompt input field */}
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Ask AEGIS about Chetna..."
                className="flex-1 bg-cyber-card border border-cyber-border rounded px-3 py-2 text-[10px] text-cyber-text-h focus:outline-none focus:border-cyber-cyan focus:shadow-neon-cyan transition-all font-sans"
              />
              <button
                onClick={() => handleSend()}
                className="p-2 border border-cyber-cyan bg-cyber-cyan/15 hover:bg-cyber-cyan/25 text-cyber-cyan rounded transition-colors interactive"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default ChatAssistant;
