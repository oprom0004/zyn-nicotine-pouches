import { Metadata } from 'next'
import { products } from '@/data/products'
import FlavorCategoryClient from '@/components/FlavorCategoryClient'

const flavorInfo = {
  title: "Espresso Flavor Nicotine Pouches",
  description: "Experience the intense richness of our premium espresso flavor nicotine pouches. Bold and concentrated espresso experience with dark roast essence perfect for espresso lovers.",
  h1: "Premium Espresso Flavor Nicotine Pouches",
  seoDescription: "Shop espresso flavor nicotine pouches with intense dark roast taste. Tobacco-free, premium quality with bold espresso flavor. Free shipping over $25.",
  flavorName: "espresso",
  benefits: [
    "Intense Espresso Flavor",
    "Dark Roast Aroma", 
    "Bold & Concentrated",
    "Tobacco-Free Experience",
    "Long-Lasting Espresso Taste",
    "Premium Quality Ingredients"
  ],
  keywords: [
    "espresso nicotine pouches",
    "espresso flavor pouches", 
    "dark roast pouches",
    "tobacco-free espresso",
    "premium espresso pouches",
    "intense espresso pouches"
  ],
  lsiKeywords: [
    "espresso taste nicotine pouches",
    "intense espresso flavored pouches",
    "bold espresso pouches",
    "concentrated espresso flavor",
    "espresso tobacco alternative",
    "dark roast experience"
  ]
}

// Filter products for espresso flavors
const espressoProducts = products.filter(product => 
  product.category === 'espresso' || 
  ['Espresso'].includes(product.flavor)
)

export const metadata: Metadata = {
  title: `${flavorInfo.title} | Intense Bold Espresso Pouches`,
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