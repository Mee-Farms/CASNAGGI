import React from "react";
import { motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const Reveal = ({ children, delay = 0, className = "", as = "div", ...rest }) => {
  const Comp = motion[as] || motion.div;
  return (
    <Comp
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay }}
      variants={variants}
      className={className}
      {...rest}
    >
      {children}
    </Comp>
  );
};

export default Reveal;
