import React from 'react';

const skills = [
  'SQL', 'PL/SQL', 'ASP.NET', 'JavaScript', 'HTML', 'CSS', 'C#',
  'Oracle', 'PostgreSQL', 'Performance Tuning',
  'Git', 'Jenkins', 'SonarQube', 'CI/CD', 'Agile', 'Mentoring'
];

export default function Skills() {
  return (
    <section className="my-10 w-full">
      <h2 className="text-2xl font-bold mb-4 text-left text-blue-800 dark:text-blue-300 pl-2 flex items-center gap-2">
        <span role="img" aria-label="skills" className="text-blue-400 dark:text-blue-200">🛠️</span>
        Skills
      </h2>
      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 w-full">
        {skills.map((skill) => (
          <li
            key={skill}
            className="
              h-16 flex items-center justify-center rounded-xl shadow text-base font-semibold
              border border-blue-200 dark:border-blue-700
              text-blue-900 dark:text-blue-100
              bg-blue-50 dark:bg-blue-950
              hover:shadow-md hover:bg-blue-100 dark:hover:bg-blue-900 transition
            "
          >
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
}