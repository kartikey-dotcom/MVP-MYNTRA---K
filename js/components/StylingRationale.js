/**
 * StylingRationale Component
 * Renders the actionable "Why this works" callout box explaining the styling logic.
 */

/**
 * Generates Styling Rationale HTML
 * @param {string} rationaleText
 * @param {string} [styleConfidence='Curated Look']
 * @returns {string}
 */
export function renderStylingRationaleHTML(rationaleText, styleConfidence = 'Curated Look') {
  return `
    <div class="styling-rationale-box">
      <div class="rationale-header">
        <i data-lucide="sparkles" style="width: 13px; height: 13px;"></i>
        <span>Why this works</span>
      </div>
      <p class="rationale-text">${rationaleText}</p>
      <span class="rationale-disclaimer">Suggested styling idea based on silhouette & palette balance</span>
    </div>
  `;
}
