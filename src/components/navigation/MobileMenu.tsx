import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { menuItems } from './menuItems';

interface MobileMenuProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  activeItem: string;
  onMenuClick: (item: string) => void;
}

export const MobileMenu = ({ isOpen, setIsOpen, activeItem, onMenuClick }: MobileMenuProps) => {
  const { t } = useTranslation();

  return (
    <div className="md:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-gray-700 p-2 hover:bg-gray-100 rounded-lg transition-colors"
        aria-label="Toggle menu"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      <motion.div
        className="absolute left-0 right-0 top-[80px] bg-white/95 backdrop-blur-md shadow-lg"
        initial={{ opacity: 0, y: -10 }}
        animate={{ 
          opacity: isOpen ? 1 : 0,
          y: isOpen ? 0 : -10,
          display: isOpen ? 'block' : 'none'
        }}
        transition={{ duration: 0.2 }}
      >
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex flex-col space-y-2">
            {menuItems.map((item) => (
              <motion.a
                key={item}
                href={`#${item}`}
                className={`px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                  activeItem === item 
                    ? 'bg-primary/10 text-primary' 
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
                onClick={() => {
                  onMenuClick(item);
                  setIsOpen(false);
                }}
                whileHover={{ x: 4 }}
              >
                {t(`menu.${item}`)}
              </motion.a>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};