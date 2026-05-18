import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  
  const [status, setStatus] = useState({
    submitting: false,
    success: false,
    error: null
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus({ submitting: true, success: false, error: null })

    // Simulate standard portfolio form submission / mock email API call
    setTimeout(() => {
      setStatus({
        submitting: false,
        success: true,
        error: null
      })
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      })
    }, 1500)
  }

  return (
    <section className="contact" id="contact">
      <div className="contact-text">
        <h2>Contact <span>Me</span></h2>
        <h4>Let's work together</h4>
        <p>
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel free to reach out, and let's build something amazing!
        </p>
        <ul className="contact-list">
          <li>
            <i className="bx bxl-gmail" />
            <span>kalpanak2203@gmail.com</span>
          </li>
          <li>
            <i className="bx bxs-phone" />
            <span>+91 8318481406</span>
          </li>
          <li>
            <i className="bx bxl-periscope" />
            <span>Noida, Uttar Pradesh, India</span>
          </li>
        </ul>
        <div className="contact-icons">
          <a href="https://www.linkedin.com/in/kalpana-kushwaha-288067230/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <i className="bx bxl-linkedin" />
          </a>
          <a href="https://instagram.com/kalpana_kushwaha03" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <i className="bx bxl-instagram" />
          </a>
          <a href="https://github.com/kalpanak2203" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <i className="bx bxl-github" />
          </a>
        </div>
      </div>

      <div className="contact-form">
        {status.success ? (
          <div className="success-message" style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            padding: '20px 10px',
            animation: 'slideTop 0.5s ease forwards'
          }}>
            <div style={{
              width: '60px',
              height: '60px',
              borderRadius: '50%',
              background: 'rgba(0, 238, 255, 0.1)',
              border: '2px solid var(--cyan)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '20px',
              boxShadow: '0 0 20px rgba(0, 238, 255, 0.3)'
            }}>
              <i className="bx bx-check" style={{ fontSize: '36px', color: 'var(--cyan)' }} />
            </div>
            <h3 style={{ color: 'var(--text)', marginBottom: '10px', fontSize: '20px', fontWeight: '700' }}>Thank You!</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '14px', lineHeight: '1.6', marginBottom: '24px' }}>
              Your message has been sent successfully. I will get back to you as soon as possible!
            </p>
            <button 
              className="send" 
              onClick={() => setStatus({ submitting: false, success: false, error: null })}
              style={{ width: 'auto', padding: '10px 24px' }}
            >
              Send Another Message
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Enter Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              disabled={status.submitting}
            />
            <input
              type="email"
              name="email"
              placeholder="Enter Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              disabled={status.submitting}
            />
            <input
              type="text"
              name="subject"
              placeholder="Enter Your Subject"
              value={formData.subject}
              onChange={handleChange}
              disabled={status.submitting}
            />
            <textarea
              name="message"
              placeholder="Enter Your Message Here..."
              value={formData.message}
              onChange={handleChange}
              required
              disabled={status.submitting}
            />
            <button 
              type="submit" 
              className="send" 
              disabled={status.submitting}
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}
            >
              {status.submitting ? (
                <>
                  <i className="bx bx-loader-alt bx-spin" style={{ fontSize: '18px' }} />
                  Sending...
                </>
              ) : (
                'Send Message'
              )}
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
