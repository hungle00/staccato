import { Head, Link } from '@inertiajs/react'
import Form from './form'

export default function New({ pin }) {
  return (
    <>
      <Head title="New pin" />

      <div className="mx-auto md:w-2/3 w-full px-8 pt-8">
        <h1 className="font-bold text-4xl">New pin</h1>

        <Form
          pin={pin}
          method="post"
          action="/pins"
          submitText="Create Pin"
        />

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
