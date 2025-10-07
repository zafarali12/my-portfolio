import React from "react";
import { FaStar, FaRegStar } from "react-icons/fa";
import "./Skills.css";

function Skills() {
  // Helper to render stars
  const renderStars = (rating) => {
    const totalStars = 5;
    return (
      <div className="stars">
        {[...Array(totalStars)].map((_, i) =>
          i < rating ? (
            <FaStar key={i} className="star filled" />
          ) : (
            <FaRegStar key={i} className="star" />
          )
        )}
      </div>
    );
  };

  // Organized categories with ratings
  const skills = [
    {
      category: "Frontend Development",
      list: [
        { name: "HTML5", rating: 5 },
        { name: "CSS3", rating: 5 },
        { name: "JavaScript (ES6+)", rating: 4 },
        { name: "React.js", rating: 5 },
        { name: "Bootstrap", rating: 4 },
        { name: "Tailwind CSS", rating: 5 },
      ],
    },
    {
      category: "Backend Development",
      list: [
        { name: "Node.js", rating: 4 },
        { name: "Express.js", rating: 4 },
        { name: "PHP", rating: 3 },
        { name: "SQL / MySQL", rating: 4 },
        { name: "MongoDB", rating: 4 },
      ],
    },
    {
      category: "Frameworks & Libraries",
      list: [
        { name: "React Vite", rating: 4},
        { name: "Next.js", rating: 3 },
        { name: "Mongoose", rating: 4 },
        { name: "Redux", rating: 3 },
      ],
    },
    {
      category: "Machine Learning & AI",
      list: [
        { name: "Python", rating: 5 },
        { name: "Scikit-learn", rating: 4 },
        { name: "TensorFlow", rating: 3 },
        { name: "LangChain", rating: 4 },
        { name: "Prompt Engineering", rating: 5 },
      ],
    },
    {
      category: "Tools & Platforms",
      list: [
        { name: "Git / GitHub", rating: 5 },
        { name: "VS Code", rating: 5 },
        { name: "REST APIs", rating: 4 },
        { name: "N8N Automation", rating: 4 },
        { name: "Netlify / Vercel", rating: 5 },
      ],
    },
  ];

  return (
    <section className="skills" id="skills">
      <h2>Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            <h3>{skill.category}</h3>
            <ul>
              {skill.list.map((item, i) => (
                <li key={i} className="skill-item">
                  <span>{item.name}</span>
                  {renderStars(item.rating)}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
