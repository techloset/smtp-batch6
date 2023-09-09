"use client"
import {useState} from "react";
let myKeyName = "phoneNumber"
let myKeyValue = "030010012313"
let obj = {
  target:{
    name:'sdf',
    email:"sadf"
  },
  [myKeyName]:"Asdf",
  phone:myKeyValue
}
console.log("obj", obj)
export default function Home() {
  // var userData = "";
  // const [userName, setUserName] = useState("");
  // const [email, setEmail] = useState("");
  // const [phone, setPhone] = useState();

  const [state, setState] = useState({})


  const onChangeHandler = (e)=>{
    setState({
      [e.target.name]: e.target.value
    })
  }
  // const onChangeHandler = (e)=>{
  //   console.log( e.target.value);
  //   // userData = e.target.value
  //   setUserName(e.target.value)
  // }
  // const onChangeEmailHandler = (e)=>{
  //   setEmail(e.target.value)
  // }
  return (
    <div>
      <label htmlFor="name">Enter username: </label>

      <input name="userName" onChange={onChangeHandler} id="name" type="text" placeholder="Enter User Name" />
      <input name="email" type="email" onChange={onChangeHandler} placeholder="Enter email" />
      <input name="phone" type="number" onChange={onChangeHandler} placeholder="enter phone" />
      <input name="address" type="text" onChange={onChangeHandler} placeholder="enter address" />
      {/* <input onChange={(e)=>setUserName(e.target.value)} id="name" type="text" placeholder="Enter User Name" />
      <input type="email" onChange={(e)=> setEmail(e.target.value)} placeholder="Enter email" />
      <input type="number" onChange={(e)=>setPhone(e.target.value)} placeholder="enter phone" /> */}

      {/* <p>input data is here: {userName}</p>
      <p>email is: {email}</p>
      <p>phone is: {phone}</p> */}

      <p>input data is here: {state.userName}</p>
      <p>email is: {state.email}</p>
      <p>phone is: {state.phone}</p>
      <p>address{state.address}</p>
    </div>
  )
}
