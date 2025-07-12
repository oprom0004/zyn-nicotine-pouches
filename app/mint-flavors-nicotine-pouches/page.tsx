import { Metadata } from 'next'
import { products } from '@/data/products'
import FlavorCategoryClient from './FlavorCategoryClient'

const flavorInfo = {
  title: 'Mint Flavors Nicotine Pouches',
  description: 'Discover our premium mint flavors nicotine pouches collection. Each mint flavor offers a cool, refreshing tobacco-free experience in multiple strengths.',
  h1: 'Premium Mint Flavors Nicotine Pouches Collection',
  seoDescription: 'Shop the best mint flavors nicotine pouches online. Our mint flavor collection includes cool mint, spearmint, and menthol varieties in 3mg, 6mg, 9mg strengths. Free shipping over $25.',
  flavorName: 'mint',
  benefits: [
    'Authentic mint flavor experience',
    'Long-lasting mint flavor satisfaction', 
    'Instantly fresh breath with mint flavor',
    'Premium mint flavor for daily use'
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
}

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `${flavorInfo.title} | Premium Tobacco-Free Collection | Zyn`,
    description: flavorInfo.seoDescription,
    keywords: flavorInfo.keywords.join(', '),
    openGraph: {
      title: `${flavorInfo.title} | Zyn Collection`,
      description: flavorInfo.description,
      url: `https://nicotinepoucheszyn.com/mint-flavors-nicotine-pouches`,
      images: [
        {
          url: `/og-flavor-mint.jpg`,
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
      images: [`/og-flavor-mint.jpg`],
    },
    alternates: {
      canonical: `https://nicotinepoucheszyn.com/mint-flavors-nicotine-pouches`,
    },
    other: {
      'product:category': 'mint',
      'product:type': 'nicotine-pouches',
    },
  }
}

export default function MintFlavorsPage() {
  // 只过滤mint相关产品，排除Wintergreen
  const flavorProducts = products.filter(product => 
    ['Cool Mint', 'Menthol', 'Spearmint'].includes(product.flavor) ||
    (['mint', 'spearmint'].includes(product.category.toLowerCase()) && !product.flavor.toLowerCase().includes('wintergreen'))
  )

  return (
    <FlavorCategoryClient 
      flavor="mint-flavors-nicotine-pouches"
      flavorInfo={flavorInfo}
      products={flavorProducts}
    />
  )
}