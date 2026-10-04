import { useState } from 'react'
import { Download } from 'lucide-react'
import { profile, socials } from '../data/portfolioData.js'
import SocialLinks from './SocialLinks.jsx'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const change = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  // No backend: this opens the visitor's email app with the message prefilled.
  // TODO (optional): replace with a Formspree/EmailJS call to send directly from the site.
  const handleSubmit = (e) => {
    e.preventDefault()
    if (!socials.email) return
    const subject = encodeURIComponent(`Portfolio message from ${form.name}`)
    const body = encodeURIComponent(`${form.message}\n\nFrom: ${form.name} (${form.email})`)
    window.location.href = `mailto:${socials.email}?subject=${subject}&body=${body}`
  }

  return (
    <section id="contact" className="section alt">
      <div className="container">
        <div className="resume-cta">
          <h2>Want to know more about my experience and skills?</h2>
          {/* Put your resume at public/resume.pdf, or change profile.resumePath in portfolioData.js */}
          <a className="btn btn-primary" href={profile.resumePath} download>
            <Download size={16} aria-hidden="true" /> Download Resume
          </a>
        </div>
        <h2>Contact</h2>
        <div className="two-col">
          <div>
            <p className="body">
              I'm open to internship and entry-level software roles. Send a message or reach out directly.
            </p>
            <p className="body">{socials.email || 'Email not set yet (see portfolioData.js)'}</p>
            <SocialLinks />
          </div>
          <form className="card form" onSubmit={handleSubmit}>
            <label>Name
              <input name="name" required value={form.name} onChange={change} autoComplete="name" />
            </label>
            <label>Email
              <input name="email" type="email" required value={form.email} onChange={change} autoComplete="email" />
            </label>
            <label>Message
              <textarea name="message" rows="5" required value={form.message} onChange={change} />
            </label>
            <button className="btn btn-primary" type="submit" disabled={!socials.email}>Send Message</button>
            <p className="muted note">
              {socials.email
                ? 'This opens your email app with the message prefilled.'
                : 'Set your email in portfolioData.js to enable this form.'}
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}
