import { Metadata } from 'next'
import { products } from '@/data/products'
import StrengthCategoryClient from './StrengthCategoryClient'

const strengthInfo = {
  title: '6mg Nicotine Pouches',
  description: 'Medium strength 6mg nicotine pouches for balanced daily use. Premium tobacco-free 6mg pouches in all flavors. Perfect nicotine balance for most users.',
  h1: 'Medium Strength 6mg Nicotine Pouches',
  seoDescription: 'Shop medium strength 6mg nicotine pouches online. Perfect balance for daily use. Tobacco-free 6mg strength in mint, citrus, berry flavors. Most popular choice.',
  strengthName: '6mg',
  benefits: [
    'Perfect balance strength',
    'Ideal for daily use',
    'Most popular choice',
    'Satisfying nicotine delivery',
    'Comfortable all-day use',
    'Great for regular users'
  ],
  keywords: [
    '6mg nicotine pouches',
    'medium strength nicotine pouches',
    '6mg tobacco free pouches',
    'balanced nicotine pouches',
    'regular strength pouches',
    'buy 6mg nicotine pouches',
    '6mg nicotine pouches online',
    'medium nicotine pouches',
    'standard strength nicotine',
    '6mg zyn pouches',
    'daily use nicotine pouches',
    '6mg nicotine pouches for sale',
    'moderate strength tobacco free',
    'balanced nicotine delivery'
  ],
  lsiKeywords: [
    'optimal nicotine balance',
    'daily nicotine routine',
    'moderate nicotine intake',
    'regular user preference',
    'balanced nicotine experience',
    'standard strength delivery',
    'comfortable nicotine level',
    'mainstream nicotine choice'
  ]
}

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `${strengthInfo.title} | Medium Strength Tobacco-Free Pouches | Zyn Collection`,
    description: strengthInfo.seoDescription,
    keywords: strengthInfo.keywords.join(', '),
    openGraph: {
      title: `${strengthInfo.title} | Medium Strength Collection`,
      description: strengthInfo.description,
      url: `https://nicotinepoucheszyn.com/6mg-nicotine-pouches`,
      images: [
        {
          url: `/og-strength-6mg.jpg`,
          width: 1200,
          height: 630,
          alt: `${strengthInfo.title} Collection`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${strengthInfo.title} | Medium Strength`,
      description: strengthInfo.description,
      images: [`/og-strength-6mg.jpg`],
    },
    alternates: {
      canonical: `https://nicotinepoucheszyn.com/6mg-nicotine-pouches`,
    },
    other: {
      'product:strength': '6mg',
      'product:type': 'medium-nicotine-pouches',
      'product:category': 'tobacco-free',
    },
  }
}

export default function SixMgNicotinePouchesPage() {
  // 过滤6mg强度产品
  const strengthProducts = products.filter(product => 
    product.strength === '6mg'
  )

  return (
    <StrengthCategoryClient 
      strength="6mg"
      strengthInfo={strengthInfo}
      products={strengthProducts}
    />
  )
}