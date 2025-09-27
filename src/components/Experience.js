import React from "react";
import "./Experience.css";

function Experience() {
  const experiences = [
    {
      company: "Cortexis Solution hub (Remote / Lahore)",
      role: "MERN Stack Developer Intern",
      duration: "Aug 2025 – Oct 2025",
      details: [
       "During my internship at Cortexis Solution Hub, I completed 9 structured MERN stack tasks and developed a main project using Express.js, Node.js, React (Vite), and Bootstrap. This experience helped me strengthen my skills in building responsive UIs, developing RESTful APIs, and integrating frontend with backend efficiently."
      ],
    },
   
    {
      company: "Developers Cohub (Remote / Lahore)",
      role: "MERN Stack Developer Intern",
      duration: "Mar 2025 – May 2025",
      details: [
        "Built and maintained responsive and dynamic web interfaces using React.js and integrated REST APIs.",
        "Worked on backend logic using Node.js, Express.js, and MongoDB for CRUD operations."
      ],
    },
     {
      company: "PEL (Lahore, Pakistan)",
      role: "Full Stack Developer Intern",
      duration: "Aug 2024 – Oct 2024",
      details: [
        "Contributed to the development of a full-stack eCommerce web application using React.js, Node.js, Express.js, and MongoDB.",
        "Implemented user authentication, product listings, cart functionalities, and admin dashboard features.",
        "Collaborated with senior developers to deploy the project on Render and manage version control via GitHub."
      ],
    },
  ];

  return (
    <section className="experience" id="experience">
      <h2>Experience</h2>
      <div className="timeline">
        {experiences.map((exp, index) => (
          <div className="timeline-item" key={index}>
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3>{exp.role}</h3>
              <h4>{exp.company}</h4>
              <span className="duration">{exp.duration}</span>
              <ul>
                {exp.details.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
