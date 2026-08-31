/**
 * WishlistGrid Component (Desktop Left Column)
 * Renders the "MY WISHLIST (X items)" header and 2-column card grid.
 */

import { renderWishlistCardHTML } from './WishlistCard.js';
import { store } from '../state/store.js';
import { showToast } from './Toast.js';

export function renderWishlistGrid() {
  const container = document.getElementById('wishlist-column-container');
  if (!container) return;

  const items = store.wishlistItems;
  const count = items.length;

  if (count === 0) {
    container.innerHTML = `
      <div class="wishlist-header-row">
        <h2 class="wishlist-section-title">MY WISHLIST <span class="count-muted">(0 items)</span></h2>
      </div>
      <div class="empty-wishlist-panel">
        <div class="empty-icon-bubble">
          <i data-lucide="heart" style="width: 32px; height: 32px; color: var(--myntra-crimson);"></i>
        </div>
        <h3>Your Wishlist is Empty</h3>
        <p>Browse our collection and add items to your wishlist to style them here.</p>
        <button class="btn-restore-defaults" data-action="restore-defaults">
          <i data-lucide="refresh-cw" style="width: 14px; height: 14px;"></i>
          <span>Restore Sample Items</span>
        </button>
      </div>
    `;
  } else {
    container.innerHTML = `
      <div class="wishlist-header-row">
        <h2 class="wishlist-section-title">MY WISHLIST <span class="count-muted">(${count} items)</span></h2>
      </div>

      <div class="desktop-wishlist-grid" id="desktop-wishlist-grid">
        ${items.map(item => renderWishlistCardHTML(item)).join('')}
      </div>
    `;
  }

  if (window.lucide) {
    window.lucide.createIcons();
  }

  // Setup Event Handlers for Wishlist column
  container.onclick = (e) => {
    // 1. Remove item from wishlist
    const removeBtn = e.target.closest('[data-action="remove-wishlist-item"]');
    if (removeBtn) {
      e.stopPropagation();
      const itemId = removeBtn.dataset.itemId;
      const targetItem = store.wishlistItems.find(i => i.id === itemId);
      store.removeFromWishlist(itemId);
      if (targetItem) {
        showToast('Removed from Wishlist', targetItem.name, 'info');
      }
      return;
    }

    // 2. Move to Bag
    const moveBagBtn = e.target.closest('[data-action="move-to-bag"]');
    if (moveBagBtn) {
      e.stopPropagation();
      const itemId = moveBagBtn.dataset.itemId;
      const targetItem = store.wishlistItems.find(i => i.id === itemId);
      if (targetItem) {
        store.moveFromWishlistToBag(itemId);
        showToast('Moved to Bag', `${targetItem.name} added to your bag! 🛍️`, 'success');
      }
      return;
    }

    // 3. Select as Hero in StyleStudio
    const selectHeroTarget = e.target.closest('[data-action="select-hero"]');
    if (selectHeroTarget) {
      const itemId = selectHeroTarget.dataset.itemId;
      const targetItem = store.wishlistItems.find(i => i.id === itemId);
      if (targetItem) {
        store.setActiveHeroItem(targetItem);
      }
      return;
    }

    // 4. Restore Defaults
    if (e.target.closest('[data-action="restore-defaults"]')) {
      localStorage.removeItem('myntra_desktop_wishlist_items');
      location.reload();
    }
  };
}
