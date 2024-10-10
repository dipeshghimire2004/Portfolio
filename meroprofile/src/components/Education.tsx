
import { EDUCATION } from '../constants'
import {motion} from 'framer-motion';

const EducationSection = () => {

  const containerVarient={
    hidden:{opacity:0, y:20},
    visible:{opacity:1, y:0,
      transition:{duration:1, staggerChildren:0.5}
    }
  }

  const itemsVarient={
    hidden:{opacity:0, x:-20},
    visible:{opacity:1, x:0, transition:{duration:0.5}}
  }
  return (
    <motion.div
    initial="hidden"
    whileInView={"visible"}
    variants={containerVarient}
    viewport={{once:true}}
    
    className='pt-20' id='education'>
        <h1 className='mb-12 mt-20 text-center text-4xl font-semibold'>Education </h1>
        <div className="space-y-8 p-10">
        {EDUCATION.map((edu, index)=>(
            <motion.div
            variants={itemsVarient}
            key={index} className='border p-9 border-stone-50/30'>
                <h1 className='py-3 text-2xl lg:text-3xl'>{edu.degree}</h1>
                <p className='text-xl'>{edu.institution}</p>
                <p className='text-sm'>{edu.duration}</p>
                <p className='py-3 text-sm'>{edu.description}</p>
            </motion.div>
        ))}
        </div>
    </motion.div>
  )
}

export default EducationSection