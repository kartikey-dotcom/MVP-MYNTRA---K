/**
 * Myntra StyleStudio Pairing Engine
 * Implements the "Rule of 3" occasion styling matrix with:
 * 1. Hyperlocal Weather & City Adaptation (Idea D)
 * 2. Lifestyle & Occasion Customizer Presets (Idea E)
 */

import { ALL_PRODUCTS } from './catalog.js';

// City & Weather Metadata
export const CITIES_WEATHER_DATA = {
  mumbai: {
    key: 'mumbai',
    name: 'Mumbai',
    temp: '28°C',
    climate: 'Humid / Coastal',
    pillText: '📍 Mumbai (28°C Humid)',
    weatherTag: '☀️ 28°C High Humidity',
    weatherTip: 'Keep it airy with breathable cotton-linen blends and open-toe footwear; no heavy layering needed in coastal humidity.'
  },
  delhi: {
    key: 'delhi',
    name: 'Delhi',
    temp: '14°C',
    climate: 'Crisp / Winter Layering',
    pillText: '📍 Delhi (14°C Crisp)',
    weatherTag: '🧥 14°C Crisp Breeze',
    weatherTip: 'Layer with a structured wool-blend coat, tailored blazer, or knit layer to adapt comfortably to cooler northern evenings.'
  },
  bangalore: {
    key: 'bangalore',
    name: 'Bangalore',
    temp: '21°C',
    climate: 'Pleasant / Breeze',
    pillText: '📍 Bangalore (21°C Pleasant)',
    weatherTag: '🍃 21°C Pleasant',
    weatherTip: 'Pair with versatile lightweight denim or a soft cotton cardigan for effortless comfort in Bangalore’s breezy weather.'
  },
  goa: {
    key: 'goa',
    name: 'Goa',
    temp: '30°C',
    climate: 'Tropical / Warm',
    pillText: '📍 Goa (30°C Tropical)',
    weatherTag: '🌴 30°C Tropical Sun',
    weatherTip: 'Go breezy with lightweight resort separates, woven straw accessories, and flat slide sandals for tropical ease.'
  }
};

// Complete Master Occasion Presets (8 Lifestyle Presets)
export const OCCASION_PRESETS = [
  {
    id: 'office',
    name: 'Office & Smart Casual',
    shortName: 'Office & Smart',
    icon: 'briefcase',
    badge: 'Workwear Verified',
    description: 'Crisp, structured boardroom-ready silhouettes with comfortable polish.'
  },
  {
    id: 'casual',
    name: 'Weekend Casual & Brunch',
    shortName: 'Weekend Casual',
    icon: 'coffee',
    badge: 'Brunch Ready',
    description: 'Relaxed separates, breathable fabrics, and effortless daytime charm.'
  },
  {
    id: 'evening',
    name: 'Evening Out & Dinners',
    shortName: 'Evening Out',
    icon: 'wine',
    badge: 'Night Glam',
    description: 'High-shine textures, elevated tailoring, and statement accents.'
  },
  {
    id: 'travel',
    name: 'Airport & Travel Chic',
    shortName: 'Airport & Travel',
    icon: 'plane',
    badge: 'Jetset Comfort',
    description: 'Wrinkle-resistant luxury layers, slip-on shoes, and carry-on elegance.'
  },
  {
    id: 'festive',
    name: 'Festive & Wedding Guest',
    shortName: 'Festive & Wedding',
    icon: 'sparkles',
    badge: 'Ethnic Fusion',
    description: 'Embroidered accents, rich artisanal textures, and heirloom statement flair.'
  },
  {
    id: 'vacation',
    name: 'Resort & Vacation',
    shortName: 'Resort & Vacation',
    icon: 'palmtree',
    badge: 'Holiday Mode',
    description: 'Breezy linen wraps, woven accessories, and sun-drenched coastal chic.'
  },
  {
    id: 'college',
    name: 'Campus & College',
    shortName: 'Campus & College',
    icon: 'graduation-cap',
    badge: 'Streetwise Daily',
    description: 'Relaxed cargo denim, retro kicks, and functional utility styling.'
  },
  {
    id: 'date',
    name: 'Romantic Date Night',
    shortName: 'Romantic Date',
    icon: 'heart',
    badge: 'Sultry Sophistication',
    description: 'Sensual drape lines, delicate kitten heels, and candlelit romance.'
  }
];

// Occasion pairing assets mapped by preset id
const OCCASION_PAIRING_CATALOG = {
  office: {
    bottom: {
      name: 'ZARA High-Waist Tailored Trousers',
      brand: 'ZARA',
      price: 2990,
      image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=800&auto=format&fit=crop&q=80'
    },
    shoes: {
      name: 'Charles & Keith Pointed Stiletto Pumps',
      brand: 'Charles & Keith',
      price: 4200,
      image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=800&auto=format&fit=crop&q=80'
    },
    baseTip: 'Tuck into sharp tailored trousers and finish with pointed stilettos for boardroom confidence.'
  },
  casual: {
    bottom: {
      name: 'H&M Relaxed Straight High Jeans',
      brand: 'H&M',
      price: 2299,
      image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=800&auto=format&fit=crop&q=80'
    },
    shoes: {
      name: 'Mango Woven Cross-Strap Leather Slides',
      brand: 'MANGO',
      price: 2790,
      image: 'https://images.unsplash.com/photo-1560343090-f0409e92791a?w=800&auto=format&fit=crop&q=80'
    },
    baseTip: 'Half-tuck into straight-leg vintage wash denim and team with minimalist leather slides for Sunday brunch.'
  },
  evening: {
    bottom: {
      name: 'H&M Bias-Cut Satin Midi Skirt',
      brand: 'H&M',
      price: 1999,
      image: 'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=800&auto=format&fit=crop&q=80'
    },
    shoes: {
      name: 'Aldo Ankle-Strap Metallic Heels & Clutch',
      brand: 'ALDO',
      price: 5490,
      image: 'https://images.unsplash.com/photo-1535043934128-cf0b28d52f95?w=800&auto=format&fit=crop&q=80'
    },
    baseTip: 'Pair with a liquid satin bias-cut midi skirt and delicate ankle straps for evening glamour.'
  },
  travel: {
    bottom: {
      name: 'Uniqlo Ultra Stretch Airism Relaxed Trousers',
      brand: 'UNIQLO',
      price: 2490,
      image: 'https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=800&auto=format&fit=crop&q=80'
    },
    shoes: {
      name: 'Onitsuka Tiger Slip-on Sneakers & Tote',
      brand: 'Onitsuka Tiger',
      price: 6999,
      image: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=800&auto=format&fit=crop&q=80'
    },
    baseTip: 'Combine with wrinkle-resistant stretch trousers and cushioned slip-ons for first-class airport comfort.'
  },
  festive: {
    bottom: {
      name: 'Fabindia Zari Embroidered Chanderi Skirt',
      brand: 'FabIndia',
      price: 4990,
      image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=800&auto=format&fit=crop&q=80'
    },
    shoes: {
      name: 'Needledust Handcrafted Embellished Juttis',
      brand: 'Needledust',
      price: 3800,
      image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&auto=format&fit=crop&q=80'
    },
    baseTip: 'Drape with an artisanal metallic zari maxi skirt and royal embellished juttis for wedding celebrations.'
  },
  vacation: {
    bottom: {
      name: 'Marks & Spencer Pure Linen Wide-Leg Trousers',
      brand: 'M&S',
      price: 3499,
      image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&auto=format&fit=crop&q=80'
    },
    shoes: {
      name: 'Castaner Woven Espadrille Wedges & Straw Tote',
      brand: 'Castaner',
      price: 4200,
      image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800&auto=format&fit=crop&q=80'
    },
    baseTip: 'Match with breathable pure linen culottes and woven artisan espadrilles for sun-kissed resort strolls.'
  },
  college: {
    bottom: {
      name: 'Levi’s Baggy Cargo Denim Pants',
      brand: 'Levi’s',
      price: 2799,
      image: 'https://images.unsplash.com/photo-1542272604-780c96856592?w=800&auto=format&fit=crop&q=80'
    },
    shoes: {
      name: 'Nike Dunk Retro Low Kicks & Campus Bag',
      brand: 'Nike',
      price: 7495,
      image: 'https://images.unsplash.com/photo-1552346154-21d32810aba3?w=800&auto=format&fit=crop&q=80'
    },
    baseTip: 'Style casually with utility cargo denim and high-contrast retro court sneakers for effortless campus days.'
  },
  date: {
    bottom: {
      name: 'Zara Slit Satin Slip Skirt (Champagne)',
      brand: 'ZARA',
      price: 2590,
      image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&auto=format&fit=crop&q=80'
    },
    shoes: {
      name: 'Steve Madden Strappy Lace-up Heels & Minaudiere',
      brand: 'Steve Madden',
      price: 6499,
      image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=800&auto=format&fit=crop&q=80'
    },
    baseTip: 'Accentuate silhouettes with fluid champagne satin and delicate strappy heels for romantic candlelight dinners.'
  }
};

/**
 * Returns the active 3 occasion tab definitions customized by the user.
 */
export function getActiveOccasions(selectedKeys = ['office', 'casual', 'evening']) {
  return selectedKeys.map(key => {
    const preset = OCCASION_PRESETS.find(p => p.id === key) || OCCASION_PRESETS[0];
    return {
      key: preset.id,
      label: preset.shortName,
      fullName: preset.name,
      icon: preset.icon,
      badge: preset.badge
    };
  });
}

/**
 * Resolves the 3-piece look for a product, chosen occasion, and city climate.
 */
export function getPairingForProductAndOccasion(productId, occasionKey = 'office', cityKey = 'mumbai') {
  const product = ALL_PRODUCTS.find(p => p.id === productId) || ALL_PRODUCTS[0];
  if (!product) return null;

  const city = CITIES_WEATHER_DATA[cityKey] || CITIES_WEATHER_DATA.mumbai;
  const occasionPreset = OCCASION_PRESETS.find(o => o.id === occasionKey) || OCCASION_PRESETS[0];
  const pairData = OCCASION_PAIRING_CATALOG[occasionKey] || OCCASION_PAIRING_CATALOG.office;

  const heroImage = product.image || product.imageUrl;

  // Check if product has an embedded specific config
  const customConfig = product.styleStudioConfig?.[occasionKey];
  const bottomItem = customConfig?.pairings?.[0] || pairData.bottom;
  const shoesItem = customConfig?.pairings?.[1] || pairData.shoes;

  const breakdown = [
    {
      id: product.id,
      name: `${product.brand} ${product.title || product.name} (Hero)`,
      price: product.price,
      isHero: true,
      image: heroImage
    },
    {
      id: bottomItem.id || `pair-bottom-${occasionKey}`,
      name: `${bottomItem.brand} ${bottomItem.title || bottomItem.name}`,
      price: bottomItem.price,
      isHero: false,
      image: bottomItem.image
    },
    {
      id: shoesItem.id || `pair-shoes-${occasionKey}`,
      name: `${shoesItem.brand} ${shoesItem.title || shoesItem.name}`,
      price: shoesItem.price,
      isHero: false,
      image: shoesItem.image
    }
  ];

  const totalPrice = breakdown.reduce((sum, item) => sum + item.price, 0);

  // Weather-adapted pro styling tip
  const baseTip = customConfig?.stylingTip || pairData.baseTip;
  const combinedTip = `${baseTip} (${city.name} Weather Note: ${city.weatherTip})`;

  return {
    occasionName: occasionPreset.name,
    shortName: occasionPreset.shortName,
    icon: occasionPreset.icon,
    badge: occasionPreset.badge,
    stylingTip: combinedTip,
    weatherTag: city.weatherTag,
    cityName: city.name,
    canvasHeroImage: customConfig?.canvasHeroImage || heroImage,
    canvasBottomImage: customConfig?.canvasBottomImage || bottomItem.image,
    canvasShoesImage: customConfig?.canvasShoesImage || shoesItem.image,
    itemsBreakdown: breakdown,
    totalPrice: totalPrice
  };
}
