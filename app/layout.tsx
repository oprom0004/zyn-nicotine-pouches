import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Breadcrumbs from '@/components/Breadcrumbs'
import SchemaMarkup from '@/components/SchemaMarkup'
import { CartProvider } from '@/contexts/CartContext'
import { NotificationProvider } from '@/contexts/NotificationContext'

// 优化字体加载：只加载必要的权重，使用font-display优化
const inter = Inter({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
  preload: true,
  fallback: ['system-ui', '-apple-system', 'sans-serif']
})

const playfair = Playfair_Display({
  subsets: ['latin'], 
  weight: ['400', '600', '700'],
  variable: '--font-playfair',
  display: 'swap',
  preload: false, // 装饰性字体延迟加载
  fallback: ['serif']
})

export const metadata: Metadata = {
  metadataBase: new URL('https://nicotinepoucheszyn.com'),
  title: {
    default: 'Zyn Nicotine Pouches | Premium Tobacco-Free Nicotine Pouches Online',
    template: '%s | Zyn Nicotine Pouches'
  },
  description: 'Shop the best nicotine pouches online. Zyn tobacco-free nicotine pouches offer smokeless, discreet nicotine satisfaction. Buy nicotine pouches with fast shipping. Adults 21+.',
  keywords: [
    'nicotine pouches',
    'zyn nicotine pouches', 
    'tobacco-free nicotine pouches',
    'smokeless nicotine pouches',
    'buy nicotine pouches online',
    'best nicotine pouches',
    'white nicotine pouches',
    'oral nicotine pouches',
    'nicotine pouches for sale',
    'strong nicotine pouches',
    'mild nicotine pouches',
    'mint nicotine pouches',
    'citrus nicotine pouches',
    'wintergreen nicotine pouches',
    'berry nicotine pouches',
    '3mg nicotine pouches',
    '6mg nicotine pouches',
    '9mg nicotine pouches',
    '12mg nicotine pouches',
    'premium nicotine pouches',
    'age verified nicotine pouches',
    'discrete nicotine delivery',
    'smokeless tobacco alternative'
  ],
  authors: [{ name: 'Zyn Nicotine Pouches', url: 'https://nicotinepoucheszyn.com' }],
  creator: 'Zyn International',
  publisher: 'Zyn Nicotine Pouches',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://nicotinepoucheszyn.com',
    siteName: 'Zyn Nicotine Pouches',
    title: 'Zyn - Premium Tobacco-Free Nicotine Pouches Online',
    description: 'Discover the cleanest, most convenient way to enjoy nicotine. Shop premium tobacco-free pouches with multiple flavors and strengths. Age verification required.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Zyn Premium Nicotine Pouches Collection',
        type: 'image/jpeg',
      },
      {
        url: '/og-logo.png',
        width: 400,
        height: 400,
        alt: 'Zyn Nicotine Pouches Logo',
        type: 'image/png',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@zynpouches',
    creator: '@zynpouches',
    title: 'Zyn - Premium Tobacco-Free Nicotine Pouches',
    description: 'Discover the cleanest, most convenient way to enjoy nicotine. Premium tobacco-free pouches for adults 21+.',
    images: {
      url: '/og-image.jpg',
      alt: 'Zyn Nicotine Pouches',
    },
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/icon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/icon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/safari-pinned-tab.svg',
        color: '#0066cc',
      },
    ],
  },
  manifest: '/site.webmanifest',
  // canonical URL should be set per page, not globally
  // alternates: {
  //   canonical: 'https://nicotinepoucheszyn.com',
  // },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
    other: {
      'msvalidate.01': 'your-bing-verification-code',
    },
  },
  category: 'Tobacco-Free Nicotine Products',
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
        <script src="/fayu.js"></script>
        <SchemaMarkup />
      </head>
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        <NotificationProvider>
          <CartProvider>
            <div className="min-h-screen flex flex-col">
              <Header />
              <Breadcrumbs />
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