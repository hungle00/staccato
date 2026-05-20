import { Head, Link, usePage } from '@inertiajs/react'
import { Fragment } from 'react'
import Pin from './pin'
import Map from './maps/map'

export default function Index({ pins }) {
  const { flash } = usePage()

  return (
    <>
      <Head title="Pins" />
      <div className="h-screen bg-gray-100">
        <div className="flex h-full flex-col lg:flex-row">
          {/* LEFT SIDEBAR */}
          <div className="w-full overflow-y-auto border-b border-gray-200 bg-white lg:w-[420px] lg:border-b-0 lg:border-r">
            {/* Header */}
            <div className="sticky top-0 z-10 border-b border-gray-100 bg-white px-6 py-5">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">
                    Locations
                  </h1>

                  <p className="mt-1 text-sm text-gray-500">
                    Browse all available pins
                  </p>
                </div>

                <Link
                  href="/pins/new"
                  className="rounded-xl bg-blue-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-blue-700"
                >
                  New pin
                </Link>
              </div>

              {/* Search */}
              <div className="mt-4">
                <input
                  type="text"
                  placeholder="Search locations..."
                  className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none transition focus:border-black focus:bg-white"
                />
              </div>
            </div>

            {/* Pins List */}
            <div className="space-y-3 p-4">
              {pins.map((pin) => (
                <button
                  key={pin.id}
                  className="w-full rounded-2xl border border-gray-100 bg-white p-4 text-left transition hover:border-gray-300 hover:bg-gray-50"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h2 className="font-semibold text-gray-900">
                        {pin.name}
                      </h2>

                      <p className="mt-1 text-sm text-gray-500">
                        {pin.location}
                      </p>
                    </div>

                    {/* Small Pin Icon */}
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-white">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        className="h-5 w-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 21s-6-4.35-6-10a6 6 0 1112 0c0 5.65-6 10-6 10z"
                        />
                        <circle cx="12" cy="11" r="2.5" fill="currentColor" />
                      </svg>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* RIGHT MAP */}
          <div className="flex-1">
            <Map pins={pins} />
          </div>
        </div>
      </div>
    </>
  );
}
