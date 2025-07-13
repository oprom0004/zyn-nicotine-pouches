import { Metadata } from 'next'
import { products } from '@/data/products'
import FlavorCategoryClient from '@/components/FlavorCategoryClient'
import { coffeeClassicFlavorConfig } from '@/config/flavors/coffee-classic'

// 生成metadata
export async function generateMetadata(): Promise<Metadata> {
  const config = coffeeClassicFlavorConfig
  
  return {
    title: `${config.flavorInfo.title} | Premium Coffee Collection | Zyn`,
    description: config.flavorInfo.seoDescription,
    keywords: config.flavorInfo.keywords.join(', '),
    openGraph: {
      title: `${config.flavorInfo.title} | Zyn Collection`,
      description: config.flavorInfo.description,
      url: `https://nicotinepoucheszyn.com/${config.slug}`,
      images: [
        {
          url: `/og-flavor-coffee-classic.jpg`,
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
      images: [`/og-flavor-coffee-classic.jpg`],
    },
    alternates: {
      canonical: `https://nicotinepoucheszyn.com/${config.slug}`,
    },
    other: {
      'product:category': 'coffee',
      'product:flavor': 'coffee-classic',
      'product:type': 'nicotine-pouches',
    },
  }
}

export default function CoffeeClassicPage() {
  return (
    <FlavorCategoryClient 
      config={coffeeClassicFlavorConfig}
      products={products}
    />
  )
}