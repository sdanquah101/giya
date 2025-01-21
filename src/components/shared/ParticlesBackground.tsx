import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const generateParticles = (count: number) => {
  return Array.from({ length: count }).map(() => ({
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 1,
    duration: Math.random() * 20 + 10,
    delay: Math.random() * 5,
  }));
};

export const ParticlesBackground = () => {
  const [particles] = useState(() => generateParticles(50));

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {particles.map((particle, i) => (
        <motion.div
          key={i}
          className="absolute bg-primary/10 rounded-full"
          style={{
            width: particle.size,
            height: particle.size,
          }}
          initial={{ x: `${particle.x}%`, y: `${particle.y}%`, opacity: 0 }}
          animate={{
            x: [`${particle.x}%`, `${(particle.x + 10) % 100}%`],
            y: [`${particle.y}%`, `${(particle.y + 10) % 100}%`],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
};