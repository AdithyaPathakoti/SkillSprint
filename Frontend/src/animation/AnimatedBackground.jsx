import React, { useEffect, useRef } from 'react';
import './AnimatedBackground.css';

const AnimatedBackground = () => {
  const containerRef = useRef(null);
  const particlesRef = useRef([]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const colors = [
      'rgba(67, 97, 238, 0.6)',
      'rgba(247, 37, 133, 0.6)',
      'rgba(76, 201, 240, 0.6)',
      'rgba(248, 249, 250, 0.6)'
    ];

    const createParticles = () => {
      // Clear previous particles
      particlesRef.current.forEach(p => p.remove());
      particlesRef.current = [];

      const particleCount = Math.floor(window.innerWidth / 20);

      for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';

        const size = Math.random() * 12 + 3;
        const posX = Math.random() * window.innerWidth;
        const posY = Math.random() * window.innerHeight;
        const duration = Math.random() * 20 + 10;
        const opacity = Math.random() * 0.5 + 0.1;
        const color = colors[Math.floor(Math.random() * colors.length)];
        const shape = Math.random() > 0.7 ? '0' : '50%';
        const zIndex = Math.floor(Math.random() * 3);

        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${posX}px`;
        particle.style.top = `${posY}px`;
        particle.style.animationDuration = `${duration}s`;
        particle.style.opacity = opacity;
        particle.style.background = color;
        particle.style.borderRadius = shape;
        particle.style.zIndex = zIndex;

        particle.style.setProperty('--travel-x', `${Math.random() * 600 - 400}px`);
        particle.style.setProperty('--travel-y', `${Math.random() * 600 - 400}px`);
        particle.style.setProperty('--rotate', `${Math.random() * 360}deg`);

        container.appendChild(particle);
        particlesRef.current.push(particle);
      }
    };

    // Initialize particles
    createParticles();

    const handleResize = () => {
      createParticles();
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      particlesRef.current.forEach(p => p.remove());
      particlesRef.current = [];
    };
  }, []);

  return <div ref={containerRef} className="particles-container"></div>;
};

export default AnimatedBackground;
