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

export default function Education() {
  return (
    <section className={styles.educationSection}>
      <h2 className={styles.heading}>
        <span role="img" aria-label="education" className={styles.icon}>🎓</span>
        Education
      </h2>
      <div className={styles.educationCard}>
        <p className={styles.educationText}>
          <span className={styles.degree}>B.Sc. in Computer Science</span> — University Name, 2022<br />
          <span className={styles.degree}>Relevant Coursework:</span> Data Structures, Algorithms, Database Systems, Web Development
        </p>
      </div>
    </section>
  );
}