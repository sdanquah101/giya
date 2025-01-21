import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const titles = [
  { lang: 'en', text: 'God is Interested in your Academics' },
  { lang: 'fr', text: 'Awurade Ani Gye W\'adesua ho' },
  { lang: 'es', text: 'God is Interested in your Academics' },
  { lang: 'de', text: 'Awurade Ani Gye W\'adesua ho' },
  { lang: 'twi', text: 'God is Interested in your Academics' },
];

export const LanguageTitle = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % titles.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-[160px] flex items-center justify-center relative">
      <AnimatePresence mode="wait">
        <motion.h1
          key={currentIndex}
          className="text-4xl md:text-6xl font-bold absolute w-full"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-white drop-shadow-lg">
            {titles[currentIndex].text}
          </span>
        </motion.h1>
      </AnimatePresence>
    </div>
  );
};