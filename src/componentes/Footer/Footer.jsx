import React, { useState } from "react";
import { db } from "../../services/config";
import { collection, addDoc } from "firebase/firestore";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [mensaje, setMensaje] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "suscripciones"), { email, fecha: new Date() });
      setMensaje("¡Gracias por suscribirte!");
      setEmail("");
    } catch (error) {
      setMensaje("Hubo un error, intenta nuevamente.");
    }
  };

  return (
    <footer style={{
      background: "#222",
      color: "#fff",
      textAlign: "center",
      padding: "30px 0",
      marginTop: "40px"
    }}>
      <div>
        <p>© {new Date().getFullYear()} OndHeros - Todos los derechos reservados</p>
        <p>Contacto: ondheros@gmail.com | Tel: 123-456-789</p>
        <div style={{margin: "15px 0"}}>
          <form onSubmit={handleSubmit}>
            <label>
              Suscríbete a novedades:
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="Tu email"
                required
                style={{marginLeft: "10px", padding: "5px"}}
              />
            </label>
            <button type="submit" style={{marginLeft: "10px", padding: "5px 15px"}}>Suscribirse</button>
          </form>
          {mensaje && <p style={{color: "#0f0", marginTop: "10px"}}>{mensaje}</p>}
        </div>
        <div>
          <a href="https://instagram.com/ondheros" target="_blank" rel="noopener noreferrer" style={{color: "#fff", margin: "0 10px"}}>Instagram</a>
          <a href="https://facebook.com/ondheros" target="_blank" rel="noopener noreferrer" style={{color: "#fff", margin: "0 10px"}}>Facebook</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;