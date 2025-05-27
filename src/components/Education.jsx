import React from 'react';

const education = [
  {
    icon: "🧑‍🎓",
    degree: "Ontario College Graduate Certificate",
    field: "Computer Software and Database Development",
    school: "Loyalist College, Toronto, ON",
    period: "May 2024 – Present"
  },
  {
    icon: "🎓",
    degree: "Bachelor of Science in Information Technology",
    field: "",
    school: "Siena College of Professional Studies, Kerala, India",
    period: "June 2012 – March 2015"
  }
];

export default function Education() {
  return (
    <section className="my-10 w-full">
      <h2 className="text-2xl font-bold mb-6 text-left text-green-700 dark:text-yellow-300 flex items-center gap-2 pl-2">
        <span role="img" aria-label="education">🎓</span> Education & Training
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {education.map((edu, idx) => (
          <div
            key={edu.degree}
            className="bg-white dark:bg-white border-2 border-green-200 dark:border-yellow-400 shadow rounded-xl p-4 flex flex-col transition-all duration-300
              hover:scale-105 hover:z-10 relative hover:shadow-2xl
              hover:border-green-500 dark:hover:border-yellow-300
              hover:bg-green-50 dark:hover:bg-yellow-100/30
              hover:ring-2 hover:ring-green-300 dark:hover:ring-yellow-200"
          >
            <div className="mb-2 flex items-center gap-2">
              <span className="text-2xl">{edu.icon}</span>
              <div>
                <h3 className="text-lg font-bold text-green-800 dark:text-yellow-700">{edu.degree}</h3>
                {edu.field && (
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-800">{edu.field}</p>
                )}
                <p className="text-sm text-gray-600 dark:text-gray-800">{edu.school}</p>
                <span className="block text-xs font-semibold text-green-500 dark:text-yellow-600 mt-1">{edu.period}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}