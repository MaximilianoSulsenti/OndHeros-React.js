import { useContext } from "react"
import { CarritoContext } from "../../Context/CarritoContext"
import { Link } from "react-router-dom"
import CartItem from "../CartItem/CartItem"

const Cart = () => {

    const {carrito, total, cantidadTotal, vaciarCarrito} = useContext(CarritoContext)

    if (carrito.length === 0) {
        return (
            <>
            <h2>No hay productos en el Carrito</h2>
            <Link to="/">Ver Productos</Link>
            </>
        )
    }

  return (
    <div>
        <h2>Resumen de tu compra</h2>
        {
           carrito.map(producto => <CartItem key={producto.id} {...producto}/>)
        
        }
         <h3>total: ${total}</h3>
         <h3>Cantidad total: {cantidadTotal}</h3>
         <button onClick={vaciarCarrito}>Vaciar Carrito</button>
         <Link to="/checkout">Finalizar Compra</Link>

    </div>
  )
}

export default Cart