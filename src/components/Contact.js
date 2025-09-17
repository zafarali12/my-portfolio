import React, { useRef } from "react";
import emailjs from "emailjs-com";
import "./Contact.css";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_r9bqcrp",   // Original SERVICE_ID
        "template_xhp6ulm", // Original TEMPLATE_ID
        form.current,
        "Ixrd3U_cHL9lIYq6y" // Original PUBLIC_KEY
      )
      .then(
        (result) => {
          alert("✅ Message Sent Successfully!");
          form.current.reset();
        },
        (error) => {
          alert("❌ Failed to Send: " + error.text);
        }
      );
  };

  return (
    <section className="contact" id="contact">
      <h2>Contact Me</h2>
      <p className="contact-intro">
        Interested in working together or have a question?  
        Fill out the form below or connect with me directly.
      </p>

      <div className="contact-container">
        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <input type="text" name="user_name" placeholder="Your Name" required />
          <input type="email" name="user_email" placeholder="Your Email" required />
          <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
          <button type="submit">Send Message</button>
        </form>

        <div className="contact-info">
          <h3>Connect with me</h3>
          <ul>
            <li>
              <a href="mailto:zafaraliimran12@gmail.com">📧 zafaraliimran12@gmail.com</a>
            </li>
            <li>
              <a href="https://github.com/zafarali12" target="_blank" rel="noreferrer">
                🖥️ GitHub
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/muhammadzafarali" target="_blank" rel="noreferrer">
                🔗 LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Contact;
