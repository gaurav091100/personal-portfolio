
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, Github, Calendar, Users, Code } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

interface ProjectDetail {
  id: number;
  title: string;
  category: string;
  description: string;
  longDescription: string;
  technologies: string[];
  features: string[];
  challenges: string[];
  solutions: string[];
  images: string[];
  github: string;
  demo: string;
  duration: string;
  teamSize: string;
  role: string;
}

const ProjectDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { isDark } = useTheme();

  // Mock project data - in a real app, this would come from an API or database
  const projects: ProjectDetail[] = [
    {
      id: 1,
      title: "E-commerce Dashboard",
      category: "Professional Project",
      description: "Comprehensive admin dashboard for managing products, orders, and analytics",
      longDescription: "A full-featured e-commerce dashboard built for a major retail client. The platform handles over 10,000 products and processes 500+ orders daily. Features include real-time analytics, inventory management, customer support tools, and automated reporting systems.",
      technologies: ["React", "TypeScript", "Chart.js", "Tailwind CSS", "Node.js", "PostgreSQL", "Redis", "Docker"],
      features: [
        "Real-time order tracking and management",
        "Advanced analytics and reporting dashboard",
        "Inventory management with low-stock alerts",
        "Customer support ticketing system",
        "Multi-role user management",
        "Automated email notifications",
        "Export/Import functionality for bulk operations",
        "Mobile-responsive design",
        "Integration with payment gateways",
        "Advanced search and filtering"
      ],
      challenges: [
        "Handling large datasets with 10,000+ products",
        "Real-time updates across multiple user sessions",
        "Complex role-based access control",
        "Performance optimization for large charts",
        "Integration with legacy systems"
      ],
      solutions: [
        "Implemented virtual scrolling for large product lists",
        "Used WebSocket connections for real-time updates",
        "Built flexible RBAC system with granular permissions",
        "Optimized chart rendering with data virtualization",
        "Created API adapters for seamless legacy integration"
      ],
      images: [
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1590479773265-7464e5d48118?w=800&h=600&fit=crop"
      ],
      github: "#",
      demo: "#",
      duration: "6 months",
      teamSize: "5 developers",
      role: "Lead Frontend Developer"
    },
    // Add more projects here...
  ];

  const project = projects.find(p => p.id === parseInt(id || '0'));

  if (!project) {
    return (
      <div className={`min-h-screen flex items-center justify-center ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`}>
        <div className="text-center">
          <h1 className={`text-4xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Project Not Found
          </h1>
          <button
            onClick={() => navigate('/')}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Go Back Home
          </button>
        </div>
      </div>
    );
  }

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

  return (
    <div className={`min-h-screen ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`}>
      {/* Header */}
      <header className={`sticky top-0 z-50 ${isDark ? 'bg-gray-900/95' : 'bg-white/95'} backdrop-blur-md border-b ${isDark ? 'border-gray-700' : 'border-gray-200'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <button
              onClick={() => navigate('/')}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
                isDark ? 'text-gray-300 hover:text-white hover:bg-gray-800' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
              }`}
            >
              <ArrowLeft size={20} />
              <span>Back to Portfolio</span>
            </button>
            
            <div className="flex space-x-4">
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <ExternalLink size={16} />
                <span>Live Demo</span>
              </a>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
                  isDark ? 'bg-gray-800 text-gray-300 hover:bg-gray-700' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                <Github size={16} />
                <span>Source Code</span>
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {/* Hero Section */}
          <motion.div variants={itemVariants} className="mb-12">
            <div className="flex items-center space-x-4 mb-4">
              <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium">
                {project.category}
              </span>
              <div className="flex items-center space-x-6 text-sm text-gray-500">
                <div className="flex items-center space-x-1">
                  <Calendar size={16} />
                  <span>{project.duration}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Users size={16} />
                  <span>{project.teamSize}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Code size={16} />
                  <span>{project.role}</span>
                </div>
              </div>
            </div>
            
            <h1 className={`text-4xl md:text-6xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              {project.title}
            </h1>
            
            <p className={`text-xl ${isDark ? 'text-gray-300' : 'text-gray-600'} max-w-4xl`}>
              {project.description}
            </p>
          </motion.div>

          {/* Project Images */}
          <motion.div variants={itemVariants} className="mb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {project.images.map((image, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="rounded-xl overflow-hidden shadow-lg"
                >
                  <img
                    src={image}
                    alt={`${project.title} screenshot ${index + 1}`}
                    className="w-full h-64 object-cover"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Overview */}
              <motion.section variants={itemVariants}>
                <h2 className={`text-3xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  Project Overview
                </h2>
                <p className={`text-lg leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  {project.longDescription}
                </p>
              </motion.section>

              {/* Features */}
              <motion.section variants={itemVariants}>
                <h2 className={`text-3xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  Key Features
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {project.features.map((feature, index) => (
                    <div
                      key={index}
                      className={`flex items-start space-x-3 p-4 rounded-lg ${isDark ? 'bg-gray-800' : 'bg-white'} shadow-sm`}
                    >
                      <span className="text-blue-600 mt-1">✓</span>
                      <span className={`${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.section>

              {/* Challenges & Solutions */}
              <motion.section variants={itemVariants}>
                <h2 className={`text-3xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  Challenges & Solutions
                </h2>
                <div className="space-y-6">
                  {project.challenges.map((challenge, index) => (
                    <div
                      key={index}
                      className={`p-6 rounded-xl ${isDark ? 'bg-gray-800' : 'bg-white'} shadow-sm border-l-4 border-red-500`}
                    >
                      <h3 className={`font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                        Challenge:
                      </h3>
                      <p className={`mb-4 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                        {challenge}
                      </p>
                      <h3 className={`font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                        Solution:
                      </h3>
                      <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                        {project.solutions[index]}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.section>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Technologies */}
              <motion.div variants={itemVariants} className={`p-6 rounded-xl ${isDark ? 'bg-gray-800' : 'bg-white'} shadow-sm`}>
                <h3 className={`text-xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  Technologies Used
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gradient-to-r from-blue-600 to-blue-700 text-white text-sm rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* Project Info */}
              <motion.div variants={itemVariants} className={`p-6 rounded-xl ${isDark ? 'bg-gray-800' : 'bg-white'} shadow-sm`}>
                <h3 className={`text-xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  Project Details
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Duration:</span>
                    <span className={`font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>{project.duration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Team Size:</span>
                    <span className={`font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>{project.teamSize}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>My Role:</span>
                    <span className={`font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>{project.role}</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default ProjectDetails;
