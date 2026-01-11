import React from 'react'


function page({ params } : {params : {id : string}}) {
  return (
    <div>
      Meat items {params.id}
      
    </div>
  )
}

export default page
