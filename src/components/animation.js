
import { gsap } from "gsap";

function createCircles() {
  const heroSection = document.getElementById('hero');
  
  for (let i = 0; i < 10; i++) {
    const circle = document.createElement('div');
    circle.classList.add('circle');
    heroSection.appendChild(circle);
    
    const size = Math.random() * 200 + 50;
    gsap.set(circle, {
      width: size,
      height: size,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
    });
    
    gsap.to(circle, {
      y: '+=100',
      duration: Math.random() * 3 + 3,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut"
    });
    
    gsap.to(circle, {
      rotation: 360,
      duration: Math.random() * 5 + 5,
      repeat: -1,
      ease: "linear"
    });
  }
}

createCircles();
