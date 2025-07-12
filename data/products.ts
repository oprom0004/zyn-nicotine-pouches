import { Product } from '@/types'

export const products: Product[] = [
  // Cool Mint Series
  {
    id: 1,
    name: "Zyn Cool Mint 3mg",
    price: 4.99,
    originalPrice: 5.99,
    strength: "3mg",
    flavor: "Cool Mint",
    category: "mint",
    rating: 5,
    reviews: 1240,
    inStock: true,
    featured: true,
    description: "Experience the refreshing coolness of our signature Cool Mint flavor with a gentle 3mg nicotine strength.",
    ingredients: ["Nicotine", "Plant-based fibers", "Flavoring", "Sweeteners"],
    imageUrl: "/products/mint/zyn-cool-mint-3mg.svg",
    slug: "zyn-cool-mint-3mg"
  },
  {
    id: 2,
    name: "Zyn Cool Mint 6mg",
    price: 4.99,
    originalPrice: 5.99,
    strength: "6mg",
    flavor: "Cool Mint",
    category: "mint",
    rating: 5,
    reviews: 2100,
    inStock: true,
    featured: true,
    description: "Our most popular strength combined with the classic Cool Mint flavor for the perfect balance.",
    ingredients: ["Nicotine", "Plant-based fibers", "Flavoring", "Sweeteners"],
    imageUrl: "/products/mint/zyn-cool-mint-6mg.svg",
    slug: "zyn-cool-mint-6mg"
  },
  {
    id: 3,
    name: "Zyn Cool Mint 9mg",
    price: 5.49,
    originalPrice: 6.49,
    strength: "9mg",
    flavor: "Cool Mint",
    category: "mint",
    rating: 4,
    reviews: 890,
    inStock: true,
    featured: false,
    description: "Maximum strength Cool Mint for experienced users seeking a stronger nicotine experience.",
    ingredients: ["Nicotine", "Plant-based fibers", "Flavoring", "Sweeteners"],
    imageUrl: "/products/mint/zyn-cool-mint-9mg.svg",
    slug: "zyn-cool-mint-9mg"
  },

  // Citrus Series
  {
    id: 4,
    name: "Zyn Citrus 3mg",
    price: 4.99,
    originalPrice: 5.99,
    strength: "3mg",
    flavor: "Citrus",
    category: "citrus",
    rating: 5,
    reviews: 890,
    inStock: true,
    featured: true,
    description: "Bright and zesty citrus flavor with a smooth 3mg nicotine delivery.",
    ingredients: ["Nicotine", "Plant-based fibers", "Natural citrus flavoring", "Sweeteners"],
    imageUrl: "/products/citrus/zyn-citrus-3mg.svg",
    slug: "zyn-citrus-3mg"
  },
  {
    id: 5,
    name: "Zyn Citrus 6mg",
    price: 4.99,
    originalPrice: 5.99,
    strength: "6mg",
    flavor: "Citrus",
    category: "citrus",
    rating: 4,
    reviews: 567,
    inStock: true,
    featured: false,
    description: "Energizing citrus burst with medium nicotine strength for all-day satisfaction.",
    ingredients: ["Nicotine", "Plant-based fibers", "Natural citrus flavoring", "Sweeteners"],
    imageUrl: "/products/citrus/zyn-citrus-6mg.svg",
    slug: "zyn-citrus-6mg"
  },

  // Coffee Series
  {
    id: 6,
    name: "Zyn Coffee 3mg",
    price: 5.49,
    originalPrice: 6.49,
    strength: "3mg",
    flavor: "Coffee",
    category: "coffee",
    rating: 4,
    reviews: 445,
    inStock: true,
    featured: false,
    description: "Rich coffee flavor perfect for morning routines with gentle nicotine strength.",
    ingredients: ["Nicotine", "Plant-based fibers", "Natural coffee flavoring", "Sweeteners"],
    imageUrl: "/products/coffee/zyn-coffee-3mg.svg",
    slug: "zyn-coffee-3mg"
  },
  {
    id: 7,
    name: "Zyn Coffee 6mg",
    price: 5.49,
    originalPrice: 6.49,
    strength: "6mg",
    flavor: "Coffee",
    category: "coffee",
    rating: 5,
    reviews: 567,
    inStock: true,
    featured: true,
    description: "Bold coffee taste with moderate nicotine strength - perfect for coffee lovers.",
    ingredients: ["Nicotine", "Plant-based fibers", "Natural coffee flavoring", "Sweeteners"],
    imageUrl: "/products/coffee/zyn-coffee-6mg.svg",
    slug: "zyn-coffee-6mg"
  },
  {
    id: 8,
    name: "Zyn Espresso 6mg",
    price: 5.99,
    originalPrice: 6.99,
    strength: "6mg",
    flavor: "Espresso",
    category: "coffee",
    rating: 4,
    reviews: 234,
    inStock: true,
    featured: false,
    description: "Intense espresso flavor with a robust nicotine kick for the ultimate coffee experience.",
    ingredients: ["Nicotine", "Plant-based fibers", "Natural espresso flavoring", "Sweeteners"],
    imageUrl: "/products/espresso-6mg.jpg",
    slug: "zyn-espresso-6mg"
  },

  // Spearmint Series
  {
    id: 9,
    name: "Zyn Spearmint 3mg",
    price: 4.99,
    originalPrice: 5.99,
    strength: "3mg",
    flavor: "Spearmint",
    category: "spearmint",
    rating: 5,
    reviews: 1100,
    inStock: true,
    featured: false,
    description: "Classic spearmint freshness with a gentle nicotine touch.",
    ingredients: ["Nicotine", "Plant-based fibers", "Natural spearmint flavoring", "Sweeteners"],
    imageUrl: "/products/spearmint/zyn-spearmint-3mg.svg",
    slug: "zyn-spearmint-3mg"
  },
  {
    id: 10,
    name: "Zyn Spearmint 6mg",
    price: 4.99,
    originalPrice: 5.99,
    strength: "6mg",
    flavor: "Spearmint",
    category: "spearmint",
    rating: 5,
    reviews: 980,
    inStock: true,
    featured: false,
    description: "Refreshing spearmint with balanced nicotine strength for long-lasting freshness.",
    ingredients: ["Nicotine", "Plant-based fibers", "Natural spearmint flavoring", "Sweeteners"],
    imageUrl: "/products/spearmint/zyn-spearmint-6mg.svg",
    slug: "zyn-spearmint-6mg"
  },

  // Wintergreen Series
  {
    id: 11,
    name: "Zyn Wintergreen 3mg",
    price: 4.99,
    originalPrice: 5.99,
    strength: "3mg",
    flavor: "Wintergreen",
    category: "wintergreen",
    rating: 5,
    reviews: 1456,
    inStock: false,
    featured: false,
    description: "Cool wintergreen flavor with a gentle nicotine strength. Currently restocking.",
    ingredients: ["Nicotine", "Plant-based fibers", "Natural wintergreen flavoring", "Sweeteners"],
    imageUrl: "/products/wintergreen/zyn-wintergreen-3mg.svg",
    slug: "zyn-wintergreen-3mg"
  },
  {
    id: 12,
    name: "Zyn Wintergreen 6mg",
    price: 4.99,
    originalPrice: 5.99,
    strength: "6mg",
    flavor: "Wintergreen",
    category: "wintergreen",
    rating: 4,
    reviews: 723,
    inStock: true,
    featured: false,
    description: "Traditional wintergreen taste with medium nicotine strength.",
    ingredients: ["Nicotine", "Plant-based fibers", "Natural wintergreen flavoring", "Sweeteners"],
    imageUrl: "/products/wintergreen/zyn-wintergreen-6mg.svg",
    slug: "zyn-wintergreen-6mg"
  },

  // Berry Series
  {
    id: 13,
    name: "Zyn Berry 3mg",
    price: 5.49,
    originalPrice: 6.49,
    strength: "3mg",
    flavor: "Berry",
    category: "berry",
    rating: 4,
    reviews: 445,
    inStock: true,
    featured: false,
    description: "Sweet and tangy mixed berry flavor with gentle nicotine strength.",
    ingredients: ["Nicotine", "Plant-based fibers", "Natural berry flavoring", "Sweeteners"],
    imageUrl: "/products/berry-3mg.jpg",
    slug: "zyn-berry-3mg"
  },
  {
    id: 14,
    name: "Zyn Berry 6mg",
    price: 5.49,
    originalPrice: 6.49,
    strength: "6mg",
    flavor: "Berry",
    category: "berry",
    rating: 5,
    reviews: 567,
    inStock: true,
    featured: false,
    description: "Delicious berry blend with moderate nicotine strength for fruit lovers.",
    ingredients: ["Nicotine", "Plant-based fibers", "Natural berry flavoring", "Sweeteners"],
    imageUrl: "/products/berry-6mg.jpg",
    slug: "zyn-berry-6mg"
  },

  // Cinnamon Series
  {
    id: 15,
    name: "Zyn Cinnamon 3mg",
    price: 5.99,
    originalPrice: 6.99,
    strength: "3mg",
    flavor: "Cinnamon",
    category: "spice",
    rating: 4,
    reviews: 289,
    inStock: true,
    featured: false,
    description: "Warm and spicy cinnamon flavor with a gentle nicotine kick.",
    ingredients: ["Nicotine", "Plant-based fibers", "Natural cinnamon flavoring", "Sweeteners"],
    imageUrl: "/products/spice/zyn-cinnamon-3mg.svg",
    slug: "zyn-cinnamon-3mg"
  },
  {
    id: 16,
    name: "Zyn Cinnamon 6mg",
    price: 5.99,
    originalPrice: 6.99,
    strength: "6mg",
    flavor: "Cinnamon",
    category: "spice",
    rating: 4,
    reviews: 178,
    inStock: true,
    featured: false,
    description: "Bold cinnamon spice with medium nicotine strength for a warming experience.",
    ingredients: ["Nicotine", "Plant-based fibers", "Natural cinnamon flavoring", "Sweeteners"],
    imageUrl: "/products/spice/zyn-cinnamon-6mg.svg",
    slug: "zyn-cinnamon-6mg"
  },

  // Vanilla Series
  {
    id: 17,
    name: "Zyn Vanilla 3mg",
    price: 5.99,
    originalPrice: 6.99,
    strength: "3mg",
    flavor: "Vanilla",
    category: "sweet",
    rating: 4,
    reviews: 334,
    inStock: true,
    featured: false,
    description: "Smooth vanilla flavor with gentle nicotine strength for a sweet experience.",
    ingredients: ["Nicotine", "Plant-based fibers", "Natural vanilla flavoring", "Sweeteners"],
    imageUrl: "/products/sweet/zyn-vanilla-3mg.svg",
    slug: "zyn-vanilla-3mg"
  },
  {
    id: 18,
    name: "Zyn Vanilla 6mg",
    price: 5.99,
    originalPrice: 6.99,
    strength: "6mg",
    flavor: "Vanilla",
    category: "sweet",
    rating: 4,
    reviews: 198,
    inStock: true,
    featured: false,
    description: "Creamy vanilla taste with moderate nicotine strength.",
    ingredients: ["Nicotine", "Plant-based fibers", "Natural vanilla flavoring", "Sweeteners"],
    imageUrl: "/products/sweet/zyn-vanilla-6mg.svg",
    slug: "zyn-vanilla-6mg"
  },

  // Menthol Series
  {
    id: 19,
    name: "Zyn Menthol 6mg",
    price: 4.99,
    originalPrice: 5.99,
    strength: "6mg",
    flavor: "Menthol",
    category: "mint",
    rating: 5,
    reviews: 876,
    inStock: true,
    featured: false,
    description: "Intense menthol cooling with balanced nicotine strength.",
    ingredients: ["Nicotine", "Plant-based fibers", "Natural menthol", "Sweeteners"],
    imageUrl: "/products/menthol-6mg.jpg",
    slug: "zyn-menthol-6mg"
  },
  {
    id: 20,
    name: "Zyn Menthol 9mg",
    price: 5.49,
    originalPrice: 6.49,
    strength: "9mg",
    flavor: "Menthol",
    category: "mint",
    rating: 4,
    reviews: 445,
    inStock: true,
    featured: false,
    description: "Maximum strength menthol for the ultimate cooling experience.",
    ingredients: ["Nicotine", "Plant-based fibers", "Natural menthol", "Sweeteners"],
    imageUrl: "/products/menthol-9mg.jpg",
    slug: "zyn-menthol-9mg"
  },

  // Lemon Series
  {
    id: 21,
    name: "Zyn Lemon 3mg",
    price: 5.49,
    originalPrice: 6.49,
    strength: "3mg",
    flavor: "Lemon",
    category: "citrus",
    rating: 4,
    reviews: 223,
    inStock: true,
    featured: false,
    description: "Bright lemon flavor with a gentle nicotine touch for a citrusy refresh.",
    ingredients: ["Nicotine", "Plant-based fibers", "Natural lemon flavoring", "Sweeteners"],
    imageUrl: "/products/lemon-3mg.jpg",
    slug: "zyn-lemon-3mg"
  },
  {
    id: 22,
    name: "Zyn Lemon 6mg",
    price: 5.49,
    originalPrice: 6.49,
    strength: "6mg",
    flavor: "Lemon",
    category: "citrus",
    rating: 4,
    reviews: 156,
    inStock: true,
    featured: false,
    description: "Zesty lemon with moderate nicotine strength for a refreshing experience.",
    ingredients: ["Nicotine", "Plant-based fibers", "Natural lemon flavoring", "Sweeteners"],
    imageUrl: "/products/lemon-6mg.jpg",
    slug: "zyn-lemon-6mg"
  }
]

export const categories = [
  { name: "3mg Strength", filter: "strength", value: "3mg", count: products.filter(p => p.strength === "3mg").length },
  { name: "6mg Strength", filter: "strength", value: "6mg", count: products.filter(p => p.strength === "6mg").length },
  { name: "9mg Strength", filter: "strength", value: "9mg", count: products.filter(p => p.strength === "9mg").length },
  { name: "Mint Flavors", filter: "category", value: "mint", count: products.filter(p => p.category === "mint").length },
  { name: "Citrus Flavors", filter: "category", value: "citrus", count: products.filter(p => p.category === "citrus").length },
  { name: "Berry Flavors", filter: "category", value: "berry", count: products.filter(p => p.category === "berry").length },
  { name: "Wintergreen Flavors", filter: "category", value: "wintergreen", count: products.filter(p => p.category === "wintergreen").length },
  { name: "Coffee Flavors", filter: "category", value: "coffee", count: products.filter(p => p.category === "coffee").length },
  { name: "Spearmint Flavors", filter: "category", value: "spearmint", count: products.filter(p => p.category === "spearmint").length },
  { name: "Sweet Flavors", filter: "category", value: "sweet", count: products.filter(p => p.category === "sweet").length },
  { name: "Spice Flavors", filter: "category", value: "spice", count: products.filter(p => p.category === "spice").length }
]

// Get featured products
export const getFeaturedProducts = () => products.filter(p => p.featured)

// Get product by slug
export const getProductBySlug = (slug: string) => products.find(p => p.slug === slug)

// Get products by category
export const getProductsByCategory = (category: string) => products.filter(p => p.category === category)

// Get products by strength
export const getProductsByStrength = (strength: string) => products.filter(p => p.strength === strength)

// Search products
export const searchProducts = (query: string) => {
  const searchLower = query.toLowerCase()
  return products.filter(p => 
    p.name.toLowerCase().includes(searchLower) ||
    p.flavor.toLowerCase().includes(searchLower) ||
    p.category.toLowerCase().includes(searchLower)
  )
}