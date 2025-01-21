import { motion } from 'framer-motion';
import { useState, useEffect, useCallback } from 'react';
import { calculateTimeLeft } from '../../utils/dateUtils';
import { TimeUnit } from './countdown/TimeUnit';

export const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [isActive, setIsActive] = useState(true);

  const updateTimer = useCallback(() => {
    const newTimeLeft = calculateTimeLeft();
    setTimeLeft(newTimeLeft);

    // Check if countdown has ended
    if (Object.values(newTimeLeft).every(value => value === 0)) {
      setIsActive(false);
    }
  }, []);

  useEffect(() => {
    // Initial calculation
    updateTimer();

    // Only set up interval if countdown is still active
    if (isActive) {
      const intervalId = setInterval(updateTimer, 1000);
      return () => clearInterval(intervalId);
    }
  }, [isActive, updateTimer]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex gap-4 justify-center"
    >
      {Object.entries(timeLeft).map(([unit, value]) => (
        <TimeUnit key={unit} value={value} unit={unit} />
      ))}
    </motion.div>
  );
};