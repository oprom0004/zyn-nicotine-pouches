import { Metadata } from 'next'
import SearchClient from './SearchClient'

export const metadata: Metadata = {
  title: 'Search Nicotine Pouches | Find Your Perfect Zyn Flavor & Strength',
  description: 'Search our extensive collection of nicotine pouches by flavor, strength, and brand. Find the perfect tobacco-free pouches for your needs. Fast search results and filtering.',
  keywords: [
    'search nicotine pouches',
    'find nicotine pouches',
    'nicotine pouch search',
    'filter nicotine pouches',
    'nicotine pouch finder',
    'zyn search',
    'nicotine pouch flavors',
    'nicotine pouch strengths',
    'tobacco free search'
  ].join(', '),
  openGraph: {
    title: 'Search Nicotine Pouches | Find Your Perfect Match',
    description: 'Search our extensive collection of nicotine pouches by flavor, strength, and brand.',
    url: 'https://nicotinepoucheszyn.com/search',
    images: [
      {
        url: '/og-search.jpg',
        width: 1200,
        height: 630,
        alt: 'Search Nicotine Pouches',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Search Nicotine Pouches | Find Your Perfect Match',
    description: 'Search our extensive collection of nicotine pouches.',
    images: ['/og-search.jpg'],
  },
  alternates: {
    canonical: 'https://nicotinepoucheszyn.com/search',
  },
  robots: {
    index: true,
    follow: true,
    noarchive: true, // Search results shouldn't be archived
  },
}

export default function SearchPage() {
  return <SearchClient />
}