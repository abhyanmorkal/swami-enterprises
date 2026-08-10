import { useState } from 'react'
import SEO from '../components/common/SEO'
import PageHero from '../components/common/PageHero'
import AnimateOnScroll from '../components/common/AnimateOnScroll'
import ContactForm from '../components/common/ContactForm'
import { brand } from '../data/brand'
import { getBreadcrumbSchema, getOrganizationSchema } from '../utils/schema'

const faqs = [
  {
    q: 'What services does Swami Enterprises offer?',
    a: 'We offer real estate marketing, digital marketing, operations management, branding, lead generation, property listing, website development, and sales support for developers and property owners.',
  },
  {
    q: 'Do you work outside of Agra?',
    a: 'Yes. While based in Agra, we serve clients across 25+ cities in India with both digital and on-ground marketing support.',
  },
  {
    q: 'How do I get started?',
    a: 'Schedule a free consultation by filling out our contact form or calling us at +91 7351531158. We will assess your project and propose a tailored marketing plan.',
  },
  {
    q: 'What is your typical project timeline?',
    a: 'Timelines vary by scope. A standard marketing campaign launch takes 2-4 weeks from strategy to execution. We provide a detailed timeline during the discovery phase.',
  },
]

export default function Contact() {
  const [openFaq, setOpenFaq] = useState(null)
  const breadcrumbs = [{ label: 'Contact', path: '/contact' }]

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: { '@type': 'Answer', text: faq.a },
    })),
  }

  return (
    <>
      <SEO
        title="Contact Us | Swami Enterprises - Agra, India"
        description="Contact Swami Enterprises for real estate marketing and operations management services. Call +91 7351531158 or visit our Agra office."
        path="/contact"
        schema={[getOrganizationSchema(), getBreadcrumbSchema(breadcrumbs), faqSchema]}
      />

      <PageHero
        title="Get in Touch"
        subtitle="Reach out for a free consultation on your real estate marketing needs."
        breadcrumbs={breadcrumbs}
      />

      <section className="section">
        <div className="container contact-grid">
          <AnimateOnScroll>
            <h2>Contact Details</h2>
            <ul className="contact-details-list">
              <li>
                <strong>Phone</strong>
                <a href={brand.phoneLink}>{brand.phone}</a>
              </li>
              <li>
                <strong>WhatsApp</strong>
                <a href={brand.whatsappLink} target="_blank" rel="noopener noreferrer">{brand.whatsapp}</a>
              </li>
              <li>
                <strong>Email</strong>
                <a href={`mailto:${brand.email}`}>{brand.email}</a>
              </li>
              <li>
                <strong>Address</strong>
                <span>{brand.address}</span>
              </li>
              <li>
                <strong>Business Hours</strong>
                <span>{brand.businessHours}</span>
              </li>
            </ul>

            <div className="contact-map">
              <iframe
                title="Swami Enterprises office at 39 A DayalBagh Agra Uttar Pradesh"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3549.923456789!2d77.9784!3d27.2066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c42f888491943%3A0x7a2b6b3b3b3b3b3b!2sDayal%20Bagh%2C%20Agra%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>

            <div className="contact-mobile-actions">
              <a href={brand.phoneLink} className="btn btn-primary">Click to Call</a>
              <a href={brand.whatsappLink} className="btn btn-outline" target="_blank" rel="noopener noreferrer">WhatsApp Chat</a>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll delay={150}>
            <h2>Send Us a Message</h2>
            <ContactForm />
          </AnimateOnScroll>
        </div>
      </section>

      <section className="section section-gray">
        <div className="container">
          <AnimateOnScroll className="section-header">
            <h2>Frequently Asked Questions</h2>
          </AnimateOnScroll>
          <div className="faq-list">
            {faqs.map((faq, i) => (
              <AnimateOnScroll key={faq.q} delay={i * 60}>
                <div className={`faq-item ${openFaq === i ? 'open' : ''}`}>
                  <button
                    type="button"
                    className="faq-question"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    aria-expanded={openFaq === i}
                  >
                    {faq.q}
                    <span aria-hidden="true">{openFaq === i ? '−' : '+'}</span>
                  </button>
                  {openFaq === i && <p className="faq-answer">{faq.a}</p>}
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
