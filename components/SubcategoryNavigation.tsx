import Link from 'next/link'

interface SubcategoryItem {
  name: string
  href: string
  description: string
  emoji: string
  gradient: string
  borderColor: string
  textColor: string
}

interface SubcategoryNavigationProps {
  title: string
  subtitle: string
  items: SubcategoryItem[]
  products: any[]
}

export default function SubcategoryNavigation({ 
  title, 
  subtitle, 
  items, 
  products 
}: SubcategoryNavigationProps) {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {title}
            </h2>
            <p className="text-lg text-gray-600">
              {subtitle}
            </p>
          </div>
          
          <div className={`grid ${items.length === 2 ? 'md:grid-cols-2' : 'md:grid-cols-3'} gap-6`}>
            {items.map((item, index) => {
              // Calculate product count for this subcategory
              const productCount = products.filter(p => 
                p.flavor === item.name || 
                p.category === item.name.toLowerCase()
              ).length;

              return (
                <Link key={index} href={item.href} className="group">
                  <div className={`${item.gradient} p-6 rounded-2xl border-2 ${item.borderColor} hover:border-opacity-75 transition-all duration-300 hover:scale-105 hover:shadow-lg`}>
                    <div className="text-center">
                      <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-gray-500 to-gray-600 rounded-full flex items-center justify-center">
                        <span className="text-2xl">{item.emoji}</span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{item.name}</h3>
                      <p className="text-gray-600 text-sm mb-3">
                        {item.description}
                      </p>
                      <div className={`${item.textColor} text-sm font-medium`}>
                        {productCount} products available
                      </div>
                      <div className={`mt-3 ${item.textColor} group-hover:opacity-80 font-medium`}>
                        Explore {item.name} →
                      </div>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-500 text-sm">
              Each specialized collection offers unique experiences tailored to your preferences
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}