/**
 * Shopping Bag Slide-Over Drawer Component
 * Matches the Stitch design: Header, Empty / Filled state, Item List, Total, and Checkout CTA.
 */

import { store } from '../state/store.js';
import { showToast } from './Toast.js';

export function renderShoppingBagDrawer() {
  const container = document.getElementById('bag-drawer-root');
  if (!container) return;

  const { isBagOpen, bagItems } = store;
  const total = store.getBagTotal();
  const isEmpty = bagItems.length === 0;

  container.innerHTML = `
    <!-- Backdrop Overlay -->
    <div class="bag-drawer-backdrop ${isBagOpen ? 'active' : ''}" data-action="close-bag-drawer"></div>

    <!-- Slide-Over Drawer Panel -->
    <aside class="bag-drawer-panel ${isBagOpen ? 'open' : ''}" aria-label="Shopping Bag" role="dialog">
      
      <!-- Drawer Header -->
      <div class="bag-drawer-header">
        <div class="bag-title-wrap">
          <i data-lucide="shopping-bag" class="bag-header-icon"></i>
          <h3 class="bag-header-title">Shopping Bag</h3>
        </div>
        <button class="bag-close-btn" data-action="close-bag-drawer" aria-label="Close Shopping Bag">
          <i data-lucide="x"></i>
        </button>
      </div>

      <!-- Drawer Body Content -->
      <div class="bag-drawer-body">
        ${isEmpty ? `
          <div class="bag-empty-state">
            <div class="bag-empty-icon-wrap">
              <i data-lucide="shopping-bag" style="width: 44px; height: 44px; stroke-width: 1.5; color: #8E929C;"></i>
            </div>
            <p class="bag-empty-text">Your bag is empty.</p>
          </div>
        ` : `
          <div class="bag-items-list">
            ${bagItems.map(item => `
              <div class="bag-item-row" data-item-id="${item.id}">
                <img 
                  src="${item.imageUrl}" 
                  alt="${item.name}" 
                  class="bag-item-thumb"
                  onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1551803091-e20673f15770?auto=format&fit=crop&w=700&q=80';"
                />
                
                <div class="bag-item-details">
                  <span class="bag-item-brand">${item.brand}</span>
                  <span class="bag-item-name">${item.name}</span>
                  
                  <div class="bag-item-qty-row">
                    <div class="qty-stepper">
                      <button class="qty-btn" data-action="decrease-qty" data-item-id="${item.id}" aria-label="Decrease quantity">-</button>
                      <span class="qty-num">${item.qty || 1}</span>
                      <button class="qty-btn" data-action="increase-qty" data-item-id="${item.id}" aria-label="Increase quantity">+</button>
                    </div>
                    <span class="bag-item-price">₹${(item.price * (item.qty || 1)).toLocaleString('en-IN')}</span>
                  </div>
                </div>

                <button class="bag-remove-item-btn" data-action="remove-bag-item" data-item-id="${item.id}" title="Remove item">
                  <i data-lucide="x" style="width: 15px; height: 15px;"></i>
                </button>
              </div>
            `).join('')}
          </div>
        `}
      </div>

      <!-- Drawer Footer -->
      <div class="bag-drawer-footer">
        <div class="bag-footer-total-row">
          <span class="bag-total-label">Total</span>
          <span class="bag-total-value">₹${total.toLocaleString('en-IN')}</span>
        </div>

        <button 
          class="btn-proceed-checkout ${isEmpty ? 'disabled' : ''}" 
          data-action="proceed-checkout"
          ${isEmpty ? 'disabled' : ''}
        >
          <span>PROCEED TO CHECKOUT</span>
        </button>
      </div>

    </aside>
  `;

  if (window.lucide) {
    window.lucide.createIcons();
  }

  // Setup Event Delegation
  container.onclick = (e) => {
    // 1. Close drawer
    if (e.target.closest('[data-action="close-bag-drawer"]')) {
      store.toggleBag(false);
      return;
    }

    // 2. Remove item
    const removeBtn = e.target.closest('[data-action="remove-bag-item"]');
    if (removeBtn) {
      store.removeFromBag(removeBtn.dataset.itemId);
      return;
    }

    // 3. Increase qty
    const incBtn = e.target.closest('[data-action="increase-qty"]');
    if (incBtn) {
      store.updateBagItemQty(incBtn.dataset.itemId, 1);
      return;
    }

    // 4. Decrease qty
    const decBtn = e.target.closest('[data-action="decrease-qty"]');
    if (decBtn) {
      store.updateBagItemQty(decBtn.dataset.itemId, -1);
      return;
    }

    // 5. Checkout
    if (e.target.closest('[data-action="proceed-checkout"]') && !isEmpty) {
      showToast('Order Placed Successfully! 🎉', `Thank you for styling with Myntra StyleStudio! Total: ₹${total.toLocaleString('en-IN')}`, 'success');
      store.toggleBag(false);
    }
  };
}
