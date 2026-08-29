/**
 * Curated Outfit Pairings Seed Data for StyleStudio MVP
 * Each anchor item features 3 distinct, occasion-tagged pairings answering the "Rule of 3".
 */

/** @type {import('../types/index.js').OutfitPairing[]} */
export const OUTFIT_PAIRINGS = [
  // ==========================================
  // ANCHOR 1: Mango Relaxed-Fit Linen Blazer (Rust)
  // ==========================================
  {
    id: 'pairing-mango-office',
    anchorItemId: 'anchor-mango-blazer',
    occasion: 'Office / Workwear',
    title: 'Tailored Contrast Corporate Edit',
    complementaryItemIds: ['comp-black-trousers', 'comp-leather-loafers'],
    stylingRationale: 'Structured black wool trousers counterbalance the relaxed drape of rust linen, grounding the silhouette with polished pointed loafers for modern boardroom authority.',
    styleConfidence: 'Curated Look'
  },
  {
    id: 'pairing-mango-weekend',
    anchorItemId: 'anchor-mango-blazer',
    occasion: 'Weekend Casual',
    title: 'Relaxed Urban Brunch Layer',
    complementaryItemIds: ['comp-straight-denim', 'comp-white-sneakers'],
    stylingRationale: 'Warm rust earthy tones contrast crisp vintage indigo denim, while minimalist clean sneakers keep the blazer feeling effortless rather than overdressed.',
    styleConfidence: 'Trending Match'
  },
  {
    id: 'pairing-mango-evening',
    anchorItemId: 'anchor-mango-blazer',
    occasion: 'Evening Out',
    title: 'Satin & Linen Sunset Dinner Edit',
    complementaryItemIds: ['comp-satin-skirt', 'comp-heeled-mules'],
    stylingRationale: 'A rich textural play pairing matte, breathable linen against high-shine champagne satin, elongated by sculpted strap mules for intimate evening dinners.',
    styleConfidence: 'Classic Pairing'
  },

  // ==========================================
  // ANCHOR 2: Zara Cropped Poplin Shirt (Optic White)
  // ==========================================
  {
    id: 'pairing-zara-office',
    anchorItemId: 'anchor-zara-shirt',
    occasion: 'Office / Workwear',
    title: 'Architectural High-Rise Workwear',
    complementaryItemIds: ['comp-khaki-trousers', 'comp-leather-loafers'],
    stylingRationale: 'High-waisted wide-leg chinos meet the cropped hemline at the natural waist, creating a clean elongating proportion suitable for creative work spaces.',
    styleConfidence: 'Curated Look'
  },
  {
    id: 'pairing-zara-weekend',
    anchorItemId: 'anchor-zara-shirt',
    occasion: 'Weekend Casual',
    title: 'Crisp Off-Duty Gallery Stroll',
    complementaryItemIds: ['comp-straight-denim', 'comp-white-sneakers'],
    stylingRationale: 'Unbutton the collar slightly and pair with classic straight-leg denim and low-profile white sneakers for effortless Parisian-inspired downtime styling.',
    styleConfidence: 'Trending Match'
  },
  {
    id: 'pairing-zara-evening',
    anchorItemId: 'anchor-zara-shirt',
    occasion: 'Evening Out',
    title: 'Monochrome Cocktail Silhouette',
    complementaryItemIds: ['comp-satin-skirt', 'comp-heeled-mules'],
    stylingRationale: 'Tuck into a high-waisted fluid champagne midi skirt to balance the structured poplin collar with sensual evening drape and minimalist heels.',
    styleConfidence: 'Classic Pairing'
  },

  // ==========================================
  // ANCHOR 3: H&M High-Waisted Tailored Wide Trousers (Olive Green)
  // ==========================================
  {
    id: 'pairing-hm-office',
    anchorItemId: 'anchor-hm-trousers',
    occasion: 'Office / Workwear',
    title: 'Refined Earthy Neutral Tailoring',
    complementaryItemIds: ['comp-mock-knit', 'comp-leather-loafers'],
    stylingRationale: 'A slim ribbed ivory mock-neck knit provides structured upper-body proportion to balance the voluminous wide-leg drape of olive trousers.',
    styleConfidence: 'Curated Look'
  },
  {
    id: 'pairing-hm-weekend',
    anchorItemId: 'anchor-hm-trousers',
    occasion: 'Weekend Casual',
    title: 'Elevated Weekend City Uniform',
    complementaryItemIds: ['comp-white-sneakers'],
    stylingRationale: 'Ditch the formal footwear for pristine white sneakers to turn these sharp tailored trousers into your go-to weekend walking trousers.',
    styleConfidence: 'Trending Match'
  },
  {
    id: 'pairing-hm-evening',
    anchorItemId: 'anchor-hm-trousers',
    occasion: 'Evening Out',
    title: 'Dusk Bistro Accent',
    complementaryItemIds: ['comp-heeled-mules'],
    stylingRationale: 'Add sculpted height with warm taupe mules to lift the wide hem and add sleek nocturnal polish to deep olive tailoring.',
    styleConfidence: 'Classic Pairing'
  }
];
