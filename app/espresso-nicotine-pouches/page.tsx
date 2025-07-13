import { Metadata } from 'next'
import { products } from '@/data/products'
import FlavorCategoryClient from '../spearmint-flavors-nicotine-pouches/FlavorCategoryClient'

const flavorInfo = {
  title: "Espresso Nicotine Pouches",
  description: "Experience intense espresso flavor nicotine pouches with bold Italian coffee taste and strong aromatic kick. Premium tobacco-free espresso pouches for ultimate satisfaction and energy boost.",
  h1: "Premium Espresso Nicotine Pouches",
  seoDescription: "Shop espresso nicotine pouches with intense Italian coffee flavor and bold taste. Tobacco-free, strong espresso taste in all strengths. Free shipping over $25.",
  flavorName: "espresso",
  benefits: [
    "Intense Espresso Flavor",
    "Bold Italian Coffee Taste", 
    "Strong Aromatic Kick",
    "Tobacco-Free Experience",
    "Premium Energy Boost",
    "Premium Quality Ingredients"
  ],
  keywords: [
    "espresso nicotine pouches",
    "espresso flavor pouches", 
    "italian coffee pouches",
    "tobacco-free espresso",
    "premium espresso pouches",
    "strong espresso pouches"
  ],
  lsiKeywords: [
    "espresso taste nicotine pouches",
    "intense espresso flavored pouches",
    "italian espresso pouches",
    "bold espresso flavor",
    "espresso tobacco alternative",
    "energizing espresso experience"
  ]
}

// Filter products for espresso flavors
const espressoProducts = products.filter(product => 
  product.category === 'coffee' || 
  ['Espresso'].includes(product.flavor)
)

export const metadata: Metadata = {
  title: `${flavorInfo.title} | Intense Italian Espresso Pouches`,
  description: flavorInfo.seoDescription,
  keywords: flavorInfo.keywords.join(', '),
  openGraph: {
    title: flavorInfo.title,
    description: flavorInfo.seoDescription,
    type: 'website',
    url: 'https://nicotinepoucheszyn.com/espresso-nicotine-pouches',
  },
  alternates: {
    canonical: 'https://nicotinepoucheszyn.com/espresso-nicotine-pouches'
  }
}

export default function EspressoFlavorsPage() {
  return (
    <FlavorCategoryClient 
      flavor="espresso"
      flavorInfo={flavorInfo}
      products={espressoProducts}
    />
  )
}