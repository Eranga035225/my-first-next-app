export default async function Page({
  params,
}: {
  params: Promise<{ vegid: string }>
}) {
  const { vegid } = await params

  return (
    <div>
      Veg items {vegid}
    </div>
  )
}
