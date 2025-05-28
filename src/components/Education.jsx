import React from 'react';
import styles from './Education.module.css';

const education = [
  {
    icon: "🧑‍🎓",
    degree: "Ontario College Graduate Certificate",
    field: "Computer Software and Database Development",
    school: "Loyalist College, Toronto, ON",
    period: "May 2024 – Present"
  },
  {
    icon: "🎓",
    degree: "Bachelor of Science in Information Technology",
    field: "",
    school: "Siena College of Professional Studies, Kerala, India",
    period: "June 2012 – March 2015"
  }
];

export default function Education({ darkMode }) {
  return (
    <section
      className={
        darkMode
          ? `${styles.educationSection} ${styles.dark}`
          : styles.educationSection
      }
    >
      <h2 className={styles.heading}>
        <span role="img" aria-label="education" className={styles.icon}>🎓</span>
        Education
      </h2>
      <div className={styles.educationGrid}>
        {education.map((edu, idx) => (
          <div key={idx} className={styles.educationCard}>
            <div className={styles.icon} style={{ fontSize: "2rem" }}>{edu.icon}</div>
            <div className={styles.degree}>{edu.degree}</div>
            {edu.field && <div className={styles.field}>{edu.field}</div>}
            <div className={styles.school}>{edu.school}</div>
            <div className={styles.period}>{edu.period}</div>
          </div>
        ))}
      </div>
    </section>
  );
}