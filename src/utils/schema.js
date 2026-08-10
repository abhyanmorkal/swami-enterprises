import { brand } from '../data/brand'

export function getOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'RealEstateAgent',
    name: brand.name,
    description: brand.tagline,
    url: brand.siteUrl,
    telephone: brand.phone,
    email: brand.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: '39 A, DayalBagh',
      addressLocality: 'Agra',
      addressRegion: 'Uttar Pradesh',
      postalCode: '282005',
      addressCountry: 'IN',
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '10:00',
      closes: '19:00',
    },
    sameAs: [
      brand.social.instagram,
      brand.social.facebook,
      brand.social.linkedin,
      brand.social.youtube,
    ],
  }
}

export function getBreadcrumbSchema(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: brand.siteUrl,
      },
      ...items.map((item, i) => ({
        '@type': 'ListItem',
        position: i + 2,
        name: item.label,
        item: `${brand.siteUrl}${item.path}`,
      })),
    ],
  }
}
