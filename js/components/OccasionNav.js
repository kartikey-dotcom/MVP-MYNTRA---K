/**
 * OccasionNav Component
 * Renders occasion filter tabs (All, Office, Weekend, Evening) with counts.
 */

import { getOccasionCountsForAnchor } from '../data/pairingEngine.js';
import { store } from '../state/store.js';

/**
 * Generates Occasion Filter Navigation HTML
 * @param {string} anchorItemId
 * @param {string} activeFilter
 * @returns {string}
 */
export function renderOccasionNavHTML(anchorItemId, activeFilter = 'All') {
  const counts = getOccasionCountsForAnchor(anchorItemId);

  const tabs = [
    { key: 'All', label: 'All Looks', count: counts['All'] || 0, icon: 'layers' },
    { key: 'Office', label: 'Office', count: counts['Office'] || 0, icon: 'briefcase' },
    { key: 'Weekend', label: 'Weekend', count: counts['Weekend'] || 0, icon: 'coffee' },
    { key: 'Evening', label: 'Evening Out', count: counts['Evening'] || 0, icon: 'wine' }
  ];

  return `
    <nav class="occasion-nav-wrap" aria-label="Filter Outfits by Occasion">
      ${tabs.map(tab => `
        <button 
          class="occasion-pill-btn ${activeFilter === tab.key ? 'active' : ''}" 
          data-action="filter-occasion" 
          data-occasion="${tab.key}"
        >
          <i data-lucide="${tab.icon}" style="width: 12px; height: 12px;"></i>
          <span>${tab.label}</span>
          <span class="occasion-pill-count">${tab.count}</span>
        </button>
      `).join('')}
    </nav>
  `;
}
