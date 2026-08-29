/**
 * MyntraHeader Component (Screenshot 1 Match)
 * Renders Back arrow, Centered "Wishlist", and Search button.
 */

export function renderHeader() {
  const container = document.getElementById('header-container');
  if (!container) return;

  container.innerHTML = `
    <div class="header-left">
      <button class="icon-btn" aria-label="Go Back" title="Back">
        <i data-lucide="arrow-left" style="width: 22px; height: 22px;"></i>
      </button>
    </div>
    
    <div class="header-title-center">Wishlist</div>

    <div class="header-right">
      <button class="icon-btn" aria-label="Search" title="Search">
        <i data-lucide="search" style="width: 21px; height: 21px;"></i>
      </button>
    </div>
  `;

  if (window.lucide) {
    window.lucide.createIcons();
  }
}
