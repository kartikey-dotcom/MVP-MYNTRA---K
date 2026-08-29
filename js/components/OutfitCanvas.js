/**
 * OutfitCanvas Component
 * Renders the multi-item visual outfit layout (Anchor Item + 1-2 Complementary Pieces).
 */

/**
 * Generates Outfit Canvas HTML
 * @param {import('../types/index.js').WishlistItem} anchorItem
 * @param {import('../types/index.js').CatalogItem[]} complementaryItems
 * @returns {string}
 */
export function renderOutfitCanvasHTML(anchorItem, complementaryItems = []) {
  if (!anchorItem) return '';

  return `
    <div class="outfit-canvas" aria-label="Outfit Composition">
      <!-- Anchor Garment Node -->
      <div class="garment-node">
        <div class="garment-thumb-wrap">
          <img 
            src="${anchorItem.imageUrl}" 
            alt="${anchorItem.name}" 
            class="garment-thumb"
            onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=700&q=80';"
          />
          <span class="garment-tag-overlay anchor">Your Piece</span>
        </div>
        <div class="garment-meta">
          <span class="garment-brand">${anchorItem.brand}</span>
          <span class="garment-subname">${anchorItem.subCategory}</span>
        </div>
      </div>

      <!-- Complementary Garment Nodes -->
      ${complementaryItems.map(item => `
        <div class="outfit-plus-divider">+</div>
        <div class="garment-node">
          <div class="garment-thumb-wrap">
            <img 
              src="${item.imageUrl}" 
              alt="${item.name}" 
              class="garment-thumb"
              onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=700&q=80';"
            />
            <span class="garment-tag-overlay">Match</span>
          </div>
          <div class="garment-meta">
            <span class="garment-brand">${item.brand}</span>
            <span class="garment-subname">${item.subCategory}</span>
          </div>
        </div>
      `).join('')}
    </div>
  `;
}
