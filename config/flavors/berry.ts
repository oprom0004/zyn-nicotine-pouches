import { FlavorPageConfig } from '@/types/flavor-config'

export const berryFlavorConfig: FlavorPageConfig = {
  // 基础信息
  flavorInfo: {
    title: 'Berry & Fruit Nicotine Pouches',
    description: 'Indulge in sweet berry flavors nicotine pouches with strawberry, blueberry, and mixed berry. Premium tobacco-free berry pouches for fruity satisfaction.',
    h1: 'Sweet Berry Flavor Nicotine Pouches Collection',
    seoDescription: 'Shop premium berry flavors nicotine pouches with strawberry, blueberry, mixed berry flavors. Tobacco-free berry pouches in all strengths. Order online today.',
    flavorName: 'berry',
    benefits: [
      'Sweet berry explosion',
      'Natural fruit flavors',
      'Long-lasting sweetness',
      'Summer fruit experience'
    ],
    keywords: [
      'berry flavors nicotine pouches',
      'berry tobacco free pouches',
      'strawberry nicotine pouches',
      'blueberry nicotine pouches',
      'mixed berry nicotine pouches',
      'berry flavor tobacco free',
      'sweet nicotine pouches',
      'fruit flavored nicotine pouches',
      'berry fresh pouches',
      'sweet berry nicotine',
      'premium berry pouches',
      'buy berry flavors nicotine pouches',
      'zyn berry nicotine pouches',
      'refreshing berry taste'
    ],
    lsiKeywords: [
      'berry tobacco-free products',
      'smokeless berry nicotine',
      'fruit-based nicotine delivery',
      'natural berry extracts',
      'antioxidant flavor profile',
      'berry harm reduction',
      'refreshing fruit alternative',
      'summer berry experience',
      'wild berry blend',
      'energizing fruit pouches'
    ]
  },

  // 主题配色 - 使用紫红色系
  theme: {
    primary: 'purple-500',
    secondary: 'pink-500',
    gradient: {
      from: 'purple-50',
      to: 'pink-50'
    },
    accent: 'red-600',
    urgencyGradient: {
      from: 'purple-500',
      to: 'pink-500'
    }
  },

  // 子分类配置
  subCategories: {
    type: 'hardcoded',
    title: 'Choose Berries',
    filterBy: 'flavor',
    items: [
      {
        name: 'Strawberry',
        value: 'Strawberry',
        emoji: '🍓',
        description: 'Sweet & juicy'
      },
      {
        name: 'Blueberry',
        value: 'Blueberry',
        emoji: '🫐',
        description: 'Tart & fresh'
      },
      {
        name: 'Mixed Berry',
        value: 'Mixed Berry',
        emoji: '🍇',
        description: 'Berry medley'
      }
    ]
  },

  // 产品筛选配置
  filterConfig: {
    type: 'complex-flavor',
    category: ['berry', 'fruit'],
    flavors: ['Strawberry', 'Blueberry', 'Mixed Berry', 'Berry']
  },

  // 页面URL slug
  slug: 'berry-flavors-nicotine-pouches',

  // FAQ配置
  faqs: [
    {
      question: 'What makes berry flavor nicotine pouches special?',
      answer: 'Our berry flavor nicotine pouches offer authentic fruit taste with natural sweetness that provides long-lasting satisfaction. Each berry flavor variety is crafted with premium ingredients and tobacco-free formulation for the ultimate fruity experience.'
    },
    {
      question: 'What berry varieties are available?',
      answer: 'We offer berry flavor nicotine pouches in strawberry, blueberry, and mixed berry flavors, available in multiple nicotine strengths to suit different preferences and experience levels.'
    },
    {
      question: 'Are berry flavors naturally sweetened?',
      answer: 'Yes, our berry flavor nicotine pouches use natural fruit flavoring to deliver authentic berry taste without artificial sweeteners, providing a naturally sweet and satisfying experience.'
    }
  ],

  // 教育内容配置
  educationSection: {
    title: 'Why Choose Berry Flavor Nicotine Pouches?',
    content: [
      'Berry flavor nicotine pouches combine the sweetness of natural fruit flavors with the satisfaction of nicotine delivery. Our berry collection includes strawberry, blueberry, and mixed berry varieties, each offering a unique fruity experience.',
      'Perfect for those who prefer sweeter flavors over traditional mint or tobacco options, our berry flavor nicotine pouches provide consistent quality and authentic fruit taste in every pouch.'
    ]
  },

  // 紧急度文案
  urgencyText: {
    prefix: 'Berry Lovers\' Choice:',
    suffix: 'berry flavor products selling fast this week!'
  }
}