'use client'

import { useState, useEffect, useRef } from 'react'
import { X, Search, Clock, TrendingUp } from 'lucide-react'
import { products } from '@/data/products'
import { Product } from '@/types'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

interface SearchModalProps {
  isOpen: boolean
  onClose: () => void
}

interface SearchSuggestion {
  type: 'product' | 'category' | 'recent'
  text: string
  product?: Product
}

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [searchTerm, setSearchTerm] = useState('')
  const [suggestions, setSuggestions] = useState<SearchSuggestion[]>([])
  const [recentSearches, setRecentSearches] = useState<string[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)
  const router = useRouter()

  // Load recent searches from localStorage
  useEffect(() => {
    if (isOpen) {
      const saved = localStorage.getItem('zyn-recent-searches')
      if (saved) {
        try {
          setRecentSearches(JSON.parse(saved))
        } catch (e) {
          console.error('Error loading recent searches:', e)
        }
      }
      
      // Focus input when modal opens
      setTimeout(() => {
        inputRef.current?.focus()
      }, 100)
    }
  }, [isOpen])

  // Generate suggestions based on search term
  useEffect(() => {
    if (!searchTerm.trim()) {
      // Show recent searches and popular categories when no search term
      const defaultSuggestions: SearchSuggestion[] = [
        ...recentSearches.slice(0, 3).map(term => ({
          type: 'recent' as const,
          text: term
        })),
        { type: 'category', text: 'Mint' },
        { type: 'category', text: 'Citrus' },
        { type: 'category', text: 'Berry' },
        { type: 'category', text: '6mg' },
        { type: 'category', text: '3mg' }
      ]
      setSuggestions(defaultSuggestions)
      return
    }

    setIsLoading(true)

    // Debounce suggestions
    const timer = setTimeout(() => {
      const searchLower = searchTerm.toLowerCase()
      const newSuggestions: SearchSuggestion[] = []

      // Find matching products
      const matchingProducts = products.filter(product => 
        product.name.toLowerCase().includes(searchLower) ||
        product.flavor.toLowerCase().includes(searchLower) ||
        product.category.toLowerCase().includes(searchLower) ||
        product.strength.toLowerCase().includes(searchLower)
      ).slice(0, 5) // Limit to 5 products

      // Add product suggestions
      matchingProducts.forEach(product => {
        newSuggestions.push({
          type: 'product',
          text: product.name,
          product
        })
      })

      // Add category/flavor suggestions
      const categories = ['Mint', 'Cool Mint', 'Citrus', 'Berry', 'Wintergreen', '3mg', '6mg']
      categories.forEach(category => {
        if (category.toLowerCase().includes(searchLower) && !newSuggestions.some(s => s.text === category)) {
          newSuggestions.push({
            type: 'category',
            text: category
          })
        }
      })

      setSuggestions(newSuggestions.slice(0, 8)) // Limit total suggestions
      setIsLoading(false)
    }, 200)

    return () => clearTimeout(timer)
  }, [searchTerm, recentSearches])

  const handleSearch = (term: string) => {
    if (!term.trim()) return

    // Save to recent searches
    const newRecentSearches = [term, ...recentSearches.filter(s => s !== term)].slice(0, 5)
    setRecentSearches(newRecentSearches)
    localStorage.setItem('zyn-recent-searches', JSON.stringify(newRecentSearches))

    // Navigate to search page
    router.push(`/search?q=${encodeURIComponent(term)}`)
    onClose()
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch(searchTerm)
    } else if (e.key === 'Escape') {
      onClose()
    }
  }

  const handleSuggestionClick = (suggestion: SearchSuggestion) => {
    if (suggestion.type === 'product' && suggestion.product) {
      router.push(`/${suggestion.product.slug}`)
      onClose()
    } else {
      handleSearch(suggestion.text)
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-start justify-center pt-20">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl mx-4 max-h-[80vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center p-6 border-b">
          <Search className="text-gray-400 mr-3" size={20} />
          <input
            ref={inputRef}
            type="text"
            placeholder="Search for products, flavors, strengths..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1 text-lg outline-none placeholder-gray-400"
          />
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 ml-3"
          >
            <X size={24} />
          </button>
        </div>

        {/* Results */}
        <div className="max-h-96 overflow-y-auto">
          {isLoading ? (
            <div className="p-6">
              <div className="flex items-center justify-center">
                <div className="loading w-6 h-6 mr-2"></div>
                <span className="text-gray-500">Searching...</span>
              </div>
            </div>
          ) : suggestions.length === 0 && searchTerm ? (
            <div className="p-6 text-center">
              <p className="text-gray-500">No suggestions found for "{searchTerm}"</p>
              <button
                onClick={() => handleSearch(searchTerm)}
                className="mt-2 text-blue-600 hover:text-blue-800 text-sm"
              >
                Search anyway
              </button>
            </div>
          ) : (
            <div className="py-2">
              {!searchTerm && recentSearches.length > 0 && (
                <div className="px-6 py-2">
                  <h3 className="text-sm font-medium text-gray-900 mb-2 flex items-center">
                    <Clock size={16} className="mr-2" />
                    Recent Searches
                  </h3>
                </div>
              )}
              
              {!searchTerm && suggestions.length === 0 && (
                <div className="px-6 py-4">
                  <h3 className="text-sm font-medium text-gray-900 mb-3 flex items-center">
                    <TrendingUp size={16} className="mr-2" />
                    Popular Searches
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {['Mint', 'Cool Mint', '6mg', 'Citrus', 'Berry'].map((term) => (
                      <button
                        key={term}
                        onClick={() => handleSuggestionClick({ type: 'category', text: term })}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200 transition-colors"
                      >
                        {term}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {suggestions.map((suggestion, index) => (
                <button
                  key={`${suggestion.type}-${suggestion.text}-${index}`}
                  onClick={() => handleSuggestionClick(suggestion)}
                  className="w-full px-6 py-3 hover:bg-gray-50 transition-colors text-left flex items-center"
                >
                  {suggestion.type === 'recent' && <Clock size={16} className="mr-3 text-gray-400" />}
                  {suggestion.type === 'category' && <Search size={16} className="mr-3 text-gray-400" />}
                  {suggestion.type === 'product' && suggestion.product && (
                    <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center mr-3">
                      <span className="text-xs font-medium text-gray-600">
                        {suggestion.product.name.substring(0, 2)}
                      </span>
                    </div>
                  )}
                  <div className="flex-1 min-w-0">
                    <div className="font-medium text-gray-900 truncate">
                      {suggestion.text}
                    </div>
                    {suggestion.type === 'product' && suggestion.product && (
                      <div className="text-sm text-gray-500 flex items-center space-x-2">
                        <span>{suggestion.product.flavor}</span>
                        <span>•</span>
                        <span>{suggestion.product.strength}</span>
                        <span>•</span>
                        <span>${suggestion.product.price}</span>
                      </div>
                    )}
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-gray-50 border-t">
          <div className="flex items-center justify-between text-sm text-gray-500">
            <span>Press Enter to search</span>
            <Link
              href="/products"
              onClick={onClose}
              className="text-blue-600 hover:text-blue-800"
            >
              Browse all products
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}