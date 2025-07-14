'use client'

import { useState } from 'react'
import { Metadata } from 'next'
import { products } from '@/data/products'
import ProductCard from '@/components/ProductCard'
import { Star, Shield, Truck, Award, TrendingUp, Users, CheckCircle } from 'lucide-react'
import Link from 'next/link'

const flavorInfo = {
  title: "Citrus Nicotine Pouches",
  description: "Experience the vibrant citrus flavor nicotine pouches with energizing zesty taste and lasting satisfaction. Premium tobacco-free citrus pouches.",
  h1: "Premium Citrus Flavor Nicotine Pouches",
  seoDescription: "Shop citrus flavor nicotine pouches with vibrant orange taste. Tobacco-free, premium quality citrus pouches in multiple strengths. Free shipping over $25.",
  flavorName: "citrus",
  benefits: [
    "Vibrant Citrus Burst",
    "Natural Fruit Flavor", 
    "Energizing Taste Experience",
    "Long-Lasting Freshness",
    "Premium Quality Ingredients",
    "Various Nicotine Strengths"
  ],
  keywords: [
    "citrus nicotine pouches",
    "orange flavor pouches", 
    "citrus zyn alternatives",
    "tobacco-free citrus",
    "premium citrus pouches",
    "vibrant citrus taste"
  ],
  lsiKeywords: [
    "citrus taste nicotine pouches",
    "orange flavored pouches",
    "zesty citrus experience",
    "vibrant citrus flavor",
    "citrus lovers nicotine",
    "authentic citrus satisfaction"
  ]
}

// Filter products for citrus flavor only
const allCitrusProducts = products.filter(product => 
  product.category === 'citrus' || ['Citrus', 'Lemon'].includes(product.flavor)
)

export const metadata: Metadata = {
  title: `${flavorInfo.title} | Premium Tobacco-Free Collection`,
  description: flavorInfo.seoDescription,
  keywords: flavorInfo.keywords.join(', '),
  openGraph: {
    title: flavorInfo.title,
    description: flavorInfo.seoDescription,
    type: 'website',
    url: 'https://nicotinepoucheszyn.com/citrus-nicotine-pouches',
  },
  alternates: {
    canonical: 'https://nicotinepoucheszyn.com/citrus-nicotine-pouches'
  }
}

export default function CitrusPage() {
  const [selectedStrength, setSelectedStrength] = useState<string | null>(null)

  // Get available strengths for citrus products
  const availableStrengths = Array.from(new Set(allCitrusProducts.map(p => p.strength))).sort()
  
  // Filter products by selected strength
  let filteredProducts = allCitrusProducts
  if (selectedStrength) {
    filteredProducts = filteredProducts.filter(p => p.strength === selectedStrength)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="py-8 bg-gradient-to-br from-white to-orange-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            {/* Breadcrumb with return to citrus-flavors */}
            <nav className="text-sm text-gray-500 mb-4">
              <Link href="/" className="hover:text-blue-600">Home</Link>
              <span className="mx-2">/</span>
              <Link href="/citrus-flavors-nicotine-pouches" className="hover:text-blue-600">Citrus Flavors</Link>
              <span className="mx-2">/</span>
              <span className="capitalize font-medium">{flavorInfo.title}</span>
            </nav>

            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {flavorInfo.h1}
            </h1>
            
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              {flavorInfo.description}
            </p>

            {/* Connection to Citrus Flavors */}
            <div className="mb-6 p-3 bg-orange-100 rounded-lg">
              <p className="text-sm text-orange-800">
                <span className="font-medium">Part of our Citrus Collection:</span> 
                <Link href="/citrus-flavors-nicotine-pouches" className="ml-1 underline hover:text-orange-600">
                  Explore all citrus flavors including Lemon & Orange →
                </Link>
              </p>
            </div>

            {/* Social Proof Bar */}
            <div className="flex flex-wrap justify-center items-center gap-4 mb-6 p-4 bg-white rounded-lg shadow-sm">
              <div className="flex items-center text-gray-700">
                <Star className="text-yellow-400 mr-2" size={20} fill="currentColor" />
                <span className="font-bold">4.8</span>
                <span className="ml-1">(2,847 reviews)</span>
              </div>
              <div className="flex items-center text-gray-700">
                <Users className="text-blue-600 mr-2" size={20} />
                <span className="font-bold">{allCitrusProducts.length}</span>
                <span className="ml-1">products available</span>
              </div>
              <div className="flex items-center text-gray-700">
                <Truck className="text-green-600 mr-2" size={20} />
                <span className="font-medium">FREE shipping $25+</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section with Strength Filter */}
      <section className="py-8" id="products-grid">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Premium Citrus Flavor Collection
            </h2>
            
            {/* Strength Filter */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-center text-gray-800 mb-6">Filter by Strength</h3>
              <div className="flex flex-wrap justify-center gap-4">
                <button
                  onClick={() => setSelectedStrength(null)}
                  className={`px-6 py-2 rounded-full transition-colors ${
                    !selectedStrength 
                      ? 'bg-orange-500 text-white' 
                      : 'bg-white text-orange-500 border-2 border-orange-500 hover:bg-orange-500 hover:text-white'
                  }`}
                >
                  All Strengths
                </button>
                {availableStrengths.map(strength => (
                  <button
                    key={strength}
                    onClick={() => setSelectedStrength(selectedStrength === strength ? null : strength)}
                    className={`px-6 py-2 rounded-full transition-colors ${
                      selectedStrength === strength
                        ? 'bg-orange-500 text-white'
                        : 'bg-white text-orange-500 border-2 border-orange-500 hover:bg-orange-500 hover:text-white'
                    }`}
                  >
                    {strength}
                  </button>
                ))}
              </div>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product, index) => (
                <ProductCard 
                  key={product.id} 
                  product={product} 
                  index={index}
                />
              ))}
            </div>

            {/* Results Count */}
            <div className="text-center mt-8 text-gray-600">
              Showing {filteredProducts.length} of {allCitrusProducts.length} premium citrus flavor nicotine pouches
              {selectedStrength && (
                <span className="ml-2 text-orange-600 font-medium">
                  (filtered by {selectedStrength})
                </span>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Citrus Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Why Choose {flavorInfo.title}?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {flavorInfo.benefits.map((benefit, index) => (
                <div key={index} className="text-center p-6 bg-gray-50 rounded-2xl">
                  <CheckCircle className="text-green-600 mx-auto mb-4" size={32} />
                  <h3 className="font-semibold text-gray-900 mb-2">{benefit}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Our Promise to You
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <Shield className="text-green-600 mx-auto mb-4" size={48} />
                <h3 className="text-xl font-bold text-gray-900 mb-2">30-Day Guarantee</h3>
                <p className="text-gray-600">Not satisfied? Return for full refund within 30 days.</p>
              </div>
              <div className="text-center">
                <Truck className="text-blue-600 mx-auto mb-4" size={48} />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Free Fast Shipping</h3>
                <p className="text-gray-600">Free shipping on orders over $25. Delivered in 2-3 days.</p>
              </div>
              <div className="text-center">
                <Award className="text-purple-600 mx-auto mb-4" size={48} />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Premium Quality</h3>
                <p className="text-gray-600">Tobacco-free, lab-tested, FDA-compliant products.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Citrus Education Section */}
      <section className="py-12 bg-orange-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              About Citrus Flavor Nicotine Pouches
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Citrus flavor nicotine pouches deliver an energizing burst of vibrant orange taste with every use. 
              Our premium citrus pouches combine natural fruit flavors with high-quality nicotine for a 
              refreshing and satisfying experience.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Perfect for those who enjoy bright, zesty flavors, our citrus nicotine pouches provide 
              long-lasting taste and nicotine satisfaction without tobacco. Each pouch is carefully 
              crafted to deliver consistent quality and authentic citrus flavor.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  What makes citrus flavor nicotine pouches special?
                </h3>
                <p className="text-gray-600">
                  Citrus flavor pouches offer a vibrant, energizing taste experience with natural fruit flavors 
                  and premium nicotine delivery, perfect for those seeking a refreshing tobacco-free alternative.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  How long does the citrus flavor last?
                </h3>
                <p className="text-gray-600">
                  Our citrus pouches deliver consistent flavor for 30-60 minutes, with the zesty taste 
                  remaining vibrant throughout the entire experience.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Are citrus nicotine pouches tobacco-free?
                </h3>
                <p className="text-gray-600">
                  Yes, all our citrus flavor nicotine pouches are completely tobacco-free, using premium 
                  synthetic nicotine and natural flavoring for a clean, satisfying experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}