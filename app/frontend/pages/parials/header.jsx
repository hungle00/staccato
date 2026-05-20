export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur">
      <div className="relative flex h-16 items-center justify-center px-4">
        {/* Left Menu Button */}
        <button
          className="absolute left-4 flex h-10 w-10 items-center justify-center rounded-xl transition hover:bg-gray-100"
          aria-label="Open menu"
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

        {/* Site Name */}
        <h1 className="text-lg font-semibold tracking-tight text-gray-900">
          PinMap
        </h1>
      </div>
    </header>
  )
}
