const skills = [
  { label: 'Creativity',      percentage: 75, pathClass: 'path-1' },
  { label: 'Team Work',       percentage: 80, pathClass: 'path-2' },
  { label: 'Communication',   percentage: 95, pathClass: 'path-3' },
  { label: 'Problem Solving', percentage: 90, pathClass: 'path-4' },
]

function RadialBar({ label, percentage, pathClass }) {
  return (
    <div className="radial-bars">
      <svg viewBox="0 0 200 200">
        <defs>
          <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#00eeff" />
            <stop offset="100%" stopColor="#7b2fff" />
          </linearGradient>
        </defs>
        <circle className="progress-bar" cx="100" cy="100" r="80" />
        <circle
          className={`path ${pathClass}`}
          cx="100" cy="100" r="80"
          style={{ animation: `animate-${pathClass} 1.2s 0.8s ease forwards` }}
        />
      </svg>
      <div className="percentage">{percentage}%</div>
      <div className="skill-label">{label}</div>
    </div>
  )
}

export default function ProfessionalSkills() {
  return (
    <section id="professional-skills">
      <div className="section-title">
        <h2>Professional <span>Skills</span></h2>
        <p>My core competencies</p>
        <div className="title-line" />
      </div>
      <div className="container1">
        {skills.map((s) => <RadialBar key={s.label} {...s} />)}
      </div>
    </section>
  )
}
