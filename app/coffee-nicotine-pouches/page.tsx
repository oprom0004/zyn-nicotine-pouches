import { Metadata } from 'next'
import { products } from '@/data/products'
import FlavorCategoryClient from '@/components/FlavorCategoryClient'

const flavorInfo = {
  title: "Coffee Flavor Nicotine Pouches",
  description: "Experience the rich boldness of our premium coffee flavor nicotine pouches. Smooth and aromatic coffee experience with roasted bean essence perfect for coffee enthusiasts.",
  h1: "Premium Coffee Flavor Nicotine Pouches",
  seoDescription: "Shop coffee flavor nicotine pouches with rich roasted taste. Tobacco-free, premium quality with smooth coffee flavor. Free shipping over $25.",
  flavorName: "coffee",
  benefits: [
    "Rich Coffee Aroma",
    "Smooth Roasted Flavor", 
    "Bold & Satisfying",
    "Tobacco-Free Experience",
    "Long-Lasting Coffee Taste",
    "Premium Quality Ingredients"
  ],
  keywords: [
    "coffee nicotine pouches",
    "coffee flavor pouches", 
    "roasted coffee pouches",
    "tobacco-free coffee",
    "premium coffee pouches",
    "bold coffee pouches"
  ],
  lsiKeywords: [
    "coffee taste nicotine pouches",
    "rich coffee flavored pouches",
    "bold coffee pouches",
    "aromatic coffee flavor",
    "coffee tobacco alternative",
    "smooth coffee experience"
  ]
}

// Filter products for coffee flavors
const coffeeProducts = products.filter(product => 
  product.category === 'coffee' || 
  ['Coffee', 'Espresso'].includes(product.flavor)
)

export const metadata: Metadata = {
  title: `${flavorInfo.title} | Rich Bold Coffee Pouches`,
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