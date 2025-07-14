'use client'

import Link from 'next/link'
import { Sparkles, Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  // 主分类与子分类导航
  const flavorCategories = [
    {
      name: '🌿 Mint Collection',
      href: '/mint-flavors-nicotine-pouches',
      subcategories: [
        { name: 'Cool Mint', href: '/cool-mint-nicotine-pouches' },
        { name: 'Menthol', href: '/menthol-nicotine-pouches' },
        { name: 'Spearmint', href: '/spearmint-flavors-nicotine-pouches' }
      ]
    },
    {
      name: '🍊 Citrus Collection', 
      href: '/citrus-flavors-nicotine-pouches',
      subcategories: [
        { name: 'Citrus', href: '/citrus-nicotine-pouches' },
        { name: 'Lemon', href: '/lemon-nicotine-pouches' }
      ]
    },
    {
      name: '☕ Coffee Collection',
      href: '/coffee-flavors-nicotine-pouches', 
      subcategories: [
        { name: 'Coffee', href: '/coffee-nicotine-pouches' },
        { name: 'Espresso', href: '/espresso-nicotine-pouches' }
      ]
    }
  ]

  const otherFlavors = [
    { name: 'Berry Flavors', href: '/berry-flavors-nicotine-pouches' },
    { name: 'Wintergreen Flavors', href: '/wintergreen-flavors-nicotine-pouches' },
    { name: 'Sweet Flavors', href: '/sweet-flavors-nicotine-pouches' },
    { name: 'Spice Flavors', href: '/spice-flavors-nicotine-pouches' }
  ]

  const strengthLinks = [
    { name: '3mg Pouches', href: '/3mg-nicotine-pouches' },
    { name: '6mg Pouches', href: '/6mg-nicotine-pouches' },
    { name: '9mg Pouches', href: '/9mg-nicotine-pouches' }
  ]

  const quickLinks = [
    { name: 'All Products', href: '/buy' },
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'Search', href: '/search' }
  ]

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          
          {/* Logo and Brand Info */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 luxury-gradient rounded-2xl flex items-center justify-center">
                <Sparkles className="text-white" size={24} />
              </div>
              <span className="text-2xl font-black text-white">
                <span className="font-serif italic">Zyn</span>
              </span>
            </Link>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Premium tobacco-free nicotine pouches crafted for the modern lifestyle. 
              Experience satisfaction without compromise.
            </p>
            <div className="space-y-2 text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <Mail size={16} />
                <span>support@nicotinepoucheszyn.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone size={16} />
                <span>1-800-ZYN-POUCH</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin size={16} />
                <span>Available Nationwide</span>
              </div>
            </div>
          </div>

          {/* Flavor Collections */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6">Flavor Collections</h3>
            <div className="space-y-4">
              {flavorCategories.map((category) => (
                <div key={category.href}>
                  <Link 
                    href={category.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200 text-sm font-medium block mb-2"
                  >
                    {category.name}
                  </Link>
                  <ul className="ml-4 space-y-1">
                    {category.subcategories.map((sub) => (
                      <li key={sub.href}>
                        <Link 
                          href={sub.href}
                          className="text-gray-400 hover:text-gray-300 transition-colors duration-200 text-xs"
                        >
                          {sub.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Other Flavors & Strength */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6">More Flavors</h3>
            <ul className="space-y-3 mb-8">
              {otherFlavors.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            <h4 className="text-md font-bold text-white mb-4">By Strength</h4>
            <ul className="space-y-2">
              {strengthLinks.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Subcategories */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6">Popular Flavors</h3>
            <ul className="space-y-3">
              <li>
                <Link 
                  href="/cool-mint-nicotine-pouches"
                  className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                >
                  ❄️ Cool Mint
                </Link>
              </li>
              <li>
                <Link 
                  href="/menthol-nicotine-pouches"
                  className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                >
                  💨 Menthol
                </Link>
              </li>
              <li>
                <Link 
                  href="/spearmint-flavors-nicotine-pouches"
                  className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                >
                  🌱 Spearmint
                </Link>
              </li>
              <li>
                <Link 
                  href="/citrus-nicotine-pouches"
                  className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                >
                  🍊 Citrus
                </Link>
              </li>
              <li>
                <Link 
                  href="/lemon-nicotine-pouches"
                  className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                >
                  🍋 Lemon
                </Link>
              </li>
              <li>
                <Link 
                  href="/coffee-nicotine-pouches"
                  className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                >
                  ☕ Coffee
                </Link>
              </li>
              <li>
                <Link 
                  href="/espresso-nicotine-pouches"
                  className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                >
                  ☕ Espresso
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links & Newsletter */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6">Quick Links</h3>
            <ul className="space-y-3 mb-8">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <Link 
                  href="/buy"
                  className="text-blue-400 hover:text-blue-300 transition-colors duration-200 text-sm font-medium"
                >
                  View All Products →
                </Link>
              </li>
            </ul>

            {/* Newsletter Signup */}
            <div>
              <h4 className="text-sm font-semibold text-white mb-3">Stay Updated</h4>
              <div className="flex flex-col space-y-2">
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 text-xs focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button className="px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-medium rounded-lg transition-colors duration-200">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            
            {/* Copyright */}
            <div className="text-sm text-gray-400">
              © 2024 Zyn Nicotine Pouches. All rights reserved.
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap items-center space-x-6 text-sm text-gray-400">
              <Link href="/privacy" className="hover:text-white transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-white transition-colors duration-200">
                Terms of Service
              </Link>
              <Link href="/shipping" className="hover:text-white transition-colors duration-200">
                Shipping Info
              </Link>
              <Link href="/returns" className="hover:text-white transition-colors duration-200">
                Returns
              </Link>
            </div>

            {/* Age Verification Notice */}
            <div className="text-xs text-gray-500 text-center md:text-right">
              <div>Must be 21+ to purchase</div>
              <div>Tobacco-free nicotine products</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}