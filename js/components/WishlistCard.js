/**
 * WishlistCard Component
 * Renders a single wishlist item with authentic Myntra mobile aesthetics and zero prices.
 */

import { renderStyleButtonHTML } from './StyleButton.js';
import { getPairingsForAnchor } from '../data/pairingEngine.js';
import { store } from '../state/store.js';

/**
 * Generates the HTML for a Wishlist product card.
 * @param {import('../types/index.js').WishlistItem} item
 * @returns {string}
 */
export function renderWishlistCardHTML(item) {
  const pairings = getPairingsForAnchor(item.id);
  const savedCount = store.getSavedLooksCountForAnchor(item.id, pairings);

  return `
    <article class="wishlist-card" data-item-id="${item.id}">
      <div class="card-image-wrap">
        <img 
          src="${item.imageUrl}" 
          alt="${item.imageAlt || item.name}" 
          class="card-image"
          loading="lazy"
          onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=700&q=80';"
        />
        
        <!-- Dismiss / Remove Button -->
        <button class="card-remove-btn" data-action="remove-item" data-item-id="${item.id}" aria-label="Remove from Wishlist" title="Remove">
          <i data-lucide="x" style="width: 14px; height: 14px;"></i>
        </button>

        <!-- "✨ Style This" CTA Badge -->
        ${renderStyleButtonHTML(item.id, savedCount)}
      </div>

      <!-- Product Metadata Details (Zero Pricing) -->
      <div class="card-details">
        <h3 class="card-brand">${item.brand}</h3>
        <p class="card-name" title="${item.name}">${item.name}</p>
        <span class="card-tag">${item.subCategory}</span>
      </div>
    </article>
  `;
}
