export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/private/'],
    },
    sitemap: 'https://sslawfirm-placeholder.com/sitemap.xml',
  }
}
