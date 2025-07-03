
import React from 'react';
import { ErrorBoundary } from '../ErrorBoundary/ErrorBoundary';
import { ParticlesBackground } from '../ParticlesBackground/ParticlesBackground';
import { Navigation } from '../Navigation/Navigation';
import { HeroSection } from '../HeroSection/HeroSection';
import { AboutSection } from '../AboutSection/AboutSection';
import { ProjectsSection } from '../ProjectsSection/ProjectsSection';
import { ContactSection } from '../ContactSection/ContactSection';
import { Footer } from '../Footer/Footer';
import { useTheme } from '../../hooks/useTheme';
import { ThemeProvider } from '../../contexts/ThemeContext';

const PortfolioContent: React.FC = () => {
  const { isDark } = useTheme();

  return (
    <div className={`min-h-screen transition-colors duration-500 ${isDark ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
      <ParticlesBackground />
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

const Portfolio: React.FC = () => {
  return (
    <ErrorBoundary>
      <ThemeProvider>
        <PortfolioContent />
      </ThemeProvider>
    </ErrorBoundary>
  );
};

export default Portfolio;
