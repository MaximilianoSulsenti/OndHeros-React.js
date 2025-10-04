import "./ItemDetail.css"
import ItemCount from "../Contador/Contador"
import { useState} from "react"
import { Link } from "react-router-dom"
import { CarritoContext } from "../../Context/CarritoContext"
import { useContext } from "react"
import { toast } from "react-toastify"


const ItemDetail = ({nombre, precio, img, stock, descripcion}) => {

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
      <img src={img} alt={nombre} />
      <h2>{nombre}</h2>
      <h3>Precio: {precio}</h3>
      <p>{descripcion}</p>
      <h4>Stock Disponible: {stock}</h4>
      {
        cantidadAgregada > 0 ? (<Link to="/cart">Terminar Compra</Link>) : <ItemCount inicial={1} stock={stock} funcionAgregar={manejadorCantidad} />
      }
    </div>
  )
}

export default ItemDetail