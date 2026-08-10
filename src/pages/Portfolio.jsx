import { useState } from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/common/SEO'
import PageHero from '../components/common/PageHero'
import AnimateOnScroll from '../components/common/AnimateOnScroll'
import CTABanner from '../components/common/CTABanner'
import { portfolioCategories, portfolioItems } from '../data/portfolio'
import { getBreadcrumbSchema } from '../utils/schema'

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All')
  const breadcrumbs = [{ label: 'Portfolio', path: '/portfolio' }]

  const filtered =
    activeCategory === 'All'
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory)

  const caseStudies = portfolioItems.filter((item) => item.results?.leads)

  return (
    <>
      <SEO
        title="Portfolio & Featured Projects | Swami Enterprises Real Estate Marketing"
        description="Explore Swami Enterprises' portfolio of real estate marketing campaigns, property launches, and proven case study results across Agra and India."
        path="/portfolio"
        schema={getBreadcrumbSchema(breadcrumbs)}
      />

      <PageHero
        title="Our Featured Portfolio"
        subtitle="A showcase of real estate launches, commercial hubs, and high-ROI digital campaigns executed across India."
        breadcrumbs={breadcrumbs}
      />

      {/* Filter Tabs Section */}
      <section className="section">
        <div className="container">
          <div className="portfolio-filter-bar">
            {portfolioCategories.map((cat) => (
              <button
                key={cat}
                type="button"
                className={`portfolio-filter-pill ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {filtered.length === 0 ? (
            <div className="empty-state">
              <p>No projects found in this category.</p>
              <button
                type="button"
                className="btn btn-outline"
                onClick={() => setActiveCategory('All')}
              >
                View All Projects
              </button>
            </div>
          ) : (
            <div className="portfolio-cards-grid">
              {filtered.map((item, i) => (
                <AnimateOnScroll key={item.id} delay={i * 60}>
                  <Link to={`/portfolio/${item.slug}`} className="portfolio-showcase-card">
                    <div className="portfolio-showcase-img-wrapper">
                      <img
                        src={item.image}
                        alt={`${item.name} - ${item.type}`}
                        loading="lazy"
                        className="portfolio-showcase-img"
                      />
                      <div className="portfolio-card-badge-tag">{item.type}</div>
                    </div>
                    <div className="portfolio-showcase-body">
                      <span className="portfolio-location-text">📍 {item.location}</span>
                      <h3 className="portfolio-showcase-title">{item.name}</h3>
                      <p className="portfolio-showcase-desc">{item.shortDescription}</p>
                      
                      {item.results && (
                        <div className="portfolio-card-metrics">
                          {item.results.leads && (
                            <div className="portfolio-metric-pill">
                              <strong>{item.results.leads}</strong>
                              <span>Leads</span>
                            </div>
                          )}
                          {item.results.reach && (
                            <div className="portfolio-metric-pill">
                              <strong>{item.results.reach}</strong>
                              <span>Reach</span>
                            </div>
                          )}
                        </div>
                      )}

                      <span className="portfolio-arrow-link">View Project Details →</span>
                    </div>
                  </Link>
                </AnimateOnScroll>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Case Studies & Proven Results Banner */}
      <section className="section section-dark-results">
        <div className="container">
          <AnimateOnScroll className="section-intro section-intro-center">
            <span className="section-eyebrow-pill">Case Studies</span>
            <h2 className="text-white">Measurable Campaign <em>Outcomes.</em></h2>
            <p className="section-intro-sub text-white-muted">
              Data-backed metrics from our performance advertising and on-ground sales activations.
            </p>
          </AnimateOnScroll>

          <div className="case-study-modern-grid">
            {caseStudies.map((item, i) => (
              <AnimateOnScroll key={item.id} delay={i * 80}>
                <div className="case-study-modern-card">
                  <span className="case-study-type">{item.type}</span>
                  <h3>{item.name}</h3>
                  <p>{item.shortDescription}</p>
                  
                  <div className="case-study-stats-row">
                    {item.results.leads && (
                      <div className="case-stat">
                        <strong>{item.results.leads}</strong>
                        <span>Qualified Leads</span>
                      </div>
                    )}
                    {item.results.reach && (
                      <div className="case-stat">
                        <strong>{item.results.reach}</strong>
                        <span>Total Reach</span>
                      </div>
                    )}
                    {item.results.conversions && (
                      <div className="case-stat">
                        <strong>{item.results.conversions}</strong>
                        <span>Key Outcome</span>
                      </div>
                    )}
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Partner With Swami Enterprises"
        subtitle="Scale your project sales with Agra's premier real estate growth agency."
        buttonText="Get Started"
      />
    </>
  )
}
