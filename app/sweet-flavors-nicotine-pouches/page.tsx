import { Metadata } from 'next'
import { products } from '@/data/products'
import FlavorCategoryClient from './FlavorCategoryClient'

const flavorInfo = {
  title: "Sweet Flavor Nicotine Pouches",
  description: "Indulge in our premium sweet flavor nicotine pouches featuring smooth vanilla and other delightful sweet varieties. Perfect for those who enjoy a gentle, sweet tobacco-free experience.",
  h1: "Premium Sweet Flavor Nicotine Pouches",
  seoDescription: "Shop sweet flavor nicotine pouches including Vanilla and other sweet varieties. Tobacco-free, premium quality with smooth, delightful taste. Free shipping over $25.",
  flavorName: "sweet",
  benefits: [
    "Smooth Sweet Taste",
    "Gentle Flavor Profile", 
    "Tobacco-Free Experience",
    "Long-Lasting Sweetness",
    "Premium Quality Ingredients",
    "Perfect for Dessert Lovers"
  ],
  keywords: [
    "sweet nicotine pouches",
    "vanilla nicotine pouches", 
    "sweet flavor pouches",
    "tobacco-free sweet",
    "premium sweet pouches",
    "dessert flavor pouches"
  ],
  lsiKeywords: [
    "sweet taste nicotine pouches",
    "vanilla flavored pouches",
    "smooth sweet pouches",
    "gentle sweet flavor",
    "dessert lovers nicotine",
    "sweet tobacco alternative"
  ]
}

// Filter products for sweet flavors
const sweetProducts = products.filter(product => 
  product.category === 'sweet' || 
  ['Vanilla'].includes(product.flavor)
)

export const metadata: Metadata = {
  title: `${flavorInfo.title} | Premium Vanilla & Sweet Pouches`,
  description: flavorInfo.seoDescription,
  keywords: flavorInfo.keywords.join(', '),
  openGraph: {
    title: flavorInfo.title,
    description: flavorInfo.seoDescription,
    type: 'website',
    url: 'https://nicotinepoucheszyn.com/sweet-flavors-nicotine-pouches',
  },
  alternates: {
    canonical: 'https://nicotinepoucheszyn.com/sweet-flavors-nicotine-pouches'
  }
}

export default function SweetFlavorsPage() {
  return (
    <FlavorCategoryClient 
      flavor="sweet"
      flavorInfo={flavorInfo}
      products={sweetProducts}
    />
  )
}