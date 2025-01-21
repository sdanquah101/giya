import { motion } from 'framer-motion';

interface MenuItemProps {
  label: string;
  href: string;
  isActive?: boolean;
  onClick?: () => void;
}

export const MenuItem = ({ label, href, isActive, onClick }: MenuItemProps) => {
  return (
    <motion.a
      href={href}
      onClick={(e) => {
        e.preventDefault();
        onClick?.();
      }}
      className="relative px-4 py-2 mx-1"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <span className={`relative z-10 text-sm font-medium ${
        isActive ? 'text-white' : 'text-primary'
      }`}>
        {label}
      </span>
      
      {isActive && (
        <motion.div
          layoutId="active-pill"
          className="absolute inset-0 bg-primary rounded-full -z-0"
          transition={{
            type: "spring",
            stiffness: 380,
            damping: 30
          }}
        />
      )}
      
      <motion.div
        initial={false}
        animate={{ opacity: isActive ? 1 : 0 }}
        className="absolute inset-0 bg-primary/10 rounded-full"
      />
    </motion.a>
  );
};