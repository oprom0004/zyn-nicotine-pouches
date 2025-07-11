import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { products } from '@/data/products'
import FlavorCategoryClient from './FlavorCategoryClient'

const flavorData = {
  'mint-flavors-nicotine-pouches': {
    title: 'Mint Flavors Nicotine Pouches',
    description: 'Discover our premium mint flavors nicotine pouches collection. Cool, refreshing mint flavor tobacco-free pouches in multiple strengths.',
    h1: 'Premium Mint Flavors Nicotine Pouches Collection',
    seoDescription: 'Shop the best mint flavors nicotine pouches online. Cool, refreshing tobacco-free mint pouches available in 3mg, 6mg, 9mg, 12mg strengths. Free shipping over $25.',
    flavorName: 'mint',
    benefits: [
      'Refreshing mint flavor',
      'Long-lasting taste',
      'Instantly fresh breath',
      'Perfect for daily use'
    ],
    keywords: [
      'mint flavors nicotine pouches',
      'mint tobacco free pouches',
      'cool mint nicotine pouches',
      'peppermint nicotine pouches',
      'spearmint nicotine pouches',
      'mint nicotine bags',
      'minty fresh pouches',
      'refreshing mint tobacco-free',
      'best mint nicotine pouches',
      'buy mint flavors nicotine pouches online',
      'zyn mint nicotine pouches',
      'mint snus alternative',
      'discrete mint nicotine',
      'premium mint pouches'
    ],
    lsiKeywords: [
      'mint tobacco-free products',
      'smokeless mint nicotine',
      'oral mint nicotine delivery',
      'white mint pouches',
      'adult mint nicotine products',
      'mint nicotine satisfaction',
      'mint alternative tobacco',
      'fresh breath nicotine solution',
      'cooling mint experience',
      'mint harm reduction products'
    ]
  },
  'wintergreen-flavors-nicotine-pouches': {
    title: 'Wintergreen Flavors Nicotine Pouches',
    description: 'Experience the bold, refreshing taste of wintergreen flavors nicotine pouches. Premium tobacco-free wintergreen pouches with long-lasting flavor.',
    h1: 'Premium Wintergreen Flavors Nicotine Pouches Collection',
    seoDescription: 'Shop premium wintergreen flavors nicotine pouches online. Bold, refreshing wintergreen tobacco-free pouches in 3mg, 6mg, 9mg, 12mg strengths. Free shipping over $25.',
    flavorName: 'wintergreen',
    benefits: [
      'Bold wintergreen flavor',
      'Cooling sensation',
      'Long-lasting freshness',
      'Classic American taste'
    ],
    keywords: [
      'wintergreen flavors nicotine pouches',
      'wintergreen tobacco free pouches',
      'wintergreen nicotine bags',
      'bold wintergreen pouches',
      'classic wintergreen flavor',
      'wintergreen snus alternative',
      'cooling wintergreen nicotine',
      'premium wintergreen pouches',
      'buy wintergreen flavors nicotine pouches',
      'zyn wintergreen nicotine pouches',
      'wintergreen mint pouches',
      'strong wintergreen flavor',
      'discrete wintergreen nicotine',
      'american wintergreen taste'
    ],
    lsiKeywords: [
      'wintergreen tobacco-free products',
      'smokeless wintergreen nicotine',
      'wintergreen harm reduction',
      'oral wintergreen delivery',
      'white wintergreen pouches',
      'adult wintergreen products',
      'wintergreen satisfaction alternative',
      'cooling wintergreen experience',
      'classic american flavor profile',
      'wintergreen mint combination'
    ]
  },
  'citrus-flavors-nicotine-pouches': {
    title: 'Citrus Flavors Nicotine Pouches',
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
  },
  'berry-flavors-nicotine-pouches': {
    title: 'Berry Flavors Nicotine Pouches',
    description: 'Indulge in sweet berry flavors nicotine pouches with rich strawberry, blueberry, and mixed berry. Premium fruit-flavored tobacco-free pouches.',
    h1: 'Sweet Berry Flavors Nicotine Pouches Collection',
    seoDescription: 'Enjoy premium berry flavors nicotine pouches with strawberry, blueberry, mixed berry flavors. Sweet tobacco-free fruit pouches for adults 21+.',
    flavorName: 'berry',
    benefits: [
      'Sweet berry flavors',
      'Rich fruit taste',
      'Naturally inspired',
      'Satisfying sweetness'
    ],
    keywords: [
      'berry flavors nicotine pouches',
      'berry tobacco free pouches',
      'strawberry nicotine pouches',
      'blueberry nicotine pouches',
      'mixed berry nicotine pouches',
      'sweet nicotine pouches',
      'fruit berry pouches',
      'berry flavor tobacco free',
      'sweet berry taste',
      'premium berry pouches',
      'buy berry flavors nicotine pouches',
      'zyn berry nicotine pouches',
      'natural berry flavors',
      'antioxidant berry pouches'
    ],
    lsiKeywords: [
      'berry tobacco-free products',
      'smokeless berry nicotine',
      'antioxidant fruit delivery',
      'natural berry extracts',
      'superfruit flavor profile',
      'berry harm reduction',
      'sweet fruit alternative',
      'summer berry experience',
      'mixed berry blend',
      'healthy fruit pouches'
    ]
  }
}

export async function generateMetadata({ params }: { params: Promise<{ flavor: string }> }): Promise<Metadata> {
  const { flavor } = await params
  const flavorInfo = flavorData[flavor as keyof typeof flavorData]
  
  if (!flavorInfo) {
    return {
      title: 'Flavor Not Found',
      description: 'The requested nicotine pouch flavor could not be found.',
    }
  }

  return {
    title: `${flavorInfo.title} | Premium Tobacco-Free Collection | Zyn`,
    description: flavorInfo.seoDescription,
    keywords: flavorInfo.keywords.join(', '),
    openGraph: {
      title: `${flavorInfo.title} | Zyn Collection`,
      description: flavorInfo.description,
      url: `https://nicotinepoucheszyn.com/flavors/${flavor}`,
      images: [
        {
          url: `/og-flavor-${flavor}.jpg`,
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
      images: [`/og-flavor-${flavor}.jpg`],
    },
    alternates: {
      canonical: `https://nicotinepoucheszyn.com/flavors/${flavor}`,
    },
    other: {
      'product:category': flavor,
      'product:type': 'nicotine-pouches',
    },
  }
}

export async function generateStaticParams() {
  return Object.keys(flavorData).map((flavor) => ({
    flavor: flavor,
  }))
}

export default async function FlavorCategoryPage({ params }: { params: Promise<{ flavor: string }> }) {
  const { flavor } = await params
  const flavorInfo = flavorData[flavor as keyof typeof flavorData]
  
  if (!flavorInfo) {
    notFound()
  }

  // Filter products by flavor category with improved mapping
  const getFlavorProducts = (flavorKey: string) => {
    switch (flavorKey) {
      case 'mint-flavors-nicotine-pouches':
        return products.filter(product => 
          ['Cool Mint', 'Menthol', 'Spearmint'].includes(product.flavor) ||
          ['mint', 'spearmint'].includes(product.category.toLowerCase())
        )
      case 'wintergreen-flavors-nicotine-pouches':
        return products.filter(product => 
          product.flavor.toLowerCase().includes('wintergreen')
        )
      case 'citrus-flavors-nicotine-pouches':
        return products.filter(product => 
          product.flavor.toLowerCase().includes('citrus') ||
          product.category.toLowerCase().includes('citrus')
        )
      case 'berry-flavors-nicotine-pouches':
        return products.filter(product => 
          product.flavor.toLowerCase().includes('berry') ||
          product.category.toLowerCase().includes('berry') ||
          product.category.toLowerCase().includes('fruit')
        )
      default:
        return []
    }
  }
  
  const flavorProducts = getFlavorProducts(flavor)

  return (
    <FlavorCategoryClient 
      flavor={flavor}
      flavorInfo={flavorInfo}
      products={flavorProducts}
    />
  )
}