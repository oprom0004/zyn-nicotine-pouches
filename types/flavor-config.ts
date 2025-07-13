import { Product } from './index'

// 口味信息基础接口
export interface FlavorInfo {
  title: string
  description: string
  h1: string
  seoDescription: string
  flavorName: string
  benefits: string[]
  keywords: string[]
  lsiKeywords: string[]
}

// 主题配色配置
export interface ThemeConfig {
  primary: string      // 主色调 (如 blue-500, orange-500)
  secondary: string    // 次色调
  gradient: {
    from: string       // 渐变起始色 (如 green-50)
    to: string         // 渐变结束色 (如 blue-50)
  }
  accent: string       // 强调色
  urgencyGradient: {
    from: string       // 紧急度横幅渐变起始色
    to: string         // 紧急度横幅渐变结束色
  }
}

// 子分类配置项
export interface SubCategoryItem {
  name: string         // 显示名称
  value: string        // 筛选值
  emoji: string        // 表情符号
  description?: string // 描述文字 (如 "Classic refreshing")
  count?: number       // 产品数量 (动态计算)
}

// 子分类配置
export interface SubCategoryConfig {
  type: 'hardcoded' | 'dynamic'
  title: string        // 如 "Choose Flavors", "Choose Coffee", "Choose Strength"
  filterBy: 'flavor' | 'strength' | 'category'  // 筛选依据
  items?: SubCategoryItem[]  // 硬编码子分类列表
  dynamicSource?: 'flavor' | 'category' | 'strength'  // 动态获取来源
  emojiMapping?: { [key: string]: string }  // 动态类型的emoji映射
}

// FAQ配置
export interface FAQItem {
  question: string
  answer: string
}

// 完整的口味页面配置
export interface FlavorPageConfig {
  // 基础信息
  flavorInfo: FlavorInfo
  
  // 主题配色
  theme: ThemeConfig
  
  // 子分类配置
  subCategories: SubCategoryConfig
  
  // 产品筛选逻辑
  filterLogic: (products: Product[]) => Product[]
  
  // 页面URL slug
  slug: string
  
  // FAQ配置
  faqs: FAQItem[]
  
  // 教育内容配置
  educationSection?: {
    title: string
    content: string[]
  }
  
  // 紧急度文案
  urgencyText: {
    prefix: string     // 如 "High Demand:", "Coffee Lovers' Choice:"
    suffix: string     // 如 "products selling fast this week!"
  }
}