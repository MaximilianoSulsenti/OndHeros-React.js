import {useState, useEffect} from "react"
import { db } from "../../services/config"
import { collection, getDocs, query, where } from "firebase/firestore"
import "./ItemListContainer.css"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
import { Loader } from "../Loader/Loader"

const ItemListContainer = () => {
  
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [busqueda, setBusqueda] = useState("");

  const {categoriaId} = useParams()
  
  // Buscador de productos por nombre, categoria o descripcion
  const productosFiltrados = productos.filter (prod =>
    prod.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
    prod.categoria.toLowerCase().includes(busqueda.toLowerCase()) ||
    prod.descripcion.toLowerCase().includes(busqueda.toLowerCase())
  );

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
     <div style={{ display: "flex", justifyContent: "center", margin: "30px 0" }}>
        <input type="text" placeholder="Buscar producto..." value={busqueda}
          onChange={e => setBusqueda(e.target.value)}
          style={{padding: "10px", fontSize: "18px", width: "350px",
            borderRadius: "8px", border: "1px solid #ccc", textAlign: "center"
          }}
        />
      </div>

    { loading ? <Loader/> : <ItemList productos={productosFiltrados}/>}
    
   </>
  )
}

export default ItemListContainer