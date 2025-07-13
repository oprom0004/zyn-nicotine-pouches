import { FlavorPageConfig } from '@/types/flavor-config'

export const espressoFlavorConfig: FlavorPageConfig = {
  // 基础信息
  flavorInfo: {
    title: 'Espresso Nicotine Pouches',
    description: 'Experience bold espresso flavor nicotine pouches with intense coffee taste and robust aroma. Premium tobacco-free espresso pouches for intense coffee satisfaction.',
    h1: 'Espresso Nicotine Pouches - Bold & Intense',
    seoDescription: 'Shop premium espresso nicotine pouches with bold, intense coffee flavor and robust espresso taste. Tobacco-free, maximum coffee intensity in all strengths. Order online today.',
    flavorName: 'espresso',
    benefits: [
      'Bold Espresso Flavor',
      'Intense Coffee Experience',
      'Robust Coffee Aroma',
      'Maximum Coffee Intensity',
      'Tobacco-Free Formula',
      'Authentic Italian Style'
    ],
    keywords: [
      'espresso nicotine pouches',
      'espresso flavor nicotine pouches',
      'bold coffee pouches',
      'intense espresso nicotine',
      'strong coffee pouches',
      'espresso bean pouches',
      'espresso zyn alternative',
      'intense coffee flavor',
      'premium espresso pouches',
      'buy espresso nicotine pouches',
      'espresso flavor tobacco free',
      'bold espresso pouches'
    ],
    lsiKeywords: [
      'espresso tobacco-free products',
      'smokeless espresso nicotine',
      'concentrated coffee extracts',
      'espresso bean flavor profile',
      'intense coffee sensation',
      'espresso harm reduction',
      'italian coffee alternative',
      'café espresso experience',
      'espresso coffee blend',
      'energizing espresso pouches'
    ]
  },

  // 主题配色 - 深咖啡色系
  theme: {
    primary: 'amber-700',
    secondary: 'orange-700',
    gradient: {
      from: 'amber-50',
      to: 'orange-50'
    },
    accent: 'amber-800',
    urgencyGradient: {
      from: 'amber-700',
      to: 'orange-700'
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

  // 产品筛选配置 - 只显示Espresso产品
  filterConfig: {
    type: 'single-flavor',
    flavors: ['Espresso']
  },

  // 页面URL slug
  slug: 'coffee-flavors-nicotine-pouches/espresso',

  // FAQ配置
  faqs: [
    {
      question: 'What makes espresso nicotine pouches different from regular coffee?',
      answer: 'Espresso pouches deliver a much more intense, concentrated coffee flavor compared to regular coffee. They provide the bold, robust taste of authentic espresso with deeper, richer coffee notes and a more powerful aroma.'
    },
    {
      question: 'How intense is the espresso flavor?',
      answer: 'Espresso provides the strongest coffee flavor in our collection. It delivers bold, concentrated coffee taste that\'s significantly more intense than regular coffee, perfect for users who want maximum coffee impact.'
    },
    {
      question: 'Are espresso pouches too strong for beginners?',
      answer: 'While espresso has intense flavor, it\'s available in lower nicotine strengths (1mg-2mg) that make it suitable for beginners who enjoy strong coffee flavors. Start with lighter strengths to assess your preference.'
    },
    {
      question: 'When is the best time to use espresso pouches?',
      answer: 'Espresso pouches are perfect for morning energy boosts, afternoon pick-me-ups, or anytime you need that intense coffee kick. They\'re ideal for coffee enthusiasts who crave authentic espresso intensity.'
    }
  ],

  // 教育内容配置
  educationSection: {
    title: 'Why Choose Espresso Nicotine Pouches?',
    content: [
      'Espresso represents the pinnacle of coffee intensity in nicotine pouches. For users who crave bold, concentrated coffee flavor and maximum coffee impact, espresso delivers an unmatched experience that satisfies the most demanding coffee enthusiasts.',
      'Our espresso formulation uses concentrated coffee extracts to create the authentic taste of Italian espresso. This intense flavor profile provides immediate satisfaction and lasting coffee comfort throughout the day.',
      'Perfect for busy mornings, intense work sessions, or anytime you need maximum coffee satisfaction, espresso nicotine pouches provide the strongest coffee experience available in tobacco-free form.'
    ]
  },

  // 紧急度文案
  urgencyText: {
    prefix: 'Espresso Intensity:',
    suffix: 'bold espresso pouches powering through the day!'
  }
}