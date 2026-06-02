import { useState } from "react";
import { openWhatsApp } from "../../utils/contactChannels";
import { Mail, MapPin, Send, Loader2 } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { SOCIAL_LINKS } from "../../utils/constants";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "Portfolio inquiry",
    message: "",
  });
  
  const [loading, setLoading] = useState(false);
  const [responseMsg, setResponseMsg] = useState("");
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill out all fields!");
      return;
    }

    setLoading(true);
    setResponseMsg("");

    const message = [
      "Hi Chetna! 👋",
      "",
      "Message from your portfolio contact form:",
      "",
      `👤 Name: ${formData.name}`,
      `📧 Email: ${formData.email}`,
      `📌 Subject: ${formData.subject || "Portfolio inquiry"}`,
      "",
      formData.message,
    ].join("\n");

    openWhatsApp(message);

    setSuccess(true);
    setResponseMsg("WhatsApp is opening — tap Send in the chat to deliver your message to me.");
    setLoading(false);

    setFormData({
      name: "",
      email: "",
      subject: "Portfolio inquiry",
      message: "",
    });
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-cyber-darker/5">
      <div className="absolute inset-0 moving-grid pointer-events-none opacity-[0.03]" />
      
      <div className="page-container w-full relative z-10">
        
        {/* Section Title Header */}
        <div className="flex flex-col mb-16 text-left">
          <h2 className="section-title text-cyber-text-h uppercase">
            ESTABLISH <span className="bg-gradient-to-r from-cyber-purple via-cyber-pink to-cyber-cyan bg-clip-text text-transparent">CONNECTION</span>
          </h2>
          <div className="h-0.5 w-20 bg-gradient-to-r from-cyber-purple to-cyber-cyan mt-3" />
        </div>

        {/* Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 font-mono">
          
          {/* Details list column */}
          <div className="lg:col-span-5 text-left space-y-8 flex flex-col justify-between">
            <div className="space-y-6">
              <h3 className="text-lg font-bold text-cyber-text-h uppercase tracking-wide border-b border-cyber-border pb-4">
                COMMUNICATIONS LOGS
              </h3>
              
              <p className="text-cyber-text/80 text-xs sm:text-sm font-light leading-relaxed font-sans">
                Have an exciting project in mind? Interested in deploying scalable RAG-driven AI chatbots, modern FastAPI routing structures, or interactive React dashboards? Drop a line here or text me directly on WhatsApp!
              </p>

              <div className="space-y-4 text-xs font-semibold">
                {/* WhatsApp Quick Link */}
                <a
                  href={SOCIAL_LINKS.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 border border-cyber-border bg-cyber-card rounded-xl hover:border-cyber-green/50 hover:shadow-md hover:scale-[1.01] transition-all interactive"
                >
                  <FaWhatsapp className="w-5 h-5 text-cyber-green shrink-0 animate-pulse" />
                  <div>
                    <p className="text-cyber-text/60 uppercase tracking-widest text-[9px]">DIRECT WHATSAPP</p>
                    <span className="text-xs text-cyber-text-h font-bold">{SOCIAL_LINKS.phone}</span>
                  </div>
                </a>

                {/* Email Link */}
                <a
                  href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(SOCIAL_LINKS.email)}&su=${encodeURIComponent("Portfolio inquiry")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 border border-cyber-border bg-cyber-card rounded-xl hover:border-cyber-purple/50 hover:shadow-md hover:scale-[1.01] transition-all interactive"
                >
                  <Mail className="w-5 h-5 text-cyber-purple shrink-0" />
                  <div>
                    <p className="text-cyber-text/60 uppercase tracking-widest text-[9px]">ENCRYPTED MAIL</p>
                    <span className="text-xs text-cyber-text-h font-bold">{SOCIAL_LINKS.email}</span>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-center gap-4 p-4 border border-cyber-border bg-cyber-card rounded-xl">
                  <MapPin className="w-5 h-5 text-cyber-pink shrink-0" />
                  <div>
                    <p className="text-cyber-text/60 uppercase tracking-widest text-[9px]">LATITUDE / LOCATION</p>
                    <span className="text-xs text-cyber-text-h font-bold">Indore, Madhya Pradesh, India</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Simulated footer terminal print */}
            <div className="border border-cyber-border p-4 rounded-xl bg-cyber-card text-[9px] text-cyber-text/50 space-y-1 mt-6">
              <p>&gt; ping -c 3 host.chetnasoni.com</p>
              <p className="text-cyber-green">64 bytes from 127.0.0.1: icmp_seq=1 ttl=64 time=0.04 ms</p>
              <p className="text-cyber-cyan">SYSTEM ONLINE. READY FOR TRANSMISSIONS.</p>
            </div>
          </div>

          {/* Form submit column */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="p-8 border border-cyber-border bg-cyber-card rounded-xl shadow-2xl relative overflow-hidden space-y-6"
            >
              <div className="flex justify-between items-center border-b border-cyber-border pb-4 text-[10px] text-cyber-purple tracking-wider font-bold">
                <span>NEW ENCRYPTED MESSAGE // PORT 443</span>
                <span className="animate-pulse">SECURE TRANSMISSION</span>
              </div>

              {/* Input grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5 text-left">
                  <label className="text-[10px] text-cyber-text/60 uppercase tracking-widest font-bold">Ident name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter name"
                    className="portfolio-input w-full rounded px-4 py-2.5 text-sm focus:outline-none focus:border-[#7C3AED] focus:ring-1 focus:ring-[#7C3AED]/40"
                    required
                  />
                </div>

                <div className="space-y-1.5 text-left">
                  <label className="text-[10px] text-cyber-text/60 uppercase tracking-widest font-bold">Mail address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter email"
                    className="portfolio-input w-full rounded px-4 py-2.5 text-sm focus:outline-none focus:border-[#7C3AED] focus:ring-1 focus:ring-[#7C3AED]/40"
                    required
                  />
                </div>
              </div>

              <div className="space-y-1.5 text-left">
                <label className="text-[10px] text-cyber-text/60 uppercase tracking-widest font-bold">Inquiry topic</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  className="portfolio-input w-full rounded px-4 py-2.5 text-sm focus:outline-none focus:border-[#7C3AED] focus:ring-1 focus:ring-[#7C3AED]/40"
                />
              </div>

              <div className="space-y-1.5 text-left">
                <label className="text-[10px] text-cyber-text/60 uppercase tracking-widest font-bold">Message transmission</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Enter your message..."
                  rows={4}
                  className="portfolio-input w-full rounded px-4 py-2.5 text-sm focus:outline-none focus:border-[#7C3AED] focus:ring-1 focus:ring-[#7C3AED]/40 resize-none"
                  required
                />
              </div>

              {/* Response Messages banner */}
              {responseMsg && (
                <div className={`p-4 rounded border text-xs font-semibold ${
                  success 
                    ? "bg-cyber-green/10 border-cyber-green/30 text-cyber-green" 
                    : "bg-red-500/10 border-red-500/30 text-red-500"
                }`}>
                  &gt; {responseMsg}
                </div>
              )}

              {/* Submit Trigger */}
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 border border-cyber-purple bg-cyber-purple/10 hover:bg-cyber-purple/20 text-cyber-purple rounded text-xs font-bold uppercase flex items-center justify-center gap-2 transition-all duration-300 interactive"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin text-cyber-purple" />
                    Transmitting packet...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Send via WhatsApp
                  </>
                )}
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};
export default Contact;
