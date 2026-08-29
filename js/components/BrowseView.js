/**
 * BrowseView Component
 * Renders the "Browse Products" screen with category filters, scrollable product grid, and heart toggle interaction.
 */

import { renderBrowseCardHTML } from './BrowseCard.js';
import { showToast } from './Toast.js';
import { store } from '../state/store.js';

export function renderBrowseView() {
  const container = document.getElementById('wishlist-container');
  if (!container) return;

  const { browseProducts, selectedBrowseCategory } = store;

  // Filter products by selected category
  const filteredProducts = selectedBrowseCategory === 'All'
    ? browseProducts
    : browseProducts.filter(p => 
        p.category.toLowerCase().includes(selectedBrowseCategory.toLowerCase()) || 
        p.subCategory.toLowerCase().includes(selectedBrowseCategory.toLowerCase()) ||
        p.tags.some(t => t.toLowerCase() === selectedBrowseCategory.toLowerCase())
      );

  const categories = ['All', 'Blazers', 'Dresses', 'Trousers', 'Footwear', 'Topwear'];

  container.innerHTML = `
    <!-- Category Filter Bar -->
    <div class="browse-category-nav" aria-label="Filter Products">
      ${categories.map(cat => `
        <button 
          class="browse-cat-pill ${selectedBrowseCategory === cat ? 'active' : ''}" 
          data-action="filter-browse-category" 
          data-category="${cat}"
        >
          ${cat}
        </button>
      `).join('')}
    </div>

    <!-- Browse Helper Banner -->
    <div class="browse-info-banner">
      <i data-lucide="sparkles" style="width: 16px; height: 16px; color: var(--myntra-crimson);"></i>
      <span>Tap <strong>♥</strong> to add any piece to your <strong>Wishlist</strong> and style it 3 ways.</span>
    </div>

    <!-- 2-Column Browse Product Grid -->
    <div class="wishlist-grid" id="browse-grid-list">
      ${filteredProducts.map(product => renderBrowseCardHTML(product)).join('')}
    </div>
  `;

  if (window.lucide) {
    window.lucide.createIcons();
  }

  // Setup Event Delegation for Browse View
  setupBrowseEvents(container);
}

/**
 * Attaches event delegation for Browse screen
 * @param {HTMLElement} container
 */
function setupBrowseEvents(container) {
  container.onclick = (e) => {
    // 1. Heart toggle or quick wishlist button
    const heartBtn = e.target.closest('[data-action="toggle-wishlist-heart"]');
    if (heartBtn) {
      const productId = heartBtn.dataset.productId;
      const targetProduct = store.browseProducts.find(p => p.id === productId);
      if (targetProduct) {
        const isNowWishlisted = store.toggleWishlist(targetProduct);
        if (isNowWishlisted) {
          showToast('Added to Wishlist! ♥', `You can now style "${targetProduct.name}" in Wishlist`, 'success');
        } else {
          showToast('Removed from Wishlist', targetProduct.name, 'info');
        }
      }
      return;
    }

    // 2. Category filter pill
    const catBtn = e.target.closest('[data-action="filter-browse-category"]');
    if (catBtn) {
      const category = catBtn.dataset.category;
      if (category) {
        store.setBrowseCategory(category);
      }
      return;
    }
  };
}
