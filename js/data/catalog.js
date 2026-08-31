/**
 * Master Fashion Catalog for Myntra Desktop Wishlist & StyleStudio
 * Matches the Stitch Desktop layout & mock data perfectly.
 */

export const INITIAL_WISHLIST_ITEMS = [
  {
    id: 'prod-mango-hero',
    brand: 'MANGO',
    name: 'Drape Satin Blouse - Espresso Brown',
    category: 'Topwear',
    subCategory: 'Satin Blouse',
    color: 'Espresso Brown',
    price: 2490,
    originalPrice: 4150,
    discount: '40% OFF',
    imageUrl: 'https://images.unsplash.com/photo-1551803091-e20673f15770?auto=format&fit=crop&w=700&q=80',
    imageAlt: 'MANGO Drape Satin Blouse in Espresso Brown',
    tags: ['Satin', 'Cowl Neck', 'Espresso', 'Hero'],
    isAnchor: true,
    isHero: true,
    addedAt: '2026-08-30',
    stylable: true
  },
  {
    id: 'prod-zara-trousers',
    brand: 'ZARA',
    name: 'Pleated Wide-Leg Trousers',
    subCategory: 'Tailored Trousers',
    category: 'Bottomwear',
    color: 'Charcoal Grey',
    price: 2990,
    originalPrice: 4590,
    discount: '35% OFF',
    imageUrl: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=700&q=80',
    imageAlt: 'ZARA Pleated Wide-Leg Trousers',
    tags: ['Tailored', 'Pleated', 'Charcoal', 'Corporate'],
    isAnchor: true,
    isHero: false,
    addedAt: '2026-08-29',
    stylable: true
  },
  {
    id: 'prod-hm-skirt',
    brand: 'H&M',
    name: 'Satin Midi Skirt',
    subCategory: 'Midi Skirt',
    category: 'Bottomwear',
    color: 'Champagne Cream',
    price: 1999,
    originalPrice: 2499,
    discount: '20% OFF',
    imageUrl: 'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?auto=format&fit=crop&w=700&q=80',
    imageAlt: 'H&M Satin Midi Skirt in Champagne',
    tags: ['Satin', 'Midi Skirt', 'Champagne', 'Chic'],
    isAnchor: true,
    isHero: false,
    addedAt: '2026-08-28',
    stylable: true
  },
  {
    id: 'prod-ck-pumps',
    brand: 'Charles & Keith',
    name: 'Classic Nude Pumps',
    subCategory: 'Heeled Pumps',
    category: 'Footwear',
    color: 'Classic Nude',
    price: 4200,
    originalPrice: 4990,
    discount: '15% OFF',
    imageUrl: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=700&q=80',
    imageAlt: 'Charles & Keith Classic Nude Pumps',
    tags: ['Heels', 'Pumps', 'Nude', 'Formal'],
    isAnchor: true,
    isHero: false,
    addedAt: '2026-08-27',
    stylable: true
  }
];

export const ALL_BROWSE_PRODUCTS = [
  ...INITIAL_WISHLIST_ITEMS,
  {
    id: 'prod-neutral-trouser',
    brand: 'ZARA',
    name: 'Pleated Fluid Sand Trousers',
    category: 'Bottomwear',
    subCategory: 'Trousers',
    color: 'Sand Beige',
    price: 2990,
    imageUrl: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=700&q=80',
    imageAlt: 'Neutral Tailored Trousers',
    tags: ['Tailored', 'Neutral', 'Wide-Leg']
  },
  {
    id: 'prod-stark-blazer',
    brand: 'STARK & CO.',
    name: 'Structured Navy Blazer',
    category: 'Outerwear / Layer',
    subCategory: 'Navy Blazer',
    color: 'Navy Blue',
    price: 4990,
    imageUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=700&q=80',
    imageAlt: 'STARK Structured Navy Blazer',
    tags: ['Tailored', 'Navy', 'Corporate']
  },
  {
    id: 'prod-aeris-sneakers',
    brand: 'AERIS',
    name: 'Chunky Platform Clean Sneakers',
    category: 'Footwear',
    subCategory: 'Platform Sneakers',
    color: 'Clean White',
    price: 2200,
    imageUrl: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=700&q=80',
    imageAlt: 'Platform Sneakers',
    tags: ['Platform', 'Sneakers', 'Streetwear']
  },
  {
    id: 'prod-gold-accessories',
    brand: 'MANGO',
    name: 'Sculpted Golden Drop Earrings',
    category: 'Accessories',
    subCategory: 'Earrings',
    color: 'Warm Gold',
    price: 990,
    imageUrl: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=700&q=80',
    imageAlt: 'Golden Earrings',
    tags: ['Jewelry', 'Gold', 'Evening']
  }
];

export const ALL_CATALOG_ITEMS = ALL_BROWSE_PRODUCTS;
export const ANCHOR_WISHLIST_ITEMS = INITIAL_WISHLIST_ITEMS;
