"use client"
import {useState} from "react";
var anyVar = "Naveeds"
let obj = {
  target:{
    value:'asdfasdf'
  },
  name:anyVar,
  [anyVar]: 234324,
}
console.log("obj", obj)
export default function home() {
  // var userName = ""
  // const [userName, setUserName] = useState("")
  // const [email, setEmail] = useState("")
  // const [phone, setPhone] = useState()


  const [state, setState] = useState({
    userName: '',
    email: '',
    phone:0,
  })


  const onChangeHandler = (e)=>{
    console.log("onChangeHandler",e.target.value);
    console.log("onChangeHandler",e.target.name);
    setState({
      [e.target.name]: e.target.value
    })
    
  }
  // const onChangeEmailHandler = (e)=>{
  //   setEmail(e.target.value)
  // }
  // const onPhoneHandler = (e)=>{
  //    setPhone(e.target.value)
  // }



  return (
    <div>
      <input name="userName" onChange={onChangeHandler} type="text" placeholder="enter your name"/>
      <input name="email" onChange={onChangeHandler} type="email" placeholder="enter email" />
      <input name="phone" onChange={onChangeHandler} type="number" placeholder="enter phone" />
      {/* <input onChange={(e)=>setUserName(e.target.value)} type="text" placeholder="enter your name"/>
      <input onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="enter email" />
      <input onChange={(e)=> setPhone(e.target.value)} type="number" placeholder="enter phone" /> */}
      <hr />

      <p>user name is: {state.userName}</p>
      <p>email is: {state.email}</p>
      <p>phone is: {state.phone}</p>
    </div>
  )
}
