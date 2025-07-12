import { Metadata } from 'next'
import { products } from '@/data/products'
import FlavorCategoryClient from './FlavorCategoryClient'

const flavorInfo = {
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
}

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `${flavorInfo.title} | Premium Tobacco-Free Collection | Zyn`,
    description: flavorInfo.seoDescription,
    keywords: flavorInfo.keywords.join(', '),
    openGraph: {
      title: `${flavorInfo.title} | Zyn Collection`,
      description: flavorInfo.description,
      url: `https://nicotinepoucheszyn.com/wintergreen-flavors-nicotine-pouches`,
      images: [
        {
          url: `/og-flavor-wintergreen.jpg`,
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
      images: [`/og-flavor-wintergreen.jpg`],
    },
    alternates: {
      canonical: `https://nicotinepoucheszyn.com/wintergreen-flavors-nicotine-pouches`,
    },
    other: {
      'product:category': 'wintergreen',
      'product:type': 'nicotine-pouches',
    },
  }
}

export default function WintergreenFlavorsPage() {
  // 过滤wintergreen类别产品
  const flavorProducts = products.filter(product => 
    product.category === 'wintergreen'
  )

  return (
    <FlavorCategoryClient 
      flavor="wintergreen-flavors-nicotine-pouches"
      flavorInfo={flavorInfo}
      products={flavorProducts}
    />
  )
}