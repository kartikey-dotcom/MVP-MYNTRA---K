/**
 * PairingCard Component
 * Renders a complete occasion-tagged outfit pairing card with outfit canvas and styling rationale.
 */

import { renderOutfitCanvasHTML } from './OutfitCanvas.js';
import { renderStylingRationaleHTML } from './StylingRationale.js';
import { store } from '../state/store.js';

/**
 * Returns occasion CSS class modifier
 * @param {string} occasion
 * @returns {string}
 */
function getOccasionClass(occasion = '') {
  const occLower = occasion.toLowerCase();
  if (occLower.includes('office')) return 'office';
  if (occLower.includes('weekend')) return 'weekend';
  if (occLower.includes('evening')) return 'evening';
  return '';
}

/**
 * Returns occasion icon name for Lucide
 * @param {string} occasion
 * @returns {string}
 */
function getOccasionIcon(occasion = '') {
  const occLower = occasion.toLowerCase();
  if (occLower.includes('office')) return 'briefcase';
  if (occLower.includes('weekend')) return 'coffee';
  if (occLower.includes('evening')) return 'wine';
  return 'sparkles';
}

/**
 * Generates Pairing Card HTML
 * @param {import('../types/index.js').OutfitPairing & { complementaryItems: import('../types/index.js').CatalogItem[] }} pairing
 * @param {import('../types/index.js').WishlistItem} anchorItem
 * @returns {string}
 */
export function renderPairingCardHTML(pairing, anchorItem) {
  const isSaved = store.isPairingSaved(pairing.id);
  const occasionClass = getOccasionClass(pairing.occasion);
  const occasionIcon = getOccasionIcon(pairing.occasion);

  return `
    <article class="pairing-card" data-pairing-id="${pairing.id}">
      <!-- Header: Occasion Badge & Confidence -->
      <div class="pairing-card-header">
        <div class="occasion-tag-badge ${occasionClass}">
          <i data-lucide="${occasionIcon}" style="width: 13px; height: 13px;"></i>
          <span>${pairing.occasion}</span>
        </div>
        <div class="style-confidence-pill">
          <i data-lucide="check-circle-2" style="width: 11px; height: 11px;"></i>
          <span>${pairing.styleConfidence || 'Curated Look'}</span>
        </div>
      </div>

      <!-- Pairing Title -->
      <h4 class="pairing-title">${pairing.title}</h4>

      <!-- Multi-Garment Outfit Canvas -->
      ${renderOutfitCanvasHTML(anchorItem, pairing.complementaryItems)}

      <!-- Styling Logic Callout Box -->
      ${renderStylingRationaleHTML(pairing.stylingRationale, pairing.styleConfidence)}

      <!-- Primary Action CTA -->
      <div class="pairing-actions">
        <button 
          class="btn-save-pairing ${isSaved ? 'saved' : ''}" 
          data-action="toggle-save-pairing" 
          data-pairing-id="${pairing.id}"
          aria-label="${isSaved ? 'Remove from saved looks' : 'Save this pairing'}"
        >
          <i data-lucide="${isSaved ? 'check' : 'heart'}" style="width: 14px; height: 14px;"></i>
          <span>${isSaved ? 'Saved to My Looks ✓' : 'Love this look (Save Pairing)'}</span>
        </button>
      </div>
    </article>
  `;
}
