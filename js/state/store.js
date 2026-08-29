/**
 * StyleStudio Global Reactive Store
 * Manages Wishlist, Browse Products, Navigation Tabs, Drawer, and Saved Looks.
 */

import { INITIAL_WISHLIST_ITEMS, ALL_BROWSE_PRODUCTS } from '../data/catalog.js';

const STORAGE_KEY_WISHLIST = 'myntra_stylestudio_wishlist_items';
const STORAGE_KEY_SAVED_LOOKS = 'myntra_stylestudio_saved_pairings';

class StyleStudioStore {
  constructor() {
    this.browseProducts = [...ALL_BROWSE_PRODUCTS];
    this.wishlistItems = this.loadWishlist();
    this.activeTab = 'explore'; // 'explore', 'wishlist', 'home', 'studio', 'profile'
    this.selectedBrowseCategory = 'All';
    this.activeAnchorItem = null;
    this.isDrawerOpen = false;
    this.selectedOccasionFilter = 'Daily Look';
    this.savedPairingIds = this.loadSavedPairings();
    this.listeners = new Set();
  }

  loadWishlist() {
    try {
      const stored = localStorage.getItem(STORAGE_KEY_WISHLIST);
      return stored ? JSON.parse(stored) : [...INITIAL_WISHLIST_ITEMS];
    } catch (e) {
      return [...INITIAL_WISHLIST_ITEMS];
    }
  }

  persistWishlist() {
    try {
      localStorage.setItem(STORAGE_KEY_WISHLIST, JSON.stringify(this.wishlistItems));
    } catch (e) {
      console.warn('Failed to persist wishlist:', e);
    }
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

  subscribe(listener) {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  }

  notify() {
    this.listeners.forEach(listener => listener(this));
  }

  setActiveTab(tab) {
    this.activeTab = tab;
    this.notify();
  }

  setBrowseCategory(category) {
    this.selectedBrowseCategory = category;
    this.notify();
  }

  /**
   * Toggles an item in the Wishlist
   * @param {import('../types/index.js').CatalogItem} product
   * @returns {boolean} True if now added, False if removed
   */
  toggleWishlist(product) {
    if (!product) return false;
    const existsIndex = this.wishlistItems.findIndex(item => item.id === product.id);
    let isNowWishlisted = false;

    if (existsIndex >= 0) {
      // Remove from wishlist
      this.wishlistItems.splice(existsIndex, 1);
      isNowWishlisted = false;
      if (this.activeAnchorItem && this.activeAnchorItem.id === product.id) {
        this.closeDrawer();
      }
    } else {
      // Add to wishlist
      this.wishlistItems.unshift({
        ...product,
        isAnchor: true,
        stylable: true,
        addedAt: new Date().toISOString()
      });
      isNowWishlisted = true;
    }

    this.persistWishlist();
    this.notify();
    return isNowWishlisted;
  }

  /**
   * Checks if an item is currently in the wishlist
   * @param {string} productId
   * @returns {boolean}
   */
  isItemInWishlist(productId) {
    return this.wishlistItems.some(item => item.id === productId);
  }

  openDrawer(item) {
    if (!item) return;
    this.activeAnchorItem = item;
    this.isDrawerOpen = true;
    this.selectedOccasionFilter = 'Daily Look';
    document.body.classList.add('drawer-open');
    this.notify();
  }

  closeDrawer() {
    this.isDrawerOpen = false;
    document.body.classList.remove('drawer-open');
    this.notify();
  }

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

  isPairingSaved(pairingId) {
    return Boolean(this.savedPairingIds[pairingId]);
  }

  setOccasionFilter(occasion) {
    this.selectedOccasionFilter = occasion;
    this.notify();
  }
}

export const store = new StyleStudioStore();
