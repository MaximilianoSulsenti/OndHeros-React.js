
import { useState } from 'react'
import './Contador.css'

const ItemCount = ({inicial, stock, funcionAgregar}) => {

    const [contador, setContador] = useState(inicial)

    const incrementar = () =>{
        if(contador < stock){
            setContador(contador + 1)
        }
    }

    const decrementar = () => {
        if(contador > inicial) {
            setContador(contador - 1)
        }
    }
    return (
       <>
           <div className="contadores">
               <button onClick={decrementar}> - </button>
               <p> {contador} </p>
               <button onClick={incrementar}> + </button>
           </div>
            <button className= "agregarCarrito"onClick={()=> funcionAgregar(contador)}>Agregar al carrito</button>
       </>
    )
}

export default ItemCount