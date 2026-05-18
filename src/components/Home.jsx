import { useEffect, useRef } from 'react'
import Typed from 'typed.js'
import coderDark from '../assets/coder_girl_dark.png'
import coderLight from '../assets/coder_girl_light.png'

export default function Home({ isDark }) {
  const typedRef = useRef(null)

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: [
        'Full Stack Developer',
        'React.JS & Next.JS Dev',
        'Frontend Specialist',
        'Immediate Joiner 🚀',
      ],
      typeSpeed: 80,
      backSpeed: 60,
      backDelay: 1200,
      loop: true,
    })
    return () => typed.destroy()
  }, [])

  return (
    <section className="home" id="home">
      <div className="home-content">
        <p className="greeting">👋 Welcome to my portfolio</p>
        <h1>Kalpana Kushwaha</h1>
        <div className="typed-wrapper">
          I'm a <span ref={typedRef}></span>
        </div>
        <p>
          Passionate Full Stack Developer with expertise in <strong>React.JS & Next.JS</strong>,
          skilled in backend development with <strong>Node.js & Express.JS</strong>,
          REST APIs, SQL, and clean architecture. Available as an <strong>Immediate Joiner</strong>.
        </p>

        <div className="home-sci">
          <a href="https://www.linkedin.com/in/kalpana-kushwaha-288067230/" target="_blank" rel="noreferrer" title="LinkedIn">
            <i className="bx bxl-linkedin" />
          </a>
          <a href="https://github.com/kalpanak2203" target="_blank" rel="noreferrer" title="GitHub">
            <i className="bx bxl-github" />
          </a>
          <a href="mailto:kalpanak2203@gmail.com" title="Email">
            <i className="bx bx-envelope" />
          </a>
          <a href="tel:+918318481406" title="Phone">
            <i className="bx bx-phone" />
          </a>
        </div>

        <div className="home-buttons" style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', opacity: 0, animation: 'slideTop .9s ease 1.4s forwards' }}>
          <a href="#about" className="btn-box" style={{ opacity: 1, animation: 'none' }}>
            Explore My Work <i className="bx bx-right-arrow-alt" />
          </a>
          <a href="#contact" className="btn-secondary">
            Let's Connect <i className="bx bx-message-square-detail" />
          </a>
        </div>
      </div>

      <div className="home-img-wrap">
        <div className="home-img-circle">
          <img 
            src={isDark ? coderDark : coderLight} 
            alt="Developer Illustration" 
            style={{ 
              width: '100%', 
              height: '100%', 
              objectFit: 'contain',
              filter: isDark ? 'drop-shadow(0 0 35px rgba(0, 238, 255, 0.4))' : 'drop-shadow(0 0 35px rgba(123, 47, 255, 0.25))',
              transition: 'all 0.5s ease-in-out'
            }} 
          />
        </div>
      </div>
    </section>
  )
}
