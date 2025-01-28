import React from 'react';
import { BIO } from '../constants';
import myphoto from '../assets/images/myphoto.jpg'


const About: React.FC = () => {
  return (
    <section id="bio" className="flex flex-col w-full items-center min-h-screen py-10  dark:bg-gray-900">
      {/* Title */}
      <h1 className="text-2xl md:text-4xl font-bold text-transparent text-green-500 mb-8">
        About Me
      </h1>
      <div className=' flex flex-wrap items-center justify-between pb-4  '>
        {/* Bio Card */}
        <div className="bg-white dark:bg-gray-900 dark:text-white shadow-lg rounded-lg p-4 w-full md:w-1/2 ">
          <div className="text-lg  leading-relaxed tracking-wide">
            {BIO.map((bio, index)=>(
              <p
                key={index}
                className="mb-4 text- lg:text-lg "
              >
                {bio}
              </p>  
            )) }
          </div>
        </div>
        <div className='w-full md:w-1/2 p-4 overflow-hidden'>
            <img className='rounded-lg h-96'
            
            src={myphoto}/>
        </div>
      </div>
    </section>
  );
};

export default About;
