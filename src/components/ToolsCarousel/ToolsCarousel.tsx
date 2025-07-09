
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

// interface Tool {
//   name: string;
//   icon: string;
//   category: 'development' | 'design' | 'productivity' | 'deployment' | 'project-management' | 'other';
//   description: string;
// }

// export const ToolsCarousel: React.FC = () => {
//   const { isDark } = useTheme();
// const tools: Tool[] = [
//   {
//     name: "VS Code",
//     icon: "/assets/tools/vscode.svg",
//     category: "development",
//     description: "Primary code editor",
//   },
//   {
//     name: "Postman",
//     icon: "/assets/tools/postman.svg",
//     category: "development",
//     description: "API testing tool",
//   },
//   {
//     name: "Swagger",
//     icon: "/assets/tools/swagger.svg",
//     category: "development",
//     description: "API documentation and testing",
//   },
//   {
//     name: "Chrome DevTools",
//     icon: "/assets/tools/chrome-dev-tools.svg",
//     category: "development",
//     description: "Browser debugging suite",
//   },
//   {
//     name: "GitHub",
//     icon: "/assets/tools/github.svg",
//     category: "development",
//     description: "Version control and collaboration",
//   },
//   {
//     name: "JIRA",
//     icon: "/assets/tools/jira.svg",
//     category: "project-management",
//     description: "Agile project management tool",
//   },
//   {
//     name: "Figma",
//     icon: "/assets/tools/figma.svg",
//     category: "design",
//     description: "Collaborative UI/UX design tool",
//   },
//   {
//     name: "Vercel",
//     icon: "/assets/tools/vercel.svg",
//     category: "deployment",
//     description: "Frontend deployment platform",
//   },
//   {
//     name: "Netlify",
//     icon: "/assets/tools/netlify.svg",
//     category: "deployment",
//     description: "CI/CD & frontend hosting platform",
//   },
//   {
//     name: "Notion",
//     icon: "/assets/tools/notion.svg",
//     category: "productivity",
//     description: "Knowledge management and docs",
//   },
//   {
//     name: "Slack",
//     icon: "/assets/tools/slack.svg",
//     category: "productivity",
//     description: "Team communication",
//   },
//   {
//     name: "CodePen",
//     icon: "/assets/tools/codepen.svg",
//     category: "development",
//     description: "Online playground for frontend",
//   },
// ];

//   return (
//     <div>
//       <h3 className={`text-3xl font-bold mb-8 text-center ${isDark ? 'text-white' : 'text-gray-900'}`}>
//         Tools & Technologies
//       </h3>
      
//       <Carousel
//         opts={{
//           align: "start",
//           loop: true,
//         }}
//         className="w-full"
//       >
//         <CarouselContent>
//           {tools.map((tool, index) => (
//             <CarouselItem key={tool.name} className="md:basis-1/2 lg:basis-1/4">
//               <motion.div
//                 initial={{ opacity: 0, scale: 0.8 }}
//                 whileInView={{ opacity: 1, scale: 1 }}
//                 whileHover={{ scale: 1.05, y: -5 }}
//                 transition={{ delay: index * 0.1 }}
//                 className={`p-6 rounded-xl ${isDark ? 'bg-gray-800' : 'bg-white'} shadow-lg hover:shadow-xl transition-all duration-300 text-center cursor-pointer border-2 border-transparent hover:border-blue-600`}
//               >
//                 <img className="text-4xl mb-4 h-10 w-10 m-auto" src={tool.icon} alt={tool.name} />
//                 <h4 className={`font-bold text-lg mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
//                   {tool.name}
//                 </h4>
//                 <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
//                   {tool.description}
//                 </p>
//                 <div className="mt-3">
//                   <span className={`text-xs px-3 py-1 rounded-full ${
//                     tool.category === 'development' ? 'bg-blue-100 text-blue-800' :
//                     tool.category === 'design' ? 'bg-purple-100 text-purple-800' :
//                     tool.category === 'productivity' ? 'bg-green-100 text-green-800' :
//                     'bg-gray-100 text-gray-800'
//                   }`}>
//                     {tool.category}
//                   </span>
//                 </div>
//               </motion.div>
//             </CarouselItem>
//           ))}
//         </CarouselContent>
//         <CarouselPrevious />
//         <CarouselNext />
//       </Carousel>
//     </div>
//   );
// };



import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../hooks/useTheme';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface Tool {
  name: string;
  icon: string;
  category: 'development' | 'design' | 'productivity' | 'deployment' | 'project-management' | 'other';
  description: string;
}

export const ToolsCarousel: React.FC = () => {
  const { isDark } = useTheme();
  const carouselRef = useRef<HTMLDivElement>(null);

  const tools: Tool[] = [
    {
      name: "VS Code",
      icon: "/assets/tools/vscode.svg",
      category: "development",
      description: "Primary code editor",
    },
    {
      name: "Postman",
      icon: "/assets/tools/postman.svg",
      category: "development",
      description: "API testing tool",
    },
    {
      name: "Swagger",
      icon: "/assets/tools/swagger.svg",
      category: "development",
      description: "API documentation and testing",
    },
    {
      name: "Chrome DevTools",
      icon: "/assets/tools/chrome-dev-tools.svg",
      category: "development",
      description: "Browser debugging suite",
    },
    {
      name: "GitHub",
      icon: "/assets/tools/github.svg",
      category: "development",
      description: "Version control and collaboration",
    },
    {
      name: "JIRA",
      icon: "/assets/tools/jira.svg",
      category: "project-management",
      description: "Agile project management tool",
    },
    {
      name: "Figma",
      icon: "/assets/tools/figma.svg",
      category: "design",
      description: "Collaborative UI/UX design tool",
    },
    {
      name: "Vercel",
      icon: "/assets/tools/vercel.svg",
      category: "deployment",
      description: "Frontend deployment platform",
    },
    {
      name: "Netlify",
      icon: "/assets/tools/netlify.svg",
      category: "deployment",
      description: "CI/CD & frontend hosting platform",
    },
    {
      name: "Notion",
      icon: "/assets/tools/notion.svg",
      category: "productivity",
      description: "Knowledge management and docs",
    },
    {
      name: "Slack",
      icon: "/assets/tools/slack.svg",
      category: "productivity",
      description: "Team communication",
    },
    {
      name: "CodePen",
      icon: "/assets/tools/codepen.svg",
      category: "development",
      description: "Online playground for frontend",
    },
  ];

  // Autoplay logic
  useEffect(() => {
    const interval = setInterval(() => {
      const nextButton = carouselRef.current?.querySelector('[data-carousel-next]');
      nextButton?.click();
    }, 3000); // change slide every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div ref={carouselRef}>
      <h3 className={`text-3xl font-bold mb-8 text-center ${isDark ? 'text-white' : 'text-gray-900'}`}>
        Tools & Technologies
      </h3>

      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent>
          {tools.map((tool, index) => (
            <CarouselItem key={tool.name} className="md:basis-1/2 lg:basis-1/4 ">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ delay: index * 0.1 }}
                className={`p-6 rounded-xl ${isDark ? 'bg-gray-800' : 'bg-white'} shadow-lg hover:shadow-xl transition-all duration-300 text-center cursor-pointer border-2 border-transparent hover:border-blue-600`}
              >
                <img className="text-4xl mb-4 h-10 w-10 m-auto" src={tool.icon} alt={tool.name} />
                <h4 className={`font-bold text-lg mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {tool.name}
                </h4>
                <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  {tool.description}
                </p>
                <div className="mt-3">
                  <span className={`text-xs px-3 py-1 rounded-full ${
                    tool.category === 'development' ? 'bg-blue-100 text-blue-800' :
                    tool.category === 'design' ? 'bg-purple-100 text-purple-800' :
                    tool.category === 'productivity' ? 'bg-green-100 text-green-800' :
                    tool.category === 'deployment' ? 'bg-indigo-100 text-indigo-800' :
                    tool.category === 'project-management' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-gray-100 text-gray-800'
                  }`}>
                    {tool.category}
                  </span>
                </div>
              </motion.div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious data-carousel-prev />
        <CarouselNext data-carousel-next />
      </Carousel>
    </div>
  );
};
