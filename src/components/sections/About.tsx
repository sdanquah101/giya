import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { AboutStats } from './about/AboutStats';
import { AboutImages } from './about/AboutImages';
import { ExperienceSection } from './ExperienceSection';

export const About = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-primary to-dark text-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-16"
        >
          {/* Main Content */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">About the Conference</h2>
              <p className="text-light/90 mb-6">
                Since 2016, the "God is Interested in Your Academics" Conference has been a transformative force in Ghana's academic landscape. This conference challenges the traditional dichotomy between faith and academic excellence, presenting a compelling vision where spiritual devotion becomes a catalyst for scholarly achievement.
              </p>
              <p className="text-light/90">
                Drawing inspiration from the book "The Misunderstood Mission Statement," we emphasize that believers in academic spaces are crucial agents for fulfilling the Great Commission. The conference advocates for raising scholars with three vital qualities: integrity, spirituality, and sagacity. These individuals become channels for mass evangelism through their excellence in academia, demonstrating that God's wisdom enhances rather than hinders intellectual pursuit.
              </p>
            </div>
            <AboutImages />
          </div>

          <AboutStats />
          <ExperienceSection />
        </motion.div>
      </div>
    </section>
  );
};