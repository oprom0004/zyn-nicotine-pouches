import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { CartProvider } from '@/contexts/CartContext'
import { NotificationProvider } from '@/contexts/NotificationContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Zyn - Premium Nicotine Pouches',
  description: 'Discover the cleanest, most convenient way to enjoy nicotine. Tobacco-free, smoke-free, and spit-free.',
  keywords: 'nicotine pouches, Zyn, tobacco-free, smoke-free, spit-free',
  authors: [{ name: 'Zyn' }],
  openGraph: {
    title: 'Zyn - Premium Nicotine Pouches',
    description: 'Discover the cleanest, most convenient way to enjoy nicotine.',
    url: 'https://nicotinepoucheszyn.com',
    siteName: 'Zyn',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Zyn Nicotine Pouches',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zyn - Premium Nicotine Pouches',
    description: 'Discover the cleanest, most convenient way to enjoy nicotine.',
    images: ['/og-image.jpg'],
  },
  viewport: 'width=device-width, initial-scale=1',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#0066cc" />
      </head>
      <body className={inter.className}>
        <NotificationProvider>
          <CartProvider>
            <div className="min-h-screen flex flex-col">
              <Header />
              <main className="flex-1">
                {children}
              </main>
              <Footer />
            </div>
          </CartProvider>
        </NotificationProvider>
        
        {/* Age Verification Modal - Required for nicotine products */}
        <div id="age-verification" className="hidden">
          {/* Age verification will be implemented as a component */}
        </div>
      </body>
    </html>
  )
}