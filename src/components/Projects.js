import React from "react";
import "./Projects.css";

function Projects() {
  const projects = [
    {
      title: "Wanderlust Travel Platform",
      description:
        "A travel booking website like Airbnb built with React.js, Node.js, Express.js, and MongoDB. Features include user authentication, listings, reviews, and booking system.",
      tech: ["React", "Node.js", "MongoDB", "Express.js"],
      link: "https://github.com/zafarali12/FULL-STACK-WANDERLUST", // Replace with actual project link
    },
    {
      title: "Zerodha Trading Platform Clone",
      description:
        "Developed a trading website clone with frontend and backend, including stock listing, order management, and dashboard. Focused on real-time data handling.",
      tech: ["React", "Node.js", "Express.js", "MongoDB"],
      link: "https://github.com/zafarali12/FULL-STACK-ZERODHA-CLONE",
    },
    {
      title: "Naive Bayes Text Classifier",
      description:
        "Implemented a text classification model using Naive Bayes algorithm. Built with Python, Pandas, NumPy, and Scikit-learn, tested on real-world datasets.",
      tech: ["Python", "Scikit-learn", "Pandas", "NumPy"],
      link: "https://github.com/zafarali12",
    },
    {
      title: "AI Agent Workflow Automation",
      description:
        "Created AI Agents to automate business workflows using N8N and prompt engineering. Integrated external APIs for dynamic task handling.",
      tech: ["N8N", "Prompt Engineering", "APIs"],
      link: "https://github.com/zafarali12/n8n-projects",
    },
     {
      title: "Generative AI in AWS Bedrock",
      description:
        "Developed a Generative AI model using AWS Bedrock, leveraging pre-trained models for text generation and summarization.",
      tech: ["AWS", "Generative AI", "Machine Learning"],
      link: "https://github.com/zafarali12/AWS-Bedrock-main-", // Replace with actual project link
    },
    {
  title: "MY-SPACE (Full Stack Web Application)",
  description:
    "Developed a full stack web application during internship at Cortexis Solution Hub. The project included user authentication, responsive UI, and RESTful API integration using Express.js, Node.js, React (Vite), and Bootstrap.",
  tech: ["React (Vite)", "Node.js", "Express.js", "Bootstrap", "MongoDB"],
  link: "https://github.com/zafarali12/MY-SPACE", // Replace with actual repo link if needed
},

  ];

  return (
    <section className="projects" id="projects">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map((proj, index) => (
          <div className="project-card" key={index}>
            <h3>{proj.title}</h3>
            <p>{proj.description}</p>
            <div className="tech-stack">
              {proj.tech.map((t, i) => (
                <span key={i} className="tech">{t}</span>
              ))}
            </div>
            <a href={proj.link} target="_blank" rel="noreferrer">
              <button>View Project</button>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
