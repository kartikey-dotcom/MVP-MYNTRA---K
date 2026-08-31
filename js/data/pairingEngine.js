/**
 * Pairing Logic Engine for StyleStudio Desktop
 * Resolves curated outfit combinations for the active hero garment and selected occasion.
 */

import { ALL_CATALOG_ITEMS } from './catalog.js';
import { OUTFIT_PAIRINGS } from './pairings.js';

const catalogMap = new Map(ALL_CATALOG_ITEMS.map(item => [item.id, item]));

/**
 * Retrieves hydrated outfit pairings for a given anchor item and occasion.
 * @param {string} anchorItemId - Target anchor item ID
 * @param {string} [occasionFilter='Office & Smart'] - Occasion
 * @returns {import('../types/index.js').OutfitPairing | null}
 */
export function getPairingForAnchorAndOccasion(anchorItemId, occasionFilter = 'Office & Smart') {
  if (!anchorItemId) return null;

  // 1. Fetch pairings for anchor item
  let rawPairings = OUTFIT_PAIRINGS.filter(p => p.anchorItemId === anchorItemId);

  // If no pairings found, fallback to mango hero
  if (rawPairings.length === 0) {
    rawPairings = OUTFIT_PAIRINGS.filter(p => p.anchorItemId === 'prod-mango-hero');
  }

  // 2. Find matching occasion
  let matched = rawPairings.find(p => p.occasion.toLowerCase() === occasionFilter.toLowerCase());
  if (!matched) {
    matched = rawPairings[0];
  }

  if (!matched) return null;

  // Hydrate complementary items
  const complementaryItems = (matched.complementaryItemIds || [])
    .map(id => catalogMap.get(id))
    .filter(Boolean);

  return {
    ...matched,
    complementaryItems
  };
}

/**
 * Get all available occasions for an anchor item
 * @param {string} anchorItemId
 */
export function getAvailableOccasions(anchorItemId) {
  const pairings = OUTFIT_PAIRINGS.filter(p => p.anchorItemId === anchorItemId);
  if (pairings.length > 0) {
    return pairings.map(p => ({
      key: p.occasion,
      label: p.occasion,
      icon: p.occasionIcon || 'sparkles'
    }));
  }
  return [
    { key: 'Office & Smart', label: 'Office & Smart', icon: 'briefcase' },
    { key: 'Weekend Casual', label: 'Weekend Casual', icon: 'coffee' },
    { key: 'Evening', label: 'Evening', icon: 'wine' }
  ];
}
