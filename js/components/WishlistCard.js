/**
 * WishlistCard Component (Screenshot 1 Match)
 * Renders individual product card with round floating heart button and cyan "STYLE THIS" CTA.
 */

/**
 * Generates the HTML for a Wishlist product card.
 * @param {import('../types/index.js').WishlistItem} item
 * @returns {string}
 */
export function renderWishlistCardHTML(item) {
  return `
    <article class="wishlist-card" data-item-id="${item.id}">
      <div class="card-image-wrap">
        <img 
          src="${item.imageUrl}" 
          alt="${item.imageAlt || item.name}" 
          class="card-image"
          loading="lazy"
          onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&w=700&q=80';"
        />
        
        <!-- Floating Round White Heart Button -->
        <button class="card-heart-btn" data-action="toggle-wishlist-heart" data-item-id="${item.id}" aria-label="Wishlist item" title="Wishlist">
          <i data-lucide="heart"></i>
        </button>
      </div>

      <!-- Product Metadata Details -->
      <div class="card-details">
        <h3 class="card-brand">${item.brand}</h3>
        <p class="card-name" title="${item.name}">${item.name}</p>
        
        <!-- "✨ STYLE THIS" CTA Button -->
        <button class="btn-style-this" data-action="style-this" data-item-id="${item.id}" aria-label="Style this item">
          <i data-lucide="sparkles" style="width: 14px; height: 14px;"></i>
          <span>STYLE THIS</span>
        </button>
      </div>
    </article>
  `;
}
