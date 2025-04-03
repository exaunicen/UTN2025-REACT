import { Link } from "react-router-dom";
import HeaderPage from "../components/layout/HeaderPage";
import Footer from "../components/layout/Footer";
import Blogs from "../components/layout/Blogs";
import blogTerraza from "../assets/img/blogTerraza.jpg";
import blogPileta from "../assets/img/blogBordePileta.jpg";
import terrazaDiseño from "../assets/img/destacadaTerrazaConDiseño.jpg";
import Dormitorio from "../assets/img/Dormitorio.jpg";

const BlogPage = (props) => {
  return (
    <>
      <HeaderPage />
      <main class="contenedor seccion contenido-centrado">
        <h2>Nuestro Blog</h2>

        <article class="entrada-blog">
          <div class="imagen borde">
            <img src={blogPileta} alt="Texto entrada de Blog" />
          </div>
          <div class="texto-entrada">
            <Link to="/blog">
              <h4>Guia para la decoracion de tu hogar</h4>
              <p class="info-meta">
                Escrito el: <span>20/10/2025</span> por: <span>Admin</span>
              </p>
              <p>
                Maximiza el espacio en tu hogar con esta guia, aprende a
                combinar muebles y colores para darle vida a tu espacio
              </p>
            </Link>
          </div>
        </article>
        <article class="entrada-blog">
          <div class="imagen borde">
            <img src={terrazaDiseño} alt="Texto entrada de Blog" />
          </div>
          <div class="texto-entrada">
            <Link to="/blog">
              <h4>Terraza en el techo de tu casa</h4>
              <p class="info-meta">
                Escrito el: <span>20/10/2025</span> por: <span>Admin</span>
              </p>
              <p>
                Consejos para construir una terraza en el techo de tu casa con
                los mejores materiales y ahorrando dinero
              </p>
            </Link>
          </div>
        </article>
        <article class="entrada-blog">
          <div class="imagen borde">
            <img src={Dormitorio} alt="Texto entrada de Blog" />
          </div>
          <div class="texto-entrada">
            <Link to="/blog">
              <h4>Guia para la decoracion de tu hogar</h4>
              <p class="info-meta">
                Escrito el: <span>20/10/2025</span> por: <span>Admin</span>
              </p>
              <p>
                Maximiza el espacio en tu hogar con esta guia, aprende a
                combinar muebles y colores para darle vida a tu espacio
              </p>
            </Link>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
};
export default BlogPage;
