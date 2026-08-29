/**
 * WishlistGrid Component
 * Renders the Wishlist screen and interactive 5-item Bottom Navigation Bar.
 */

import { renderWishlistCardHTML } from './WishlistCard.js';
import { store } from '../state/store.js';

export function renderWishlistGrid() {
  const container = document.getElementById('wishlist-container');
  if (!container) return;

  const items = store.wishlistItems;

  if (items.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 48px 16px; color: var(--text-muted); display: flex; flex-direction: column; align-items: center; gap: 12px;">
        <div style="width: 64px; height: 64px; border-radius: 50%; background: #FFF0F3; display: flex; align-items: center; justify-content: center;">
          <i data-lucide="heart" style="width: 32px; height: 32px; color: var(--myntra-crimson);"></i>
        </div>
        <h3 style="font-size: 16px; font-weight: 700; color: var(--text-primary);">Your Wishlist is Empty</h3>
        <p style="font-size: 12px; max-width: 260px; line-height: 1.4;">Explore fashion pieces and tap the heart icon on any garment to save and style it here.</p>
        <button class="btn-browse-redirect" data-action="go-to-browse">
          <i data-lucide="compass" style="width: 14px; height: 14px;"></i>
          <span>Explore Catalog</span>
        </button>
      </div>
    `;
  } else {
    container.innerHTML = `
      <!-- 2-Column Product Grid -->
      <div class="wishlist-grid" id="wishlist-grid-list">
        ${items.map(item => renderWishlistCardHTML(item)).join('')}
      </div>
    `;
  }

  // Render bottom navigation bar
  renderBottomNavBar();

  if (window.lucide) {
    window.lucide.createIcons();
  }

  // Setup Event Delegation
  setupGridEvents(container);
}

/**
 * Renders the 5-item Bottom Navigation Bar with live active tab and wishlist count badge
 */
export function renderBottomNavBar() {
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

  const { activeTab, wishlistItems } = store;
  const wishlistCount = wishlistItems.length;

  navEl.innerHTML = `
    <button class="nav-item ${activeTab === 'home' ? 'active' : ''}" data-tab="home" aria-label="Home">
      <i data-lucide="home"></i>
      <span>Home</span>
    </button>
    <button class="nav-item ${activeTab === 'studio' ? 'active' : ''}" data-tab="studio" aria-label="Studio">
      <i data-lucide="sparkles"></i>
      <span>Studio</span>
    </button>
    <button class="nav-item ${activeTab === 'explore' ? 'active' : ''}" data-tab="explore" aria-label="Explore">
      <i data-lucide="compass"></i>
      <span>Explore</span>
    </button>
    <button class="nav-item ${activeTab === 'wishlist' ? 'active' : ''}" data-tab="wishlist" aria-label="Wishlist">
      <div class="nav-icon-badge-wrap">
        <i data-lucide="heart" style="${activeTab === 'wishlist' ? 'fill: var(--text-brand-pink);' : ''}"></i>
        ${wishlistCount > 0 ? `<span class="nav-wishlist-count">${wishlistCount}</span>` : ''}
      </div>
      <span>Wishlist</span>
    </button>
    <button class="nav-item ${activeTab === 'profile' ? 'active' : ''}" data-tab="profile" aria-label="Profile">
      <i data-lucide="user"></i>
      <span>Profile</span>
    </button>
  `;

  // Attach navigation tab click handlers
  navEl.onclick = (e) => {
    const navBtn = e.target.closest('.nav-item');
    if (navBtn) {
      const tab = navBtn.dataset.tab;
      if (tab === 'studio') {
        // Open StyleStudio for the active or first wishlisted item
        if (store.wishlistItems.length > 0) {
          store.openDrawer(store.wishlistItems[0]);
        } else if (store.browseProducts.length > 0) {
          store.openDrawer(store.browseProducts[0]);
        }
      } else if (tab) {
        store.setActiveTab(tab);
      }
    }
  };
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
      const targetItem = store.wishlistItems.find(item => item.id === itemId) || store.browseProducts.find(item => item.id === itemId);
      if (targetItem) {
        store.openDrawer(targetItem);
      }
      return;
    }

    // 2. Heart button toggle on wishlist card (remove from wishlist)
    const heartBtn = e.target.closest('[data-action="toggle-wishlist-heart"]');
    if (heartBtn) {
      const itemId = heartBtn.dataset.itemId;
      const targetItem = store.wishlistItems.find(item => item.id === itemId);
      if (targetItem) {
        store.toggleWishlist(targetItem);
      }
      return;
    }

    // 3. Go to browse redirect
    if (e.target.closest('[data-action="go-to-browse"]')) {
      store.setActiveTab('explore');
      return;
    }
  };
}
