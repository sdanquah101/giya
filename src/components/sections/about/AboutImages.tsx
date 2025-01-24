import { motion } from 'framer-motion';

const images = [
  'https://drive.google.com/thumbnail?id=19Akf_28oxNFSyp1x40paUSJiINL7RBlv&sz=w1000',
  'https://drive.google.com/thumbnail?id=1jxHlE3MDD9O2DGAebJmNQ5bU3x_rTU7o&sz=w1000',
  'https://drive.google.com/thumbnail?id=1ea7WlAwgVOfFxN1q3onhxSh4gb6WSpWM&sz=w1000',
  'https://drive.google.com/thumbnail?id=1W7XuFwCNhCMFFuylkHV4sWo0Yk8l9mZU&sz=w1000',
];

export const AboutImages = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-6 gap-6 p-6">
        {/* First row */}
        <motion.div
          className="col-span-4 h-64 relative rounded-xl overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <img
            src={images[0]}
            alt="Conference Image 1"
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </motion.div>
        <motion.div
          className="col-span-2 h-64 relative rounded-xl overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <img
            src={images[1]}
            alt="Conference Image 2"
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </motion.div>

        {/* Second row */}
        <motion.div
          className="col-span-3 h-80 relative rounded-xl overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <img
            src={images[2]}
            alt="Conference Image 3"
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </motion.div>
        <motion.div
          className="col-span-3 h-80 relative rounded-xl overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <img
            src={images[3]}
            alt="Conference Image 4"
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </motion.div>
      </div>
    </div>
  );
};
