import HeaderPage from '../components/layout/HeaderPage';
import Footer from '../components/layout/Footer';
import Blogs from '../components/layout/Blogs';

const BlogPage = (props) => {
    return (
        <>
            <HeaderPage />
            <main class="contenedor seccion contenido-centrado">
                <h1 className=" text-uppercase">Nuestro Blog</h1>
                <Blogs />
            </main>
            <Footer />
        </>
    );
};
export default BlogPage;
