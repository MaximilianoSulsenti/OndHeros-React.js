import Item from "../Item/Item"

const ItemList = ({productos}) => {
  return (
    <div>

       {productos.map(item => <Item{...item}/>)}

    </div>
  )
}

export default ItemList