import React from 'react';
import { HERO } from '../constants';
import hero from '../assets/images/coding-study.jpg';
import bytespace from "../assets/images/bytespacenepal.png"

interface HeroData {
  name: string;
  description: string;
  greet: string;
}

const Hero: React.FC = () => {
  const { name, description, greet }: HeroData = HERO;

  return (
    <section id="hero" className="flex min-h-screen items-center justify-center bg-white dark:bg-black/20 px-6 lg:px-12 py-20">
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-12">
        {/* Left: Text Content */}
        <div className="w-full lg:w-3/2 flex flex-col items-start text-left">

          <div className='flex flex-col items-start text-left'>
            <h2 className="text-xl md:text-2xl font-bold text-brand-green tracking-wide uppercase">
              {name}
            </h2>
            <h1 className="text-3xl md:text-2xl font-extrabold text-brand-dark dark:text-white leading-tight mb-6">
              {greet}
            </h1>


          </div>
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-8 max-w-2xl">
            {description}
          </p>

          <div className="flex flex-wrap gap-4">
            <a href="#projects" className="px-8 py-3.5 bg-brand-green text-white font-semibold rounded-lg shadow-md hover:bg-brand-red transition-all transform hover:-translate-y-1">
              View Projects
            </a>
            <a href="#contact" className="px-8 py-3.5 border-2 border-gray-300 dark:border-gray-700 text-brand-dark dark:text-white font-semibold rounded-lg hover:border-brand-green hover:text-brand-green transition-all">
              Contact Me
            </a>

            {/* Optional Resume Button in Hero as well */}
            {/* <a href={Resume} download className="...">Resume</a> */}
            {/* Keeping it simple as requested: "Projects" and "Contact" are primary, Resume is in Navbar usually but requested here too */}
          </div>
        </div>

        {/* Right: Visuals */}
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-end gap-8">
          {/* Profile Image - Circle & Colorful */}
          <div className="relative w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden shadow-lg border-4 border-white dark:border-brand-dark">
            <img
              src={hero}
              alt="Dipesh Ghimire"
              className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Website Showcase Card */}
          <a
            href="https://bytespacenepal.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 p-4 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all border border-gray-100 dark:border-gray-700 max-w-sm w-full"
          >
            <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 bg-gray-900">
              {/* Using ecommercewebsiste.png as a placeholder for the website preview */}
              <img src={bytespace} alt="ByteSpaceNepal" className="w-full h-full object-contain" />
            </div>
            <div className="flex flex-col">
              <h3 className="text-brand-dark dark:text-white font-bold text-sm group-hover:text-brand-green transition-colors">ByteSpaceNepal</h3>
              <p className="text-xs text-gray-500 dark:text-gray-400">Visit my official website</p>
            </div>
            <div className="ml-auto text-brand-green">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 group-hover:translate-x-1 transition-transform">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
