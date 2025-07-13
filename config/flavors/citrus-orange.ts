import { FlavorPageConfig } from '@/types/flavor-config'

export const citrusOrangeFlavorConfig: FlavorPageConfig = {
  // 基础信息
  flavorInfo: {
    title: 'Citrus Orange Nicotine Pouches',
    description: 'Enjoy vibrant citrus orange flavor nicotine pouches with zesty burst and natural citrus essence. Premium tobacco-free orange pouches for energizing satisfaction.',
    h1: 'Citrus Orange Nicotine Pouches - Zesty & Vibrant',
    seoDescription: 'Shop premium citrus orange nicotine pouches with authentic orange flavor and energizing citrus burst. Tobacco-free, natural taste in all strengths. Order online today.',
    flavorName: 'citrus-orange',
    benefits: [
      'Authentic Orange Flavor',
      'Energizing Citrus Burst',
      'Natural Fruit Essence',
      'Vibrant Taste Experience',
      'Tobacco-Free Formula',
      'Multiple Nicotine Strengths'
    ],
    keywords: [
      'citrus orange nicotine pouches',
      'orange flavor nicotine pouches',
      'citrus tobacco free pouches',
      'orange citrus pouches',
      'zesty orange nicotine',
      'natural orange pouches',
      'citrus orange zyn alternative',
      'fresh orange flavor',
      'premium citrus pouches',
      'buy orange nicotine pouches',
      'orange flavor tobacco free',
      'energizing citrus pouches'
    ],
    lsiKeywords: [
      'citrus orange tobacco-free products',
      'smokeless orange nicotine',
      'natural orange extracts',
      'vitamin c orange flavor',
      'orange citrus sensation',
      'citrus harm reduction',
      'refreshing orange alternative',
      'summer citrus experience',
      'orange citrus blend',
      'energizing orange pouches'
    ]
  },

  // 主题配色 - 橙色活力系
  theme: {
    primary: 'orange-500',
    secondary: 'amber-500',
    gradient: {
      from: 'orange-50',
      to: 'amber-50'
    },
    accent: 'orange-600',
    urgencyGradient: {
      from: 'orange-500',
      to: 'amber-500'
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

  // 产品筛选配置 - 只显示Citrus产品
  filterConfig: {
    type: 'single-flavor',
    flavors: ['Citrus']
  },

  // 页面URL slug
  slug: 'citrus-flavors-nicotine-pouches/citrus',

  // FAQ配置
  faqs: [
    {
      question: 'What makes citrus orange nicotine pouches special?',
      answer: 'Citrus orange nicotine pouches deliver an authentic orange flavor with natural citrus essence. They provide an energizing, vibrant taste experience that\'s perfect for those who love bright, fruity flavors.'
    },
    {
      question: 'How does citrus orange differ from lemon flavor?',
      answer: 'Citrus orange offers a sweeter, more robust flavor compared to lemon\'s tart profile. Orange provides a warmer, more energizing citrus experience while lemon offers crisp, sharp refreshment.'
    },
    {
      question: 'Are citrus orange pouches naturally flavored?',
      answer: 'Yes, our citrus orange nicotine pouches use natural orange extracts and citrus essences to deliver authentic orange flavor without artificial additives or overpowering sweetness.'
    },
    {
      question: 'What nicotine strengths are available in citrus orange?',
      answer: 'Citrus orange nicotine pouches are available in multiple strengths from 1mg to 6mg, allowing you to choose the perfect nicotine level while enjoying the vibrant orange flavor.'
    }
  ],

  // 教育内容配置
  educationSection: {
    title: 'Why Choose Citrus Orange Nicotine Pouches?',
    content: [
      'Citrus orange represents the perfect balance of sweet and zesty in the citrus family. This vibrant flavor delivers an energizing burst of natural orange essence that invigorates the senses and provides lasting satisfaction.',
      'Our citrus orange formulation captures the essence of fresh oranges, delivering authentic flavor that\'s both refreshing and comforting. The natural citrus oils provide a clean, energizing experience without artificial aftertastes.',
      'Perfect for morning routines, afternoon breaks, or anytime you need an energizing boost, citrus orange nicotine pouches provide consistent satisfaction with their vibrant, uplifting flavor profile.'
    ]
  },

  // 紧急度文案
  urgencyText: {
    prefix: 'Citrus Burst Favorite:',
    suffix: 'orange citrus pouches energizing customers this week!'
  }
}