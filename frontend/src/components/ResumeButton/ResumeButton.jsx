import { downloadResume } from "../../utils/downloadResume";
import { Download } from "lucide-react";

export const ResumeButton = ({ variant = "nav" }) => {
  const handleClick = (e) => {
    e.preventDefault();
    downloadResume();
  };

  if (variant === "hero") {
    return (
      <button
        onClick={handleClick}
        className="px-6 py-3 rounded-lg font-mono text-sm tracking-wider uppercase font-semibold border border-cyber-purple/50 bg-cyber-purple/10 text-white hover:bg-cyber-purple/20 hover:border-cyber-purple hover:shadow-neon-purple transition-all duration-300 flex items-center gap-2 group interactive"
      >
        <Download className="w-4 h-4 text-cyber-purple group-hover:translate-y-0.5 transition-transform" />
        Download Resume
      </button>
    );
  }

  return (
    <button
      onClick={handleClick}
      className="px-4 py-2 rounded-lg font-mono text-xs uppercase border border-cyber-cyan/50 bg-cyber-cyan/5 text-cyber-cyan hover:bg-cyber-cyan/15 hover:border-cyber-cyan hover:shadow-neon-cyan transition-all duration-300 flex items-center gap-1.5 group interactive"
    >
      <Download className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform" />
      Resume
    </button>
  );
};
export default ResumeButton;
