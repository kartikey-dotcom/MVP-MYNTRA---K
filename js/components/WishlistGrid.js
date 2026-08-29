/**
 * WishlistGrid Component (Screenshot 1 Match)
 * Renders the 2-column wishlist grid and Bottom Navigation Bar.
 */

import { renderWishlistCardHTML } from './WishlistCard.js';
import { store } from '../state/store.js';

export function renderWishlistGrid() {
  const container = document.getElementById('wishlist-container');
  if (!container) return;

  const items = store.wishlistItems;

  container.innerHTML = `
    <!-- 2-Column Product Grid -->
    <div class="wishlist-grid" id="wishlist-grid-list">
      ${items.map(item => renderWishlistCardHTML(item)).join('')}
    </div>
  `;

  // Render or update bottom navigation bar
  renderBottomNavBar();

  if (window.lucide) {
    window.lucide.createIcons();
  }

  // Setup Event Delegation
  setupGridEvents(container);
}

/**
 * Renders the 5-item Bottom Navigation Bar (Screenshot 1)
 */
function renderBottomNavBar() {
  let navEl = document.getElementById('bottom-nav-bar');
  if (!navEl) {
    navEl = document.createElement('nav');
    navEl.id = 'bottom-nav-bar';
    navEl.className = 'bottom-nav-bar';
    const appEl = document.getElementById('app');
    if (appEl) {
      appEl.appendChild(navEl);
    }
  }

  navEl.innerHTML = `
    <button class="nav-item" data-tab="home">
      <i data-lucide="home"></i>
      <span>Home</span>
    </button>
    <button class="nav-item" data-tab="studio">
      <i data-lucide="sparkles"></i>
      <span>Studio</span>
    </button>
    <button class="nav-item" data-tab="explore">
      <i data-lucide="compass"></i>
      <span>Explore</span>
    </button>
    <button class="nav-item active" data-tab="wishlist">
      <i data-lucide="heart" style="fill: var(--text-brand-pink);"></i>
      <span>Wishlist</span>
    </button>
    <button class="nav-item" data-tab="profile">
      <i data-lucide="user"></i>
      <span>Profile</span>
    </button>
  `;
}

/**
 * Attaches event delegation for Wishlist Grid
 * @param {HTMLElement} container
 */
function setupGridEvents(container) {
  container.onclick = (e) => {
    // 1. Style This CTA click
    const styleBtn = e.target.closest('[data-action="style-this"]');
    if (styleBtn) {
      const itemId = styleBtn.dataset.itemId;
      const targetItem = store.wishlistItems.find(item => item.id === itemId);
      if (targetItem) {
        store.openDrawer(targetItem);
      }
      return;
    }

    // 2. Heart button toggle
    const heartBtn = e.target.closest('[data-action="toggle-wishlist-heart"]');
    if (heartBtn) {
      const itemId = heartBtn.dataset.itemId;
      if (itemId) {
        // Toggle animation or action
        heartBtn.style.transform = 'scale(1.2)';
        setTimeout(() => heartBtn.style.transform = 'scale(1)', 200);
      }
      return;
    }
  };
}
