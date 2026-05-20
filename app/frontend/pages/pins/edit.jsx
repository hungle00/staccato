import { Head, Link } from '@inertiajs/react'
import Form from './form'

export default function Edit({ pin }) {
  return (
    <>
      <Head title="Editing pin" />

      <div className="mx-auto md:w-2/3 w-full px-8 pt-8">
        <h1 className="font-bold text-4xl">Edit your pin</h1>

        <Form
          pin={pin}
          action={`/pins/${pin.id}`}
          method="patch"
          submitText="Update Pin"
        />

        <Link
          href={`/pins/${pin.id}`}
          className="ml-2 rounded-lg py-3 px-5 bg-gray-100 inline-block font-medium"
        >
          Show this pin
        </Link>
        <Link
          href="/pins"
          className="ml-2 rounded-lg py-3 px-5 bg-gray-100 inline-block font-medium"
        >
          Back to pins
        </Link>
      </div>
    </>
  )
}
