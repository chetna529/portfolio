/** Gateway side panel — minimal, professional */

export const GatewayMetricsPanel = () => {
  const highlights = [
    { label: "Shipped", value: "7+", sub: "projects" },
    { label: "Stack", value: "MERN", sub: "+ AI RAG" },
    { label: "Focus", value: "24/7", sub: "learning" },
  ];

  const tags = ["FastAPI", "React", "LangChain", "Docker", "Grafana", "WebSockets"];

  return (
    <div className="hidden lg:flex flex-col gap-5 p-6 rounded-2xl border border-white/[0.08] bg-white/[0.02]">
      <div>
        <p className="text-white text-lg font-semibold tracking-tight">Building in public</p>
        <p className="text-zinc-500 text-sm mt-1">Indore, IN · Open to work</p>
      </div>

      <div className="h-px bg-white/10" />

      <div className="grid grid-cols-3 gap-3">
        {highlights.map((h) => (
          <div
            key={h.label}
            className="py-3 px-2 rounded-lg border border-white/[0.06] bg-white/[0.02]"
          >
            <p className="text-[10px] text-zinc-500 uppercase tracking-wider">{h.label}</p>
            <p className="text-white font-bold text-lg leading-tight">{h.value}</p>
            <p className="text-[10px] text-zinc-600">{h.sub}</p>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap gap-2">
        {tags.map((t) => (
          <span
            key={t}
            className="px-2.5 py-1 text-[11px] text-zinc-400 rounded border border-white/10"
          >
            {t}
          </span>
        ))}
      </div>

      <p className="text-sm text-zinc-400 flex items-center gap-2 pt-1 border-t border-white/10">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
        Available for freelance & full-time
      </p>
    </div>
  );
};

export default GatewayMetricsPanel;
