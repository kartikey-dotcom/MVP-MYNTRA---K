/**
 * Desktop Wishlist Card Component
 * Matches the Stitch design: Image with top-right '✕', 'STYLESTUDIO HERO' badge, Brand, Title, Price with discount, 'MOVE TO BAG' button.
 */

import { store } from '../state/store.js';

export function renderWishlistCardHTML(item) {
  const isCurrentHero = store.activeHeroItem?.id === item.id;
  const originalPriceHtml = item.originalPrice 
    ? `<span class="price-original">₹${item.originalPrice.toLocaleString('en-IN')}</span>` 
    : '';
  const discountHtml = item.discount 
    ? `<span class="price-discount">(${item.discount})</span>` 
    : '';

  return `
    <article class="desktop-wishlist-card ${isCurrentHero ? 'is-active-hero' : ''}" data-item-id="${item.id}">
      <div class="card-media-wrapper" data-action="select-hero" data-item-id="${item.id}">
        <img 
          src="${item.imageUrl}" 
          alt="${item.imageAlt || item.name}" 
          class="card-img"
          loading="lazy"
          onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1551803091-e20673f15770?auto=format&fit=crop&w=700&q=80';"
        />

        <!-- Top Right Remove '✕' Button -->
        <button 
          class="card-remove-btn" 
          data-action="remove-wishlist-item" 
          data-item-id="${item.id}" 
          aria-label="Remove from Wishlist"
          title="Remove item"
        >
          <i data-lucide="x"></i>
        </button>

        <!-- StyleStudio Hero Tag Overlay -->
        ${(item.isHero || isCurrentHero) ? `
          <div class="hero-tag-overlay">
            <i data-lucide="star" style="width: 11px; height: 11px; fill: #FFFFFF;"></i>
            <span>STYLESTUDIO HERO</span>
          </div>
        ` : ''}
      </div>

      <!-- Card Metadata -->
      <div class="card-info" data-action="select-hero" data-item-id="${item.id}">
        <h4 class="card-brand-name">${item.brand}</h4>
        <p class="card-product-title" title="${item.name}">${item.name}</p>
        
        <div class="card-price-row">
          <span class="price-current">₹${item.price.toLocaleString('en-IN')}</span>
          ${originalPriceHtml}
          ${discountHtml}
        </div>

        <!-- MOVE TO BAG CTA -->
        <button class="btn-move-to-bag" data-action="move-to-bag" data-item-id="${item.id}">
          <span>MOVE TO BAG</span>
        </button>
      </div>
    </article>
  `;
}
