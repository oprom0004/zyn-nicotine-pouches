import { Metadata } from 'next'
import { products } from '@/data/products'
import FlavorCategoryClient from '../spearmint-flavors-nicotine-pouches/FlavorCategoryClient'

const flavorInfo = {
  title: "Menthol Nicotine Pouches",
  description: "Experience intense menthol nicotine pouches with powerful cooling sensation and invigorating mint taste. Premium tobacco-free menthol pouches for maximum freshness and cooling satisfaction.",
  h1: "Premium Menthol Nicotine Pouches",
  seoDescription: "Shop menthol nicotine pouches with intense cooling sensation and strong mint flavor. Tobacco-free, maximum freshness in all strengths. Free shipping over $25.",
  flavorName: "menthol",
  benefits: [
    "Intense Menthol Cooling",
    "Powerful Mint Sensation", 
    "Maximum Freshness",
    "Tobacco-Free Experience",
    "Invigorating Experience",
    "Premium Quality Ingredients"
  ],
  keywords: [
    "menthol nicotine pouches",
    "menthol flavor pouches", 
    "intense cooling pouches",
    "tobacco-free menthol",
    "premium menthol pouches",
    "strong menthol pouches"
  ],
  lsiKeywords: [
    "menthol taste nicotine pouches",
    "intense menthol flavored pouches",
    "cooling menthol pouches",
    "strong cooling flavor",
    "menthol tobacco alternative",
    "arctic menthol experience"
  ]
}

// Filter products for menthol flavors
const mentholProducts = products.filter(product => 
  product.category === 'mint' || 
  ['Menthol'].includes(product.flavor)
)

export const metadata: Metadata = {
  title: `${flavorInfo.title} | Intense Cooling Menthol Pouches`,
  description: flavorInfo.seoDescription,
  keywords: flavorInfo.keywords.join(', '),
  openGraph: {
    title: flavorInfo.title,
    description: flavorInfo.seoDescription,
    type: 'website',
    url: 'https://nicotinepoucheszyn.com/menthol-nicotine-pouches',
  },
  alternates: {
    canonical: 'https://nicotinepoucheszyn.com/menthol-nicotine-pouches'
  }
}

export default function MentholFlavorsPage() {
  return (
    <FlavorCategoryClient 
      flavor="menthol"
      flavorInfo={flavorInfo}
      products={mentholProducts}
    />
  )
}