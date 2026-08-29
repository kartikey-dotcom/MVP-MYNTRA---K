/**
 * Myntra StyleStudio — Main Application Entry Point
 */

import { renderHeader } from './components/MyntraHeader.js';
import { renderWishlistGrid } from './components/WishlistGrid.js';
import { renderStyleDrawer } from './components/StyleDrawer.js';
import { store } from './state/store.js';

function renderApp() {
  // 1. Render Centered Header
  renderHeader();

  // 2. Render 2-Column Wishlist Grid
  renderWishlistGrid();

  // 3. Render StyleStudio AI Bottom Sheet Drawer
  renderStyleDrawer();
}

document.addEventListener('DOMContentLoaded', () => {
  renderApp();

  // Subscribe to store updates
  store.subscribe(() => {
    renderApp();
  });

  console.log('✨ Myntra StyleStudio AI UI loaded.');
});
