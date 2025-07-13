// Zylo Pouch URL映射工具
// 临时方案：将我们的产品和类别映射到 zylopouch.com

export interface ZyloMapping {
  productUrl: string
  categoryUrl: string
}

// 口味到Zylo URL的映射
const flavorToZyloMapping: Record<string, string> = {
  // Mint系列
  'Cool Mint': 'cool-mint',
  'Peppermint': 'peppermint', 
  'Menthol': 'menthol',
  'Chill': 'mint', // 如果Zylo没有Chill，映射到通用mint
  
  // Spearmint系列
  'Spearmint': 'spearmint',
  
  // Wintergreen系列
  'Wintergreen': 'wintergreen',
  
  // Citrus系列
  'Citrus': 'citrus',
  'Lemon': 'lemon',
  
  // Coffee系列
  'Coffee': 'coffee',
  'Espresso': 'espresso',
  
  // Berry系列
  'Berry': 'berry',
  
  // Sweet系列
  'Vanilla': 'vanilla',
  'Smooth': 'smooth', // 如果没有则映射到vanilla
  
  // Spice系列
  'Cinnamon': 'cinnamon',
}

// 类别到Zylo URL的映射（新的外链策略）
const categoryToZyloMapping: Record<string, string> = {
  'mint': 'https://zylopouch.com/product-category/mint-pouches/',
  'spearmint': 'https://zylopouch.com/product-category/mint-pouches/', // Spearmint归入mint类别
  'fruit': 'https://zylopouch.com/product-category/fruit-pouches/',
  'berry': 'https://zylopouch.com/product/berry-nicotine-pouches/',
  'citrus': 'https://zylopouch.com/product/citrus-nicotine-pouches/',
  'wintergreen': 'https://zylopouch.com/product/wintergreen-nicotine-pouches/',
  'spice': 'https://zylopouch.com/product/spearmint-moist/',
}

/**
 * 根据产品信息生成Zylo产品页面URL
 */
export function getZyloProductUrl(flavor: string): string {
  const baseUrl = 'https://zylopouch.com/product/'
  
  // 获取映射的口味slug
  const flavorSlug = flavorToZyloMapping[flavor] || flavor.toLowerCase().replace(/\s+/g, '-')
  
  return `${baseUrl}${flavorSlug}-nicotine-pouches/`
}

/**
 * 根据类别生成Zylo类别页面URL
 */
export function getZyloCategoryUrl(category: string): string {
  // 直接映射的类别
  if (categoryToZyloMapping[category]) {
    return categoryToZyloMapping[category]
  }
  
  // 其他无法分类的类别，随机分配到两个URL
  const otherUrls = [
    'https://zylopouch.com/products/',
    'https://zylopouch.com/'
  ]
  
  // 基于类别名称的简单哈希，确保同一类别总是分配到同一个URL
  const hash = category.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0)
  return otherUrls[hash % 2]
}

/**
 * 获取Zylo首页URL
 */
export function getZyloHomeUrl(): string {
  return 'https://zylopouch.com/'
}

/**
 * 在新窗口打开Zylo URL
 */
export function openZyloUrl(url: string): void {
  window.open(url, '_blank')
}

/**
 * 获取产品的完整Zylo映射信息
 */
export function getProductZyloMapping(flavor: string, category: string): ZyloMapping {
  return {
    productUrl: getZyloProductUrl(flavor),
    categoryUrl: getZyloCategoryUrl(category)
  }
}

/**
 * 直接跳转到产品对应的Zylo页面
 */
export function redirectToZyloProduct(flavor: string): void {
  const url = getZyloProductUrl(flavor)
  openZyloUrl(url)
}

/**
 * 直接跳转到类别对应的Zylo页面  
 */
export function redirectToZyloCategory(category: string): void {
  const url = getZyloCategoryUrl(category)
  openZyloUrl(url)
}

// 调试用：显示所有映射
export function getAllZyloMappings() {
  console.log('🔗 Zylo URL Mappings:')
  console.log('Flavors:', flavorToZyloMapping)
  console.log('Categories:', categoryToZyloMapping)
  
  // 示例URL
  console.log('\n📝 Example URLs:')
  console.log('Spearmint:', getZyloProductUrl('Spearmint'))
  console.log('Cool Mint:', getZyloProductUrl('Cool Mint'))
  console.log('Mint Category:', getZyloCategoryUrl('mint'))
}

// 开发环境下显示映射信息
if (process.env.NODE_ENV === 'development') {
  // getAllZyloMappings()
}