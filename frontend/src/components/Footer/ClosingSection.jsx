import { MapPin } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { navLinks } from "../../data/navLinks";
import { SOCIAL_LINKS } from "../../utils/constants";

export const ClosingSection = () => {
  return (
    <section className="w-full py-24 md:py-32 relative overflow-hidden border-t border-white/10">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% 100%, rgba(124,58,237,0.08) 0%, transparent 60%)",
        }}
      />

      <div className="page-container relative z-10 text-center max-w-3xl mx-auto">
        <div
          className="space-y-5 mb-12 text-left sm:text-center"
          style={{
            fontSize: "clamp(1.05rem, 2.2vw, 1.25rem)",
            lineHeight: 1.75,
            fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif",
          }}
        >
          <p className="text-white font-semibold text-xl sm:text-2xl">
            Still early in the journey. Still aiming high.
          </p>
          <p className="text-zinc-400">
            Looking for difficult problems, great people, and work that matters.
          </p>
          <p className="text-zinc-400">
            Open to freelance projects, full-time opportunities, and collaborations. If
            you&apos;re building something meaningful, I&apos;d love to hear about it.
          </p>
        </div>

        {/* Farewell tab bar */}
        <nav
          className="inline-flex flex-wrap items-center justify-center gap-1 sm:gap-2 mb-14 px-4 py-3 rounded-full border border-white/10 bg-white/[0.03]"
          aria-label="See you ahead on the journey"
        >
          <span className="font-mono text-[10px] sm:text-xs text-zinc-500 uppercase tracking-widest px-2">
            See you ahead on the journey
          </span>
          <span className="text-zinc-700 hidden sm:inline">·</span>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="font-mono text-[10px] sm:text-xs text-zinc-400 hover:text-white uppercase tracking-wide px-2 py-1 rounded-md hover:bg-white/5 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        <div className="pt-10 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-8 text-left sm:text-center">
          <a
            href={SOCIAL_LINKS.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <p className="font-mono text-xs text-zinc-500 uppercase tracking-widest mb-1">GitHub</p>
            <p className="text-white text-base font-medium group-hover:text-[#7C3AED] transition-colors">
              @chetna529
            </p>
          </a>
          <a
            href="https://wa.me/918602425826"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <p className="font-mono text-xs text-zinc-500 uppercase tracking-widest mb-1">Phone</p>
            <p className="text-white text-base font-medium group-hover:text-emerald-400 transition-colors">
              {SOCIAL_LINKS.phone}
            </p>
          </a>
          <div>
            <p className="font-mono text-xs text-zinc-500 uppercase tracking-widest mb-1 flex items-center justify-center gap-1">
              <MapPin size={12} /> Region
            </p>
            <p className="text-white text-base font-medium">Indore, IN</p>
          </div>
        </div>

        <a
          href={SOCIAL_LINKS.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 mt-10 text-zinc-500 hover:text-white text-sm font-mono uppercase tracking-wider transition-colors"
        >
          <FaLinkedin size={16} /> Connect on LinkedIn
        </a>
      </div>
    </section>
  );
};

export default ClosingSection;
