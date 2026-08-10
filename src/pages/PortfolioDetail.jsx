import { useParams, Link, Navigate } from 'react-router-dom'
import SEO from '../components/common/SEO'
import AnimateOnScroll from '../components/common/AnimateOnScroll'
import ContactForm from '../components/common/ContactForm'
import Breadcrumb from '../components/common/Breadcrumb'
import { portfolioItems } from '../data/portfolio'
import { getBreadcrumbSchema } from '../utils/schema'

export default function PortfolioDetail() {
  const { slug } = useParams()
  const project = portfolioItems.find((p) => p.slug === slug)

  if (!project) return <Navigate to="/portfolio" replace />

  const breadcrumbs = [
    { label: 'Portfolio', path: '/portfolio' },
    { label: project.name, path: `/portfolio/${project.slug}` },
  ]

  return (
    <>
      <SEO
        title={`${project.name} | Portfolio | Swami Enterprises`}
        description={project.shortDescription}
        path={`/portfolio/${project.slug}`}
        schema={getBreadcrumbSchema(breadcrumbs)}
      />

      <section className="page-hero page-hero-sm">
        <div className="container">
          <Breadcrumb items={breadcrumbs} />
          <h1>{project.name}</h1>
          <p className="page-hero-subtitle">{project.location} · {project.type}</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="portfolio-detail-grid">
            <AnimateOnScroll>
              <div className="gallery">
                {project.images.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt={`${project.name} - real estate project image ${i + 1}`}
                    loading={i === 0 ? 'eager' : 'lazy'}
                  />
                ))}
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll delay={100}>
              <div className="portfolio-detail-info">
                <h2>Project Overview</h2>
                <p>{project.description}</p>

                {project.priceRange && (
                  <div className="info-block">
                    <h3>Price Range</h3>
                    <p>{project.priceRange}</p>
                  </div>
                )}

                <div className="info-block">
                  <h3>Specifications</h3>
                  <ul>
                    {project.specifications.map((spec) => (
                      <li key={spec}>{spec}</li>
                    ))}
                  </ul>
                </div>

                {project.results && (
                  <div className="info-block">
                    <h3>Campaign Results</h3>
                    <div className="case-study-stats">
                      {project.results.leads && (
                        <div><strong>{project.results.leads}</strong><span>Leads</span></div>
                      )}
                      {project.results.reach && (
                        <div><strong>{project.results.reach}</strong><span>Reach</span></div>
                      )}
                      {project.results.conversions && (
                        <div><strong>{project.results.conversions}</strong><span>Result</span></div>
                      )}
                    </div>
                  </div>
                )}

                <div className="info-block">
                  <h3>Location</h3>
                  <p>{project.location}</p>
                  <div className="detail-map">
                    <iframe
                      title={`Map showing ${project.name} location in ${project.location}`}
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3549.923456789!2d77.9784!3d27.2066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c42f888491943%3A0x7a2b6b3b3b3b3b3b!2sAgra%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      allowFullScreen
                    />
                  </div>
                </div>

                <Link to="/portfolio" className="btn btn-outline">Back to Portfolio</Link>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      <section className="section section-gray">
        <div className="container">
          <AnimateOnScroll className="section-header">
            <h2>Enquire About This Project</h2>
            <p>Interested in similar results for your property? Contact our team.</p>
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
