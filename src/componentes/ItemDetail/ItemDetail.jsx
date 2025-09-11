import "./ItemDetail.css"
import ItemCount from "../Contador/Contador"
import { useState} from "react"
import { Link } from "react-router-dom"


const ItemDetail = ({id, nombre, precio, img, stock}) => {

const [cantidadAgregada, setCantidadAgregada] = useState(0)

const manejadorCantidad = (cantidad) => {
    setCantidadAgregada(cantidad)
    console.log(`Se agrego al carrito ${cantidad} unidades`)
}

  return (
    <div className="ItemDetail">
      <img src={img} alt={nombre} />
      <h2>{nombre}</h2>
      <h3>Precio: {precio}</h3>
      <h4>ID: {id}</h4>
      {
        cantidadAgregada > 0 ? (<Link to="/cart">Terminar Compra</Link>) : <ItemCount inicial={1} stock={stock} funcionAgregar={manejadorCantidad} />
      }
    </div>
  )
}

export default ItemDetail