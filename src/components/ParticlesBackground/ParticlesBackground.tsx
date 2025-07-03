
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../hooks/useTheme';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
  shape: 'circle' | 'triangle' | 'rectangle';
  rotation: number;
  rotationSpeed: number;
}

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
      const particleCount = 80;
      
      for (let i = 0; i < particleCount; i++) {
        const shapes: Particle['shape'][] = ['circle', 'triangle', 'rectangle'];
        particles.push({
          id: i,
          x: Math.random() * canvas.width,
          y: canvas.height + Math.random() * 200,
          size: Math.random() * 6 + 2,
          speedX: (Math.random() - 0.5) * 0.8,
          speedY: -(Math.random() * 1.5 + 0.3),
          opacity: Math.random() * 0.7 + 0.3,
          shape: shapes[Math.floor(Math.random() * shapes.length)],
          rotation: Math.random() * 360,
          rotationSpeed: (Math.random() - 0.5) * 2
        });
      }
      
      particlesRef.current = particles;
    };

    const updateParticles = () => {
      particlesRef.current.forEach(particle => {
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        particle.rotation += particle.rotationSpeed;

        if (particle.y < -20) {
          particle.y = canvas.height + 20;
          particle.x = Math.random() * canvas.width;
        }
        
        if (particle.x < -20) {
          particle.x = canvas.width + 20;
        } else if (particle.x > canvas.width + 20) {
          particle.x = -20;
        }
      });
    };

    const drawShape = (particle: Particle) => {
      ctx.save();
      ctx.translate(particle.x, particle.y);
      ctx.rotate((particle.rotation * Math.PI) / 180);
      
      const colors = isDark 
        ? [`rgba(59, 130, 246, ${particle.opacity})`, `rgba(99, 102, 241, ${particle.opacity})`, `rgba(139, 92, 246, ${particle.opacity})`]
        : [`rgba(59, 130, 246, ${particle.opacity})`, `rgba(37, 99, 235, ${particle.opacity})`, `rgba(29, 78, 216, ${particle.opacity})`];
      
      const color = colors[Math.floor(Math.random() * colors.length)];
      ctx.fillStyle = color;
      
      switch (particle.shape) {
        case 'circle':
          ctx.beginPath();
          ctx.arc(0, 0, particle.size, 0, Math.PI * 2);
          ctx.fill();
          break;
          
        case 'triangle':
          ctx.beginPath();
          ctx.moveTo(0, -particle.size);
          ctx.lineTo(-particle.size, particle.size);
          ctx.lineTo(particle.size, particle.size);
          ctx.closePath();
          ctx.fill();
          break;
          
        case 'rectangle':
          ctx.fillRect(-particle.size/2, -particle.size/2, particle.size, particle.size);
          break;
      }
      
      ctx.restore();
    };

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particlesRef.current.forEach(particle => {
        drawShape(particle);
        
        // Draw connections between nearby particles
        particlesRef.current.forEach(otherParticle => {
          const distance = Math.sqrt(
            Math.pow(particle.x - otherParticle.x, 2) + 
            Math.pow(particle.y - otherParticle.y, 2)
          );
          
          if (distance < 150 && distance > 0) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.strokeStyle = isDark 
              ? `rgba(59, 130, 246, ${0.1 * (1 - distance / 150)})` 
              : `rgba(59, 130, 246, ${0.15 * (1 - distance / 150)})`;
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
    <>
      <canvas
        ref={canvasRef}
        className="fixed inset-0 -z-10 pointer-events-none"
        style={{ background: 'transparent' }}
      />
      
      {/* Additional floating elements */}
      <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-blue-500/20 rounded-full"
            animate={{
              x: [0, 100, 0],
              y: [0, -100, 0],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              delay: i * 0.5,
            }}
            style={{
              left: `${10 + i * 15}%`,
              top: `${20 + i * 10}%`,
            }}
          />
        ))}
      </div>
    </>
  );
};
