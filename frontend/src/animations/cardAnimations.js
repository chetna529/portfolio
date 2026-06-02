export const cardHover = {
  rest: {
    scale: 1,
    y: 0,
    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
  },
  hover: {
    scale: 1.02,
    y: -5,
    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.2)",
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 15
    }
  }
};

export const hoverBorderGlow = (color = "cyan") => {
  const glowMap = {
    cyan: "rgba(6, 182, 212, 0.6)",
    purple: "rgba(168, 85, 247, 0.6)",
    pink: "rgba(236, 72, 153, 0.6)",
    green: "rgba(16, 185, 129, 0.6)",
    blue: "rgba(59, 130, 246, 0.6)",
  };
  const glowColor = glowMap[color] || glowMap.cyan;
  
  return {
    rest: { borderColor: "rgba(255, 255, 255, 0.05)", filter: "drop-shadow(0px 0px 0px rgba(0,0,0,0))" },
    hover: {
      borderColor: glowColor,
      filter: `drop-shadow(0px 0px 8px ${glowColor})`,
      transition: { duration: 0.3 }
    }
  };
};
