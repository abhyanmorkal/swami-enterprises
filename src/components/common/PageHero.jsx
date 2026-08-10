import Breadcrumb from './Breadcrumb'

export default function PageHero({ title, subtitle, breadcrumbs = [] }) {
  return (
    <section className="page-hero">
      <div className="container">
        {breadcrumbs.length > 0 && <Breadcrumb items={breadcrumbs} />}
        <h1>{title}</h1>
        {subtitle && <p className="page-hero-subtitle">{subtitle}</p>}
      </div>
    </section>
  )
}
