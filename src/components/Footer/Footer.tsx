
import React from 'react';
import { useTheme } from '../../hooks/useTheme';

export const Footer: React.FC = () => {
  const { isDark } = useTheme();

  return (
    <footer className={`py-8 px-4 sm:px-6 lg:px-8 ${
      isDark ? 'bg-gray-900 border-gray-700' : 'bg-gray-50 border-gray-200'
    } border-t`}>
      <div className="max-w-7xl mx-auto text-center">
        <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
          © 2024 Alex Johnson. Built with React, TypeScript & Tailwind CSS.
        </p>
      </div>
    </footer>
  );
};
