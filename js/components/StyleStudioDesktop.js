/**
 * StyleStudio Desktop Showcase Component
 * Powered by LLM-Driven AI Stylist Engine with:
 * 1. Schema Validation & Catalog Grounding
 * 2. Hyperlocal Climate & Weather Adaptation
 * 3. Cost-Per-Wear (CPW) Intelligence & Versatility Score
 * 4. Dynamic Canvas with Styling Role Badges & 1-Click Multi-Item Bag
 */

import { store } from '../state/store.js';
import { CITIES_WEATHER_DATA, OCCASION_PRESETS } from '../data/pairingEngine.js';
import { getAIStylistRecommendation } from '../data/aiStylistEngine.js';
import { showToast } from './Toast.js';

export function renderStyleStudioDesktop() {
  const container = document.getElementById('stylestudio-column-container');
  if (!container) return;

  const heroProduct = store.getActiveHeroProduct();

  if (!heroProduct) {
    container.innerHTML = `
      <div class="stylestudio-empty-placeholder">
        <div class="empty-sparkle-bubble">
          <i data-lucide="sparkles" style="width: 32px; height: 32px; color: var(--myntra-crimson);"></i>
        </div>
        <h3>Select a Garment to Style</h3>
        <p>Click on any item in your wishlist or catalog to unlock AI-powered occasion styling.</p>
      </div>
    `;
    if (window.lucide) window.lucide.createIcons();
    return;
  }

  const { selectedCity, selectedOccasion, selectedOccasionsList, isCityDropdownOpen, isCustomizerModalOpen } = store;
  const currentCityData = CITIES_WEATHER_DATA[selectedCity] || CITIES_WEATHER_DATA.mumbai;

  // Generate AI Stylist Recommendation
  const aiPayload = getAIStylistRecommendation(heroProduct, selectedCity, selectedOccasionsList);
  const occasions = aiPayload?.occasions || [];

  // Active Look
  const activeLook = occasions.find(o => o.occasionId === selectedOccasion) || occasions[0] || {};
  const heroName = heroProduct.title || heroProduct.name;
  const heroImage = heroProduct.image || heroProduct.imageUrl;
  const totalLookPrice = activeLook.totalLookPrice || heroProduct.price;

  container.innerHTML = `
    <section class="stylestudio-desktop-card" aria-label="Myntra StyleStudio">
      
      <!-- Top Title & Controls Header -->
      <div class="stylestudio-card-header">
        <div class="header-left-col">
          <div class="stylestudio-badge-label">
            <i data-lucide="sparkles" style="width: 13px; height: 13px;"></i>
            <span>AI STYLESTUDIO ENGINE</span>
          </div>
          <h2 class="stylestudio-main-title">Style It 3 Ways</h2>
          <p class="stylestudio-main-subtitle">"Versatility Engine: Personalized to your city & lifestyle"</p>
        </div>

        <!-- Top Right: City Selector & Customize Occasions -->
        <div class="stylestudio-header-actions">
          
          <!-- City / Weather Selector Dropdown -->
          <div class="city-selector-dropdown-wrap">
            <button class="btn-city-pill" data-action="toggle-city-dropdown" aria-label="Select City Weather">
              <span class="city-pill-text">${currentCityData.pillText}</span>
              <i data-lucide="chevron-down" style="width: 14px; height: 14px;"></i>
            </button>

            <!-- Dropdown Menu -->
            <div class="city-dropdown-menu ${isCityDropdownOpen ? 'show' : ''}">
              <div class="city-dropdown-header">Hyperlocal Weather Adaptation</div>
              ${Object.values(CITIES_WEATHER_DATA).map(c => `
                <button 
                  class="city-dropdown-item ${selectedCity === c.key ? 'active' : ''}" 
                  data-action="select-city" 
                  data-city="${c.key}"
                >
                  <div class="city-item-left">
                    <span class="city-item-name">📍 ${c.name}</span>
                    <span class="city-item-climate">${c.climate}</span>
                  </div>
                  <span class="city-item-temp">${c.temp}</span>
                </button>
              `).join('')}
            </div>
          </div>

          <!-- Customize Lifestyle Button -->
          <button class="btn-header-customize" data-action="open-customizer-modal" title="Customize Occasions">
            <i data-lucide="settings" style="width: 14px; height: 14px;"></i>
            <span>Customize</span>
          </button>
        </div>
      </div>

      <!-- Occasion Switcher Tabs & Customize Button -->
      <div class="stylestudio-occasion-row">
        <div class="occasion-tab-group" role="tablist">
          ${occasions.map(occ => {
            const isSelected = (activeLook.occasionId === occ.occasionId);
            return `
              <button 
                class="occasion-tab-pill ${isSelected ? 'active' : ''}" 
                data-action="select-occasion" 
                data-occasion="${occ.occasionId}"
                role="tab"
                aria-selected="${isSelected}"
              >
                <i data-lucide="${occ.iconName ? occ.iconName.toLowerCase() : 'sparkles'}"></i>
                <span>${occ.shortName || occ.occasionName}</span>
              </button>
            `;
          }).join('')}
        </div>

        <button class="btn-inline-add-occasion" data-action="open-customizer-modal" title="Change Lifestyle Occasions">
          <i data-lucide="sliders-horizontal" style="width: 13px; height: 13px;"></i>
          <span>Swap Occasions</span>
        </button>
      </div>

      <!-- Rule of 3 Unlocked Verified Badge + Versatility Score -->
      <div class="rule-of-three-badge-wrap">
        <div class="rule-of-three-pill">
          <i data-lucide="check-circle-2" style="width: 14px; height: 14px; color: #03A685;"></i>
          <span>RULE OF 3: ${aiPayload.versatilityScore}% VERSATILITY SCORE VERIFIED ✓</span>
        </div>
        <div class="weather-adaptation-tag">
          <span>🌤️ ${activeLook.weatherAdjustmentNote}</span>
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
              <span>HERO PIECE</span>
            </div>
            <img 
              src="${activeLook.canvasHeroImage || heroImage}" 
              alt="${heroName}" 
              class="canvas-hero-img"
              onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1551803091-e20673f15770?auto=format&fit=crop&w=700&q=80';"
            />
          </div>

          <!-- Bottom Box: Paired Items with Inset Shoes/Acc -->
          <div class="canvas-box pairing-canvas-box">
            <div class="canvas-pattern-bg"></div>
            <img 
              src="${activeLook.canvasBottomImage || 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=700&q=80'}" 
              alt="Pairing Separates" 
              class="canvas-bottom-img"
              onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=700&q=80';"
            />
            <div class="canvas-shoes-inset">
              <img 
                src="${activeLook.canvasShoesImage || 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=700&q=80'}" 
                alt="Pairing Footwear/Accessories" 
                class="canvas-shoes-img"
                onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=700&q=80';"
              />
            </div>
          </div>
        </div>

        <!-- Right: Pro Styling Note, CPW, & Pricing Breakdown -->
        <div class="outfit-details-sidebar">
          
          <!-- AI Stylist Advisory Card -->
          <div class="pro-styling-note-card">
            <div class="styling-note-header">
              <div class="bulb-wrap">
                <i data-lucide="sparkles" class="bulb-icon"></i>
              </div>
              <span class="note-title">AI Fashion Director's Note</span>
            </div>
            <p class="styling-note-text">
              ${activeLook.stylingTip}
            </p>
          </div>

          <!-- Itemized Breakdown List with Styling Roles -->
          <div class="itemized-price-list">
            <!-- Hero Piece Row -->
            <div class="price-breakdown-row">
              <div class="breakdown-item-meta">
                <span class="item-name is-hero-name">
                  <span class="pink-dot">●</span> ${heroProduct.brand} ${heroName} (Hero)
                </span>
                <span class="styling-role-badge">Anchor Foundation Piece</span>
              </div>
              <span class="item-cost">₹${heroProduct.price.toLocaleString('en-IN')}</span>
            </div>

            <!-- Paired Pieces Rows -->
            ${(activeLook.pairings || []).map(item => `
              <div class="price-breakdown-row">
                <div class="breakdown-item-meta">
                  <span class="item-name">${item.brand} ${item.title}</span>
                  <span class="styling-role-badge">${item.stylingRole}</span>
                </div>
                <span class="item-cost">₹${item.price.toLocaleString('en-IN')}</span>
              </div>
            `).join('')}
          </div>

          <!-- Total Price Row -->
          <div class="complete-look-total-row">
            <span class="total-label">Complete Occasion Bundle</span>
            <span class="total-price">₹${totalLookPrice.toLocaleString('en-IN')}</span>
          </div>

          <!-- Action Buttons -->
          <div class="stylestudio-cta-group">
            <button class="btn-buy-complete-look" data-action="buy-complete-look">
              <i data-lucide="shopping-bag" style="width: 16px; height: 16px;"></i>
              <span>BUY COMPLETE LOOK (${(activeLook.pairings?.length || 2) + 1} ITEMS) • ₹${totalLookPrice.toLocaleString('en-IN')}</span>
            </button>

            <button class="btn-add-top-only" data-action="add-hero-only">
              <span>ADD HERO ITEM ONLY • ₹${heroProduct.price.toLocaleString('en-IN')}</span>
            </button>
          </div>

        </div>

      </div>

    </section>

    <!-- Occasion Customizer Modal Overlay (Idea E) -->
    ${isCustomizerModalOpen ? `
      <div class="customizer-modal-backdrop" id="customizer-modal-backdrop">
        <div class="customizer-modal-content" role="dialog" aria-modal="true">
          
          <div class="customizer-modal-header">
            <div>
              <div class="modal-pre-title">PERSONALIZATION MATRIX</div>
              <h3 class="modal-main-title">Personalize Your Rule of 3</h3>
              <p class="modal-sub-title">Pick any 3 lifestyle occasions to configure your personal versatile wardrobe.</p>
            </div>
            <button class="btn-modal-close" data-action="close-customizer-modal" aria-label="Close modal">
              <i data-lucide="x"></i>
            </button>
          </div>

          <!-- Occasion Presets Selector Grid -->
          <div class="customizer-presets-grid" id="customizer-presets-container">
            ${OCCASION_PRESETS.map(preset => {
              const isChecked = selectedOccasionsList.includes(preset.id);
              return `
                <div 
                  class="preset-select-card ${isChecked ? 'is-selected' : ''}" 
                  data-action="toggle-preset" 
                  data-preset-id="${preset.id}"
                >
                  <div class="preset-card-top">
                    <div class="preset-icon-badge">
                      <i data-lucide="${preset.icon}"></i>
                    </div>
                    <span class="preset-badge-tag">${preset.badge}</span>
                    <input 
                      type="checkbox" 
                      class="preset-checkbox" 
                      ${isChecked ? 'checked' : ''} 
                      tabindex="-1"
                    />
                  </div>
                  <h4 class="preset-name">${preset.name}</h4>
                  <p class="preset-desc">${preset.description}</p>
                </div>
              `;
            }).join('')}
          </div>

          <!-- Modal Footer with Counter and Apply Button -->
          <div class="customizer-modal-footer">
            <div class="selection-counter-text">
              <span id="customizer-counter-num">Selected: <strong>${selectedOccasionsList.length} of 3</strong></span>
            </div>
            <div class="modal-btn-row">
              <button class="btn-modal-cancel" data-action="close-customizer-modal">Cancel</button>
              <button 
                class="btn-modal-apply" 
                id="btn-apply-occasions" 
                data-action="apply-occasions"
                ${selectedOccasionsList.length === 3 ? '' : 'disabled'}
              >
                APPLY OCCASIONS
              </button>
            </div>
          </div>

        </div>
      </div>
    ` : ''}
  `;

  if (window.lucide) {
    window.lucide.createIcons();
  }

  // Local state for modal selections before user clicks Apply
  let currentSelections = [...selectedOccasionsList];

  // Setup Event Delegation
  container.onclick = (e) => {
    // 1. Toggle City Dropdown
    if (e.target.closest('[data-action="toggle-city-dropdown"]')) {
      e.stopPropagation();
      store.toggleCityDropdown();
      return;
    }

    // 2. Select City
    const cityBtn = e.target.closest('[data-action="select-city"]');
    if (cityBtn) {
      const cityKey = cityBtn.dataset.city;
      store.setSelectedCity(cityKey);
      const cData = CITIES_WEATHER_DATA[cityKey];
      showToast(
        `Weather Adapted: ${cData.name} 📍`,
        `Styling layers and tips updated for ${cData.climate} (${cData.temp})`,
        'success'
      );
      return;
    }

    // 3. Open Customizer Modal
    if (e.target.closest('[data-action="open-customizer-modal"]')) {
      store.toggleCityDropdown(false);
      store.toggleCustomizerModal(true);
      return;
    }

    // 4. Close Customizer Modal
    if (e.target.closest('[data-action="close-customizer-modal"]') || e.target.id === 'customizer-modal-backdrop') {
      store.toggleCustomizerModal(false);
      return;
    }

    // 5. Toggle Preset selection inside modal
    const presetCard = e.target.closest('[data-action="toggle-preset"]');
    if (presetCard) {
      const presetId = presetCard.dataset.presetId;
      if (currentSelections.includes(presetId)) {
        if (currentSelections.length > 1) {
          currentSelections = currentSelections.filter(id => id !== presetId);
        } else {
          showToast('Select at least 1', 'Please keep at least 1 occasion selected', 'info');
          return;
        }
      } else {
        if (currentSelections.length < 3) {
          currentSelections.push(presetId);
        } else {
          showToast('Limit Reached', 'You can pick up to 3 occasions. Uncheck one first to swap.', 'info');
          return;
        }
      }

      // Update UI cards
      const allCards = container.querySelectorAll('.preset-select-card');
      allCards.forEach(card => {
        const id = card.dataset.presetId;
        const isSel = currentSelections.includes(id);
        card.classList.toggle('is-selected', isSel);
        const chk = card.querySelector('.preset-checkbox');
        if (chk) chk.checked = isSel;
      });

      // Update Counter & Button
      const counterEl = container.querySelector('#customizer-counter-num');
      if (counterEl) {
        counterEl.innerHTML = `Selected: <strong>${currentSelections.length} of 3</strong>`;
      }
      const applyBtn = container.querySelector('#btn-apply-occasions');
      if (applyBtn) {
        applyBtn.disabled = (currentSelections.length !== 3);
      }
      return;
    }

    // 6. Apply Occasions from modal
    if (e.target.closest('[data-action="apply-occasions"]')) {
      if (currentSelections.length === 3) {
        store.setSelectedOccasions(currentSelections);
        showToast(
          'Lifestyle Occasions Updated! ✨',
          'Rule of 3 matrix refreshed with your custom occasions.',
          'success'
        );
      }
      return;
    }

    // 7. Select occasion tab
    const occBtn = e.target.closest('[data-action="select-occasion"]');
    if (occBtn) {
      store.setOccasion(occBtn.dataset.occasion);
      return;
    }

    // 8. Buy complete look
    if (e.target.closest('[data-action="buy-complete-look"]')) {
      const itemsToAdd = [
        heroProduct,
        ...(activeLook.pairings || []).map(p => ({
          id: p.skuId || `${heroProduct.id}-${p.title.replace(/\s+/g, '-').toLowerCase()}`,
          name: `${p.brand} ${p.title}`,
          brand: p.brand,
          price: p.price,
          image: p.image
        }))
      ];

      store.addToBag(itemsToAdd);
      showToast('Complete Look Added! 🛍️', `${itemsToAdd.length} items added to your bag (Total: ₹${totalLookPrice.toLocaleString('en-IN')})`, 'success');
      return;
    }

    // 9. Add hero only
    if (e.target.closest('[data-action="add-hero-only"]')) {
      store.addToBag(heroProduct);
      showToast('Hero Item Added! ✨', `${heroName} added to your bag (₹${heroProduct.price.toLocaleString('en-IN')})`, 'success');
      return;
    }

    // Close open dropdowns if clicked elsewhere
    if (!e.target.closest('.city-selector-dropdown-wrap')) {
      if (store.isCityDropdownOpen) {
        store.toggleCityDropdown(false);
      }
    }
  };
}
