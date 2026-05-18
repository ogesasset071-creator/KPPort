import { useState, useEffect } from 'react'

const navLinks = [
  { label: 'Home',     href: '#home' },
  { label: 'About',    href: '#about' },
  { label: 'Skills',   href: '#skills' },
  { label: 'Projects', href: '#portfolio' },
  { label: 'Contact',  href: '#contact' },
]

export default function Header({ isDark, toggleTheme }) {
  const [active, setActive]   = useState('#home')
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (href) => {
    setActive(href)
    setMenuOpen(false)
  }

  return (
    <>
      <header className={`header ${scrolled ? 'scrolled' : ''}`}>
        <a href="#home" className="logo">Kalpana Kushwaha</a>

        {/* Desktop Nav */}
        <nav className="navbar">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={active === link.href ? 'active' : ''}
              onClick={() => handleNav(link.href)}
            >
              {link.label}
            </a>
          ))}

          {/* ── Theme Toggle ── */}
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle light/dark mode"
            title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          >
            <span className="theme-toggle-thumb">
              {isDark ? '🌙' : '☀️'}
            </span>
          </button>
        </nav>

        {/* Hamburger (mobile) */}
        <button
          className={`hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </header>

      {/* Mobile Nav Overlay */}
      <nav className={`mobile-nav ${menuOpen ? 'open' : ''}`}>
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className={active === link.href ? 'active' : ''}
            onClick={() => handleNav(link.href)}
          >
            {link.label}
          </a>
        ))}
        {/* Theme toggle inside mobile nav too */}
        <button
          className="theme-toggle"
          onClick={toggleTheme}
          style={{ marginTop: '16px' }}
          aria-label="Toggle theme"
        >
          <span className="theme-toggle-thumb">
            {isDark ? '🌙' : '☀️'}
          </span>
        </button>
      </nav>
    </>
  )
}
