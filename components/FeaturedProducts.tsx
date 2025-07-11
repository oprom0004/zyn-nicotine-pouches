'use client'

import { ArrowRight, Star, Shield, Truck } from 'lucide-react'
import { getFeaturedProducts } from '@/data/products'
import { useCart } from '@/contexts/CartContext'
import { useNotificationHelpers } from '@/contexts/NotificationContext'
import Link from 'next/link'
import { useState } from 'react'

const featuredProducts = getFeaturedProducts().slice(0, 3)

// 为特色产品添加徽章
const productBadges = ['Best Seller', 'Popular', 'New']

export default function FeaturedProducts() {
  const { addToCart } = useCart()
  const { showSuccess } = useNotificationHelpers()
  const [loadingStates, setLoadingStates] = useState<{[key: number]: boolean}>({})

  const handleAddToCart = async (product: any, e: React.MouseEvent) => {
    e.preventDefault() // 防止触发Link导航
    e.stopPropagation()
    
    setLoadingStates(prev => ({ ...prev, [product.id]: true }))
    
    // 模拟API调用延迟
    await new Promise(resolve => setTimeout(resolve, 300))
    
    addToCart(product)
    showSuccess(`${product.name} added to cart!`)
    
    setLoadingStates(prev => ({ ...prev, [product.id]: false }))
  }

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center glass-effect px-6 py-3 rounded-full mb-6">
            <Star className="w-5 h-5 mr-2 text-yellow-500" />
            <span className="text-sm font-medium text-gray-700">Customer Favorites</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
            Best <span className="font-serif italic gradient-text">Nicotine Pouches</span> Collection
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover our premium nicotine pouches selection featuring the best nicotine pouches available. 
            Shop tobacco-free nicotine pouches in multiple strengths and flavors. 
            All nicotine pouches are smokeless and designed for adult use only.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((product, index) => (
            <Link key={product.id} href={`/${product.slug}`} className="group luxury-card rounded-3xl overflow-hidden hover:scale-105 transition-all duration-500 cursor-pointer">
              <div className="relative overflow-hidden">
                <div className="aspect-square bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center relative overflow-hidden">
                  <img 
                    src={product.imageUrl || 'https://via.placeholder.com/300x300/3B82F6/FFFFFF?text=Zyn'} 
                    alt={`${product.name} - ${product.flavor} ${product.strength} nicotine pouches - Premium tobacco-free smokeless pouches`}
                    title={`${product.name} | ${product.flavor} flavor, ${product.strength} strength`}
                    className="w-32 h-32 object-cover rounded-2xl shadow-lg transform group-hover:scale-110 transition-transform duration-500"
                    loading="eager"
                    decoding="async"
                  />
                  {/* 动态背景效果 */}
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                
                {/* 徽章 */}
                <div className="absolute top-4 left-4">
                  <span className="premium-gradient text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                    {productBadges[index]}
                  </span>
                </div>
                
                {/* 收藏按钮 */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors">
                    <Star size={20} className="text-gray-600 hover:text-yellow-500" />
                  </button>
                </div>
              </div>
              
              <div className="p-8">
                {/* 分类和强度 */}
                <div className="flex items-center justify-between mb-4">
                  <span className="glass-effect px-3 py-1 rounded-full text-sm font-medium text-gray-700">
                    {product.flavor}
                  </span>
                  <span className="luxury-gradient text-white px-3 py-1 rounded-full text-sm font-bold">
                    {product.strength}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {product.name}
                </h3>
                
                {/* 评分 */}
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400 mr-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} fill={i < Math.floor(product.rating) ? "currentColor" : "none"} />
                    ))}
                  </div>
                  <span className="text-sm font-medium text-gray-900">{product.rating}</span>
                  <span className="text-sm text-gray-500 ml-1">({product.reviews})</span>
                </div>
                
                {/* 价格 */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-baseline space-x-2">
                    <span className="text-2xl font-black text-gray-900">${product.price}</span>
                    <span className="text-sm text-gray-500 line-through">${product.originalPrice}</span>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-bold text-green-600">
                      {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                    </div>
                  </div>
                </div>
                
                {/* 购买保障 */}
                <div className="flex items-center justify-center space-x-4 mb-4 text-xs text-gray-600">
                  <div className="flex items-center">
                    <Truck size={14} className="mr-1 text-blue-600" />
                    <span>FREE shipping $25+</span>
                  </div>
                  <div className="flex items-center">
                    <Shield size={14} className="mr-1 text-green-600" />
                    <span>30-day return</span>
                  </div>
                </div>

                {/* 按钮 */}
                <div className="space-y-3">
                  <button 
                    onClick={(e) => handleAddToCart(product, e)}
                    disabled={loadingStates[product.id]}
                    className="w-full luxury-gradient text-white py-4 rounded-2xl font-bold hover:shadow-2xl transition-all duration-300 flex items-center justify-center group transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loadingStates[product.id] ? (
                      <div className="loading w-5 h-5"></div>
                    ) : (
                      <>
                        <span>Add to Cart</span>
                        <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>
                  <div className="w-full glass-effect text-gray-700 py-3 rounded-2xl font-medium hover:bg-gray-50 transition-colors flex items-center justify-center text-sm">
                    Click anywhere to view details
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link 
            href="/products"
            className="inline-flex items-center bg-white text-blue-600 border border-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
          >
            View All Products
            <ArrowRight size={18} className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  )
}