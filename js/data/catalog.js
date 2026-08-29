/**
 * Curated Catalog Seed Data for StyleStudio MVP
 * Strictly zero pricing / monetary data included.
 */

/** @type {import('../types/index.js').WishlistItem[]} */
export const ANCHOR_WISHLIST_ITEMS = [
  {
    id: 'anchor-mango-blazer',
    brand: 'MANGO',
    name: 'Relaxed-Fit Linen Blazer',
    category: 'Outerwear / Layer',
    subCategory: 'Linen Blazer',
    color: 'Rust Brown',
    imageUrl: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=700&q=80',
    imageAlt: 'Mango Relaxed-Fit Rust Linen Blazer',
    tags: ['Linen', 'Relaxed', 'Smart-Casual', 'Earth Tones'],
    isAnchor: true,
    addedAt: '2026-08-28',
    stylable: true
  },
  {
    id: 'anchor-zara-shirt',
    brand: 'ZARA',
    name: 'Cropped Structured Poplin Shirt',
    category: 'Topwear',
    subCategory: 'Poplin Shirt',
    color: 'Optic White',
    imageUrl: 'https://images.unsplash.com/photo-1598554747436-c9293d6a588f?auto=format&fit=crop&w=700&q=80',
    imageAlt: 'Zara Cropped Structured Poplin Shirt in White',
    tags: ['Crisp Cotton', 'Minimalist', 'Structured', 'Monochrome'],
    isAnchor: true,
    addedAt: '2026-08-27',
    stylable: true
  },
  {
    id: 'anchor-hm-trousers',
    brand: 'H&M',
    name: 'High-Waisted Tailored Wide Trousers',
    category: 'Bottomwear',
    subCategory: 'Tailored Trousers',
    color: 'Olive Green',
    imageUrl: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=700&q=80',
    imageAlt: 'H&M High-Waisted Tailored Wide Trousers in Olive',
    tags: ['Tailored', 'High-Rise', 'Wide Leg', 'Contemporary'],
    isAnchor: true,
    addedAt: '2026-08-26',
    stylable: true
  }
];

/** @type {import('../types/index.js').CatalogItem[]} */
export const COMPLEMENTARY_CATALOG_ITEMS = [
  {
    id: 'comp-black-trousers',
    brand: 'MASSIMO DUTTI',
    name: 'Pleated Wool-Blend Black Trousers',
    category: 'Bottomwear',
    subCategory: 'Tailored Trousers',
    color: 'Black',
    imageUrl: 'https://images.unsplash.com/photo-1584273143981-41c073dfe8f8?auto=format&fit=crop&w=700&q=80',
    imageAlt: 'Massimo Dutti Pleated Black Trousers',
    tags: ['Workwear', 'Tailored', 'Wool']
  },
  {
    id: 'comp-leather-loafers',
    brand: 'ALDO',
    name: 'Pointed Leather Penny Loafers',
    category: 'Footwear',
    subCategory: 'Loafers',
    color: 'Black',
    imageUrl: 'https://images.unsplash.com/photo-1533867617858-e7b97e060509?auto=format&fit=crop&w=700&q=80',
    imageAlt: 'Aldo Pointed Black Leather Loafers',
    tags: ['Formal', 'Footwear', 'Leather']
  },
  {
    id: 'comp-straight-denim',
    brand: 'LEVI\'S',
    name: '501 Straight-Leg Vintage Denim',
    category: 'Bottomwear',
    subCategory: 'Jeans',
    color: 'Light Vintage Indigo',
    imageUrl: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=700&q=80',
    imageAlt: 'Levi\'s 501 Straight Leg Denim',
    tags: ['Denim', 'Casual', 'Classic']
  },
  {
    id: 'comp-white-sneakers',
    brand: 'VEJA',
    name: 'Campo Minimalist Leather Sneakers',
    category: 'Footwear',
    subCategory: 'Sneakers',
    color: 'Clean White',
    imageUrl: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&w=700&q=80',
    imageAlt: 'Veja Campo Minimalist White Leather Sneakers',
    tags: ['Sneakers', 'Weekend', 'Clean']
  },
  {
    id: 'comp-satin-skirt',
    brand: 'MANGO',
    name: 'Bias-Cut Slip Satin Midi Skirt',
    category: 'Bottomwear',
    subCategory: 'Midi Skirt',
    color: 'Champagne Gold',
    imageUrl: 'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?auto=format&fit=crop&w=700&q=80',
    imageAlt: 'Mango Bias Cut Champagne Satin Midi Skirt',
    tags: ['Evening', 'Satin', 'Elegant']
  },
  {
    id: 'comp-heeled-mules',
    brand: 'STEVE MADDEN',
    name: 'Sculpted Strap Heeled Mules',
    category: 'Footwear',
    subCategory: 'Heeled Mules',
    color: 'Warm Taupe',
    imageUrl: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=700&q=80',
    imageAlt: 'Steve Madden Sculpted Strap Taupe Mules',
    tags: ['Heels', 'Evening', 'Minimalist']
  },
  {
    id: 'comp-khaki-trousers',
    brand: 'COS',
    name: 'High-Waisted Wide-Leg Khaki Chinos',
    category: 'Bottomwear',
    subCategory: 'Wide-Leg Chino',
    color: 'Sand Khaki',
    imageUrl: 'https://images.unsplash.com/photo-1479064555552-3ef4979f8908?auto=format&fit=crop&w=700&q=80',
    imageAlt: 'COS High-Waisted Wide-Leg Khaki Trousers',
    tags: ['Wide Leg', 'Cotton', 'Workwear']
  },
  {
    id: 'comp-mock-knit',
    brand: 'UNIQLO',
    name: 'Fine Ribbed Mock-Neck Knit',
    category: 'Topwear',
    subCategory: 'Knit Top',
    color: 'Ivory Cream',
    imageUrl: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=700&q=80',
    imageAlt: 'Uniqlo Fine Ribbed Mock-Neck Ivory Knit',
    tags: ['Knitwear', 'Layering', 'Neutral']
  }
];

/** Full Catalog Map for Lookup */
export const ALL_CATALOG_ITEMS = [
  ...ANCHOR_WISHLIST_ITEMS,
  ...COMPLEMENTARY_CATALOG_ITEMS
];
