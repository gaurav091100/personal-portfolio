
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

interface Tool {
  name: string;
  icon: string;
  category: 'development' | 'design' | 'productivity' | 'other';
  description: string;
}

export const ToolsCarousel: React.FC = () => {
  const { isDark } = useTheme();

  const tools: Tool[] = [
    { name: "VS Code", icon: "💻", category: 'development', description: "Primary code editor" },
    { name: "WebStorm", icon: "🚀", category: 'development', description: "JavaScript IDE" },
    { name: "Figma", icon: "🎨", category: 'design', description: "UI/UX design tool" },
    { name: "Adobe XD", icon: "✨", category: 'design', description: "Prototyping tool" },
    { name: "Photoshop", icon: "🖼️", category: 'design', description: "Image editing" },
    { name: "Postman", icon: "📡", category: 'development', description: "API testing" },
    { name: "Chrome DevTools", icon: "🔧", category: 'development', description: "Browser debugging" },
    { name: "Notion", icon: "📝", category: 'productivity', description: "Documentation & notes" },
    { name: "Slack", icon: "💬", category: 'productivity', description: "Team communication" },
    { name: "Trello", icon: "📋", category: 'productivity', description: "Project management" },
    { name: "GitHub", icon: "🐙", category: 'development', description: "Version control" },
    { name: "Docker", icon: "🐳", category: 'development', description: "Containerization" }
  ];

  return (
    <div>
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
            <CarouselItem key={tool.name} className="md:basis-1/2 lg:basis-1/4">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ delay: index * 0.1 }}
                className={`p-6 rounded-xl ${isDark ? 'bg-gray-800' : 'bg-white'} shadow-lg hover:shadow-xl transition-all duration-300 text-center cursor-pointer border-2 border-transparent hover:border-blue-600`}
              >
                <div className="text-4xl mb-4">{tool.icon}</div>
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
                    'bg-gray-100 text-gray-800'
                  }`}>
                    {tool.category}
                  </span>
                </div>
              </motion.div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};
