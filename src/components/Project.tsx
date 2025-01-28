import React from 'react';
import { PROJECTS } from '../constants';
import { MdArrowOutward } from 'react-icons/md';
import { motion } from 'framer-motion';

const Project: React.FC = () => {
  return (
    <div id="projects" className="flex flex-col items-center min-h-screen py-16 ">
      <h1 className="text-3xl md:text-4xl font-bold  bg-clip-text text-green-500 mb-12">
        PROJECTS
      </h1>

      <div className="relative group flex">
        <div className="flex animate-slide group-hover:animation-paused">
          {[...PROJECTS, ...PROJECTS].map((project) => (
            <motion.div
              key={project.id}
              className="relative flex flex-col min-w-[450px] items-center p-2 m-5 justify-center border rounded-xl shadow-xl overflow-hidden transition-all duration-500 group"
              whileHover={{
                scale: 1.03,
                rotateX: 1,
                rotateY: 1,
                boxShadow: '0px 15px 25px rgba(0, 0, 0, 0.15)',
              }}
              transition={{ type: 'spring', stiffness: 120, damping: 12 }}
            >
              <div className="relative w-full h-80">
                <img
                  src={project.image}
                  alt={project.name}
                  className="h-full object-cover transition-transform duration-500 hover:scale-110 hover:opacity-45"
                />
                {/* Background image changes on hover */}
                <div className="absolute inset-0 bg-cover bg-center transition-opacity duration-500 group-hover:opacity-40" style={{ backgroundImage: `url(${project.image})` }}></div>
              </div>
              <motion.div
              initial={{ opacity: 0, scale: 0.99 }}
              whileHover={{ opacity: 1, scale: 1 }}
              className="absolute flex items-center justify-center p-8 h-full bg-black bg-opacity-50 ">
                <div className="text-center text-white">
                  <h1 className="text-2xl font-extrabold border-b-2 shadow-2xl px-4 py-2 rounded-full">
                    {project.name}
                  </h1>
                  <p className="my-6">{project.description}</p>
                  <motion.a
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                    whileHover={{ opacity: 1, scale: 1.1 }}
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-white px-4 py-2  hover:bg-gray-300"
                  >
                    <div className="flex items-center">
                      <span>View on GitHub</span>
                      <MdArrowOutward />
                    </div>
                  </motion.a>
                </div>
              </motion.div>
            </motion.div>




              
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
