import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../hooks/useTheme';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Monitor, Database, Globe, Code } from 'lucide-react';

interface Skill {
  name: string;
  level: number;
  category: 'frontend' | 'backend' | 'database' | 'other';
}

export const SkillsCarousel: React.FC = () => {
  const { isDark } = useTheme();

  const skills: Skill[] = [
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
    { name: "Bootstrap", level: 88, category: 'frontend' },
    { name: "Material-UI", level: 85, category: 'frontend' },
    
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

  const skillCategories = [
    { key: 'frontend', title: 'Frontend', icon: Monitor, color: 'from-blue-600 to-blue-700' },
    { key: 'backend', title: 'Backend', icon: Database, color: 'from-green-600 to-green-700' },
    { key: 'database', title: 'Database', icon: Database, color: 'from-purple-600 to-purple-700' },
    { key: 'other', title: 'Other', icon: Globe, color: 'from-orange-600 to-orange-700' }
  ];

  return (
    <div className="space-y-12">
      {skillCategories.map((category) => (
        <div key={category.key}>
          <div className="flex items-center mb-8">
            <div className={`p-3 rounded-lg bg-gradient-to-r ${category.color} mr-4`}>
              <category.icon className="text-white" size={28} />
            </div>
            <h3 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
              {category.title} Skills
            </h3>
          </div>
          
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {skills
                .filter(skill => skill.category === category.key)
                .map((skill, index) => (
                  <CarouselItem key={skill.name} className="md:basis-1/2 lg:basis-1/3">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className={`p-6 rounded-xl ${isDark ? 'bg-gray-800' : 'bg-white'} shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-blue-600`}
                    >
                      <div className="flex justify-between items-center mb-4">
                        <h4 className={`font-bold text-lg ${isDark ? 'text-white' : 'text-gray-900'}`}>
                          {skill.name}
                        </h4>
                        <span className="text-blue-600 font-semibold text-lg">
                          {skill.level}%
                        </span>
                      </div>
                      
                      <div className={`w-full bg-gray-200 rounded-full h-3 ${isDark ? 'bg-gray-700' : 'bg-gray-200'}`}>
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1.5, delay: index * 0.1 }}
                          className="bg-gradient-to-r from-blue-600 to-blue-700 h-3 rounded-full"
                        />
                      </div>
                    </motion.div>
                  </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      ))}
    </div>
  );
};
