import { FlavorPageConfig } from '@/types/flavor-config'
import { products } from '@/data/products'

export const mintFlavorConfig: FlavorPageConfig = {
  // 基础信息
  flavorInfo: {
    title: 'Cool Mint & Spearmint Nicotine Pouches',
    description: 'Experience refreshing mint flavors nicotine pouches with cool mint, spearmint, and menthol. Premium tobacco-free mint pouches for ultimate freshness.',
    h1: 'Refreshing Mint Flavor Nicotine Pouches Collection',
    seoDescription: 'Shop premium mint flavors nicotine pouches with cool mint, spearmint, menthol flavors. Tobacco-free mint pouches in all strengths. Order online today.',
    flavorName: 'mint',
    benefits: [
      'Refreshing mint sensation',
      'Long-lasting flavor',
      'Cool menthol effect',
      'Fresh breath experience'
    ],
    keywords: [
      'mint flavors nicotine pouches',
      'mint tobacco free pouches',
      'cool mint nicotine pouches',
      'spearmint nicotine pouches',
      'menthol nicotine pouches',
      'mint flavor tobacco free',
      'refreshing nicotine pouches',
      'fresh mint pouches',
      'mint fresh pouches',
      'cooling mint nicotine',
      'premium mint pouches',
      'buy mint flavors nicotine pouches',
      'zyn mint nicotine pouches',
      'refreshing mint taste'
    ],
    lsiKeywords: [
      'mint tobacco-free products',
      'smokeless mint nicotine',
      'menthol-based nicotine delivery',
      'natural mint extracts',
      'cooling sensation profile',
      'mint harm reduction',
      'refreshing mint alternative',
      'winter mint experience',
      'arctic mint blend',
      'energizing mint pouches'
    ]
  },

  // 主题配色
  theme: {
    primary: 'blue-500',
    secondary: 'green-500',
    gradient: {
      from: 'green-50',
      to: 'blue-50'
    },
    accent: 'green-600',
    urgencyGradient: {
      from: 'orange-500',
      to: 'red-500'
    }
  },

  // 子分类配置
  subCategories: {
    type: 'hardcoded',
    title: 'Choose Flavors',
    filterBy: 'flavor',
    items: [
      {
        name: 'Cool Mint',
        value: 'Cool Mint',
        emoji: '❄️',
        description: 'Classic refreshing'
      },
      {
        name: 'Spearmint',
        value: 'Spearmint',
        emoji: '🌱',
        description: 'Sweet & fresh'
      },
      {
        name: 'Menthol',
        value: 'Menthol',
        emoji: '💨',
        description: 'Intense cooling'
      }
    ]
  },

  // 产品筛选逻辑
  filterLogic: (allProducts) => {
    return allProducts.filter(product => 
      ['Cool Mint', 'Menthol', 'Spearmint'].includes(product.flavor) ||
      (['mint', 'spearmint'].includes(product.category.toLowerCase()) && 
       !product.flavor.toLowerCase().includes('wintergreen'))
    )
  },

  // 页面URL slug
  slug: 'mint-flavors-nicotine-pouches',

  // FAQ配置
  faqs: [
    {
      question: 'What makes mint flavor nicotine pouches special?',
      answer: 'Our mint flavor nicotine pouches offer authentic mint taste with cooling sensation that provides long-lasting satisfaction. Each mint flavor variety is crafted with premium ingredients and tobacco-free formulation for the ultimate mint flavor experience.'
    },
    {
      question: 'What mint flavor varieties are available?',
      answer: 'We offer mint flavor nicotine pouches in cool mint, spearmint, and menthol varieties. Each mint flavor type is available in multiple strengths to suit different preferences and experience levels.'
    },
    {
      question: 'How long does the mint flavor last?',
      answer: 'Our mint flavor nicotine pouches are designed to deliver consistent mint flavor for 30-60 minutes. The mint flavor intensity remains strong throughout use, providing fresh breath and cooling sensation.'
    }
  ],

  // 教育内容配置
  educationSection: {
    title: 'Why Choose Mint Flavor Nicotine Pouches?',
    content: [
      'Mint flavor nicotine pouches offer the perfect balance of refreshing taste and nicotine satisfaction. Our mint flavor collection includes cool mint, spearmint, and menthol varieties, each delivering a unique mint flavor experience that lasts for hours.',
      'Whether you prefer the classic cool mint flavor or the intense menthol sensation, our mint flavor nicotine pouches provide consistent quality and authentic taste. Every mint flavor pouch is tobacco-free and designed for adults seeking a premium mint flavor alternative.'
    ]
  },

  // 紧急度文案
  urgencyText: {
    prefix: 'High Demand:',
    suffix: 'mint flavor products selling fast this week!'
  }
}