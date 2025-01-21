import { motion } from 'framer-motion';

const images = [
  'https://scontent.facc1-1.fna.fbcdn.net/v/t1.6435-9/143061708_3583387061730057_8703200048042245841_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeF3yucmo6yNi49wayMHOnErckjpRoqJn7RySOlGiomftKyiXeQPkb20PIbLe2Gj3MxQ-WZ1-_JxYIVHXB6aQpV1&_nc_ohc=ugnkmyD7tEgQ7kNvgG4Ci1G&_nc_zt=23&_nc_ht=scontent.facc1-1.fna&_nc_gid=A-vINIH5q552t4Yi4_g6zW5&oh=00_AYDzwFg0bgK8wUsrbZjOilIDU4h_VjSO_ON57OwlpIR0XQ&oe=67855FF6',
  'https://scontent.facc1-1.fna.fbcdn.net/v/t1.6435-9/87328743_2620449084905535_6873434445248987136_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=cf85f3&_nc_eui2=AeHD5-za8joGrTJoWwTjfzonBX5a0qaSlkMFflrSppKWQ5abOpXntnd1hFt26x0mvJTMIyibS0QUzXOIlk5DCCPi&_nc_ohc=jZybkG0PGOQQ7kNvgHXrNAU&_nc_zt=23&_nc_ht=scontent.facc1-1.fna&_nc_gid=AjhCepY1BBzcbxQi8A6Iwqu&oh=00_AYAdzfa8UfAofOTYTOV8Gv0sxD0mLKB73cD0DEnmMfKPUA&oe=67857902'
];

export const AboutImages = () => {
  return (
    <div className="grid grid-cols-1 gap-6">
      {images.map((image, index) => (
        <motion.div
          key={index}
          className="rounded-xl overflow-hidden h-[300px]" // Increased height
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.2 }}
        >
          <img
            src={image}
            alt="Conference moments"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </motion.div>
      ))}
    </div>
  );
};