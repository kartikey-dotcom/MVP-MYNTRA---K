/**
 * Toast Component
 * Floating notification pill providing instant affirmation when a look is saved.
 */

let toastTimeout = null;

/**
 * Shows a celebratory toast notification
 * @param {string} message - Main toast message
 * @param {string} [subMessage=''] - Subtitle (e.g. Rule of 3 progress)
 * @param {'success' | 'info'} [type='success']
 */
export function showToast(message, subMessage = '', type = 'success') {
  const toastRoot = document.getElementById('toast-root');
  if (!toastRoot) return;

  // Clear existing timer
  if (toastTimeout) {
    clearTimeout(toastTimeout);
    toastTimeout = null;
  }

  const iconName = type === 'success' ? 'check-circle' : 'heart';

  toastRoot.innerHTML = `
    <div class="toast-notification ${type}" role="status" aria-live="polite">
      <div class="toast-icon">
        <i data-lucide="${iconName}" style="width: 18px; height: 18px;"></i>
      </div>
      <div class="toast-body">
        <span class="toast-title">${message}</span>
        ${subMessage ? `<span class="toast-sub">${subMessage}</span>` : ''}
      </div>
    </div>
  `;

  if (window.lucide) {
    window.lucide.createIcons();
  }

  // Trigger entering animation
  requestAnimationFrame(() => {
    const toastEl = toastRoot.querySelector('.toast-notification');
    if (toastEl) {
      toastEl.classList.add('visible');
    }
  });

  // Auto-dismiss after 2600ms
  toastTimeout = setTimeout(() => {
    const toastEl = toastRoot.querySelector('.toast-notification');
    if (toastEl) {
      toastEl.classList.remove('visible');
      setTimeout(() => {
        toastRoot.innerHTML = '';
      }, 300);
    }
  }, 2600);
}
