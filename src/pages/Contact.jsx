import { useState } from 'react'

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <div className="section">
      <div className="section-title">📩 Contact <span className="accent">Us</span></div>
      {sent ? (
        <div className="match-card" style={{ color: 'var(--green)', fontWeight: 600, fontSize: 16 }}>
          ✅ Message sent! We'll get back to you soon.
        </div>
      ) : (
        <div className="contact-form">
          <label>Name</label>
          <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Your name" />

          <label>Email</label>
          <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="your@email.com" />

          <label>Subject</label>
          <input type="text" name="subject" value={form.subject} onChange={handleChange} placeholder="What is this about?" />

          <label>Message</label>
          <textarea name="message" value={form.message} onChange={handleChange} placeholder="Write your message here..." />

          <button onClick={handleSubmit}>Send Message</button>
        </div>
      )}
    </div>
  )
}

export default Contact
