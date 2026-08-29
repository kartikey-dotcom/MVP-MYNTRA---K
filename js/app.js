/**
 * Myntra StyleStudio — Main Application Entry Point
 */

import { renderHeader } from './components/MyntraHeader.js';
import { renderWishlistGrid } from './components/WishlistGrid.js';
import { renderStyleDrawer } from './components/StyleDrawer.js';
import { store } from './state/store.js';

function renderApp() {
  // 1. Render Header with updated item count
  renderHeader(store.wishlistItems.length);

  // 2. Render Wishlist Grid
  renderWishlistGrid();

  // 3. Render StyleStudio Bottom Sheet Drawer
  renderStyleDrawer();
}

document.addEventListener('DOMContentLoaded', () => {
  // Initial render
  renderApp();

  // Subscribe to store updates
  store.subscribe(() => {
    renderApp();
  });

  console.log('✨ Myntra StyleStudio MVP initialized successfully (Phase 4).');
});
