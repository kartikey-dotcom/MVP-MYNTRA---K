/**
 * StyleStudio Global Reactive Store (Desktop View)
 * Manages Wishlist, Active Hero Item, Occasions, Shopping Bag, and UI State.
 */

import { INITIAL_WISHLIST_ITEMS, ALL_BROWSE_PRODUCTS } from '../data/catalog.js';

const STORAGE_KEY_WISHLIST = 'myntra_desktop_wishlist_items';
const STORAGE_KEY_BAG = 'myntra_desktop_bag_items';
const STORAGE_KEY_SAVED_LOOKS = 'myntra_desktop_saved_looks';

class StyleStudioStore {
  constructor() {
    this.browseProducts = [...ALL_BROWSE_PRODUCTS];
    this.wishlistItems = this.loadWishlist();
    this.bagItems = this.loadBag();
    this.activeCategory = 'STUDIO'; // MEN, WOMEN, KIDS, HOME & LIVING, BEAUTY, STUDIO
    this.activeHeroItem = this.wishlistItems.find(i => i.isHero) || this.wishlistItems[0] || null;
    this.selectedOccasion = 'Office & Smart';
    this.isBagOpen = false;
    this.searchQuery = '';
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

  loadBag() {
    try {
      const stored = localStorage.getItem(STORAGE_KEY_BAG);
      return stored ? JSON.parse(stored) : [];
    } catch (e) {
      return [];
    }
  }

  persistBag() {
    try {
      localStorage.setItem(STORAGE_KEY_BAG, JSON.stringify(this.bagItems));
    } catch (e) {
      console.warn('Failed to persist bag:', e);
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

  setActiveCategory(category) {
    this.activeCategory = category;
    this.notify();
  }

  setActiveHeroItem(item) {
    if (!item) return;
    this.activeHeroItem = item;
    this.selectedOccasion = 'Office & Smart';
    this.notify();
  }

  setOccasion(occasion) {
    this.selectedOccasion = occasion;
    this.notify();
  }

  setSearchQuery(q) {
    this.searchQuery = q;
    this.notify();
  }

  toggleBag(isOpen) {
    if (typeof isOpen === 'boolean') {
      this.isBagOpen = isOpen;
    } else {
      this.isBagOpen = !this.isBagOpen;
    }
    this.notify();
  }

  /**
   * Add a single item or array of items to the shopping bag
   * @param {Object | Object[]} itemOrItems
   */
  addToBag(itemOrItems) {
    const itemsToAdd = Array.isArray(itemOrItems) ? itemOrItems : [itemOrItems];

    itemsToAdd.forEach(newItem => {
      if (!newItem) return;
      const existing = this.bagItems.find(item => item.id === newItem.id);
      if (existing) {
        existing.qty = (existing.qty || 1) + 1;
      } else {
        this.bagItems.push({
          id: newItem.id,
          name: newItem.name,
          brand: newItem.brand || 'MYNTRA',
          price: newItem.price || 0,
          originalPrice: newItem.originalPrice || newItem.price,
          imageUrl: newItem.imageUrl || 'https://images.unsplash.com/photo-1551803091-e20673f15770?auto=format&fit=crop&w=700&q=80',
          qty: 1
        });
      }
    });

    this.persistBag();
    this.isBagOpen = true; // Auto open bag drawer on add
    this.notify();
  }

  removeFromBag(itemId) {
    this.bagItems = this.bagItems.filter(item => item.id !== itemId);
    this.persistBag();
    this.notify();
  }

  updateBagItemQty(itemId, delta) {
    const item = this.bagItems.find(i => i.id === itemId);
    if (!item) return;
    item.qty = (item.qty || 1) + delta;
    if (item.qty <= 0) {
      this.removeFromBag(itemId);
    } else {
      this.persistBag();
      this.notify();
    }
  }

  getBagTotal() {
    return this.bagItems.reduce((total, item) => total + (item.price * (item.qty || 1)), 0);
  }

  getBagCount() {
    return this.bagItems.reduce((total, item) => total + (item.qty || 1), 0);
  }

  /**
   * Removes an item from the Wishlist
   * @param {string} itemId
   */
  removeFromWishlist(itemId) {
    const index = this.wishlistItems.findIndex(i => i.id === itemId);
    if (index >= 0) {
      const wasHero = this.activeHeroItem?.id === itemId;
      this.wishlistItems.splice(index, 1);
      if (wasHero && this.wishlistItems.length > 0) {
        this.activeHeroItem = this.wishlistItems[0];
      } else if (this.wishlistItems.length === 0) {
        this.activeHeroItem = null;
      }
      this.persistWishlist();
      this.notify();
    }
  }

  /**
   * Move item from wishlist directly to bag
   * @param {string} itemId
   */
  moveFromWishlistToBag(itemId) {
    const item = this.wishlistItems.find(i => i.id === itemId);
    if (item) {
      this.addToBag(item);
    }
  }
}

export const store = new StyleStudioStore();
