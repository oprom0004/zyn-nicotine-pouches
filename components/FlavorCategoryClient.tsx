'use client'

import { useState, useEffect } from 'react'
import { Product } from '@/types'
import { FlavorPageConfig, SubCategoryItem } from '@/types/flavor-config'
import ProductCard from '@/components/ProductCard'
import { Star, Shield, Truck, Award, TrendingUp, Users, CheckCircle } from 'lucide-react'
import Link from 'next/link'
import { applyFilterLogic } from '@/utils/filter-logic'

interface FlavorCategoryClientProps {
  config: FlavorPageConfig
  products: Product[]
}

export default function FlavorCategoryClient({ config, products }: FlavorCategoryClientProps) {
  const [sortBy, setSortBy] = useState('popular')
  const [selectedStrength, setSelectedStrength] = useState<string | null>(null)
  const [selectedSubCategory, setSelectedSubCategory] = useState<string | null>(null)
  const [showStickyFilter, setShowStickyFilter] = useState(false)

  // 使用配置中的筛选逻辑
  const filteredConfigProducts = applyFilterLogic(products, config.filterConfig)

  // Scroll to products grid when filter is selected (mobile only)
  const scrollToProducts = () => {
    if (window.innerWidth < 768) {
      const productsGrid = document.getElementById('products-grid')
      if (productsGrid) {
        productsGrid.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'start' 
        })
      }
    }
  }

  // Get available strengths for this flavor
  const availableStrengths = Array.from(new Set(filteredConfigProducts.map(p => p.strength))).sort()
  
  // Get sub-categories based on config
  const getSubCategories = (): SubCategoryItem[] => {
    const filterBy = config.subCategories.filterBy || 'flavor'
    
    if (config.subCategories.type === 'hardcoded' && config.subCategories.items) {
      // 为硬编码项目计算产品数量
      return config.subCategories.items.map(item => ({
        ...item,
        count: filteredConfigProducts.filter(p => {
          switch (filterBy) {
            case 'flavor':
              return p.flavor === item.value
            case 'strength':
              return p.strength === item.value
            case 'category':
              return p.category === item.value
            default:
              return p.flavor === item.value
          }
        }).length
      })).filter(item => item.count > 0)
    } else if (config.subCategories.type === 'dynamic') {
      // 动态获取子分类
      const source = config.subCategories.dynamicSource || filterBy
      const uniqueValues = Array.from(new Set(
        filteredConfigProducts.map(p => {
          switch (source) {
            case 'flavor':
              return p.flavor
            case 'strength':
              return p.strength
            case 'category':
              return p.category
            default:
              return p.flavor
          }
        })
      )).sort()
      
      return uniqueValues.map(value => ({
        name: value,
        value: value,
        emoji: config.subCategories.emojiMapping?.[value] || '🌟',
        count: filteredConfigProducts.filter(p => {
          switch (source) {
            case 'flavor':
              return p.flavor === value
            case 'strength':
              return p.strength === value
            case 'category':
              return p.category === value
            default:
              return p.flavor === value
          }
        }).length
      }))
    }
    return []
  }

  const subCategories = getSubCategories()
  
  // 决定是否显示子分类区块 - 只有按口味筛选且有多个口味时才显示
  const shouldShowSubCategories = config.subCategories.filterBy === 'flavor' && subCategories.length > 1
  
  // Handle scroll for sticky mobile filter
  useEffect(() => {
    const handleScroll = () => {
      setShowStickyFilter(window.scrollY > 400)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  
  // Filter and sort products
  let filteredProducts = filteredConfigProducts
  
  // Apply sub-category filter
  if (selectedSubCategory) {
    const filterBy = config.subCategories.filterBy || 'flavor'
    filteredProducts = filteredProducts.filter(p => {
      switch (filterBy) {
        case 'flavor':
          return p.flavor === selectedSubCategory
        case 'strength':
          return p.strength === selectedSubCategory
        case 'category':
          return p.category === selectedSubCategory
        default:
          return p.flavor === selectedSubCategory
      }
    })
  }
  
  // Apply strength filter (only if sub-category is not filtering by strength)
  if (selectedStrength && config.subCategories.filterBy !== 'strength') {
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
  const totalReviews = filteredConfigProducts.reduce((sum, p) => sum + p.reviews, 0)
  const avgRating = filteredConfigProducts.reduce((sum, p) => sum + p.rating, 0) / filteredConfigProducts.length
  const inStockCount = filteredConfigProducts.filter(p => p.inStock).length

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with Conversion Elements - Compressed */}
      <section className={`py-4 bg-gradient-to-br from-white to-${config.theme.gradient.to}`}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            {/* Breadcrumb for SEO */}
            <nav className="text-sm text-gray-500 mb-3">
              <Link href="/" className="hover:text-blue-600">Home</Link>
              <span className="mx-2">/</span>
              <Link href="/buy" className="hover:text-blue-600">Buy Nicotine Pouches</Link>
              <span className="mx-2">/</span>
              <span className="capitalize font-medium">{config.flavorInfo.title}</span>
            </nav>

            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              {config.flavorInfo.h1}
            </h1>
            
            <p className="text-lg text-gray-600 mb-4 leading-relaxed">
              {config.flavorInfo.description}
            </p>

            {/* Social Proof Bar - Compressed */}
            <div className="flex flex-wrap justify-center items-center gap-4 mb-3 p-3 bg-white rounded-lg shadow-sm">
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

      {/* Sub-Category Navigation - 只在有多个子分类时显示 */}
      {shouldShowSubCategories && (
        <section className={`py-1 bg-gradient-to-r from-${config.theme.gradient.from} to-${config.theme.gradient.to}`}>
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {/* All Categories Card */}
              <div 
                onClick={() => setSelectedSubCategory(null)}
                className={`cursor-pointer p-3 rounded-lg border-2 transition-all duration-300 hover:scale-105 ${
                  !selectedSubCategory
                    ? `border-${config.theme.primary} bg-${config.theme.gradient.from} shadow-lg`
                    : 'border-gray-200 bg-white hover:border-gray-300 hover:shadow-md'
                }`}
              >
                <div className="text-center">
                  <div className={`w-12 h-12 mx-auto mb-2 bg-gradient-to-br from-${config.theme.primary.replace('-500', '-400')} to-${config.theme.secondary} rounded-full flex items-center justify-center`}>
                    <span className="text-white text-lg">{subCategories[0]?.emoji || '🌟'}</span>
                  </div>
                  <h3 className="font-semibold text-sm text-gray-900 mb-1">All {config.subCategories.title.replace('Choose ', '')}</h3>
                  <div className="text-xs text-gray-600">
                    {filteredConfigProducts.length} products
                  </div>
                </div>
              </div>

              {subCategories.map((subCategory) => (
                <div 
                  key={subCategory.value}
                  onClick={() => setSelectedSubCategory(selectedSubCategory === subCategory.value ? null : subCategory.value)}
                  className={`cursor-pointer p-3 rounded-lg border-2 transition-all duration-300 hover:scale-105 ${
                    selectedSubCategory === subCategory.value
                      ? `border-${config.theme.primary} bg-${config.theme.gradient.from} shadow-lg`
                      : 'border-gray-200 bg-white hover:border-gray-300 hover:shadow-md'
                  }`}
                >
                  <div className="text-center">
                    <div className="w-12 h-12 mx-auto mb-2 rounded-full flex items-center justify-center overflow-hidden">
                      <div className={`w-full h-full bg-gradient-to-br from-${config.theme.primary.replace('-500', '-400')} to-${config.theme.secondary} flex items-center justify-center`}>
                        <span className="text-white text-lg">{subCategory.emoji}</span>
                      </div>
                    </div>
                    <h3 className="font-semibold text-sm text-gray-900 mb-1">{subCategory.name}</h3>
                    {subCategory.description && (
                      <div className="text-xs text-gray-500 mb-1">
                        {subCategory.description}
                      </div>
                    )}
                    <div className="text-xs text-gray-600">
                      {subCategory.count} products
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        </section>
      )}

      {/* Mobile Bottom Sticky Filter Bar */}
      {showStickyFilter && (
        <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white p-3 border-t shadow-lg animate-in slide-in-from-bottom duration-300">
          <div className="max-h-32 overflow-y-auto">
            {/* Sub-Category Pills - 只在有多个子分类时显示 */}
            {shouldShowSubCategories && (
              <div className="flex flex-wrap gap-2 mb-2">
              <button
                onClick={() => {
                  setSelectedSubCategory(null)
                  scrollToProducts()
                }}
                className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                  !selectedSubCategory ? `bg-${config.theme.primary} text-white` : 'bg-white text-gray-700 border hover:bg-gray-50'
                }`}
              >
                All {config.subCategories.title.replace('Choose ', '')}
              </button>
              {subCategories.map((subCategory) => (
                <button
                  key={subCategory.value}
                  onClick={() => {
                    setSelectedSubCategory(selectedSubCategory === subCategory.value ? null : subCategory.value)
                    scrollToProducts()
                  }}
                  className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                    selectedSubCategory === subCategory.value 
                      ? `bg-${config.theme.primary} text-white` 
                      : 'bg-white text-gray-700 border hover:bg-gray-50'
                  }`}
                >
                  {subCategory.name}
                </button>
              ))}
              </div>
            )}
            
            {/* Strength Pills - 没有子分类时总是显示，有子分类时只在不按强度筛选时显示 */}
            {(!shouldShowSubCategories || config.subCategories.filterBy !== 'strength') && (
              <div className="flex flex-wrap gap-2">
              <button
                onClick={() => {
                  setSelectedStrength(null)
                  scrollToProducts()
                }}
                className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                  !selectedStrength ? `bg-${config.theme.accent} text-white` : 'bg-white text-gray-700 border hover:bg-gray-50'
                }`}
              >
                All Strengths
              </button>
              {availableStrengths.map(strength => (
                <button
                  key={strength}
                  onClick={() => {
                    setSelectedStrength(strength)
                    scrollToProducts()
                  }}
                  className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                    selectedStrength === strength 
                      ? `bg-${config.theme.accent} text-white` 
                      : 'bg-white text-gray-700 border hover:bg-gray-50'
                  }`}
                >
                  {strength}
                </button>
              ))}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Products Section with Conversion Optimization - Moved Up */}
      <section className="py-6">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Filter Controls */}
            <div className="flex flex-wrap justify-between items-center mb-6 p-4 bg-white rounded-xl shadow-sm">
              {(!shouldShowSubCategories || config.subCategories.filterBy !== 'strength') && (
                <div className="flex flex-wrap items-center gap-3 mb-3 lg:mb-0">
                  <span className="font-medium text-gray-700">Filter by Strength:</span>
                <button
                  onClick={() => {
                    setSelectedStrength(null)
                    scrollToProducts()
                  }}
                  className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                    !selectedStrength 
                      ? `bg-${config.theme.primary} text-white` 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  All Strengths
                </button>
                {availableStrengths.map(strength => (
                  <button
                    key={strength}
                    onClick={() => {
                      setSelectedStrength(strength)
                      scrollToProducts()
                    }}
                    className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                      selectedStrength === strength
                        ? `bg-${config.theme.primary} text-white`
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {strength}
                  </button>
                ))}
                </div>
              )}

              <div className="flex items-center gap-4">
                <span className="font-medium text-gray-700">Sort by:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className={`px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-${config.theme.primary} focus:border-${config.theme.primary}`}
                >
                  <option value="popular">Most Popular</option>
                  <option value="rating">Highest Rated</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                </select>
              </div>
            </div>

            {/* Urgency/Scarcity Element - Compact */}
            <div className={`bg-gradient-to-r from-${config.theme.urgencyGradient.from} to-${config.theme.urgencyGradient.to} text-white p-2 rounded-lg mb-4 text-center`}>
              <div className="flex items-center justify-center text-sm">
                <TrendingUp className="mr-1" size={16} />
                <span className="font-bold">{config.urgencyText.prefix}</span>
                <span className="ml-1">{filteredProducts.filter(p => p.inStock).length} {config.urgencyText.suffix}</span>
              </div>
            </div>

            {/* Products Grid */}
            <div id="products-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
              Showing {filteredProducts.length} of {filteredConfigProducts.length} premium {config.flavorInfo.flavorName} flavor nicotine pouches
            </div>
          </div>
        </div>
      </section>

      {/* Flavor Benefits Section - Moved After Products */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Why Choose {config.flavorInfo.title}?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {config.flavorInfo.benefits.map((benefit, index) => {
                const icons = [CheckCircle, Shield, Award, TrendingUp, Users, Star]
                const IconComponent = icons[index % icons.length]
                return (
                  <div key={index} className="text-center p-6 bg-gray-50 rounded-2xl">
                    <IconComponent className={`text-${config.theme.primary} mx-auto mb-4`} size={32} />
                    <h3 className="font-semibold text-gray-900 mb-2">{benefit}</h3>
                  </div>
                )
              })}
            </div>
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

      {/* Education Section - Optional */}
      {config.educationSection && (
        <section className={`py-12 bg-${config.theme.gradient.from}`}>
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                {config.educationSection.title}
              </h2>
              {config.educationSection.content.map((paragraph, index) => (
                <p key={index} className={`text-lg text-gray-700 mb-6 leading-relaxed ${index === config.educationSection!.content.length - 1 ? 'mb-0' : ''}`}>
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ Section for SEO */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Frequently Asked Questions About {config.flavorInfo.title}
            </h2>
            <div className="space-y-6">
              {config.faqs.map((faq, index) => (
                <div key={index} className="bg-white p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {faq.question}
                  </h3>
                  <p className="text-gray-600">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}