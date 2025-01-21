import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Calendar, MapPin, ArrowRight } from 'lucide-react';
import { BackgroundSlideshow } from './BackgroundSlideshow';
import { LanguageTitle } from './LanguageTitle';
import { CountdownTimer } from './CountdownTimer';
import { FloatingShapes } from './FloatingShapes';

export const Hero = () => {
  const { t } = useTranslation();

  const handleRegistrationClick = () => {
    window.open('http://bit.ly/giyaconference', '_blank');
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <BackgroundSlideshow />
      <FloatingShapes />

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center py-20">
        <div className="mb-12">
          <LanguageTitle />
        </div>

        <div className="mb-12">
          <CountdownTimer />
        </div>

        <motion.div
          className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <div className="flex items-center gap-2 bg-dark/30 backdrop-blur-sm px-6 py-3 rounded-full">
            <Calendar className="w-5 h-5 text-light" />
            <span className="text-light whitespace-nowrap">1st February, 2025</span>
          </div>
          <div className="flex items-center gap-2 bg-dark/30 backdrop-blur-sm px-6 py-3 rounded-full">
            <MapPin className="w-5 h-5 text-light" />
            <span className="text-light whitespace-nowrap">KNUST Law Auditorium</span>
          </div>
        </motion.div>

        <motion.p
          className="text-xl mb-12 text-light font-medium"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          Powered by PHANET Tertiary Council
        </motion.p>

        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
        >
          <motion.button
            onClick={handleRegistrationClick}
            className="bg-secondary text-dark px-8 py-3 rounded-full font-semibold hover:bg-light transition-colors flex items-center gap-2 group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Register Now
            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};