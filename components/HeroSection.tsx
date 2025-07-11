'use client'

import { ArrowRight, Shield, Truck, Award, Sparkles, Star } from 'lucide-react'

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* 时尚背景渐变 */}
      <div className="absolute inset-0 fashion-gradient"></div>
      
      {/* 浮动元素装饰 */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-20 h-20 bg-white bg-opacity-10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-pink-300 bg-opacity-20 rounded-full blur-2xl animate-bounce"></div>
        <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-blue-300 bg-opacity-20 rounded-full blur-xl animate-pulse"></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* 左侧内容 */}
          <div className="space-y-8 text-white">
            <div className="inline-flex items-center glass-effect px-6 py-3 rounded-full">
              <Sparkles className="w-5 h-5 mr-2 text-yellow-300" />
              <span className="text-sm font-medium">Premium Lifestyle Collection</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black leading-none">
              <span className="font-serif italic">Premium</span>
              <br />
              <span className="bg-gradient-to-r from-white to-pink-200 bg-clip-text text-transparent">
                Nicotine Pouches
              </span>
            </h1>
            
            <p className="text-xl text-gray-100 max-w-lg leading-relaxed">
              Experience the best nicotine pouches available - tobacco-free, 
              smokeless nicotine pouches that deliver satisfaction without compromise. 
              Shop premium nicotine pouches for adults 21+.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="https://zylopouch.com/" className="group bg-white text-gray-900 px-8 py-4 rounded-2xl font-bold hover:shadow-2xl transition-all duration-300 flex items-center justify-center transform hover:scale-105">
                <span>Explore Collection</span>
                <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              <button className="glass-effect text-white px-8 py-4 rounded-2xl font-semibold hover:bg-white hover:bg-opacity-30 transition-all duration-300">
                Watch Story
              </button>
            </div>

            {/* 社交证明 */}
            <div className="flex items-center space-x-6 pt-8">
              <div className="flex items-center">
                <div className="flex -space-x-2">
                  {[1,2,3,4].map(i => (
                    <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-r from-pink-400 to-purple-400 border-2 border-white"></div>
                  ))}
                </div>
                <span className="ml-3 text-sm text-gray-200">Trusted by 50K+ customers</span>
              </div>
              <div className="flex items-center">
                <div className="flex text-yellow-400">
                  {[1,2,3,4,5].map(i => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                <span className="ml-2 text-sm text-gray-200">4.9/5 rating</span>
              </div>
            </div>
          </div>
          
          {/* 右侧特色卡片 */}
          <div className="relative">
            <div className="grid grid-cols-1 gap-6">
              {/* 主要特色卡片 */}
              <div className="luxury-card p-8 rounded-3xl text-gray-900 transform hover:scale-105 transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 luxury-gradient rounded-2xl flex items-center justify-center mr-4">
                    <Shield className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Premium Quality</h3>
                    <p className="text-gray-600 text-sm">Swiss-engineered precision</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center p-4 bg-gray-50 rounded-2xl">
                    <div className="text-2xl font-bold text-blue-600">99.9%</div>
                    <div className="text-xs text-gray-600">Purity</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-2xl">
                    <div className="text-2xl font-bold text-purple-600">24h</div>
                    <div className="text-xs text-gray-600">Delivery</div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Available in 8 flavors</span>
                  <div className="flex space-x-1">
                    {['bg-blue-400', 'bg-green-400', 'bg-purple-400', 'bg-orange-400'].map((color, i) => (
                      <div key={i} className={`w-3 h-3 rounded-full ${color}`}></div>
                    ))}
                  </div>
                </div>
              </div>

              {/* 次要特色卡片 */}
              <div className="flex gap-4">
                <div className="flex-1 glass-effect p-6 rounded-2xl text-white backdrop-blur-lg">
                  <Truck className="mb-3 text-pink-300" size={32} />
                  <h4 className="font-bold mb-1">Free Shipping</h4>
                  <p className="text-xs text-gray-200">Orders over $25+</p>
                </div>
                <div className="flex-1 glass-effect p-6 rounded-2xl text-white backdrop-blur-lg">
                  <Award className="mb-3 text-yellow-300" size={32} />
                  <h4 className="font-bold mb-1">Money Back</h4>
                  <p className="text-xs text-gray-200">30-day guarantee</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}