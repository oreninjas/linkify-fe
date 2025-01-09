import { motion } from "framer-motion";
import React from "react";

const Loading = () => {
  const loadingContainerVarient = {
    start: {
      transition: {
        staggerChildren: 0.1,
      },
    },
    end: {
      transition: {
        staggerChildren: 0.1,
        repeat: Infinity,
      },
    },
  };
  const loadingCircleVarient = {
    start: {
      y: "0%",
    },
    end: {
      y: "100%",
    },
  };

  const loadingCircleTransition = {
    duration: 0.5,
    repeat: Infinity,
    repeatType: 'reverse',
    ease: "easeInOut",
  };

  return (
    <motion.div
      className="w-full h-screen flex items-center justify-center gap-3"
      variants={loadingContainerVarient}
      initial="start"
      animate="end"
    >
      <motion.span
        className="w-4 h-4 rounded-full bg-black"
        variants={loadingCircleVarient}
        transition={loadingCircleTransition}
      />
      <motion.span
        className="w-4 h-4 rounded-full bg-black"
        variants={loadingCircleVarient}
        transition={loadingCircleTransition}
      />
      <motion.span
        className="w-4 h-4 rounded-full bg-black"
        variants={loadingCircleVarient}
        transition={loadingCircleTransition}
      />
    </motion.div>
  );
};

export default Loading;
