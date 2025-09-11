import "./NavBar.css"
import CartWidget from "../CartWidget/CartWidget"
import { Link, NavLink } from "react-router-dom"

const NavBar = () => {


  return (
     <header>

      <Link to="/">
        <h1>OndHeros</h1>
      </Link>
        <nav>
          <ul>
            <li>
              <NavLink to="/categoria/remeras">Remeras</NavLink>
            </li>
            <li>
              <NavLink to="/categoria/billeteras">Billeteras</NavLink>
            </li>
            <li>
              <NavLink to="/categoria/medias">Medias</NavLink>
            </li>
          </ul>
        </nav>
   
      <CartWidget/>
     </header>     
     )
}

export default NavBar