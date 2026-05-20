import { Head, Link, usePage } from '@inertiajs/react'
import { Fragment, useState } from 'react'
import Pin from './pin'
import Map from './maps/map'
import Header from '../parials/header'

export default function Index({ pins }) {
  const { flash } = usePage();

  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <Head title="Pins" />
      <Header />

      <div className="h-screen bg-gray-100">
        <div className="flex h-full">
          {/* MOBILE OVERLAY */}
          {sidebarOpen && (
            <div
              className="fixed inset-0 z-40 bg-black/40 lg:hidden"
              onClick={() => setSidebarOpen(false)}
            />
          )}

          {/* SIDEBAR */}
          <div
            className={`
              fixed inset-y-0 left-0 z-50 w-[85%] max-w-[420px]
              transform overflow-y-auto border-r border-gray-200 bg-white
              transition-transform duration-300 ease-in-out
              lg:static lg:w-[420px] lg:translate-x-0
              ${
                sidebarOpen
                  ? "translate-x-0"
                  : "-translate-x-full"
              }
            `}
          >
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

                {/* Close button mobile */}
                <button
                  onClick={() => setSidebarOpen(false)}
                  className="flex h-10 w-10 items-center justify-center rounded-xl transition hover:bg-gray-100 lg:hidden"
                >
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
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              {/* Actions */}
              <div className="mt-4 flex gap-3">
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
                      <h2 className="">
                        <Link
                          href={`/pins/${pin.id}`}
                          className="font-semibold text-gray-900"
                        >
                          {pin.name}
                        </Link>
                      </h2>
                      <p className="mt-1 text-sm text-gray-500">
                        {pin.location}
                      </p>
                    </div>

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

          {/* MAP */}
          <div className="relative flex-1">
            {/* Mobile Menu Button */}
            <button
              onClick={() => setSidebarOpen(true)}
              className="absolute left-4 top-4 z-30 flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-lg transition hover:bg-gray-50 lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="h-6 w-6 text-gray-700"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>

            <Map pins={pins} />
          </div>
        </div>
      </div>
    </>
  );
}
