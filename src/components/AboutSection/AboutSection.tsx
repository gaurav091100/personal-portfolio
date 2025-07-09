import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "../../hooks/useTheme";
import { SkillsCarousel } from "../SkillsCarousel/SkillsCarousel";
import { ToolsCarousel } from "../ToolsCarousel/ToolsCarousel";

export const AboutSection: React.FC = () => {
  const { isDark } = useTheme();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section
      id="about"
      className={`py-20 px-4 sm:px-6 lg:px-8 ${
        isDark ? "bg-gray-900" : "bg-gray-50"
      }`}
    >
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
          <motion.div
            variants={itemVariants}
            className={`text-xl ${
              isDark ? "text-gray-300" : "text-gray-600"
            } max-w-3xl mx-auto leading-relaxed`}
          >
             <p className="mb-4">
        I'm a <strong>Frontend Developer</strong> with nearly <strong>2 years</strong> of experience specializing in building responsive, high-performance web applications using <strong>React.js</strong> and related technologies.
      </p>
      <p className="mb-4">
        At <strong>Girman Technologies</strong>, I developed scalable tools like dynamic form builders, role-based dashboards, and Google Maps-powered property mapping, increasing team efficiency by up to <strong>40%</strong>.
      </p>
      <p className="mb-4">
        Previously at <strong>Where U Elevate</strong>, I contributed to the <strong>BookMyJet</strong> platform, implementing features like real-time location-based search, multi-city booking flows, and performance-optimized dashboards using <strong>code splitting</strong>, <strong>lazy loading</strong>, and <strong>virtualization</strong>.
      </p>
      <p>
        With a background in <strong>Commerce</strong> and strong expertise in frontend tech, I bring a unique blend of analytical thinking and UI craftsmanship to every project.
      </p>
          </motion.div>
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
            className={`text-3xl font-bold mb-12 text-center ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            Technical Skills
          </motion.h3>

          <SkillsCarousel />
        </motion.div>

        {/* Tools Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="mb-20"
        >
          <ToolsCarousel />
        </motion.div>
      </div>
    </section>
  );
};
