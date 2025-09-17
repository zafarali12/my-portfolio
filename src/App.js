import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Reviews from "./components/Reviews";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";

import { motion } from "framer-motion";

function App() {
  const sectionAnimation = {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8 },
  };

  return (
    <>
      <Navbar />

      <motion.section {...sectionAnimation} id="hero">
        <Hero />
      </motion.section>

      <motion.section {...sectionAnimation} id="about">
        <About />
      </motion.section>

      <motion.section {...sectionAnimation} id="skills">
        <Skills />
      </motion.section>

      <motion.section {...sectionAnimation} id="experience">
        <Experience />
      </motion.section>

      <motion.section {...sectionAnimation} id="projects">
        <Projects />
      </motion.section>

      <motion.section {...sectionAnimation} id="certifications">
        <Certifications />
      </motion.section>

      <motion.section {...sectionAnimation} id="reviews">
        <Reviews />
      </motion.section>

      <motion.section {...sectionAnimation} id="contact">
        <Contact />
      </motion.section>

      <motion.section {...sectionAnimation} id="footer">
        <Footer />
      </motion.section>
    </>
  );
}

export default App;
