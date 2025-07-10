'use client'

import { useState } from 'react'
import { FilterState } from '@/types'

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
  const categories = ['Cool Mint', 'Citrus', 'Coffee', 'Spearmint', 'Wintergreen', 'Berry', 'Cinnamon', 'Vanilla']
  const strengths = ['3mg', '6mg', '9mg', '12mg']
  const sortOptions = [
    { value: 'name', label: 'Name A-Z' },
    { value: 'price-low', label: 'Price Low to High' },
    { value: 'price-high', label: 'Price High to Low' },
    { value: 'rating', label: 'Highest Rated' },
    { value: 'reviews', label: 'Most Reviewed' }
  ]

  const handleCategoryChange = (category: string) => {
    onFilterChange({
      ...filters,
      category: category === 'All' ? null : category
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

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 sticky top-4">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-semibold text-gray-900">Filters</h3>
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
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Category
        </label>
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
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={`w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                filters.category === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Strength Filter */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Strength
        </label>
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
      </div>
    </div>
  )
}