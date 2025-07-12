import { Metadata } from 'next'
import { products } from '@/data/products'
import FlavorCategoryClient from './FlavorCategoryClient'

const flavorInfo = {
  title: "Spice Flavor Nicotine Pouches",
  description: "Experience the warmth of our premium spice flavor nicotine pouches featuring bold cinnamon and other aromatic spice varieties. Perfect for those who enjoy rich, warming tobacco-free experiences.",
  h1: "Premium Spice Flavor Nicotine Pouches",
  seoDescription: "Shop spice flavor nicotine pouches including Cinnamon and other warming spice varieties. Tobacco-free, premium quality with bold, aromatic taste. Free shipping over $25.",
  flavorName: "spice",
  benefits: [
    "Bold Warming Spices",
    "Rich Aromatic Experience", 
    "Tobacco-Free Alternative",
    "Long-Lasting Spice Flavor",
    "Premium Quality Blend",
    "Perfect for Spice Lovers"
  ],
  keywords: [
    "spice nicotine pouches",
    "cinnamon nicotine pouches", 
    "spice flavor pouches",
    "tobacco-free spice",
    "premium spice pouches",
    "warming spice pouches"
  ],
  lsiKeywords: [
    "spice taste nicotine pouches",
    "cinnamon flavored pouches",
    "warming spice pouches",
    "aromatic spice flavor",
    "bold spice nicotine",
    "spice tobacco alternative"
  ]
}

// Filter products for spice flavors
const spiceProducts = products.filter(product => 
  product.category === 'spice' || 
  ['Cinnamon'].includes(product.flavor)
)

export const metadata: Metadata = {
  title: `${flavorInfo.title} | Premium Cinnamon & Spice Pouches`,
  description: flavorInfo.seoDescription,
  keywords: flavorInfo.keywords.join(', '),
  openGraph: {
    title: flavorInfo.title,
    description: flavorInfo.seoDescription,
    type: 'website',
    url: 'https://nicotinepoucheszyn.com/spice-flavors-nicotine-pouches',
  },
  alternates: {
    canonical: 'https://nicotinepoucheszyn.com/spice-flavors-nicotine-pouches'
  }
}

export default function SpiceFlavorsPage() {
  return (
    <FlavorCategoryClient 
      flavor="spice"
      flavorInfo={flavorInfo}
      products={spiceProducts}
    />
  )
}