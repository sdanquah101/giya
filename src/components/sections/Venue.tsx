import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { VenueDetails } from './venue/VenueDetails';
import { VenueMap } from './venue/VenueMap';

export const Venue = () => {
  const { t } = useTranslation();

  return (
    <section id="venue" className="py-20 bg-gradient-to-br from-white to-light">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-primary mb-4">
            Venue Details
          </h2>
          <p className="text-accent text-lg">
            Join us at the Law Faculty Auditorium
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <VenueDetails />
          </motion.div>
          <VenueMap />
        </div>
      </div>
    </section>
  );
};