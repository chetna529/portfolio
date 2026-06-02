import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export const ProjectDetails = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center font-mono text-xs px-4">
      <div className="w-full max-w-md border border-white/10 p-6 rounded-lg cyber-glass shadow-2xl relative scanlines overflow-hidden text-left">
        <h2 className="text-lg font-bold text-white mb-2 uppercase">PROJECT TRANSMISSION LAYER</h2>
        <p className="text-gray-400 text-xs font-light leading-relaxed mb-6 font-sans">
          This system is currently fully visualised in the primary home projects section dashboard. Routing resolved to standard base workspace index.
        </p>
        <Link
          to="/portfolio"
          className="inline-flex items-center gap-2 px-4 py-2 border border-cyber-cyan bg-cyber-cyan/10 text-cyber-cyan rounded hover:bg-cyber-cyan/20 hover:shadow-neon-cyan transition-all interactive"
        >
          <ArrowLeft className="w-4 h-4" />
          Return to Deck
        </Link>
      </div>
    </div>
  );
};
export default ProjectDetails;
