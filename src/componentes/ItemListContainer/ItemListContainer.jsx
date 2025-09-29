import {useState, useEffect} from "react"
import { db } from "../../services/config"
import { collection, getDocs, query, where } from "firebase/firestore"
import "./ItemListContainer.css"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"

const ItemListContainer = () => {
  
  const [productos, setProductos] = useState([])

  const {categoriaId} = useParams()

  useEffect(() => {
    const misRemeras = categoriaId ? query(collection(db, "productos"), where("categoria", "==", categoriaId)) 
    : collection(db, "productos")
    getDocs(misRemeras)
    .then(respuesta => {
      const nuevosProductos = respuesta.docs.map(doc => {
        const data = doc.data()
        return {id: doc.id, ...data}
      })
      setProductos(nuevosProductos)
    })
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