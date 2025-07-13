import { FlavorPageConfig } from '@/types/flavor-config'

export const lemonFlavorConfig: FlavorPageConfig = {
  // 基础信息
  flavorInfo: {
    title: 'Lemon Nicotine Pouches',
    description: 'Experience crisp lemon flavor nicotine pouches with tart citrus burst and refreshing zest. Premium tobacco-free lemon pouches for sharp, clean satisfaction.',
    h1: 'Lemon Nicotine Pouches - Crisp & Refreshing',
    seoDescription: 'Shop premium lemon nicotine pouches with tart citrus flavor and refreshing lemon zest. Tobacco-free, crisp taste in all strengths. Order online today.',
    flavorName: 'lemon',
    benefits: [
      'Crisp Lemon Flavor',
      'Tart Citrus Burst',
      'Refreshing Lemon Zest',
      'Clean Sharp Taste',
      'Tobacco-Free Formula',
      'Energizing Experience'
    ],
    keywords: [
      'lemon nicotine pouches',
      'lemon flavor nicotine pouches',
      'tart citrus pouches',
      'lemon zest nicotine',
      'crisp lemon pouches',
      'natural lemon pouches',
      'lemon zyn alternative',
      'fresh lemon flavor',
      'premium lemon pouches',
      'buy lemon nicotine pouches',
      'lemon flavor tobacco free',
      'refreshing lemon pouches'
    ],
    lsiKeywords: [
      'lemon tobacco-free products',
      'smokeless lemon nicotine',
      'natural lemon extracts',
      'citric acid flavor profile',
      'lemon zest sensation',
      'lemon harm reduction',
      'refreshing lemon alternative',
      'crisp citrus experience',
      'lemon citrus blend',
      'energizing lemon pouches'
    ]
  },

  // 主题配色 - 柠檬清新系
  theme: {
    primary: 'yellow-500',
    secondary: 'lime-500',
    gradient: {
      from: 'yellow-50',
      to: 'lime-50'
    },
    accent: 'yellow-600',
    urgencyGradient: {
      from: 'yellow-500',
      to: 'lime-500'
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

  // 产品筛选配置 - 只显示Lemon产品
  filterConfig: {
    type: 'single-flavor',
    flavors: ['Lemon']
  },

  // 页面URL slug
  slug: 'citrus-flavors-nicotine-pouches/lemon',

  // FAQ配置
  faqs: [
    {
      question: 'What makes lemon nicotine pouches unique?',
      answer: 'Lemon nicotine pouches provide a sharp, tart citrus experience with natural lemon zest. They offer a crisp, clean flavor that\'s both refreshing and energizing, perfect for those who prefer bright, acidic citrus profiles.'
    },
    {
      question: 'How tart are lemon flavor pouches?',
      answer: 'Our lemon pouches deliver authentic tart lemon flavor with natural citric sharpness. The tartness is balanced to provide refreshing satisfaction without being overpowering, offering a clean, crisp citrus experience.'
    },
    {
      question: 'Are lemon pouches good for beginners?',
      answer: 'Yes, lemon pouches are excellent for beginners who enjoy citrus flavors. The clean, familiar lemon taste combined with available lower nicotine strengths (1mg-2mg) makes them an approachable choice.'
    },
    {
      question: 'How long does the lemon flavor last?',
      answer: 'Lemon nicotine pouches maintain their crisp, tart flavor for 30-60 minutes. The natural lemon oils provide consistent taste throughout use, leaving a clean, refreshing finish.'
    }
  ],

  // 教育内容配置
  educationSection: {
    title: 'Why Choose Lemon Nicotine Pouches?',
    content: [
      'Lemon offers the sharpest, most refreshing experience in the citrus family. This classic flavor delivers an immediate burst of tart citrus that awakens the senses and provides clean, energizing satisfaction.',
      'Our lemon formulation uses natural lemon extracts and citrus oils to create an authentic taste that\'s both familiar and invigorating. The crisp acidity provides a clean palate experience without artificial sweetness.',
      'Ideal for hot weather, morning refreshment, or anytime you need a sharp, clean flavor boost, lemon nicotine pouches deliver consistent satisfaction with their bright, energizing profile.'
    ]
  },

  // 紧急度文案
  urgencyText: {
    prefix: 'Lemon Fresh Choice:',
    suffix: 'crisp lemon pouches refreshing customers daily!'
  }
}