'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useCart } from '@/contexts/CartContext'
import { Search, ShoppingCart, Menu, X, User, Sparkles, ChevronDown } from 'lucide-react'
import SearchModal from './SearchModal'
import CartModal from './CartModal'

export default function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isFlavorsOpen, setIsFlavorsOpen] = useState(false)
  const { cart } = useCart()

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0)

  const navigation = [
    { name: 'Collection', href: '/buy' },
    { name: 'About', href: '/about' },
    { name: 'Experience', href: '/contact' },
  ]

  const flavorCategories = [
    { name: 'Mint Flavors', href: '/mint-flavors-nicotine-pouches', emoji: '🌿', description: 'Cool & Refreshing' },
    { name: 'Citrus Flavors', href: '/citrus-flavors-nicotine-pouches', emoji: '🍊', description: 'Zesty & Vibrant' },
    { name: 'Berry Flavors', href: '/berry-flavors-nicotine-pouches', emoji: '🫐', description: 'Sweet & Fruity' },
    { name: 'Wintergreen Flavors', href: '/wintergreen-flavors-nicotine-pouches', emoji: '🌲', description: 'Fresh & Crisp' }
  ]

  return (
    <>
      <header className="glass-effect sticky top-0 z-40 border-b border-white/20">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-12 h-12 luxury-gradient rounded-2xl flex items-center justify-center">
                <Sparkles className="text-white" size={24} />
              </div>
              <span className="text-2xl font-black text-gray-900">
                <span className="font-serif italic">Zyn</span>
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="relative text-gray-700 hover:text-gray-900 font-medium transition-all duration-300 group"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 luxury-gradient transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
              
              {/* Flavors Dropdown */}
              <div className="relative">
                <button
                  onMouseEnter={() => setIsFlavorsOpen(true)}
                  onMouseLeave={() => setIsFlavorsOpen(false)}
                  className="relative text-gray-700 hover:text-gray-900 font-medium transition-all duration-300 group flex items-center space-x-1"
                >
                  <span>Flavors</span>
                  <ChevronDown size={16} className={`transition-transform duration-300 ${isFlavorsOpen ? 'rotate-180' : ''}`} />
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 luxury-gradient transition-all duration-300 group-hover:w-full"></span>
                </button>
                
                {/* Dropdown Menu */}
                {isFlavorsOpen && (
                  <div 
                    className="absolute top-full left-0 mt-2 w-72 bg-white rounded-2xl shadow-2xl border border-gray-100 py-4 z-50"
                    onMouseEnter={() => setIsFlavorsOpen(true)}
                    onMouseLeave={() => setIsFlavorsOpen(false)}
                  >
                    {flavorCategories.map((flavor) => (
                      <Link
                        key={flavor.name}
                        href={flavor.href}
                        className="block px-6 py-3 hover:bg-gray-50 transition-colors duration-200 group"
                        onClick={() => setIsFlavorsOpen(false)}
                      >
                        <div className="flex items-center space-x-3">
                          <span className="text-2xl">{flavor.emoji}</span>
                          <div>
                            <div className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
                              {flavor.name}
                            </div>
                            <div className="text-sm text-gray-500">{flavor.description}</div>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </nav>

            {/* Actions */}
            <div className="flex items-center space-x-2">
              {/* Search */}
              <button
                onClick={() => setIsSearchOpen(true)}
                className="w-12 h-12 glass-effect rounded-2xl flex items-center justify-center text-gray-700 hover:text-gray-900 transition-all duration-300 hover:scale-105"
              >
                <Search size={20} />
              </button>

              {/* Cart */}
              <button
                onClick={() => setIsCartOpen(true)}
                className="relative w-12 h-12 glass-effect rounded-2xl flex items-center justify-center text-gray-700 hover:text-gray-900 transition-all duration-300 hover:scale-105"
              >
                <ShoppingCart size={20} />
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 premium-gradient text-white text-xs rounded-full w-6 h-6 flex items-center justify-center font-bold shadow-lg animate-pulse">
                    {totalItems}
                  </span>
                )}
              </button>

              {/* User */}
              <button className="w-12 h-12 glass-effect rounded-2xl flex items-center justify-center text-gray-700 hover:text-gray-900 transition-all duration-300 hover:scale-105">
                <User size={20} />
              </button>

              {/* CTA Button - Desktop */}
              <a href="https://zylopouch.com/" className="hidden md:block luxury-gradient text-white px-6 py-3 rounded-2xl font-bold hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                Shop Now
              </a>

              {/* Mobile menu button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden w-12 h-12 glass-effect rounded-2xl flex items-center justify-center text-gray-700 hover:text-gray-900 transition-all duration-300"
              >
                {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className="md:hidden border-t border-white/20 py-6">
              <nav className="flex flex-col space-y-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-gray-700 hover:text-gray-900 font-medium py-3 px-4 rounded-2xl hover:bg-white/50 transition-all duration-300"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                
                {/* Mobile Flavors Section */}
                <div className="py-2">
                  <div className="text-gray-900 font-bold px-4 py-2 text-sm uppercase tracking-wide">
                    Shop by Flavor
                  </div>
                  {flavorCategories.map((flavor) => (
                    <Link
                      key={flavor.name}
                      href={flavor.href}
                      className="flex items-center space-x-3 text-gray-700 hover:text-gray-900 py-3 px-4 rounded-2xl hover:bg-white/50 transition-all duration-300"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <span className="text-xl">{flavor.emoji}</span>
                      <div>
                        <div className="font-medium">{flavor.name}</div>
                        <div className="text-sm text-gray-500">{flavor.description}</div>
                      </div>
                    </Link>
                  ))}
                </div>
                
                <a href="https://zylopouch.com/" className="luxury-gradient text-white py-4 rounded-2xl font-bold mt-4 text-center">
                  Shop Collection
                </a>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Modals */}
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
      <CartModal isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  )
}