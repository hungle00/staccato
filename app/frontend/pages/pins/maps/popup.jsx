import { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";

/* ----------------------------- Popup Component ----------------------------- */

export default function Popup({ map, pin }) {
  useEffect(() => {
    if (!map) return;

    // Popup content
    const popupHtml = `
      <div class="p-1">
        <h3 class="text-sm font-bold text-gray-900">
          ${pin.name}
        </h3>

        ${
          pin.location
            ? `
          <p class="mt-1 text-xs text-gray-500">
            ${pin.location}
          </p>
        `
            : ""
        }

        ${
          pin.description
            ? `
          <p class="mt-2 text-sm text-gray-700">
            ${pin.description}
          </p>
        `
            : ""
        }
      </div>
    `;

    // Create popup
    const popup = new mapboxgl.Popup({
      offset: 25,
      closeButton: false,
    }).setHTML(popupHtml);

    // Create marker element
    const el = document.createElement("button");

    el.className =
      "h-4 w-4 rounded-full bg-blue-600 border-2 border-white shadow-lg transition hover:scale-125";

    // Create marker
    const marker = new mapboxgl.Marker(el)
      .setLngLat([pin.longitude, pin.latitude])
      .setPopup(popup)
      .addTo(map);

    // Open popup on hover
    el.addEventListener("mouseenter", () => {
      marker.togglePopup();
    });

    // Cleanup
    return () => {
      marker.remove();
      popup.remove();
    };
  }, [map, pin]);

  return null;
}
