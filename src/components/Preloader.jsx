import { useEffect, useState } from 'react'

export default function Preloader() {
  const [loading, setLoading] = useState(true)
  const [typedName, setTypedName] = useState('')
  const [showProgress, setShowProgress] = useState(false)

  const fullName = "Kalpana Kushwaha"

  useEffect(() => {
    // Start typing after a short delay
    const startTimeout = setTimeout(() => {
      let currentLength = 0
      const interval = setInterval(() => {
        if (currentLength < fullName.length) {
          currentLength++
          setTypedName(fullName.slice(0, currentLength))
        } else {
          clearInterval(interval)
          // Show progress bar shortly after name finishes typing
          setTimeout(() => setShowProgress(true), 250)
        }
      }, 70) // Fast and smooth typing speed: 70ms per character

      return () => clearInterval(interval)
    }, 450)

    // Total duration for the preloader
    const loaderTimer = setTimeout(() => {
      setLoading(false)
    }, 3400)

    return () => {
      clearTimeout(startTimeout)
      clearTimeout(loaderTimer)
    }
  }, [])

  if (!loading) return null

  const isTypingDone = typedName.length >= fullName.length

  return (
    <div className="preloader">
      <div className="preloader-content">
        <div className="preloader-text animate">
          <span className="welcome" style={{ display: 'block', marginBottom: '8px' }}>
            Welcome to
          </span>
          <h1 className="name">
            {typedName}
            {!isTypingDone && <span className="typing-cursor">|</span>}
          </h1>
          {isTypingDone && (
            <p className="role" style={{ animation: 'slideTop 0.6s ease forwards' }}>
              MERN Stack Developer
            </p>
          )}
        </div>
        <div 
          className="preloader-bar" 
          style={{ 
            opacity: showProgress ? 1 : 0, 
            transition: 'opacity 0.4s ease',
            marginTop: '25px'
          }}
        >
          {showProgress && <div className="bar-progress" />}
        </div>
      </div>
    </div>
  )
}
