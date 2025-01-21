import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export const Registration = () => {
  const { t } = useTranslation();

  return (
    <section id="registration" className="py-20 bg-gradient-to-br from-light to-white">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-primary mb-4">
            {t('registration.title', 'Registration')}
          </h2>
          <p className="text-accent">
            {t('registration.subtitle', 'Please fill out the form below to register for the conference')}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-xl overflow-hidden"
        >
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSePUyBau9MqcvufWFfQzlc3IDkVocf66t9LqElCR1CGl_cxqw/viewform?embedded=true"
            className="w-full h-[2040px] border-0"
            title="Registration Form"
          />
        </motion.div>
      </div>
    </section>
  );
};