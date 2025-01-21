import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const images = [
  // Books and Study Materials
  'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80', // Stack of books
  'https://images.unsplash.com/photo-1456735190827-d1262f71b8a3?auto=format&fit=crop&q=80', // Open bible
  'https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&q=80', // Notebooks and pens
  'https://images.unsplash.com/photo-1455894127589-22f75500213a?auto=format&fit=crop&q=80', // Library shelves
  
  // Academic Settings
  'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80', // Empty lecture hall
  'https://images.unsplash.com/photo-1519452635265-7b1fbfd1e4e0?auto=format&fit=crop&q=80', // Study desk
  'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80', // Library interior
  'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&q=80', // Empty classroom

  // Technology and Learning
  'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80', // Laptop with books
  'https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80', // Study materials
  'https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?auto=format&fit=crop&q=80', // Desk with laptop
  'https://images.unsplash.com/photo-1456735190827-d1262f71b8a3?auto=format&fit=crop&q=80', // Bible study corner

  // Architectural Elements
  'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80', // University architecture
  'https://images.unsplash.com/photo-1462536943532-57a629f6cc60?auto=format&fit=crop&q=80', // Empty corridors
  'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80', // Library stacks
  'https://images.unsplash.com/photo-1519452635265-7b1fbfd1e4e0?auto=format&fit=crop&q=80', // Study area

  // Academic Symbols
  'https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&q=80', // Graduation cap
  'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&q=80', // Academic scroll
  'https://images.unsplash.com/photo-1471970471555-19d4b113e9ed?auto=format&fit=crop&q=80', // Globe on desk
  'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&q=80', // Microscope
];

export const BackgroundSlideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/30 to-primary/50 mix-blend-multiply z-10" />
      
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        >
          <img
            src={images[currentIndex]}
            alt="Conference background"
            className="w-full h-full object-cover"
            onLoad={handleImageLoad}
            style={{ opacity: isLoading ? 0 : 1 }}
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};