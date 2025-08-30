import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  // persist theme
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <>
    <Helmet>
        <title>Siddharth Bhardwaj | Software Developer</title>
        <meta
          name="description"
          content="Portfolio of Siddharth Bhardwaj, Software Developer."
        />
    </Helmet>
    <div className={`font-sans ${darkMode ? "bg-gray-900 text-gray-100" : "bg-gray-50 text-gray-900"}`}>
      <Navbar toggleDarkMode={() => setDarkMode(!darkMode)} darkMode={darkMode} />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
    </>
  );
}

export default App;