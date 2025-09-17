import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import "./Contact.css";

function Contact() {
  const form = useRef();
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    // Env variables check
    const SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      setMessage("❌ Email service is not configured correctly!");
      setIsError(true);
      return;
    }

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then(
        () => {
          setMessage("✅ Thanks for your message!");
          setIsError(false);
          form.current.reset();
          setTimeout(() => setMessage(""), 5000); // Auto-hide
        },
        (error) => {
          console.error(error);
          setMessage("❌ Failed to send message. Please try again.");
          setIsError(true);
          setTimeout(() => setMessage(""), 5000);
        }
      );
  };

  return (
    <section className="contact" id="contact">
      <h2>Contact Me</h2>
      <p className="contact-intro">
        Interested in working together or have a question? Fill out the form below or connect with me directly.
      </p>

      <div className="contact-container">
        {/* Contact Form */}
        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <input type="text" name="user_name" placeholder="Your Name" required />
          <input type="email" name="user_email" placeholder="Your Email" required />
          <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
          <button type="submit">Send Message</button>

          {/* Inline message */}
          {message && (
            <p className={isError ? "error-msg" : "success-msg"}>
              {message}
            </p>
          )}
        </form>

        {/* Social Links */}
        <div className="contact-info">
          <h3>Connect with me</h3>
          <ul>
            <li>
              <a href="mailto:zafaraliimran12@gmail.com">📧 zafaraliimran12@gmail.com</a>
            </li>
            <li>
              <a href="https://github.com/zafarali12" target="_blank" rel="noreferrer">🖥️ GitHub</a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/muhammadzafarali" target="_blank" rel="noreferrer">🔗 LinkedIn</a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Contact;
