import { Metadata } from 'next'
import { products } from '@/data/products'
import FlavorCategoryClient from './FlavorCategoryClient'

const flavorInfo = {
  title: "Spearmint Flavor Nicotine Pouches",
  description: "Experience the classic freshness of our premium spearmint flavor nicotine pouches. A refined mint experience with gentle, refreshing spearmint taste that's perfect for all-day use.",
  h1: "Premium Spearmint Flavor Nicotine Pouches",
  seoDescription: "Shop spearmint flavor nicotine pouches with classic refreshing spearmint taste. Tobacco-free, premium quality with gentle mint flavor. Free shipping over $25.",
  flavorName: "spearmint",
  benefits: [
    "Classic Spearmint Freshness",
    "Gentle & Refreshing", 
    "All-Day Comfort",
    "Tobacco-Free Experience",
    "Long-Lasting Mint Taste",
    "Premium Quality Ingredients"
  ],
  keywords: [
    "spearmint nicotine pouches",
    "spearmint flavor pouches", 
    "classic mint pouches",
    "tobacco-free spearmint",
    "premium spearmint pouches",
    "refreshing mint pouches"
  ],
  lsiKeywords: [
    "spearmint taste nicotine pouches",
    "classic spearmint flavored pouches",
    "refreshing spearmint pouches",
    "gentle mint flavor",
    "spearmint tobacco alternative",
    "fresh spearmint experience"
  ]
}

// Filter products for spearmint flavors
const spearmintProducts = products.filter(product => 
  product.category === 'spearmint' || 
  ['Spearmint'].includes(product.flavor)
)

export const metadata: Metadata = {
  title: `${flavorInfo.title} | Classic Refreshing Spearmint Pouches`,
  description: flavorInfo.seoDescription,
  keywords: flavorInfo.keywords.join(', '),
  openGraph: {
    title: flavorInfo.title,
    description: flavorInfo.seoDescription,
    type: 'website',
    url: 'https://nicotinepoucheszyn.com/spearmint-flavors-nicotine-pouches',
  },
  alternates: {
    canonical: 'https://nicotinepoucheszyn.com/spearmint-flavors-nicotine-pouches'
  }
}

export default function SpearmintFlavorsPage() {
  return (
    <FlavorCategoryClient 
      flavor="spearmint"
      flavorInfo={flavorInfo}
      products={spearmintProducts}
    />
  )
}