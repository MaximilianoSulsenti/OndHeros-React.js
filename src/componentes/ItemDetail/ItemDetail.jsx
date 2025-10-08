import "./ItemDetail.css"
import ItemCount from "../Contador/Contador"
import { useState} from "react"
import { Link } from "react-router-dom"
import { CarritoContext } from "../../Context/CarritoContext"
import { useContext } from "react"
import { toast } from "react-toastify"


const ItemDetail = ({id,nombre, precio, img, stock, descripcion}) => {

const [cantidadAgregada, setCantidadAgregada] = useState(0)

const {agregarAlCarrito} = useContext(CarritoContext)

const manejadorCantidad = (cantidad) => {
    setCantidadAgregada(cantidad)
    
    const item = {id, nombre, precio}
    agregarAlCarrito(item, cantidad)
    toast.success(`Se agrego correctamente al carrito ${cantidad} ${nombre}`, {position: "top-right", autoClose: 3000, theme: "dark"})
}

  return (
    <div className="ItemDetail">
      <div>
      <img src={img} alt={nombre} />
      </div>
      <div className="detalle">
      <h2>{nombre}</h2>
      <p>{descripcion}</p>
      <h3>${precio}</h3>
      <h4>Stock: {stock}</h4>
      {
        cantidadAgregada > 0 ? (
        <div className="terminar-seguir">
        <button className="terminarcompra"><Link to="/cart">Terminar Compra</Link></button>
        <button className="seguircomprando"><Link to="/">Seguir Comprando</Link></button>
        </div>
        )
         : <ItemCount inicial={1} stock={stock} funcionAgregar={manejadorCantidad} />
      }
      </div>
    </div>
  )
}

export default ItemDetail