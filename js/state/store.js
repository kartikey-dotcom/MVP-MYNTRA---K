/**
 * Global Reactive Store for Myntra Desktop Prototype
 * Manages View Routing (PLP vs Wishlist), Wishlist State, Active Hero SKU, Bag & Filters.
 */

import { ALL_PRODUCTS, INITIAL_WISHLIST_ITEMS } from '../data/catalog.js';

const STORAGE_KEY_WISHLIST = 'myntra_desktop_wishlist_items_v2';
const STORAGE_KEY_BAG = 'myntra_desktop_bag_items_v2';

class StyleStudioStore {
  constructor() {
    this.allProducts = [...ALL_PRODUCTS];
    this.wishlistItems = this.loadWishlist();
    this.bagItems = this.loadBag();
    
    // Global Navigation View: 'WOMEN' | 'MEN' | 'KIDS' | 'HOME & LIVING' | 'BEAUTY' | 'WISHLIST' | 'STUDIO'
    this.currentView = 'WOMEN'; 
    
    // Active Hero SKU powering StyleStudio
    this.activeHeroSkuId = this.wishlistItems[0]?.id || 'prod-mango-hero';
    this.selectedOccasion = 'office';
    this.isBagOpen = false;
    
    // PLP Filter & Sort State
    this.filters = {
      brand: 'All',
      maxPrice: 15000,
      minDiscount: 0,
      sortBy: 'recommended',
      searchQuery: ''
    };

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

  subscribe(listener) {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  }

  notify() {
    this.listeners.forEach(listener => listener(this));
  }

  /**
   * Switch the active view / category
   * @param {string} view
   */
  setCurrentView(view) {
    this.currentView = view;
    this.notify();
  }

  /**
   * Set the active hero item powering StyleStudio
   * @param {string} skuId
   */
  setActiveHeroSku(skuId) {
    if (!skuId) return;
    this.activeHeroSkuId = skuId;
    this.selectedOccasion = 'office';
    this.notify();
  }

  getActiveHeroProduct() {
    return (
      this.wishlistItems.find(i => i.id === this.activeHeroSkuId) ||
      this.allProducts.find(p => p.id === this.activeHeroSkuId) ||
      this.wishlistItems[0] ||
      this.allProducts[0]
    );
  }

  /**
   * Toggle an item in the Wishlist
   * @param {Object} product
   * @returns {boolean} isNowWishlisted
   */
  toggleWishlist(product) {
    if (!product) return false;
    const existsIndex = this.wishlistItems.findIndex(i => i.id === product.id);
    let isWishlisted = false;

    if (existsIndex >= 0) {
      // Remove
      this.wishlistItems.splice(existsIndex, 1);
      if (this.activeHeroSkuId === product.id && this.wishlistItems.length > 0) {
        this.activeHeroSkuId = this.wishlistItems[0].id;
      }
      isWishlisted = false;
    } else {
      // Add
      const wishItem = {
        ...product,
        addedAt: new Date().toISOString()
      };
      this.wishlistItems.unshift(wishItem);
      this.activeHeroSkuId = product.id; // Automatically make new wishlist item active in StyleStudio
      isWishlisted = true;
    }

    this.persistWishlist();
    this.notify();
    return isWishlisted;
  }

  isItemWishlisted(productId) {
    return this.wishlistItems.some(i => i.id === productId);
  }

  removeFromWishlist(productId) {
    const index = this.wishlistItems.findIndex(i => i.id === productId);
    if (index >= 0) {
      this.wishlistItems.splice(index, 1);
      if (this.activeHeroSkuId === productId && this.wishlistItems.length > 0) {
        this.activeHeroSkuId = this.wishlistItems[0].id;
      }
      this.persistWishlist();
      this.notify();
    }
  }

  moveWishlistToBag(productId) {
    const item = this.wishlistItems.find(i => i.id === productId);
    if (item) {
      this.addToBag(item);
    }
  }

  setOccasion(occasion) {
    this.selectedOccasion = occasion;
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

  addToBag(itemOrItems) {
    const items = Array.isArray(itemOrItems) ? itemOrItems : [itemOrItems];
    items.forEach(newItem => {
      if (!newItem) return;
      const existing = this.bagItems.find(b => b.id === newItem.id);
      if (existing) {
        existing.qty = (existing.qty || 1) + 1;
      } else {
        this.bagItems.push({
          id: newItem.id,
          name: newItem.title || newItem.name,
          brand: newItem.brand || 'MYNTRA',
          price: newItem.price || 0,
          image: newItem.image || newItem.imageUrl || 'https://images.unsplash.com/photo-1551803091-e20673f15770?auto=format&fit=crop&w=700&q=80',
          qty: 1
        });
      }
    });

    this.persistBag();
    this.isBagOpen = true;
    this.notify();
  }

  removeFromBag(itemId) {
    this.bagItems = this.bagItems.filter(i => i.id !== itemId);
    this.persistBag();
    this.notify();
  }

  updateBagQty(itemId, delta) {
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
    return this.bagItems.reduce((sum, item) => sum + (item.price * (item.qty || 1)), 0);
  }

  getBagCount() {
    return this.bagItems.reduce((sum, item) => sum + (item.qty || 1), 0);
  }

  // Filter setters
  setFilterBrand(brand) {
    this.filters.brand = brand;
    this.notify();
  }

  setFilterPrice(maxPrice) {
    this.filters.maxPrice = maxPrice;
    this.notify();
  }

  setSortBy(sortBy) {
    this.filters.sortBy = sortBy;
    this.notify();
  }

  setSearchQuery(q) {
    this.filters.searchQuery = q;
    this.notify();
  }

  getFilteredProductsForCurrentCategory() {
    if (['WISHLIST', 'STUDIO'].includes(this.currentView)) {
      return this.wishlistItems;
    }

    let products = this.allProducts.filter(p => p.category === this.currentView);

    // Search query filter
    if (this.filters.searchQuery) {
      const q = this.filters.searchQuery.toLowerCase();
      products = products.filter(p => 
        p.title.toLowerCase().includes(q) || 
        p.brand.toLowerCase().includes(q) ||
        (p.tags && p.tags.some(t => t.toLowerCase().includes(q)))
      );
    }

    // Brand filter
    if (this.filters.brand && this.filters.brand !== 'All') {
      products = products.filter(p => p.brand.toLowerCase() === this.filters.brand.toLowerCase());
    }

    // Price filter
    if (this.filters.maxPrice) {
      products = products.filter(p => p.price <= this.filters.maxPrice);
    }

    // Sorting
    if (this.filters.sortBy === 'price-low') {
      products.sort((a, b) => a.price - b.price);
    } else if (this.filters.sortBy === 'price-high') {
      products.sort((a, b) => b.price - a.price);
    } else if (this.filters.sortBy === 'rating') {
      products.sort((a, b) => (b.rating || 0) - (a.rating || 0));
    }

    return products;
  }
}

export const store = new StyleStudioStore();
