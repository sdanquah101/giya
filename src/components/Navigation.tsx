import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Menu, X } from 'lucide-react';

export const Navigation = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    'home',
    'about',
    'schedule',
    'speakers',
    'registration',
    'venue',
    'FAQ',
    'contact',
    'gallery'
  ];

  return (
    <nav className="fixed w-full z-40">
      {/* Top gradient border */}
      <div className="h-1 w-full bg-gradient-to-r from-orange-500 via-yellow-400 to-blue-600" />

      <div className="relative bg-white/95 backdrop-blur-md shadow-lg">
        {/* Dot pattern overlay */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(30,27,75,0.2) 1px, transparent 1px)',
            backgroundSize: '8px 8px'
          }}
        />

        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <motion.span 
                className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-blue-600 
                  bg-clip-text text-transparent"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
              >
                PHANET
              </motion.span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-1">
              {menuItems.map((item, index) => (
                <motion.a
                  key={item}
                  href={`#${item}`}
                  className="relative px-4 py-2 text-sm font-medium text-blue-900 group"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  {/* Hover background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 via-yellow-400/10 
                    to-blue-600/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Text */}
                  <span className="relative z-10 group-hover:text-orange-500 transition-colors duration-300">
                    {t(`menu.${item}`)}
                  </span>

                  {/* Bottom border on hover */}
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-orange-500 
                      via-yellow-400 to-blue-600 rounded-full opacity-0 group-hover:opacity-100 
                      scale-x-0 group-hover:scale-x-100 origin-left"
                    transition={{ duration: 0.3 }}
                  />
                </motion.a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <motion.div className="md:hidden flex items-center">
              <motion.button
                onClick={() => setIsOpen(!isOpen)}
                className="relative p-2 rounded-xl overflow-hidden group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Button background */}
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 via-yellow-400/10 
                  to-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <motion.div
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {isOpen ? (
                    <X className="w-6 h-6 text-blue-900" />
                  ) : (
                    <Menu className="w-6 h-6 text-blue-900" />
                  )}
                </motion.div>
              </motion.button>
            </motion.div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden border-t border-gray-200"
            >
              <div className="px-4 py-3 space-y-1">
                {menuItems.map((item, index) => (
                  <motion.a
                    key={item}
                    href={`#${item}`}
                    className="relative group block px-4 py-3 rounded-xl text-blue-900"
                    onClick={() => setIsOpen(false)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ x: 8 }}
                  >
                    {/* Hover background */}
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 via-yellow-400/10 
                      to-blue-600/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Text */}
                    <span className="relative z-10 group-hover:text-orange-500 transition-colors duration-300">
                      {t(`menu.${item}`)}
                    </span>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export { Navigation };