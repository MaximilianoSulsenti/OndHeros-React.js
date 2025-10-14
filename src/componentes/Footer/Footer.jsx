import React, { useState } from "react";
import { db } from "../../services/config";
import { collection, addDoc } from "firebase/firestore";
import { FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa";
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
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <img src="/Ondheros-img/ondheroslogo.jpg" alt="Logo" style={{width: "100px"}} />
          <p>
            Ondheros nació para quienes crecieron entre historietas, dibujos y batallas épicas.
            No creemos que la ropa sea solo prendas, para nosotros, es una forma de identidad.
            Cada diseño está inspirado en héroes, villanos y momentos que marcaron nuestra infancia.
            Porque vestirse con onda está bien... pero vestirse con Onda Heroes es otra cosa.
          </p>
        </div>
        <div className="footer-right">
          <h3>Siguenos en nuestras redes sociales</h3>
          <div className="footer-social">
            <a href="https://instagram.com/ondheros" target="_blank" rel="noopener noreferrer" className="icon-link">
              <FaInstagram />
            </a>
            <a href="https://facebook.com/ondheros" target="_blank" rel="noopener noreferrer" className="icon-link">
              <FaFacebook />
            </a>
            <a href="https://whatsapp/123123123" target="_blank" rel="noopener noreferrer" className="icon-link">
              <FaWhatsapp />
            </a>
          </div>
          <form onSubmit={handleSubmit}>
            <label className="label">
              <h4>Suscríbete:</h4>
              <p>No te pierdas nuestros newsletter recibi descuentos y novedades </p>
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="Tu email"
                required
                style={{marginLeft: "10px", padding: "10px"}}
              />
            </label>
            <button className="suscribirse" type="submit">Suscribirse </button>
          </form>
          {mensaje && <p style={{color: "#0f0", marginTop: "10px"}}>{mensaje}</p>}
        </div>
      </div>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} OndHeros - Todos los derechos reservados</p>
      </div>
    </footer>
  );
};

export default Footer;