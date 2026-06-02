import { useEffect, useState } from "react";

export const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [trailPosition, setTrailPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isHidden, setIsHidden] = useState(true);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsHidden(false);
    };

    const handleMouseLeave = () => {
      setIsHidden(true);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  // Smooth trail effect
  useEffect(() => {
    let animFrame;
    const updateTrail = () => {
      setTrailPosition((prev) => {
        const dx = position.x - prev.x;
        const dy = position.y - prev.y;
        return {
          x: prev.x + dx * 0.15,
          y: prev.y + dy * 0.15,
        };
      });
      animFrame = requestAnimationFrame(updateTrail);
    };
    
    updateTrail();
    return () => cancelAnimationFrame(animFrame);
  }, [position]);

  useEffect(() => {
    const handleMouseOver = (e) => {
      const target = e.target;
      if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("button") ||
        target.closest("a") ||
        target.classList.contains("interactive")
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mouseover", handleMouseOver);
    return () => window.removeEventListener("mouseover", handleMouseOver);
  }, []);

  if (isHidden) return null;

  return (
    <>
      {/* Central Cybernetic Aim Dot */}
      <div
        className="fixed w-2 h-2 rounded-full bg-cyber-cyan z-[9999] pointer-events-none transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-75 mix-blend-screen hidden md:block"
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
      />
      
      {/* Outer Halo Trail */}
      <div
        className={`fixed rounded-full border border-cyber-cyan/50 pointer-events-none z-[9998] transform -translate-x-1/2 -translate-y-1/2 mix-blend-screen transition-all duration-150 ease-out hidden md:block ${
          isHovering 
            ? "w-10 h-10 bg-cyber-cyan/10 border-cyber-pink shadow-neon-pink scale-110" 
            : "w-6 h-6 shadow-neon-cyan"
        }`}
        style={{ left: `${trailPosition.x}px`, top: `${trailPosition.y}px` }}
      />
    </>
  );
};
export default Cursor;
