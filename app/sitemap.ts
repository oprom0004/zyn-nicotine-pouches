import { MetadataRoute } from 'next'
import { products } from '@/data/products'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://nicotinepoucheszyn.com'
  
  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/products`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/search`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
  ]

  // Product pages
  const productPages = products.map((product) => ({
    url: `${baseUrl}/${product.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  // Category pages (dynamically generated from product categories)
  const categories = Array.from(new Set(products.map(p => p.category.toLowerCase().replace(/\s+/g, '-'))))
  const categoryPages = categories.map((category) => ({
    url: `${baseUrl}/products?category=${encodeURIComponent(category)}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }))

  // Strength pages
  const strengths = Array.from(new Set(products.map(p => p.strength)))
  const strengthPages = strengths.map((strength) => ({
    url: `${baseUrl}/products?strength=${encodeURIComponent(strength)}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }))

  // Flavor category pages
  const flavorPages = [
    'mint-flavors-nicotine-pouches',
    'wintergreen-flavors-nicotine-pouches', 
    'citrus-flavors-nicotine-pouches',
    'berry-flavors-nicotine-pouches',
    'spearmint-flavors-nicotine-pouches',
    'coffee-flavors-nicotine-pouches',
    'sweet-flavors-nicotine-pouches',
    'spice-flavors-nicotine-pouches'
  ].map((flavor) => ({
    url: `${baseUrl}/${flavor}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }))

  // Strength category pages  
  const strengthCategoryPages = [
    '3mg-nicotine-pouches',
    '6mg-nicotine-pouches', 
    '9mg-nicotine-pouches'
  ].map((strength) => ({
    url: `${baseUrl}/${strength}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  // Policy pages
  const policyPages = [
    'privacy',
    'terms',
    'shipping',
    'returns'
  ].map((page) => ({
    url: `${baseUrl}/${page}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  return [...staticPages, ...productPages, ...categoryPages, ...strengthPages, ...flavorPages, ...strengthCategoryPages, ...policyPages]
}