import { Metadata } from 'next'
import { products } from '@/data/products'
import FlavorCategoryClient from '@/components/FlavorCategoryClient'
import { coolMintFlavorConfig } from '@/config/flavors/cool-mint'

// 生成metadata
export async function generateMetadata(): Promise<Metadata> {
  const config = coolMintFlavorConfig
  
  return {
    title: `${config.flavorInfo.title} | Premium Cool Mint Collection | Zyn`,
    description: config.flavorInfo.seoDescription,
    keywords: config.flavorInfo.keywords.join(', '),
    openGraph: {
      title: `${config.flavorInfo.title} | Zyn Collection`,
      description: config.flavorInfo.description,
      url: `https://nicotinepoucheszyn.com/${config.slug}`,
      images: [
        {
          url: `/og-flavor-cool-mint.jpg`,
          width: 1200,
          height: 630,
          alt: `${config.flavorInfo.title} Collection`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${config.flavorInfo.title} | Zyn`,
      description: config.flavorInfo.description,
      images: [`/og-flavor-cool-mint.jpg`],
    },
    alternates: {
      canonical: `https://nicotinepoucheszyn.com/${config.slug}`,
    },
    other: {
      'product:category': 'mint',
      'product:flavor': 'cool-mint',
      'product:type': 'nicotine-pouches',
    },
  }
}

export default function CoolMintPage() {
  return (
    <FlavorCategoryClient 
      config={coolMintFlavorConfig}
      products={products}
    />
  )
}