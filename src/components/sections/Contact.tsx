import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { ContactItem } from './contact/ContactItem';
import { contactInfo } from './contact/ContactInfo';

export const Contact = () => {
  const { t } = useTranslation();

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-primary to-dark text-white">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Contact Us</h2>
          <p className="text-light text-lg">Get in touch with us</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {contactInfo.map((item, index) => (
            <ContactItem
              key={item.href}
              {...item}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};