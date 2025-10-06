import React from "react";
import "./Certifications.css";
import cert1 from "../assets//CERTIFICATE.jpg";
import cert2 from "../assets/fullstack_internship.jpg";
import cert3 from "../assets/CORVIT.jpg";
import cert4 from "../assets/datascience_certificate.jpg";
import cert5 from "../assets/dataanalytics_certificate.jpg";
import cert6 from "../assets/javascipt certificate.png";
import cert7 from "../assets/Communication_skills.jpg";
import cert8 from "../assets/AWS_BEDROCK.png";
import cert9 from "../assets/iamge.png";

function Certifications() {

  const certifications = [
     {
      title: "Generative AI in AWS Bedrock Certificate",
      issuer: "AWS (Amazon Web Services)",
      year: "2025",
      img: cert8,
    },

    {
      title: "PEL Internship Certificate",
      issuer: "PEL (Full Stack Developer Intern)",
      year: "2024",
      img: cert1,
    },
    {
      title: "Developers Cohub Internship Certificate",
      issuer: "Developers Cohub (MERN Stack Developer Intern)",
      year: "2025",
      img: cert2,
    },
    {
      title: "Artificial Intelligence Certification",
      issuer: "Certified in AI",
      year: "2023",
      img: cert3,
    },
    {
      title: "Data Science Certification",
      issuer: "Certified in Data Science",
      year: "2025",
      img: cert4,
    },
    {
      title: "Data Analytics Certification",
      issuer: "Certified in Data Analytics",
      year: "2025",
      img: cert5,
    },
      
     {
      title: "React and Redux Certification",
      issuer: "Knowledge Gate",
      year: "2025",
      img: cert9,
    },
     {
      title: "Javascript Certification",
      issuer: "Knowledge Gate",
      year: "2025",
      img: cert6,
    },
     {
      title: "Communication Skills Certification",
      issuer: "Certified in Communication Skills",
      year: "2025",
      img: cert7,
    },
  ];

  return (
    <section className="certifications" id="certifications">
      <h2>Certifications</h2>
      <div className="cert-grid">
        {certifications.map((cert, index) => (
          <div className="cert-card" key={index}>
            <img src={cert.img} alt={cert.title} className="cert-img" />
            <h3>{cert.title}</h3>
            <p>{cert.issuer}</p>
            <span className="year">{cert.year}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Certifications;
