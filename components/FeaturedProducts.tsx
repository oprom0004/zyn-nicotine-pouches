'use client'

import { ArrowRight, Star } from 'lucide-react'

const featuredProducts = [
  {
    id: 1,
    name: 'Zyn Cool Mint 3mg',
    price: 4.99,
    originalPrice: 5.99,
    image: 'https://via.placeholder.com/300x300/3B82F6/FFFFFF?text=Zyn',
    rating: 4.8,
    reviews: 234,
    strength: '3mg',
    flavor: 'Cool Mint',
    badge: 'Best Seller'
  },
  {
    id: 2,
    name: 'Zyn Citrus 6mg',
    price: 5.99,
    originalPrice: 6.99,
    image: 'https://via.placeholder.com/300x300/3B82F6/FFFFFF?text=Zyn',
    rating: 4.7,
    reviews: 189,
    strength: '6mg',
    flavor: 'Citrus',
    badge: 'New'
  },
  {
    id: 3,
    name: 'Zyn Coffee 3mg',
    price: 5.49,
    originalPrice: 6.49,
    image: 'https://via.placeholder.com/300x300/3B82F6/FFFFFF?text=Zyn',
    rating: 4.6,
    reviews: 156,
    strength: '3mg',
    flavor: 'Coffee',
    badge: 'Popular'
  }
]

export default function FeaturedProducts() {
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
            <div key={product.id} className="group luxury-card rounded-3xl overflow-hidden hover:scale-105 transition-all duration-500">
              <div className="relative overflow-hidden">
                <div className="aspect-square bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center relative overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-32 h-32 object-cover rounded-2xl shadow-lg transform group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* 动态背景效果 */}
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                
                {/* 徽章 */}
                <div className="absolute top-4 left-4">
                  <span className="premium-gradient text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                    {product.badge}
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
                
                {/* 按钮 */}
                <div className="space-y-3">
                  <button className="w-full luxury-gradient text-white py-4 rounded-2xl font-bold hover:shadow-2xl transition-all duration-300 flex items-center justify-center group transform hover:scale-105">
                    <span>Add to Cart</span>
                    <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button className="w-full glass-effect text-gray-700 py-3 rounded-2xl font-medium hover:bg-gray-50 transition-colors">
                    Quick View
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="bg-white text-blue-600 border border-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
            View All Products
          </button>
        </div>
      </div>
    </section>
  )
}