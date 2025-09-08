import "./ItemDetail.css"

const ItemDetail = ({id, nombre, precio, img}) => {
  return (
    <div className="ItemDetail">
      <img src={img} alt={nombre} />
      <h2>{nombre}</h2>
      <h3>Precio: {precio}</h3>
      <h4>ID: {id}</h4>
    </div>
  )
}

export default ItemDetail