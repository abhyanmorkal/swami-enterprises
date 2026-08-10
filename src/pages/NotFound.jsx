import { Link } from 'react-router-dom'
import SEO from '../components/common/SEO'

export default function NotFound() {
  return (
    <>
      <SEO
        title="Page Not Found | Swami Enterprises"
        description="The page you requested could not be found. Return to Swami Enterprises real estate marketing services in Agra."
        path="/404"
      />
      <section className="section not-found">
        <div className="container not-found-inner">
          <p className="section-label">404</p>
          <h1>Page not found</h1>
          <p>
            The page you are looking for may have moved or no longer exists.
            Explore our services or contact our team in Agra.
          </p>
          <div className="hero-actions">
            <Link to="/" className="btn btn-primary">Back to Home</Link>
            <Link to="/contact" className="btn btn-outline">Contact Us</Link>
          </div>
        </div>
      </section>
    </>
  )
}
