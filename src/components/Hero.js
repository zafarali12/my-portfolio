import React from "react";
import profilePic from "../assets/WhatsApp Image 2024-10-22 at 11.25.42 PM.jpeg";
import resume from "../assets/resume.pdf";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <img src={profilePic} alt="Profile" className="profile-pic" />
        <h1>Muhammad Zafar Ali</h1>
        <h2>Full-Stack Developer (MERN + AI/ML)</h2>
        <p>Lahore, Pakistan</p>
        <div className="buttons">
          <a href={resume} download>
            <button>Download Resume</button>
          </a>
          <a
            href="https://github.com/zafarali12"
            target="_blank"
            rel="noreferrer"
          >
            <button>GitHub</button>
          </a>
          <a
            href="https://www.linkedin.com/in/muhammadzafarali"
            target="_blank"
            rel="noreferrer"
          >
            <button>LinkedIn</button>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
