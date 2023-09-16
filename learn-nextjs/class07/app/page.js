import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import client from "@/lib/contentful";

const fetchProducts = async ()=>{
  const data = await client.getEntries({ content_type: "blogs", limit:5})
  const newData = data.items.map((item) => {
    return {
      thumnail:item.fields.thumnail,
     title: item.fields.title,
     title: item.fields.title,
     description:documentToReactComponents(item.fields.description)
    }
  });
  ;
  console.log("data",newData);
  return newData
  // let products =  await fetch("https://fakestoreapi.com/products", { next: { tags: ['fetchProducts'] } })
  // products = await products.json()
  // console.log("products",products);
  // return products
 }

export default async function Home() {
const products = await fetchProducts()

const loader = false;
  // useEffect(()=>{
  //   console.log("use effect products")
  // },[products])


 

  return (
    <div>
      {/* <button onClick={fetchProducts}>fetch products</button> */}
    <h1>
      Producrts - Naveed
    </h1>
    
    {products[1].description}
    {/* {products.length ? 
    <table border={true} >
      <tr>

        <td>id</td>
        <td>img</td>
        <td>title</td>
        <td>price</td>
        <td>category</td>
        <td>description</td>

      </tr>

      {products.map((product)=>{
        return(
          <tr>

        <td>{product.id}</td>
        <td><img width={30} src={product.image} alt="" /></td>
        <td>{product.title}</td>
        <td>{product.price}</td>
        <td>{product.category}</td>
        <td>{product.description.slice(0, 20)}...</td>

      </tr>
        )
      })}
    </table> : 
     loader ? <div className="loader"></div> :  <div>No data found</div>
    } */}
    </div>
  )
}
