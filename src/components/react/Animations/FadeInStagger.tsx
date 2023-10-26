import React from 'react';
import { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';

export const FadeInStagger = ({ children }) => {
  const controls = useAnimation();
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          controls.start('animate');
        }
      });
    });
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [controls]);

  return (
    <motion.div ref={ref} initial="initial" animate={controls}>
      {children}
    </motion.div>
  );
};
