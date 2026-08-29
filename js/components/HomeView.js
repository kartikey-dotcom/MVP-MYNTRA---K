/**
 * HomeView Component
 * Renders simple, elegant Home landing screen with welcome banner and trending product row.
 */

import { renderBrowseCardHTML } from './BrowseCard.js';
import { showToast } from './Toast.js';
import { store } from '../state/store.js';

export function renderHomeView() {
  const container = document.getElementById('wishlist-container');
  if (!container) return;

  const trendingProducts = store.browseProducts.slice(0, 6);

  container.innerHTML = `
    <!-- Welcome Hero Banner -->
    <div class="home-hero-banner">
      <div class="home-hero-badge">
        <i data-lucide="sparkles" style="width: 12px; height: 12px;"></i>
        <span>STYLESTUDIO AI POWERED</span>
      </div>
      <h2 class="home-hero-title">Elevate Your Everyday Style</h2>
      <p class="home-hero-sub">Discover curated garments and style any piece 3 distinct ways before you decide.</p>
      
      <div class="home-hero-actions">
        <button class="btn-home-cta" data-action="go-to-explore">
          <i data-lucide="compass" style="width: 15px; height: 15px;"></i>
          <span>Explore Catalog</span>
        </button>
        <button class="btn-home-secondary" data-action="go-to-wishlist">
          <i data-lucide="heart" style="width: 15px; height: 15px; fill: var(--myntra-crimson); color: var(--myntra-crimson);"></i>
          <span>My Wishlist (${store.wishlistItems.length})</span>
        </button>
      </div>
    </div>

    <!-- Trending Now Section Header -->
    <div class="home-section-header">
      <h3 class="home-section-title">Trending & Recommended</h3>
      <button class="home-see-all-btn" data-action="go-to-explore">See all <i data-lucide="chevron-right" style="width: 14px; height: 14px;"></i></button>
    </div>

    <!-- Product Grid for Home -->
    <div class="wishlist-grid" id="home-trending-grid">
      ${trendingProducts.map(product => renderBrowseCardHTML(product)).join('')}
    </div>
  `;

  if (window.lucide) {
    window.lucide.createIcons();
  }

  // Event Delegation for Home View
  setupHomeEvents(container);
}

function setupHomeEvents(container) {
  container.onclick = (e) => {
    // 1. Navigation CTA clicks
    if (e.target.closest('[data-action="go-to-explore"]')) {
      store.setActiveTab('explore');
      return;
    }
    if (e.target.closest('[data-action="go-to-wishlist"]')) {
      store.setActiveTab('wishlist');
      return;
    }

    // 2. Heart toggle on Home product cards
    const heartBtn = e.target.closest('[data-action="toggle-wishlist-heart"]');
    if (heartBtn) {
      const productId = heartBtn.dataset.productId;
      const targetProduct = store.browseProducts.find(p => p.id === productId);
      if (targetProduct) {
        const isNowWishlisted = store.toggleWishlist(targetProduct);
        if (isNowWishlisted) {
          showToast('Added to Wishlist! ♥', `You can style "${targetProduct.name}" in Wishlist`, 'success');
        } else {
          showToast('Removed from Wishlist', targetProduct.name, 'info');
        }
      }
      return;
    }
  };
}
