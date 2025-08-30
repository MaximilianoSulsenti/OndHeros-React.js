import "./Item.css"

const Item = ({id, nombre, precio, img}) => {
  return (
    <div className="cardRemera">
        <img src={img} alt={nombre} />
        <h3>{nombre}</h3>
        <p><strong>${precio}</strong></p>
        <button>Ver Detalles</button>

    </div>
  )
}

export default Item