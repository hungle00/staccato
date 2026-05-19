import React, { useEffect, useRef } from 'react'
import mapboxgl from 'mapbox-gl'

import 'mapbox-gl/dist/mapbox-gl.css';

function Map() {
  const mapRef = useRef(null);
  const mapContainerRef = useRef(null);
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

    return () => {
      mapRef.current?.remove();
    };
  }, []);

  return (
    <div
      ref={mapContainerRef}
      className="h-full w-full rounded-none lg:rounded-l-3xl"
    />
  );
}

export default Map;
