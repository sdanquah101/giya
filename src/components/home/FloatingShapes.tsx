import { motion } from 'framer-motion';

const shapes = Array.from({ length: 20 }).map((_, i) => ({
  id: i,
  type: ['circle', 'square', 'triangle'][i % 3],
  size: Math.random() * 40 + 10,
  x: Math.random() * 100,
  y: Math.random() * 100,
  duration: Math.random() * 20 + 10,
  delay: Math.random() * 5,
}));

export const FloatingShapes = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {shapes.map((shape) => (
        <motion.div
          key={shape.id}
          className="absolute"
          initial={{ x: `${shape.x}%`, y: `${shape.y}%` }}
          animate={{
            x: [`${shape.x}%`, `${(shape.x + 20) % 100}%`],
            y: [`${shape.y}%`, `${(shape.y + 20) % 100}%`],
          }}
          transition={{
            duration: shape.duration,
            repeat: Infinity,
            repeatType: "reverse",
            delay: shape.delay,
          }}
        >
          <div
            className={`
              opacity-20 bg-secondary
              ${shape.type === 'circle' ? 'rounded-full' : ''}
              ${shape.type === 'triangle' ? 'transform rotate-45' : ''}
            `}
            style={{
              width: shape.size,
              height: shape.size,
            }}
          />
        </motion.div>
      ))}
    </div>
  );
};