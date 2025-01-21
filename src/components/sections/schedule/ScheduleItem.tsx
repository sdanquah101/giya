import { motion } from 'framer-motion';
import { Clock, MapPin } from 'lucide-react';
import { IconType } from 'lucide-react';

interface ScheduleItemProps {
  time: string;
  title: string;
  duration: string;
  icon: IconType;
  index: number;
}

export const ScheduleItem = ({ time, title, duration, icon: Icon, index }: ScheduleItemProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="bg-white rounded-xl shadow-lg p-6 flex items-center gap-6 hover:shadow-xl transition-shadow"
    >
      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
        <Icon className="w-8 h-8 text-primary" />
      </div>
      <div className="flex-grow">
        <div className="flex items-center gap-4 mb-2">
          <span className="text-lg font-semibold text-primary">
            {time}
          </span>
          <div className="flex items-center gap-2 text-sm text-accent">
            <Clock className="w-4 h-4" />
            {duration}
          </div>
        </div>
        <h3 className="text-xl font-semibold text-dark">
          {title}
        </h3>
      </div>
    </motion.div>
  );
};