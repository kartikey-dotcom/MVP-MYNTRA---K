/**
 * Myntra StyleStudio AI Stylist & Recommendation Engine
 * Features:
 * 1. Strict Schema Enforcement (PairedItem, OccasionLook, StyleStudioResponse)
 * 2. Strict Catalog Grounding (Only picks valid, existing items from ALL_PRODUCTS)
 * 3. Cost-Per-Wear (CPW) Justification Engine
 * 4. Hyperlocal Climate & Weather Adaptation
 * 5. In-Memory Caching for instant responses
 */

import { ALL_PRODUCTS } from './catalog.js';
import { CITIES_WEATHER_DATA, OCCASION_PRESETS } from './pairingEngine.js';

// In-Memory Recommendation Cache
const AI_STYLIST_CACHE = new Map();

// Occasion Master Definitions & Average Wears
const OCCASION_WEARS_MAP = {
  office: { wears: 36, roleBottom: 'Balances top volume with structured elongation', roleShoes: 'Elevates posture and boardroom poise' },
  casual: { wears: 28, roleBottom: 'Adds relaxed daytime drape with vintage wash', roleShoes: 'Provides effortless walkability and casual comfort' },
  evening: { wears: 18, roleBottom: 'Introduces fluid high-shine texture and movement', roleShoes: 'Elongates legs with minimalist metallic straps' },
  travel: { wears: 24, roleBottom: 'Ensures wrinkle-free four-way stretch comfort', roleShoes: 'Enables quick airport transit with cushioned soles' },
  festive: { wears: 12, roleBottom: 'Drapes rich metallic embroidery for ceremonial grandeur', roleShoes: 'Adds artisanal craftsmanship and handcrafted heritage' },
  vacation: { wears: 16, roleBottom: 'Promotes maximum airflow with pure linen weave', roleShoes: 'Pairs natural jute texture for sun-drenched strolls' },
  college: { wears: 48, roleBottom: 'Provides functional multi-pocket utility styling', roleShoes: 'Delivers high-traction street cred and durability' },
  date: { wears: 22, roleBottom: 'Accentuates waistline with champagne bias-cut drape', roleShoes: 'Balances romance with delicate lace-up elegance' }
};

/**
 * Generate fully grounded AI recommendation payload for StyleStudio
 */
export function getAIStylistRecommendation(heroProduct, cityKey = 'mumbai', occasionKeys = ['office', 'casual', 'evening']) {
  if (!heroProduct) return null;

  const city = CITIES_WEATHER_DATA[cityKey] || CITIES_WEATHER_DATA.mumbai;
  const sortedOccasions = [...occasionKeys].sort().join('_');
  const cacheKey = `${heroProduct.id}_${city.key}_${sortedOccasions}`;

  if (AI_STYLIST_CACHE.has(cacheKey)) {
    return AI_STYLIST_CACHE.get(cacheKey);
  }

  // Calculate Versatility Score
  const versatilityScore = Math.min(98, Math.max(88, 90 + (occasionKeys.length * 2)));
  const heroImage = heroProduct.image || heroProduct.imageUrl;

  // Filter available candidate items from the same category
  const sameCategoryPool = ALL_PRODUCTS.filter(p => p.category === heroProduct.category && p.id !== heroProduct.id);
  const globalPool = ALL_PRODUCTS.filter(p => p.id !== heroProduct.id);

  // Build occasion looks matching the strict schema
  const occasions = occasionKeys.slice(0, 3).map((occId, index) => {
    const preset = OCCASION_PRESETS.find(p => p.id === occId) || OCCASION_PRESETS[0];
    const wearInfo = OCCASION_WEARS_MAP[occId] || OCCASION_WEARS_MAP.office;

    // Pick 2 companion items strictly from ALL_PRODUCTS
    const pool = sameCategoryPool.length >= 2 ? sameCategoryPool : globalPool;
    const item1 = pool[(index * 2) % pool.length] || pool[0];
    const item2 = pool[(index * 2 + 1) % pool.length] || pool[1] || item1;

    const pairings = [
      {
        skuId: item1.id,
        brand: item1.brand,
        title: item1.title,
        category: item1.subCategory || 'Bottomwear',
        color: 'Curated Tone',
        price: item1.price,
        originalPrice: item1.originalPrice || item1.price,
        image: item1.image || item1.imageUrl,
        stylingRole: wearInfo.roleBottom
      },
      {
        skuId: item2.id,
        brand: item2.brand,
        title: item2.title,
        category: item2.subCategory || 'Footwear',
        color: 'Accent Tone',
        price: item2.price,
        originalPrice: item2.originalPrice || item2.price,
        image: item2.image || item2.imageUrl,
        stylingRole: wearInfo.roleShoes
      }
    ];

    const totalBundlePrice = heroProduct.price + item1.price + item2.price;
    const estimatedWears = wearInfo.wears;
    const calculatedCPW = Math.round(totalBundlePrice / estimatedWears);

    // Weather adjustment calculation
    const weatherAdjustment = `Adapted for ${city.name} (${city.temp}): ${city.weatherTip}`;
    const stylingTip = `${preset.description} ${weatherAdjustment}`;

    return {
      occasionId: occId,
      occasionName: preset.name,
      shortName: preset.shortName,
      iconName: preset.icon,
      badge: preset.badge,
      weatherAdjustmentNote: `${city.temp} ${city.climate} • ${city.name}`,
      stylingTip: stylingTip,
      costPerWear: {
        estimatedWearsPerYear: estimatedWears,
        calculatedCostPerWear: calculatedCPW,
        justificationText: `Based on ~${estimatedWears} wears/yr across seasonal rotations`
      },
      pairings: pairings,
      totalLookPrice: totalBundlePrice,
      canvasHeroImage: heroImage,
      canvasBottomImage: item1.image || item1.imageUrl,
      canvasShoesImage: item2.image || item2.imageUrl
    };
  });

  const responsePayload = {
    heroSkuId: heroProduct.id,
    cityName: city.name,
    temperatureCelsius: parseInt(city.temp) || 28,
    versatilityScore: versatilityScore,
    occasions: occasions
  };

  AI_STYLIST_CACHE.set(cacheKey, responsePayload);
  return responsePayload;
}
