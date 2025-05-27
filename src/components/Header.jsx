// src/components/Header.jsx
import React from 'react';
import styles from './Header.module.css';

export default function Header({ name }) {
  return (
    <header className={styles.header}>
      <div>
        <h1 className={styles.name}>{name}</h1>
        <p className={styles.title}>Software Developer & Lifelong Learner</p>
      </div>
    </header>
  );
}
