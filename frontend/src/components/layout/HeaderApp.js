import NavBar from "../layout/NavBar";
import logo from "../../assets/img/logo.svg";
import "../../styles/components/layout/HeaderApp.css";

const HeaderApp = (props) => {
  return (
    <div>
      <header className="encabezado inicio">
        <div className="contenedor">
          <div className="barra">
            <a href="./">
              <img src={logo} alt="Logo de Bienes Raices" />
            </a>
            <NavBar />
          </div>
          <h1 className="contenido-encabezado">
            Ventas y Alquileres de Casas, Cabañas y Campos
          </h1>
        </div>
      </header>
    </div>
  );
};
export default HeaderApp;
