# 口味页面创建指南

## 🎯 组件化系统概述

现在创建新的口味页面只需要**两个文件**：
1. 配置文件 (`/config/flavors/xxx.ts`)
2. 页面文件 (`/app/xxx-flavors-nicotine-pouches/page.tsx`)

不再需要复制重复的FlavorCategoryClient组件！

## 📋 创建新口味页面步骤

### 步骤1: 创建配置文件

在 `/config/flavors/` 目录下创建新的配置文件：

```typescript
// /config/flavors/your-flavor.ts
import { FlavorPageConfig } from '@/types/flavor-config'

export const yourFlavorConfig: FlavorPageConfig = {
  // 基础信息
  flavorInfo: {
    title: 'Your Flavor Nicotine Pouches',
    description: '描述文字...',
    h1: 'H1标题',
    seoDescription: 'SEO描述...',
    flavorName: 'your-flavor',
    benefits: ['好处1', '好处2', '好处3'],
    keywords: ['关键词1', '关键词2'],
    lsiKeywords: ['相关词1', '相关词2']
  },

  // 主题配色
  theme: {
    primary: 'color-500',        // 主色调
    secondary: 'color2-500',     // 辅助色
    gradient: {
      from: 'color-50',          // 渐变起始
      to: 'color2-50'            // 渐变结束
    },
    accent: 'color-600',         // 强调色
    urgencyGradient: {
      from: 'color-500',
      to: 'color2-500'
    }
  },

  // 子分类配置
  subCategories: {
    type: 'hardcoded' | 'dynamic',  // 选择类型
    title: 'Choose Your Category',
    // 硬编码方式:
    items: [
      { name: '显示名', value: '筛选值', emoji: '🎯', description: '描述' }
    ],
    // 动态方式:
    // dynamicSource: 'flavor' | 'category',
    // emojiMapping: { 'FlavorName': '🎯' }
  },

  // 产品筛选逻辑
  filterLogic: (allProducts) => {
    return allProducts.filter(product => 
      // 你的筛选条件
      product.category === 'your-category'
    )
  },

  slug: 'your-flavor-flavors-nicotine-pouches',
  faqs: [/* FAQ数组 */],
  urgencyText: {
    prefix: 'Your Prefix:',
    suffix: 'your suffix text!'
  }
}
```

### 步骤2: 创建页面文件

```typescript
// /app/your-flavor-flavors-nicotine-pouches/page.tsx
import { Metadata } from 'next'
import { products } from '@/data/products'
import FlavorCategoryClient from '@/components/FlavorCategoryClient'
import { yourFlavorConfig } from '@/config/flavors/your-flavor'

export async function generateMetadata(): Promise<Metadata> {
  const config = yourFlavorConfig
  
  return {
    title: `${config.flavorInfo.title} | Premium Tobacco-Free Collection | Zyn`,
    description: config.flavorInfo.seoDescription,
    keywords: config.flavorInfo.keywords.join(', '),
    openGraph: {
      title: `${config.flavorInfo.title} | Zyn Collection`,
      description: config.flavorInfo.description,
      url: `https://nicotinepoucheszyn.com/${config.slug}`,
    },
    alternates: {
      canonical: `https://nicotinepoucheszyn.com/${config.slug}`,
    },
  }
}

export default function YourFlavorPage() {
  return (
    <FlavorCategoryClient 
      config={yourFlavorConfig}
      products={products}
    />
  )
}
```

### 步骤3: 更新导出索引

在 `/config/flavors/index.ts` 中添加：

```typescript
export { yourFlavorConfig } from './your-flavor'
```

## 🎨 主题配色选择

常用配色方案：

- **薄荷系**: `blue-500, green-500, green-50, blue-50`
- **柑橘系**: `orange-500, yellow-500, orange-50, yellow-50`
- **咖啡系**: `amber-500, orange-500, amber-50, orange-50`
- **浆果系**: `purple-500, pink-500, purple-50, pink-50`
- **樱桃系**: `red-500, pink-500, red-50, pink-50`
- **薄荷绿**: `emerald-500, teal-500, emerald-50, teal-50`

## 🔧 筛选逻辑配置

### 硬编码子分类 (推荐)
适用于明确知道子分类的情况：

```typescript
subCategories: {
  type: 'hardcoded',
  title: 'Choose Flavors',
  items: [
    { name: 'Cool Mint', value: 'Cool Mint', emoji: '❄️', description: 'Classic refreshing' },
    { name: 'Spearmint', value: 'Spearmint', emoji: '🌱', description: 'Sweet & fresh' }
  ]
}
```

### 动态子分类
适用于需要根据产品数据动态生成的情况：

```typescript
subCategories: {
  type: 'dynamic',
  title: 'Choose Flavors',
  dynamicSource: 'flavor', // 或 'category'
  emojiMapping: {
    'Citrus': '🍊',
    'Lemon': '🍋'
  }
}
```

## 📝 产品筛选逻辑示例

```typescript
// 简单类别筛选
filterLogic: (allProducts) => allProducts.filter(p => p.category === 'mint')

// 复杂组合筛选
filterLogic: (allProducts) => allProducts.filter(product => 
  ['Cool Mint', 'Spearmint'].includes(product.flavor) ||
  (product.category === 'mint' && !product.flavor.includes('wintergreen'))
)

// 多类别筛选
filterLogic: (allProducts) => allProducts.filter(product => 
  product.category === 'coffee' || 
  ['Coffee', 'Espresso'].includes(product.flavor)
)
```

## ✅ 优势总结

1. **减少重复**: 从7个重复文件减少到1个通用组件
2. **易于维护**: 修改功能只需改一个地方
3. **一致性**: 所有页面自动保持设计一致
4. **快速创建**: 新页面只需配置，无需编程
5. **类型安全**: TypeScript确保配置正确性
6. **主题统一**: 配色自动应用到所有UI元素

## 🎯 创建新页面只需要：

1. 复制配置模板
2. 修改配置内容
3. 创建页面文件
4. 完成！

整个过程不超过10分钟，而且保证与现有页面完全一致的体验！