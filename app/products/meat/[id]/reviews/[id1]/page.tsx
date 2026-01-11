export default async function Page({
  params,
}: {
  params: Promise<{ id1: string, id : string }>
}) {
  const { id1, id } = await params

  return (
    <div>
      Meat item  {id} reviews {id1}
    </div>
  )
}
