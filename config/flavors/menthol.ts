import { FlavorPageConfig } from '@/types/flavor-config'

export const mentholFlavorConfig: FlavorPageConfig = {
  // 基础信息
  flavorInfo: {
    title: 'Menthol Nicotine Pouches',
    description: 'Experience intense menthol nicotine pouches with powerful cooling sensation and invigorating mint taste. Premium tobacco-free menthol pouches for maximum freshness.',
    h1: 'Menthol Nicotine Pouches - Intense Cooling',
    seoDescription: 'Shop premium menthol nicotine pouches with intense cooling sensation and strong mint flavor. Tobacco-free, maximum freshness in all strengths. Order online today.',
    flavorName: 'menthol',
    benefits: [
      'Intense Menthol Cooling',
      'Powerful Mint Sensation',
      'Maximum Freshness',
      'Invigorating Experience',
      'Tobacco-Free Formula',
      'Strong Cooling Effect'
    ],
    keywords: [
      'menthol nicotine pouches',
      'menthol tobacco free pouches',
      'intense cooling nicotine pouches',
      'strong mint flavor pouches',
      'menthol zyn alternative',
      'cooling menthol pouches',
      'intense mint nicotine',
      'menthol cooling sensation',
      'premium menthol pouches',
      'buy menthol nicotine pouches',
      'menthol flavor tobacco free',
      'strong menthol pouches'
    ],
    lsiKeywords: [
      'menthol tobacco-free products',
      'smokeless menthol nicotine',
      'natural menthol crystals',
      'intense cooling sensation',
      'menthol extract flavor',
      'menthol harm reduction',
      'refreshing menthol alternative',
      'arctic menthol experience',
      'menthol blend',
      'energizing menthol pouches'
    ]
  },

  // 主题配色 - 深蓝冰爽系
  theme: {
    primary: 'indigo-500',
    secondary: 'blue-600',
    gradient: {
      from: 'indigo-50',
      to: 'blue-50'
    },
    accent: 'indigo-600',
    urgencyGradient: {
      from: 'indigo-500',
      to: 'blue-600'
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

  // 产品筛选配置 - 只显示Menthol产品
  filterConfig: {
    type: 'single-flavor',
    flavors: ['Menthol']
  },

  // 页面URL slug
  slug: 'mint-flavors-nicotine-pouches/menthol',

  // FAQ配置
  faqs: [
    {
      question: 'What makes menthol nicotine pouches special?',
      answer: 'Menthol nicotine pouches provide the most intense cooling sensation among mint flavors. They deliver a powerful, invigorating experience with strong menthol crystals that create a long-lasting cooling effect.'
    },
    {
      question: 'How intense is the menthol cooling sensation?',
      answer: 'Menthol provides the strongest cooling effect in our mint collection. It\'s significantly more intense than cool mint or spearmint, perfect for users who want maximum freshness and a powerful mint experience.'
    },
    {
      question: 'Are menthol pouches too strong for beginners?',
      answer: 'While menthol has an intense flavor, it\'s available in lower nicotine strengths (1mg-2mg) that make it suitable for beginners who enjoy strong mint flavors. Start with lighter strengths to assess your preference.'
    },
    {
      question: 'How long does the menthol cooling last?',
      answer: 'Menthol nicotine pouches provide the longest-lasting cooling sensation, typically maintaining intense freshness for the full 30-60 minute duration and often leaving a lingering cool effect.'
    }
  ],

  // 教育内容配置
  educationSection: {
    title: 'Why Choose Menthol Nicotine Pouches?',
    content: [
      'Menthol represents the pinnacle of cooling sensation in nicotine pouches. For users who crave intense freshness and maximum mint impact, menthol delivers an unmatched experience that invigorates the senses.',
      'Our menthol formulation uses premium menthol crystals to create a powerful cooling effect that\'s both immediate and long-lasting. This intense sensation makes menthol perfect for users who find other mint flavors too mild.',
      'Ideal for hot weather, stressful situations, or anytime you need a powerful refreshing boost, menthol nicotine pouches provide the strongest mint experience available in tobacco-free form.'
    ]
  },

  // 紧急度文案
  urgencyText: {
    prefix: 'Intense Cooling Choice:',
    suffix: 'menthol pouches for maximum freshness flying off shelves!'
  }
}