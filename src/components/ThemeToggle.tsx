import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { motion } from 'framer-motion';

interface ThemeToggleProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ darkMode, toggleDarkMode }) => {
  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay: 0.5 }}
      onClick={toggleDarkMode}
      className="fixed z-50 bottom-6 right-6 p-3 rounded-full bg-white dark:bg-slate-800 shadow-lg text-slate-700 dark:text-slate-300 focus:outline-none"
      aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {darkMode ? (
        <Sun size={24} className="text-yellow-500" />
      ) : (
        <Moon size={24} className="text-blue-600" />
      )}
    </motion.button>
  );
};

export default ThemeToggle;