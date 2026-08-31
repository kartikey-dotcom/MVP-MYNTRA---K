/**
 * Master Fashion & Lifestyle Catalog for Myntra Desktop
 * Contains rich multi-category data (WOMEN, MEN, KIDS, BEAUTY, HOME & LIVING)
 * with structured styleStudioConfig for all 3 occasions per product.
 */

export const ALL_PRODUCTS = [
  // =========================================================================
  // 1. WOMEN'S WEAR
  // =========================================================================
  {
    id: 'prod-mango-hero',
    category: 'WOMEN',
    brand: 'MANGO',
    title: 'Drape Satin Blouse - Espresso Brown',
    price: 2490,
    originalPrice: 4150,
    discount: '40% OFF',
    rating: 4.6,
    ratingCount: 1420,
    image: 'https://images.unsplash.com/photo-1551803091-e20673f15770?auto=format&fit=crop&w=700&q=80',
    tags: ['Satin', 'Cowl Neck', 'Espresso', 'Topwear'],
    isHero: true,
    styleStudioConfig: {
      office: {
        occasionName: 'Office & Smart',
        icon: 'briefcase',
        stylingTip: 'Tuck neatly into tailored neutral trousers for a sharp silhouette. The nude pumps elongate the leg while maintaining a professional palette.',
        canvasHeroImage: 'https://images.unsplash.com/photo-1551803091-e20673f15770?auto=format&fit=crop&w=700&q=80',
        canvasBottomImage: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=700&q=80',
        canvasShoesImage: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=700&q=80',
        pairings: [
          { id: 'pair-zara-trousers', brand: 'ZARA', title: 'Pleated Wide-Leg Trousers', price: 2990, image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=700&q=80', category: 'Bottomwear' },
          { id: 'pair-ck-pumps', brand: 'Charles & Keith', title: 'Classic Nude Pumps', price: 4200, image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=700&q=80', category: 'Footwear' }
        ]
      },
      weekend: {
        occasionName: 'Weekend Casual',
        icon: 'coffee',
        stylingTip: 'Wear loosely draped over an airy champagne satin midi skirt paired with clean platform sneakers for an elevated, effortless weekend brunch.',
        canvasHeroImage: 'https://images.unsplash.com/photo-1551803091-e20673f15770?auto=format&fit=crop&w=700&q=80',
        canvasBottomImage: 'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?auto=format&fit=crop&w=700&q=80',
        canvasShoesImage: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=700&q=80',
        pairings: [
          { id: 'pair-hm-skirt', brand: 'H&M', title: 'Satin Midi Skirt in Champagne', price: 1999, image: 'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?auto=format&fit=crop&w=700&q=80', category: 'Bottomwear' },
          { id: 'pair-aeris-sneakers', brand: 'AERIS', title: 'Chunky Platform Sneakers', price: 2200, image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=700&q=80', category: 'Footwear' }
        ]
      },
      evening: {
        occasionName: 'Evening Out',
        icon: 'wine',
        stylingTip: 'Pair this lustrous espresso drape with charcoal tailoring and towering nude pumps, finished with sculpted gold jewelry for understated evening radiance.',
        canvasHeroImage: 'https://images.unsplash.com/photo-1551803091-e20673f15770?auto=format&fit=crop&w=700&q=80',
        canvasBottomImage: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=700&q=80',
        canvasShoesImage: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=700&q=80',
        pairings: [
          { id: 'pair-zara-charcoal', brand: 'ZARA', title: 'Tailored Charcoal Trousers', price: 2990, image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=700&q=80', category: 'Bottomwear' },
          { id: 'pair-ck-pumps', brand: 'Charles & Keith', title: 'Classic Nude Pumps', price: 4200, image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=700&q=80', category: 'Footwear' }
        ]
      }
    }
  },
  {
    id: 'prod-zara-trousers',
    category: 'WOMEN',
    brand: 'ZARA',
    title: 'Pleated Wide-Leg Tailored Trousers',
    price: 2990,
    originalPrice: 4590,
    discount: '35% OFF',
    rating: 4.5,
    ratingCount: 890,
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=700&q=80',
    tags: ['Tailored', 'Pleated', 'Charcoal', 'Bottomwear'],
    styleStudioConfig: {
      office: {
        occasionName: 'Office & Smart',
        icon: 'briefcase',
        stylingTip: 'Balance the volume of wide-leg charcoal pleats with a fitted satin cowl top and structured leather accessories for an authoritative silhouette.',
        canvasHeroImage: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=700&q=80',
        canvasBottomImage: 'https://images.unsplash.com/photo-1551803091-e20673f15770?auto=format&fit=crop&w=700&q=80',
        canvasShoesImage: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=700&q=80',
        pairings: [
          { id: 'pair-mango-top', brand: 'MANGO', title: 'Drape Satin Blouse', price: 2490, image: 'https://images.unsplash.com/photo-1551803091-e20673f15770?auto=format&fit=crop&w=700&q=80', category: 'Topwear' },
          { id: 'pair-ck-heels', brand: 'Charles & Keith', title: 'Classic Pointed Pumps', price: 4200, image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=700&q=80', category: 'Footwear' }
        ]
      },
      weekend: {
        occasionName: 'Weekend Casual',
        icon: 'coffee',
        stylingTip: 'Style with chunky platform sneakers and a soft relaxed tee for a modern street-tailored vibe.',
        canvasHeroImage: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=700&q=80',
        canvasBottomImage: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=700&q=80',
        canvasShoesImage: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=700&q=80',
        pairings: [
          { id: 'pair-cos-knit', brand: 'COS', title: 'Fine Ribbed Mock-Neck Knit', price: 2490, image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=700&q=80', category: 'Topwear' },
          { id: 'pair-platform-sneakers', brand: 'AERIS', title: 'Platform Clean Sneakers', price: 2200, image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=700&q=80', category: 'Footwear' }
        ]
      },
      evening: {
        occasionName: 'Evening Out',
        icon: 'wine',
        stylingTip: 'High-waisted charcoal trousers offer high-impact visual height with slender stiletto pumps and lustrous evening tops.',
        canvasHeroImage: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=700&q=80',
        canvasBottomImage: 'https://images.unsplash.com/photo-1551803091-e20673f15770?auto=format&fit=crop&w=700&q=80',
        canvasShoesImage: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=700&q=80',
        pairings: [
          { id: 'pair-mango-top', brand: 'MANGO', title: 'Drape Satin Blouse', price: 2490, image: 'https://images.unsplash.com/photo-1551803091-e20673f15770?auto=format&fit=crop&w=700&q=80', category: 'Topwear' },
          { id: 'pair-ck-heels', brand: 'Charles & Keith', title: 'Classic Pointed Pumps', price: 4200, image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=700&q=80', category: 'Footwear' }
        ]
      }
    }
  },
  {
    id: 'prod-hm-skirt',
    category: 'WOMEN',
    brand: 'H&M',
    title: 'Bias-Cut Satin Midi Skirt',
    price: 1999,
    originalPrice: 2499,
    discount: '20% OFF',
    rating: 4.4,
    ratingCount: 1120,
    image: 'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?auto=format&fit=crop&w=700&q=80',
    tags: ['Satin', 'Midi Skirt', 'Champagne', 'Bottomwear'],
    styleStudioConfig: {
      office: {
        occasionName: 'Office & Smart',
        icon: 'briefcase',
        stylingTip: 'Pair champagne satin with a structured blazer to introduce corporate firmness while preserving fluid femininity.',
        canvasHeroImage: 'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?auto=format&fit=crop&w=700&q=80',
        canvasBottomImage: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=700&q=80',
        canvasShoesImage: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=700&q=80',
        pairings: [
          { id: 'pair-stark-blazer', brand: 'STARK & CO.', title: 'Structured Navy Blazer', price: 4990, image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=700&q=80', category: 'Outerwear' },
          { id: 'pair-ck-pumps', brand: 'Charles & Keith', title: 'Classic Nude Pumps', price: 4200, image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=700&q=80', category: 'Footwear' }
        ]
      },
      weekend: {
        occasionName: 'Weekend Casual',
        icon: 'coffee',
        stylingTip: 'Combine fluid bias-cut satin with chunky platform sneakers and a soft knit for all-day comfort.',
        canvasHeroImage: 'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?auto=format&fit=crop&w=700&q=80',
        canvasBottomImage: 'https://images.unsplash.com/photo-1551803091-e20673f15770?auto=format&fit=crop&w=700&q=80',
        canvasShoesImage: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=700&q=80',
        pairings: [
          { id: 'pair-mango-top', brand: 'MANGO', title: 'Drape Satin Blouse', price: 2490, image: 'https://images.unsplash.com/photo-1551803091-e20673f15770?auto=format&fit=crop&w=700&q=80', category: 'Topwear' },
          { id: 'pair-aeris-sneakers', brand: 'AERIS', title: 'Platform Clean Sneakers', price: 2200, image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=700&q=80', category: 'Footwear' }
        ]
      },
      evening: {
        occasionName: 'Evening Out',
        icon: 'wine',
        stylingTip: 'Lustrous champagne silk catches low candlelight for an unforgettable dinner party look with slender stilettos.',
        canvasHeroImage: 'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?auto=format&fit=crop&w=700&q=80',
        canvasBottomImage: 'https://images.unsplash.com/photo-1551803091-e20673f15770?auto=format&fit=crop&w=700&q=80',
        canvasShoesImage: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=700&q=80',
        pairings: [
          { id: 'pair-mango-top', brand: 'MANGO', title: 'Drape Satin Blouse', price: 2490, image: 'https://images.unsplash.com/photo-1551803091-e20673f15770?auto=format&fit=crop&w=700&q=80', category: 'Topwear' },
          { id: 'pair-ck-pumps', brand: 'Charles & Keith', title: 'Classic Nude Pumps', price: 4200, image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=700&q=80', category: 'Footwear' }
        ]
      }
    }
  },
  {
    id: 'prod-ck-pumps',
    category: 'WOMEN',
    brand: 'Charles & Keith',
    title: 'Classic Pointed Nude Pumps',
    price: 4200,
    originalPrice: 4990,
    discount: '15% OFF',
    rating: 4.7,
    ratingCount: 2300,
    image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=700&q=80',
    tags: ['Heels', 'Pumps', 'Nude', 'Footwear'],
    styleStudioConfig: {
      office: {
        occasionName: 'Office & Smart',
        icon: 'briefcase',
        stylingTip: 'Nude pointed pumps visually lengthen the leg when framing wide-leg pleated trousers and tailored outerwear.',
        canvasHeroImage: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=700&q=80',
        canvasBottomImage: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=700&q=80',
        canvasShoesImage: 'https://images.unsplash.com/photo-1551803091-e20673f15770?auto=format&fit=crop&w=700&q=80',
        pairings: [
          { id: 'pair-zara-trousers', brand: 'ZARA', title: 'Pleated Wide-Leg Trousers', price: 2990, image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=700&q=80', category: 'Bottomwear' },
          { id: 'pair-mango-top', brand: 'MANGO', title: 'Drape Satin Blouse', price: 2490, image: 'https://images.unsplash.com/photo-1551803091-e20673f15770?auto=format&fit=crop&w=700&q=80', category: 'Topwear' }
        ]
      },
      weekend: {
        occasionName: 'Weekend Casual',
        icon: 'coffee',
        stylingTip: 'Classic pumps elevate fluid satin midi skirts for festive daywear, gallery visits, and high tea.',
        canvasHeroImage: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=700&q=80',
        canvasBottomImage: 'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?auto=format&fit=crop&w=700&q=80',
        canvasShoesImage: 'https://images.unsplash.com/photo-1551803091-e20673f15770?auto=format&fit=crop&w=700&q=80',
        pairings: [
          { id: 'pair-hm-skirt', brand: 'H&M', title: 'Satin Midi Skirt in Champagne', price: 1999, image: 'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?auto=format&fit=crop&w=700&q=80', category: 'Bottomwear' },
          { id: 'pair-mango-top', brand: 'MANGO', title: 'Drape Satin Blouse', price: 2490, image: 'https://images.unsplash.com/photo-1551803091-e20673f15770?auto=format&fit=crop&w=700&q=80', category: 'Topwear' }
        ]
      },
      evening: {
        occasionName: 'Evening Out',
        icon: 'wine',
        stylingTip: 'The indispensable neutral heel grounding rich evening textures and warm ambient candlelight.',
        canvasHeroImage: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=700&q=80',
        canvasBottomImage: 'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?auto=format&fit=crop&w=700&q=80',
        canvasShoesImage: 'https://images.unsplash.com/photo-1551803091-e20673f15770?auto=format&fit=crop&w=700&q=80',
        pairings: [
          { id: 'pair-mango-top', brand: 'MANGO', title: 'Drape Satin Blouse', price: 2490, image: 'https://images.unsplash.com/photo-1551803091-e20673f15770?auto=format&fit=crop&w=700&q=80', category: 'Topwear' },
          { id: 'pair-hm-skirt', brand: 'H&M', title: 'Satin Midi Skirt', price: 1999, image: 'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?auto=format&fit=crop&w=700&q=80', category: 'Bottomwear' }
        ]
      }
    }
  },
  {
    id: 'prod-forever-new-dress',
    category: 'WOMEN',
    brand: 'Forever New',
    title: 'Floral Pleated Georgette Wrap Dress',
    price: 5400,
    originalPrice: 7200,
    discount: '25% OFF',
    rating: 4.8,
    ratingCount: 650,
    image: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=700&q=80',
    tags: ['Floral', 'Wrap Dress', 'Midi', 'Dresses'],
    styleStudioConfig: {
      office: {
        occasionName: 'Office & Smart',
        icon: 'briefcase',
        stylingTip: 'Layer with a structured neutral blazer and pointed nude pumps for summer boardroom confidence.',
        canvasHeroImage: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=700&q=80',
        canvasBottomImage: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=700&q=80',
        canvasShoesImage: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=700&q=80',
        pairings: [
          { id: 'pair-stark-blazer', brand: 'STARK & CO.', title: 'Structured Navy Blazer', price: 4990, image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=700&q=80', category: 'Outerwear' },
          { id: 'pair-ck-pumps', brand: 'Charles & Keith', title: 'Classic Nude Pumps', price: 4200, image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=700&q=80', category: 'Footwear' }
        ]
      },
      weekend: {
        occasionName: 'Weekend Casual',
        icon: 'coffee',
        stylingTip: 'Pair with woven espadrilles and a straw tote for sunlit garden parties and coastal brunches.',
        canvasHeroImage: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=700&q=80',
        canvasBottomImage: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=700&q=80',
        canvasShoesImage: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=700&q=80',
        pairings: [
          { id: 'pair-aeris-sneakers', brand: 'AERIS', title: 'Chunky Platform Sneakers', price: 2200, image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=700&q=80', category: 'Footwear' },
          { id: 'pair-gold-drop', brand: 'MANGO', title: 'Sculpted Golden Drop Earrings', price: 990, image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=700&q=80', category: 'Accessories' }
        ]
      },
      evening: {
        occasionName: 'Evening Out',
        icon: 'wine',
        stylingTip: 'Let the delicate floral georgette flow gracefully with champagne mules and gold statement drops.',
        canvasHeroImage: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=700&q=80',
        canvasBottomImage: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=700&q=80',
        canvasShoesImage: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=700&q=80',
        pairings: [
          { id: 'pair-ck-pumps', brand: 'Charles & Keith', title: 'Classic Nude Pumps', price: 4200, image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=700&q=80', category: 'Footwear' },
          { id: 'pair-gold-drop', brand: 'MANGO', title: 'Sculpted Golden Drop Earrings', price: 990, image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=700&q=80', category: 'Accessories' }
        ]
      }
    }
  },
  {
    id: 'prod-levis-501',
    category: 'WOMEN',
    brand: "LEVI'S",
    title: '501 Original Fit Straight High-Rise Jeans',
    price: 3899,
    originalPrice: 4999,
    discount: '22% OFF',
    rating: 4.6,
    ratingCount: 3100,
    image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=700&q=80',
    tags: ['Denim', 'Straight Fit', 'Vintage Indigo', 'Bottomwear'],
    styleStudioConfig: {
      office: {
        occasionName: 'Office & Smart',
        icon: 'briefcase',
        stylingTip: 'Dress up vintage wash straight denim with a tailored navy blazer and pointed stiletto pumps.',
        canvasHeroImage: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=700&q=80',
        canvasBottomImage: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=700&q=80',
        canvasShoesImage: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=700&q=80',
        pairings: [
          { id: 'pair-stark-blazer', brand: 'STARK & CO.', title: 'Structured Navy Blazer', price: 4990, image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=700&q=80', category: 'Outerwear' },
          { id: 'pair-ck-pumps', brand: 'Charles & Keith', title: 'Classic Nude Pumps', price: 4200, image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=700&q=80', category: 'Footwear' }
        ]
      },
      weekend: {
        occasionName: 'Weekend Casual',
        icon: 'coffee',
        stylingTip: 'The quintessential weekend uniform: vintage denim + clean sneakers + cowl drape top.',
        canvasHeroImage: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=700&q=80',
        canvasBottomImage: 'https://images.unsplash.com/photo-1551803091-e20673f15770?auto=format&fit=crop&w=700&q=80',
        canvasShoesImage: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=700&q=80',
        pairings: [
          { id: 'pair-mango-top', brand: 'MANGO', title: 'Drape Satin Blouse', price: 2490, image: 'https://images.unsplash.com/photo-1551803091-e20673f15770?auto=format&fit=crop&w=700&q=80', category: 'Topwear' },
          { id: 'pair-aeris-sneakers', brand: 'AERIS', title: 'Platform Clean Sneakers', price: 2200, image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=700&q=80', category: 'Footwear' }
        ]
      },
      evening: {
        occasionName: 'Evening Out',
        icon: 'wine',
        stylingTip: 'Contrast rigid 90s vintage denim with fluid satin and sculpted drop earrings for downtown chic.',
        canvasHeroImage: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=700&q=80',
        canvasBottomImage: 'https://images.unsplash.com/photo-1551803091-e20673f15770?auto=format&fit=crop&w=700&q=80',
        canvasShoesImage: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=700&q=80',
        pairings: [
          { id: 'pair-mango-top', brand: 'MANGO', title: 'Drape Satin Blouse', price: 2490, image: 'https://images.unsplash.com/photo-1551803091-e20673f15770?auto=format&fit=crop&w=700&q=80', category: 'Topwear' },
          { id: 'pair-ck-pumps', brand: 'Charles & Keith', title: 'Classic Nude Pumps', price: 4200, image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=700&q=80', category: 'Footwear' }
        ]
      }
    }
  },

  // =========================================================================
  // 2. MEN'S WEAR
  // =========================================================================
  {
    id: 'prod-rare-rabbit-shirt',
    category: 'MEN',
    brand: 'RARE RABBIT',
    title: 'Pure Linen Relaxed Fit Solid Overshirt',
    price: 3290,
    originalPrice: 4999,
    discount: '34% OFF',
    rating: 4.6,
    ratingCount: 1800,
    image: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=700&q=80',
    tags: ['Linen', 'Overshirt', 'Smart Casual', 'Topwear'],
    styleStudioConfig: {
      office: {
        occasionName: 'Office & Smart',
        icon: 'briefcase',
        stylingTip: 'Tuck this breathable olive linen shirt into sharp beige chinos with brown leather loafers for relaxed executive Fridays.',
        canvasHeroImage: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=700&q=80',
        canvasBottomImage: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=700&q=80',
        canvasShoesImage: 'https://images.unsplash.com/photo-1533867617858-e7b97e060509?auto=format&fit=crop&w=700&q=80',
        pairings: [
          { id: 'pair-roadster-chinos', brand: 'ROADSTER', title: 'Slim Fit Sand Chinos', price: 1499, image: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=700&q=80', category: 'Bottomwear' },
          { id: 'pair-aldo-loafers', brand: 'ALDO', title: 'Penny Leather Loafers', price: 4490, image: 'https://images.unsplash.com/photo-1533867617858-e7b97e060509?auto=format&fit=crop&w=700&q=80', category: 'Footwear' }
        ]
      },
      weekend: {
        occasionName: 'Weekend Casual',
        icon: 'coffee',
        stylingTip: 'Wear unbuttoned over a crisp white crewneck tee with vintage wash denim and low-top white sneakers.',
        canvasHeroImage: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=700&q=80',
        canvasBottomImage: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=700&q=80',
        canvasShoesImage: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=700&q=80',
        pairings: [
          { id: 'pair-levis-jeans', brand: "LEVI'S", title: '511 Slim Fit Stretch Denim', price: 3499, image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=700&q=80', category: 'Bottomwear' },
          { id: 'pair-nike-killshot', brand: 'NIKE', title: 'Killshot 2 Vintage Sneakers', price: 3995, image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=700&q=80', category: 'Footwear' }
        ]
      },
      evening: {
        occasionName: 'Evening Out',
        icon: 'wine',
        stylingTip: 'Button up and layer beneath an unstructured navy blazer with black tailored trousers for twilight dinners.',
        canvasHeroImage: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=700&q=80',
        canvasBottomImage: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=700&q=80',
        canvasShoesImage: 'https://images.unsplash.com/photo-1533867617858-e7b97e060509?auto=format&fit=crop&w=700&q=80',
        pairings: [
          { id: 'pair-tommy-blazer', brand: 'TOMMY HILFIGER', title: 'Tailored Navy Wool Blazer', price: 8990, image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=700&q=80', category: 'Outerwear' },
          { id: 'pair-aldo-loafers', brand: 'ALDO', title: 'Penny Leather Loafers', price: 4490, image: 'https://images.unsplash.com/photo-1533867617858-e7b97e060509?auto=format&fit=crop&w=700&q=80', category: 'Footwear' }
        ]
      }
    }
  },
  {
    id: 'prod-tommy-blazer',
    category: 'MEN',
    brand: 'TOMMY HILFIGER',
    title: 'Single-Breasted Tailored Navy Blazer',
    price: 8990,
    originalPrice: 12999,
    discount: '30% OFF',
    rating: 4.8,
    ratingCount: 750,
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=700&q=80',
    tags: ['Blazer', 'Navy', 'Tailored', 'Outerwear'],
    styleStudioConfig: {
      office: {
        occasionName: 'Office & Smart',
        icon: 'briefcase',
        stylingTip: 'Match sharp navy lapels with crisp white cotton and pressed grey trousers for executive board presentations.',
        canvasHeroImage: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=700&q=80',
        canvasBottomImage: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=700&q=80',
        canvasShoesImage: 'https://images.unsplash.com/photo-1533867617858-e7b97e060509?auto=format&fit=crop&w=700&q=80',
        pairings: [
          { id: 'pair-roadster-chinos', brand: 'ROADSTER', title: 'Slim Fit Sand Chinos', price: 1499, image: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=700&q=80', category: 'Bottomwear' },
          { id: 'pair-aldo-loafers', brand: 'ALDO', title: 'Penny Leather Loafers', price: 4490, image: 'https://images.unsplash.com/photo-1533867617858-e7b97e060509?auto=format&fit=crop&w=700&q=80', category: 'Footwear' }
        ]
      },
      weekend: {
        occasionName: 'Weekend Casual',
        icon: 'coffee',
        stylingTip: 'Dress down the tailored cut over vintage denim and clean white low-top sneakers.',
        canvasHeroImage: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=700&q=80',
        canvasBottomImage: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=700&q=80',
        canvasShoesImage: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=700&q=80',
        pairings: [
          { id: 'pair-levis-jeans', brand: "LEVI'S", title: '511 Slim Fit Stretch Denim', price: 3499, image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=700&q=80', category: 'Bottomwear' },
          { id: 'pair-nike-killshot', brand: 'NIKE', title: 'Killshot 2 Vintage Sneakers', price: 3995, image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=700&q=80', category: 'Footwear' }
        ]
      },
      evening: {
        occasionName: 'Evening Out',
        icon: 'wine',
        stylingTip: 'Pair with dark monochromatic trousers and polished leather dress shoes for fine dining and galas.',
        canvasHeroImage: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=700&q=80',
        canvasBottomImage: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=700&q=80',
        canvasShoesImage: 'https://images.unsplash.com/photo-1533867617858-e7b97e060509?auto=format&fit=crop&w=700&q=80',
        pairings: [
          { id: 'pair-rare-shirt', brand: 'RARE RABBIT', title: 'Pure Linen Overshirt', price: 3290, image: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=700&q=80', category: 'Topwear' },
          { id: 'pair-aldo-loafers', brand: 'ALDO', title: 'Penny Leather Loafers', price: 4490, image: 'https://images.unsplash.com/photo-1533867617858-e7b97e060509?auto=format&fit=crop&w=700&q=80', category: 'Footwear' }
        ]
      }
    }
  },
  {
    id: 'prod-roadster-chinos',
    category: 'MEN',
    brand: 'ROADSTER',
    title: 'Comfort Stretch Slim Fit Sand Chinos',
    price: 1499,
    originalPrice: 2499,
    discount: '40% OFF',
    rating: 4.3,
    ratingCount: 4200,
    image: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=700&q=80',
    tags: ['Chinos', 'Slim Fit', 'Beige', 'Bottomwear'],
    styleStudioConfig: {
      office: {
        occasionName: 'Office & Smart',
        icon: 'briefcase',
        stylingTip: 'Clean sand chinos paired with a structured navy blazer and penny loafers deliver a quintessential smart-casual office look.',
        canvasHeroImage: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=700&q=80',
        canvasBottomImage: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=700&q=80',
        canvasShoesImage: 'https://images.unsplash.com/photo-1533867617858-e7b97e060509?auto=format&fit=crop&w=700&q=80',
        pairings: [
          { id: 'pair-tommy-blazer', brand: 'TOMMY HILFIGER', title: 'Tailored Navy Blazer', price: 8990, image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=700&q=80', category: 'Outerwear' },
          { id: 'pair-aldo-loafers', brand: 'ALDO', title: 'Penny Leather Loafers', price: 4490, image: 'https://images.unsplash.com/photo-1533867617858-e7b97e060509?auto=format&fit=crop&w=700&q=80', category: 'Footwear' }
        ]
      },
      weekend: {
        occasionName: 'Weekend Casual',
        icon: 'coffee',
        stylingTip: 'Cuff the hems slightly and pair with a linen shirt and vintage sneakers for Saturday cafe runs.',
        canvasHeroImage: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=700&q=80',
        canvasBottomImage: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=700&q=80',
        canvasShoesImage: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=700&q=80',
        pairings: [
          { id: 'pair-rare-shirt', brand: 'RARE RABBIT', title: 'Pure Linen Overshirt', price: 3290, image: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=700&q=80', category: 'Topwear' },
          { id: 'pair-nike-killshot', brand: 'NIKE', title: 'Killshot 2 Vintage Sneakers', price: 3995, image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=700&q=80', category: 'Footwear' }
        ]
      },
      evening: {
        occasionName: 'Evening Out',
        icon: 'wine',
        stylingTip: 'Elevate with a fitted dark knit polo and polished leather loafers for rooftop drinks.',
        canvasHeroImage: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=700&q=80',
        canvasBottomImage: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=700&q=80',
        canvasShoesImage: 'https://images.unsplash.com/photo-1533867617858-e7b97e060509?auto=format&fit=crop&w=700&q=80',
        pairings: [
          { id: 'pair-tommy-blazer', brand: 'TOMMY HILFIGER', title: 'Tailored Navy Blazer', price: 8990, image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=700&q=80', category: 'Outerwear' },
          { id: 'pair-aldo-loafers', brand: 'ALDO', title: 'Penny Leather Loafers', price: 4490, image: 'https://images.unsplash.com/photo-1533867617858-e7b97e060509?auto=format&fit=crop&w=700&q=80', category: 'Footwear' }
        ]
      }
    }
  },

  // =========================================================================
  // 3. KIDS' FASHION
  // =========================================================================
  {
    id: 'prod-tommy-kids-polo',
    category: 'KIDS',
    brand: 'TOMMY HILFIGER',
    title: 'Boys Iconic Striped Pique Cotton Polo',
    price: 1899,
    originalPrice: 2599,
    discount: '27% OFF',
    rating: 4.7,
    ratingCount: 520,
    image: 'https://images.unsplash.com/photo-1519457431-44ccd64a579b?auto=format&fit=crop&w=700&q=80',
    tags: ['Polo', 'Cotton', 'Striped', 'Kids Topwear'],
    styleStudioConfig: {
      office: {
        occasionName: 'School & Assembly',
        icon: 'briefcase',
        stylingTip: 'Tuck into tailored navy shorts with polished velcro sneakers for smart school ceremonies.',
        canvasHeroImage: 'https://images.unsplash.com/photo-1519457431-44ccd64a579b?auto=format&fit=crop&w=700&q=80',
        canvasBottomImage: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=700&q=80',
        canvasShoesImage: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=700&q=80',
        pairings: [
          { id: 'pair-kids-shorts', brand: 'H&M KIDS', title: 'Chino Cotton Shorts', price: 999, image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=700&q=80', category: 'Bottomwear' },
          { id: 'pair-nike-runners', brand: 'NIKE', title: 'Kids Air Max Runners', price: 2795, image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=700&q=80', category: 'Footwear' }
        ]
      },
      weekend: {
        occasionName: 'Playground & Park',
        icon: 'coffee',
        stylingTip: 'Pair with denim dungarees and flexible running sneakers for unrestricted weekend outdoor play.',
        canvasHeroImage: 'https://images.unsplash.com/photo-1519457431-44ccd64a579b?auto=format&fit=crop&w=700&q=80',
        canvasBottomImage: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=700&q=80',
        canvasShoesImage: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=700&q=80',
        pairings: [
          { id: 'pair-kids-dungarees', brand: 'H&M KIDS', title: 'Cotton Denim Dungarees', price: 1799, image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=700&q=80', category: 'Bottomwear' },
          { id: 'pair-nike-runners', brand: 'NIKE', title: 'Kids Air Max Runners', price: 2795, image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=700&q=80', category: 'Footwear' }
        ]
      },
      evening: {
        occasionName: 'Birthday Parties',
        icon: 'wine',
        stylingTip: 'Pair with crisp beige chinos and white slip-ons for celebratory family gatherings and birthday parties.',
        canvasHeroImage: 'https://images.unsplash.com/photo-1519457431-44ccd64a579b?auto=format&fit=crop&w=700&q=80',
        canvasBottomImage: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=700&q=80',
        canvasShoesImage: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=700&q=80',
        pairings: [
          { id: 'pair-kids-chinos', brand: 'MANGO KIDS', title: 'Elasticated Sand Chinos', price: 1290, image: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=700&q=80', category: 'Bottomwear' },
          { id: 'pair-nike-runners', brand: 'NIKE', title: 'Kids Air Max Runners', price: 2795, image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=700&q=80', category: 'Footwear' }
        ]
      }
    }
  },
  {
    id: 'prod-hm-dungarees',
    category: 'KIDS',
    brand: 'H&M KIDS',
    title: 'Unisex Organic Cotton Denim Dungarees',
    price: 1799,
    originalPrice: 2299,
    discount: '22% OFF',
    rating: 4.8,
    ratingCount: 380,
    image: 'https://images.unsplash.com/photo-1503919545889-aef636e10ad4?auto=format&fit=crop&w=700&q=80',
    tags: ['Dungarees', 'Organic Cotton', 'Kids Denim'],
    styleStudioConfig: {
      office: {
        occasionName: 'Daycare & Learning',
        icon: 'briefcase',
        stylingTip: 'Layer over a soft yellow crewneck tee and lightweight flexible trainers for interactive classroom tasks.',
        canvasHeroImage: 'https://images.unsplash.com/photo-1503919545889-aef636e10ad4?auto=format&fit=crop&w=700&q=80',
        canvasBottomImage: 'https://images.unsplash.com/photo-1519457431-44ccd64a579b?auto=format&fit=crop&w=700&q=80',
        canvasShoesImage: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=700&q=80',
        pairings: [
          { id: 'pair-kids-polo', brand: 'TOMMY HILFIGER', title: 'Striped Cotton Polo', price: 1899, image: 'https://images.unsplash.com/photo-1519457431-44ccd64a579b?auto=format&fit=crop&w=700&q=80', category: 'Topwear' },
          { id: 'pair-nike-runners', brand: 'NIKE', title: 'Kids Air Max Runners', price: 2795, image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=700&q=80', category: 'Footwear' }
        ]
      },
      weekend: {
        occasionName: 'Playground & Park',
        icon: 'coffee',
        stylingTip: 'Throw on with durable sneakers and a playful baseball cap for park slides and sandbox games.',
        canvasHeroImage: 'https://images.unsplash.com/photo-1503919545889-aef636e10ad4?auto=format&fit=crop&w=700&q=80',
        canvasBottomImage: 'https://images.unsplash.com/photo-1519457431-44ccd64a579b?auto=format&fit=crop&w=700&q=80',
        canvasShoesImage: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=700&q=80',
        pairings: [
          { id: 'pair-kids-polo', brand: 'TOMMY HILFIGER', title: 'Striped Cotton Polo', price: 1899, image: 'https://images.unsplash.com/photo-1519457431-44ccd64a579b?auto=format&fit=crop&w=700&q=80', category: 'Topwear' },
          { id: 'pair-nike-runners', brand: 'NIKE', title: 'Kids Air Max Runners', price: 2795, image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=700&q=80', category: 'Footwear' }
        ]
      },
      evening: {
        occasionName: 'Birthday Parties',
        icon: 'wine',
        stylingTip: 'Style with a buttoned collared shirt and clean white tennis shoes for festive birthday photos.',
        canvasHeroImage: 'https://images.unsplash.com/photo-1503919545889-aef636e10ad4?auto=format&fit=crop&w=700&q=80',
        canvasBottomImage: 'https://images.unsplash.com/photo-1519457431-44ccd64a579b?auto=format&fit=crop&w=700&q=80',
        canvasShoesImage: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=700&q=80',
        pairings: [
          { id: 'pair-kids-polo', brand: 'TOMMY HILFIGER', title: 'Striped Cotton Polo', price: 1899, image: 'https://images.unsplash.com/photo-1519457431-44ccd64a579b?auto=format&fit=crop&w=700&q=80', category: 'Topwear' },
          { id: 'pair-nike-runners', brand: 'NIKE', title: 'Kids Air Max Runners', price: 2795, image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=700&q=80', category: 'Footwear' }
        ]
      }
    }
  },

  // =========================================================================
  // 4. BEAUTY & PERSONAL CARE
  // =========================================================================
  {
    id: 'prod-mac-lipstick',
    category: 'BEAUTY',
    brand: 'M.A.C',
    title: 'Retro Matte Longwear Lipstick - Ruby Woo',
    price: 2150,
    originalPrice: 2300,
    discount: '6% OFF',
    rating: 4.9,
    ratingCount: 5400,
    image: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=700&q=80',
    tags: ['Lipstick', 'Matte', 'Red', 'Makeup'],
    styleStudioConfig: {
      office: {
        occasionName: 'Day Routine',
        icon: 'sun',
        stylingTip: 'Dab gently with a fingertip for a natural blotted berry stain paired with fresh dewy skin mist.',
        canvasHeroImage: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=700&q=80',
        canvasBottomImage: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=700&q=80',
        canvasShoesImage: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=700&q=80',
        pairings: [
          { id: 'pair-forest-mist', brand: 'FOREST ESSENTIALS', title: 'Pure Rose Water Facial Mist', price: 1450, image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=700&q=80', category: 'Skincare' },
          { id: 'pair-clinique-cream', brand: 'CLINIQUE', title: 'Moisture Surge 100H Hydrator', price: 2950, image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=700&q=80', category: 'Skincare' }
        ]
      },
      weekend: {
        occasionName: 'Night Routine',
        icon: 'moon',
        stylingTip: 'Prep lips with deep hydration before applying a bold defined red lip for Saturday dinner dates.',
        canvasHeroImage: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=700&q=80',
        canvasBottomImage: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=700&q=80',
        canvasShoesImage: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=700&q=80',
        pairings: [
          { id: 'pair-clinique-cream', brand: 'CLINIQUE', title: 'Moisture Surge 100H Hydrator', price: 2950, image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=700&q=80', category: 'Skincare' },
          { id: 'pair-forest-mist', brand: 'FOREST ESSENTIALS', title: 'Pure Rose Water Facial Mist', price: 1450, image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=700&q=80', category: 'Skincare' }
        ]
      },
      evening: {
        occasionName: 'Glam & Party',
        icon: 'sparkles',
        stylingTip: 'Full opaque swipe of iconic Ruby Woo paired with voluminous salon-style curls using Dyson Airwrap.',
        canvasHeroImage: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=700&q=80',
        canvasBottomImage: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=700&q=80',
        canvasShoesImage: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=700&q=80',
        pairings: [
          { id: 'pair-forest-mist', brand: 'FOREST ESSENTIALS', title: 'Pure Rose Water Facial Mist', price: 1450, image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=700&q=80', category: 'Skincare' },
          { id: 'pair-clinique-cream', brand: 'CLINIQUE', title: 'Moisture Surge 100H Hydrator', price: 2950, image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=700&q=80', category: 'Skincare' }
        ]
      }
    }
  },
  {
    id: 'prod-forest-mist',
    category: 'BEAUTY',
    brand: 'FOREST ESSENTIALS',
    title: 'Facial Tonic Mist Pure Rosewater',
    price: 1450,
    originalPrice: 1650,
    discount: '12% OFF',
    rating: 4.8,
    ratingCount: 3200,
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=700&q=80',
    tags: ['Mist', 'Rose Water', 'Skincare', 'Ayurveda'],
    styleStudioConfig: {
      office: {
        occasionName: 'Day Routine',
        icon: 'sun',
        stylingTip: 'Spritz generously through air-conditioned office hours for an instant mid-day glow rejuvenation.',
        canvasHeroImage: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=700&q=80',
        canvasBottomImage: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=700&q=80',
        canvasShoesImage: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=700&q=80',
        pairings: [
          { id: 'pair-clinique-cream', brand: 'CLINIQUE', title: 'Moisture Surge 100H Hydrator', price: 2950, image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=700&q=80', category: 'Skincare' },
          { id: 'pair-mac-ruby', brand: 'M.A.C', title: 'Retro Matte Ruby Woo', price: 2150, image: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=700&q=80', category: 'Makeup' }
        ]
      },
      weekend: {
        occasionName: 'Night Routine',
        icon: 'moon',
        stylingTip: 'Use as a calming toner base before nighttime barrier repair serums and overnight hydration.',
        canvasHeroImage: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=700&q=80',
        canvasBottomImage: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=700&q=80',
        canvasShoesImage: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=700&q=80',
        pairings: [
          { id: 'pair-clinique-cream', brand: 'CLINIQUE', title: 'Moisture Surge 100H Hydrator', price: 2950, image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=700&q=80', category: 'Skincare' },
          { id: 'pair-mac-ruby', brand: 'M.A.C', title: 'Retro Matte Ruby Woo', price: 2150, image: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=700&q=80', category: 'Makeup' }
        ]
      },
      evening: {
        occasionName: 'Glam & Party',
        icon: 'sparkles',
        stylingTip: 'Set full evening party makeup for a glowing, non-cakey finish that lasts through the night.',
        canvasHeroImage: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=700&q=80',
        canvasBottomImage: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=700&q=80',
        canvasShoesImage: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=700&q=80',
        pairings: [
          { id: 'pair-mac-ruby', brand: 'M.A.C', title: 'Retro Matte Ruby Woo', price: 2150, image: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=700&q=80', category: 'Makeup' },
          { id: 'pair-clinique-cream', brand: 'CLINIQUE', title: 'Moisture Surge 100H Hydrator', price: 2950, image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=700&q=80', category: 'Skincare' }
        ]
      }
    }
  },

  // =========================================================================
  // 5. HOME & LIVING
  // =========================================================================
  {
    id: 'prod-hm-ceramic-vase',
    category: 'HOME & LIVING',
    brand: 'H&M HOME',
    title: 'Sculptural Terracotta Ceramic Vase',
    price: 1999,
    originalPrice: 2799,
    discount: '28% OFF',
    rating: 4.9,
    ratingCount: 420,
    image: 'https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?auto=format&fit=crop&w=700&q=80',
    tags: ['Vase', 'Ceramic', 'Terracotta', 'Decor'],
    styleStudioConfig: {
      office: {
        occasionName: 'Living Room Vibe',
        icon: 'home',
        stylingTip: 'Place atop a minimalist oak coffee table paired with woven textured throws for curated warmth.',
        canvasHeroImage: 'https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?auto=format&fit=crop&w=700&q=80',
        canvasBottomImage: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=700&q=80',
        canvasShoesImage: 'https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=700&q=80',
        pairings: [
          { id: 'pair-ddecor-throw', brand: "D'DECOR", title: 'Boho Woven Cotton Throw Blanket', price: 2499, image: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=700&q=80', category: 'Home Textile' },
          { id: 'pair-westside-candle', brand: 'WESTSIDE HOME', title: 'Scented Soy Amber Candle Set', price: 899, image: 'https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=700&q=80', category: 'Fragrance' }
        ]
      },
      weekend: {
        occasionName: 'Bedroom Sanctuary',
        icon: 'moon',
        stylingTip: 'Style on the bedside nightstand next to ambient amber candlelight for serene wind-down evenings.',
        canvasHeroImage: 'https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?auto=format&fit=crop&w=700&q=80',
        canvasBottomImage: 'https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=700&q=80',
        canvasShoesImage: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=700&q=80',
        pairings: [
          { id: 'pair-westside-candle', brand: 'WESTSIDE HOME', title: 'Scented Soy Amber Candle Set', price: 899, image: 'https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=700&q=80', category: 'Fragrance' },
          { id: 'pair-ddecor-throw', brand: "D'DECOR", title: 'Boho Woven Cotton Throw Blanket', price: 2499, image: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=700&q=80', category: 'Home Textile' }
        ]
      },
      evening: {
        occasionName: 'Balcony & Reading Nook',
        icon: 'sun',
        stylingTip: 'Add dried pampas grass inside the vase on a rattan garden side table with soft throw cushions.',
        canvasHeroImage: 'https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?auto=format&fit=crop&w=700&q=80',
        canvasBottomImage: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=700&q=80',
        canvasShoesImage: 'https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=700&q=80',
        pairings: [
          { id: 'pair-ddecor-throw', brand: "D'DECOR", title: 'Boho Woven Cotton Throw Blanket', price: 2499, image: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=700&q=80', category: 'Home Textile' },
          { id: 'pair-westside-candle', brand: 'WESTSIDE HOME', title: 'Scented Soy Amber Candle Set', price: 899, image: 'https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=700&q=80', category: 'Fragrance' }
        ]
      }
    }
  },
  {
    id: 'prod-ddecor-throw',
    category: 'HOME & LIVING',
    brand: "D'DECOR",
    title: 'Bohemian Textured Fringe Cotton Throw Blanket',
    price: 2499,
    originalPrice: 3499,
    discount: '28% OFF',
    rating: 4.7,
    ratingCount: 680,
    image: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=700&q=80',
    tags: ['Throw', 'Cotton', 'Boho', 'Textiles'],
    styleStudioConfig: {
      office: {
        occasionName: 'Living Room Vibe',
        icon: 'home',
        stylingTip: 'Drape artfully over the arm of a beige linen sofa with sculptural ceramic accents.',
        canvasHeroImage: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=700&q=80',
        canvasBottomImage: 'https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?auto=format&fit=crop&w=700&q=80',
        canvasShoesImage: 'https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=700&q=80',
        pairings: [
          { id: 'pair-hm-vase', brand: 'H&M HOME', title: 'Terracotta Ceramic Vase', price: 1999, image: 'https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?auto=format&fit=crop&w=700&q=80', category: 'Decor' },
          { id: 'pair-westside-candle', brand: 'WESTSIDE HOME', title: 'Scented Soy Amber Candle Set', price: 899, image: 'https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=700&q=80', category: 'Fragrance' }
        ]
      },
      weekend: {
        occasionName: 'Bedroom Sanctuary',
        icon: 'moon',
        stylingTip: 'Layer at the foot of an ivory duvet for rich tactile contrast and cozy bedtime reading.',
        canvasHeroImage: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=700&q=80',
        canvasBottomImage: 'https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=700&q=80',
        canvasShoesImage: 'https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?auto=format&fit=crop&w=700&q=80',
        pairings: [
          { id: 'pair-westside-candle', brand: 'WESTSIDE HOME', title: 'Scented Soy Amber Candle Set', price: 899, image: 'https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=700&q=80', category: 'Fragrance' },
          { id: 'pair-hm-vase', brand: 'H&M HOME', title: 'Terracotta Ceramic Vase', price: 1999, image: 'https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?auto=format&fit=crop&w=700&q=80', category: 'Decor' }
        ]
      },
      evening: {
        occasionName: 'Balcony & Reading Nook',
        icon: 'sun',
        stylingTip: 'Keep on hand for chilly balcony sunsets with warm lighting and ceramic vessels.',
        canvasHeroImage: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=700&q=80',
        canvasBottomImage: 'https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?auto=format&fit=crop&w=700&q=80',
        canvasShoesImage: 'https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=700&q=80',
        pairings: [
          { id: 'pair-hm-vase', brand: 'H&M HOME', title: 'Terracotta Ceramic Vase', price: 1999, image: 'https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?auto=format&fit=crop&w=700&q=80', category: 'Decor' },
          { id: 'pair-westside-candle', brand: 'WESTSIDE HOME', title: 'Scented Soy Amber Candle Set', price: 899, image: 'https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=700&q=80', category: 'Fragrance' }
        ]
      }
    }
  }
];

// Initial default Wishlist contains the 4 Stitch showcase products
export const INITIAL_WISHLIST_ITEMS = [
  ALL_PRODUCTS.find(p => p.id === 'prod-mango-hero'),
  ALL_PRODUCTS.find(p => p.id === 'prod-zara-trousers'),
  ALL_PRODUCTS.find(p => p.id === 'prod-hm-skirt'),
  ALL_PRODUCTS.find(p => p.id === 'prod-ck-pumps')
].filter(Boolean);

export const ALL_CATALOG_ITEMS = ALL_PRODUCTS;
