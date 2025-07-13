import { Metadata } from 'next'
import { products } from '@/data/products'
import FlavorCategoryClient from '@/components/FlavorCategoryClient'
import { lemonFlavorConfig } from '@/config/flavors/lemon'

// 生成metadata
export async function generateMetadata(): Promise<Metadata> {
  const config = lemonFlavorConfig
  
  return {
    title: `${config.flavorInfo.title} | Premium Lemon Collection | Zyn`,
    description: config.flavorInfo.seoDescription,
    keywords: config.flavorInfo.keywords.join(', '),
    openGraph: {
      title: `${config.flavorInfo.title} | Zyn Collection`,
      description: config.flavorInfo.description,
      url: `https://nicotinepoucheszyn.com/${config.slug}`,
      images: [
        {
          url: `/og-flavor-lemon.jpg`,
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
      images: [`/og-flavor-lemon.jpg`],
    },
    alternates: {
      canonical: `https://nicotinepoucheszyn.com/${config.slug}`,
    },
    other: {
      'product:category': 'citrus',
      'product:flavor': 'lemon',
      'product:type': 'nicotine-pouches',
    },
  }
}

export default function LemonPage() {
  return (
    <FlavorCategoryClient 
      config={lemonFlavorConfig}
      products={products}
    />
  )
}