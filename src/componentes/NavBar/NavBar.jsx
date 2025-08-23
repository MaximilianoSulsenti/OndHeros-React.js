import "./NavBar.css"
import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {


  return (
     <header>
        <h1>OndHeros</h1>
             <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid ">
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link " aria-current="page" href="#">Inicio</a>
        </li>
        <li class="nav-item">
          <a class="nav-link " href="#">Quienes somos</a>
        </li>
        <li class="nav-item">
          <a class="nav-link " href="#">Novedades</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
   
      <CartWidget/>
     </header>  
     )
}

export default NavBar