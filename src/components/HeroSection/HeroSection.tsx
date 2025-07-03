
import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../hooks/useTheme';
import { Button } from '../ui/button';
import { TypewriterEffect } from '../TypewriterEffect/TypewriterEffect';

export const HeroSection: React.FC = () => {
  const { isDark } = useTheme();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section 
      id="home" 
      className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center relative overflow-hidden"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2072&q=80')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-gray-900/70 to-blue-800/80"></div>
      
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.p 
              variants={itemVariants}
              className="text-xl text-blue-200 mb-4 font-medium"
            >
              Hello, my name is
            </motion.p>
            
            <motion.h1 
              variants={itemVariants}
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-white"
            >
              Gaurav Suthar
            </motion.h1>
            
            <motion.div variants={itemVariants} className="mb-8">
              <p className="text-xl md:text-2xl mb-2 text-blue-100">
                And I'm a
              </p>
              <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent">
                <TypewriterEffect
                  texts={[
                    'Web Developer',
                    'Frontend Expert',
                    'React Specialist',
                    'UI/UX Designer'
                  ]}
                  typingSpeed={150}
                  deletingSpeed={75}
                  pauseDuration={2500}
                />
              </h2>
            </motion.div>
            
            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  onClick={() => scrollToSection('contact')}
                  className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                  size="lg"
                >
                  Download Resume
                </Button>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  onClick={() => scrollToSection('projects')}
                  variant="outline"
                  className="border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-4 text-lg font-semibold backdrop-blur-sm bg-white/10 transition-all duration-300"
                  size="lg"
                >
                  View My Work
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right content - Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <motion.div
                animate={{ 
                  rotate: 360,
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                  scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                }}
                className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 opacity-30 blur-md"
              />
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative w-80 h-80 rounded-full border-4 border-blue-500 overflow-hidden shadow-2xl bg-gradient-to-br from-blue-600/20 to-transparent backdrop-blur-sm"
              >
                <img
                  src="/lovable-uploads/d362315d-aa03-4829-804c-ed1f58b6e2fc.png"
                  alt="Gaurav Suthar"
                  className="w-full h-full object-cover"
                />
              </motion.div>
              
              {/* Floating animation rings */}
              <motion.div
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.6, 0.3]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute inset-0 rounded-full border-2 border-blue-400/50"
              />
              
              <motion.div
                animate={{ 
                  scale: [1.2, 1.4, 1.2],
                  opacity: [0.2, 0.4, 0.2]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5
                }}
                className="absolute inset-0 rounded-full border border-blue-300/30"
              />
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Floating gradient orbs */}
      <motion.div
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl"
      />
      
      <motion.div
        animate={{
          x: [0, -80, 0],
          y: [0, 60, 0],
          opacity: [0.2, 0.5, 0.2]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
        className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-blue-600/20 to-cyan-500/20 rounded-full blur-3xl"
      />
    </section>
  );
};
