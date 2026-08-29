/**
 * Curated Outfit Pairings matching StyleStudio Specifications
 */

/** @type {import('../types/index.js').OutfitPairing[]} */
export const OUTFIT_PAIRINGS = [
  // ==========================================
  // STARK & CO. - Structured Navy Blazer
  // ==========================================
  {
    id: 'pairing-stark-daily',
    anchorItemId: 'prod-stark-blazer',
    occasion: 'Daily Look',
    title: 'Effortless Linen Mix',
    subtitle: 'Crisp White Shirt + Beige Trousers',
    complementaryItemIds: ['prod-zara-poplin', 'prod-nordic-trousers'],
    isPerfectMatch: true,
    stylingRationale: 'Layering this structured navy blazer over a crisp poplin shirt and fluid sand beige trousers creates an effortlessly balanced silhouette for daily meetings and lunches.',
    styleConfidence: 'Curated Look'
  },
  {
    id: 'pairing-stark-datenight',
    anchorItemId: 'prod-stark-blazer',
    occasion: 'Date Night',
    title: 'Casual Knit Comfort',
    subtitle: 'Soft Grey Knit + Dark Indigo Denim',
    complementaryItemIds: ['prod-cos-knitwear', 'prod-levis-vintage'],
    isPerfectMatch: false,
    stylingRationale: 'Pairing the sharp lapels with a soft heather grey crewneck knit and deep indigo denim dresses down the blazer for an elevated, relaxed evening aesthetic.',
    styleConfidence: 'Trending Match'
  },
  {
    id: 'pairing-stark-officesharp',
    anchorItemId: 'prod-stark-blazer',
    occasion: 'Office Sharp',
    title: 'Corporate Power Duo',
    subtitle: 'Crisp White Shirt + Black Loafers',
    complementaryItemIds: ['prod-zara-poplin', 'prod-aldo-loafers'],
    isPerfectMatch: false,
    stylingRationale: 'Sharp contrasting proportions with polished pointed penny loafers provide clean lines and authoritative elegance for high-stakes office days.',
    styleConfidence: 'Classic Pairing'
  },

  // ==========================================
  // LUMIÈRE - Emerald Silk Midi Dress
  // ==========================================
  {
    id: 'pairing-lumiere-daily',
    anchorItemId: 'prod-lumiere-dress',
    occasion: 'Daily Look',
    title: 'Daytime Minimalist Layer',
    subtitle: 'Soft Grey Knit + Minimalist Sneakers',
    complementaryItemIds: ['prod-cos-knitwear', 'prod-aeris-sneakers'],
    isPerfectMatch: true,
    stylingRationale: 'Throw a relaxed grey crewneck over the emerald slip dress to transform evening glamour into an effortless daytime layered skirt look.',
    styleConfidence: 'Curated Look'
  },
  {
    id: 'pairing-lumiere-datenight',
    anchorItemId: 'prod-lumiere-dress',
    occasion: 'Date Night',
    title: 'Satin Radiance Edit',
    subtitle: 'Champagne Satin + Sculpted Mules',
    complementaryItemIds: ['prod-steve-madden-mules'],
    isPerfectMatch: false,
    stylingRationale: 'Lustrous emerald silk catches evening ambient light, elevated by sculpted strap mules for romantic dinner settings.',
    styleConfidence: 'Classic Pairing'
  },
  {
    id: 'pairing-lumiere-officesharp',
    anchorItemId: 'prod-lumiere-dress',
    occasion: 'Office Sharp',
    title: 'Modern Executive Slip',
    subtitle: 'Pointed Loafers + Structured Outerwear',
    complementaryItemIds: ['prod-aldo-loafers', 'prod-stark-blazer'],
    isPerfectMatch: false,
    stylingRationale: 'Grounding fluid silk with structured footwear makes the dress office-appropriate and sophisticated.',
    styleConfidence: 'Curated Look'
  },

  // ==========================================
  // AERIS - Chunky Platform Sneakers
  // ==========================================
  {
    id: 'pairing-aeris-daily',
    anchorItemId: 'prod-aeris-sneakers',
    occasion: 'Daily Look',
    title: 'Off-Duty Gallery Stroll',
    subtitle: 'Crisp White Shirt + Indigo Denim',
    complementaryItemIds: ['prod-zara-poplin', 'prod-levis-vintage'],
    isPerfectMatch: true,
    stylingRationale: 'Clean white sneakers ground dark denim and a classic button-down for timeless weekend streetwear.',
    styleConfidence: 'Curated Look'
  },
  {
    id: 'pairing-aeris-datenight',
    anchorItemId: 'prod-aeris-sneakers',
    occasion: 'Date Night',
    title: 'Edgy High-Low Contrast',
    subtitle: 'Silk Slip Skirt + Grey Cashmere',
    complementaryItemIds: ['prod-massimo-skirt', 'prod-cos-knitwear'],
    isPerfectMatch: false,
    stylingRationale: 'Juxtaposing feminine champagne satin with chunky platform footwear creates a trendy downtown date night edge.',
    styleConfidence: 'Trending Match'
  },
  {
    id: 'pairing-aeris-officesharp',
    anchorItemId: 'prod-aeris-sneakers',
    occasion: 'Office Sharp',
    title: 'Smart-Casual Tailored Commute',
    subtitle: 'Beige Trousers + Crisp White Shirt',
    complementaryItemIds: ['prod-nordic-trousers', 'prod-zara-poplin'],
    isPerfectMatch: false,
    stylingRationale: 'Wide-leg pleated beige trousers drape smoothly over chunky white platforms for a modern creative office uniform.',
    styleConfidence: 'Classic Pairing'
  },

  // ==========================================
  // NORDIC - Wide-Leg Tailored Trousers
  // ==========================================
  {
    id: 'pairing-nordic-daily',
    anchorItemId: 'prod-nordic-trousers',
    occasion: 'Daily Look',
    title: 'Effortless Linen Mix',
    subtitle: 'Crisp White Shirt + Beige Trousers',
    complementaryItemIds: ['prod-zara-poplin'],
    isPerfectMatch: true,
    stylingRationale: 'Tucking a crisp white button-down into high-waisted sand beige trousers elongates the silhouette for versatile daytime elegance.',
    styleConfidence: 'Curated Look'
  },
  {
    id: 'pairing-nordic-datenight',
    anchorItemId: 'prod-nordic-trousers',
    occasion: 'Date Night',
    title: 'Dusk Bistro Tailoring',
    subtitle: 'Sculpted Mules + Evening Satin Accent',
    complementaryItemIds: ['prod-steve-madden-mules'],
    isPerfectMatch: false,
    stylingRationale: 'Adding sculpted heel height creates dramatic movement and flow in wide-leg tailoring for evening cocktails.',
    styleConfidence: 'Classic Pairing'
  },
  {
    id: 'pairing-nordic-officesharp',
    anchorItemId: 'prod-nordic-trousers',
    occasion: 'Office Sharp',
    title: 'Architectural Boardroom Edit',
    subtitle: 'Pointed Loafers + Structured Poplin',
    complementaryItemIds: ['prod-aldo-loafers', 'prod-zara-poplin'],
    isPerfectMatch: false,
    stylingRationale: 'Clean pleats over polished black leather loafers create a powerful, refined tailored foundation.',
    styleConfidence: 'Curated Look'
  },

  // ==========================================
  // MANGO - Relaxed-Fit Linen Blazer
  // ==========================================
  {
    id: 'pairing-mango-daily',
    anchorItemId: 'prod-mango-rust-blazer',
    occasion: 'Daily Look',
    title: 'Earthy Tailored Minimalist',
    subtitle: 'Black Trousers + Pointed Loafers',
    complementaryItemIds: ['prod-nordic-trousers', 'prod-aldo-loafers'],
    isPerfectMatch: true,
    stylingRationale: 'Structured trousers balance relaxed rust linen drape for sharp corporate versatility.',
    styleConfidence: 'Curated Look'
  },
  {
    id: 'pairing-mango-datenight',
    anchorItemId: 'prod-mango-rust-blazer',
    occasion: 'Date Night',
    title: 'Satin Sunset Glow',
    subtitle: 'Champagne Slip Skirt + Heeled Mules',
    complementaryItemIds: ['prod-massimo-skirt', 'prod-steve-madden-mules'],
    isPerfectMatch: false,
    stylingRationale: 'Matte rust linen against lustrous champagne satin creates high-dimension evening drama.',
    styleConfidence: 'Trending Match'
  },
  {
    id: 'pairing-mango-officesharp',
    anchorItemId: 'prod-mango-rust-blazer',
    occasion: 'Office Sharp',
    title: 'Corporate Rust Statement',
    subtitle: 'Poplin Shirt + Structured Loafers',
    complementaryItemIds: ['prod-zara-poplin', 'prod-aldo-loafers'],
    isPerfectMatch: false,
    stylingRationale: 'Clean lines and warm tailoring create a polished, commanding presence in any boardroom.',
    styleConfidence: 'Classic Pairing'
  }
];
