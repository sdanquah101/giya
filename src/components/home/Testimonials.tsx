import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const testimonials = [
  {
    nameKey: 'testimonials.student1.name',
    roleKey: 'testimonials.student1.role',
    quoteKey: 'testimonials.student1.quote',
    imageUrl: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&q=80&w=200&h=200',
  },
  {
    nameKey: 'testimonials.student2.name',
    roleKey: 'testimonials.student2.role',
    quoteKey: 'testimonials.student2.quote',
    imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200&h=200',
  },
];

export const Testimonials = () => {
  const { t } = useTranslation();

  return (
    <section className="py-20 bg-gradient-to-br from-primary to-dark">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-complement-secondary mb-4">
            {t('testimonials.title')}
          </h2>
          <p className="text-complement-light text-lg">
            {t('testimonials.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.nameKey}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white/95 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-complement-secondary/20"
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.imageUrl}
                  alt={t(testimonial.nameKey)}
                  className="w-12 h-12 rounded-full object-cover ring-2 ring-complement-secondary"
                />
                <div className="ml-4">
                  <h3 className="font-semibold text-dark">
                    {t(testimonial.nameKey)}
                  </h3>
                  <p className="text-accent text-sm">
                    {t(testimonial.roleKey)}
                  </p>
                </div>
              </div>
              <p className="text-dark italic">
                "{t(testimonial.quoteKey)}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};