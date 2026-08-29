/**
 * MyntraHeader Component
 * Renders dynamic header title depending on active tab ("Wishlist" or "Browse Products").
 */

import { store } from '../state/store.js';

export function renderHeader() {
  const container = document.getElementById('header-container');
  if (!container) return;

  const isWishlistTab = store.activeTab === 'wishlist';
  const headerTitle = isWishlistTab ? 'Wishlist' : 'Browse Products';

  container.innerHTML = `
    <div class="header-left">
      <button class="icon-btn" data-action="nav-back" aria-label="Go Back" title="Back">
        <i data-lucide="arrow-left" style="width: 22px; height: 22px;"></i>
      </button>
    </div>
    
    <div class="header-title-center">${headerTitle}</div>

    <div class="header-right">
      <button class="icon-btn" aria-label="Search" title="Search">
        <i data-lucide="search" style="width: 21px; height: 21px;"></i>
      </button>
    </div>
  `;

  // Back button event: if in wishlist, go back to explore; if in explore, go to wishlist
  const backBtn = container.querySelector('[data-action="nav-back"]');
  if (backBtn) {
    backBtn.onclick = () => {
      if (store.activeTab === 'wishlist') {
        store.setActiveTab('explore');
      } else {
        store.setActiveTab('wishlist');
      }
    };
  }

  if (window.lucide) {
    window.lucide.createIcons();
  }
}
