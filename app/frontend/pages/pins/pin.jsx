export default function Pin({ pin }) {
  return (
    <div>
      <p className="my-5">
        <strong className="block font-medium mb-1">Name:</strong>
        {pin.name?.toString()}
      </p>
      <p className="my-5">
        <strong className="block font-medium mb-1">Description:</strong>
        {pin.description?.toString()}
      </p>
      <p className="my-5">
        <strong className="block font-medium mb-1">Published:</strong>
        {pin.published?.toString()}
      </p>
    </div>
  )
}
