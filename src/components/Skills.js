import React from "react";
import "./Skills.css";

function Skills() {
  const skills = [
    { category: "Programming & Frameworks", list: ["Python", "JavaScript", "Node.js", "React.js", "Express.js", "MongoDB"] },
    { category: "Machine Learning & AI", list: ["Naive Bayes", "Regression", "Classification", "Clustering", "LangChain", "Prompt Engineering"] },
    { category: "Data Science Tools", list: ["Pandas", "NumPy", "Scikit-learn", "TensorFlow", "PyTorch", "Jupyter Notebook"] },
    { category: "Other Tools", list: ["Git/GitHub", "REST APIs", "VS Code", "N8N"] },
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
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
