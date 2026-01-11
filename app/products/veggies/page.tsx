import React from 'react'
import Link from 'next/link'

function page() {
  return (
    <div>
      <h1>veggies page</h1>
      <ul>
        <li><Link href="/products/veggies/broccali">Broccali</Link></li>
        <li><Link href="/products/veggies/spinach">Spinach</Link></li>
      </ul>
      
    </div>
  )
}

export default page
