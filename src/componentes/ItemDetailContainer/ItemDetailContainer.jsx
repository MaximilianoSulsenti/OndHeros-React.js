import React, { useEffect, useState } from 'react'
import { db } from '../../services/config'
import { doc, getDoc } from 'firebase/firestore'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
   const [producto, setProducto] = useState([null])

  const {itemId} = useParams()

  useEffect(() => {
    const nuevoDoc = doc(db, "productos", itemId)
    getDoc(nuevoDoc)
    .then(respuesta => {
      const data = respuesta.data()
      const nuevosProductos = {id: respuesta.id, ...data}
      setProducto(nuevosProductos)
    })
    .catch(error => console.log(error))
  },[itemId])

  return (
    <div>
      <ItemDetail {...producto}/>
    </div>
  )
}

export default ItemDetailContainer