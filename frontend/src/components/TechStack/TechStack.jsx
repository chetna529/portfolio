export const TechStack = () => {
  const techs = [
    { name: "React", color: "text-cyber-cyan font-bold" },
    { name: "FastAPI", color: "text-cyber-green font-bold" },
    { name: "Docker", color: "text-cyber-blue font-bold" },
    { name: "MongoDB", color: "text-emerald-500 font-bold" },
    { name: "PostgreSQL", color: "text-cyber-cyan font-bold" },
    { name: "OpenAI", color: "text-cyber-pink font-bold" },
    { name: "LangChain", color: "text-cyber-purple font-bold" },
    { name: "Grafana", color: "text-orange-400 font-bold" },
    { name: "InfluxDB", color: "text-cyber-pink font-bold" },
  ];

  // Duplicate items twice to achieve seamless infinite scroll
  const marqueeItems = [...techs, ...techs, ...techs, ...techs];

  return (
    <div className="py-12 border-y border-cyber-border/40 bg-cyber-card/45 relative overflow-hidden w-full select-none">
      {/* Absolute side fade overlays for premium feel */}
      <div className="absolute left-0 top-0 h-full w-[120px] bg-gradient-to-r from-cyber-bg to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 h-full w-[120px] bg-gradient-to-l from-cyber-bg to-transparent z-10 pointer-events-none" />
      
      {/* Infinite track */}
      <div className="flex w-[200%] animate-[marquee_25s_linear_infinite]">
        <div className="flex justify-around items-center min-w-full gap-8">
          {marqueeItems.map((tech, i) => (
            <div
              key={i}
              className="flex items-center gap-2 px-6 py-2.5 rounded-lg border border-cyber-card-border bg-cyber-card/75 font-mono text-xs uppercase tracking-widest hover:border-cyber-cyan/50 hover:shadow-neon-cyan hover:scale-105 transition-all duration-300 pointer-events-none"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-cyber-cyan animate-pulse" />
              <span className={tech.color}>{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
      
      {/* Add sliding marquee keyframe inline if missing in CSS */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
};
export default TechStack;
