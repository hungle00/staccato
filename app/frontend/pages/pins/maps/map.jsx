import React, { useEffect, useRef, useState } from 'react'
import mapboxgl from 'mapbox-gl'
import Marker from './marker'
import Popup from './popup'

import 'mapbox-gl/dist/mapbox-gl.css';

function Map({ pins }) {
  const mapRef = useRef(null);
  const mapContainerRef = useRef(null);
  const [, forceRender] = useState(0);

  const mapboxAccessToken = document
    .querySelector('meta[name="mapbox_access_token"]')
    ?.getAttribute("content");

  useEffect(() => {
    mapboxgl.accessToken = mapboxAccessToken

    mapRef.current = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/mapbox/streets-v12",
      center: [105.849998, 21.028511],
      zoom: 7
    });

    // force rerender so Popup components can access map
    forceRender((v) => v + 1);

    return () => {
      mapRef.current?.remove();
    };
  }, []);

  const handleMarkerClick = (pin) => {
    setActiveFeature(pin)
  }

  return (
    <>
      <div
        ref={mapContainerRef}
        className="h-full w-full rounded-none lg:rounded-l-3xl"
      />
      {/* Render markers + popups */}
      {mapRef.current &&
        pins.map((pin) => (
          <Popup
            key={pin.id}
            map={mapRef.current}
            pin={pin}
          />
        ))}
    </>
  );
}

export default Map;
