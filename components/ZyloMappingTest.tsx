'use client'

import { useState } from 'react'
import { getZyloProductUrl, getZyloCategoryUrl, getAllZyloMappings } from '@/utils/zylo-mapping'

// 仅在开发环境下显示的测试组件
export default function ZyloMappingTest() {
  const [isVisible, setIsVisible] = useState(false)

  if (process.env.NODE_ENV !== 'development') {
    return null
  }

  const testProducts = [
    { flavor: 'Spearmint', category: 'spearmint' },
    { flavor: 'Cool Mint', category: 'mint' },
    { flavor: 'Citrus', category: 'citrus' },
    { flavor: 'Coffee', category: 'coffee' },
    { flavor: 'Wintergreen', category: 'wintergreen' },
    { flavor: 'Vanilla', category: 'sweet' },
    { flavor: 'Cinnamon', category: 'spice' },
  ]

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button
        onClick={() => setIsVisible(!isVisible)}
        className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-blue-700 transition-colors"
      >
        🔗 Test Zylo URLs
      </button>

      {isVisible && (
        <div className="absolute bottom-12 right-0 w-96 max-h-96 overflow-y-auto bg-white rounded-lg shadow-xl border p-4">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-bold text-lg">Zylo URL映射测试</h3>
            <button
              onClick={() => setIsVisible(false)}
              className="text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>
          </div>

          <div className="space-y-3">
            {testProducts.map(({ flavor, category }) => (
              <div key={flavor} className="border-b pb-2">
                <h4 className="font-medium text-sm text-gray-900">{flavor}</h4>
                
                <div className="text-xs space-y-1">
                  <div>
                    <span className="text-gray-600">产品: </span>
                    <a 
                      href={getZyloProductUrl(flavor)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      {getZyloProductUrl(flavor)}
                    </a>
                  </div>
                  
                  <div>
                    <span className="text-gray-600">类别: </span>
                    <a 
                      href={getZyloCategoryUrl(category)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      {getZyloCategoryUrl(category)}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 pt-2 border-t">
            <button
              onClick={() => {
                getAllZyloMappings()
                console.log('📋 Check console for full mapping details')
              }}
              className="text-xs bg-gray-100 px-2 py-1 rounded text-gray-700 hover:bg-gray-200"
            >
              📋 Log All Mappings
            </button>
          </div>
        </div>
      )}
    </div>
  )
}