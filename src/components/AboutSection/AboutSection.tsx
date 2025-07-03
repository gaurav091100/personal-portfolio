
import React from 'react';
import { useTheme } from '../../hooks/useTheme';
import { Skill, Experience } from '../../types/portfolio';

const skills: Skill[] = [
  { name: "JavaScript", level: 90 },
  { name: "React", level: 85 },
  { name: "TypeScript", level: 80 },
  { name: "Tailwind CSS", level: 90 },
  { name: "Node.js", level: 70 },
  { name: "Git", level: 85 }
];

const experience: Experience[] = [
  {
    title: "Frontend Developer",
    company: "Tech Innovations Inc.",
    period: "2023 - Present",
    description: "Developed and maintained multiple web applications using React and TypeScript."
  },
  {
    title: "Junior Frontend Developer",
    company: "StartupXYZ",
    period: "2022 - 2023",
    description: "Collaborated with design team to implement responsive UI components and optimize application performance."
  }
];

const personalBio = "Passionate frontend developer with 2 years of experience creating beautiful, responsive web applications. Specialized in React, TypeScript, and modern CSS frameworks.";

export const AboutSection: React.FC = () => {
  const { isDark } = useTheme();

  return (
    <section id="about" className={`py-20 px-4 sm:px-6 lg:px-8 ${
      isDark ? 'bg-gray-800' : 'bg-white'
    } relative overflow-hidden`}>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-6 ${
            isDark ? 'text-white' : 'text-gray-900'
          } animate-fade-in-up`}>
            About Me
          </h2>
          <p className={`text-lg md:text-xl ${
            isDark ? 'text-gray-300' : 'text-gray-600'
          } max-w-3xl mx-auto animate-fade-in-up animation-delay-200`}>
            {personalBio}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Skills */}
          <div className="animate-slide-in-left">
            <h3 className={`text-2xl md:text-3xl font-bold mb-8 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              Skills & Technologies
            </h3>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={skill.name} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="flex justify-between mb-3">
                    <span className={`font-semibold text-lg ${
                      isDark ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      {skill.name}
                    </span>
                    <span className={`text-sm ${
                      isDark ? 'text-gray-400' : 'text-gray-500'
                    }`}>
                      {skill.level}%
                    </span>
                  </div>
                  <div className={`w-full bg-gray-200 rounded-full h-3 ${
                    isDark ? 'bg-gray-700' : 'bg-gray-200'
                  } overflow-hidden`}>
                    <div
                      className="bg-gradient-to-r from-blue-500 to-purple-600 h-3 rounded-full transition-all duration-1000 ease-out animate-scale-x"
                      style={{ 
                        width: `${skill.level}%`,
                        animationDelay: `${index * 0.2}s`
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div className="animate-slide-in-right">
            <h3 className={`text-2xl md:text-3xl font-bold mb-8 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              Experience
            </h3>
            <div className="space-y-8">
              {experience.map((exp, index) => (
                <div key={index} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.2}s` }}>
                  <div className={`border-l-4 border-blue-600 pl-6 py-4 ${
                    isDark ? 'bg-gray-700/50' : 'bg-gray-50'
                  } rounded-r-lg transition-all duration-300 hover:shadow-lg hover:scale-105`}>
                    <h4 className={`font-bold text-xl mb-2 ${
                      isDark ? 'text-white' : 'text-gray-900'
                    }`}>
                      {exp.title}
                    </h4>
                    <p className="text-blue-600 font-semibold text-lg mb-1">{exp.company}</p>
                    <p className={`text-sm ${
                      isDark ? 'text-gray-400' : 'text-gray-500'
                    } mb-3`}>
                      {exp.period}
                    </p>
                    <p className={`${
                      isDark ? 'text-gray-300' : 'text-gray-600'
                    } leading-relaxed`}>
                      {exp.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-pink-500/5 to-blue-500/5 rounded-full blur-3xl"></div>
    </section>
  );
};
