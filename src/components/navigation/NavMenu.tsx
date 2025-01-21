import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { MenuItem } from './MenuItem';
import { menuItems } from './menuItems';

interface NavMenuProps {
  activeItem: string;
  onMenuClick: (item: string) => void;
  className?: string;
}

export const NavMenu = ({ activeItem, onMenuClick, className = '' }: NavMenuProps) => {
  const { t } = useTranslation();

  return (
    <div className={`items-center space-x-1 ${className}`}>
      {menuItems.map((item, index) => (
        <motion.div
          key={item}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <MenuItem
            label={t(`menu.${item}`)}
            href={`#${item}`}
            isActive={activeItem === item}
            onClick={() => onMenuClick(item)}
          />
        </motion.div>
      ))}
    </div>
  );
};