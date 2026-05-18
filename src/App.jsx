import { useState, useEffect } from 'react'
import Header from './components/Header'
import Preloader from './components/Preloader'
import Home from './components/Home'
import About from './components/About'
import TechnicalSkills from './components/TechnicalSkills'
import Experience from './components/Experience'
import ProfessionalSkills from './components/ProfessionalSkills'
import Projects from './components/Projects'
import Console from './components/Console'
import Hobbies from './components/Hobbies'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './index.css'

function App() {
  const [isDark, setIsDark] = useState(() => localStorage.getItem('theme') === 'dark')
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light')
    localStorage.setItem('theme', isDark ? 'dark' : 'light')
  }, [isDark])

  useEffect(() => {
    const moveCursor = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', moveCursor)
    return () => window.removeEventListener('mousemove', moveCursor)
  }, [])

  return (
    <>
      <Preloader />
      {/* Custom Cursor */}
      <div 
        className="custom-cursor" 
        style={{ left: `${cursorPos.x}px`, top: `${cursorPos.y}px` }} 
      />
      <div 
        className="custom-cursor-outline" 
        style={{ left: `${cursorPos.x}px`, top: `${cursorPos.y}px` }} 
      />

      <div className="animated-bg" />
      <div className="orb orb-1" />
      <div className="orb orb-2" />
      <div className="orb orb-3" />

      <Header isDark={isDark} toggleTheme={() => setIsDark(p => !p)} />
      <Home isDark={isDark} />
      <About />
      <TechnicalSkills />
      <Experience />
      <ProfessionalSkills />
      <Projects />
      <Console />
      <Hobbies />
      <Contact />
      <Footer />

      <a href="#home" className="top"><i className="bx bx-up-arrow-alt" /></a>
    </>
  )
}

export default App
