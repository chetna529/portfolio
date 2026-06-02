export const textContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.05 },
  },
};

export const textVariant = {
  hidden: {
    y: 20,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
    },
  },
};

export const wordGlitch = {
  hidden: { opacity: 0.8, skewX: 0 },
  show: {
    opacity: 1,
    skewX: [0, -5, 5, 0, -2, 2, 0],
    transition: {
      duration: 0.8,
      repeat: Infinity,
      repeatType: "mirror",
      repeatDelay: 3
    }
  }
};
export default textVariant;
