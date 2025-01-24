import { IconType } from 'lucide-react';
import { Phone, Mail, WhatsApp, Instagram, Youtube } from 'lucide-react';

interface ContactItem {
  icon: IconType;
  text: string;
  href: string;
}

export const contactInfo: ContactItem[] = [
  {
    icon: Phone,
    text: '+233 558 078 078/ +233 552 835 433',
    href: 'tel:+233558078078'
  },
  {
    icon: Mail,
    text: 'godisinterestedinyouracademics@gmail.com',
    href: 'mailto:godisinterestedinyouracademics@gmail.com'
  },
  {
    icon: WhatsApp,
    text: 'Follow us on WhatsApp',
    href: 'https://bit.ly/giyaghanawhatsapp'
  },
  {
    icon: Instagram,
    text: 'Follow us on Instagram',
    href: 'https://www.instagram.com/giyaghana/'
  }
];
