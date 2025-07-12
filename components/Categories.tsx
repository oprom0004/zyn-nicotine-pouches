'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const categories = [
  {
    id: 1,
    name: 'Mint Flavors',
    description: 'Cool & refreshing mint experience',
    emoji: '🌿',
    productCount: 7,
    color: 'bg-gradient-to-br from-green-100 to-blue-100',
    href: '/mint-flavors-nicotine-pouches',
    textColor: 'text-green-800'
  },
  {
    id: 2,
    name: 'Citrus Flavors',
    description: 'Zesty & vibrant citrus burst',
    emoji: '🍊',
    productCount: 4,
    color: 'bg-gradient-to-br from-orange-100 to-yellow-100',
    href: '/citrus-flavors-nicotine-pouches',
    textColor: 'text-orange-800'
  },
  {
    id: 3,
    name: 'Berry Flavors',
    description: 'Sweet & fruity berry blend',
    emoji: '🫐',
    productCount: 2,
    color: 'bg-gradient-to-br from-purple-100 to-pink-100',
    href: '/berry-flavors-nicotine-pouches',
    textColor: 'text-purple-800'
  },
  {
    id: 4,
    name: 'Wintergreen Flavors',
    description: 'Fresh & crisp wintergreen',
    emoji: '🌲',
    productCount: 2,
    color: 'bg-gradient-to-br from-green-100 to-emerald-100',
    href: '/wintergreen-flavors-nicotine-pouches',
    textColor: 'text-emerald-800'
  }
]

export default function Categories() {
  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Shop by <span className="gradient-text">Flavor Category</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Discover our premium nicotine pouch flavors, each crafted to deliver 
            a unique and satisfying tobacco-free experience.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link 
              key={category.id} 
              href={category.href}
              className="group block"
            >
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden transform hover:scale-105">
                <div className={`${category.color} p-8 text-center`}>
                  {/* Emoji Icon */}
                  <div className="w-20 h-20 mx-auto mb-4 bg-white rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-4xl">{category.emoji}</span>
                  </div>
                  
                  <h3 className={`text-xl font-bold ${category.textColor} mb-2 group-hover:scale-105 transition-transform`}>
                    {category.name}
                  </h3>
                  <p className="text-gray-700 text-sm mb-3 font-medium">
                    {category.description}
                  </p>
                  <div className="inline-flex items-center px-3 py-1 bg-white rounded-full shadow-sm">
                    <span className={`${category.textColor} text-sm font-bold`}>
                      {category.productCount} products
                    </span>
                  </div>
                </div>
                
                <div className="p-6 bg-white">
                  <div className="flex items-center justify-center text-blue-600 hover:text-blue-700 font-bold group-hover:translate-x-1 transition-all duration-300">
                    <span>Explore Flavors</span>
                    <ArrowRight size={18} className="ml-2 group-hover:scale-110 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <Link 
            href="/buy" 
            className="inline-flex items-center px-8 py-4 bg-white text-gray-700 hover:text-gray-900 font-bold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-blue-500"
          >
            <span>View All Products</span>
            <ArrowRight size={20} className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  )
}