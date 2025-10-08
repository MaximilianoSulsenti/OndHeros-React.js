import React, { useContext } from 'react'
import { useState } from "react"
import { CarritoContext } from "../../Context/CarritoContext"
import { db } from "../../services/config"
import { collection, addDoc, doc, getDoc, updateDoc} from "firebase/firestore"
import "./Checkout.css"

const Checkout = () => {

    const [nombre, setNombre] = useState("")
    const [apellido, setApellido] = useState("")
    const [telefono, setTelefono] = useState("")
    const [email, setEmail] = useState("")
    const [emailConfirmacion, setEmailConfirmacion] = useState("")
    const [error, setError] = useState("")
    const [ordenId, setOrdenId] = useState("")

    const {carrito, vaciarCarrito, total} = useContext(CarritoContext)


    const manejadorFormulario = (event) => {
        event.preventDefault();

        if(!nombre || !apellido || !telefono || !email || !emailConfirmacion){
            setError("Faltan completar datos")
            return
        }

        if(email !== emailConfirmacion){
            setError("Los campos de email no coinciden!")
            return
        }

        const orden = {
            items: carrito.map (producto =>({
                id: producto.item.id,
                nombre: producto.item.nombre,
                cantidad: producto.cantidad
            })),
            total: total,
            fecha: new Date(),
            nombre,
            apellido,
            telefono,
            email
        };

    Promise.all(
      orden.items.map(async (productoOrden) => {
        const productoRef = doc(db, "productos", productoOrden.id);
        const productoDoc = await getDoc(productoRef);
        const stockActual = productoDoc.data().stock;

        await updateDoc(productoRef, {
          stock: stockActual - productoOrden.cantidad,
        });
      })
    )
    .then(() => {
      addDoc(collection(db, "ordenes"), orden)
        .then((docRef) => {
          setOrdenId(docRef.id);
          vaciarCarrito();
        })
        .catch(error => {
          console.log("Error al crear la orden", error);
          setError("Se produjo un error al crear la orden!!");
        });
    })
    .catch((error)=>{
        console.log("No se pudo actualizar el stock", error)
        setError("error en actualizacion de stock")
    })
    };

  return (
    <div className='contenedor-form' >
     <h2>Checkout:</h2>
        <form className='formulario' onSubmit={manejadorFormulario}>
            <div>
                <label htmlFor="">Nombre</label>
                <input type="text" onChange={(e)=> setNombre(e.target.value)}/>
            </div>
            <div>
                <label htmlFor="">Apellido</label>
                <input type="text" onChange={(e)=> setApellido(e.target.value)} />
            </div>
            <div>
                <label htmlFor="">Telefono</label>
                <input type="text" onChange={(e)=> setTelefono(e.target.value)}/>
            </div>
            <div>
                <label htmlFor="">Email</label>
                <input type="email" onChange={(e)=> setEmail(e.target.value)} />
            </div>
            <div>
                <label htmlFor="">Email Confirmacion</label>
                <input type="email" onChange={(e)=> setEmailConfirmacion(e.target.value)} />
            </div>

             {
             error && <p className='error' style={{color:"red"}}>{error}</p>
             }

            <button className="fin-compra" type="submit">Finalizar Compra</button>

             {ordenId && ( <strong className='strong-orden'> Gracias por su compra!! Tu numero de orden es: {ordenId}</strong>)}
       </form>
    </div>
  )
}

export default Checkout