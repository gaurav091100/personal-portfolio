import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../../hooks/useTheme";
import {
  ChevronDown,
  ChevronUp,
  Calendar,
  MapPin,
  Building,
} from "lucide-react";

interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  location: string;
  description: string[];
  technologies: string[];
  achievements: string[];
}

export const ExperienceSection: React.FC = () => {
  const { isDark } = useTheme();
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const experiences: ExperienceItem[] = [
    {
      title: "Software Engineer",
      company: "Girman Technologies",
      period: "December 2024 - June 2025",
      location: "Bangalore, India",
      description: [
        // "Lead development of modern web applications using React and TypeScript",
        // "Architect and implement scalable frontend solutions for enterprise clients",
        // "Mentor junior developers and conduct technical code reviews",
        // "Collaborate with cross-functional teams to deliver high-quality products",
        // "Implement responsive designs and optimize performance for 50+ components",
      ],
      technologies: [
        "React",
        "Next.js",
        "JavaScript",
        "TypeScript",
        "CSS3",
        "Html5",
        "Tailwind CSS",
        "Shadcn",
        "Google Maps API",
      ],
      achievements: [
        // "Improved application performance by 40% through code optimization",
        // "Led migration from JavaScript to TypeScript reducing bugs by 60%",
        // "Mentored 5 junior developers, with 3 receiving promotions",
        // "Implemented automated testing pipeline increasing code coverage to 95%",
        // "Delivered 8 major features ahead of schedule",
      ],
    },
    {
      title: "Software Development Engineer",
      company: "Where U Elevate",
      period: "August 2023 - October 2024",
      location: "Noida, India",
      description: [
        // "Developed and maintained multiple client-facing web applications",
        // "Integrated RESTful APIs and implemented state management solutions",
        // "Optimized applications for maximum speed and scalability",
        // "Participated in agile development processes and sprint planning",
        // "Collaborated with UX/UI designers to implement pixel-perfect designs"
      ],
      technologies: [
        "React",
        "JavaScript",
        "Typescript",
        "SASS",
        "Material UI",
        "CSS3",
        "Html5",
      ],
      achievements: [
        // "Delivered 15+ successful projects for various clients",
        // "Reduced page load times by 50% through optimization techniques",
        // "Implemented responsive design patterns used across 20+ projects",
        // "Built reusable component library adopted by entire development team",
        // "Maintained 99.5% uptime for all production applications"
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const toggleCard = (index: number) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  return (
    <section
      id="experience"
      className={`py-20 px-4 sm:px-6 lg:px-8 ${
        isDark ? "bg-gray-900" : "bg-gray-50"
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2
            variants={cardVariants}
            className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent"
          >
            Professional Experience
          </motion.h2>
          <motion.p
            variants={cardVariants}
            className={`text-xl ${
              isDark ? "text-gray-300" : "text-gray-600"
            } max-w-3xl mx-auto`}
          >
            My journey in software development, building innovative solutions
            and leading teams to success.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="space-y-6"
        >
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className={`rounded-2xl shadow-lg overflow-hidden transition-all duration-300 ${
                isDark
                  ? "bg-gray-800 hover:bg-gray-750"
                  : "bg-white hover:shadow-xl"
              } border-l-4 border-blue-600`}
            >
              {/* Card Header */}
              <div
                className="p-6 cursor-pointer"
                onClick={() => toggleCard(index)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3
                          className={`text-2xl font-bold ${
                            isDark ? "text-white" : "text-gray-900"
                          }`}
                        >
                          {experience.title}
                        </h3>
                        <div className="flex items-center space-x-4 mt-2">
                          <div className="flex items-center space-x-2">
                            <Building className="text-blue-600" size={16} />
                            <span className="text-blue-600 font-semibold text-lg">
                              {experience.company}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="mt-2 md:mt-0 space-y-1">
                        <div className="flex items-center space-x-2">
                          <Calendar
                            className={`${
                              isDark ? "text-gray-400" : "text-gray-500"
                            }`}
                            size={16}
                          />
                          <span
                            className={`${
                              isDark ? "text-gray-400" : "text-gray-500"
                            }`}
                          >
                            {experience.period}
                          </span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <MapPin
                            className={`${
                              isDark ? "text-gray-400" : "text-gray-500"
                            }`}
                            size={16}
                          />
                          <span
                            className={`${
                              isDark ? "text-gray-400" : "text-gray-500"
                            }`}
                          >
                            {experience.location}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Brief Description */}
                    <p
                      className={`${
                        isDark ? "text-gray-300" : "text-gray-600"
                      } mb-4`}
                    >
                      {experience.description[0]}
                    </p>

                    {/* Technology Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {experience.technologies.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="text-xs px-3 py-1 rounded-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                      {experience.technologies.length > 4 && (
                        <span
                          className={`text-xs px-3 py-1 rounded-full ${
                            isDark
                              ? "bg-gray-700 text-gray-300"
                              : "bg-gray-200 text-gray-600"
                          } font-medium`}
                        >
                          +{experience.technologies.length - 4} more
                        </span>
                      )}
                    </div>
                  </div>

                  <motion.div
                    animate={{ rotate: expandedCard === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className={`ml-4 p-2 rounded-full ${
                      isDark ? "bg-gray-700" : "bg-gray-100"
                    }`}
                  >
                    <ChevronDown
                      className={`${
                        isDark ? "text-gray-300" : "text-gray-600"
                      }`}
                      size={20}
                    />
                  </motion.div>
                </div>
              </div>

              {/* Expandable Content */}
              <AnimatePresence>
                {expandedCard === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className={`border-t ${
                      isDark ? "border-gray-700" : "border-gray-200"
                    }`}
                  >
                    <div className="p-6 space-y-6">
                      {/* Full Description */}
                      {experience.description.length > 0 && (
                        <div>
                          <h4
                            className={`text-lg font-semibold mb-3 ${
                              isDark ? "text-white" : "text-gray-900"
                            }`}
                          >
                            Key Responsibilities
                          </h4>
                          <ul
                            className={`space-y-2 ${
                              isDark ? "text-gray-300" : "text-gray-600"
                            }`}
                          >
                            {experience.description.map((desc, descIndex) => (
                              <li key={descIndex} className="flex items-start">
                                <span className="text-blue-600 mr-3 mt-1 text-sm">
                                  ●
                                </span>
                                <span>{desc}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                      {/* Achievements */}
                      {experience.achievements.length > 0 && (
                        <div>
                          <h4
                            className={`text-lg font-semibold mb-3 ${
                              isDark ? "text-white" : "text-gray-900"
                            }`}
                          >
                            Key Achievements
                          </h4>
                          <ul
                            className={`space-y-2 ${
                              isDark ? "text-gray-300" : "text-gray-600"
                            }`}
                          >
                            {experience.achievements.map(
                              (achievement, achIndex) => (
                                <li key={achIndex} className="flex items-start">
                                  <span className="text-green-500 mr-3 mt-1 text-sm">
                                    ✓
                                  </span>
                                  <span>{achievement}</span>
                                </li>
                              )
                            )}
                          </ul>
                        </div>
                      )}

                      {/* All Technologies */}
                      <div>
                        <h4
                          className={`text-lg font-semibold mb-3 ${
                            isDark ? "text-white" : "text-gray-900"
                          }`}
                        >
                          Technologies & Tools
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {experience.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="text-sm px-3 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 text-white font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
