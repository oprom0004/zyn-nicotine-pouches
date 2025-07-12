import { Metadata } from 'next'
import { products } from '@/data/products'
import StrengthCategoryClient from './StrengthCategoryClient'

const strengthInfo = {
  title: '9mg Nicotine Pouches',
  description: 'Strong 9mg nicotine pouches for experienced users. Premium tobacco-free 9mg strength pouches in all flavors. Maximum nicotine satisfaction.',
  h1: 'Strong 9mg Nicotine Pouches for Experienced Users',
  seoDescription: 'Shop strong 9mg nicotine pouches online. Maximum strength for experienced users. Tobacco-free 9mg pouches in mint, citrus, berry flavors. Powerful nicotine delivery.',
  strengthName: '9mg',
  benefits: [
    'Maximum strength available',
    'For experienced users',
    'Powerful nicotine delivery',
    'Long-lasting satisfaction',
    'Ideal for heavy users',
    'Strong tobacco alternative'
  ],
  keywords: [
    '9mg nicotine pouches',
    'strong nicotine pouches',
    'maximum strength pouches',
    '9mg tobacco free pouches',
    'heavy strength nicotine',
    'buy 9mg nicotine pouches',
    '9mg nicotine pouches online',
    'strong nicotine pouches',
    'maximum nicotine strength',
    '9mg zyn pouches',
    'powerful nicotine pouches',
    '9mg nicotine pouches for sale',
    'strong tobacco free pouches',
    'experienced user nicotine'
  ],
  lsiKeywords: [
    'maximum nicotine delivery',
    'heavy user preference',
    'strong nicotine experience',
    'powerful tobacco alternative',
    'experienced user choice',
    'intense nicotine satisfaction',
    'maximum strength delivery',
    'strong dependency management'
  ]
}

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `${strengthInfo.title} | Strong Strength Tobacco-Free Pouches | Zyn Collection`,
    description: strengthInfo.seoDescription,
    keywords: strengthInfo.keywords.join(', '),
    openGraph: {
      title: `${strengthInfo.title} | Strong Strength Collection`,
      description: strengthInfo.description,
      url: `https://nicotinepoucheszyn.com/9mg-nicotine-pouches`,
      images: [
        {
          url: `/og-strength-9mg.jpg`,
          width: 1200,
          height: 630,
          alt: `${strengthInfo.title} Collection`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${strengthInfo.title} | Strong Strength`,
      description: strengthInfo.description,
      images: [`/og-strength-9mg.jpg`],
    },
    alternates: {
      canonical: `https://nicotinepoucheszyn.com/9mg-nicotine-pouches`,
    },
    other: {
      'product:strength': '9mg',
      'product:type': 'strong-nicotine-pouches',
      'product:category': 'tobacco-free',
    },
  }
}

export default function NineMgNicotinePouchesPage() {
  // 过滤9mg强度产品
  const strengthProducts = products.filter(product => 
    product.strength === '9mg'
  )

  return (
    <StrengthCategoryClient 
      strength="9mg"
      strengthInfo={strengthInfo}
      products={strengthProducts}
    />
  )
}