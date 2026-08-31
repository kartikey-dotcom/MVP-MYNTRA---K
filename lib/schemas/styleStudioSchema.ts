import { z } from "zod";

export const PairedItemSchema = z.object({
  skuId: z.string().describe("Must match an exact ID from the provided catalog pool"),
  brand: z.string(),
  title: z.string(),
  category: z.enum(["Bottomwear", "Footwear", "Outerwear", "Accessory", "Topwear"]),
  color: z.string(),
  price: z.number(),
  originalPrice: z.number(),
  image: z.string().url(),
  stylingRole: z.string().describe("Why this item was chosen, e.g., 'Balances top volume'")
});

export const OccasionLookSchema = z.object({
  occasionId: z.string(),
  occasionName: z.string(),
  iconName: z.enum(["Briefcase", "Coffee", "Wine", "Plane", "PartyPopper", "Palmtree", "GraduationCap", "Heart"]),
  weatherAdjustmentNote: z.string().describe("Specific adjustment made for the selected city and temperature"),
  stylingTip: z.string().describe("Actionable 2-sentence advice on how to tuck, layer, or accessorize"),
  costPerWear: z.object({
    estimatedWearsPerYear: z.number().min(5).max(60),
    calculatedCostPerWear: z.number(),
    justificationText: z.string()
  }),
  pairings: z.array(PairedItemSchema).min(2).max(3)
});

export const StyleStudioLLMResponseSchema = z.object({
  heroSkuId: z.string(),
  cityName: z.string(),
  temperatureCelsius: z.number(),
  versatilityScore: z.number().min(80).max(99).describe("Versatility rating out of 100"),
  occasions: z.array(OccasionLookSchema).length(3)
});

export type PairedItem = z.infer<typeof PairedItemSchema>;
export type OccasionLook = z.infer<typeof OccasionLookSchema>;
export type StyleStudioResponse = z.infer<typeof StyleStudioLLMResponseSchema>;
