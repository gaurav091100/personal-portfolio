import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../hooks/useTheme';
import { Code, Database, Palette, Monitor, Smartphone, Globe } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const { isDark } = useTheme();

  const skills = [
    // Frontend
    { name: "JavaScript", level: 95, category: 'frontend' },
    { name: "TypeScript", level: 90, category: 'frontend' },
    { name: "React", level: 95, category: 'frontend' },
    { name: "Next.js", level: 85, category: 'frontend' },
    { name: "Vue.js", level: 80, category: 'frontend' },
    { name: "Angular", level: 75, category: 'frontend' },
    { name: "HTML5", level: 98, category: 'frontend' },
    { name: "CSS3", level: 95, category: 'frontend' },
    { name: "Sass/SCSS", level: 90, category: 'frontend' },
    { name: "Tailwind CSS", level: 95, category: 'frontend' },
    
    // Backend
    { name: "Node.js", level: 85, category: 'backend' },
    { name: "Express.js", level: 85, category: 'backend' },
    { name: "Python", level: 80, category: 'backend' },
    { name: "Django", level: 75, category: 'backend' },
    { name: "PHP", level: 70, category: 'backend' },
    { name: "Laravel", level: 70, category: 'backend' },
    
    // Database
    { name: "MongoDB", level: 85, category: 'database' },
    { name: "MySQL", level: 80, category: 'database' },
    { name: "PostgreSQL", level: 80, category: 'database' },
    { name: "Firebase", level: 85, category: 'database' },
    { name: "Supabase", level: 80, category: 'database' },
    
    // Other
    { name: "Git", level: 90, category: 'other' },
    { name: "Docker", level: 75, category: 'other' },
    { name: "AWS", level: 70, category: 'other' },
    { name: "GraphQL", level: 75, category: 'other' }
  ];

  const tools = [
    { name: "VS Code", icon: "💻", category: 'development' },
    { name: "WebStorm", icon: "🚀", category: 'development' },
    { name: "Figma", icon: "🎨", category: 'design' },
    { name: "Adobe XD", icon: "✨", category: 'design' },
    { name: "Photoshop", icon: "🖼️", category: 'design' },
    { name: "Postman", icon: "📡", category: 'development' },
    { name: "Chrome DevTools", icon: "🔧", category: 'development' },
    { name: "Notion", icon: "📝", category: 'productivity' },
    { name: "Slack", icon: "💬", category: 'productivity' },
    { name: "Trello", icon: "📋", category: 'productivity' }
  ];

  const experience = [
    {
      title: "Senior Frontend Developer",
      company: "TechCorp Solutions",
      period: "2023 - Present",
      description: [
        "Led development of modern web applications using React and TypeScript",
        "Implemented responsive designs and optimized performance for 50+ components",
        "Collaborated with cross-functional teams to deliver high-quality products",
        "Mentored junior developers and conducted code reviews"
      ],
      technologies: ["React", "TypeScript", "Next.js", "Tailwind CSS", "GraphQL"]
    },
    {
      title: "Frontend Developer",
      company: "Digital Innovations Ltd",
      period: "2021 - 2023",
      description: [
        "Developed and maintained multiple client-facing web applications",
        "Integrated RESTful APIs and implemented state management solutions",
        "Optimized applications for maximum speed and scalability",
        "Participated in agile development processes and sprint planning"
      ],
      technologies: ["React", "Vue.js", "JavaScript", "SASS", "Node.js"]
    },
    {
      title: "Junior Web Developer",
      company: "StartupXYZ",
      period: "2020 - 2021",
      description: [
        "Built responsive websites and web applications from scratch",
        "Collaborated with designers to implement pixel-perfect UI components",
        "Learned and implemented modern frontend frameworks and tools",
        "Contributed to codebase improvements and best practices"
      ],
      technologies: ["HTML", "CSS", "JavaScript", "React", "MySQL"]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  };

  const skillCategories = [
    { key: 'frontend', title: 'Frontend', icon: Monitor, color: 'from-blue-600 to-blue-700' },
    { key: 'backend', title: 'Backend', icon: Database, color: 'from-green-600 to-green-700' },
    { key: 'database', title: 'Database', icon: Database, color: 'from-purple-600 to-purple-700' },
    { key: 'other', title: 'Other', icon: Globe, color: 'from-orange-600 to-orange-700' }
  ];

  return (
    <section id="about" className={`py-20 px-4 sm:px-6 lg:px-8 ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent"
          >
            About Me
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className={`text-xl ${isDark ? 'text-gray-300' : 'text-gray-600'} max-w-3xl mx-auto leading-relaxed`}
          >
            Passionate full-stack developer with 4+ years of experience creating beautiful, responsive web applications. 
            I specialize in modern JavaScript frameworks and have a keen eye for user experience and clean code architecture.
          </motion.p>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="mb-20"
        >
          <motion.h3 
            variants={itemVariants}
            className={`text-3xl font-bold mb-12 text-center ${isDark ? 'text-white' : 'text-gray-900'}`}
          >
            Technical Skills
          </motion.h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillCategories.map((category) => (
              <motion.div
                key={category.key}
                variants={itemVariants}
                className={`p-6 rounded-xl ${isDark ? 'bg-gray-800' : 'bg-white'} shadow-lg hover:shadow-xl transition-all duration-300`}
              >
                <div className="flex items-center mb-6">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${category.color} mr-3`}>
                    <category.icon className="text-white" size={24} />
                  </div>
                  <h4 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    {category.title}
                  </h4>
                </div>
                
                <div className="space-y-4">
                  {skills
                    .filter(skill => skill.category === category.key)
                    .map((skill, index) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="relative"
                      >
                        <div className="flex justify-between mb-2">
                          <span className={`font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                            {skill.name}
                          </span>
                          <span className="text-blue-600 font-semibold">
                            {skill.level}%
                          </span>
                        </div>
                        <div className={`w-full bg-gray-200 rounded-full h-2 ${isDark ? 'bg-gray-700' : 'bg-gray-200'}`}>
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{ duration: 1, delay: index * 0.1 }}
                            className="bg-gradient-to-r from-blue-600 to-blue-700 h-2 rounded-full"
                          />
                        </div>
                      </motion.div>
                    ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Tools Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="mb-20"
        >
          <motion.h3 
            variants={itemVariants}
            className={`text-3xl font-bold mb-12 text-center ${isDark ? 'text-white' : 'text-gray-900'}`}
          >
            Tools & Technologies
          </motion.h3>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {tools.map((tool, index) => (
              <motion.div
                key={tool.name}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                className={`p-4 rounded-xl ${isDark ? 'bg-gray-800' : 'bg-white'} shadow-lg hover:shadow-xl transition-all duration-300 text-center cursor-pointer`}
              >
                <div className="text-3xl mb-2">{tool.icon}</div>
                <p className={`font-medium ${isDark ? 'text-gray-300' : 'text-gray-800'}`}>
                  {tool.name}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Experience Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.h3 
            variants={itemVariants}
            className={`text-3xl font-bold mb-12 text-center ${isDark ? 'text-white' : 'text-gray-900'}`}
          >
            Professional Experience
          </motion.h3>
          
          <div className="space-y-8">
            {experience.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className={`p-8 rounded-xl ${isDark ? 'bg-gray-800' : 'bg-white'} shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-blue-600`}
              >
                <div className="grid md:grid-cols-4 gap-6">
                  <div className="md:col-span-3">
                    <h4 className={`text-2xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                      {exp.title}
                    </h4>
                    <p className="text-blue-600 font-semibold text-lg mb-2">{exp.company}</p>
                    <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'} mb-4`}>
                      {exp.period}
                    </p>
                    <ul className={`space-y-2 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                      {exp.description.map((desc, descIndex) => (
                        <li key={descIndex} className="flex items-start">
                          <span className="text-blue-600 mr-2 mt-1">•</span>
                          {desc}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="md:col-span-1">
                    <h5 className={`font-semibold mb-3 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                      Technologies
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs px-3 py-1 rounded-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
