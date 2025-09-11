import React, { useEffect, useState } from 'react'
import { getUnProducto } from '../../Asycmocks'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
   const [producto, setProducto] = useState([null])

  const {itemId} = useParams()

   useEffect(() => {
    getUnProducto(parseInt(itemId))
    .then(respuesta => setProducto(respuesta))
   },[itemId])

  return (
    <div>
      <ItemDetail {...producto}/>
    </div>
  )
}

export default ItemDetailContainer