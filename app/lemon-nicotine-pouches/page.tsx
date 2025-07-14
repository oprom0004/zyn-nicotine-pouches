import { Metadata } from 'next'
import { products } from '@/data/products'
import FlavorCategoryClient from '@/components/FlavorCategoryClient'

const flavorInfo = {
  title: "Lemon Flavor Nicotine Pouches",
  description: "Experience the zesty brightness of our premium lemon flavor nicotine pouches. Pure and refreshing lemon experience with natural citrus essence perfect for energizing your day.",
  h1: "Premium Lemon Flavor Nicotine Pouches",
  seoDescription: "Shop lemon flavor nicotine pouches with zesty citrus taste. Tobacco-free, premium quality with fresh lemon flavor. Free shipping over $25.",
  flavorName: "lemon",
  benefits: [
    "Zesty Lemon Freshness",
    "Natural Citrus Essence", 
    "Energizing & Uplifting",
    "Tobacco-Free Experience",
    "Long-Lasting Lemon Taste",
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
    "fresh lemon flavored pouches",
    "zesty lemon pouches",
    "natural lemon flavor",
    "lemon tobacco alternative",
    "bright lemon experience"
  ]
}

// Filter products for lemon flavors
const lemonProducts = products.filter(product => 
  product.category === 'lemon' || 
  ['Lemon'].includes(product.flavor)
)

export const metadata: Metadata = {
  title: `${flavorInfo.title} | Zesty Fresh Lemon Pouches`,
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