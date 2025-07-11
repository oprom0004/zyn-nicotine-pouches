import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Shop All Nicotine Pouches | Zyn Tobacco-Free Pouches Collection',
  description: 'Browse our complete collection of premium nicotine pouches. Shop Zyn tobacco-free pouches in mint, citrus, berry flavors. 3mg, 6mg, 9mg, 12mg strengths available. Free shipping over $25.',
  keywords: [
    'nicotine pouches online',
    'buy nicotine pouches',
    'zyn nicotine pouches',
    'tobacco free pouches',
    'smokeless nicotine',
    'mint nicotine pouches',
    'citrus nicotine pouches',
    'berry nicotine pouches',
    '3mg nicotine pouches',
    '6mg nicotine pouches',
    '9mg nicotine pouches',
    '12mg nicotine pouches',
    'premium nicotine pouches',
    'white nicotine pouches',
    'oral nicotine pouches'
  ].join(', '),
  openGraph: {
    title: 'Shop All Nicotine Pouches | Zyn Collection',
    description: 'Browse our complete collection of premium nicotine pouches. Multiple flavors and strengths available.',
    url: 'https://nicotinepoucheszyn.com/products',
    images: [
      {
        url: '/og-products.jpg',
        width: 1200,
        height: 630,
        alt: 'Zyn Nicotine Pouches Collection',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shop All Nicotine Pouches | Zyn Collection',
    description: 'Browse our complete collection of premium nicotine pouches.',
    images: ['/og-products.jpg'],
  },
  alternates: {
    canonical: 'https://nicotinepoucheszyn.com/products',
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
}