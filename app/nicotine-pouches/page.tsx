import { Metadata } from 'next'
import NicotinePouchesClient from './NicotinePouchesClient'

export const metadata: Metadata = {
  title: 'Buy Nicotine Pouches Online For Sale | Premium Tobacco-Free Pouches',
  description: 'Buy premium nicotine pouches online for sale. Shop tobacco-free Zyn nicotine pouches in mint, citrus, berry flavors. 3mg, 6mg, 9mg strengths. Fast shipping. Adults 21+.',
  keywords: [
    'buy nicotine pouches online',
    'nicotine pouches for sale',
    'nicotine pouches online',
    'buy zyn nicotine pouches',
    'tobacco free pouches for sale',
    'smokeless nicotine for sale',
    'mint nicotine pouches online',
    'citrus nicotine pouches for sale',
    'berry nicotine pouches buy',
    '3mg nicotine pouches for sale',
    '6mg nicotine pouches online',
    '9mg nicotine pouches buy',
    'premium nicotine pouches for sale',
    'white nicotine pouches online',
    'oral nicotine pouches buy',
    'nicotine pouches shop online',
    'purchase nicotine pouches',
    'order nicotine pouches online'
  ].join(', '),
  openGraph: {
    title: 'Buy Nicotine Pouches Online For Sale | Premium Collection',
    description: 'Shop premium nicotine pouches online. Multiple flavors and strengths available for sale. Fast shipping.',
    url: 'https://nicotinepoucheszyn.com/nicotine-pouches',
    images: [
      {
        url: '/og-nicotine-pouches.jpg',
        width: 1200,
        height: 630,
        alt: 'Buy Nicotine Pouches Online For Sale',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Buy Nicotine Pouches Online For Sale | Zyn Collection',
    description: 'Shop premium nicotine pouches online. Multiple flavors and strengths for sale.',
    images: ['/og-nicotine-pouches.jpg'],
  },
  alternates: {
    canonical: 'https://nicotinepoucheszyn.com/nicotine-pouches',
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
  },
}

export default function NicotinePouchesPage() {
  return <NicotinePouchesClient />
}