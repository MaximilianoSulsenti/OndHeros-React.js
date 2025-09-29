import React, { useContext } from 'react'
import { useState } from "react"
import { CarritoContext } from "../../Context/CarritoContext"
import { db } from "../../services/config"
import { collection, addDoc, doc, getDoc, updateDoc} from "firebase/firestore"

const Checkout = () => {

    const [nombre, setNombre] = useState("")
    const [apellido, setApellido] = useState("")
    const [telefono, setTelefono] = useState("")
    const [email, setEmail] = useState("")
    const [emailConfirmacion, setEmailConfirmacion] = useState("")
    const [error, setError] = useState("")
    const [ordenId, setOrdenId] = useState("")

    const {carrito, vaciarCarrito, total, cantidadTotal} = useContext(CarritoContext)


    //funciiones y validacion

    const manejadorFormulario = (event) => {
        event.preventDefault();

        //Verificamos que los campos esten completo:
        if(!nombre || !apellido || !telefono || !email || !emailConfirmacion){
            setError("Por favor completa todos los campos")
            return
        }

        //validamos que los campos de email cincida:
        if(email !== emailConfirmacion){
            setError("Los campos de email no coinciden!")
            return
        }

        //1) Creamos un objeto con todos los datos de la orden de compra:

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
        }


        //////////////////////////////

    //Vamos a modificar el codigo par aque ejecute varias promesas en paralelo, por un lado que actualice el stock de productos y por el otro lado que genere ina oprden de compra. Vamos a usar Promise.All

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
        setError("No se puede actualizar el stock, intente en el supermercado Coto")
    })
    };

  return (
    <div>

<h2>Checkout:</h2>
        <form  onSubmit={manejadorFormulario}>
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
             error && <p style={{color:"red"}}>{error}</p>
             }

            <button type="submit">Finalizar Compra</button>

             {ordenId && ( <strong> Gracias por tu compra!! Tu numero de orden es: {ordenId}</strong>)}

       </form>

    </div>
  )
}

export default Checkout