import React from 'react';
import styles from './Skills.module.css';

const skills = [
  { name: "JavaScript", icon: "🟨" },
  { name: "HTML5", icon: "🔶" },
  { name: "CSS3", icon: "🔷" },
  { name: "C#", icon: "💻" },
  { name: "ASP.NET", icon: "🌐" },
  { name: "SQL", icon: "🗄️" },
  { name: "PL/SQL", icon: "📊" },
  { name: "Oracle", icon: "🍊" },
  { name: "PostgreSQL", icon: "🐘" },
  { name: "Git", icon: "🔗" },
  { name: "Jenkins", icon: "🤖" },
  { name: "SonarQube", icon: "🌊" },
  { name: "CI/CD", icon: "🚀" },
];

export default function Skills({ darkMode }) {
  return (
    <section
      className={
        darkMode
          ? `${styles.skillsSection} ${styles.dark}`
          : styles.skillsSection
      }
    >
      <h2 className={styles.heading}>Skills</h2>
      <div className={styles.skillsGrid}>
        {skills.map((skill) => (
          <div key={skill.name} className={styles.skillCard} tabIndex={0}>
            <span className={styles.skillIcon} aria-hidden="true">{skill.icon}</span>
            <span className={styles.skillName}>{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}