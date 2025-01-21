import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Star, Award, Shield } from 'lucide-react';

const sponsorTiers = [
  {
    name: 'Platinum Sponsors',
    icon: Star,
    sponsors: [
      {
        name: 'KNUST',
        logo: 'https://upload.wikimedia.org/wikipedia/en/3/34/KNUST_logo.jpg',
        description: 'Kwame Nkrumah University of Science and Technology'
      },
      // Add more platinum sponsors
    ]
  },
  {
    name: 'Gold Sponsors',
    icon: Award,
    sponsors: [
      {
        name: 'University of Ghana',
        logo: 'https://upload.wikimedia.org/wikipedia/en/b/b7/University_of_Ghana_logo.jpg',
        description: 'Premier University in Ghana'
      },
      // Add more gold sponsors
    ]
  },
  {
    name: 'Silver Sponsors',
    icon: Shield,
    sponsors: [
      {
        name: 'Ghana Christian University',
        logo: 'https://example.com/placeholder.jpg',
        description: 'Leading Christian University'
      },
      // Add more silver sponsors
    ]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export const Sponsors = () => {
  const { t } = useTranslation();

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 via-light to-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-primary mb-4">
            {t('sponsors.title', 'Our Sponsors')}
          </h2>
          <p className="text-accent text-lg max-w-2xl mx-auto">
            {t('sponsors.subtitle', 'We are grateful to our sponsors who make this event possible')}
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-16"
        >
          {sponsorTiers.map((tier) => {
            const Icon = tier.icon;
            return (
              <motion.div
                key={tier.name}
                variants={itemVariants}
                className="space-y-8"
              >
                <div className="flex items-center justify-center gap-4">
                  <Icon className="w-8 h-8 text-primary" />
                  <h3 className="text-2xl font-semibold text-primary">{tier.name}</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {tier.sponsors.map((sponsor) => (
                    <motion.div
                      key={sponsor.name}
                      whileHover={{ scale: 1.05 }}
                      className="bg-white rounded-xl shadow-lg p-6 border border-light hover:border-secondary transition-colors"
                    >
                      <div className="aspect-video relative mb-4 bg-gray-50 rounded-lg overflow-hidden">
                        <img
                          src={sponsor.logo}
                          alt={sponsor.name}
                          className="w-full h-full object-contain p-4"
                          onError={(e) => {
                            e.currentTarget.src = 'https://via.placeholder.com/400x200?text=Sponsor';
                          }}
                        />
                      </div>
                      <h4 className="text-xl font-semibold text-primary mb-2">
                        {sponsor.name}
                      </h4>
                      <p className="text-accent">
                        {sponsor.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-accent mb-8">
            {t('sponsors.interested', 'Interested in becoming a sponsor?')}
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-accent transition-colors"
          >
            {t('sponsors.contact', 'Contact Us About Sponsorship')}
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};