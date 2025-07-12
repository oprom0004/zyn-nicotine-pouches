import HeroSection from '@/components/HeroSection'
import FeaturedProducts from '@/components/FeaturedProducts'
import Categories from '@/components/Categories'
import WhyChooseZyn from '@/components/WhyChooseZyn'
import Newsletter from '@/components/Newsletter'
import SEOContent from '@/components/SEOContent'
import { Suspense } from 'react'
import Loading from '@/components/Loading'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Zyn Nicotine Pouches | Premium Tobacco-Free Nicotine Pouches Online',
  description: 'Shop the best nicotine pouches online. Zyn tobacco-free nicotine pouches offer smokeless, discreet nicotine satisfaction. Buy nicotine pouches with fast shipping. Adults 21+.',
  alternates: {
    canonical: 'https://nicotinepoucheszyn.com',
  },
}

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection />

      {/* Featured Products */}
      <FeaturedProducts />

      {/* Categories */}
      <Categories />

      {/* SEO Content Section */}
      <SEOContent />

      {/* Why Choose Zyn */}
      <WhyChooseZyn />

      {/* Newsletter */}
      <Newsletter />
    </>
  )
}