import { Link } from "react-router-dom"
import { useContext } from "react"
import "./CartWidget.css"
import { CarritoContext } from "../../Context/CarritoContext"

const CartWidget = () => {

  const {cantidadTotal} = useContext(CarritoContext)

  return (
    <div className="contenedorcarrito">
      <Link to="/cart" className="cartwidget">
         <> 
            <span className="carrito">🛒</span>
             {
              cantidadTotal > 0 && <strong className="contador">{cantidadTotal}</strong>
             }   
         </>    
      </Link>
    </div>
  )
}

export default CartWidget