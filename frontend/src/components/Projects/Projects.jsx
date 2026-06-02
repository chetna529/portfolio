import { useEffect, useState } from "react";
import { getProjects } from "../../services/api";
import { Sparkles, FolderGit2 } from "lucide-react";

export const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      const data = await getProjects();
      setProjects(data);
      setLoading(false);
    };
    fetchProjects();
  }, []);

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="page-container w-full relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col mb-16 text-left">
          <h2 className="section-title text-cyber-text-h uppercase">
            FEATURED{" "}
            <span className="bg-gradient-to-r from-cyber-cyan via-cyber-pink to-cyber-purple bg-clip-text text-transparent">
              SYSTEMS
            </span>
          </h2>
          <div className="h-0.5 w-20 bg-gradient-to-r from-cyber-cyan to-cyber-purple mt-3" />
        </div>

        {/* Dynamic Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {loading ? (
            // Skeleton load state
            [1, 2, 3].map((n) => (
              <div key={n} className="h-72 rounded-xl border border-cyber-card-border bg-cyber-card/40 animate-pulse" />
            ))
          ) : (
            projects.map((project) => (
              <div
                key={project.id}
                className="rounded-xl border border-cyber-card-border bg-cyber-card/75 backdrop-blur-md transition-all duration-300 hover:border-cyber-cyan/35 hover:shadow-neon-cyan hover:-translate-y-1 group relative flex flex-col overflow-hidden text-left"
              >
                {/* Scanner Glow Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-b from-cyber-cyan/5 to-transparent h-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                {/* Decorative Tech Icon Header */}
                <div className="p-6 pb-0 flex items-center justify-between">
                  <div className="p-2 rounded-lg border border-cyber-border bg-cyber-accent-bg text-cyber-cyan group-hover:text-cyber-pink transition-colors">
                    <FolderGit2 className="w-5 h-5" />
                  </div>
                  <span className="font-mono text-[9px] text-cyber-purple tracking-widest uppercase font-bold border border-cyber-purple/20 bg-cyber-purple/5 px-2.5 py-1 rounded-full shadow-neon-purple">
                    {project.category}
                  </span>
                </div>

                {/* Info block */}
                <div className="p-6 space-y-3">
                  <h3 className="text-lg font-bold text-cyber-text-h group-hover:text-cyber-cyan transition-colors flex items-center gap-1.5">
                    {project.title}
                    {project.id.includes("rag") && (
                      <Sparkles className="w-4 h-4 text-cyber-pink animate-pulse" />
                    )}
                  </h3>
                  
                  <p className="text-cyber-text/95 text-xs sm:text-sm font-normal leading-relaxed h-20 overflow-y-auto pr-1 select-none">
                    {project.description}
                  </p>

                  {/* Tech stack items list */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.tech_stack?.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded-md bg-cyber-accent-bg border border-cyber-border/40 font-mono text-[9px] text-cyber-text/70"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};
export default Projects;
