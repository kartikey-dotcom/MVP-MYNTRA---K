/**
 * Myntra StyleStudio — Main Application Entry Point
 * Manages Dynamic View Routing (Product Listing Pages vs Wishlist + StyleStudio),
 * Header, Shopping Bag Drawer, and Footer.
 */

import { renderHeader } from './components/MyntraHeader.js';
import { renderProductListingPage } from './components/ProductListingPage.js';
import { renderProfilePage } from './components/ProfilePage.js';
import { renderWishlistGrid } from './components/WishlistGrid.js';
import { renderStyleStudioDesktop } from './components/StyleStudioDesktop.js';
import { renderShoppingBagDrawer } from './components/ShoppingBagDrawer.js';
import { renderProductDetailsModal } from './components/ProductDetailsModal.js';
import { renderFooter } from './components/Footer.js';
import { store } from './state/store.js';

function renderApp() {
  // 1. Render Header
  renderHeader();

  // 2. Render Dynamic Main Workspace
  const workspace = document.getElementById('main-workspace-container');
  if (workspace) {
    if (store.currentView === 'PROFILE') {
      // Full Profile Account Page
      renderProfilePage();
    } else if (store.currentView === 'WISHLIST') {
      // Wishlist + StyleStudio Split Screen Layout
      workspace.innerHTML = `
        <div class="desktop-content-container">
          <section class="wishlist-column-section" id="wishlist-column-container" aria-label="My Wishlist"></section>
          <section class="stylestudio-column-section" id="stylestudio-column-container" aria-label="StyleStudio Showcase"></section>
        </div>
      `;
      renderWishlistGrid();
      renderStyleStudioDesktop();
    } else {
      // Category Product Listing Page (WOMEN, MEN, KIDS, BEAUTY, HOME & LIVING, SEARCH)
      renderProductListingPage();
    }
  }

  // 3. Render Product Details Modal (PDP View)
  renderProductDetailsModal();

  // 4. Render Shopping Bag Drawer
  renderShoppingBagDrawer();

  // 5. Render Footer
  renderFooter();

  if (window.lucide) {
    window.lucide.createIcons();
  }
}

document.addEventListener('DOMContentLoaded', () => {
  renderApp();

  // Subscribe to reactive store changes
  store.subscribe(() => {
    renderApp();
  });

  console.log('✨ Myntra StyleStudio Multi-Category Desktop App initialized.');
});
