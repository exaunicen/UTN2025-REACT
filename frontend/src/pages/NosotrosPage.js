import HeaderPage from '../components/layout/HeaderPage';
import Iconos from '../components/layout/Iconos';
import nosotros from '../assets/img/nosotros.jpg';
import Footer from '../components/layout/Footer';
import '../styles/components/pages/NosotrosPage.css';

const NosotrosPage = (props) => {
    return (
        <>
            <HeaderPage />
            <main class="contenedor">
                <h1 className=" text-uppercase">Conoce sobre Nosotros</h1>
                <div class="contenido-nosotros">
                    <div class="imagen-nosotros borde">
                        <img src={nosotros} alt="Sobre Nosotros" />
                    </div>
                    <div class="texto-nosotros">
                        <blockquote>37 años de experiencia</blockquote>
                        <p>
                            Con más de tres décadas en el mercado, nuestra
                            empresa ha sido testigo de la evolución del sector
                            inmobiliario. Hemos ayudado a miles de familias a
                            encontrar el hogar de sus sueños y a innumerables
                            inversores a obtener las mejores propiedades.
                            Nuestro compromiso con la excelencia y la
                            satisfacción del cliente nos ha permitido
                            mantenernos a la vanguardia, adaptándonos a los
                            cambios y ofreciendo siempre un servicio de calidad.
                            La experiencia acumulada a lo largo de estos 37 años
                            nos ha convertido en líderes del sector, y seguimos
                            trabajando con la misma pasión y dedicación del
                            primer día.
                        </p>
                    </div>
                </div>
            </main>
            <section className="contenedor">
                <h2>Mas Sobre Nosotros</h2>
                <Iconos />
            </section>
            <Footer />
        </>
    );
};
export default NosotrosPage;
