import { useEffect } from "react";
import { Hero } from "../components/Hero/Hero";
import { About } from "../components/About/About";
import { Skills } from "../components/Skills/Skills";
import { Experience } from "../components/Experience/Experience";
import { Projects } from "../components/Projects/Projects";
import { Freelance } from "../components/Freelance/Freelance";
import { TechStack } from "../components/TechStack/TechStack";
import { Achievements } from "../components/Achievements/Achievements";
import { Contact } from "../components/Contact/Contact";

export const Home = () => {
  useEffect(() => {
    if ("scrollRestoration" in history) history.scrollRestoration = "manual";
    const hash = window.location.hash;
    if (hash) {
      const scrollToSection = () => {
        const el = document.getElementById(hash.slice(1));
        if (el) {
          const y = el.getBoundingClientRect().top + window.scrollY - 88;
          window.scrollTo({ top: Math.max(0, y), behavior: "smooth" });
          return true;
        }
        return false;
      };
      const t1 = setTimeout(scrollToSection, 50);
      const t2 = setTimeout(scrollToSection, 300);
      return () => {
        clearTimeout(t1);
        clearTimeout(t2);
      };
    }
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative">
      <Hero />
      <About />
      <Skills />
      <TechStack />
      <Experience />
      <Projects />
      <Freelance />
      <Achievements />
      <Contact />
    </div>
  );
};

export default Home;
