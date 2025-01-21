import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="fixed top-0 left-0 right-0 h-2 z-50">
      {/* Base layer with gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-yellow-400/20 to-orange-500/20" />
      
      {/* Animated progress bar */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-blue-600 via-yellow-400 to-orange-500 origin-left"
        style={{ scaleX }}
      >
        {/* Shine effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30" />
        
        {/* Dot pattern overlay */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)',
            backgroundSize: '4px 4px'
          }}
        />
      </motion.div>

      {/* Bottom glow effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-blue-600 via-yellow-400 to-orange-500 blur-sm"
        style={{ scaleX }}
      />
    </div>
  );
};

export { ScrollProgress };