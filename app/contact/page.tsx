import { Metadata } from 'next'
import ContactClient from './ContactClient'

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Contact Zyn Support | Nicotine Pouches Customer Service & Help',
    description: 'Get expert help with Zyn nicotine pouches. Contact our customer support team via phone, email, or live chat for product questions, orders, and assistance.',
    keywords: [
      'contact zyn',
      'nicotine pouches support',
      'zyn customer service',
      'nicotine pouches help',
      'contact nicotine pouches',
      'zyn support phone',
      'nicotine pouches customer service',
      'zyn help center',
      'tobacco free support',
      'nicotine pouches contact'
    ].join(', '),
    openGraph: {
      title: 'Contact Zyn Support | Nicotine Pouches Customer Service',
      description: 'Get expert help with Zyn nicotine pouches. Multiple ways to contact our support team.',
      url: 'https://nicotinepoucheszyn.com/contact',
      images: [
        {
          url: '/og-contact.jpg',
          width: 1200,
          height: 630,
          alt: 'Contact Zyn Nicotine Pouches Support',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Contact Zyn Support | Nicotine Pouches Help',
      description: 'Get expert help with Zyn nicotine pouches. Multiple ways to contact our support team.',
      images: ['/og-contact.jpg'],
    },
    alternates: {
      canonical: 'https://nicotinepoucheszyn.com/contact',
    },
    robots: {
      index: true,
      follow: true,
    },
  }
}

export default function ContactPage() {
  return <ContactClient />
}