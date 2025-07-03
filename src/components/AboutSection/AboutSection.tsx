
import React from 'react';
import { useTheme } from '../../hooks/useTheme';
import { Skill, Tool, Experience } from '../../types/portfolio';

const technicalSkills: Skill[] = [
  { name: "JavaScript", level: 95, category: 'frontend' },
  { name: "TypeScript", level: 90, category: 'frontend' },
  { name: "React", level: 92, category: 'frontend' },
  { name: "Next.js", level: 88, category: 'frontend' },
  { name: "Vue.js", level: 85, category: 'frontend' },
  { name: "Angular", level: 80, category: 'frontend' },
  { name: "HTML5", level: 98, category: 'frontend' },
  { name: "CSS3", level: 95, category: 'frontend' },
  { name: "Tailwind CSS", level: 93, category: 'frontend' },
  { name: "Sass/SCSS", level: 88, category: 'frontend' },
  { name: "Node.js", level: 85, category: 'backend' },
  { name: "Express.js", level: 82, category: 'backend' },
  { name: "Python", level: 78, category: 'backend' },
  { name: "PHP", level: 75, category: 'backend' },
  { name: "MongoDB", level: 80, category: 'database' },
  { name: "PostgreSQL", level: 82, category: 'database' },
  { name: "MySQL", level: 85, category: 'database' },
  { name: "Firebase", level: 88, category: 'database' },
  { name: "GraphQL", level: 75, category: 'other' },
  { name: "REST APIs", level: 90, category: 'other' },
  { name: "Git", level: 92, category: 'other' },
  { name: "Docker", level: 70, category: 'other' }
];

const tools: Tool[] = [
  { name: "VS Code", category: 'development' },
  { name: "WebStorm", category: 'development' },
  { name: "Chrome DevTools", category: 'development' },
  { name: "Postman", category: 'development' },
  { name: "Figma", category: 'design' },
  { name: "Adobe XD", category: 'design' },
  { name: "Photoshop", category: 'design' },
  { name: "Notion", category: 'productivity' },
  { name: "Slack", category: 'productivity' },
  { name: "Jira", category: 'productivity' }
];

const experience: Experience[] = [
  {
    title: "Senior Frontend Developer",
    company: "Tech Innovations Corp",
    period: "2022 - Present",
    description: [
      "Led development of 5+ large-scale web applications using React and TypeScript",
      "Implemented responsive designs that improved mobile user engagement by 40%",
      "Mentored junior developers and conducted code reviews",
      "Optimized application performance resulting in 30% faster load times"
    ],
    technologies: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Node.js"]
  },
  {
    title: "Frontend Developer",
    company: "Digital Solutions Inc",
    period: "2021 - 2022",
    description: [
      "Developed and maintained multiple client websites and web applications",
      "Collaborated with UI/UX designers to implement pixel-perfect designs",
      "Integrated third-party APIs and payment gateways",
      "Improved website accessibility compliance to WCAG 2.1 standards"
    ],
    technologies: ["React", "Vue.js", "JavaScript", "CSS3", "Bootstrap"]
  },
  {
    title: "Junior Web Developer",
    company: "StartupXYZ",
    period: "2020 - 2021",
    description: [
      "Built responsive web interfaces using HTML, CSS, and JavaScript",
      "Assisted in the development of e-commerce platforms",
      "Participated in agile development processes and daily standups",
      "Gained experience with version control systems and deployment processes"
    ],
    technologies: ["HTML5", "CSS3", "JavaScript", "jQuery", "PHP"]
  }
];

const personalBio = "Passionate full-stack web developer with 3+ years of experience creating innovative, user-centric web applications. Specialized in modern JavaScript frameworks and always eager to learn new technologies.";

export const AboutSection: React.FC = () => {
  const { isDark } = useTheme();

  const skillsByCategory = {
    frontend: technicalSkills.filter(skill => skill.category === 'frontend'),
    backend: technicalSkills.filter(skill => skill.category === 'backend'),
    database: technicalSkills.filter(skill => skill.category === 'database'),
    other: technicalSkills.filter(skill => skill.category === 'other')
  };

  const toolsByCategory = {
    development: tools.filter(tool => tool.category === 'development'),
    design: tools.filter(tool => tool.category === 'design'),
    productivity: tools.filter(tool => tool.category === 'productivity')
  };

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

        {/* Technical Skills Section */}
        <div className="mb-16">
          <h3 className={`text-2xl md:text-3xl font-bold mb-8 text-center ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            Technical Skills
          </h3>
          <div className="grid lg:grid-cols-2 gap-8">
            {Object.entries(skillsByCategory).map(([category, categorySkills]) => (
              <div key={category} className="animate-fade-in-up">
                <h4 className={`text-xl font-semibold mb-4 capitalize ${
                  isDark ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  {category} Skills
                </h4>
                <div className="space-y-4">
                  {categorySkills.map((skill, index) => (
                    <div key={skill.name} className="animate-slide-in-right" style={{ animationDelay: `${index * 0.1}s` }}>
                      <div className="flex justify-between mb-2">
                        <span className={`font-medium ${
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
                      <div className={`w-full bg-gray-200 rounded-full h-2 ${
                        isDark ? 'bg-gray-700' : 'bg-gray-200'
                      } overflow-hidden`}>
                        <div
                          className="bg-gradient-to-r from-red-500 to-pink-600 h-2 rounded-full transition-all duration-1000 ease-out animate-scale-x"
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
            ))}
          </div>
        </div>

        {/* Tools Section */}
        <div className="mb-16">
          <h3 className={`text-2xl md:text-3xl font-bold mb-8 text-center ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            Tools & Technologies
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {Object.entries(toolsByCategory).map(([category, categoryTools]) => (
              <div key={category} className="animate-fade-in-up">
                <h4 className={`text-xl font-semibold mb-4 capitalize ${
                  isDark ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  {category} Tools
                </h4>
                <div className="flex flex-wrap gap-2">
                  {categoryTools.map((tool) => (
                    <span
                      key={tool.name}
                      className={`px-3 py-2 rounded-full text-sm font-medium transition-all duration-200 hover:scale-105 ${
                        isDark 
                          ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' 
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {tool.name}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Experience Section */}
        <div>
          <h3 className={`text-2xl md:text-3xl font-bold mb-8 text-center ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            Professional Experience
          </h3>
          <div className="space-y-8">
            {experience.map((exp, index) => (
              <div key={index} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className={`border-l-4 border-red-600 pl-6 py-6 ${
                  isDark ? 'bg-gray-700/50' : 'bg-gray-50'
                } rounded-r-lg transition-all duration-300 hover:shadow-lg hover:scale-[1.02]`}>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h4 className={`font-bold text-xl mb-1 ${
                        isDark ? 'text-white' : 'text-gray-900'
                      }`}>
                        {exp.title}
                      </h4>
                      <p className="text-red-600 font-semibold text-lg">{exp.company}</p>
                    </div>
                    <p className={`text-sm ${
                      isDark ? 'text-gray-400' : 'text-gray-500'
                    } font-medium`}>
                      {exp.period}
                    </p>
                  </div>
                  
                  <ul className={`space-y-2 mb-4 ${
                    isDark ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    {exp.description.map((desc, descIndex) => (
                      <li key={descIndex} className="flex items-start">
                        <span className="text-red-600 mr-2">•</span>
                        <span>{desc}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs rounded bg-red-100 text-red-700 font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-red-500/5 to-pink-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-pink-500/5 to-red-500/5 rounded-full blur-3xl"></div>
    </section>
  );
};
