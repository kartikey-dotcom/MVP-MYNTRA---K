/**
 * StyleDrawer Component (Screenshots 2 & 3 Match)
 * Renders the StyleStudio AI bottom drawer with occasion navigation and pairing cards.
 */

import { renderDrawerHeaderHTML } from './DrawerHeader.js';
import { renderOccasionNavHTML } from './OccasionNav.js';
import { renderPairingCardHTML } from './PairingCard.js';
import { showToast } from './Toast.js';
import { getPairingsForAnchor } from '../data/pairingEngine.js';
import { store } from '../state/store.js';

let escListenerAttached = false;

export function renderStyleDrawer() {
  const drawerRoot = document.getElementById('drawer-root');
  if (!drawerRoot) return;

  const { isDrawerOpen, activeAnchorItem, selectedOccasionFilter } = store;

  if (!activeAnchorItem) {
    drawerRoot.innerHTML = '';
    return;
  }

  // Fetch hydrated pairings for the active anchor item
  const pairings = getPairingsForAnchor(activeAnchorItem.id, selectedOccasionFilter);

  drawerRoot.innerHTML = `
    <!-- Backdrop Overlay -->
    <div class="drawer-backdrop ${isDrawerOpen ? 'active' : ''}" id="style-drawer-backdrop" data-action="close-drawer"></div>

    <!-- Bottom Sheet Drawer Container -->
    <div class="drawer-container ${isDrawerOpen ? 'open' : ''}" id="style-drawer-body" role="dialog" aria-modal="true" aria-label="StyleStudio AI">
      
      <!-- Drawer Header -->
      ${renderDrawerHeaderHTML(activeAnchorItem)}

      <!-- Occasion Navigation Filter Pills -->
      ${renderOccasionNavHTML(activeAnchorItem.id, selectedOccasionFilter)}

      <!-- Scrollable Pairing List -->
      <div class="drawer-content-scroll" id="drawer-pairing-list">
        ${pairings.map(pairing => renderPairingCardHTML(pairing, activeAnchorItem)).join('')}
      </div>

    </div>
  `;

  if (window.lucide) {
    window.lucide.createIcons();
  }

  // Setup Event Handlers (Close, Filter, Save, Esc)
  setupDrawerEvents(drawerRoot);
}

function setupDrawerEvents(drawerRoot) {
  drawerRoot.onclick = (e) => {
    // 1. Close button or backdrop click
    if (e.target.closest('[data-action="close-drawer"]')) {
      store.closeDrawer();
      return;
    }

    // 2. Filter Occasion click
    const filterBtn = e.target.closest('[data-action="filter-occasion"]');
    if (filterBtn) {
      const occasion = filterBtn.dataset.occasion;
      if (occasion) {
        store.setOccasionFilter(occasion);
      }
      return;
    }

    // 3. Save Pairing click
    const saveBtn = e.target.closest('[data-action="toggle-save-pairing"]');
    if (saveBtn) {
      const pairingId = saveBtn.dataset.pairingId;
      if (pairingId && store.activeAnchorItem) {
        const isNowSaved = store.toggleSavePairing(pairingId);
        if (isNowSaved) {
          showToast('Look saved!', 'Added to your saved styling looks ✨', 'success');
        } else {
          showToast('Look removed from saved', '', 'info');
        }
      }
      return;
    }
  };

  // Keyboard Escape Handler
  if (!escListenerAttached) {
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && store.isDrawerOpen) {
        store.closeDrawer();
      }
    });
    escListenerAttached = true;
  }
}
