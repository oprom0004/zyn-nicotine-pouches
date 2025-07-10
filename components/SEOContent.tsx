'use client'

import { CheckCircle, Star, Shield, Truck, Clock, Award } from 'lucide-react'

export default function SEOContent() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Main SEO Content Block */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            The Ultimate Guide to <span className="gradient-text">Nicotine Pouches</span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Nicotine pouches represent the future of smokeless nicotine consumption. 
            Our tobacco-free nicotine pouches offer a clean, discreet alternative to traditional tobacco products. 
            Whether you're looking for strong nicotine pouches or mild nicotine pouches, 
            our collection provides the best nicotine pouches for every preference.
          </p>
        </div>

        {/* Why Choose Our Nicotine Pouches */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-900">
              Why Choose Zyn Nicotine Pouches?
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={20} />
                <div>
                  <h4 className="font-semibold text-gray-900">100% Tobacco-Free Nicotine Pouches</h4>
                  <p className="text-gray-600">Our white nicotine pouches contain no tobacco leaf, offering a cleaner nicotine experience.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={20} />
                <div>
                  <h4 className="font-semibold text-gray-900">Multiple Nicotine Strengths Available</h4>
                  <p className="text-gray-600">From 3mg to 12mg nicotine pouches - find your perfect nicotine strength.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={20} />
                <div>
                  <h4 className="font-semibold text-gray-900">Discreet Smokeless Nicotine Pouches</h4>
                  <p className="text-gray-600">Enjoy nicotine anywhere with our small, discreet oral nicotine pouches.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={20} />
                <div>
                  <h4 className="font-semibold text-gray-900">Long-Lasting Satisfaction</h4>
                  <p className="text-gray-600">Each nicotine pouch delivers up to 60 minutes of consistent nicotine release.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="luxury-card p-8 rounded-3xl">
            <h4 className="text-2xl font-bold text-gray-900 mb-6">Popular Nicotine Pouch Categories</h4>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-gray-50 rounded-2xl">
                <div className="text-3xl mb-2">🌿</div>
                <h5 className="font-semibold text-gray-900">Mint Nicotine Pouches</h5>
                <p className="text-sm text-gray-600">Cool mint flavored nicotine pouches</p>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-2xl">
                <div className="text-3xl mb-2">🍊</div>
                <h5 className="font-semibold text-gray-900">Citrus Nicotine Pouches</h5>
                <p className="text-sm text-gray-600">Fresh citrus flavored pouches</p>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-2xl">
                <div className="text-3xl mb-2">☕</div>
                <h5 className="font-semibold text-gray-900">Coffee Nicotine Pouches</h5>
                <p className="text-sm text-gray-600">Rich coffee flavored options</p>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-2xl">
                <div className="text-3xl mb-2">❄️</div>
                <h5 className="font-semibold text-gray-900">Wintergreen Nicotine Pouches</h5>
                <p className="text-sm text-gray-600">Cool wintergreen varieties</p>
              </div>
            </div>
          </div>
        </div>

        {/* Long-tail Keyword Content */}
        <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl p-12 mb-16">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Complete Nicotine Pouches Information
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="space-y-4">
              <h4 className="text-xl font-bold text-gray-900">How to Use Nicotine Pouches</h4>
              <ul className="space-y-2 text-gray-600">
                <li>• Place nicotine pouch under upper lip</li>
                <li>• Keep nicotine pouch in place for 30-60 minutes</li>
                <li>• No need to chew or spit</li>
                <li>• Dispose of used nicotine pouch responsibly</li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-xl font-bold text-gray-900">Nicotine Pouch Benefits</h4>
              <ul className="space-y-2 text-gray-600">
                <li>• Smoke-free nicotine delivery</li>
                <li>• No tobacco leaves or stems</li>
                <li>• Stain-free teeth experience</li>
                <li>• Convenient portable format</li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-xl font-bold text-gray-900">Best Nicotine Pouch Flavors</h4>
              <ul className="space-y-2 text-gray-600">
                <li>• Cool mint nicotine pouches</li>
                <li>• Berry blend nicotine pouches</li>
                <li>• Vanilla cream nicotine pouches</li>
                <li>• Cinnamon spice nicotine pouches</li>
              </ul>
            </div>
          </div>
        </div>

        {/* LSI Keywords Section */}
        <div className="text-center mb-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-8">
            Premium Smokeless Nicotine Products
          </h3>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Our nicotine pouches online store offers the largest selection of nicotine pouches for sale. 
              Buy nicotine pouches from trusted brands including Zyn nicotine pouches, 
              On nicotine pouches, and Velo nicotine pouches. We ship nicotine pouches nationwide 
              with fast, discreet delivery. All nicotine pouches are for adults 21 and older.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="glass-effect p-6 rounded-2xl">
                <Shield className="mx-auto mb-3 text-blue-600" size={32} />
                <h5 className="font-bold text-gray-900">FDA Approved</h5>
                <p className="text-sm text-gray-600">Safe nicotine pouches</p>
              </div>
              <div className="glass-effect p-6 rounded-2xl">
                <Truck className="mx-auto mb-3 text-green-600" size={32} />
                <h5 className="font-bold text-gray-900">Fast Shipping</h5>
                <p className="text-sm text-gray-600">Quick nicotine pouch delivery</p>
              </div>
              <div className="glass-effect p-6 rounded-2xl">
                <Clock className="mx-auto mb-3 text-purple-600" size={32} />
                <h5 className="font-bold text-gray-900">24/7 Support</h5>
                <p className="text-sm text-gray-600">Nicotine pouch assistance</p>
              </div>
              <div className="glass-effect p-6 rounded-2xl">
                <Award className="mx-auto mb-3 text-orange-600" size={32} />
                <h5 className="font-bold text-gray-900">Best Quality</h5>
                <p className="text-sm text-gray-600">Top nicotine pouch brands</p>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Frequently Asked Questions About Nicotine Pouches
          </h3>
          
          <div className="space-y-6">
            <div className="luxury-card p-6 rounded-2xl">
              <h4 className="text-xl font-bold text-gray-900 mb-3">
                What are nicotine pouches made of?
              </h4>
              <p className="text-gray-600">
                Nicotine pouches contain pharmaceutical-grade nicotine, plant-based fibers, 
                flavorings, and sweeteners. They do not contain tobacco leaf, making them 
                a tobacco-free alternative to traditional smokeless tobacco products.
              </p>
            </div>
            
            <div className="luxury-card p-6 rounded-2xl">
              <h4 className="text-xl font-bold text-gray-900 mb-3">
                How long do nicotine pouches last?
              </h4>
              <p className="text-gray-600">
                Most nicotine pouches provide satisfaction for 30-60 minutes. The duration 
                depends on the nicotine strength and your personal preferences. Strong nicotine 
                pouches may last longer than mild nicotine pouches.
              </p>
            </div>
            
            <div className="luxury-card p-6 rounded-2xl">
              <h4 className="text-xl font-bold text-gray-900 mb-3">
                Are nicotine pouches safe?
              </h4>
              <p className="text-gray-600">
                Nicotine pouches are regulated tobacco products intended for adults 21+. 
                While no tobacco product is completely safe, nicotine pouches eliminate 
                the harmful effects of smoke and combustion associated with cigarettes.
              </p>
            </div>
            
            <div className="luxury-card p-6 rounded-2xl">
              <h4 className="text-xl font-bold text-gray-900 mb-3">
                Where can I buy nicotine pouches?
              </h4>
              <p className="text-gray-600">
                You can buy nicotine pouches online from our store or at authorized retailers. 
                We offer the best nicotine pouches for sale with competitive prices and 
                fast shipping. All nicotine pouch purchases require age verification.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}