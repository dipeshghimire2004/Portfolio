import React from 'react';
import myphoto from '../assets/images/myphoto.jpg'
import { useTranslation } from 'react-i18next';


const About: React.FC = () => {
  const { t } = useTranslation();
  const paragraphs = t('bio.paragraphs', { returnObjects: true }) as string[];
  
  return (
    <section id="bio" className="flex flex-col items-center min-h-screen justify-center py-20 bg-gray-50 dark:bg-black/40">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Left: Story Content */}
          <div className="w-full lg:w-3/5 order-2 lg:order-1">
            <h2 className="text-sm font-bold text-brand-red tracking-widest uppercase mb-2">My Story</h2>
            <h1 className="text-3xl md:text-5xl font-bold text-brand-green mb-8">{t('bio.title')}</h1>

            <div className="space-y-6 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              {paragraphs.map((paragraph: string, index: number) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>

          {/* Right: Profile Card/Image */}
          <div className="w-full lg:w-2/5 order-1 lg:order-2 flex justify-center">
            <div className="relative w-full max-w-sm rounded-xl overflow-hidden shadow-2xl bg-white dark:bg-brand-dark p-2 border border-gray-100 dark:border-gray-800 rotate-1 hover:rotate-0 transition-all duration-500">
              <img
                src={myphoto}
                alt="Profile"
                className="w-full h-auto rounded-lg object-cover grayscale-0 hover:grayscale transition-all"
              />
              <div className="p-4 text-center">
                <h3 className="text-xl font-bold text-brand-dark dark:text-white">Dipesh Ghimire</h3>
                <p className="text-sm text-brand-green font-medium mt-1">Full-Stack Engineer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
