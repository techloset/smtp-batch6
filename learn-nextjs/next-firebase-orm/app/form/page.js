"use client"
import {useState} from "react"
import {addDoc, collection, getDoc} from "firebase/firestore"
import {db} from "@/config/firebase"

export default function Form() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("")
  const [course, setCourse] = useState("")

  const onSubmitHanlder = async () =>{
    let student = {
      name: userName,
      email,
      course
    }
    try {
      const collectionName = collection(db,"abc")
    
      await addDoc(collectionName, student )
      console.log("Document written with ID: ");
    } catch (e) {
      console.error("Error adding document: ", e);
    }

  }

  return (
    <div>
      <h1>
        Course registeration
      </h1>

      {/* <form> */}
       
       <input type="text" placeholder="Enter name"  onChange={(e)=> setUserName(e.target.value)}  />
       <input type="email" placeholder="Enter email"  onChange={(e)=> setEmail(e.target.value)}  />
       <input type="text" placeholder="Enter course name"  onChange={(e)=> setCourse(e.target.value)}  />
       
       <button onClick={onSubmitHanlder}>Submit</button>
      {/* </form> */}

    </div>
  )
}
