import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'What is the conference about?',
    answer: 'The conference focuses on integrating faith with academic excellence, providing practical guidance for students to excel in their studies while maintaining their spiritual growth.'
  },
  {
    question: 'Who can attend?',
    answer: 'The conference is open to all tertiary students, regardless of their religious background or academic discipline.'
  },
  {
    question: 'Is registration required?',
    answer: 'Yes, registration is required to attend the conference. You can register through our online registration form.'
  },
  {
    question: 'What should I bring?',
    answer: 'Please bring a notebook, pen, and your Bible. You may also want to bring a water bottle and any personal items you might need.'
  },
  {
    question: 'Will there be networking opportunities?',
    answer: 'Yes, there will be dedicated time for networking and connecting with other students and speakers during breaks and the meet-and-greet session.'
  },
  {
    question: 'Can I attend virtually?',
    answer: 'This is an in-person event only. We encourage physical attendance for the full conference experience.'
  },
  {
    question: 'What is the dress code?',
    answer: 'Smart casual attire is recommended. Please dress comfortably but professionally.'
  },
  {
    question: 'Will there be certificates?',
    answer: 'Yes, certificates of participation will be provided to all registered attendees who complete the conference.'
  },
  {
    question: 'Can I invite friends?',
    answer: 'Yes! We encourage you to invite your friends and colleagues. Just ensure they register through the official registration link.'
  }
];

export const FAQ = () => {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 bg-gradient-to-br from-primary/5 to-light/20">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-primary mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-accent text-lg">
            Find answers to common questions about the conference
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 flex items-center justify-between text-left"
              >
                <span className="text-lg font-semibold text-primary">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown className="w-5 h-5 text-primary" />
                </motion.div>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="px-6 pb-4"
                  >
                    <p className="text-accent">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};