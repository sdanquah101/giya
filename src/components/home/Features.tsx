import { motion } from 'framer-motion';
import { BookOpen, Users, Lightbulb, Heart } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const features = [
  {
    icon: BookOpen,
    titleKey: 'features.academic.title',
    descriptionKey: 'features.academic.description',
  },
  {
    icon: Users,
    titleKey: 'features.community.title',
    descriptionKey: 'features.community.description',
  },
  {
    icon: Lightbulb,
    titleKey: 'features.inspiration.title',
    descriptionKey: 'features.inspiration.description',
  },
  {
    icon: Heart,
    titleKey: 'features.faith.title',
    descriptionKey: 'features.faith.description',
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export const Features = () => {
  const { t } = useTranslation();

  return (
    <section className="py-20 bg-gradient-to-b from-orange-500 via-yellow-400 to-blue-500 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.titleKey}
                variants={item}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all border border-white/20 text-dark"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 4px 20px rgba(255, 165, 0, 0.6)",
                }}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-yellow-400 rounded-lg flex items-center justify-center mb-4 shadow-md">
                  <Icon className="w-6 h-6 text-blue-500" />
                </div>
                <h3 className="text-xl font-bold text-orange-600 mb-2">
                  {t(feature.titleKey)}
                </h3>
                <p className="text-blue-600 font-medium">
                  {t(feature.descriptionKey)}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
