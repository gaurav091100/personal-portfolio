
export interface PersonalInfo {
  name: string;
  title: string;
  email: string;
  location: string;
  bio: string;
}

export interface Project {
  id: number;
  title: string;
  category: ProjectCategory;
  description: string;
  technologies: string[];
  image: string;
  github: string;
  demo: string;
}

export type ProjectCategory = 'Personal Project' | 'Company Project' | 'Freelance';

export interface Skill {
  name: string;
  level: number;
}

export interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
}

export interface NavItem {
  id: string;
  label: string;
  icon: React.ComponentType<{ size?: number }>;
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export interface ThemeContextType {
  isDark: boolean;
  toggleTheme: () => void;
}

export interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
}
