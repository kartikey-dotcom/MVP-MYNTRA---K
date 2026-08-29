/**
 * MyntraHeader Component
 * Renders dynamic header title and contextual actions depending on active tab.
 */

import { store } from '../state/store.js';

export function renderHeader() {
  const container = document.getElementById('header-container');
  if (!container) return;

  const { activeTab } = store;
  let headerTitle = 'Wishlist';

  switch (activeTab) {
    case 'home':
      headerTitle = 'Myntra';
      break;
    case 'explore':
      headerTitle = 'Explore Fashion';
      break;
    case 'wishlist':
      headerTitle = 'Wishlist';
      break;
    case 'studio':
      headerTitle = 'StyleStudio AI';
      break;
    case 'profile':
      headerTitle = 'My Profile';
      break;
    default:
      headerTitle = 'Wishlist';
  }

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

  // Back button event: navigation back fallback
  const backBtn = container.querySelector('[data-action="nav-back"]');
  if (backBtn) {
    backBtn.onclick = () => {
      if (store.activeTab === 'home') {
        store.setActiveTab('explore');
      } else {
        store.setActiveTab('home');
      }
    };
  }

  if (window.lucide) {
    window.lucide.createIcons();
  }
}
