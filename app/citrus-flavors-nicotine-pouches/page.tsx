import { Metadata } from 'next'
import { products } from '@/data/products'
import FlavorCategoryClient from './FlavorCategoryClient'

const flavorInfo = {
  title: 'Citrus & Lemon Nicotine Pouches',
  description: 'Experience vibrant citrus flavors nicotine pouches with zesty orange, lemon, and lime. Premium tobacco-free citrus pouches for refreshing satisfaction.',
  h1: 'Zesty Citrus Flavors Nicotine Pouches Collection',
  seoDescription: 'Shop premium citrus flavors nicotine pouches with fresh orange, lemon, lime flavors. Tobacco-free citrus pouches in all strengths. Order online today.',
  flavorName: 'citrus',
  benefits: [
    'Vibrant citrus burst',
    'Natural fruit flavors',
    'Energizing taste',
    'Summer-fresh experience'
  ],
  keywords: [
    'citrus flavors nicotine pouches',
    'citrus tobacco free pouches',
    'orange nicotine pouches',
    'lemon nicotine pouches',
    'lime nicotine pouches',
    'citrus flavor tobacco free',
    'zesty nicotine pouches',
    'fruit flavored nicotine pouches',
    'citrus fresh pouches',
    'tangy citrus nicotine',
    'premium citrus pouches',
    'buy citrus flavors nicotine pouches',
    'zyn citrus nicotine pouches',
    'refreshing citrus taste'
  ],
  lsiKeywords: [
    'citrus tobacco-free products',
    'smokeless citrus nicotine',
    'fruit-based nicotine delivery',
    'natural citrus extracts',
    'vitamin c flavor profile',
    'citrus harm reduction',
    'refreshing fruit alternative',
    'summer citrus experience',
    'tropical citrus blend',
    'energizing fruit pouches'
  ]
}

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `${flavorInfo.title} | Premium Tobacco-Free Collection | Zyn`,
    description: flavorInfo.seoDescription,
    keywords: flavorInfo.keywords.join(', '),
    openGraph: {
      title: `${flavorInfo.title} | Zyn Collection`,
      description: flavorInfo.description,
      url: `https://nicotinepoucheszyn.com/citrus-flavors-nicotine-pouches`,
      images: [
        {
          url: `/og-flavor-citrus.jpg`,
          width: 1200,
          height: 630,
          alt: `${flavorInfo.title} Collection`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${flavorInfo.title} | Zyn`,
      description: flavorInfo.description,
      images: [`/og-flavor-citrus.jpg`],
    },
    alternates: {
      canonical: `https://nicotinepoucheszyn.com/citrus-flavors-nicotine-pouches`,
    },
    other: {
      'product:category': 'citrus',
      'product:type': 'nicotine-pouches',
    },
  }
}

export default function CitrusFlavorsPage() {
  // 过滤citrus类别产品
  const flavorProducts = products.filter(product => 
    product.category === 'citrus'
  )

  return (
    <FlavorCategoryClient 
      flavor="citrus-flavors-nicotine-pouches"
      flavorInfo={flavorInfo}
      products={flavorProducts}
    />
  )
}