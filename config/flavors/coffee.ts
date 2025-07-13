import { FlavorPageConfig } from '@/types/flavor-config'

export const coffeeFlavorConfig: FlavorPageConfig = {
  // 基础信息
  flavorInfo: {
    title: 'Coffee & Espresso Nicotine Pouches',
    description: 'Discover our premium coffee flavor nicotine pouches featuring rich coffee and bold espresso varieties. Perfect for coffee lovers seeking a tobacco-free experience.',
    h1: 'Premium Coffee Flavor Nicotine Pouches',
    seoDescription: 'Shop coffee flavor nicotine pouches including Coffee and Espresso varieties. Tobacco-free, premium quality with rich, authentic coffee taste. Free shipping over $25.',
    flavorName: 'coffee',
    benefits: [
      'Rich Authentic Coffee Taste',
      'Perfect for Morning Routines',
      'Tobacco-Free Experience',
      'Long-Lasting Flavor',
      'Premium Quality Ingredients',
      'Various Nicotine Strengths'
    ],
    keywords: [
      'coffee nicotine pouches',
      'espresso nicotine pouches',
      'coffee flavor pouches',
      'tobacco-free coffee',
      'premium coffee pouches',
      'coffee zyn alternatives'
    ],
    lsiKeywords: [
      'coffee taste nicotine pouches',
      'espresso flavored pouches',
      'morning coffee pouches',
      'rich coffee flavor',
      'coffee lovers nicotine',
      'authentic coffee experience'
    ]
  },

  // 主题配色
  theme: {
    primary: 'amber-500',
    secondary: 'orange-500',
    gradient: {
      from: 'amber-50',
      to: 'orange-50'
    },
    accent: 'orange-600',
    urgencyGradient: {
      from: 'amber-500',
      to: 'orange-500'
    }
  },

  // 子分类配置
  subCategories: {
    type: 'hardcoded',
    title: 'Choose Coffee',
    filterBy: 'flavor',
    items: [
      {
        name: 'Coffee',
        value: 'Coffee',
        emoji: '☕'
      },
      {
        name: 'Espresso',
        value: 'Espresso',
        emoji: '🔥'
      }
    ]
  },

  // 产品筛选逻辑
  filterLogic: (allProducts) => {
    return allProducts.filter(product => 
      product.category === 'coffee' || 
      ['Coffee', 'Espresso'].includes(product.flavor)
    )
  },

  // 页面URL slug
  slug: 'coffee-flavors-nicotine-pouches',

  // FAQ配置
  faqs: [
    {
      question: 'What makes coffee flavor nicotine pouches special?',
      answer: 'Our coffee flavor nicotine pouches offer authentic coffee and espresso taste profiles that provide a rich, satisfying experience perfect for coffee lovers seeking a tobacco-free alternative.'
    },
    {
      question: 'What coffee varieties are available?',
      answer: 'We offer coffee nicotine pouches in classic Coffee and bold Espresso flavors, available in multiple nicotine strengths to suit different preferences and experience levels.'
    }
  ],

  // 紧急度文案
  urgencyText: {
    prefix: 'Coffee Lovers\' Choice:',
    suffix: 'coffee flavor products selling fast this week!'
  }
}