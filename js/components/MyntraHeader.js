/**
 * MyntraHeader Component
 * Renders the top navigation bar with Wishlist count and action buttons.
 */
export function renderHeader(itemCount = 3) {
  const container = document.getElementById('header-container');
  if (!container) return;

  container.innerHTML = `
    <div class="header-left">
      <button class="icon-btn" aria-label="Go Back" title="Back">
        <i data-lucide="chevron-left" style="width: 22px; height: 22px;"></i>
      </button>
      <div class="header-title-container">
        <span class="header-title">WISHLIST</span>
        <span class="header-subtitle" id="wishlist-count-badge">${itemCount} ${itemCount === 1 ? 'ITEM' : 'ITEMS'}</span>
      </div>
    </div>
    <div class="header-right">
      <button class="icon-btn" aria-label="Search" title="Search">
        <i data-lucide="search" style="width: 20px; height: 20px;"></i>
      </button>
      <button class="icon-btn" aria-label="Shopping Bag" title="Bag">
        <i data-lucide="shopping-bag" style="width: 20px; height: 20px;"></i>
      </button>
    </div>
  `;

  // Initialize Lucide icons
  if (window.lucide) {
    window.lucide.createIcons();
  }
}
