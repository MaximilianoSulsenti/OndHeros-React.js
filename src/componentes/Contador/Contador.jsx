import { useState } from "react";
import { Toast } from "react-bootstrap";
import "./Contador.css";

const ItemCount = ({ inicial, stock, funcionAgregar, talles = [] }) => {
  const [contador, setContador] = useState(inicial);
  const [tallaSeleccionada, setTallaSeleccionada] = useState("");
  const [mostrarTalles, setMostrarTalles] = useState(false);
  const [showToast, setShowToast] = useState(false); 


  const incrementar = () => {
    if (contador < stock) setContador(contador + 1);
  };

  const decrementar = () => {
    if (contador > inicial) setContador(contador - 1);
  };

  const handleAgregar = () => {
    if (talles.length > 0 && !tallaSeleccionada) {
      setShowToast(true);
      return;
    }
    funcionAgregar(contador, tallaSeleccionada);
  };

  return (
        
    <div className="contador-container" style={{ position: "relative" }}>
       <Toast bg="warning" onClose={() => setShowToast(false)} show={showToast} delay={3000} autohide className="toast-media">
          <Toast.Header>
            <strong className="me-auto">Atención</strong>
          </Toast.Header>
         <Toast.Body>Por favor, selecciona una talla</Toast.Body>
       </Toast>

      {/* Botón para mostrar talles solo si hay talles */}
      {talles.length > 0 && (
        <button
          className="mostrar-talles"
          onClick={() => setMostrarTalles(!mostrarTalles)}
        >
          {tallaSeleccionada ? `Talle: ${tallaSeleccionada}` : "Seleccionar Talle"}
        </button>
      )}

      {mostrarTalles && (
        <div className="talles-chips">
          {talles.map((talle, index) => (
            <button
              key={index}
              className={`talle-chip ${tallaSeleccionada === talle ? "activo" : ""}`}
              onClick={() => setTallaSeleccionada(talle)}
            >
              {talle}
            </button>
          ))}
        </div>
      )}

      <div className="contadores">
        <button onClick={decrementar}>-</button>
        <p>{contador}</p>
        <button onClick={incrementar}>+</button>
      </div>

      <button className="agregarCarrito" onClick={handleAgregar}>
        Agregar al carrito
      </button>
    </div>
  );
};

export default ItemCount;
