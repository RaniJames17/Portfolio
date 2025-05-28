import React from 'react';
import styles from './Contact.module.css';

const contactItems = [
  {
    icon: <span role="img" aria-label="email" style={{ fontSize: "1.3rem" }}>✉️</span>,
    label: "Email",
    value: "ranijames@loyalistcollege.com",
    link: "mailto:ranijames@loyalistcollege.com"
  },
  {
    icon: <span role="img" aria-label="phone" style={{ fontSize: "1.3rem" }}>📞</span>,
    label: "Phone",
    value: "+1 (555) 123-4567",
    link: "tel:+15551234567"
  },
  {
    icon: <span role="img" aria-label="address" style={{ fontSize: "1.3rem" }}>📍</span>,
    label: "Address",
    value: "Toronto, ON, Canada"
  },
  {
    icon: <span role="img" aria-label="github" style={{ fontSize: "1.3rem" }}>🐙</span>,
    label: "GitHub",
    value: "github.com/RaniJames17",
    link: "https://github.com/RaniJames17"
  },
  {
    icon: <span role="img" aria-label="linkedin" style={{ fontSize: "1.3rem" }}>🔗</span>,
    label: "LinkedIn",
    value: "linkedin.com/in/rani-james-95901b142",
    link: "https://www.linkedin.com/in/rani-james-95901b142/"
  }
];

export default function Contact({ darkMode }) {
  return (
    <footer
      className={
        darkMode
          ? `${styles.contactSection} ${styles.dark}`
          : styles.contactSection
      }
    >
      <div className={styles.footerContent}>
        <div className={styles.headerRow}>
          <h2 className={styles.heading}>
            <span role="img" aria-label="contact" className={styles.icon}>✉️</span>
            Contact
          </h2>
        </div>
        <ul className={styles.contactList}>
          {contactItems.map((item, idx) => (
            <li key={idx} className={styles.contactItem} tabIndex={0}>
              <span className={styles.contactIcon}>{item.icon}</span>
              <span className={styles.contactLabel}>{item.label}</span>
              <span className={styles.tooltip}>
                {item.link ? (
                  <a
                    href={item.link}
                    className={styles.contactLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    tabIndex={-1}
                  >
                    {item.value}
                  </a>
                ) : (
                  <span className={styles.contactValue}>{item.value}</span>
                )}
              </span>
            </li>
          ))}
        </ul>
        <div className={styles.copyright}>
          &copy; {new Date().getFullYear()} Rani James. All rights reserved.
        </div>
      </div>
    </footer>
  );
}