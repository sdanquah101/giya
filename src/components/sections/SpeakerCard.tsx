import { motion } from 'framer-motion';
import { useState } from 'react';

interface SpeakerCardProps {
  speaker: {
    name: string;
    role: string;
    institution: string;
    image: string;
    bio: string;
  };
}

export const SpeakerCard = ({ speaker }: SpeakerCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div
      className="relative h-[400px] w-full perspective-1000"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <motion.div
        className="relative w-full h-full transition-transform duration-500"
        style={{
          transformStyle: 'preserve-3d',
          transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)'
        }}
      >
        {/* Front of card */}
        <div
          className="absolute w-full h-full backface-hidden cursor-pointer bg-white/10 backdrop-blur-md rounded-xl p-6 hover:bg-white/20 transition-colors"
          onClick={() => setIsFlipped(true)}
        >
          <motion.img
            whileHover={{ scale: 1.05 }}
            src={speaker.image}
            alt={speaker.name}
            className="w-40 h-40 rounded-full mx-auto mb-6 object-cover border-4 border-secondary"
          />
          <h3 className="text-2xl font-semibold text-center mb-3 text-white">
            {speaker.name}
          </h3>
          <p className="text-lg text-light text-center mb-2">{speaker.role}</p>
          <p className="text-light/80 text-center">
            {speaker.institution}
          </p>
          <div className="absolute bottom-4 left-0 right-0 text-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2 bg-secondary/20 rounded-full text-light text-sm hover:bg-secondary/30 transition-colors"
            >
              Click to read bio
            </motion.button>
          </div>
        </div>

        {/* Back of card */}
        <div
          className="absolute w-full h-full backface-hidden cursor-pointer bg-white/10 backdrop-blur-md rounded-xl p-6 hover:bg-white/20 transition-colors transform rotate-y-180"
          onClick={() => setIsFlipped(false)}
        >
          <div className="h-full overflow-y-auto custom-scrollbar">
            <h3 className="text-xl font-semibold text-center mb-4 text-white">
              {speaker.name}
            </h3>
            <p className="text-light/90 text-sm mb-4 whitespace-pre-line">
              {speaker.bio}
            </p>
          </div>
          <div className="absolute bottom-4 left-0 right-0 text-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2 bg-secondary/20 rounded-full text-light text-sm hover:bg-secondary/30 transition-colors"
            >
              Back to profile
            </motion.button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};