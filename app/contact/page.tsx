'use client'

import { useState } from 'react'
import { Metadata } from 'next'
import { Mail, Phone, MapPin, Clock, Send, MessageCircle, HelpCircle, ShoppingCart } from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    category: 'general'
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Contact form submitted:', formData)
  }

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Get answers about nicotine pouches',
      contact: 'support@zyn.com',
      available: '24/7 Response within 2 hours'
    },
    {
      icon: Phone,
      title: 'Phone Support',
      description: 'Speak with nicotine pouches experts',
      contact: '1-800-ZYN-HELP',
      available: 'Mon-Fri 8AM-8PM EST'
    },
    {
      icon: MessageCircle,
      title: 'Live Chat',
      description: 'Instant nicotine pouches assistance',
      contact: 'Available on website',
      available: 'Mon-Sun 9AM-9PM EST'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      description: 'Zyn nicotine pouches headquarters',
      contact: '123 Innovation Drive, Richmond, VA',
      available: 'By appointment only'
    }
  ]

  const faqItems = [
    {
      question: 'How do I use Zyn nicotine pouches?',
      answer: 'Place the nicotine pouch under your upper lip and leave for 30-60 minutes. No need to chew or spit.'
    },
    {
      question: 'What nicotine strengths are available?',
      answer: 'Our nicotine pouches come in 3mg, 6mg, 9mg, and 12mg strengths to suit different preferences.'
    },
    {
      question: 'Are Zyn nicotine pouches tobacco-free?',
      answer: 'Yes, all Zyn nicotine pouches are 100% tobacco-free and contain no tobacco leaf or stems.'
    },
    {
      question: 'How long do nicotine pouches last?',
      answer: 'Each nicotine pouch provides satisfaction for 30-60 minutes, depending on the strength and your preferences.'
    },
    {
      question: 'Where can I buy Zyn nicotine pouches?',
      answer: 'You can buy nicotine pouches online from our store or at authorized retailers nationwide.'
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 fashion-gradient text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-white bg-opacity-10 rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-pink-300 bg-opacity-20 rounded-full blur-3xl animate-float"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-7xl font-black leading-tight mb-8">
              Get <span className="font-serif italic">Nicotine Pouches</span>
              <br />
              <span className="bg-gradient-to-r from-white to-pink-200 bg-clip-text text-transparent">
                Support
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-100 max-w-3xl mx-auto leading-relaxed">
              Have questions about our tobacco-free nicotine pouches? Our expert team 
              is here to help with all your nicotine pouches needs.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Multiple Ways to Get <span className="gradient-text">Nicotine Pouches</span> Help
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the best way to reach our nicotine pouches support team. 
              We're committed to providing excellent customer service for all nicotine pouches inquiries.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactMethods.map((method, index) => (
              <div key={index} className="luxury-card p-8 rounded-3xl text-center hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 luxury-gradient rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <method.icon className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{method.title}</h3>
                <p className="text-gray-600 mb-4">{method.description}</p>
                <div className="space-y-2">
                  <div className="font-semibold text-gray-900">{method.contact}</div>
                  <div className="text-sm text-gray-500">{method.available}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="luxury-card p-8 rounded-3xl">
              <h3 className="text-3xl font-bold text-gray-900 mb-8">
                Send Us a Message About Nicotine Pouches
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Inquiry Category
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({...formData, category: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="general">General Nicotine Pouches Questions</option>
                    <option value="products">Product Information</option>
                    <option value="orders">Order & Shipping</option>
                    <option value="quality">Quality & Safety</option>
                    <option value="wholesale">Wholesale Inquiries</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({...formData, subject: e.target.value})}
                    placeholder="Brief description of your nicotine pouches inquiry"
                    className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    placeholder="Tell us more about your nicotine pouches question or concern..."
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full luxury-gradient text-white py-4 rounded-2xl font-bold hover:shadow-2xl transition-all duration-300 flex items-center justify-center"
                >
                  <Send size={20} className="mr-2" />
                  Send Message
                </button>
              </form>
            </div>
            
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="luxury-card p-8 rounded-3xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Nicotine Pouches Customer Service Hours
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <Clock className="text-blue-600" size={24} />
                    <div>
                      <div className="font-semibold text-gray-900">Monday - Friday</div>
                      <div className="text-gray-600">8:00 AM - 8:00 PM EST</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Clock className="text-blue-600" size={24} />
                    <div>
                      <div className="font-semibold text-gray-900">Saturday - Sunday</div>
                      <div className="text-gray-600">9:00 AM - 6:00 PM EST</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="luxury-card p-8 rounded-3xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Nicotine Pouches Emergency Support
                </h3>
                <p className="text-gray-600 mb-4">
                  For urgent nicotine pouches product safety concerns or 
                  adverse reactions, contact us immediately:
                </p>
                <div className="space-y-2">
                  <div className="font-semibold text-red-600">Emergency Hotline: 1-800-SAFETY-1</div>
                  <div className="text-sm text-gray-500">Available 24/7 for safety concerns</div>
                </div>
              </div>
              
              <div className="luxury-card p-8 rounded-3xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Follow Our Nicotine Pouches Updates
                </h3>
                <div className="flex space-x-4">
                  <button className="flex-1 glass-effect py-3 rounded-2xl font-medium hover:bg-gray-50 transition-colors">
                    Facebook
                  </button>
                  <button className="flex-1 glass-effect py-3 rounded-2xl font-medium hover:bg-gray-50 transition-colors">
                    Instagram
                  </button>
                  <button className="flex-1 glass-effect py-3 rounded-2xl font-medium hover:bg-gray-50 transition-colors">
                    Twitter
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Frequently Asked <span className="gradient-text">Nicotine Pouches</span> Questions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find quick answers to common questions about Zyn nicotine pouches, 
              usage instructions, and product information.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-6">
            {faqItems.map((item, index) => (
              <div key={index} className="luxury-card p-6 rounded-2xl">
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                  <HelpCircle className="mr-3 text-blue-600" size={24} />
                  {item.question}
                </h3>
                <p className="text-gray-600 leading-relaxed pl-12">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">
              Can't find what you're looking for about nicotine pouches?
            </p>
            <button className="luxury-gradient text-white px-8 py-4 rounded-2xl font-bold hover:shadow-2xl transition-all duration-300">
              Contact Nicotine Pouches Support
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}