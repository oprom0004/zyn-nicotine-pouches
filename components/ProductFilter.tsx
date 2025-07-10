'use client'

import { useState } from 'react'

interface ProductFilterProps {
  categories: string[]
  onFilterChange: (category: string) => void
}

export default function ProductFilter({ categories, onFilterChange }: ProductFilterProps) {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category)
    onFilterChange(category)
  }

  return (
    <div className="mb-8">
      <h3 className="text-lg font-semibold mb-4">Filter by Category</h3>
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => handleCategoryChange('All')}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
            selectedCategory === 'All'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          All
        </button>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => handleCategoryChange(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              selectedCategory === category
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  )
}