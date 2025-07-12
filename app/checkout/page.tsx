import { Metadata } from 'next'
import CheckoutClient from './CheckoutClient'

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Secure Checkout | Buy Zyn Nicotine Pouches Online',
    description: 'Complete your nicotine pouches order securely. Age verification required. Fast shipping, secure payment, and premium tobacco-free products.',
    keywords: [
      'checkout nicotine pouches',
      'buy zyn online',
      'secure nicotine pouches checkout',
      'order nicotine pouches',
      'zyn checkout',
      'nicotine pouches payment',
      'tobacco free checkout',
      'secure payment nicotine pouches'
    ].join(', '),
    robots: {
      index: false, // Checkout pages shouldn't be indexed
      follow: false,
    },
    openGraph: {
      title: 'Secure Checkout | Zyn Nicotine Pouches',
      description: 'Complete your nicotine pouches order securely with age verification.',
      url: 'https://nicotinepoucheszyn.com/checkout',
    },
    alternates: {
      canonical: 'https://nicotinepoucheszyn.com/checkout',
    },
  }
}

export default function CheckoutPage() {
  return <CheckoutClient />
}