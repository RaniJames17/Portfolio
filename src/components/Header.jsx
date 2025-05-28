// src/components/Header.jsx
import React from 'react';
import styles from './Header.module.css';
import ThemeToggle from './ThemeToggle';
import profilePic from '../assets/profile.jpg'; // Adjust path if needed

export default function Header({ darkMode, onToggle }) {
  return (
    <header className={styles.header}>
      <div className={styles.profileInfo}>
        <img
          src={profilePic}
          alt="Profile"
          className={styles.profilePhoto}
        />
        <div>
          <span className={styles.name}>Rani James</span>
          <div className={styles.role}>Full Stack Developer</div>
        </div>
      </div>
      <div className={styles.toggleWrapper}>
        <ThemeToggle darkMode={darkMode} onToggle={onToggle} />
      </div>
    </header>
  );
}
