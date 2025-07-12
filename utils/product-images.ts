import productImageMapping from '@/data/product-images.json'

export interface ProductImageInfo {
  webp: string
  svg: string
  category: string
  flavor: string
  strength: string
}

// 根据产品slug获取图片信息
export function getProductImage(slug: string): ProductImageInfo | null {
  return productImageMapping[slug as keyof typeof productImageMapping] || null
}

// 根据产品名称、口味和强度生成slug
export function generateProductSlug(name: string, flavor: string, strength: string): string {
  // 从产品名称中提取口味信息
  const cleanName = name.toLowerCase()
    .replace('zyn', '')
    .replace(/nicotine pouches?/gi, '')
    .replace(/pouches?/gi, '')
    .trim()
  
  // 生成标准化的slug
  const flavorSlug = flavor.toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '')
  
  const strengthSlug = strength.toLowerCase()
    .replace(/mg/i, 'mg')
  
  return `${flavorSlug}-${strengthSlug}`
}

// 获取产品的最佳图片URL (优先使用WebP，回退到SVG)
export function getProductImageUrl(slug: string): string {
  const imageInfo = getProductImage(slug)
  
  if (!imageInfo) {
    // 如果没有找到映射，尝试生成默认路径
    return `/products/placeholder.svg`
  }
  
  // 优先返回SVG，因为我们现在只有SVG图片
  return imageInfo.svg
}

// 获取产品图片的alt文本
export function getProductImageAlt(productName: string, flavor: string, strength: string): string {
  return `${productName} - ${flavor} flavor nicotine pouches, ${strength} strength - Premium tobacco-free smokeless nicotine product for adults 21+`
}

// 获取所有可用的产品图片
export function getAllProductImages(): Record<string, ProductImageInfo> {
  return productImageMapping
}

// 根据类别获取产品图片
export function getProductImagesByCategory(category: string): Record<string, ProductImageInfo> {
  const result: Record<string, ProductImageInfo> = {}
  
  Object.entries(productImageMapping).forEach(([slug, info]) => {
    if (info.category === category) {
      result[slug] = info
    }
  })
  
  return result
}

// 检查产品是否有图片
export function hasProductImage(slug: string): boolean {
  return slug in productImageMapping
}

// 获取产品的图片文件名（不包含路径）
export function getProductImageFilename(slug: string, format: 'webp' | 'svg' = 'svg'): string {
  const imageInfo = getProductImage(slug)
  if (!imageInfo) return 'placeholder.svg'
  
  const url = format === 'webp' ? imageInfo.webp : imageInfo.svg
  return url.split('/').pop() || 'placeholder.svg'
}

// 为产品生成完整的图片信息对象
export function createProductImageInfo(
  productName: string, 
  flavor: string, 
  strength: string,
  category: string
): ProductImageInfo {
  const slug = generateProductSlug(productName, flavor, strength)
  
  return {
    webp: `/products/${category}/${slug}.webp`,
    svg: `/products/${category}/${slug}.svg`,
    category,
    flavor: flavor.toLowerCase().replace(/\s+/g, '-'),
    strength: strength.toLowerCase()
  }
}