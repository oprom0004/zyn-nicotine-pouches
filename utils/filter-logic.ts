import { Product } from '@/types'
import { FilterConfig } from '@/types/flavor-config'

export function applyFilterLogic(products: Product[], filterConfig: FilterConfig): Product[] {
  switch (filterConfig.type) {
    case 'simple-category':
      // 简单类别筛选: product.category === category
      if (filterConfig.category && typeof filterConfig.category === 'string') {
        return products.filter(product => product.category === filterConfig.category)
      }
      break

    case 'multi-category':
      // 多类别筛选: product.category 在指定类别列表中
      if (filterConfig.category && Array.isArray(filterConfig.category)) {
        return products.filter(product => filterConfig.category!.includes(product.category))
      }
      break

    case 'single-flavor':
      // 单一口味筛选: product.flavor === flavor
      if (filterConfig.flavors && filterConfig.flavors.length === 1) {
        return products.filter(product => product.flavor === filterConfig.flavors![0])
      }
      break

    case 'complex-flavor':
      // 复杂口味筛选: 包含指定flavors，排除excludeFlavors，支持类别+口味组合
      let filtered = products

      // 如果指定了类别，先按类别筛选
      if (filterConfig.category) {
        if (typeof filterConfig.category === 'string') {
          filtered = filtered.filter(product => product.category === filterConfig.category)
        } else {
          filtered = filtered.filter(product => filterConfig.category!.includes(product.category))
        }
      }

      // 如果指定了包含的口味
      if (filterConfig.flavors && filterConfig.flavors.length > 0) {
        filtered = filtered.filter(product => 
          filterConfig.flavors!.includes(product.flavor)
        )
      }

      // 排除不需要的口味
      if (filterConfig.excludeFlavors && filterConfig.excludeFlavors.length > 0) {
        filtered = filtered.filter(product => 
          !filterConfig.excludeFlavors!.includes(product.flavor)
        )
      }

      return filtered

    default:
      return products
  }

  return products
}