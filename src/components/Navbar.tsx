import React, { useState } from 'react';
import { NAVIGATION_LINKS } from '../constants';
import DGlogo from '../assets/images/logodg.png';
import { TiThMenu } from 'react-icons/ti';
import useDarkMode from './hooks/useDarkMode';
import Resume from '../assets/929p.pdf'

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const {isDarkMode, toggleDarkMode}=useDarkMode();

  const toggleMobileMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    href: string
  ): void => {
    e.preventDefault();

    const targetElement = document.querySelector(href) as HTMLElement | null;
    if (targetElement) {
      const offset = -85;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY + offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
      setIsOpen(false);
    }
  };

  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white shadow-lg font-poppins fixed top-0 z-50">
      <div className="flex max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center gap-6 h-14">
        
          <button 
          onClick={toggleDarkMode}
         >
          
            {isDarkMode ?"🌙":"🔆"}
          </button>


          <div>
            <a href="#">
              <img src={DGlogo} className='w-20' alt="Dipesh Ghimire Logo" />
            </a>
          </div>


          <div className="hidden md:flex space-x-4">
            <ul className="flex items-center gap-4">
              {NAVIGATION_LINKS.map((item, index) => (
                <li key={index}>
                  <a
                    className="text-md hover:text-green-500"
                    href={item.href}
                    onClick={(e) => handleClick(e, item.href)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <a href={Resume} download className='button bg-green-500 px-4 py-1 rounded-xl'>Resume</a>

        
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className=" hover:text-gray-500"
              aria-label="Toggle Mobile Menu"
            >
              <TiThMenu size={24} />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden ${
            isOpen ? 'block' : 'hidden'
          } absolute top-14 bg-white dark:bg-black shadow-lg w-full`}
        >
          <ul className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {NAVIGATION_LINKS.map((item, index) => (
              <li key={index}>
                <a
                  className="text-sm block hover:text-green-500"
                  href={item.href}
                  onClick={(e) => handleClick(e, item.href)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
