/**
 * Master Fashion & Lifestyle Catalog for Myntra Desktop MVP
 * Expanded with rich product collections across WOMEN, MEN, KIDS, BEAUTY, and HOME & LIVING.
 * Every product includes rich e-commerce metadata, high-res CDN images, and structured StyleStudio pairings.
 */

export const ALL_PRODUCTS = [
  // =========================================================================
  // 1. WOMEN'S COLLECTION (Western, Indo-Western & Chic Staples)
  // =========================================================================
  {
    id: 'prod-w-mango-blouse',
    category: 'WOMEN',
    subCategory: 'Topwear',
    brand: 'MANGO',
    title: 'Drape Satin Blouse - Espresso Brown',
    price: 2490,
    originalPrice: 4150,
    discount: '40% OFF',
    rating: 4.6,
    ratingCount: 128,
    image: 'https://images.unsplash.com/photo-1551163943-3f6a855d1153?w=800&auto=format&fit=crop&q=80',
    tags: ['Satin', 'Cowl Neck', 'Espresso', 'Topwear'],
    isHero: true,
    styleStudioConfig: {
      office: {
        occasionName: 'Office & Smart',
        icon: 'briefcase',
        stylingTip: 'Tuck neatly into tailored neutral trousers for a sharp silhouette. The nude pumps elongate the leg while maintaining a professional palette.',
        canvasHeroImage: 'https://images.unsplash.com/photo-1551163943-3f6a855d1153?w=800&auto=format&fit=crop&q=80',
        canvasBottomImage: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=800&auto=format&fit=crop&q=80',
        canvasShoesImage: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=800&auto=format&fit=crop&q=80',
        pairings: [
          { id: 'prod-w-zara-trousers', brand: 'ZARA', title: 'High-Waist Tailored Trousers', price: 2990, image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=800&auto=format&fit=crop&q=80', category: 'Bottomwear' },
          { id: 'prod-w-ck-pumps', brand: 'Charles & Keith', title: 'Pointed Stiletto Pumps', price: 4200, image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=800&auto=format&fit=crop&q=80', category: 'Footwear' }
        ]
      },
      weekend: {
        occasionName: 'Weekend Casual',
        icon: 'coffee',
        stylingTip: 'Wear loosely draped over a fluid satin midi skirt with clean platform sneakers for an elevated, effortless weekend brunch.',
        canvasHeroImage: 'https://images.unsplash.com/photo-1551163943-3f6a855d1153?w=800&auto=format&fit=crop&q=80',
        canvasBottomImage: 'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=800&auto=format&fit=crop&q=80',
        canvasShoesImage: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&auto=format&fit=crop&q=80',
        pairings: [
          { id: 'prod-w-hm-skirt', brand: 'H&M', title: 'Bias-Cut Satin Midi Skirt', price: 1999, image: 'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=800&auto=format&fit=crop&q=80', category: 'Bottomwear' },
          { id: 'prod-m-nike-killshot', brand: 'NIKE', title: 'Platform Retro Sneakers', price: 2200, image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&auto=format&fit=crop&q=80', category: 'Footwear' }
        ]
      },
      evening: {
        occasionName: 'Evening Out',
        icon: 'wine',
        stylingTip: 'Pair this lustrous espresso drape with charcoal tailoring and towering nude pumps, finished with a structured leather bag for understated radiance.',
        canvasHeroImage: 'https://images.unsplash.com/photo-1551163943-3f6a855d1153?w=800&auto=format&fit=crop&q=80',
        canvasBottomImage: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=800&auto=format&fit=crop&q=80',
        canvasShoesImage: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=800&auto=format&fit=crop&q=80',
        pairings: [
          { id: 'prod-w-zara-trousers', brand: 'ZARA', title: 'High-Waist Tailored Trousers', price: 2990, image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=800&auto=format&fit=crop&q=80', category: 'Bottomwear' },
          { id: 'prod-w-ck-pumps', brand: 'Charles & Keith', title: 'Pointed Stiletto Pumps', price: 4200, image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=800&auto=format&fit=crop&q=80', category: 'Footwear' }
        ]
      }
    }
  },
  {
    id: 'prod-w-zara-trousers',
    category: 'WOMEN',
    subCategory: 'Bottomwear',
    brand: 'ZARA',
    title: 'High-Waist Tailored Trousers (Sand Beige)',
    price: 2990,
    originalPrice: 3990,
    discount: '25% OFF',
    rating: 4.4,
    ratingCount: 84,
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=800&auto=format&fit=crop&q=80',
    tags: ['Tailored', 'High-Waist', 'Beige', 'Trousers'],
    styleStudioConfig: {
      office: {
        occasionName: 'Office & Smart',
        icon: 'briefcase',
        stylingTip: 'Tuck in a fluid cowl neck blouse and layer with camel tailoring for commanding boardroom presence.',
        canvasHeroImage: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=800&auto=format&fit=crop&q=80',
        canvasBottomImage: 'https://images.unsplash.com/photo-1551163943-3f6a855d1153?w=800&auto=format&fit=crop&q=80',
        canvasShoesImage: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=800&auto=format&fit=crop&q=80',
        pairings: [
          { id: 'prod-w-mango-blouse', brand: 'MANGO', title: 'Drape Satin Blouse', price: 2490, image: 'https://images.unsplash.com/photo-1551163943-3f6a855d1153?w=800&auto=format&fit=crop&q=80', category: 'Topwear' },
          { id: 'prod-w-ck-pumps', brand: 'Charles & Keith', title: 'Pointed Stiletto Pumps', price: 4200, image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=800&auto=format&fit=crop&q=80', category: 'Footwear' }
        ]
      },
      weekend: {
        occasionName: 'Weekend Casual',
        icon: 'coffee',
        stylingTip: 'Pair with a square-neck ribbed knit top and clean sneakers for an easy weekend gallery look.',
        canvasHeroImage: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=800&auto=format&fit=crop&q=80',
        canvasBottomImage: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800&auto=format&fit=crop&q=80',
        canvasShoesImage: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&auto=format&fit=crop&q=80',
        pairings: [
          { id: 'prod-w-only-top', brand: 'ONLY', title: 'Ribbed Square-Neck Knit', price: 1499, image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800&auto=format&fit=crop&q=80', category: 'Topwear' },
          { id: 'prod-m-nike-killshot', brand: 'NIKE', title: 'Retro Clean Sneakers', price: 2200, image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&auto=format&fit=crop&q=80', category: 'Footwear' }
        ]
      },
      evening: {
        occasionName: 'Evening Out',
        icon: 'wine',
        stylingTip: 'Dress up with a double-breasted blazer and pointed stiletto heels for twilight dinners.',
        canvasHeroImage: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=800&auto=format&fit=crop&q=80',
        canvasBottomImage: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800&auto=format&fit=crop&q=80',
        canvasShoesImage: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=800&auto=format&fit=crop&q=80',
        pairings: [
          { id: 'prod-w-urbanic-blazer', brand: 'URBANIC', title: 'Oversized Camel Blazer', price: 3290, image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800&auto=format&fit=crop&q=80', category: 'Outerwear' },
          { id: 'prod-w-ck-pumps', brand: 'Charles & Keith', title: 'Pointed Stiletto Pumps', price: 4200, image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=800&auto=format&fit=crop&q=80', category: 'Footwear' }
        ]
      }
    }
  },
  {
    id: 'prod-w-hm-skirt',
    category: 'WOMEN',
    subCategory: 'Bottomwear',
    brand: 'H&M',
    title: 'Bias-Cut Satin Midi Skirt (Midnight Black)',
    price: 1999,
    originalPrice: 2699,
    discount: '26% OFF',
    rating: 4.5,
    ratingCount: 210,
    image: 'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=800&auto=format&fit=crop&q=80',
    tags: ['Satin', 'Bias-Cut', 'Midi Skirt', 'Black'],
    styleStudioConfig: {
      office: {
        occasionName: 'Office & Smart',
        icon: 'briefcase',
        stylingTip: 'Pair midnight black satin with an oversized structured blazer and pointed stiletto pumps for understated corporate polish.',
        canvasHeroImage: 'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=800&auto=format&fit=crop&q=80',
        canvasBottomImage: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800&auto=format&fit=crop&q=80',
        canvasShoesImage: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=800&auto=format&fit=crop&q=80',
        pairings: [
          { id: 'prod-w-urbanic-blazer', brand: 'URBANIC', title: 'Oversized Camel Blazer', price: 3290, image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800&auto=format&fit=crop&q=80', category: 'Outerwear' },
          { id: 'prod-w-ck-pumps', brand: 'Charles & Keith', title: 'Pointed Stiletto Pumps', price: 4200, image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=800&auto=format&fit=crop&q=80', category: 'Footwear' }
        ]
      },
      weekend: {
        occasionName: 'Weekend Casual',
        icon: 'coffee',
        stylingTip: 'Style effortlessly with a square-neck knit top and clean leather retro sneakers.',
        canvasHeroImage: 'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=800&auto=format&fit=crop&q=80',
        canvasBottomImage: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800&auto=format&fit=crop&q=80',
        canvasShoesImage: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&auto=format&fit=crop&q=80',
        pairings: [
          { id: 'prod-w-only-top', brand: 'ONLY', title: 'Ribbed Square-Neck Knit', price: 1499, image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800&auto=format&fit=crop&q=80', category: 'Topwear' },
          { id: 'prod-m-nike-killshot', brand: 'NIKE', title: 'Retro Clean Sneakers', price: 2200, image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&auto=format&fit=crop&q=80', category: 'Footwear' }
        ]
      },
      evening: {
        occasionName: 'Evening Out',
        icon: 'wine',
        stylingTip: 'Drape top in espresso satin against bias-cut black silk catches ambient dinner lighting.',
        canvasHeroImage: 'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=800&auto=format&fit=crop&q=80',
        canvasBottomImage: 'https://images.unsplash.com/photo-1551163943-3f6a855d1153?w=800&auto=format&fit=crop&q=80',
        canvasShoesImage: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=800&auto=format&fit=crop&q=80',
        pairings: [
          { id: 'prod-w-mango-blouse', brand: 'MANGO', title: 'Drape Satin Blouse', price: 2490, image: 'https://images.unsplash.com/photo-1551163943-3f6a855d1153?w=800&auto=format&fit=crop&q=80', category: 'Topwear' },
          { id: 'prod-w-ck-pumps', brand: 'Charles & Keith', title: 'Pointed Stiletto Pumps', price: 4200, image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=800&auto=format&fit=crop&q=80', category: 'Footwear' }
        ]
      }
    }
  },
  {
    id: 'prod-w-forever-wrap',
    category: 'WOMEN',
    subCategory: 'Dresses',
    brand: 'FOREVER NEW',
    title: 'Floral Wrap Mini Dress (Sage Green)',
    price: 4800,
    originalPrice: 7400,
    discount: '35% OFF',
    rating: 4.7,
    ratingCount: 95,
    image: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=800&auto=format&fit=crop&q=80',
    tags: ['Floral', 'Wrap Dress', 'Sage Green', 'Dresses'],
    styleStudioConfig: {
      office: {
        occasionName: 'Office & Smart',
        icon: 'briefcase',
        stylingTip: 'Layer this feminine sage floral wrap under an oversized camel blazer with nude pumps for elevated summer corporate elegance.',
        canvasHeroImage: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=800&auto=format&fit=crop&q=80',
        canvasBottomImage: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800&auto=format&fit=crop&q=80',
        canvasShoesImage: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=800&auto=format&fit=crop&q=80',
        pairings: [
          { id: 'prod-w-urbanic-blazer', brand: 'URBANIC', title: 'Oversized Camel Blazer', price: 3290, image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800&auto=format&fit=crop&q=80', category: 'Outerwear' },
          { id: 'prod-w-ck-pumps', brand: 'Charles & Keith', title: 'Pointed Stiletto Pumps', price: 4200, image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=800&auto=format&fit=crop&q=80', category: 'Footwear' }
        ]
      },
      weekend: {
        occasionName: 'Weekend Casual',
        icon: 'coffee',
        stylingTip: 'Pair with clean platform sneakers and a structured cognac crossbody for sunny cafe hopping.',
        canvasHeroImage: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=800&auto=format&fit=crop&q=80',
        canvasBottomImage: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&auto=format&fit=crop&q=80',
        canvasShoesImage: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800&auto=format&fit=crop&q=80',
        pairings: [
          { id: 'prod-m-nike-killshot', brand: 'NIKE', title: 'Retro Clean Sneakers', price: 2200, image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&auto=format&fit=crop&q=80', category: 'Footwear' },
          { id: 'prod-w-aldo-bag', brand: 'ALDO', title: 'Top-Handle Crossbody Bag', price: 4999, image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800&auto=format&fit=crop&q=80', category: 'Accessories' }
        ]
      },
      evening: {
        occasionName: 'Evening Out',
        icon: 'wine',
        stylingTip: 'Accentuate with pointed nude stilettos and cognac leather for candlelit garden dinners.',
        canvasHeroImage: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=800&auto=format&fit=crop&q=80',
        canvasBottomImage: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=800&auto=format&fit=crop&q=80',
        canvasShoesImage: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800&auto=format&fit=crop&q=80',
        pairings: [
          { id: 'prod-w-ck-pumps', brand: 'Charles & Keith', title: 'Pointed Stiletto Pumps', price: 4200, image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=800&auto=format&fit=crop&q=80', category: 'Footwear' },
          { id: 'prod-w-aldo-bag', brand: 'ALDO', title: 'Top-Handle Crossbody Bag', price: 4999, image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800&auto=format&fit=crop&q=80', category: 'Accessories' }
        ]
      }
    }
  },
  {
    id: 'prod-w-levis-ribcage',
    category: 'WOMEN',
    subCategory: 'Bottomwear',
    brand: "LEVI'S",
    title: 'Ribcage Straight Ankle Jeans (Washed Indigo)',
    price: 3599,
    originalPrice: 5199,
    discount: '30% OFF',
    rating: 4.6,
    ratingCount: 312,
    image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=800&auto=format&fit=crop&q=80',
    tags: ['Denim', 'High-Rise', 'Straight Fit', 'Bottomwear'],
    styleStudioConfig: {
      office: {
        occasionName: 'Office & Smart',
        icon: 'briefcase',
        stylingTip: 'Ground high-rise straight denim with an oversized camel blazer and pointed stiletto pumps for smart-casual Fridays.',
        canvasHeroImage: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=800&auto=format&fit=crop&q=80',
        canvasBottomImage: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800&auto=format&fit=crop&q=80',
        canvasShoesImage: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=800&auto=format&fit=crop&q=80',
        pairings: [
          { id: 'prod-w-urbanic-blazer', brand: 'URBANIC', title: 'Oversized Camel Blazer', price: 3290, image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800&auto=format&fit=crop&q=80', category: 'Outerwear' },
          { id: 'prod-w-ck-pumps', brand: 'Charles & Keith', title: 'Pointed Stiletto Pumps', price: 4200, image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=800&auto=format&fit=crop&q=80', category: 'Footwear' }
        ]
      },
      weekend: {
        occasionName: 'Weekend Casual',
        icon: 'coffee',
        stylingTip: 'Pair with a square-neck knit top and clean sneakers for quintessential weekend ease.',
        canvasHeroImage: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=800&auto=format&fit=crop&q=80',
        canvasBottomImage: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800&auto=format&fit=crop&q=80',
        canvasShoesImage: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&auto=format&fit=crop&q=80',
        pairings: [
          { id: 'prod-w-only-top', brand: 'ONLY', title: 'Ribbed Square-Neck Knit', price: 1499, image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800&auto=format&fit=crop&q=80', category: 'Topwear' },
          { id: 'prod-m-nike-killshot', brand: 'NIKE', title: 'Retro Clean Sneakers', price: 2200, image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&auto=format&fit=crop&q=80', category: 'Footwear' }
        ]
      },
      evening: {
        occasionName: 'Evening Out',
        icon: 'wine',
        stylingTip: 'Contrast raw denim with lustrous satin drape top and cognac leather crossbody bag for effortless chic.',
        canvasHeroImage: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=800&auto=format&fit=crop&q=80',
        canvasBottomImage: 'https://images.unsplash.com/photo-1551163943-3f6a855d1153?w=800&auto=format&fit=crop&q=80',
        canvasShoesImage: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800&auto=format&fit=crop&q=80',
        pairings: [
          { id: 'prod-w-mango-blouse', brand: 'MANGO', title: 'Drape Satin Blouse', price: 2490, image: 'https://images.unsplash.com/photo-1551163943-3f6a855d1153?w=800&auto=format&fit=crop&q=80', category: 'Topwear' },
          { id: 'prod-w-aldo-bag', brand: 'ALDO', title: 'Top-Handle Crossbody Bag', price: 4999, image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800&auto=format&fit=crop&q=80', category: 'Accessories' }
        ]
      }
    }
  },
  {
    id: 'prod-w-urbanic-blazer',
    category: 'WOMEN',
    subCategory: 'Outerwear',
    brand: 'URBANIC',
    title: 'Double-Breasted Oversized Blazer (Camel)',
    price: 3290,
    originalPrice: 4110,
    discount: '20% OFF',
    rating: 4.3,
    ratingCount: 164,
    image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800&auto=format&fit=crop&q=80',
    tags: ['Blazer', 'Camel', 'Oversized', 'Outerwear'],
    styleStudioConfig: {
      office: {
        occasionName: 'Office & Smart',
        icon: 'briefcase',
        stylingTip: 'Layer over tailored beige trousers with pointed stiletto pumps for commanding proportions.',
        canvasHeroImage: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800&auto=format&fit=crop&q=80',
        canvasBottomImage: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=800&auto=format&fit=crop&q=80',
        canvasShoesImage: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=800&auto=format&fit=crop&q=80',
        pairings: [
          { id: 'prod-w-zara-trousers', brand: 'ZARA', title: 'High-Waist Tailored Trousers', price: 2990, image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=800&auto=format&fit=crop&q=80', category: 'Bottomwear' },
          { id: 'prod-w-ck-pumps', brand: 'Charles & Keith', title: 'Pointed Stiletto Pumps', price: 4200, image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=800&auto=format&fit=crop&q=80', category: 'Footwear' }
        ]
      },
      weekend: {
        occasionName: 'Weekend Casual',
        icon: 'coffee',
        stylingTip: 'Drape over straight-leg washed denim and sneakers for relaxed streetwear polish.',
        canvasHeroImage: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800&auto=format&fit=crop&q=80',
        canvasBottomImage: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=800&auto=format&fit=crop&q=80',
        canvasShoesImage: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&auto=format&fit=crop&q=80',
        pairings: [
          { id: 'prod-w-levis-ribcage', brand: "LEVI'S", title: 'Ribcage Straight Ankle Jeans', price: 3599, image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=800&auto=format&fit=crop&q=80', category: 'Bottomwear' },
          { id: 'prod-m-nike-killshot', brand: 'NIKE', title: 'Retro Clean Sneakers', price: 2200, image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&auto=format&fit=crop&q=80', category: 'Footwear' }
        ]
      },
      evening: {
        occasionName: 'Evening Out',
        icon: 'wine',
        stylingTip: 'Wear unbuttoned over a bias-cut black midi skirt and cognac crossbody bag for an elevated night out.',
        canvasHeroImage: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800&auto=format&fit=crop&q=80',
        canvasBottomImage: 'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=800&auto=format&fit=crop&q=80',
        canvasShoesImage: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800&auto=format&fit=crop&q=80',
        pairings: [
          { id: 'prod-w-hm-skirt', brand: 'H&M', title: 'Bias-Cut Satin Midi Skirt', price: 1999, image: 'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=800&auto=format&fit=crop&q=80', category: 'Bottomwear' },
          { id: 'prod-w-aldo-bag', brand: 'ALDO', title: 'Top-Handle Crossbody Bag', price: 4999, image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800&auto=format&fit=crop&q=80', category: 'Accessories' }
        ]
      }
    }
  },
  {
    id: 'prod-w-ck-pumps',
    category: 'WOMEN',
    subCategory: 'Footwear',
    brand: 'Charles & Keith',
    title: 'Pointed Stiletto Pumps (Nude Blush)',
    price: 4200,
    originalPrice: 5500,
    discount: '23% OFF',
    rating: 4.8,
    ratingCount: 89,
    image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=800&auto=format&fit=crop&q=80',
    tags: ['Heels', 'Pumps', 'Nude Blush', 'Footwear'],
    styleStudioConfig: {
      office: {
        occasionName: 'Office & Smart',
        icon: 'briefcase',
        stylingTip: 'Nude pointed pumps elongate the leg when framing high-waist beige trousers and structured tops.',
        canvasHeroImage: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=800&auto=format&fit=crop&q=80',
        canvasBottomImage: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=800&auto=format&fit=crop&q=80',
        canvasShoesImage: 'https://images.unsplash.com/photo-1551163943-3f6a855d1153?w=800&auto=format&fit=crop&q=80',
        pairings: [
          { id: 'prod-w-zara-trousers', brand: 'ZARA', title: 'High-Waist Tailored Trousers', price: 2990, image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=800&auto=format&fit=crop&q=80', category: 'Bottomwear' },
          { id: 'prod-w-mango-blouse', brand: 'MANGO', title: 'Drape Satin Blouse', price: 2490, image: 'https://images.unsplash.com/photo-1551163943-3f6a855d1153?w=800&auto=format&fit=crop&q=80', category: 'Topwear' }
        ]
      },
      weekend: {
        occasionName: 'Weekend Casual',
        icon: 'coffee',
        stylingTip: 'Elevate casual straight denim and a square-neck knit top for art openings and rooftop brunches.',
        canvasHeroImage: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=800&auto=format&fit=crop&q=80',
        canvasBottomImage: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=800&auto=format&fit=crop&q=80',
        canvasShoesImage: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800&auto=format&fit=crop&q=80',
        pairings: [
          { id: 'prod-w-levis-ribcage', brand: "LEVI'S", title: 'Ribcage Straight Ankle Jeans', price: 3599, image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=800&auto=format&fit=crop&q=80', category: 'Bottomwear' },
          { id: 'prod-w-only-top', brand: 'ONLY', title: 'Ribbed Square-Neck Knit', price: 1499, image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800&auto=format&fit=crop&q=80', category: 'Topwear' }
        ]
      },
      evening: {
        occasionName: 'Evening Out',
        icon: 'wine',
        stylingTip: 'The indispensable neutral heel grounding bias-cut black silk and warm evening candlelight.',
        canvasHeroImage: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=800&auto=format&fit=crop&q=80',
        canvasBottomImage: 'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=800&auto=format&fit=crop&q=80',
        canvasShoesImage: 'https://images.unsplash.com/photo-1551163943-3f6a855d1153?w=800&auto=format&fit=crop&q=80',
        pairings: [
          { id: 'prod-w-hm-skirt', brand: 'H&M', title: 'Bias-Cut Satin Midi Skirt', price: 1999, image: 'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=800&auto=format&fit=crop&q=80', category: 'Bottomwear' },
          { id: 'prod-w-mango-blouse', brand: 'MANGO', title: 'Drape Satin Blouse', price: 2490, image: 'https://images.unsplash.com/photo-1551163943-3f6a855d1153?w=800&auto=format&fit=crop&q=80', category: 'Topwear' }
        ]
      }
    }
  },
  {
    id: 'prod-w-mango-slip',
    category: 'WOMEN',
    subCategory: 'Dresses',
    brand: 'MANGO',
    title: 'Minimalist Slip Maxi Dress (Emerald Green)',
    price: 3990,
    originalPrice: 5990,
    discount: '33% OFF',
    rating: 4.7,
    ratingCount: 76,
    image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=800&auto=format&fit=crop&q=80',
    tags: ['Slip Dress', 'Emerald Green', 'Maxi', 'Silk'],
    styleStudioConfig: {
      office: {
        occasionName: 'Office & Smart',
        icon: 'briefcase',
        stylingTip: 'Layer with an oversized camel blazer and pointed stiletto pumps to bring tailored structure to fluid emerald silk.',
        canvasHeroImage: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=800&auto=format&fit=crop&q=80',
        canvasBottomImage: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800&auto=format&fit=crop&q=80',
        canvasShoesImage: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=800&auto=format&fit=crop&q=80',
        pairings: [
          { id: 'prod-w-urbanic-blazer', brand: 'URBANIC', title: 'Oversized Camel Blazer', price: 3290, image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800&auto=format&fit=crop&q=80', category: 'Outerwear' },
          { id: 'prod-w-ck-pumps', brand: 'Charles & Keith', title: 'Pointed Stiletto Pumps', price: 4200, image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=800&auto=format&fit=crop&q=80', category: 'Footwear' }
        ]
      },
      weekend: {
        occasionName: 'Weekend Casual',
        icon: 'coffee',
        stylingTip: 'Throw a cropped square-neck knit over top and slip into clean retro sneakers for a relaxed layered look.',
        canvasHeroImage: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=800&auto=format&fit=crop&q=80',
        canvasBottomImage: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800&auto=format&fit=crop&q=80',
        canvasShoesImage: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&auto=format&fit=crop&q=80',
        pairings: [
          { id: 'prod-w-only-top', brand: 'ONLY', title: 'Ribbed Square-Neck Knit', price: 1499, image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800&auto=format&fit=crop&q=80', category: 'Topwear' },
          { id: 'prod-m-nike-killshot', brand: 'NIKE', title: 'Retro Clean Sneakers', price: 2200, image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&auto=format&fit=crop&q=80', category: 'Footwear' }
        ]
      },
      evening: {
        occasionName: 'Evening Out',
        icon: 'wine',
        stylingTip: 'Lustrous emerald silk catches evening ambient light, elevated by nude stiletto pumps and a structured leather bag.',
        canvasHeroImage: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=800&auto=format&fit=crop&q=80',
        canvasBottomImage: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=800&auto=format&fit=crop&q=80',
        canvasShoesImage: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800&auto=format&fit=crop&q=80',
        pairings: [
          { id: 'prod-w-ck-pumps', brand: 'Charles & Keith', title: 'Pointed Stiletto Pumps', price: 4200, image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=800&auto=format&fit=crop&q=80', category: 'Footwear' },
          { id: 'prod-w-aldo-bag', brand: 'ALDO', title: 'Top-Handle Crossbody Bag', price: 4999, image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800&auto=format&fit=crop&q=80', category: 'Accessories' }
        ]
      }
    }
  },
  {
    id: 'prod-w-only-top',
    category: 'WOMEN',
    subCategory: 'Topwear',
    brand: 'ONLY',
    title: 'Ribbed Square-Neck Knit Top (Cream)',
    price: 1499,
    originalPrice: 2499,
    discount: '40% OFF',
    rating: 4.2,
    ratingCount: 190,
    image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800&auto=format&fit=crop&q=80',
    tags: ['Knitwear', 'Square-Neck', 'Cream', 'Topwear'],
    styleStudioConfig: {
      office: {
        occasionName: 'Office & Smart',
        icon: 'briefcase',
        stylingTip: 'Tuck neatly into tailored beige trousers and complete with nude pumps for understated office minimalism.',
        canvasHeroImage: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800&auto=format&fit=crop&q=80',
        canvasBottomImage: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=800&auto=format&fit=crop&q=80',
        canvasShoesImage: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=800&auto=format&fit=crop&q=80',
        pairings: [
          { id: 'prod-w-zara-trousers', brand: 'ZARA', title: 'High-Waist Tailored Trousers', price: 2990, image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=800&auto=format&fit=crop&q=80', category: 'Bottomwear' },
          { id: 'prod-w-ck-pumps', brand: 'Charles & Keith', title: 'Pointed Stiletto Pumps', price: 4200, image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=800&auto=format&fit=crop&q=80', category: 'Footwear' }
        ]
      },
      weekend: {
        occasionName: 'Weekend Casual',
        icon: 'coffee',
        stylingTip: 'Pair with washed high-rise denim and retro sneakers for a go-to Sunday coffee uniform.',
        canvasHeroImage: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800&auto=format&fit=crop&q=80',
        canvasBottomImage: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=800&auto=format&fit=crop&q=80',
        canvasShoesImage: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&auto=format&fit=crop&q=80',
        pairings: [
          { id: 'prod-w-levis-ribcage', brand: "LEVI'S", title: 'Ribcage Straight Ankle Jeans', price: 3599, image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=800&auto=format&fit=crop&q=80', category: 'Bottomwear' },
          { id: 'prod-m-nike-killshot', brand: 'NIKE', title: 'Retro Clean Sneakers', price: 2200, image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&auto=format&fit=crop&q=80', category: 'Footwear' }
        ]
      },
      evening: {
        occasionName: 'Evening Out',
        icon: 'wine',
        stylingTip: 'Style with bias-cut black satin and cognac accessories for evening cocktails.',
        canvasHeroImage: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800&auto=format&fit=crop&q=80',
        canvasBottomImage: 'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=800&auto=format&fit=crop&q=80',
        canvasShoesImage: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800&auto=format&fit=crop&q=80',
        pairings: [
          { id: 'prod-w-hm-skirt', brand: 'H&M', title: 'Bias-Cut Satin Midi Skirt', price: 1999, image: 'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=800&auto=format&fit=crop&q=80', category: 'Bottomwear' },
          { id: 'prod-w-aldo-bag', brand: 'ALDO', title: 'Top-Handle Crossbody Bag', price: 4999, image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800&auto=format&fit=crop&q=80', category: 'Accessories' }
        ]
      }
    }
  },
  {
    id: 'prod-w-aldo-bag',
    category: 'WOMEN',
    subCategory: 'Accessories',
    brand: 'ALDO',
    title: 'Structured Top-Handle Crossbody Bag (Cognac)',
    price: 4999,
    originalPrice: 7199,
    discount: '30% OFF',
    rating: 4.6,
    ratingCount: 54,
    image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800&auto=format&fit=crop&q=80',
    tags: ['Bag', 'Leather', 'Cognac', 'Accessories'],
    styleStudioConfig: {
      office: {
        occasionName: 'Office & Smart',
        icon: 'briefcase',
        stylingTip: 'Polished cognac leather ties together tailored sand beige trousers and structured camel blazers.',
        canvasHeroImage: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800&auto=format&fit=crop&q=80',
        canvasBottomImage: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=800&auto=format&fit=crop&q=80',
        canvasShoesImage: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800&auto=format&fit=crop&q=80',
        pairings: [
          { id: 'prod-w-zara-trousers', brand: 'ZARA', title: 'High-Waist Tailored Trousers', price: 2990, image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=800&auto=format&fit=crop&q=80', category: 'Bottomwear' },
          { id: 'prod-w-urbanic-blazer', brand: 'URBANIC', title: 'Oversized Camel Blazer', price: 3290, image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800&auto=format&fit=crop&q=80', category: 'Outerwear' }
        ]
      },
      weekend: {
        occasionName: 'Weekend Casual',
        icon: 'coffee',
        stylingTip: 'Wear crossbody over washed straight denim and sneakers for hands-free weekend errands.',
        canvasHeroImage: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800&auto=format&fit=crop&q=80',
        canvasBottomImage: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=800&auto=format&fit=crop&q=80',
        canvasShoesImage: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&auto=format&fit=crop&q=80',
        pairings: [
          { id: 'prod-w-levis-ribcage', brand: "LEVI'S", title: 'Ribcage Straight Ankle Jeans', price: 3599, image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=800&auto=format&fit=crop&q=80', category: 'Bottomwear' },
          { id: 'prod-m-nike-killshot', brand: 'NIKE', title: 'Retro Clean Sneakers', price: 2200, image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&auto=format&fit=crop&q=80', category: 'Footwear' }
        ]
      },
      evening: {
        occasionName: 'Evening Out',
        icon: 'wine',
        stylingTip: 'Carry by top handle paired with a sage floral wrap dress and pointed stiletto pumps.',
        canvasHeroImage: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800&auto=format&fit=crop&q=80',
        canvasBottomImage: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=800&auto=format&fit=crop&q=80',
        canvasShoesImage: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=800&auto=format&fit=crop&q=80',
        pairings: [
          { id: 'prod-w-forever-wrap', brand: 'FOREVER NEW', title: 'Floral Wrap Mini Dress', price: 4800, image: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=800&auto=format&fit=crop&q=80', category: 'Dresses' },
          { id: 'prod-w-ck-pumps', brand: 'Charles & Keith', title: 'Pointed Stiletto Pumps', price: 4200, image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=800&auto=format&fit=crop&q=80', category: 'Footwear' }
        ]
      }
    }
  },

  // =========================================================================
  // 2. MEN'S COLLECTION (Smart Casual, Streetwear & Essentials)
  // =========================================================================
  {
    id: 'prod-m-rare-rabbit',
    category: 'MEN',
    subCategory: 'Topwear',
    brand: 'RARE RABBIT',
    title: 'Premium Textured Linen Shirt (Olive Green)',
    price: 2799,
    originalPrice: 3999,
    discount: '30% OFF',
    rating: 4.6,
    ratingCount: 142,
    image: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=800&auto=format&fit=crop&q=80',
    tags: ['Linen', 'Olive', 'Smart Casual', 'Topwear'],
    styleStudioConfig: {
      office: {
        occasionName: 'Office & Smart',
        icon: 'briefcase',
        stylingTip: 'Tuck this breathable olive linen shirt into navy slim chinos with a leather watch for sharp office days.',
        canvasHeroImage: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=800&auto=format&fit=crop&q=80',
        canvasBottomImage: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=800&auto=format&fit=crop&q=80',
        canvasShoesImage: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=800&auto=format&fit=crop&q=80',
        pairings: [
          { id: 'prod-m-tommy-chinos', brand: 'TOMMY HILFIGER', title: 'Tailored Slim Chinos', price: 3899, image: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=800&auto=format&fit=crop&q=80', category: 'Bottomwear' },
          { id: 'prod-m-fossil-watch', brand: 'FOSSIL', title: 'Chronograph Leather Watch', price: 7495, image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=800&auto=format&fit=crop&q=80', category: 'Accessories' }
        ]
      },
      weekend: {
        occasionName: 'Weekend Casual',
        icon: 'coffee',
        stylingTip: 'Wear unbuttoned over a relaxed boxy tee with pleated Korean trousers and Killshot 2 retro sneakers.',
        canvasHeroImage: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=800&auto=format&fit=crop&q=80',
        canvasBottomImage: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&auto=format&fit=crop&q=80',
        canvasShoesImage: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&auto=format&fit=crop&q=80',
        pairings: [
          { id: 'prod-m-snitch-trousers', brand: 'SNITCH', title: 'Pleated Korean Trousers', price: 1899, image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&auto=format&fit=crop&q=80', category: 'Bottomwear' },
          { id: 'prod-m-nike-killshot', brand: 'NIKE', title: 'Killshot 2 Retro Sneakers', price: 6495, image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&auto=format&fit=crop&q=80', category: 'Footwear' }
        ]
      },
      evening: {
        occasionName: 'Evening Out',
        icon: 'wine',
        stylingTip: 'Layer beneath a charcoal structured linen blazer and dark tailored chinos for rooftop dining.',
        canvasHeroImage: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=800&auto=format&fit=crop&q=80',
        canvasBottomImage: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&auto=format&fit=crop&q=80',
        canvasShoesImage: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=800&auto=format&fit=crop&q=80',
        pairings: [
          { id: 'prod-m-ms-blazer', brand: 'MARKS & SPENCER', title: 'Structured Linen Blazer', price: 6999, image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&auto=format&fit=crop&q=80', category: 'Outerwear' },
          { id: 'prod-m-fossil-watch', brand: 'FOSSIL', title: 'Chronograph Leather Watch', price: 7495, image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=800&auto=format&fit=crop&q=80', category: 'Accessories' }
        ]
      }
    }
  },
  {
    id: 'prod-m-tommy-chinos',
    category: 'MEN',
    subCategory: 'Bottomwear',
    brand: 'TOMMY HILFIGER',
    title: 'Tailored Slim Chinos (Navy Blue)',
    price: 3899,
    originalPrice: 5999,
    discount: '35% OFF',
    rating: 4.5,
    ratingCount: 88,
    image: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=800&auto=format&fit=crop&q=80',
    tags: ['Chinos', 'Navy Blue', 'Tailored', 'Bottomwear'],
    styleStudioConfig: {
      office: {
        occasionName: 'Office & Smart',
        icon: 'briefcase',
        stylingTip: 'Match navy chinos with a textured olive linen shirt and leather accessories for modern business casual.',
        canvasHeroImage: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=800&auto=format&fit=crop&q=80',
        canvasBottomImage: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=800&auto=format&fit=crop&q=80',
        canvasShoesImage: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=800&auto=format&fit=crop&q=80',
        pairings: [
          { id: 'prod-m-rare-rabbit', brand: 'RARE RABBIT', title: 'Textured Linen Shirt', price: 2799, image: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=800&auto=format&fit=crop&q=80', category: 'Topwear' },
          { id: 'prod-m-fossil-watch', brand: 'FOSSIL', title: 'Chronograph Leather Watch', price: 7495, image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=800&auto=format&fit=crop&q=80', category: 'Accessories' }
        ]
      },
      weekend: {
        occasionName: 'Weekend Casual',
        icon: 'coffee',
        stylingTip: 'Cuff the ankles slightly and pair with a heavyweight off-white boxy tee and Nike retro sneakers.',
        canvasHeroImage: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=800&auto=format&fit=crop&q=80',
        canvasBottomImage: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=800&auto=format&fit=crop&q=80',
        canvasShoesImage: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&auto=format&fit=crop&q=80',
        pairings: [
          { id: 'prod-m-roadster-tee', brand: 'ROADSTER', title: 'Heavyweight Boxy Tee', price: 899, image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=800&auto=format&fit=crop&q=80', category: 'Topwear' },
          { id: 'prod-m-nike-killshot', brand: 'NIKE', title: 'Killshot 2 Retro Sneakers', price: 6495, image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&auto=format&fit=crop&q=80', category: 'Footwear' }
        ]
      },
      evening: {
        occasionName: 'Evening Out',
        icon: 'wine',
        stylingTip: 'Pair with a structured charcoal linen blazer for sophisticated contrast in ambient night lighting.',
        canvasHeroImage: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=800&auto=format&fit=crop&q=80',
        canvasBottomImage: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&auto=format&fit=crop&q=80',
        canvasShoesImage: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=800&auto=format&fit=crop&q=80',
        pairings: [
          { id: 'prod-m-ms-blazer', brand: 'MARKS & SPENCER', title: 'Structured Linen Blazer', price: 6999, image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&auto=format&fit=crop&q=80', category: 'Outerwear' },
          { id: 'prod-m-fossil-watch', brand: 'FOSSIL', title: 'Chronograph Leather Watch', price: 7495, image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=800&auto=format&fit=crop&q=80', category: 'Accessories' }
        ]
      }
    }
  },
  {
    id: 'prod-m-jack-denim',
    category: 'MEN',
    subCategory: 'Outerwear',
    brand: 'JACK & JONES',
    title: 'Washed Trucker Denim Jacket (Light Blue)',
    price: 2999,
    originalPrice: 4999,
    discount: '40% OFF',
    rating: 4.4,
    ratingCount: 215,
    image: 'https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=800&auto=format&fit=crop&q=80',
    tags: ['Denim Jacket', 'Trucker', 'Light Blue', 'Outerwear'],
    styleStudioConfig: {
      office: {
        occasionName: 'Office & Smart',
        icon: 'briefcase',
        stylingTip: 'Layer over tailored navy chinos and leather watch for a smart, relaxed creative agency look.',
        canvasHeroImage: 'https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=800&auto=format&fit=crop&q=80',
        canvasBottomImage: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=800&auto=format&fit=crop&q=80',
        canvasShoesImage: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=800&auto=format&fit=crop&q=80',
        pairings: [
          { id: 'prod-m-tommy-chinos', brand: 'TOMMY HILFIGER', title: 'Tailored Slim Chinos', price: 3899, image: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=800&auto=format&fit=crop&q=80', category: 'Bottomwear' },
          { id: 'prod-m-fossil-watch', brand: 'FOSSIL', title: 'Chronograph Leather Watch', price: 7495, image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=800&auto=format&fit=crop&q=80', category: 'Accessories' }
        ]
      },
      weekend: {
        occasionName: 'Weekend Casual',
        icon: 'coffee',
        stylingTip: 'Throw over a heavyweight off-white boxy tee with Nike Killshot 2 sneakers for timeless street style.',
        canvasHeroImage: 'https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=800&auto=format&fit=crop&q=80',
        canvasBottomImage: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=800&auto=format&fit=crop&q=80',
        canvasShoesImage: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&auto=format&fit=crop&q=80',
        pairings: [
          { id: 'prod-m-roadster-tee', brand: 'ROADSTER', title: 'Heavyweight Boxy Tee', price: 899, image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=800&auto=format&fit=crop&q=80', category: 'Topwear' },
          { id: 'prod-m-nike-killshot', brand: 'NIKE', title: 'Killshot 2 Retro Sneakers', price: 6495, image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&auto=format&fit=crop&q=80', category: 'Footwear' }
        ]
      },
      evening: {
        occasionName: 'Evening Out',
        icon: 'wine',
        stylingTip: 'Pair light blue washed denim with pleated Korean charcoal trousers for downtown evening dinners.',
        canvasHeroImage: 'https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=800&auto=format&fit=crop&q=80',
        canvasBottomImage: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&auto=format&fit=crop&q=80',
        canvasShoesImage: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&auto=format&fit=crop&q=80',
        pairings: [
          { id: 'prod-m-snitch-trousers', brand: 'SNITCH', title: 'Pleated Korean Trousers', price: 1899, image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&auto=format&fit=crop&q=80', category: 'Bottomwear' },
          { id: 'prod-m-nike-killshot', brand: 'NIKE', title: 'Killshot 2 Retro Sneakers', price: 6495, image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&auto=format&fit=crop&q=80', category: 'Footwear' }
        ]
      }
    }
  },
  {
    id: 'prod-m-roadster-tee',
    category: 'MEN',
    subCategory: 'Topwear',
    brand: 'ROADSTER',
    title: 'Relaxed Heavyweight Boxy Tee (Off-White)',
    price: 899,
    originalPrice: 1799,
    discount: '50% OFF',
    rating: 4.3,
    ratingCount: 640,
    image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=800&auto=format&fit=crop&q=80',
    tags: ['Tee', 'Boxy', 'Off-White', 'Cotton'],
    styleStudioConfig: {
      office: {
        occasionName: 'Office & Smart',
        icon: 'briefcase',
        stylingTip: 'Tuck into tailored navy chinos and top with a structured linen blazer for a clean modern tech uniform.',
        canvasHeroImage: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=800&auto=format&fit=crop&q=80',
        canvasBottomImage: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=800&auto=format&fit=crop&q=80',
        canvasShoesImage: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&auto=format&fit=crop&q=80',
        pairings: [
          { id: 'prod-m-tommy-chinos', brand: 'TOMMY HILFIGER', title: 'Tailored Slim Chinos', price: 3899, image: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=800&auto=format&fit=crop&q=80', category: 'Bottomwear' },
          { id: 'prod-m-ms-blazer', brand: 'MARKS & SPENCER', title: 'Structured Linen Blazer', price: 6999, image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&auto=format&fit=crop&q=80', category: 'Outerwear' }
        ]
      },
      weekend: {
        occasionName: 'Weekend Casual',
        icon: 'coffee',
        stylingTip: 'Wear boxy with light washed trucker denim jacket and Nike sneakers for effortless Saturday strolls.',
        canvasHeroImage: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=800&auto=format&fit=crop&q=80',
        canvasBottomImage: 'https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=800&auto=format&fit=crop&q=80',
        canvasShoesImage: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&auto=format&fit=crop&q=80',
        pairings: [
          { id: 'prod-m-jack-denim', brand: 'JACK & JONES', title: 'Washed Trucker Denim Jacket', price: 2999, image: 'https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=800&auto=format&fit=crop&q=80', category: 'Outerwear' },
          { id: 'prod-m-nike-killshot', brand: 'NIKE', title: 'Killshot 2 Retro Sneakers', price: 6495, image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&auto=format&fit=crop&q=80', category: 'Footwear' }
        ]
      },
      evening: {
        occasionName: 'Evening Out',
        icon: 'wine',
        stylingTip: 'Pair off-white cotton with pleated Korean charcoal trousers and leather chronograph for minimalist night vibes.',
        canvasHeroImage: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=800&auto=format&fit=crop&q=80',
        canvasBottomImage: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&auto=format&fit=crop&q=80',
        canvasShoesImage: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=800&auto=format&fit=crop&q=80',
        pairings: [
          { id: 'prod-m-snitch-trousers', brand: 'SNITCH', title: 'Pleated Korean Trousers', price: 1899, image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&auto=format&fit=crop&q=80', category: 'Bottomwear' },
          { id: 'prod-m-fossil-watch', brand: 'FOSSIL', title: 'Chronograph Leather Watch', price: 7495, image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=800&auto=format&fit=crop&q=80', category: 'Accessories' }
        ]
      }
    }
  },
  {
    id: 'prod-m-ms-blazer',
    category: 'MEN',
    subCategory: 'Outerwear',
    brand: 'MARKS & SPENCER',
    title: 'Structured Linen Blazer (Charcoal Grey)',
    price: 6999,
    originalPrice: 9350,
    discount: '25% OFF',
    rating: 4.7,
    ratingCount: 45,
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&auto=format&fit=crop&q=80',
    tags: ['Blazer', 'Charcoal', 'Linen', 'Tailored'],
    styleStudioConfig: {
      office: {
        occasionName: 'Office & Smart',
        icon: 'briefcase',
        stylingTip: 'Commanding charcoal tailored linen paired with navy chinos and leather timepiece.',
        canvasHeroImage: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&auto=format&fit=crop&q=80',
        canvasBottomImage: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=800&auto=format&fit=crop&q=80',
        canvasShoesImage: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=800&auto=format&fit=crop&q=80',
        pairings: [
          { id: 'prod-m-tommy-chinos', brand: 'TOMMY HILFIGER', title: 'Tailored Slim Chinos', price: 3899, image: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=800&auto=format&fit=crop&q=80', category: 'Bottomwear' },
          { id: 'prod-m-fossil-watch', brand: 'FOSSIL', title: 'Chronograph Leather Watch', price: 7495, image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=800&auto=format&fit=crop&q=80', category: 'Accessories' }
        ]
      },
      weekend: {
        occasionName: 'Weekend Casual',
        icon: 'coffee',
        stylingTip: 'Dress down sharp lapels over an off-white boxy tee and retro Killshot sneakers.',
        canvasHeroImage: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&auto=format&fit=crop&q=80',
        canvasBottomImage: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=800&auto=format&fit=crop&q=80',
        canvasShoesImage: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&auto=format&fit=crop&q=80',
        pairings: [
          { id: 'prod-m-roadster-tee', brand: 'ROADSTER', title: 'Heavyweight Boxy Tee', price: 899, image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=800&auto=format&fit=crop&q=80', category: 'Topwear' },
          { id: 'prod-m-nike-killshot', brand: 'NIKE', title: 'Killshot 2 Retro Sneakers', price: 6495, image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&auto=format&fit=crop&q=80', category: 'Footwear' }
        ]
      },
      evening: {
        occasionName: 'Evening Out',
        icon: 'wine',
        stylingTip: 'Layer over an olive linen shirt and pleated charcoal trousers for dinner galas.',
        canvasHeroImage: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&auto=format&fit=crop&q=80',
        canvasBottomImage: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=800&auto=format&fit=crop&q=80',
        canvasShoesImage: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&auto=format&fit=crop&q=80',
        pairings: [
          { id: 'prod-m-rare-rabbit', brand: 'RARE RABBIT', title: 'Textured Linen Shirt', price: 2799, image: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=800&auto=format&fit=crop&q=80', category: 'Topwear' },
          { id: 'prod-m-snitch-trousers', brand: 'SNITCH', title: 'Pleated Korean Trousers', price: 1899, image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&auto=format&fit=crop&q=80', category: 'Bottomwear' }
        ]
      }
    }
  },
  {
    id: 'prod-m-nike-killshot',
    category: 'MEN',
    subCategory: 'Footwear',
    brand: 'NIKE',
    title: 'Killshot 2 Leather Retro Sneakers (Sail / Navy)',
    price: 6495,
    originalPrice: 7200,
    discount: '10% OFF',
    rating: 4.9,
    ratingCount: 530,
    image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&auto=format&fit=crop&q=80',
    tags: ['Sneakers', 'Killshot', 'Leather', 'Footwear'],
    styleStudioConfig: {
      office: {
        occasionName: 'Office & Smart',
        icon: 'briefcase',
        stylingTip: 'Ground tailored navy chinos and an olive linen shirt with clean leather retro court sneakers.',
        canvasHeroImage: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&auto=format&fit=crop&q=80',
        canvasBottomImage: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=800&auto=format&fit=crop&q=80',
        canvasShoesImage: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=800&auto=format&fit=crop&q=80',
        pairings: [
          { id: 'prod-m-tommy-chinos', brand: 'TOMMY HILFIGER', title: 'Tailored Slim Chinos', price: 3899, image: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=800&auto=format&fit=crop&q=80', category: 'Bottomwear' },
          { id: 'prod-m-rare-rabbit', brand: 'RARE RABBIT', title: 'Textured Linen Shirt', price: 2799, image: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=800&auto=format&fit=crop&q=80', category: 'Topwear' }
        ]
      },
      weekend: {
        occasionName: 'Weekend Casual',
        icon: 'coffee',
        stylingTip: 'The ultimate weekend companion paired with washed trucker denim jacket and a boxy tee.',
        canvasHeroImage: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&auto=format&fit=crop&q=80',
        canvasBottomImage: 'https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=800&auto=format&fit=crop&q=80',
        canvasShoesImage: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=800&auto=format&fit=crop&q=80',
        pairings: [
          { id: 'prod-m-jack-denim', brand: 'JACK & JONES', title: 'Washed Trucker Denim Jacket', price: 2999, image: 'https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=800&auto=format&fit=crop&q=80', category: 'Outerwear' },
          { id: 'prod-m-roadster-tee', brand: 'ROADSTER', title: 'Heavyweight Boxy Tee', price: 899, image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=800&auto=format&fit=crop&q=80', category: 'Topwear' }
        ]
      },
      evening: {
        occasionName: 'Evening Out',
        icon: 'wine',
        stylingTip: 'Dresses down pleated Korean charcoal trousers and leather chronograph for effortless night outings.',
        canvasHeroImage: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&auto=format&fit=crop&q=80',
        canvasBottomImage: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&auto=format&fit=crop&q=80',
        canvasShoesImage: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=800&auto=format&fit=crop&q=80',
        pairings: [
          { id: 'prod-m-snitch-trousers', brand: 'SNITCH', title: 'Pleated Korean Trousers', price: 1899, image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&auto=format&fit=crop&q=80', category: 'Bottomwear' },
          { id: 'prod-m-fossil-watch', brand: 'FOSSIL', title: 'Chronograph Leather Watch', price: 7495, image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=800&auto=format&fit=crop&q=80', category: 'Accessories' }
        ]
      }
    }
  },
  {
    id: 'prod-m-snitch-trousers',
    category: 'MEN',
    subCategory: 'Bottomwear',
    brand: 'SNITCH',
    title: 'Relaxed Pleated Korean Trousers (Charcoal Black)',
    price: 1899,
    originalPrice: 2699,
    discount: '30% OFF',
    rating: 4.5,
    ratingCount: 180,
    image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&auto=format&fit=crop&q=80',
    tags: ['Trousers', 'Pleated', 'Korean Style', 'Bottomwear'],
    styleStudioConfig: {
      office: {
        occasionName: 'Office & Smart',
        icon: 'briefcase',
        stylingTip: 'Tuck in a textured olive linen shirt and add a chronograph leather timepiece.',
        canvasHeroImage: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&auto=format&fit=crop&q=80',
        canvasBottomImage: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=800&auto=format&fit=crop&q=80',
        canvasShoesImage: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=800&auto=format&fit=crop&q=80',
        pairings: [
          { id: 'prod-m-rare-rabbit', brand: 'RARE RABBIT', title: 'Textured Linen Shirt', price: 2799, image: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=800&auto=format&fit=crop&q=80', category: 'Topwear' },
          { id: 'prod-m-fossil-watch', brand: 'FOSSIL', title: 'Chronograph Leather Watch', price: 7495, image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=800&auto=format&fit=crop&q=80', category: 'Accessories' }
        ]
      },
      weekend: {
        occasionName: 'Weekend Casual',
        icon: 'coffee',
        stylingTip: 'Pair wide Korean pleats with an off-white boxy tee and retro leather sneakers.',
        canvasHeroImage: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&auto=format&fit=crop&q=80',
        canvasBottomImage: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=800&auto=format&fit=crop&q=80',
        canvasShoesImage: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&auto=format&fit=crop&q=80',
        pairings: [
          { id: 'prod-m-roadster-tee', brand: 'ROADSTER', title: 'Heavyweight Boxy Tee', price: 899, image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=800&auto=format&fit=crop&q=80', category: 'Topwear' },
          { id: 'prod-m-nike-killshot', brand: 'NIKE', title: 'Killshot 2 Retro Sneakers', price: 6495, image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&auto=format&fit=crop&q=80', category: 'Footwear' }
        ]
      },
      evening: {
        occasionName: 'Evening Out',
        icon: 'wine',
        stylingTip: 'Elevate with a structured charcoal linen blazer for sophisticated architectural volume.',
        canvasHeroImage: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&auto=format&fit=crop&q=80',
        canvasBottomImage: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&auto=format&fit=crop&q=80',
        canvasShoesImage: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=800&auto=format&fit=crop&q=80',
        pairings: [
          { id: 'prod-m-ms-blazer', brand: 'MARKS & SPENCER', title: 'Structured Linen Blazer', price: 6999, image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&auto=format&fit=crop&q=80', category: 'Outerwear' },
          { id: 'prod-m-fossil-watch', brand: 'FOSSIL', title: 'Chronograph Leather Watch', price: 7495, image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=800&auto=format&fit=crop&q=80', category: 'Accessories' }
        ]
      }
    }
  },
  {
    id: 'prod-m-fossil-watch',
    category: 'MEN',
    subCategory: 'Accessories',
    brand: 'FOSSIL',
    title: 'Minimalist Chronograph Watch (Brown Leather)',
    price: 7495,
    originalPrice: 11500,
    discount: '35% OFF',
    rating: 4.8,
    ratingCount: 112,
    image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=800&auto=format&fit=crop&q=80',
    tags: ['Watch', 'Leather', 'Chronograph', 'Accessories'],
    styleStudioConfig: {
      office: {
        occasionName: 'Office & Smart',
        icon: 'briefcase',
        stylingTip: 'Polished brown leather strap and clean cream dial tie together tailored linen and navy chinos.',
        canvasHeroImage: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=800&auto=format&fit=crop&q=80',
        canvasBottomImage: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=800&auto=format&fit=crop&q=80',
        canvasShoesImage: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=800&auto=format&fit=crop&q=80',
        pairings: [
          { id: 'prod-m-rare-rabbit', brand: 'RARE RABBIT', title: 'Textured Linen Shirt', price: 2799, image: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=800&auto=format&fit=crop&q=80', category: 'Topwear' },
          { id: 'prod-m-tommy-chinos', brand: 'TOMMY HILFIGER', title: 'Tailored Slim Chinos', price: 3899, image: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=800&auto=format&fit=crop&q=80', category: 'Bottomwear' }
        ]
      },
      weekend: {
        occasionName: 'Weekend Casual',
        icon: 'coffee',
        stylingTip: 'Adds classic analog charm to relaxed trucker denim and retro court sneakers.',
        canvasHeroImage: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=800&auto=format&fit=crop&q=80',
        canvasBottomImage: 'https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=800&auto=format&fit=crop&q=80',
        canvasShoesImage: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&auto=format&fit=crop&q=80',
        pairings: [
          { id: 'prod-m-jack-denim', brand: 'JACK & JONES', title: 'Washed Trucker Denim Jacket', price: 2999, image: 'https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=800&auto=format&fit=crop&q=80', category: 'Outerwear' },
          { id: 'prod-m-nike-killshot', brand: 'NIKE', title: 'Killshot 2 Retro Sneakers', price: 6495, image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&auto=format&fit=crop&q=80', category: 'Footwear' }
        ]
      },
      evening: {
        occasionName: 'Evening Out',
        icon: 'wine',
        stylingTip: 'Pairs with a structured charcoal linen blazer for refined evening punctuality and style.',
        canvasHeroImage: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=800&auto=format&fit=crop&q=80',
        canvasBottomImage: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&auto=format&fit=crop&q=80',
        canvasShoesImage: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&auto=format&fit=crop&q=80',
        pairings: [
          { id: 'prod-m-ms-blazer', brand: 'MARKS & SPENCER', title: 'Structured Linen Blazer', price: 6999, image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&auto=format&fit=crop&q=80', category: 'Outerwear' },
          { id: 'prod-m-snitch-trousers', brand: 'SNITCH', title: 'Pleated Korean Trousers', price: 1899, image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&auto=format&fit=crop&q=80', category: 'Bottomwear' }
        ]
      }
    }
  },

  // =========================================================================
  // 3. KIDS' COLLECTION (Playful Essentials & Smart Occasions)
  // =========================================================================
  {
    id: 'prod-k-tommy-polo',
    category: 'KIDS',
    subCategory: 'Topwear',
    brand: 'TOMMY HILFIGER',
    title: 'Contrast Collar Pique Polo (Navy/Red)',
    price: 1799,
    originalPrice: 2599,
    discount: '30% OFF',
    rating: 4.6,
    ratingCount: 56,
    image: 'https://images.unsplash.com/photo-1519457431-44ccd64a579b?w=800&auto=format&fit=crop&q=80',
    tags: ['Polo', 'Kids', 'Navy', 'Topwear'],
    styleStudioConfig: {
      office: {
        occasionName: 'School & Assembly',
        icon: 'briefcase',
        stylingTip: 'Tuck into comfortable cotton dungarees and velcro running shoes for smart school presentations.',
        canvasHeroImage: 'https://images.unsplash.com/photo-1519457431-44ccd64a579b?w=800&auto=format&fit=crop&q=80',
        canvasBottomImage: 'https://images.unsplash.com/photo-1503919545889-aef636e10ad4?w=800&auto=format&fit=crop&q=80',
        canvasShoesImage: 'https://images.unsplash.com/photo-1514989940723-e8e51635b782?w=800&auto=format&fit=crop&q=80',
        pairings: [
          { id: 'prod-k-hm-dungarees', brand: 'H&M KIDS', title: 'Cotton Denim Dungarees', price: 1999, image: 'https://images.unsplash.com/photo-1503919545889-aef636e10ad4?w=800&auto=format&fit=crop&q=80', category: 'Bottomwear' },
          { id: 'prod-k-nike-runners', brand: 'NIKE', title: 'Revolution Running Shoes', price: 2995, image: 'https://images.unsplash.com/photo-1514989940723-e8e51635b782?w=800&auto=format&fit=crop&q=80', category: 'Footwear' }
        ]
      },
      weekend: {
        occasionName: 'Playground & Park',
        icon: 'coffee',
        stylingTip: 'Pair with a cozy fleece zip hoodie and lightweight runners for active playground play.',
        canvasHeroImage: 'https://images.unsplash.com/photo-1519457431-44ccd64a579b?w=800&auto=format&fit=crop&q=80',
        canvasBottomImage: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=800&auto=format&fit=crop&q=80',
        canvasShoesImage: 'https://images.unsplash.com/photo-1514989940723-e8e51635b782?w=800&auto=format&fit=crop&q=80',
        pairings: [
          { id: 'prod-k-gap-hoodie', brand: 'GAP', title: 'Classic Logo Fleece Hoodie', price: 2299, image: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=800&auto=format&fit=crop&q=80', category: 'Outerwear' },
          { id: 'prod-k-nike-runners', brand: 'NIKE', title: 'Revolution Running Shoes', price: 2995, image: 'https://images.unsplash.com/photo-1514989940723-e8e51635b782?w=800&auto=format&fit=crop&q=80', category: 'Footwear' }
        ]
      },
      evening: {
        occasionName: 'Birthday Parties',
        icon: 'wine',
        stylingTip: 'Button up under a striped knit layer for family dinners and birthday celebrations.',
        canvasHeroImage: 'https://images.unsplash.com/photo-1519457431-44ccd64a579b?w=800&auto=format&fit=crop&q=80',
        canvasBottomImage: 'https://images.unsplash.com/photo-1503919545889-aef636e10ad4?w=800&auto=format&fit=crop&q=80',
        canvasShoesImage: 'https://images.unsplash.com/photo-1514989940723-e8e51635b782?w=800&auto=format&fit=crop&q=80',
        pairings: [
          { id: 'prod-k-hm-dungarees', brand: 'H&M KIDS', title: 'Cotton Denim Dungarees', price: 1999, image: 'https://images.unsplash.com/photo-1503919545889-aef636e10ad4?w=800&auto=format&fit=crop&q=80', category: 'Bottomwear' },
          { id: 'prod-k-nike-runners', brand: 'NIKE', title: 'Revolution Running Shoes', price: 2995, image: 'https://images.unsplash.com/photo-1514989940723-e8e51635b782?w=800&auto=format&fit=crop&q=80', category: 'Footwear' }
        ]
      }
    }
  },
  {
    id: 'prod-k-hm-dungarees',
    category: 'KIDS',
    subCategory: 'Bottomwear',
    brand: 'H&M KIDS',
    title: 'Organic Cotton Denim Dungarees (Washed Blue)',
    price: 1999,
    originalPrice: 2499,
    discount: '20% OFF',
    rating: 4.7,
    ratingCount: 89,
    image: 'https://images.unsplash.com/photo-1503919545889-aef636e10ad4?w=800&auto=format&fit=crop&q=80',
    tags: ['Dungarees', 'Organic Cotton', 'Kids Denim', 'Bottomwear'],
    styleStudioConfig: {
      office: {
        occasionName: 'School & Assembly',
        icon: 'briefcase',
        stylingTip: 'Layer over a contrast collar polo for neat school picture day styling.',
        canvasHeroImage: 'https://images.unsplash.com/photo-1503919545889-aef636e10ad4?w=800&auto=format&fit=crop&q=80',
        canvasBottomImage: 'https://images.unsplash.com/photo-1519457431-44ccd64a579b?w=800&auto=format&fit=crop&q=80',
        canvasShoesImage: 'https://images.unsplash.com/photo-1514989940723-e8e51635b782?w=800&auto=format&fit=crop&q=80',
        pairings: [
          { id: 'prod-k-tommy-polo', brand: 'TOMMY HILFIGER', title: 'Contrast Collar Polo', price: 1799, image: 'https://images.unsplash.com/photo-1519457431-44ccd64a579b?w=800&auto=format&fit=crop&q=80', category: 'Topwear' },
          { id: 'prod-k-nike-runners', brand: 'NIKE', title: 'Revolution Running Shoes', price: 2995, image: 'https://images.unsplash.com/photo-1514989940723-e8e51635b782?w=800&auto=format&fit=crop&q=80', category: 'Footwear' }
        ]
      },
      weekend: {
        occasionName: 'Playground & Park',
        icon: 'coffee',
        stylingTip: 'Layer over a vibrant striped crewneck with running shoes for unrestricted play.',
        canvasHeroImage: 'https://images.unsplash.com/photo-1503919545889-aef636e10ad4?w=800&auto=format&fit=crop&q=80',
        canvasBottomImage: 'https://images.unsplash.com/photo-1519457431-44ccd64a579b?w=800&auto=format&fit=crop&q=80',
        canvasShoesImage: 'https://images.unsplash.com/photo-1514989940723-e8e51635b782?w=800&auto=format&fit=crop&q=80',
        pairings: [
          { id: 'prod-k-ucb-crewneck', brand: 'UCB', title: 'Striped Cotton Crewneck', price: 1299, image: 'https://images.unsplash.com/photo-1519457431-44ccd64a579b?w=800&auto=format&fit=crop&q=80', category: 'Topwear' },
          { id: 'prod-k-nike-runners', brand: 'NIKE', title: 'Revolution Running Shoes', price: 2995, image: 'https://images.unsplash.com/photo-1514989940723-e8e51635b782?w=800&auto=format&fit=crop&q=80', category: 'Footwear' }
        ]
      },
      evening: {
        occasionName: 'Birthday Parties',
        icon: 'wine',
        stylingTip: 'Style over a neat polo with a fleece zip hoodie for evening cake cutting celebrations.',
        canvasHeroImage: 'https://images.unsplash.com/photo-1503919545889-aef636e10ad4?w=800&auto=format&fit=crop&q=80',
        canvasBottomImage: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=800&auto=format&fit=crop&q=80',
        canvasShoesImage: 'https://images.unsplash.com/photo-1514989940723-e8e51635b782?w=800&auto=format&fit=crop&q=80',
        pairings: [
          { id: 'prod-k-gap-hoodie', brand: 'GAP', title: 'Classic Logo Fleece Hoodie', price: 2299, image: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=800&auto=format&fit=crop&q=80', category: 'Outerwear' },
          { id: 'prod-k-nike-runners', brand: 'NIKE', title: 'Revolution Running Shoes', price: 2995, image: 'https://images.unsplash.com/photo-1514989940723-e8e51635b782?w=800&auto=format&fit=crop&q=80', category: 'Footwear' }
        ]
      }
    }
  },
  {
    id: 'prod-k-mango-smock',
    category: 'KIDS',
    subCategory: 'Dresses',
    brand: 'MANGO KIDS',
    title: 'Printed Cotton Smock Dress (Sunflower Yellow)',
    price: 1690,
    originalPrice: 2600,
    discount: '35% OFF',
    rating: 4.5,
    ratingCount: 42,
    image: 'https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?w=800&auto=format&fit=crop&q=80',
    tags: ['Dress', 'Sunflower Yellow', 'Cotton', 'Dresses'],
    styleStudioConfig: {
      office: {
        occasionName: 'School & Assembly',
        icon: 'briefcase',
        stylingTip: 'Airy sunflower cotton paired with white runners and a light zip jacket for school recitals.',
        canvasHeroImage: 'https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?w=800&auto=format&fit=crop&q=80',
        canvasBottomImage: 'https://images.unsplash.com/photo-1514989940723-e8e51635b782?w=800&auto=format&fit=crop&q=80',
        canvasShoesImage: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=800&auto=format&fit=crop&q=80',
        pairings: [
          { id: 'prod-k-nike-runners', brand: 'NIKE', title: 'Revolution Running Shoes', price: 2995, image: 'https://images.unsplash.com/photo-1514989940723-e8e51635b782?w=800&auto=format&fit=crop&q=80', category: 'Footwear' },
          { id: 'prod-k-gap-hoodie', brand: 'GAP', title: 'Classic Logo Fleece Hoodie', price: 2299, image: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=800&auto=format&fit=crop&q=80', category: 'Outerwear' }
        ]
      },
      weekend: {
        occasionName: 'Playground & Park',
        icon: 'coffee',
        stylingTip: 'Pair with flexible running shoes for breezy weekend picnics in the park.',
        canvasHeroImage: 'https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?w=800&auto=format&fit=crop&q=80',
        canvasBottomImage: 'https://images.unsplash.com/photo-1514989940723-e8e51635b782?w=800&auto=format&fit=crop&q=80',
        canvasShoesImage: 'https://images.unsplash.com/photo-1519457431-44ccd64a579b?w=800&auto=format&fit=crop&q=80',
        pairings: [
          { id: 'prod-k-nike-runners', brand: 'NIKE', title: 'Revolution Running Shoes', price: 2995, image: 'https://images.unsplash.com/photo-1514989940723-e8e51635b782?w=800&auto=format&fit=crop&q=80', category: 'Footwear' },
          { id: 'prod-k-tommy-polo', brand: 'TOMMY HILFIGER', title: 'Contrast Collar Polo', price: 1799, image: 'https://images.unsplash.com/photo-1519457431-44ccd64a579b?w=800&auto=format&fit=crop&q=80', category: 'Topwear' }
        ]
      },
      evening: {
        occasionName: 'Birthday Parties',
        icon: 'wine',
        stylingTip: 'Vibrant smock dress with heather fleece hoodie for breezy outdoor birthday festivities.',
        canvasHeroImage: 'https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?w=800&auto=format&fit=crop&q=80',
        canvasBottomImage: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=800&auto=format&fit=crop&q=80',
        canvasShoesImage: 'https://images.unsplash.com/photo-1514989940723-e8e51635b782?w=800&auto=format&fit=crop&q=80',
        pairings: [
          { id: 'prod-k-gap-hoodie', brand: 'GAP', title: 'Classic Logo Fleece Hoodie', price: 2299, image: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=800&auto=format&fit=crop&q=80', category: 'Outerwear' },
          { id: 'prod-k-nike-runners', brand: 'NIKE', title: 'Revolution Running Shoes', price: 2995, image: 'https://images.unsplash.com/photo-1514989940723-e8e51635b782?w=800&auto=format&fit=crop&q=80', category: 'Footwear' }
        ]
      }
    }
  },
  {
    id: 'prod-k-nike-runners',
    category: 'KIDS',
    subCategory: 'Footwear',
    brand: 'NIKE',
    title: 'Revolution Running Shoes (Black/Volt)',
    price: 2995,
    originalPrice: 3495,
    discount: '15% OFF',
    rating: 4.8,
    ratingCount: 120,
    image: 'https://images.unsplash.com/photo-1514989940723-e8e51635b782?w=800&auto=format&fit=crop&q=80',
    tags: ['Runners', 'Shoes', 'Black/Volt', 'Footwear'],
    styleStudioConfig: {
      office: {
        occasionName: 'School & Assembly',
        icon: 'briefcase',
        stylingTip: 'Durable and supportive for active school days paired with classic polo and denim dungarees.',
        canvasHeroImage: 'https://images.unsplash.com/photo-1514989940723-e8e51635b782?w=800&auto=format&fit=crop&q=80',
        canvasBottomImage: 'https://images.unsplash.com/photo-1503919545889-aef636e10ad4?w=800&auto=format&fit=crop&q=80',
        canvasShoesImage: 'https://images.unsplash.com/photo-1519457431-44ccd64a579b?w=800&auto=format&fit=crop&q=80',
        pairings: [
          { id: 'prod-k-hm-dungarees', brand: 'H&M KIDS', title: 'Cotton Denim Dungarees', price: 1999, image: 'https://images.unsplash.com/photo-1503919545889-aef636e10ad4?w=800&auto=format&fit=crop&q=80', category: 'Bottomwear' },
          { id: 'prod-k-tommy-polo', brand: 'TOMMY HILFIGER', title: 'Contrast Collar Polo', price: 1799, image: 'https://images.unsplash.com/photo-1519457431-44ccd64a579b?w=800&auto=format&fit=crop&q=80', category: 'Topwear' }
        ]
      },
      weekend: {
        occasionName: 'Playground & Park',
        icon: 'coffee',
        stylingTip: 'High-traction soles for running on turf and playground slides with a cozy fleece hoodie.',
        canvasHeroImage: 'https://images.unsplash.com/photo-1514989940723-e8e51635b782?w=800&auto=format&fit=crop&q=80',
        canvasBottomImage: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=800&auto=format&fit=crop&q=80',
        canvasShoesImage: 'https://images.unsplash.com/photo-1503919545889-aef636e10ad4?w=800&auto=format&fit=crop&q=80',
        pairings: [
          { id: 'prod-k-gap-hoodie', brand: 'GAP', title: 'Classic Logo Fleece Hoodie', price: 2299, image: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=800&auto=format&fit=crop&q=80', category: 'Outerwear' },
          { id: 'prod-k-hm-dungarees', brand: 'H&M KIDS', title: 'Cotton Denim Dungarees', price: 1999, image: 'https://images.unsplash.com/photo-1503919545889-aef636e10ad4?w=800&auto=format&fit=crop&q=80', category: 'Bottomwear' }
        ]
      },
      evening: {
        occasionName: 'Birthday Parties',
        icon: 'wine',
        stylingTip: 'Comfortable footwear keeping kids energised through evening celebrations and games.',
        canvasHeroImage: 'https://images.unsplash.com/photo-1514989940723-e8e51635b782?w=800&auto=format&fit=crop&q=80',
        canvasBottomImage: 'https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?w=800&auto=format&fit=crop&q=80',
        canvasShoesImage: 'https://images.unsplash.com/photo-1519457431-44ccd64a579b?w=800&auto=format&fit=crop&q=80',
        pairings: [
          { id: 'prod-k-mango-smock', brand: 'MANGO KIDS', title: 'Printed Cotton Smock Dress', price: 1690, image: 'https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?w=800&auto=format&fit=crop&q=80', category: 'Dresses' },
          { id: 'prod-k-tommy-polo', brand: 'TOMMY HILFIGER', title: 'Contrast Collar Polo', price: 1799, image: 'https://images.unsplash.com/photo-1519457431-44ccd64a579b?w=800&auto=format&fit=crop&q=80', category: 'Topwear' }
        ]
      }
    }
  },
  {
    id: 'prod-k-ucb-crewneck',
    category: 'KIDS',
    subCategory: 'Topwear',
    brand: 'UCB',
    title: 'Striped Cotton Crewneck Sweatshirt (Multicolor)',
    price: 1299,
    originalPrice: 2199,
    discount: '40% OFF',
    rating: 4.4,
    ratingCount: 78,
    image: 'https://images.unsplash.com/photo-1471286174890-9c112ffca56a?w=800&auto=format&fit=crop&q=80',
    tags: ['Sweatshirt', 'Striped', 'Cotton', 'Kids Topwear'],
    styleStudioConfig: {
      office: {
        occasionName: 'School & Assembly',
        icon: 'briefcase',
        stylingTip: 'Layer over classic cotton dungarees and runners for cozy classroom learning.',
        canvasHeroImage: 'https://images.unsplash.com/photo-1471286174890-9c112ffca56a?w=800&auto=format&fit=crop&q=80',
        canvasBottomImage: 'https://images.unsplash.com/photo-1503919545889-aef636e10ad4?w=800&auto=format&fit=crop&q=80',
        canvasShoesImage: 'https://images.unsplash.com/photo-1514989940723-e8e51635b782?w=800&auto=format&fit=crop&q=80',
        pairings: [
          { id: 'prod-k-hm-dungarees', brand: 'H&M KIDS', title: 'Cotton Denim Dungarees', price: 1999, image: 'https://images.unsplash.com/photo-1503919545889-aef636e10ad4?w=800&auto=format&fit=crop&q=80', category: 'Bottomwear' },
          { id: 'prod-k-nike-runners', brand: 'NIKE', title: 'Revolution Running Shoes', price: 2995, image: 'https://images.unsplash.com/photo-1514989940723-e8e51635b782?w=800&auto=format&fit=crop&q=80', category: 'Footwear' }
        ]
      },
      weekend: {
        occasionName: 'Playground & Park',
        icon: 'coffee',
        stylingTip: 'Vibrant multicolor stripes paired with running sneakers for weekend adventure.',
        canvasHeroImage: 'https://images.unsplash.com/photo-1471286174890-9c112ffca56a?w=800&auto=format&fit=crop&q=80',
        canvasBottomImage: 'https://images.unsplash.com/photo-1514989940723-e8e51635b782?w=800&auto=format&fit=crop&q=80',
        canvasShoesImage: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=800&auto=format&fit=crop&q=80',
        pairings: [
          { id: 'prod-k-nike-runners', brand: 'NIKE', title: 'Revolution Running Shoes', price: 2995, image: 'https://images.unsplash.com/photo-1514989940723-e8e51635b782?w=800&auto=format&fit=crop&q=80', category: 'Footwear' },
          { id: 'prod-k-gap-hoodie', brand: 'GAP', title: 'Classic Logo Fleece Hoodie', price: 2299, image: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=800&auto=format&fit=crop&q=80', category: 'Outerwear' }
        ]
      },
      evening: {
        occasionName: 'Birthday Parties',
        icon: 'wine',
        stylingTip: 'Pair with denim dungarees for cheerful birthday photos and family dinners.',
        canvasHeroImage: 'https://images.unsplash.com/photo-1471286174890-9c112ffca56a?w=800&auto=format&fit=crop&q=80',
        canvasBottomImage: 'https://images.unsplash.com/photo-1503919545889-aef636e10ad4?w=800&auto=format&fit=crop&q=80',
        canvasShoesImage: 'https://images.unsplash.com/photo-1514989940723-e8e51635b782?w=800&auto=format&fit=crop&q=80',
        pairings: [
          { id: 'prod-k-hm-dungarees', brand: 'H&M KIDS', title: 'Cotton Denim Dungarees', price: 1999, image: 'https://images.unsplash.com/photo-1503919545889-aef636e10ad4?w=800&auto=format&fit=crop&q=80', category: 'Bottomwear' },
          { id: 'prod-k-nike-runners', brand: 'NIKE', title: 'Revolution Running Shoes', price: 2995, image: 'https://images.unsplash.com/photo-1514989940723-e8e51635b782?w=800&auto=format&fit=crop&q=80', category: 'Footwear' }
        ]
      }
    }
  },
  {
    id: 'prod-k-gap-hoodie',
    category: 'KIDS',
    subCategory: 'Outerwear',
    brand: 'GAP',
    title: 'Classic Logo Fleece Zip Hoodie (Heather Grey)',
    price: 2299,
    originalPrice: 3099,
    discount: '25% OFF',
    rating: 4.7,
    ratingCount: 95,
    image: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=800&auto=format&fit=crop&q=80',
    tags: ['Hoodie', 'Fleece', 'Heather Grey', 'Outerwear'],
    styleStudioConfig: {
      office: {
        occasionName: 'School & Assembly',
        icon: 'briefcase',
        stylingTip: 'Comfortable zip fleece for air-conditioned classrooms over a crisp polo.',
        canvasHeroImage: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=800&auto=format&fit=crop&q=80',
        canvasBottomImage: 'https://images.unsplash.com/photo-1519457431-44ccd64a579b?w=800&auto=format&fit=crop&q=80',
        canvasShoesImage: 'https://images.unsplash.com/photo-1514989940723-e8e51635b782?w=800&auto=format&fit=crop&q=80',
        pairings: [
          { id: 'prod-k-tommy-polo', brand: 'TOMMY HILFIGER', title: 'Contrast Collar Polo', price: 1799, image: 'https://images.unsplash.com/photo-1519457431-44ccd64a579b?w=800&auto=format&fit=crop&q=80', category: 'Topwear' },
          { id: 'prod-k-nike-runners', brand: 'NIKE', title: 'Revolution Running Shoes', price: 2995, image: 'https://images.unsplash.com/photo-1514989940723-e8e51635b782?w=800&auto=format&fit=crop&q=80', category: 'Footwear' }
        ]
      },
      weekend: {
        occasionName: 'Playground & Park',
        icon: 'coffee',
        stylingTip: 'Durable heather grey fleece keeping kids warm during sunset park games.',
        canvasHeroImage: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=800&auto=format&fit=crop&q=80',
        canvasBottomImage: 'https://images.unsplash.com/photo-1503919545889-aef636e10ad4?w=800&auto=format&fit=crop&q=80',
        canvasShoesImage: 'https://images.unsplash.com/photo-1514989940723-e8e51635b782?w=800&auto=format&fit=crop&q=80',
        pairings: [
          { id: 'prod-k-hm-dungarees', brand: 'H&M KIDS', title: 'Cotton Denim Dungarees', price: 1999, image: 'https://images.unsplash.com/photo-1503919545889-aef636e10ad4?w=800&auto=format&fit=crop&q=80', category: 'Bottomwear' },
          { id: 'prod-k-nike-runners', brand: 'NIKE', title: 'Revolution Running Shoes', price: 2995, image: 'https://images.unsplash.com/photo-1514989940723-e8e51635b782?w=800&auto=format&fit=crop&q=80', category: 'Footwear' }
        ]
      },
      evening: {
        occasionName: 'Birthday Parties',
        icon: 'wine',
        stylingTip: 'Throw over yellow cotton smock dress for evening chill after outdoor birthday cake cutting.',
        canvasHeroImage: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=800&auto=format&fit=crop&q=80',
        canvasBottomImage: 'https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?w=800&auto=format&fit=crop&q=80',
        canvasShoesImage: 'https://images.unsplash.com/photo-1514989940723-e8e51635b782?w=800&auto=format&fit=crop&q=80',
        pairings: [
          { id: 'prod-k-mango-smock', brand: 'MANGO KIDS', title: 'Printed Cotton Smock Dress', price: 1690, image: 'https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?w=800&auto=format&fit=crop&q=80', category: 'Dresses' },
          { id: 'prod-k-nike-runners', brand: 'NIKE', title: 'Revolution Running Shoes', price: 2995, image: 'https://images.unsplash.com/photo-1514989940723-e8e51635b782?w=800&auto=format&fit=crop&q=80', category: 'Footwear' }
        ]
      }
    }
  },

  // =========================================================================
  // 4. BEAUTY & WELLNESS (Skincare, Hair & Makeup Ensembles)
  // =========================================================================
  {
    id: 'prod-b-mac-ruby',
    category: 'BEAUTY',
    subCategory: 'Makeup',
    brand: 'M.A.C',
    title: 'Retro Matte Lipstick (Ruby Woo)',
    price: 1950,
    originalPrice: 1950,
    discount: '',
    rating: 4.8,
    ratingCount: 2400,
    image: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=800&auto=format&fit=crop&q=80',
    tags: ['Lipstick', 'Matte', 'Ruby Woo', 'Makeup'],
    styleStudioConfig: {
      office: {
        occasionName: '☀️ Daily Office Glow',
        icon: 'sun',
        stylingTip: 'Dab lightly with a fingertip for a natural blotted berry stain paired with fresh pure rosewater facial mist.',
        canvasHeroImage: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=800&auto=format&fit=crop&q=80',
        canvasBottomImage: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800&auto=format&fit=crop&q=80',
        canvasShoesImage: 'https://images.unsplash.com/photo-1567928815116-f33190800b46?w=800&auto=format&fit=crop&q=80',
        pairings: [
          { id: 'prod-b-forest-mist', brand: 'FOREST ESSENTIALS', title: 'Pure Rosewater Tonic Mist', price: 1475, image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800&auto=format&fit=crop&q=80', category: 'Skincare' },
          { id: 'prod-b-laneige-mask', brand: 'LANEIGE', title: 'Lip Sleeping Mask (Berry)', price: 600, image: 'https://images.unsplash.com/photo-1567928815116-f33190800b46?w=800&auto=format&fit=crop&q=80', category: 'Lipcare' }
        ]
      },
      weekend: {
        occasionName: '☕ Weekend No-Makeup Look',
        icon: 'coffee',
        stylingTip: 'Prep lips with berry sleeping mask, then tap on Kay Beauty champagne shimmer eyeshadow for a dewy 5-minute weekend face.',
        canvasHeroImage: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=800&auto=format&fit=crop&q=80',
        canvasBottomImage: 'https://images.unsplash.com/photo-1567928815116-f33190800b46?w=800&auto=format&fit=crop&q=80',
        canvasShoesImage: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=800&auto=format&fit=crop&q=80',
        pairings: [
          { id: 'prod-b-laneige-mask', brand: 'LANEIGE', title: 'Lip Sleeping Mask (Berry)', price: 600, image: 'https://images.unsplash.com/photo-1567928815116-f33190800b46?w=800&auto=format&fit=crop&q=80', category: 'Lipcare' },
          { id: 'prod-b-kay-eyeshadow', brand: 'KAY BEAUTY', title: 'Matte Liquid Eyeshadow (Champagne)', price: 899, image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=800&auto=format&fit=crop&q=80', category: 'Makeup' }
        ]
      },
      evening: {
        occasionName: '🍸 Full Glam Night Out',
        icon: 'wine',
        stylingTip: 'Full opaque swipe of iconic Ruby Woo paired with salon-grade Dyson Airwrap curls and overnight repair glow.',
        canvasHeroImage: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=800&auto=format&fit=crop&q=80',
        canvasBottomImage: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&auto=format&fit=crop&q=80',
        canvasShoesImage: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=800&auto=format&fit=crop&q=80',
        pairings: [
          { id: 'prod-b-estee-serum', brand: 'ESTÉE LAUDER', title: 'Advanced Night Repair Serum', price: 6900, image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&auto=format&fit=crop&q=80', category: 'Skincare' },
          { id: 'prod-b-kay-eyeshadow', brand: 'KAY BEAUTY', title: 'Liquid Eyeshadow (Champagne)', price: 899, image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=800&auto=format&fit=crop&q=80', category: 'Makeup' }
        ]
      }
    }
  },
  {
    id: 'prod-b-estee-serum',
    category: 'BEAUTY',
    subCategory: 'Skincare',
    brand: 'ESTÉE LAUDER',
    title: 'Advanced Night Repair Synchronized Multi-Recovery Complex (50ml)',
    price: 6900,
    originalPrice: 8100,
    discount: '15% OFF',
    rating: 4.9,
    ratingCount: 1100,
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&auto=format&fit=crop&q=80',
    tags: ['Serum', 'Anti-Aging', 'Night Repair', 'Skincare'],
    styleStudioConfig: {
      office: {
        occasionName: '☀️ Daily Office Glow',
        icon: 'sun',
        stylingTip: 'Mix 2 drops into foundation for luminous, non-flaky skin through 8 hours of AC office air.',
        canvasHeroImage: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&auto=format&fit=crop&q=80',
        canvasBottomImage: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800&auto=format&fit=crop&q=80',
        canvasShoesImage: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=800&auto=format&fit=crop&q=80',
        pairings: [
          { id: 'prod-b-forest-mist', brand: 'FOREST ESSENTIALS', title: 'Pure Rosewater Tonic Mist', price: 1475, image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800&auto=format&fit=crop&q=80', category: 'Skincare' },
          { id: 'prod-b-mac-ruby', brand: 'M.A.C', title: 'Retro Matte Ruby Woo', price: 1950, image: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=800&auto=format&fit=crop&q=80', category: 'Makeup' }
        ]
      },
      weekend: {
        occasionName: '☕ Weekend No-Makeup Look',
        icon: 'coffee',
        stylingTip: 'Layer under lip sleeping mask for deep skin barrier recovery over Saturday and Sunday.',
        canvasHeroImage: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&auto=format&fit=crop&q=80',
        canvasBottomImage: 'https://images.unsplash.com/photo-1567928815116-f33190800b46?w=800&auto=format&fit=crop&q=80',
        canvasShoesImage: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800&auto=format&fit=crop&q=80',
        pairings: [
          { id: 'prod-b-laneige-mask', brand: 'LANEIGE', title: 'Lip Sleeping Mask (Berry)', price: 600, image: 'https://images.unsplash.com/photo-1567928815116-f33190800b46?w=800&auto=format&fit=crop&q=80', category: 'Lipcare' },
          { id: 'prod-b-forest-mist', brand: 'FOREST ESSENTIALS', title: 'Pure Rosewater Tonic Mist', price: 1475, image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800&auto=format&fit=crop&q=80', category: 'Skincare' }
        ]
      },
      evening: {
        occasionName: '🍸 Full Glam Night Out',
        icon: 'wine',
        stylingTip: 'Provides a flawless radiant canvas before bold red lips and champagne shimmer eyes.',
        canvasHeroImage: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&auto=format&fit=crop&q=80',
        canvasBottomImage: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=800&auto=format&fit=crop&q=80',
        canvasShoesImage: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=800&auto=format&fit=crop&q=80',
        pairings: [
          { id: 'prod-b-mac-ruby', brand: 'M.A.C', title: 'Retro Matte Ruby Woo', price: 1950, image: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=800&auto=format&fit=crop&q=80', category: 'Makeup' },
          { id: 'prod-b-kay-eyeshadow', brand: 'KAY BEAUTY', title: 'Liquid Eyeshadow (Champagne)', price: 899, image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=800&auto=format&fit=crop&q=80', category: 'Makeup' }
        ]
      }
    }
  },
  {
    id: 'prod-b-forest-mist',
    category: 'BEAUTY',
    subCategory: 'Skincare',
    brand: 'FOREST ESSENTIALS',
    title: 'Facial Tonic Mist Pure Rosewater (Steam Distilled)',
    price: 1475,
    originalPrice: 1475,
    discount: '',
    rating: 4.7,
    ratingCount: 820,
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800&auto=format&fit=crop&q=80',
    tags: ['Toner', 'Rosewater', 'Ayurveda', 'Skincare'],
    styleStudioConfig: {
      office: {
        occasionName: '☀️ Daily Office Glow',
        icon: 'sun',
        stylingTip: 'Spritz generously throughout workday for an instant cooling moisture surge and natural floral aroma.',
        canvasHeroImage: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800&auto=format&fit=crop&q=80',
        canvasBottomImage: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&auto=format&fit=crop&q=80',
        canvasShoesImage: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=800&auto=format&fit=crop&q=80',
        pairings: [
          { id: 'prod-b-estee-serum', brand: 'ESTÉE LAUDER', title: 'Advanced Night Repair Serum', price: 6900, image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&auto=format&fit=crop&q=80', category: 'Skincare' },
          { id: 'prod-b-mac-ruby', brand: 'M.A.C', title: 'Retro Matte Ruby Woo', price: 1950, image: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=800&auto=format&fit=crop&q=80', category: 'Makeup' }
        ]
      },
      weekend: {
        occasionName: '☕ Weekend No-Makeup Look',
        icon: 'coffee',
        stylingTip: 'Use as a gentle post-cleansing toner base before applying lip mask for rested weekend skin.',
        canvasHeroImage: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800&auto=format&fit=crop&q=80',
        canvasBottomImage: 'https://images.unsplash.com/photo-1567928815116-f33190800b46?w=800&auto=format&fit=crop&q=80',
        canvasShoesImage: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=800&auto=format&fit=crop&q=80',
        pairings: [
          { id: 'prod-b-laneige-mask', brand: 'LANEIGE', title: 'Lip Sleeping Mask (Berry)', price: 600, image: 'https://images.unsplash.com/photo-1567928815116-f33190800b46?w=800&auto=format&fit=crop&q=80', category: 'Lipcare' },
          { id: 'prod-b-kay-eyeshadow', brand: 'KAY BEAUTY', title: 'Liquid Eyeshadow (Champagne)', price: 899, image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=800&auto=format&fit=crop&q=80', category: 'Makeup' }
        ]
      },
      evening: {
        occasionName: '🍸 Full Glam Night Out',
        icon: 'wine',
        stylingTip: 'Locks in full glam makeup with a natural dewy sheen that prevents caking through party hours.',
        canvasHeroImage: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800&auto=format&fit=crop&q=80',
        canvasBottomImage: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=800&auto=format&fit=crop&q=80',
        canvasShoesImage: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=800&auto=format&fit=crop&q=80',
        pairings: [
          { id: 'prod-b-mac-ruby', brand: 'M.A.C', title: 'Retro Matte Ruby Woo', price: 1950, image: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=800&auto=format&fit=crop&q=80', category: 'Makeup' },
          { id: 'prod-b-kay-eyeshadow', brand: 'KAY BEAUTY', title: 'Liquid Eyeshadow (Champagne)', price: 899, image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=800&auto=format&fit=crop&q=80', category: 'Makeup' }
        ]
      }
    }
  },
  {
    id: 'prod-b-laneige-mask',
    category: 'BEAUTY',
    subCategory: 'Lipcare',
    brand: 'LANEIGE',
    title: 'Lip Sleeping Mask (Berry 20g)',
    price: 600,
    originalPrice: 600,
    discount: '',
    rating: 4.8,
    ratingCount: 3500,
    image: 'https://images.unsplash.com/photo-1567928815116-f33190800b46?w=800&auto=format&fit=crop&q=80',
    tags: ['Lip Mask', 'Berry', 'Hydration', 'Lipcare'],
    styleStudioConfig: {
      office: {
        occasionName: '☀️ Daily Office Glow',
        icon: 'sun',
        stylingTip: 'Apply a sheer veil over rosewater-toned skin for soft, plump lips without sticky residue.',
        canvasHeroImage: 'https://images.unsplash.com/photo-1567928815116-f33190800b46?w=800&auto=format&fit=crop&q=80',
        canvasBottomImage: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800&auto=format&fit=crop&q=80',
        canvasShoesImage: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&auto=format&fit=crop&q=80',
        pairings: [
          { id: 'prod-b-forest-mist', brand: 'FOREST ESSENTIALS', title: 'Pure Rosewater Tonic Mist', price: 1475, image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800&auto=format&fit=crop&q=80', category: 'Skincare' },
          { id: 'prod-b-estee-serum', brand: 'ESTÉE LAUDER', title: 'Advanced Night Repair Serum', price: 6900, image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&auto=format&fit=crop&q=80', category: 'Skincare' }
        ]
      },
      weekend: {
        occasionName: '☕ Weekend No-Makeup Look',
        icon: 'coffee',
        stylingTip: 'The ultimate Sunday self-care ritual: deep berry lip nourishment paired with pure rosewater mist.',
        canvasHeroImage: 'https://images.unsplash.com/photo-1567928815116-f33190800b46?w=800&auto=format&fit=crop&q=80',
        canvasBottomImage: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800&auto=format&fit=crop&q=80',
        canvasShoesImage: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=800&auto=format&fit=crop&q=80',
        pairings: [
          { id: 'prod-b-forest-mist', brand: 'FOREST ESSENTIALS', title: 'Pure Rosewater Tonic Mist', price: 1475, image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800&auto=format&fit=crop&q=80', category: 'Skincare' },
          { id: 'prod-b-kay-eyeshadow', brand: 'KAY BEAUTY', title: 'Liquid Eyeshadow (Champagne)', price: 899, image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=800&auto=format&fit=crop&q=80', category: 'Makeup' }
        ]
      },
      evening: {
        occasionName: '🍸 Full Glam Night Out',
        icon: 'wine',
        stylingTip: 'Prep lips 15 minutes before applying matte red lipstick for a smooth, crack-free finish.',
        canvasHeroImage: 'https://images.unsplash.com/photo-1567928815116-f33190800b46?w=800&auto=format&fit=crop&q=80',
        canvasBottomImage: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=800&auto=format&fit=crop&q=80',
        canvasShoesImage: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=800&auto=format&fit=crop&q=80',
        pairings: [
          { id: 'prod-b-mac-ruby', brand: 'M.A.C', title: 'Retro Matte Ruby Woo', price: 1950, image: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=800&auto=format&fit=crop&q=80', category: 'Makeup' },
          { id: 'prod-b-kay-eyeshadow', brand: 'KAY BEAUTY', title: 'Liquid Eyeshadow (Champagne)', price: 899, image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=800&auto=format&fit=crop&q=80', category: 'Makeup' }
        ]
      }
    }
  },
  {
    id: 'prod-b-dyson-airwrap',
    category: 'BEAUTY',
    subCategory: 'Haircare',
    brand: 'DYSON',
    title: 'Airwrap Multi-Styler Complete Long (Nickel/Copper)',
    price: 45900,
    originalPrice: 45900,
    discount: '',
    rating: 4.9,
    ratingCount: 450,
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&auto=format&fit=crop&q=80',
    tags: ['Hair Styler', 'Dyson', 'Multi-Styler', 'Beauty Tech'],
    styleStudioConfig: {
      office: {
        occasionName: '☀️ Daily Office Glow',
        icon: 'sun',
        stylingTip: 'Smooth blowout using the firm smoothing brush attachment with rosewater tonic mist.',
        canvasHeroImage: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&auto=format&fit=crop&q=80',
        canvasBottomImage: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800&auto=format&fit=crop&q=80',
        canvasShoesImage: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=800&auto=format&fit=crop&q=80',
        pairings: [
          { id: 'prod-b-forest-mist', brand: 'FOREST ESSENTIALS', title: 'Pure Rosewater Tonic Mist', price: 1475, image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800&auto=format&fit=crop&q=80', category: 'Skincare' },
          { id: 'prod-b-mac-ruby', brand: 'M.A.C', title: 'Retro Matte Ruby Woo', price: 1950, image: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=800&auto=format&fit=crop&q=80', category: 'Makeup' }
        ]
      },
      weekend: {
        occasionName: '☕ Weekend No-Makeup Look',
        icon: 'coffee',
        stylingTip: 'Effortless beach waves with the 30mm barrel paired with sheer berry lip gloss.',
        canvasHeroImage: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&auto=format&fit=crop&q=80',
        canvasBottomImage: 'https://images.unsplash.com/photo-1567928815116-f33190800b46?w=800&auto=format&fit=crop&q=80',
        canvasShoesImage: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=800&auto=format&fit=crop&q=80',
        pairings: [
          { id: 'prod-b-laneige-mask', brand: 'LANEIGE', title: 'Lip Sleeping Mask (Berry)', price: 600, image: 'https://images.unsplash.com/photo-1567928815116-f33190800b46?w=800&auto=format&fit=crop&q=80', category: 'Lipcare' },
          { id: 'prod-b-kay-eyeshadow', brand: 'KAY BEAUTY', title: 'Liquid Eyeshadow (Champagne)', price: 899, image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=800&auto=format&fit=crop&q=80', category: 'Makeup' }
        ]
      },
      evening: {
        occasionName: '🍸 Full Glam Night Out',
        icon: 'wine',
        stylingTip: 'Voluminous red-carpet Hollywood curls paired with bold ruby lips and champagne shimmer eyes.',
        canvasHeroImage: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&auto=format&fit=crop&q=80',
        canvasBottomImage: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=800&auto=format&fit=crop&q=80',
        canvasShoesImage: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=800&auto=format&fit=crop&q=80',
        pairings: [
          { id: 'prod-b-mac-ruby', brand: 'M.A.C', title: 'Retro Matte Ruby Woo', price: 1950, image: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=800&auto=format&fit=crop&q=80', category: 'Makeup' },
          { id: 'prod-b-kay-eyeshadow', brand: 'KAY BEAUTY', title: 'Liquid Eyeshadow (Champagne)', price: 899, image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=800&auto=format&fit=crop&q=80', category: 'Makeup' }
        ]
      }
    }
  },
  {
    id: 'prod-b-kay-eyeshadow',
    category: 'BEAUTY',
    subCategory: 'Makeup',
    brand: 'KAY BEAUTY',
    title: 'Matte Liquid Eyeshadow (Champagne Shimmer)',
    price: 899,
    originalPrice: 1120,
    discount: '20% OFF',
    rating: 4.5,
    ratingCount: 610,
    image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=800&auto=format&fit=crop&q=80',
    tags: ['Eyeshadow', 'Liquid', 'Champagne', 'Makeup'],
    styleStudioConfig: {
      office: {
        occasionName: '☀️ Daily Office Glow',
        icon: 'sun',
        stylingTip: 'Swipe a single sheer wash across eyelids for an instant awakened brightening effect.',
        canvasHeroImage: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=800&auto=format&fit=crop&q=80',
        canvasBottomImage: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800&auto=format&fit=crop&q=80',
        canvasShoesImage: 'https://images.unsplash.com/photo-1567928815116-f33190800b46?w=800&auto=format&fit=crop&q=80',
        pairings: [
          { id: 'prod-b-forest-mist', brand: 'FOREST ESSENTIALS', title: 'Pure Rosewater Tonic Mist', price: 1475, image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800&auto=format&fit=crop&q=80', category: 'Skincare' },
          { id: 'prod-b-laneige-mask', brand: 'LANEIGE', title: 'Lip Sleeping Mask (Berry)', price: 600, image: 'https://images.unsplash.com/photo-1567928815116-f33190800b46?w=800&auto=format&fit=crop&q=80', category: 'Lipcare' }
        ]
      },
      weekend: {
        occasionName: '☕ Weekend No-Makeup Look',
        icon: 'coffee',
        stylingTip: 'Tap onto inner eye corners and brow bones for quick effortless natural radiance.',
        canvasHeroImage: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=800&auto=format&fit=crop&q=80',
        canvasBottomImage: 'https://images.unsplash.com/photo-1567928815116-f33190800b46?w=800&auto=format&fit=crop&q=80',
        canvasShoesImage: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800&auto=format&fit=crop&q=80',
        pairings: [
          { id: 'prod-b-laneige-mask', brand: 'LANEIGE', title: 'Lip Sleeping Mask (Berry)', price: 600, image: 'https://images.unsplash.com/photo-1567928815116-f33190800b46?w=800&auto=format&fit=crop&q=80', category: 'Lipcare' },
          { id: 'prod-b-forest-mist', brand: 'FOREST ESSENTIALS', title: 'Pure Rosewater Tonic Mist', price: 1475, image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800&auto=format&fit=crop&q=80', category: 'Skincare' }
        ]
      },
      evening: {
        occasionName: '🍸 Full Glam Night Out',
        icon: 'wine',
        stylingTip: 'Layer opaque across lids with winged eyeliner and iconic Ruby Woo matte lips.',
        canvasHeroImage: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=800&auto=format&fit=crop&q=80',
        canvasBottomImage: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=800&auto=format&fit=crop&q=80',
        canvasShoesImage: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&auto=format&fit=crop&q=80',
        pairings: [
          { id: 'prod-b-mac-ruby', brand: 'M.A.C', title: 'Retro Matte Ruby Woo', price: 1950, image: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=800&auto=format&fit=crop&q=80', category: 'Makeup' },
          { id: 'prod-b-estee-serum', brand: 'ESTÉE LAUDER', title: 'Advanced Night Repair Serum', price: 6900, image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&auto=format&fit=crop&q=80', category: 'Skincare' }
        ]
      }
    }
  },

  // =========================================================================
  // 5. HOME & LIVING COLLECTION (Textiles, Aromas & Handcrafted Accents)
  // =========================================================================
  {
    id: 'prod-h-hm-vase',
    category: 'HOME & LIVING',
    subCategory: 'Decor',
    brand: 'H&M HOME',
    title: 'Ceramic Ribbed Vase (Warm Beige)',
    price: 1499,
    originalPrice: 1499,
    discount: '',
    rating: 4.7,
    ratingCount: 130,
    image: 'https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?w=800&auto=format&fit=crop&q=80',
    tags: ['Vase', 'Ceramic', 'Beige', 'Decor'],
    styleStudioConfig: {
      office: {
        occasionName: '🛋️ Living Room Accent',
        icon: 'home',
        stylingTip: 'Style with dried pampas on a raw wooden coffee table next to warm amber candlelight.',
        canvasHeroImage: 'https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?w=800&auto=format&fit=crop&q=80',
        canvasBottomImage: 'https://images.unsplash.com/photo-1603006905003-be475563bc59?w=800&auto=format&fit=crop&q=80',
        canvasShoesImage: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=800&auto=format&fit=crop&q=80',
        pairings: [
          { id: 'prod-h-westside-candle', brand: 'WESTSIDE HOME', title: 'Scented Soy Amber Candle', price: 799, image: 'https://images.unsplash.com/photo-1603006905003-be475563bc59?w=800&auto=format&fit=crop&q=80', category: 'Fragrance' },
          { id: 'prod-h-nestasia-throw', brand: 'NESTASIA', title: 'Textured Bohemian Throw', price: 2250, image: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=800&auto=format&fit=crop&q=80', category: 'Textiles' }
        ]
      },
      weekend: {
        occasionName: '🛏️ Bedroom Sanctuary',
        icon: 'moon',
        stylingTip: 'Place on the bedside table against botanical sateen bedsheets for a calming morning wake-up.',
        canvasHeroImage: 'https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?w=800&auto=format&fit=crop&q=80',
        canvasBottomImage: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&auto=format&fit=crop&q=80',
        canvasShoesImage: 'https://images.unsplash.com/photo-1603006905003-be475563bc59?w=800&auto=format&fit=crop&q=80',
        pairings: [
          { id: 'prod-h-ddecor-sheets', brand: "D'DECOR", title: 'Cotton Sateen Bed Sheet Set', price: 3499, image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&auto=format&fit=crop&q=80', category: 'Bedding' },
          { id: 'prod-h-westside-candle', brand: 'WESTSIDE HOME', title: 'Scented Soy Amber Candle', price: 799, image: 'https://images.unsplash.com/photo-1603006905003-be475563bc59?w=800&auto=format&fit=crop&q=80', category: 'Fragrance' }
        ]
      },
      evening: {
        occasionName: '🪴 Balcony / Cozy Corner',
        icon: 'sun',
        stylingTip: 'Serve tapas on handcrafted mango wood board beside ceramic ribbed vase under fairy lights.',
        canvasHeroImage: 'https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?w=800&auto=format&fit=crop&q=80',
        canvasBottomImage: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=800&auto=format&fit=crop&q=80',
        canvasShoesImage: 'https://images.unsplash.com/photo-1590736969955-71cc94801759?w=800&auto=format&fit=crop&q=80',
        pairings: [
          { id: 'prod-h-nestasia-throw', brand: 'NESTASIA', title: 'Textured Bohemian Throw', price: 2250, image: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=800&auto=format&fit=crop&q=80', category: 'Textiles' },
          { id: 'prod-h-ellementry-board', brand: 'ELLEMENTRY', title: 'Mango Wood Serving Board', price: 1890, image: 'https://images.unsplash.com/photo-1590736969955-71cc94801759?w=800&auto=format&fit=crop&q=80', category: 'Kitchen' }
        ]
      }
    }
  },
  {
    id: 'prod-h-ddecor-sheets',
    category: 'HOME & LIVING',
    subCategory: 'Bedding',
    brand: "D'DECOR",
    title: '350 TC Cotton Sateen Bed Sheet Set (Sage Botanical)',
    price: 3499,
    originalPrice: 4999,
    discount: '30% OFF',
    rating: 4.6,
    ratingCount: 85,
    image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&auto=format&fit=crop&q=80',
    tags: ['Bedsheet', 'Cotton Sateen', 'Sage', 'Bedding'],
    styleStudioConfig: {
      office: {
        occasionName: '🛋️ Living Room Accent',
        icon: 'home',
        stylingTip: 'Pair botanical sage tones with textured mustard throws and ceramic ribbed accents for curated harmony.',
        canvasHeroImage: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&auto=format&fit=crop&q=80',
        canvasBottomImage: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=800&auto=format&fit=crop&q=80',
        canvasShoesImage: 'https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?w=800&auto=format&fit=crop&q=80',
        pairings: [
          { id: 'prod-h-nestasia-throw', brand: 'NESTASIA', title: 'Textured Bohemian Throw', price: 2250, image: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=800&auto=format&fit=crop&q=80', category: 'Textiles' },
          { id: 'prod-h-hm-vase', brand: 'H&M HOME', title: 'Ceramic Ribbed Vase', price: 1499, image: 'https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?w=800&auto=format&fit=crop&q=80', category: 'Decor' }
        ]
      },
      weekend: {
        occasionName: '🛏️ Bedroom Sanctuary',
        icon: 'moon',
        stylingTip: 'Smooth lustrous sateen sheets paired with warm vanilla amber candlelight for restful weekend sleep.',
        canvasHeroImage: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&auto=format&fit=crop&q=80',
        canvasBottomImage: 'https://images.unsplash.com/photo-1603006905003-be475563bc59?w=800&auto=format&fit=crop&q=80',
        canvasShoesImage: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=800&auto=format&fit=crop&q=80',
        pairings: [
          { id: 'prod-h-westside-candle', brand: 'WESTSIDE HOME', title: 'Scented Soy Amber Candle', price: 799, image: 'https://images.unsplash.com/photo-1603006905003-be475563bc59?w=800&auto=format&fit=crop&q=80', category: 'Fragrance' },
          { id: 'prod-h-nestasia-throw', brand: 'NESTASIA', title: 'Textured Bohemian Throw', price: 2250, image: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=800&auto=format&fit=crop&q=80', category: 'Textiles' }
        ]
      },
      evening: {
        occasionName: '🪴 Balcony / Cozy Corner',
        icon: 'sun',
        stylingTip: 'Layer with ceramic vase and mango wood boards for a cozy reading nook.',
        canvasHeroImage: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&auto=format&fit=crop&q=80',
        canvasBottomImage: 'https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?w=800&auto=format&fit=crop&q=80',
        canvasShoesImage: 'https://images.unsplash.com/photo-1590736969955-71cc94801759?w=800&auto=format&fit=crop&q=80',
        pairings: [
          { id: 'prod-h-hm-vase', brand: 'H&M HOME', title: 'Ceramic Ribbed Vase', price: 1499, image: 'https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?w=800&auto=format&fit=crop&q=80', category: 'Decor' },
          { id: 'prod-h-ellementry-board', brand: 'ELLEMENTRY', title: 'Mango Wood Serving Board', price: 1890, image: 'https://images.unsplash.com/photo-1590736969955-71cc94801759?w=800&auto=format&fit=crop&q=80', category: 'Kitchen' }
        ]
      }
    }
  },
  {
    id: 'prod-h-westside-candle',
    category: 'HOME & LIVING',
    subCategory: 'Fragrance',
    brand: 'WESTSIDE HOME',
    title: 'Scented Soy Candle (Amber & Vanilla)',
    price: 799,
    originalPrice: 799,
    discount: '',
    rating: 4.5,
    ratingCount: 210,
    image: 'https://images.unsplash.com/photo-1603006905003-be475563bc59?w=800&auto=format&fit=crop&q=80',
    tags: ['Candle', 'Amber', 'Vanilla', 'Fragrance'],
    styleStudioConfig: {
      office: {
        occasionName: '🛋️ Living Room Accent',
        icon: 'home',
        stylingTip: 'Infuse calming amber and warm vanilla notes across the living room next to sculptural ceramic decor.',
        canvasHeroImage: 'https://images.unsplash.com/photo-1603006905003-be475563bc59?w=800&auto=format&fit=crop&q=80',
        canvasBottomImage: 'https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?w=800&auto=format&fit=crop&q=80',
        canvasShoesImage: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=800&auto=format&fit=crop&q=80',
        pairings: [
          { id: 'prod-h-hm-vase', brand: 'H&M HOME', title: 'Ceramic Ribbed Vase', price: 1499, image: 'https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?w=800&auto=format&fit=crop&q=80', category: 'Decor' },
          { id: 'prod-h-nestasia-throw', brand: 'NESTASIA', title: 'Textured Bohemian Throw', price: 2250, image: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=800&auto=format&fit=crop&q=80', category: 'Textiles' }
        ]
      },
      weekend: {
        occasionName: '🛏️ Bedroom Sanctuary',
        icon: 'moon',
        stylingTip: 'Light 30 minutes before bedtime on the nightstand for peaceful sleep transition.',
        canvasHeroImage: 'https://images.unsplash.com/photo-1603006905003-be475563bc59?w=800&auto=format&fit=crop&q=80',
        canvasBottomImage: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&auto=format&fit=crop&q=80',
        canvasShoesImage: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=800&auto=format&fit=crop&q=80',
        pairings: [
          { id: 'prod-h-ddecor-sheets', brand: "D'DECOR", title: 'Cotton Sateen Bed Sheet Set', price: 3499, image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&auto=format&fit=crop&q=80', category: 'Bedding' },
          { id: 'prod-h-nestasia-throw', brand: 'NESTASIA', title: 'Textured Bohemian Throw', price: 2250, image: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=800&auto=format&fit=crop&q=80', category: 'Textiles' }
        ]
      },
      evening: {
        occasionName: '🪴 Balcony / Cozy Corner',
        icon: 'sun',
        stylingTip: 'Create ambient mood lighting on a mango wood serving board for outdoor patio dinners.',
        canvasHeroImage: 'https://images.unsplash.com/photo-1603006905003-be475563bc59?w=800&auto=format&fit=crop&q=80',
        canvasBottomImage: 'https://images.unsplash.com/photo-1590736969955-71cc94801759?w=800&auto=format&fit=crop&q=80',
        canvasShoesImage: 'https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?w=800&auto=format&fit=crop&q=80',
        pairings: [
          { id: 'prod-h-ellementry-board', brand: 'ELLEMENTRY', title: 'Mango Wood Serving Board', price: 1890, image: 'https://images.unsplash.com/photo-1590736969955-71cc94801759?w=800&auto=format&fit=crop&q=80', category: 'Kitchen' },
          { id: 'prod-h-hm-vase', brand: 'H&M HOME', title: 'Ceramic Ribbed Vase', price: 1499, image: 'https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?w=800&auto=format&fit=crop&q=80', category: 'Decor' }
        ]
      }
    }
  },
  {
    id: 'prod-h-nestasia-throw',
    category: 'HOME & LIVING',
    subCategory: 'Textiles',
    brand: 'NESTASIA',
    title: 'Textured Bohemian Throw Blanket (Mustard Yellow)',
    price: 2250,
    originalPrice: 3000,
    discount: '25% OFF',
    rating: 4.8,
    ratingCount: 64,
    image: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=800&auto=format&fit=crop&q=80',
    tags: ['Throw', 'Bohemian', 'Mustard', 'Textiles'],
    styleStudioConfig: {
      office: {
        occasionName: '🛋️ Living Room Accent',
        icon: 'home',
        stylingTip: 'Drape artfully over the arm of a neutral linen armchair next to ceramic vase decor.',
        canvasHeroImage: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=800&auto=format&fit=crop&q=80',
        canvasBottomImage: 'https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?w=800&auto=format&fit=crop&q=80',
        canvasShoesImage: 'https://images.unsplash.com/photo-1603006905003-be475563bc59?w=800&auto=format&fit=crop&q=80',
        pairings: [
          { id: 'prod-h-hm-vase', brand: 'H&M HOME', title: 'Ceramic Ribbed Vase', price: 1499, image: 'https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?w=800&auto=format&fit=crop&q=80', category: 'Decor' },
          { id: 'prod-h-westside-candle', brand: 'WESTSIDE HOME', title: 'Scented Soy Amber Candle', price: 799, image: 'https://images.unsplash.com/photo-1603006905003-be475563bc59?w=800&auto=format&fit=crop&q=80', category: 'Fragrance' }
        ]
      },
      weekend: {
        occasionName: '🛏️ Bedroom Sanctuary',
        icon: 'moon',
        stylingTip: 'Layer across botanical sage bedsheets for tactile warmth and visual richness.',
        canvasHeroImage: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=800&auto=format&fit=crop&q=80',
        canvasBottomImage: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&auto=format&fit=crop&q=80',
        canvasShoesImage: 'https://images.unsplash.com/photo-1603006905003-be475563bc59?w=800&auto=format&fit=crop&q=80',
        pairings: [
          { id: 'prod-h-ddecor-sheets', brand: "D'DECOR", title: 'Cotton Sateen Bed Sheet Set', price: 3499, image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&auto=format&fit=crop&q=80', category: 'Bedding' },
          { id: 'prod-h-westside-candle', brand: 'WESTSIDE HOME', title: 'Scented Soy Amber Candle', price: 799, image: 'https://images.unsplash.com/photo-1603006905003-be475563bc59?w=800&auto=format&fit=crop&q=80', category: 'Fragrance' }
        ]
      },
      evening: {
        occasionName: '🪴 Balcony / Cozy Corner',
        icon: 'sun',
        stylingTip: 'Snuggle under during cool balcony evenings with appetizers on handcrafted mango wood board.',
        canvasHeroImage: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=800&auto=format&fit=crop&q=80',
        canvasBottomImage: 'https://images.unsplash.com/photo-1590736969955-71cc94801759?w=800&auto=format&fit=crop&q=80',
        canvasShoesImage: 'https://images.unsplash.com/photo-1603006905003-be475563bc59?w=800&auto=format&fit=crop&q=80',
        pairings: [
          { id: 'prod-h-ellementry-board', brand: 'ELLEMENTRY', title: 'Mango Wood Serving Board', price: 1890, image: 'https://images.unsplash.com/photo-1590736969955-71cc94801759?w=800&auto=format&fit=crop&q=80', category: 'Kitchen' },
          { id: 'prod-h-westside-candle', brand: 'WESTSIDE HOME', title: 'Scented Soy Amber Candle', price: 799, image: 'https://images.unsplash.com/photo-1603006905003-be475563bc59?w=800&auto=format&fit=crop&q=80', category: 'Fragrance' }
        ]
      }
    }
  },
  {
    id: 'prod-h-ellementry-board',
    category: 'HOME & LIVING',
    subCategory: 'Kitchen',
    brand: 'ELLEMENTRY',
    title: 'Handcrafted Mango Wood Serving Board',
    price: 1890,
    originalPrice: 1890,
    discount: '',
    rating: 4.6,
    ratingCount: 48,
    image: 'https://images.unsplash.com/photo-1590736969955-71cc94801759?w=800&auto=format&fit=crop&q=80',
    tags: ['Serving Board', 'Mango Wood', 'Handcrafted', 'Kitchen'],
    styleStudioConfig: {
      office: {
        occasionName: '🛋️ Living Room Accent',
        icon: 'home',
        stylingTip: 'Serve cheeses and artisan crackers on raw mango wood with ceramic vase centerpiece.',
        canvasHeroImage: 'https://images.unsplash.com/photo-1590736969955-71cc94801759?w=800&auto=format&fit=crop&q=80',
        canvasBottomImage: 'https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?w=800&auto=format&fit=crop&q=80',
        canvasShoesImage: 'https://images.unsplash.com/photo-1603006905003-be475563bc59?w=800&auto=format&fit=crop&q=80',
        pairings: [
          { id: 'prod-h-hm-vase', brand: 'H&M HOME', title: 'Ceramic Ribbed Vase', price: 1499, image: 'https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?w=800&auto=format&fit=crop&q=80', category: 'Decor' },
          { id: 'prod-h-westside-candle', brand: 'WESTSIDE HOME', title: 'Scented Soy Amber Candle', price: 799, image: 'https://images.unsplash.com/photo-1603006905003-be475563bc59?w=800&auto=format&fit=crop&q=80', category: 'Fragrance' }
        ]
      },
      weekend: {
        occasionName: '🛏️ Bedroom Sanctuary',
        icon: 'moon',
        stylingTip: 'Use for serving Sunday breakfast in bed over botanical cotton sateen sheets.',
        canvasHeroImage: 'https://images.unsplash.com/photo-1590736969955-71cc94801759?w=800&auto=format&fit=crop&q=80',
        canvasBottomImage: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&auto=format&fit=crop&q=80',
        canvasShoesImage: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=800&auto=format&fit=crop&q=80',
        pairings: [
          { id: 'prod-h-ddecor-sheets', brand: "D'DECOR", title: 'Cotton Sateen Bed Sheet Set', price: 3499, image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&auto=format&fit=crop&q=80', category: 'Bedding' },
          { id: 'prod-h-nestasia-throw', brand: 'NESTASIA', title: 'Textured Bohemian Throw', price: 2250, image: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=800&auto=format&fit=crop&q=80', category: 'Textiles' }
        ]
      },
      evening: {
        occasionName: '🪴 Balcony / Cozy Corner',
        icon: 'sun',
        stylingTip: 'Outdoor patio charcuterie platter paired with cozy textured throw and amber candle glow.',
        canvasHeroImage: 'https://images.unsplash.com/photo-1590736969955-71cc94801759?w=800&auto=format&fit=crop&q=80',
        canvasBottomImage: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=800&auto=format&fit=crop&q=80',
        canvasShoesImage: 'https://images.unsplash.com/photo-1603006905003-be475563bc59?w=800&auto=format&fit=crop&q=80',
        pairings: [
          { id: 'prod-h-nestasia-throw', brand: 'NESTASIA', title: 'Textured Bohemian Throw', price: 2250, image: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=800&auto=format&fit=crop&q=80', category: 'Textiles' },
          { id: 'prod-h-westside-candle', brand: 'WESTSIDE HOME', title: 'Scented Soy Amber Candle', price: 799, image: 'https://images.unsplash.com/photo-1603006905003-be475563bc59?w=800&auto=format&fit=crop&q=80', category: 'Fragrance' }
        ]
      }
    }
  }
];

// Initial default Wishlist contains the 4 Stitch showcase products
export const INITIAL_WISHLIST_ITEMS = [
  ALL_PRODUCTS.find(p => p.id === 'prod-w-mango-blouse'),
  ALL_PRODUCTS.find(p => p.id === 'prod-w-zara-trousers'),
  ALL_PRODUCTS.find(p => p.id === 'prod-w-hm-skirt'),
  ALL_PRODUCTS.find(p => p.id === 'prod-w-ck-pumps')
].filter(Boolean);

export const ALL_CATALOG_ITEMS = ALL_PRODUCTS;
