/**
 * Curated Outfit Pairings for StyleStudio Desktop
 * Matches the Stitch design: 3 Real Occasions for each item in the Wishlist.
 */

export const OUTFIT_PAIRINGS = [
  // ==========================================
  // MANGO - Drape Satin Blouse (Espresso Brown) [STITCH HERO]
  // ==========================================
  {
    id: 'pairing-mango-office',
    anchorItemId: 'prod-mango-hero',
    occasion: 'Office & Smart',
    occasionIcon: 'briefcase',
    title: 'Executive Tailored Drape',
    subtitle: 'Neutral Trousers + Nude Pumps',
    complementaryItemIds: ['prod-zara-trousers', 'prod-ck-pumps'],
    proStylingNote: 'Tuck neatly into tailored neutral trousers for a sharp silhouette. The nude pumps elongate the leg while maintaining a professional palette.',
    isPerfectMatch: true,
    canvasHeroImage: 'https://images.unsplash.com/photo-1551803091-e20673f15770?auto=format&fit=crop&w=700&q=80',
    canvasBottomImage: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=700&q=80',
    canvasShoesImage: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=700&q=80',
    itemsBreakdown: [
      { name: 'Mango Blouse (Hero)', price: 2490, isHero: true, id: 'prod-mango-hero' },
      { name: 'Zara Trousers', price: 2990, isHero: false, id: 'prod-zara-trousers' },
      { name: 'C&K Pumps', price: 4200, isHero: false, id: 'prod-ck-pumps' }
    ]
  },
  {
    id: 'pairing-mango-weekend',
    anchorItemId: 'prod-mango-hero',
    occasion: 'Weekend Casual',
    occasionIcon: 'coffee',
    title: 'Fluid Satin Brunch Edit',
    subtitle: 'Champagne Midi Skirt + Clean Sneakers',
    complementaryItemIds: ['prod-hm-skirt', 'prod-aeris-sneakers'],
    proStylingNote: 'Wear loosely draped over a fluid champagne midi skirt paired with clean platform sneakers for an elevated, effortless weekend gallery or brunch look.',
    isPerfectMatch: true,
    canvasHeroImage: 'https://images.unsplash.com/photo-1551803091-e20673f15770?auto=format&fit=crop&w=700&q=80',
    canvasBottomImage: 'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?auto=format&fit=crop&w=700&q=80',
    canvasShoesImage: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=700&q=80',
    itemsBreakdown: [
      { name: 'Mango Blouse (Hero)', price: 2490, isHero: true, id: 'prod-mango-hero' },
      { name: 'H&M Satin Skirt', price: 1999, isHero: false, id: 'prod-hm-skirt' },
      { name: 'Aeris Platform Sneakers', price: 2200, isHero: false, id: 'prod-aeris-sneakers' }
    ]
  },
  {
    id: 'pairing-mango-evening',
    anchorItemId: 'prod-mango-hero',
    occasion: 'Evening',
    occasionIcon: 'wine',
    title: 'Candlelight Luminescence',
    subtitle: 'Pleated Trousers + Nude Stilettos + Gold Accents',
    complementaryItemIds: ['prod-zara-trousers', 'prod-ck-pumps', 'prod-gold-accessories'],
    proStylingNote: 'Let the cowl drape shine against sharp charcoal tailoring and towering nude pumps. Accentuate with warm gold jewelry for understated evening radiance.',
    isPerfectMatch: true,
    canvasHeroImage: 'https://images.unsplash.com/photo-1551803091-e20673f15770?auto=format&fit=crop&w=700&q=80',
    canvasBottomImage: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=700&q=80',
    canvasShoesImage: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=700&q=80',
    itemsBreakdown: [
      { name: 'Mango Blouse (Hero)', price: 2490, isHero: true, id: 'prod-mango-hero' },
      { name: 'Zara Trousers', price: 2990, isHero: false, id: 'prod-zara-trousers' },
      { name: 'C&K Pumps', price: 4200, isHero: false, id: 'prod-ck-pumps' }
    ]
  },

  // ==========================================
  // ZARA - Pleated Wide-Leg Trousers
  // ==========================================
  {
    id: 'pairing-zara-office',
    anchorItemId: 'prod-zara-trousers',
    occasion: 'Office & Smart',
    occasionIcon: 'briefcase',
    title: 'Architectural Boardroom Edit',
    subtitle: 'Espresso Satin Blouse + Nude Pumps',
    complementaryItemIds: ['prod-mango-hero', 'prod-ck-pumps'],
    proStylingNote: 'Balance the voluminous drape of these charcoal pleated trousers with a fluid satin cowl blouse and nude pointed pumps for structured elegance.',
    isPerfectMatch: true,
    canvasHeroImage: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=700&q=80',
    canvasBottomImage: 'https://images.unsplash.com/photo-1551803091-e20673f15770?auto=format&fit=crop&w=700&q=80',
    canvasShoesImage: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=700&q=80',
    itemsBreakdown: [
      { name: 'Zara Trousers (Hero)', price: 2990, isHero: true, id: 'prod-zara-trousers' },
      { name: 'Mango Satin Blouse', price: 2490, isHero: false, id: 'prod-mango-hero' },
      { name: 'C&K Pumps', price: 4200, isHero: false, id: 'prod-ck-pumps' }
    ]
  },
  {
    id: 'pairing-zara-weekend',
    anchorItemId: 'prod-zara-trousers',
    occasion: 'Weekend Casual',
    occasionIcon: 'coffee',
    title: 'Relaxed Tailored Streetwear',
    subtitle: 'Chunky Sneakers + Casual Knit',
    complementaryItemIds: ['prod-aeris-sneakers'],
    proStylingNote: 'Dress down wide-leg pleats with chunky platform sneakers and a casual tee or knit for an effortlessly cool city weekend silhouette.',
    isPerfectMatch: true,
    canvasHeroImage: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=700&q=80',
    canvasBottomImage: 'https://images.unsplash.com/photo-1551803091-e20673f15770?auto=format&fit=crop&w=700&q=80',
    canvasShoesImage: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=700&q=80',
    itemsBreakdown: [
      { name: 'Zara Trousers (Hero)', price: 2990, isHero: true, id: 'prod-zara-trousers' },
      { name: 'Aeris Platform Sneakers', price: 2200, isHero: false, id: 'prod-aeris-sneakers' }
    ]
  },
  {
    id: 'pairing-zara-evening',
    anchorItemId: 'prod-zara-trousers',
    occasion: 'Evening',
    occasionIcon: 'wine',
    title: 'Monochrome Cocktail Stature',
    subtitle: 'Drape Top + Statement Pumps',
    complementaryItemIds: ['prod-mango-hero', 'prod-ck-pumps'],
    proStylingNote: 'High-waisted charcoal trousers offer high-impact visual height when paired with slender stiletto pumps and lustrous evening tops.',
    isPerfectMatch: true,
    canvasHeroImage: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=700&q=80',
    canvasBottomImage: 'https://images.unsplash.com/photo-1551803091-e20673f15770?auto=format&fit=crop&w=700&q=80',
    canvasShoesImage: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=700&q=80',
    itemsBreakdown: [
      { name: 'Zara Trousers (Hero)', price: 2990, isHero: true, id: 'prod-zara-trousers' },
      { name: 'Mango Blouse', price: 2490, isHero: false, id: 'prod-mango-hero' },
      { name: 'C&K Pumps', price: 4200, isHero: false, id: 'prod-ck-pumps' }
    ]
  },

  // ==========================================
  // H&M - Satin Midi Skirt
  // ==========================================
  {
    id: 'pairing-hm-office',
    anchorItemId: 'prod-hm-skirt',
    occasion: 'Office & Smart',
    occasionIcon: 'briefcase',
    title: 'Polished Silk Silhouette',
    subtitle: 'Structured Blazer + Pointed Heels',
    complementaryItemIds: ['prod-stark-blazer', 'prod-ck-pumps'],
    proStylingNote: 'Pair champagne satin with a structured blazer to introduce corporate firmness while preserving fluid femininity.',
    isPerfectMatch: true,
    canvasHeroImage: 'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?auto=format&fit=crop&w=700&q=80',
    canvasBottomImage: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=700&q=80',
    canvasShoesImage: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=700&q=80',
    itemsBreakdown: [
      { name: 'H&M Satin Skirt (Hero)', price: 1999, isHero: true, id: 'prod-hm-skirt' },
      { name: 'Stark Navy Blazer', price: 4990, isHero: false, id: 'prod-stark-blazer' },
      { name: 'C&K Pumps', price: 4200, isHero: false, id: 'prod-ck-pumps' }
    ]
  },
  {
    id: 'pairing-hm-weekend',
    anchorItemId: 'prod-hm-skirt',
    occasion: 'Weekend Casual',
    occasionIcon: 'coffee',
    title: 'Easy Sunday Stroll',
    subtitle: 'Platform Sneakers + Cowl Top',
    complementaryItemIds: ['prod-aeris-sneakers', 'prod-mango-hero'],
    proStylingNote: 'The ultimate smart-casual pairing: combine fluid bias-cut satin with chunky sneakers for day-long comfort.',
    isPerfectMatch: true,
    canvasHeroImage: 'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?auto=format&fit=crop&w=700&q=80',
    canvasBottomImage: 'https://images.unsplash.com/photo-1551803091-e20673f15770?auto=format&fit=crop&w=700&q=80',
    canvasShoesImage: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=700&q=80',
    itemsBreakdown: [
      { name: 'H&M Satin Skirt (Hero)', price: 1999, isHero: true, id: 'prod-hm-skirt' },
      { name: 'Mango Satin Blouse', price: 2490, isHero: false, id: 'prod-mango-hero' },
      { name: 'Aeris Platform Sneakers', price: 2200, isHero: false, id: 'prod-aeris-sneakers' }
    ]
  },
  {
    id: 'pairing-hm-evening',
    anchorItemId: 'prod-hm-skirt',
    occasion: 'Evening',
    occasionIcon: 'wine',
    title: 'Golden Hour Slip Glamour',
    subtitle: 'Espresso Satin Top + Nude Stilettos',
    complementaryItemIds: ['prod-mango-hero', 'prod-ck-pumps'],
    proStylingNote: 'Lustrous champagne silk catches low candlelight for an unforgettable dinner party look.',
    isPerfectMatch: true,
    canvasHeroImage: 'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?auto=format&fit=crop&w=700&q=80',
    canvasBottomImage: 'https://images.unsplash.com/photo-1551803091-e20673f15770?auto=format&fit=crop&w=700&q=80',
    canvasShoesImage: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=700&q=80',
    itemsBreakdown: [
      { name: 'H&M Satin Skirt (Hero)', price: 1999, isHero: true, id: 'prod-hm-skirt' },
      { name: 'Mango Blouse', price: 2490, isHero: false, id: 'prod-mango-hero' },
      { name: 'C&K Pumps', price: 4200, isHero: false, id: 'prod-ck-pumps' }
    ]
  },

  // ==========================================
  // CHARLES & KEITH - Classic Nude Pumps
  // ==========================================
  {
    id: 'pairing-ck-office',
    anchorItemId: 'prod-ck-pumps',
    occasion: 'Office & Smart',
    occasionIcon: 'briefcase',
    title: 'Corporate Precision Footwear',
    subtitle: 'Charcoal Trousers + Drape Blouse',
    complementaryItemIds: ['prod-zara-trousers', 'prod-mango-hero'],
    proStylingNote: 'Nude pointed pumps visually lengthen the leg when framing wide-leg pleated trousers.',
    isPerfectMatch: true,
    canvasHeroImage: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=700&q=80',
    canvasBottomImage: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=700&q=80',
    canvasShoesImage: 'https://images.unsplash.com/photo-1551803091-e20673f15770?auto=format&fit=crop&w=700&q=80',
    itemsBreakdown: [
      { name: 'C&K Pumps (Hero)', price: 4200, isHero: true, id: 'prod-ck-pumps' },
      { name: 'Zara Trousers', price: 2990, isHero: false, id: 'prod-zara-trousers' },
      { name: 'Mango Blouse', price: 2490, isHero: false, id: 'prod-mango-hero' }
    ]
  },
  {
    id: 'pairing-ck-weekend',
    anchorItemId: 'prod-ck-pumps',
    occasion: 'Weekend Casual',
    occasionIcon: 'coffee',
    title: 'Smart Daytime High-Low',
    subtitle: 'Champagne Skirt + Neutral Knit',
    complementaryItemIds: ['prod-hm-skirt'],
    proStylingNote: 'Classic pumps elevate fluid satin midi skirts for festive daywear and art openings.',
    isPerfectMatch: true,
    canvasHeroImage: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=700&q=80',
    canvasBottomImage: 'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?auto=format&fit=crop&w=700&q=80',
    canvasShoesImage: 'https://images.unsplash.com/photo-1551803091-e20673f15770?auto=format&fit=crop&w=700&q=80',
    itemsBreakdown: [
      { name: 'C&K Pumps (Hero)', price: 4200, isHero: true, id: 'prod-ck-pumps' },
      { name: 'H&M Satin Skirt', price: 1999, isHero: false, id: 'prod-hm-skirt' }
    ]
  },
  {
    id: 'pairing-ck-evening',
    anchorItemId: 'prod-ck-pumps',
    occasion: 'Evening',
    occasionIcon: 'wine',
    title: 'Starlight Stiletto Height',
    subtitle: 'Espresso Drape + Evening Skirt',
    complementaryItemIds: ['prod-mango-hero', 'prod-hm-skirt'],
    proStylingNote: 'The indispensable neutral heel grounding satin textures and warm ambient candlelight.',
    isPerfectMatch: true,
    canvasHeroImage: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=700&q=80',
    canvasBottomImage: 'https://images.unsplash.com/photo-1551803091-e20673f15770?auto=format&fit=crop&w=700&q=80',
    canvasShoesImage: 'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?auto=format&fit=crop&w=700&q=80',
    itemsBreakdown: [
      { name: 'C&K Pumps (Hero)', price: 4200, isHero: true, id: 'prod-ck-pumps' },
      { name: 'Mango Blouse', price: 2490, isHero: false, id: 'prod-mango-hero' },
      { name: 'H&M Satin Skirt', price: 1999, isHero: false, id: 'prod-hm-skirt' }
    ]
  }
];
