'use client'

import { useState, useEffect } from 'react'
import { Product } from '@/types'
import { FlavorPageConfig, SubCategoryItem } from '@/types/flavor-config'
import ProductCard from '@/components/ProductCard'
import { Star, Shield, Truck, Award, TrendingUp, Users, CheckCircle } from 'lucide-react'
import Link from 'next/link'
import { applyFilterLogic } from '@/utils/filter-logic'
import { trackFilterUsage } from '@/utils/plausible'

// 获取按钮激活状态的CSS类
function getButtonActiveClasses(color: string): string {
  const colorMap: Record<string, string> = {
    'purple-500': 'bg-purple-500 text-white',
    'blue-500': 'bg-blue-500 text-white',
    'green-500': 'bg-green-500 text-white',
    'orange-500': 'bg-orange-500 text-white',
    'red-500': 'bg-red-500 text-white',
    'red-600': 'bg-red-600 text-white',
    'emerald-500': 'bg-emerald-500 text-white',
    'amber-500': 'bg-amber-500 text-white',
    'pink-500': 'bg-pink-500 text-white',
  }
  return colorMap[color] || 'bg-blue-500 text-white'
}

// 获取子分类卡片激活状态的CSS类
function getSubCategoryActiveClasses(primary: string, gradientFrom: string): string {
  const colorMap: Record<string, string> = {
    'purple-500': 'border-purple-500 bg-purple-50 shadow-lg',
    'blue-500': 'border-blue-500 bg-blue-50 shadow-lg',
    'green-500': 'border-green-500 bg-green-50 shadow-lg',
    'orange-500': 'border-orange-500 bg-orange-50 shadow-lg',
    'red-500': 'border-red-500 bg-red-50 shadow-lg',
    'emerald-500': 'border-emerald-500 bg-emerald-50 shadow-lg',
    'amber-500': 'border-amber-500 bg-amber-50 shadow-lg',
    'pink-500': 'border-pink-500 bg-pink-50 shadow-lg',
  }
  return colorMap[primary] || 'border-blue-500 bg-blue-50 shadow-lg'
}

// 获取背景渐变类
function getGradientClasses(gradientFrom: string): string {
  const colorMap: Record<string, string> = {
    'purple-50': 'bg-purple-50',
    'blue-50': 'bg-blue-50',
    'green-50': 'bg-green-50',
    'orange-50': 'bg-orange-50',
    'red-50': 'bg-red-50',
    'emerald-50': 'bg-emerald-50',
    'amber-50': 'bg-amber-50',
    'pink-50': 'bg-pink-50',
  }
  return colorMap[gradientFrom] || 'bg-blue-50'
}

// 获取双色渐变类
function getDoubleGradientClasses(from: string, to: string): string {
  const key = `${from}-${to}`
  const gradientMap: Record<string, string> = {
    'purple-50-pink-50': 'bg-gradient-to-r from-purple-50 to-pink-50',
    'blue-50-cyan-50': 'bg-gradient-to-r from-blue-50 to-cyan-50',
    'green-50-emerald-50': 'bg-gradient-to-r from-green-50 to-emerald-50',
    'orange-50-yellow-50': 'bg-gradient-to-r from-orange-50 to-yellow-50',
    'red-50-pink-50': 'bg-gradient-to-r from-red-50 to-pink-50',
    'emerald-50-blue-50': 'bg-gradient-to-r from-emerald-50 to-blue-50',
    'amber-50-orange-50': 'bg-gradient-to-r from-amber-50 to-orange-50',
    'pink-50-purple-50': 'bg-gradient-to-r from-pink-50 to-purple-50',
  }
  return gradientMap[key] || 'bg-gradient-to-r from-blue-50 to-cyan-50'
}

// 获取按钮渐变类
function getButtonGradientClasses(from: string, to: string): string {
  const key = `${from}-${to}`
  const gradientMap: Record<string, string> = {
    'purple-500-pink-500': 'bg-gradient-to-r from-purple-500 to-pink-500',
    'blue-500-cyan-500': 'bg-gradient-to-r from-blue-500 to-cyan-500',
    'green-500-emerald-500': 'bg-gradient-to-r from-green-500 to-emerald-500',
    'orange-500-yellow-500': 'bg-gradient-to-r from-orange-500 to-yellow-500',
    'red-500-pink-500': 'bg-gradient-to-r from-red-500 to-pink-500',
    'emerald-500-blue-500': 'bg-gradient-to-r from-emerald-500 to-blue-500',
    'amber-500-orange-500': 'bg-gradient-to-r from-amber-500 to-orange-500',
    'pink-500-purple-500': 'bg-gradient-to-r from-pink-500 to-purple-500',
  }
  return gradientMap[key] || 'bg-gradient-to-r from-blue-500 to-cyan-500'
}

// 获取图标渐变类
function getIconGradientClasses(primary: string, secondary: string): string {
  const primaryColor = primary.replace('-500', '-400')
  const key = `${primaryColor}-${secondary}`
  const gradientMap: Record<string, string> = {
    'purple-400-pink-500': 'bg-gradient-to-br from-purple-400 to-pink-500',
    'blue-400-cyan-500': 'bg-gradient-to-br from-blue-400 to-cyan-500',
    'green-400-emerald-500': 'bg-gradient-to-br from-green-400 to-emerald-500',
    'orange-400-yellow-500': 'bg-gradient-to-br from-orange-400 to-yellow-500',
    'red-400-pink-500': 'bg-gradient-to-br from-red-400 to-pink-500',
    'emerald-400-blue-500': 'bg-gradient-to-br from-emerald-400 to-blue-500',
    'amber-400-orange-500': 'bg-gradient-to-br from-amber-400 to-orange-500',
    'pink-400-purple-500': 'bg-gradient-to-br from-pink-400 to-purple-500',
  }
  return gradientMap[key] || 'bg-gradient-to-br from-blue-400 to-cyan-500'
}

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
  
  // Track filter usage
  const handleStrengthFilter = (strength: string | null) => {
    setSelectedStrength(strength)
    trackFilterUsage('strength', strength || 'all', 'flavor-category')
    scrollToProducts()
  }

  const handleSubCategoryFilter = (subCategory: string | null) => {
    setSelectedSubCategory(subCategory)
    trackFilterUsage('subcategory', subCategory || 'all', 'flavor-category')
    scrollToProducts()
  }
  
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
        <section className={`py-1 ${getDoubleGradientClasses(config.theme.gradient.from, config.theme.gradient.to)}`}>
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {/* All Categories Card */}
              <div 
                onClick={() => handleSubCategoryFilter(null)}
                className={`cursor-pointer p-3 rounded-lg border-2 transition-all duration-300 hover:scale-105 ${
                  !selectedSubCategory
                    ? getSubCategoryActiveClasses(config.theme.primary, config.theme.gradient.from)
                    : 'border-gray-200 bg-white hover:border-gray-300 hover:shadow-md'
                }`}
              >
                <div className="text-center">
                  <div className={`w-12 h-12 mx-auto mb-2 ${getIconGradientClasses(config.theme.primary, config.theme.secondary)} rounded-full flex items-center justify-center`}>
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
                  onClick={() => handleSubCategoryFilter(selectedSubCategory === subCategory.value ? null : subCategory.value)}
                  className={`cursor-pointer p-3 rounded-lg border-2 transition-all duration-300 hover:scale-105 ${
                    selectedSubCategory === subCategory.value
                      ? getSubCategoryActiveClasses(config.theme.primary, config.theme.gradient.from)
                      : 'border-gray-200 bg-white hover:border-gray-300 hover:shadow-md'
                  }`}
                >
                  <div className="text-center">
                    <div className="w-12 h-12 mx-auto mb-2 rounded-full flex items-center justify-center overflow-hidden">
                      <div className={`w-full h-full ${getIconGradientClasses(config.theme.primary, config.theme.secondary)} flex items-center justify-center`}>
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
                onClick={() => handleSubCategoryFilter(null)}
                className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                  !selectedSubCategory ? getButtonActiveClasses(config.theme.primary) : 'bg-white text-gray-700 border hover:bg-gray-50'
                }`}
              >
                All {config.subCategories.title.replace('Choose ', '')}
              </button>
              {subCategories.map((subCategory) => (
                <button
                  key={subCategory.value}
                  onClick={() => handleSubCategoryFilter(selectedSubCategory === subCategory.value ? null : subCategory.value)}
                  className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                    selectedSubCategory === subCategory.value 
                      ? getButtonActiveClasses(config.theme.primary)
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
                onClick={() => handleStrengthFilter(null)}
                className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                  !selectedStrength ? getButtonActiveClasses(config.theme.accent) : 'bg-white text-gray-700 border hover:bg-gray-50'
                }`}
              >
                All Strengths
              </button>
              {availableStrengths.map(strength => (
                <button
                  key={strength}
                  onClick={() => handleStrengthFilter(strength)}
                  className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                    selectedStrength === strength 
                      ? getButtonActiveClasses(config.theme.accent)
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
                  onClick={() => handleStrengthFilter(null)}
                  className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                    !selectedStrength 
                      ? getButtonActiveClasses(config.theme.primary)
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  All Strengths
                </button>
                {availableStrengths.map(strength => (
                  <button
                    key={strength}
                    onClick={() => handleStrengthFilter(strength)}
                    className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                      selectedStrength === strength
                        ? getButtonActiveClasses(config.theme.primary)
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
                  onChange={(e) => {
                    setSortBy(e.target.value)
                    trackFilterUsage('sort', e.target.value, 'flavor-category')
                  }}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="popular">Most Popular</option>
                  <option value="rating">Highest Rated</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                </select>
              </div>
            </div>

            {/* Urgency/Scarcity Element - Compact */}
            <div className={`${getButtonGradientClasses(config.theme.urgencyGradient.from, config.theme.urgencyGradient.to)} text-white p-2 rounded-lg mb-4 text-center`}>
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
        <section className={`py-12 ${getGradientClasses(config.theme.gradient.from)}`}>
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