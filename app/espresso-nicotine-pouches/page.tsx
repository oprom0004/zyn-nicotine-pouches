import { Metadata } from 'next'
import { products } from '@/data/products'
import ProductCard from '@/components/ProductCard'
import { Star, Shield, Truck, Award, TrendingUp, Users, CheckCircle } from 'lucide-react'
import Link from 'next/link'

const flavorInfo = {
  title: "Espresso Nicotine Pouches",
  description: "Experience the bold espresso flavor nicotine pouches with intense roasted taste and energizing satisfaction. Premium tobacco-free espresso pouches.",
  h1: "Premium Espresso Flavor Nicotine Pouches",
  seoDescription: "Shop espresso flavor nicotine pouches with bold roasted taste. Tobacco-free, premium quality espresso pouches in multiple strengths. Free shipping over $25.",
  flavorName: "espresso",
  benefits: [
    "Bold Espresso Flavor",
    "Intense Roasted Taste", 
    "Energizing Experience",
    "Perfect for Espresso Lovers",
    "Premium Quality Ingredients",
    "Various Nicotine Strengths"
  ],
  keywords: [
    "espresso nicotine pouches",
    "espresso flavor pouches", 
    "espresso zyn alternatives",
    "tobacco-free espresso",
    "premium espresso pouches",
    "bold espresso taste"
  ],
  lsiKeywords: [
    "espresso taste nicotine pouches",
    "roasted espresso flavored pouches",
    "espresso lover experience",
    "authentic espresso flavor",
    "espresso nicotine satisfaction",
    "strong coffee alternative"
  ]
}

// Filter products for espresso flavor
const espressoProducts = products.filter(product => 
  product.category === 'coffee' && ['Espresso'].includes(product.flavor)
)

export const metadata: Metadata = {
  title: `${flavorInfo.title} | Premium Tobacco-Free Collection`,
  description: flavorInfo.seoDescription,
  keywords: flavorInfo.keywords.join(', '),
  openGraph: {
    title: flavorInfo.title,
    description: flavorInfo.seoDescription,
    type: 'website',
    url: 'https://nicotinepoucheszyn.com/espresso-nicotine-pouches',
  },
  alternates: {
    canonical: 'https://nicotinepoucheszyn.com/espresso-nicotine-pouches'
  }
}

export default function EspressoPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="py-8 bg-gradient-to-br from-white to-stone-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            {/* Breadcrumb */}
            <nav className="text-sm text-gray-500 mb-4">
              <Link href="/" className="hover:text-blue-600">Home</Link>
              <span className="mx-2">/</span>
              <Link href="/buy" className="hover:text-blue-600">Buy Nicotine Pouches</Link>
              <span className="mx-2">/</span>
              <span className="capitalize font-medium">{flavorInfo.title}</span>
            </nav>

            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {flavorInfo.h1}
            </h1>
            
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              {flavorInfo.description}
            </p>

            {/* Social Proof Bar */}
            <div className="flex flex-wrap justify-center items-center gap-4 mb-6 p-4 bg-white rounded-lg shadow-sm">
              <div className="flex items-center text-gray-700">
                <Star className="text-yellow-400 mr-2" size={20} fill="currentColor" />
                <span className="font-bold">4.5</span>
                <span className="ml-1">(1,248 reviews)</span>
              </div>
              <div className="flex items-center text-gray-700">
                <Users className="text-blue-600 mr-2" size={20} />
                <span className="font-bold">{espressoProducts.length}</span>
                <span className="ml-1">products available</span>
              </div>
              <div className="flex items-center text-gray-700">
                <Truck className="text-green-600 mr-2" size={20} />
                <span className="font-medium">FREE shipping $25+</span>
              </div>
            </div>

            {/* CTA Button */}
            <Link 
              href="#products-grid"
              className="inline-block bg-stone-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-stone-800 transition-colors duration-200"
            >
              Shop Espresso Pouches
            </Link>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-8" id="products-grid">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Premium Espresso Flavor Collection
            </h2>
            
            {/* Products Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {espressoProducts.map((product, index) => (
                <ProductCard 
                  key={product.id} 
                  product={product} 
                  index={index}
                />
              ))}
            </div>

            {/* Results Count */}
            <div className="text-center mt-8 text-gray-600">
              Showing {espressoProducts.length} premium espresso flavor nicotine pouches
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Espresso Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Why Choose {flavorInfo.title}?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {flavorInfo.benefits.map((benefit, index) => (
                <div key={index} className="text-center p-6 bg-gray-50 rounded-2xl">
                  <CheckCircle className="text-green-600 mx-auto mb-4" size={32} />
                  <h3 className="font-semibold text-gray-900 mb-2">{benefit}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Our Promise to You
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <Shield className="text-green-600 mx-auto mb-4" size={48} />
                <h3 className="text-xl font-bold text-gray-900 mb-2">30-Day Guarantee</h3>
                <p className="text-gray-600">Not satisfied? Return for full refund within 30 days.</p>
              </div>
              <div className="text-center">
                <Truck className="text-blue-600 mx-auto mb-4" size={48} />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Free Fast Shipping</h3>
                <p className="text-gray-600">Free shipping on orders over $25. Delivered in 2-3 days.</p>
              </div>
              <div className="text-center">
                <Award className="text-purple-600 mx-auto mb-4" size={48} />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Premium Quality</h3>
                <p className="text-gray-600">Tobacco-free, lab-tested, FDA-compliant products.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Espresso Education Section */}
      <section className="py-12 bg-stone-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              About Espresso Flavor Nicotine Pouches
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Espresso flavor nicotine pouches deliver the bold, intense taste of authentic Italian espresso with every use. 
              Our premium espresso pouches combine rich, roasted coffee flavors with high-quality nicotine for a 
              powerful and energizing experience.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Perfect for espresso enthusiasts and those who enjoy strong, intense flavors, our espresso nicotine pouches provide 
              long-lasting taste and nicotine satisfaction without tobacco. Each pouch is carefully 
              crafted to deliver consistent quality and authentic espresso flavor.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  What makes espresso flavor nicotine pouches special?
                </h3>
                <p className="text-gray-600">
                  Espresso flavor pouches offer a bold, intense taste experience with authentic roasted espresso flavors 
                  and premium nicotine delivery, perfect for espresso lovers seeking a tobacco-free alternative.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  How long does the espresso flavor last?
                </h3>
                <p className="text-gray-600">
                  Our espresso pouches deliver consistent flavor for 30-60 minutes, with the bold roasted taste 
                  remaining intense throughout the entire experience.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Are espresso nicotine pouches tobacco-free?
                </h3>
                <p className="text-gray-600">
                  Yes, all our espresso flavor nicotine pouches are completely tobacco-free, using premium 
                  synthetic nicotine and natural flavoring for a clean, satisfying experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Explore Related Coffee Flavors Section */}
      <section className="py-12 bg-stone-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                ☕ Explore More Coffee Flavors
              </h2>
              <p className="text-lg text-gray-600">
                Love coffee flavors? Try our other premium coffee-inspired nicotine pouches
              </p>
            </div>
            
            <div className="flex justify-center">
              {/* Coffee Card */}
              <Link href="/coffee-nicotine-pouches" className="group max-w-md">
                <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-6 rounded-2xl border-2 border-amber-100 hover:border-amber-300 transition-all duration-300 hover:scale-105 hover:shadow-lg">
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-amber-600 to-orange-600 rounded-full flex items-center justify-center">
                      <span className="text-2xl">☕</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Coffee</h3>
                    <p className="text-gray-600 text-sm mb-3">
                      Rich coffee blend with authentic roasted flavor - perfect for those who prefer a smoother coffee experience
                    </p>
                    <div className="text-amber-600 text-sm font-medium">
                      Available in multiple strengths
                    </div>
                    <div className="mt-3 text-amber-600 group-hover:text-amber-800 font-medium">
                      Explore Coffee →
                    </div>
                  </div>
                </div>
              </Link>
            </div>

            <div className="text-center mt-8">
              <p className="text-gray-500 text-sm">
                Or explore our <Link href="/coffee-flavors-nicotine-pouches" className="text-stone-600 hover:text-stone-800 font-medium">complete coffee collection</Link> for all coffee varieties
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}