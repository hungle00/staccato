import { Form as InertiaForm } from '@inertiajs/react'

export default function Form({ pin, submitText, ...formProps }) {
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
