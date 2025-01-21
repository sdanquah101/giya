import { motion } from 'framer-motion';
import { BookOpen, Users, Lightbulb, Heart } from 'lucide-react';

const experiences = [
  {
    icon: BookOpen,
    title: 'Academic Excellence',
    description: 'Learn how to integrate divine wisdom with academic rigor. Discover practical strategies for excelling in your studies while maintaining your spiritual focus. Our approach combines scholarly discipline with supernatural insight.'
  },
  {
    icon: Users,
    title: 'Community Support',
    description: 'Join a vibrant community of like-minded students and professionals. Build lasting relationships with peers who share your commitment to both academic excellence and spiritual growth. Experience mentorship from accomplished Christian academics.'
  },
  {
    icon: Lightbulb,
    title: 'Divine Inspiration',
    description: 'Tap into the supernatural wisdom available through the Holy Spirit. Understand how divine inspiration can enhance your learning experience and academic performance. Learn to access God\'s wisdom for breakthrough insights in your field.'
  },
  {
    icon: Heart,
    title: 'Faith Journey',
    description: 'Strengthen your faith while pursuing academic excellence. Discover how your academic journey can deepen your relationship with God. Learn to see your studies as an act of worship and a platform for Kingdom impact.'
  }
];

export const ExperienceSection = () => {
  return (
    <div className="mt-16">
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl font-bold text-secondary mb-8 text-center"
      >
        What You Will Experience
      </motion.h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {experiences.map((exp, index) => {
          const Icon = exp.icon;
          return (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-secondary mb-2">
                    {exp.title}
                  </h4>
                  <p className="text-light/90 text-sm leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};