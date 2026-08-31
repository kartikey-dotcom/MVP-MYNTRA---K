/**
 * Myntra StyleStudio Pairing Engine
 * Implements the "Rule of 3" occasion styling matrix for any product.
 */

import { ALL_PRODUCTS } from './catalog.js';

/**
 * Returns the 3 occasion tab definitions tailored to the product's category.
 */
export function getOccasionsForProduct(product) {
  if (!product) {
    return [
      { key: 'office', label: 'Office & Smart', icon: 'briefcase' },
      { key: 'weekend', label: 'Weekend Casual', icon: 'coffee' },
      { key: 'evening', label: 'Evening Out', icon: 'wine' }
    ];
  }

  if (product.category === 'BEAUTY') {
    return [
      { key: 'office', label: 'Daily Glow', icon: 'sun' },
      { key: 'weekend', label: 'Weekend Natural', icon: 'coffee' },
      { key: 'evening', label: 'Full Glam Night', icon: 'wine' }
    ];
  }

  if (product.category === 'HOME & LIVING') {
    return [
      { key: 'office', label: 'Living Room', icon: 'home' },
      { key: 'weekend', label: 'Bedroom Sanctuary', icon: 'moon' },
      { key: 'evening', label: 'Cozy Corner', icon: 'sun' }
    ];
  }

  if (product.category === 'KIDS') {
    return [
      { key: 'office', label: 'School & Assembly', icon: 'briefcase' },
      { key: 'weekend', label: 'Playground & Park', icon: 'coffee' },
      { key: 'evening', label: 'Birthday Parties', icon: 'sparkles' }
    ];
  }

  // Default Apparel (WOMEN, MEN)
  return [
    { key: 'office', label: 'Office & Smart', icon: 'briefcase' },
    { key: 'weekend', label: 'Weekend Casual', icon: 'coffee' },
    { key: 'evening', label: 'Evening Out', icon: 'wine' }
  ];
}

/**
 * Resolves the 3-piece look for a given product and selected occasion key.
 */
export function getPairingForProductAndOccasion(productId, occasionKey = 'office') {
  const product = ALL_PRODUCTS.find(p => p.id === productId) || ALL_PRODUCTS[0];
  if (!product) return null;

  const validKey = ['office', 'weekend', 'evening'].includes(occasionKey) ? occasionKey : 'office';

  // 1. Check if product has explicit styleStudioConfig for this occasion
  if (product.styleStudioConfig && product.styleStudioConfig[validKey]) {
    const config = product.styleStudioConfig[validKey];
    const heroImage = product.image || product.imageUrl;

    const breakdown = [
      {
        id: product.id,
        name: `${product.brand} ${product.title || product.name} (Hero)`,
        price: product.price,
        isHero: true,
        image: heroImage
      },
      ...(config.pairings || []).map(pair => ({
        id: pair.id,
        name: `${pair.brand} ${pair.title || pair.name}`,
        price: pair.price,
        isHero: false,
        image: pair.image
      }))
    ];

    const totalPrice = breakdown.reduce((sum, item) => sum + item.price, 0);

    return {
      occasionName: config.occasionName,
      icon: config.icon,
      stylingTip: config.stylingTip,
      canvasHeroImage: config.canvasHeroImage || heroImage,
      canvasBottomImage: config.canvasBottomImage || (config.pairings?.[0]?.image || heroImage),
      canvasShoesImage: config.canvasShoesImage || (config.pairings?.[1]?.image || heroImage),
      itemsBreakdown: breakdown,
      totalPrice: totalPrice
    };
  }

  // 2. Deterministic Fallback Pairing Generator based on category & subcategory
  const heroImage = product.image || product.imageUrl;
  const categoryProducts = ALL_PRODUCTS.filter(p => p.category === product.category && p.id !== product.id);
  const otherItems = categoryProducts.length >= 2 ? categoryProducts.slice(0, 2) : ALL_PRODUCTS.slice(0, 2);

  const breakdown = [
    {
      id: product.id,
      name: `${product.brand} ${product.title || product.name} (Hero)`,
      price: product.price,
      isHero: true,
      image: heroImage
    },
    ...otherItems.map(item => ({
      id: item.id,
      name: `${item.brand} ${item.title || item.name}`,
      price: item.price,
      isHero: false,
      image: item.image || item.imageUrl
    }))
  ];

  const totalPrice = breakdown.reduce((sum, item) => sum + item.price, 0);

  const occasionMetaMap = {
    office: { name: 'Office & Smart', icon: 'briefcase' },
    weekend: { name: 'Weekend Casual', icon: 'coffee' },
    evening: { name: 'Evening Out', icon: 'wine' }
  };

  return {
    occasionName: occasionMetaMap[validKey].name,
    icon: occasionMetaMap[validKey].icon,
    stylingTip: `Style this ${product.brand} piece with complementary textures and balanced footwear for complete occasion confidence.`,
    canvasHeroImage: heroImage,
    canvasBottomImage: otherItems[0]?.image || heroImage,
    canvasShoesImage: otherItems[1]?.image || heroImage,
    itemsBreakdown: breakdown,
    totalPrice: totalPrice
  };
}
