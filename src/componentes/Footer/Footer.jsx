import React, { useState } from "react";
import { db } from "../../services/config";
import { collection, addDoc } from "firebase/firestore";
import "./Footer.css"

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
    <footer>
      <div className="footer-content">
        <p>© {new Date().getFullYear()} OndHeros - Todos los derechos reservados</p>
        <p>Contacto: "ondheros@gmail.com"| Tel: 123-456-789</p>
        <div className="suscribir-footer">
          <form onSubmit={handleSubmit}>
            <label className="label">
              <p>Suscríbete a novedades:</p>
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="Tu email"
                required
                style={{marginLeft: "10px", padding: "5px"}}
              />
            </label>
            <button className="suscribirse" type="submit" style={{marginLeft: "10px", padding: "5px 15px"}}>Suscribirse</button>
          </form>
          {mensaje && <p style={{color: "#0f0", marginTop: "10px"}}>{mensaje}</p>}
        </div>
        <div className="redes-footer">
          <a href="https://instagram.com/ondheros" target="_blank" rel="noopener noreferrer" style={{color: "#fff", margin: "0 10px"}}>Instagram</a>
          <a href="https://facebook.com/ondheros" target="_blank" rel="noopener noreferrer" style={{color: "#fff", margin: "0 10px"}}>Facebook</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;