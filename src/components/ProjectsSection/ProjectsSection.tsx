
import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { useTheme } from '../../hooks/useTheme';
import { Project, ProjectCategory } from '../../types/portfolio';

const projects: Project[] = [
  {
    id: 1,
    title: "Frame Fry Studios",
    category: "Freelance",
    description: "Developed an admin and client-facing portfolio website for a video editing agency. The admin panel enables management of job postings, work submissions, video configuration settings, and handling of user queries.",
    technologies: ["React", "TypeScript", "shadCN", "Tailwind CSS"],
    image: "/public/assets/project-images/framefry-studios-cover.png",
    github: "",
    demo: "https://dev.framefry.com/"
  },
  {
    id: 2,
    title: "Manasa Foundation",
    category: "Freelance",
    description: "Developed a full-stack NGO website using the MERN stack, featuring PhonePe payment gateway integration, a responsive layout, and a modern user interface.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "typescript", "shadCN", "Tailwind CSS", "Phonepe"],
    image: "/public/assets/project-images/manasa-foundation-cover.png",
    github: "",
    demo: "https://manasa-foundation-xi.vercel.app/"
  },
  {
    id: 3,
    title: "Girman Technologies",
    category: "Professional Project",
    description: "Implemented a dynamic blog feature by integrating the Frappe API and contributed to overall website enhancements, improving both functionality and user experience.",
    technologies: ["Next.js","typescript", "shadCN", "Tailwind CSS"],
    image: "/public/assets/project-images/girman-technologies-cover.png",
    github: "",
    demo: "https://www.girmantech.com/blog"
  },
  {
    id: 4,
    title: "Bookmyjet",
    category: "Professional Project",
    description: "Designed and developed the BookMyJet platform with a modern UI and responsive layout, integrating multiple APIs to support booking functionality and real-time data display.",
    technologies: ["React", "typescript", "Material UI", "SCSS", "CSS3","Google Maps"],
    image: "/public/assets/project-images/bookmyjet-cover.png",
    github: "",
    demo: "https://bookmyjet.co.in/"
  },
  {
    id: 5,
    title: "Where U Elevate",
    category: "Professional Project",
    description: "Contributed to the WhereUElevate platform by developing user profiles, blogs, job listings, admin portal, and the hackathons feature to enable event creation, participation, and management.",
    technologies: ["React","javascript", "typescript", "Material UI", "SCSS", "CSS3"],
    image: "/public/assets/project-images/where-u-elevate-cover.png",
    github: "",
    demo: "https://whereuelevate.com/"
  },
  {
    id: 6,
    title: "Fashion Store",
    category: "Personal Project",
    description: "Developed a full-stack e-commerce platform featuring product browsing, ratings, cart and checkout functionality, along with an admin portal for managing products, and inventory.",
    technologies: ["React", "Redux", "typescript", "Node.js", "Express", "MongoDB","Stripe", "Chakra UI", "CSS3"],
    image: "/public/assets/project-images/fashion-store-cover.png",
    github: "https://github.com/gaurav091100/fashion-store",
    demo: "https://fashiion-store.vercel.app/"
  },
  {
    id: 7,
    title: "Netflix Clone",
    category: "Personal Project",
    description: "Designed and developed a responsive Netflix clone with dynamic movie sections, and a modern UI using React, TypeScript, and Tailwind CSS.",
    technologies: ["React", "typescript", "tailwindcss", "shadCN", "tmdbAPI"],
    image: "/public/assets/project-images/netflix-clone-cover.png",
    github: "https://github.com/gaurav091100/netflix_clone",
    demo: "https://netflix-clone-beta-blue.vercel.app/"
  },
];

const categories = ["All", "Personal Project", "Professional Project", "Freelance"];

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
            Here are some of my recent projects across personal work, Professional Projects, and freelance work.
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
                    {
                      project.demo &&  <a
                      href={project.demo}
                      target='_blank'
                      className="p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all duration-200 hover:scale-110"
                    >
                      <ExternalLink size={20} />
                    </a>
                    }
                    
                    {
                      project.github && <a
                      href={project.github}
                      target='_blank'
                      className="p-3 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition-all duration-200 hover:scale-110"
                    >
                      <Github size={20} />
                    </a>
                    }
                    
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
