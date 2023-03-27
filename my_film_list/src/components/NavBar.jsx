import { Link } from "react-router-dom"
import { BsSearch, BsFillPersonFill} from "react-icons/bs";
import './Navbar.css';

function NavBar() {

  return (
    <nav className="navBar">      
        <h1 className="logo">
            <Link to="/">MyFilmList</Link></h1>  
            <form className="Form">
                <input className="input"type="text" placeholder="Busque um filme" />
                <button className="lupa"type="submit"><BsSearch /></button>
            </form>
            <BsFillPersonFill className="account" />
              
    </nav>

  )
}

export default NavBar
