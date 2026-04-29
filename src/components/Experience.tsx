import { motion } from "framer-motion"
import { useTranslation } from "react-i18next"

const Experiences: React.FC = () => {
  const { t } = useTranslation();
  const experiences = t('experience.items', { returnObjects: true }) as Array<{
    title: string;
    company: string;
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
    hidden: { opacity: 0, y: -30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  }

  return (
    <motion.section
      initial="hidden"
      whileInView={"visible"}
      variants={containerVarient}
      viewport={{ once: true }}

      className="pt-20 px-4" id="work">
      <h1 className="text-2xl md:text-5xl flex justify-center text-center font-bold text-brand-green mb-16">{t('experience.title')}</h1>
      <div className="space-y-8 max-w-4xl mx-auto">
        {experiences.map((experience, index) => (
          <motion.div
            variants={itemsVarient}
            key={index} className="border border-stone-200 dark:border-stone-800 rounded-lg p-8 hover:shadow-lg transition-shadow bg-white dark:bg-brand-dark">
            <h1 className="py-2 text-2xl lg:text-3xl font-bold text-brand-green">{experience.title}</h1>
            <div className="flex justify-between items-center mb-4">
              <p className="text-xl font-medium text-gray-800 dark:text-white">{experience.company}</p>
              <p className="text-sm font-medium italic text-brand-red">{experience.duration}</p>
            </div>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed font-normal">{experience.description}</p>
          </motion.div>
        ))}

      </div>
    </motion.section>
  )
}

export default Experiences