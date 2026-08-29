/**
 * Curated Catalog Seed Data matching User Frontend UI Specification
 * Strictly zero pricing / monetary data included.
 */

/** @type {import('../types/index.js').WishlistItem[]} */
export const ANCHOR_WISHLIST_ITEMS = [
  {
    id: 'anchor-stark-blazer',
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
    id: 'anchor-lumiere-dress',
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
    id: 'anchor-aeris-sneakers',
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
    id: 'anchor-nordic-trousers',
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
export const COMPLEMENTARY_CATALOG_ITEMS = [
  {
    id: 'comp-white-shirt',
    brand: 'STUDIO ESSENTIALS',
    name: 'Crisp Structured White Shirt',
    category: 'Topwear',
    subCategory: 'Poplin Shirt',
    color: 'Clean White',
    imageUrl: 'https://images.unsplash.com/photo-1598554747436-c9293d6a588f?auto=format&fit=crop&w=700&q=80',
    imageAlt: 'Crisp White Shirt',
    tags: ['Shirt', 'Cotton', 'Classic']
  },
  {
    id: 'comp-beige-trousers',
    brand: 'TAILOR & CO.',
    name: 'Wide-Leg Pleated Beige Trousers',
    category: 'Bottomwear',
    subCategory: 'Tailored Trousers',
    color: 'Sand Beige',
    imageUrl: 'https://images.unsplash.com/photo-1584273143981-41c073dfe8f8?auto=format&fit=crop&w=700&q=80',
    imageAlt: 'Beige Tailored Trousers',
    tags: ['Tailored', 'Trousers', 'Beige']
  },
  {
    id: 'comp-grey-knit',
    brand: 'PURE CASHMERE',
    name: 'Soft Relaxed Grey Crewneck Knit',
    category: 'Topwear',
    subCategory: 'Knit Sweater',
    color: 'Heather Grey',
    imageUrl: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=700&q=80',
    imageAlt: 'Grey Crewneck Knit Sweater',
    tags: ['Knit', 'Grey', 'Casual']
  },
  {
    id: 'comp-dark-denim',
    brand: 'DENIM WORKS',
    name: 'Classic Straight-Leg Indigo Denim',
    category: 'Bottomwear',
    subCategory: 'Jeans',
    color: 'Dark Indigo',
    imageUrl: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=700&q=80',
    imageAlt: 'Dark Indigo Straight Denim',
    tags: ['Denim', 'Dark Indigo', 'Classic']
  },
  {
    id: 'comp-satin-skirt',
    brand: 'MANGO',
    name: 'Bias-Cut Slip Satin Midi Skirt',
    category: 'Bottomwear',
    subCategory: 'Midi Skirt',
    color: 'Champagne Gold',
    imageUrl: 'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?auto=format&fit=crop&w=700&q=80',
    imageAlt: 'Champagne Satin Midi Skirt',
    tags: ['Evening', 'Satin']
  },
  {
    id: 'comp-leather-loafers',
    brand: 'ALDO',
    name: 'Pointed Leather Penny Loafers',
    category: 'Footwear',
    subCategory: 'Loafers',
    color: 'Black',
    imageUrl: 'https://images.unsplash.com/photo-1533867617858-e7b97e060509?auto=format&fit=crop&w=700&q=80',
    imageAlt: 'Pointed Leather Loafers',
    tags: ['Loafers', 'Formal']
  },
  {
    id: 'comp-heeled-mules',
    brand: 'STEVE MADDEN',
    name: 'Sculpted Strap Heeled Mules',
    category: 'Footwear',
    subCategory: 'Heeled Mules',
    color: 'Warm Taupe',
    imageUrl: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=700&q=80',
    imageAlt: 'Heeled Taupe Mules',
    tags: ['Heels', 'Evening']
  }
];

export const ALL_CATALOG_ITEMS = [
  ...ANCHOR_WISHLIST_ITEMS,
  ...COMPLEMENTARY_CATALOG_ITEMS
];
