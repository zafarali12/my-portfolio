import React from "react";
import profilePic from "../assets/WhatsApp Image 2024-10-22 at 11.25.42 PM.jpeg";
import resume from "../assets/zafarali.pdf";
import "./Hero.css";
import { Typewriter } from "react-simple-typewriter";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <img src={profilePic} alt="Profile" className="profile-pic" />

        {/* Looping typing effect */}
        <h1>
          <Typewriter
            words={["Muhammad Zafar Ali"]}
            loop={true}          // continuously loop
            cursor              // show cursor
            cursorStyle="|"     // cursor style
            typeSpeed={100}     // typing speed
            deleteSpeed={50}    // deleting speed
            delaySpeed={1000}   // delay before start deleting
          />
        </h1>

        <h2>Full-Stack Developer (MERN + AI/ML)</h2>
        <p>Lahore, Pakistan</p>

        <div className="buttons">
          <a href={resume} download>
            <button>Download Resume</button>
          </a>
          <a href="https://github.com/zafarali12" target="_blank" rel="noreferrer">
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
