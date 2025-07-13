import { Metadata } from 'next'
import { products } from '@/data/products'
import FlavorCategoryClient from '@/components/FlavorCategoryClient'
import { spearmintFlavorConfig } from '@/config/flavors/spearmint'

// 生成metadata
export async function generateMetadata(): Promise<Metadata> {
  const config = spearmintFlavorConfig
  
  return {
    title: `${config.flavorInfo.title} | Premium Spearmint Collection | Zyn`,
    description: config.flavorInfo.seoDescription,
    keywords: config.flavorInfo.keywords.join(', '),
    openGraph: {
      title: `${config.flavorInfo.title} | Zyn Collection`,
      description: config.flavorInfo.description,
      url: `https://nicotinepoucheszyn.com/${config.slug}`,
      images: [
        {
          url: `/og-flavor-spearmint.jpg`,
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
      images: [`/og-flavor-spearmint.jpg`],
    },
    alternates: {
      canonical: `https://nicotinepoucheszyn.com/${config.slug}`,
    },
    other: {
      'product:category': 'mint',
      'product:flavor': 'spearmint',
      'product:type': 'nicotine-pouches',
    },
  }
}

export default function SpearmintPage() {
  return (
    <FlavorCategoryClient 
      config={spearmintFlavorConfig}
      products={products}
    />
  )
}