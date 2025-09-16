import React from "react";
import "./Footer.css";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Left Section */}
        <div className="footer-about">
          <h3>Zafar Ali</h3>
          <p>Full Stack Developer | AI Enthusiast</p>
          <p className="footer-note">Crafted with passion & code ⚡</p>
        </div>

        {/* Center Section */}
        <div className="footer-links">
          <h4>Quick Links</h4>
          <a href="#hero">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        {/* Right Section */}
        <div className="footer-social">
          <h4>Connect</h4>
          <div className="social-icons">
            <a href="mailto:zafaraliimran12@gmail.com" target="_blank" rel="noreferrer">
              <FaEnvelope />
            </a>
            <a href="https://github.com/zafarali12" target="_blank" rel="noreferrer">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/muhammadzafarali" target="_blank" rel="noreferrer">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Zafar Ali. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
