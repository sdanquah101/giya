import { motion } from 'framer-motion';

interface TimeUnitProps {
  value: number;
  unit: string;
}

export const TimeUnit = ({ value, unit }: TimeUnitProps) => (
  <div className="text-center">
    <motion.div
      className="w-20 h-20 md:w-24 md:h-24 bg-dark/30 backdrop-blur-sm rounded-xl flex items-center justify-center text-3xl md:text-4xl font-bold text-white shadow-lg"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {value.toString().padStart(2, '0')}
    </motion.div>
    <p className="mt-2 text-light font-medium capitalize text-sm md:text-base">{unit}</p>
  </div>
);