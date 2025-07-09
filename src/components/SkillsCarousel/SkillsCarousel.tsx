// import React from 'react';
// import { motion } from 'framer-motion';
// import { useTheme } from '../../hooks/useTheme';
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel";
// import { Monitor, Database, Globe, Code } from 'lucide-react';

// interface Skill {
//   name: string;
//   level: number;
//   category: 'frontend' | 'backend' | 'database' | 'other';
// }

// export const SkillsCarousel: React.FC = () => {
//   const { isDark } = useTheme();

//   const skills: Skill[] = [
//     // Frontend
//     { name: "JavaScript", level: 95, category: 'frontend' },
//     { name: "TypeScript", level: 90, category: 'frontend' },
//     { name: "React", level: 95, category: 'frontend' },
//     { name: "Next.js", level: 85, category: 'frontend' },
//     { name: "Vue.js", level: 80, category: 'frontend' },
//     { name: "Angular", level: 75, category: 'frontend' },
//     { name: "HTML5", level: 98, category: 'frontend' },
//     { name: "CSS3", level: 95, category: 'frontend' },
//     { name: "Sass/SCSS", level: 90, category: 'frontend' },
//     { name: "Tailwind CSS", level: 95, category: 'frontend' },
//     { name: "Bootstrap", level: 88, category: 'frontend' },
//     { name: "Material-UI", level: 85, category: 'frontend' },

//     // Backend
//     { name: "Node.js", level: 85, category: 'backend' },
//     { name: "Express.js", level: 85, category: 'backend' },
//     { name: "Python", level: 80, category: 'backend' },
//     { name: "Django", level: 75, category: 'backend' },
//     { name: "PHP", level: 70, category: 'backend' },
//     { name: "Laravel", level: 70, category: 'backend' },

//     // Database
//     { name: "MongoDB", level: 85, category: 'database' },
//     { name: "MySQL", level: 80, category: 'database' },
//     { name: "PostgreSQL", level: 80, category: 'database' },
//     { name: "Firebase", level: 85, category: 'database' },
//     { name: "Supabase", level: 80, category: 'database' },

//     // Other
//     { name: "Git", level: 90, category: 'other' },
//     { name: "Docker", level: 75, category: 'other' },
//     { name: "AWS", level: 70, category: 'other' },
//     { name: "GraphQL", level: 75, category: 'other' }
//   ];

//   const skillCategories = [
//     { key: 'frontend', title: 'Frontend', icon: Monitor, color: 'from-blue-600 to-blue-700' },
//     { key: 'backend', title: 'Backend', icon: Database, color: 'from-green-600 to-green-700' },
//     { key: 'database', title: 'Database', icon: Database, color: 'from-purple-600 to-purple-700' },
//     { key: 'other', title: 'Other', icon: Globe, color: 'from-orange-600 to-orange-700' }
//   ];

//   return (
//     <div className="space-y-12">
//       {skillCategories.map((category) => (
//         <div key={category.key}>
//           <div className="flex items-center mb-8">
//             <div className={`p-3 rounded-lg bg-gradient-to-r ${category.color} mr-4`}>
//               <category.icon className="text-white" size={28} />
//             </div>
//             <h3 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
//               {category.title} Skills
//             </h3>
//           </div>

//           <Carousel
//             opts={{
//               align: "start",
//               loop: true,
//             }}
//             className="w-full"
//           >
//             <CarouselContent>
//               {skills
//                 .filter(skill => skill.category === category.key)
//                 .map((skill, index) => (
//                   <CarouselItem key={skill.name} className="md:basis-1/2 lg:basis-1/3">
//                     <motion.div
//                       initial={{ opacity: 0, y: 20 }}
//                       whileInView={{ opacity: 1, y: 0 }}
//                       transition={{ delay: index * 0.1 }}
//                       className={`p-6 rounded-xl ${isDark ? 'bg-gray-800' : 'bg-white'} shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-blue-600`}
//                     >
//                       <div className="flex justify-between items-center mb-4">
//                         <h4 className={`font-bold text-lg ${isDark ? 'text-white' : 'text-gray-900'}`}>
//                           {skill.name}
//                         </h4>
//                         <span className="text-blue-600 font-semibold text-lg">
//                           {skill.level}%
//                         </span>
//                       </div>

//                       <div className={`w-full bg-gray-200 rounded-full h-3 ${isDark ? 'bg-gray-700' : 'bg-gray-200'}`}>
//                         <motion.div
//                           initial={{ width: 0 }}
//                           whileInView={{ width: `${skill.level}%` }}
//                           transition={{ duration: 1.5, delay: index * 0.1 }}
//                           className="bg-gradient-to-r from-blue-600 to-blue-700 h-3 rounded-full"
//                         />
//                       </div>
//                     </motion.div>
//                   </CarouselItem>
//                 ))}
//             </CarouselContent>
//             <CarouselPrevious />
//             <CarouselNext />
//           </Carousel>
//         </div>
//       ))}
//     </div>
//   );
// };
import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "../../hooks/useTheme";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Monitor, Database, Globe, Code, Terminal } from "lucide-react";
// import { Monitor, Code, Database, Terminal } from "lucide-react";

interface Skill {
  name: string;
  level: number;
  category: "frontend" | "backend" | "database" | "other";
}

const skills = {
  frontend: [
    { name: "React", icon: "/assets/icons/react.svg" },
    { name: "Next.js", icon: "/assets/icons/nextjs.svg" },
    { name: "JavaScript", icon: "/assets/icons/javascript.svg" },
    { name: "TypeScript", icon: "/assets/icons/typescript.svg" },
    { name: "Redux", icon: "/assets/icons/redux.svg" },
    { name: "shadCN", icon: "/assets/icons/shadcn-ui.svg" },
    { name: "Material UI", icon: "/assets/icons/material-ui.svg" },
    { name: "Tailwind CSS", icon: "/assets/icons/tailwind-css.svg" },
    { name: "HTML5", icon: "/assets/icons/html.svg" },
    { name: "CSS3", icon: "/assets/icons/css.svg" },
  ],
  backend: [
    { name: "Node.js", icon: "/assets/icons/nodejs.svg" },
    { name: "Express", icon: "/assets/icons/expressjs.svg" },
    { name: "Mongoose", icon: "/assets/icons/mongoose.svg" },
  ],
  database: [
    { name: "MongoDB", icon: "/assets/icons/mongodb.svg" },
    { name: "supabase", icon: "/assets/icons/supabase.svg" },
  ],
  other: [
    { name: "Git", icon: "/assets/icons/git.svg" }, // Add git.svg if available
  ],
};

const icons: Record<keyof typeof skills, React.ReactNode> = {
  frontend: <Monitor className="w-5 h-5 text-blue-500" />,
  backend: <Code className="w-5 h-5 text-green-500" />,
  database: <Database className="w-5 h-5 text-purple-500" />,
  other: <Terminal className="w-5 h-5 text-orange-500" />,
};

const sectionNames: Record<keyof typeof skills, string> = {
  frontend: "Frontend",
  backend: "Backend",
  database: "Database",
  other: "Other Tools",
};

export const SkillsCarousel: React.FC = () => {
  const { isDark } = useTheme();

  return (
    <div className="space-y-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-10">
        {Object.entries(skills).map(([category, items]) => (
          <div key={category}>
            <div className="flex items-center gap-2 mb-4">
              {icons[category as keyof typeof skills]}
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                {sectionNames[category as keyof typeof skills]}
              </h3>
            </div>
            <ul className="flex flex-wrap gap-2">
              {items.map((skill) => (
                <li
                  key={skill.name}
                  className="flex items-center gap-2 text-sm bg-muted dark:bg-zinc-800 px-3 py-1 rounded-full border border-gray-300 dark:border-zinc-700 text-gray-700 dark:text-white"
                >
                  {skill.icon && (
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      className="w-4 h-4"
                    />
                  )}
                  {skill.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

// import React from "react";
// import { Monitor, Code, Database, Terminal } from "lucide-react";

// const skills = {
//   frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML", "CSS"],
//   backend: ["Node.js", "Express", "Python", "Django"],
//   database: ["MongoDB", "MySQL", "Firebase"],
//   other: ["Git", "Docker", "GraphQL", "Linux"],
// };

// const icons: Record<keyof typeof skills, React.ReactNode> = {
//   frontend: <Monitor className="w-5 h-5 text-blue-500" />,
//   backend: <Code className="w-5 h-5 text-green-500" />,
//   database: <Database className="w-5 h-5 text-purple-500" />,
//   other: <Terminal className="w-5 h-5 text-orange-500" />,
// };

// const sectionNames: Record<keyof typeof skills, string> = {
//   frontend: "Frontend",
//   backend: "Backend",
//   database: "Database",
//   other: "Other Tools",
// };

// export const SkillsCarousel = () => {
//   return (
//     <section className="py-16 px-4 max-w-6xl mx-auto">
//       <h2 className="text-3xl font-bold text-center mb-12">Skills</h2>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-10">
//         {Object.entries(skills).map(([category, items]) => (
//           <div key={category}>
//             <div className="flex items-center gap-2 mb-4">
//               {icons[category as keyof typeof skills]}
//               <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
//                 {sectionNames[category as keyof typeof skills]}
//               </h3>
//             </div>
//             <ul className="flex flex-wrap gap-2">
//               {items.map((skill) => (
//                 <li
//                   key={skill}
//                   className="text-sm bg-muted dark:bg-zinc-800 px-3 py-1 rounded-full border border-gray-300 dark:border-zinc-700 text-gray-700 dark:text-white"
//                 >
//                   {skill}
//                 </li>
//               ))}
//             </ul>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };
