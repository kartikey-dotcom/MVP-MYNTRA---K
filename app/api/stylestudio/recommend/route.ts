import { NextRequest, NextResponse } from "next/server";
import { StyleStudioLLMResponseSchema, StyleStudioResponse } from "@/lib/schemas/styleStudioSchema";

const SYSTEM_PROMPT = `
You are the Chief AI Fashion Director and Lead Personal Stylist at Myntra.
Your job is to apply the "Rule of 3" (proving an item works across 3 distinct real-world occasions) to eliminate user purchase hesitation and styling anxiety.

STYLING & REASONING RULES:
1. CATALOG GROUNDING (CRITICAL): You must ONLY select paired items from the provided Candidate Catalog Pool. Never invent IDs, prices, or image URLs.
2. SILHOUETTE BALANCE:
   - Fitted/Slinky Top -> Pair with Wide-Leg, Straight-Fit, or Pleated Bottoms.
   - Oversized/Boxy Top -> Pair with Slim-Fit, Structured, or Tapered Bottoms.
3. COLOR HARMONY:
   - Earth tones (Brown/Olive) -> Pair with Warm Neutrals (Sand, Ecru, Cream) or Contrast Midnight Black.
   - Vibrant/Bold colors -> Anchor with muted monochrome companions.
4. HYPERLOCAL CLIMATE ADAPTATION:
   - Cool/Cold (< 18°C, e.g., Delhi winter): Include blazers, cardigans, trench coats, closed-toe footwear.
   - Warm/Humid (> 25°C, e.g., Mumbai/Goa): Prioritize linen, breathable cotton, open-toe sandals, lightweight skirts.
5. THE RULE OF 3 JUSTIFICATION:
   - Calculate Cost-Per-Wear = (Hero Item Price + Look Total) / (Estimated Wears).
   - Write sharp, punchy "Pro Styling Notes" (no generic fluff, mention tucking, cuffing, or layering techniques).

OUTPUT FORMAT: Return STRICT JSON matching the schema provided. No markdown wrapping, no introductory text.
`;

const OCCASION_META: Record<string, { name: string; icon: any; wears: number; baseTip: string }> = {
  office: {
    name: "Office & Smart Casual",
    icon: "Briefcase",
    wears: 38,
    baseTip: "Tuck into high-rise tailored trousers and anchor with pointed stiletto pumps for sharp corporate polish."
  },
  casual: {
    name: "Weekend Casual & Brunch",
    icon: "Coffee",
    wears: 28,
    baseTip: "Half-tuck into vintage wash straight-leg denim and pair with leather slides for relaxed daylight charm."
  },
  evening: {
    name: "Evening Out & Dinners",
    icon: "Wine",
    wears: 18,
    baseTip: "Pair with a liquid satin bias-cut midi skirt and delicate ankle-strap heels for romantic evening elegance."
  },
  travel: {
    name: "Airport & Travel Chic",
    icon: "Plane",
    wears: 22,
    baseTip: "Combine with wrinkle-resistant stretch travel trousers and cushioned slip-ons for first-class airport comfort."
  },
  festive: {
    name: "Festive & Wedding Guest",
    icon: "PartyPopper",
    wears: 12,
    baseTip: "Drape with an artisanal metallic zari maxi skirt and royal embellished juttis for wedding celebrations."
  },
  vacation: {
    name: "Resort & Vacation",
    icon: "Palmtree",
    wears: 16,
    baseTip: "Match with breathable pure linen culottes and woven artisan espadrilles for sun-kissed resort strolls."
  },
  college: {
    name: "Campus & College",
    icon: "GraduationCap",
    wears: 45,
    baseTip: "Style casually with utility cargo denim and high-contrast retro court sneakers for effortless campus days."
  },
  date: {
    name: "Romantic Date Night",
    icon: "Heart",
    wears: 20,
    baseTip: "Accentuate silhouettes with fluid champagne satin and delicate strappy heels for romantic candlelight dinners."
  }
};

function generateDeterministicPairings(
  heroItem: any,
  city: any,
  occasions: string[],
  catalogPool: any[]
): StyleStudioResponse {
  const cityName = city?.name || "Mumbai";
  const temp = city?.temp ? Number(city.temp) : 28;

  let weatherNote = "Lightweight breathable fabrics recommended for coastal humidity.";
  if (temp < 18) {
    weatherNote = `Adapted for ${cityName} (${temp}°C): Layered with wool-blend outerwear and structured silhouettes.`;
  } else if (temp > 26) {
    weatherNote = `Adapted for ${cityName} (${temp}°C): Breathable linen and open-toe footwear to combat humidity.`;
  } else {
    weatherNote = `Adapted for ${cityName} (${temp}°C): Balanced cotton-denim layering for pleasant climate.`;
  }

  const generatedOccasions = occasions.slice(0, 3).map((occKey) => {
    const meta = OCCASION_META[occKey] || OCCASION_META.office;
    
    // Select grounded candidates from pool
    const pool = Array.isArray(catalogPool) && catalogPool.length > 0 ? catalogPool : [];
    const bottomCandidate = pool.find((p) => p.category === "Bottomwear" || p.id.includes("trouser") || p.id.includes("skirt")) || {
      skuId: "prod-w-zara-trousers",
      brand: "ZARA",
      title: "High-Waist Tailored Trousers",
      category: "Bottomwear",
      color: "Beige",
      price: 2990,
      originalPrice: 3990,
      image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=800&auto=format&fit=crop&q=80",
      stylingRole: "Balances top volume with structured elongation"
    };

    const shoesCandidate = pool.find((p) => p.category === "Footwear" || p.id.includes("pump") || p.id.includes("shoe")) || {
      skuId: "prod-w-ck-pumps",
      brand: "Charles & Keith",
      title: "Pointed Stiletto Pumps",
      category: "Footwear",
      color: "Nude",
      price: 4200,
      originalPrice: 5500,
      image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=800&auto=format&fit=crop&q=80",
      stylingRole: "Elevates stance and elongates overall silhouette"
    };

    const totalBundlePrice = (heroItem?.price || 2490) + bottomCandidate.price + shoesCandidate.price;
    const wears = meta.wears;
    const cpw = Math.round(totalBundlePrice / wears);

    return {
      occasionId: occKey,
      occasionName: meta.name,
      iconName: meta.icon,
      weatherAdjustmentNote: weatherNote,
      stylingTip: `${meta.baseTip} (${weatherNote})`,
      costPerWear: {
        estimatedWearsPerYear: wears,
        calculatedCostPerWear: cpw,
        justificationText: `Based on ${wears} wears/yr across seasonal rotations`
      },
      pairings: [
        {
          skuId: bottomCandidate.id || bottomCandidate.skuId || "pair-bottom",
          brand: bottomCandidate.brand || "ZARA",
          title: bottomCandidate.title || "Tailored Trousers",
          category: "Bottomwear" as const,
          color: bottomCandidate.color || "Neutral",
          price: bottomCandidate.price || 2990,
          originalPrice: bottomCandidate.originalPrice || 3990,
          image: bottomCandidate.image || "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=800&auto=format&fit=crop&q=80",
          stylingRole: "Balances top volume with structured elongation"
        },
        {
          skuId: shoesCandidate.id || shoesCandidate.skuId || "pair-shoes",
          brand: shoesCandidate.brand || "Charles & Keith",
          title: shoesCandidate.title || "Pointed Pumps",
          category: "Footwear" as const,
          color: shoesCandidate.color || "Nude",
          price: shoesCandidate.price || 4200,
          originalPrice: shoesCandidate.originalPrice || 5500,
          image: shoesCandidate.image || "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=800&auto=format&fit=crop&q=80",
          stylingRole: "Anchors look with refined tonal harmony"
        }
      ]
    };
  });

  return {
    heroSkuId: heroItem?.id || "hero-sku",
    cityName,
    temperatureCelsius: temp,
    versatilityScore: 94,
    occasions: generatedOccasions as any
  };
}

export async function POST(req: NextRequest) {
  let body: any = {};
  try {
    body = await req.json();
    const { heroItem, city, occasions, catalogPool } = body;

    if (!heroItem || !city || !occasions) {
      return NextResponse.json({ error: "Missing required payload attributes" }, { status: 400 });
    }

    const prompt = `
    HERO ITEM:
    ${JSON.stringify(heroItem, null, 2)}

    SELECTED CITY & CLIMATE:
    City: ${city.name}, Temp: ${city.temp}°C (${city.climate || "Normal"})

    TARGET OCCASIONS (Pick exactly these 3):
    ${occasions.join(", ")}

    CANDIDATE CATALOG POOL TO PICK FROM:
    ${JSON.stringify(catalogPool || [], null, 2)}
    `;

    let generatedData: any;

    if (process.env.OPENAI_API_KEY) {
      const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        },
        body: JSON.stringify({
          model: "gpt-4o-mini",
          response_format: { type: "json_object" },
          messages: [
            { role: "system", content: SYSTEM_PROMPT },
            { role: "user", content: prompt }
          ],
          temperature: 0.4,
        }),
      });

      const rawJson = await response.json();
      generatedData = JSON.parse(rawJson.choices[0].message.content);
    } else {
      generatedData = generateDeterministicPairings(heroItem, city, occasions, catalogPool || []);
    }

    const validated = StyleStudioLLMResponseSchema.parse(generatedData);
    return NextResponse.json(validated);

  } catch (error: any) {
    console.error("StyleStudio LLM Fallback Engaged:", error);
    const fallback = generateDeterministicPairings(body?.heroItem, body?.city, body?.occasions || ["office", "casual", "evening"], body?.catalogPool || []);
    return NextResponse.json(fallback, { status: 200 });
  }
}
