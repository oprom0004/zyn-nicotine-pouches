import { Metadata } from 'next'
import { products } from '@/data/products'
import EspressoFlavorCategoryClient from './FlavorCategoryClient'

const flavorInfo = {
  title: "Espresso Nicotine Pouches",
  description: "Experience the bold espresso flavor nicotine pouches with intense roasted taste and energizing satisfaction. Premium tobacco-free espresso pouches.",
  h1: "Premium Espresso Flavor Nicotine Pouches",
  seoDescription: "Shop espresso flavor nicotine pouches with bold roasted taste. Tobacco-free, premium quality espresso pouches in multiple strengths. Free shipping over $25.",
  flavorName: "espresso",
  benefits: [
    "Bold Espresso Flavor",
    "Intense Roasted Taste", 
    "Energizing Experience",
    "Perfect for Espresso Lovers",
    "Premium Quality Ingredients",
    "Various Nicotine Strengths"
  ],
  keywords: [
    "espresso nicotine pouches",
    "espresso flavor pouches", 
    "espresso zyn alternatives",
    "tobacco-free espresso",
    "premium espresso pouches",
    "bold espresso taste"
  ],
  lsiKeywords: [
    "espresso taste nicotine pouches",
    "roasted espresso flavored pouches",
    "espresso lover experience",
    "authentic espresso flavor",
    "espresso nicotine satisfaction",
    "strong coffee alternative"
  ]
}

// Filter products for espresso flavor
const espressoProducts = products.filter(product => 
  product.category === 'coffee' && ['Espresso'].includes(product.flavor)
)

export const metadata: Metadata = {
  title: `${flavorInfo.title} | Premium Tobacco-Free Collection`,
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

export default function EspressoPage() {
  return (
    <EspressoFlavorCategoryClient 
      flavor="espresso"
      flavorInfo={flavorInfo}
      products={espressoProducts}
    />
  )
}