/**
 * DrawerHeader Component (Screenshot 2 & 3 Match)
 * Renders StyleStudio AI teal italic logo, "Pairings for [Item Name]", and close 'X' button.
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
      <div class="drawer-title-group">
        <div class="drawer-logo-row">
          <i data-lucide="sparkles"></i>
          <span class="drawer-title-logo">StyleStudio AI</span>
        </div>
        <span class="drawer-subtitle">Pairings for ${anchorItem.name}</span>
      </div>

      <button class="drawer-close-btn" data-action="close-drawer" aria-label="Close StyleStudio" title="Close">
        <i data-lucide="x" style="width: 20px; height: 20px;"></i>
      </button>
    </div>
  `;
}
