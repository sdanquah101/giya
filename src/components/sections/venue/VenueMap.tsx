import { motion } from 'framer-motion';

export const VenueMap = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="relative h-[600px] rounded-xl overflow-hidden shadow-xl"
    >
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d990.6785932580127!2d-1.5728605!3d6.6822621!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdb9469d1641bfd%3A0x8c818a8db50cae48!2sFaculty%20of%20Law%20Auditorium!5e0!3m2!1sen!2sgh!4v1734217607025!5m2!1sen!2sgh"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="rounded-xl"
      />
    </motion.div>
  );
};