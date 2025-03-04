import NavBar from "../layout/NavBar";
import logo from "../../assets/img/logo.svg";
import "../../styles/components/layout/HeaderApp.css";

const HeaderPage = (props) => {
  return (
    <div>
      <header className="encabezado">
        <div className="contenedor">
          <div className="barra">
            <a href="./">
              <img src={logo} alt="Logo de Bienes Raices" />
            </a>
            <NavBar />
          </div>
        </div>
      </header>
    </div>
  );
};
export default HeaderPage;
