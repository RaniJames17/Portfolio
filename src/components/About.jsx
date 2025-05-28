import React from 'react';
import styles from './About.module.css';

export default function About({ darkMode }) {
  return (
    <section
      className={
        darkMode
          ? `${styles.aboutSection} ${styles.dark}`
          : styles.aboutSection
      }
    >
      <div className={styles.headerRow}>
        <h2 className={styles.heading}>
          <span role="img" aria-label="about" className={styles.icon}>💡</span>
          About Me
        </h2>
      </div>
      <div className={styles.aboutCard}>
        <p className={styles.aboutText}>
          <span className={styles.highlight}>Full Stack Developer</span> skilled in <span className={styles.highlight}>SQL, PL/SQL, ASP.NET, JavaScript, HTML, CSS, and C#</span>.<br />
          Experienced with <span className={styles.highlight}>Oracle</span> and <span className={styles.highlight}>PostgreSQL</span> databases, including performance tuning.<br />
          Proficient in <span className={styles.highlight}>Git, Jenkins, SonarQube, and CI/CD workflows</span>.<br />
          I love <span className={styles.highlight}>collaborating, mentoring</span>, and solving complex problems with <span className={styles.highlight}>clean code</span>!
        </p>
      </div>
    </section>
  );
}


// This component is responsible for displaying the "About Me" section of the resume.
// It takes a prop called "name" and displays a brief introduction about the user.