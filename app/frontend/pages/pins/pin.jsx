export default function Pin({ pin }) {
  return (
    <div className="overflow-hidden rounded-3xl bg-white shadow-sm border border-gray-100">
      {/* Image */}
      {pin.image_url && (
        <div className="aspect-[16/9] overflow-hidden bg-gray-100">
          <img
            src={pin.image_url}
            alt={pin.name}
            className="h-full w-full object-cover"
          />
        </div>
      )}

      {/* Content */}
      <div className="p-6">
        {/* Title */}
        <h1 className="text-2xl font-bold tracking-tight text-gray-900">
          {pin.name}
        </h1>

        {/* Location */}
        {pin.location && (
          <div className="mt-3 flex items-center gap-2 text-sm text-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 21s-6-4.35-6-10a6 6 0 1112 0c0 5.65-6 10-6 10z"
              />
              <circle cx="12" cy="11" r="2.5" fill="currentColor" />
            </svg>

            <span>{pin.location}</span>
          </div>
        )}

        {/* Description */}
        {pin.description && (
          <div className="mt-5">
            <p className="leading-7 text-gray-700">
              {pin.description}
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
