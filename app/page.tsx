import HeroSection from '@/components/HeroSection'
import FeaturedProducts from '@/components/FeaturedProducts'
import Categories from '@/components/Categories'
import WhyChooseZyn from '@/components/WhyChooseZyn'
import Newsletter from '@/components/Newsletter'
import SEOContent from '@/components/SEOContent'
import { Suspense } from 'react'
import Loading from '@/components/Loading'

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