'use client'

import { ArrowRight, Shield, Truck, Award } from 'lucide-react'

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block bg-blue-500 bg-opacity-20 px-4 py-2 rounded-full">
              <span className="text-sm font-medium">Premium Nicotine Pouches</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Discover the Clean Way to Enjoy
              <span className="block text-blue-200">Nicotine</span>
            </h1>
            
            <p className="text-xl text-blue-100 max-w-lg">
              Tobacco-free, smoke-free, and spit-free. Experience the premium quality 
              and convenience of Zyn nicotine pouches.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center">
                Shop Now
                <ArrowRight size={20} className="ml-2" />
              </button>
              <button className="border border-blue-400 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Learn More
              </button>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8">
              <div className="grid grid-cols-1 gap-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-500 bg-opacity-20 p-3 rounded-full">
                    <Shield size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold">Premium Quality</h3>
                    <p className="text-blue-100 text-sm">Highest quality ingredients</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-500 bg-opacity-20 p-3 rounded-full">
                    <Truck size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold">Fast Delivery</h3>
                    <p className="text-blue-100 text-sm">Free shipping on orders over $50</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-500 bg-opacity-20 p-3 rounded-full">
                    <Award size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold">Satisfaction Guaranteed</h3>
                    <p className="text-blue-100 text-sm">30-day money-back guarantee</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}