import { Head, Link, usePage } from '@inertiajs/react'
import { Fragment } from 'react'
import Pin from './pin'

export default function Index({ pins }) {
  const { flash } = usePage()

  return (
    <>
      <Head title="Pins" />
      <div className="mx-auto md:w-2/3 w-full px-8 pt-8">
        {flash.notice && (
          <p className="py-2 px-3 bg-green-50 mb-5 text-green-500 font-medium rounded-lg inline-block">
            {flash.notice}
          </p>
        )}
        <div className="flex justify-between items-center">
          <h1 className="font-bold text-4xl">Pins</h1>
          <Link
            href="/pins/new"
            className="rounded-lg py-3 px-5 bg-blue-600 text-white block font-medium"
          >
            New pin
          </Link>
        </div>

        <div className="min-w-full">
          {pins.map((pin) => (
            <Fragment key={pin.id}>
              <Pin pin={pin} />
              <p>
                <Link
                  href={`/pins/${pin.id}`}
                  className="ml-2 rounded-lg py-3 px-5 bg-gray-100 inline-block font-medium"
                >
                  Show this pin
                </Link>
              </p>
            </Fragment>
          ))}
        </div>
      </div>
    </>
  )
}
