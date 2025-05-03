import { Link } from 'react-router-dom';
import BlogsTop2 from '../components/layout/BlogsTop2';
import HeaderApp from '../components/layout/HeaderApp';
import Iconos from '../components/layout/Iconos';
import Cards from '../components/layout/Cards';
import Footer from '../components/layout/Footer';
/*import blogTerraza from "../assets/img/blogTerraza.jpg";*/

import '../styles/components/pages/HomePage.css';

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
                    Llena el formulario de contacto y un asesor se pondrá en
                    contacto contigo a la brevedad{' '}
                </p>
                <Link to="/contacto" className="boton boton-amarillo">
                    Contactanos
                </Link>
            </section>

            <div className="contenedor seccion-inferior">
                <section className="blog">
                    <h2>Nuestro Blog</h2>
                    <BlogsTop2 />
                </section>

                <section className="testimoniales">
                    <h2>Testimoniales</h2>
                    <div className="testimonial">
                        <blockquote>
                            El personal de Bienes Raices es muy profesional y
                            atento. Me ayudaron a encontrar la casa perfecta
                            para mi familia y supieron ver mis necesidades.
                            ¡Gracias!
                            <p>- Jorge Albariño</p>
                        </blockquote>
                    </div>
                </section>
            </div>
            <Footer />
        </div>
    );
};
export default HomePage;
