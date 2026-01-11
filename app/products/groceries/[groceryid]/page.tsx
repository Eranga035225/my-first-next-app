export default async function Page({
  params,
}: {
  params: Promise<{ groceryid: string }>
}) {
  const { groceryid } = await params

  return (
    <div>
      Meat items {groceryid}
    </div>
  )
}
