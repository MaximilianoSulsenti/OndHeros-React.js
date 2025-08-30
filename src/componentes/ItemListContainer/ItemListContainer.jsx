import {useState, useEffect} from "react"
import { getProductos } from "../../Asycmocks"
import "./ItemListContainer.css"
import ItemList from "../ItemList/ItemList"

const ItemListContainer = () => {

const [productos, setProductos] = useState([])
useEffect(() => {
  getProductos()
  .then(respuesta => setProductos(respuesta))
  .catch(error => console.log(error))

 },[])

  return (
    <>

   <h2 style={{textAlign:"center", fontSize:"40px"}}>Mis Remeras</h2>
   <ItemList productos={productos}/>

   </>
  )
}

export default ItemListContainer