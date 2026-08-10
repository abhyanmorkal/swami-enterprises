import SEO from '../components/common/SEO'
import PageHero from '../components/common/PageHero'
import AnimateOnScroll from '../components/common/AnimateOnScroll'
import CTABanner from '../components/common/CTABanner'
import { coreValues, milestones, teamMembers } from '../data/team'
import { stats } from '../data/brand'
import { getBreadcrumbSchema, getOrganizationSchema } from '../utils/schema'

export default function About() {
  const breadcrumbs = [{ label: 'About Us', path: '/about' }]

  return (
    <>
      <SEO
        title="About Us | Swami Enterprises - Real Estate Marketing Agra"
        description="Learn about Swami Enterprises, a leading real estate marketing and operations management firm based in Agra, India."
        path="/about"
        schema={[getOrganizationSchema(), getBreadcrumbSchema(breadcrumbs)]}
      />

      <PageHero
        title="About Swami Enterprises"
        subtitle="Agra-based real estate marketing & operations leaders empowering developers and property owners across India."
        breadcrumbs={breadcrumbs}
      />

      {/* Agency Origin & Overview */}
      <section className="section">
        <div className="container two-col">
          <AnimateOnScroll>
            <span className="section-eyebrow-pill">Our Story</span>
            <h2>Pioneering Real Estate Marketing <em>in Agra & Pan-India.</em></h2>
            <p className="about-lead-text">
              Swami Enterprises was established to bring structured, data-driven marketing and operational clarity
              to the Indian real estate market. Founded in Agra, we have expanded our footprint across 25+ cities,
              delivering over 150 successful residential and commercial project campaigns.
            </p>
            <p className="about-sub-text">
              We combine deep regional buyer intelligence with modern digital advertising channels, ensuring
              every marketing rupee spent translates into qualified site visits and verified bookings.
            </p>

            <div className="about-minimal-stats">
              <div className="about-min-stat">
                <strong>{stats.experience}</strong>
                <span>Years Experience</span>
              </div>
              <div className="about-min-stat">
                <strong>{stats.projects}</strong>
                <span>Projects Delivered</span>
              </div>
              <div className="about-min-stat">
                <strong>{stats.cities}</strong>
                <span>Cities Covered</span>
              </div>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll delay={120}>
            <div className="about-page-img-wrapper">
              <img
                className="about-page-img"
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=900&q=80"
                alt="Swami Enterprises Agra real estate marketing office"
                loading="lazy"
              />
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section section-gray">
        <div className="container">
          <div className="mission-vision-grid">
            <AnimateOnScroll>
              <div className="mission-card">
                <span className="mission-icon">🎯</span>
                <h2>Our Mission</h2>
                <p>
                  To empower real estate developers with strategic digital marketing, operational transparency,
                  and scalable buyer acquisition systems that accelerate sales velocity.
                </p>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll delay={100}>
              <div className="mission-card">
                <span className="mission-icon">👁️</span>
                <h2>Our Vision</h2>
                <p>
                  To be India's most trusted real estate marketing and operations partner, recognized for
                  uncompromising integrity, innovation, and consistent ROI delivery.
                </p>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section">
        <div className="container">
          <AnimateOnScroll className="section-intro section-intro-center">
            <span className="section-eyebrow-pill">Guiding Principles</span>
            <h2>Our Core <em>Values.</em></h2>
          </AnimateOnScroll>

          <div className="values-grid">
            {coreValues.map((v, i) => (
              <AnimateOnScroll key={v.title} delay={i * 70}>
                <div className="value-card">
                  <span className="value-bullet">✦</span>
                  <h3>{v.title}</h3>
                  <p>{v.description}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="section section-gray">
        <div className="container">
          <AnimateOnScroll className="section-intro section-intro-center">
            <span className="section-eyebrow-pill">Leadership</span>
            <h2>Meet Our <em>Leadership Team.</em></h2>
          </AnimateOnScroll>

          <div className="team-grid">
            {teamMembers.map((member, i) => (
              <AnimateOnScroll key={member.name} delay={i * 80}>
                <div className="team-card">
                  <div className="team-avatar-wrapper">
                    <img
                      src={member.image}
                      alt={`${member.name}, ${member.role}`}
                      loading="lazy"
                    />
                  </div>
                  <h3>{member.name}</h3>
                  <span className="team-role">{member.role}</span>
                  <p>{member.bio}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Company Timeline Journey */}
      <section className="section">
        <div className="container">
          <AnimateOnScroll className="section-intro section-intro-center">
            <span className="section-eyebrow-pill">Milestones</span>
            <h2>Our Growth <em>Journey.</em></h2>
          </AnimateOnScroll>

          <div className="timeline">
            {milestones.map((m, i) => (
              <AnimateOnScroll key={m.year} delay={i * 80}>
                <div className="timeline-item">
                  <span className="timeline-year">{m.year}</span>
                  <div className="timeline-content">
                    <h3>{m.title}</h3>
                    <p>{m.description}</p>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Schedule a Project Consultation"
        subtitle="Connect with our Agra leadership team to discuss your real estate growth goals."
        buttonText="Schedule Consultation"
      />
    </>
  )
}
