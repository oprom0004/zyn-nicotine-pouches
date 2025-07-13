import { FlavorPageConfig } from '@/types/flavor-config'

export const spearmintFlavorConfig: FlavorPageConfig = {
  // 基础信息
  flavorInfo: {
    title: 'Spearmint Nicotine Pouches',
    description: 'Enjoy sweet spearmint flavor nicotine pouches with gentle mint taste and natural freshness. Premium tobacco-free spearmint pouches for a smooth mint experience.',
    h1: 'Spearmint Nicotine Pouches - Sweet & Fresh',
    seoDescription: 'Shop premium spearmint nicotine pouches with sweet mint flavor and gentle freshness. Tobacco-free, smooth taste in all strengths. Order online today.',
    flavorName: 'spearmint',
    benefits: [
      'Sweet Spearmint Flavor',
      'Gentle Mint Sensation',
      'Natural Fresh Taste',
      'Smooth & Balanced',
      'Tobacco-Free Formula',
      'Multiple Nicotine Strengths'
    ],
    keywords: [
      'spearmint nicotine pouches',
      'spearmint tobacco free pouches',
      'sweet mint nicotine pouches',
      'gentle mint flavor pouches',
      'spearmint zyn alternative',
      'natural spearmint pouches',
      'smooth mint nicotine',
      'fresh spearmint pouches',
      'premium spearmint pouches',
      'buy spearmint nicotine pouches',
      'spearmint flavor tobacco free',
      'sweet mint pouches'
    ],
    lsiKeywords: [
      'spearmint tobacco-free products',
      'smokeless spearmint nicotine',
      'natural spearmint extracts',
      'sweet mint sensation',
      'spearmint leaf flavor',
      'spearmint harm reduction',
      'refreshing spearmint alternative',
      'garden mint experience',
      'spearmint blend',
      'energizing spearmint pouches'
    ]
  },

  // 主题配色 - 绿色自然系
  theme: {
    primary: 'green-500',
    secondary: 'emerald-500',
    gradient: {
      from: 'green-50',
      to: 'emerald-50'
    },
    accent: 'green-600',
    urgencyGradient: {
      from: 'green-500',
      to: 'emerald-500'
    }
  },

  // 子分类配置 - 按强度分类
  subCategories: {
    type: 'hardcoded',
    title: 'Choose Strength',
    filterBy: 'strength',
    items: [
      {
        name: '1mg',
        value: '1mg',
        emoji: '🟢',
        description: 'Light strength'
      },
      {
        name: '2mg',
        value: '2mg',
        emoji: '🟡',
        description: 'Mild strength'
      },
      {
        name: '3mg',
        value: '3mg',
        emoji: '🟠',
        description: 'Medium strength'
      },
      {
        name: '6mg',
        value: '6mg',
        emoji: '🟣',
        description: 'Strong strength'
      }
    ]
  },

  // 产品筛选逻辑 - 只显示Spearmint产品
  filterLogic: (allProducts) => {
    return allProducts.filter(product => 
      product.flavor === 'Spearmint'
    )
  },

  // 页面URL slug
  slug: 'mint-flavors-nicotine-pouches/spearmint',

  // FAQ配置
  faqs: [
    {
      question: 'What makes spearmint nicotine pouches different from other mint flavors?',
      answer: 'Spearmint offers a sweeter, more gentle mint flavor compared to cool mint or menthol. It provides natural freshness without the intense cooling sensation, making it perfect for those who prefer a smoother mint experience.'
    },
    {
      question: 'Is spearmint flavor naturally sweet?',
      answer: 'Yes, spearmint naturally has a sweeter profile than other mint varieties. Our spearmint nicotine pouches capture this natural sweetness without artificial additives, providing an authentic spearmint leaf flavor.'
    },
    {
      question: 'What nicotine strengths are available in spearmint?',
      answer: 'Spearmint nicotine pouches are available in multiple strengths from 1mg to 6mg, allowing you to choose the perfect nicotine level for your preferences and experience.'
    },
    {
      question: 'How long does the spearmint flavor last?',
      answer: 'Spearmint nicotine pouches provide consistent flavor for 30-60 minutes. The sweet mint taste remains pleasant throughout use, offering lasting freshness and satisfaction.'
    }
  ],

  // 教育内容配置
  educationSection: {
    title: 'Why Choose Spearmint Nicotine Pouches?',
    content: [
      'Spearmint offers a naturally sweet and gentle alternative to traditional mint flavors. Unlike the intense cooling of menthol or the sharpness of peppermint, spearmint provides a smooth, balanced mint experience that\'s perfect for everyday use.',
      'Our spearmint nicotine pouches capture the essence of fresh spearmint leaves, delivering authentic flavor that\'s both refreshing and comforting. The natural sweetness makes it an excellent choice for users who find other mint flavors too intense.',
      'Whether you\'re new to nicotine pouches or a seasoned user looking for a milder mint option, spearmint provides consistent satisfaction with every use.'
    ]
  },

  // 紧急度文案
  urgencyText: {
    prefix: 'Sweet Mint Favorite:',
    suffix: 'spearmint pouches in high demand this week!'
  }
}