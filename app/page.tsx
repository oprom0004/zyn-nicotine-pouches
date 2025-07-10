import HeroSection from '@/components/HeroSection'
import FeaturedProducts from '@/components/FeaturedProducts'
import Categories from '@/components/Categories'
import WhyChooseZyn from '@/components/WhyChooseZyn'
import Newsletter from '@/components/Newsletter'
import { Suspense } from 'react'
import Loading from '@/components/Loading'

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection />

      {/* Featured Products */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 animate-fade-in-up">
              Featured Products
            </h2>
            <p className="text-xl text-gray-600 animate-fade-in-up stagger-1">
              Discover our most popular Zyn nicotine pouches
            </p>
          </div>
          
          <Suspense fallback={<Loading />}>
            <FeaturedProducts />
          </Suspense>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 animate-fade-in-up">
              Shop by Category
            </h2>
            <p className="text-xl text-gray-600 animate-fade-in-up stagger-1">
              Find your perfect nicotine strength and flavor
            </p>
          </div>
          
          <Categories />
        </div>
      </section>

      {/* Why Choose Zyn */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 animate-fade-in-up">
              Why Choose Zyn?
            </h2>
          </div>
          
          <WhyChooseZyn />
        </div>
      </section>

      {/* Newsletter */}
      <Newsletter />
    </>
  )
}