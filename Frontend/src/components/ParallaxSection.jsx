import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useParallax } from '../hooks/useParallax';

const ParallaxSection = ({ children, speed = 0.5, className = "" }) => {
  const y = useParallax(speed);

  return (
    <motion.div
      style={{ y, willChange: 'transform' }}
      className={className}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {children}
    </motion.div>
  );
};

export default ParallaxSection;
