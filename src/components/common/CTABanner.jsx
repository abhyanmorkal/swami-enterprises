import { Link } from 'react-router-dom'

export default function CTABanner({
  title = "Let's grow your real estate business",
  subtitle = 'Schedule a free consultation with our team to discuss your project goals.',
  buttonText = 'Get Free Consultation',
  buttonLink = '/contact',
}) {
  return (
    <section className="cta-banner">
      <div className="container cta-banner-inner">
        <div>
          <h2>{title}</h2>
          <p>{subtitle}</p>
        </div>
        <Link to={buttonLink} className="btn btn-primary btn-lg">
          {buttonText}
        </Link>
      </div>
    </section>
  )
}
