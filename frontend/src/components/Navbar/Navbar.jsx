import { useState, useEffect } from "react";
import { ResumeButton } from "../ResumeButton/ResumeButton";
import { navLinks } from "../../data/navLinks";
import { Menu, X } from "lucide-react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    const close = () => setIsOpen(false);
    window.addEventListener("resize", close);
    return () => window.removeEventListener("resize", close);
  }, []);

  const linkClass =
    "text-[0.8rem] font-semibold uppercase tracking-wide text-zinc-400 hover:text-white hover:bg-white/5 px-3 py-2 rounded-md transition-colors";

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-[#09090B]/95 backdrop-blur-md border-b border-white/10 py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="page-container w-full flex items-center justify-between gap-4">
        <a
          href="#"
          className="flex items-center gap-2 text-white font-display text-[0.95rem] uppercase tracking-wide shrink-0"
        >
          <span className="text-[#7C3AED] text-lg">◈</span>
          CHETNA.SONI
        </a>

        <div className="hidden md:flex items-center gap-1 flex-1 justify-center flex-wrap">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className={linkClass}>
              {link.name}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3 shrink-0 border-l border-white/10 pl-5">
          <a
            href="#contact"
            className="text-[0.8rem] font-semibold uppercase tracking-wide text-white border border-[#7C3AED]/50 bg-[#7C3AED]/10 hover:bg-[#7C3AED]/20 px-4 py-2.5 rounded-md transition-colors"
          >
            GET IN TOUCH
          </a>
          <ResumeButton variant="nav" />
        </div>

        <button
          type="button"
          className="md:hidden border border-white/15 text-white p-2 rounded-md"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden page-container py-4 border-t border-white/10 mt-2 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block text-sm font-medium uppercase text-zinc-300 py-2.5 border-b border-white/5"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-4">
            <ResumeButton variant="nav" />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
