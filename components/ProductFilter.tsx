'use client'

import { useState } from 'react'
import { FilterState } from '@/types'
import { ChevronDown, ChevronUp, Star, Filter } from 'lucide-react'

interface ProductFilterProps {
  filters: FilterState
  onFilterChange: (filters: FilterState) => void
  onClearFilters: () => void
  onSortChange: (sortBy: string) => void
  sortBy: string
  productCount: number
  totalCount: number
}

export default function ProductFilter({ 
  filters, 
  onFilterChange, 
  onClearFilters, 
  onSortChange, 
  sortBy, 
  productCount, 
  totalCount 
}: ProductFilterProps) {
  const [expandedSections, setExpandedSections] = useState({
    category: true,
    strength: true,
    price: true,
    rating: true,
    availability: true
  })

  const categories = [
    { name: 'Mint', value: 'mint' },
    { name: 'Citrus', value: 'citrus' },
    { name: 'Berry', value: 'berry' },
    { name: 'Wintergreen', value: 'wintergreen' },
    { name: 'Coffee', value: 'coffee' },
    { name: 'Spearmint', value: 'spearmint' },
    { name: 'Sweet', value: 'sweet' },
    { name: 'Spice', value: 'spice' }
  ]
  const strengths = ['3mg', '6mg', '9mg', '12mg']
  const priceRanges = [
    { label: 'Under $5', value: 'under-5', min: 0, max: 5 },
    { label: '$5 - $10', value: '5-10', min: 5, max: 10 },
    { label: '$10 - $15', value: '10-15', min: 10, max: 15 },
    { label: '$15+', value: '15-plus', min: 15, max: Infinity }
  ]
  const sortOptions = [
    { value: 'name', label: 'Name A-Z' },
    { value: 'price-low', label: 'Price Low to High' },
    { value: 'price-high', label: 'Price High to Low' },
    { value: 'rating', label: 'Highest Rated' },
    { value: 'reviews', label: 'Most Reviewed' },
    { value: 'featured', label: 'Featured First' }
  ]

  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }))
  }

  const handleCategoryChange = (categoryValue: string) => {
    onFilterChange({
      ...filters,
      category: categoryValue === 'All' ? null : categoryValue
    })
  }

  const handleStrengthChange = (strength: string) => {
    onFilterChange({
      ...filters,
      strength: strength === 'All' ? null : strength
    })
  }

  const handleSearchChange = (search: string) => {
    onFilterChange({
      ...filters,
      search
    })
  }

  const handlePriceRangeChange = (priceRange: string | null) => {
    onFilterChange({
      ...filters,
      priceRange
    })
  }

  const handleRatingChange = (rating: number | null) => {
    onFilterChange({
      ...filters,
      minRating: rating
    })
  }

  const handleAvailabilityChange = (availability: 'all' | 'in-stock' | 'featured') => {
    onFilterChange({
      ...filters,
      availability: availability === 'all' ? null : availability
    })
  }

  const FilterSection = ({ title, isExpanded, onToggle, children }: {
    title: string
    isExpanded: boolean
    onToggle: () => void
    children: React.ReactNode
  }) => (
    <div className="mb-6 border-b border-gray-200 pb-6 last:border-b-0 last:pb-0">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between text-sm font-medium text-gray-900 mb-3 hover:text-blue-600"
      >
        {title}
        {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
      </button>
      {isExpanded && children}
    </div>
  )

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 sticky top-4">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-semibold text-gray-900 flex items-center">
          <Filter size={20} className="mr-2" />
          Filters
        </h3>
        <button
          onClick={onClearFilters}
          className="text-blue-600 hover:text-blue-700 text-sm font-medium"
        >
          Clear All
        </button>
      </div>

      {/* Results Count */}
      <div className="mb-6 p-3 bg-gray-50 rounded-lg">
        <p className="text-sm text-gray-600">
          Showing <span className="font-medium">{productCount}</span> of <span className="font-medium">{totalCount}</span> products
        </p>
      </div>

      {/* Search */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Search
        </label>
        <input
          type="text"
          value={filters.search || ''}
          onChange={(e) => handleSearchChange(e.target.value)}
          placeholder="Search products..."
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      {/* Sort */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Sort By
        </label>
        <select
          value={sortBy}
          onChange={(e) => onSortChange(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        >
          {sortOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      {/* Category Filter */}
      <FilterSection
        title="Category"
        isExpanded={expandedSections.category}
        onToggle={() => toggleSection('category')}
      >
        <div className="space-y-2">
          <button
            onClick={() => handleCategoryChange('All')}
            className={`w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
              !filters.category
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            All Categories
          </button>
          {categories.map((category) => (
            <button
              key={category.value}
              onClick={() => handleCategoryChange(category.value)}
              className={`w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                filters.category === category.value
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
      </FilterSection>

      {/* Strength Filter */}
      <FilterSection
        title="Strength"
        isExpanded={expandedSections.strength}
        onToggle={() => toggleSection('strength')}
      >
        <div className="space-y-2">
          <button
            onClick={() => handleStrengthChange('All')}
            className={`w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
              !filters.strength
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            All Strengths
          </button>
          {strengths.map((strength) => (
            <button
              key={strength}
              onClick={() => handleStrengthChange(strength)}
              className={`w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                filters.strength === strength
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {strength}
            </button>
          ))}
        </div>
      </FilterSection>

      {/* Price Range Filter */}
      <FilterSection
        title="Price Range"
        isExpanded={expandedSections.price}
        onToggle={() => toggleSection('price')}
      >
        <div className="space-y-2">
          <button
            onClick={() => handlePriceRangeChange(null)}
            className={`w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
              !filters.priceRange
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            All Prices
          </button>
          {priceRanges.map((range) => (
            <button
              key={range.value}
              onClick={() => handlePriceRangeChange(range.value)}
              className={`w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                filters.priceRange === range.value
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {range.label}
            </button>
          ))}
        </div>
      </FilterSection>

      {/* Rating Filter */}
      <FilterSection
        title="Minimum Rating"
        isExpanded={expandedSections.rating}
        onToggle={() => toggleSection('rating')}
      >
        <div className="space-y-2">
          <button
            onClick={() => handleRatingChange(null)}
            className={`w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
              !filters.minRating
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            All Ratings
          </button>
          {[4, 3, 2, 1].map((rating) => (
            <button
              key={rating}
              onClick={() => handleRatingChange(rating)}
              className={`w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-colors flex items-center ${
                filters.minRating === rating
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                    }`}
                  />
                ))}
                <span className="ml-2">& Up</span>
              </div>
            </button>
          ))}
        </div>
      </FilterSection>

      {/* Availability Filter */}
      <FilterSection
        title="Availability"
        isExpanded={expandedSections.availability}
        onToggle={() => toggleSection('availability')}
      >
        <div className="space-y-2">
          <button
            onClick={() => handleAvailabilityChange('all')}
            className={`w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
              !filters.availability
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            All Products
          </button>
          <button
            onClick={() => handleAvailabilityChange('in-stock')}
            className={`w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
              filters.availability === 'in-stock'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            In Stock Only
          </button>
          <button
            onClick={() => handleAvailabilityChange('featured')}
            className={`w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
              filters.availability === 'featured'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Featured Only
          </button>
        </div>
      </FilterSection>
    </div>
  )
}