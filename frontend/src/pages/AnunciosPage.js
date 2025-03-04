import HeaderPage from "../components/layout/HeaderPage";
import CardPage from "../components/layout/CardPage";
import Footer from "../components/layout/Footer";
import "../styles/components/pages/AnunciosPage.css";

const AnunciosPage = (props) => {
  return (
    <>
      <HeaderPage />
      <div className="contenedor">
        <CardPage />
      </div>
      <Footer />
    </>
  );
};
export default AnunciosPage;
