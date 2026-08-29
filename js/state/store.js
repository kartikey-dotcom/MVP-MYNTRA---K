/**
 * StyleStudio Global Reactive Store
 * Manages Wishlist items, Drawer visibility, Active Anchor, and Saved Pairings.
 */

import { ANCHOR_WISHLIST_ITEMS } from '../data/catalog.js';

const STORAGE_KEY_SAVED_LOOKS = 'myntra_stylestudio_saved_pairings';

class StyleStudioStore {
  constructor() {
    this.wishlistItems = [...ANCHOR_WISHLIST_ITEMS];
    this.activeAnchorItem = null;
    this.isDrawerOpen = false;
    this.selectedOccasionFilter = 'All';
    this.savedPairingIds = this.loadSavedPairings();
    this.listeners = new Set();
  }

  loadSavedPairings() {
    try {
      const stored = localStorage.getItem(STORAGE_KEY_SAVED_LOOKS);
      return stored ? JSON.parse(stored) : {};
    } catch (e) {
      return {};
    }
  }

  persistSavedPairings() {
    try {
      localStorage.setItem(STORAGE_KEY_SAVED_LOOKS, JSON.stringify(this.savedPairingIds));
    } catch (e) {
      console.warn('Failed to persist saved pairings:', e);
    }
  }

  /**
   * Subscribe to state updates
   * @param {Function} listener
   * @returns {Function} Unsubscribe callback
   */
  subscribe(listener) {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  }

  notify() {
    this.listeners.forEach(listener => listener(this));
  }

  /**
   * Opens the StyleStudio drawer for a target wishlisted item.
   * @param {import('../types/index.js').WishlistItem} item
   */
  openDrawer(item) {
    if (!item) return;
    this.activeAnchorItem = item;
    this.isDrawerOpen = true;
    this.selectedOccasionFilter = 'Daily Look';
    document.body.classList.add('drawer-open');
    this.notify();
  }

  /**
   * Closes the StyleStudio drawer.
   */
  closeDrawer() {
    this.isDrawerOpen = false;
    document.body.classList.remove('drawer-open');
    this.notify();
  }

  /**
   * Toggles the saved status of an outfit pairing.
   * @param {string} pairingId
   * @returns {boolean} New saved state
   */
  toggleSavePairing(pairingId) {
    if (!pairingId) return false;
    const isCurrentlySaved = Boolean(this.savedPairingIds[pairingId]);
    if (isCurrentlySaved) {
      delete this.savedPairingIds[pairingId];
    } else {
      this.savedPairingIds[pairingId] = true;
    }
    this.persistSavedPairings();
    this.notify();
    return !isCurrentlySaved;
  }

  /**
   * Checks if a pairing is saved.
   * @param {string} pairingId
   * @returns {boolean}
   */
  isPairingSaved(pairingId) {
    return Boolean(this.savedPairingIds[pairingId]);
  }

  /**
   * Returns how many saved pairings exist for an anchor item.
   * @param {string} anchorItemId
   * @param {import('../types/index.js').OutfitPairing[]} pairingsForAnchor
   * @returns {number}
   */
  getSavedLooksCountForAnchor(anchorItemId, pairingsForAnchor = []) {
    return pairingsForAnchor.filter(p => p.anchorItemId === anchorItemId && this.savedPairingIds[p.id]).length;
  }

  /**
   * Sets the active occasion filter.
   * @param {string} occasion
   */
  setOccasionFilter(occasion) {
    this.selectedOccasionFilter = occasion;
    this.notify();
  }

  /**
   * Removes an item from the wishlist.
   * @param {string} itemId
   */
  removeFromWishlist(itemId) {
    this.wishlistItems = this.wishlistItems.filter(item => item.id !== itemId);
    if (this.activeAnchorItem && this.activeAnchorItem.id === itemId) {
      this.closeDrawer();
      this.activeAnchorItem = null;
    }
    this.notify();
  }
}

export const store = new StyleStudioStore();
