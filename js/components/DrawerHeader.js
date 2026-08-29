/**
 * DrawerHeader Component
 * Renders the top header for StyleStudio drawer with anchor summary thumbnail and close button.
 */

/**
 * Generates Drawer Header HTML
 * @param {import('../types/index.js').WishlistItem} anchorItem
 * @returns {string}
 */
export function renderDrawerHeaderHTML(anchorItem) {
  if (!anchorItem) return '';

  return `
    <div class="drawer-handle-wrap" data-action="drag-handle">
      <div class="drawer-handle"></div>
    </div>

    <div class="drawer-header">
      <div class="drawer-top-row">
        <div class="drawer-brand-badge">
          <span class="studio-sparkle">
            <i data-lucide="sparkles" style="width: 16px; height: 16px; color: var(--myntra-coral);"></i>
          </span>
          <span class="studio-logo">StyleStudio</span>
          <span class="drawer-rule3-pill">Rule of 3</span>
        </div>
        <button class="drawer-close-btn" data-action="close-drawer" aria-label="Close StyleStudio" title="Close">
          <i data-lucide="x" style="width: 16px; height: 16px;"></i>
        </button>
      </div>

      <!-- Anchor Item Mini Sticky Summary -->
      <div class="anchor-summary-card">
        <img 
          src="${anchorItem.imageUrl}" 
          alt="${anchorItem.imageAlt || anchorItem.name}" 
          class="anchor-summary-thumb"
          onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=700&q=80';"
        />
        <div class="anchor-summary-info">
          <span class="anchor-summary-brand">${anchorItem.brand}</span>
          <span class="anchor-summary-name" title="${anchorItem.name}">${anchorItem.name}</span>
          <span class="anchor-summary-tag">Styling for 3 Ways to Wear</span>
        </div>
      </div>
    </div>
  `;
}
