/**
 * Product Details Page / Modal Component (Myntra Desktop PDP)
 * Provides authentic e-commerce inspection before adding to Wishlist, Cart, or Buying Now.
 */

import { store } from '../state/store.js';
import { showToast } from './Toast.js';

export function renderProductDetailsModal() {
  const container = document.getElementById('product-details-modal-container');
  if (!container) return;

  const product = store.selectedProductDetails;
  if (!product) {
    container.innerHTML = '';
    return;
  }

  const isWishlisted = store.isItemWishlisted(product.id);
  const selectedSize = store.selectedProductSize || 'M';
  const deliveryPincode = store.deliveryPincode || '560038';

  // Determine size options based on category & subcategory
  let sizeOptions = ['XS', 'S', 'M', 'L', 'XL'];
  if (product.subCategory === 'Footwear') {
    sizeOptions = ['UK 6', 'UK 7', 'UK 8', 'UK 9', 'UK 10'];
  } else if (['BEAUTY', 'HOME & LIVING'].includes(product.category) || product.subCategory === 'Accessories') {
    sizeOptions = ['Standard', 'Pack of 1'];
  }

  const mainImage = product.image || product.imageUrl;

  container.innerHTML = `
    <div class="pdp-modal-overlay" id="pdp-modal-overlay" data-action="close-pdp-backdrop">
      <div class="pdp-modal-dialog">
        
        <!-- Close Button -->
        <button class="pdp-modal-close-btn" data-action="close-pdp-modal" aria-label="Close Product Details">
          <i data-lucide="x"></i>
        </button>

        <div class="pdp-modal-body">
          
          <!-- Left: Product Media Gallery -->
          <div class="pdp-media-column">
            <div class="pdp-main-image-wrap">
              <img src="${mainImage}" alt="${product.title}" class="pdp-main-image" id="pdp-active-main-image" />
              
              <!-- Floating Rating Pill -->
              ${product.rating ? `
                <div class="pdp-image-rating-badge">
                  <span class="rating-num">${product.rating}</span>
                  <i data-lucide="star" class="rating-star-icon"></i>
                  <span class="rating-divider">|</span>
                  <span class="rating-count-text">${product.ratingCount || 120} Ratings</span>
                </div>
              ` : ''}
            </div>

            <!-- Mini thumbnail previews -->
            <div class="pdp-thumbnails-strip">
              <div class="pdp-thumb-item active" data-action="switch-pdp-image" data-img-src="${mainImage}">
                <img src="${mainImage}" alt="Front view" />
              </div>
              <div class="pdp-thumb-item" data-action="switch-pdp-image" data-img-src="${mainImage}">
                <img src="${mainImage}" alt="Detail view" style="filter: brightness(0.95);" />
              </div>
            </div>
          </div>

          <!-- Right: Product Information & Purchase CTAs -->
          <div class="pdp-info-column">
            
            <!-- Brand & Title -->
            <div class="pdp-header-section">
              <h2 class="pdp-brand-name">${product.brand}</h2>
              <p class="pdp-product-title">${product.title}</p>
            </div>

            <!-- Price & Discounts -->
            <div class="pdp-pricing-section">
              <div class="pdp-price-row">
                <span class="pdp-price-current">₹${product.price.toLocaleString('en-IN')}</span>
                ${product.originalPrice && product.originalPrice > product.price ? `
                  <span class="pdp-price-original">MRP ₹${product.originalPrice.toLocaleString('en-IN')}</span>
                ` : ''}
                ${product.discount ? `
                  <span class="pdp-price-discount">(${product.discount})</span>
                ` : ''}
              </div>
              <span class="pdp-tax-note">inclusive of all taxes</span>
            </div>

            <div class="pdp-divider"></div>

            <!-- Size Selector -->
            <div class="pdp-size-section">
              <div class="pdp-size-header">
                <span class="pdp-size-label">SELECT SIZE</span>
                <span class="pdp-size-chart-link">SIZE CHART</span>
              </div>
              <div class="pdp-size-options-row">
                ${sizeOptions.map(sz => `
                  <button 
                    type="button"
                    class="pdp-size-btn ${selectedSize === sz ? 'selected' : ''}" 
                    data-action="select-size" 
                    data-size="${sz}"
                  >
                    <span>${sz}</span>
                  </button>
                `).join('')}
              </div>
            </div>

            <!-- Primary Action Buttons (Add to Bag, Wishlist, Buy Now, StyleStudio) -->
            <div class="pdp-cta-group">
              
              <div class="pdp-main-buttons-row">
                <!-- 1. Add to Bag -->
                <button type="button" class="btn-pdp-add-bag" data-action="pdp-add-bag">
                  <i data-lucide="shopping-bag"></i>
                  <span>ADD TO BAG</span>
                </button>

                <!-- 2. Wishlist Toggle -->
                <button type="button" class="btn-pdp-wishlist ${isWishlisted ? 'wishlisted' : ''}" data-action="pdp-toggle-wishlist">
                  <i data-lucide="heart" style="${isWishlisted ? 'fill: var(--myntra-crimson); color: var(--myntra-crimson);' : ''}"></i>
                  <span>${isWishlisted ? 'WISHLISTED' : 'WISHLIST'}</span>
                </button>
              </div>

              <!-- 3. Buy Now & StyleStudio Multi-Actions -->
              <div class="pdp-secondary-buttons-row">
                <button type="button" class="btn-pdp-buy-now" data-action="pdp-buy-now">
                  <i data-lucide="zap"></i>
                  <span>BUY NOW (FAST CHECKOUT)</span>
                </button>

                <button type="button" class="btn-pdp-stylestudio" data-action="pdp-open-stylestudio">
                  <i data-lucide="sparkles"></i>
                  <span>STYLE IN STYLESTUDIO (3 WAYS)</span>
                </button>
              </div>

            </div>

            <div class="pdp-divider"></div>

            <!-- Delivery & Services Checker -->
            <div class="pdp-delivery-section">
              <div class="pdp-delivery-header">
                <span class="delivery-label">DELIVERY OPTIONS</span>
                <i data-lucide="truck" class="delivery-truck-icon"></i>
              </div>

              <div class="pdp-pincode-form">
                <input 
                  type="text" 
                  class="pdp-pincode-input" 
                  value="${deliveryPincode}" 
                  maxlength="6"
                  placeholder="Enter 6-digit Pincode"
                  id="pdp-pincode-input"
                />
                <button type="button" class="btn-check-pincode" data-action="check-pincode">CHECK</button>
              </div>

              <ul class="pdp-delivery-perks-list">
                <li>
                  <i data-lucide="zap" class="perk-icon"></i>
                  <span>Get it by <strong>Tomorrow, 5:00 PM</strong> with Express</span>
                </li>
                <li>
                  <i data-lucide="credit-card" class="perk-icon"></i>
                  <span>Pay on Delivery available</span>
                </li>
                <li>
                  <i data-lucide="refresh-cw" class="perk-icon"></i>
                  <span>Easy 14 days returns & exchanges</span>
                </li>
              </ul>
            </div>

            <div class="pdp-divider"></div>

            <!-- Product Specifications & Highlights -->
            <div class="pdp-specs-section">
              <h4 class="specs-title">PRODUCT DETAILS</h4>
              <p class="specs-desc">Crafted with premium materials and tailored for a modern aesthetic. Suitable for versatile layering across everyday and smart-casual styling.</p>
              
              <div class="specs-grid">
                <div class="spec-cell">
                  <span class="spec-key">Category</span>
                  <span class="spec-val">${product.category}</span>
                </div>
                <div class="spec-cell">
                  <span class="spec-key">Sub-Category</span>
                  <span class="spec-val">${product.subCategory || 'Apparel'}</span>
                </div>
                <div class="spec-cell">
                  <span class="spec-key">Material</span>
                  <span class="spec-val">${product.tags?.[0] || '100% Premium Blend'}</span>
                </div>
                <div class="spec-cell">
                  <span class="spec-key">Authenticity</span>
                  <span class="spec-val">100% Genuine</span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  `;

  if (window.lucide) {
    window.lucide.createIcons();
  }

  // Setup Event Handlers
  container.onclick = (e) => {
    // 1. Close Modal
    if (e.target.closest('[data-action="close-pdp-modal"]') || e.target.classList.contains('pdp-modal-overlay')) {
      store.closeProductDetails();
      return;
    }

    // 2. Select Size
    const sizeBtn = e.target.closest('[data-action="select-size"]');
    if (sizeBtn) {
      const sz = sizeBtn.dataset.size;
      store.setSelectedProductSize(sz);
      return;
    }

    // 3. Add to Bag
    if (e.target.closest('[data-action="pdp-add-bag"]')) {
      store.addToBag(product, store.selectedProductSize);
      showToast('Added to Shopping Bag! 🛍️', `${product.brand} - ${product.title} (Size: ${store.selectedProductSize})`, 'success');
      return;
    }

    // 4. Toggle Wishlist
    if (e.target.closest('[data-action="pdp-toggle-wishlist"]')) {
      const isNowWish = store.toggleWishlist(product);
      if (isNowWish) {
        showToast('Saved to Wishlist! ❤️', `${product.brand} added to your wishlist`, 'success');
      } else {
        showToast('Removed from Wishlist', product.title, 'info');
      }
      return;
    }

    // 5. Buy Now (Add to Bag & open Drawer)
    if (e.target.closest('[data-action="pdp-buy-now"]')) {
      store.addToBag(product, store.selectedProductSize);
      store.closeProductDetails();
      store.toggleBag(true);
      showToast('Proceeding to Checkout ⚡', `${product.brand} added to your bag`, 'success');
      return;
    }

    // 6. Style in StyleStudio
    if (e.target.closest('[data-action="pdp-open-stylestudio"]')) {
      if (!store.isItemWishlisted(product.id)) {
        store.toggleWishlist(product);
      }
      store.setActiveHeroSku(product.id);
      store.closeProductDetails();
      store.setCurrentView('WISHLIST');
      showToast('StyleStudio Unlocked! ✨', `Styling ${product.brand} 3 ways`, 'success');
      return;
    }

    // 7. Check Pincode
    if (e.target.closest('[data-action="check-pincode"]')) {
      const pinInput = document.getElementById('pdp-pincode-input');
      if (pinInput && pinInput.value.length === 6) {
        store.setDeliveryPincode(pinInput.value);
        showToast('Pincode Verified! 🚚', `Delivery available to ${pinInput.value}`, 'success');
      } else {
        showToast('Invalid Pincode', 'Please enter a valid 6-digit postal code', 'error');
      }
      return;
    }

    // 8. Thumbnail image switcher
    const thumbItem = e.target.closest('[data-action="switch-pdp-image"]');
    if (thumbItem) {
      const imgSrc = thumbItem.dataset.imgSrc;
      const mainImg = document.getElementById('pdp-active-main-image');
      if (mainImg && imgSrc) {
        mainImg.src = imgSrc;
      }
      container.querySelectorAll('.pdp-thumb-item').forEach(t => t.classList.remove('active'));
      thumbItem.classList.add('active');
      return;
    }
  };
}
