import React from 'react';
import { PROJECTS } from '../constants';
import { MdArrowOutward } from 'react-icons/md';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const Project: React.FC = () => {
  const { t } = useTranslation();
  const projects = t('projects.items', { returnObjects: true }) as Array<{
    name: string;
    description: string;
  }>;
  
  const [visibleProjects, setVisibleProjects] = React.useState(3);

  const showMoreProjects = () => {
    setVisibleProjects((prev) => prev + 3);
  };

  const showLessProjects = () => {
    setVisibleProjects(3);
  };

  return (
    <div id="projects" className="flex flex-col items-center min-h-screen py-16 bg-white dark:bg-black/50">
      <h1 className="text-3xl md:text-5xl font-bold text-brand-green mb-16">
        {t('projects.title')}
      </h1>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.slice(0, visibleProjects).map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="group relative flex flex-col h-full bg-white dark:bg-brand-dark border border-gray-200 dark:border-gray-800 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden rounded-t-lg">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Content Container - Box Model */}
              <div className="flex flex-col flex-grow p-6">
                <h3 className="text-2xl font-bold mb-3 text-brand-green group-hover:text-brand-red transition-colors duration-300">{projects[index]?.name || project.name}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6 text-sm line-clamp-4 flex-grow leading-relaxed">{projects[index]?.description || project.description}</p>

                <div className="mt-auto">
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-brand-green text-white px-5 py-2.5 rounded-md hover:bg-brand-red transition-colors font-medium text-sm shadow-sm"
                    >
                      <span>View on GitHub</span>
                      <MdArrowOutward />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center mt-12 gap-4">
          {visibleProjects < PROJECTS.length && (
            <button
              onClick={showMoreProjects}
              className="px-8 py-3 bg-white border-2 border-brand-green text-brand-green font-bold rounded-lg hover:bg-brand-green hover:text-white transition-all duration-300 shadow-sm"
            >
              Show More
            </button>
          )}
          {visibleProjects > 3 && (
            <button
              onClick={showLessProjects}
              className="px-8 py-3 bg-brand-red text-white font-bold rounded-lg hover:bg-red-700 transition-all duration-300 shadow-sm"
            >
              Show Less
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Project;
