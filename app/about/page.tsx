import { Metadata } from 'next'
import { Shield, Award, Users, Globe, Heart, Leaf } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About Zyn Nicotine Pouches | Premium Tobacco-Free Products | Zyn',
  description: 'Learn about Zyn nicotine pouches - the leading brand in tobacco-free, smokeless nicotine products. Discover our commitment to quality and innovation in nicotine pouches.',
  keywords: 'about zyn, nicotine pouches company, tobacco-free nicotine pouches brand, smokeless nicotine products, zyn history, nicotine pouch innovation'
}

export default function AboutPage() {
  const stats = [
    { number: '50M+', label: 'Satisfied Customers', icon: Users },
    { number: '25+', label: 'Countries Worldwide', icon: Globe },
    { number: '99.9%', label: 'Product Purity', icon: Shield },
    { number: '15+', label: 'Years Experience', icon: Award }
  ]

  const values = [
    {
      icon: Shield,
      title: 'Quality First',
      description: 'Every batch of our nicotine pouches undergoes rigorous testing to ensure the highest quality standards. We never compromise on safety or purity.'
    },
    {
      icon: Leaf,
      title: 'Tobacco-Free Innovation',
      description: 'Our tobacco-free nicotine pouches represent a breakthrough in smokeless nicotine delivery, eliminating harmful tobacco while maintaining satisfaction.'
    },
    {
      icon: Heart,
      title: 'Consumer-Centric',
      description: 'We design every nicotine pouch with our customers in mind, creating products that fit seamlessly into modern lifestyles.'
    },
    {
      icon: Award,
      title: 'Industry Leadership',
      description: 'As pioneers in the nicotine pouches industry, we continue to set standards for quality, innovation, and responsibility.'
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 fashion-gradient text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-white bg-opacity-10 rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-pink-300 bg-opacity-20 rounded-full blur-3xl animate-float"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center glass-effect px-6 py-3 rounded-full mb-8">
              <Award className="w-5 h-5 mr-2 text-yellow-300" />
              <span className="text-sm font-medium">Industry Pioneer Since 2009</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-black leading-tight mb-8">
              Redefining <span className="font-serif italic">Nicotine Pouches</span>
              <br />
              <span className="bg-gradient-to-r from-white to-pink-200 bg-clip-text text-transparent">
                Excellence
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-100 max-w-3xl mx-auto leading-relaxed mb-12">
              We're not just a nicotine pouches company - we're innovators committed to 
              creating the world's finest tobacco-free nicotine products for discerning adults.
            </p>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="glass-effect p-6 rounded-2xl text-center">
                  <stat.icon className="mx-auto mb-3 text-pink-300" size={32} />
                  <div className="text-3xl font-black mb-2">{stat.number}</div>
                  <div className="text-sm text-gray-200">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  The Birth of Premium <span className="gradient-text">Nicotine Pouches</span>
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  Founded in 2009, Zyn emerged from a simple vision: to create the perfect 
                  tobacco-free nicotine experience. Our journey began with a team of scientists 
                  and innovators who believed that nicotine pouches could offer a cleaner, 
                  more sophisticated alternative to traditional tobacco products.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Today, Zyn nicotine pouches are recognized globally as the gold standard 
                  in smokeless nicotine products, trusted by millions of adults who choose 
                  quality and innovation in their nicotine pouches.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="luxury-card p-6 rounded-2xl text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">2009</div>
                  <div className="text-sm text-gray-600">Company Founded</div>
                </div>
                <div className="luxury-card p-6 rounded-2xl text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">2015</div>
                  <div className="text-sm text-gray-600">First Nicotine Pouches</div>
                </div>
                <div className="luxury-card p-6 rounded-2xl text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">2020</div>
                  <div className="text-sm text-gray-600">Global Expansion</div>
                </div>
                <div className="luxury-card p-6 rounded-2xl text-center">
                  <div className="text-3xl font-bold text-orange-600 mb-2">2024</div>
                  <div className="text-sm text-gray-600">Market Leader</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="luxury-card p-12 rounded-3xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-8">Our Mission</h3>
                <blockquote className="text-xl text-gray-600 leading-relaxed italic mb-8">
                  "To provide adult consumers with the highest quality nicotine pouches, 
                  combining innovation, safety, and satisfaction in every tobacco-free product we create."
                </blockquote>
                <div className="flex items-center">
                  <div className="w-12 h-12 luxury-gradient rounded-full flex items-center justify-center mr-4">
                    <Heart className="text-white" size={24} />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">Quality Promise</div>
                    <div className="text-sm text-gray-600">Every nicotine pouch, every time</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              What Drives Our <span className="gradient-text">Nicotine Pouches</span> Innovation
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our core values shape every aspect of our nicotine pouches development, 
              from research and manufacturing to customer experience.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div key={index} className="luxury-card p-8 rounded-3xl hover:scale-105 transition-all duration-300">
                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 luxury-gradient rounded-2xl flex items-center justify-center flex-shrink-0">
                    <value.icon className="text-white" size={32} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{value.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{value.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Manufacturing Excellence */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Where <span className="gradient-text">Nicotine Pouches</span> Meet Perfection
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Our state-of-the-art facilities ensure that every Zyn nicotine pouch meets 
              the highest standards of quality, safety, and consistency.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 luxury-gradient rounded-3xl flex items-center justify-center mx-auto mb-6">
                <Shield className="text-white" size={40} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Quality Control</h3>
              <p className="text-gray-600">
                Every batch of nicotine pouches undergoes 47 quality checks before packaging, 
                ensuring consistent nicotine delivery and flavor profile.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 premium-gradient rounded-3xl flex items-center justify-center mx-auto mb-6">
                <Leaf className="text-white" size={40} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Clean Manufacturing</h3>
              <p className="text-gray-600">
                Our tobacco-free nicotine pouches are produced in ISO-certified facilities 
                using pharmaceutical-grade ingredients and processes.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 dark-gradient rounded-3xl flex items-center justify-center mx-auto mb-6">
                <Award className="text-white" size={40} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Certified Excellence</h3>
              <p className="text-gray-600">
                All Zyn nicotine pouches meet FDA requirements and international quality 
                standards for smokeless tobacco alternatives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 luxury-gradient text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Experience the Future of Nicotine Pouches
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-8">
            Join millions of adults who have discovered the premium quality and 
            satisfaction of Zyn tobacco-free nicotine pouches.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-2xl font-bold hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              Shop Nicotine Pouches
            </button>
            <button className="glass-effect text-white px-8 py-4 rounded-2xl font-semibold hover:bg-white hover:bg-opacity-30 transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}