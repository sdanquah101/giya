import { useState } from 'react';

export const useNavigation = () => {
  const [activeItem, setActiveItem] = useState('home');

  const handleMenuClick = (item: string) => {
    if (item === 'registration') {
      window.open('http://bit.ly/giyaconference', '_blank');
      return;
    }
    setActiveItem(item);
    const element = document.getElementById(item);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return {
    activeItem,
    handleMenuClick
  };
};