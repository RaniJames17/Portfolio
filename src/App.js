import React, { useState } from "react";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Contact from "./components/Contact";
import ThemeToggle from "./components/ThemeToggle";
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const handleToggle = () => setDarkMode((prev) => !prev);

  return (
    <div className={
      (darkMode ? "dark " : "") +
      "min-h-screen font-sans bg-gradient-to-br from-blue-100 via-white to-blue-200 dark:from-gray-900 dark:via-gray-950 dark:to-blue-950 transition-colors duration-500"
    }>
      {/* Header with Theme Toggle inside */}
      <div className="sticky top-0 z-50">
        <Header name="Your Name" darkMode={darkMode} />
        <div className="absolute top-6 right-8">
          <ThemeToggle darkMode={darkMode} onToggle={handleToggle} />
        </div>
      </div>
      <main className="max-w-5xl mx-auto px-4 sm:px-8 pt-40 space-y-24">
        <section className="rounded-3xl shadow-2xl bg-white/70 dark:bg-gray-900/70 backdrop-blur-md p-10 animate-fadeIn">
          <About darkMode={darkMode} />
        </section>
        <section className="rounded-3xl shadow-2xl bg-white/70 dark:bg-gray-900/70 backdrop-blur-md p-10 animate-fadeIn">
          <Skills darkMode={darkMode} />
        </section>
        <section className="rounded-3xl shadow-2xl bg-white/70 dark:bg-gray-900/70 backdrop-blur-md p-10 animate-fadeIn">
          <Experience darkMode={darkMode} />
        </section>
        <section className="rounded-3xl shadow-2xl bg-white/70 dark:bg-gray-900/70 backdrop-blur-md p-10 animate-fadeIn">
          <Education darkMode={darkMode} />
        </section>
        <Contact darkMode={darkMode} />
      </main>
    </div>
  );
}

export default App;
