import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { SpeakerCard } from './SpeakerCard';

const speakers = [
  {
    name: 'Dr. Godfred B. Nkansah',
    role: 'Founding Director',
    institution: 'Phanerosis Network International',
    image: 'https://pbs.twimg.com/profile_images/1392217527934234628/_GQnTNQE_400x400.jpg',
    bio: `Dr. Godfred Bonnah Nkansah is a distinguished political scientist, development advocate, intercessory leader, and accomplished author with over 14 years of experience in the NGO sector. He is the founder of Phanerosis Network International, an intercessory ministry with branches in Ghana and across the diaspora.

He graduated summa cum laude with a Ph.D. in Political Science from Corvinus University of Budapest, Hungary. His accolades include being the best graduating student and recipient of the best dissertation prize during his Master's studies at Royal Holloway, University of London.

As a mentor, Dr. Nkansah has guided hundreds of academics and professionals across Africa, inspiring them to achieve excellence in their respective fields. He strongly believes that the church's mandate transcends the pulpit.

His notable works include:
• "Adelphos" – highlighting the believer as a brother of Christ
• "Anavah: The Key to Kingdom Greatness"
• "This Gospel of The Kingdom"
• "The Misunderstood Mission Statement"
• "The Realm of Solemnities"
• "The 14th Generation of The Christ"
• "The Allos Parakletos"
• "The Language of the Initiated"`,
    social: {
      linkedin: '#',
      twitter: '#',
      website: '#'
    }
  },

  {
    name: 'Eric Obeng Kwakye',
    role: 'Branch Operations Manager',
    institution: 'Consolidated Bank Ghana',
    image: 'https://drive.google.com/thumbnail?id=19UiZZbqTZOZrqQqbI_OjsS9KrzjKG6fu&sz=w1000',
    bio: `Eric Obeng Kwakye is a seasoned professional with over 10 years of expertise in operations management, leadership, and consulting. Currently, he serves as the Branch Operations Manager at CBG, Co-founder and Executive Director of PHANET; Lead Consultant at T.R.I.P. Africa; and Lead Ideator for GIYA+C (God is Interested In your Academics & Career)\n\n' 
    'With a proven track record of success, Eric Obeng Kwakye is dedicated to driving growth, innovation, and positive impact across various industries.`,
    social: {
      linkedin: '#',
      twitter: '#',
      website: '#'
    }
  },
  
  {
    name: 'Nana Sam Yeboah',
    role: 'AI Developer',
    institution: 'MinoHealth AI Lab',
    image: 'https://drive.google.com/thumbnail?id=1U-2StyU6CpwrdpqMwhtVQnQBA2egzSCZ&sz=w1000',
    bio: `Nana Sam Yeboah is a research engineer specializing in Natural Language Processing (NLP) and deep learning applications within healthcare and education. His work focuses on leveraging machine learning to advance clinical artificial intelligence and enhance educational accessibility.

In November 2023, Yeboah joined MinoHealth AI Lab as an AI Developer. He collaborates with a team to develop comprehensive pipelines for curating and annotating medical data records and designs multimodal AI systems to assist healthcare professionals.

Since February 2023, he has led the Text-to-Speech and Question Extraction teams at Brilla AI, an open-source initiative aimed at providing equitable access to education in Ghana.

His academic excellence was recognized with the Provost's Award for Excellent Students at KNUST. His contributions to AI and education have been showcased at various conferences including the Deep Learning Indaba and AfricAIED.`,
    social: {
      linkedin: '#',
      twitter: '#',
      website: '#'
    }
  },
  {
    name: 'Gloria Edumaba Graham',
    role: 'Research Engineer',
    institution: 'KNUST',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjqvgNJQQr0BKdc_s3f4v3H6rygYv56uec4g&s',
    bio: `Gloria Edumaba Graham is a dedicated researcher and engineer specializing in assistive robotics and artificial intelligence (AI). She is currently pursuing a Master of Philosophy at KNUST, where she focuses on creating intelligent systems for individuals with visual and mobility impairments.

During her undergraduate program, Gloria developed an intelligent system aimed at preventing bedsores in immobile patients, igniting her passion for assistive robotics and her commitment to leveraging technology to enhance healthcare.

As a Graduate Research Student at KNUST's Responsible Artificial Intelligence Lab (RAIL), Gloria focuses on creating intelligent systems tailored for individuals with visual and mobility impairments.

Her dedication to this field led her to participate in the ETH Robotics Student Fellowship at ETH Zurich in 2024, where she contributed to the development of a feature extraction toolbox at the Spinal Cord Injury and Artificial Intelligence Lab.`,
    social: {
      linkedin: '#',
      twitter: '#',
      website: '#'
    }
  },
  {
    name: 'Ruthie Bomochie Armah',
    role: 'Machine Learning Engineer',
    institution: 'Hubtel Ltd.',
    image: 'https://drive.google.com/thumbnail?id=1VaeVDIBoWsyofLkocJY6n6x9ZM3PTW9r&sz=w1000',
    bio: 'Ruthie is a Machine Learning Engineer at Hubtel Ltd., a leading fintech company in Africa. At Hubtel, she works to build and deploy AI/ML solutions to business challenges across different operational domains. She has also worked as a Data Intelligence Consultant for for the Office of the Vice President of Ghana, as well as other startups in Africa.\n\n' +
      'She holds a Master\'s degree in Chemical Engineering from KNUST, graduating as the best female student in her graduating class. Her research in Chemical Engineering explored the use of synthetic data and neural networks in process modelling, work that has been published in the journal of Industrial Biotechnology.\n\n' +
      'She is the lead of the PHANET Data Intelligence Unit, and the CEO of Gurlz App, an app for all things women.',
    social: {
      linkedin: '#',
      twitter: '#',
      website: '#'
    }
  },
  {
    name: 'Frederick Obeng Nyarko',
    role: 'Founder and CEO',
    institution: 'Ashanti Technologies',
    image: 'https://media.licdn.com/dms/image/v2/D4E03AQFsFlp_qVhdzA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1666792189216?e=1742428800&v=beta&t=w9sfz6amjVHbElAbQ7JTHCxAQT72aUsCQxUzcD7jVRk',
    bio: 'Frederick Obeng Nyarko is a Computer and Software Engineer with over 6 yers experience building innovative solutions for companies and organizations worldwide. He holds a Bachelor of Science in Computer Engineering from KNUST, where he also served as a Research and Teaching Assistant.He has published work in the Computer Engineering and Applications Journal on Intelligent Miniature Circuit Breakers \n\n' +
    'Beyond his professional accomplishments, Frederick brings a unique perspective on integrating faith and academic excellence, making him an inspiring mentor and speaker for students and professionals alike. His journey from Mfantsipim School to becoming a global technology consultant exemplifies how spiritual guidance and academic pursuit can work hand in hand to achieve extraordinary results.',
    social: {
      linkedin: '#',
      twitter: '#',
      website: '#'
    }
  },
  {
    name: 'Esther Dadzie',
    role: 'PhD Candidate',
    institution: 'Department of Biomedical Engineering, University of Ghana',
    image: 'https://media.licdn.com/dms/image/v2/C4E03AQHynSTRa-6GzA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1654017051532?e=2147483647&v=beta&t=3FxEEfILKNFMiXU3QxTMcK3An3NSfS_D_P7vb4jKqiU',
    bio: 'Esther Dadzie, once an average student, is now being transferred from an MPhil student to a PhD fellow in Biomedical Engineering at the University of Ghana. \n\n'+
    'During her undergraduate studies as a Medical Labouratory Science student in the University of Cape Coast, she was the president of both New Breed and Phanerosis Prayer Network. Balancing these roles with her studies, she excelled both academically and earned a Teaching Assistant positing during her national service. During her MPhil, Esther worked as a lab scientist at night, full time student during the day, and a home tutor on her off days to fund her studies. Despite this rigorous schedule, she produced a good thesis which earned her the opportunity for her MPhil to be transferred to a PhD. \n\n' +
    'Esther sees her self as a problem solver and is committed to contributing to the development of Ghana, particularly in the educational and healthcare sectors, whilst inspiring others to follow suit.',
   

    social: {
      linkedin: '#',
      twitter: '#',
      website: '#'
    }
  },
  {
    name: 'Nana Kwadwo Otieku-Boadu',
    role: 'Research and Teaching Assistant',
    institution: 'Department of Chemical Engineering, KNUST',
    image: 'https://drive.google.com/thumbnail?id=1FvV_09UjWxQ1o0NGJ_FNTgyIhLcyp9dz&sz=w1000',
    bio: 'Nana Kwadwo Otieku-Boadu is a distinguished graduate of the Kwame Nkrumah University of Science and Technology (KNUST), where he earned a Bachelor of Science degree in Petrochemical Engineering with First Class Honours. He excelled academically, beggining with a cumulative weighted average (CWA) of 88.11 and graduating with 83.63, making him the top-performing student in the Department of Chemical and Mechanical Engineering. His exceptional academic achievements earned him multiple accolades, including the prestigious Excellent Student Award for maintaining a CWA above 75 throughout his studies, as well as the Overall Best Student in Petrochemical Engineering award for his second, third, and final years. \n\n' +

      'During his undergraduate studies, Nana demonstrated exceptional leadership and service. He served as the Head of the Students’ Academic Board for the Association of Petrochemical Engineering Students in his third year and contributed as a member of the Students’ Academic Committee in his second and final years. In addition to his academic commitments, he was an active member of the Phanerosis Prayer Network, serving faithfully from his first year through to graduation. \n\n' +

      'Nana\'s ability to balance academic excellence with Christian responsibilities is a testament to his discipline and dedication, a skill he cultivated during his time at Mfantsipim School. As Christian Council Chairman in senior high school, he oversaw the activities of 12 Christian fellowships while maintaining top academic performance in his class. \n\n' +

      'Currently, Nana is a Teaching Assistant in the Department of Chemical Engineering at KNUST, where he is advancing his research interests in pinch and exergy analyses under the guidance of his supervisor. His passion for education extends beyond the classroom, as he has co-pioneered the development of academic support videos to enhance learning for students in his department.\n\n' +

      'An avid reader and lifelong learner, Nana\'s academic and professional focus revolves around deepening his understanding of chemical engineering principles. His commitment to excellence and service continues to inspire those around him.',
    social: {
      linkedin: '#',
      twitter: '#',
      website: '#'
    }
  }
];

export const Speakers = () => {
  const { t } = useTranslation();

  return (
    <section id="speakers" className="py-20 bg-gradient-to-br from-dark to-primary text-white">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">
            Distinguished Speakers
          </h2>
          <p className="text-light text-lg">
            Learn from experts from different professions, academia and faith
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {speakers.map((speaker) => (
            <SpeakerCard key={speaker.name} speaker={speaker} />
          ))}
        </div>
      </div>
    </section>
  );
};
