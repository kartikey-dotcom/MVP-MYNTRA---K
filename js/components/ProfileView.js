/**
 * ProfileView Component
 * Renders minimal, clean account profile screen matching Myntra's visual style.
 */

import { store } from '../state/store.js';

export function renderProfileView() {
  const container = document.getElementById('wishlist-container');
  if (!container) return;

  const savedCount = Object.keys(store.savedPairingIds).length;
  const wishlistCount = store.wishlistItems.length;

  container.innerHTML = `
    <!-- User Profile Card -->
    <div class="profile-user-card">
      <div class="profile-avatar-wrap">
        <div class="profile-avatar">AS</div>
      </div>
      <div class="profile-user-meta">
        <h3 class="profile-user-name">Ananya Sharma</h3>
        <div class="profile-insider-badge">
          <i data-lucide="award" style="width: 13px; height: 13px;"></i>
          <span>Myntra Insider Member</span>
        </div>
      </div>
    </div>

    <!-- Quick Stats Row -->
    <div class="profile-stats-row">
      <button class="profile-stat-box" data-action="go-to-wishlist">
        <span class="profile-stat-num">${wishlistCount}</span>
        <span class="profile-stat-label">Wishlist Items</span>
      </button>
      <button class="profile-stat-box" data-action="open-studio-saved">
        <span class="profile-stat-num">${savedCount}</span>
        <span class="profile-stat-label">Saved Looks</span>
      </button>
    </div>

    <!-- Account Navigation Menu Rows -->
    <div class="profile-menu-group">
      <div class="profile-menu-section-title">MY ACCOUNT</div>

      <button class="profile-menu-row" data-action="go-to-wishlist">
        <div class="profile-row-left">
          <i data-lucide="heart" class="profile-row-icon" style="color: var(--myntra-crimson);"></i>
          <span>My Wishlist</span>
        </div>
        <div class="profile-row-right">
          <span class="profile-badge-pill">${wishlistCount}</span>
          <i data-lucide="chevron-right" style="width: 16px; height: 16px; color: #9CA3AF;"></i>
        </div>
      </button>

      <button class="profile-menu-row" data-action="go-to-explore">
        <div class="profile-row-left">
          <i data-lucide="compass" class="profile-row-icon"></i>
          <span>Explore Catalog</span>
        </div>
        <div class="profile-row-right">
          <i data-lucide="chevron-right" style="width: 16px; height: 16px; color: #9CA3AF;"></i>
        </div>
      </button>

      <button class="profile-menu-row">
        <div class="profile-row-left">
          <i data-lucide="package" class="profile-row-icon"></i>
          <span>My Orders</span>
        </div>
        <div class="profile-row-right">
          <i data-lucide="chevron-right" style="width: 16px; height: 16px; color: #9CA3AF;"></i>
        </div>
      </button>

      <button class="profile-menu-row">
        <div class="profile-row-left">
          <i data-lucide="sliders" class="profile-row-icon"></i>
          <span>StyleStudio AI Preferences</span>
        </div>
        <div class="profile-row-right">
          <i data-lucide="chevron-right" style="width: 16px; height: 16px; color: #9CA3AF;"></i>
        </div>
      </button>

      <button class="profile-menu-row">
        <div class="profile-row-left">
          <i data-lucide="settings" class="profile-row-icon"></i>
          <span>Account Settings</span>
        </div>
        <div class="profile-row-right">
          <i data-lucide="chevron-right" style="width: 16px; height: 16px; color: #9CA3AF;"></i>
        </div>
      </button>
    </div>
  `;

  if (window.lucide) {
    window.lucide.createIcons();
  }

  // Event Delegation for Profile View
  setupProfileEvents(container);
}

function setupProfileEvents(container) {
  container.onclick = (e) => {
    if (e.target.closest('[data-action="go-to-wishlist"]')) {
      store.setActiveTab('wishlist');
      return;
    }
    if (e.target.closest('[data-action="go-to-explore"]')) {
      store.setActiveTab('explore');
      return;
    }
    if (e.target.closest('[data-action="open-studio-saved"]')) {
      if (store.wishlistItems.length > 0) {
        store.openDrawer(store.wishlistItems[0]);
      } else if (store.browseProducts.length > 0) {
        store.openDrawer(store.browseProducts[0]);
      }
      return;
    }
  };
}
