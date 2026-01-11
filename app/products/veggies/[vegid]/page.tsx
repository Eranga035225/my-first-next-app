import Link from 'next/link'

export default async function Page({
  params,
}: {
  params: Promise<{ vegid: string }>
}) {
  const { vegid } = await params

  return (
    <div>
      Veg items {vegid}
      <li><Link href="/">Home</Link></li> 
    </div>
  )
}
