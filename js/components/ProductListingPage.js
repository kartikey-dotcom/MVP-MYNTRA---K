/**
 * Product Listing Page (PLP) Component
 * Renders 4-column product grid, breadcrumbs, sort dropdown, and left filter sidebar.
 */

import { store } from '../state/store.js';
import { showToast } from './Toast.js';

export function renderProductListingPage() {
  const container = document.getElementById('main-workspace-container');
  if (!container) return;

  const currentCategory = store.currentView;
  const products = store.getFilteredProductsForCurrentCategory();
  
  // Category Display Titles
  const categoryMeta = {
    'WOMEN': { title: "Women's Western & Ethnic Wear", breadcrumb: "Women's Fashion" },
    'MEN': { title: "Men's Casual & Executive Wear", breadcrumb: "Men's Fashion" },
    'KIDS': { title: "Kids' Fashion & Daily Essentials", breadcrumb: "Kids Collection" },
    'BEAUTY': { title: "Beauty, Skincare & Personal Care", breadcrumb: "Beauty & Grooming" },
    'HOME & LIVING': { title: "Home Decor, Living & Textures", breadcrumb: "Home & Living" }
  };

  const meta = categoryMeta[currentCategory] || { title: `${currentCategory} Collection`, breadcrumb: currentCategory };

  // Get unique brands for current category
  const allCategoryProducts = store.allProducts.filter(p => p.category === currentCategory);
  const brands = ['All', ...new Set(allCategoryProducts.map(p => p.brand))];

  container.innerHTML = `
    <div class="plp-page-wrapper">
      
      <!-- Top Breadcrumbs & Title Bar -->
      <div class="plp-header-bar">
        <div class="plp-breadcrumbs">
          <a href="#" data-action="nav-home">Home</a>
          <span class="crumb-separator">/</span>
          <span class="crumb-active">${meta.breadcrumb}</span>
        </div>

        <div class="plp-title-sort-row">
          <div class="plp-title-wrap">
            <h1 class="plp-category-title">${meta.title}</h1>
            <span class="plp-item-count">- ${products.length} items</span>
          </div>

          <!-- Sort Dropdown -->
          <div class="plp-sort-container">
            <span class="sort-label">Sort by:</span>
            <select class="plp-sort-select" id="plp-sort-select" data-action="change-sort">
              <option value="recommended" ${store.filters.sortBy === 'recommended' ? 'selected' : ''}>Recommended</option>
              <option value="price-low" ${store.filters.sortBy === 'price-low' ? 'selected' : ''}>Price: Low to High</option>
              <option value="price-high" ${store.filters.sortBy === 'price-high' ? 'selected' : ''}>Price: High to Low</option>
              <option value="rating" ${store.filters.sortBy === 'rating' ? 'selected' : ''}>Customer Rating</option>
            </select>
          </div>
        </div>
      </div>

      <!-- Main PLP Body: Left Filters Sidebar + 4-Column Grid -->
      <div class="plp-main-layout">
        
        <!-- Left Filter Sidebar -->
        <aside class="plp-filter-sidebar" aria-label="Product Filters">
          <div class="filter-header-title">
            <span>FILTERS</span>
            <button class="filter-clear-btn" data-action="clear-filters">CLEAR ALL</button>
          </div>

          <!-- Brand Filter Group -->
          <div class="filter-group">
            <h4 class="filter-group-heading">BRAND</h4>
            <div class="filter-options-list">
              ${brands.map(b => `
                <label class="filter-checkbox-label">
                  <input 
                    type="radio" 
                    name="filter-brand" 
                    value="${b}" 
                    ${store.filters.brand === b ? 'checked' : ''} 
                    data-action="filter-brand"
                  />
                  <span>${b}</span>
                </label>
              `).join('')}
            </div>
          </div>

          <!-- Price Filter Group -->
          <div class="filter-group">
            <h4 class="filter-group-heading">PRICE</h4>
            <div class="filter-options-list">
              <label class="filter-checkbox-label">
                <input type="radio" name="filter-price" value="15000" ${store.filters.maxPrice >= 15000 ? 'checked' : ''} data-action="filter-price" />
                <span>All Prices</span>
              </label>
              <label class="filter-checkbox-label">
                <input type="radio" name="filter-price" value="3000" ${store.filters.maxPrice === 3000 ? 'checked' : ''} data-action="filter-price" />
                <span>Under ₹3,000</span>
              </label>
              <label class="filter-checkbox-label">
                <input type="radio" name="filter-price" value="5000" ${store.filters.maxPrice === 5000 ? 'checked' : ''} data-action="filter-price" />
                <span>Under ₹5,000</span>
              </label>
            </div>
          </div>

          <!-- StyleStudio Discovery Banner -->
          <div class="stylestudio-discovery-card" data-action="go-to-stylestudio">
            <div class="discovery-badge">✦ STYLESTUDIO AI</div>
            <p class="discovery-text">Any item you wishlist instantly unlocks <strong>3 real occasion pairings</strong>!</p>
            <button class="btn-discovery-action">Open Wishlist Studio →</button>
          </div>

        </aside>

        <!-- Right 4-Column Product Grid -->
        <main class="plp-product-grid-container">
          ${products.length === 0 ? `
            <div class="plp-empty-state">
              <h3>No products found</h3>
              <p>Try resetting your filters or search keywords.</p>
              <button class="btn-reset-filters" data-action="clear-filters">Reset Filters</button>
            </div>
          ` : `
            <div class="plp-4col-grid">
              ${products.map(product => {
                const isWishlisted = store.isItemWishlisted(product.id);
                return `
                  <article class="plp-product-card" data-product-id="${product.id}">
                    <div class="plp-card-image-wrap">
                      <img 
                        src="${product.image}" 
                        alt="${product.title}" 
                        class="plp-card-img"
                        loading="lazy"
                        onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1551803091-e20673f15770?auto=format&fit=crop&w=700&q=80';"
                      />

                      <!-- Rating Badge -->
                      <div class="plp-rating-badge">
                        <span class="rating-num">${product.rating || 4.5}</span>
                        <i data-lucide="star" style="width: 10px; height: 10px; fill: #03A685; color: #03A685;"></i>
                        <span class="rating-divider">|</span>
                        <span class="rating-count">${(product.ratingCount || 1000) > 999 ? `${((product.ratingCount || 1000)/1000).toFixed(1)}k` : product.ratingCount}</span>
                      </div>

                      <!-- Wishlist Heart Button -->
                      <button 
                        class="plp-wishlist-btn ${isWishlisted ? 'wishlisted' : ''}" 
                        data-action="toggle-card-wishlist" 
                        data-product-id="${product.id}"
                        aria-label="${isWishlisted ? 'Remove from Wishlist' : 'Add to Wishlist'}"
                        title="Wishlist"
                      >
                        <i data-lucide="heart" style="${isWishlisted ? 'fill: #FF3F6C; color: #FF3F6C;' : ''}"></i>
                      </button>

                      <!-- Style in Studio Quick CTA (on hover) -->
                      <button 
                        class="plp-quick-style-btn" 
                        data-action="quick-style-item" 
                        data-product-id="${product.id}"
                      >
                        <i data-lucide="sparkles" style="width: 13px; height: 13px;"></i>
                        <span>STYLE THIS PIECE</span>
                      </button>
                    </div>

                    <!-- Product Metadata -->
                    <div class="plp-card-info">
                      <h3 class="plp-brand-name">${product.brand}</h3>
                      <p class="plp-product-title" title="${product.title}">${product.title}</p>
                      
                      <div class="plp-price-row">
                        <span class="plp-price-current">₹${product.price.toLocaleString('en-IN')}</span>
                        ${product.originalPrice ? `<span class="plp-price-original">₹${product.originalPrice.toLocaleString('en-IN')}</span>` : ''}
                        ${product.discount ? `<span class="plp-price-discount">(${product.discount})</span>` : ''}
                      </div>
                    </div>
                  </article>
                `;
              }).join('')}
            </div>
          `}
        </main>

      </div>

    </div>
  `;

  if (window.lucide) {
    window.lucide.createIcons();
  }

  // Setup Event Delegation
  container.onclick = (e) => {
    // 1. Toggle Wishlist Heart
    const heartBtn = e.target.closest('[data-action="toggle-card-wishlist"]');
    if (heartBtn) {
      e.stopPropagation();
      const pId = heartBtn.dataset.productId;
      const targetProduct = store.allProducts.find(p => p.id === pId);
      if (targetProduct) {
        const isNowWishlisted = store.toggleWishlist(targetProduct);
        if (isNowWishlisted) {
          showToast(
            'Item saved to Wishlist! ❤️',
            'Now unlocked in StyleStudio for 3-way occasion pairing →',
            'success'
          );
        } else {
          showToast('Removed from Wishlist', targetProduct.title, 'info');
        }
      }
      return;
    }

    // 2. Quick Style Item (Add to Wishlist & switch to StyleStudio)
    const styleBtn = e.target.closest('[data-action="quick-style-item"]');
    if (styleBtn) {
      e.stopPropagation();
      const pId = styleBtn.dataset.productId;
      const targetProduct = store.allProducts.find(p => p.id === pId);
      if (targetProduct) {
        if (!store.isItemWishlisted(pId)) {
          store.toggleWishlist(targetProduct);
        }
        store.setActiveHeroSku(pId);
        store.setCurrentView('WISHLIST');
        showToast('StyleStudio Unlocked! ✨', `Styling ${targetProduct.brand} 3 ways`, 'success');
      }
      return;
    }

    // 3. Brand Filter selection
    const brandRadio = e.target.closest('[data-action="filter-brand"]');
    if (brandRadio) {
      store.setFilterBrand(brandRadio.value);
      return;
    }

    // 4. Price Filter selection
    const priceRadio = e.target.closest('[data-action="filter-price"]');
    if (priceRadio) {
      store.setFilterPrice(Number(priceRadio.value));
      return;
    }

    // 5. Clear Filters
    if (e.target.closest('[data-action="clear-filters"]')) {
      store.setFilterBrand('All');
      store.setFilterPrice(15000);
      store.setSortBy('recommended');
      store.setSearchQuery('');
      return;
    }

    // 6. Go to StyleStudio
    if (e.target.closest('[data-action="go-to-stylestudio"]')) {
      store.setCurrentView('WISHLIST');
      return;
    }

    // 7. Breadcrumb Home
    if (e.target.closest('[data-action="nav-home"]')) {
      store.setCurrentView('WOMEN');
      return;
    }
  };

  // Sort Dropdown change handler
  const sortSelect = container.querySelector('#plp-sort-select');
  if (sortSelect) {
    sortSelect.onchange = (e) => {
      store.setSortBy(e.target.value);
    };
  }
}
