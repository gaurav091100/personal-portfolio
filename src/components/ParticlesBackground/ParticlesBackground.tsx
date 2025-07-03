
import React, { useEffect, useRef } from 'react';
import { useTheme } from '../../hooks/useTheme';
import { Particle } from '../../types/portfolio';

export const ParticlesBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const particlesRef = useRef<Particle[]>([]);
  const { isDark } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createParticles = () => {
      const particles: Particle[] = [];
      const particleCount = 50; // More particles for better effect
      
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          id: i,
          x: Math.random() * canvas.width,
          y: canvas.height + Math.random() * 100, // Start from bottom
          size: Math.random() * 4 + 1,
          speedX: (Math.random() - 0.5) * 0.5,
          speedY: -(Math.random() * 2 + 0.5), // Move upward
          opacity: Math.random() * 0.8 + 0.2
        });
      }
      
      particlesRef.current = particles;
    };

    const updateParticles = () => {
      particlesRef.current.forEach(particle => {
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        // Reset particle when it goes off screen
        if (particle.y < -10) {
          particle.y = canvas.height + 10;
          particle.x = Math.random() * canvas.width;
        }
        
        if (particle.x < 0 || particle.x > canvas.width) {
          particle.speedX *= -1;
        }

        particle.x = Math.max(0, Math.min(canvas.width, particle.x));
      });
    };

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particlesRef.current.forEach(particle => {
        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = isDark 
          ? `rgba(239, 68, 68, ${particle.opacity})` // Red particles for dark theme
          : `rgba(59, 130, 246, ${particle.opacity})`; // Blue particles for light theme
        ctx.fill();

        // Add glow effect
        ctx.shadowBlur = 10;
        ctx.shadowColor = isDark ? '#ef4444' : '#3b82f6';
        ctx.fill();
        ctx.shadowBlur = 0;

        // Draw connections between nearby particles
        particlesRef.current.forEach(otherParticle => {
          const distance = Math.sqrt(
            Math.pow(particle.x - otherParticle.x, 2) + 
            Math.pow(particle.y - otherParticle.y, 2)
          );
          
          if (distance < 120) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.strokeStyle = isDark 
              ? `rgba(239, 68, 68, ${0.15 * (1 - distance / 120)})` 
              : `rgba(59, 130, 246, ${0.15 * (1 - distance / 120)})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        });
      });
    };

    const animate = () => {
      updateParticles();
      drawParticles();
      animationRef.current = requestAnimationFrame(animate);
    };

    resizeCanvas();
    createParticles();
    animate();

    const handleResize = () => {
      resizeCanvas();
      createParticles();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isDark]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10 pointer-events-none"
      style={{ background: 'transparent' }}
    />
  );
};
