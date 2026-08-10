import { useState } from 'react'
import { serviceOptions } from '../../data/services'

const FORM_ENDPOINT = import.meta.env.VITE_FORM_ENDPOINT || ''

export default function ContactForm({ short = false }) {
  const [status, setStatus] = useState('idle')
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: '',
  })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')

    try {
      if (FORM_ENDPOINT) {
        await fetch(FORM_ENDPOINT, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(form),
        })
      }
      setStatus('success')
      setForm({ name: '', phone: '', email: '', service: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="name">Full Name *</label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={form.name}
            onChange={handleChange}
            placeholder="Your full name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone Number *</label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            value={form.phone}
            onChange={handleChange}
            placeholder="+91 XXXXX XXXXX"
          />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="email">Email Address *</label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={form.email}
            onChange={handleChange}
            placeholder="you@company.com"
          />
        </div>
        {!short && (
          <div className="form-group">
            <label htmlFor="service">Service Interested In</label>
            <select
              id="service"
              name="service"
              value={form.service}
              onChange={handleChange}
            >
              <option value="">Select a service</option>
              {serviceOptions.map((opt) => (
                <option key={opt} value={opt}>{opt}</option>
              ))}
            </select>
          </div>
        )}
      </div>

      <div className="form-group">
        <label htmlFor="message">Message *</label>
        <textarea
          id="message"
          name="message"
          required
          rows={short ? 3 : 5}
          value={form.message}
          onChange={handleChange}
          placeholder="Tell us about your project or requirements"
        />
      </div>

      <button type="submit" className="btn btn-primary" disabled={status === 'loading'}>
        {status === 'loading' ? 'Sending...' : 'Submit Inquiry'}
      </button>

      {status === 'success' && (
        <p className="form-message form-message-success" role="status" aria-live="polite">
          Thank you. We will contact you shortly.
        </p>
      )}
      {status === 'error' && (
        <p className="form-message form-message-error" role="alert">
          Something went wrong. Please call us directly.
        </p>
      )}
    </form>
  )
}
