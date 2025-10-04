import { BrowserRouter, Route, Routes } from "react-router-dom"
import "./App.css"
import ItemDetailContainer from "./componentes/ItemDetailContainer/ItemDetailContainer"
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer"
import NavBar from "./componentes/NavBar/NavBar"
import { CarritoProvider } from "./Context/CarritoContext"
import Cart from "./componentes/Cart/Cart"
import Checkout from "./componentes/Checkout/Checkout"
import Footer from "./componentes/Footer/Footer"
import "bootstrap/dist/css/bootstrap.min.css"
import { ToastContainer } from "react-toastify"


const App = () => { 


  return (
<>
   <BrowserRouter>
   <CarritoProvider>
    <NavBar/>
     <Routes>
      <Route path="/" element={<ItemListContainer/>}/>
      <Route path="/categoria/:categoriaId" element={<ItemListContainer/>}/>
      <Route path="/item/:itemId" element={<ItemDetailContainer/>}/>
      <Route path="/cart" element={<Cart/>}/>
      <Route path= "/checkout" element={<Checkout/>}/>
     </Routes>
     <Footer/>
    </CarritoProvider>
    <ToastContainer/>
   </BrowserRouter>

</>
  )
}

export default App