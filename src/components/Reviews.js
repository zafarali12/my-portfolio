import React from "react";
import "./Reviews.css";

function Reviews() {
  const reviews = [
    {
      name: "Talha ",
      role: "Project Partner",
      text:
        "I collaborated with Zafar on the Wanderlust project. He made strong contributions to both frontend and backend development. His problem-solving skills and dedication were truly impressive.",
    },
    {
      name: "Sahar ",
      role: "Internship Teammate",
      text:
        "During our internship project, Zafar was extremely helpful. His ideas and technical expertise elevated the project to the next level. He is a very supportive and cooperative teammate.",
    },
    {
      name: "Sir Tayyab ",
      role: "Internship Mentor",
      text:
        "During his internship. His work ethic, dedication, and eagerness to learn left a lasting impression on me. He has a bright future ahead.",
    },
  ];

  return (
    <section className="reviews" id="reviews">
      <h2>Testimonials <span ></span></h2>
      <div className="reviews-grid">
        {reviews.map((r, i) => (
          <div className="review-card" key={i}>
            <p className="review-text">“{r.text}”</p>
            <div className="review-meta">
              <span className="review-name">{r.name}</span>
              <span className="review-role">{r.role}</span>
            </div>
          </div>
        ))}
      </div>
      <p className="reviews-note">
        
      </p>
    </section>
  );
}

export default Reviews;
