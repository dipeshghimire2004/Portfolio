import React from 'react';
import { HERO } from '../constants';
import hero from '../assets/images/coding-study.jpg';
import { useSpring, animated } from '@react-spring/web';

interface HeroData {
  name: string;
  description: string;
  greet: string;
}

const Hero: React.FC = () => {
  const { name, description, greet }: HeroData = HERO;

  // Name animation
  const nameAnimation = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    delay: 500,
  });

  // Hand wave animation
  const handWave = useSpring({
    from: { rotate: 0 },
    to: [{ rotate: -10 }, { rotate: 10 }, { rotate: 0 }], // Waving effect
    loop: true,  // Infinite loop for continuous waving
    config: { duration: 300 },  // Adjust duration for the wave speed
  });

  return (
    <section id="hero" className="flex min-h-screen flex-wrap items-center px-4">
      <div className="w-full md:w-1/2">
        <animated.div style={nameAnimation} className="text-4xl font-bold mb-4">
          {name}
        </animated.div>
        <div className="font-poppins mb-4">
          {greet}
          <animated.span style={handWave} className="inline-block ml-2 text-4xl">👋🏻</animated.span>
        </div>
        <div className="mb-8">{description}</div>
      </div>
      <div className="w-full md:w-1/2 px-4">
        <img
          className="w-full rounded-lg px-5 h-auto max-h-96 object-cover"
          src={hero}
          alt="hero"
        />
      </div>
    </section>
  );
};

export default Hero;
