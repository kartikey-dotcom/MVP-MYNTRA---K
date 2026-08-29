/**
 * Pairing Logic Engine for StyleStudio MVP
 * Resolves curated outfit combinations and handles edge cases gracefully.
 */

import { ALL_CATALOG_ITEMS } from './catalog.js';
import { OUTFIT_PAIRINGS } from './pairings.js';

const catalogMap = new Map(ALL_CATALOG_ITEMS.map(item => [item.id, item]));

/**
 * Retrieves hydrated outfit pairings for a given anchor item.
 * @param {string} anchorItemId - Target anchor item ID
 * @param {string} [occasionFilter='Daily Look'] - Optional occasion filter
 * @returns {Array<import('../types/index.js').OutfitPairing & { complementaryItems: import('../types/index.js').CatalogItem[] }>}
 */
export function getPairingsForAnchor(anchorItemId, occasionFilter = 'Daily Look') {
  if (!anchorItemId) return [];

  // 1. Fetch raw pairings for anchor item
  let rawPairings = OUTFIT_PAIRINGS.filter(p => p.anchorItemId === anchorItemId);

  // If no specific pairings found for this anchor, fallback to generic styling from STARK
  if (rawPairings.length === 0) {
    rawPairings = OUTFIT_PAIRINGS.filter(p => p.anchorItemId === 'anchor-stark-blazer');
  }

  // 2. Filter by occasion if not 'All'
  let filtered = rawPairings;
  if (occasionFilter && occasionFilter !== 'All') {
    const matched = rawPairings.filter(p => p.occasion.toLowerCase() === occasionFilter.toLowerCase() || p.occasion.includes(occasionFilter));
    if (matched.length > 0) {
      // In Daily Look or other views, if there's multiple matching or we want to show 2 looks like Screenshot 2:
      filtered = matched;
      // If only 1 matches the filter, include the complementary pairings so the user always sees 2 complete cards as in Screenshot 2
      if (filtered.length < 2) {
        const others = rawPairings.filter(p => p.id !== filtered[0].id);
        filtered = [...filtered, ...others];
      }
    }
  }

  // 3. Hydrate complementary items
  return filtered.map(pairing => {
    const complementaryItems = (pairing.complementaryItemIds || [])
      .map(id => catalogMap.get(id))
      .filter(Boolean);

    return {
      ...pairing,
      complementaryItems
    };
  });
}
