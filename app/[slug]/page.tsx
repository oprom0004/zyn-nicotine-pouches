'use client'

import { useState } from 'react'
import { notFound } from 'next/navigation'
import { Star, Plus, Minus, ShoppingCart, Heart, Share2, Shield, Truck, Award, Info } from 'lucide-react'
import { useCart } from '@/contexts/CartContext'
import { products } from '@/data/products'

export default function ProductSlugPage({ params }: { params: { slug: string } }) {
  const { addToCart } = useCart()
  const [quantity, setQuantity] = useState(1)
  const [selectedImage, setSelectedImage] = useState(0)
  const [activeTab, setActiveTab] = useState('description')

  // 按slug查找产品
  const product = products.find(p => p.slug === params.slug)

  if (!product) {
    notFound()
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product)
    }
  }

  const relatedProducts = products
    .filter(p => p.id !== product.id && p.category === product.category)
    .slice(0, 4)

  const productImages = [
    'https://via.placeholder.com/600x600/3B82F6/FFFFFF?text=Zyn+Pouch',
    'https://via.placeholder.com/600x600/6366F1/FFFFFF?text=Package',
    'https://via.placeholder.com/600x600/8B5CF6/FFFFFF?text=Details',
    'https://via.placeholder.com/600x600/06B6D4/FFFFFF?text=Usage'
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <nav className="bg-gray-50 py-4">
        <div className="container mx-auto px-4">
          <div className="text-sm text-gray-600">
            <span>Home</span> / <span>Nicotine Pouches</span> / <span>{product.category}</span> / 
            <span className="text-gray-900 font-medium"> {product.name}</span>
          </div>
        </div>
      </nav>

      {/* Product Details */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Product Images */}
            <div className="space-y-6">
              <div className="luxury-card p-8 rounded-3xl">
                <img
                  src={productImages[selectedImage]}
                  alt={`${product.name} - Premium Nicotine Pouch`}
                  className="w-full h-96 object-cover rounded-2xl"
                />
              </div>
              
              <div className="grid grid-cols-4 gap-4">
                {productImages.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`aspect-square rounded-2xl overflow-hidden border-2 transition-all ${
                      selectedImage === index 
                        ? 'border-blue-600 shadow-lg' 
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${product.name} view ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-8">
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <span className="glass-effect px-4 py-2 rounded-full text-sm font-medium text-gray-700">
                    {product.category} Nicotine Pouches
                  </span>
                  <span className="luxury-gradient text-white px-4 py-2 rounded-full text-sm font-bold">
                    {product.strength}
                  </span>
                </div>
                
                <h1 className="text-4xl font-bold text-gray-900 mb-4">
                  {product.name}
                </h1>
                
                <div className="flex items-center space-x-4 mb-6">
                  <div className="flex items-center">
                    <div className="flex text-yellow-400 mr-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={20} fill={i < Math.floor(product.rating) ? "currentColor" : "none"} />
                      ))}
                    </div>
                    <span className="text-lg font-medium text-gray-900">{product.rating}</span>
                  </div>
                  <span className="text-gray-500">({product.reviews} reviews)</span>
                </div>
                
                <div className="flex items-baseline space-x-4 mb-8">
                  <span className="text-4xl font-black text-gray-900">${product.price}</span>
                  {product.originalPrice > product.price && (
                    <>
                      <span className="text-xl text-gray-500 line-through">${product.originalPrice}</span>
                      <span className="premium-gradient text-white px-3 py-1 rounded-full text-sm font-bold">
                        Save ${(product.originalPrice - product.price).toFixed(2)}
                      </span>
                    </>
                  )}
                </div>
              </div>

              {/* Key Features */}
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center p-4 glass-effect rounded-2xl">
                  <Shield className="mx-auto mb-2 text-green-600" size={24} />
                  <div className="text-sm font-medium text-gray-900">Tobacco-Free</div>
                </div>
                <div className="text-center p-4 glass-effect rounded-2xl">
                  <Award className="mx-auto mb-2 text-blue-600" size={24} />
                  <div className="text-sm font-medium text-gray-900">Premium Quality</div>
                </div>
                <div className="text-center p-4 glass-effect rounded-2xl">
                  <Truck className="mx-auto mb-2 text-purple-600" size={24} />
                  <div className="text-sm font-medium text-gray-900">Fast Shipping</div>
                </div>
              </div>

              {/* Quantity & Add to Cart */}
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Quantity
                  </label>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center glass-effect rounded-2xl">
                      <button
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        className="p-3 hover:bg-gray-100 rounded-l-2xl transition-colors"
                      >
                        <Minus size={20} />
                      </button>
                      <span className="px-6 py-3 font-medium text-lg">{quantity}</span>
                      <button
                        onClick={() => setQuantity(quantity + 1)}
                        className="p-3 hover:bg-gray-100 rounded-r-2xl transition-colors"
                      >
                        <Plus size={20} />
                      </button>
                    </div>
                    <span className="text-gray-600">
                      ${(product.price * quantity).toFixed(2)} total
                    </span>
                  </div>
                </div>
                
                <div className="flex space-x-4">
                  <button
                    onClick={handleAddToCart}
                    className="flex-1 luxury-gradient text-white py-4 rounded-2xl font-bold hover:shadow-2xl transition-all duration-300 flex items-center justify-center"
                  >
                    <ShoppingCart size={20} className="mr-2" />
                    Add to Cart
                  </button>
                  <button className="glass-effect p-4 rounded-2xl hover:bg-gray-50 transition-colors">
                    <Heart size={20} />
                  </button>
                  <button className="glass-effect p-4 rounded-2xl hover:bg-gray-50 transition-colors">
                    <Share2 size={20} />
                  </button>
                </div>
              </div>

              {/* Important Notice */}
              <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-6">
                <div className="flex items-start space-x-3">
                  <Info className="text-yellow-600 mt-1" size={20} />
                  <div>
                    <h3 className="font-semibold text-yellow-800 mb-2">Age Restriction</h3>
                    <p className="text-yellow-700 text-sm">
                      This nicotine pouch product is intended for adults 21 years of age and older. 
                      Nicotine is addictive and not intended for use by minors.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Tabs */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Tab Navigation */}
            <div className="flex space-x-1 mb-8 bg-white rounded-2xl p-2">
              {[
                { id: 'description', label: 'Description' },
                { id: 'ingredients', label: 'Ingredients' },
                { id: 'usage', label: 'How to Use' },
                { id: 'reviews', label: 'Reviews' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex-1 py-3 px-6 rounded-xl font-medium transition-all ${
                    activeTab === tab.id 
                      ? 'luxury-gradient text-white' 
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="luxury-card p-8 rounded-3xl">
              {activeTab === 'description' && (
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-gray-900">
                    About {product.name} Nicotine Pouches
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {product.description} This premium nicotine pouch delivers consistent 
                    satisfaction with every use. Our tobacco-free formula ensures a clean, 
                    smokeless experience perfect for modern lifestyles.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                      <ul className="space-y-2 text-gray-600">
                        <li>• 100% tobacco-free nicotine pouches</li>
                        <li>• {product.strength} nicotine strength</li>
                        <li>• Premium {product.flavor} flavor</li>
                        <li>• Discreet and convenient</li>
                        <li>• No spitting required</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Benefits:</h4>
                      <ul className="space-y-2 text-gray-600">
                        <li>• Smoke-free nicotine delivery</li>
                        <li>• Long-lasting satisfaction</li>
                        <li>• Stain-free teeth</li>
                        <li>• Travel-friendly packaging</li>
                        <li>• Adult 21+ use only</li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'ingredients' && (
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-gray-900">
                    Nicotine Pouch Ingredients
                  </h3>
                  <p className="text-gray-600">
                    Our nicotine pouches contain only the highest quality ingredients:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Primary Ingredients:</h4>
                      <ul className="space-y-2 text-gray-600">
                        <li>• Pharmaceutical-grade nicotine</li>
                        <li>• Natural plant fibers</li>
                        <li>• Food-grade flavorings</li>
                        <li>• Stabilizers and pH adjusters</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">What's NOT Included:</h4>
                      <ul className="space-y-2 text-gray-600">
                        <li>• No tobacco leaf or stems</li>
                        <li>• No artificial colors</li>
                        <li>• No harmful chemicals</li>
                        <li>• No combustion byproducts</li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'usage' && (
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-gray-900">
                    How to Use Nicotine Pouches
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    {[
                      { step: 1, title: 'Open Package', desc: 'Remove one nicotine pouch from the package' },
                      { step: 2, title: 'Place Pouch', desc: 'Position under your upper lip against your gum' },
                      { step: 3, title: 'Enjoy', desc: 'Leave in place for 30-60 minutes as needed' },
                      { step: 4, title: 'Dispose', desc: 'Remove and dispose of used pouch responsibly' }
                    ].map((item) => (
                      <div key={item.step} className="text-center">
                        <div className="w-12 h-12 luxury-gradient rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">
                          {item.step}
                        </div>
                        <h4 className="font-semibold text-gray-900 mb-2">{item.title}</h4>
                        <p className="text-sm text-gray-600">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                  <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6">
                    <h4 className="font-semibold text-blue-900 mb-2">Important Tips:</h4>
                    <ul className="space-y-1 text-blue-800 text-sm">
                      <li>• Start with lower strength if new to nicotine pouches</li>
                      <li>• Do not chew or swallow the nicotine pouch</li>
                      <li>• Store in a cool, dry place</li>
                      <li>• Keep away from children and pets</li>
                    </ul>
                  </div>
                </div>
              )}

              {activeTab === 'reviews' && (
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-bold text-gray-900">Customer Reviews</h3>
                    <button className="luxury-gradient text-white px-6 py-3 rounded-2xl font-medium">
                      Write Review
                    </button>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-gray-900 mb-2">{product.rating}</div>
                      <div className="flex justify-center text-yellow-400 mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={20} fill={i < Math.floor(product.rating) ? "currentColor" : "none"} />
                        ))}
                      </div>
                      <div className="text-gray-600">Based on {product.reviews} reviews</div>
                    </div>
                    <div className="col-span-2">
                      {[5,4,3,2,1].map(rating => (
                        <div key={rating} className="flex items-center space-x-3 mb-2">
                          <span className="w-3">{rating}</span>
                          <Star size={16} className="text-yellow-400" fill="currentColor" />
                          <div className="flex-1 bg-gray-200 rounded-full h-2">
                            <div 
                              className="bg-yellow-400 h-2 rounded-full" 
                              style={{width: `${rating === 5 ? 70 : rating === 4 ? 20 : rating === 3 ? 7 : rating === 2 ? 2 : 1}%`}}
                            ></div>
                          </div>
                          <span className="text-sm text-gray-600 w-8">
                            {rating === 5 ? '70%' : rating === 4 ? '20%' : rating === 3 ? '7%' : rating === 2 ? '2%' : '1%'}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-6">
                    {[
                      { name: 'Mike R.', rating: 5, date: '2 days ago', review: 'Best nicotine pouches I\'ve tried. Great flavor and perfect nicotine strength.' },
                      { name: 'Sarah L.', rating: 5, date: '1 week ago', review: 'Love these tobacco-free nicotine pouches. Much cleaner than alternatives.' },
                      { name: 'David K.', rating: 4, date: '2 weeks ago', review: 'Good quality nicotine pouches. Fast shipping and great customer service.' }
                    ].map((review, index) => (
                      <div key={index} className="border-b border-gray-200 pb-6">
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                              {review.name.charAt(0)}
                            </div>
                            <div>
                              <div className="font-medium text-gray-900">{review.name}</div>
                              <div className="text-sm text-gray-500">{review.date}</div>
                            </div>
                          </div>
                          <div className="flex text-yellow-400">
                            {[...Array(review.rating)].map((_, i) => (
                              <Star key={i} size={16} fill="currentColor" />
                            ))}
                          </div>
                        </div>
                        <p className="text-gray-600">{review.review}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Related <span className="gradient-text">Nicotine Pouches</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {relatedProducts.map((relatedProduct) => (
              <div key={relatedProduct.id} className="luxury-card rounded-3xl overflow-hidden hover:scale-105 transition-all duration-300">
                <div className="aspect-square bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                  <img 
                    src="https://via.placeholder.com/300x300/3B82F6/FFFFFF?text=Zyn"
                    alt={relatedProduct.name}
                    className="w-32 h-32 object-cover rounded-2xl"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-gray-900 mb-2">{relatedProduct.name}</h3>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xl font-black text-gray-900">${relatedProduct.price}</span>
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={14} fill={i < Math.floor(relatedProduct.rating) ? "currentColor" : "none"} />
                      ))}
                    </div>
                  </div>
                  <button className="w-full luxury-gradient text-white py-3 rounded-2xl font-medium">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}