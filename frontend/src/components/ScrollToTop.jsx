import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const scrollToHash = (hash, offset = 88) => {
  const id = hash.replace("#", "");
  if (!id) return false;
  const el = document.getElementById(id);
  if (!el) return false;
  const top = el.getBoundingClientRect().top + window.scrollY - offset;
  window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
  return true;
};

export const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const tryScroll = () => scrollToHash(hash);
      if (!tryScroll()) {
        const t1 = setTimeout(tryScroll, 100);
        const t2 = setTimeout(tryScroll, 350);
        const t3 = setTimeout(tryScroll, 700);
        return () => {
          clearTimeout(t1);
          clearTimeout(t2);
          clearTimeout(t3);
        };
      }
      return;
    }

    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;
