import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
// import other components as needed
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Skills />
      <Experience />
      <Education />
      <Contact />
      {/* Add other components here if needed */}
    </div>
  );
}

export default App;
