import { SKILLS } from "../constants"
import { motion } from "framer-motion"


const Skills:React.FC = () => {
    const containerVarient={
        hidden:{opacity:0, y:20},
        visible:{opacity:1, y:0,
            transition:{duration:1,staggerChildren:0.5}
        }
    }
    
    const itemsVarient={
        hidden:{opacity:0, x:-30},
        visible:{opacity:1, x:0, transition:{duration:0.5}}
    }
  return (
    <motion.div
    initial="hidden"
    whileInView={"visible"}
    variants={containerVarient}
    viewport={{once:true}}

    className="container mx-auto mt-4" id="skills">
        <h2 className="text-4xl flex justify-center md:text-4xl font-bold text-green-500 mb-8">
            Skills
        </h2>
        <div
        className="mx-2 flex flex-col rounded-3xl px-4 py-2 lg:px-20 border border-stone-50/30">
            {SKILLS.map((skill,index)=>(
                <motion.div
                variants={itemsVarient}
                key={index} className={`py-6 flex items-center justify-between 
                    ${index !== SKILLS.length-1 ? "border-b border-stone-50/30": ""}
                    `}>
                        <div className="flex justify-center p-4">{skill.icon}
                            <p className="flex px-6 lg:px-28 text-lg lg:text-2xl justify-center items-center bg ">
                                {skill.name}</p>
                        </div>
                        <div >{skill.experience}</div>
                </motion.div>
            ))}
        </div>
    </motion.div>
  )
}

export default Skills