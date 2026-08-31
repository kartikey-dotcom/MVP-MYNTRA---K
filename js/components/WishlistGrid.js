/**
 * WishlistGrid Component (Desktop Left Column in Wishlist View)
 * Displays all saved wishlist items, active hero selection, and empty state.
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
        <p>Browse our catalog categories and tap the heart icon on any product to unlock 3 curated occasion pairings in StyleStudio.</p>
        <button class="btn-restore-defaults" data-action="explore-women">
          <i data-lucide="compass" style="width: 15px; height: 15px;"></i>
          <span>Explore Catalog</span>
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
        showToast('Removed from Wishlist', targetItem.title || targetItem.name, 'info');
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
        store.moveWishlistToBag(itemId);
        showToast('Moved to Bag 🛍️', `${targetItem.title || targetItem.name} added to your bag!`, 'success');
      }
      return;
    }

    // 3. Select as Hero in StyleStudio
    const selectHeroTarget = e.target.closest('[data-action="select-hero"]');
    if (selectHeroTarget) {
      const itemId = selectHeroTarget.dataset.itemId;
      store.setActiveHeroSku(itemId);
      const targetItem = store.getActiveHeroProduct();
      if (targetItem) {
        showToast('StyleStudio Updated ✨', `Now styling: ${targetItem.brand} ${targetItem.title || targetItem.name}`, 'success');
      }
      return;
    }

    // 4. Explore Catalog
    if (e.target.closest('[data-action="explore-women"]')) {
      store.setCurrentView('WOMEN');
      return;
    }
  };
}
