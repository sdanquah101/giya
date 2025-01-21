import { IconType } from 'lucide-react';
import { Phone, Mail, Facebook, Instagram, Youtube } from 'lucide-react';

interface ContactItem {
  icon: IconType;
  text: string;
  href: string;
}

export const contactInfo: ContactItem[] = [
  {
    icon: Phone,
    text: '+233 558 078 078',
    href: 'tel:+233558078078'
  },
  {
    icon: Mail,
    text: 'giyaconference@gmail.com',
    href: 'mailto:giyaconference@gmail.com'
  },
  {
    icon: Facebook,
    text: 'Follow us on Facebook',
    href: 'https://web.facebook.com/Phanerosisprayernetworkint'
  },
  {
    icon: Instagram,
    text: 'Follow us on Instagram',
    href: 'https://www.instagram.com/phanet_official/'
  },
  {
    icon: Youtube,
    text: 'Subscribe on YouTube',
    href: 'https://www.youtube.com/c/PhanerosisPrayerNetworkInternationalPHANET'
  }
];