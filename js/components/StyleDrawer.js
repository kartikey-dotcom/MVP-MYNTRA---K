/**
 * StyleDrawer Component
 * Bottom sheet drawer container for StyleStudio with affirmation toast dispatch.
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

  // Fetch hydrated pairings for the active anchor item and occasion filter
  const pairings = getPairingsForAnchor(activeAnchorItem.id, selectedOccasionFilter);
  const allPairingsForAnchor = getPairingsForAnchor(activeAnchorItem.id, 'All');

  drawerRoot.innerHTML = `
    <!-- Backdrop Overlay -->
    <div class="drawer-backdrop ${isDrawerOpen ? 'active' : ''}" id="style-drawer-backdrop" data-action="close-drawer"></div>

    <!-- Bottom Sheet Drawer Container -->
    <div class="drawer-container ${isDrawerOpen ? 'open' : ''}" id="style-drawer-body" role="dialog" aria-modal="true" aria-label="StyleStudio Drawer">
      
      <!-- Drawer Header & Anchor Summary -->
      ${renderDrawerHeaderHTML(activeAnchorItem)}

      <!-- Occasion Navigation Filter Pills -->
      ${renderOccasionNavHTML(activeAnchorItem.id, selectedOccasionFilter)}

      <!-- Drawer Content Scroll Area -->
      <div class="drawer-content-scroll" id="drawer-pairing-list">
        ${pairings.length > 0 
          ? pairings.map(pairing => renderPairingCardHTML(pairing, activeAnchorItem)).join('')
          : `
            <div class="empty-pairings-state">
              <i data-lucide="sparkles" style="width: 32px; height: 32px; color: var(--myntra-coral);"></i>
              <p style="font-size: 13px; font-weight: 600; color: var(--text-primary);">No ${selectedOccasionFilter} pairings found</p>
              <p style="font-size: 11px;">Try viewing all looks to see all 3 ways to style this piece.</p>
              <button class="btn-reset-filter" data-action="filter-occasion" data-occasion="All">View All Looks</button>
            </div>
          `
        }
      </div>

    </div>
  `;

  if (window.lucide) {
    window.lucide.createIcons();
  }

  // Setup Event Handlers (Close, Filter, Save, Esc)
  setupDrawerEvents(drawerRoot, allPairingsForAnchor);
}

function setupDrawerEvents(drawerRoot, allPairingsForAnchor) {
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
        const savedCount = store.getSavedLooksCountForAnchor(store.activeAnchorItem.id, allPairingsForAnchor);
        
        if (isNowSaved) {
          if (savedCount === 3) {
            showToast('Rule of 3 Achieved! 🎉', 'You have visualized 3 complete ways to wear this piece.', 'success');
          } else {
            showToast('Look saved to My Looks!', `Rule of 3 Progress: ${savedCount}/3 pairings saved ✨`, 'success');
          }
        } else {
          showToast('Look removed from saved', `Rule of 3 Progress: ${savedCount}/3 pairings saved`, 'info');
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
