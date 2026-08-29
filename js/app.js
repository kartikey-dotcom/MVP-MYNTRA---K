/**
 * Myntra StyleStudio — Main Application Entry Point
 */

import { renderHeader } from './components/MyntraHeader.js';
import { renderWishlistGrid, renderBottomNavBar } from './components/WishlistGrid.js';
import { renderBrowseView } from './components/BrowseView.js';
import { renderStyleDrawer } from './components/StyleDrawer.js';
import { store } from './state/store.js';

function renderApp() {
  // 1. Render Header (with dynamic title "Wishlist" or "Browse Products")
  renderHeader();

  // 2. Render Main Screen based on active tab
  if (store.activeTab === 'wishlist') {
    renderWishlistGrid();
  } else {
    renderBrowseView();
  }

  // 3. Render Bottom Navigation Bar
  renderBottomNavBar();

  // 4. Render StyleStudio AI Bottom Sheet Drawer
  renderStyleDrawer();
}

document.addEventListener('DOMContentLoaded', () => {
  renderApp();

  // Subscribe to store updates
  store.subscribe(() => {
    renderApp();
  });

  console.log('✨ Myntra StyleStudio & Browse Products loaded.');
});
