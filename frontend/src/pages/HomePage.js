import { Link } from "react-router-dom";
import HeaderApp from "../components/layout/HeaderApp";
import Iconos from "../components/layout/Iconos";
import Cards from "../components/layout/Cards";
import Footer from "../components/layout/Footer";
import blogTerraza from "../assets/img/blogTerraza.jpg";
import blogBordePileta from "../assets/img/blogBordePileta.jpg";

import "../styles/components/pages/HomePage.css";

const HomePage = () => {
  return (
    <div>
      <HeaderApp />

      <main className="contenedor">
        <h2>Mas Sobre Nosotros</h2>
        <Iconos />
      </main>

      <section className="contenedor">
        <h2>Propiedades Destacadas</h2>
        <Cards />
        <div className="row">
          <div className="col-12 d-flex justify-content-center align-items-center mt-4">
            <Link to="/anuncios" className="boton boton-verde">
              Ver todas
            </Link>
          </div>
        </div>
      </section>

      <section className="imagen-contacto">
        <h2>Encuentra la Casa de tus sueños</h2>
        <p>
          Llena el formulario de contacto y un asesor se pondrá en contacto
          contigo a la brevedad{" "}
        </p>
        <Link to="/contacto" className="boton boton-amarillo">
          Contactanos
        </Link>
      </section>

      <div className="contenedor seccion-inferior">
        <section className="blog">
          <h2>Nuestro Blog</h2>
          <article className="entrada-blog">
            <div className="imagen borde">
              <img src={blogTerraza} alt="Texto Entrada Blog" />
            </div>
            <div className="texto-entrada">
              <Link to="/blog">
                <h4>Terraza en el techo de tu casa</h4>
              </Link>
              <p className="info-meta">
                Escrito el: <span> 03/03/2025 </span> por <span> Admin </span>
              </p>
              <p>
                Consejos para construir una terraza en el techo de tu casa con
                los mejores materiales y ahorrando dinero
              </p>
            </div>
          </article>
          <article className="entrada-blog">
            <div className="imagen borde">
              <img src={blogBordePileta} alt="Texto Entrada Blog" />
            </div>
            <div className="texto-entrada">
              <Link to="/blog">
                <h4>Guia para la decoracion de tu Hogar</h4>
              </Link>
              <p className="info-meta">
                Escrito el: <span>03/03/2025 </span> por <span> Admin </span>
              </p>
              <p>
                Maximiza el espacio en tu hogar con esta guia, aprende a
                combinar muebles y colores para darle vida a tu espacio
              </p>
            </div>
          </article>
        </section>
        <section className="testimoniales">
          <h2>Testimoniales</h2>
          <div className="testimonial">
            <blockquote>
              El personal de Bienes Raices es muy profesional y atento. Me
              ayudaron a encontrar la casa perfecta para mi familia y supieron
              ver mis necesidades. ¡Gracias!
            </blockquote>
            <p>- Jorge Albariño</p>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};
export default HomePage;
