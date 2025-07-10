'use client'

import { ArrowRight } from 'lucide-react'

const categories = [
  {
    id: 1,
    name: 'Cool Mint',
    description: 'Refreshing mint flavor',
    image: '/api/placeholder/200/200',
    productCount: 8,
    color: 'bg-green-100'
  },
  {
    id: 2,
    name: 'Citrus',
    description: 'Zesty citrus burst',
    image: '/api/placeholder/200/200',
    productCount: 6,
    color: 'bg-orange-100'
  },
  {
    id: 3,
    name: 'Coffee',
    description: 'Rich coffee taste',
    image: '/api/placeholder/200/200',
    productCount: 4,
    color: 'bg-amber-100'
  },
  {
    id: 4,
    name: 'Berry',
    description: 'Sweet berry blend',
    image: '/api/placeholder/200/200',
    productCount: 5,
    color: 'bg-purple-100'
  }
]

export default function Categories() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Shop by Category</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our diverse range of premium nicotine pouch flavors, 
            each crafted to deliver a unique and satisfying experience.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <div 
              key={category.id} 
              className="group cursor-pointer bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className={`${category.color} p-6 text-center`}>
                <img 
                  src={category.image} 
                  alt={category.name}
                  className="w-20 h-20 mx-auto mb-4 rounded-full object-cover"
                />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{category.name}</h3>
                <p className="text-gray-600 text-sm mb-3">{category.description}</p>
                <span className="text-blue-600 text-sm font-medium">
                  {category.productCount} products
                </span>
              </div>
              
              <div className="p-4 bg-white">
                <button className="w-full flex items-center justify-center text-blue-600 hover:text-blue-700 font-medium group-hover:translate-x-1 transition-transform">
                  Shop Now
                  <ArrowRight size={16} className="ml-2" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}