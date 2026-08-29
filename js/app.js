/**
 * Myntra StyleStudio — Main Application Entry Point
 * Coordinates dynamic routing across all 5 navigation screens.
 */

import { renderHeader } from './components/MyntraHeader.js';
import { renderWishlistGrid, renderBottomNavBar } from './components/WishlistGrid.js';
import { renderBrowseView } from './components/BrowseView.js';
import { renderHomeView } from './components/HomeView.js';
import { renderProfileView } from './components/ProfileView.js';
import { renderStyleDrawer } from './components/StyleDrawer.js';
import { store } from './state/store.js';

function renderApp() {
  // 1. Render Header
  renderHeader();

  // 2. Render Active Screen
  switch (store.activeTab) {
    case 'home':
      renderHomeView();
      break;
    case 'explore':
      renderBrowseView();
      break;
    case 'wishlist':
      renderWishlistGrid();
      break;
    case 'profile':
      renderProfileView();
      break;
    case 'studio':
      renderWishlistGrid();
      break;
    default:
      renderBrowseView();
  }

  // 3. Render Bottom Navigation Bar
  renderBottomNavBar();

  // 4. Render StyleStudio AI Bottom Sheet Drawer
  renderStyleDrawer();
}

document.addEventListener('DOMContentLoaded', () => {
  renderApp();

  // Subscribe to reactive store changes
  store.subscribe(() => {
    renderApp();
  });

  console.log('✨ Myntra StyleStudio 5-Tab Navigation initialized.');
});
