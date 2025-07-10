'use client'

import { Shield, Leaf, Clock, Award, Users, Truck } from 'lucide-react'

const features = [
  {
    icon: Shield,
    title: 'Premium Quality',
    description: 'Made with the highest quality ingredients and rigorous testing standards.'
  },
  {
    icon: Leaf,
    title: 'Tobacco-Free',
    description: 'Clean nicotine experience without tobacco, smoke, or ash.'
  },
  {
    icon: Clock,
    title: 'Long-Lasting',
    description: 'Extended satisfaction with slow-release technology.'
  },
  {
    icon: Award,
    title: 'Award-Winning',
    description: 'Recognized for innovation and quality in the industry.'
  },
  {
    icon: Users,
    title: 'Trusted by Millions',
    description: 'Join millions of satisfied customers worldwide.'
  },
  {
    icon: Truck,
    title: 'Fast Delivery',
    description: 'Quick and discreet shipping to your door.'
  }
]

export default function WhyChooseZyn() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Zyn?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover what makes Zyn the preferred choice for nicotine pouch enthusiasts 
            around the world.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <feature.icon className="text-blue-600" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <div className="bg-blue-600 text-white rounded-xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Ready to Experience Zyn?</h3>
            <p className="text-blue-100 mb-6">
              Join the millions who have made the switch to a cleaner, more convenient nicotine experience.
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Start Shopping
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}