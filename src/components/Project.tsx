import React from 'react';
import { PROJECTS } from '../constants';
import { MdArrowOutward } from 'react-icons/md';
import { motion } from 'framer-motion';

const Project: React.FC = () => {
  return (
    <div id="projects" className="flex flex-col items-center min-h-screen py-16 ">
      <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 mb-12">
        PROJECTS
      </h1>

   
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 ">
        {PROJECTS.map((project) => (
          <motion.div
            key={project.id}
            className="relative flex flex-col text-center items-center p-12 m-5 justify-between border rounded-xl shadow-xl overflow-hidden transition-all duration-500"
            whileHover={{
              scale: 1.03,
              rotateX: 1,
              rotateY: 1,
              boxShadow: '0px 15px 25px rgba(0, 0, 0, 0.15)',
            }}
            transition={{ type: 'spring', stiffness: 120, damping: 12 }}
          >

            <h1 className="text-2xl font-semibold  pb-4">{project.name}</h1>


            <p className=" text-center mb-6">{project.description}</p>


            <motion.a
                         initial={{opacity:0, scale:0.9}}   
                         whileInView={{opacity:0, scale:1}}
                         transition={{duration:1}}
                         whileHover={{opacity:1,scale:1.1}}
 
                       
                        href={project.githubLink} target="_blank"
                            rel="noopener noreferrer" className='rounded-full
                            bg-white px-4 py-2 text-black hover:bg-gray-300'>

                            <div
                           
                            
                            className='flex items-center'>
                                <span>View on GitHub</span>
                                <MdArrowOutward />
                            </div> 
                        </motion.a>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Project;
