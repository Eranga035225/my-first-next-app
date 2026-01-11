

 async function page(
  {params,}
  : {
    params : Promise<{ dpath: string[] }>,
  }


) {

  const { dpath } = await params




  return (
    <>
    <div>
      <h1>Catch All Routes</h1>
      
    </div>
    <ul>
      {dpath.map((item)=>{
        return (
          <li key={item}>{item}</li>

        )
      })}




    </ul>
    
    
    </>
    
  )
}

export default page
