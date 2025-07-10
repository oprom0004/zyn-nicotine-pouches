'use client'

interface LoadingProps {
  size?: 'small' | 'medium' | 'large'
  text?: string
}

export default function Loading({ size = 'medium', text = 'Loading...' }: LoadingProps) {
  const sizeClasses = {
    small: 'w-4 h-4',
    medium: 'w-8 h-8',
    large: 'w-12 h-12'
  }

  const textSizeClasses = {
    small: 'text-sm',
    medium: 'text-base',
    large: 'text-lg'
  }

  return (
    <div className="flex flex-col items-center justify-center p-8">
      <div className={`${sizeClasses[size]} border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin mb-4`}></div>
      <p className={`text-gray-600 ${textSizeClasses[size]}`}>{text}</p>
    </div>
  )
}

// Alternative loading component for full page
export function PageLoading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin mb-6 mx-auto"></div>
        <h2 className="text-xl font-semibold text-gray-900 mb-2">Loading</h2>
        <p className="text-gray-600">Please wait while we prepare your content...</p>
      </div>
    </div>
  )
}

// Loading skeleton for product cards
export function ProductSkeleton() {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden animate-pulse">
      <div className="bg-gray-200 h-48 w-full"></div>
      <div className="p-6">
        <div className="h-4 bg-gray-200 rounded mb-2"></div>
        <div className="h-6 bg-gray-200 rounded mb-3"></div>
        <div className="flex items-center justify-between mb-4">
          <div className="h-6 bg-gray-200 rounded w-20"></div>
          <div className="h-4 bg-gray-200 rounded w-16"></div>
        </div>
        <div className="h-10 bg-gray-200 rounded"></div>
      </div>
    </div>
  )
}