import { useState, useEffect, useMemo } from "react";
import { StyleStudioResponse } from "@/lib/schemas/styleStudioSchema";

export function useStyleStudio(heroItem: any, selectedCity: any, selectedOccasions: string[], catalogPool: any[]) {
  const [data, setData] = useState<StyleStudioResponse | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [activeOccasionIndex, setActiveOccasionIndex] = useState<number>(0);
  const [cache, setCache] = useState<Record<string, StyleStudioResponse>>({});

  const cacheKey = useMemo(() => {
    if (!heroItem || !selectedCity) return "";
    return `${heroItem.id}_${selectedCity.name || selectedCity}_${[...selectedOccasions].sort().join("-")}`;
  }, [heroItem?.id, selectedCity, selectedOccasions]);

  useEffect(() => {
    if (!cacheKey) return;

    if (cache[cacheKey]) {
      setData(cache[cacheKey]);
      setLoading(false);
      return;
    }

    let isMounted = true;
    setLoading(true);

    fetch("/api/stylestudio/recommend", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        heroItem,
        city: selectedCity,
        occasions: selectedOccasions,
        catalogPool
      })
    })
      .then((res) => res.json())
      .then((result) => {
        if (isMounted) {
          setData(result);
          setCache((prev) => ({ ...prev, [cacheKey]: result }));
          setLoading(false);
        }
      })
      .catch((err) => {
        console.error("Failed to fetch pairings:", err);
        if (isMounted) setLoading(false);
      });

    return () => { isMounted = false; };
  }, [cacheKey]);

  return {
    data,
    loading,
    activeOccasion: data?.occasions[activeOccasionIndex] || null,
    activeOccasionIndex,
    setActiveOccasionIndex
  };
}
