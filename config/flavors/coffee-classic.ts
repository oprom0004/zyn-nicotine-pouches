import { FlavorPageConfig } from '@/types/flavor-config'

export const coffeeClassicFlavorConfig: FlavorPageConfig = {
  // 基础信息
  flavorInfo: {
    title: 'Classic Coffee Nicotine Pouches',
    description: 'Enjoy rich classic coffee flavor nicotine pouches with smooth roasted taste and authentic coffee aroma. Premium tobacco-free coffee pouches for coffee lovers.',
    h1: 'Classic Coffee Nicotine Pouches - Rich & Smooth',
    seoDescription: 'Shop premium classic coffee nicotine pouches with smooth roasted flavor and authentic coffee taste. Tobacco-free, rich experience in all strengths. Order online today.',
    flavorName: 'coffee-classic',
    benefits: [
      'Rich Coffee Flavor',
      'Smooth Roasted Taste',
      'Authentic Coffee Aroma',
      'Perfect Morning Companion',
      'Tobacco-Free Formula',
      'Premium Coffee Beans'
    ],
    keywords: [
      'classic coffee nicotine pouches',
      'coffee flavor nicotine pouches',
      'roasted coffee pouches',
      'coffee bean nicotine',
      'smooth coffee pouches',
      'morning coffee pouches',
      'coffee zyn alternative',
      'rich coffee flavor',
      'premium coffee pouches',
      'buy coffee nicotine pouches',
      'coffee flavor tobacco free',
      'authentic coffee pouches'
    ],
    lsiKeywords: [
      'coffee tobacco-free products',
      'smokeless coffee nicotine',
      'natural coffee extracts',
      'roasted bean flavor profile',
      'coffee aroma sensation',
      'coffee harm reduction',
      'morning coffee alternative',
      'café coffee experience',
      'coffee bean blend',
      'energizing coffee pouches'
    ]
  },

  // 主题配色 - 咖啡棕色系
  theme: {
    primary: 'amber-600',
    secondary: 'yellow-600',
    gradient: {
      from: 'amber-50',
      to: 'yellow-50'
    },
    accent: 'amber-700',
    urgencyGradient: {
      from: 'amber-600',
      to: 'yellow-600'
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

  // 产品筛选配置 - 只显示Coffee产品
  filterConfig: {
    type: 'single-flavor',
    flavors: ['Coffee']
  },

  // 页面URL slug
  slug: 'coffee-flavors-nicotine-pouches/coffee',

  // FAQ配置
  faqs: [
    {
      question: 'What makes classic coffee nicotine pouches special?',
      answer: 'Classic coffee nicotine pouches deliver authentic roasted coffee flavor with smooth, rich taste that mimics your favorite morning brew. They provide a familiar, comforting coffee experience without the caffeine.'
    },
    {
      question: 'How does coffee flavor compare to espresso?',
      answer: 'Classic coffee offers a smoother, more mellow flavor compared to espresso\'s intense, concentrated taste. Coffee provides a familiar, approachable profile while espresso delivers bold, robust intensity.'
    },
    {
      question: 'Do coffee pouches contain caffeine?',
      answer: 'No, our coffee nicotine pouches contain only nicotine and natural coffee flavoring. They provide the rich coffee taste you love without any caffeine content, making them perfect for evening use.'
    },
    {
      question: 'Are coffee pouches good for morning routines?',
      answer: 'Absolutely! Coffee nicotine pouches are perfect for morning routines, providing familiar coffee comfort alongside nicotine satisfaction. They\'re ideal for situations where drinking coffee isn\'t convenient.'
    }
  ],

  // 教育内容配置
  educationSection: {
    title: 'Why Choose Classic Coffee Nicotine Pouches?',
    content: [
      'Classic coffee represents the gold standard of coffee flavors in nicotine pouches. This familiar profile delivers the smooth, rich taste of freshly roasted coffee beans without any of the bitterness or acidity.',
      'Our classic coffee formulation uses premium coffee extracts to create an authentic taste that coffee lovers recognize and appreciate. The smooth, mellow flavor provides comfort and satisfaction throughout the day.',
      'Perfect for morning routines, work breaks, or anytime you crave that familiar coffee comfort, classic coffee nicotine pouches provide consistent satisfaction with their warm, inviting flavor profile.'
    ]
  },

  // 紧急度文案
  urgencyText: {
    prefix: 'Coffee Lovers\' Choice:',
    suffix: 'classic coffee pouches brewing satisfaction daily!'
  }
}