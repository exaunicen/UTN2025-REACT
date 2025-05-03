import HeaderPage from '../components/layout/HeaderPage';
import CardAnuncio from '../components/layout/CardAnuncio';
import Footer from '../components/layout/Footer';

const Anuncio = (props) => {
    return (
        <>
            <HeaderPage />
            <div className="contenedor">
                <h1 className=" text-uppercase">Propiedades Destacadas</h1>
                <CardAnuncio />
            </div>
            <Footer />
        </>
    );
};
export default Anuncio;
