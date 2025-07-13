import { Metadata } from 'next'
import { products } from '@/data/products'
import FlavorCategoryClient from '../spearmint-flavors-nicotine-pouches/FlavorCategoryClient'

const flavorInfo = {
  title: "Coffee Nicotine Pouches",
  description: "Experience rich coffee flavor nicotine pouches with bold roasted taste and energizing aroma. Premium tobacco-free coffee pouches for ultimate satisfaction and morning energy boost.",
  h1: "Premium Coffee Nicotine Pouches",
  seoDescription: "Shop coffee nicotine pouches with rich roasted flavor and bold taste. Tobacco-free, energizing coffee taste in all strengths. Free shipping over $25.",
  flavorName: "coffee",
  benefits: [
    "Rich Coffee Flavor",
    "Bold Roasted Taste", 
    "Energizing Experience",
    "Tobacco-Free Experience",
    "Morning Energy Boost",
    "Premium Quality Ingredients"
  ],
  keywords: [
    "coffee nicotine pouches",
    "coffee flavor pouches", 
    "roasted coffee pouches",
    "tobacco-free coffee",
    "premium coffee pouches",
    "energizing coffee pouches"
  ],
  lsiKeywords: [
    "coffee taste nicotine pouches",
    "rich coffee flavored pouches",
    "roasted coffee pouches",
    "bold coffee flavor",
    "coffee tobacco alternative",
    "energizing coffee experience"
  ]
}

// Filter products for coffee flavors
const coffeeProducts = products.filter(product => 
  product.category === 'coffee' || 
  ['Coffee', 'Espresso'].includes(product.flavor)
)

export const metadata: Metadata = {
  title: `${flavorInfo.title} | Rich Roasted Coffee Pouches`,
  description: flavorInfo.seoDescription,
  keywords: flavorInfo.keywords.join(', '),
  openGraph: {
    title: flavorInfo.title,
    description: flavorInfo.seoDescription,
    type: 'website',
    url: 'https://nicotinepoucheszyn.com/coffee-nicotine-pouches',
  },
  alternates: {
    canonical: 'https://nicotinepoucheszyn.com/coffee-nicotine-pouches'
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