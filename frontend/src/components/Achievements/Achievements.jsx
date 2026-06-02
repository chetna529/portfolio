import { achievementsData } from "../../data/achievementsData";
import { Trophy, Award, Calendar } from "lucide-react";

export const Achievements = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-cyber-darker/20">
      <div className="page-container w-full relative z-10">

        <div className="flex flex-col mb-16 text-left">
          <h2 className="section-title text-cyber-text-h uppercase">
            CERTIFICATIONS & <span className="bg-gradient-to-r from-cyber-cyan to-cyber-purple bg-clip-text text-transparent">ACHIEVEMENTS</span>
          </h2>
          <div className="h-0.5 w-20 bg-gradient-to-r from-cyber-cyan to-cyber-purple mt-3" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievementsData.map((item, i) => (
            <div
              key={i}
              className="p-6 rounded-xl border border-cyber-border bg-cyber-card/75 backdrop-blur-md hover:border-cyber-purple/60 hover:shadow-[0_0_24px_rgba(124,58,237,0.2)] hover:-translate-y-0.5 transition-all duration-300 relative text-left group flex flex-col justify-between"
            >
              <div className="absolute inset-0 rounded-xl bg-gradient-to-b from-cyber-purple/8 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

              <div className="relative z-10">
                <div className="flex items-center justify-between pb-4 border-b border-cyber-border/40 mb-4">
                  <div className="p-2 rounded-lg bg-cyber-purple/10 border border-cyber-purple/35 text-cyber-purple group-hover:text-cyber-pink transition-colors">
                    {item.type === "Award" ? <Trophy className="w-5 h-5" /> : <Award className="w-5 h-5" />}
                  </div>
                  <span className="font-mono text-[9px] text-cyber-text/60 flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-cyber-cyan" />
                    {item.date}
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="font-bold text-cyber-text-h group-hover:text-cyber-purple transition-colors text-sm sm:text-base leading-tight">
                    {item.title}
                  </h3>
                  <span className="block font-mono text-[10px] text-cyber-cyan font-semibold uppercase tracking-wider">
                    {item.issuer}
                  </span>
                  <p className="text-cyber-text/90 text-xs font-normal leading-relaxed pt-2">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
