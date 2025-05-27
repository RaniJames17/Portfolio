import React from 'react';

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
    <section className="w-full">
      <h2 className="text-2xl font-bold mb-6 text-left text-blue-800 dark:text-blue-300 pl-2 tracking-tight">
        Contact
      </h2>
      <div className="flex flex-col gap-4 max-w-4xl mx-auto">
        {/* Row 1: Email, Phone, Address */}
        <div className="flex flex-wrap justify-center gap-4">
          {/* Email */}
          <a
            href={`mailto:${email}`}
            className="flex items-center gap-3 p-4 min-w-[220px] rounded-lg bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-700 shadow-sm transition hover:shadow-md hover:bg-blue-100 dark:hover:bg-blue-900"
          >
            <svg className="w-5 h-5 text-blue-700 dark:text-blue-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M16 12l-4-4-4 4m8 0v6a2 2 0 01-2 2H6a2 2 0 01-2-2v-6m16-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v4"></path>
            </svg>
            <span className="font-medium text-blue-900 dark:text-blue-100">{email}</span>
          </a>
          {/* Phone */}
          <div className="flex items-center gap-3 p-4 min-w-[220px] rounded-lg bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-700 shadow-sm select-text">
            <svg className="w-5 h-5 text-blue-700 dark:text-blue-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H5a2 2 0 01-2-2V5zm0 8a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H5a2 2 0 01-2-2v-2zm8-8a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zm0 8a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
            </svg>
            <span className="font-medium text-blue-900 dark:text-blue-100">{phone}</span>
          </div>
          {/* Address */}
          <div className="flex items-center gap-3 p-4 min-w-[220px] rounded-lg bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-700 shadow-sm select-text">
            <svg className="w-5 h-5 text-blue-700 dark:text-blue-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 11c1.104 0 2-.896 2-2s-.896-2-2-2-2 .896-2 2 .896 2 2 2zm0 0c-3.866 0-7 1.79-7 4v3h14v-3c0-2.21-3.134-4-7-4z"></path>
            </svg>
            <span className="font-medium text-blue-900 dark:text-blue-100">{address}</span>
          </div>
        </div>
        {/* Row 2: GitHub, LinkedIn */}
        <div className="flex flex-wrap justify-center gap-4">
          {/* GitHub */}
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-4 min-w-[220px] rounded-lg bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-700 shadow-sm transition hover:shadow-md hover:bg-blue-100 dark:hover:bg-blue-900"
          >
            <svg className="w-5 h-5 text-blue-700 dark:text-blue-300" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.339-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.338 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.847-2.337 4.695-4.566 4.944.359.309.678.919.678 1.852 0 1.336-.012 2.417-.012 2.747 0 .267.18.579.688.481C19.138 20.203 22 16.447 22 12.021 22 6.484 17.523 2 12 2z"/>
            </svg>
            <span className="font-medium text-blue-900 dark:text-blue-100">{githubLabel}</span>
          </a>
          {/* LinkedIn */}
          <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-4 min-w-[220px] rounded-lg bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-700 shadow-sm transition hover:shadow-md hover:bg-blue-100 dark:hover:bg-blue-900"
          >
            <svg className="w-5 h-5 text-blue-700 dark:text-blue-300" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.381-1.563 2.845-1.563 3.043 0 3.604 2.004 3.604 4.609v5.587z"/>
            </svg>
            <span className="font-medium text-blue-900 dark:text-blue-100">{linkedinLabel}</span>
          </a>
        </div>
      </div>
    </section>
  );
}