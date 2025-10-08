import "./NavBar.css"
import CartWidget from "../CartWidget/CartWidget"
import { Link} from "react-router-dom"

const NavBar = () => {


  return (
     <header>
      <Link to="/">
        <img className="logo" src="../public/Ondheros-img/ondheroslogo.jpg" alt="Logo de la tienda" />
      </Link>
        <nav>
          <ul>
            <li>
              <Link to="/categoria/remeras">Remeras</Link>
            </li>
            <li>
              <Link to="/categoria/billeteras">Billeteras</Link>
            </li>
            <li>
              <Link to="/categoria/medias">Medias</Link>
            </li>
          </ul>
        </nav>
   
      <CartWidget/>
     </header>     
     )
}

export default NavBar