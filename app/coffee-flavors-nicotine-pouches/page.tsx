import { Metadata } from 'next'
import { products } from '@/data/products'
import FlavorCategoryClient from './FlavorCategoryClient'

const flavorInfo = {
  title: "Coffee Flavor Nicotine Pouches",
  description: "Discover our premium coffee flavor nicotine pouches featuring rich coffee and bold espresso varieties. Perfect for coffee lovers seeking a tobacco-free experience.",
  h1: "Premium Coffee Flavor Nicotine Pouches",
  seoDescription: "Shop coffee flavor nicotine pouches including Coffee and Espresso varieties. Tobacco-free, premium quality with rich, authentic coffee taste. Free shipping over $25.",
  flavorName: "coffee",
  benefits: [
    "Rich Authentic Coffee Taste",
    "Perfect for Morning Routines", 
    "Tobacco-Free Experience",
    "Long-Lasting Flavor",
    "Premium Quality Ingredients",
    "Various Nicotine Strengths"
  ],
  keywords: [
    "coffee nicotine pouches",
    "espresso nicotine pouches", 
    "coffee flavor pouches",
    "tobacco-free coffee",
    "premium coffee pouches",
    "coffee zyn alternatives"
  ],
  lsiKeywords: [
    "coffee taste nicotine pouches",
    "espresso flavored pouches",
    "morning coffee pouches",
    "rich coffee flavor",
    "coffee lovers nicotine",
    "authentic coffee experience"
  ]
}

// Filter products for coffee flavors
const coffeeProducts = products.filter(product => 
  product.category === 'coffee' || 
  ['Coffee', 'Espresso'].includes(product.flavor)
)

export const metadata: Metadata = {
  title: `${flavorInfo.title} | Premium Coffee & Espresso Pouches`,
  description: flavorInfo.seoDescription,
  keywords: flavorInfo.keywords.join(', '),
  openGraph: {
    title: flavorInfo.title,
    description: flavorInfo.seoDescription,
    type: 'website',
    url: 'https://nicotinepoucheszyn.com/coffee-flavors-nicotine-pouches',
  },
  alternates: {
    canonical: 'https://nicotinepoucheszyn.com/coffee-flavors-nicotine-pouches'
  }
}

export default function CoffeeFlavorsPage() {
  return (
    <FlavorCategoryClient 
      flavor="coffee"
      flavorInfo={flavorInfo}
      products={coffeeProducts}
    />
  )
}