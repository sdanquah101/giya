import { motion } from 'framer-motion';

export const Logo = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex items-center"
    >
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1p8DyVkcxa4XgJFte0n9eD4IY3bZDlJPhXA&s"
        alt="PHANET"
        className="h-12 w-auto"
      />
    </motion.div>
  );
};