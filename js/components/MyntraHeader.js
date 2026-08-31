/**
 * Myntra Desktop Header Component
 * Matches the Stitch desktop navigation: Logo, Categories, Search bar, Profile, Wishlist, Bag.
 */

import { store } from '../state/store.js';

export function renderHeader() {
  const container = document.getElementById('header-container');
  if (!container) return;

  const categories = ['MEN', 'WOMEN', 'KIDS', 'HOME & LIVING', 'BEAUTY', 'STUDIO'];
  const { activeCategory, wishlistItems } = store;
  const bagCount = store.getBagCount();
  const wishlistCount = wishlistItems.length;

  container.innerHTML = `
    <header class="desktop-header">
      <!-- Left: Logo & Categories -->
      <div class="header-brand-group">
        <a href="#" class="brand-logo" data-action="logo-click" aria-label="Myntra Home">
          <span class="brand-logo-text">MYNTRA</span>
        </a>

        <nav class="desktop-nav-menu" aria-label="Main Navigation">
          ${categories.map(cat => `
            <button 
              class="nav-menu-link ${activeCategory === cat ? 'active' : ''}" 
              data-action="select-category" 
              data-category="${cat}"
            >
              <span>${cat}</span>
            </button>
          `).join('')}
        </nav>
      </div>

      <!-- Center: Search Input -->
      <div class="header-search-bar">
        <i data-lucide="search" class="search-icon"></i>
        <input 
          type="text" 
          class="search-input" 
          placeholder="Search for products, brands and more" 
          value="${store.searchQuery || ''}"
          id="header-search-input"
          aria-label="Search"
        />
      </div>

      <!-- Right: User Actions (Profile, Wishlist, Bag) -->
      <div class="header-user-actions">
        <button class="user-action-btn" data-action="toggle-profile" aria-label="User Profile">
          <i data-lucide="user"></i>
          <span class="action-label">Profile</span>
        </button>

        <button class="user-action-btn ${activeCategory === 'STUDIO' ? 'active-link' : ''}" data-action="toggle-wishlist-view" aria-label="Wishlist">
          <div class="action-icon-wrap">
            <i data-lucide="heart" class="wishlist-header-icon"></i>
            ${wishlistCount > 0 ? `<span class="action-badge">${wishlistCount}</span>` : ''}
          </div>
          <span class="action-label">Wishlist</span>
        </button>

        <button class="user-action-btn" data-action="toggle-bag" aria-label="Shopping Bag">
          <div class="action-icon-wrap">
            <i data-lucide="shopping-bag"></i>
            ${bagCount > 0 ? `<span class="action-badge bag-badge">${bagCount}</span>` : ''}
          </div>
          <span class="action-label">Bag</span>
        </button>
      </div>
    </header>
  `;

  if (window.lucide) {
    window.lucide.createIcons();
  }

  // Setup Event Delegation for Header
  container.onclick = (e) => {
    // 1. Select category
    const catBtn = e.target.closest('[data-action="select-category"]');
    if (catBtn) {
      store.setActiveCategory(catBtn.dataset.category);
      return;
    }

    // 2. Toggle Bag Drawer
    const bagBtn = e.target.closest('[data-action="toggle-bag"]');
    if (bagBtn) {
      store.toggleBag();
      return;
    }

    // 3. Logo click
    if (e.target.closest('[data-action="logo-click"]')) {
      store.setActiveCategory('STUDIO');
      return;
    }
  };

  // Search input change handler
  const searchInput = container.querySelector('#header-search-input');
  if (searchInput) {
    searchInput.oninput = (e) => {
      store.setSearchQuery(e.target.value);
    };
  }
}
