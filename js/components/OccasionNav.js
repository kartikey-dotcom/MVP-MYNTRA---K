/**
 * OccasionNav Component (Screenshot 2 Match)
 * Renders occasion filter tabs: Daily Look, Date Night, Office Sharp.
 */

/**
 * Generates Occasion Filter Navigation HTML
 * @param {string} anchorItemId
 * @param {string} activeFilter
 * @returns {string}
 */
export function renderOccasionNavHTML(anchorItemId, activeFilter = 'Daily Look') {
  const tabs = [
    { key: 'Daily Look', label: 'Daily Look', icon: 'sun' },
    { key: 'Date Night', label: 'Date Night', icon: 'wine' },
    { key: 'Office Sharp', label: 'Office Sharp', icon: 'briefcase' }
  ];

  return `
    <nav class="occasion-nav-wrap" aria-label="Filter Outfits by Occasion">
      ${tabs.map(tab => {
        const isActive = (activeFilter === tab.key) || (activeFilter === 'All' && tab.key === 'Daily Look');
        return `
          <button 
            class="occasion-pill-btn ${isActive ? 'active' : ''}" 
            data-action="filter-occasion" 
            data-occasion="${tab.key}"
          >
            <i data-lucide="${tab.icon}" style="width: 14px; height: 14px;"></i>
            <span>${tab.label}</span>
          </button>
        `;
      }).join('')}
    </nav>

    <!-- Sub-header text from Screenshot 2 -->
    <div class="drawer-ai-subtext">
      AI generated pairings based on your wardrobe.
    </div>
  `;
}
