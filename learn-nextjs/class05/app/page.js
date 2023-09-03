"use client"
import {useState} from "react";
import axios from 'axios';

export default function Home() {
  const userNames = ["Naveed", "Ali", "Umar", "Zain"]
  const [data, setData] = useState([])
  const [students, setStudents] = useState([{
    studentName: `Hello ${userNames[0]}`,
    rollNo: 234,
    section:"D",
  },
  {
    studentName: 'Ali',
    rollNo: 2341,
    section:"A",
  },


  {
    studentName: 'Zain',
    rollNo: 241,
    section:"F",
  }

])

const deleteHandler = (studentRollNo)=>{
  console.log("studentRollNo", studentRollNo)
// students.shift()
let restStudents = students.filter((student)=> {
  if(student.rollNo !== studentRollNo){
    return student
  }
})
console.log("restStudents",restStudents);
setStudents(restStudents)
console.log(students);
}


const loadDataFromServer = async ()=> {
  // let response = await fetch("https://api.github.com/users/naveed-rana",{
  //   method: "GET"
  // });
  // response = await response.json()
  let response = await axios.get('https://api.github.com/users/naveed-rana/followers')
  setData(response.data)
  console.log("response", response.data)

}

  return (

    <div className={true ? 'red':'black'}>

      {data.map((item,i)=>{
         return(
          <div key={i}>
           follower login - {item.login}
          </div>
         )
      })}

      {/* <h1>Github Name: {data.name} - followers {data.followers}</h1> */}

      <button onClick={loadDataFromServer}>Load Data</button>
        
        <table>
          <tr>
            <th>Student Name</th>
            <th>Student Roll No</th>
            <th>Student Section</th>
            <th>Delete</th>
          </tr>
          {students.map((student,i)=>{
            return (
              <tr key={i}>
              <td>{student.studentName}</td>
              <td>{student.rollNo}</td>
              <td>{student.section}</td>
              <td><button onClick={()=>deleteHandler(student.rollNo)}>delete</button></td>
            </tr>
            )
          })}
        
        </table>


{/* 
{
        students.map((item)=>{
          return(
            <>
            <h1>Student Name: {item.studentName}</h1>
            <h2>Student Roll No: {item.rollNo}</h2>
            <h3>Student Section: {item.section}</h3>
            <hr/>
            </>
          )
        })
      }
       */}
      {/* <h1>End first loop</h1> */}

      {/* {true && <h1>Hello World - {userNames[0]} <i>For that {}</i> </h1>} */}
      {/* {userNames.map((userName, index) => {
        return (<>
          
           <h1>Hello - Loop - {userName} - index {index}  </h1>
           
           </>)
      })}
        
        <hr/> */}
      
      

    </div>
  )
}
