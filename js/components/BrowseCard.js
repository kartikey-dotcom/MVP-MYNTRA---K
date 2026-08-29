/**
 * BrowseCard Component
 * Renders individual product card for the Browse Products screen with interactive Heart toggle.
 */

import { store } from '../state/store.js';

/**
 * Generates the HTML for a Browse product card.
 * @param {import('../types/index.js').CatalogItem} product
 * @returns {string}
 */
export function renderBrowseCardHTML(product) {
  const isWishlisted = store.isItemInWishlist(product.id);

  return `
    <article class="wishlist-card browse-card" data-product-id="${product.id}">
      <div class="card-image-wrap">
        <img 
          src="${product.imageUrl}" 
          alt="${product.imageAlt || product.name}" 
          class="card-image"
          loading="lazy"
          onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&w=700&q=80';"
        />
        
        <!-- Interactive Heart Toggle Button (Filled Pink if wishlisted, Outline if not) -->
        <button 
          class="card-heart-btn ${isWishlisted ? 'wishlisted' : 'unwishlisted'}" 
          data-action="toggle-wishlist-heart" 
          data-product-id="${product.id}" 
          aria-label="${isWishlisted ? 'Remove from wishlist' : 'Add to wishlist'}" 
          title="${isWishlisted ? 'In Wishlist' : 'Add to Wishlist'}"
        >
          <i data-lucide="heart" style="${isWishlisted ? 'fill: var(--myntra-crimson); color: var(--myntra-crimson);' : 'fill: none; color: #6B7280;'}"></i>
        </button>
      </div>

      <!-- Product Metadata Details (Brand & Title) -->
      <div class="card-details">
        <h3 class="card-brand">${product.brand}</h3>
        <p class="card-name" title="${product.name}">${product.name}</p>

        <!-- Quick Wishlist Status Action Button -->
        <button 
          class="btn-browse-wishlist-toggle ${isWishlisted ? 'in-wishlist' : ''}" 
          data-action="toggle-wishlist-heart" 
          data-product-id="${product.id}"
        >
          <i data-lucide="${isWishlisted ? 'check' : 'plus'}" style="width: 13px; height: 13px;"></i>
          <span>${isWishlisted ? 'In Wishlist' : 'Add to Wishlist'}</span>
        </button>
      </div>
    </article>
  `;
}
