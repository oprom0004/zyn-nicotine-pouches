'use client'
import { useState } from 'react'
import Link from 'next/link'
import { Star, Plus, Minus, ShoppingCart, Heart, Share2, Shield, Truck, Award, Info, Play, ChevronDown, ChevronUp, Clock, Users, Package, Zap } from 'lucide-react'

export default function ProductContent({ product }: { product: any }) {
  const [quantity, setQuantity] = useState(1)
  const [selectedImage, setSelectedImage] = useState(0)
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)
  const [showAllReviews, setShowAllReviews] = useState(false)

  const productImages = [
    'https://via.placeholder.com/600x600/3B82F6/FFFFFF?text=Zyn+Pouch',
    'https://via.placeholder.com/600x600/6366F1/FFFFFF?text=Package',
    'https://via.placeholder.com/600x600/8B5CF6/FFFFFF?text=Details',
    'https://via.placeholder.com/600x600/06B6D4/FFFFFF?text=Usage'
  ]

  const specifications = [
    { label: 'Nicotine Strength', value: product.strength },
    { label: 'Flavor Profile', value: product.flavor },
    { label: 'Pouches per Can', value: '20 pouches' },
    { label: 'Pouch Size', value: 'Regular' },
    { label: 'Usage Time', value: '30-60 minutes' },
    { label: 'Format', value: 'Tobacco-free' },
    { label: 'Moisture Level', value: 'Optimized' },
    { label: 'pH Level', value: 'Balanced' },
  ]

  const faqs = [
    {
      question: `How strong is ${product.strength} nicotine strength?`,
      answer: `${product.strength} is ${product.strength === '3mg' ? 'a mild strength perfect for beginners or light users' : product.strength === '6mg' ? 'a medium strength suitable for regular users' : 'a strong option for experienced users'}. This strength provides a satisfying experience without being overwhelming.`
    },
    {
      question: `How long does a ${product.flavor} pouch last?`,
      answer: `Each ${product.flavor} nicotine pouch typically lasts 30-60 minutes. The flavor and nicotine release are optimized for this duration to provide consistent satisfaction.`
    },
    {
      question: 'How do I use nicotine pouches correctly?',
      answer: 'Place the pouch under your upper lip against your gum. Leave it there for 30-60 minutes. Do not chew or swallow. Dispose of responsibly after use.'
    },
    {
      question: 'What makes these pouches tobacco-free?',
      answer: 'Our nicotine pouches contain pharmaceutical-grade nicotine derived from tobacco plants, but no actual tobacco leaf or stems. They use plant-based fibers and food-grade ingredients.'
    },
    {
      question: 'Can I use this if I\'m new to nicotine pouches?',
      answer: `${product.strength === '3mg' ? 'Yes! 3mg is perfect for beginners.' : product.strength === '6mg' ? '6mg is suitable for those with some nicotine experience.' : '9mg is recommended for experienced users only. New users should start with 3mg.'}`
    },
    {
      question: 'How should I store these pouches?',
      answer: 'Store in a cool, dry place away from direct sunlight. Keep the can sealed when not in use. Do not refrigerate or freeze.'
    }
  ]

  // 基于产品生成独特的评论
  const generateReviews = (product: any) => {
    const names = [
      'James T.', 'Maria G.', 'Chris W.', 'Lisa K.', 'Ryan B.', 'Anna S.', 
      'Mark D.', 'Jenny H.', 'Paul C.', 'Nicole F.', 'Steve M.', 'Amy R.',
      'Tom L.', 'Rachel P.', 'Kevin J.', 'Samantha B.', 'Eric N.', 'Michelle A.'
    ]
    
    const flavorTemplates: { [key: string]: string[] } = {
      'Cool Mint': [
        'The mint is perfectly balanced - not too intense but refreshing enough to last.',
        'Great cooling sensation without being overpowering. Very refreshing.',
        'Love how the mint flavor develops gradually. Clean and crisp taste.',
        'Perfect mint flavor for someone who wants fresh breath all day.',
        'The cooling effect is exactly what I was looking for. Highly recommend.'
      ],
      'Lemon': [
        'Bright citrus flavor that doesn\'t taste artificial. Really enjoy it.',
        'The lemon taste is natural and zesty. Perfect for morning use.',
        'Love the citrus kick! Helps me stay alert during long work days.',
        'Fresh lemon flavor that lasts the full duration. Very satisfied.',
        'Not too sour, just the right amount of lemon tartness.'
      ],
      'Wintergreen': [
        'Classic wintergreen taste that reminds me of old-school gum.',
        'Strong wintergreen flavor that I absolutely love. Very authentic.',
        'The wintergreen is bold but not overwhelming. Perfect balance.',
        'Great traditional flavor. Takes me back to childhood.',
        'Excellent wintergreen taste that lasts throughout the entire use.'
      ],
      'Cinnamon': [
        'Warm cinnamon spice that\'s comforting and satisfying.',
        'Perfect amount of cinnamon heat. Not too spicy, just right.',
        'Love the warming sensation. Great for cold weather.',
        'The cinnamon flavor is authentic and well-balanced.',
        'Smooth cinnamon taste that doesn\'t burn. Very pleasant.'
      ]
    }
    
    const strengthTemplates: { [key: string]: string[] } = {
      '3mg': [
        'Perfect for beginners like me. Not too strong but definitely satisfying.',
        'Great mild strength. I can use it throughout the day without any issues.',
        'Ideal strength for someone transitioning from lighter products.',
        'Just the right amount of nicotine. Helps with cravings without being harsh.',
        'Smooth and gentle. Perfect introduction to nicotine pouches.'
      ],
      '6mg': [
        'Perfect moderate strength for regular daily use.',
        'Great balance - stronger than 3mg but not overwhelming like 9mg.',
        'This strength hits the sweet spot for my needs.',
        'Ideal for steady use throughout the day. Very consistent.',
        'Just right for someone with moderate nicotine tolerance.'
      ],
      '9mg': [
        'Strong enough to satisfy even heavy users. Very effective.',
        'Perfect for when I need a stronger hit. Really does the job.',
        'Finally found a nicotine pouch that matches my tolerance level.',
        'Strong but not harsh. Great for experienced users.',
        'This strength is exactly what I was looking for. Very satisfying.'
      ],
      '12mg': [
        'Maximum strength that really delivers. Perfect for heavy users.',
        'Strong and effective. Exactly what experienced users need.',
        'Powerful nicotine content that satisfies even the strongest cravings.',
        'Finally a product that matches my high tolerance. Excellent.',
        'Very strong but smooth. Perfect for those who need maximum effect.'
      ]
    }
    
    // 基于产品slug生成一致但独特的评论
    const productSeed = product.slug.split('').reduce((a: number, b: string) => a + b.charCodeAt(0), 0)
    const nameIndices: number[] = []
    const reviewTexts: string[] = []
    
    // 选择口味和强度相关的评论模板
    const flavorReviews = flavorTemplates[product.flavor] || [
      `The ${product.flavor.toLowerCase()} flavor is really well done.`,
      `Great ${product.flavor.toLowerCase()} taste that I enjoy.`,
      `Love this ${product.flavor.toLowerCase()} flavor profile.`
    ]
    
    const strengthReviews = strengthTemplates[product.strength] || [
      `The ${product.strength} strength works well for me.`,
      `Good nicotine level with ${product.strength}.`,
      `${product.strength} is just the right strength.`
    ]
    
    // 生成5个独特的评论
    for (let i = 0; i < 5; i++) {
      nameIndices.push((productSeed + i * 3) % names.length)
      if (i < 2) {
        reviewTexts.push(flavorReviews[i % flavorReviews.length])
      } else if (i < 4) {
        reviewTexts.push(strengthReviews[(i-2) % strengthReviews.length])
      } else {
        reviewTexts.push(`Quality product with great ${product.flavor.toLowerCase()} flavor and perfect ${product.strength} strength. Would recommend to others.`)
      }
    }
    
    return [
      {
        name: names[nameIndices[0]],
        rating: 5,
        date: '2 days ago',
        review: reviewTexts[0],
        helpful: (productSeed % 8) + 8,
        verified: true
      },
      {
        name: names[nameIndices[1]],
        rating: 5,
        date: '1 week ago',
        review: reviewTexts[1],
        helpful: (productSeed % 6) + 6,
        verified: true
      },
      {
        name: names[nameIndices[2]],
        rating: 4,
        date: '2 weeks ago',
        review: reviewTexts[2],
        helpful: (productSeed % 5) + 3,
        verified: false
      },
      {
        name: names[nameIndices[3]],
        rating: 5,
        date: '3 weeks ago',
        review: reviewTexts[3],
        helpful: (productSeed % 10) + 10,
        verified: true
      },
      {
        name: names[nameIndices[4]],
        rating: 4,
        date: '1 month ago',
        review: reviewTexts[4],
        helpful: (productSeed % 4) + 2,
        verified: true
      }
    ]
  }

  const reviews = generateReviews(product)

  const usageScenarios = [
    { icon: Clock, title: 'Work Break', description: 'Perfect for office breaks and meetings' },
    { icon: Users, title: 'Social Events', description: 'Discreet use at social gatherings' },
    { icon: Truck, title: 'Travel', description: 'Convenient for flights and road trips' },
    { icon: Zap, title: 'Quick Boost', description: 'Fast nicotine satisfaction when needed' }
  ]

  const buyingGuide = {
    beginner: product.strength === '3mg' ? 'Perfect choice!' : product.strength === '6mg' ? 'Consider starting with 3mg' : 'Start with 3mg first',
    regular: product.strength === '6mg' ? 'Ideal strength!' : product.strength === '3mg' ? 'Might be too mild' : 'Good for experienced users',
    experienced: product.strength === '9mg' ? 'Maximum strength!' : 'Consider higher strength options'
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <nav className="bg-gray-50 py-4">
        <div className="container mx-auto px-4">
          <div className="text-sm text-gray-600">
            <Link href="/" className="hover:text-gray-900">Home</Link> / 
            <Link href="/products" className="hover:text-gray-900">Products</Link> / 
            <span className="text-gray-900">{product.name}</span>
          </div>
        </div>
      </nav>

      {/* Main Product Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Product Images */}
            <div className="space-y-6">
              <div className="bg-gray-100 rounded-2xl p-8">
                <img
                  src={productImages[selectedImage]}
                  alt={`${product.name} - Premium Nicotine Pouch`}
                  className="w-full h-96 object-cover rounded-xl"
                />
              </div>
              
              <div className="grid grid-cols-4 gap-4">
                {productImages.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`aspect-square rounded-xl overflow-hidden border-2 transition-all ${
                      selectedImage === index 
                        ? 'border-blue-600 shadow-lg' 
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <img src={image} alt={`View ${index + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>

              {/* Video Demo */}
              <div className="bg-gray-100 rounded-2xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold">Product Demo</h3>
                  <Play className="text-blue-600" size={24} />
                </div>
                <div className="bg-gray-200 rounded-xl h-48 flex items-center justify-center">
                  <div className="text-center">
                    <Play className="mx-auto mb-2 text-gray-500" size={48} />
                    <p className="text-gray-600">How to Use {product.name}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-8">
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <span className="bg-gray-100 px-4 py-2 rounded-full text-sm font-medium text-gray-700">
                    {product.category} Nicotine Pouches
                  </span>
                  <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-bold">
                    {product.strength}
                  </span>
                </div>
                
                <h1 className="text-4xl font-bold text-gray-900 mb-4">
                  Zyn Nicotine pouches {product.flavor} {product.strength}
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
                  <span className="text-green-600 font-medium">✓ Verified Purchase</span>
                </div>
                
                <div className="flex items-baseline space-x-4 mb-8">
                  <span className="text-4xl font-black text-gray-900">${product.price}</span>
                  {product.originalPrice > product.price && (
                    <>
                      <span className="text-xl text-gray-500 line-through">${product.originalPrice}</span>
                      <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-bold">
                        Save ${(product.originalPrice - product.price).toFixed(2)}
                      </span>
                    </>
                  )}
                </div>
              </div>

              {/* Key Features */}
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center p-4 bg-gray-50 rounded-xl">
                  <Shield className="mx-auto mb-2 text-green-600" size={24} />
                  <div className="text-sm font-medium text-gray-900">Tobacco-Free</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-xl">
                  <Award className="mx-auto mb-2 text-blue-600" size={24} />
                  <div className="text-sm font-medium text-gray-900">Premium Quality</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-xl">
                  <Truck className="mx-auto mb-2 text-purple-600" size={24} />
                  <div className="text-sm font-medium text-gray-900">Fast Shipping</div>
                </div>
              </div>

              {/* Quantity & Add to Cart */}
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">Quantity</label>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center bg-gray-100 rounded-xl">
                      <button
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        className="p-3 hover:bg-gray-200 rounded-l-xl transition-colors"
                      >
                        <Minus size={20} />
                      </button>
                      <span className="px-6 py-3 font-medium text-lg">{quantity}</span>
                      <button
                        onClick={() => setQuantity(quantity + 1)}
                        className="p-3 hover:bg-gray-200 rounded-r-xl transition-colors"
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
                  <button className="flex-1 bg-blue-600 text-white py-4 rounded-xl font-bold hover:bg-blue-700 transition-all duration-300 flex items-center justify-center">
                    <ShoppingCart size={20} className="mr-2" />
                    Add to Cart
                  </button>
                  <button className="bg-gray-100 p-4 rounded-xl hover:bg-gray-200 transition-colors">
                    <Heart size={20} />
                  </button>
                  <button className="bg-gray-100 p-4 rounded-xl hover:bg-gray-200 transition-colors">
                    <Share2 size={20} />
                  </button>
                </div>
              </div>

              {/* Usage Scenarios */}
              <div className="bg-blue-50 rounded-xl p-6">
                <h3 className="font-semibold text-gray-900 mb-4">Perfect For</h3>
                <div className="grid grid-cols-2 gap-4">
                  {usageScenarios.map((scenario, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <scenario.icon className="text-blue-600" size={20} />
                      <div>
                        <div className="font-medium text-gray-900 text-sm">{scenario.title}</div>
                        <div className="text-gray-600 text-xs">{scenario.description}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Important Notice */}
              <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
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

      {/* Product Overview Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-xl p-8 mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                About {product.name} Nicotine Pouches
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                {product.description} This premium nicotine pouch delivers consistent 
                satisfaction with every use. Our tobacco-free formula ensures a clean, 
                smokeless experience perfect for modern lifestyles.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-4">Key Features:</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• 100% tobacco-free nicotine pouches</li>
                    <li>• {product.strength} nicotine strength</li>
                    <li>• Premium {product.flavor} flavor</li>
                    <li>• Discreet and convenient</li>
                    <li>• No spitting required</li>
                    <li>• 20 pouches per can</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-4">Benefits:</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Smoke-free nicotine delivery</li>
                    <li>• Long-lasting satisfaction</li>
                    <li>• Stain-free teeth</li>
                    <li>• Travel-friendly packaging</li>
                    <li>• No harmful combustion</li>
                    <li>• Adult 21+ use only</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Specifications Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-xl p-8 mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Product Specifications</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-4">Technical Details</h4>
                  <div className="space-y-3">
                    {specifications.map((spec, index) => (
                      <div key={index} className="flex justify-between py-2 border-b border-gray-100">
                        <span className="text-gray-600">{spec.label}</span>
                        <span className="font-medium text-gray-900">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-4">Ingredients</h4>
                  <div className="space-y-4">
                    <div>
                      <h5 className="font-medium text-gray-900 mb-2">Contains:</h5>
                      <ul className="space-y-1 text-gray-600 text-sm">
                        <li>• Pharmaceutical-grade nicotine</li>
                        <li>• Natural plant fibers</li>
                        <li>• Food-grade flavorings</li>
                        <li>• Stabilizers and pH adjusters</li>
                        <li>• Natural sweeteners</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-medium text-gray-900 mb-2">Does NOT contain:</h5>
                      <ul className="space-y-1 text-gray-600 text-sm">
                        <li>• Tobacco leaf or stems</li>
                        <li>• Artificial colors</li>
                        <li>• Harmful chemicals</li>
                        <li>• Combustion byproducts</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Buying Guide Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-xl p-8 mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Choosing the Right Strength</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className={`p-6 rounded-xl border-2 ${product.strength === '3mg' ? 'border-green-500 bg-green-50' : 'border-gray-200'}`}>
                  <h4 className="font-semibold text-gray-900 mb-2">Beginner (3mg)</h4>
                  <p className="text-gray-600 text-sm mb-3">New to nicotine pouches or light tobacco users</p>
                  <p className="text-sm font-medium">{buyingGuide.beginner}</p>
                </div>
                <div className={`p-6 rounded-xl border-2 ${product.strength === '6mg' ? 'border-blue-500 bg-blue-50' : 'border-gray-200'}`}>
                  <h4 className="font-semibold text-gray-900 mb-2">Regular (6mg)</h4>
                  <p className="text-gray-600 text-sm mb-3">Moderate nicotine users and daily users</p>
                  <p className="text-sm font-medium">{buyingGuide.regular}</p>
                </div>
                <div className={`p-6 rounded-xl border-2 ${product.strength === '9mg' ? 'border-red-500 bg-red-50' : 'border-gray-200'}`}>
                  <h4 className="font-semibold text-gray-900 mb-2">Strong (9mg+)</h4>
                  <p className="text-gray-600 text-sm mb-3">Heavy users and experienced nicotine users</p>
                  <p className="text-sm font-medium">{buyingGuide.experienced}</p>
                </div>
              </div>
              
              <div className="bg-blue-50 rounded-xl p-6">
                <h4 className="font-semibold text-blue-900 mb-3">Usage Instructions</h4>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  {[
                    { step: 1, title: 'Open Can', desc: 'Remove one pouch from the can' },
                    { step: 2, title: 'Place Pouch', desc: 'Position under your upper lip' },
                    { step: 3, title: 'Enjoy', desc: 'Leave for 30-60 minutes' },
                    { step: 4, title: 'Dispose', desc: 'Remove and dispose responsibly' }
                  ].map((item) => (
                    <div key={item.step} className="text-center">
                      <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm mx-auto mb-3">
                        {item.step}
                      </div>
                      <h5 className="font-medium text-gray-900 mb-1 text-sm">{item.title}</h5>
                      <p className="text-xs text-gray-600">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-xl p-8 mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h3>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div key={index} className="border border-gray-200 rounded-xl">
                    <button
                      onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                      className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                    >
                      <span className="font-medium text-gray-900">{faq.question}</span>
                      {expandedFaq === index ? (
                        <ChevronUp className="text-gray-500" size={20} />
                      ) : (
                        <ChevronDown className="text-gray-500" size={20} />
                      )}
                    </button>
                    {expandedFaq === index && (
                      <div className="px-6 pb-6 text-gray-600">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Reviews Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-xl p-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-gray-900">Customer Reviews</h3>
                <button className="bg-blue-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-blue-700 transition-colors">
                  Write Review
                </button>
              </div>
              
              {/* Review Summary */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 bg-gray-50 rounded-xl mb-8">
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
                      <span className="w-3 text-sm">{rating}</span>
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

              {/* Reviews List */}
              <div className="space-y-6">
                {(showAllReviews ? reviews : reviews.slice(0, 3)).map((review, index) => (
                  <div key={index} className="border border-gray-200 rounded-xl p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                          {review.name.charAt(0)}
                        </div>
                        <div>
                          <div className="flex items-center space-x-2">
                            <span className="font-medium text-gray-900">{review.name}</span>
                            {review.verified && (
                              <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">Verified</span>
                            )}
                          </div>
                          <div className="text-sm text-gray-500">{review.date}</div>
                        </div>
                      </div>
                      <div className="flex text-yellow-400">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star key={i} size={16} fill="currentColor" />
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-600 mb-4">{review.review}</p>
                    <div className="flex items-center justify-between text-sm">
                      <button className="text-gray-500 hover:text-gray-700">
                        👍 Helpful ({review.helpful})
                      </button>
                      <button className="text-gray-500 hover:text-gray-700">Report</button>
                    </div>
                  </div>
                ))}
              </div>

              {reviews.length > 3 && (
                <div className="text-center mt-8">
                  <button
                    onClick={() => setShowAllReviews(!showAllReviews)}
                    className="bg-gray-100 text-gray-700 px-6 py-3 rounded-xl font-medium hover:bg-gray-200 transition-colors"
                  >
                    {showAllReviews ? 'Show Less' : `Show All ${reviews.length} Reviews`}
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}