/**
 * StyleStudio Desktop Showcase Component
 * Matches the Stitch design: Header, 3 Occasions, Rule of 3 badge, Visual Canvas, Pro Styling Note, Breakdown, and Dual CTAs.
 */

import { store } from '../state/store.js';
import { getPairingForAnchorAndOccasion, getAvailableOccasions } from '../data/pairingEngine.js';
import { showToast } from './Toast.js';

export function renderStyleStudioDesktop() {
  const container = document.getElementById('stylestudio-column-container');
  if (!container) return;

  const { activeHeroItem, selectedOccasion } = store;

  if (!activeHeroItem) {
    container.innerHTML = `
      <div class="stylestudio-empty-placeholder">
        <div class="empty-sparkle-bubble">
          <i data-lucide="sparkles" style="width: 32px; height: 32px; color: var(--myntra-crimson);"></i>
        </div>
        <h3>Select a Garment to Style</h3>
        <p>Click on any item in your wishlist to unlock 3 curated occasion pairings.</p>
      </div>
    `;
    if (window.lucide) window.lucide.createIcons();
    return;
  }

  const occasions = getAvailableOccasions(activeHeroItem.id);
  const pairing = getPairingForAnchorAndOccasion(activeHeroItem.id, selectedOccasion);

  // Compute total price
  const totalPrice = pairing?.itemsBreakdown?.reduce((sum, item) => sum + item.price, 0) || activeHeroItem.price;

  // Occasion icons map
  const occasionIcons = {
    'Office & Smart': 'briefcase',
    'Weekend Casual': 'coffee',
    'Evening': 'wine'
  };

  container.innerHTML = `
    <section class="stylestudio-desktop-card" aria-label="Myntra StyleStudio">
      
      <!-- Top Title & Subtitle Banner -->
      <div class="stylestudio-card-header">
        <div class="stylestudio-badge-label">
          <i data-lucide="sparkles" style="width: 14px; height: 14px;"></i>
          <span>MYNTRA STYLESTUDIO</span>
        </div>
        <h1 class="stylestudio-main-title">Style It 3 Ways</h1>
        <p class="stylestudio-main-subtitle">Solve Pairability Anxiety: Picture 3 Real Occasions</p>
      </div>

      <!-- Occasion Switcher Tabs -->
      <div class="stylestudio-occasion-row">
        <div class="occasion-tab-group" role="tablist">
          ${occasions.map(occ => {
            const isSelected = (selectedOccasion.toLowerCase().trim() === occ.key.toLowerCase().trim());
            const iconName = occasionIcons[occ.key] || occ.icon || 'sparkles';
            return `
              <button 
                class="occasion-tab-pill ${isSelected ? 'active' : ''}" 
                data-action="select-occasion" 
                data-occasion="${occ.key}"
                role="tab"
                aria-selected="${isSelected}"
              >
                <i data-lucide="${iconName}"></i>
                <span>${occ.label}</span>
              </button>
            `;
          }).join('')}
        </div>
      </div>

      <!-- Rule of 3 Unlocked Verified Badge -->
      <div class="rule-of-three-badge-wrap">
        <div class="rule-of-three-pill">
          <i data-lucide="check-circle-2" style="width: 15px; height: 15px;"></i>
          <span>RULE OF 3 UNLOCKED: 3/3 OCCASIONS VERIFIED</span>
        </div>
      </div>

      <!-- Outfit Presentation Section (Canvas + Breakdown) -->
      <div class="stylestudio-look-grid">
        
        <!-- Left: Visual Outfit Canvas -->
        <div class="outfit-visual-canvas-card">
          <!-- Top Box: Hero Garment -->
          <div class="canvas-box hero-canvas-box">
            <div class="hero-chip-badge">
              <span class="hero-dot">●</span>
              <span>HERO</span>
            </div>
            <img 
              src="${pairing?.canvasHeroImage || activeHeroItem.imageUrl}" 
              alt="${activeHeroItem.name}" 
              class="canvas-hero-img"
              onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1551803091-e20673f15770?auto=format&fit=crop&w=700&q=80';"
            />
          </div>

          <!-- Bottom Box: Paired Items with Overlapping Shoes on Pattern Canvas -->
          <div class="canvas-box pairing-canvas-box">
            <div class="canvas-pattern-bg"></div>
            <img 
              src="${pairing?.canvasBottomImage || 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=700&q=80'}" 
              alt="Pairing Bottom" 
              class="canvas-bottom-img"
              onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=700&q=80';"
            />
            <div class="canvas-shoes-inset">
              <img 
                src="${pairing?.canvasShoesImage || 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=700&q=80'}" 
                alt="Pairing Footwear" 
                class="canvas-shoes-img"
                onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=700&q=80';"
              />
            </div>
          </div>
        </div>

        <!-- Right: Pro Styling Note & Pricing Breakdown -->
        <div class="outfit-details-sidebar">
          
          <!-- Pro Styling Note Card -->
          <div class="pro-styling-note-card">
            <div class="styling-note-header">
              <i data-lucide="lightbulb" class="bulb-icon"></i>
              <span class="note-title">Pro Styling Note</span>
            </div>
            <p class="styling-note-text">
              ${pairing?.proStylingNote || 'Tuck neatly into tailored neutral trousers for a sharp silhouette. The nude pumps elongate the leg while maintaining a professional palette.'}
            </p>
          </div>

          <!-- Itemized Breakdown List -->
          <div class="itemized-price-list">
            ${(pairing?.itemsBreakdown || [
              { name: `${activeHeroItem.brand} ${activeHeroItem.name} (Hero)`, price: activeHeroItem.price, isHero: true }
            ]).map(item => `
              <div class="price-breakdown-row">
                <span class="item-name ${item.isHero ? 'is-hero-name' : ''}">
                  ${item.isHero ? '<span class="pink-dot">●</span> ' : ''}${item.name}
                </span>
                <span class="item-cost">₹${item.price.toLocaleString('en-IN')}</span>
              </div>
            `).join('')}
          </div>

          <!-- Total Price Row -->
          <div class="complete-look-total-row">
            <span class="total-label">Complete Look</span>
            <span class="total-price">₹${totalPrice.toLocaleString('en-IN')}</span>
          </div>

          <!-- Action Buttons -->
          <div class="stylestudio-cta-group">
            <button class="btn-buy-complete-look" data-action="buy-complete-look">
              <i data-lucide="shopping-bag" style="width: 17px; height: 17px;"></i>
              <span>BUY COMPLETE LOOK (₹${totalPrice.toLocaleString('en-IN')})</span>
            </button>

            <button class="btn-add-top-only" data-action="add-top-only">
              <span>ADD TOP ONLY (₹${activeHeroItem.price.toLocaleString('en-IN')})</span>
            </button>
          </div>

        </div>

      </div>

    </section>
  `;

  if (window.lucide) {
    window.lucide.createIcons();
  }

  // Setup Event Delegation
  container.onclick = (e) => {
    // 1. Select occasion tab
    const occBtn = e.target.closest('[data-action="select-occasion"]');
    if (occBtn) {
      const occasion = occBtn.dataset.occasion;
      if (occasion) {
        store.setOccasion(occasion);
      }
      return;
    }

    // 2. Buy complete look
    if (e.target.closest('[data-action="buy-complete-look"]')) {
      const itemsToAdd = (pairing?.itemsBreakdown || []).map(bItem => {
        return {
          id: bItem.id || `${activeHeroItem.id}-${bItem.name.replace(/\s+/g, '-').toLowerCase()}`,
          name: bItem.name,
          brand: bItem.isHero ? activeHeroItem.brand : 'STYLESTUDIO PAIRING',
          price: bItem.price,
          imageUrl: bItem.isHero ? activeHeroItem.imageUrl : (pairing?.canvasBottomImage || activeHeroItem.imageUrl)
        };
      });

      if (itemsToAdd.length === 0) {
        itemsToAdd.push(activeHeroItem);
      }

      store.addToBag(itemsToAdd);
      showToast('Complete Look Added! 🛍️', `3 items added to your shopping bag (₹${totalPrice.toLocaleString('en-IN')})`, 'success');
      return;
    }

    // 3. Add top only
    if (e.target.closest('[data-action="add-top-only"]')) {
      store.addToBag(activeHeroItem);
      showToast('Top Added to Bag! ✨', `${activeHeroItem.name} added to your bag (₹${activeHeroItem.price.toLocaleString('en-IN')})`, 'success');
      return;
    }
  };
}
