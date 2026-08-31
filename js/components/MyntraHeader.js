/**
 * Myntra Desktop Header Component
 * Handles Category Navigation, Instant Live Search with Suggestions Dropdown,
 * User Profile Popover, Wishlist, and Bag Drawer.
 */

import { store } from '../state/store.js';

export function renderHeader() {
  const container = document.getElementById('header-container');
  if (!container) return;

  const activeInput = document.getElementById('header-search-input');
  const wasFocused = activeInput && (document.activeElement === activeInput);
  const cursorStart = activeInput ? activeInput.selectionStart : null;
  const cursorEnd = activeInput ? activeInput.selectionEnd : null;

  const categories = ['MEN', 'WOMEN', 'KIDS', 'HOME & LIVING', 'BEAUTY'];
  const { currentView, wishlistItems, userProfile, isProfileDropdownOpen } = store;
  const bagCount = store.getBagCount();
  const wishlistCount = wishlistItems.length;
  const searchQuery = store.filters.searchQuery || '';

  const suggestions = store.getSearchSuggestions(searchQuery);

  container.innerHTML = `
    <header class="desktop-header">
      <!-- Left: Logo & Categories -->
      <div class="header-brand-group">
        <a href="#" class="brand-logo" data-action="nav-category" data-category="WOMEN" aria-label="Myntra Home">
          <span class="brand-logo-text">MYNTRA</span>
        </a>

        <nav class="desktop-nav-menu" aria-label="Main Navigation">
          ${categories.map(cat => {
            const isActive = (currentView === cat);
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

      <!-- Center: Search Input & Instant Suggestions Dropdown -->
      <div class="header-search-bar-wrap">
        <div class="header-search-bar ${searchQuery ? 'has-query' : ''}">
          <i data-lucide="search" class="search-icon"></i>
          <input 
            type="text" 
            class="search-input" 
            placeholder="Search for products, brands and more (e.g. Blazer, Dress, Watch)" 
            value="${searchQuery}"
            id="header-search-input"
            autocomplete="off"
            aria-label="Search"
          />
          ${searchQuery ? `
            <button class="btn-clear-search" data-action="clear-search" aria-label="Clear Search">
              <i data-lucide="x"></i>
            </button>
          ` : ''}
        </div>

        <!-- Live Search Suggestions Popover -->
        <div class="search-suggestions-popover" id="search-suggestions-popover">
          ${suggestions.trending.length > 0 ? `
            <div class="suggestion-section">
              <div class="suggestion-header">
                <i data-lucide="trending-up" style="width: 12px; height: 12px; color: var(--myntra-crimson);"></i>
                <span>TRENDING SEARCHES</span>
              </div>
              <div class="trending-pills-row">
                ${suggestions.trending.map(term => `
                  <button class="trending-search-pill" data-action="quick-search" data-query="${term}">
                    <span>${term}</span>
                  </button>
                `).join('')}
              </div>
            </div>
          ` : ''}

          ${suggestions.items.length > 0 ? `
            <div class="suggestion-section">
              <div class="suggestion-header">
                <i data-lucide="sparkles" style="width: 12px; height: 12px; color: var(--myntra-crimson);"></i>
                <span>MATCHING PRODUCTS (${suggestions.items.length})</span>
              </div>
              <div class="suggestion-items-list">
                ${suggestions.items.map(p => `
                  <div class="suggestion-product-row" data-action="select-suggested-product" data-product-id="${p.id}">
                    <img src="${p.image || p.imageUrl}" alt="${p.title}" class="suggest-thumb" />
                    <div class="suggest-meta">
                      <span class="suggest-brand">${p.brand}</span>
                      <span class="suggest-title">${p.title}</span>
                    </div>
                    <div class="suggest-price-tag">
                      <span class="suggest-price">₹${p.price.toLocaleString('en-IN')}</span>
                      <span class="suggest-category">${p.category}</span>
                    </div>
                  </div>
                `).join('')}
              </div>
            </div>
          ` : ''}

          ${searchQuery && suggestions.items.length === 0 ? `
            <div class="suggestion-empty-state">
              <span>Press Enter to search for "<strong>${searchQuery}</strong>"</span>
            </div>
          ` : ''}
        </div>
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
          class="user-action-btn ${currentView === 'WISHLIST' ? 'active-link' : ''}" 
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

  // Restore focus if it was focused prior to re-render
  if (wasFocused) {
    const newInput = document.getElementById('header-search-input');
    if (newInput) {
      newInput.focus();
      if (cursorStart !== null && cursorEnd !== null) {
        newInput.setSelectionRange(cursorStart, cursorEnd);
      }
    }
  }

  // Event delegation
  container.onclick = (e) => {
    // 1. Category Navigation
    const navBtn = e.target.closest('[data-action="nav-category"]');
    if (navBtn) {
      const targetCat = navBtn.dataset.category;
      store.toggleProfileDropdown(false);
      store.clearSearchQuery();
      store.setCurrentView(targetCat);
      return;
    }

    // 2. Clear Search
    if (e.target.closest('[data-action="clear-search"]')) {
      store.clearSearchQuery();
      return;
    }

    // 3. Quick Trending Search
    const trendBtn = e.target.closest('[data-action="quick-search"]');
    if (trendBtn) {
      const q = trendBtn.dataset.query;
      store.setSearchQuery(q);
      return;
    }

    // 4. Select suggested product directly from search
    const suggestRow = e.target.closest('[data-action="select-suggested-product"]');
    if (suggestRow) {
      const pId = suggestRow.dataset.productId;
      const targetP = store.allProducts.find(p => p.id === pId);
      if (targetP) {
        if (!store.isItemWishlisted(pId)) {
          store.toggleWishlist(targetP);
        }
        store.setActiveHeroSku(pId);
        store.setCurrentView('WISHLIST');
      }
      return;
    }

    // 5. Toggle Profile Dropdown
    if (e.target.closest('[data-action="toggle-profile"]')) {
      if (store.currentView === 'PROFILE') {
        store.toggleProfileDropdown();
      } else {
        store.setCurrentView('PROFILE');
      }
      return;
    }

    // 6. Open Profile Tab
    const tabLink = e.target.closest('[data-action="open-profile-tab"]');
    if (tabLink) {
      store.setProfileTab(tabLink.dataset.tab);
      store.setCurrentView('PROFILE');
      store.toggleProfileDropdown(false);
      return;
    }

    // 7. Toggle Bag Drawer
    if (e.target.closest('[data-action="toggle-bag"]')) {
      store.toggleProfileDropdown(false);
      store.toggleBag();
      return;
    }
  };

  // Search input change & key listeners
  const searchInput = container.querySelector('#header-search-input');
  if (searchInput) {
    searchInput.oninput = (e) => {
      store.setSearchQuery(e.target.value);
    };

    searchInput.onkeydown = (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        store.setSearchQuery(e.target.value);
      } else if (e.key === 'Escape') {
        searchInput.blur();
      }
    };
  }
}
