import { useContext } from "react"
import { CarritoContext } from "../../Context/CarritoContext"
import { Link } from "react-router-dom"
import CartItem from "../CartItem/CartItem"
import "./Cart.css"

const Cart = () => {

    const {carrito, total, cantidadTotal, vaciarCarrito} = useContext(CarritoContext)

    if (carrito.length === 0) {
        return (
            < div className="carrito-vacio">
            <h2 className="sin-product">No hay productos en el Carrito</h2>
            <Link to="/" className="ver-productos">Ver Productos</Link>
            </div>
        )
    }

  return (
    <div className="cart-container">
        <h1>Resumen del Carrito</h1>
           <div className="cart-header">
             <span>Producto</span>
             <span>Cantidad</span>
             <span>Precio</span>
             <span>Subtotal</span>
           </div>

        {
        carrito.map(producto => <CartItem key={producto.item.id} item={producto.item} cantidad={producto.cantidad}/>)
        }
        <div className="cart-footer">
         <h2>Cantidad Productos: {cantidadTotal}</h2>
         <h3>Total: ${total}</h3>
         <button onClick={vaciarCarrito} className="vaciar-carrito">Vaciar Carrito</button>
         <Link to="/checkout" className="finalizar-compra">Finalizar Compra</Link>
        </div>
    </div>
  )
}

export default Cart