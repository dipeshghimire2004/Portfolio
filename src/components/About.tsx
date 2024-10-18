import React from 'react';
import { BIO } from '../constants';
import myphoto from '../assets/images/myphoto.jpg'


const About: React.FC = () => {
  return (
    <section id="bio" className="flex flex-col w-full items-center min-h-screen py-10  dark:bg-gray-900">
      {/* Title */}
      <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mb-8">
        About Me
      </h1>
    <div className=' flex flex-wrap items-center pb-4 mx-4 '>
      {/* Bio Card */}
      <div className="bg-white dark:bg-gray-900 dark:text-white shadow-lg rounded-lg p-4 w-full md:w-1/2 ">
        <div className="text-lg  leading-relaxed tracking-wide">
          {BIO.map((bio, index)=>(
            <p
              key={index}
              className="mb-4 text-lg lg:text-xl "
            >
              {bio}
            </p>  
          )) }
        </div>
      </div>
      <div className='w-full md:w-1/2 p-4 overflow-hidden'>
          <img className='rounded-lg'
          
          src={myphoto}/>
      </div>
      </div>
    </section>
  );
};

export default About;
