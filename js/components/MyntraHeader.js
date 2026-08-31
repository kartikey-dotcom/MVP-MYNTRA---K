/**
 * Myntra Desktop Header Component
 * Handles Category Navigation (MEN, WOMEN, KIDS, HOME & LIVING, BEAUTY, STUDIO),
 * Search Bar, Profile Dropdown, Wishlist button, and Bag drawer.
 */

import { store } from '../state/store.js';

export function renderHeader() {
  const container = document.getElementById('header-container');
  if (!container) return;

  const categories = ['MEN', 'WOMEN', 'KIDS', 'HOME & LIVING', 'BEAUTY', 'STUDIO'];
  const { currentView, wishlistItems, userProfile, isProfileDropdownOpen } = store;
  const bagCount = store.getBagCount();
  const wishlistCount = wishlistItems.length;

  container.innerHTML = `
    <header class="desktop-header">
      <!-- Left: Logo & Categories -->
      <div class="header-brand-group">
        <a href="#" class="brand-logo" data-action="nav-category" data-category="WOMEN" aria-label="Myntra Home">
          <span class="brand-logo-text">MYNTRA</span>
        </a>

        <nav class="desktop-nav-menu" aria-label="Main Navigation">
          ${categories.map(cat => {
            const isActive = (currentView === cat) || (cat === 'STUDIO' && currentView === 'WISHLIST');
            return `
              <button 
                class="nav-menu-link ${isActive ? 'active' : ''}" 
                data-action="nav-category" 
                data-category="${cat}"
              >
                <span>${cat}</span>
              </button>
            `;
          }).join('')}
        </nav>
      </div>

      <!-- Center: Search Input -->
      <div class="header-search-bar">
        <i data-lucide="search" class="search-icon"></i>
        <input 
          type="text" 
          class="search-input" 
          placeholder="Search for products, brands and more" 
          value="${store.filters.searchQuery || ''}"
          id="header-search-input"
          aria-label="Search"
        />
      </div>

      <!-- Right: User Actions (Profile, Wishlist, Bag) -->
      <div class="header-user-actions">
        
        <!-- Profile Button & Dropdown -->
        <div class="profile-dropdown-anchor">
          <button 
            class="user-action-btn ${currentView === 'PROFILE' ? 'active-link' : ''}" 
            data-action="toggle-profile" 
            aria-label="User Profile"
          >
            <i data-lucide="user"></i>
            <span class="action-label">Profile</span>
          </button>

          <!-- Desktop Profile Popover / Dropdown Menu -->
          <div class="header-profile-popover ${isProfileDropdownOpen ? 'show' : ''}" id="header-profile-popover">
            <div class="popover-user-card">
              <div class="popover-greeting">Welcome</div>
              <div class="popover-user-name">${userProfile.fullName}</div>
              <div class="popover-insider-badge">
                <i data-lucide="sparkles" style="width: 11px; height: 11px; fill: #D5A118; color: #D5A118;"></i>
                <span>${userProfile.insiderTier}</span>
              </div>
            </div>

            <div class="popover-menu-divider"></div>

            <div class="popover-links-list">
              <button class="popover-link-item" data-action="open-profile-tab" data-tab="orders">
                <i data-lucide="package"></i>
                <span>Orders & Returns</span>
              </button>
              <button class="popover-link-item" data-action="open-profile-tab" data-tab="stylestudio-looks">
                <i data-lucide="sparkles"></i>
                <span>StyleStudio Looks</span>
              </button>
              <button class="popover-link-item" data-action="open-profile-tab" data-tab="addresses">
                <i data-lucide="map-pin"></i>
                <span>Saved Addresses</span>
              </button>
              <button class="popover-link-item" data-action="open-profile-tab" data-tab="coupons">
                <i data-lucide="ticket"></i>
                <span>Coupons & Perks</span>
              </button>
              <button class="popover-link-item" data-action="open-profile-tab" data-tab="insider">
                <i data-lucide="crown"></i>
                <span>Myntra Insider (${userProfile.insiderPoints} pts)</span>
              </button>
            </div>

            <div class="popover-menu-divider"></div>

            <button class="btn-popover-profile" data-action="open-profile-tab" data-tab="overview">
              <span>VIEW FULL PROFILE</span>
            </button>
          </div>
        </div>

        <!-- Wishlist Button -->
        <button 
          class="user-action-btn ${currentView === 'WISHLIST' || currentView === 'STUDIO' ? 'active-link' : ''}" 
          data-action="nav-category" 
          data-category="WISHLIST" 
          aria-label="Wishlist"
        >
          <div class="action-icon-wrap">
            <i data-lucide="heart" class="wishlist-header-icon" style="${wishlistCount > 0 ? 'fill: var(--myntra-crimson); color: var(--myntra-crimson);' : ''}"></i>
            ${wishlistCount > 0 ? `<span class="action-badge">${wishlistCount}</span>` : ''}
          </div>
          <span class="action-label">Wishlist</span>
        </button>

        <!-- Shopping Bag Button -->
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

  // Event delegation
  container.onclick = (e) => {
    // 1. Category or Wishlist Navigation
    const navBtn = e.target.closest('[data-action="nav-category"]');
    if (navBtn) {
      const targetCat = navBtn.dataset.category;
      store.toggleProfileDropdown(false);
      if (targetCat === 'STUDIO') {
        store.setCurrentView('WISHLIST');
      } else {
        store.setCurrentView(targetCat);
      }
      return;
    }

    // 2. Toggle Profile Dropdown or Navigate to Profile
    if (e.target.closest('[data-action="toggle-profile"]')) {
      if (store.currentView === 'PROFILE') {
        store.toggleProfileDropdown();
      } else {
        store.setCurrentView('PROFILE');
      }
      return;
    }

    // 3. Open Specific Profile Tab
    const tabLink = e.target.closest('[data-action="open-profile-tab"]');
    if (tabLink) {
      store.setProfileTab(tabLink.dataset.tab);
      store.setCurrentView('PROFILE');
      store.toggleProfileDropdown(false);
      return;
    }

    // 4. Toggle Bag Drawer
    if (e.target.closest('[data-action="toggle-bag"]')) {
      store.toggleProfileDropdown(false);
      store.toggleBag();
      return;
    }
  };

  // Search input handler
  const searchInput = container.querySelector('#header-search-input');
  if (searchInput) {
    searchInput.oninput = (e) => {
      store.setSearchQuery(e.target.value);
    };
  }
}
