import React from 'react';
import { motion, useScroll, useSpring } from 'motion/react';

export const ScrollProgress: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      style={{
        scaleX,
        transformOrigin: '0%',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: '3px',
        background: 'linear-gradient(90deg, #C69A45 0%, #E9A12B 50%, #DFC07A 100%)',
        zIndex: 100,
        boxShadow: '0 0 10px rgba(233, 161, 43, 0.5)',
      }}
      aria-hidden="true"
    />
  );
};
