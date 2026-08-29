/**
 * Pairing Logic Engine for StyleStudio MVP
 * Resolves curated outfit combinations and handles edge cases gracefully.
 */

import { ALL_CATALOG_ITEMS } from './catalog.js';
import { OUTFIT_PAIRINGS } from './pairings.js';

// Index catalog items by ID for O(1) lookup
const catalogMap = new Map(ALL_CATALOG_ITEMS.map(item => [item.id, item]));

/**
 * Retrieves hydrated outfit pairings for a given anchor item.
 * @param {string} anchorItemId - Target anchor item ID
 * @param {string} [occasionFilter='All'] - Optional occasion filter
 * @returns {Array<import('../types/index.js').OutfitPairing & { complementaryItems: import('../types/index.js').CatalogItem[] }>}
 */
export function getPairingsForAnchor(anchorItemId, occasionFilter = 'All') {
  if (!anchorItemId) return [];

  // 1. Fetch raw pairings for anchor item
  let rawPairings = OUTFIT_PAIRINGS.filter(p => p.anchorItemId === anchorItemId);

  // 2. Apply Occasion Filter if specified and not 'All'
  if (occasionFilter && occasionFilter !== 'All') {
    rawPairings = rawPairings.filter(p => p.occasion.toLowerCase().includes(occasionFilter.toLowerCase()) || p.occasion === occasionFilter);
  }

  // 3. Hydrate complementary items and enforce slot / anti-self collision rules
  const hydratedPairings = rawPairings.map(pairing => {
    const complementaryItems = (pairing.complementaryItemIds || [])
      .map(id => catalogMap.get(id))
      .filter(item => {
        // Defensive check: must exist, cannot be the anchor itself
        return Boolean(item) && item.id !== anchorItemId;
      });

    return {
      ...pairing,
      complementaryItems
    };
  });

  return hydratedPairings;
}

/**
 * Retrieves the available occasion taxonomy counts for an anchor item.
 * @param {string} anchorItemId
 * @returns {Record<string, number>}
 */
export function getOccasionCountsForAnchor(anchorItemId) {
  const pairings = OUTFIT_PAIRINGS.filter(p => p.anchorItemId === anchorItemId);
  const counts = {
    'All': pairings.length,
    'Office': 0,
    'Weekend': 0,
    'Evening': 0
  };

  pairings.forEach(p => {
    if (p.occasion.includes('Office')) counts['Office']++;
    if (p.occasion.includes('Weekend')) counts['Weekend']++;
    if (p.occasion.includes('Evening')) counts['Evening']++;
  });

  return counts;
}
