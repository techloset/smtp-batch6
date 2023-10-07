"use client"
import { useState, useEffect } from "react"
import { getDocs, collection, query, where, deleteDoc, doc, updateDoc} from "firebase/firestore"
import { db } from "@/config/firebase"

export default function Home() {

  const [students, setStudents] = useState([])

  const [id, setId] = useState("")

  const [loading, setLoading] = useState(false)

  const fetchDocs = async ()=> {
    try {
      const collectionName = collection(db, "abc")
      // const queryRef = query(collectionName, where("email","==","naveed@gmail.com"))
      const docs = await getDocs(collectionName)
      const studentsData = []
      docs.forEach((doc)=>{
        studentsData.push({
          id:doc.id,
          ...doc.data()
        })
      })
      setStudents(studentsData)
      console.log("students",studentsData)

    } catch (error) {
      console.log("error",error);
    }
  


  }
  useEffect(() => {
   fetchDocs()
  }, [])

  const onDeletHandler = async (id)=>{
    const docRef = doc(db,"abc", id )

   try {
    setId(id)
    setLoading(true)
    
    await deleteDoc(docRef)
    
     
    const newStudents = students.filter((student)=>id !== student.id)
    setLoading(false)
    setStudents(newStudents)
     
   } catch (error) {
    alert("error")
   }
  }

  const onUpdateHandler = async (id)=>{
    try {
      const docRef = doc(db,"abc", id)
      setId(id)
      setLoading(true)
      await updateDoc(docRef, {
        email:"naveed@techloset.com"
      })
      fetchDocs()
      setLoading(false)


    } catch (error) {
      
    }
  }


  
  return (
    <div>

      <h1>List of students</h1>

      <table>
        <tr>
          <td>id</td>
          <td>Student Name</td>
          <td>Student email</td>
          <td>Student course</td>
          <td>Student delete</td>
          <td>Student update</td>
        </tr>
         {
          students.map((student)=>{
            return (
              <tr>
                <td>{student.id}</td>
                <td>{student.name}</td>
                <td>{student.email}</td>
                <td>{student.course}</td>
                <td><button onClick={()=>onDeletHandler(student.id)}>  { student.id == id && loading ? "loading...":"delete"}</button></td>
                <td><button onClick={()=>onUpdateHandler(student.id)}>  { student.id == id && loading ? "loading...":"update"}</button></td>

              </tr>
            )
          })
         }
      </table>

    </div>
  )
}
