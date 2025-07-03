
import React from 'react';
import { useTheme } from '../../hooks/useTheme';
import { Button } from '../UI/Button';

export const HeroSection: React.FC = () => {
  const { isDark } = useTheme();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center relative overflow-hidden">
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center relative z-10">
          <div className="animate-fade-in-up">
            <h1 className={`text-4xl md:text-6xl lg:text-7xl font-bold mb-6 ${
              isDark ? 'text-white' : 'text-gray-900'
            } animate-text-gradient`}>
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent animate-pulse">
                Alex Johnson
              </span>
            </h1>
            <p className={`text-xl md:text-2xl lg:text-3xl mb-8 ${
              isDark ? 'text-gray-300' : 'text-gray-600'
            } animate-fade-in-up animation-delay-200`}>
              Frontend Developer specializing in React & Modern Web Technologies
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12 animate-fade-in-up animation-delay-400">
              <Button
                onClick={() => scrollToSection('contact')}
                variant="primary"
                size="lg"
                className="hover:shadow-lg hover:shadow-blue-500/25"
              >
                Get In Touch
              </Button>
              <Button
                onClick={() => scrollToSection('projects')}
                variant="outline"
                size="lg"
                className="hover:shadow-lg hover:shadow-blue-500/25"
              >
                View Work
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-500/10 rounded-full animate-float"></div>
        <div className="absolute top-3/4 right-1/4 w-48 h-48 bg-purple-500/10 rounded-full animate-float-delayed"></div>
        <div className="absolute top-1/2 left-3/4 w-24 h-24 bg-pink-500/10 rotate-45 animate-spin-slow"></div>
      </div>
    </section>
  );
};
