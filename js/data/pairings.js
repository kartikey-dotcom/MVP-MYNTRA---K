/**
 * Curated Outfit Pairings matching Screenshot 2 & Rule of 3 Specifications
 */

/** @type {import('../types/index.js').OutfitPairing[]} */
export const OUTFIT_PAIRINGS = [
  // ==========================================
  // ANCHOR 1: STARK & CO. - Structured Navy Blazer
  // ==========================================
  {
    id: 'pairing-stark-daily',
    anchorItemId: 'anchor-stark-blazer',
    occasion: 'Daily Look',
    title: 'Effortless Linen Mix',
    subtitle: 'Crisp White Shirt + Beige Trousers',
    complementaryItemIds: ['comp-white-shirt', 'comp-beige-trousers'],
    isPerfectMatch: true,
    stylingRationale: 'Layering this structured navy blazer over a crisp poplin shirt and fluid sand beige trousers creates an effortlessly balanced silhouette for daily meetings and lunches.',
    styleConfidence: 'Curated Look'
  },
  {
    id: 'pairing-stark-datenight',
    anchorItemId: 'anchor-stark-blazer',
    occasion: 'Date Night',
    title: 'Casual Knit Comfort',
    subtitle: 'Soft Grey Knit + Dark Indigo Denim',
    complementaryItemIds: ['comp-grey-knit', 'comp-dark-denim'],
    isPerfectMatch: false,
    stylingRationale: 'Pairing the sharp lapels with a soft heather grey crewneck knit and deep indigo denim dresses down the blazer for an elevated, relaxed evening aesthetic.',
    styleConfidence: 'Trending Match'
  },
  {
    id: 'pairing-stark-officesharp',
    anchorItemId: 'anchor-stark-blazer',
    occasion: 'Office Sharp',
    title: 'Corporate Power Duo',
    subtitle: 'Crisp White Shirt + Black Loafers',
    complementaryItemIds: ['comp-white-shirt', 'comp-leather-loafers'],
    isPerfectMatch: false,
    stylingRationale: 'Sharp contrasting proportions with polished pointed penny loafers provide clean lines and authoritative elegance for high-stakes office days.',
    styleConfidence: 'Classic Pairing'
  },

  // ==========================================
  // ANCHOR 2: LUMIÈRE - Emerald Silk Midi Dress
  // ==========================================
  {
    id: 'pairing-lumiere-daily',
    anchorItemId: 'anchor-lumiere-dress',
    occasion: 'Daily Look',
    title: 'Daytime Minimalist Layer',
    subtitle: 'Soft Grey Knit + Minimalist Sneakers',
    complementaryItemIds: ['comp-grey-knit'],
    isPerfectMatch: true,
    stylingRationale: 'Throw a relaxed grey crewneck over the emerald slip dress to transform evening glamour into an effortless daytime layered skirt look.',
    styleConfidence: 'Curated Look'
  },
  {
    id: 'pairing-lumiere-datenight',
    anchorItemId: 'anchor-lumiere-dress',
    occasion: 'Date Night',
    title: 'Satin Radiance Edit',
    subtitle: 'Champagne Satin + Sculpted Mules',
    complementaryItemIds: ['comp-heeled-mules'],
    isPerfectMatch: false,
    stylingRationale: 'Lustrous emerald silk catches evening ambient light, elevated by sculpted strap mules for romantic dinner settings.',
    styleConfidence: 'Classic Pairing'
  },
  {
    id: 'pairing-lumiere-officesharp',
    anchorItemId: 'anchor-lumiere-dress',
    occasion: 'Office Sharp',
    title: 'Modern Executive Slip',
    subtitle: 'Pointed Loafers + Structured Outerwear',
    complementaryItemIds: ['comp-leather-loafers'],
    isPerfectMatch: false,
    stylingRationale: 'Grounding fluid silk with structured footwear makes the dress office-appropriate and sophisticated.',
    styleConfidence: 'Curated Look'
  },

  // ==========================================
  // ANCHOR 3: AERIS - Chunky Platform Sneakers
  // ==========================================
  {
    id: 'pairing-aeris-daily',
    anchorItemId: 'anchor-aeris-sneakers',
    occasion: 'Daily Look',
    title: 'Off-Duty Gallery Stroll',
    subtitle: 'Crisp White Shirt + Indigo Denim',
    complementaryItemIds: ['comp-white-shirt', 'comp-dark-denim'],
    isPerfectMatch: true,
    stylingRationale: 'Clean white sneakers ground dark denim and a classic button-down for timeless weekend streetwear.',
    styleConfidence: 'Curated Look'
  },
  {
    id: 'pairing-aeris-datenight',
    anchorItemId: 'anchor-aeris-sneakers',
    occasion: 'Date Night',
    title: 'Edgy High-Low Contrast',
    subtitle: 'Silk Slip Skirt + Grey Cashmere',
    complementaryItemIds: ['comp-satin-skirt', 'comp-grey-knit'],
    isPerfectMatch: false,
    stylingRationale: 'Juxtaposing feminine champagne satin with chunky platform footwear creates a trendy downtown date night edge.',
    styleConfidence: 'Trending Match'
  },
  {
    id: 'pairing-aeris-officesharp',
    anchorItemId: 'anchor-aeris-sneakers',
    occasion: 'Office Sharp',
    title: 'Smart-Casual Tailored Commute',
    subtitle: 'Beige Trousers + Crisp White Shirt',
    complementaryItemIds: ['comp-beige-trousers', 'comp-white-shirt'],
    isPerfectMatch: false,
    stylingRationale: 'Wide-leg pleated beige trousers drape smoothly over chunky white platforms for a modern creative office uniform.',
    styleConfidence: 'Classic Pairing'
  },

  // ==========================================
  // ANCHOR 4: NORDIC - Wide-Leg Tailored Trousers
  // ==========================================
  {
    id: 'pairing-nordic-daily',
    anchorItemId: 'anchor-nordic-trousers',
    occasion: 'Daily Look',
    title: 'Effortless Linen Mix',
    subtitle: 'Crisp White Shirt + Beige Trousers',
    complementaryItemIds: ['comp-white-shirt'],
    isPerfectMatch: true,
    stylingRationale: 'Tucking a crisp white button-down into high-waisted sand beige trousers elongates the silhouette for versatile daytime elegance.',
    styleConfidence: 'Curated Look'
  },
  {
    id: 'pairing-nordic-datenight',
    anchorItemId: 'anchor-nordic-trousers',
    occasion: 'Date Night',
    title: 'Dusk Bistro Tailoring',
    subtitle: 'Sculpted Mules + Evening Satin Accent',
    complementaryItemIds: ['comp-heeled-mules'],
    isPerfectMatch: false,
    stylingRationale: 'Adding sculpted heel height creates dramatic movement and flow in wide-leg tailoring for evening cocktails.',
    styleConfidence: 'Classic Pairing'
  },
  {
    id: 'pairing-nordic-officesharp',
    anchorItemId: 'anchor-nordic-trousers',
    occasion: 'Office Sharp',
    title: 'Architectural Boardroom Edit',
    subtitle: 'Pointed Loafers + Structured Poplin',
    complementaryItemIds: ['comp-leather-loafers', 'comp-white-shirt'],
    isPerfectMatch: false,
    stylingRationale: 'Clean pleats over polished black leather loafers create a powerful, refined tailored foundation.',
    styleConfidence: 'Curated Look'
  }
];
