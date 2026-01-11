import React from 'react'
import Link from 'next/link'

function page() {
  const veggies = [

    {
      name: "broccali",
      id: 1
    },
    {
      name: "spinach",
      id: 2
    },
    {
      name: "carrot",
      id: 3 
    },
    {
      name: "potato",
      id: 4
    }
  ]
  return (
    <div>
      <h1>veggies page</h1>
      <ul>
       
        {veggies.map((item)=> {

          return (

            <li key={item.id}><Link href={`/products/veggies/${item.name}`}>{item.name}</Link></li>
            


          );
          





        })}
         <li><Link href="/">Home</Link></li> 




      </ul>
     
      
    </div>
  )
}

export default page
