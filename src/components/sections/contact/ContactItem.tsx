import { motion } from 'framer-motion';
import { IconType } from 'lucide-react';

interface ContactItemProps {
  icon: IconType;
  text: string;
  href: string;
  index: number;
}

export const ContactItem = ({ icon: Icon, text, href, index }: ContactItemProps) => {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="flex items-center gap-4 bg-white/10 rounded-xl p-6 hover:bg-white/20 transition-colors"
    >
      <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
        <Icon className="w-6 h-6 text-secondary" />
      </div>
      <span className="text-light">{text}</span>
    </motion.a>
  );
};