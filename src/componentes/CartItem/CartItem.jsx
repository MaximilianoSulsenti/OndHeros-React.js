import { useContext } from "react"
import { CarritoContext } from "../../Context/CarritoContext"
import "./CartItem.css"


const CartItem = ({item, cantidad}) => {

    const {eliminarProducto} = useContext(CarritoContext)

  return (

   <div className="cart-item">
      <span className="nombre">{item.nombre}</span>
      <span>{cantidad}</span>
      <span>${item.precio}</span>
      <span>${item.precio * cantidad}</span>
      <button className="boton-eliminar" onClick={() => eliminarProducto(item.id)}>
        X
      </button>
    </div>
  )
}

export default CartItem