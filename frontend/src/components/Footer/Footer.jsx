import { Terminal } from "./Terminal";
import { ClosingSection } from "./ClosingSection";
import { ChatAssistant } from "./ChatAssistant";
import { SOCIAL_LINKS } from "../../utils/constants";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#09090B] overflow-hidden">
      <div className="page-container w-full relative z-10 pt-12">
        <Terminal />
      </div>

      <ClosingSection />

      <div className="page-container w-full py-6 border-t border-white/5">
        <p className="text-center font-mono text-[10px] text-zinc-600 uppercase tracking-widest">
          © {currentYear} Chetna Soni · Full-Stack & AI Engineer
        </p>
      </div>

      <ChatAssistant />
    </footer>
  );
};

export default Footer;
