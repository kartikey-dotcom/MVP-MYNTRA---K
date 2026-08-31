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
    this.activeHeroSkuId = this.wishlistItems[0]?.id || 'prod-w-mango-blouse';
    this.selectedOccasion = 'office';
    this.isBagOpen = false;
    this.isProfileDropdownOpen = false;
    
    // Hyperlocal Weather & City Customization (Idea D)
    this.selectedCity = 'mumbai';
    this.isCityDropdownOpen = false;

    // Lifestyle & Occasion Customizer (Idea E)
    this.selectedOccasionsList = ['office', 'casual', 'evening'];
    this.isCustomizerModalOpen = false;
    
    // Active Tab in Profile View: 'overview' | 'orders' | 'addresses' | 'stylestudio-looks' | 'insider' | 'coupons'
    this.activeProfileTab = 'overview';

    // User Profile Data
    this.userProfile = {
      fullName: 'Krishna Sharma',
      email: 'krishna.sharma@example.com',
      mobile: '+91 98765 43210',
      gender: 'Female',
      dob: '1996-08-15',
      location: 'Bengaluru, Karnataka',
      insiderPoints: 850,
      insiderTier: 'Select Member',
      avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80'
    };

    // User Saved Orders History
    this.orders = [
      {
        orderId: 'MYN-98421049',
        orderDate: '28 Aug 2026',
        status: 'Delivered',
        statusColor: '#03A685',
        totalAmount: 9680,
        items: [
          { name: 'MANGO Drape Satin Blouse (Espresso)', brand: 'MANGO', price: 2490, image: 'https://images.unsplash.com/photo-1551163943-3f6a855d1153?w=800&auto=format&fit=crop&q=80', size: 'M' },
          { name: 'ZARA High-Waist Tailored Trousers', brand: 'ZARA', price: 2990, image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=800&auto=format&fit=crop&q=80', size: '28' },
          { name: 'Charles & Keith Pointed Stiletto Pumps', brand: 'Charles & Keith', price: 4200, image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=800&auto=format&fit=crop&q=80', size: 'UK 5' }
        ]
      },
      {
        orderId: 'MYN-87651230',
        orderDate: '15 Aug 2026',
        status: 'Delivered',
        statusColor: '#03A685',
        totalAmount: 7495,
        items: [
          { name: 'FOSSIL Minimalist Chronograph Watch', brand: 'FOSSIL', price: 7495, image: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=800&auto=format&fit=crop&q=80', size: 'Onesize' }
        ]
      }
    ];

    // Saved Delivery Addresses
    this.addresses = [
      {
        id: 'addr-1',
        name: 'Krishna Sharma',
        type: 'HOME',
        isDefault: true,
        addressLine: 'Flat 402, Skyline Heights, 100ft Road, Indiranagar',
        city: 'Bengaluru',
        state: 'Karnataka',
        pincode: '560038',
        mobile: '+91 98765 43210'
      },
      {
        id: 'addr-2',
        name: 'Krishna Sharma',
        type: 'WORK',
        isDefault: false,
        addressLine: 'Level 5, Embassy Tech Village, Outer Ring Road',
        city: 'Bengaluru',
        state: 'Karnataka',
        pincode: '560103',
        mobile: '+91 98765 43210'
      }
    ];

    // Available Coupons
    this.coupons = [
      { code: 'STYLESTUDIO500', discount: 'Flat ₹500 OFF', desc: 'On Complete Look Bundles above ₹3,000', expiry: '30 Sep 2026' },
      { code: 'MYNTRAINSIDER15', discount: '15% Extra OFF', desc: 'Exclusive VIP Member Perk across all brands', expiry: '15 Oct 2026' }
    ];
    
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

  setSelectedCity(cityKey) {
    this.selectedCity = cityKey;
    this.isCityDropdownOpen = false;
    this.notify();
  }

  toggleCityDropdown(isOpen) {
    if (typeof isOpen === 'boolean') {
      this.isCityDropdownOpen = isOpen;
    } else {
      this.isCityDropdownOpen = !this.isCityDropdownOpen;
    }
    this.notify();
  }

  setSelectedOccasions(newOccasions) {
    if (Array.isArray(newOccasions) && newOccasions.length > 0) {
      this.selectedOccasionsList = [...newOccasions];
      if (!this.selectedOccasionsList.includes(this.selectedOccasion)) {
        this.selectedOccasion = this.selectedOccasionsList[0];
      }
    }
    this.isCustomizerModalOpen = false;
    this.notify();
  }

  toggleCustomizerModal(isOpen) {
    if (typeof isOpen === 'boolean') {
      this.isCustomizerModalOpen = isOpen;
    } else {
      this.isCustomizerModalOpen = !this.isCustomizerModalOpen;
    }
    this.notify();
  }

  setProfileTab(tab) {
    this.activeProfileTab = tab;
    this.notify();
  }

  toggleProfileDropdown(isOpen) {
    if (typeof isOpen === 'boolean') {
      this.isProfileDropdownOpen = isOpen;
    } else {
      this.isProfileDropdownOpen = !this.isProfileDropdownOpen;
    }
    this.notify();
  }

  updateUserProfile(updatedFields) {
    this.userProfile = { ...this.userProfile, ...updatedFields };
    this.notify();
  }

  addAddress(address) {
    this.addresses.push({
      id: `addr-${Date.now()}`,
      isDefault: this.addresses.length === 0,
      ...address
    });
    this.notify();
  }

  setDefaultAddress(addressId) {
    this.addresses.forEach(addr => {
      addr.isDefault = (addr.id === addressId);
    });
    this.notify();
  }

  deleteAddress(addressId) {
    this.addresses = this.addresses.filter(a => a.id !== addressId);
    if (this.addresses.length > 0 && !this.addresses.some(a => a.isDefault)) {
      this.addresses[0].isDefault = true;
    }
    this.notify();
  }

  loadWishlist() {
    try {
      const stored = localStorage.getItem(STORAGE_KEY_WISHLIST);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed) && parsed.length > 0) {
          // Re-hydrate with latest catalog data so updated image URLs apply immediately
          return parsed.map(item => {
            const fresh = ALL_PRODUCTS.find(p => p.id === item.id);
            return fresh ? { ...fresh, addedAt: item.addedAt } : item;
          });
        }
      }
      return [...INITIAL_WISHLIST_ITEMS];
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
      this.removeFromWishlist(productId);
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

  updateBagItemQty(itemId, delta) {
    this.updateBagQty(itemId, delta);
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

  setSearchQuery(q, switchView = true) {
    this.filters.searchQuery = q;
    if (q && q.trim().length > 0 && switchView && ['WISHLIST', 'PROFILE', 'STUDIO'].includes(this.currentView)) {
      this.currentView = 'SEARCH';
    }
    this.notify();
  }

  clearSearchQuery() {
    this.filters.searchQuery = '';
    if (this.currentView === 'SEARCH') {
      this.currentView = 'WOMEN';
    }
    this.notify();
  }

  getSearchSuggestions(query) {
    if (!query || query.trim().length === 0) {
      // Grounded strictly in brands and tags present in our dataset
      const datasetBrands = [...new Set(this.allProducts.map(p => p.brand))].filter(Boolean).slice(0, 5);
      const datasetTags = [...new Set(this.allProducts.flatMap(p => p.tags || []))].filter(Boolean).slice(0, 4);
      const trendingTerms = [...new Set([...datasetBrands, ...datasetTags])].slice(0, 8);

      return {
        trending: trendingTerms,
        items: []
      };
    }

    const q = query.toLowerCase().trim();
    const matches = this.allProducts.filter(p => 
      (p.title && p.title.toLowerCase().includes(q)) || 
      (p.brand && p.brand.toLowerCase().includes(q)) ||
      (p.category && p.category.toLowerCase().includes(q)) ||
      (p.subCategory && p.subCategory.toLowerCase().includes(q)) ||
      (p.tags && p.tags.some(t => t.toLowerCase().includes(q)))
    ).slice(0, 6);

    return {
      trending: [],
      items: matches
    };
  }

  getFilteredProductsForCurrentCategory() {
    let products = [];

    if (this.currentView === 'SEARCH') {
      // Global search across all catalog products
      products = [...this.allProducts];
    } else if (['WISHLIST', 'STUDIO'].includes(this.currentView)) {
      products = [...this.wishlistItems];
    } else {
      products = this.allProducts.filter(p => p.category === this.currentView);
    }

    // Search query filter (matches title, brand, category, subCategory, and tags)
    if (this.filters.searchQuery && this.filters.searchQuery.trim().length > 0) {
      const q = this.filters.searchQuery.toLowerCase().trim();
      products = products.filter(p => 
        (p.title && p.title.toLowerCase().includes(q)) || 
        (p.brand && p.brand.toLowerCase().includes(q)) ||
        (p.category && p.category.toLowerCase().includes(q)) ||
        (p.subCategory && p.subCategory.toLowerCase().includes(q)) ||
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
