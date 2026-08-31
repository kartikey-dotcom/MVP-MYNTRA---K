/**
 * Myntra StyleStudio — Main Desktop Application Entry Point
 * Coordinates Header, Wishlist Grid, StyleStudio Showcase, Shopping Bag Drawer, and Footer.
 */

import { renderHeader } from './components/MyntraHeader.js';
import { renderWishlistGrid } from './components/WishlistGrid.js';
import { renderStyleStudioDesktop } from './components/StyleStudioDesktop.js';
import { renderShoppingBagDrawer } from './components/ShoppingBagDrawer.js';
import { renderFooter } from './components/Footer.js';
import { store } from './state/store.js';

function renderApp() {
  // 1. Render Desktop Header
  renderHeader();

  // 2. Render Left Column: Wishlist Grid
  renderWishlistGrid();

  // 3. Render Right Column: StyleStudio Showcase
  renderStyleStudioDesktop();

  // 4. Render Shopping Bag Slide-Over Drawer
  renderShoppingBagDrawer();

  // 5. Render Desktop Footer
  renderFooter();
}

document.addEventListener('DOMContentLoaded', () => {
  renderApp();

  // Subscribe to reactive store state changes
  store.subscribe(() => {
    renderApp();
  });

  console.log('✨ Myntra StyleStudio Desktop View initialized.');
});
