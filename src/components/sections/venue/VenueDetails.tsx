import { motion } from 'framer-motion';
import { MapPin, Clock, Phone } from 'lucide-react';

interface DetailItemProps {
  icon: typeof MapPin | typeof Clock | typeof Phone;
  title: string;
  content: string;
}

const DetailItem = ({ icon: Icon, title, content }: DetailItemProps) => (
  <div className="flex items-center gap-4 mb-4">
    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
      <Icon className="w-6 h-6 text-primary" />
    </div>
    <div>
      <h3 className="text-xl font-semibold text-primary">{title}</h3>
      <p className="text-accent">{content}</p>
    </div>
  </div>
);

export const VenueDetails = () => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <DetailItem
        icon={MapPin}
        title="Location"
        content="Law Faculty Auditorium, KNUST, Ghana"
      />
      <DetailItem
        icon={Clock}
        title="Date & Time"
        content="Saturday, 1st February, 2025"
      />
      <DetailItem
        icon={Phone}
        title="Need Help?"
        content={
          <a
            href="tel:+233558078078"
            className="hover:text-primary transition-colors"
          >
            +233 558 078 078
          </a>
        }
      />
    </div>
  );
};