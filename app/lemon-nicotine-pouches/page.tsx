import { Metadata } from 'next'
import { products } from '@/data/products'
import FlavorCategoryClient from '../spearmint-flavors-nicotine-pouches/FlavorCategoryClient'

const flavorInfo = {
  title: "Lemon Nicotine Pouches",
  description: "Experience bright lemon flavor nicotine pouches with crisp citrusy taste and refreshing zesty kick. Premium tobacco-free lemon pouches for ultimate freshness and energizing satisfaction.",
  h1: "Premium Lemon Nicotine Pouches",
  seoDescription: "Shop lemon nicotine pouches with bright citrus flavor and crisp taste. Tobacco-free, refreshing lemon taste in all strengths. Free shipping over $25.",
  flavorName: "lemon",
  benefits: [
    "Bright Lemon Flavor",
    "Crisp Citrusy Taste", 
    "Refreshing Zesty Kick",
    "Tobacco-Free Experience",
    "Natural Citrus Appeal",
    "Premium Quality Ingredients"
  ],
  keywords: [
    "lemon nicotine pouches",
    "lemon flavor pouches", 
    "citrus lemon pouches",
    "tobacco-free lemon",
    "premium lemon pouches",
    "zesty lemon pouches"
  ],
  lsiKeywords: [
    "lemon taste nicotine pouches",
    "bright lemon flavored pouches",
    "refreshing lemon pouches",
    "crisp lemon flavor",
    "lemon tobacco alternative",
    "energizing lemon experience"
  ]
}

// Filter products for lemon flavors
const lemonProducts = products.filter(product => 
  product.category === 'citrus' || 
  ['Lemon'].includes(product.flavor)
)

export const metadata: Metadata = {
  title: `${flavorInfo.title} | Bright Zesty Lemon Pouches`,
  description: flavorInfo.seoDescription,
  keywords: flavorInfo.keywords.join(', '),
  openGraph: {
    title: flavorInfo.title,
    description: flavorInfo.seoDescription,
    type: 'website',
    url: 'https://nicotinepoucheszyn.com/lemon-nicotine-pouches',
  },
  alternates: {
    canonical: 'https://nicotinepoucheszyn.com/lemon-nicotine-pouches'
  }
}

export default function LemonFlavorsPage() {
  return (
    <FlavorCategoryClient 
      flavor="lemon"
      flavorInfo={flavorInfo}
      products={lemonProducts}
    />
  )
}