/**
 * Myntra Desktop Footer Component
 * Matches the Stitch design: MYNTRA logo, 4-column quick links, and copyright text.
 */

export function renderFooter() {
  const container = document.getElementById('footer-container');
  if (!container) return;

  container.innerHTML = `
    <footer class="desktop-footer">
      <div class="footer-inner-content">
        
        <!-- Brand Title -->
        <div class="footer-logo-row">
          <span class="footer-brand-logo">MYNTRA</span>
        </div>

        <!-- 4-Column Links Grid -->
        <div class="footer-links-grid">
          <div class="footer-col">
            <a href="#" class="footer-link">Contact Us</a>
            <a href="#" class="footer-link">FAQ</a>
          </div>

          <div class="footer-col">
            <a href="#" class="footer-link">T&C</a>
            <a href="#" class="footer-link">Terms Of Use</a>
          </div>

          <div class="footer-col">
            <a href="#" class="footer-link">Track Orders</a>
            <a href="#" class="footer-link">Shipping</a>
          </div>

          <div class="footer-col">
            <a href="#" class="footer-link">Cancellation</a>
            <a href="#" class="footer-link">Returns</a>
          </div>
        </div>

        <!-- Copyright Line -->
        <div class="footer-copyright-row">
          <p class="footer-copyright-text">© 2024 Myntra Designs Pvt Ltd. All rights reserved.</p>
        </div>

      </div>
    </footer>
  `;
}
