
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const EducationSection = () => {
  const { t } = useTranslation();
  const education = t('education.items', { returnObjects: true }) as Array<{
    degree: string;
    institution: string;
    duration: string;
    description: string;
  }>;

  const containerVarient = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1, y: 0,
      transition: { duration: 1, staggerChildren: 0.5 }
    }
  }

  const itemsVarient = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  }
  return (
    <motion.div
      initial="hidden"
      whileInView={"visible"}
      variants={containerVarient}

      className='pt-20' id='education'>
      <h1 className="text-2xl md:text-5xl flex justify-center text-center font-bold text-brand-green mb-16">{t('education.title')}</h1>
      <div className="space-y-8 p-10">
        {education.map((edu, index) => (
          <motion.div
            variants={itemsVarient}
            key={index} className='border border-stone-200 dark:border-stone-800 rounded-lg p-8 hover:shadow-lg transition-shadow bg-white dark:bg-brand-dark'>
            <h1 className='py-2 text-2xl lg:text-3xl font-bold text-brand-green'>{edu.degree}</h1>
            <p className='text-xl font-medium text-gray-800 dark:text-white'>{edu.institution}</p>
            <p className='text-sm italic text-brand-red'>{edu.duration}</p>
            <p className='py-3 text-gray-600 dark:text-gray-300'>{edu.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

export default EducationSection