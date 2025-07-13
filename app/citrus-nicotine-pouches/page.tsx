import { Metadata } from 'next'
import { products } from '@/data/products'
import FlavorCategoryClient from '../spearmint-flavors-nicotine-pouches/FlavorCategoryClient'

const flavorInfo = {
  title: "Citrus Nicotine Pouches",
  description: "Experience vibrant citrus flavor nicotine pouches with refreshing tangy taste and zesty energy. Premium tobacco-free citrus pouches for ultimate freshness and energizing satisfaction.",
  h1: "Premium Citrus Nicotine Pouches",
  seoDescription: "Shop citrus nicotine pouches with vibrant orange and lemon flavors. Tobacco-free, energizing taste in all strengths. Free shipping over $25.",
  flavorName: "citrus",
  benefits: [
    "Vibrant Citrus Flavor",
    "Refreshing Tangy Taste", 
    "Energizing Experience",
    "Tobacco-Free Experience",
    "Natural Zesty Appeal",
    "Premium Quality Ingredients"
  ],
  keywords: [
    "citrus nicotine pouches",
    "citrus flavor pouches", 
    "orange citrus pouches",
    "tobacco-free citrus",
    "premium citrus pouches",
    "zesty citrus pouches"
  ],
  lsiKeywords: [
    "citrus taste nicotine pouches",
    "vibrant citrus flavored pouches",
    "refreshing citrus pouches",
    "tangy citrus flavor",
    "citrus tobacco alternative",
    "energizing citrus experience"
  ]
}

// Filter products for citrus flavors
const citrusProducts = products.filter(product => 
  product.category === 'citrus' || 
  ['Citrus', 'Orange', 'Lemon'].includes(product.flavor)
)

export const metadata: Metadata = {
  title: `${flavorInfo.title} | Vibrant Zesty Citrus Pouches`,
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