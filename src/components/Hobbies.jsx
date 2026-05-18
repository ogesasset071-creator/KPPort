const hobbies = [
  {
    icon: 'bx bx-headphone',
    title: 'Listening to Music',
    desc: 'I enjoy vibing to Haryanvi and Bhojpuri beats — music keeps me motivated, focused, and recharged.',
  },
  {
    icon: 'bx bx-swim',
    title: 'Swimming',
    desc: 'Water is my peace. Swimming helps me clear my mind and stay physically strong and energized.',
  },
  {
    icon: 'bx bx-tennis-ball',
    title: 'Playing Badminton',
    desc: 'Badminton fuels my competitive spirit, keeps me fit, and brings joy through every smash and sprint.',
  },
]

export default function Hobbies() {
  return (
    <section id="hobbies" className="hobbies-section">
      <div className="section-title">
        <h2>My <span>Hobbies</span></h2>
        <div className="title-line" />
      </div>
      <p className="hobby-intro">
        Things I love outside of coding <i className="bx bx-happy" />
      </p>
      <div className="hobbies-grid">
        {hobbies.map((h) => (
          <div className="hobby-card" key={h.title}>
            <i className={h.icon} />
            <h4>{h.title}</h4>
            <p>{h.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
