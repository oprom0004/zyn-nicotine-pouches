import { Metadata } from 'next'
import { products } from '@/data/products'
import StrengthCategoryClient from './StrengthCategoryClient'

const strengthInfo = {
  title: '3mg Nicotine Pouches',
  description: 'Mild 3mg nicotine pouches perfect for beginners and light users. Premium tobacco-free 3mg strength pouches in all flavors. Gentle nicotine experience.',
  h1: 'Mild 3mg Nicotine Pouches for Beginners',
  seoDescription: 'Shop mild 3mg nicotine pouches online. Perfect for beginners and light users. Tobacco-free 3mg strength in mint, citrus, berry flavors. Gentle nicotine experience.',
  strengthName: '3mg',
  benefits: [
    'Perfect for beginners',
    'Gentle nicotine delivery',
    'Gradual tolerance building',
    'Comfortable daily use',
    'Smooth transition option',
    'Reduced dependency risk'
  ],
  keywords: [
    '3mg nicotine pouches',
    'mild nicotine pouches',
    'beginner nicotine pouches',
    '3mg tobacco free pouches',
    'light nicotine pouches',
    'gentle nicotine pouches',
    'buy 3mg nicotine pouches',
    '3mg nicotine pouches online',
    'weak nicotine pouches',
    'low strength nicotine pouches',
    '3mg zyn pouches',
    'starter nicotine pouches',
    '3mg nicotine pouches for sale',
    'mild strength tobacco free',
    'beginner friendly nicotine'
  ],
  lsiKeywords: [
    'nicotine tolerance building',
    'gentle nicotine introduction',
    'harm reduction approach',
    'controlled nicotine intake',
    'gradual nicotine experience',
    'beginner-friendly alternatives',
    'mild dependency management',
    'comfortable nicotine delivery'
  ]
}

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `${strengthInfo.title} | Mild Strength Tobacco-Free Pouches | Zyn Collection`,
    description: strengthInfo.seoDescription,
    keywords: strengthInfo.keywords.join(', '),
    openGraph: {
      title: `${strengthInfo.title} | Mild Strength Collection`,
      description: strengthInfo.description,
      url: `https://nicotinepoucheszyn.com/3mg-nicotine-pouches`,
      images: [
        {
          url: `/og-strength-3mg.jpg`,
          width: 1200,
          height: 630,
          alt: `${strengthInfo.title} Collection`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${strengthInfo.title} | Mild Strength`,
      description: strengthInfo.description,
      images: [`/og-strength-3mg.jpg`],
    },
    alternates: {
      canonical: `https://nicotinepoucheszyn.com/3mg-nicotine-pouches`,
    },
    other: {
      'product:strength': '3mg',
      'product:type': 'mild-nicotine-pouches',
      'product:category': 'tobacco-free',
    },
  }
}

export default function ThreeMgNicotinePouchesPage() {
  // 过滤3mg强度产品
  const strengthProducts = products.filter(product => 
    product.strength === '3mg'
  )

  return (
    <StrengthCategoryClient 
      strength="3mg"
      strengthInfo={strengthInfo}
      products={strengthProducts}
    />
  )
}