import { useState } from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/common/SEO'
import PageHero from '../components/common/PageHero'
import AnimateOnScroll from '../components/common/AnimateOnScroll'
import CTABanner from '../components/common/CTABanner'
import ContactForm from '../components/common/ContactForm'
import { services } from '../data/services'
import { getBreadcrumbSchema } from '../utils/schema'

const industries = [
  { name: 'Real Estate Developers', desc: 'Full-stack launch marketing, buyer acquisition & CRM integration.' },
  { name: 'Builders & Contractors', desc: 'Project branding, site visit activation & local lead campaigns.' },
  { name: 'Property Brokers & Channel Partners', desc: 'Partner network activation & high-intent lead distribution.' },
  { name: 'Individual Property Owners', desc: 'Targeted property promotion & fast buyer matching.' },
  { name: 'Commercial Real Estate Firms', desc: 'B2B lead generation & institutional investor outreach.' },
]

export default function Services() {
  const [activeTab, setActiveTab] = useState(services[0]?.id || 'marketing')
  const breadcrumbs = [{ label: 'Services', path: '/services' }]

  return (
    <>
      <SEO
        title="Real Estate Marketing & Operations Services | Swami Enterprises"
        description="Explore Swami Enterprises' full range of real estate marketing, digital advertising, branding, and operations management services in Agra and across India."
        path="/services"
        schema={getBreadcrumbSchema(breadcrumbs)}
      />

      <PageHero
        title="Our Specialized Services"
        subtitle="End-to-end real estate marketing, digital advertising, and sales operations engineered for maximum property visibility and bookings."
        breadcrumbs={breadcrumbs}
      />

      {/* Core Services Showcase */}
      <section className="section">
        <div className="container">
          <div className="services-showcase-grid">
            {services.map((service, i) => (
              <AnimateOnScroll key={service.id} delay={i * 80}>
                <div className="service-card">
                  <div className="service-card-header">
                    <span className="service-card-tag">{service.category || 'Real Estate'}</span>
                    <h3>{service.title}</h3>
                  </div>
                  <p className="service-card-desc">{service.shortDescription}</p>

                  <div className="service-deliverables">
                    <h4>Key Deliverables</h4>
                    <ul>
                      {service.deliverables.map((item) => (
                        <li key={item}>
                          <span className="bullet-dot" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="service-card-footer">
                    <Link to="/contact" className="service-card-link">
                      Book Consultation →
                    </Link>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="section section-gray">
        <div className="container">
          <AnimateOnScroll className="section-intro section-intro-center">
            <span className="section-eyebrow-pill">Client Spectrum</span>
            <h2>Industries & Partners We <em>Empower.</em></h2>
            <p className="section-intro-sub">
              Tailored marketing strategies designed for every scale of real estate development and property sales.
            </p>
          </AnimateOnScroll>

          <div className="industry-showcase-grid">
            {industries.map((ind, i) => (
              <AnimateOnScroll key={ind.name} delay={i * 70}>
                <div className="industry-showcase-card">
                  <div className="industry-card-icon">✦</div>
                  <h3>{ind.name}</h3>
                  <p>{ind.desc}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Request a Custom Marketing Plan"
        subtitle="Tell us about your project and we will design a strategy tailored to your sales targets."
        buttonText="Request Custom Plan"
      />

      {/* Contact Section */}
      <section className="section">
        <div className="container">
          <AnimateOnScroll className="section-intro section-intro-center">
            <span className="section-eyebrow-pill">Let's Connect</span>
            <h2>Schedule a <em>Strategy Call.</em></h2>
            <p className="section-intro-sub">Fill out the form below and our team will get back to you within 24 hours.</p>
          </AnimateOnScroll>
          <AnimateOnScroll>
            <div className="form-wrapper">
              <ContactForm />
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  )
}
