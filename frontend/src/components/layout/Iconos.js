import iconoSeguridad from "../../assets/img/iconoSeguridad.svg";
import iconoPrecio from "../../assets/img/iconoPrecio.svg";
import iconoTiempo from "../../assets/img/iconoTiempo.svg";
import "../../styles/components/layout/Iconos.css";

const Iconos = (props) => {
  return (
    <div className="iconos-nosotros">
      <div className="icono">
        <img src={iconoSeguridad} alt="Icono Seguridad" />
        <h3>Seguridad</h3>
        <p>
          En Bienes Raices, la seguridad es nuestra prioridad. Nos aseguramos de
          que todas las transacciones se realicen de manera segura y
          transparente, protegiendo tanto a compradores como a vendedores.
          Utilizamos tecnología avanzada y seguimos estrictos protocolos para
          garantizar la confidencialidad y la integridad de la información.
        </p>
      </div>
      <div className="icono">
        <img src={iconoPrecio} alt="Icono Precios" />
        <h3>Precio</h3>
        <p>
          En Bienes Raices, ofrecemos los mejores precios del mercado. Nos
          comprometemos a brindar opciones accesibles y competitivas para todos
          nuestros clientes. Nuestro equipo trabaja arduamente para negociar y
          asegurar las mejores ofertas, garantizando que obtenga el máximo valor
          por su inversión.
        </p>
      </div>
      <div className="icono">
        <img src={iconoTiempo} alt="Icono a Tiempo" />
        <h3>A Tiempo</h3>
        <p>
          En Bienes Raices, entendemos la importancia del tiempo. Nos
          comprometemos a cumplir con los plazos acordados y a ofrecer un
          servicio eficiente y puntual. Nuestro equipo trabaja para asegurar que
          cada transacción se complete en el tiempo estipulado, sin comprometer
          la calidad del servicio.
        </p>
      </div>
    </div>
  );
};
export default Iconos;
