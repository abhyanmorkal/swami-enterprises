import { Link } from 'react-router-dom'
import AnimateOnScroll from '../common/AnimateOnScroll'
import { portfolioItems } from '../../data/portfolio'

export default function ProjectsBento() {
  const projects = portfolioItems.slice(0, 6)

  return (
    <div className="projects-bento-grid">
      {projects.map((project, index) => {
        const isFeatured = index === 0

        return (
          <AnimateOnScroll
            key={project.id}
            delay={index * 60}
            className={`projects-bento-cell bento-cell-${index + 1}`}
          >
            <Link
              to={`/portfolio/${project.slug}`}
              className={`bento-card ${isFeatured ? 'bento-card--featured' : ''}`}
            >
              {/* Background Media */}
              <div className="bento-card-media">
                <img
                  src={project.image}
                  alt={project.name}
                  loading="lazy"
                  className="bento-card-img"
                />
                <div className="bento-card-gradient" aria-hidden="true" />
              </div>

              {/* Minimal Top Category Badge */}
              <div className="bento-card-top">
                <span className="bento-badge">{project.type}</span>
              </div>

              {/* Clean Content Body */}
              <div className="bento-card-body">
                <h3 className="bento-card-title">{project.name}</h3>

                {isFeatured && (
                  <p className="bento-card-desc">{project.shortDescription}</p>
                )}

                {/* Ultra-Clean Footer */}
                <div className="bento-card-footer">
                  <span className="bento-card-link">
                    View project
                    <svg
                      className="bento-arrow"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>
          </AnimateOnScroll>
        )
      })}
    </div>
  )
}
