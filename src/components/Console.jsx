import { useState, useRef, useEffect } from 'react'

export default function Console() {
  const [history, setHistory] = useState([
    { type: 'input', text: 'help' },
    { type: 'output', text: 'Available commands: [about, status, stack, contact, clear]' }
  ])
  const [inputValue, setInputValue] = useState('')
  const consoleEndRef = useRef(null)

  useEffect(() => {
    consoleEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [history])

  const handleCommand = (cmdText) => {
    const cleanCmd = cmdText.trim().toLowerCase()
    let newLines = [{ type: 'input', text: cleanCmd }]

    if (cleanCmd === 'clear') {
      setHistory([])
      return
    }

    switch (cleanCmd) {
      case 'help':
        newLines.push({ type: 'output', text: 'Available commands: [about, status, stack, contact, clear]' })
        break
      case 'about':
        newLines.push({ type: 'output', text: 'Kalpana Kushwaha - Passionate MERN Stack & Full Stack Developer with expertise in building scalable, responsive, and performance-tuned web applications.' })
        break
      case 'status':
        newLines.push({ type: 'output', text: 'Availability: ACTIVE & Available for Full-Time Roles / Freelance\nNotice Period: IMMEDIATE JOINER (0 Days notice)\nPreferred Locations: Noida, UP / Delhi NCR / Remote' })
        break
      case 'stack':
        newLines.push({ type: 'output', text: 'Frontend: React.JS, Next.JS, Angular, Redux, JavaScript, TypeScript, HTML5, CSS3, Tailwind CSS\nBackend: Node.js, Express.JS, REST APIs, SQL, PostgreSQL, MongoDB\nOther: Java, C/C++, Python, Git & Github' })
        break
      case 'contact':
        newLines.push({ type: 'output', text: 'Email: kalpanak2203@gmail.com\nPhone: +91 8318481406\nLinkedIn: linkedin.com/in/kalpana-kushwaha-288067230/\nGitHub: github.com/kalpanak2203' })
        break
      default:
        newLines.push({ type: 'output', text: `Command not found: "${cleanCmd}". Type "help" for a list of available commands.` })
    }

    setHistory((prev) => [...prev, ...newLines])
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!inputValue.trim()) return
    handleCommand(inputValue)
    setInputValue('')
  }

  return (
    <section className="console-section" id="console">
      <div className="section-title">
        <h2>Interactive <span>Console</span></h2>
        <p>Query my profile details directly via the developer shell</p>
        <div className="title-line" />
      </div>

      <div className="console-container">
        {/* Mac-style Window Topbar */}
        <div className="console-topbar">
          <div className="dots">
            <span className="dot dot-red" />
            <span className="dot dot-yellow" />
            <span className="dot dot-green" />
          </div>
          <div className="console-title">guest@kalpana-kushwaha: ~</div>
        </div>

        {/* Terminal Screen */}
        <div className="console-screen">
          <div className="console-history">
            {history.map((line, idx) => (
              <div key={idx} className={`console-line ${line.type}`}>
                {line.type === 'input' ? (
                  <span>
                    <span className="prompt">guest@kalpana:~$</span> {line.text}
                  </span>
                ) : (
                  <pre className="output-text">{line.text}</pre>
                )}
              </div>
            ))}
            <div ref={consoleEndRef} />
          </div>

          {/* Prompt Form */}
          <form onSubmit={handleSubmit} className="console-form">
            <span className="prompt">guest@kalpana:~$</span>
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder='Type a command (e.g. "status", "stack", "about")...'
              autoComplete="off"
              className="console-input"
            />
          </form>
        </div>

        {/* Interactive Buttons for Easy Access */}
        <div className="console-quickbar">
          <span className="quick-label">Quick Actions:</span>
          <div className="quick-buttons-row">
            {['about', 'status', 'stack', 'contact', 'clear'].map((cmd) => (
              <button
                key={cmd}
                onClick={() => handleCommand(cmd)}
                className="quick-btn"
              >
                {cmd}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
