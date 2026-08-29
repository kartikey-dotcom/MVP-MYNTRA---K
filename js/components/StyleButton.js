/**
 * StyleButton Component
 * Renders the "✨ Style This" interactive CTA badge on wishlist cards.
 */

/**
 * Creates the HTML string for the Style This button.
 * @param {string} itemId
 * @param {number} [savedCount=0]
 * @returns {string}
 */
export function renderStyleButtonHTML(itemId, savedCount = 0) {
  if (savedCount > 0) {
    return `
      <div class="style-this-cta-wrap">
        <button class="btn-style-this active-has-saved" data-action="style-this" data-item-id="${itemId}" aria-label="View styled looks">
          <i data-lucide="sparkles" style="width: 13px; height: 13px;"></i>
          <span>${savedCount} Saved ${savedCount === 1 ? 'Look' : 'Looks'}</span>
        </button>
      </div>
    `;
  }

  return `
    <div class="style-this-cta-wrap">
      <button class="btn-style-this" data-action="style-this" data-item-id="${itemId}" aria-label="Style this item 3 ways">
        <i data-lucide="sparkles" style="width: 13px; height: 13px;"></i>
        <span>Style This</span>
      </button>
    </div>
  `;
}
