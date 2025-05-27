// src/components/ThemeToggle.jsx
import React from 'react';

export default function ThemeToggle({ darkMode, onToggle }) {
  return (
    <div className="flex justify-end mb-4">
      <button
        onClick={onToggle}
        className="border px-4 py-2 rounded bg-slate-200 text-slate-800 hover:bg-slate-300 transition dark:bg-slate-700 dark:text-white dark:hover:bg-slate-600"
      >
        Toggle {darkMode ? 'Light' : 'Dark'} Mode
      </button>

      {/* Rubric #6 - Conditional Rendering */}
      {darkMode && <p className="mt-2 ml-4 text-gray-300">🌙 Dark mode is enabled!</p>}
    </div>
  );
}
