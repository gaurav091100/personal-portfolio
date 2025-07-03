
import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { useTheme } from '../../hooks/useTheme';
import { Project, ProjectCategory } from '../../types/portfolio';

const projects: Project[] = [
  {
    id: 1,
    title: "E-commerce Dashboard",
    category: "Company Project",
    description: "Built a comprehensive admin dashboard for managing products, orders, and analytics using React and Chart.js.",
    technologies: ["React", "TypeScript", "Chart.js", "Tailwind CSS"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
    github: "#",
    demo: "#"
  },
  {
    id: 2,
    title: "Task Management App",
    category: "Personal Project",
    description: "A full-stack task management application with real-time updates and team collaboration features.",
    technologies: ["React", "Node.js", "Socket.io", "MongoDB"],
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop",
    github: "#",
    demo: "#"
  },
  {
    id: 3,
    title: "Restaurant Landing Page",
    category: "Freelance",
    description: "Designed and developed a modern, responsive landing page for a high-end restaurant with smooth animations.",
    technologies: ["HTML", "CSS", "JavaScript", "GSAP"],
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop",
    github: "#",
    demo: "#"
  }
];

const categories = ["All", "Personal Project", "Company Project", "Freelance"];

export const ProjectsSection: React.FC = () => {
  const { isDark } = useTheme();
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section id="projects" className={`py-20 px-4 sm:px-6 lg:px-8 ${
      isDark ? 'bg-gray-900' : 'bg-gray-50'
    } relative overflow-hidden`}>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-6 ${
            isDark ? 'text-white' : 'text-gray-900'
          } animate-fade-in-up`}>
            Featured Projects
          </h2>
          <p className={`text-lg md:text-xl ${
            isDark ? 'text-gray-300' : 'text-gray-600'
          } max-w-3xl mx-auto animate-fade-in-up animation-delay-200`}>
            Here are some of my recent projects across personal work, company projects, and freelance work.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center mb-12 gap-3 animate-fade-in-up animation-delay-400">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/25'
                  : isDark
                  ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`group rounded-2xl overflow-hidden shadow-lg transition-all duration-500 hover:shadow-2xl hover:scale-105 ${
                isDark ? 'bg-gray-800' : 'bg-white'
              } animate-fade-in-up hover:animate-pulse-glow`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex space-x-4">
                    <a
                      href={project.demo}
                      className="p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all duration-200 hover:scale-110"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.github}
                      className="p-3 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition-all duration-200 hover:scale-110"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm px-3 py-1 bg-blue-100 text-blue-600 rounded-full font-medium">
                    {project.category}
                  </span>
                </div>
                <h3 className={`text-xl font-bold mb-3 ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>
                  {project.title}
                </h3>
                <p className={`text-sm mb-4 leading-relaxed ${
                  isDark ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className={`text-xs px-3 py-1 rounded-full ${
                        isDark ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-600'
                      }`}
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
    </section>
  );
};
