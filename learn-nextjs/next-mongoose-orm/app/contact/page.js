"use client"
import { useEffect,useState } from "react";

// const fetchData = async ()=>{
//     try {
//          const data = await userModel.find()
//          console.log("data",data);
//          return data
//     } catch (error) {
//         console.log("error", error)
//     }
// }

function Contact(){
    
    const [data, setData] = useState([])
     
    const fetchUsers = async ()=>{
       const response = await fetch("http://localhost:3000/api/profiles");
       const result = await response.json()
       console.log("result",result);
       setData(result.users)
    }

     useEffect(() => {
        fetchUsers()
    
     }, [])
     
    return (
        <div>
            <h1>Contact page</h1>
            {data?.map((item, index)=>{
                return (
                    <div key={index}>
                        {item.firstName} - {item.lastName}
                    </div>
                )
            })}
        </div>
    )
}

export default Contact;