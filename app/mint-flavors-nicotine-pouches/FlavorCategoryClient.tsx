'use client'

import { useState } from 'react'
import { Product } from '@/types'
import ProductCard from '@/components/ProductCard'
import { Star, Shield, Truck, Award, TrendingUp, Users, CheckCircle } from 'lucide-react'
import Link from 'next/link'

interface FlavorInfo {
  title: string
  description: string
  h1: string
  seoDescription: string
  flavorName: string
  benefits: string[]
  keywords: string[]
  lsiKeywords: string[]
}

interface FlavorCategoryClientProps {
  flavor: string
  flavorInfo: FlavorInfo
  products: Product[]
}

export default function FlavorCategoryClient({ flavor, flavorInfo, products }: FlavorCategoryClientProps) {
  const [sortBy, setSortBy] = useState('popular')
  const [selectedStrength, setSelectedStrength] = useState<string | null>(null)
  const [selectedMintType, setSelectedMintType] = useState<string | null>(null)

  // Get available strengths for this flavor
  const availableStrengths = Array.from(new Set(products.map(p => p.strength))).sort()
  
  // Get available mint types
  const mintTypes = [
    { name: 'Cool Mint', value: 'Cool Mint', count: products.filter(p => p.flavor === 'Cool Mint').length },
    { name: 'Spearmint', value: 'Spearmint', count: products.filter(p => p.flavor === 'Spearmint').length },
    { name: 'Menthol', value: 'Menthol', count: products.filter(p => p.flavor === 'Menthol').length }
  ].filter(type => type.count > 0)
  
  // Filter and sort products
  let filteredProducts = products
  
  // Apply mint type filter
  if (selectedMintType) {
    filteredProducts = filteredProducts.filter(p => p.flavor === selectedMintType)
  }
  
  // Apply strength filter
  if (selectedStrength) {
    filteredProducts = filteredProducts.filter(p => p.strength === selectedStrength)
  }

  // Sort products based on selection
  switch (sortBy) {
    case 'price-low':
      filteredProducts.sort((a, b) => a.price - b.price)
      break
    case 'price-high':
      filteredProducts.sort((a, b) => b.price - a.price)
      break
    case 'rating':
      filteredProducts.sort((a, b) => b.rating - a.rating)
      break
    default: // popular
      filteredProducts.sort((a, b) => {
        if (a.featured && !b.featured) return -1
        if (!a.featured && b.featured) return 1
        return b.reviews - a.reviews
      })
  }

  // Calculate stats for social proof
  const totalReviews = products.reduce((sum, p) => sum + p.reviews, 0)
  const avgRating = products.reduce((sum, p) => sum + p.rating, 0) / products.length
  const inStockCount = products.filter(p => p.inStock).length

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with Conversion Elements */}
      <section className="py-16 bg-gradient-to-br from-white to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            {/* Breadcrumb for SEO */}
            <nav className="text-sm text-gray-500 mb-6">
              <Link href="/" className="hover:text-blue-600">Home</Link>
              <span className="mx-2">/</span>
              <Link href="/products" className="hover:text-blue-600">Products</Link>
              <span className="mx-2">/</span>
              <span className="capitalize font-medium">{flavorInfo.title}</span>
            </nav>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {flavorInfo.h1}
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              {flavorInfo.description}
            </p>

            {/* Social Proof Bar */}
            <div className="flex flex-wrap justify-center items-center gap-8 mb-8 p-6 bg-white rounded-2xl shadow-sm">
              <div className="flex items-center text-gray-700">
                <Star className="text-yellow-400 mr-2" size={20} fill="currentColor" />
                <span className="font-bold">{avgRating.toFixed(1)}</span>
                <span className="ml-1">({totalReviews.toLocaleString()} reviews)</span>
              </div>
              <div className="flex items-center text-gray-700">
                <Users className="text-blue-600 mr-2" size={20} />
                <span className="font-bold">{inStockCount}</span>
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

      {/* Flavor Benefits Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Why Choose {flavorInfo.title}?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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

      {/* Mint Sub-Category Navigation */}
      <section className="py-8 bg-gradient-to-r from-green-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">
              Explore Different Mint Flavor Types
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* All Mint Flavors Card */}
              <div 
                onClick={() => setSelectedMintType(null)}
                className={`cursor-pointer p-6 rounded-2xl border-2 transition-all duration-300 hover:scale-105 ${
                  !selectedMintType
                    ? 'border-blue-500 bg-blue-50 shadow-lg'
                    : 'border-gray-200 bg-white hover:border-gray-300 hover:shadow-md'
                }`}
              >
                <div className="text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">All Mint Flavors</h3>
                  <div className="text-sm text-gray-600 mb-4">
                    {products.length} products available
                  </div>
                  <div className="text-sm text-gray-500">
                    Complete mint collection - cool mint, spearmint & menthol varieties
                  </div>
                  <div className={`mt-4 px-4 py-2 rounded-lg text-sm font-medium ${
                    !selectedMintType
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700'
                  }`}>
                    {!selectedMintType ? 'Selected' : 'View All'}
                  </div>
                </div>
              </div>

              {mintTypes.map((mintType) => (
                <div 
                  key={mintType.value}
                  onClick={() => setSelectedMintType(selectedMintType === mintType.value ? null : mintType.value)}
                  className={`cursor-pointer p-6 rounded-2xl border-2 transition-all duration-300 hover:scale-105 ${
                    selectedMintType === mintType.value
                      ? 'border-blue-500 bg-blue-50 shadow-lg'
                      : 'border-gray-200 bg-white hover:border-gray-300 hover:shadow-md'
                  }`}
                >
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{mintType.name}</h3>
                    <div className="text-sm text-gray-600 mb-4">
                      {mintType.count} {mintType.count === 1 ? 'product' : 'products'} available
                    </div>
                    <div className="text-sm text-gray-500 mb-3">
                      {mintType.value === 'Cool Mint' && 'Classic refreshing mint flavor with cooling sensation'}
                      {mintType.value === 'Spearmint' && 'Sweet, fresh spearmint with natural cooling effect'}
                      {mintType.value === 'Menthol' && 'Intense menthol cooling for maximum freshness'}
                    </div>
                    
                    {/* Coming Soon Badge */}
                    <div className="text-xs text-blue-600 font-medium mb-3">
                      {mintType.value === 'Cool Mint' && '🔜 Cool Mint & Ice Mint专页即将上线'}
                      {mintType.value === 'Spearmint' && '🔜 Spearmint专页即将上线'}
                      {mintType.value === 'Menthol' && '🔜 Menthol专页即将上线'}
                    </div>
                    
                    <div className={`mt-4 px-4 py-2 rounded-lg text-sm font-medium ${
                      selectedMintType === mintType.value
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-700'
                    }`}>
                      {selectedMintType === mintType.value ? 'Selected' : 'Click to Filter'}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Clear Filter Button */}
            {selectedMintType && (
              <div className="text-center mt-6">
                <button
                  onClick={() => setSelectedMintType(null)}
                  className="px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
                >
                  Show All Mint Flavors ({products.length} products)
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Products Section with Conversion Optimization */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Filter Controls */}
            <div className="flex flex-wrap justify-between items-center mb-8 p-6 bg-white rounded-2xl shadow-sm">
              <div className="flex flex-wrap items-center gap-4 mb-4 lg:mb-0">
                <span className="font-medium text-gray-700">Filter by Strength:</span>
                <button
                  onClick={() => setSelectedStrength(null)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    !selectedStrength 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  All Strengths
                </button>
                {availableStrengths.map(strength => (
                  <button
                    key={strength}
                    onClick={() => setSelectedStrength(strength)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      selectedStrength === strength
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {strength}
                  </button>
                ))}
              </div>

              <div className="flex items-center gap-4">
                <span className="font-medium text-gray-700">Sort by:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="popular">Most Popular</option>
                  <option value="rating">Highest Rated</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                </select>
              </div>
            </div>

            {/* Urgency/Scarcity Element */}
            <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white p-4 rounded-lg mb-8 text-center">
              <div className="flex items-center justify-center">
                <TrendingUp className="mr-2" size={20} />
                <span className="font-bold">High Demand:</span>
                <span className="ml-2">{filteredProducts.filter(p => p.inStock).length} mint flavor products selling fast this week!</span>
              </div>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
              Showing {filteredProducts.length} of {products.length} premium mint flavor nicotine pouches
            </div>
            
            {/* Debug Info - Remove in production */}
            {process.env.NODE_ENV === 'development' && (
              <div className="text-center mt-4 text-xs text-gray-400">
                Debug: Total products passed: {products.length} | 
                Products: {products.map(p => p.name).join(', ')}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Trust Signals & Guarantees */}
      <section className="py-12 bg-white">
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

      {/* Mint Flavor Education Section */}
      <section className="py-12 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Why Choose Mint Flavor Nicotine Pouches?
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Mint flavor nicotine pouches offer the perfect balance of refreshing taste and nicotine satisfaction. 
              Our mint flavor collection includes cool mint, spearmint, and menthol varieties, each delivering 
              a unique mint flavor experience that lasts for hours.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Whether you prefer the classic cool mint flavor or the intense menthol sensation, our mint flavor 
              nicotine pouches provide consistent quality and authentic taste. Every mint flavor pouch is 
              tobacco-free and designed for adults seeking a premium mint flavor alternative.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section for SEO */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Frequently Asked Questions About Mint Flavor Nicotine Pouches
            </h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  What makes mint flavor nicotine pouches special?
                </h3>
                <p className="text-gray-600">
                  Our mint flavor nicotine pouches offer authentic mint taste with cooling sensation that provides 
                  long-lasting satisfaction. Each mint flavor variety is crafted with premium ingredients and tobacco-free formulation 
                  for the ultimate mint flavor experience.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  What mint flavor varieties are available?
                </h3>
                <p className="text-gray-600">
                  We offer mint flavor nicotine pouches in cool mint, spearmint, and menthol varieties. 
                  Each mint flavor type is available in {availableStrengths.join(', ')} strengths 
                  to suit different preferences and experience levels.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  How long does the mint flavor last?
                </h3>
                <p className="text-gray-600">
                  Our mint flavor nicotine pouches are designed to deliver consistent mint flavor for 30-60 minutes. 
                  The mint flavor intensity remains strong throughout use, providing fresh breath and cooling sensation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}