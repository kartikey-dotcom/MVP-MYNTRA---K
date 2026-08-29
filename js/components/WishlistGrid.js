/**
 * WishlistGrid Component
 * Renders the 2-column wishlist product grid with context banner and event handlers.
 */

import { renderWishlistCardHTML } from './WishlistCard.js';
import { store } from '../state/store.js';

export function renderWishlistGrid() {
  const container = document.getElementById('wishlist-container');
  if (!container) return;

  const items = store.wishlistItems;

  if (items.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 48px 16px; color: var(--text-muted);">
        <i data-lucide="heart" style="width: 48px; height: 48px; color: #D4D5D9; margin-bottom: 12px;"></i>
        <h3 style="font-size: 16px; font-weight: 700; color: var(--text-primary); margin-bottom: 6px;">Your Wishlist is Empty</h3>
        <p style="font-size: 12px;">Explore items and style them with the Rule of 3.</p>
      </div>
    `;
    if (window.lucide) window.lucide.createIcons();
    return;
  }

  container.innerHTML = `
    <!-- Rule of 3 Context Intent Banner -->
    <div class="wishlist-intent-banner">
      <div class="intent-banner-icon">
        <i data-lucide="sparkles" style="width: 18px; height: 18px;"></i>
      </div>
      <div class="intent-banner-text">
        <strong>Rule of 3:</strong> Tap <em>"Style This"</em> to picture how any wishlisted piece works across 3 real occasions.
      </div>
    </div>

    <!-- 2-Column Product Grid -->
    <div class="wishlist-grid" id="wishlist-grid-list">
      ${items.map(item => renderWishlistCardHTML(item)).join('')}
    </div>
  `;

  // Re-initialize Lucide icons
  if (window.lucide) {
    window.lucide.createIcons();
  }

  // Setup Event Delegation
  setupGridEvents(container);
}

/**
 * Attaches event delegation for Style This and Remove actions
 * @param {HTMLElement} container
 */
function setupGridEvents(container) {
  // Clear any existing listener by replacing or setting on container
  container.onclick = (e) => {
    // 1. Check for Style This button click
    const styleBtn = e.target.closest('[data-action="style-this"]');
    if (styleBtn) {
      const itemId = styleBtn.dataset.itemId;
      const targetItem = store.wishlistItems.find(item => item.id === itemId);
      if (targetItem) {
        store.openDrawer(targetItem);
      }
      return;
    }

    // 2. Check for Remove button click
    const removeBtn = e.target.closest('[data-action="remove-item"]');
    if (removeBtn) {
      const itemId = removeBtn.dataset.itemId;
      if (itemId) {
        store.removeFromWishlist(itemId);
      }
      return;
    }
  };
}
