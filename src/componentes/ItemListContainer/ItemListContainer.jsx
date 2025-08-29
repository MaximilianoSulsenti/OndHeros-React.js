import {useState, useEffect} from "react"
import { getProductos } from "../../Asycmocks"
import "./ItemListContainer.css"
import ItemList from "../ItemList/ItemList"

const ItemListContainer = ({texto}) => {

const [productos, setProductos] = useState([])
useEffect(() => {
  getProductos()
  .then(respuesta => setProductos(respuesta))
  .catch(error => console.log(error))

 },[])

  return (
    <>

   <h2 className="tituloremeras">{texto}</h2>
   <ItemList productos={productos}/>


   </>
  )
}

export default ItemListContainer