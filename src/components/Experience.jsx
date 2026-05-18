const experiences = [
  {
    role: 'Junior Software Developer',
    company: 'Opes Solutions',
    period: "Apr '26 — Present",
    type: 'Full-time',
    color: '#0077cc',
    points: [
      'Worked on large-scale live web applications using React.js, Next.js, Angular, and TypeScript. Built scalable and high-performance user interfaces with reusable components, advanced state management, secure API integrations, and optimized frontend architecture.',
      'Also worked on enterprise-level features including RBAC, SSR, responsive dashboards, lazy loading, and real-time data handling for production applications.',
      'Developed and optimized complex dashboard modules with dynamic data handling and responsive UI architecture.',
      'Improved application performance through code optimization, component reusability, lazy loading, and efficient API management.',
    ],
    tags: ['React.js', 'Next.js', 'Angular', 'TypeScript', 'RBAC', 'SSR'],
  },
  {
    role: 'Software Trainee',
    company: 'Kent RO Systems',
    period: "Mar '25 — Mar '26",
    type: 'Trainee',
    color: '#5b1fcf',
    points: [
      'Worked as a Frontend Developer on enterprise applications using React.js, Next.js, JavaScript, TypeScript, Tailwind CSS, SQL and Baan ERP.',
      'Contributed to responsive web application development, reusable UI components, REST API integrations, and dashboard modules while improving overall application performance and maintainability.',
      'Developed reusable and scalable frontend components following modern development standards and responsive design principles.',
      'Worked on API integrations, dashboard modules, and database-related tasks to improve application efficiency and workflow management.',
    ],
    tags: ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS', 'REST API', 'Baan ERP'],
  },
  {
    role: 'Web Developer Intern',
    company: 'Pentair Water India Pvt Ltd',
    period: "Jul '24 — Feb '25",
    type: 'Internship',
    color: '#c62275',
    points: [
      'Played a key role in a live project by restructuring legacy code, enhancing overall code quality, and proactively identifying and resolving bugs to improve application stability and performance.',
      'Designed and developed reusable, scalable React.js components aligned with modern coding standards.',
      'Collaborated closely with the team to streamline workflows and ensure the timely delivery of features and updates.',
    ],
    tags: ['React.js', 'JavaScript', 'CSS', 'Legacy Code', 'Bug Fixing'],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="experience-section">
      <div className="section-title">
        <h2>Work <span>Experience</span></h2>
        <p>My professional journey so far</p>
        <div className="title-line" />
      </div>

      <div className="timeline">
        {experiences.map((exp, i) => (
          <div className="timeline-item" key={i}>
            <div className="timeline-dot" style={{ background: exp.color }} />
            <div className="timeline-card">
              <div className="timeline-header">
                <div>
                  <h3 className="exp-role">{exp.role}</h3>
                  <p className="exp-company">
                    <i className="bx bx-buildings" /> {exp.company}
                  </p>
                </div>
                <div className="exp-meta">
                  <span className="exp-period">
                    <i className="bx bx-calendar" /> {exp.period}
                  </span>
                  <span className="exp-type-badge" style={{ borderColor: exp.color, color: exp.color }}>
                    {exp.type}
                  </span>
                </div>
              </div>

              <ul className="exp-points">
                {exp.points.map((pt, j) => (
                  <li key={j}><i className="bx bx-chevron-right" />{pt}</li>
                ))}
              </ul>

              <div className="exp-tags">
                {exp.tags.map((tag) => (
                  <span className="exp-tag" key={tag}>{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
