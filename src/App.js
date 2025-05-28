import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Contact from "./components/Contact";
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  const handleToggle = () => setDarkMode((prev) => !prev);

  return (
    <div
      className={
        "min-h-screen font-sans bg-gradient-to-br from-blue-100 via-white to-blue-200 dark:from-gray-900 dark:via-gray-950 dark:to-blue-950 transition-colors duration-500"
      }
    >
      <div
        className="sticky top-0 z-50 flex items-center justify-between px-8 py-4"
        style={{
          background: darkMode
            ? "rgba(30,41,59,0.92)"
            : "rgba(239,246,255,0.92)",
          backdropFilter: "blur(8px)",
          borderBottom: "1px solid #bfdbfe"
        }}
      >
        <Header name="Your Name" darkMode={darkMode} onToggle={handleToggle} />
      </div>
      <main
        className="max-w-5xl mx-auto px-4 sm:px-8 space-y-24"
        style={{ paddingTop: "120px" }}
      >
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
      </main>
      <Contact darkMode={darkMode} />
    </div>
  );
}

export default App;
