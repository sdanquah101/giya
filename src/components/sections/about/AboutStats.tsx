import { motion } from 'framer-motion';
import { Users, Star, History } from 'lucide-react';

const stats = [
  {
    icon: Users,
    value: '8',
    label: 'Distinguished Speakers',
    description: 'Leading experts in academia and faith'
  },
  {
    icon: Star,
    value: '7',
    label: 'Years of Impact',
    description: 'Transforming academic journeys since 2016'
  },
  {
    icon: History,
    value: '100+',
    label: 'Success Stories',
    description: 'Graduates and doctoral students excelling in their fields'
  }
];

export const AboutStats = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {stats.map((stat, index) => {
        const Icon = stat.icon;
        return (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center"
          >
            <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon className="w-6 h-6 text-secondary" />
            </div>
            <div className="text-4xl font-bold text-secondary mb-2">
              {stat.value}
            </div>
            <div className="text-xl font-semibold text-light mb-2">
              {stat.label}
            </div>
            <p className="text-light/80">
              {stat.description}
            </p>
          </motion.div>
        );
      })}
    </div>
  );
};