import HeaderPage from '../components/layout/HeaderPage';
import CardPage from '../components/layout/CardPage';
import Footer from '../components/layout/Footer';

const AnunciosPage = (props) => {
    return (
        <>
            <HeaderPage />
            <div className="contenedor">
                <h1>Propiedades Destacadas</h1>
                <CardPage />
            </div>
            <Footer />
        </>
    );
};
export default AnunciosPage;
