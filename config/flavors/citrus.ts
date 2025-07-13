import { FlavorPageConfig } from '@/types/flavor-config'

export const citrusFlavorConfig: FlavorPageConfig = {
  // 基础信息
  flavorInfo: {
    title: 'Citrus & Lemon Nicotine Pouches',
    description: 'Experience vibrant citrus flavors nicotine pouches with zesty orange, lemon, and lime. Premium tobacco-free citrus pouches for refreshing satisfaction.',
    h1: 'Zesty Citrus Flavors Nicotine Pouches Collection',
    seoDescription: 'Shop premium citrus flavors nicotine pouches with fresh orange, lemon, lime flavors. Tobacco-free citrus pouches in all strengths. Order online today.',
    flavorName: 'citrus',
    benefits: [
      'Vibrant citrus burst',
      'Natural fruit flavors',
      'Energizing taste',
      'Summer-fresh experience'
    ],
    keywords: [
      'citrus flavors nicotine pouches',
      'citrus tobacco free pouches',
      'orange nicotine pouches',
      'lemon nicotine pouches',
      'lime nicotine pouches',
      'citrus flavor tobacco free',
      'zesty nicotine pouches',
      'fruit flavored nicotine pouches',
      'citrus fresh pouches',
      'tangy citrus nicotine',
      'premium citrus pouches',
      'buy citrus flavors nicotine pouches',
      'zyn citrus nicotine pouches',
      'refreshing citrus taste'
    ],
    lsiKeywords: [
      'citrus tobacco-free products',
      'smokeless citrus nicotine',
      'fruit-based nicotine delivery',
      'natural citrus extracts',
      'vitamin c flavor profile',
      'citrus harm reduction',
      'refreshing fruit alternative',
      'summer citrus experience',
      'tropical citrus blend',
      'energizing fruit pouches'
    ]
  },

  // 主题配色
  theme: {
    primary: 'orange-500',
    secondary: 'yellow-500',
    gradient: {
      from: 'orange-50',
      to: 'yellow-50'
    },
    accent: 'orange-600',
    urgencyGradient: {
      from: 'orange-500',
      to: 'yellow-500'
    }
  },

  // 子分类配置
  subCategories: {
    type: 'dynamic',
    title: 'Choose Flavors',
    filterBy: 'flavor',
    dynamicSource: 'flavor',
    emojiMapping: {
      'Citrus': '🍊',
      'Lemon': '🍋'
    }
  },

  // 产品筛选逻辑
  filterLogic: (allProducts) => {
    return allProducts.filter(product => 
      product.category === 'citrus'
    )
  },

  // 页面URL slug
  slug: 'citrus-flavors-nicotine-pouches',

  // FAQ配置
  faqs: [
    {
      question: 'What makes citrus-flavors-nicotine-pouches nicotine pouches special?',
      answer: 'Our citrus-flavors-nicotine-pouches nicotine pouches offer a unique flavor profile that provides long-lasting taste satisfaction. Made with premium ingredients and tobacco-free formulation.'
    },
    {
      question: 'What strengths are available in citrus-flavors-nicotine-pouches pouches?',
      answer: 'We offer citrus-flavors-nicotine-pouches nicotine pouches in multiple strengths to suit different preferences and experience levels.'
    }
  ],

  // 紧急度文案
  urgencyText: {
    prefix: 'High Demand:',
    suffix: 'citrus flavor products selling fast this week!'
  }
}