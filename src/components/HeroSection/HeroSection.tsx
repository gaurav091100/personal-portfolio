
import React from 'react';
import { useTheme } from '../../hooks/useTheme';
import { Button } from '../ui/button';

export const HeroSection: React.FC = () => {
  const { isDark } = useTheme();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
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
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50"></div>
      
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="animate-fade-in-up">
            <p className="text-lg text-white/90 mb-4">Hello, my name is</p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-white">
              Gaurav Suthar
            </h1>
            <p className="text-xl md:text-2xl mb-2 text-white/90">
              And I'm a
            </p>
            <h2 className="text-3xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-red-500 to-pink-600 bg-clip-text text-transparent">
              Web Developer
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button
                onClick={() => scrollToSection('contact')}
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 text-lg"
                size="lg"
              >
                Resume
              </Button>
              <Button
                onClick={() => scrollToSection('projects')}
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-black px-8 py-3 text-lg"
                size="lg"
              >
                View Work
              </Button>
            </div>
          </div>

          {/* Right content - Profile Image */}
          <div className="flex justify-center lg:justify-end animate-fade-in-up animation-delay-400">
            <div className="relative">
              <div className="w-80 h-80 rounded-full border-4 border-red-500 overflow-hidden shadow-2xl">
                <img
                  src="/lovable-uploads/d362315d-aa03-4829-804c-ed1f58b6e2fc.png"
                  alt="Gaurav Suthar"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating animation ring */}
              <div className="absolute inset-0 rounded-full border-2 border-red-500/30 animate-ping"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
