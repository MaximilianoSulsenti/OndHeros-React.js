import {useState, useEffect} from "react"
import { db } from "../../services/config"
import { collection, getDocs, query, where } from "firebase/firestore"
import "./ItemListContainer.css"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
import { Loader } from "../Loader/Loader"

const ItemListContainer = () => {
  
  const [productos, setProductos] = useState([])
  const [loading, setLoading] = useState(true)
  const {categoriaId} = useParams()

  useEffect(() => {
    setLoading(true)
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
    .finally(() =>{ 
      console.log ("Finalizado")
      setLoading(false)
    })

  },[categoriaId])


  return (
    <>
    { loading ? <Loader/> : <ItemList productos={productos}/>}
    
   </>
  )
}

export default ItemListContainer