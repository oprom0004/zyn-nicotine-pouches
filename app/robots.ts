import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://nicotinepoucheszyn.com'
  
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/admin/',
          '/api/',
          '/private/',
          '/_next/',
          '/checkout/success',
          '/checkout/cancel',
          '/tmp/',
          '/*.json$',
          '/*.xml$',
          '/search?*', // Allow search page but not specific search queries
        ],
      },
      {
        userAgent: 'GPTBot',
        allow: [
          '/',
          '/products',
          '/about',
          '/contact',
          '/search',
        ],
        disallow: [
          '/admin/',
          '/api/',
          '/private/',
          '/checkout/',
          '/user/',
          '/account/',
        ],
      },
      {
        userAgent: 'ChatGPT-User',
        allow: [
          '/',
          '/products',
          '/about',
          '/contact',
        ],
        disallow: [
          '/admin/',
          '/api/',
          '/private/',
          '/checkout/',
          '/user/',
          '/account/',
        ],
      },
      {
        userAgent: 'CCBot',
        allow: [
          '/',
          '/products',
          '/about',
          '/contact',
        ],
        disallow: [
          '/admin/',
          '/api/',
          '/private/',
          '/checkout/',
          '/user/',
          '/account/',
        ],
      },
      {
        userAgent: 'anthropic-ai',
        allow: [
          '/',
          '/products',
          '/about',
          '/contact',
        ],
        disallow: [
          '/admin/',
          '/api/',
          '/private/',
          '/checkout/',
          '/user/',
          '/account/',
        ],
      },
      {
        userAgent: 'Claude-Web',
        allow: [
          '/',
          '/products',
          '/about',
          '/contact',
        ],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  }
}