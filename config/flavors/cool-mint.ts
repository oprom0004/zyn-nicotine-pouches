import { FlavorPageConfig } from '@/types/flavor-config'

export const coolMintFlavorConfig: FlavorPageConfig = {
  // 基础信息
  flavorInfo: {
    title: 'Cool Mint Nicotine Pouches',
    description: 'Experience the classic cool mint flavor nicotine pouches with refreshing arctic sensation. Premium tobacco-free cool mint pouches for ultimate freshness.',
    h1: 'Cool Mint Nicotine Pouches - Classic Refreshing',
    seoDescription: 'Shop premium cool mint nicotine pouches with classic mint flavor and cooling sensation. Tobacco-free, refreshing taste in all strengths. Order online today.',
    flavorName: 'cool-mint',
    benefits: [
      'Classic Cool Mint Flavor',
      'Refreshing Arctic Sensation',
      'Long-lasting Cooling Effect',
      'Fresh Breath Experience',
      'Tobacco-Free Formula',
      'Multiple Nicotine Strengths'
    ],
    keywords: [
      'cool mint nicotine pouches',
      'cool mint tobacco free pouches',
      'arctic mint nicotine pouches',
      'classic mint flavor pouches',
      'cooling mint nicotine',
      'refreshing mint pouches',
      'cool mint zyn alternative',
      'mint cooling sensation',
      'premium cool mint pouches',
      'buy cool mint nicotine pouches',
      'cool mint flavor tobacco free',
      'arctic cool mint pouches'
    ],
    lsiKeywords: [
      'cool mint tobacco-free products',
      'smokeless cool mint nicotine',
      'menthol-free mint pouches',
      'natural cool mint extracts',
      'arctic cooling sensation',
      'cool mint harm reduction',
      'refreshing mint alternative',
      'winter mint experience',
      'cool mint blend',
      'energizing cool mint pouches'
    ]
  },

  // 主题配色 - 蓝色冰爽系
  theme: {
    primary: 'blue-500',
    secondary: 'cyan-500',
    gradient: {
      from: 'blue-50',
      to: 'cyan-50'
    },
    accent: 'blue-600',
    urgencyGradient: {
      from: 'blue-500',
      to: 'cyan-500'
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

  // 产品筛选配置 - 只显示Cool Mint产品
  filterConfig: {
    type: 'single-flavor',
    flavors: ['Cool Mint']
  },

  // 页面URL slug
  slug: 'mint-flavors-nicotine-pouches/cool-mint',

  // FAQ配置
  faqs: [
    {
      question: 'What makes cool mint nicotine pouches special?',
      answer: 'Cool mint nicotine pouches offer the classic mint flavor with a refreshing arctic sensation. They provide a clean, cooling experience that\'s perfect for those who love traditional mint taste without the intensity of menthol.'
    },
    {
      question: 'How does cool mint differ from spearmint and menthol?',
      answer: 'Cool mint provides a balanced, classic mint flavor with moderate cooling sensation. It\'s milder than menthol but more refreshing than spearmint, making it the perfect middle ground for mint lovers.'
    },
    {
      question: 'What nicotine strengths are available in cool mint?',
      answer: 'Cool mint nicotine pouches are available in multiple strengths ranging from 1mg to 6mg, allowing you to choose the perfect nicotine level for your preferences and experience.'
    },
    {
      question: 'How long does the cool mint flavor last?',
      answer: 'Cool mint nicotine pouches deliver consistent flavor for 30-60 minutes. The cooling sensation and mint taste remain strong throughout use, providing fresh breath and lasting satisfaction.'
    }
  ],

  // 教育内容配置
  educationSection: {
    title: 'Why Choose Cool Mint Nicotine Pouches?',
    content: [
      'Cool mint represents the gold standard of mint flavors in nicotine pouches. This classic flavor profile combines the familiar taste of traditional mint with a refreshing cooling sensation that doesn\'t overwhelm the palate.',
      'Perfect for daily use, cool mint nicotine pouches provide consistent satisfaction whether you\'re starting your morning routine or need a refreshing break during the day. The balanced flavor makes it an ideal choice for both new users and experienced nicotine pouch enthusiasts.',
      'Our cool mint formula uses premium mint extracts to deliver authentic flavor without artificial aftertastes. Each pouch provides a clean, refreshing experience that leaves you feeling energized and satisfied.'
    ]
  },

  // 紧急度文案
  urgencyText: {
    prefix: 'Cool Mint Bestseller:',
    suffix: 'cool mint pouches flying off the shelves this week!'
  }
}