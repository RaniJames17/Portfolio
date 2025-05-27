import React, { useState } from 'react';

const experiences = [
  {
    title: "Technology Lead",
    company: "Infosys Limited – Bangalore, India",
    period: "May 2021 – April 2024",
    details: [
      "Developed and maintained ASP.NET and PL/SQL applications, improving user experience and performance.",
      "Optimized Oracle and PostgreSQL database schemas, boosting query performance by 30%.",
      "Streamlined development using Git (version control), Jenkins (CI), and SonarQube (code quality).",
      "Collaborated with cross-functional teams to deliver projects on time and within budget.",
      "Mentored junior developers, supporting their technical and professional growth."
    ]
  },
  {
    title: "Oracle Developer",
    company: "Septa Infotech – Kochi, India",
    period: "July 2019 – April 2021",
    details: [
      "Built and maintained Oracle SQL and PL/SQL applications, enhancing data processing reliability.",
      "Implemented complex business logic using procedures, functions, and triggers.",
      "Led data migration efforts from legacy systems, ensuring data accuracy and integrity.",
      "Resolved database issues and minimized downtime through proactive troubleshooting."
    ]
  },
  {
    title: "Application Support Analyst",
    company: "Wipro Technologies – Bangalore, India",
    period: "November 2015 – July 2019",
    details: [
      "Supported Oracle E-Business Suite SCM modules with a focus on technical issue resolution.",
      "Met SLA requirements for response and resolution times with consistent efficiency.",
      "Improved support processes through feedback analysis and service enhancements.",
      "Coordinated across teams to address client support needs effectively.",
      "Used ServiceNow for ticketing and participated in 24/7 on-call rotations for critical support."
    ]
  }
];

export default function Experience() {
  const [hoveredIdx, setHoveredIdx] = useState(null);

  return (
    <section className="my-10 w-full">
      <h2 className="text-2xl font-bold mb-6 text-left text-blue-700 dark:text-yellow-300 flex items-center gap-2 pl-2">
        <span role="img" aria-label="briefcase">💼</span> Experience
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {experiences.map((exp, idx) => (
          <ExperienceCard
            key={idx}
            {...exp}
            showDetails={hoveredIdx === idx}
            onMouseEnter={() => setHoveredIdx(idx)}
            onMouseLeave={() => setHoveredIdx(null)}
          />
        ))}
      </div>
    </section>
  );
}

function ExperienceCard({ title, company, period, details, showDetails, onMouseEnter, onMouseLeave }) {
  return (
    <div
      className="mb-4 border rounded-lg shadow p-4 bg-white dark:bg-gray-900 transition-all duration-200"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="w-full text-left font-semibold text-lg text-blue-700 dark:text-yellow-300 flex justify-between items-center">
        <span>
          {title} @ {company} <span className="text-sm text-gray-500">({period})</span>
        </span>
        <span className="ml-2">{showDetails ? "▲" : "▼"}</span>
      </div>
      {showDetails && (
        <div className="mt-2 text-gray-700 dark:text-gray-200">
          <ul className="list-disc pl-5 space-y-1 text-gray-800 dark:text-gray-200 text-sm">
            {details.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
// // This component is responsible for displaying the "Experience" section of the resume.
// // It lists the user's work experience, including job titles and companies.