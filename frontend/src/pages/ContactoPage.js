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

const ContactoPage = (props) => {
  return (
    <>
      <FontAwesomeIcon />
      <HeaderPage />
      <main class="contenedor seccion">
        <h2>Contacto</h2>
        <img
          className="img-contacto"
          src={terrazaDiseño}
          alt="Imagen de portada contacto"
        />
        <div className="contactos">
          <div className="contacto">
            <form className="formulario">
              <p>
                <label for="nombre">Nombre</label>
                <input
                  type="text"
                  name="nombre"
                  placeholder="Nombre y Apellido"
                />
              </p>
              <p>
                <label for="email">Email</label>
                <input
                  type="text"
                  name="email"
                  placeholder="Name@tucorreo.com"
                />
              </p>
              <p>
                <label for="telefono">Telefono</label>
                <input
                  type="text"
                  name="telefono"
                  placeholder="+54 9 223 5131672"
                />
              </p>
              <p>
                <label for="mensaje">Mensaje</label>
                <textarea name="mensaje" id="mensaje"></textarea>
              </p>
              <p>
                <input type="submit" value="Enviar" />
              </p>
            </form>
          </div>
          <div className="datos">
            <h2>Otras vias de comunicaciones</h2>
            <p>
              Tambien puede contactarse con nosotros usando los siguientes
              medios
            </p>
            <ul>
              <li>Telefono : +54 9 223 5131672</li>
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
export default ContactoPage;
