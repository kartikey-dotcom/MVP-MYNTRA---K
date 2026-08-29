/**
 * @fileoverview JSDoc Type Definitions & Schema Contracts for StyleStudio MVP
 */

/**
 * @typedef {'Office / Workwear' | 'Weekend Casual' | 'Evening Out' | 'Brunch / Smart Daywear'} OccasionType
 */

/**
 * @typedef {'Topwear' | 'Bottomwear' | 'Footwear' | 'Outerwear / Layer' | 'Accessories'} ProductCategory
 */

/**
 * @typedef {'Curated Look' | 'Trending Match' | 'Classic Pairing'} StyleConfidence
 */

/**
 * @typedef {Object} CatalogItem
 * @property {string} id - Unique product identifier
 * @property {string} brand - Brand name (e.g. 'MANGO', 'ZARA', 'H&M')
 * @property {string} name - Product title
 * @property {ProductCategory} category - Primary garment category
 * @property {string} subCategory - Specific silhouette (e.g. 'Linen Blazer', 'Tailored Trousers')
 * @property {string} color - Color description
 * @property {string} imageUrl - High-res product thumbnail URL
 * @property {string} imageAlt - Accessibility alt description
 * @property {string[]} tags - Style & occasion keyword tags
 */

/**
 * @typedef {CatalogItem & {
 *   isAnchor: boolean,
 *   addedAt: string,
 *   stylable: boolean
 * }} WishlistItem
 */

/**
 * @typedef {Object} OutfitPairing
 * @property {string} id - Unique pairing identifier
 * @property {string} anchorItemId - Target anchor item being styled
 * @property {OccasionType} occasion - Real-life occasion answering the Rule of 3
 * @property {string} title - Outfit look headline (e.g. 'Sharp Workwear Edit')
 * @property {CatalogItem[]} complementaryItems - 1–2 matching catalog pieces
 * @property {string} stylingRationale - Actionable styling explanation
 * @property {StyleConfidence} styleConfidence - Trust indicator
 */

/**
 * @typedef {Object} StyleStudioState
 * @property {boolean} isDrawerOpen
 * @property {WishlistItem | null} activeAnchorItem
 * @property {Record<string, boolean>} savedPairingIds - Keyed by pairingId
 * @property {OccasionType | 'All'} selectedOccasionFilter
 */

export {};
