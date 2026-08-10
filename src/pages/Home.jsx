import { Link } from 'react-router-dom'
import SEO from '../components/common/SEO'
import AnimateOnScroll from '../components/common/AnimateOnScroll'
import ContactForm from '../components/common/ContactForm'
import UspIcon from '../components/common/UspIcon'
import ProjectsBento from '../components/home/ProjectsBento'
import MobileMockupSlider from '../components/home/MobileMockupSlider'
import MarketsSection from '../components/home/MarketsSection'
import CountUp from '../components/common/CountUp'
import sectionBgImg from '../assets/section-image/section-image.avif'
import { brand, stats } from '../data/brand'
import { services } from '../data/services'
import { testimonials } from '../data/testimonials'
import { getOrganizationSchema } from '../utils/schema'
import {
  credibilityBadges,
  proofStats,
  marketsServed,
  whySwami,
  recognitions,
  marqueeItems,
  serviceTags,
  homeFaqs,
} from '../data/home'

function SectionIntro({ label, title, subtitle, align = 'center' }) {
  return (
    <AnimateOnScroll className={`section-intro section-intro-${align}`}>
      {label && <span className="section-eyebrow-pill">{label}</span>}
      <h2>{title}</h2>
      {subtitle && <p className="section-intro-sub">{subtitle}</p>}
    </AnimateOnScroll>
  )
}

export default function Home() {
  const homeServices = services.slice(0, 6)

  return (
    <>
      <SEO
        title="Swami Enterprises | Real Estate Marketing Agency in Agra"
        description="Swami Enterprises is a leading real estate marketing and operations management agency in Agra, offering digital marketing, branding, and property promotion services."
        path="/"
        schema={getOrganizationSchema()}
      />

      {/* Hero — Rankon-style eyebrow + emphasis headline */}
      <section className="hero hero-corporate">
        <div className="hero-bg" />
        <div className="container hero-corporate-inner">
          <AnimateOnScroll>
            <p className="hero-eyebrow">Real Estate Marketing Agency in Agra · Serving India</p>
            <h1>
              Your trusted <em>real estate marketing</em> partner for measurable growth.
            </h1>
            <p className="hero-subtitle">
              Swami Enterprises helps developers, builders, and property owners build visibility,
              generate qualified leads, and scale operations with data-driven marketing and
              end-to-end project support.
            </p>
            <div className="hero-actions">
              <Link to="/contact" className="btn btn-primary btn-lg">Get Free Consultation</Link>
              <a href={brand.phoneLink} className="btn btn-outline btn-lg hero-contact-btn">Contact Us</a>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Proof strip — capabilities + stats + ticker */}
      <section className="proof-strip" aria-label="Company credentials">
        <div className="container proof-strip-inner">
          <div className="proof-badges">
            {credibilityBadges.map((badge) => (
              <div key={badge.title} className="proof-badge">
                <span className="proof-badge-icon">
                  <UspIcon name={badge.icon} variant="badge" />
                </span>
                <div>
                  <strong>{badge.title}</strong>
                  <span>{badge.subtitle}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="proof-stats-grid">
            {proofStats.map((item) => (
              <div key={item.label} className="proof-stat">
                <span className="proof-stat-value">{item.value}</span>
                <span className="proof-stat-label">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="marquee-band" aria-hidden="true">
          <div className="marquee-track">
            {[...marqueeItems, ...marqueeItems].map((item, i) => (
              <span key={`${item}-${i}`}>
                {item}
                <span className="marquee-dot" aria-hidden="true">✦</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Featured projects — portfolio bento showcase */}
      <section className="section projects-showcase-section">
        <div className="container">
          <AnimateOnScroll className="projects-showcase-header">
            <div>
              <span className="section-eyebrow-pill">Featured Work</span>
              <h2>Developers and builders we work with</h2>
              <p className="projects-showcase-sub">
                Real campaigns and properties marketed across Agra and India — measurable leads,
                bookings, and brand growth.
              </p>
            </div>
            <Link to="/portfolio" className="btn btn-outline projects-showcase-cta">
              View All Projects
            </Link>
          </AnimateOnScroll>

          <ProjectsBento />
        </div>
      </section>

      {/* About Section — Minimal & Uncluttered */}
      <section className="section section-gray">
        <div className="container">
          <div className="about-split">
            <AnimateOnScroll className="about-content-col">
              <span className="section-eyebrow-pill">About Swami Enterprises</span>
              <h2>Trusted real estate marketing partner <em>in Agra & Pan-India.</em></h2>
              <p className="about-lead-text">
                Swami Enterprises helps developers, builders, and property owners build visibility,
                generate qualified leads, and scale operations with data-driven marketing and
                end-to-end sales support.
              </p>
              
              <div className="about-minimal-stats">
                <div className="about-min-stat">
                  <strong>{stats.projects}</strong>
                  <span>Projects Delivered</span>
                </div>
                <div className="about-min-stat">
                  <strong>{stats.satisfaction}</strong>
                  <span>Client Satisfaction</span>
                </div>
              </div>

              <div className="about-cta-row">
                <Link to="/about" className="btn btn-primary">Discover More →</Link>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll delay={120} className="about-image-col">
              <MobileMockupSlider />
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Markets Section — Visual Location Image Cards */}
      <MarketsSection />

      {/* Services Section */}
      <section className="section section-gray">
        <div className="container">
          <SectionIntro
            label="Our Core Services"
            title={<>Integrated services <em>designed to work as one system.</em></>}
            subtitle="Full-stack real estate marketing — every channel aligned to compound leads, bookings, and brand authority."
          />
          <div className="service-showcase-grid">
            {homeServices.map((service, i) => (
              <AnimateOnScroll key={service.id} delay={i * 60}>
                <Link to="/services" className="service-showcase-card">
                  <div className="service-card-top">
                    <span className="service-tag">{serviceTags[service.id] || 'SVC'}</span>
                    <span className="service-icon-glyph">✦</span>
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.shortDescription}</p>
                  <span className="card-link">
                    Explore Service
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </span>
                </Link>
              </AnimateOnScroll>
            ))}
          </div>
          <div className="section-cta">
            <Link to="/services" className="btn btn-primary">Explore All Services</Link>
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="section">
        <div className="container">
          <SectionIntro
            label="Why Choose Us"
            title={<>We do not just run campaigns. <em>We engineer growth systems.</em></>}
            subtitle="Built for accountability. Designed for real estate developers who need results, not reports filled with vanity metrics."
          />
          <div className="why-numbered-grid">
            {whySwami.map((item, i) => (
              <AnimateOnScroll key={item.num} delay={i * 50}>
                <div className="why-numbered-card">
                  <span className="why-num-badge">{item.num}</span>
                  <div className="why-card-content">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
          <div className="section-cta">
            <Link to="/contact" className="btn btn-primary btn-lg">Get Your Strategy Today</Link>
          </div>
        </div>
      </section>

      {/* Results Section with Visible Background & Bright White Title */}
      <section
        className="section section-dark results-banner-section"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(15, 15, 15, 0.45) 0%, rgba(10, 10, 10, 0.78) 100%), url(${sectionBgImg})`,
        }}
      >
        <div className="container">
          <div className="results-banner-header">
            <span className="section-eyebrow-pill">Proven Performance</span>
            <h2 className="results-banner-title">
              Data-driven marketing for <em>real business outcomes.</em>
            </h2>
          </div>

          <div className="results-stats-row">
            {[
              { value: stats.propertiesMarketed, label: 'Properties Marketed' },
              { value: stats.leadsGenerated, label: 'Leads Generated' },
              { value: stats.satisfaction, label: 'Client Satisfaction' },
              { value: stats.clients, label: 'Active Partnerships' },
            ].map((item) => (
              <div key={item.label} className="results-stat">
                <strong>
                  <CountUp end={item.value} />
                </strong>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section">
        <div className="container">
          <SectionIntro
            label="Client Reviews"
            title={<>What our <em>clients</em> say</>}
            subtitle="Long-term partnerships built on consistent results, transparent processes, and performance you can measure."
          />
          <div className="testimonial-grid">
            {testimonials.map((t, i) => (
              <AnimateOnScroll key={t.id} delay={i * 100}>
                <blockquote className="testimonial-card">
                  <div className="testimonial-stars" aria-label="5 stars rating">★★★★★</div>
                  <p>&ldquo;{t.quote}&rdquo;</p>
                  <footer>
                    <img src={t.image} alt={t.name} loading="lazy" />
                    <div>
                      <strong>{t.name}</strong>
                      <span>{t.role}, {t.company}</span>
                    </div>
                  </footer>
                </blockquote>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Recognition Section */}
      <section className="section section-gray">
        <div className="container">
          <SectionIntro
            label="Recognition & Credibility"
            title={<>Credibility and <em>track record</em></>}
            subtitle="A full-service real estate marketing partner with proven delivery across India."
          />
          <div className="recognition-grid">
            {recognitions.map((item, i) => (
              <AnimateOnScroll key={item.title} delay={i * 60}>
                <div className="recognition-card">
                  <div className="recognition-card-icon">✦</div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Consultation Section */}
      <section className="section strategy-section" id="consultation">
        <div className="container strategy-grid">
          <AnimateOnScroll>
            <span className="section-eyebrow-pill section-eyebrow-pill--light">Free Strategy Call</span>
            <h2>Book a strategy call with our <em>experts.</em></h2>
            <p className="strategy-sub">
              Share your project goals and our team will respond with a tailored marketing and
              operations plan within one business day.
            </p>
            <div className="strategy-stats">
              <div><strong>{stats.projects}</strong><span>Projects</span></div>
              <div><strong>{stats.satisfaction}</strong><span>Satisfaction</span></div>
              <div><strong>{stats.clients}</strong><span>Clients</span></div>
            </div>
            <ul className="contact-quick">
              <li><a href={brand.phoneLink}>{brand.phone}</a></li>
              <li><a href={`mailto:${brand.email}`}>{brand.email}</a></li>
              <li>{brand.addressShort}</li>
            </ul>
          </AnimateOnScroll>
          <AnimateOnScroll delay={120}>
            <div className="strategy-form-card">
              <h3>Request a free consultation</h3>
              <ContactForm />
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="section section-gray">
        <div className="container">
          <SectionIntro
            label="Frequently Asked Questions"
            title={<>Questions about our <em>services</em></>}
            subtitle="Clear answers for developers, builders, and property owners considering Swami Enterprises."
          />
          <div className="faq-list home-faq-list">
            {homeFaqs.map((faq) => (
              <details key={faq.q} className="faq-details">
                <summary>{faq.q}</summary>
                <p>{faq.a}</p>
              </details>
            ))}
          </div>
          <div className="section-cta">
            <Link to="/contact" className="btn btn-outline">More Questions? Contact Us</Link>
          </div>
        </div>
      </section>
    </>
  )
}
