import { Metadata } from 'next'
import { products } from '@/data/products'
import FlavorCategoryClient from '@/components/FlavorCategoryClient'

const flavorInfo = {
  title: "Citrus Flavor Nicotine Pouches",
  description: "Experience the vibrant freshness of our premium citrus flavor nicotine pouches. Bright and energizing citrus experience with natural orange and lemon notes perfect for an uplifting boost.",
  h1: "Premium Citrus Flavor Nicotine Pouches",
  seoDescription: "Shop citrus flavor nicotine pouches with bright orange and lemon taste. Tobacco-free, premium quality with energizing citrus flavor. Free shipping over $25.",
  flavorName: "citrus",
  benefits: [
    "Bright Citrus Freshness",
    "Energizing & Uplifting", 
    "Natural Orange & Lemon",
    "Tobacco-Free Experience",
    "Long-Lasting Citrus Taste",
    "Premium Quality Ingredients"
  ],
  keywords: [
    "citrus nicotine pouches",
    "citrus flavor pouches", 
    "orange lemon pouches",
    "tobacco-free citrus",
    "premium citrus pouches",
    "energizing citrus pouches"
  ],
  lsiKeywords: [
    "citrus taste nicotine pouches",
    "bright citrus flavored pouches",
    "energizing citrus pouches",
    "natural citrus flavor",
    "citrus tobacco alternative",
    "fresh citrus experience"
  ]
}

// Filter products for citrus flavors
const citrusProducts = products.filter(product => 
  product.category === 'citrus' || 
  ['Citrus', 'Lemon'].includes(product.flavor)
)

export const metadata: Metadata = {
  title: `${flavorInfo.title} | Bright Energizing Citrus Pouches`,
  description: flavorInfo.seoDescription,
  keywords: flavorInfo.keywords.join(', '),
  openGraph: {
    title: flavorInfo.title,
    description: flavorInfo.seoDescription,
    type: 'website',
    url: 'https://nicotinepoucheszyn.com/citrus-nicotine-pouches',
  },
  alternates: {
    canonical: 'https://nicotinepoucheszyn.com/citrus-nicotine-pouches'
  }
}

export default function CitrusFlavorsPage() {
  return (
    <FlavorCategoryClient 
      flavor="citrus"
      flavorInfo={flavorInfo}
      products={citrusProducts}
    />
  )
}