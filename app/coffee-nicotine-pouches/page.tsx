import { Metadata } from 'next'
import { products } from '@/data/products'
import CoffeeFlavorCategoryClient from './FlavorCategoryClient'

const flavorInfo = {
  title: "Coffee Nicotine Pouches",
  description: "Experience the rich coffee flavor nicotine pouches with authentic roasted taste and warming satisfaction. Premium tobacco-free coffee pouches.",
  h1: "Premium Coffee Flavor Nicotine Pouches",
  seoDescription: "Shop coffee flavor nicotine pouches with rich roasted taste. Tobacco-free, premium quality coffee pouches in multiple strengths. Free shipping over $25.",
  flavorName: "coffee",
  benefits: [
    "Rich Coffee Flavor",
    "Authentic Roasted Taste", 
    "Warming Experience",
    "Perfect for Coffee Lovers",
    "Premium Quality Ingredients",
    "Various Nicotine Strengths"
  ],
  keywords: [
    "coffee nicotine pouches",
    "coffee flavor pouches", 
    "coffee zyn alternatives",
    "tobacco-free coffee",
    "premium coffee pouches",
    "rich coffee taste"
  ],
  lsiKeywords: [
    "coffee taste nicotine pouches",
    "roasted coffee flavored pouches",
    "coffee lover experience",
    "authentic coffee flavor",
    "coffee nicotine satisfaction",
    "morning coffee alternative"
  ]
}

// Filter products for coffee flavor
const coffeeProducts = products.filter(product => 
  product.category === 'coffee' && ['Coffee'].includes(product.flavor)
)

export const metadata: Metadata = {
  title: `${flavorInfo.title} | Premium Tobacco-Free Collection`,
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

export default function CoffeePage() {
  return (
    <CoffeeFlavorCategoryClient 
      flavor="coffee"
      flavorInfo={flavorInfo}
      products={coffeeProducts}
    />
  )
}