import HeaderPage from "../components/layout/HeaderPage";
import Footer from "../components/layout/Footer";
import terrazaDiseño from "../assets/img/destacadaTerrazaConDiseño.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faXTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

import "../styles/components/pages/ContactoPage.css";

const ContactoPage2 = (props) => {
  return (
    <>
      <FontAwesomeIcon />
      <HeaderPage />
      <main className="contenedor seccion">
        <h2>Contacto</h2>
        <img
          className="img-contacto"
          src={terrazaDiseño}
          alt="Imagen de portada contacto"
        />

        <h3>Completa el formulario de contacto</h3>
        <div className="contactos">
          <div className="contacto">
            <form className="formulario">
              <fieldset>
                <legend>Informacion Personal</legend>
                <label for="nombre">Nombre</label>
                <input type="text" placeholder="Tu nombre" id="nombre" />
                <label for="email">E-mail</label>
                <input
                  type="email"
                  placeholder="Correo@correo.com"
                  id="email"
                />
                <label for="telefono">Telefono</label>
                <input
                  type="tel"
                  placeholder="+54 9 223 5131672"
                  id="telefono"
                />
                <label for="mensaje">Mensaje</label>
                <textarea
                  id="mensaje"
                  placeholder="Escribe tu mensaje"></textarea>
              </fieldset>
              <fieldset>
                <legend>
                  Informacion sobre la propiedad que desea consultar
                </legend>
                <label for="opciones">Vende o Compra</label>
                <select id="opciones">
                  <option value="" disabled selected>
                    -- Seleccione --
                  </option>
                  <option value="compra">Compra</option>
                  <option value="venta">Venta</option>
                </select>
                <label for="presupuesto">Precio o Presupuesto</label>
                <input
                  type="number"
                  placeholder="Tu precio o Presupuesto"
                  id="presupuesto"
                />
              </fieldset>

              <fieldset>
                <legend>Formas de Contacto</legend>
                <p>Como desea ser contactado?</p>
                <div className="forma-contacto">
                  <label for="contacto-telefono">Telefono</label>
                  <input
                    name="contacto"
                    type="radio"
                    value="telefono"
                    id="contacto-telefono"
                  />
                  <label for="contacto-mail">E-mail</label>
                  <input
                    name="contacto"
                    type="radio"
                    value="email"
                    id="contacto-mail"
                  />
                </div>
              </fieldset>
              <input
                type="submit"
                value="enviar"
                className="boton-verde"></input>
            </form>
          </div>
          <div className="datos">
            <h2>Otras vias de comunicaciones</h2>
            <p>
              Tambien puede contactarse con nosotros usando los siguientes
              medios
            </p>
            <ul>
              <li>whatsapp : +54 9 223 5131672</li>
              <li>Email : contacto@bienesraices.com.ar</li>
              <li>
                <div className="redes">
                  <i>
                    <FontAwesomeIcon icon={faFacebook} />
                  </i>
                  <i>
                    <FontAwesomeIcon icon={faXTwitter} />
                  </i>
                  <i>
                    <FontAwesomeIcon icon={faInstagram} />
                  </i>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};
export default ContactoPage2;
