import React from 'react';

export default function About() {
  return (
    <section className="my-10 w-full">
      <h2 className="text-3xl font-bold mb-4 text-left text-blue-800 dark:text-blue-300 pl-2 flex items-center gap-2">
        <span role="img" aria-label="about" className="text-blue-400 dark:text-blue-200">💡</span>
        About Me
      </h2>
      <div className="min-h-[8rem] flex items-center bg-gradient-to-br from-blue-50 via-white to-blue-100 dark:from-blue-950 dark:via-gray-900 dark:to-blue-900 border-l-4 border-blue-400 dark:border-blue-500 shadow p-6 w-full">
        <p className="text-lg leading-relaxed text-gray-800 dark:text-gray-100 whitespace-pre-line w-full">
          <span className="font-semibold text-blue-700 dark:text-blue-200">Full Stack Developer</span> skilled in <span className="text-blue-700 dark:text-blue-200">SQL, PL/SQL, ASP.NET, JavaScript, HTML, CSS, and C#</span>.
          <br />
          Experienced with <span className="text-blue-700 dark:text-blue-200">Oracle</span> and <span className="text-blue-700 dark:text-blue-200">PostgreSQL</span> databases, including performance tuning.
          <br />
          Proficient in <span className="text-blue-700 dark:text-blue-200">Git, Jenkins, SonarQube, and CI/CD workflows</span>.
          <br />
          I love <span className="text-blue-700 dark:text-blue-200">collaborating, mentoring</span>, and solving complex problems with <span className="font-semibold text-blue-700 dark:text-blue-200">clean code</span>!
        </p>
      </div>
    </section>
  );
}


// This component is responsible for displaying the "About Me" section of the resume.
// It takes a prop called "name" and displays a brief introduction about the user.