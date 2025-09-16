import React from "react";
import "./About.css";

function About() {
  return (
    <section className="about" id="about">
      <h2>About Me</h2>
      <p>
        I'm <span className="highlight">Muhammad Zafar Ali</span>, a passionate
        Computer Science student skilled in{" "}
        <span className="highlight">Full-Stack (MERN)</span> development,
        <span className="highlight"> Artificial Intelligence</span>, and{" "}
        <span className="highlight">Data Science</span>.  
        I love building real-world projects like web apps and AI models,
        and I have hands-on experience with both frontend/backend and AI agents.
      </p>
      <p>
        With internship experience at{" "}
        <span className="highlight">PEL</span> and{" "}
        <span className="highlight">Developers Cohub</span>, I’ve worked on
        eCommerce platforms, REST APIs, and workflow automation using AI tools.
        My focus is to create scalable, efficient, and innovative solutions.
      </p>
    </section>
  );
}

export default About;
