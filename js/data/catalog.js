/**
 * Master Fashion Catalog for Browse & Wishlist Screens
 * Strictly zero pricing / monetary data included.
 */

/** @type {import('../types/index.js').WishlistItem[]} */
export const INITIAL_WISHLIST_ITEMS = [
  {
    id: 'prod-stark-blazer',
    brand: 'STARK & CO.',
    name: 'Structured Navy Blazer',
    category: 'Outerwear / Layer',
    subCategory: 'Navy Blazer',
    color: 'Navy Blue',
    imageUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=700&q=80',
    imageAlt: 'STARK & CO. Structured Navy Blazer',
    tags: ['Tailored', 'Structured', 'Navy', 'Corporate'],
    isAnchor: true,
    addedAt: '2026-08-28',
    stylable: true
  },
  {
    id: 'prod-lumiere-dress',
    brand: 'LUMIÈRE',
    name: 'Emerald Silk Midi Dress',
    category: 'Topwear',
    subCategory: 'Silk Dress',
    color: 'Emerald Green',
    imageUrl: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&w=700&q=80',
    imageAlt: 'LUMIÈRE Emerald Silk Midi Dress',
    tags: ['Silk', 'Emerald', 'Evening', 'Midi'],
    isAnchor: true,
    addedAt: '2026-08-27',
    stylable: true
  },
  {
    id: 'prod-aeris-sneakers',
    brand: 'AERIS',
    name: 'Chunky Platform Sneakers',
    category: 'Footwear',
    subCategory: 'Platform Sneakers',
    color: 'Clean White',
    imageUrl: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=700&q=80',
    imageAlt: 'AERIS Chunky Platform Sneakers in White',
    tags: ['Platform', 'Sneakers', 'Streetwear', 'White'],
    isAnchor: true,
    addedAt: '2026-08-26',
    stylable: true
  },
  {
    id: 'prod-nordic-trousers',
    brand: 'NORDIC',
    name: 'Wide-Leg Tailored Trousers',
    category: 'Bottomwear',
    subCategory: 'Tailored Trousers',
    color: 'Sand Beige',
    imageUrl: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=700&q=80',
    imageAlt: 'NORDIC Wide-Leg Tailored Trousers in Beige',
    tags: ['Wide-Leg', 'Tailored', 'Beige', 'Contemporary'],
    isAnchor: true,
    addedAt: '2026-08-25',
    stylable: true
  }
];

/** @type {import('../types/index.js').CatalogItem[]} */
export const ALL_BROWSE_PRODUCTS = [
  ...INITIAL_WISHLIST_ITEMS,
  {
    id: 'prod-mango-rust-blazer',
    brand: 'MANGO',
    name: 'Relaxed-Fit Linen Blazer',
    category: 'Outerwear / Layer',
    subCategory: 'Linen Blazer',
    color: 'Rust Brown',
    imageUrl: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=700&q=80',
    imageAlt: 'Mango Relaxed-Fit Rust Linen Blazer',
    tags: ['Linen', 'Blazer', 'Smart-Casual']
  },
  {
    id: 'prod-zara-poplin',
    brand: 'ZARA',
    name: 'Cropped Structured Poplin Shirt',
    category: 'Topwear',
    subCategory: 'Poplin Shirt',
    color: 'Optic White',
    imageUrl: 'https://images.unsplash.com/photo-1598554747436-c9293d6a588f?auto=format&fit=crop&w=700&q=80',
    imageAlt: 'Zara Poplin Shirt',
    tags: ['Poplin', 'Shirt', 'Minimalist']
  },
  {
    id: 'prod-hm-olive-trousers',
    brand: 'H&M PREMIUM',
    name: 'High-Waisted Olive Tailored Trousers',
    category: 'Bottomwear',
    subCategory: 'Tailored Trousers',
    color: 'Olive Green',
    imageUrl: 'https://images.unsplash.com/photo-1584273143981-41c073dfe8f8?auto=format&fit=crop&w=700&q=80',
    imageAlt: 'H&M Olive Tailored Trousers',
    tags: ['Tailored', 'Trousers', 'Olive']
  },
  {
    id: 'prod-massimo-skirt',
    brand: 'MASSIMO DUTTI',
    name: 'Bias-Cut Slip Satin Midi Skirt',
    category: 'Bottomwear',
    subCategory: 'Midi Skirt',
    color: 'Champagne Gold',
    imageUrl: 'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?auto=format&fit=crop&w=700&q=80',
    imageAlt: 'Massimo Dutti Satin Skirt',
    tags: ['Satin', 'Midi Skirt', 'Evening']
  },
  {
    id: 'prod-levis-vintage',
    brand: 'LEVI\'S',
    name: '501 Straight-Leg Vintage Denim',
    category: 'Bottomwear',
    subCategory: 'Jeans',
    color: 'Vintage Indigo',
    imageUrl: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=700&q=80',
    imageAlt: 'Levi\'s 501 Straight Denim',
    tags: ['Denim', 'Jeans', 'Classic']
  },
  {
    id: 'prod-cos-knitwear',
    brand: 'COS',
    name: 'Fine Ribbed Mock-Neck Knit',
    category: 'Topwear',
    subCategory: 'Knitwear',
    color: 'Ivory Cream',
    imageUrl: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=700&q=80',
    imageAlt: 'COS Fine Ribbed Mock-Neck Knit',
    tags: ['Knitwear', 'Cream', 'Neutral']
  },
  {
    id: 'prod-aldo-loafers',
    brand: 'ALDO',
    name: 'Pointed Black Leather Penny Loafers',
    category: 'Footwear',
    subCategory: 'Loafers',
    color: 'Black',
    imageUrl: 'https://images.unsplash.com/photo-1533867617858-e7b97e060509?auto=format&fit=crop&w=700&q=80',
    imageAlt: 'Aldo Pointed Black Loafers',
    tags: ['Loafers', 'Leather', 'Formal']
  },
  {
    id: 'prod-steve-madden-mules',
    brand: 'STEVE MADDEN',
    name: 'Sculpted Strap Heeled Mules',
    category: 'Footwear',
    subCategory: 'Heeled Mules',
    color: 'Warm Taupe',
    imageUrl: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=700&q=80',
    imageAlt: 'Steve Madden Taupe Heeled Mules',
    tags: ['Heels', 'Mules', 'Evening']
  }
];

export const ALL_CATALOG_ITEMS = ALL_BROWSE_PRODUCTS;
export const ANCHOR_WISHLIST_ITEMS = INITIAL_WISHLIST_ITEMS;
