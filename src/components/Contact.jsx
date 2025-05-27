import React from 'react';
import styles from './Contact.module.css';

export default function Contact({
  github = "https://github.com/RaniJames17",
  githubLabel = "github.com/RaniJames17",
  address = "Toronto, ON, Canada",
  email = "ranijames@loyalistcollege.com",
  phone = "+1 (555) 123-4567",
  linkedin = "https://www.linkedin.com/in/rani-james-95901b142/",
  linkedinLabel = "linkedin.com/in/rani-james-95901b142"
}) {
  return (
    <section className={styles.contactSection}>
      <div className={styles.headerRow}>
        <h2 className={styles.heading}>
          <span role="img" aria-label="contact" className={styles.icon}>📫</span>
          Contact
        </h2>
      </div>
      <div className={styles.contactCard}>
        <ul className={styles.contactList}>
          <li>
            <strong>Email:</strong>{" "}
            <a href={`mailto:${email}`} className={styles.contactLink}>{email}</a>
          </li>
          <li>
            <strong>Phone:</strong>{" "}
            <span className={styles.contactLabel}>{phone}</span>
          </li>
          <li>
            <strong>Address:</strong>{" "}
            <span className={styles.contactLabel}>{address}</span>
          </li>
          <li>
            <strong>GitHub:</strong>{" "}
            <a href={github} target="_blank" rel="noopener noreferrer" className={styles.contactLink}>{githubLabel}</a>
          </li>
          <li>
            <strong>LinkedIn:</strong>{" "}
            <a href={linkedin} target="_blank" rel="noopener noreferrer" className={styles.contactLink}>{linkedinLabel}</a>
          </li>
        </ul>
      </div>
    </section>
  );
}