import NavBar from "./NavBar";
import "../../styles/components/layout/Footer.css";

const Footer = (props) => {
  return (
    <div className="pie seccion">
      <div className="contenedor contenido-pie">
        <NavBar />
      </div>
      <p>Creado por Jorge Albariño - Todos los derechos reservados © 2025</p>
    </div>
  );
};
export default Footer;
