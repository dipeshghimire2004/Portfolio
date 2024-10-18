import React, { useEffect, useRef } from 'react';
import { HERO } from '../constants';
import hero from '../assets/images/coding-study.jpg';
import { useSpring, animated } from '@react-spring/web';
import { gsap } from "gsap";

interface HeroData {
  name: string;
  description: string;
  greet: string;
}

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null); 
  useEffect(() => {
    createCircles(); // Call the function to create animations
  }, []);

  const createCircles = () => {
    const heroSection = heroRef.current; 


    if (!heroSection) return;

    const circleCount = window.innerWidth > 768 ? 10 : 5; 

    for (let i = 0; i < circleCount; i++) {
      const circle = document.createElement("div");
      circle.classList.add("circle");
      heroSection.appendChild(circle);

      
      const size = Math.random() * 100 + 10;
      gsap.set(circle, {
        width: size,
        height: size,
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
      });

      // Animate the circles to float up and down
      gsap.to(circle, {
        y: "+=100",
        duration: Math.random() * 3 + 3,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });

      // Rotate the circles
      gsap.to(circle, {
        rotation: 360,
        duration: Math.random() * 5 + 5,
        repeat: -1,
        ease: "linear",
      });
    }
  };

  const { name, description, greet }: HeroData = HERO;


  const nameAnimation = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    delay: 500,
  });

  // Hand wave animation
  const handWave = useSpring({
    from: { rotate: 0 },
    to: [{ rotate: -15 }, { rotate: 15 }, { rotate: 0 }],
    loop: true,
    config: { duration: 300 },
  });

  return (
    <section ref={heroRef} id="hero" className="flex min-h-screen flex-wrap items-center px-4">
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
          alt="Person coding at a desk"
        />
      </div>
    </section>
  );
};

export default Hero;
