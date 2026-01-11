export default async function Page({
  params,
}: {
  params: Promise<{ id1: string }>
}) {
  const { id1 } = await params

  return (
    <div>
      Meat item  {id1} reviews
    </div>
  )
}
