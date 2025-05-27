// src/components/Header.jsx
import React from 'react';
import ThemeToggle from './ThemeToggle';

export default function Header({ name, darkMode, onToggle }) {
  return (
    <header
      className="fixed top-0 left-0 right-0 shadow-md p-4 flex justify-between items-center z-50
        bg-gradient-to-r from-blue-50 via-white to-blue-100 dark:from-blue-950 dark:via-gray-900 dark:to-blue-900
        border-b border-blue-200 dark:border-blue-800"
    >
      {/* Name and title */}
      <div>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-wide uppercase text-blue-900 dark:text-blue-200">
          {name}
        </h1>
        <p className="text-base sm:text-lg font-medium text-blue-700 dark:text-blue-300 mt-1">
          Software Developer & Lifelong Learner
        </p>
      </div>

      {/* Dark mode toggle */}
      <ThemeToggle darkMode={darkMode} onToggle={onToggle} />
    </header>
  );
}
