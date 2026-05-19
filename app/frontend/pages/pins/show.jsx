import { Head, Link, usePage } from '@inertiajs/react'
import Pin from './pin'

export default function Show({ pin }) {
  const { flash } = usePage()

  return (
    <>
      <Head title={`Pin #${pin.id}`} />

      <div className="mx-auto md:w-2/3 w-full px-8 pt-8">
        <div className="mx-auto">
          {flash.notice && (
            <p className="py-2 px-3 bg-green-50 mb-5 text-green-500 font-medium rounded-lg inline-block">
              {flash.notice}
            </p>
          )}

          <h1 className="font-bold text-4xl">Pin #{pin.id}</h1>

          <Pin pin={pin} />

          <Link
            href={`/pins/${pin.id}/edit`}
            className="mt-2 rounded-lg py-3 px-5 bg-gray-100 inline-block font-medium"
          >
            Edit this pin
          </Link>
          <Link
            href="/pins"
            className="ml-2 rounded-lg py-3 px-5 bg-gray-100 inline-block font-medium"
          >
            Back to pins
          </Link>
          <div className="inline-block ml-2">
            <Link
              href={`/pins/${pin.id}`}
              as="button"
              method="delete"
              className="mt-2 rounded-lg py-3 px-5 bg-gray-100 font-medium"
            >
              Destroy this pin
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
