import { Link } from "react-router-dom";
import { ShieldAlert, Home } from "lucide-react";

export const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center font-mono text-xs px-4">
      {/* Moving coordinate grids overlay */}
      <div className="absolute inset-0 moving-grid pointer-events-none opacity-25" />

      <div className="w-full max-w-sm border border-red-500/35 bg-cyber-darker/70 backdrop-blur-md p-8 rounded-lg shadow-neon-pink relative overflow-hidden scanlines text-center">
        {/* Holographic scanner bars */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red-500/10 to-transparent w-full h-1/3 laser-scanner pointer-events-none" />

        <div className="flex justify-between items-center border-b border-white/10 pb-3 mb-6 text-red-500 font-bold tracking-widest text-[10px]">
          <span>⚠ STACK EXCEPTION OVERFLOW</span>
          <span className="animate-pulse">ERROR 404</span>
        </div>

        <div className="flex justify-center text-red-500 mb-4 animate-bounce">
          <ShieldAlert className="w-12 h-12" />
        </div>

        <h1 className="text-xl font-bold text-white uppercase tracking-wider mb-2 animate-glitch" data-text="ROUTE NOT MAPPED">
          ROUTE NOT MAPPED
        </h1>
        
        <p className="text-gray-400 text-xs font-light leading-relaxed mb-6 font-sans">
          The requested coordinate link path has been vaporised, encrypted, or does not exist in standard local records.
        </p>

        <Link
          to="/"
          className="w-full py-2.5 border border-red-500 bg-red-500/10 hover:bg-red-500/20 hover:shadow-neon-pink text-red-500 rounded font-bold uppercase flex items-center justify-center gap-2 transition-all duration-300 interactive"
        >
          <Home className="w-4 h-4" />
          Force system reboot
        </Link>
      </div>
    </div>
  );
};
export default NotFound;
