/**
 * Dynamic StyleStudio Pairing Engine
 * Resolves 3 structured occasions & pairings for ANY catalog product.
 */

import { ALL_PRODUCTS } from './catalog.js';

const productMap = new Map(ALL_PRODUCTS.map(p => [p.id, p]));

/**
 * Get available occasions for a given product
 * @param {Object} product
 * @returns {Array<{ key: string, label: string, icon: string }>}
 */
export function getOccasionsForProduct(product) {
  if (!product) {
    return [
      { key: 'office', label: 'Office & Smart', icon: 'briefcase' },
      { key: 'weekend', label: 'Weekend Casual', icon: 'coffee' },
      { key: 'evening', label: 'Evening Out', icon: 'wine' }
    ];
  }

  if (product.styleStudioConfig) {
    const keys = Object.keys(product.styleStudioConfig);
    return keys.map(k => {
      const cfg = product.styleStudioConfig[k];
      return {
        key: k,
        label: cfg.occasionName || k,
        icon: cfg.icon || 'sparkles'
      };
    });
  }

  if (product.category === 'BEAUTY') {
    return [
      { key: 'office', label: 'Day Routine', icon: 'sun' },
      { key: 'weekend', label: 'Night Routine', icon: 'moon' },
      { key: 'evening', label: 'Glam & Party', icon: 'sparkles' }
    ];
  }

  if (product.category === 'HOME & LIVING') {
    return [
      { key: 'office', label: 'Living Room Vibe', icon: 'home' },
      { key: 'weekend', label: 'Bedroom Sanctuary', icon: 'moon' },
      { key: 'evening', label: 'Balcony & Reading Nook', icon: 'sun' }
    ];
  }

  if (product.category === 'KIDS') {
    return [
      { key: 'office', label: 'School & Assembly', icon: 'briefcase' },
      { key: 'weekend', label: 'Playground & Park', icon: 'coffee' },
      { key: 'evening', label: 'Birthday Parties', icon: 'wine' }
    ];
  }

  return [
    { key: 'office', label: 'Office & Smart', icon: 'briefcase' },
    { key: 'weekend', label: 'Weekend Casual', icon: 'coffee' },
    { key: 'evening', label: 'Evening Out', icon: 'wine' }
  ];
}

/**
 * Resolves a hydrated pairing for a product and occasion
 * @param {string} productId
 * @param {string} occasionKey
 */
export function getPairingForProductAndOccasion(productId, occasionKey = 'office') {
  const product = productMap.get(productId) || ALL_PRODUCTS[0];
  if (!product) return null;

  // Normalize occasion key
  let normalizedKey = occasionKey.toLowerCase().trim();
  if (normalizedKey.includes('office') || normalizedKey.includes('day') || normalizedKey.includes('school') || normalizedKey.includes('living')) {
    normalizedKey = 'office';
  } else if (normalizedKey.includes('weekend') || normalizedKey.includes('night') || normalizedKey.includes('playground') || normalizedKey.includes('bedroom')) {
    normalizedKey = 'weekend';
  } else {
    normalizedKey = 'evening';
  }

  const config = product.styleStudioConfig && product.styleStudioConfig[normalizedKey];

  if (config) {
    const heroPrice = product.price;
    const itemsBreakdown = [
      {
        id: product.id,
        name: `${product.brand} ${product.title} (Hero)`,
        price: heroPrice,
        isHero: true,
        image: product.image
      },
      ...config.pairings.map(p => ({
        id: p.id || `pair-${p.title.replace(/\s+/g, '-').toLowerCase()}`,
        name: `${p.brand} ${p.title}`,
        price: p.price,
        isHero: false,
        image: p.image
      }))
    ];

    const totalPrice = itemsBreakdown.reduce((sum, item) => sum + item.price, 0);

    return {
      occasionName: config.occasionName,
      icon: config.icon,
      stylingTip: config.stylingTip,
      canvasHeroImage: config.canvasHeroImage || product.image,
      canvasBottomImage: config.canvasBottomImage,
      canvasShoesImage: config.canvasShoesImage,
      itemsBreakdown,
      totalPrice
    };
  }

  // Deterministic fallback for any other item
  const fallbackPairings = ALL_PRODUCTS.filter(p => p.id !== product.id && p.category === product.category).slice(0, 2);
  const itemsBreakdown = [
    {
      id: product.id,
      name: `${product.brand} ${product.title} (Hero)`,
      price: product.price,
      isHero: true,
      image: product.image
    },
    ...fallbackPairings.map(p => ({
      id: p.id,
      name: `${p.brand} ${p.title}`,
      price: p.price,
      isHero: false,
      image: p.image
    }))
  ];

  return {
    occasionName: 'Curated Ensemble',
    icon: 'sparkles',
    stylingTip: `Style this ${product.brand} piece with complementary textures and tonal accessories for an effortless curated look.`,
    canvasHeroImage: product.image,
    canvasBottomImage: fallbackPairings[0]?.image || product.image,
    canvasShoesImage: fallbackPairings[1]?.image || product.image,
    itemsBreakdown,
    totalPrice: itemsBreakdown.reduce((sum, i) => sum + i.price, 0)
  };
}
