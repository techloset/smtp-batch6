import client from "./lib/contentfulClient"


const fetchServices = async()=>{
  let response = await client.getEntries({content_type:"services"})
  const services = response.items.map((item)=>{
    return {
      title: item.fields.title,
      description: item.fields.description,
      image: item.fields.image.fields.file.url
    }
  })
  return services
}

export default  async function page() {
  const services = await fetchServices()
  console.log("fetchServices",services);

  return (
    <div>
     <h1>Home Seriveces</h1>

     {services.map((service)=>{
      return (
        <>
        <h2>{service.title}</h2>
        <p>{service.description}</p>
        <hr />
        </>
      )
     })}
    </div>
  )
}
