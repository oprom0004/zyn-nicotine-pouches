import { Metadata } from 'next'
import { products } from '@/data/products'
import CitrusPageClient from './CitrusPageClient'

const flavorInfo = {
  title: "Citrus Nicotine Pouches",
  description: "Experience the vibrant citrus flavor nicotine pouches with energizing zesty taste and lasting satisfaction. Premium tobacco-free citrus pouches.",
  h1: "Premium Citrus Flavor Nicotine Pouches",
  seoDescription: "Shop citrus flavor nicotine pouches with vibrant orange taste. Tobacco-free, premium quality citrus pouches in multiple strengths. Free shipping over $25.",
  flavorName: "citrus",
  benefits: [
    "Vibrant Citrus Burst",
    "Natural Fruit Flavor", 
    "Energizing Taste Experience",
    "Long-Lasting Freshness",
    "Premium Quality Ingredients",
    "Various Nicotine Strengths"
  ],
  keywords: [
    "citrus nicotine pouches",
    "orange flavor pouches", 
    "citrus zyn alternatives",
    "tobacco-free citrus",
    "premium citrus pouches",
    "vibrant citrus taste"
  ],
  lsiKeywords: [
    "citrus taste nicotine pouches",
    "orange flavored pouches",
    "zesty citrus experience",
    "vibrant citrus flavor",
    "citrus lovers nicotine",
    "authentic citrus satisfaction"
  ]
}

// Filter products for citrus flavor only
const allCitrusProducts = products.filter(product => 
  product.category === 'citrus' || ['Citrus', 'Lemon'].includes(product.flavor)
)

export const metadata: Metadata = {
  title: `${flavorInfo.title} | Premium Tobacco-Free Collection`,
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

export default function CitrusPage() {
  return (
    <CitrusPageClient 
      flavorInfo={flavorInfo}
      products={allCitrusProducts}
    />
  )
}