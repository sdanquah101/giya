import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Coffee, Mic, Book, Users, Star } from 'lucide-react';
import { ScheduleItem } from './schedule/ScheduleItem';

const scheduleItems = [
  {
    time: '9:00 AM',
    title: 'Arrival and Meet and Greet',
    icon: Coffee,
    duration: '30 minutes'
  },
  {
    time: '9:30 AM',
    title: 'Opening Prayer and Welcome Address',
    icon: Star,
    duration: '15 minutes'
  },
  {
    time: '9:45 AM',
    title: 'Speaker Presentations:\n Eric Obeng Kwakye, Frederick Obeng Nyarko, Esther Dadzie, Gloria Graham, Nana Sam Yeboah, Nana Kwadwo Otieku Boadu',
    icon: Users,
    duration: '1 hour'
  },
  
  {
    time: '10:45 AM',
    title: 'Speakers Q&A',
    icon: Mic,
    duration: '30 minutes'
  },
  {
    time: '11:15 AM',
    title: 'Ice Breaker',
    icon: Star,
    duration: '15 minutes'
  },
  {
    time: '11:30 AM',
    title: 'Keynote Speech: Dr. Godfred Bonnah-Nkansah',
    icon: Star,
    duration: '30 minutes'
  },
  {
    time: '12:00 PM',
    title: 'Keynote Q&A',
    icon: Star,
    duration: '1 hour'
  },
  {
    time: '1:00 PM',
    title: 'Closing Remarks and Prayer',
    icon: Star,
    duration: '10 minutes'
  }
];

export const Schedule = () => {
  const { t } = useTranslation();

  return (
    <section id="schedule" className="py-20 bg-gradient-to-br from-primary/5 to-light/20">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-primary mb-4">
            {t('schedule.title', 'Program Schedule')}
          </h2>
          <p className="text-accent text-lg">
            {t('schedule.subtitle', 'Join us for an inspiring day of learning and growth')}
          </p>
        </motion.div>

        <div className="space-y-6">
          {scheduleItems.map((item, index) => (
            <ScheduleItem
              key={item.time}
              {...item}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};