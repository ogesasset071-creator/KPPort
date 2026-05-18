import aboutImg from '../assets/AboutImg.jpg'
import resume from '../assets/KalpanaResume2.0.pdf'

export default function About() {
  return (
    <section className="about" id="about">
      <div className="about-img-container">
        <img src={aboutImg} alt="Kalpana About" />
      </div>
      <div className="about-text">
        <h2>About <span>Me</span></h2>
        <h4>Full Stack Developer</h4>
        <p>
          Passionate <strong>Full Stack Developer</strong> with strong expertise in
          <strong> frontend development</strong> using React.JS and Next.JS, focused on building
          responsive and user-friendly web applications.
        </p>
        <p>
          Skilled in <strong>backend development</strong> with Node.js and Express.JS, along with
          strong knowledge of REST APIs, SQL, and clean architecture. Experienced in
          end-to-end full stack development and available as an <strong>Immediate Joiner</strong>.
        </p>

        <div className="about-info-grid">
          <div className="info-item">
            <i className="bx bx-map" />
            <span>Noida, Uttar Pradesh, India</span>
          </div>
          <div className="info-item">
            <i className="bx bx-envelope" />
            <span>kalpanak2203@gmail.com</span>
          </div>
          <div className="info-item">
            <i className="bx bx-phone" />
            <span>+91 8318481406</span>
          </div>
          <div className="info-item">
            <i className="bx bx-briefcase" />
            <span>Immediate Joiner</span>
          </div>
        </div>

        <a 
          href="https://drive.google.com/file/d/1-eWgocMm32j5PMhQGLdmJxcJKhj0Wdxy/view?usp=drive_link" 
          target="_blank" 
          rel="noreferrer" 
          className="btn-box"
        >
          <i className="bx bx-show" /> View Resume
        </a>
      </div>
    </section>
  )
}
