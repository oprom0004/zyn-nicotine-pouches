import { Metadata } from 'next'
import { products } from '@/data/products'
import FlavorCategoryClient from './FlavorCategoryClient'

const flavorInfo = {
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

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `${flavorInfo.title} | Premium Tobacco-Free Collection | Zyn`,
    description: flavorInfo.seoDescription,
    keywords: flavorInfo.keywords.join(', '),
    openGraph: {
      title: `${flavorInfo.title} | Zyn Collection`,
      description: flavorInfo.description,
      url: `https://nicotinepoucheszyn.com/berry-flavors-nicotine-pouches`,
      images: [
        {
          url: `/og-flavor-berry.jpg`,
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
      images: [`/og-flavor-berry.jpg`],
    },
    alternates: {
      canonical: `https://nicotinepoucheszyn.com/berry-flavors-nicotine-pouches`,
    },
    other: {
      'product:category': 'berry',
      'product:type': 'nicotine-pouches',
    },
  }
}

export default function BerryFlavorsPage() {
  // 过滤berry类别产品
  const flavorProducts = products.filter(product => 
    product.category === 'berry'
  )

  return (
    <FlavorCategoryClient 
      flavor="berry-flavors-nicotine-pouches"
      flavorInfo={flavorInfo}
      products={flavorProducts}
    />
  )
}