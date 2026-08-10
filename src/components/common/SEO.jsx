import { Helmet } from 'react-helmet-async'
import { brand } from '../../data/brand'

export default function SEO({
  title,
  description,
  path = '',
  type = 'website',
  schema,
}) {
  const url = `${brand.siteUrl}${path}`
  const fullTitle = title.includes('Swami Enterprises') ? title : `${title} | Swami Enterprises`

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content={brand.name} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      {schema && (
        Array.isArray(schema)
          ? schema.map((s, i) => (
              <script key={i} type="application/ld+json">{JSON.stringify(s)}</script>
            ))
          : <script type="application/ld+json">{JSON.stringify(schema)}</script>
      )}
    </Helmet>
  )
}
