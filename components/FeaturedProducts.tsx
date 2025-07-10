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
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Products</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our most popular nicotine pouches, carefully selected for their 
            exceptional quality and customer satisfaction.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {product.badge}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-blue-600">{product.flavor}</span>
                  <span className="text-sm font-medium text-gray-500">{product.strength}</span>
                </div>
                
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{product.name}</h3>
                
                <div className="flex items-center mb-3">
                  <div className="flex items-center">
                    <Star className="text-yellow-400 fill-current" size={16} />
                    <span className="ml-1 text-sm text-gray-600">{product.rating}</span>
                  </div>
                  <span className="text-sm text-gray-500 ml-2">({product.reviews} reviews)</span>
                </div>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-xl font-bold text-gray-900">${product.price}</span>
                    <span className="text-sm text-gray-500 line-through">${product.originalPrice}</span>
                  </div>
                  <span className="text-sm font-medium text-green-600">
                    Save ${(product.originalPrice - product.price).toFixed(2)}
                  </span>
                </div>
                
                <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center justify-center">
                  Add to Cart
                  <ArrowRight size={16} className="ml-2" />
                </button>
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