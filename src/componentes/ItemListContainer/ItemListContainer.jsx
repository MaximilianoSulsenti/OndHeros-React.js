import {useState, useEffect} from "react"
import { getProductos, getProductosPorCategoria} from "../../Asycmocks"
import "./ItemListContainer.css"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"

const ItemListContainer = () => {
  
  const [productos, setProductos] = useState([])

  const {categoriaId} = useParams()

useEffect(() => {
    
  const funcionProductos = categoriaId ? getProductosPorCategoria : getProductos,
  funcion = categoriaId ? funcionProductos(categoriaId) : funcionProductos()

  funcion
  .then(respuesta => setProductos(respuesta))
  .catch(error => console.log(error))


 },[categoriaId])

  return (
    <>

   <h2 style={{textAlign:"center", fontSize:"40px"}}>Mis Remeras</h2>
   <ItemList productos={productos}/>

   </>
  )
}

export default ItemListContainer