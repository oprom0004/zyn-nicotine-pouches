import { Metadata } from 'next'
import { products } from '@/data/products'
import FlavorCategoryClient from '@/components/FlavorCategoryClient'
import { berryFlavorConfig } from '@/config/flavors/berry'

// 生成metadata
export async function generateMetadata(): Promise<Metadata> {
  const config = berryFlavorConfig
  
  return {
    title: `${config.flavorInfo.title} | Premium Tobacco-Free Collection | Zyn`,
    description: config.flavorInfo.seoDescription,
    keywords: config.flavorInfo.keywords.join(', '),
    openGraph: {
      title: `${config.flavorInfo.title} | Zyn Collection`,
      description: config.flavorInfo.description,
      url: `https://nicotinepoucheszyn.com/${config.slug}`,
      images: [
        {
          url: `/og-flavor-berry.jpg`,
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
      images: [`/og-flavor-berry.jpg`],
    },
    alternates: {
      canonical: `https://nicotinepoucheszyn.com/${config.slug}`,
    },
    other: {
      'product:category': config.flavorInfo.flavorName,
      'product:type': 'nicotine-pouches',
    },
  }
}

export default function BerryFlavorsPage() {
  return (
    <FlavorCategoryClient 
      config={berryFlavorConfig}
      products={products}
    />
  )
}