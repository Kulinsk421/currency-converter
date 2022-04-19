export const buttonVariants = {
  hover: {
    scale: 1.1,
    transition: {
      duration: 0.5,
      yoyo: Infinity,
    },
  },
};

export const statsVariants = {
  hidden: {
    opacity: 0,
    x: "100vw",
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      mass: 0.4,
      damping: 8,
      when: "beforeChildren",
      staggerChildren: 0.5,
    },
  },
};
