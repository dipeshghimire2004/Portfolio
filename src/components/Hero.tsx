import React, { useEffect, useRef } from 'react';
import { HERO } from '../constants';
import hero from '../assets/images/giphy.webp';
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
        // repeat: -1,
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

  gsap.to(".rectangle", { 
    duration: 5,
    x: 600,
    y:-70,
    rotation: 0,
    color: '#8d3dae',
    repeat:2,
    yoyo:true,
    ease:'step(12)'
  });
  


  // const heroRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const timeline = gsap.timeline();

    // Animate the container
    timeline.fromTo(
      heroRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1 }
    );

    // Animate the text
    timeline.fromTo(
      textRef.current,
      { y: 30, opacity: 0},
      { y: 0, opacity: 1, duration: 1, delay: 0.2, color:'#009000' },
      // {color:'#008000'}
    );
  }, []);




  return (
    <section ref={heroRef} id="hero" className="flex min-h-screen flex-wrap items-center px-4">
      <div className="w-full md:w-1/2">
      <div className='flex items-center'>
        <animated.div ref={textRef} style={nameAnimation} className="text-4xl font-bold mb-4 hover:text-5xl hover:duration-500">
          {name}
        </animated.div>
        <div className='rectangle flex items-center '>
          <p className='text-2xl'>:)</p>
        </div>
      </div>
        <div className="font-poppins mb-4">
          {greet}
          <animated.span style={handWave} className="inline-block ml-2 text-4xl">👋🏻</animated.span>
        </div>
        <div className="mb-8">{description}</div>
        
      </div>
      <div className="w-full md:w-1/2 px-4">
        <img
          className="w-full rounded-full px-5 h-auto max-h-96 object-cover"
          src={hero}
          alt="Person coding at a desk"
        />
      </div>
      
    </section>
  );
};

export default Hero;
