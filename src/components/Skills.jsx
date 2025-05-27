import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import styles from './Skills.module.css';

const skills = [
  'SQL', 'PL/SQL', 'ASP.NET', 'JavaScript', 'HTML', 'CSS', 'C#',
  'Oracle', 'PostgreSQL', 'Performance Tuning',
  'Git', 'Jenkins', 'SonarQube', 'CI/CD', 'Agile', 'Mentoring'
];

export default function Skills() {
  return (
    <section className={styles.skillsSection}>
      <h2 className={styles.heading}>
        <span role="img" aria-label="skills">🛠️</span>
        Skills
      </h2>
      <ul className={styles.skillsGrid}>
        {skills.map((skill) => (
          <li key={skill} className={styles.skillCard}>
            <FaCheckCircle style={{ color: "#60a5fa", marginBottom: "0.25rem", opacity: 0.7 }} />
            <span>{skill}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}