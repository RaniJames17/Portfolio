import React, { useState } from 'react';
import styles from './Experience.module.css';

const experiences = [
  {
    title: "Technology Lead",
    company: "Infosys Limited – Bangalore, India",
    period: "May 2021 – April 2024",
    details: [
      "Developed and maintained ASP.NET and PL/SQL applications, improving user experience and performance.",
      "Optimized Oracle and PostgreSQL database schemas, boosting query performance by 30%.",
      "Streamlined development using Git (version control), Jenkins (CI), and SonarQube (code quality).",
      "Collaborated with cross-functional teams to deliver projects on time and within budget.",
      "Mentored junior developers, supporting their technical and professional growth."
    ]
  },
  {
    title: "Oracle Developer",
    company: "Septa Infotech – Kochi, India",
    period: "July 2019 – April 2021",
    details: [
      "Built and maintained Oracle SQL and PL/SQL applications, enhancing data processing reliability.",
      "Implemented complex business logic using procedures, functions, and triggers.",
      "Led data migration efforts from legacy systems, ensuring data accuracy and integrity.",
      "Resolved database issues and minimized downtime through proactive troubleshooting."
    ]
  },
  {
    title: "Application Support Analyst",
    company: "Wipro Technologies – Bangalore, India",
    period: "November 2015 – July 2019",
    details: [
      "Supported Oracle E-Business Suite SCM modules with a focus on technical issue resolution.",
      "Met SLA requirements for response and resolution times with consistent efficiency.",
      "Improved support processes through feedback analysis and service enhancements.",
      "Coordinated across teams to address client support needs effectively.",
      "Used ServiceNow for ticketing and participated in 24/7 on-call rotations for critical support."
    ]
  }
];

export default function Experience({ darkMode }) {
  const [openIdx, setOpenIdx] = useState(null);

  return (
    <section
      className={
        darkMode
          ? `${styles.experienceSection} ${styles.dark}`
          : styles.experienceSection
      }
    >
      <h2 className={styles.heading}>
        <span role="img" aria-label="experience" className={styles.icon}>💼</span>
        Experience
      </h2>
      <div className={styles.experienceGrid}>
        {experiences.map((exp, idx) => (
          <ExperienceCard
            key={idx}
            {...exp}
            open={openIdx === idx}
            onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
          />
        ))}
      </div>
    </section>
  );
}

function ExperienceCard({ title, company, period, details }) {
  return (
    <div
      className={styles.experienceCard}
      tabIndex={0}
      role="button"
      aria-label={`${title} at ${company}`}
    >
      <div className={styles.cardHeader}>
        <div>
          <span className={styles.role}>{title}</span>
          <span className={styles.company}>@ {company}</span>
        </div>
        <div className={styles.period}>{period}</div>
        <span className={styles.toggleIcon}>▼</span>
      </div>
      <ul className={styles.detailsList}>
        {details.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
// // This component is responsible for displaying the "Experience" section of the resume.
// // It lists the user's work experience, including job titles and companies.