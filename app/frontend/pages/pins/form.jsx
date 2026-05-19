import { Form as InertiaForm } from '@inertiajs/react'
import { useEffect, useRef, useState } from "react";

export default function Form({ pin, submitText, ...formProps }) {
  const [query, setQuery] = useState(pin.location || "");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const wrapperRef = useRef(null);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target)
      ) {
        setShowResults(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Debounced search
  useEffect(() => {
    if (!query || query.length < 3) {
      setResults([]);
      return;
    }

    const timeout = setTimeout(() => {
      searchLocation(query);
    }, 300);

    return () => clearTimeout(timeout);
  }, [query]);

  // Search Mapbox API
  async function searchLocation(searchQuery) {
    try {
      setLoading(true);

      const mapboxAccessToken = document
        .querySelector('meta[name="mapbox_access_token"]')
        ?.getAttribute("content");

      const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
        searchQuery
      )}.json?access_token=${mapboxAccessToken}&autocomplete=true&limit=5&country=vn`;

      const res = await fetch(url);
      const data = await res.json();

      setResults(data.features || []);
      setShowResults(true);
    } catch (err) {
      console.error("Search error:", err);
    } finally {
      setLoading(false);
    }
  }

  // Select result
  function selectLocation(feature) {
    setQuery(feature.place_name);
    setShowResults(false);
  }

  return (
    <InertiaForm
      transform={data => ({ pin: data })}
      className="contents"
      {...formProps}
    >
      {({ errors, processing }) => (
        <>
          <div className="my-5">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              defaultValue={pin.name}
              className="block shadow rounded-md border border-gray-400 outline-none px-3 py-2 mt-2 w-full"
            />
            {errors.name && (
              <div className="text-red-500 px-3 py-2 font-medium">
                {errors.name.join(', ')}
              </div>
            )}
          </div>


          {/* Location Search */}
          <div className="my-5" ref={wrapperRef}>
            <label
              htmlFor="location"
              className="mb-2 block text-sm font-medium text-gray-700"
            >
              Location
            </label>

            <div className="relative">
              <input
                type="text"
                name="location"
                id="location"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onFocus={() => {
                  if (results.length > 0) {
                    setShowResults(true);
                  }
                }}
                placeholder="Search location..."
                autoComplete="off"
                className="block w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500"
              />

              {/* Loading */}
              {loading && (
                <div className="absolute right-4 top-1/2 -translate-y-1/2">
                  <div className="h-5 w-5 animate-spin rounded-full border-2 border-gray-300 border-t-blue-600" />
                </div>
              )}

              {/* Dropdown */}
              {showResults && results.length > 0 && (
                <div className="absolute z-20 mt-2 max-h-72 w-full overflow-y-auto rounded-2xl border border-gray-200 bg-white shadow-xl">
                  {results.map((feature) => (
                    <button
                      key={feature.id}
                      type="button"
                      onClick={() => selectLocation(feature)}
                      className="w-full border-b border-gray-100 px-4 py-3 text-left transition last:border-none hover:bg-gray-50"
                    >
                      <div className="font-medium text-gray-900">
                        {feature.text}
                      </div>

                      <div className="mt-1 text-sm text-gray-500">
                        {feature.place_name}
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {errors.location && (
              <div className="mt-2 text-sm font-medium text-red-500">
                {errors.location.join(", ")}
              </div>
            )}
          </div>

          <div className="my-5">
            <label htmlFor="description">Description</label>
            <textarea
              name="description"
              id="description"
              defaultValue={pin.description}
              rows="4"
              className="block shadow rounded-md border border-gray-400 outline-none px-3 py-2 mt-2 w-full"
            />
            {errors.description && (
              <div className="text-red-500 px-3 py-2 font-medium">
                {errors.description.join(', ')}
              </div>
            )}
          </div>

          <div className="my-5">
            <label htmlFor="published">Published</label>
            <input
              type="checkbox"
              name="published"
              id="published"
              defaultChecked={pin.published}
              className="block mt-2 h-5 w-5"
            />
            {errors.published && (
              <div className="text-red-500 px-3 py-2 font-medium">
                {errors.published.join(', ')}
              </div>
            )}
          </div>

          <div className="inline">
            <button
              type="submit"
              disabled={processing}
              className="rounded-lg py-3 px-5 bg-blue-600 text-white inline-block font-medium cursor-pointer"
            >
              {submitText}
            </button>
          </div>
        </>
      )}
    </InertiaForm>
  )
}
