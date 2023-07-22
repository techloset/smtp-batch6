
import {useState} from "react"
function App(props) {
// var userName = "naveed";
const [userName, setUserName] =useState("Naveed")
const [count, setCount] =useState(0)
const [cssClass, setCssClass] = useState("bg-color-dark")
var myFirstName = "Nav"
let num = 10;
const pi = 3.14;

const clickHandler = ()=>{
  // userName = "ali"
  setUserName("Ali")
  myFirstName = "sdf"
  // alert(userName)
}

const lightThemeHanlder = ()=>{
  setCssClass('bg-color-light')
}

const darkThemeHanlder = ()=>{
  setCssClass('bg-color-dark')
}
 console.log("userName in console", userName);
  return (
    <div >
      <p className={cssClass}>What is user name: {userName}</p>
      {/* <p>{myFirstName}</p> */}
      <button onClick={clickHandler}>click</button>


      <button onClick={lightThemeHanlder} >-</button>
      {count}
      <button onClick={darkThemeHanlder} >+</button>
    </div>
  );
}

export default App;
