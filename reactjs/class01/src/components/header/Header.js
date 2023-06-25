
import "./header.css"
import myImage from "../../assets/Screenshot (3).png"

function Header() {

    return <div>
        <p className="bgColorHeader">header</p>
        <img className="img" src={myImage} alt="" />
    </div>
}


export default Header;



