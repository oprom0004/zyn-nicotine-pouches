import { Metadata } from 'next'
import BuyClient from './BuyClient'

export const metadata: Metadata = {
  title: 'Buy Tobacco-Free Nicotine Pouches Online For Sale | Zyn Collection',
  description: 'Buy premium tobacco-free nicotine pouches online for sale. Shop Zyn collection in mint, citrus, berry flavors. 3mg, 6mg, 9mg strengths. Fast shipping. Adults 21+.',
  keywords: [
    'buy tobacco-free nicotine pouches online',
    'tobacco-free nicotine pouches for sale',
    'cheap tobacco-free nicotine pouches',
    'cheap nicotine pouches online',
    'buy nicotine pouches online',
    'nicotine pouches for sale',
    'buy zyn nicotine pouches',
    'cheap zyn nicotine pouches',
    'tobacco free pouches online',
    'smokeless nicotine for sale',
    'cheap tobacco free pouches',
    'white nicotine pouches buy',
    'oral nicotine pouches online',
    'premium nicotine pouches sale',
    'cheap mint nicotine pouches',
    'cheap citrus nicotine pouches',
    'cheap berry nicotine pouches',
    '3mg nicotine pouches buy',
    '6mg nicotine pouches online',
    '9mg nicotine pouches sale',
    'nicotine pouches shop online',
    'purchase tobacco-free pouches',
    'order nicotine pouches online',
    'best nicotine pouches online',
    'affordable nicotine pouches',
    'nicotine pouches near me',
    'tobacco free pouches near me',
    'zyn pouches near me',
    'buy nicotine pouches near me',
    'nicotine pouches store near me',
    'where to buy nicotine pouches near me'
  ].join(', '),
  openGraph: {
    title: 'Buy Tobacco-Free Nicotine Pouches Online For Sale | Zyn Collection',
    description: 'Shop premium tobacco-free nicotine pouches online. Multiple flavors and strengths available for sale. Fast shipping.',
    url: 'https://nicotinepoucheszyn.com/buy',
    images: [
      {
        url: '/og-buy-nicotine-pouches.jpg',
        width: 1200,
        height: 630,
        alt: 'Buy Tobacco-Free Nicotine Pouches Online For Sale',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Buy Tobacco-Free Nicotine Pouches Online For Sale | Zyn Collection',
    description: 'Shop premium tobacco-free nicotine pouches online. Multiple flavors and strengths for sale.',
    images: ['/og-buy-nicotine-pouches.jpg'],
  },
  alternates: {
    canonical: 'https://nicotinepoucheszyn.com/buy',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  other: {
    'product:availability': 'in stock',
    'product:condition': 'new',
    'product:age_group': 'adults',
    'product:category': 'tobacco-free nicotine pouches',
  },
}

export default function BuyPage() {
  return <BuyClient />
}