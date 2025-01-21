import { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Logo } from './Logo';
import { NavMenu } from './NavMenu';
import { MobileMenu } from './MobileMenu';
import { useNavigation } from './useNavigation';

export const Navigation = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const { activeItem, handleMenuClick } = useNavigation();

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed w-full z-40 bg-white/90 backdrop-blur-md shadow-lg"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Logo />
          <NavMenu 
            activeItem={activeItem} 
            onMenuClick={handleMenuClick} 
            className="hidden md:flex" 
          />
          <MobileMenu 
            isOpen={isOpen} 
            setIsOpen={setIsOpen} 
            activeItem={activeItem}
            onMenuClick={handleMenuClick}
          />
        </div>
      </div>
    </motion.nav>
  );
};