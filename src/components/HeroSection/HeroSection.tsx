
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { useTheme } from '../../hooks/useTheme';
import { TypewriterEffect } from '../TypewriterEffect/TypewriterEffect';

export const HeroSection: React.FC = () => {
  const { isDark } = useTheme();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
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
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const buttonVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const socialVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(135deg, ${isDark ? 'rgba(17, 24, 39, 0.95)' : 'rgba(248, 250, 252, 0.95)'}, ${isDark ? 'rgba(30, 41, 59, 0.95)' : 'rgba(219, 234, 254, 0.95)'}), url('https://images.unsplash.com/photo-1593720213428-28a5b9e94613?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZyb250ZW5kJTIwZGV2ZWxvcGVyfGVufDB8fDB8fHww')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-transparent to-purple-600/20" />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full opacity-20"
            style={{
              background: `linear-gradient(45deg, #3B82F6, #1D4ED8)`,
              width: `${Math.random() * 300 + 100}px`,
              height: `${Math.random() * 300 + 100}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="space-y-8"
        >
          {/* Main Heading */}
          <motion.div variants={itemVariants} className="space-y-4">
            <motion.h1 
              className={`text-5xl md:text-7xl lg:text-8xl font-bold leading-tight ${isDark ? 'text-white' : 'text-gray-900'}`}
              style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}
            >
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 bg-clip-text text-transparent">
                Gaurav Suthar
              </span>
            </motion.h1>
            
            <div className={`text-2xl md:text-4xl lg:text-5xl font-light ${isDark ? 'text-gray-200' : 'text-gray-700'}`}>
              <TypewriterEffect
                texts={[
                  "Frontend Engineer",
                  "React Developer",
                  "UI/UX Enthusiast",
                  "MERN Stack Developer"
                ]}
                typingSpeed={100}
                deletingSpeed={50}
                pauseDuration={2000}
                className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent font-semibold"
              />
            </div>
          </motion.div>

          {/* Description */}
          <motion.p 
            variants={itemVariants}
            className={`text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-600'}`}
            style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.2)' }}
          >
            Passionate about creating beautiful, responsive web applications with modern technologies. 
            Specialized in React, TypeScript, and cutting-edge frontend frameworks.
          </motion.p>

          {/* Action Buttons */}
          <motion.div 
            variants={buttonVariants}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <motion.button
              onClick={() => scrollToSection('contact')}
              whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(59, 130, 246, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300"
            >
              Get In Touch
            </motion.button>
            
            <motion.button
              onClick={() => scrollToSection('projects')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`border-2 border-blue-600 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 backdrop-blur-sm ${
                isDark 
                  ? 'text-blue-400 hover:bg-blue-600 hover:text-white' 
                  : 'text-blue-600 hover:bg-blue-600 hover:text-white'
              }`}
            >
              View My Work
            </motion.button>
          </motion.div>

          {/* Social Links */}
          <motion.div 
            variants={socialVariants}
            className="flex justify-center space-x-6"
          >
            {[
              { icon: Github, href: "https://github.com/gaurav091100", label: "GitHub" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/gaurav-s-307578330", label: "LinkedIn" },
              { icon: Mail, href: "gaurav091100@gmail.com", label: "Email" }
            ].map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={label.toLocaleLowerCase() === "email" ? `mailto:${href}` : href}
                target='_blank'
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.9 }}
                className={`p-4 rounded-full backdrop-blur-sm transition-all duration-300 ${
                  isDark 
                    ? 'bg-gray-800/50 text-gray-300 hover:bg-blue-600 hover:text-white' 
                    : 'bg-white/50 text-gray-600 hover:bg-blue-600 hover:text-white'
                } shadow-lg`}
                aria-label={label}
              >
                <Icon size={24} />
              </motion.a>
            ))}
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div 
            variants={itemVariants}
            className="absolute -bottom-20 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className={`p-3 rounded-full backdrop-blur-sm ${
                isDark ? 'bg-gray-800/50 text-gray-300' : 'bg-white/50 text-gray-600'
              } shadow-lg cursor-pointer`}
              onClick={() => scrollToSection('about')}
            >
              <ArrowDown size={24} />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
