"use client"
import {useState, useEffect} from "react";
export default function Home() {
  const [products, setProducts] = useState([])
  const [loader, setLoader] = useState(true)


  // useEffect(()=>{
  //   console.log("use effect products")
  // },[products])


  const fetchProducts = async ()=>{
   let products =  await fetch("https://fakestoreapi.com/products")
   products = await products.json()
    setProducts(products)
   console.log("products",products);
   setLoader(false)
  }

  useEffect(()=>{
    fetchProducts()
  },[])

  return (
    <div>
      {/* <button onClick={fetchProducts}>fetch products</button> */}
    <h1>
      Producrts
    </h1>
    {products.length ? 
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
    }
    </div>
  )
}
