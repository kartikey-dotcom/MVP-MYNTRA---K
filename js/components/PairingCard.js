/**
 * PairingCard Component (Screenshot 2 Match)
 * Renders 2-column garment composition with PERFECT MATCH badge, Look title, and SAVE/SAVED button.
 */

import { store } from '../state/store.js';

/**
 * Generates Pairing Card HTML
 * @param {import('../types/index.js').OutfitPairing & { complementaryItems: import('../types/index.js').CatalogItem[] }} pairing
 * @param {import('../types/index.js').WishlistItem} anchorItem
 * @returns {string}
 */
export function renderPairingCardHTML(pairing, anchorItem) {
  const isSaved = store.isPairingSaved(pairing.id);
  const itemsToDisplay = pairing.complementaryItems && pairing.complementaryItems.length >= 2 
    ? pairing.complementaryItems.slice(0, 2) 
    : [pairing.complementaryItems[0] || anchorItem, anchorItem];

  return `
    <article class="pairing-card" data-pairing-id="${pairing.id}">
      <!-- 2-Column Outfit Grid -->
      <div class="outfit-grid-2col">
        <!-- Item 1 (Left) -->
        <div class="outfit-item-node">
          <img 
            src="${itemsToDisplay[0]?.imageUrl || anchorItem.imageUrl}" 
            alt="${itemsToDisplay[0]?.name || 'Garment'}" 
            class="outfit-item-img"
            loading="lazy"
            onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1598554747436-c9293d6a588f?auto=format&fit=crop&w=700&q=80';"
          />
          ${pairing.isPerfectMatch ? `
            <div class="perfect-match-badge">
              <i data-lucide="sparkles" style="width: 10px; height: 10px;"></i>
              <span>PERFECT MATCH</span>
            </div>
          ` : ''}
        </div>

        <!-- Item 2 (Right) -->
        <div class="outfit-item-node">
          <img 
            src="${itemsToDisplay[1]?.imageUrl || anchorItem.imageUrl}" 
            alt="${itemsToDisplay[1]?.name || 'Garment'}" 
            class="outfit-item-img"
            loading="lazy"
            onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1584273143981-41c073dfe8f8?auto=format&fit=crop&w=700&q=80';"
          />
        </div>
      </div>

      <!-- Pairing Card Footer (Title/Sub on Left, Button on Right) -->
      <div class="pairing-footer-row">
        <div class="pairing-text-meta">
          <h4 class="pairing-look-title">${pairing.title}</h4>
          <span class="pairing-garment-sub">${pairing.subtitle || pairing.stylingRationale}</span>
        </div>

        <button 
          class="btn-save-toggle ${isSaved ? 'saved' : ''}" 
          data-action="toggle-save-pairing" 
          data-pairing-id="${pairing.id}"
          aria-label="${isSaved ? 'Look is saved' : 'Save this look'}"
        >
          ${isSaved ? `
            <i data-lucide="check" style="width: 14px; height: 14px; stroke-width: 3;"></i>
            <span>SAVED</span>
          ` : `
            <span>SAVE</span>
          `}
        </button>
      </div>
    </article>
  `;
}
