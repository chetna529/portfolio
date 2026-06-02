import { skillsData } from "../../data/skillsData";
import * as Icons from "lucide-react";
import "./Skills.css";

const colorMap = {
  cyan: { dot: "bg-cyber-cyan", text: "text-cyber-cyan", bar: "from-cyber-cyan/80 to-cyber-cyan" },
  purple: { dot: "bg-cyber-purple", text: "text-cyber-purple", bar: "from-cyber-purple/80 to-cyber-purple" },
  pink: { dot: "bg-cyber-pink", text: "text-cyber-pink", bar: "from-cyber-pink/80 to-cyber-pink" },
  green: { dot: "bg-cyber-green", text: "text-cyber-green", bar: "from-cyber-green/80 to-cyber-green" },
  blue: { dot: "bg-cyber-blue", text: "text-cyber-blue", bar: "from-cyber-blue/80 to-cyber-blue" },
};

export const Skills = () => {
  const getIcon = (name) => {
    const IconComponent = Icons[name];
    return IconComponent ? <IconComponent className="w-5 h-5" /> : <Icons.Code className="w-5 h-5" />;
  };

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="page-container w-full relative z-10">
        <div className="flex flex-col mb-14 text-left">
          <h2 className="section-title text-cyber-text-h uppercase">
            TECHNICAL{" "}
            <span className="bg-gradient-to-r from-cyber-cyan via-cyber-pink to-cyber-purple bg-clip-text text-transparent">
              STACK
            </span>
          </h2>
          <div className="h-0.5 w-20 bg-gradient-to-r from-cyber-cyan to-cyber-purple mt-3" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {skillsData.map((categoryData, i) => {
            const c = colorMap[categoryData.color] || colorMap.cyan;
            return (
              <div
                key={i}
                className="skills-card backdrop-blur-sm transition-colors duration-300"
              >
                <div className="skills-card-header flex items-center gap-3">
                  <span className={`w-2 h-2 rounded-full ${c.dot}`} />
                  <h3 className="font-mono font-bold text-sm sm:text-base tracking-wide text-cyber-text-h uppercase">
                    {categoryData.category}
                  </h3>
                </div>

                <div>
                  {categoryData.skills.map((skill, idx) => (
                    <div key={idx} className="skills-row">
                      <div className="flex justify-between items-center gap-4 mb-2.5">
                        <div className="flex items-center gap-3 min-w-0">
                          <span className={`shrink-0 ${c.text}`}>{getIcon(skill.icon)}</span>
                          <span className="text-sm sm:text-base font-medium text-zinc-200 truncate">
                            {skill.name}
                          </span>
                        </div>
                        <span className="text-sm font-semibold text-zinc-300 tabular-nums shrink-0">
                          {skill.percentage}%
                        </span>
                      </div>
                      <div className="h-1.5 bg-white/[0.04] rounded-full overflow-hidden">
                        <div
                          className={`h-full rounded-full bg-gradient-to-r ${c.bar}`}
                          style={{ width: `${skill.percentage}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
