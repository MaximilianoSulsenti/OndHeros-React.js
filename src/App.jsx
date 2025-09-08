import "./App.css"
import ItemDetailContainer from "./componentes/ItemDetailContainer/ItemDetailContainer"
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer"
import NavBar from "./componentes/NavBar/NavBar"


const App = () => { 


  return (
<>
    <NavBar/>
    <ItemListContainer/>
    <ItemDetailContainer/>
</>
  )
}

export default App