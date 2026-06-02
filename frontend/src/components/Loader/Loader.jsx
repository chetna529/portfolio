import { useEffect, useState } from "react";

export const Loader = ({ onFinish }) => {
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState("INITIALIZING DIRECTORY SCROLLS...");

  const statusSequences = [
    "INITIALIZING CORE SYSTEM...",
    "BOOTING ROBOTICS CALIBRATION NODES...",
    "MAPPING AI NEURAL INTERCONNECTS...",
    "ESTABLISHING SECURE WEB SOCKET CONNECTIONS...",
    "MOUNTING RAG ARCHITECTURE SCHEMAS...",
    "CALIBRATION OPTIMAL. SYSTEM ARMED."
  ];

  useEffect(() => {
    let statusIndex = 0;
    const progressTimer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressTimer);
          setTimeout(onFinish, 600); // slight delay after 100%
          return 100;
        }
        
        // update status based on progress thresholds
        const targetStatusIndex = Math.min(
          Math.floor((prev / 100) * statusSequences.length),
          statusSequences.length - 1
        );
        if (targetStatusIndex !== statusIndex) {
          statusIndex = targetStatusIndex;
          setStatus(statusSequences[statusIndex]);
        }

        const step = Math.floor(Math.random() * 8) + 4;
        return Math.min(prev + step, 100);
      });
    }, 120);

    return () => clearInterval(progressTimer);
  }, []);

  return (
    <div className="fixed inset-0 bg-cyber-dark z-[99999] flex flex-col items-center justify-center font-mono text-xs px-4">
      {/* Background Grid Overlay */}
      <div className="absolute inset-0 moving-grid pointer-events-none opacity-30" />

      <div className="w-full max-w-sm border border-cyber-cyan/35 cyber-glass p-6 rounded shadow-neon-cyan relative scanlines overflow-hidden">
        {/* Holographic scanning laser lines */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyber-cyan/15 to-transparent w-full h-1/3 laser-scanner pointer-events-none" />

        {/* Header Decors */}
        <div className="flex justify-between items-center border-b border-white/10 pb-3 mb-4 text-cyber-cyan font-bold tracking-widest text-[10px]">
          <span>⚡ A.E.G.I.S SYSTEM STARTUP</span>
          <span className="animate-pulse">SYS:ONLINE</span>
        </div>

        {/* Loading text outputs */}
        <div className="space-y-2 mb-5">
          <div className="flex justify-between text-[10px] text-gray-500">
            <span>RAM CHECK: 64GB OK</span>
            <span>GPU: THREE.JS OK</span>
          </div>
          <p className="text-cyber-purple font-semibold truncate animate-pulse">
            &gt; {status}
          </p>
        </div>

        {/* Progress Bar Container */}
        <div className="w-full h-2 border border-white/10 bg-white/5 rounded-full overflow-hidden mb-2">
          <div
            className="h-full bg-gradient-to-r from-cyber-purple via-cyber-pink to-cyber-cyan transition-all duration-150 rounded-full"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Digital display percentage */}
        <div className="flex justify-between text-[10px] text-gray-400">
          <span>COMPILING PACKAGES...</span>
          <span className="text-cyber-cyan font-bold text-xs">{progress}%</span>
        </div>
      </div>
    </div>
  );
};
export default Loader;
