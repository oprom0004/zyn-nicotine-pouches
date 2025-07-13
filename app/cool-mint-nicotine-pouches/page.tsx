import { Metadata } from 'next'
import { products } from '@/data/products'
import FlavorCategoryClient from '../spearmint-flavors-nicotine-pouches/FlavorCategoryClient'

const flavorInfo = {
  title: "Cool Mint Nicotine Pouches",
  description: "Experience the classic cool mint flavor nicotine pouches with refreshing arctic sensation. Premium tobacco-free cool mint pouches for ultimate freshness and cooling satisfaction.",
  h1: "Premium Cool Mint Nicotine Pouches",
  seoDescription: "Shop cool mint nicotine pouches with classic mint flavor and cooling sensation. Tobacco-free, refreshing taste in all strengths. Free shipping over $25.",
  flavorName: "cool-mint",
  benefits: [
    "Classic Cool Mint Flavor",
    "Refreshing Arctic Sensation", 
    "Long-lasting Cooling Effect",
    "Tobacco-Free Experience",
    "Fresh Breath Experience",
    "Premium Quality Ingredients"
  ],
  keywords: [
    "cool mint nicotine pouches",
    "cool mint flavor pouches", 
    "arctic mint pouches",
    "tobacco-free cool mint",
    "premium cool mint pouches",
    "refreshing cool mint pouches"
  ],
  lsiKeywords: [
    "cool mint taste nicotine pouches",
    "classic cool mint flavored pouches",
    "refreshing cool mint pouches",
    "arctic cooling flavor",
    "cool mint tobacco alternative",
    "fresh cool mint experience"
  ]
}

// Filter products for cool mint flavors
const coolMintProducts = products.filter(product => 
  product.category === 'mint' || 
  ['Cool Mint'].includes(product.flavor)
)

export const metadata: Metadata = {
  title: `${flavorInfo.title} | Classic Refreshing Cool Mint Pouches`,
  description: flavorInfo.seoDescription,
  keywords: flavorInfo.keywords.join(', '),
  openGraph: {
    title: flavorInfo.title,
    description: flavorInfo.seoDescription,
    type: 'website',
    url: 'https://nicotinepoucheszyn.com/cool-mint-nicotine-pouches',
  },
  alternates: {
    canonical: 'https://nicotinepoucheszyn.com/cool-mint-nicotine-pouches'
  }
}

export default function CoolMintFlavorsPage() {
  return (
    <FlavorCategoryClient 
      flavor="cool-mint"
      flavorInfo={flavorInfo}
      products={coolMintProducts}
    />
  )
}