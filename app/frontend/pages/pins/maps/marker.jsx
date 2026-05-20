import { useEffect } from "react";
import mapboxgl from "mapbox-gl";

export default function Marker({ map, pin }) {
  useEffect(() => {
    if (!map) return;

    // Create marker element
    const el = document.createElement("div");

    el.className =
      "h-4 w-4 rounded-full bg-blue-600 border-2 border-white shadow-lg";

    // Create marker
    const marker = new mapboxgl.Marker(el)
      .setLngLat([pin.longitude, pin.latitude])
      .addTo(map);

    // Cleanup
    return () => {
      marker.remove();
    };
  }, [map, pin]);

  return null;
}
