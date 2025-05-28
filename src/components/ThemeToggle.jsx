// src/components/ThemeToggle.jsx
import React from 'react';

export default function ThemeToggle({ darkMode, onToggle }) {
  return (
    <button
      onClick={onToggle}
      aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
      style={{
        background: darkMode ? "#334155" : "#e0e7ef",
        border: "none",
        cursor: "pointer",
        fontSize: "1.1rem",
        fontWeight: 600,
        color: darkMode ? "#ffe066" : "#2563eb",
        padding: "0.5rem 1.2rem 0.5rem 0.9rem",
        borderRadius: "1.5rem",
        display: "flex",
        alignItems: "center",
        gap: "0.5rem",
        boxShadow: darkMode
          ? "0 2px 8px rgba(30,41,59,0.15)"
          : "0 2px 8px rgba(30,58,138,0.08)",
        transition: "background 0.2s, color 0.2s"
      }}
    >
      {darkMode ? (
        <>
          <span role="img" aria-label="sun" style={{ fontSize: "1.3rem" }}>🌞</span>
          Light Mode
        </>
      ) : (
        <>
          <span role="img" aria-label="moon" style={{ fontSize: "1.2rem" }}>🌙</span>
          Dark Mode
        </>
      )}
    </button>
  );
}
